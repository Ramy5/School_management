import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/cn";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "School Management Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cn("flex h-screen")}>
      {/* LEFT */}
      <div className={cn("w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]")}>
        <Link
          href={"/"}
          className={cn(
            "flex p-4 justify-center items-center lg:justify-start gap-2"
          )}
        >
          <Image src="/logo.png" alt="logo" width={28} height={28} />
          <span className={cn("hidden lg:block font-bold")}>School</span>
        </Link>

        <Menu />
      </div>

      {/* RIGHT */}
      <div
        className={cn(
          "w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-y-auto"
        )}
      >
        <Navbar />
        {children}
      </div>
    </div>
  );
}
