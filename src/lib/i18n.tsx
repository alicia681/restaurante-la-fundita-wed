import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "es" | "en";

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ lang: "es", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

export type Copy = Record<string, { es: string; en: string }>;

export const t = {
  announcement: {
    es: "COMIDA MEXICANA EN CHICAGO · DENTRO DE GRAND FOOD",
    en: "MEXICAN FOOD IN CHICAGO · INSIDE GRAND FOOD",
  },
  navHome: { es: "Inicio", en: "Home" },
  navMenu: { es: "Menú", en: "Menu" },
  navAbout: { es: "Nosotros", en: "About" },
  navGallery: { es: "Galería", en: "Gallery" },
  navReviews: { es: "Reseñas", en: "Reviews" },
  navLocation: { es: "Ubicación", en: "Location" },
  navContact: { es: "Contacto", en: "Contact" },
  navHours: { es: "Horarios", en: "Hours" },
  callNow: { es: "LLAMAR AHORA", en: "CALL NOW" },
  call: { es: "LLAMAR", en: "CALL" },
  directions: { es: "CÓMO LLEGAR", en: "GET DIRECTIONS" },
  insideGrandFood: { es: "Dentro de Grand Food", en: "Inside Grand Food" },
  menuLink: { es: "VER MENÚ", en: "VIEW MENU" },
  openMenuLabel: { es: "Abrir menú de navegación", en: "Open navigation menu" },
  closeMenuLabel: { es: "Cerrar menú de navegación", en: "Close navigation menu" },

  heroEyebrow: { es: "COMIDA MEXICANA · CHICAGO", en: "MEXICAN FOOD · CHICAGO" },
  heroTitle1: { es: "Comida mexicana", en: "Homestyle Mexican" },
  heroTitle2: { es: "con sabor casero", en: "food made fresh" },
  heroTitle3: { es: "en Chicago.", en: "in Chicago." },
  heroSub: {
    es: "Visítanos dentro de Grand Food en Grand Avenue. Disfruta comida mexicana para comer aquí o llevar.",
    en: "Find us inside Grand Food on Grand Avenue. Enjoy Mexican food to dine in or take to go.",
  },
  heroCta: { es: "LLAMAR PARA ORDENAR", en: "CALL TO ORDER" },

  ratingLabel: { es: "en Google", en: "on Google" },
  ratingReviews: { es: "opiniones", en: "reviews" },
  ratingPending: {
    es: "Valoración pendiente de actualización.",
    en: "Rating pending update.",
  },
  seeReviews: { es: "VER OPINIONES", en: "SEE REVIEWS" },

  flavorEyebrow: { es: "HECHO PARA DISFRUTAR", en: "MADE TO ENJOY" },
  flavorTitle: {
    es: "Sabor mexicano, atención cercana y una experiencia que se siente como casa.",
    en: "Mexican flavor, friendly service and a place that feels like home.",
  },
  flavorText: {
    es: "Restaurante La Fondita es un espacio de comida mexicana ubicado dentro de Grand Food, en Chicago. Aquí puedes disfrutar platillos preparados para comer en el lugar o pedirlos para llevar, con atención cercana y sabores que han sido bien valorados por clientes locales.",
    en: "Restaurante La Fondita is a Mexican food spot located inside Grand Food in Chicago. Enjoy dishes prepared to eat in or take to go, with friendly service and flavors local customers have rated highly.",
  },

  menuEyebrow: { es: "PARA COMER AQUÍ O LLEVAR", en: "DINE IN OR TAKE OUT" },
  menuTitle: { es: "Nuestro menú", en: "Our menu" },
  menuSoon: { es: "Menú próximamente", en: "Menu coming soon" },
  menuSoonText: {
    es: "Estamos preparando nuestro menú digital. Llámanos para consultar las opciones disponibles hoy.",
    en: "We are preparing our digital menu. Call us to ask about today's options.",
  },
  menuCta: { es: "LLAMAR AL RESTAURANTE", en: "CALL THE RESTAURANT" },
  menuPending: { es: "POR CONFIRMAR", en: "TO BE CONFIRMED" },
  menuCategoriesNote: {
    es: "Categorías preparadas para recibir los platillos y precios oficiales del restaurante.",
    en: "Categories ready to receive the restaurant's official dishes and prices.",
  },

  gemEyebrow: { es: "ENCUÉNTRANOS DENTRO DE GRAND FOOD", en: "FIND US INSIDE GRAND FOOD" },
  gemTitle: {
    es: "Una joya escondida en Grand Avenue.",
    en: "A hidden gem on Grand Avenue.",
  },
  gemText: {
    es: "Estamos dentro de Grand Food. Una vez dentro, busca Restaurante La Fondita y descubre un rincón de comida mexicana que muchos clientes locales ya conocen.",
    en: "We are inside Grand Food. Once you're in, look for Restaurante La Fondita and discover a Mexican food corner many locals already know.",
  },
  gemStep1: { es: "Entra a Grand Food", en: "Walk into Grand Food" },
  gemStep2: { es: "Busca La Fondita", en: "Look for La Fondita" },
  gemStep3: { es: "Disfruta tu comida", en: "Enjoy your food" },

  galleryEyebrow: { es: "GALERÍA", en: "GALLERY" },
  galleryTitle: { es: "Del comal a tu mesa.", en: "Straight from our kitchen." },

  reviewsEyebrow: { es: "LO QUE DICEN NUESTROS CLIENTES", en: "WHAT OUR CUSTOMERS SAY" },
  reviewsTitle: {
    es: "Una fondita que los clientes recuerdan.",
    en: "A fondita customers remember.",
  },
  themeFoodTitle: { es: "COMIDA", en: "FOOD" },
  themeFoodText: { es: "Sabores que hacen volver.", en: "Flavors worth coming back for." },
  themeServiceTitle: { es: "SERVICIO", en: "SERVICE" },
  themeServiceText: { es: "Atención cercana y amable.", en: "Warm, friendly service." },
  themeAmbianceTitle: { es: "AMBIENTE", en: "ATMOSPHERE" },
  themeAmbianceText: {
    es: "Un pequeño rincón dentro de Grand Food.",
    en: "A small corner inside Grand Food.",
  },
  marketingNote: {
    es: "Mensajes de marca basados en los temas de las reseñas publicadas. No son citas textuales de clientes.",
    en: "Brand messages based on themes from published reviews. Not direct customer quotes.",
  },

  hoursEyebrow: { es: "VISÍTANOS", en: "VISIT US" },
  hoursTitle: { es: "Abiertos todos los días.", en: "Open every day." },
  hoursNote: {
    es: "Los horarios pueden variar en días festivos. Llámanos antes de visitarnos para confirmar.",
    en: "Hours may change on holidays. Please call us before visiting to confirm.",
  },
  hoursPending: {
    es: "Horario pendiente de confirmación final.",
    en: "Hours pending final confirmation.",
  },
  mon: { es: "LUN", en: "MON" },
  tue: { es: "MAR", en: "TUE" },
  wed: { es: "MIÉ", en: "WED" },
  thu: { es: "JUE", en: "THU" },
  fri: { es: "VIE", en: "FRI" },
  sat: { es: "SÁB", en: "SAT" },
  sun: { es: "DOM", en: "SUN" },

  contactEyebrow: { es: "CONTACTO", en: "CONTACT" },
  contactTitle: { es: "¿Se te antojó? Ven a La Fondita.", en: "Hungry? Come to La Fondita." },
  formName: { es: "Nombre", en: "Name" },
  formContact: { es: "Teléfono o email", en: "Phone or email" },
  formReason: { es: "Motivo", en: "Reason" },
  formMessage: { es: "Mensaje", en: "Message" },
  formSend: { es: "ENVIAR CONSULTA", en: "SEND INQUIRY" },
  formPrivacy: {
    es: "Acepto que mis datos se usen únicamente para responder a esta consulta.",
    en: "I agree my details will be used only to answer this inquiry.",
  },
  formNote: {
    es: "Formulario preparado para consultas. La recepción de mensajes se activará cuando el restaurante confirme su correo de contacto.",
    en: "Inquiry form ready to use. Message delivery will be enabled once the restaurant confirms its contact email.",
  },
  reasonGeneral: { es: "General", en: "General" },
  reasonOrder: { es: "Pedido", en: "Order" },
  reasonBigOrder: { es: "Pedido grande", en: "Large order" },
  reasonEvent: { es: "Evento", en: "Event" },
  reasonOther: { es: "Otro", en: "Other" },

  mapEyebrow: { es: "MAPA", en: "MAP" },
  mapTitle: { es: "Cómo llegar.", en: "How to find us." },
  openInMaps: { es: "ABRIR EN GOOGLE MAPS", en: "OPEN IN GOOGLE MAPS" },
  mapLabel: {
    es: "Mapa de la ubicación de Restaurante La Fondita en 5202 W Grand Ave, Chicago",
    en: "Map showing Restaurante La Fondita at 5202 W Grand Ave, Chicago",
  },

  finalTitle: { es: "Visítanos hoy.", en: "Visit us today." },
  footerTagline: {
    es: "Comida mexicana con sabor casero en Chicago.",
    en: "Homestyle Mexican food in Chicago.",
  },
  footerLinks: { es: "Navegación", en: "Navigation" },
  rights: { es: "Todos los derechos reservados.", en: "All rights reserved." },
  langLabel: { es: "Cambiar idioma", en: "Change language" },
} satisfies Copy;

export function useT() {
  const { lang } = useLang();
  return (key: keyof typeof t) => t[key][lang];
}
