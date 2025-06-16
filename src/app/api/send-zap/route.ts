export async function POST(req: Request) {
  const formData = await req.json();

  const zapierURL = process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK!;

  try {
    const res = await fetch(zapierURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.text();

    if (!res.ok) {
      console.error("❌ Zapier error", result);
      return new Response("Erreur Zapier", { status: 500 });
    }

    return new Response("Envoyé à Zapier", { status: 200 });
  } catch (e) {
    console.error("❌ Serveur error", e);
    return new Response("Erreur interne", { status: 500 });
  }
}
