export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "encensoirs" | "thiouraye" | "parfums" | "accessoires";
  isNew?: boolean;
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Encensoir Royal Or",
    price: 45000,
    image: "/images/mobile/product-royal.png",
    category: "encensoirs",
    isNew: true,
  },
  {
    id: "p2",
    name: "Mabkhara Prestige",
    price: 35000,
    image: "/images/mobile/product-prestige.png",
    category: "encensoirs",
  },
  {
    id: "p3",
    name: "Thiouraye Gowé",
    price: 15000,
    image: "/images/mobile/product-elegance.png",
    category: "thiouraye",
    isNew: true,
  },
  {
    id: "p4",
    name: "Thiouraye Nakhl",
    price: 12000,
    image: "/product_1_1789161641789.jpg", // Using an artifact image for variety if it exists
    category: "thiouraye",
  },
  {
    id: "p5",
    name: "Encensoir Cuivre",
    price: 25000,
    image: "/images/mobile/product-prestige.png",
    category: "encensoirs",
  },
  {
    id: "p6",
    name: "Parfum d'Intérieur Oud",
    price: 18000,
    image: "/images/mobile/product-royal.png",
    category: "parfums",
  },
  {
    id: "p7",
    name: "Pince à Charbon Or",
    price: 5000,
    image: "/images/mobile/product-elegance.png",
    category: "accessoires",
  },
  {
    id: "p8",
    name: "Charbon Naturel",
    price: 3000,
    image: "/images/mobile/product-royal.png",
    category: "accessoires",
  },
];
