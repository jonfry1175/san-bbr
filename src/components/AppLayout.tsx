import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import HeroSection from "@/components/HeroSection";
import { HeroProvider } from "@/components/HeroProvider";
import SEO from "@/components/SEO";
import { createOrganizationJsonLd, createWebsiteJsonLd } from "@/lib/seo";

const baseSchemas = [createOrganizationJsonLd(), createWebsiteJsonLd()];

const AppLayout = () => {
  return (
    <HeroProvider>
      <div className="min-h-screen bg-background">
        <SEO jsonLd={baseSchemas} />
        <Header />
        <main>
          <HeroSection />
          <Outlet />
        </main>
        <Footer />
        {/* <FloatingWhatsApp /> */}
      </div>
    </HeroProvider>
  );
};

export default AppLayout;
