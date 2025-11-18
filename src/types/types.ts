// Board types and config
export type BoardCode = 'FB' | 'HB' | 'NB';

export interface BoardTypeInterface {
  code: string;
  name: string;
}

export interface Config {
  citizenship: string;
  startDate: string;
  days: number;
  country: string;
  boardType: BoardCode | '';
}

export interface DaySelection {
  dayIndex: number;
  date: string;
  hotelId: number | null;
  lunchId: number | null;
  dinnerId: number | null;
}

// Countries
export interface CountriesInterface {
  id: number;
  name: string;
  key: string;
}

// Hotels
export interface HotelCountry {
  id: number;
  name: string;
  price: number;
}

export type HotelsInterface = Record<string, HotelCountry[]>;

// Meals
export interface MealItem {
  id: number;
  name: string;
  price: number;
}

export interface MealsInterface {
  dinner: MealItem[];
  lunch: MealItem[];
}

export type MealsMainType = Record<string, MealsInterface>;

export type LangType = {
  id: number;
  val: string;
  flag: string;
};

export interface MockDataHeader {
  id: number;
  title: string;
}

export interface FooterSocialsInterface {
  id: number;
  icon: React.ReactNode;
  link: string;
}
