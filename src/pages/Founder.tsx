import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Code, GraduationCap, Mic2, Globe } from 'lucide-react';

export default function Founder() {
  const navigate = useNavigate();

  return (
    <div className="pt-24 min-h-screen">
      {/* Page Header */}
      <section className="section-pad bg-surface/30">
        <div className="container-custom">
          <div className="text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-6">About the Founder</div>
          <h1 className="text-[clamp(36px,6vw,72px)] font-bold leading-tight mb-8 max-w-4xl">
            Built on <span className="text-primary italic">Real AI</span> Experience.
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl leading-relaxed">
            Adebola Ibiyode is an engineer, leader, and advisor dedicated to making AI practical for real-world impact.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-pad border-y border-outline/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="aspect-[4/5] bg-surface rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-outline/30">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop" 
                  alt="Adebola Ibiyode" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                />
              </div>
              <div className="absolute -bottom-8 -right-8 p-10 bg-primary text-white rounded-2xl shadow-2xl hidden md:block border border-white/10">
                 <div className="font-bold text-4xl mb-2 text-white">20+</div>
                 <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Years in Tech</div>
              </div>
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase mb-8 block">Founder's Vision</span>
              <h2 className="text-5xl font-bold mb-10 tracking-tighter italic leading-tight text-foreground">Engineering leadership meets strategic vision.</h2>
              <div className="space-y-8 text-foreground/80 leading-relaxed text-xl font-light">
                <p>
                  Debola merges technical mastery with over two decades of engineering leadership. As the founder of CarbonAI, she has built scalable AI systems that solve complex challenges.
                </p>
                <p>
                  Through the AI Empowerment Foundation, she is committed to guiding the next generation of builders. Her approach is executive, practical, and grounded in the belief that AI should be a tool for economic advancement.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-16">
                <button onClick={() => navigate('/leadership')} className="btn-primary">Book to Speak</button>
                <button onClick={() => navigate('/contact')} className="btn-outline">Get in Touch</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="section-pad bg-surface/20">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Credibility built on execution</h2>
            <p className="text-foreground/50 italic">A journey of building, leading, and empowering.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            <CredibilityItem icon={<Briefcase size={24} />} title="AI Founder" />
            <CredibilityItem icon={<Code size={24} />} title="Engineer" />
            <CredibilityItem icon={<GraduationCap size={24} />} title="Mentor" />
            <CredibilityItem icon={<Mic2 size={24} />} title="Speaker" />
            <CredibilityItem icon={<Globe size={24} />} title="Advisor" />
          </div>

          <div className="mt-20 grid md:grid-cols-2 gap-8">
            <div className="card-base border-outline/30 shadow-sm">
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">CarbonAI</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Founded to drive climate tech innovation through carbon intelligence. CarbonAI represents the intersection of technical excellence and meaningful purpose.
              </p>
            </div>
            <div className="card-base border-secondary/50 shadow-md">
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">African AI Voice</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                A strong advocate for AI empowerment across the continent, driving the narrative that Africa's builders are ready to lead the global AI chapter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-pad bg-primary text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-8 text-white">Work with Debola</h2>
          <p className="text-lg opacity-70 mb-12 max-w-2xl mx-auto italic leading-relaxed text-white/80">Executive advisory, speaking engagements, and mentorship grounded in real-world AI building.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => navigate('/leadership')} className="btn-secondary">Speaking & advisory</button>
            <button onClick={() => navigate('/mentorship')} className="px-8 py-3.5 text-sm font-semibold border border-white/20 rounded-pill hover:bg-white/10 transition-all text-white">Mentorship</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function CredibilityItem({ icon, title }: { icon: React.ReactNode, title: string }) {
  return (
    <div className="flex flex-col items-center gap-4 group">
      <div className="w-14 h-14 rounded-full bg-surface border border-outline/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all">
        {icon}
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest">{title}</span>
    </div>
  );
}
