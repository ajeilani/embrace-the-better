import { Bell } from "lucide-react";
import { WordOfDayCard } from "@/components/WordOfDayCard";
import { MetricsCard } from "@/components/MetricsCard";
import { ExploreSection } from "@/components/ExploreSection";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/5 to-background pb-24">
      {/* Header */}
      <header className="px-6 pt-12 pb-6">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Welcome Back 👋
              </h1>
              <p className="mt-1 text-lg font-semibold text-purple-600">
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
          <div className="mt-6">
            <MetricsCard />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-2xl px-6 py-6">
        <ExploreSection />
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;
