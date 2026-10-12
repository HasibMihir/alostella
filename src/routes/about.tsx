import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Process, EnquiryCTA } from "@/components/editorial";
import { media, pageHead } from "@/lib/portfolio";
export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About",
      "Discover ALOSTELLA’s thoughtful approach to photography and film, from the first conversation to the final edit.",
      "/about",
    ),
  component: About,
});
function About() {
  return (
    <>
      <div className="inner-page">
        <div className="page-intro">
          <span className="eyebrow">Behind ALOSTELLA</span>
          <h1>
            Thoughtful visuals.
            <br />
            <em>Stories that stay.</em>
          </h1>
        </div>
        <div className="service-row">
          <img
            src={media.behind.url}
            className="about-image"
            alt="Behind the lens in Westminster, London"
          />
          <div className="about-copy">
            <span className="eyebrow">Photography & film, with intention</span>
            <h2>
              A feeling.
              <br />
              <em>Not just a frame.</em>
            </h2>
            <p>
              ALOSTELLA is a UK-based photography and film brand, capturing meaningful moments,
              events, people, brands and stories.
            </p>
            <p>
              Good visual work begins with understanding. The brief, the people, the atmosphere —
              the things that make your story yours. With careful observation and thoughtful
              composition, each image is made with purpose.
            </p>
            <p>
              From weddings and portraits to live events, corporate events, commercial photography
              and brand films, the approach is personal, considered and focused on delivering
              polished work.
            </p>
            <Button asChild variant="editorialText">
              <Link to="/contact">
                Let's talk about your story <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
        <section className="divider pt-16">
          <span className="eyebrow">The process</span>
          <h2 className="text-5xl">
            Considered, <em>from start to finish.</em>
          </h2>
          <Process />
        </section>
      </div>
      <EnquiryCTA />
    </>
  );
}
