import MainLayout from '@/layouts/MainLayout';
import { COST_OF_LIVING } from '@/constants/content';
import { formatMoney } from '@/lib/utils';

export default function CustoDeVidaPage() {
  return (
    <MainLayout title="Custo de Vida">
      <section className="mx-auto my-10 max-w-6xl px-4 md:my-16">
        <h1 className="mb-6 text-3xl font-bold">Custo de Vida por Cidade</h1>
        <p className="mb-8 text-neutral-700">
          Estimativas mensais para estudantes (valores aproximados, variam com estilo de vida e época do ano).
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-sm">
  <thead className="bg-[hsl(var(--surface-2))]">
    <tr className="border-b border-app text-left text-main">
      {['Cidade','País','Aluguel','Alimentação','Transporte','Lazer','Total'].map(h=>(
        <th key={h} className="p-3">{h}</th>
      ))}
    </tr>
  </thead>
  <tbody>
    {COST_OF_LIVING.map((row, i) => {
      const total = row.rent + row.food + row.transport + row.leisure;
      return (
        <tr key={row.city}
          className={`${i % 2 ? 'bg-[hsl(var(--surface-1))]' : 'bg-[hsl(var(--surface-2))]'} hover:brightness-[0.98] dark:hover:brightness-110 border-b border-app`}>
          <td className="p-3 font-medium text-main">{row.city}</td>
          <td className="p-3 text-muted">{row.country}</td>
          <td className="p-3 text-main">{formatMoney(row.rent, row.currency)}</td>
          <td className="p-3 text-main">{formatMoney(row.food, row.currency)}</td>
          <td className="p-3 text-main">{formatMoney(row.transport, row.currency)}</td>
          <td className="p-3 text-main">{formatMoney(row.leisure, row.currency)}</td>
          <td className="p-3 font-semibold text-main">{formatMoney(total, row.currency)}</td>
        </tr>
      );
    })}
  </tbody>
</table>

        </div>
        <p className="mt-4 text-xs text-neutral-500">
          *Dica:* compartilhe apartamento/quarto universitário para reduzir custos; use carteirinha estudantil para descontos.
        </p>
      </section>
    </MainLayout>
  );
}
