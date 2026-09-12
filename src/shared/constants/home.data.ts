export interface CollectionItem {
  id: string;
  title: string;
  count: number;
  image: string;
  isNew?: boolean;
}

export interface ProductItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface FeatureItem {
  id: string;
  label: string;
  icon: "shield" | "craft" | "diamond" | "delivery";
  count?: number;
}

export const HOME_FEATURES: FeatureItem[] = [
  { id: "all", label: "Tout", icon: "shield", count: 28 },
  { id: "cisel", label: "Encensoirs Ciselés", icon: "craft", count: 12 },
  { id: "royal", label: "Mabkharas Royales", icon: "diamond", count: 9 },
  { id: "prestige", label: "Pièces Prestige", icon: "shield", count: 7 },
  { id: "gifts", label: "Coffrets Cadeaux", icon: "delivery", count: 5 },
];

export const HOME_COLLECTIONS: CollectionItem[] = [
  {
    id: "1",
    title: "Encensoirs Ciselés",
    count: 12,
    image: "/images/hero.png",
    isNew: true,
  },
  {
    id: "2",
    title: "Mabkharas Royales",
    count: 9,
    image: "/images/hero.png",
  },
  {
    id: "3",
    title: "Pièces Prestige",
    count: 7,
    image: "/images/hero.png",
  },
  {
    id: "4",
    title: "Coffrets Cadeaux",
    count: 5,
    image: "/images/hero.png",
  },
];

export const HOME_BEST_SELLERS: ProductItem[] = [
  {
    id: "1",
    name: "Encensoir Royal Ciselé",
    price: 45000,
    image: "/images/hero.png",
  },
  {
    id: "2",
    name: "Mabkhara Dorée Prestige",
    price: 38000,
    image: "/images/hero.png",
  },
  {
    id: "3",
    name: "Encensoir Traditionnel",
    price: 52000,
    image: "/images/hero.png",
  },
];

export const HERO_SLIDES = [
  {
    id: "1",
    title: "L'Essence de l'Exception",
    subtitle: "Encensoirs ciselés & Mabkharas royales",
    image: "/images/hero.png",
    cta: "Découvrir la collection",
  },
];
