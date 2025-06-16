import React from "react";
import StepLayout from "./StepLayout";
import { FormData } from "@/types/form";

interface Step2Props {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
  data: FormData;
  onChange: (field: keyof FormData, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const siteTypes = ["Vitrine", "E-commerce", "Blog", "Autre"];

const projectGoals = [
  "Gagner en notoriété",
  "Développer ma clientèle",
  "Recevoir des demandes de contact",
  "Vendre en ligne",
  "Fidéliser mes clients",
  "Informer / orienter",
];

const Step2: React.FC<Step2Props> = ({
  currentStep,
  totalSteps,
  stepTitles,
  data,
  onChange,
  onPrev,
  onNext,
}) => {
  const toggleGoal = (goal: string) => {
    const current = data.projectGoals || [];
    if (current.includes(goal)) {
      onChange(
        "projectGoals",
        current.filter((g) => g !== goal)
      );
    } else {
      onChange("projectGoals", [...current, goal]);
    }
  };

  return (
    <StepLayout
      currentStep={currentStep}
      totalSteps={totalSteps}
      stepTitles={stepTitles}
      title="Quel est votre projet ?"
      subtitle="Type de site et objectifs principaux"
      onPrev={onPrev}
      onNext={onNext}
    >
      <div className="space-y-8">
        {/* Type de site */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Type de site</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {siteTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => onChange("projectType", type)}
                className={`px-4 py-2 rounded-xl border transition-all duration-200 font-medium ${
                  data.projectType === type
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Objectifs principaux */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Objectifs principaux</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {projectGoals.map((goal) => (
              <button
                key={goal}
                type="button"
                onClick={() => toggleGoal(goal)}
                className={`px-3 py-2 rounded-xl border text-sm transition ${
                  data.projectGoals?.includes(goal)
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {goal}
              </button>
            ))}
          </div>
        </div>
      </div>
    </StepLayout>
  );
};

export default Step2;
