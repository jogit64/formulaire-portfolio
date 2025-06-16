import React from "react";
import StepLayout from "./StepLayout";
import { FormData } from "@/types/form";

interface Step4Props {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
  data: FormData;
  onChange: (field: keyof FormData, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const contentHelpOptions = [
  "Rédaction des contenus",
  "Choix ou création d’images",
  "Structuration des pages",
];

const pageOptions = [
  "Page d’accueil",
  "À propos",
  "Prestations / Services",
  "Galerie",
  "Témoignages",
  "Blog",
  "Page contact",
];

const styleOptions = [
  "Graphique et moderne",
  "Sobre et professionnel",
  "Minimaliste",
  "J’ai besoin de conseils",
];

const Step4: React.FC<Step4Props> = ({
  currentStep,
  totalSteps,
  stepTitles,
  data,
  onChange,
  onPrev,
  onNext,
}) => {
  const toggleArrayValue = (field: keyof FormData, value: string) => {
    const list = data[field] as string[];
    if (list.includes(value)) {
      onChange(
        field,
        list.filter((item) => item !== value)
      );
    } else {
      onChange(field, [...list, value]);
    }
  };

  return (
    <StepLayout
      currentStep={currentStep}
      totalSteps={totalSteps}
      stepTitles={stepTitles}
      title="Contenu & Design"
      subtitle="Définissez les contenus à prévoir et vos préférences visuelles"
      onPrev={onPrev}
      onNext={onNext}
    >
      <div className="space-y-8">
        {/* Identité visuelle */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Identité visuelle (Logo...)</h3>
          <div className="flex flex-wrap gap-3">
            {["Oui", "Non", "En cours de création"].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => onChange("hasLogo", val)}
                className={`px-4 py-2 rounded-xl border text-sm transition ${
                  data.hasLogo === val
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {val}
              </button>
            ))}
          </div>
        </div>

        {/* Contenu prêt */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Contenu (textes, visuels)</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Oui, tout est prêt",
              "Partiellement",
              "Non, j’ai besoin d’aide",
            ].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => onChange("contentReady", val)}
                className={`px-4 py-2 rounded-xl border text-sm transition ${
                  data.contentReady === val
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {val}
              </button>
            ))}
          </div>

          <div>
            <p className="text-sm text-gray-700 mb-2">Aide souhaitée :</p>
            <div className="flex flex-wrap gap-3">
              {contentHelpOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleArrayValue("contentHelp", opt)}
                  className={`px-3 py-2 rounded-xl border text-sm transition ${
                    data.contentHelp?.includes(opt)
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pages */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Pages souhaitées</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {pageOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => toggleArrayValue("pages", opt)}
                className={`px-3 py-2 rounded-xl border text-sm transition ${
                  data.pages?.includes(opt)
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Pages spécifiques ? (Tarifs, FAQ...)"
            className="w-full mt-3 px-4 py-2 border rounded-xl text-sm"
            value={data.extraPages || ""}
            onChange={(e) => onChange("extraPages", e.target.value)}
          />
          <input
            type="text"
            placeholder="Nombre estimé de pages ? (Ex : 5 à 10)"
            className="w-full mt-3 px-4 py-2 border rounded-xl text-sm"
            value={data.pageCount || ""}
            onChange={(e) => onChange("pageCount", e.target.value)}
          />
        </div>

        {/* Langues */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Site multilingue ?</h3>
          <div className="flex gap-3">
            {["Non", "Oui"].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => onChange("multilang", val)}
                className={`px-4 py-2 rounded-xl border text-sm transition ${
                  data.multilang === val
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {val}
              </button>
            ))}
          </div>
          {data.multilang === "Oui" && (
            <input
              type="text"
              placeholder="Langues souhaitées (ex : FR / EN / ES...)"
              className="w-full mt-2 px-4 py-2 border rounded-xl text-sm"
              value={data.languages || ""}
              onChange={(e) => onChange("languages", e.target.value)}
            />
          )}
        </div>

        {/* Préférences visuelles */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Style graphique préféré</h3>
          <div className="flex flex-wrap gap-3">
            {styleOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => onChange("stylePreference", opt)}
                className={`px-3 py-2 rounded-xl border text-sm transition ${
                  data.stylePreference === opt
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
          <textarea
            placeholder="Exemples de sites aimés ou à éviter (avec commentaires)"
            className="w-full mt-3 px-4 py-2 border rounded-xl text-sm"
            rows={4}
            value={data.designExamples || ""}
            onChange={(e) => onChange("designExamples", e.target.value)}
          />
        </div>
      </div>
    </StepLayout>
  );
};

export default Step4;
