
export interface Itype {
  image: string;
  categoryNameBn: string;

  change: {
    dir: "up" | "down";
    pct: number;
  };

  today: number;
  id: number;
  lastMonth: number;
  lastWeek: number;
  nameBn: string;
  unit: string;
  yesterday: number;
  icon: string;
  slug: string;

  markets: {
    market: string;
    division: string;
    min: number;
    max: number;
  }[];
}