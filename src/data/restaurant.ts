import foto1 from "@/assets/foto1.jpg";
import foto2 from "@/assets/foto_2.jpg";
import foto3 from "@/assets/foto3.jpg";
import foto4 from "@/assets/foto4.jpg";
import foto5 from "@/assets/foto5.jpg";
import foto6 from "@/assets/foto_6.jpg";
import foto7 from "@/assets/foto7.jpg";

export const restaurantInfo = {
  name: "Restaurante La Fondita",
  wordmark: "LA FONDITA",
  category: { es: "Restaurante mexicano", en: "Mexican restaurant" },
  insideOf: "Grand Food",
  street: "5202 W Grand Ave",
  city: "Chicago",
  state: "IL",
  zip: "60639",
  country: "US",
  neighborhood: "Cragin",
  phoneDisplay: "(773) 766-1408",
  phoneHref: "tel:+17737661408",
  services: {
    es: ["Consumo en el lugar", "Comida para llevar"],
    en: ["Dine in", "Takeout"],
  },
  mapsQuery: "5202+W+Grand+Ave,+Chicago,+IL+60639",
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=5202+W+Grand+Ave,+Chicago,+IL+60639",
  mapsEmbed:
    "https://www.google.com/maps?q=5202+W+Grand+Ave,+Chicago,+IL+60639&output=embed",
} as const;

/** PENDIENTE DE CONFIRMACIÓN — actualizar cuando el restaurante confirme. */
export const openingHours = [
  { key: "mon", open: "9:00 AM", close: "10:00 PM" },
  { key: "tue", open: "9:00 AM", close: "10:00 PM" },
  { key: "wed", open: "9:00 AM", close: "10:00 PM" },
  { key: "thu", open: "9:00 AM", close: "10:00 PM" },
  { key: "fri", open: "9:00 AM", close: "10:00 PM" },
  { key: "sat", open: "9:00 AM", close: "10:00 PM" },
  { key: "sun", open: "9:00 AM", close: "10:00 PM" },
] as const;

export const hoursStatus = "pending-confirmation" as const;

/** Datos de reseñas pendientes de actualización manual. */
export const reviews = {
  source: "Google",
  rating: 4.9,
  count: 17,
  status: "pending-update" as const,
  /** Solo reseñas realmente publicadas. No añadir contenido inventado. */
  featured: [
    {
      quote:
        "Una joya escondida; la comida es súper rica y te atienden muy bien.",
      author: "Kiara Rodriguez",
    },
  ],
};

/** Categorías estructurales. Los platos y precios los añade el restaurante. */
export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  image?: string;
  spicy?: boolean;
  ingredients?: string[];
  available?: boolean;
};

export type MenuCategory = {
  id: string;
  label: { es: string; en: string };
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  { id: "desayunos", label: { es: "Desayunos", en: "Breakfast" }, items: [] },
  { id: "antojitos", label: { es: "Antojitos", en: "Antojitos" }, items: [] },
  { id: "tacos", label: { es: "Tacos", en: "Tacos" }, items: [] },
  { id: "burritos", label: { es: "Burritos", en: "Burritos" }, items: [] },
  { id: "tortas", label: { es: "Tortas", en: "Tortas" }, items: [] },
  { id: "quesadillas", label: { es: "Quesadillas", en: "Quesadillas" }, items: [] },
  {
    id: "platillos",
    label: { es: "Platillos principales", en: "Main plates" },
    items: [],
  },
  {
    id: "especialidades",
    label: { es: "Especialidades", en: "House specialties" },
    items: [],
  },
  { id: "guarniciones", label: { es: "Guarniciones", en: "Sides" }, items: [] },
  { id: "bebidas", label: { es: "Bebidas", en: "Drinks" }, items: [] },
  { id: "postres", label: { es: "Postres", en: "Desserts" }, items: [] },
];

export const galleryImages = [
  {
    src: foto6,
    alt: {
      es: "Bandeja de tacos surtidos con cebolla, cilantro, limones y salsas de La Fondita",
      en: "Tray of assorted tacos with onion, cilantro, limes and salsas at La Fondita",
    },
    ratio: "aspect-[4/5]",
  },
  {
    src: foto1,
    alt: {
      es: "Filete empanizado con arroz, papas fritas y ensalada fresca",
      en: "Breaded fish fillet with rice, french fries and fresh salad",
    },
    ratio: "aspect-[3/4]",
  },
  {
    src: foto5,
    alt: {
      es: "Desayuno mexicano para llevar con chilaquiles rojos, huevo, arroz y frijoles",
      en: "Mexican breakfast to go with red chilaquiles, egg, rice and beans",
    },
    ratio: "aspect-square",
  },
  {
    src: foto3,
    alt: {
      es: "Plato de camarones empanizados con arroz, papas y ensalada",
      en: "Plate of breaded shrimp with rice, fries and salad",
    },
    ratio: "aspect-[4/5]",
  },
  {
    src: foto2,
    alt: {
      es: "Platillo en salsa roja con nopales, arroz, frijoles y tortillas de maíz",
      en: "Dish in red sauce with nopales, rice, beans and corn tortillas",
    },
    ratio: "aspect-[16/9]",
  },
  {
    src: foto4,
    alt: {
      es: "Postre de churros rellenos con helado y crema batida para compartir",
      en: "Filled churros dessert with ice cream and whipped cream to share",
    },
    ratio: "aspect-square",
  },
  {
    src: foto7,
    alt: {
      es: "Churros con helado de vainilla, chocolate y cereza en tazón de barro",
      en: "Churros with vanilla ice cream, chocolate and a cherry in a clay bowl",
    },
    ratio: "aspect-[3/4]",
  },
];

export const heroImage = foto6;
export const storyImage = foto1;
export const showcaseImages = [foto5, foto3, foto2];
export const locationImages = [foto2, foto7];

/** No mostrar redes sociales hasta que sean confirmadas. */
export const socialLinks: { label: string; url: string }[] = [];
