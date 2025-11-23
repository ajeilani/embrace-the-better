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
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 p-4 shadow-lg touch-pan-y sm:rounded-3xl sm:p-5"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-white/10 blur-xl" />
      </div>

      {/* Header */}
      <div className="relative z-10 mb-3 flex items-center gap-2 sm:mb-4">
        <span className="text-lg sm:text-xl">✨</span>
        <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
          Word of the Day
        </span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 space-y-3 sm:space-y-4">
        {/* Arabic Word */}
        <div className="space-y-1 text-center">
          <h3 className="text-3xl font-bold text-white leading-tight sm:text-4xl">
            جميلة
          </h3>
          <p className="text-lg font-semibold text-white/95 sm:text-xl">
            Beautiful
          </p>
        </div>

        {/* Example Sentence */}
        <div className="space-y-2 rounded-xl bg-white/15 backdrop-blur-sm p-3 sm:rounded-xl sm:p-3.5 text-center">
          <div>
            <span className="text-xs text-white/70 font-medium">Arabic</span>
            <p className="text-base font-medium text-white leading-relaxed mt-1 sm:text-lg">
              هذه وثيقة جميلة
            </p>
          </div>
          <div>
            <span className="text-xs text-white/70 font-medium">English</span>
            <p className="text-sm text-white/90 leading-relaxed mt-1">
              This is a beautiful document
            </p>
          </div>
        </div>

        {/* Action Button */}
        <Button 
          variant="secondary"
          className="w-full gap-2 text-sm h-10 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-white/20 sm:h-11"
        >
          <Volume2 className="h-4 w-4" />
          Listen
        </Button>
      </div>

      {/* Swipe Indicator */}
      <div className="relative z-10 mt-3 flex justify-center gap-1.5">
        <div className="h-1 w-1 rounded-full bg-white" />
        <div className="h-1 w-1 rounded-full bg-white/40" />
        <div className="h-1 w-1 rounded-full bg-white/40" />
      </div>
    </div>
  );
};
