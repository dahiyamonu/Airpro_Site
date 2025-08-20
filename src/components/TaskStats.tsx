type StatCardProps = {
  title: string;
  value: number;
  description: string;
};

function StatCard({ title, value, description }: StatCardProps) {
  return (
    <div className="bg-card rounded-xl p-6 flex-1 min-w-[200px] border border-border">
      <div className="text-muted-foreground text-sm mb-2">{title}</div>
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-muted-foreground text-xs mt-2">{description}</div>
    </div>
  );
}

export function TaskStats() {
  return (
    <div className="flex gap-4 mb-6">
      <StatCard title="Pending Tasks" value={0} description="Number of pending tasks" />
      <StatCard title="Review Tasks" value={0} description="Number of review tasks" />
      <StatCard title="Completed Tasks" value={0} description="Number of completed tasks" />
      <StatCard title="Rejected Tasks" value={0} description="Number of rejected tasks" />
    </div>
  );
}