import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export type Policy = {
  id: string;
  title: string;
  content: string[];
};

type Props = {
  open: boolean;
  onClose: () => void;
  policy: Policy | undefined;
};

const PolicyModal = ({ open, onClose, policy }: Props) => {
  if (!policy) return null;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* MODAL */}
          <motion.div
            className="
              fixed top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              w-[90%] md:w-[600px]
              max-h-[80vh] overflow-y-auto
              bg-black/80 backdrop-blur-xl
              rounded-2xl border border-white/10
              p-6 z-50 text-white shadow-2xl
            "
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ duration: 0.25 }}
          >
            {/* TITLE + CLOSE */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{policy.title}</h2>

              <button
                className="p-2 rounded-full hover:bg-white/10 transition"
                onClick={onClose}
              >
                <X className="text-white" size={20} />
              </button>
            </div>

            {/* CONTENT */}
            <div className="text-white/70 text-sm space-y-4 text-left leading-relaxed pr-2">
              {policy.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PolicyModal;
