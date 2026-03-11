import Link from "next/link";

const projectOrder = [
  { label: "Salesforce", href: "/projects/experiences/salesforce" },
  { label: "Gudwork Inc.", href: "/projects/experiences/gudwork" },
  { label: "PowderPrep", href: "/projects/powderprep" },
  { label: "TNE.ai Dashboard", href: "/projects/tne-dashboard" },
  { label: "Latex OCR", href: "/projects/latex-ocr" },
];

export default function ProjectNav({ current }: { current: string }) {
  const index = projectOrder.findIndex((p) => p.href === current);
  const prev = index > 0 ? projectOrder[index - 1] : null;
  const next = index < projectOrder.length - 1 ? projectOrder[index + 1] : null;

  return (
    <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-300">
      {prev ? (
        <Link
          href={prev.href}
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          ← Previous Project
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next.href}
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          Next Project →
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
