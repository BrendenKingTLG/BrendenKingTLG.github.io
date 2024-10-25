import {
  Puzzle,
  Map,
  ShoppingBasket,
  BriefcaseBusiness,
  School,
  Brain,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const WORK = [
  {
    title: "Mapping Service",
    url: "#",
    icon: Map,
  },
  {
    title: "Sudoku IOS App",
    url: "#",
    icon: Puzzle,
  },
  {
    title: "Bookstore",
    url: "#",
    icon: ShoppingBasket,
  },
];
const ABOUT = [
  {
    title: "Expertise",
    url: "#",
    icon: Brain,
  },
  {
    title: "Experience",
    url: "#",
    icon: BriefcaseBusiness,
  },
  {
    title: "Education",
    url: "#",
    icon: School,
  },
];
export function AppSidebar() {
  return (
    <Sidebar>
      <h2 className="px-2 py-3">Brenden King</h2>
      <SidebarContent>
        <SidebarGroup>
          {/* About Me */}
          <SidebarGroupLabel>About Me</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {ABOUT.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          {/* Projects */}
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {WORK.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
