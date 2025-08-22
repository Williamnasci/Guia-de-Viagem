import MainLayout from '@/layouts/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function EconomiaPage() {
  return (
    <MainLayout title="Economia">
      <section className="mx-auto my-10 max-w-6xl px-4 md:my-16">
        <h1 className="mb-6 text-3xl font-bold">Como Economizar</h1>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader><CardTitle>Alimentação</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-sm">
                <li>Mercados econômicos e marcas próprias</li>
                <li>Cozinhar em casa e marmitas</li>
                <li>Cartão estudantil em restaurantes universitários</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Transporte</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-sm">
                <li>Passe mensal estudantil</li>
                <li>Bicicletas públicas ou a pé</li>
                <li>Planeje deslocamentos para evitar picos</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Lazer</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-sm">
                <li>Museus com entrada gratuita/estudante</li>
                <li>Eventos universitários e comunitários</li>
                <li>Aplicativos de cupons e descontos locais</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
}
