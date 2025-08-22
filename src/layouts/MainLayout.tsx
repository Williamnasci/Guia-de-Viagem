import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Props = {
  title?: string;
  description?: string;
  children: React.ReactNode;
};

export default function MainLayout({ title, description, children }: Props) {
  const pageTitle = title ? `${title} — EU Mobility Hub` : 'EU Mobility Hub';
  const pageDesc = description ?? 'Guia prático para estudantes em mobilidade acadêmica na União Europeia.';
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
