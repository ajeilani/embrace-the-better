import { cn } from "@/lib/utils";

interface CategoryCardProps {
  emoji: string;
  title: string;
  level: string;
  onClick?: () => void;
  delay?: number;
}

export const CategoryCard = ({ emoji, title, level, onClick, delay = 0 }: CategoryCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-card p-6",
        "shadow-[0_4px_16px_-2px_hsl(var(--primary)/0.08)]",
        "hover:shadow-[0_8px_24px_-4px_hsl(var(--primary)/0.15)]",
        "transition-all duration-300 ease-out",
        "hover:scale-[1.02] hover:-translate-y-1",
        "active:scale-[0.98]",
        "animate-fade-in",
        "text-left w-full"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative flex flex-col items-center justify-center space-y-3">
        <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
          {emoji}
        </div>
        
        <div className="text-center space-y-1">
          <h3 className="font-semibold text-foreground text-lg">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {level}
          </p>
        </div>
      </div>
    </button>
  );
};
