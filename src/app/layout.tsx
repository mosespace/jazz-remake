import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "react-hot-toast";
import { extractRouterConfig } from "uploadthing/server";
import { ThemeProvider } from "@/providers/theme-provider";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jazzafricaadventures.com"),
  title: {
    default:
      "Jazz Africa Adventures - Unforgettable Tours in Uganda | Safari, Hiking, Wildlife",
    template:
      "%s | Jazz Africa Adventures - Unforgettable Tours in Uganda | Safari, Hiking, Wildlife",
  },
  description:
    "Explore Uganda's wonders with Jazz Africa Adventures. Unforgettable safaris, national parks, mountains, hiking, and chimpanzee encounters. Expert guides, personalized attention. Discover Uganda today!",
  keywords: [
    "Uganda tours",
    "Safari adventures",
    "Wildlife encounters",
    "National park tours",
    "Hiking in Uganda",
    "Mountain expeditions",
    "Chimpanzee tracking",
    "Scenic landscapes",
    "Adventure travel",
    "Cultural experiences",
    "Birdwatching tours",
    "Gorilla trekking",
    "Eco-tourism in Uganda",
    "Guided safaris",
    "Off-the-beaten-path journeys",
    "Nature photography tours",
    "Conservation initiatives",
    "Luxury camping experiences",
    "Local cuisine and traditions",
    "Expert local guides",
  ],
  authors: [{ name: "Kisakye Moses", url: "https://www.mosespace.com" }],
  creator: "Kisakye Moses | Full stack developer Kampala Uganda",
  publisher: "Kisakye Moses | Full stack developer Kampala Uganda",
  openGraph: {
    title:
      "Jazz Africa Adventures - Unforgettable Tours in Uganda | Safari, Hiking, Wildlife",
    description:
      "Explore Uganda's wonders with Jazz Africa Adventures. Unforgettable safaris, national parks, mountains, hiking, and chimpanzee encounters. Expert guides, personalized attention. Discover Uganda today!",
    url: "https://www.jazzafricaadventures.com",
    siteName: "Jazz Africa Adventures",
    images: [
      {
        url: "https://www.jazzafricaadventures.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    creator: "@handle",
    site: "@site",
    card: "summary_large_image",
    title:
      "Jazz Africa Adventures - Unforgettable Tours in Uganda | Safari, Hiking, Wildlife",
    description:
      "Explore Uganda's wonders with Jazz Africa Adventures. Unforgettable safaris, national parks, mountains, hiking, and chimpanzee encounters. Expert guides, personalized attention. Discover Uganda today!",
  },
  alternates: {
    canonical: "https://www.jazzafricaadventures.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position='top-center' reverseOrder={false} />
        </ThemeProvider>
      </body>
    </html>
  );
}
