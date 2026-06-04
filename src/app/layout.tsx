import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Poppins } from "next/font/google";



export const metadata: Metadata = {
  title: 'Toko Jasa Gordyn Cileunyi | Gordyn, Wallpaper, Vinyl & Blind Bandung',
  description: 'Jasa pemasangan gordyn, roller blind, vertical blind, wallpaper, lantai vinyl, dan WPC profesional di Cileunyi Bandung. Survey dan konsultasi gratis.',
  keywords: ["jasa gordyn cileunyi, gordyn bandung, roller blind bandung, wallpaper bandung, vinyl bandung, vertical blind, jasa interior bandung"],
  openGraph: {
    "title": "Toko Jasa Gordyn Cileunyi | Gordyn, Wallpaper, Vinyl & Blind Bandung",
    "description": "Jasa pemasangan gordyn, roller blind, vertical blind, wallpaper, lantai vinyl, dan WPC profesional di Cileunyi Bandung. Survey dan konsultasi gratis.",
    "url": "https://www.jasagordyncileunyi.com",
    "siteName": "Toko Jasa Gordyn Cileunyi",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/office-desk-still-life_23-2148111390.jpg",
        "alt": "Interior rumah mewah dengan gordyn premium"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Toko Jasa Gordyn Cileunyi | Gordyn, Wallpaper, Vinyl & Blind Bandung",
    "description": "Jasa pemasangan gordyn, roller blind, vertical blind, wallpaper, lantai vinyl, dan WPC profesional di Cileunyi Bandung. Survey dan konsultasi gratis.",
    "images": [
      "http://img.b2bpic.net/free-photo/office-desk-still-life_23-2148111390.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${poppins.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
