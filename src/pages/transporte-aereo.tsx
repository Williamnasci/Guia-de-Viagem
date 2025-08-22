import MainLayout from '@/layouts/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TransporteAereoPage() {
  return (
    <MainLayout title="Transporte Aéreo">
      <section className="mx-auto my-10 max-w-6xl px-4 md:my-16">
        <h1 className="mb-6 text-3xl font-bold">Transporte Aéreo Low-Cost</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle>Estratégias</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-sm">
                <li>Flexibilidade de datas e aeroportos alternativos</li>
                <li>Antecedência em alta temporada; alertas de preço</li>
                <li>Bagagem: atenção às dimensões e taxas extras</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Observações</CardTitle></CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-sm">
                <li>Low-costs geralmente operam em aeroportos secundários</li>
                <li>Check-in online e embarque prioritário podem valer a pena</li>
                <li>Leia as regras tarifárias para evitar surpresas</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
}
