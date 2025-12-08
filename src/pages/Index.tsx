import { Flame, Clock, Zap } from "lucide-react";
import { WordOfDayCard } from "@/components/WordOfDayCard";
import { ExploreSection } from "@/components/ExploreSection";
import { BottomNav } from "@/components/BottomNav";

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
          <div className="flex gap-3 sm:gap-4">
            <div className="flex items-center gap-2 bg-orange-50 rounded-full px-4 py-2 border border-orange-100">
              <Flame className="h-4 w-4 text-orange-500" />
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-bold text-foreground">7</span>
                <span className="text-xs text-muted-foreground">Streak</span>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 border border-blue-100">
              <Clock className="h-4 w-4 text-blue-500" />
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-bold text-foreground">12.5h</span>
                <span className="text-xs text-muted-foreground">Time</span>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-yellow-50 rounded-full px-4 py-2 border border-yellow-100">
              <Zap className="h-4 w-4 text-yellow-500" />
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-bold text-foreground">850</span>
                <span className="text-xs text-muted-foreground">XP</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 pt-6 sm:px-6 sm:pt-8">
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
    </div>
  );
};

export default Index;
