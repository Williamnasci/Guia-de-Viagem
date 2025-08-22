import MainLayout from '@/layouts/MainLayout';
import Image from 'next/image';

export default function DocumentacaoPage() {
  return (
    <MainLayout
      title="Documentação para Estudantes"
      description="Checklist e dicas sobre vistos, passaportes, seguro saúde e mais."
    >
      <section className="mx-auto my-10 max-w-6xl rounded-2xl border border-app bg-surface px-4 py-10 shadow-1 md:my-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
        
          <div>
            <h1 className="mb-4 text-3xl font-bold text-main">Documentação</h1>
            <p className="mb-6 text-muted">
              Antes de viajar, confira todos os documentos necessários para evitar problemas na sua chegada.
            </p>
            <ul className="list-disc space-y-3 pl-5 text-main">
              <li><strong>Passaporte:</strong> válido por pelo menos 6 meses.</li>
              <li><strong>Visto:</strong> de estudante ou Schengen, dependendo do país.</li>
              <li><strong>Seguro Saúde:</strong> obrigatório para estudantes internacionais.</li>
              <li><strong>Comprovante de Alojamento:</strong> exigido em alguns processos de visto.</li>
              <li><strong>Comprovante Financeiro:</strong> extratos ou bolsas que provem condições de se manter.</li>
            </ul>
          </div>

        
         <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ">
  <Image
    src="/passaporte.png"
    alt="Passaporte sobre a mesa"
    fill
    className="object-contain"
    priority
  />
</div>

        </div>
      </section>
    </MainLayout>
  );
}
