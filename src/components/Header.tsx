import { Input } from "@/components/ui/input";
import { Bell, Sun } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-background">
      <h1 className="text-2xl font-bold">Hi, Welcome back <span className="ml-1">👋</span></h1>
      <div className="flex items-center gap-4">
        <Input placeholder="Search..." className="w-64" />
        <Button variant="ghost" size="icon"><Bell /></Button>
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <Button variant="outline" size="sm">Select a theme: <span className="font-bold ml-1">Default</span></Button>
      </div>
    </header>
  );
}