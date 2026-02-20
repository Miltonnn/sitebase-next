"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

export function Formulario() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [source, setSource] = useState("");
  const [message, setMessage] = useState("");

  const [openSuccess, setOpenSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        source,
        message,
      }),
    });

    setLoading(false);
    setOpenSuccess(true);

    // Resetar campos
    setName("");
    setEmail("");
    setPhone("");
    setSource("");
    setMessage("");

    // Fechar popup automático
    setTimeout(() => {
      setOpenSuccess(false);
    }, 4000);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col shadow-2xl p-5 xl:p-10 rounded-3xl gap-5"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Nome</Label>
            <Input
              placeholder="Seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Telefone</Label>
            <Input
              type="tel"
              placeholder="(11) 99999-9999"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Como nos conheceu?</Label>
            <Select onValueChange={(value) => setSource(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Instagram">Instagram</SelectItem>
                <SelectItem value="Google">Google</SelectItem>
                <SelectItem value="Indicação">Indicação</SelectItem>
                <SelectItem value="Outro">Outro</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Mensagem</Label>
          <Textarea
            placeholder="Escreva sua mensagem..."
            className="min-h-37.5 resize-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Enviando..." : "Enviar mensagem"}
        </Button>
      </form>

      {/* POPUP DE SUCESSO */}
      <Dialog open={openSuccess} onOpenChange={setOpenSuccess}>
        <DialogContent  className="sm:max-w-sm text-center rounded-2xl">
          <div className="flex flex-col items-center gap-4 py-6">

            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center animate-pulse">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h2 className="text-lg font-semibold">
              Mensagem enviada com sucesso!
            </h2>

            <p className="text-sm text-muted-foreground">
              Em breve entraremos em contato com você.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}