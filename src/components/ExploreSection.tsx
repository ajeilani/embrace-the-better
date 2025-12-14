import { BookOpen, Video, MessageSquare, Users, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

interface ExploreItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  iconColor: string;
  route?: string;
}

export const ExploreSection = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const items: ExploreItem[] = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Learn New Words",
      description: "Master vocabulary with interactive flashcards",
      gradient: "from-purple-500 to-purple-600",
      iconColor: "text-white",
      route: "/flashcards",
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Watch Video Lessons",
      description: "Interactive lessons with native speakers",
      gradient: "from-rose-500 to-red-500",
      iconColor: "text-white",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Practice Conversations",
      description: "Chat practice and improve fluency",
      gradient: "from-emerald-500 to-green-500",
      iconColor: "text-white",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Join Live Debates",
      description: "Engage in group discussions and debates",
      gradient: "from-blue-500 to-indigo-500",
      iconColor: "text-white",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [items.length]);

  const handleClick = (item: ExploreItem) => {
    if (item.route) {
      navigate(item.route);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-foreground sm:text-xl">Explore Learning</h2>
      
      <div className="relative overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(item)}
              className={`min-w-full cursor-pointer bg-gradient-to-br ${item.gradient} p-5 sm:p-6 rounded-2xl shadow-lg transition-all duration-300 active:scale-[0.98]`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 rounded-xl bg-white/20 backdrop-blur-sm p-3.5">
                    <span className={item.iconColor}>{item.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white text-lg leading-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/80 leading-snug">
                      {item.description}
                    </p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-white/60 flex-shrink-0 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicator dots */}
      <div className="flex justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? "w-6 bg-primary" 
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
