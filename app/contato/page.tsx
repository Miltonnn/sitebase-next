export default function ContatoPage() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">Contato</h1>

      <p className="text-muted-foreground mb-8">
        Entre em contato conosco através do formulário abaixo.
      </p>

      <form className="flex flex-col gap-4 max-w-md">
        <input
          type="text"
          placeholder="Seu nome"
          className="border rounded-md px-4 py-2"
        />

        <input
          type="email"
          placeholder="Seu e-mail"
          className="border rounded-md px-4 py-2"
        />

        <textarea
          placeholder="Sua mensagem"
          className="border rounded-md px-4 py-2"
          rows={4}
        />

        <button
          type="submit"
          className="bg-primary text-primary-foreground rounded-md px-4 py-2 hover:opacity-90 transition"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
