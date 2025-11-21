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
      {/* Header with light purple and bubble patterns */}
      <header className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-purple-50 to-indigo-100 text-foreground px-6 pt-12 pb-8 rounded-b-[2rem] shadow-lg">
        {/* Decorative bubble elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large bubbles */}
          <div className="absolute -top-20 -right-20 w-56 h-56 bg-purple-200/40 rounded-full blur-xl" />
          <div className="absolute top-16 -left-16 w-40 h-40 bg-indigo-200/40 rounded-full blur-lg" />
          <div className="absolute -bottom-12 right-1/4 w-48 h-48 bg-purple-300/30 rounded-full blur-xl" />
          
          {/* Medium bubbles */}
          <div className="absolute top-8 right-1/3 w-32 h-32 bg-purple-200/30 rounded-full blur-lg animate-pulse" />
          <div className="absolute bottom-12 left-1/4 w-28 h-28 bg-indigo-200/30 rounded-full blur-md" />
          <div className="absolute top-24 right-12 w-24 h-24 bg-purple-300/40 rounded-full blur-md" />
          
          {/* Small bubbles */}
          <div className="absolute top-32 left-1/2 w-16 h-16 bg-purple-200/50 rounded-full blur-sm" />
          <div className="absolute bottom-20 right-1/2 w-20 h-20 bg-indigo-200/40 rounded-full blur-sm animate-pulse" />
          <div className="absolute top-40 left-12 w-12 h-12 bg-purple-300/50 rounded-full blur-sm" />
          
          {/* Circle pattern overlay */}
          <div className="absolute inset-0 opacity-30" 
               style={{
                 backgroundImage: `radial-gradient(circle at 3px 3px, rgb(167, 139, 250) 2px, transparent 0)`,
                 backgroundSize: '48px 48px'
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
