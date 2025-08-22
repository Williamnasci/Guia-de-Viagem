import MainLayout from '@/layouts/MainLayout';
import { fetchPhotos, Photo } from '@/lib/imageApi';
import Image from 'next/image';
import Link from 'next/link';


type Props = { photos: Photo[] };

export default function GaleriaPage({ photos }: Props) {
  return (
    <MainLayout title="Galeria de Fotos" description="Imagens de destinos europeus para inspirar sua viagem.">
      <section className="mx-auto my-10 max-w-6xl px-4 md:my-16">
        <h1 className="mb-6 text-3xl font-bold text-main">Galeria de Fotos</h1>
        <p className="mb-8 text-muted">Imagens de destinos na UE (fonte: Unsplash).</p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p) => (
            <figure key={p.id} className="overflow-hidden rounded-2xl border border-app bg-surface shadow-1">
              <div className="relative aspect-[4/3]">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-300 hover:scale-105" />
              </div>
              <figcaption className="flex items-center justify-between p-4 text-sm">
                <span className="text-main">{p.alt}</span>
                <Link href={p.link} target="_blank" className="text-muted hover:text-main">por {p.author}</Link>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const photos = await fetchPhotos('europe city travel');
  return { props: { photos }, revalidate: 60 * 60 * 6 }; 
}
