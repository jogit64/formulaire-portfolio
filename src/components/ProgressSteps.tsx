type Props = {
  step: number;
  steps: string[];
};

export const ProgressSteps = ({ step, steps }: Props) => {
  return (
    <div className="mb-8">
      <div className="text-sm text-blue-600 font-medium mb-2">
        Étape {step + 1} sur {steps.length}
      </div>
      <div className="relative">
        <div className="absolute top-2 left-0 w-full h-1 bg-gray-200 rounded" />
        <div
          className="absolute top-2 left-0 h-1 bg-blue-600 rounded transition-all"
          style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
        />
        <div className="flex justify-between items-center relative z-10">
          {steps.map((label, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              <div
                className={`w-4 h-4 rounded-full border-2 ${
                  index <= step
                    ? "bg-blue-600 border-blue-600"
                    : "bg-white border-gray-300"
                }`}
              ></div>
              <div
                className={`text-xs mt-2 ${
                  index === step ? "text-blue-700 font-medium" : "text-gray-500"
                }`}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
