import { Bell } from "lucide-react";
import { WordOfDayCard } from "@/components/WordOfDayCard";
import { MetricsCard } from "@/components/MetricsCard";
import { ExploreSection } from "@/components/ExploreSection";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20 sm:pb-24">
      {/* Header */}
      <header className="px-4 pt-6 pb-3 sm:px-6 sm:pt-10 sm:pb-5">
        <div className="mx-auto max-w-2xl">
          <div className="mb-5 flex items-start justify-between sm:mb-6">
            <div>
              <h1 className="text-xl font-bold text-foreground sm:text-2xl">
                Welcome Back 👋
              </h1>
              <p className="mt-0.5 text-sm font-semibold text-primary sm:mt-1 sm:text-base">
                Alexander
              </p>
            </div>
            <Button size="icon" variant="ghost" className="h-10 w-10 rounded-full sm:h-11 sm:w-11">
              <Bell className="h-5 w-5" />
            </Button>
          </div>

          {/* Word of the Day */}
          <WordOfDayCard />

          {/* Metrics */}
          <div className="mt-4 sm:mt-5">
            <MetricsCard />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-5">
        <ExploreSection />
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;
