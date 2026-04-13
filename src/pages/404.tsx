import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <section className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-6">

      <div
        className="
          flex flex-col 
          md:flex-row md:items-center md:justify-center 
          gap-10 md:gap-20 
          text-center md:text-left
        "
      >

        {/* IMAGE LEFT (desktop), TOP (mobile) */}
        <img
          src="/london.png"
          alt="London Tower"
          className="
            w-56 md:w-80
            opacity-80 
            select-none 
            mx-auto md:mx-0
          "
        />

        {/* TEXT RIGHT */}
        <div className="flex flex-col items-center md:items-start">

          {/* TITLE */}
          <h1 className="text-white text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
         404 - Sayfa Bulunamadı
          </h1>

          {/* DESCRIPTION */}
          <p className="text-white/60 text-sm md:text-base max-w-md mb-8 leading-relaxed">
            The page you're looking for doesn’t exist or may have been moved.
          </p>

          {/* BUTTON */}
          <a
            href="/"
            className="
              px-6 py-3 rounded-full bg-white text-black text-sm font-medium 
              hover:bg-white/90 transition shadow-lg 
              flex items-center gap-2
            "
          >
            <ArrowLeft className="w-4 h-4" />
           Ana Sayfaya Dön
          </a>

        </div>

      </div>

    </section>
  );
};

export default NotFound;
