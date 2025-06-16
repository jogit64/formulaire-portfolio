import React from "react";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
  stepTitles,
}) => {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium text-blue-600">
          Étape {currentStep} sur {totalSteps}
        </span>
        <span className="text-sm text-gray-500">
          {stepTitles[currentStep - 1]}
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-between mt-2">
        {stepTitles.map((title, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${
              index + 1 <= currentStep ? "text-blue-600" : "text-gray-400"
            }`}
          >
            <div
              className={`w-3 h-3 rounded-full mb-1 transition-colors duration-300 ${
                index + 1 <= currentStep ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
            <span className="text-xs hidden sm:block">{title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
