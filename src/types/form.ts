export interface FormData {
  // Step 1 — Contact
  companyName: string;
  contactName: string;
  email: string;
  phone: string;

  // Step 2 — Projet
  projectType: string;
  projectGoals: string[];
  customGoal: string;

  // Step 3 — Fonctionnalités
  features: string[]; // général
  contactFields: string[];
  externalTools: string[];
  autonomy: string;
  interfacePreference: string;
  training: string;
  customFeatures: string;

  // Step 4 — Design & Contenu
  hasLogo: string;
  contentReady: string;
  contentHelp: string[];
  pages: string[];
  extraPages: string;
  pageCount: string;
  multilang: string;
  languages: string;
  stylePreference: string;
  designExamples: string;

  // Step 5 — Modules & Technique
  hasHosting: string;
  hostingProvider: string;
  hostingManaged: string;
  expectedTraffic: string;
  technicalNeeds: string;
  appLikeUsage: string;
  seo: string;
  keywords: string;
  trackingTools: string[];

  // Step 6 — Budget
  budget: string;
  deadlineKnown: string;
  deadlineDate: string;
}
