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
    // Create 6 butterflies with random positions
    const newButterflies = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
      size: 30 + Math.random() * 20,
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
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Left wing */}
            <ellipse
              cx="30"
              cy="50"
              rx="25"
              ry="35"
              fill="url(#gradient1)"
              opacity="0.8"
            />
            {/* Right wing */}
            <ellipse
              cx="70"
              cy="50"
              rx="25"
              ry="35"
              fill="url(#gradient1)"
              opacity="0.8"
            />
            {/* Body */}
            <ellipse
              cx="50"
              cy="50"
              rx="5"
              ry="30"
              fill="hsl(330 85% 35%)"
            />
            {/* Spots on wings */}
            <circle cx="30" cy="45" r="4" fill="white" opacity="0.6" />
            <circle cx="70" cy="45" r="4" fill="white" opacity="0.6" />
            <circle cx="25" cy="55" r="3" fill="white" opacity="0.5" />
            <circle cx="75" cy="55" r="3" fill="white" opacity="0.5" />
            
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(330 85% 55%)" />
                <stop offset="50%" stopColor="hsl(320 90% 65%)" />
                <stop offset="100%" stopColor="hsl(300 80% 70%)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
};
