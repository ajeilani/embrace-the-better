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
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className={cn(
          "relative w-full h-80 transition-transform duration-500 cursor-pointer preserve-3d",
          isFlipped && "rotate-y-180"
        )}
      >
        {/* Front of card (Arabic) */}
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full bg-gradient-to-br from-purple-100 to-indigo-100 rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center space-y-6">
            <p className="text-sm text-muted-foreground uppercase tracking-wider">Arabic</p>
            <h2 className="text-6xl font-bold text-foreground text-center">{item.arabic}</h2>
            <p className="text-lg text-muted-foreground">{item.pronunciation}</p>
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full bg-white/50 hover:bg-white/70"
              onClick={(e) => {
                e.stopPropagation();
                onPlayAudio(item.arabic);
              }}
              disabled={isAudioPlaying}
            >
              <Volume2 className="h-5 w-5" />
            </Button>
            <p className="text-sm text-muted-foreground/70">Tap to reveal</p>
          </div>
        </div>

        {/* Back of card (English) */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl shadow-xl p-8 flex flex-col items-center justify-center space-y-6">
            <p className="text-sm text-muted-foreground uppercase tracking-wider">English</p>
            <h2 className="text-5xl font-bold text-foreground text-center">{item.english}</h2>
            <p className="text-lg text-muted-foreground">{item.pronunciation}</p>
            <p className="text-sm text-muted-foreground/70">Tap to flip back</p>
          </div>
        </div>
      </div>
    </div>
  );
};
