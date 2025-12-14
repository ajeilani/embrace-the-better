import { useState, useEffect } from "react";
import { Flame, Clock, Zap, ArrowRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Flame,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50",
    title: "Daily Streak",
    description: "This shows how many days in a row you've studied this week. Keep it going to build a strong habit!",
  },
  {
    icon: Clock,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
    title: "Study Time",
    description: "This tracks how much time you've spent studying this week. Every minute counts towards mastering Arabic!",
  },
  {
    icon: Zap,
    iconColor: "text-yellow-500",
    iconBg: "bg-yellow-50",
    title: "XP Points",
    description: "Earn points every time you complete a task, finish a lesson, or practice flashcards. Level up your learning!",
  },
];

export const OnboardingGuide = () => {
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem("hasSeenOnboarding");
    if (!hasSeenOnboarding) {
      setOpen(true);
    }
  }, []);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleClose();
    }
  };

  const handleClose = () => {
    localStorage.setItem("hasSeenOnboarding", "true");
    setOpen(false);
  };

  const step = steps[currentStep];
  const Icon = step.icon;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        
        <DialogHeader className="text-center sm:text-center">
          <div className="mx-auto mb-4">
            <div className={`w-16 h-16 rounded-full ${step.iconBg} flex items-center justify-center`}>
              <Icon className={`h-8 w-8 ${step.iconColor}`} />
            </div>
          </div>
          <DialogTitle className="text-xl">{step.title}</DialogTitle>
          <DialogDescription className="text-base pt-2">
            {step.description}
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center justify-between mt-6">
          {/* Progress dots */}
          <div className="flex gap-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentStep ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>

          <Button onClick={handleNext} className="gap-2">
            {currentStep < steps.length - 1 ? (
              <>
                Next
                <ArrowRight className="h-4 w-4" />
              </>
            ) : (
              "Get Started"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
