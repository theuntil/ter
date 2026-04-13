import { useEffect, useState } from "react";
import PolicyModal, { type Policy } from "../components/PolicyModal";
import policiesData from "../data/policies.json";

const Policies = () => {
  const policies = policiesData as Policy[];
  const [openId, setOpenId] = useState<string | null>(null);

  const selectedPolicy = policies.find((p) => p.id === openId);

  /* -------------------------------
     URL HASH → Modal Auto-Open
  --------------------------------*/
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (hash) {
      const isValidPolicy = policies.some((p) => p.id === hash);
      if (isValidPolicy) {
        setOpenId(hash);
      }
    }
  }, []);

  /* --------------------------------
     Modal açıldığında URL güncelle
  ---------------------------------*/
  const openModal = (id: string) => {
    setOpenId(id);
    window.history.replaceState(null, "", `/policies#${id}`);
  };

  /* --------------------------------
     Modal kapandığında URL'den hash sil
  ---------------------------------*/
  const closeModal = () => {
    setOpenId(null);
    window.history.replaceState(null, "", `/policies`);
  };

  return (
    <section className="w-full bg-black py-16 px-6 text-center">
      <h2 className="text-white text-2xl mt-40 mb-6">Policies</h2>

      {/* Buttons */}
      <div
        className="
          flex flex-wrap 
          justify-center 
          gap-3 
          max-w-[500px]
          mx-auto
        "
      >
        {policies.map((p) => (
          <button
            key={p.id}
            onClick={() => openModal(p.id)}
            className="
              w-1/2 md:w-auto
              px-5 py-2.5
              rounded-lg
              bg-black/10 border border-white/20 
              hover:bg-white/20 transition
              text-white text-sm
              text-left md:text-center
            "
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* Modal */}
      <PolicyModal open={openId !== null} onClose={closeModal} policy={selectedPolicy} />
    </section>
  );
};

export default Policies;
