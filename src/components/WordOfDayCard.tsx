import { Volume2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WordOfDayCard = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 p-6 text-white shadow-xl">
      {/* Decorative elements */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-white/10 blur-xl" />
      
      <div className="relative">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl">✨</div>
            <span className="text-sm font-semibold uppercase tracking-wide opacity-90">
              Word of the Day
            </span>
          </div>
          <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:bg-white/20">
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>

        <div className="mb-2">
          <h3 className="text-4xl font-bold">جميلة</h3>
          <p className="text-lg opacity-90">Beautiful</p>
        </div>

        <div className="mb-4 rounded-lg bg-white/10 p-3 backdrop-blur-sm">
          <p className="text-sm leading-relaxed">
            هذه مكتوبة جميلة
          </p>
          <p className="mt-1 text-xs opacity-80">
            This is a beautiful written (document)
          </p>
        </div>

        <Button 
          size="sm" 
          variant="secondary" 
          className="gap-2 bg-white/20 text-white hover:bg-white/30"
        >
          <Volume2 className="h-4 w-4" />
          Listen
        </Button>
      </div>
    </div>
  );
};
