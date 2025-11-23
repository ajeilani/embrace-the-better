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
      className="relative overflow-hidden rounded-3xl bg-card border border-border p-6 shadow-lg touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header */}
      <div className="mb-6 flex items-center gap-2">
        <span className="text-2xl">✨</span>
        <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Word of the Day
        </span>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Arabic Word */}
        <div className="space-y-2">
          <h3 className="text-5xl font-bold text-foreground leading-tight">
            جميلة
          </h3>
          <p className="text-2xl font-semibold text-primary">
            Beautiful
          </p>
        </div>

        {/* Example Sentence */}
        <div className="space-y-3 rounded-2xl bg-secondary/30 p-4">
          <p className="text-xl font-medium text-foreground leading-relaxed" dir="rtl">
            هذه مكتوبة جميلة
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This is a beautiful written document
          </p>
        </div>

        {/* Action Button */}
        <Button 
          size="lg" 
          className="w-full gap-2 text-base"
        >
          <Volume2 className="h-5 w-5" />
          Listen to pronunciation
        </Button>
      </div>

      {/* Swipe Indicator */}
      <div className="mt-4 flex justify-center gap-1.5">
        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
        <div className="h-1.5 w-1.5 rounded-full bg-muted" />
        <div className="h-1.5 w-1.5 rounded-full bg-muted" />
      </div>
    </div>
  );
};
