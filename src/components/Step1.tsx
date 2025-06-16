import React from "react";
import StepLayout from "./StepLayout";
import { FormData } from "@/types/form";

interface Step1Props {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
  data: FormData;
  onChange: <K extends keyof FormData>(field: K, value: FormData[K]) => void;

  onNext: () => void;
}

const Step1: React.FC<Step1Props> = ({
  currentStep,
  totalSteps,
  stepTitles,
  data,
  onChange,
  onNext,
}) => {
  const handleNext = () => {
    const requiredFields = [data.companyName, data.contactName, data.email];
    const allFilled = requiredFields.every((val) => val.trim() !== "");
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);

    if (!allFilled) {
      alert("Merci de remplir tous les champs obligatoires.");
      return;
    }

    if (!isEmailValid) {
      alert("Merci de saisir une adresse email valide.");
      return;
    }

    onNext();
  };

  return (
    <StepLayout
      currentStep={currentStep}
      totalSteps={totalSteps}
      stepTitles={stepTitles}
      title="Parlons de vous"
      subtitle="Commençons par faire connaissance."
      onNext={handleNext}
    >
      <div className="space-y-6">
        <input
          type="text"
          name="companyName"
          value={data.companyName}
          onChange={(e) => onChange("companyName", e.target.value)}
          placeholder="Nom de l'entreprise *"
          aria-label="Nom de l'entreprise"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="contactName"
          value={data.contactName}
          onChange={(e) => onChange("contactName", e.target.value)}
          placeholder="Nom et prénom du contact *"
          aria-label="Nom et prénom du contact"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          value={data.email}
          onChange={(e) => onChange("email", e.target.value)}
          placeholder="Email *"
          aria-label="Email"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="tel"
          name="phone"
          value={data.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          placeholder="Téléphone (optionnel)"
          aria-label="Téléphone"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </StepLayout>
  );
};

export default Step1;
