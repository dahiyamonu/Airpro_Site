
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Search, Folder } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-dark text-light">
      {/* Sidebar */}
      <aside className="d-flex flex-column h-100 w-60 bg-body-tertiary p-3 border-end">
        <div className="d-flex align-items-center gap-2 mb-5">
          <span className="rounded-circle bg-secondary p-2">
            <Folder className="w-6 h-6 text-white" />
          </span>
          <span className="fw-bold fs-5">Airpro</span>
        </div>

        <ul className="nav flex-column gap-2">
          <li className="nav-item">
            <a className="nav-link active text-light" href="#">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">
              My Tasks
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">
              Project Overview
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">
              Submissions
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">
              Event Calendar
            </a>
          </li>
        </ul>

        <div className="mt-auto">
          <Button variant="secondary" className="w-100">
            Select Project
          </Button>
        </div>
      </aside>

      {/* Main Dashboard */}
      <main className="flex-grow-1 p-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold">Hi, Welcome back 👋</h4>

          <div className="d-flex align-items-center gap-3">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Input
              type="text"
              placeholder="Search..."
              className="form-control w-50"
            />
            <Button variant="outline">Select a theme: Default</Button>
          </div>
        </div>

        {/* Task Stats */}
        <div className="row g-3 mb-4">
          {[
            { title: "Pending Tasks", value: 0, desc: "Number of pending tasks" },
            { title: "Review Tasks", value: 0, desc: "Number of review tasks" },
            { title: "Completed Tasks", value: 0, desc: "Number of completed tasks" },
            { title: "Rejected Tasks", value: 0, desc: "Number of rejected tasks" },
          ].map((stat, idx) => (
            <div className="col-md-3" key={idx}>
              <Card className="h-100 shadow-sm">
                <CardHeader>
                  <CardTitle>{stat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <h2 className="fw-bold">{stat.value}</h2>
                  <p className="text-muted small">{stat.desc}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Activity & Members */}
        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <Card className="h-100 shadow-sm">
              <CardHeader>
                <CardTitle>Activity Tracker</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted">No activity records found for this project</p>
              </CardContent>
            </Card>
          </div>

          <div className="col-md-6">
            <Card className="h-100 shadow-sm">
              <CardHeader>
                <CardTitle>Project Members</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted">No member stats available.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* No project selected */}
        <div className="text-center py-5">
          <h5 className="fw-bold">No project selected</h5>
          <p className="text-muted">
            You have not selected or created a project yet. <br />
            To get started, please create a project from the sidebar.
          </p>
        </div>
      </main>
    </div>
  );
}
