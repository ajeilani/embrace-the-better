import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Flashcard } from "@/components/Flashcard";
import { vocabularyData } from "@/data/vocabulary";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const Flashcards = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [completedCards, setCompletedCards] = useState<Set<number>>(new Set());

  const category = vocabularyData.find((cat) => cat.id === categoryId);

  useEffect(() => {
    if (!category) {
      navigate("/");
    }
  }, [category, navigate]);

  if (!category) return null;

  const progress = (completedCards.size / category.items.length) * 100;

  const handleNext = () => {
    if (currentIndex < category.items.length - 1) {
      setCompletedCards((prev) => new Set(prev).add(currentIndex));
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCompletedCards((prev) => new Set(prev).add(currentIndex));
      toast({
        title: "Great job! 🎉",
        description: `You've completed all ${category.items.length} cards in ${category.title}!`,
      });
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handlePlayAudio = async (text: string) => {
    setIsAudioPlaying(true);
    
    // For now, show a message about TTS setup
    // In production, you would call your TTS service here
    toast({
      title: "Audio feature",
      description: "Text-to-speech integration coming soon! Add your ElevenLabs API key to enable audio.",
    });
    
    setTimeout(() => {
      setIsAudioPlaying(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <header className="bg-card border-b border-border/50 px-6 pt-8 pb-6 shadow-sm">
        <div className="max-w-2xl mx-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="mb-6 rounded-full hover:bg-secondary/80"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
                <span className="text-3xl sm:text-4xl">{category.emoji}</span>
                {category.title}
              </h1>
              <p className="text-muted-foreground mt-1.5 text-sm font-medium">{category.level}</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Progress</p>
              <p className="text-3xl font-bold text-primary">{Math.round(progress)}%</p>
            </div>
          </div>
          <Progress value={progress} className="h-2.5 bg-secondary" />
        </div>
      </header>

      {/* Flashcard */}
      <main className="max-w-2xl mx-auto px-6 py-12">
        <div className="mb-12">
          <p className="text-center text-base font-bold text-foreground mb-6">
            Card {currentIndex + 1} of {category.items.length}
          </p>
          <Flashcard
            item={category.items[currentIndex]}
            onPlayAudio={handlePlayAudio}
            isAudioPlaying={isAudioPlaying}
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="rounded-full w-14 h-14 p-0 shadow-md hover:shadow-lg border-2 disabled:opacity-30"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            size="lg"
            onClick={handleNext}
            disabled={currentIndex === category.items.length - 1 && completedCards.has(currentIndex)}
            className={cn(
              "rounded-full px-10 h-14 font-bold shadow-lg hover:shadow-xl transition-all duration-300",
              currentIndex === category.items.length - 1 && "bg-green-600 hover:bg-green-700"
            )}
          >
            {currentIndex === category.items.length - 1 ? "Complete" : "Next"}
            <ChevronRight className="h-6 w-6 ml-2" />
          </Button>
        </div>

        {/* Quick navigation dots */}
        <div className="flex justify-center gap-2.5 mt-10">
          {category.items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "rounded-full transition-all duration-300",
                index === currentIndex
                  ? "bg-primary w-8 h-3 shadow-md"
                  : completedCards.has(index)
                  ? "bg-green-500 w-3 h-3 shadow-sm"
                  : "bg-muted w-3 h-3 hover:bg-muted-foreground/30"
              )}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Flashcards;
