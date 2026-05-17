import React from 'react';

export const Ticker: React.FC = () => {
  const items = [
    "AI Empowerment Foundation",
    "AI in Action Now",
    "Practical AI",
    "Africa & Global",
    "Mentorship",
    "Leadership",
    "Execution Over Theory"
  ];

  return (
    <div className="relative z-10 w-full overflow-hidden border-y border-white/5 bg-[#081938] py-4">
      <div className="flex animate-scroll whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex shrink-0 items-center justify-around gap-12 px-6">
            {items.map((item, j) => (
              <React.Fragment key={j}>
                <span className={j % 2 === 0 ? "text-secondary-500 font-bold uppercase tracking-[0.3em] text-[10px]" : "text-white/30 font-bold uppercase tracking-[0.3em] text-[10px]"}>
                  {item}
                </span>
                <span className="text-white/10">•</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
