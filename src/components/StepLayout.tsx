import React, { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProgressBar from "./ProgressBar";

interface StepLayoutProps {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  onPrev?: () => void;
  onNext?: () => void;
  onSubmit?: () => void;
  isLoading?: boolean;
  isLastStep?: boolean;
}

const StepLayout: React.FC<StepLayoutProps> = ({
  currentStep,
  totalSteps,
  stepTitles,
  title,
  subtitle,
  children,
  onPrev,
  onNext,
  onSubmit,
  isLoading = false,
  isLastStep = false,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // ⏱ léger délai pour s'assurer que le DOM est prêt

    return () => clearTimeout(timer);
  }, [currentStep]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Title block */}
          <div className="text-center mb-6">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Étape {currentStep} / {totalSteps}
            </h1>
            <h2 className="text-3xl font-semibold text-gray-700">{title}</h2>
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-2">
                {subtitle}
              </p>
            )}
          </div>

          {/* ProgressBar */}
          <ProgressBar
            currentStep={currentStep}
            totalSteps={totalSteps}
            stepTitles={stepTitles}
          />

          {/* Card content with key to force re-render */}
          <div
            key={currentStep}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8"
          >
            {children}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={onPrev}
              disabled={!onPrev}
              className={`inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                !onPrev
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Précédent
            </button>

            {isLastStep ? (
              <button
                onClick={onSubmit}
                disabled={isLoading}
                className={`inline-flex items-center px-8 py-3 rounded-xl font-medium transition-all duration-200 hover:shadow-lg ${
                  isLoading
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700"
                }`}
              >
                {isLoading ? "Envoi en cours..." : "Envoyer ma demande"}
                {!isLoading && <ArrowRight className="w-4 h-4 ml-2" />}
              </button>
            ) : (
              <button
                onClick={onNext}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all duration-200 hover:shadow-lg"
              >
                Suivant
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepLayout;
