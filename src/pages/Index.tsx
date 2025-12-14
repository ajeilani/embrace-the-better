import { Flame, Clock, Zap } from "lucide-react";
import { WordOfDayCard } from "@/components/WordOfDayCard";
import { ExploreSection } from "@/components/ExploreSection";
import { BottomNav } from "@/components/BottomNav";
import { OnboardingGuide } from "@/components/OnboardingGuide";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20 sm:pb-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Large gradient circle top right */}
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-3xl animate-float" />
        
        {/* Medium circle left */}
        <div className="absolute top-1/3 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-accent/15 to-primary/5 blur-2xl animate-float-delayed" />
        
        {/* Small accent circle bottom right */}
        <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl animate-float-slow" />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>


      {/* Header */}
      <header className="relative z-10 px-4 pt-4 pb-4 sm:px-6 sm:pt-6 sm:pb-5 animate-fade-in border-b border-border/50">
        <div className="mx-auto max-w-2xl">
          {/* Welcome Section */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-lg font-semibold text-foreground mb-0.5">Welcome Onboard 👋</p>
              <h1 className="text-2xl font-bold text-primary sm:text-3xl">
                Alexander
              </h1>
            </div>
            <Avatar className="w-11 h-11 border-2 border-primary/20">
              <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Profile" />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">A</AvatarFallback>
            </Avatar>
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
      <main className="relative z-10 px-4 pt-4 sm:px-6 sm:pt-5">
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
