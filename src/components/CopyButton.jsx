import { useEffect, useState } from "react";
import { Toast } from "./Toast";

export const CopyButton = ({ mail, children }) => {
  const [showToast, setShowToast] = useState(false);
  const [toastTimeout, setToastTimeout] = useState(null);

  const copiarAlPortapapeles = async () => {
    try {
      await navigator.clipboard.writeText(mail);
      setShowToast(true);
      if (toastTimeout) clearTimeout(toastTimeout);
      const timeoutId = setTimeout(() => setShowToast(false), 3000);
      setToastTimeout(timeoutId);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  return (
    <div>
      <button
        className="text-white/80 flex justify-center items-center hover:scale-110 cursor-pointer transition active:scale-95 relative"
        onClick={copiarAlPortapapeles}
      >
        {children}
      </button>
      {showToast && (
        <Toast
          msg="Email copiado al portapapeles"
          toastTimeout={toastTimeout}
          setToastTimeout={setToastTimeout}
          setShowToast={setShowToast}
        />
      )}
    </div>
  );
};
