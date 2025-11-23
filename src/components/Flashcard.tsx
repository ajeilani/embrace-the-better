import { useState } from "react";
import { Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { VocabularyItem } from "@/data/vocabulary";

interface FlashcardProps {
  item: VocabularyItem;
  onPlayAudio: (text: string) => void;
  isAudioPlaying: boolean;
}

export const Flashcard = ({ item, onPlayAudio, isAudioPlaying }: FlashcardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="perspective-1000 w-full max-w-md mx-auto">
      {/* Glow effect behind card */}
      <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl -z-10" />
      
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className={cn(
          "relative w-full h-[400px] transition-transform duration-500 cursor-pointer preserve-3d",
          isFlipped && "rotate-y-180"
        )}
      >
        {/* Front of card (Arabic) */}
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full bg-card rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12),0_20px_60px_rgb(0,0,0,0.08)] border border-border/50 p-8 flex flex-col items-center justify-center space-y-8">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Arabic</p>
            <h2 className="text-7xl sm:text-8xl font-bold text-foreground text-center leading-tight">{item.arabic}</h2>
            <p className="text-xl text-muted-foreground font-medium">{item.pronunciation}</p>
            <Button
              size="lg"
              className="rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 px-6"
              onClick={(e) => {
                e.stopPropagation();
                onPlayAudio(item.arabic);
              }}
              disabled={isAudioPlaying}
            >
              <Volume2 className="h-5 w-5 mr-2" />
              Listen
            </Button>
            <p className="text-sm text-muted-foreground/60 font-medium">Tap card to reveal</p>
          </div>
        </div>

        {/* Back of card (English) */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full bg-secondary/30 backdrop-blur-sm rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12),0_20px_60px_rgb(0,0,0,0.08)] border border-border/50 p-8 flex flex-col items-center justify-center space-y-8">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">English</p>
            <h2 className="text-6xl sm:text-7xl font-bold text-foreground text-center leading-tight">{item.english}</h2>
            <p className="text-xl text-muted-foreground font-medium">{item.pronunciation}</p>
            <p className="text-sm text-muted-foreground/60 font-medium mt-4">Tap to flip back</p>
          </div>
        </div>
      </div>
    </div>
  );
};
