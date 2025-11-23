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
      className="relative overflow-hidden rounded-2xl bg-card border border-border p-4 shadow-md touch-pan-y sm:rounded-3xl sm:p-5"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header */}
      <div className="mb-3 flex items-center gap-2 sm:mb-4">
        <span className="text-lg sm:text-xl">✨</span>
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Word of the Day
        </span>
      </div>

      {/* Main Content */}
      <div className="space-y-3 sm:space-y-4">
        {/* Arabic Word */}
        <div className="space-y-1">
          <h3 className="text-3xl font-bold text-foreground leading-tight sm:text-4xl">
            جميلة
          </h3>
          <p className="text-lg font-semibold text-primary sm:text-xl">
            Beautiful
          </p>
        </div>

        {/* Example Sentence */}
        <div className="space-y-2 rounded-xl bg-secondary/30 p-3 sm:rounded-xl sm:p-3.5">
          <div className="flex items-start gap-2">
            <span className="text-xs text-muted-foreground font-medium mt-0.5">AR:</span>
            <p className="text-base font-medium text-foreground leading-relaxed flex-1 sm:text-lg" dir="rtl">
              هذه وثيقة جميلة
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-xs text-muted-foreground font-medium mt-0.5">EN:</span>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              This is a beautiful document
            </p>
          </div>
        </div>

        {/* Action Button */}
        <Button 
          className="w-full gap-2 text-sm h-10 sm:h-11"
        >
          <Volume2 className="h-4 w-4" />
          Listen
        </Button>
      </div>

      {/* Swipe Indicator */}
      <div className="mt-3 flex justify-center gap-1.5">
        <div className="h-1 w-1 rounded-full bg-primary" />
        <div className="h-1 w-1 rounded-full bg-muted" />
        <div className="h-1 w-1 rounded-full bg-muted" />
      </div>
    </div>
  );
};
