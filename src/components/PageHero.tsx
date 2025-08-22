import { SITE } from '@/constants/content';
import { Button } from './ui/button';
import Link from 'next/link';

export default function PageHero() {
  return (
    <section className="mx-auto my-10 grid max-w-6xl gap-6 px-4 md:my-16 md:grid-cols-2">
      <div className="flex flex-col justify-center">
        <h1 className="mb-4 text-3xl font-bold md:text-5xl text-main">{SITE.tagline}</h1>
        <p className="mb-6 text-muted">
          Tudo o que você precisa para planejar, chegar e se adaptar mais rápido: documentos,
          custo de vida, hospedagem, transporte aéreo e como economizar no dia a dia.
        </p>
        <div className="flex gap-3">
          <Button asChild size="lg"><Link href={SITE.cta.href}>{SITE.cta.label}</Link></Button>
          <Button asChild variant="outline" size="lg"><Link href="/custo-de-vida">Ver custo de vida</Link></Button>
        </div>
      </div>
      <div className="rounded-3xl border border-app hero-gradient p-10">
        <ul className="grid gap-3 text-sm text-main">
          <li>✅ Checklists de documentos</li>
          <li>📍 Cidades universitárias e estimativas</li>
          <li>🏠 Onde buscar hospedagem confiável</li>
          <li>✈️ Companhias low-cost e dicas de passagem</li>
          <li>💶 Como economizar (alimentação, transporte, lazer)</li>
        </ul>
      </div>
    </section>
  );
}
