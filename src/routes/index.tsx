import { createFileRoute } from "@tanstack/react-router";
import { LangProvider } from "@/lib/i18n";
import { AnnouncementBar, Header } from "@/components/fondita/Header";
import { Hero } from "@/components/fondita/Hero";
import {
  CTASection,
  Footer,
  Gallery,
  HoursAndContact,
  LocationGuide,
  MapSection,
  MenuSection,
  MobileActionBar,
  RatingStrip,
  Reviews,
  StorySection,
} from "@/components/fondita/Sections";

const title = "Restaurante La Fondita | Mexican Food in Chicago";
const description =
  "Restaurante La Fondita serves Mexican food inside Grand Food at 5202 W Grand Ave in Chicago. Dine in or take your food to go.";

const schema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Restaurante La Fondita",
  description,
  servesCuisine: "Mexican",
  telephone: "+1-773-766-1408",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5202 W Grand Ave",
    addressLocality: "Chicago",
    addressRegion: "IL",
    postalCode: "60639",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.9213,
    longitude: -87.7554,
  },
  hasMap: "https://www.google.com/maps?q=5202+W+Grand+Ave,+Chicago,+IL+60639",
  areaServed: "Chicago, IL",
  location: { "@type": "Place", name: "Grand Food" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "22:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "17",
  },
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "restaurant.restaurant" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "Mexican restaurant Chicago, Mexican food Chicago, restaurante mexicano Chicago, comida mexicana Chicago, Grand Food Chicago, Cragin Chicago",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(schema) },
    ],
  }),
});

function Index() {
  return (
    <LangProvider>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-chile focus:px-4 focus:py-2 focus:text-cream"
      >
        Saltar al contenido
      </a>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <RatingStrip />
        <StorySection />
        <MenuSection />
        <LocationGuide />
        <Gallery />
        <Reviews />
        <HoursAndContact />
        <MapSection />
        <CTASection />
      </main>
      <Footer />
      <MobileActionBar />
    </LangProvider>
  );
}
