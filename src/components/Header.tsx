import { useEffect, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Check, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import companyLogo from "@/assets/company-logo.png";
const companyLogo = "https://placehold.co/200x80/white/000000?text=Company+Logo";
import { Link, useLocation } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const aboutLinkConfig = [
  { key: "ourCompany", href: "/about-us/our-company" },
  { key: "ourTeam", href: "/about-us/our-team" },
  { key: "certifications", href: "/about-us/certifications" },
  { key: "companyAwards", href: "/about-us/company-awards" },
] as const;

const productLinkConfig = [
  { key: "rentalAlatBerat", href: "/products?category=rent" },
  { key: "jasaKonstruksi", href: "/products?category=sale" },
] as const;

const careerLinkConfig = [
  { key: "employee", href: "/career/employee" },
  { key: "intern", href: "/career/intern" },
] as const;

const navigationLinkConfig = [
  { key: "services", href: "/services" },
  { key: "ourWorks", href: "/works" },
  { key: "location", href: "/location" },
  { key: "gallery", href: "/gallery" },
  { key: "news", href: "/news" },
] as const;

const Header = () => {
  const { language, languageMeta, translations, t } = useI18n();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const headerCopy = translations.header;

  // Get current sales category from URL query parameters
  const currentSalesCategory = useMemo(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get("category");
    return categoryParam === "sale" || categoryParam === "rent"
      ? categoryParam
      : null;
  }, [location.search]);

  const path = location.pathname;

  const aboutLinks = aboutLinkConfig.map((link) => ({
    ...link,
    label: headerCopy.aboutLinks[link.key],
    isActive: path === link.href || path.startsWith(`${link.href}/`),
  }));

  const productLinks = productLinkConfig.map((link) => {
    // Extract category from href to compare with currentSalesCategory
    const categoryMatch = link.href.match(/category=([^&]*)/);
    const linkCategory = categoryMatch ? categoryMatch[1] : null;

    return {
      ...link,
      label: headerCopy.productLinks[link.key],
      isActive: currentSalesCategory === linkCategory,
    };
  });

  const careerLinks = careerLinkConfig.map((link) => ({
    ...link,
    label: headerCopy.careerLinks[link.key],
    isActive: path === link.href || path.startsWith(`${link.href}/`),
  }));

  const navigationItems = navigationLinkConfig.map((item) => ({
    ...item,
    label: headerCopy.navigationItems[item.key],
    isActive: path === item.href || path.startsWith(`${item.href}/`),
  }));

  const aboutActive = aboutLinks.some((l) => l.isActive);
  const productsActive = productLinks.some((l) => l.isActive);
  const careerActive = careerLinks.some((l) => l.isActive);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLanguageClick = () => {
    toast.info("Fitur bahasa sedang dalam pengembangan");
  };

  return (
    <>
      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-md bg-neutral-900/90 shadow-md border-b border-white/10"
            : "bg-neutral-900 border-b border-white/10"
        } text-white`}
      >
        <div className="container mx-auto container-padding">
          <div
            className={`flex items-center justify-between ${isScrolled ? "h-16" : "h-20"}`}
          >
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img
                  src={companyLogo}
                  alt="PT SAN & PT BBR"
                  className={`transition-all duration-300 w-auto bg-white p-2 rounded-lg ${
                    // Larger logo when scrolled
                    isScrolled ? "h-10 md:h-14" : "h-12 md:h-14"
                  }`}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className="text-white hover:text-accent font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded whitespace-nowrap"
              >
                {headerCopy.home}
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={cn(
                      "flex items-center gap-1 font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded whitespace-nowrap",
                      aboutActive
                        ? "text-accent after:bg-accent"
                        : "text-white hover:text-accent"
                    )}
                    aria-haspopup="menu"
                    aria-label={headerCopy.aboutDropdownAria}
                  >
                    {headerCopy.aboutUs}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4",
                        aboutActive ? "text-accent" : "text-white/70"
                      )}
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-48 bg-neutral-900/95 text-white border border-white/10"
                  align="start"
                >
                  {aboutLinks.map((link) => (
                    <DropdownMenuItem
                      key={link.key}
                      asChild
                      className={cn(
                        "hover:bg-white/10",
                        link.isActive ? "text-accent bg-white/5" : "text-white"
                      )}
                    >
                      <Link to={link.href} className="w-full block">
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={cn(
                      "flex items-center gap-1 font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded whitespace-nowrap",
                      productsActive
                        ? "text-accent after:bg-accent"
                        : "text-white hover:text-accent"
                    )}
                    aria-haspopup="menu"
                    aria-label="Navigate to Products pages"
                  >
                    {headerCopy.navigationItems.products}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4",
                        productsActive ? "text-accent" : "text-white/70"
                      )}
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-64 bg-neutral-900/95 text-white border border-white/10"
                  align="start"
                >
                  {productLinks.map((link) => (
                    <DropdownMenuItem
                      key={link.key}
                      asChild
                      className={`text-white hover:bg-white/10 ${
                        link.isActive ? "bg-white/10" : ""
                      }`}
                    >
                      <Link
                        to={link.href}
                        className="flex items-center justify-between w-full"
                      >
                        <span>{link.label}</span>
                        {link.isActive && (
                          <Check className="h-4 w-4 text-accent" />
                        )}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className={cn(
                    "font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded whitespace-nowrap",
                    item.isActive
                      ? "text-accent after:bg-accent"
                      : "text-white hover:text-accent"
                  )}
                >
                  {item.label}
                </Link>
              ))}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={cn(
                      "flex items-center gap-1 font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded whitespace-nowrap",
                      careerActive
                        ? "text-accent after:bg-accent"
                        : "text-white hover:text-accent"
                    )}
                    aria-haspopup="menu"
                    aria-label="Navigate to Career pages"
                  >
                    {headerCopy.navigationItems.career}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4",
                        careerActive ? "text-accent" : "text-white/70"
                      )}
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-48 bg-neutral-900/95 text-white border border-white/10"
                  align="start"
                >
                  {careerLinks.map((link) => (
                    <DropdownMenuItem
                      key={link.key}
                      asChild
                      className={cn(
                        "hover:bg-white/10",
                        link.isActive ? "text-accent bg-white/5" : "text-white"
                      )}
                    >
                      <Link to={link.href} className="w-full block">
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to="/contact"
                className="bg-accent hover:bg-accent-light text-white px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 whitespace-nowrap"
              >
                {headerCopy.navigationItems.contact}
              </Link>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-2 md:space-x-4">

              {/* Language selector (compact for main bar) */}
              <div className="hidden md:block">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-9 px-3 data-[state=open]:bg-white/10 text-white hover:bg-white/10"
                      aria-label={t("header.changeLanguageAria", {
                        language: languageMeta[language].label,
                      })}
                    >
                      <span className="mr-2 text-base" aria-hidden>
                        {languageMeta[language].flag}
                      </span>
                      <span className="font-medium">{language}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-44 bg-neutral-900/95 text-white border border-white/10"
                  >
                    <DropdownMenuItem
                      onClick={handleLanguageClick}
                      className="justify-between text-white hover:bg-white/10"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-base" aria-hidden>
                          {languageMeta.EN.flag}
                        </span>
                        {languageMeta.EN.label}
                      </span>
                      {language === "EN" && (
                        <Check className="h-4 w-4 text-accent" />
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={handleLanguageClick}
                      className="justify-between text-white hover:bg-white/10"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-base" aria-hidden>
                          {languageMeta.ID.flag}
                        </span>
                        {languageMeta.ID.label}
                      </span>
                      {language === "ID" && (
                        <Check className="h-4 w-4 text-accent" />
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={handleLanguageClick}
                      className="justify-between text-white hover:bg-white/10"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-base" aria-hidden>
                          {languageMeta.ZH.flag}
                        </span>
                        {languageMeta.ZH.label}
                      </span>
                      {language === "ZH" && (
                        <Check className="h-4 w-4 text-accent" />
                      )}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Mobile Menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-80 bg-neutral-900 text-white border-l border-white/10 overflow-hidden flex flex-col"
                >
                  <div className="flex-1 overflow-y-auto pr-4">
                    <div className="flex flex-col space-y-6 mt-8">
                      <Link
                        to="/"
                        className="text-lg font-medium text-white hover:text-accent transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {headerCopy.home}
                      </Link>

                      <div>
                        <p
                          className={cn(
                            "text-xs uppercase tracking-wide",
                            aboutActive ? "text-accent" : "text-white/60"
                          )}
                        >
                          {headerCopy.aboutUs}
                        </p>
                        <div className="mt-3 flex flex-col space-y-3">
                          {aboutLinks.map((link) => (
                            <Link
                              key={link.key}
                              to={link.href}
                              className={cn(
                                "text-lg font-medium transition-colors",
                                link.isActive
                                  ? "text-accent bg-white/5 px-3 py-2 rounded-md"
                                  : "text-white hover:text-accent"
                              )}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p
                          className={cn(
                            "text-xs uppercase tracking-wide",
                            productsActive ? "text-accent" : "text-white/60"
                          )}
                        >
                          {headerCopy.navigationItems.products}
                        </p>
                        <div className="mt-3 flex flex-col space-y-3">
                          {productLinks.map((link) => (
                            <Link
                              key={link.key}
                              to={link.href}
                              className={cn(
                                "text-lg font-medium transition-colors flex items-center justify-between",
                                link.isActive
                                  ? "text-accent bg-white/5 px-3 py-2 rounded-md"
                                  : "text-white hover:text-accent"
                              )}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <span>{link.label}</span>
                              {link.isActive && (
                                <Check className="h-4 w-4 text-accent" />
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {navigationItems.map((item) => (
                        <Link
                          key={item.key}
                          to={item.href}
                          className={cn(
                            "text-lg font-medium transition-colors",
                            item.isActive
                              ? "text-accent"
                              : "text-white hover:text-accent"
                          )}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}

                      <div>
                        <p
                          className={cn(
                            "text-xs uppercase tracking-wide",
                            careerActive ? "text-accent" : "text-white/60"
                          )}
                        >
                          {headerCopy.navigationItems.career}
                        </p>
                        <div className="mt-3 flex flex-col space-y-3">
                          {careerLinks.map((link) => (
                            <Link
                              key={link.key}
                              to={link.href}
                              className={cn(
                                "text-lg font-medium transition-colors",
                                link.isActive
                                  ? "text-accent bg-white/5 px-3 py-2 rounded-md"
                                  : "text-white hover:text-accent"
                              )}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <Link
                        to="/contact"
                        className="bg-accent hover:bg-accent-light text-white px-4 py-2 rounded-md text-lg font-medium transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {headerCopy.navigationItems.contact}
                      </Link>
                    </div>
                  </div>

                  <div className="border-t border-white/10 space-y-4 p-4 mt-4">
                    {/* Language options */}
                    <div>
                      <div className="text-xs uppercase tracking-wide text-white/80 mb-2">
                        {headerCopy.languageLabel}
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <Button
                          variant={language === "EN" ? "default" : "outline"}
                          className={`w-full h-10 ${language === "EN" ? "" : "text-black"}`}
                          onClick={() => {
                            handleLanguageClick();
                            setMobileMenuOpen(false);
                          }}
                          aria-label={headerCopy.switchLanguageAria.EN}
                        >
                          <span className="mr-2" aria-hidden>
                            {languageMeta.EN.flag}
                          </span>
                          EN
                        </Button>
                        <Button
                          variant={language === "ID" ? "default" : "outline"}
                          className={`w-full h-10 ${language === "ID" ? "" : "text-black"}`}
                          onClick={() => {
                            handleLanguageClick();
                            setMobileMenuOpen(false);
                          }}
                          aria-label={headerCopy.switchLanguageAria.ID}
                        >
                          <span className="mr-2" aria-hidden>
                            {languageMeta.ID.flag}
                          </span>
                          ID
                        </Button>
                        <Button
                          variant={language === "ZH" ? "default" : "outline"}
                          className={`w-full h-10 ${language === "ZH" ? "" : "text-black"}`}
                          onClick={() => {
                            handleLanguageClick();
                            setMobileMenuOpen(false);
                          }}
                          aria-label={headerCopy.switchLanguageAria.ZH}
                        >
                          <span className="mr-2" aria-hidden>
                            {languageMeta.ZH.flag}
                          </span>
                          ZH
                        </Button>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
