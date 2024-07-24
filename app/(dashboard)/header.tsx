"use client";

import { Bell } from "lucide-react";
import Logo from "./logo";
import Navigation from "./navigation";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  return (
    <header className="border-b shadow-md px-4 py-4 lg:px-14 pb-">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center lg:gap-x-16">
            <Logo />
            <Navigation />
          </div>
          <div className="flex items-center gap-x-2">
            <Bell />
            Notification
            <Separator
              orientation="vertical"
              className="mx-2"
            />
            {/* User Button */}
            <p>
              SignIn
            </p>
            {/* Language */}
            <div className="ml-2 flex items-center gap-x-2">
              {/* Flag */}
              🏳️‍🌈
              <p>
              EN
            </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
