import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Logo() {
  return (
    <Link href={"/"}>
      <div className="hidden lg:flex items-center gap-x-2">
        <Image
          src={"logo.svg"}
          alt="Logo"
          height={35}
          width={35}
        />
        <h1 className={cn("font-semibold text-lg", font.className)}>
          Codegame
        </h1>
      </div>
    </Link>
  );
}
