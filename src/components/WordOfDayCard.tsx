import { Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const WordOfDayCard = () => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      console.log("Swiped left");
    }

    if (touchStart - touchEnd < -75) {
      console.log("Swiped right");
    }
  };

  return (
    <div 
      className="relative overflow-hidden rounded-3xl bg-card border border-border p-5 shadow-[var(--shadow-card)] touch-pan-y transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] sm:p-6 animate-fade-in"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-center gap-2 sm:mb-5">
        <span className="text-lg sm:text-xl">✨</span>
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground sm:text-sm">
          Word of the Day
        </span>
      </div>

      {/* Main Content */}
      <div className="space-y-4 sm:space-y-5">
        {/* Arabic Word */}
        <div className="space-y-2 text-center">
          <h3 className="text-4xl font-bold text-foreground leading-tight sm:text-5xl">
            جميلة
          </h3>
          <p className="text-xl font-bold text-primary sm:text-2xl">
            Beautiful
          </p>
        </div>

        {/* Example Sentence */}
        <div className="space-y-2.5 rounded-2xl bg-secondary/40 p-4 sm:p-5 text-center border border-border/50">
          <p className="text-base font-semibold text-foreground leading-relaxed sm:text-lg" dir="rtl">
            هذه وثيقة جميلة
          </p>
          <p className="text-sm font-bold text-muted-foreground leading-relaxed sm:text-base">
            This is a beautiful document
          </p>
        </div>

        {/* Action Button */}
        <Button 
          className="w-full gap-2.5 text-sm h-11 sm:h-12 font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          <Volume2 className="h-4 w-4 sm:h-5 sm:w-5" />
          Listen to Pronunciation
        </Button>
      </div>
    </div>
  );
};
