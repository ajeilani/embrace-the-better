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
    className="group flex items-start gap-3 rounded-2xl bg-card border border-border p-4 text-left shadow-sm transition-all hover:shadow-md hover:scale-[1.02] active:scale-[0.98] sm:gap-4 sm:p-5"
  >
    <div className={`rounded-xl ${color} p-2.5 transition-transform group-hover:scale-110 sm:p-3`}>
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="mb-1 font-semibold text-foreground text-sm sm:text-base">{title}</h3>
      <p className="text-xs text-muted-foreground sm:text-sm line-clamp-1">{description}</p>
    </div>
  </button>
);

export const ExploreSection = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-3 sm:space-y-4">
      <h2 className="text-lg font-bold text-foreground sm:text-xl">Explore</h2>
      
      <div className="space-y-3">
        <ExploreCard
          icon={<BookOpen className="h-5 w-5 text-purple-600" />}
          title="Learn New Words"
          description="Master vocabulary with interactive flashcards"
          color="bg-purple-50"
          onClick={() => navigate('/flashcards')}
        />
        
        <ExploreCard
          icon={<Video className="h-5 w-5 text-red-600" />}
          title="Watch Videos"
          description="Explore interactive lessons in Arabic"
          color="bg-red-50"
        />
        
        <ExploreCard
          icon={<MessageSquare className="h-5 w-5 text-green-600" />}
          title="Start a Chat"
          description="Practice conversation and improve fluency"
          color="bg-green-50"
        />
        
        <ExploreCard
          icon={<Users className="h-5 w-5 text-blue-600" />}
          title="Join Debate"
          description="Engage in discussions to enhance skills"
          color="bg-blue-50"
        />
      </div>
    </div>
  );
};
