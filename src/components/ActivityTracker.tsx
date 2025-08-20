export function ActivityTracker() {
  return (
    <div className="bg-card rounded-xl p-6 flex-1 border border-border min-h-[180px]">
      <div className="font-semibold mb-2">Activity Tracker</div>
      <div className="text-muted-foreground text-sm mb-4">Recent project activities</div>
      <div className="flex flex-col items-center justify-center h-24 text-muted-foreground">
        <span className="text-2xl mb-2">⚠️</span>
        <span>No activity records found for this project</span>
      </div>
    </div>
  );
}
