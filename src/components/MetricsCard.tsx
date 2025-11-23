import { Flame, Clock } from "lucide-react";

interface MetricItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

const MetricItem = ({ icon, value, label, color }: MetricItemProps) => (
  <div className="flex items-center gap-3 rounded-2xl bg-card p-4 shadow-sm">
    <div className={`rounded-xl ${color} p-3 text-2xl`}>
      {icon}
    </div>
    <div>
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  </div>
);

export const MetricsCard = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <MetricItem
        icon={<Flame className="h-5 w-5 text-orange-500" />}
        value="7"
        label="Day Streak"
        color="bg-orange-50"
      />
      <MetricItem
        icon={<Clock className="h-5 w-5 text-blue-500" />}
        value="40 min"
        label="Today's Time"
        color="bg-blue-50"
      />
    </div>
  );
};
