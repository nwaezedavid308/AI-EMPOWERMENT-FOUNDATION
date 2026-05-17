import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic2, Building, Compass, ArrowRight, ShieldCheck, Star } from 'lucide-react';

export default function Leadership() {
  const navigate = useNavigate();

  return (
    <div className="pt-24 min-h-screen">
      {/* Page Header */}
      <section className="section-pad bg-surface/30">
        <div className="container-custom">
          <div className="text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-6">Leadership & Advisory</div>
          <h1 className="text-[clamp(36px,6vw,72px)] font-bold leading-tight mb-8 max-w-4xl">
            AI Leadership <span className="text-primary italic">That Delivers.</span>
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl leading-relaxed">
            We work with organisations, leaders, and communities to drive meaningful AI adoption through strategic advisory and executive speaking.
          </p>
        </div>
      </section>

      <section className="section-pad border-y border-outline/30">
        <div className="container-custom text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Strategic Offerings</h2>
          <p className="text-foreground/80">Executive. Practical. Impact-Driven.</p>
        </div>
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <LeadershipCard 
              icon={<Mic2 size={24} />} 
              title="Speaking" 
              desc="Engaging keynotes and panels for conferences and corporate summits, grounded in real-world engineering experience." 
              link="/contact" 
              linkText="Book Engagement"
            />
            <LeadershipCard 
              icon={<Building size={24} />} 
              title="Workshops" 
              desc="Interactive sessions for teams focusing on AI strategy, implementation, and future-proofing your workforce." 
              link="/contact" 
              linkText="Request Workshop"
            />
            <LeadershipCard 
              icon={<Compass size={24} />} 
              title="Advisory" 
              desc="Direct strategic guidance for founders and executives navigating the complexities of AI adoption and scaling." 
              link="/contact" 
              linkText="Enquire About Advisory"
            />
          </div>
        </div>
      </section>

      {/* Why Debola */}
      <section className="section-pad bg-surface/20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 italic text-foreground">Credibility built on execution.</h2>
              <div className="space-y-6 text-foreground/90 leading-relaxed text-lg mb-10">
                <p>
                  The difference between a typical AI speaker and Debola is simple: she has built the systems she discusses. With 20+ years in technology and as the founder of CarbonAI, her insights are rooted in technical reality.
                </p>
                <p>
                  Her approach is executive, avoiding hype in favour of what actually works in a production environment. Direct, transparent, and focused on ROI.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="flex items-center gap-3">
                    <ShieldCheck size={18} className="text-primary font-bold" />
                    <span className="text-xs font-bold uppercase tracking-widest text-foreground/80">Vetted Experience</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <Star size={18} className="text-primary font-bold" />
                    <span className="text-xs font-bold uppercase tracking-widest text-foreground/80">Global Reach</span>
                 </div>
              </div>
            </div>
            <div className="founder-block aspect-[4/3] rounded-lg overflow-hidden flex flex-col justify-end p-10 bg-surface border border-outline/10 group">
                <div className="card-base bg-background/80 backdrop-blur-sm border-primary/20">
                    <div className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Speaker & Advisor</div>
                    <div className="text-2xl font-bold mb-1">Adebola Ibiyode</div>
                    <div className="text-xs text-foreground/40 font-medium">Founder, CarbonAI · AI Expert</div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-pad bg-primary text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-8 italic text-white">Let's build clarity.</h2>
          <p className="text-lg opacity-70 mb-12 max-w-2xl mx-auto font-light text-white/80 leading-relaxed">Speaking, workshops, or strategic advisory tailored to your organisation's unique goals.</p>
          <button onClick={() => navigate('/contact')} className="btn-secondary">Get in touch</button>
        </div>
      </section>
    </div>
  );
}

function LeadershipCard({ icon, title, desc, link, linkText }: { icon: React.ReactNode, title: string, desc: string, link: string, linkText: string }) {
  const navigate = useNavigate();
  return (
    <div className="card-base group flex flex-col h-full bg-background border-outline/30 hover:border-primary/50 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 rounded-lg bg-surface border border-outline/20 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-background transition-all">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-foreground">{title}</h3>
      <p className="text-sm text-foreground/80 leading-relaxed font-light mb-8 flex-grow">{desc}</p>
      <button 
        onClick={() => navigate(link)}
        className="text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 group-hover:text-primary transition-colors text-foreground/60"
      >
        {linkText} <ArrowRight size={14} />
      </button>
    </div>
  );
}
