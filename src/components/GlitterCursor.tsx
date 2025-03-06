
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

interface GlitterPoint {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  rotation: number;
}

const colors = ["#FF66B2", "#66CCFF", "#9966FF", "#FFFF66", "#66FF99"];

const GlitterCursor: React.FC = () => {
  const [glitters, setGlitters] = useState<GlitterPoint[]>([]);
  const maxGlitters = 50;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newGlitter: GlitterPoint = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 10 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 1,
        rotation: Math.random() * 360,
      };

      setGlitters((prev) => {
        const updated = [...prev, newGlitter];
        return updated.slice(-maxGlitters);
      });
    };

    const fadeInterval = setInterval(() => {
      setGlitters((prev) => 
        prev
          .map((glitter) => ({
            ...glitter,
            opacity: glitter.opacity - 0.02,
            size: glitter.size - 0.1,
            rotation: glitter.rotation + 2,
          }))
          .filter((glitter) => glitter.opacity > 0 && glitter.size > 0)
      );
    }, 50);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(fadeInterval);
    };
  }, []);

  return (
    <div className="glitter">
      {glitters.map((glitter) => (
        <div
          key={glitter.id}
          style={{
            position: "absolute",
            left: glitter.x,
            top: glitter.y,
            width: `${glitter.size}px`,
            height: `${glitter.size}px`,
            opacity: glitter.opacity,
            transform: `translate(-50%, -50%) rotate(${glitter.rotation}deg)`,
            pointerEvents: "none",
            zIndex: 9999,
            color: glitter.color,
          }}
        >
          <Star 
            size={glitter.size} 
            fill={glitter.color} 
            stroke={glitter.color}
          />
        </div>
      ))}
    </div>
  );
};

export default GlitterCursor;
