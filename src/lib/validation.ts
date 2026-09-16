export function readText(formData: FormData, field: string) {
  return formData.get(field)?.toString().trim() || "";
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function isNonNegativeInteger(value: number) {
  return Number.isInteger(value) && value >= 0;
}

export function isNonNegativeNumber(value: number) {
  return Number.isFinite(value) && value >= 0;
}

export function isValidProductImageUrl(value: string) {
  if (!value || value === "/images/product_1.jpg") return true;
  if (value.startsWith("/images/")) return true;

  try {
    const url = new URL(value);
    return url.protocol === "https:" && (url.hostname === "res.cloudinary.com" || url.hostname.endsWith(".cloudinary.com"));
  } catch {
    return false;
  }
}

export function validateProductFields(input: {
  name: string;
  categoryId: string;
  price: number;
  stock: number;
  images?: Array<string | null>;
}) {
  if (!input.name || input.name.length > 160) return "Le nom du produit est obligatoire et doit contenir au maximum 160 caractères.";
  if (!input.categoryId) return "Sélectionnez une catégorie.";
  if (!isNonNegativeNumber(input.price)) return "Le prix doit être un nombre positif.";
  if (!isNonNegativeInteger(input.stock)) return "Le stock doit être un nombre entier positif.";
  const images = (input.images || []).filter((image): image is string => Boolean(image));
  if (images.length > 3) return "Un produit ne peut pas avoir plus de 3 photos.";
  if (images.some((image) => image.length > 2048 || !isValidProductImageUrl(image))) {
    return "Les photos du produit doivent provenir de Cloudinary ou du dossier d'images local.";
  }
  if (new Set(images).size !== images.length) return "Chaque photo du produit doit être différente.";
  return null;
}
