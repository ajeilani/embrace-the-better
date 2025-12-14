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
          <div className="mb-5">
            <p className="text-sm text-muted-foreground mb-1">Welcome Back 👋</p>
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
              Alexander
            </h1>
          </div>

          {/* Compact Metrics */}
          <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-1 -mb-1">
            <div className="flex items-center gap-1.5 bg-orange-50 rounded-full px-3 py-1.5 border border-orange-100 flex-shrink-0">
              <Flame className="h-3.5 w-3.5 text-orange-500" />
              <span className="text-xs font-bold text-foreground">7</span>
              <span className="text-xs text-muted-foreground">Streak</span>
            </div>
            <div className="flex items-center gap-1.5 bg-blue-50 rounded-full px-3 py-1.5 border border-blue-100 flex-shrink-0">
              <Clock className="h-3.5 w-3.5 text-blue-500" />
              <span className="text-xs font-bold text-foreground whitespace-nowrap">0h 10m</span>
              <span className="text-xs text-muted-foreground">Time</span>
            </div>
            <div className="flex items-center gap-1.5 bg-yellow-50 rounded-full px-3 py-1.5 border border-yellow-100 flex-shrink-0">
              <Zap className="h-3.5 w-3.5 text-yellow-500" />
              <span className="text-xs font-bold text-foreground">850</span>
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
