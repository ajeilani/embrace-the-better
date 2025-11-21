import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const levels = ["Beginner", "Intermediate", "Advanced"];

interface LevelSelectorProps {
  selectedLevel: string;
  onLevelChange: (level: string) => void;
}

export const LevelSelector = ({ selectedLevel, onLevelChange }: LevelSelectorProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="secondary" 
          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-primary-foreground border-0 rounded-full px-6"
        >
          {selectedLevel}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-xl">
        {levels.map((level) => (
          <DropdownMenuItem
            key={level}
            onClick={() => onLevelChange(level)}
            className="cursor-pointer rounded-lg"
          >
            {level}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
