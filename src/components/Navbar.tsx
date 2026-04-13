import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LogoImg from "/beyaz-copy.png";
import Toggle from "./toggle"; // ✅ THEME SWITCH IMPORT

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: "Anasayfa", href: "/" },
    { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
    { name: "Hakkımızda", href: "/hakkimizda" },
   
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isDesktop = window.innerWidth >= 768;

      if (isDesktop) {
        setIsScrolled(window.scrollY > 50);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      {/* NAVBAR WRAPPER */}
      <div className="fixed top-0 left-0 w-full z-9999 pointer-events-none">
        <header
          className={`transition-all duration-300 ${
            isScrolled ? "py-4" : "py-7"
          }`}
        >
          <div
            className={`transition-all duration-300 ${
              isScrolled ? "max-w-5xl mx-auto px-8" : "max-w-7xl mx-auto px-6"
            }`}
          >
            <nav
              className="pointer-events-auto border border-white/4 rounded-full
                         dark:bg-black/30 bg-black/90 backdrop-blur-xs dark:backdrop-blur-md  px-4 md:px-5 py-5
                         flex items-center justify-between gap-4"
            >
              {/* LOGO */}
              <a href="/">
                <img
                  src={LogoImg}
                  alt="Logo"
                  className="h-8 ml-5 w-auto object-contain cursor-pointer"
                />
              </a>

              {/* DESKTOP LINKS */}
              <ul className="hidden md:flex items-center gap-8">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-white/70 hover:text-white transition"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* DESKTOP CTA + SWITCH */}
              <div className="hidden md:flex items-center gap-3">
                {/* ✅ SWITCH – SOLDA */}
             

                <a
                  href="/iletisim"
                 className="hidden md:flex rounded-full bg-white/10 border border-white/10 text-white
                           hover:bg-white/30 transition px-4.5 py-2.5 text-sm shadow"
                >
                  Bize Ulaşın
                </a>
                   {/*<Toggle /> */}
              </div>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-white/5 rounded-md"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 text-white" />
                ) : (
                  <Menu className="h-5 w-5 text-white" />
                )}
              </button>
            </nav>
          </div>
        </header>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed top-[110px] left-0 right-0 z-9998 px-8 md:hidden">
          <div
            className="rounded-2xl bg-black/40 backdrop-blur-2xl shadow-xl
                       animate-in slide-in-from-top-2 duration-300 
                       max-w-xs w-full ml-auto border border-white/10"
          >
            <div className="p-6">
              <nav className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2.5 rounded-lg text-xs font-medium 
                               text-white/70 hover:text-white hover:bg-white/10"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              <hr className="my-4 border-white/10" />

              {/* CONTACT + SWITCH */}
              <div className="flex items-center justify-between gap-3">
                <a
                  href="/contact"
                  className="rounded-xl bg-white text-black hover:bg-white/90 
                             px-4 py-2.5 text-xs font-semibold w-full text-center"
                >
                  Contact Us
                </a>

                {/* ✅ SWITCH – SAĞDA */}
                <Toggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
