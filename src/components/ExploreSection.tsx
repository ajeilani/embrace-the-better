import { BookOpen, Video, MessageSquare, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ExploreSectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  iconColor: string;
  onClick?: () => void;
  delay?: number;
}

const ExploreCard = ({ icon, title, description, gradient, iconColor, onClick, delay = 0 }: ExploreSectionProps) => (
  <button
    onClick={onClick}
    className={`group relative overflow-hidden flex items-center gap-4 rounded-2xl bg-gradient-to-br ${gradient} border border-white/10 p-5 text-left shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:scale-[1.02] active:scale-[0.98] h-[85px] sm:h-[90px] sm:rounded-2xl sm:p-6 w-full animate-scale-in`}
    style={{ animationDelay: `${delay}ms` }}
  >
    {/* Shine effect on hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="absolute inset-0 bg-[var(--gradient-shine)]" 
           style={{
             backgroundSize: '200% 100%',
             animation: 'shimmer 2s ease-in-out infinite'
           }} 
      />
    </div>

    <div className={`relative flex-shrink-0 rounded-xl bg-white/20 backdrop-blur-sm p-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${iconColor}`}>
      {icon}
    </div>
    <div className="relative flex-1 min-w-0">
      <h3 className="mb-1 font-bold text-white text-base leading-tight sm:text-lg drop-shadow-sm">
        {title}
      </h3>
      <p className="text-xs text-white/80 leading-snug line-clamp-1 sm:text-sm font-medium">
        {description}
      </p>
    </div>
  </button>
);

export const ExploreSection = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4 sm:space-y-5 animate-fade-in">
      <h2 className="text-xl font-bold text-foreground sm:text-2xl">Explore Learning</h2>
      
      <div className="space-y-3 sm:space-y-4">
        <ExploreCard
          icon={<BookOpen className="h-6 w-6 sm:h-7 sm:w-7" />}
          title="Learn New Words"
          description="Master vocabulary with interactive flashcards"
          gradient="from-purple-500 via-purple-600 to-indigo-600"
          iconColor="text-white"
          onClick={() => navigate('/flashcards')}
          delay={0}
        />
        
        <ExploreCard
          icon={<Video className="h-6 w-6 sm:h-7 sm:w-7" />}
          title="Watch Video Lessons"
          description="Interactive lessons with native speakers"
          gradient="from-red-500 via-rose-600 to-pink-600"
          iconColor="text-white"
          delay={100}
        />
        
        <ExploreCard
          icon={<MessageSquare className="h-6 w-6 sm:h-7 sm:w-7" />}
          title="Practice Conversations"
          description="Chat practice and improve fluency"
          gradient="from-green-500 via-emerald-600 to-teal-600"
          iconColor="text-white"
          delay={200}
        />
        
        <ExploreCard
          icon={<Users className="h-6 w-6 sm:h-7 sm:w-7" />}
          title="Join Live Debates"
          description="Engage in group discussions and debates"
          gradient="from-blue-500 via-cyan-600 to-sky-600"
          iconColor="text-white"
          delay={300}
        />
      </div>
    </div>
  );
};
