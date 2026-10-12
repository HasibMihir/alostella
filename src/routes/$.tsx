import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { pageHead } from "@/lib/portfolio";
export const Route = createFileRoute("/$")({
  head: () => {
    const head = pageHead(
      "Page not found",
      "This page is out of frame. Return to the ALOSTELLA photography and film portfolio.",
      "/",
    );
    return { meta: [...head.meta, { name: "robots", content: "noindex" }] };
  },
  component: Missing,
});
function Missing() {
  return (
    <div className="inner-page">
      <div className="page-intro py-28">
        <span className="eyebrow">404 / Out of frame</span>
        <h1>
          A moment
          <br />
          <em>out of frame.</em>
        </h1>
        <p>This page isn’t here. Let’s take you back to the story.</p>
        <Button asChild variant="editorial" className="mt-8">
          <Link to="/">
            <ArrowLeft />
            Back to ALOSTELLA
          </Link>
        </Button>
      </div>
    </div>
  );
}
