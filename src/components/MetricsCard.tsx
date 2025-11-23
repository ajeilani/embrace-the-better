import { Flame, Clock, Zap } from "lucide-react";

interface MetricItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

const MetricItem = ({ icon, value, label, color }: MetricItemProps) => (
  <div className="flex flex-col items-center justify-center gap-1.5 rounded-xl bg-card border border-border p-3 shadow-sm h-[90px] sm:h-[95px] sm:rounded-2xl">
    <div className={`rounded-lg ${color} p-2`}>
      {icon}
    </div>
    <div className="text-center">
      <div className="text-base font-bold text-foreground sm:text-lg">{value}</div>
      <div className="text-[10px] text-muted-foreground whitespace-nowrap sm:text-xs">{label}</div>
    </div>
  </div>
);

export const MetricsCard = () => {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3">
      <MetricItem
        icon={<Flame className="h-4 w-4 text-orange-500 sm:h-5 sm:w-5" />}
        value="7"
        label="Streak"
        color="bg-orange-50"
      />
      <MetricItem
        icon={<Clock className="h-4 w-4 text-blue-500 sm:h-5 sm:w-5" />}
        value="12.5h"
        label="Time"
        color="bg-blue-50"
      />
      <MetricItem
        icon={<Zap className="h-4 w-4 text-yellow-500 sm:h-5 sm:w-5" />}
        value="850"
        label="XP"
        color="bg-yellow-50"
      />
    </div>
  );
};
