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
      // Swiped left - could load next word
      console.log("Swiped left");
    }

    if (touchStart - touchEnd < -75) {
      // Swiped right - could load previous word
      console.log("Swiped right");
    }
  };

  return (
    <div 
      className="relative overflow-hidden rounded-2xl bg-card border border-border p-5 shadow-lg touch-pan-y sm:rounded-3xl sm:p-6"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header */}
      <div className="mb-4 flex items-center gap-2 sm:mb-5">
        <span className="text-xl sm:text-2xl">✨</span>
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:text-sm">
          Word of the Day
        </span>
      </div>

      {/* Main Content */}
      <div className="space-y-4 sm:space-y-5">
        {/* Arabic Word */}
        <div className="space-y-1 sm:space-y-2">
          <h3 className="text-4xl font-bold text-foreground leading-tight sm:text-5xl">
            جميلة
          </h3>
          <p className="text-xl font-semibold text-primary sm:text-2xl">
            Beautiful
          </p>
        </div>

        {/* Example Sentence */}
        <div className="space-y-2 rounded-xl bg-secondary/30 p-3 sm:space-y-3 sm:rounded-2xl sm:p-4">
          <p className="text-lg font-medium text-foreground leading-relaxed sm:text-xl" dir="rtl">
            هذه مكتوبة جميلة
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed sm:text-sm">
            This is a beautiful written document
          </p>
        </div>

        {/* Action Button */}
        <Button 
          size="lg" 
          className="w-full gap-2 text-sm sm:text-base h-12"
        >
          <Volume2 className="h-4 w-4 sm:h-5 sm:w-5" />
          Listen to pronunciation
        </Button>
      </div>

      {/* Swipe Indicator */}
      <div className="mt-3 flex justify-center gap-1.5 sm:mt-4">
        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
        <div className="h-1.5 w-1.5 rounded-full bg-muted" />
        <div className="h-1.5 w-1.5 rounded-full bg-muted" />
      </div>
    </div>
  );
};
