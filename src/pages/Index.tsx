import { useState } from "react";
import { CategoryCard } from "@/components/CategoryCard";
import { LevelSelector } from "@/components/LevelSelector";
import { BottomNav } from "@/components/BottomNav";

const categories = [
  { emoji: "📚", title: "Cloths", level: "Beginner" },
  { emoji: "🍔", title: "Food", level: "Beginner" },
  { emoji: "🎨", title: "Colors", level: "Beginner" },
  { emoji: "📚", title: "Cloths", level: "Beginner" },
  { emoji: "🏢", title: "Places Town", level: "Beginner" },
  { emoji: "😊", title: "Emotions", level: "Beginner" },
  { emoji: "📖", title: "Common Verbs", level: "Beginner" },
  { emoji: "📅", title: "Days of Weeks", level: "Beginner" },
];

const Index = () => {
  const [selectedLevel, setSelectedLevel] = useState("Beginner");

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pb-24">
      {/* Header with gradient and decorative background */}
      <header className="relative overflow-hidden bg-gradient-to-br from-primary-glow via-accent to-primary text-foreground px-6 pt-12 pb-8 rounded-b-[2rem] shadow-lg">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-12 -left-12 w-48 h-48 bg-white/25 rounded-full blur-2xl" />
          <div className="absolute -bottom-16 right-1/3 w-56 h-56 bg-white/20 rounded-full blur-3xl" />
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-20" 
               style={{
                 backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                 backgroundSize: '32px 32px'
               }} 
          />
        </div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold tracking-tight">Learn</h1>
            <LevelSelector 
              selectedLevel={selectedLevel} 
              onLevelChange={setSelectedLevel}
            />
          </div>
          <p className="text-foreground/90 text-base leading-relaxed">
            Learn everyday Arabic with flashcards for quick and easy mastery.
          </p>
        </div>
      </header>

      {/* Category Grid */}
      <main className="max-w-2xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 gap-4">
          {categories.map((category, index) => (
            <CategoryCard
              key={`${category.title}-${index}`}
              emoji={category.emoji}
              title={category.title}
              level={category.level}
              delay={index * 50}
            />
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;
