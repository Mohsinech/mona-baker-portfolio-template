"use client";

import "@/styles/globals.css";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { Footer, Header } from "components/layouts";
import { motion } from "framer-motion";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log("Scrolling event:", e);
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    gsap.to(".default", {
      opacity: 1,
    });
  });

  return (
    <html lang="en">
      <head>
        {/* Change this with your domaine */}
        <title>Mona Backer — Photographer & Art Direction</title>
        {/* Add you favicon */}
        <link rel="icon" type="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Mona Backer is a freelance photographer and art director specializing in creative portrait photography and visual storytelling. Explore her portfolio and contact for bookings."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        <meta
          property="og:title"
          content="Mona Backer — Photographer & Art Direction"
        />
        <meta
          property="og:description"
          content="Mona Backer is a freelance photographer and art director specializing in creative portrait photography and visual storytelling."
        />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta property="og:url" content="https://www.monabacker.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mona Backer — Photographer & Art Direction"
        />
        <meta
          name="twitter:description"
          content="Mona Backer is a freelance photographer and art director specializing in creative portrait photography and visual storytelling."
        />
        <meta name="twitter:image" content="/path-to-your-image.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Photographer",
              name: "Mona Backer",
              url: "https://www.monabacker.com",
              image: "/path-to-your-image.jpg",
              description:
                "Mona Backer is a freelance photographer and art director specializing in creative portrait photography and visual storytelling.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-555-5555",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <motion.body
        className="bg-whity"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <main className="default">
          <Header />
          {children}
          <Footer />
        </main>
      </motion.body>
    </html>
  );
}
