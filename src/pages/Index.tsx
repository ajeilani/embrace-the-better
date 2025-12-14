import { Flame, Clock, Zap } from "lucide-react";
import { WordOfDayCard } from "@/components/WordOfDayCard";
import { ExploreSection } from "@/components/ExploreSection";
import { BottomNav } from "@/components/BottomNav";
import { OnboardingGuide } from "@/components/OnboardingGuide";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20 sm:pb-24">
      {/* Header */}
      <header className="px-4 pt-4 pb-4 sm:px-6 sm:pt-6 sm:pb-5 animate-fade-in border-b border-border/50">
        <div className="mx-auto max-w-2xl">
          {/* Welcome Section */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Welcome Back 👋</p>
              <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
                Alexander
              </h1>
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
              A
            </div>
          </div>

          {/* Compact Metrics */}
          <div className="flex justify-between gap-2">
            <div className="flex items-center gap-1.5 bg-orange-50 rounded-full px-3 py-2 border border-orange-100">
              <Flame className="h-4 w-4 text-orange-500" />
              <span className="text-sm font-bold text-foreground">7</span>
              <span className="text-xs text-muted-foreground">Streak</span>
            </div>
            <div className="flex items-center gap-1.5 bg-blue-50 rounded-full px-3 py-2 border border-blue-100">
              <Clock className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-bold text-foreground whitespace-nowrap">0h 10m</span>
              <span className="text-xs text-muted-foreground">Time</span>
            </div>
            <div className="flex items-center gap-1.5 bg-yellow-50 rounded-full px-3 py-2 border border-yellow-100">
              <Zap className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-bold text-foreground">850</span>
              <span className="text-xs text-muted-foreground">XP</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 pt-4 sm:px-6 sm:pt-5">
        <div className="mx-auto max-w-2xl">
          {/* Word of the Day */}
          <WordOfDayCard />

          {/* Explore Section */}
          <div className="mt-6 sm:mt-8">
            <ExploreSection />
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNav />

      {/* Onboarding Guide */}
      <OnboardingGuide />
    </div>
  );
};

export default Index;
