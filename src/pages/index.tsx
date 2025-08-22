import MainLayout from '@/layouts/MainLayout';
import PageHero from '@/components/PageHero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function HomePage() {
  return (
    <MainLayout>
      <PageHero />
      <section className="mx-auto mb-16 grid max-w-6xl gap-6 px-4 md:grid-cols-3">
        {[
          { title: 'Documentação', href: '/documentacao', desc: 'Dicas e checklists para vistos, passaportes e seguro saúde.' },
          { title: 'Custo de Vida', href: '/custo-de-vida', desc: 'Estimativas por cidade: aluguel, alimentação, transporte e lazer.' },
          { title: 'Hospedagem', href: '/hospedagem', desc: 'Onde e como procurar aluguel, dormitórios e plataformas confiáveis.' },
          { title: 'Transporte Aéreo', href: '/transporte-aereo', desc: 'Companhias low-cost e como achar passagens mais baratas.' },
          { title: 'Economia', href: '/economia', desc: 'Como economizar com comida, transporte e lazer sem perder qualidade.' },
        ].map((item) => (
          <Card key={item.href}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-neutral-700">{item.desc}</p>
              <Link href={item.href} className="text-sm font-medium underline-offset-4 hover:underline">
                Acessar →
              </Link>
            </CardContent>
          </Card>
        ))}
      </section>
    </MainLayout>
  );
}
