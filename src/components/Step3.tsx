import React from "react";
import StepLayout from "./StepLayout";
import { FormData } from "@/types/form";

interface Step3Props {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
  data: FormData;
  onChange: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
  onNext: () => void;
  onPrev: () => void;
}

const generalFeatures = [
  "Formulaire de contact",
  "Carte Google Maps",
  "Prise de rendez-vous",
  "Galerie photo / vidéo",
  "Blog / actualités",
  "Téléchargement de documents",
  "Newsletter",
  "Espace membre",
];

const contactFields = [
  "Nom / Prénom",
  "E-mail",
  "Téléphone",
  "Message libre",
  "Choix de sujet",
  "Téléversement de fichiers",
  "Captcha",
  "À discuter",
];

const externalTools = [
  "Google Agenda",
  "Google Analytics",
  "Search Console",
  "Réseaux sociaux",
  "E-mailing (Mailchimp, Sendinblue...)",
  "Paiement en ligne (Stripe, PayPal...)",
];

const autonomyOptions = [
  "Autonome (ajouter/modifier contenu)",
  "Sur demande uniquement",
  "À discuter",
];

const interfaceOptions = [
  "Interface simplifiée",
  "Interface complète",
  "Je ne sais pas encore",
];

const trainingOptions = ["Oui", "Non", "À discuter"];

const Step3: React.FC<Step3Props> = ({
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
      title="Fonctionnalités souhaitées"
      subtitle="Indiquez les besoins fonctionnels de votre futur site"
      onPrev={onPrev}
      onNext={onNext}
    >
      <div className="space-y-8">
        {/* Fonctionnalités principales */}
        <div>
          <h3 className="font-semibold text-lg mb-2">
            Fonctionnalités générales
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {generalFeatures.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => toggleArrayValue("features", item)}
                className={`px-3 py-2 rounded-xl border text-sm transition ${
                  data.features?.includes(item)
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Formulaire de contact */}
        <div>
          <h3 className="font-semibold text-lg mb-2">
            Champs du formulaire de contact
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {contactFields.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => toggleArrayValue("contactFields", item)}
                className={`px-3 py-2 rounded-xl border text-sm transition ${
                  data.contactFields?.includes(item)
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Outils externes */}
        <div>
          <h3 className="font-semibold text-lg mb-2">
            Connexion à des outils externes
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {externalTools.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => toggleArrayValue("externalTools", item)}
                className={`px-3 py-2 rounded-xl border text-sm transition ${
                  data.externalTools?.includes(item)
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Autonomie */}
        <div>
          <h3 className="font-semibold text-lg mb-2">
            Souhaitez-vous gérer le contenu vous-même ?
          </h3>
          <div className="flex flex-wrap gap-3">
            {autonomyOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => onChange("autonomy", option)}
                className={`px-4 py-2 rounded-xl border text-sm transition ${
                  data.autonomy === option
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Interface */}
        <div>
          <h3 className="font-semibold text-lg mb-2">
            Préférence d’interface d’administration
          </h3>
          <div className="flex flex-wrap gap-3">
            {interfaceOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => onChange("interfacePreference", option)}
                className={`px-4 py-2 rounded-xl border text-sm transition ${
                  data.interfacePreference === option
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Formation */}
        <div>
          <h3 className="font-semibold text-lg mb-2">
            Souhaitez-vous une formation pour gérer le site ?
          </h3>
          <div className="flex flex-wrap gap-3">
            {trainingOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => onChange("training", option)}
                className={`px-4 py-2 rounded-xl border text-sm transition ${
                  data.training === option
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </StepLayout>
  );
};

export default Step3;
