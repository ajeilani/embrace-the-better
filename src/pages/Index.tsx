import { Bell } from "lucide-react";
import { WordOfDayCard } from "@/components/WordOfDayCard";
import { MetricsCard } from "@/components/MetricsCard";
import { ExploreSection } from "@/components/ExploreSection";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="px-4 pt-8 pb-4 sm:px-6 sm:pt-12 sm:pb-6">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
                Welcome Back 👋
              </h1>
              <p className="mt-1 text-base font-semibold text-primary sm:text-lg">
                Alexander
              </p>
            </div>
            <Button size="icon" variant="ghost" className="rounded-full">
              <Bell className="h-5 w-5" />
            </Button>
          </div>

          {/* Word of the Day */}
          <WordOfDayCard />

          {/* Metrics */}
          <div className="mt-4 sm:mt-6">
            <MetricsCard />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6">
        <ExploreSection />
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;
