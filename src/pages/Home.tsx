import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Users, GraduationCap, Building2, Mic2, Sparkles, ShieldCheck } from 'lucide-react';

function Typewriter({ text = "", speed = 40, onComplete }: { text: string, speed?: number, onComplete?: () => void }) {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    if (!text) {
      onComplete?.();
      return;
    }
    let index = 0;
    setDisplayedText("");
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
        onComplete?.();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]); // Removed onComplete from dependencies to avoid re-runs if parent re-renders

  return <span>{displayedText}</span>;
}

export default function Home() {
  const navigate = useNavigate();
  const [msgStep, setMsgStep] = useState(0);
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [isTypingDone, setIsTypingDone] = useState(false);

  const messages = [
    { text: "AI is changing", highlighted: "how the world works." },
    { text: "But too many people are still stuck at the level of", highlighted: "buzzwords, fear, and confusion." },
    { text: "", highlighted: "We are closing that gap." },
    { text: "The Adebola Ibiyode Empowerment foundation creates", highlighted: "practical platforms", suffix: "where people can learn, connect, build, and understand how AI can be", highlighted2: "used in real life." }
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTypingDone && msgStep < messages.length - 1) {
      timer = setTimeout(() => {
        setIsTypingDone(false);
        setMsgStep(prev => prev + 1);
      }, 2000);
    } else if (isTypingDone && msgStep === messages.length - 1) {
      timer = setTimeout(() => {
        setIsIntroComplete(true);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isTypingDone, msgStep, messages.length]);

  if (!isIntroComplete && msgStep < messages.length) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background px-6 overflow-hidden">
        <div className="container-custom max-w-5xl text-center relative z-10">
          <motion.div
            key={msgStep}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center gap-6"
          >
            <h2 className="text-[clamp(28px,4.5vw,52px)] font-medium leading-tight tracking-tight text-foreground flex flex-wrap justify-center items-center gap-x-4 gap-y-6">
              {messages[msgStep].text && (
                <span className="font-sans">
                  <Typewriter text={messages[msgStep].text} onComplete={() => !messages[msgStep].highlighted && setIsTypingDone(true)} />
                </span>
              )}
              {messages[msgStep].highlighted && (
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (messages[msgStep].text?.length || 0) * 0.04 + 0.2 }}
                  className="bg-navy-900 text-white px-8 py-3 rounded-[24px] inline-block font-semibold shadow-lg"
                  onAnimationComplete={() => !messages[msgStep].suffix && setIsTypingDone(true)}
                >
                  {messages[msgStep].highlighted}
                </motion.span>
              )}
              {messages[msgStep].suffix && (
                <span className="font-sans">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: (messages[msgStep].text?.length || 0) * 0.04 + (messages[msgStep].highlighted?.length || 0) * 0.05 + 0.5 }}
                  >
                   <Typewriter 
                      text={messages[msgStep].suffix} 
                      speed={30}
                      onComplete={() => !messages[msgStep].highlighted2 && setIsTypingDone(true)} 
                    />
                  </motion.span>
                </span>
              )}
              {messages[msgStep].highlighted2 && (
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 5 }} // Hardcoded delay for simplicity in this complex line
                  className="bg-navy-900 text-white px-8 py-3 rounded-[24px] inline-block font-semibold shadow-lg"
                  onAnimationComplete={() => setIsTypingDone(true)}
                >
                  {messages[msgStep].highlighted2}
                </motion.span>
              )}
            </h2>
          </motion.div>
        </div>
        
        {/* Progress Timeline */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-4 w-full max-w-xs px-6">
          {messages.map((_, i) => (
            <div 
              key={i} 
              className="h-1 flex-1 relative bg-primary/10 rounded-full overflow-hidden"
            >
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: i === msgStep ? "100%" : i < msgStep ? "100%" : "0%" }}
                transition={{ duration: i === msgStep ? 4.5 : 0.5, ease: "linear" }}
                className="absolute inset-0 bg-primary h-full"
              />
            </div>
          ))}
        </div>

        {/* Subtle Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
          <span className="text-[25vw] font-black tracking-tighter">AIEF</span>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen"
    >
      {/* Main Impact Hero Section */}
      <section className="section-pad min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-surface/20 border-b border-outline/10 pt-32">
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill bg-background border border-outline/30 mb-12 shadow-sm"
          >
            <Sparkles size={14} className="text-secondary animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/70">Founded in technical excellence</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[clamp(44px,9vw,110px)] font-bold leading-[0.95] tracking-tighter mb-12 lowercase first-letter:uppercase text-foreground"
          >
            AI for real impact.<br />
            <span className="text-foreground/30 italic font-medium">Not just hyperbole.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-[clamp(18px,2.5vw,26px)] leading-relaxed max-w-[850px] mx-auto text-foreground/80 mb-16 font-light"
          >
            We bridge the gap between AI complexity and practical application. Rooted in engineering, led by builders.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8"
          >
            <button onClick={() => navigate('/initiatives')} className="btn-primary group flex items-center gap-6 px-12 py-5 text-lg">
              Explore our work <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button onClick={() => navigate('/get-involved')} className="btn-outline px-12 py-5 text-lg">
              Join the movement
            </button>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section - Bento Grid Layout */}
      <section className="section-pad bg-background relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-secondary mb-4 block">Our DNA</span>
            <h2 className="text-[clamp(32px,5vw,64px)] font-bold tracking-tighter leading-none text-foreground">A foundation built on technical choice.</h2>
          </div>

          <div className="bento-grid lg:grid-cols-3 lg:grid-rows-2">
            {/* Philosophy - Main Card */}
            <div className="lg:col-span-2 lg:row-span-2 bento-item bg-primary text-white border-none p-10 lg:p-16 flex flex-col justify-between group">
              <div>
                <div className="text-secondary font-bold text-xs tracking-widest uppercase mb-12">Philosophy</div>
                <h3 className="text-3xl lg:text-5xl font-bold mb-8 leading-tight tracking-tight text-white group-hover:scale-[1.01] transition-transform origin-left duration-500">
                  AI must move beyond hype and deliver real value.
                </h3>
              </div>
              <p className="text-white/90 text-xl lg:text-2xl leading-relaxed font-light italic max-w-2xl">
                "The foundation exists to move individuals and organisations beyond theory. We believe Africa's builders have a critical role in the global AI revolution."
              </p>
              <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                <Sparkles size={120} />
              </div>
            </div>

            {/* Values Card */}
            <div className="bento-item border-outline/30 bg-surface flex flex-col p-10">
              <div className="mb-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <ShieldCheck size={24} className="text-primary font-bold" />
                </div>
                <div className="text-secondary font-bold text-[10px] tracking-[0.3em] uppercase mb-4">Values</div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">Community protection</h4>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  Fostering growth in a safe, collaborative environment where knowledge is shared freely but the mission remains protected.
                </p>
              </div>
            </div>

            {/* Outcome Card */}
            <div className="bento-item border-outline/30 bg-surface flex flex-col p-10">
              <div className="mb-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Sparkles size={24} className="text-primary font-bold" />
                </div>
                <div className="text-secondary font-bold text-[10px] tracking-[0.3em] uppercase mb-4">Outcome</div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">Practical growth</h4>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  Shifting focus from theory to real-world application. We measure success by the builders we empower and the solutions they ship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Initiatives Visual */}
      <section className="section-pad bg-background">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24 border-b border-outline/20 pb-16">
            <div className="max-w-3xl">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-secondary mb-6 block">Execution platforms</span>
              <h2 className="text-[clamp(40px,5vw,72px)] font-bold tracking-tighter leading-none">Turning ideas into practical outcomes.</h2>
            </div>
            <button onClick={() => navigate('/initiatives')} className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest pb-3 border-b-2 border-secondary overflow-hidden">
              <span className="group-hover:-translate-y-full transition-transform duration-300 block font-sans">All initiatives</span>
              <span className="absolute translate-y-full group-hover:translate-y-0 transition-transform duration-300 block font-sans">All initiatives</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="bento-grid lg:grid-cols-3">
            <ModernInitiative icon={<Mic2 size={24} />} title="AI in Action Now" desc="The flagship conference focused on execution-led knowledge sharing." link="/flagship" />
            <ModernInitiative icon={<GraduationCap size={24} />} title="Mentorship" desc="Guided by real builders to navigate career transitions into AI." link="/mentorship" bg="bg-surface" />
            <ModernInitiative icon={<Building2 size={24} />} title="Leadership Advisory" desc="Strategic guidance for organisations pioneering AI adoption." link="/leadership" />
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-pad bg-background border-t border-outline/20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="aspect-[4/5] bg-surface rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-outline/20">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop" 
                  alt="Adebola Ibiyode" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 p-10 bg-primary text-white rounded-2xl shadow-2xl hidden lg:block border border-white/10">
                 <div className="font-bold text-4xl mb-2 text-white">20+</div>
                 <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Years Expertise</div>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase mb-8">Letter from the Founder</div>
              <h2 className="text-6xl font-bold mb-10 tracking-tighter text-foreground">Adebola Ibiyode</h2>
              <p className="text-2xl text-foreground/70 mb-12 leading-relaxed italic font-light">
                "We provide the clarity needed to transition into AI leadership. Rooted in Africa, built for the world."
              </p>
              <button onClick={() => navigate('/founder')} className="btn-outline">
                Foundation Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-primary text-white text-center">
        <div className="container-custom">
          <h2 className="text-6xl md:text-8xl font-bold mb-10 tracking-tighter">Join the movement</h2>
          <p className="text-xl opacity-70 mb-16 max-w-2xl mx-auto font-light leading-relaxed">Whether you are a builder, leader, or organisation, there is a place for you in our ecosystem.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button onClick={() => navigate('/get-involved')} className="btn-secondary px-12 text-lg">Partner with us</button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function ModernInitiative({ icon, title, desc, link, bg="bg-background" }: { icon: React.ReactNode, title: string, desc: string, link: string, bg?: string }) {
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate(link)}
      className={`p-10 lg:p-14 cursor-pointer flex flex-col items-start border border-outline/30 rounded-2xl transition-all duration-300 ${bg} hover:border-primary hover:shadow-xl hover:-translate-y-1 group`}
    >
      <div className="p-4 rounded-xl bg-primary text-white mb-10 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight">{title}</h3>
      <p className="text-base lg:text-lg text-foreground/80 leading-relaxed mb-12 flex-grow font-light">
        {desc}
      </p>
      <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase border-b-2 border-primary/20 pb-1 group-hover:border-primary transition-colors">
        Learn More <ArrowRight size={14} />
      </div>
    </div>
  );
}

