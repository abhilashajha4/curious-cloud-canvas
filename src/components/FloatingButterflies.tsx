import { useEffect, useState } from "react";

interface Butterfly {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  size: number;
}

export const FloatingButterflies = () => {
  const [butterflies, setButterflies] = useState<Butterfly[]>([]);

  useEffect(() => {
    // Create 8 butterflies with random positions
    const newButterflies = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 12 + Math.random() * 8,
      size: 35 + Math.random() * 25,
    }));
    setButterflies(newButterflies);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {butterflies.map((butterfly) => (
        <div
          key={butterfly.id}
          className="absolute animate-float-slow opacity-30"
          style={{
            left: `${butterfly.x}%`,
            top: `${butterfly.y}%`,
            animationDelay: `${butterfly.delay}s`,
            animationDuration: `${butterfly.duration}s`,
          }}
        >
          <svg
            width={butterfly.size}
            height={butterfly.size}
            viewBox="0 0 120 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
          >
            {/* Left upper wing */}
            <path
              d="M 45 50 Q 20 30 15 15 Q 10 5 20 8 Q 35 12 45 35 Z"
              fill={`url(#gradient1-${butterfly.id})`}
              opacity="0.9"
            />
            {/* Left lower wing */}
            <path
              d="M 45 50 Q 25 60 20 75 Q 18 85 28 80 Q 40 72 45 55 Z"
              fill={`url(#gradient2-${butterfly.id})`}
              opacity="0.85"
            />
            {/* Right upper wing */}
            <path
              d="M 55 50 Q 80 30 85 15 Q 90 5 80 8 Q 65 12 55 35 Z"
              fill={`url(#gradient1-${butterfly.id})`}
              opacity="0.9"
            />
            {/* Right lower wing */}
            <path
              d="M 55 50 Q 75 60 80 75 Q 82 85 72 80 Q 60 72 55 55 Z"
              fill={`url(#gradient2-${butterfly.id})`}
              opacity="0.85"
            />
            {/* Body */}
            <ellipse
              cx="50"
              cy="50"
              rx="4"
              ry="25"
              fill="hsl(330 85% 25%)"
            />
            {/* Head */}
            <circle cx="50" cy="30" r="5" fill="hsl(330 85% 30%)" />
            {/* Antennae */}
            <path
              d="M 48 28 Q 45 20 42 15"
              stroke="hsl(330 85% 30%)"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M 52 28 Q 55 20 58 15"
              stroke="hsl(330 85% 30%)"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Wing details - spots and patterns */}
            <circle cx="30" cy="30" r="3" fill="white" opacity="0.7" />
            <circle cx="70" cy="30" r="3" fill="white" opacity="0.7" />
            <circle cx="25" cy="45" r="2.5" fill="white" opacity="0.6" />
            <circle cx="75" cy="45" r="2.5" fill="white" opacity="0.6" />
            <circle cx="32" cy="65" r="2" fill="white" opacity="0.5" />
            <circle cx="68" cy="65" r="2" fill="white" opacity="0.5" />
            
            {/* Elegant wing patterns */}
            <path
              d="M 25 25 Q 28 28 25 32"
              stroke="white"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
            />
            <path
              d="M 75 25 Q 72 28 75 32"
              stroke="white"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
            />
            
            <defs>
              <linearGradient id={`gradient1-${butterfly.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(330 90% 60%)" />
                <stop offset="50%" stopColor="hsl(320 85% 68%)" />
                <stop offset="100%" stopColor="hsl(310 80% 75%)" />
              </linearGradient>
              <linearGradient id={`gradient2-${butterfly.id}`} x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(340 85% 65%)" />
                <stop offset="50%" stopColor="hsl(325 80% 72%)" />
                <stop offset="100%" stopColor="hsl(315 75% 78%)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
};
