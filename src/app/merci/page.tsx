"use client";

import React, { useEffect, useState } from "react";
import { Check, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { PDFDownloadLink } from "@react-pdf/renderer";
import BriefPDF from "@/components/BriefPDF";
import { FormData } from "@/types/form";

const ThankYouPage = () => {
  const [formData, setFormData] = useState<FormData | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("briefData");
    if (stored) {
      setFormData(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Merci pour votre demande !
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Votre formulaire a bien été envoyé. Vous pouvez télécharger votre
              brief au format PDF ci-dessous.
            </p>

            {formData && (
              <PDFDownloadLink
                document={<BriefPDF data={formData} />}
                fileName="brief-site-web.pdf"
                className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                {({ loading }) =>
                  loading
                    ? "Préparation du PDF..."
                    : "📄 Télécharger mon brief PDF"
                }
              </PDFDownloadLink>
            )}
          </div>

          <div className="bg-blue-50 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-blue-800 mb-3">
              Prochaines étapes
            </h2>
            <ul className="text-left space-y-2 text-blue-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Analyse de votre demande sous 24-48h
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Préparation d’une proposition personnalisée
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Prise de contact par email ou téléphone
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <Link
              href="https://johannr.fr"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
