import { type CityCost } from '@/types';

export const SITE = {
  name: 'EU Mobility Hub',
  tagline: 'Guia prático para estudantes em mobilidade acadêmica na União Europeia.',
  nav: [
    { label: 'Início', href: '/' },
    { label: 'Documentação', href: '/documentacao' },
    { label: 'Custo de Vida', href: '/custo-de-vida' },
    { label: 'Hospedagem', href: '/hospedagem' },
    { label: 'Transporte Aéreo', href: '/transporte-aereo' },
    { label: 'Economia', href: '/economia' },
    { label: 'Galeria', href: '/galeria' },
  ],
  cta: { label: 'Começar agora', href: '/documentacao' },
};

export const DOCS_CHECKLIST = [
  {
    title: 'Documentos essenciais',
    items: [
      'Passaporte válido (6+ meses de validade)',
      'Visto de estudante (se aplicável / país-alvo)',
      'Carta de aceitação da universidade',
      'Comprovante de recursos financeiros',
      'Seguro saúde (cobertura UE / EHIC se elegível)',
    ],
  },
  {
    title: 'Antes de embarcar',
    items: [
      'Cópias digitais de documentos',
      'Endereço temporário na chegada',
      'Contato de emergência',
      'Cartão SIM/eSIM internacional ou roaming',
      'Cartão de vacinação (se necessário)',
    ],
  },
];

export const COST_OF_LIVING: CityCost[] = [
  {
    city: 'Lisboa',
    country: 'Portugal',
    currency: 'EUR',
    rent: 550,
    food: 250,
    transport: 40,
    leisure: 120,
  },
  {
    city: 'Porto',
    country: 'Portugal',
    currency: 'EUR',
    rent: 450,
    food: 230,
    transport: 35,
    leisure: 100,
  },
  {
    city: 'Barcelona',
    country: 'Espanha',
    currency: 'EUR',
    rent: 700,
    food: 280,
    transport: 50,
    leisure: 150,
  },
  {
    city: 'Madrid',
    country: 'Espanha',
    currency: 'EUR',
    rent: 650,
    food: 270,
    transport: 55,
    leisure: 140,
  },
  {
    city: 'Paris',
    country: 'França',
    currency: 'EUR',
    rent: 950,
    food: 300,
    transport: 75,
    leisure: 180,
  },
  {
    city: 'Berlim',
    country: 'Alemanha',
    currency: 'EUR',
    rent: 800,
    food: 280,
    transport: 49,
    leisure: 150,
  },
  {
    city: 'Milão',
    country: 'Itália',
    currency: 'EUR',
    rent: 750,
    food: 270,
    transport: 39,
    leisure: 140,
  },
  {
    city: 'Dublin',
    country: 'Irlanda',
    currency: 'EUR',
    rent: 1100,
    food: 320,
    transport: 100,
    leisure: 200,
  },
];
