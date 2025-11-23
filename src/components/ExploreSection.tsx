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
    className="group flex items-start gap-4 rounded-2xl bg-card p-5 text-left shadow-sm transition-all hover:shadow-md hover:-translate-y-1 active:scale-[0.98]"
  >
    <div className={`rounded-xl ${color} p-3 transition-transform group-hover:scale-110`}>
      {icon}
    </div>
    <div className="flex-1">
      <h3 className="mb-1 font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </button>
);

export const ExploreSection = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-foreground">Explore</h2>
      
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
