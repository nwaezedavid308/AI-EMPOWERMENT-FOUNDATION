import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users2, Target, Lightbulb, Ship, ArrowRight, GraduationCap } from 'lucide-react';

export default function Mentorship() {
  const navigate = useNavigate();

  return (
    <div className="pt-24 min-h-screen">
      {/* Page Header */}
      <section className="section-pad bg-surface/30">
        <div className="container-custom">
          <div className="text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-6">Mentorship Programme</div>
          <h1 className="text-[clamp(36px,6vw,72px)] font-bold leading-tight mb-8 max-w-4xl">
            From <span className="text-primary italic">Learning AI</span> to Using AI.
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl leading-relaxed">
            Personalised guidance from those who have actually built, shipped, and scaled AI products. We move beyond theory into strategic application.
          </p>
        </div>
      </section>

      <section className="section-pad border-y border-outline/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 italic text-foreground">Mentorship grounded in technical reality.</h2>
              <p className="text-foreground/90 leading-relaxed mb-10 text-lg">
                The best way to master AI is through the lens of those who have navigated its complexities. Our mentors are engineers, founders, and product practitioners who provide the clarity needed to transition into AI leadership or technical roles.
              </p>
              <div className="space-y-6">
                 <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-1">
                       <ArrowRight size={14} />
                    </div>
                    <div>
                       <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Who It's For</h4>
                       <p className="text-sm text-foreground/80">Professionals, founders, and builders transitioning into AI or looking to deepen their strategic AI leadership.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-1">
                       <ArrowRight size={14} />
                    </div>
                    <div>
                       <h4 className="font-bold text-sm uppercase tracking-widest mb-1">What Result to Expect</h4>
                       <p className="text-sm text-foreground/80">Personalised frameworks for career growth, product thinking, and a direct line to a network of global AI practitioners.</p>
                    </div>
                 </div>
              </div>
              <button onClick={() => navigate('/contact')} className="btn-primary mt-12">Apply to the Programme</button>
            </div>
            <div className="relative">
               <div className="aspect-video bg-surface border border-outline/30 rounded-2xl flex items-center justify-center p-12 shadow-sm">
                  <div className="space-y-8 text-center">
                     <GraduationCap size={48} className="mx-auto text-primary opacity-60" />
                     <p className="text-2xl font-bold italic text-foreground/60">"Guided by Builders."</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-pad bg-surface/20">
        <div className="container-custom">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Core Programme Pillars</h2>
            <p className="text-foreground/80">Comprehensive guidance across the AI lifecycle.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <MentorshipCard 
              icon={<Ship size={24} />} 
              title="Career Transformation" 
              desc="Structured pathways for moving from technical or business roles into high-impact AI positions." 
            />
            <MentorshipCard 
              icon={<Target size={24} />} 
              title="Product Thinking" 
              desc="Framing problems for AI solutions, building MVPs, and understanding the user-centricity of automation." 
            />
            <MentorshipCard 
              icon={<Users2 size={24} />} 
              title="Direct Access" 
              desc="One-on-one sessions with practitioners who have built AI systems that solve real global challenges." 
            />
            <MentorshipCard 
              icon={<Lightbulb size={24} />} 
              title="Market Reality" 
              desc="Learning the difference between academic AI and what actually works in a production environment." 
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-pad bg-primary text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-8 italic text-white">Ready to bridge the gap?</h2>
          <p className="text-lg opacity-70 mb-12 max-w-2xl mx-auto font-light text-white/80 leading-relaxed">Join a cohort of builders committed to mastering the next chapter of technology.</p>
          <button onClick={() => navigate('/contact')} className="btn-secondary">Join programme</button>
        </div>
      </section>
    </div>
  );
}

function MentorshipCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="card-base h-full flex flex-col items-start text-left border-outline/30 hover:border-primary/50 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 rounded-lg bg-surface border border-outline/20 text-primary flex items-center justify-center mb-8">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-foreground">{title}</h3>
      <p className="text-sm text-foreground/80 leading-relaxed font-light">{desc}</p>
    </div>
  );
}
