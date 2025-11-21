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
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pb-8">
      {/* Header */}
      <header className="bg-gradient-to-br from-purple-100 via-purple-50 to-indigo-100 px-6 pt-12 pb-8">
        <div className="max-w-2xl mx-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="mb-4 rounded-full"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <span className="text-4xl">{category.emoji}</span>
                {category.title}
              </h1>
              <p className="text-muted-foreground mt-1">{category.level}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Progress</p>
              <p className="text-2xl font-bold">{Math.round(progress)}%</p>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </header>

      {/* Flashcard */}
      <main className="max-w-2xl mx-auto px-6 py-12">
        <div className="mb-8">
          <p className="text-center text-muted-foreground mb-4">
            Card {currentIndex + 1} of {category.items.length}
          </p>
          <Flashcard
            item={category.items[currentIndex]}
            onPlayAudio={handlePlayAudio}
            isAudioPlaying={isAudioPlaying}
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button
            variant="outline"
            size="lg"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="rounded-full"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            size="lg"
            onClick={handleNext}
            disabled={currentIndex === category.items.length - 1 && completedCards.has(currentIndex)}
            className="rounded-full px-8"
          >
            {currentIndex === category.items.length - 1 ? "Complete" : "Next"}
            <ChevronRight className="h-5 w-5 ml-2" />
          </Button>
        </div>

        {/* Quick navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {category.items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === currentIndex
                  ? "bg-primary w-6"
                  : completedCards.has(index)
                  ? "bg-primary/50"
                  : "bg-muted"
              )}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Flashcards;
