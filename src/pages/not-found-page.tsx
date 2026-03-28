import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

/**
 * 404 Not Found page displayed for unmatched routes.
 */
export function Component() {
  return (
    <section className="py-32">
      <Container className="text-center">
        <h1 className="font-display text-primary-200 text-7xl font-extrabold md:text-9xl">404</h1>
        <h2 className="font-display text-text-heading mt-4 text-2xl font-bold md:text-3xl">
          Page Not Found
        </h2>
        <p className="text-text-muted mx-auto mt-4 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Button to="/">Back to Home</Button>
        </div>
      </Container>
    </section>
  );
}
