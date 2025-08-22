export type CityCost = {
  city: string;
  country: string;
  currency: 'EUR' | 'GBP';
  rent: number;
  food: number;
  transport: number;
  leisure: number;
};
