import { Analytics } from "@vercel/analytics/react"
import localFont from "next/font/local";
import "./globals.css";


const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL("https://prompt-ai.directory"),
  title: {
    default: "Prompt AI - AI prompt sharing platform",
    template: "%s | Prompt AI",
	},
  openGraph: {
    title: "Prompt AI",
    description: "AI prompt sharing platform",
    url: "https://prompt-ai.directory",
    siteName: "Prompt AI",
    locale: "en_US",
    type: "website",
    images: [
        {
            url: "https://greaatapptest.b-cdn.net/opengraph.jpg",
            width: 1200,
            height: 630,
            alt: "prompt-ai-directory",
        },
    ],
  },
  description: "AI prompt sharing platform",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon.png",
    },
],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased bg-black`}>
        <Analytics/>
        {children}
      </body>
    </html>
  );
}
