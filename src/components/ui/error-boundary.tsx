import { useRouteError, isRouteErrorResponse, Link } from "react-router";
import { Container } from "./container";

/**
 * Global error boundary for the router.
 * Displays a user-friendly error message with a link back to home.
 */
export function ErrorBoundary() {
  const error = useRouteError();

  const title = isRouteErrorResponse(error)
    ? `${error.status} — ${error.statusText}`
    : "Something went wrong";

  const message = isRouteErrorResponse(error)
    ? error.data
    : error instanceof Error
      ? error.message
      : "An unexpected error occurred.";

  return (
    <section className="py-32">
      <Container className="text-center">
        <h1 className="font-display text-text-heading mb-4 text-3xl font-bold">{title}</h1>
        <p className="text-text-muted mb-8">{message}</p>
        <Link
          to="/"
          className="bg-primary-600 hover:bg-primary-700 inline-flex items-center justify-center rounded-[var(--radius-button)] px-6 py-3 font-semibold text-white transition-colors"
        >
          Go Home
        </Link>
      </Container>
    </section>
  );
}
