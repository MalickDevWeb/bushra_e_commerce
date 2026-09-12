export const APP_NAME = "BUSHRA THIOURAYE";
export const APP_TAGLINE = "DAKAR";
export const APP_DESCRIPTION =
  "Encensoirs ciselés & Mabkharas royales — L'Essence de l'Exception.";

export const WHATSAPP_NUMBER = "+221771234567";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`;

export const ROUTES = {
  home: "/",
  collections: "/collections",
  shop: "/boutique",
  tracking: "/suivi",
  account: "/compte",
  login: "/login",
  register: "/register",
  about: "/a-propos",
  contact: "/contact",
  cart: "/panier",
  checkout: "/commande",
  checkoutSuccess: "/commande/succes",
  favorites: "/favoris",
} as const;
