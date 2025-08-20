export function ProjectSelector() {
  return (
    <div className="text-center mt-8">
      <div className="text-lg font-semibold mb-2">No project selected</div>
      <div className="text-muted-foreground">
        You have not selected or created a project yet.<br />
        To get started, please create a project from the sidebar.
      </div>
    </div>
  );
}