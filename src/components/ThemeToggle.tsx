import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'motion/react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-surface border border-outline/10 hover:bg-outline/10 transition-colors"
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {theme === 'light' ? (
          <Moon className="w-5 h-5 text-navy-900" />
        ) : (
          <Sun className="w-5 h-5 text-gold-500" />
        )}
      </motion.div>
    </button>
  );
}
