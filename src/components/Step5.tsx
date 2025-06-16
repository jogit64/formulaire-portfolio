import React from "react";
import StepLayout from "./StepLayout";
import { FormData } from "@/types/form";

interface Step5Props {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
  data: FormData;
  onChange: (field: keyof FormData, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const performanceOptions = [
  "Faible (site vitrine)",
  "Moyen (site actif)",
  "Élevé (e-commerce, fort trafic)",
  "Je ne sais pas encore",
];

const seoOptions = [
  "Oui, base SEO solide",
  "Non, ce n’est pas une priorité",
  "Je ne sais pas encore",
];

const trackingTools = [
  "Google Analytics",
  "Search Console",
  "Aucun outil pour le moment",
  "Je ne sais pas encore",
];

const Step5: React.FC<Step5Props> = ({
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
      title="Modules & Besoins techniques"
      subtitle="Définissez vos attentes techniques, SEO ou spécifiques"
      onPrev={onPrev}
      onNext={onNext}
    >
      <div className="space-y-8">
        {/* Hébergement */}
        <div>
          <h3 className="font-semibold text-lg mb-2">
            Avez-vous une solution d’hébergement ?
          </h3>
          <div className="flex flex-wrap gap-3">
            {["Oui", "Non", "En cours de recherche"].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => onChange("hasHosting", val)}
                className={`px-4 py-2 rounded-xl border text-sm transition ${
                  data.hasHosting === val
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {val}
              </button>
            ))}
          </div>
          {data.hasHosting === "Oui" && (
            <input
              type="text"
              placeholder="Nom du fournisseur (ex : OVH, Ionos...)"
              className="w-full mt-3 px-4 py-2 border rounded-xl text-sm"
              value={data.hostingProvider || ""}
              onChange={(e) => onChange("hostingProvider", e.target.value)}
            />
          )}
          <p className="mt-4 mb-2 font-medium text-sm">
            Souhaitez-vous que l’hébergement soit géré pour vous ?
          </p>
          <div className="flex flex-wrap gap-3">
            {["Oui", "Non", "À discuter"].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => onChange("hostingManaged", val)}
                className={`px-4 py-2 rounded-xl border text-sm transition ${
                  data.hostingManaged === val
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {val}
              </button>
            ))}
          </div>
        </div>

        {/* Performances attendues */}
        <div>
          <h3 className="font-semibold text-lg mb-2">
            Trafic ou performances attendues
          </h3>
          <div className="flex flex-wrap gap-3">
            {performanceOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => onChange("expectedTraffic", option)}
                className={`px-4 py-2 rounded-xl border text-sm transition ${
                  data.expectedTraffic === option
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Besoins techniques */}
        <div>
          <h3 className="font-semibold text-lg mb-2">
            Fonctionnalités techniques spécifiques
          </h3>
          <textarea
            placeholder="Ex : API, automatisation, IA, synchronisation CRM…"
            className="w-full px-4 py-2 border rounded-xl text-sm"
            rows={3}
            value={data.technicalNeeds || ""}
            onChange={(e) => onChange("technicalNeeds", e.target.value)}
          />
        </div>

        {/* Navigation app */}
        <div>
          <h3 className="font-semibold text-lg mb-2">
            Navigation type application (PWA)
          </h3>
          <textarea
            placeholder="Ex : interface mobile simplifiée, usage principalement smartphone..."
            className="w-full px-4 py-2 border rounded-xl text-sm"
            rows={2}
            value={data.appLikeUsage || ""}
            onChange={(e) => onChange("appLikeUsage", e.target.value)}
          />
        </div>

        {/* SEO */}
        <div>
          <h3 className="font-semibold text-lg mb-2">
            Souhaitez-vous une base SEO solide ?
          </h3>
          <div className="flex flex-wrap gap-3">
            {seoOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => onChange("seo", option)}
                className={`px-4 py-2 rounded-xl border text-sm transition ${
                  data.seo === option
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Mots-clés importants ? (Ex : massage bien-être, coach Lyon...)"
            className="w-full mt-3 px-4 py-2 border rounded-xl text-sm"
            value={data.keywords || ""}
            onChange={(e) => onChange("keywords", e.target.value)}
          />
        </div>

        {/* Suivi */}
        <div>
          <h3 className="font-semibold text-lg mb-2">
            Outils de suivi et statistiques
          </h3>
          <div className="flex flex-wrap gap-3">
            {trackingTools.map((tool) => (
              <button
                key={tool}
                type="button"
                onClick={() => toggleArrayValue("trackingTools", tool)}
                className={`px-4 py-2 rounded-xl border text-sm transition ${
                  data.trackingTools?.includes(tool)
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {tool}
              </button>
            ))}
          </div>
        </div>
      </div>
    </StepLayout>
  );
};

export default Step5;
