"use client";

import React, { useState } from "react";
import { FormData } from "@/types/form";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";

const stepTitles = [
  "Contact", // Étape 1
  "Projet", // Étape 2
  "Fonctionnalités", // Étape 3
  "Design", // Étape 4
  "Modules", // Étape 5
  "Budget", // Étape 6
];

const totalSteps = 6;

const FormWrapper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    // Step 1 — Contact
    companyName: "",
    contactName: "",
    email: "",
    phone: "",

    // Step 2 — Projet
    projectType: "",
    projectGoals: [],
    customGoal: "",

    // Step 3 — Fonctionnalités
    features: [],
    contactFields: [],
    externalTools: [],
    autonomy: "",
    interfacePreference: "",
    training: "",
    customFeatures: "",

    // Step 4 — Design
    hasLogo: "",
    contentReady: "",
    contentHelp: [],
    pages: [],
    extraPages: "",
    pageCount: "",
    multilang: "",
    languages: "",
    stylePreference: "",
    designExamples: "",

    // Step 5 — Modules
    hasHosting: "",
    hostingProvider: "",
    hostingManaged: "",
    expectedTraffic: "",
    technicalNeeds: "",
    appLikeUsage: "",
    seo: "",
    keywords: "",
    trackingTools: [],

    // Step 6 — Budget
    budget: "",
    deadlineKnown: "",
    deadlineDate: "",
  });

  const updateFormData = <K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const goToNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goToPrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            currentStep={currentStep}
            totalSteps={stepTitles.length}
            stepTitles={stepTitles}
            data={formData}
            onChange={updateFormData}
            onNext={goToNext}
          />
        );
      case 2:
        return (
          <Step2
            currentStep={currentStep}
            totalSteps={stepTitles.length}
            stepTitles={stepTitles}
            data={formData}
            onChange={updateFormData}
            onNext={goToNext}
            onPrev={goToPrev}
          />
        );
      case 3:
        return (
          <Step3
            currentStep={currentStep}
            totalSteps={stepTitles.length}
            stepTitles={stepTitles}
            data={formData}
            onChange={updateFormData}
            onNext={goToNext}
            onPrev={goToPrev}
          />
        );
      case 4:
        return (
          <Step4
            currentStep={currentStep}
            totalSteps={stepTitles.length}
            stepTitles={stepTitles}
            data={formData}
            onChange={updateFormData}
            onNext={goToNext}
            onPrev={goToPrev}
          />
        );
      case 5:
        return (
          <Step5
            currentStep={currentStep}
            totalSteps={stepTitles.length}
            stepTitles={stepTitles}
            data={formData}
            onChange={updateFormData}
            onNext={goToNext}
            onPrev={goToPrev}
          />
        );
      case 6:
        return (
          <Step6
            currentStep={currentStep}
            totalSteps={stepTitles.length}
            stepTitles={stepTitles}
            data={formData}
            onChange={updateFormData}
            onPrev={goToPrev}
          />
        );
      default:
        return null;
    }
  };

  return <>{renderStep()}</>;
};

export default FormWrapper;
