import { BookOpen, Video, MessageSquare, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ExploreSectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  iconBg: string;
  onClick?: () => void;
  delay?: number;
}

const ExploreCard = ({ icon, title, description, color, iconBg, onClick, delay = 0 }: ExploreSectionProps) => (
  <button
    onClick={onClick}
    className="group flex items-center gap-4 rounded-2xl bg-card border border-border p-5 text-left shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:scale-[1.02] active:scale-[0.98] h-[85px] sm:h-[90px] sm:p-6 w-full animate-scale-in"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className={`flex-shrink-0 rounded-xl ${iconBg} p-3 transition-transform duration-300 group-hover:scale-110 ${color}`}>
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="mb-1 font-bold text-foreground text-base leading-tight sm:text-lg">
        {title}
      </h3>
      <p className="text-xs text-muted-foreground leading-snug line-clamp-1 sm:text-sm">
        {description}
      </p>
    </div>
  </button>
);

export const ExploreSection = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4 sm:space-y-5">
      <h2 className="text-xl font-bold text-foreground sm:text-2xl">Explore Learning</h2>
      
      <div className="space-y-3 sm:space-y-4">
        <ExploreCard
          icon={<BookOpen className="h-6 w-6 sm:h-7 sm:w-7" />}
          title="Learn New Words"
          description="Master vocabulary with interactive flashcards"
          color="text-purple-600"
          iconBg="bg-purple-50 dark:bg-purple-950/30"
          onClick={() => navigate('/flashcards')}
          delay={0}
        />
        
        <ExploreCard
          icon={<Video className="h-6 w-6 sm:h-7 sm:w-7" />}
          title="Watch Video Lessons"
          description="Interactive lessons with native speakers"
          color="text-red-600"
          iconBg="bg-red-50 dark:bg-red-950/30"
          delay={100}
        />
        
        <ExploreCard
          icon={<MessageSquare className="h-6 w-6 sm:h-7 sm:w-7" />}
          title="Practice Conversations"
          description="Chat practice and improve fluency"
          color="text-green-600"
          iconBg="bg-green-50 dark:bg-green-950/30"
          delay={200}
        />
        
        <ExploreCard
          icon={<Users className="h-6 w-6 sm:h-7 sm:w-7" />}
          title="Join Live Debates"
          description="Engage in group discussions and debates"
          color="text-blue-600"
          iconBg="bg-blue-50 dark:bg-blue-950/30"
          delay={300}
        />
      </div>
    </div>
  );
};
