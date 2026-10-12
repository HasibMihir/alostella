import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
type Photo = { src: string; alt: string; category?: string };
export function PhotoGallery({ images }: { images: readonly Photo[] }) {
  const [active, setActive] = useState<number | null>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const current = active === null ? undefined : images[active];
  function move(direction: number) {
    setActive((prev) =>
      prev === null ? null : (prev + direction + images.length) % images.length,
    );
  }
  return (
    <>
      <div className="gallery">
        {images.map((p, i) => (
          <Button
            variant="ghost"
            className="gallery-item zoom"
            key={p.src}
            onClick={(e) => {
              trigger.current = e.currentTarget;
              setActive(i);
            }}
            aria-label={`Open photograph: ${p.alt}`}
          >
            <img src={p.src} alt={p.alt} loading="lazy" />
          </Button>
        ))}
      </div>
      <Dialog
        open={active !== null}
        onOpenChange={(v) => {
          if (!v) setActive(null);
        }}
      >
        <DialogContent
          onCloseAutoFocus={(e) => {
            e.preventDefault();
            trigger.current?.focus();
          }}
          className="lightbox"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") {
              e.preventDefault();
              move(1);
            }
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              move(-1);
            }
          }}
        >
          <DialogTitle className="sr-only">Photograph gallery</DialogTitle>
          <DialogDescription className="sr-only">{current?.alt}</DialogDescription>
          {current && <img className="lightbox-image" src={current.src} alt={current.alt} />}
          <div className="lightbox-nav">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Previous photograph"
              onClick={() => move(-1)}
            >
              <ChevronLeft />
            </Button>
            <span className="placeholder-note" aria-live="polite">
              {active === null ? 0 : active + 1} / {images.length}
            </span>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Next photograph"
              onClick={() => move(1)}
            >
              <ChevronRight />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
