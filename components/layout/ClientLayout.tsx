"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyWhatsAppBar } from "./StickyWhatsAppBar";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) return <>{children}</>;

  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pb-20 lg:pb-0">
        {children}
      </main>
      <Footer />
      <StickyWhatsAppBar />
    </>
  );
}
