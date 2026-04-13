import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const Toggle = () => {
  // localStorage’dan başlat, yoksa default
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
    // default: sistem tercihi
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Tailwind için class toggle
    document.documentElement.classList.toggle("dark", dark);
    // localStorage’a kaydet
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="
        w-9 h-9 rounded-full flex items-center justify-center
        bg-white/10 hover:bg-white/20
        transition
      "
      aria-label="Theme Toggle"
    >
      {dark ? (
        <Sun className="w-4 h-4 text-white" />
      ) : (
        <Moon className="w-4 h-4 text-white" />
      )}
    </button>
  );
};

export default Toggle;
