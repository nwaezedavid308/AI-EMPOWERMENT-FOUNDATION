import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, Target, Users, Globe, Play, Calendar } from 'lucide-react';

export default function Flagship() {
  const navigate = useNavigate();

  return (
    <div className="pt-24 min-h-screen">
      {/* Page Header */}
      <section className="section-pad bg-surface/30 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-xs font-bold tracking-[0.3em] text-secondary uppercase mb-8">Flagship Initiative</div>
          <h1 className="text-[clamp(44px,7vw,96px)] font-bold leading-[1.05] tracking-tighter mb-10 max-w-5xl">
            AI in <span className="text-primary italic font-medium">action now.</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl leading-relaxed font-light">
            The definitive platform for practical AI execution. Built for pioneers who move beyond the hype cycle to deliver scalable technical reality.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-[40vw] h-full bg-[radial-gradient(circle_at_70%_30%,var(--aief-color-secondary),transparent_70%)] opacity-[0.03] pointer-events-none" />
      </section>

      {/* About the Conference */}
      <section className="section-pad border-y border-outline/30">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/2">
              <span className="text-[120px] font-black leading-none opacity-10 select-none block mb-[-40px]">01</span>
              <h2 className="text-5xl font-bold mb-10 tracking-tighter italic text-foreground">Redefining the technical summit.</h2>
            </div>
            <div className="lg:w-1/2 border-l border-outline/30 lg:pl-20">
              <div className="space-y-10 text-foreground/80 leading-relaxed text-xl font-light">
                <p>
                  AI in Action Now is a catalyst for execution. The inaugural event brought together pioneers to bridge the gap between AI theory and industry application.
                </p>
                <p>
                  We are building an ecosystem where builders, founders, and professionals collaborate to solve real problems using autonomous agents, LLMs, and strategic automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-pad bg-surface/40">
        <div className="container-custom">
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Built for Builders, Non-Spectators.</h2>
            <p className="text-foreground/80">How we are redefining the AI event experience.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-px bg-outline/30 border border-outline/30 rounded-2xl overflow-hidden shadow-lg">
            <FeatureItem 
              num="01" 
              title="Execution-First Sessions" 
              desc="Workshops focused on implementation. You leave with tools and frameworks, not just inspiration." 
            />
            <FeatureItem 
              num="02" 
              title="Vetted Case Studies" 
              desc="Presentations drawn from actual production environments, highlighting both successes and lessons learned." 
            />
            <FeatureItem 
              num="03" 
              title="High-Density Networking" 
              desc="A curated room of engineering leaders and founders who are actively shipping products." 
            />
            <FeatureItem 
              num="04" 
              title="Strategic Outlook" 
              desc="Rooted in the African ecosystem while maintaining a rigorous global technical standard." 
            />
          </div>
        </div>
      </section>

      {/* Vision Cards */}
      <section className="section-pad">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-16">The Future of AI in Action</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <VisionCard 
              icon={<Calendar size={24} />} 
              title="Annual Summits" 
              desc="The gathering point for the ecosystem to align on the next chapter of AI execution." 
            />
            <VisionCard 
              icon={<Play size={24} />} 
              title="Digital Learning" 
              desc="Extending the conference's practical content through an on-demand technical platform." 
            />
            <VisionCard 
              icon={<Users size={24} />} 
              title="Builder Community" 
              desc="A continuous network connecting practitioners across the continent and beyond." 
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-pad bg-primary text-white text-center">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-8 italic text-white">Join the next cohort</h2>
          <p className="text-lg opacity-70 mb-12 max-w-2xl mx-auto font-light text-white/80 leading-relaxed">Partner with us or register your interest for the upcoming global event.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => navigate('/contact')} className="btn-secondary">Register interest</button>
            <button onClick={() => navigate('/contact')} className="px-8 py-3.5 text-sm font-semibold border border-white/20 rounded-pill hover:bg-white/10 transition-all text-white">Partner with us</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureItem({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <div className="p-10 lg:p-14 bg-background hover:bg-surface/50 transition-colors group">
      <div className="text-[10px] font-bold text-primary tracking-[0.3em] mb-6 uppercase">{num}</div>
      <h3 className="text-xl lg:text-2xl font-bold mb-4">{title}</h3>
      <p className="text-base text-foreground/80 leading-relaxed font-light">{desc}</p>
    </div>
  );
}

function VisionCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="card-base h-full border-outline/30 hover:border-primary/50 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 rounded-lg bg-surface border border-outline/20 text-primary flex items-center justify-center mb-8 shadow-sm">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-sm text-foreground/80 leading-relaxed font-light">{desc}</p>
    </div>
  );
}
