import React from 'react';
import { Link } from 'react-router-dom';
import { LogoMark } from './LogoShapes';
import { Linkedin, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline/30 pt-20 pb-10 px-[4%] relative z-10 transition-colors">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <LogoMark />
              <div className="text-foreground text-[10px] font-bold uppercase tracking-[0.2em] leading-tight">
                AI Empowerment<br />Foundation
              </div>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed max-w-[280px] italic font-medium">
              Turning technical AI expertise into strategic economic impact across the continent.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-foreground/60 tracking-[0.3em] uppercase mb-8">Ecosystem</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/" className="text-foreground/80 text-[13px] hover:text-primary transition-colors font-medium">Home</Link></li>
              <li><Link to="/about" className="text-foreground/80 text-[13px] hover:text-primary transition-colors font-medium">Foundation</Link></li>
              <li><Link to="/founder" className="text-foreground/80 text-[13px] hover:text-primary transition-colors font-medium">Founder</Link></li>
              <li><Link to="/contact" className="text-foreground/80 text-[13px] hover:text-primary transition-colors font-medium">Connect</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-foreground/60 tracking-[0.3em] uppercase mb-8">Initiatives</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/flagship" className="text-foreground/80 text-[13px] hover:text-primary transition-colors font-medium">AI in Action Now</Link></li>
              <li><Link to="/mentorship" className="text-foreground/80 text-[13px] hover:text-primary transition-colors font-medium">Mentorship</Link></li>
              <li><Link to="/leadership" className="text-foreground/80 text-[13px] hover:text-primary transition-colors font-medium">Advisory</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-foreground/60 tracking-[0.3em] uppercase mb-8">Impact</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/get-involved" className="text-foreground/80 text-[13px] hover:text-primary transition-colors font-medium">Partner</Link></li>
              <li><Link to="/get-involved" className="text-foreground/80 text-[13px] hover:text-primary transition-colors font-medium">Sponsor</Link></li>
              <li><Link to="/get-involved" className="text-foreground/80 text-[13px] hover:text-primary transition-colors font-medium">Volunteer</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-outline/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-foreground/50 font-semibold uppercase tracking-wider">
            © 2025 AI Empowerment Foundation. Built on real engineering.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-foreground/40 hover:text-primary transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="text-foreground/40 hover:text-primary transition-colors"><Youtube size={18} /></a>
            <a href="#" className="text-foreground/40 hover:text-primary transition-colors"><Twitter size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
