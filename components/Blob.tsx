"use client";

/* The soft gradient orbs behind the hero and section headers.

   Built from layered radial gradients on a blurred element rather than an
   image, so it scales to any viewport, costs no download, and can drift
   continuously without a video loop. border-radius does the organic shape;
   the reference's 3D renders are the thing being evoked, not copied. */

export default function Blob({
  className = "",
  size = 420,
  delay = 0,
  opacity = 0.55,
}: {
  className?: string;
  size?: number;
  delay?: number;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      style={{
        width: size,
        height: size,
        opacity,
        filter: "blur(46px)",
        borderRadius: "62% 38% 54% 46% / 46% 54% 46% 54%",
        background:
          "radial-gradient(circle at 32% 30%, var(--mint), transparent 58%)," +
          "radial-gradient(circle at 70% 68%, var(--violet), transparent 62%)," +
          "radial-gradient(circle at 50% 50%, var(--grape), transparent 72%)",
        animation: `drift 18s ease-in-out ${delay}s infinite`,
        willChange: "transform",
      }}
    />
  );
}
