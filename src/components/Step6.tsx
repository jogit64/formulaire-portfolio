import React from "react";
import StepLayout from "./StepLayout";

import { useRouter } from "next/navigation";

import { FormData } from "@/types/form";

interface Step6Props {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
  data: FormData;
  onChange: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
  onPrev: () => void;
  onSubmit?: () => void; // optionnel si redirection directe
}

const budgetOptions = [
  "Moins de 1000 €",
  "1 000 – 3 000 €",
  "3 000 – 6 000 €",
  "Plus de 6 000 €",
  "Je ne sais pas encore",
];

const Step6: React.FC<Step6Props> = ({
  currentStep,
  totalSteps,
  stepTitles,
  data,
  onChange,
  onPrev,
}) => {
  const router = useRouter();

  const sendToZapier = async (formData: FormData) => {
    const zapierURL = "https://hooks.zapier.com/hooks/catch/23379406/uyj5fm9/";

    const isDev =
      typeof window !== "undefined" && window.location.hostname === "localhost";

    if (isDev) {
      console.warn("🟡 Envoi vers Zapier désactivé en local.");
      console.debug("📦 Données simulées :", formData);
      return;
    }

    console.log("🚀 Tentative d'envoi à Zapier avec les données suivantes :");
    console.table(formData); // plus lisible qu’un gros objet dans certains cas

    try {
      const response = await fetch(zapierURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const resultText = await response.text();

      if (!response.ok) {
        console.error("❌ Échec de l’envoi à Zapier :", resultText);
      } else {
        console.log("✅ Données envoyées à Zapier !");
        console.debug("📨 Réponse brute de Zapier :", resultText);
      }
    } catch (err) {
      console.error("❌ Erreur lors de l’envoi à Zapier :", err);
    }
  };

  const handleSubmit = async () => {
    if (!data.budget) {
      alert("Merci de sélectionner une estimation de budget.");
      return;
    }

    console.log("📋 handleSubmit lancé. Données actuelles :");
    console.debug(data);

    // 1. Envoi à Zapier
    await sendToZapier(data);

    // 2. Stock local pour PDF
    localStorage.setItem("briefData", JSON.stringify(data));
    console.log("💾 Données stockées dans localStorage.");

    // 3. Redirection
    router.push("/merci");
    console.log("🔀 Redirection vers la page de remerciement.");
  };

  return (
    <StepLayout
      currentStep={currentStep}
      totalSteps={totalSteps}
      stepTitles={stepTitles}
      title="Quel est votre budget ?"
      subtitle="Une estimation nous permet de mieux adapter nos propositions."
      onPrev={onPrev}
      onSubmit={handleSubmit}
      isLastStep
    >
      <div className="space-y-8">
        {/* Budget */}
        <div className="space-y-4">
          {budgetOptions.map((option) => (
            <label
              key={option}
              className={`block px-4 py-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                data.budget === option
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              <input
                type="radio"
                name="budget"
                value={option}
                checked={data.budget === option}
                onChange={() => onChange("budget", option)}
                className="hidden"
              />
              {option}
            </label>
          ))}
        </div>

        {/* Deadline */}
        <div className="space-y-2">
          <p className="text-gray-700 font-medium">Avez-vous une échéance ?</p>
          <div className="flex flex-wrap gap-3">
            {["Oui", "Non"].map((choice) => (
              <button
                key={choice}
                type="button"
                onClick={() => onChange("deadlineKnown", choice)}
                className={`px-4 py-2 rounded-xl border text-sm transition ${
                  data.deadlineKnown === choice
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {choice}
              </button>
            ))}
          </div>

          {data.deadlineKnown === "Oui" && (
            <input
              type="date"
              value={data.deadlineDate || ""}
              onChange={(e) => onChange("deadlineDate", e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-xl text-sm"
            />
          )}
        </div>
      </div>
    </StepLayout>
  );
};

export default Step6;
