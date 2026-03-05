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
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowRight, MessageSquare } from "lucide-react";

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
        <div className="flex items-center gap-3">
          <MessageSquare className="text-primary w-7 h-7" />
          <h3 className="text-md font-medium text-gray-700">
            Envie-nos uma mensagem
          </h3>
        </div>
        <div className="grid gap-6 md:grid-cols-2 pt-4">
          <div className="space-y-3">
            <Label className="text-md">Nome completo</Label>
            <Input
              placeholder="Seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-3">
            <Label className="text-md">E-mail</Label>
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
          <div className="space-y-3">
            <Label className="text-md">Telefone</Label>
            <Input
              type="tel"
              placeholder="(11) 99999-9999"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="space-y-3">
            <Label className="text-md">Como nos conheceu?</Label>
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

        <div className="space-y-3">
          <Label className="text-md">Mensagem</Label>
          <Textarea
            placeholder="Escreva sua mensagem..."
            className="min-h-37.5 resize-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <div className="grid gap-6 md:grid-cols-12 items-center">
          <div className="md:col-span-7">
            <FieldGroup>
              <Field orientation="horizontal">
                <Checkbox
                  id="terms-checkbox-basic"
                  name="terms-checkbox-basic"
                />
                <FieldLabel
                  htmlFor="terms-checkbox-basic"
                  className="text-gray-500"
                >
                  <span>
                    Ao informar meus dados, eu concordo com a
                    <span className="block font-bold text-black">
                      Politica de Privacidade
                    </span>
                  </span>
                </FieldLabel>
              </Field>
            </FieldGroup>
          </div>

          <div className="md:col-span-5">
            <Button className="py-6 w-full" type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Enviar mensagem"}
              <ArrowRight />
            </Button>
          </div>
        </div>
      </form>

      {/* POPUP DE SUCESSO */}
      <Dialog open={openSuccess} onOpenChange={setOpenSuccess}>
        <DialogContent className="sm:max-w-sm text-center rounded-2xl">
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
