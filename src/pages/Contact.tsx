import React from 'react';
import { Mail, Globe, Mic2, MapPin, Linkedin, Youtube, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Page Header */}
      <section className="section-pad bg-surface/30">
        <div className="container-custom">
          <div className="text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-6">Contact</div>
          <h1 className="text-[clamp(36px,6vw,72px)] font-bold leading-tight mb-8 max-w-4xl lowercase first-letter:uppercase">
            Let's <span className="text-primary italic">connect.</span>
          </h1>
          <p className="text-lg text-foreground/60 max-w-2xl leading-relaxed">
            Whether you want to partner, sponsor, or book Adebola to speak — we welcome meaningful collaboration.
          </p>
        </div>
      </section>

      <section className="section-pad border-y border-outline/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-10 italic">Send a Message</h2>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-8">
                   <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Full Name</label>
                      <input type="text" className="w-full bg-surface border-b border-outline/20 p-3 focus:border-primary outline-none transition-all text-sm" placeholder="Your name" />
                   </div>
                   <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Email Address</label>
                      <input type="email" className="w-full bg-surface border-b border-outline/20 p-3 focus:border-primary outline-none transition-all text-sm" placeholder="hello@organisation.com" />
                   </div>
                </div>

                <div className="space-y-3">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Area of Interest</label>
                   <select className="w-full bg-surface border-b border-outline/20 p-3 focus:border-primary outline-none transition-all text-sm appearance-none">
                      <option>Strategic Partnership</option>
                      <option>Event Sponsorship</option>
                      <option>Speaking Engagement</option>
                      <option>Mentorship Programme</option>
                      <option>General Enquiry</option>
                   </select>
                </div>

                <div className="space-y-3">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Message</label>
                   <textarea className="w-full bg-surface border-b border-outline/20 p-3 focus:border-primary outline-none transition-all text-sm min-h-[150px] resize-none" placeholder="Describe your interest or proposal..." />
                </div>

                <button className="btn-primary w-full sm:w-auto">Submit Inquiry</button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-16">
              <div>
                <h2 className="text-3xl font-bold mb-10 italic">Engagement Channels</h2>
                <div className="space-y-8">
                  <ContactItem icon={<Mail size={18} />} label="General Inquiry" val="hello@aiempowermentfoundation.org" />
                  <ContactItem icon={<Globe size={18} />} label="Founder Site" val="debolaibiyode.com" />
                  <ContactItem icon={<Mic2 size={18} />} label="Conference" val="aiinactionnow.com" />
                  <ContactItem icon={<MapPin size={18} />} label="Headquarters" val="Lagos, Nigeria · Global Operations" />
                </div>
              </div>

              <div>
                <h2 className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-6">Social Context</h2>
                <div className="flex flex-wrap gap-4">
                   <SocialLink icon={<Linkedin size={16} />} text="LinkedIn" />
                   <SocialLink icon={<Twitter size={16} />} text="Twitter" />
                   <SocialLink icon={<Youtube size={16} />} text="YouTube" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactItem({ icon, label, val }: { icon: React.ReactNode, label: string, val: string }) {
  return (
    <div className="flex items-start gap-5 group">
      <div className="w-10 h-10 rounded-lg bg-surface border border-outline/10 text-primary flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-1">{label}</div>
        <div className="text-sm font-semibold">{val}</div>
      </div>
    </div>
  );
}

function SocialLink({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-outline/10 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-background transition-all cursor-pointer">
      {icon}
      <span>{text}</span>
    </div>
  );
}
