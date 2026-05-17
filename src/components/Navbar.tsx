import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { LogoMark } from './LogoShapes';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Founder', path: '/founder' },
    { name: 'Initiatives', path: '/initiatives' },
    { name: 'Conference', path: '/flagship' },
    { name: 'Mentorship', path: '/mentorship' },
    { name: 'Speaking', path: '/leadership' },
    { name: 'Get Involved', path: '/get-involved' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[300] px-4 flex items-center justify-between h-16 bg-background/80 backdrop-blur-md rounded-full shadow-lg border border-outline/10 w-[94%] max-w-6xl">
      <Link to="/" className="flex items-center gap-2">
        <LogoMark className="w-10 h-10 rounded-full bg-primary text-secondary border-none" />
        <span className="hidden sm:block font-bold tracking-tight text-foreground uppercase text-xs">AI Empowerment</span>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden lg:flex items-center gap-1 list-none">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link 
              to={link.path} 
              className={`text-[11px] font-bold px-3 py-2 rounded-full transition-all uppercase tracking-wider ${
                location.pathname === link.path 
                  ? 'bg-primary text-background' 
                  : 'text-foreground/70 hover:text-foreground hover:bg-surface'
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Link to="/contact" className="hidden sm:block">
          <button className="bg-primary text-background px-6 py-2 rounded-full text-[11px] font-bold tracking-widest hover:opacity-90 transition-all uppercase">
            Contact
          </button>
        </Link>
        
        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-foreground p-2 hover:bg-surface rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden fixed inset-x-0 top-20 mx-4 bg-background border border-outline/10 rounded-2xl shadow-2xl z-[250] flex flex-col p-6 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col space-y-4 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold uppercase tracking-tight py-2 border-b border-outline/5 ${
                    location.pathname === link.path ? 'text-secondary' : 'text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full mt-4"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
