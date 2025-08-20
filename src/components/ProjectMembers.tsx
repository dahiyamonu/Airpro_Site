export function ProjectMembers() {
  return (
    <div className="bg-card rounded-xl p-6 flex-1 border border-border min-h-[180px]">
      <div className="font-semibold mb-2">Project Members</div>
      <div className="text-muted-foreground text-sm mb-4">Stats for project members</div>
      <div className="flex flex-col items-center justify-center h-24 text-muted-foreground">
        <span>No member stats available.</span>
      </div>
    </div>
  );
}