import { Bell } from "lucide-react";
import { WordOfDayCard } from "@/components/WordOfDayCard";
import { MetricsCard } from "@/components/MetricsCard";
import { ExploreSection } from "@/components/ExploreSection";
import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20 pb-20 sm:pb-24">
      {/* Header */}
      <header className="px-4 pt-6 pb-3 sm:px-6 sm:pt-10 sm:pb-5 animate-fade-in">
        <div className="mx-auto max-w-2xl">
          <div className="mb-5 flex items-start justify-between sm:mb-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
                Welcome Back 👋
              </h1>
              <p className="mt-1 text-base font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent sm:mt-1.5 sm:text-lg">
                Alexander
              </p>
            </div>
            <Button 
              size="icon" 
              variant="ghost" 
              className="h-11 w-11 rounded-full hover:bg-primary/10 transition-all duration-300 hover:scale-110 active:scale-95 sm:h-12 sm:w-12"
            >
              <Bell className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
            </Button>
          </div>

          {/* Word of the Day */}
          <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <WordOfDayCard />
          </div>

          {/* Metrics */}
          <div className="mt-5 sm:mt-6 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <MetricsCard />
          </div>
        </div>
      </header>

      {/* Main Content - Full Width */}
      <main className="px-4 py-5 sm:px-6 sm:py-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <ExploreSection />
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;
