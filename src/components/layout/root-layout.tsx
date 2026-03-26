import { Outlet } from "react-router";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

/**
 * Root layout wrapping all pages.
 * Renders the navbar, a main content area with <Outlet />, and the footer.
 * Also triggers scroll-to-top on route changes.
 */
export function RootLayout() {
  useScrollToTop();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
