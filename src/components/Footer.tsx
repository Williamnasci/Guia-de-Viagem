export default function Footer() {
  return (
    <footer className="border-t theme-border">
      <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} EU Mobility Hub — Feito para estudantes em mobilidade na UE.
      </div>
    </footer>
  );
}
