import { Mail, Linkedin, Github, FileText } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#dce8e4] flex flex-col items-center justify-center px-8">
      <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
        Get in touch
      </p>
      <h1 className="text-5xl font-bold text-gray-900 mb-10">Contact Me</h1>
      <div className="bg-[#c8d8d4] rounded-full px-8 py-4 flex flex-wrap justify-center gap-8">
        <a
          href="mailto:brendamutai2026@u.northwestern.edu"
          className="flex items-center gap-2 text-gray-800 hover:text-gray-600 transition-colors"
        >
          <Mail className="w-5 h-5" /> Email
        </a>
        <a
          href="https://www.linkedin.com/in/brenda-mutai-b55a78240/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-800 hover:text-gray-600 transition-colors"
        >
          <Linkedin className="w-5 h-5" /> LinkedIn
        </a>
        <a
          href="https://github.com/Brenda2026"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-800 hover:text-gray-600 transition-colors"
        >
          <Github className="w-5 h-5" /> GitHub
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-800 hover:text-gray-600 transition-colors"
        >
          <FileText className="w-5 h-5" /> Resume
        </a>
      </div>
    </main>
  );
}
