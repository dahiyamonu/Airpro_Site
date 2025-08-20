import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Home, List, Folder, Upload, Calendar } from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: Home, href: "/" },
  { label: "My Tasks", icon: List, href: "/tasks" },
  { label: "Project Overview", icon: Folder, href: "/projects" },
  { label: "Submissions", icon: Upload, href: "/submissions" },
  { label: "Event Calendar", icon: Calendar, href: "/calendar" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
<aside className="d-flex flex-column h-100 bg-light border-end p-3" style={{ width: "240px" }}>
  {/* Logo Section */}
  <div className="d-flex align-items-center gap-2 mb-4">
    <span className="d-flex align-items-center justify-content-center rounded-circle bg-secondary text-white p-2">
      <Folder size={22} />
    </span>
    <span className="fw-bold fs-5">MarkIt</span>
  </div>

  {/* Navigation */}
  <nav className="d-flex flex-column mb-3">
    <span className="text-uppercase text-muted small fw-semibold px-2 mb-2">Main</span>
    {navItems.map(({ label, icon: Icon, href }) => (
      <Link key={label} href={href} passHref legacyBehavior>
        <a
          className={`btn d-flex align-items-center text-start mb-1 w-100 ${
            pathname === href ? "btn-outline-secondary active" : "btn-light"
          }`}
        >
          <Icon className="me-2" size={18} />
          {label}
        </a>
      </Link>
    ))}
  </nav>

  {/* Bottom Action */}
  <div className="mt-auto">
    <button className="btn btn-outline-dark w-100">
      Select Project
    </button>
  </div>
</aside>

  );
}