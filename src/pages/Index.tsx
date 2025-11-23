import { WordOfDayCard } from "@/components/WordOfDayCard";
import { MetricsCard } from "@/components/MetricsCard";
import { ExploreSection } from "@/components/ExploreSection";
import { BottomNav } from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20 sm:pb-24">
      {/* Header */}
      <header className="px-4 pt-6 pb-3 sm:px-6 sm:pt-10 sm:pb-5 animate-fade-in">
        <div className="mx-auto max-w-2xl">
          <div className="mb-5 sm:mb-6">
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
              Welcome Back 👋
            </h1>
            <p className="mt-1 text-base font-bold text-primary sm:text-lg">
              Alexander
            </p>
          </div>

          {/* Word of the Day */}
          <WordOfDayCard />

          {/* Metrics */}
          <div className="mt-5 sm:mt-6">
            <MetricsCard />
          </div>
        </div>
      </header>

      {/* Main Content - Full Width */}
      <main className="px-4 py-5 sm:px-6 sm:py-6">
        <ExploreSection />
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;
