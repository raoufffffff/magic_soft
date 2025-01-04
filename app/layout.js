import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/haeder/Header";
import Footer from "@/components/footer/Footer";
import Head from "next/head"; // Import the Head component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Magic Soft",
  description: "Un site spécialisé dans la vente de matériel numérique",
  keywords: "dz e-commarce website Algérie stor",
  image: "/logo.png", // Replace with the actual image URL
  url: "https://stror-model.vercel.app/", // Replace with your actual website URL
  twitterHandle: "@Raoufhamoudi_1", // Replace with your Twitter handle
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Head>
          {/* Title and Meta tags for SEO */}
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />

          {/* Open Graph Meta Tags for social media */}
          <meta property="og:title" content={metadata.title} />
          <meta property="og:description" content={metadata.description} />
          <meta property="og:image" content={metadata.image} />
          <meta property="og:url" content={metadata.url} />
          <meta property="og:type" content="website" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metadata.title} />
          <meta name="twitter:description" content={metadata.description} />
          <meta name="twitter:image" content={metadata.image} />
          <meta name="twitter:site" content={metadata.twitterHandle} />
          <meta name="twitter:creator" content={metadata.twitterHandle} />

          {/* Canonical Link to avoid duplicate content */}
          <link rel="canonical" href={metadata.url} />

          {/* Add a favicon */}
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <main className="min-h-[300px] md:min-h-[400px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
