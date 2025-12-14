import { BookOpen, Video, MessageSquare, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface ExploreItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  iconBg: string;
  route?: string;
}

export const ExploreSection = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const items: ExploreItem[] = [
    {
      icon: <BookOpen className="h-7 w-7 sm:h-8 sm:w-8" />,
      title: "Learn New Words",
      description: "Master vocabulary with interactive flashcards",
      color: "text-purple-600",
      iconBg: "bg-purple-50 dark:bg-purple-950/30",
      route: "/flashcards",
    },
    {
      icon: <Video className="h-7 w-7 sm:h-8 sm:w-8" />,
      title: "Watch Video Lessons",
      description: "Interactive lessons with native speakers",
      color: "text-red-600",
      iconBg: "bg-red-50 dark:bg-red-950/30",
    },
    {
      icon: <MessageSquare className="h-7 w-7 sm:h-8 sm:w-8" />,
      title: "Practice Conversations",
      description: "Chat practice and improve fluency",
      color: "text-green-600",
      iconBg: "bg-green-50 dark:bg-green-950/30",
    },
    {
      icon: <Users className="h-7 w-7 sm:h-8 sm:w-8" />,
      title: "Join Live Debates",
      description: "Engage in group discussions and debates",
      color: "text-blue-600",
      iconBg: "bg-blue-50 dark:bg-blue-950/30",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]);

  const handleClick = (item: ExploreItem) => {
    if (item.route) {
      navigate(item.route);
    }
  };

  return (
    <div className="space-y-4 sm:space-y-5">
      <h2 className="text-xl font-bold text-foreground sm:text-2xl">Explore Learning</h2>
      
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <Card
              key={index}
              onClick={() => handleClick(item)}
              className="min-w-full cursor-pointer border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-md active:scale-[0.98]"
            >
              <CardContent className="flex items-center gap-4 p-5 sm:p-6">
                <div className={`flex-shrink-0 rounded-xl ${item.iconBg} p-4 ${item.color}`}>
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="mb-1 font-bold text-foreground text-lg leading-tight sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-snug sm:text-base">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center gap-2 mt-4">
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
    </div>
  );
};
