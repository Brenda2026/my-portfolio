"use client";
import { useState } from "react";
import Image from "next/image";

export default function ImageModal({
  src,
  alt,
  width,
  height,
  fill,
  className,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Clickable image */}
      <div className="cursor-zoom-in" onClick={() => setOpen(true)}>
        {fill ? (
          <Image src={src} alt={alt} fill className={className} />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width!}
            height={height!}
            className={className}
          />
        )}
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-8"
          onClick={() => setOpen(false)}
        >
          {/* X button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          {/* Expanded image */}
          <div
            className="relative max-w-5xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={src} alt={alt} fill className="object-contain" />
          </div>
        </div>
      )}
    </>
  );
}
