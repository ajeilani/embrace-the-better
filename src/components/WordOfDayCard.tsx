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
      {/* Header with Badge and Actions */}
      <div className="flex items-center justify-between mb-4">
        <div className="inline-flex items-center gap-1.5 bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
          <span className="text-sm">✨</span>
          <span className="text-xs font-semibold text-primary">Word of the Day</span>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10"
          >
            <Volume2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSaved(!isSaved)}
            className="h-8 w-8 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10"
          >
            <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-primary text-primary' : ''}`} />
          </Button>
        </div>
      </div>

      {/* Word and Translation */}
      <div className="text-center mb-4">
        <h3 className="text-4xl font-arabic font-bold text-foreground mb-1" dir="rtl">
          جميلة
        </h3>
        <p className="text-lg font-semibold text-primary">Beautiful</p>
      </div>

      {/* Example Sentence */}
      <div className="rounded-xl bg-muted/50 p-3 text-center border border-border/30">
        <p className="text-base font-arabic text-foreground mb-1" dir="rtl">
          هذه وثيقة جميلة
        </p>
        <p className="text-sm font-medium text-foreground">
          This is a beautiful document
        </p>
      </div>
    </div>
  );
};
