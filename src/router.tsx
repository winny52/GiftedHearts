import { createBrowserRouter } from "react-router";
import { RootLayout } from "@/components/layout/root-layout";
import { ErrorBoundary } from "@/components/ui/error-boundary";

/**
 * Application router configuration using React Router v7 Data Mode.
 *
 * All page components use the `lazy` property for automatic code splitting —
 * each page is only loaded when the user navigates to that route.
 *
 * Pages export a `Component` named export which is what `lazy()` resolves to.
 */
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: ErrorBoundary,
    children: [
      {
        index: true,
        lazy: () => import("@/pages/home/home-page"),
      },
      {
        path: "about",
        lazy: () => import("@/pages/about/about-page"),
      },
      {
        path: "our-story",
        lazy: () => import("@/pages/about/components/our-story-timeline"),
      },
      {
        path: "projects",
        lazy: () => import("@/pages/projects/projects-page"),
      },
      {
        path: "projects/:slug",
        lazy: () => import("@/pages/projects/project-detail-page"),
      },
      {
        path: "get-involved",
        lazy: () => import("@/pages/get-involved/get-involved-page"),
      },
      {
        path: "contact",
        lazy: () => import("@/pages/contact/contact-page"),
      },
      {
        path: "*",
        lazy: () => import("@/pages/not-found-page"),
      },
    ],
  },
]);
