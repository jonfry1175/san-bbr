import { useEffect, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Check,
  ChevronDown,
  Home,
  Info,
  Package,
  Wrench,
  Briefcase,
  MapPin,
  Image as ImageIcon,
  Newspaper,
  Users,
  Phone,
  Globe,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoSanFull from "@/assets/logo-san-full.jpeg";
// import companyLogo from "@/assets/company-logo.png";
const companyLogo = logoSanFull;
import { Link, useLocation } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

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
  { key: "san", href: "/career/employee?company=san" },
  { key: "bbr", href: "/career/employee?company=bbr" },
] as const;

const navigationLinkConfig = [
  { key: "services", href: "/services" },
  { key: "ourWorks", href: "/works" },
  { key: "location", href: "/location" },
  { key: "gallery", href: "/gallery" },
  { key: "news", href: "/news" },
] as const;

const Header = () => {
  const { language, setLanguage, languageMeta, translations, t } = useI18n();
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
                  width="200"
                  className={`transition-all duration-300 w-auto bg-white p-2 rounded-lg ${
                    // Larger logo when scrolled
                    isScrolled ? "h-12 md:h-14" : "h-14 md:h-20"
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
                      onClick={() => setLanguage("EN")}
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
                      onClick={() => setLanguage("ID")}
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
                  className="w-full sm:w-[400px] bg-neutral-900 text-white border-l border-white/10 p-0 flex flex-col"
                >
                  <div className="p-6 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={companyLogo}
                        alt="Logo"
                        className="h-16 w-auto bg-white p-1 rounded"
                      />
                      <span className="font-bold text-lg tracking-wider">
                        MENU
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto px-6 py-4">
                    <nav className="flex flex-col space-y-1">
                      <Link
                        to="/"
                        className="flex items-center gap-3 px-2 py-4 text-lg font-medium text-white hover:text-accent border-b border-white/5 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Home className="h-5 w-5 text-accent" />
                        {headerCopy.home}
                      </Link>

                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem
                          value="about"
                          className="border-b border-white/5"
                        >
                          <AccordionTrigger className="px-2 py-4 text-lg font-medium text-white hover:text-accent hover:no-underline">
                            <div className="flex items-center gap-3">
                              <Info className="h-5 w-5 text-accent" />
                              {headerCopy.aboutUs}
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pb-4 pt-1 px-2">
                            <div className="flex flex-col space-y-2 border-l-2 border-white/10 ml-2 pl-4">
                              {aboutLinks.map((link) => (
                                <Link
                                  key={link.key}
                                  to={link.href}
                                  className={cn(
                                    "text-base py-1 transition-colors block",
                                    link.isActive
                                      ? "text-accent font-medium"
                                      : "text-white/70 hover:text-white"
                                  )}
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem
                          value="products"
                          className="border-b border-white/5"
                        >
                          <AccordionTrigger className="px-2 py-4 text-lg font-medium text-white hover:text-accent hover:no-underline">
                            <div className="flex items-center gap-3">
                              <Package className="h-5 w-5 text-accent" />
                              {headerCopy.navigationItems.products}
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pb-4 pt-1 px-2">
                            <div className="flex flex-col space-y-2 border-l-2 border-white/10 ml-2 pl-4">
                              {productLinks.map((link) => (
                                <Link
                                  key={link.key}
                                  to={link.href}
                                  className={cn(
                                    "text-base py-1 transition-colors block",
                                    link.isActive
                                      ? "text-accent font-medium"
                                      : "text-white/70 hover:text-white"
                                  )}
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      {navigationItems.map((item) => {
                        let Icon = Home;
                        if (item.key === "services") Icon = Wrench;
                        else if (item.key === "ourWorks") Icon = Briefcase;
                        else if (item.key === "location") Icon = MapPin;
                        else if (item.key === "gallery") Icon = ImageIcon;
                        else if (item.key === "news") Icon = Newspaper;

                        return (
                          <Link
                            key={item.key}
                            to={item.href}
                            className={cn(
                              "flex items-center gap-3 px-2 py-4 text-lg font-medium transition-colors border-b border-white/5",
                              item.isActive
                                ? "text-accent"
                                : "text-white hover:text-accent"
                            )}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <Icon
                              className={cn(
                                "h-5 w-5",
                                item.isActive ? "text-accent" : "text-accent"
                              )}
                            />
                            {item.label}
                          </Link>
                        );
                      })}

                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem
                          value="career"
                          className="border-b border-white/5"
                        >
                          <AccordionTrigger className="px-2 py-4 text-lg font-medium text-white hover:text-accent hover:no-underline">
                            <div className="flex items-center gap-3">
                              <Users className="h-5 w-5 text-accent" />
                              {headerCopy.navigationItems.career}
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pb-4 pt-1 px-2">
                            <div className="flex flex-col space-y-2 border-l-2 border-white/10 ml-2 pl-4">
                              {careerLinks.map((link) => (
                                <Link
                                  key={link.key}
                                  to={link.href}
                                  className={cn(
                                    "text-base py-1 transition-colors block",
                                    link.isActive
                                      ? "text-accent font-medium"
                                      : "text-white/70 hover:text-white"
                                  )}
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {link.label}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <Link
                        to="/contact"
                        className="flex items-center gap-3 px-2 py-4 text-lg font-medium text-white hover:text-accent border-b border-white/5 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Phone className="h-5 w-5 text-accent" />
                        {headerCopy.navigationItems.contact}
                      </Link>
                    </nav>
                  </div>

                  <div className="p-6 bg-neutral-900/50 border-t border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-white/60 uppercase tracking-wider flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        {headerCopy.languageLabel}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        variant={language === "EN" ? "default" : "outline"}
                        className={cn(
                          "w-full",
                          language !== "EN" &&
                            "bg-transparent text-white border-white/20 hover:bg-white/10"
                        )}
                        onClick={() => {
                          setLanguage("EN");
                          setMobileMenuOpen(false);
                        }}
                      >
                        <span className="mr-2 text-lg">
                          {languageMeta.EN.flag}
                        </span>
                        EN
                      </Button>
                      <Button
                        variant={language === "ID" ? "default" : "outline"}
                        className={cn(
                          "w-full",
                          language !== "ID" &&
                            "bg-transparent text-white border-white/20 hover:bg-white/10"
                        )}
                        onClick={() => {
                          setLanguage("ID");
                          setMobileMenuOpen(false);
                        }}
                      >
                        <span className="mr-2 text-lg">
                          {languageMeta.ID.flag}
                        </span>
                        ID
                      </Button>
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
