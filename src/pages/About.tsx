import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Eye, BookOpen, ShieldCheck, Trophy, Lightbulb, Globe } from 'lucide-react';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="pt-24 min-h-screen">
      {/* Page Header */}
      <section className="section-pad bg-surface/30 relative overflow-hidden pt-40">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-bold tracking-[0.3em] text-secondary uppercase mb-8">About the Foundation</div>
              <h1 className="text-[clamp(44px,7vw,96px)] font-bold leading-[1.05] tracking-tighter mb-10">
                Building the future<br />through <span className="text-primary italic">practical empowerment.</span>
              </h1>
              <p className="text-xl text-foreground/80 max-w-2xl leading-relaxed font-light">
                We bridge the gap between AI complexity and practical application. Rooted in technical excellence and led by experienced builders.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-outline/30 group">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
                alt="Community Collaboration" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="section-pad border-y border-outline/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 italic text-foreground">AI creates opportunity, not confusion.</h2>
              <p className="text-foreground/90 leading-relaxed mb-10 text-lg">
                The Foundation exists to move individuals and organisations beyond theory. We believe Africa's builders have a critical role in the global AI revolution, and we provide the platform to make that potential a reality.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-primary text-background flex items-center justify-center">
                    <Target size={20} />
                  </div>
                  <h4 className="font-bold uppercase tracking-widest text-xs">Mission</h4>
                  <p className="text-sm text-foreground/80 leading-relaxed">To empower individuals with practical AI knowledge that drives real-world economic impact.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-primary text-background flex items-center justify-center">
                    <Eye size={20} />
                  </div>
                  <h4 className="font-bold uppercase tracking-widest text-xs">Vision</h4>
                  <p className="text-sm text-foreground/80 leading-relaxed">A world where AI is accessible and used to create meaningful value across communities.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-surface border border-outline/30 rounded-2xl overflow-hidden flex items-center justify-center p-12 shadow-inner">
                 <div className="w-full text-center space-y-6">
                    <div className="text-6xl font-bold text-primary opacity-30 italic">AIEF</div>
                    <div className="h-px bg-outline/30 w-32 mx-auto" />
                    <p className="text-sm text-foreground/60 font-medium uppercase tracking-[0.3em]">Knowledge · Access · Leadership</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-pad bg-surface/20">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Core Focus Areas</h2>
            <p className="text-foreground/50">The pillars of our movement toward AI excellence.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FocusCard 
              icon={<BookOpen size={24} />} 
              title="Execution-Led Education" 
              desc="Practical learnings grounded in real-world application — shifting focus from certification to outcome." 
            />
            <FocusCard 
              icon={<ShieldCheck size={24} />} 
              title="Inclusive Access" 
              desc="Breaking down barriers to ensure AI knowledge reaches builders and founders regardless of their starting point." 
            />
            <FocusCard 
              icon={<Trophy size={24} />} 
              title="Global Leadership" 
              desc="Developing the next generation of AI leaders across Africa and the global stage." 
            />
            <FocusCard 
              icon={<Lightbulb size={24} />} 
              title="Strategic Innovation" 
              desc="Creating spaces where new AI-driven products and solutions can emerge, scale, and deliver value." 
            />
            <FocusCard 
              icon={<Globe size={24} />} 
              title="Africa at the Center" 
              desc="Driven by the belief that the continent's talent can lead the next chapter of AI innovation globally." 
            />
            <div className="flex items-center justify-center p-8 bg-primary rounded-lg text-background text-center">
               <div>
                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Community Grown</h3>
                  <p className="text-sm opacity-70 italic font-light">"Strength through collaboration."</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-pad bg-primary text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-8 text-white">Join the movement</h2>
          <p className="text-lg opacity-70 mb-12 max-w-2xl mx-auto italic leading-relaxed text-white/80">Whether you are a builder, leader, or organisation, there is a place for you in our ecosystem of AI empowerment.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => navigate('/get-involved')} className="btn-secondary">Get involved</button>
            <button onClick={() => navigate('/initiatives')} className="px-8 py-3.5 text-sm font-semibold border border-white/20 rounded-pill hover:bg-white/10 transition-all text-white">Our initiatives</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function FocusCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="card-base group h-full border-outline/30 hover:border-primary/50 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 rounded-lg bg-surface border border-outline/20 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-background transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-sm text-foreground/80 leading-relaxed font-light">{desc}</p>
    </div>
  );
}
