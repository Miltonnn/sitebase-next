"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Whatsapp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);

  // só mostra tooltip se ainda não enviou
  useEffect(() => {
    if (localStorage.getItem("leadSent")) return;

    const interval = setInterval(() => {
      setShowTooltip(true);

      setTimeout(() => {
        setShowTooltip(false);
      }, 3000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, phone }),
    });

    localStorage.setItem("leadSent", "true");
    setSuccess(true);
    setEmail("");
    setPhone("");
    setShowTooltip(false);
  };

  return (
    <div className="fixed bottom-40 right-8 z-50 flex items-center">
      {showTooltip && (
        <div className="relative mr-4 tooltip-animate">
          <div className="bg-white text-gray-700 px-4 py-2 rounded-xl shadow-lg text-sm">
            Converse conosco!
          </div>
          <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45"></div>
        </div>
      )}

      <Dialog>
        <DialogTrigger asChild>
          <div className="relative">
            <span className="whatsapp-wave"></span>
            <button className="relative w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
              <Image
                src="/assets/icons/whatsapp.svg"
                alt="WhatsApp"
                width={28}
                height={28}
              />
            </button>
          </div>
        </DialogTrigger>

        <DialogContent  className="sm:max-w-md rounded-2xl p-0 overflow-hidden">
          <div className="flex items-center gap-3 px-6 py-4 border-b bg-white">
            <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center">
              <Image
                src="/assets/icons/whatsapp.svg"
                alt="WhatsApp"
                width={18}
                height={18}
              />
            </div>

            <div>
              <p className="font-medium text-sm">Atendimento</p>
              <p className="text-xs text-green-500">Online agora</p>
            </div>
          </div>

          <div className="p-6">
            {success ? (
              <div className="text-center space-y-3 py-6">
                <h2 className="text-lg font-semibold text-green-600">
                  ✅ Recebemos seus dados!
                </h2>
                <p className="text-sm text-muted-foreground">
                  Em breve entraremos em contato.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-sm text-muted-foreground flex items-center">
                  Deixe seu contato e retornamos rapidinho
                  <ArrowDown className="ml-2 text-green-500" />
                </p>

                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                  type="tel"
                  placeholder="(DDD) + Telefone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <Button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600"
                >
                  Enviar
                </Button>
              </form>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
