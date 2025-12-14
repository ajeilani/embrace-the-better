import { Volume2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const WordOfDayCard = () => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

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
      className="relative overflow-hidden rounded-2xl bg-card border border-border p-4 shadow-[var(--shadow-card)] touch-pan-y transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] sm:p-5 animate-fade-in"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex-1 flex justify-center">
          <div className="inline-flex items-center gap-1.5 bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
            <span className="text-sm">✨</span>
            <span className="text-xs font-bold text-primary">
              Word of the Day
            </span>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSaved(!isSaved)}
          className="h-7 w-7 rounded-full"
        >
          <Bookmark className={`h-3.5 w-3.5 ${isSaved ? 'fill-primary text-primary' : ''}`} />
        </Button>
      </div>

      {/* Main Content */}
      <div className="space-y-3">
        {/* Arabic Word with Listen Button */}
        <div className="flex items-center justify-center gap-2">
          <h3 className="text-3xl font-arabic font-bold text-foreground leading-tight sm:text-4xl">
            جميلة
          </h3>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full text-primary hover:bg-primary/10"
          >
            <Volume2 className="h-4 w-4" />
          </Button>
        </div>
        
        <p className="text-lg font-bold text-primary text-center sm:text-xl">
          Beautiful
        </p>

        {/* Example Sentence */}
        <div className="space-y-1.5 rounded-xl bg-secondary/40 p-3 sm:p-4 text-center border border-border/50">
          <p className="text-sm font-arabic font-semibold text-foreground leading-relaxed sm:text-base" dir="rtl">
            هذه وثيقة جميلة
          </p>
          <p className="text-xs font-bold text-foreground leading-relaxed sm:text-sm">
            This is a beautiful document
          </p>
        </div>
      </div>
    </div>
  );
};
