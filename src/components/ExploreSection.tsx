import { BookOpen, Video, MessageSquare, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ExploreSectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  onClick?: () => void;
}

const ExploreCard = ({ icon, title, description, color, onClick }: ExploreSectionProps) => (
  <button
    onClick={onClick}
    className="group flex items-center gap-3 rounded-xl bg-card border border-border p-4 text-left shadow-sm transition-all hover:shadow-md hover:scale-[1.02] active:scale-[0.98] min-h-[72px] sm:rounded-2xl sm:p-5"
  >
    <div className={`flex-shrink-0 rounded-lg ${color} p-2.5 transition-transform group-hover:scale-110 sm:rounded-xl sm:p-3`}>
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="mb-0.5 font-semibold text-foreground text-sm leading-tight sm:text-base sm:mb-1">{title}</h3>
      <p className="text-xs text-muted-foreground leading-snug sm:text-sm line-clamp-1">{description}</p>
    </div>
  </button>
);

export const ExploreSection = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-3 sm:space-y-4">
      <h2 className="text-lg font-bold text-foreground sm:text-xl">Explore</h2>
      
      <div className="space-y-2.5 sm:space-y-3">
        <ExploreCard
          icon={<BookOpen className="h-5 w-5 text-purple-600 sm:h-6 sm:w-6" />}
          title="Learn New Words"
          description="Master vocabulary with interactive flashcards"
          color="bg-purple-50"
          onClick={() => navigate('/flashcards')}
        />
        
        <ExploreCard
          icon={<Video className="h-5 w-5 text-red-600 sm:h-6 sm:w-6" />}
          title="Watch Videos"
          description="Explore interactive lessons in Arabic"
          color="bg-red-50"
        />
        
        <ExploreCard
          icon={<MessageSquare className="h-5 w-5 text-green-600 sm:h-6 sm:w-6" />}
          title="Start a Chat"
          description="Practice conversation and improve fluency"
          color="bg-green-50"
        />
        
        <ExploreCard
          icon={<Users className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" />}
          title="Join Debate"
          description="Engage in discussions to enhance skills"
          color="bg-blue-50"
        />
      </div>
    </div>
  );
};
