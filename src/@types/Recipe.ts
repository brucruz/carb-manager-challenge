import { EnergyUnit } from '../utils/convertEnergyToUserPreferenceUnit';

export interface Recipe {
  id: string;
  isPremium: boolean;
  isPublished: boolean;
  status: string;
  title: string;
  images: {
    id: string;
    url: string;
  }[];
  rating: {
    count: number;
    score: number;
  };
  details: {
    units: {
      proteins: string;
      carbs: string;
      fats: string;
      energy: EnergyUnit;
    };
    nutrients: {
      proteins: number;
      carbs: number;
      fats: number;
    };
    energy: number;
  };
  preparationTimeMinutes: number;
}
