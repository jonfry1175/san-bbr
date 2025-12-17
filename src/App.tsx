import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";
import AppLayout from "@/components/AppLayout";
import { AnimatePresence, motion } from "framer-motion";
import { I18nProvider } from "@/lib/i18n";

const Index = lazy(() => import("./pages/Index"));
const Gallery = lazy(() => import("./pages/Gallery"));
const OurCompany = lazy(() => import("./pages/about-us/OurCompany"));
const OurTeam = lazy(() => import("./pages/about-us/OurTeam"));
const TeamMemberDetail = lazy(
  () => import("./pages/about-us/TeamMemberDetail"),
);
const CertificationGallery = lazy(
  () => import("./pages/about-us/CertificationGallery"),
);
const CompanyAwardsGallery = lazy(
  () => import("./pages/about-us/CompanyAwardsGallery"),
);
const Works = lazy(() => import("./pages/Works"));
const WorkDetail = lazy(() => import("./pages/WorkDetail"));
const Products = lazy(() => import("./pages/Products"));
const Career = lazy(() => import("./pages/Career"));
const CareerEmployee = lazy(() => import("./pages/CareerEmployee"));
const CareerIntern = lazy(() => import("./pages/CareerIntern"));
const Contact = lazy(() => import("./pages/Contact"));
const News = lazy(() => import("./pages/News"));
const NewsDetail = lazy(() => import("./pages/NewsDetail"));
const Location = lazy(() => import("./pages/Location"));

const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Services = lazy(() => import("./pages/Services"));

const queryClient = new QueryClient();

const parseEnvBoolean = (value: string | undefined, defaultValue: boolean) => {
  if (value === undefined) {
    return defaultValue;
  }
  const normalized = value.trim().toLowerCase();
  if (["1", "true", "yes", "on"].includes(normalized)) {
    return true;
  }
  if (["0", "false", "no", "off"].includes(normalized)) {
    return false;
  }
  return defaultValue;
};

// Page wrapper: animates page enter/exit
const Page = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

// Routes wrapped with AnimatePresence for page transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<AppLayout />}>
          <Route
            path="/"
            element={
              <Page>
                <Index />
              </Page>
            }
          />
          <Route
            path="/about-us/our-company"
            element={
              <Page>
                <OurCompany />
              </Page>
            }
          />
          <Route
            path="/about-us/our-team"
            element={
              <Page>
                <OurTeam />
              </Page>
            }
          />
          <Route
            path="/about-us/our-team/:slug"
            element={
              <Page>
                <TeamMemberDetail />
              </Page>
            }
          />
          <Route
            path="/about-us/certifications"
            element={
              <Page>
                <CertificationGallery />
              </Page>
            }
          />
          <Route
            path="/about-us/company-awards"
            element={
              <Page>
                <CompanyAwardsGallery />
              </Page>
            }
          />
          <Route
            path="/about"
            element={<Navigate to="/about-us/our-company" replace />}
          />
          <Route
            path="/about-us"
            element={<Navigate to="/about-us/our-company" replace />}
          />
          <Route
            path="/works"
            element={
              <Page>
                <Works />
              </Page>
            }
          />
          <Route
            path="/products"
            element={
              <Page>
                <Products />
              </Page>
            }
          />
          <Route
            path="/works/:slug"
            element={
              <Page>
                <WorkDetail />
              </Page>
            }
          />
          <Route
            path="/gallery"
            element={
              <Page>
                <Gallery />
              </Page>
            }
          />
          <Route
            path="/news"
            element={
              <Page>
                <News />
              </Page>
            }
          />
          <Route
            path="/news/:slug"
            element={
              <Page>
                <NewsDetail />
              </Page>
            }
          />
          <Route
            path="/services"
            element={
              <Page>
                <Services />
              </Page>
            }
          />
          <Route
            path="/services/:slug"
            element={
              <Page>
                <ServiceDetail />
              </Page>
            }
          />
          <Route
            path="/career"
            element={<Navigate to="/career/employee" replace />}
          />
          <Route
            path="/career/employee"
            element={
              <Page>
                <CareerEmployee />
              </Page>
            }
          />
          <Route
            path="/career/intern"
            element={
              <Page>
                <CareerIntern />
              </Page>
            }
          />
          <Route
            path="/contact"
            element={
              <Page>
                <Contact />
              </Page>
            }
          />
          <Route
            path="/location"
            element={
              <Page>
                <Location />
              </Page>
            }
          />
          {/* Catch-all */}
          <Route
            path="*"
            element={
              <Page>
                <NotFound />
              </Page>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const disableInspect = parseEnvBoolean(
    import.meta.env.VITE_DISABLE_INSPECT,
    true,
  );

  useEffect(() => {
    if (!disableInspect) {
      return;
    }

    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if ((event.ctrlKey || event.metaKey) && event.shiftKey && key === "i") {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [disableInspect]);

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Suspense
              fallback={
                <div className="min-h-screen flex items-center justify-center bg-background">
                  <div className="relative flex h-28 w-28 items-center justify-center">
                    <span className="absolute inset-0 rounded-full border border-neutral-200/80 shadow-[0_8px_32px_rgba(0,0,0,0.05)]" />
                    <span className="absolute inset-1 rounded-full border-4 border-transparent border-b-[#00c48c] border-t-[#00c48c] border-l-transparent border-r-transparent animate-[spin_1.4s_linear_infinite]" />
                    <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-[18px] bg-white shadow-[0_8px_28px_rgba(0,0,0,0.08)]">
                      <img
                        src="/logo-san-full.jpeg"
                        alt="PT SAN & PT BBR logo"
                        className="h-9 w-9 object-contain"
                      />
                    </span>
                  </div>
                </div>
              }
            >
              <AnimatedRoutes />
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </I18nProvider>
    </QueryClientProvider>
  );
};

export default App;
