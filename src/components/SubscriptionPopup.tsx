import { useState } from "react";
import { Check, Sparkles, MessageCircle, Mic, Zap } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SubscriptionPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubscribe?: (plan: "monthly" | "yearly") => void;
}

export const SubscriptionPopup = ({
  open,
  onOpenChange,
  onSubscribe,
}: SubscriptionPopupProps) => {
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "yearly">("yearly");

  const handleStartTrial = () => {
    onSubscribe?.(selectedPlan);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden rounded-3xl border-0 shadow-2xl backdrop-blur-xl">
        <div className="px-6 pt-8 pb-6">
          <DialogHeader className="text-center sm:text-center space-y-3">
            <div className="mx-auto mb-2">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-[var(--shadow-glow)]">
                <Sparkles className="h-7 w-7 text-primary-foreground" />
              </div>
            </div>
            <DialogTitle className="text-2xl font-bold leading-tight">
              You've reached your 10-minute weekly limit
            </DialogTitle>
            <DialogDescription className="text-base leading-relaxed">
              Keep learning Arabic with unlimited access. Start your 7-day free trial today.
            </DialogDescription>
          </DialogHeader>

          {/* Plans */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            {/* Monthly */}
            <button
              type="button"
              onClick={() => setSelectedPlan("monthly")}
              className={cn(
                "relative rounded-2xl border-2 p-4 text-left transition-all",
                selectedPlan === "monthly"
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card hover:border-primary/40"
              )}
            >
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Monthly
              </div>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-foreground">$8</span>
                <span className="text-xs text-muted-foreground">/mo</span>
              </div>
              <div className="mt-2 text-[11px] text-muted-foreground leading-snug">
                7-day free trial<br />Cancel anytime
              </div>
            </button>

            {/* Yearly - highlighted */}
            <button
              type="button"
              onClick={() => setSelectedPlan("yearly")}
              className={cn(
                "relative rounded-2xl border-2 p-4 text-left transition-all",
                selectedPlan === "yearly"
                  ? "border-primary bg-gradient-to-br from-primary/10 to-primary-glow/10 shadow-[var(--shadow-glow)]"
                  : "border-primary/40 bg-card hover:border-primary"
              )}
            >
              <div className="absolute -top-2 right-3 px-2 py-0.5 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground text-[10px] font-bold uppercase tracking-wide shadow-md">
                Save 42%
              </div>
              <div className="text-xs font-semibold text-primary uppercase tracking-wide">
                Yearly
              </div>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-foreground">$56</span>
                <span className="text-xs text-muted-foreground">/yr</span>
              </div>
              <div className="mt-2 text-[11px] text-muted-foreground leading-snug">
                7-day free trial<br />Best value
              </div>
            </button>
          </div>

          {/* Value bullets */}
          <ul className="mt-6 space-y-2.5">
            {[
              { icon: MessageCircle, text: "Unlimited conversations" },
              { icon: Mic, text: "Speak and get instant corrections" },
              { icon: Zap, text: "Learn faster with AI" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm text-foreground">{text}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-6 space-y-2">
            <Button
              onClick={handleStartTrial}
              className="w-full h-12 text-base font-semibold rounded-2xl bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 shadow-[var(--shadow-glow)]"
            >
              Start 7-Day Free Trial
            </Button>
            <p className="text-center text-[11px] text-muted-foreground">
              No charge today • Cancel anytime before trial ends
            </p>
            <Button
              variant="ghost"
              onClick={() => onOpenChange(false)}
              className="w-full h-10 text-sm text-muted-foreground hover:text-foreground"
            >
              Maybe later
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
