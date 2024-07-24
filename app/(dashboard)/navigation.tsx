"use client";

import { usePathname, useRouter } from "next/navigation";
import NavButton from "./nav-button";
import { useMedia } from "react-use";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const routers = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Codegames Events",
    href: "/events",
  },
  {
    label: "Help Center",
    href: "/help",
  },
];

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useMedia("(max-width: 1024px)", false);

  if (isMobile) {
    return (
      <Sheet modal={true}>
        <SheetTrigger asChild>
          <Button
            size={"sm"}
            variant={"outline"}
            className="bg-muted-foreground/10 hover:bg-muted-foreground/30 border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-foreground focus:bg-muted-foreground/20"
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="px-2">
          <nav className="flex flex-col space-y-4 pt-6">
            {routers.map((route) => (
              <Button
                key={route.href}
                variant={route.href === pathname ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {routers.map((route) => (
        <NavButton
          key={route.href}
          href={route.href}
          label={route.label}
          isActive={pathname === route.href}
        />
      ))}
    </nav>
  );
}
