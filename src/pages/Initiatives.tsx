import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lightbulb, Users, Building2, ArrowRight } from 'lucide-react';

export default function Initiatives() {
  const navigate = useNavigate();

  return (
    <div className="pt-24 min-h-screen">
      {/* Page Header */}
      <section className="section-pad bg-surface/30 pt-40">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-6">Our initiatives</div>
              <h1 className="text-[clamp(36px,6vw,72px)] font-bold leading-tight mb-8 lowercase first-letter:uppercase">
                Turning AI <span className="text-primary italic">into action.</span>
              </h1>
              <p className="text-lg text-foreground/80 max-w-2xl leading-relaxed">
                We build the platforms where knowledge meets execution. Our initiatives are designed to create real impact for builders, professionals, and organisations.
              </p>
            </div>
            <div className="relative aspect-[16/10] bg-primary overflow-hidden rounded-2xl shadow-xl border border-outline/30 group">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                alt="AI Strategy Collaboration"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Initiative */}
      <section className="section-pad border-y border-outline/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-pill bg-primary text-background text-[10px] font-bold uppercase tracking-widest mb-6">Flagship Event</div>
              <h2 className="text-4xl font-bold mb-6">AI in Action Now</h2>
              <p className="text-foreground/90 leading-relaxed mb-8 text-lg">
                A practical conference dedicated to real-world AI application. No fluff, no buzzwords — just execution. We bring together pioneers to share use cases that work.
              </p>
              <div className="space-y-4 mb-10">
                <ListItem text="Hands-on workshop sessions" />
                <ListItem text="Real-world case studies" />
                <ListItem text="Network of AI practitioners" />
              </div>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => navigate('/flagship')} className="btn-primary">Explore Conference</button>
                <button onClick={() => navigate('/contact')} className="btn-outline">Register Interest</button>
              </div>
            </div>
            <div className="relative group">
               <div className="aspect-video bg-primary overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=800&auto=format&fit=crop" 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                    alt="Conference"
                  />
               </div>
               <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-secondary rounded-tr-xl pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Other Initiatives - Bento Grid Inspired */}
      <section className="section-pad bg-surface/40">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="card-base flex flex-col items-start h-full border-outline/30 hover:border-primary/50 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary text-background flex items-center justify-center mb-8">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Mentorship Programme</h3>
              <p className="text-foreground/80 leading-relaxed mb-8 flex-grow">
                Guiding individuals through career transitions into AI. Get direct access to experienced builders who have built and scaled AI products.
              </p>
              <button onClick={() => navigate('/mentorship')} className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-secondary transition-colors group">
                Apply Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="card-base flex flex-col items-start h-full border-outline/30 hover:border-primary/50 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary text-background flex items-center justify-center mb-8">
                <Building2 size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Leadership & Advisory</h3>
              <p className="text-foreground/80 leading-relaxed mb-8 flex-grow">
                Supporting organisations in adopting AI effectively. Executive-level guidance grounded in technical execution and market reality.
              </p>
              <button onClick={() => navigate('/leadership')} className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-secondary transition-colors group">
                Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-pad bg-primary text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-8 italic text-white">Ready to engage?</h2>
          <p className="text-lg opacity-70 mb-12 max-w-2xl mx-auto font-light text-white/80 leading-relaxed">Join one of our active initiatives or partner with us to launch something new.</p>
          <button onClick={() => navigate('/get-involved')} className="btn-secondary">Partner with us</button>
        </div>
      </section>
    </div>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
      <span className="text-sm font-medium text-foreground/80 lowercase first-letter:uppercase">{text}</span>
    </div>
  );
}
