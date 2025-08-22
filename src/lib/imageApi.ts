export type Photo = {
  id: string;
  src: string;
  alt: string;
  author: string;
  link: string;
};

// tipagem mínima do Unsplash
type UnsplashPhoto = {
  id: string;
  alt_description: string | null;
  urls: {
    regular: string;
  };
  user: {
    name: string;
  };
  links: {
    html: string;
  };
};

type UnsplashResponse = {
  results: UnsplashPhoto[];
};

export async function fetchPhotos(query: string, count = 12): Promise<Photo[]> {
  const key = process.env.UNSPLASH_ACCESS_KEY;
  if (!key) return [];

  const url = `https://api.unsplash.com/search/photos?per_page=${count}&orientation=landscape&content_filter=high&query=${encodeURIComponent(
    query,
  )}`;

  const res = await fetch(url, {
    headers: { Authorization: `Client-ID ${key}` },
  });
  if (!res.ok) return [];

  const json: UnsplashResponse = await res.json();

  return (json.results ?? []).map((p) => ({
    id: p.id,
    src: p.urls.regular,
    alt: p.alt_description ?? `Foto de ${query}`,
    author: p.user?.name ?? 'Autor desconhecido',
    link: p.links?.html ?? '#',
  }));
}
