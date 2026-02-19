"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Whatsapp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Mostra o tooltip a cada 8 segundos
    const interval = setInterval(() => {
      setShowTooltip(true);

      // Esconde após 3 segundos
      setTimeout(() => {
        setShowTooltip(false);
      }, 3000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-50 right-8 z-50 flex items-center">
     
      {showTooltip && (
        <div className="mr-3 bg-white text-gray-600 px-4 py-2 rounded-full shadow-lg text-sm animate-fade-in">
          Fale conosco!
        </div>
      )}

      
      <Link
        href="https://wa.me/5511965152919"
        target="_blank"
        className="w-12 h-12 rounded-full bg-green-400 flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
      >
        <img
          src="/assets/icons/whatsapp.svg"
          alt="WhatsApp"
          className="w-7 h-7"
        />
      </Link>
    </div>
  );
}
