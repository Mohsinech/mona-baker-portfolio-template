"use client";

import {
  About,
  CtaSection,
  Hero,
  Services,
  Testimonials,
  Work,
} from "components/sections";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <Head>
        <title>Mona Backer — Photographer & Art Direction</title>
        <meta
          name="description"
          content="Mona Backer is a freelance photographer and art director specializing in creative portrait photography and visual storytelling. Explore her portfolio and get in touch for your next project."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Open Graph Meta Tags for social media sharing */}
        <meta
          property="og:title"
          content="Mona Backer — Photographer & Art Direction"
        />
        <meta
          property="og:description"
          content="Mona Backer is a freelance photographer and art director specializing in creative portrait photography and visual storytelling. Explore her portfolio and contact her for bookings."
        />
        <meta property="og:image" content="/images/portfolio-preview.jpg" />
        <meta property="og:url" content="https://www.monabacker.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mona Backer — Photographer & Art Direction"
        />
        <meta
          name="twitter:description"
          content="Mona Backer is a freelance photographer and art director specializing in creative portrait photography and visual storytelling."
        />
        <meta name="twitter:image" content="/images/portfolio-preview.jpg" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Photographer",
              name: "Mona Backer",
              url: "https://www.monabacker.com",
              image: "/images/portfolio-preview.jpg",
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
      </Head>

      <main
        className={`relative transition-all duration-500 ${
          isOpen ? "pointer-events-none blur-sm" : ""
        }`}
      >
        <Hero handleOpen={handleOpen} />
        <Work />
        <Services />
        <Testimonials />
        <CtaSection />
      </main>
      <About isOpen={isOpen} handleClose={handleOpen} />
    </>
  );
}
