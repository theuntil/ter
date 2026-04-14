import { useState } from "react";
import {  Instagram, Linkedin } from "lucide-react";
import PolicyModal, { type Policy } from "../components/PolicyModal";
import policiesData from "../data/policies.json";
import { Link } from "react-router-dom";

type StoreType = "appstore" | "googleplay" | "appgallery";

const Footer = () => {
  const policies = policiesData as Policy[];
  const [openPolicyId, setOpenPolicyId] = useState<string | null>(null);
  const selectedPolicy = policies.find((p) => p.id === openPolicyId);

  const storeLinks: Record<StoreType, string> = {
    appstore: "https://apps.apple.com/us/developer/rovand-ltd/id1877911901",
    googleplay: "https://play.google.com/store/apps/dev?id=7529641658741841420",
    appgallery: "https://appgallery.huawei.com/app/C117004777",
  };

  const stores: StoreType[] = ["appstore", "googleplay", "appgallery"];

  return (
    <footer className="w-full bg-white dark:bg-black pt-20 pb-12 px-6 border-t border-black/10 dark:border-white/10 transition-colors">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">

        {/* ---------------- 1) LEFT COLUMN ---------------- */}
        <div className="flex flex-col gap-6">
         <div className="flex items-center gap-2">
  {/* LIGHT MODE LOGO */}
  <img
    src="/terra_dark.png"
    className="h-20 object-contain opacity-90 dark:hidden"
  />
  {/* DARK MODE LOGO */}
  <img
    src="/terra.png"
    className="h-20 object-contain opacity-90 hidden dark:block"
  />
</div>

          <p className="text-gray-600 dark:text-white/50 text-xs leading-relaxed flex flex-col gap-2">
     <a
  href="https://rovand.limited"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center gap-2 text-xs font-medium text-gray-800 dark:text-white transition"
>
  <span>a</span>

  {/* LIGHT MODE (siyah logo) */}
  <img
    src="/rovand_logo_darlk.png"
    alt="company logo"
    className="w-15 h-10 object-contain transition-transform duration-300 ease-out group-hover:scale-103 dark:hidden"
  />

  {/* DARK MODE (beyaz logo) */}
  <img
    src="/rovand_logo.png"
    alt="company logo"
    className="w-15 h-10 object-contain transition-transform duration-300 ease-out group-hover:scale-103 hidden dark:block"
  />

  <span>company</span>
</a>

            {/* ---------------- SOCIAL ICONS ---------------- */}
            <div className="flex gap-4 mt-2">
              <a href="https://www.instagram.com/terrasoftware" className="text-gray-600 dark:text-white hover:text-blue-500 dark:hover:text-blue-300 transition">
                <Instagram className="w-5 h-5" />
              </a>
            
              <a href="https://www.linkedin.com/in/adnanozen/" className="text-gray-600 dark:text-white hover:text-blue-500 dark:hover:text-blue-300 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </p>
        </div>

        {/* ---------------- 2) CENTER COLUMN ---------------- */}
        <div className="flex justify-between md:justify-start md:gap-24">
          <div className="flex flex-col gap-4">
            <h4 className="text-gray-800 dark:text-white text-sm font-semibold tracking-wide">
              Şirket
            </h4>
           <ul className="flex flex-col gap-2 text-gray-500 dark:text-white/60 text-sm">

  <li>
    <Link
      to="/iletisim"
      className="hover:text-gray-800 dark:hover:text-white transition"
    >
      İletişim
    </Link>
  </li>

  <li>
    <Link
      to="/hizmetlerimiz"
      className="hover:text-gray-800 dark:hover:text-white transition"
    >
      Hizmetlerimiz
    </Link>
  </li>

  <li>
    <Link
      to="/hakkimizda"
      className="hover:text-gray-800 dark:hover:text-white transition"
    >
      Hakkımızda
    </Link>
  </li>

  <li>
    <Link
      to="/blog"
      className="hover:text-gray-800 dark:hover:text-white transition"
    >
      Blog
    </Link>
  </li>

</ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-gray-800 dark:text-white text-sm font-semibold tracking-wide">
              Politikalar
            </h4>
            <ul className="flex flex-col gap-2 text-gray-500 dark:text-white/60 text-sm">
              {policies.map((p) => (
                <li
                  key={p.id}
                  onClick={() => setOpenPolicyId(p.id)}
                  className="hover:text-gray-800 dark:hover:text-white transition cursor-pointer"
                >
                  {p.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---------------- 3) RIGHT COLUMN ---------------- */}
      <div className="flex flex-col gap-4">
  <h4 className="text-gray-800 dark:text-white text-sm font-semibold tracking-wide mb-2">
    Uygulamalarımız'a göz atın
  </h4>

  <div className="flex flex-col gap-4">
    {stores.map((store) => (
      <a
        key={store}
        href={storeLinks[store]}
        target="_blank"
        rel="noopener noreferrer"
        className="w-52 bg-gray-200 dark:bg-white rounded-2xl flex items-center gap-3 py-3 pl-4 shadow-md hover:opacity-90 transition"
      >
        <img src={`/${store}.png`} className="w-7" />

        <div className="flex flex-col leading-tight text-left">
          <span className="text-[10px] text-black/70 dark:text-gray-500">
            Hemen indirin
          </span>

          <span className="text-[14px] font-semibold text-black dark:text-gray-800">
            {store === "appstore"
              ? "App Store"
              : store === "googleplay"
              ? "Google Play"
              : "AppGallery"}
          </span>
        </div>
      </a>
    ))}
  </div>
</div>
      </div>

      {/* ---------------- MODAL ---------------- */}
      <PolicyModal
        open={openPolicyId !== null}
        onClose={() => setOpenPolicyId(null)}
        policy={selectedPolicy}
      />
    </footer>
  );
};

export default Footer;