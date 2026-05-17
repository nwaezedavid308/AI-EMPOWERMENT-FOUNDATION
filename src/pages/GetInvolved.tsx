import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Handshake, Banknote, UserPlus, Globe2, ArrowRight } from 'lucide-react';

export default function GetInvolved() {
  const navigate = useNavigate();

  return (
    <div className="pt-24 min-h-screen">
      {/* Page Header */}
      <section className="section-pad bg-surface/30">
        <div className="container-custom">
          <div className="text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-6">Engagement</div>
          <h1 className="text-[clamp(36px,6vw,72px)] font-bold leading-tight mb-8 max-w-4xl lowercase first-letter:uppercase">
            Be part of <span className="text-primary italic">the movement.</span>
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl leading-relaxed">
            There are many ways to support, collaborate, and contribute to our mission of practical AI empowerment. Join a global community of practitioners.
          </p>
        </div>
      </section>

      {/* Pathways */}
      <section className="section-pad border-y border-outline/10">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 italic text-primary">Find your role in the ecosystem.</h2>
            <p className="text-foreground/50">Engagement models designed for builders, leaders, and organisations.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <InvolveCard 
              icon={<Handshake size={24} />} 
              title="Strategic Partnership" 
              desc="Organisations who share our values can partner with us to co-create initiatives, events, and programmes that drive real-world AI empowerment." 
            />
            <InvolveCard 
              icon={<Banknote size={24} />} 
              title="Sponsorship" 
              desc="Support our flagship initiatives like AI in Action Now or the Mentorship Programme, gaining visibility within a high-density AI ecosystem." 
            />
            <InvolveCard 
              icon={<UserPlus size={24} />} 
              title="Volunteerism" 
              desc="Contribute your technical or operational expertise—from event orchestration to content creation and programme delivery." 
            />
            <InvolveCard 
              icon={<Globe2 size={24} />} 
              title="Join the Community" 
              desc="Become part of a network of builders committed to turning AI into real impact across Africa and the global stage." 
            />
          </div>
        </div>
      </section>

      {/* Manifesto/Philosphy */}
      <section className="section-pad bg-surface/20">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-8">More Than a Foundation</h2>
          <p className="text-lg text-foreground/50 max-w-2xl mx-auto leading-relaxed italic">
            This is a platform for technical excellence. A founder-led movement. A credibility extension of real-world AI authority. We value execution over theory and impact over hype.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-pad bg-primary text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-8 italic text-white">Join us today.</h2>
          <p className="text-lg opacity-70 mb-12 max-w-2xl mx-auto font-light text-white/80 leading-relaxed">Reach out and explore how your skills or resources can accelerate our collective impact.</p>
          <button onClick={() => navigate('/contact')} className="btn-secondary">Get in touch</button>
        </div>
      </section>
    </div>
  );
}

function InvolveCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  const navigate = useNavigate();
  return (
    <div className="card-base group h-full flex flex-col items-start bg-background hover:bg-surface/50 transition-all border-l-2 border-l-outline/20 hover:border-l-primary">
      <div className="w-12 h-12 rounded-lg bg-surface border border-outline/10 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-background transition-all">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-sm text-foreground/50 leading-relaxed font-light mb-8 flex-grow">{desc}</p>
      <button onClick={() => navigate('/contact')} className="text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 group-hover:text-primary transition-colors">
        Enquire <ArrowRight size={14} />
      </button>
    </div>
  );
}
