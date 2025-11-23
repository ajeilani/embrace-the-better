import { Volume2, Sparkles } from "lucide-react";
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
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 via-primary-glow/10 to-accent/5 border border-primary/10 p-5 shadow-[var(--shadow-card)] touch-pan-y transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] sm:rounded-3xl sm:p-6"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-card)] opacity-50" />
      
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-[var(--gradient-shine)] animate-[shimmer_2s_ease-in-out_infinite]" 
             style={{
               backgroundSize: '200% 100%',
               animation: 'shimmer 3s ease-in-out infinite'
             }} 
        />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Header */}
        <div className="mb-4 flex items-center justify-center gap-2 sm:mb-5">
          <Sparkles className="h-5 w-5 text-primary animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-primary/80 sm:text-sm">
            Word of the Day
          </span>
          <Sparkles className="h-5 w-5 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Main Content */}
        <div className="space-y-4 sm:space-y-5">
          {/* Arabic Word */}
          <div className="space-y-2 text-center animate-fade-in">
            <h3 className="text-4xl font-bold text-foreground leading-tight sm:text-5xl drop-shadow-sm">
              جميلة
            </h3>
            <p className="text-xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent sm:text-2xl">
              Beautiful
            </p>
          </div>

          {/* Example Sentence */}
          <div className="space-y-2.5 rounded-2xl bg-secondary/50 backdrop-blur-sm p-4 sm:rounded-2xl sm:p-5 text-center border border-primary/5 animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <p className="text-base font-semibold text-foreground leading-relaxed sm:text-lg" dir="rtl">
              هذه وثيقة جميلة
            </p>
            <p className="text-sm font-medium bg-gradient-to-r from-accent via-primary to-primary-glow bg-clip-text text-transparent leading-relaxed sm:text-base">
              This is a beautiful document
            </p>
          </div>

          {/* Action Button */}
          <Button 
            className="w-full gap-2.5 text-sm h-11 sm:h-12 bg-gradient-to-r from-primary via-primary-glow to-accent hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] font-semibold animate-scale-in"
            style={{ animationDelay: '0.2s' }}
          >
            <Volume2 className="h-4 w-4 sm:h-5 sm:w-5" />
            Listen to Pronunciation
          </Button>
        </div>

        {/* Swipe Indicator */}
        <div className="mt-4 flex justify-center gap-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="h-1.5 w-8 rounded-full bg-primary shadow-sm" />
          <div className="h-1.5 w-1.5 rounded-full bg-muted" />
          <div className="h-1.5 w-1.5 rounded-full bg-muted" />
        </div>
      </div>
    </div>
  );
};
