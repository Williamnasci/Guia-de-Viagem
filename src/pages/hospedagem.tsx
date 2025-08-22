// src/pages/hospedagem.tsx
import Image from "next/image";
import MainLayout from "@/layouts/MainLayout";

export default function HospedagemPage() {
  return (
    <MainLayout
      title="Hospedagem para Estudantes"
      description="Onde e como procurar aluguel, dormitórios universitários e plataformas confiáveis."
    >
      <section className="relative mx-auto my-10 max-w-6xl px-4 md:my-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Texto */}
          <div>
            <h1 className="mb-4 text-3xl font-bold text-main">Hospedagem</h1>
            <p className="mb-6 text-muted">
              Encontrar um bom lugar para morar é uma das maiores preocupações
              dos estudantes em mobilidade. Aqui estão algumas opções comuns e
              dicas para economizar:
            </p>
            <ul className="list-disc space-y-3 pl-5 text-main">
              <li>
                <strong>Dormitórios Universitários:</strong> mais acessíveis e
                próximos do campus.
              </li>
              <li>
                <strong>Aluguel Compartilhado:</strong> dividir apartamento
                reduz bastante os custos.
              </li>
              <li>
                <strong>Plataformas Confiáveis:</strong> Airbnb, Uniplaces,
                HousingAnywhere.
              </li>
              <li>
                <strong>Dicas:</strong> sempre leia avaliações e nunca pague
                adiantado sem contrato.
              </li>
            </ul>
          </div>

          {/* Imagem Skyline */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-app shadow-1">
            <Image
              src="/skyline.png"
              alt="Skyline de pontos turísticos europeus"
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
