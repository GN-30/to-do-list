import React, { useEffect, useState } from "react";

const QUOTES = [
  "Small steps every day move mountains — focus on one task at a time.",
  "Make it simple: plan, do, review — then remove what's done.",
  "Start with the hardest task — momentum makes the rest easier.",
  "A completed task is a small win — celebrate progress, not perfection.",
  "Don’t wait for perfect conditions — take a short step now.",
  "Consistency beats intensity — build habits with tiny daily wins.",
];

export default function QuoteBanner() {
  const [i, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((s) => (s + 1) % QUOTES.length), 4800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="quote-banner" aria-live="polite">
      <div className="quote-inner">
        <div className="quote-icon" aria-hidden>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 7h4v6H5V9a2 2 0 0 1 2-2z"
              fill="currentColor"
              opacity="0.12"
            />
            <path
              d="M11 7h4v6h-6V9a2 2 0 0 1 2-2z"
              fill="currentColor"
              opacity="0.18"
            />
          </svg>
        </div>
        <blockquote className="quote-text">
          <span className="quote-emoji" aria-hidden>
            ✨
          </span>
          {QUOTES[i]}
        </blockquote>
        <div className="quote-index" aria-hidden>{`${i + 1}/${
          QUOTES.length
        }`}</div>
      </div>
    </div>
  );
}
