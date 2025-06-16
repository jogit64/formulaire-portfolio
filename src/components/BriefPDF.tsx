// components/BriefPDF.tsx
"use client";

import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { FormData } from "@/types/form";

// Identifiant basé sur l'horodatage
const generateId = () => {
  const now = new Date();
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `BRF-${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(
    now.getDate()
  )}-${pad(now.getHours())}${pad(now.getMinutes())}`;
};

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: "Helvetica",
    lineHeight: 1.6,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  logo: {
    width: 50,
    height: 50,
  },
  titleBlock: {
    flexGrow: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  idText: {
    fontSize: 10,
    color: "#555",
    marginTop: 2,
  },
  section: {
    marginBottom: 16,
    padding: 10,
    border: "1pt solid #ccc",
    borderRadius: 6,
  },
  subtitle: {
    fontSize: 13,
    marginBottom: 6,
    fontWeight: "bold",
    color: "#333",
  },
  intro: {
    marginBottom: 20,
  },
  paragraph: {
    marginBottom: 8,
  },
  field: {
    marginBottom: 4,
  },
  label: {
    fontWeight: "bold",
  },
  footer: {
    marginTop: 40,
    fontSize: 10,
    textAlign: "center",
    color: "#777",
  },
});

const Field = ({
  label,
  value,
}: {
  label: string;
  value?: string | string[];
}) => {
  if (!value || (Array.isArray(value) && value.length === 0)) return null;
  return (
    <Text style={styles.field}>
      <Text style={styles.label}>{label} : </Text>
      {Array.isArray(value) ? value.join(", ") : value}
    </Text>
  );
};

const BriefPDF = ({ data }: { data: FormData }) => {
  const id = generateId();

  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        {/* Header */}
        <View style={styles.header}>
          <Image src="/jrenault.png" style={styles.logo} />
          <View style={styles.titleBlock}>
            <Text style={styles.title}>Synthèse de demande de projet web</Text>
            <Text style={styles.idText}>ID de soumission : {id}</Text>
          </View>
        </View>

        {/* Introduction */}
        <View style={styles.intro}>
          <Text style={styles.paragraph}>
            Merci pour votre demande. Voici une synthèse de votre brief de
            projet. Ce document servira de base à nos échanges pour clarifier
            vos attentes et établir une proposition adaptée.
          </Text>
        </View>

        {/* Coordonnées */}
        <View style={styles.section} wrap={false}>
          <Text style={styles.subtitle}>Coordonnées</Text>
          <Field label="Nom de l'entreprise" value={data.companyName} />
          <Field label="Nom du contact" value={data.contactName} />
          <Field label="Email" value={data.email} />
          <Field label="Téléphone" value={data.phone} />
        </View>

        {/* Projet */}
        <View style={styles.section} wrap={false}>
          <Text style={styles.subtitle}>Projet</Text>
          <Field label="Type de site" value={data.projectType} />
          <Field label="Objectifs principaux" value={data.projectGoals} />
          <Field label="Autre objectif" value={data.customGoal} />
        </View>

        {/* Fonctionnalités */}
        <View style={styles.section} wrap={false}>
          <Text style={styles.subtitle}>Fonctionnalités</Text>
          <Field label="Fonctionnalités souhaitées" value={data.features} />
          <Field
            label="Champs de contact personnalisés"
            value={data.contactFields}
          />
          <Field
            label="Outils externes à connecter"
            value={data.externalTools}
          />
          <Field label="Niveau d'autonomie souhaité" value={data.autonomy} />
          <Field
            label="Préférence d'interface"
            value={data.interfacePreference}
          />
          <Field label="Formation nécessaire" value={data.training} />
          <Field
            label="Fonctionnalités spécifiques"
            value={data.customFeatures}
          />
        </View>

        {/* Design */}
        <View style={styles.section} wrap={false}>
          <Text style={styles.subtitle}>Contenus & Design</Text>
          <Field label="Logo fourni" value={data.hasLogo} />
          <Field label="Contenu prêt" value={data.contentReady} />
          <Field label="Aide au contenu" value={data.contentHelp} />
          <Field label="Pages prévues" value={data.pages} />
          <Field label="Pages supplémentaires" value={data.extraPages} />
          <Field label="Nombre de pages estimé" value={data.pageCount} />
          <Field label="Multilingue" value={data.multilang} />
          <Field label="Langues" value={data.languages} />
          <Field
            label="Préférences graphiques / inspirations"
            value={data.stylePreference}
          />
          <Field
            label="Exemples de design appréciés"
            value={data.designExamples}
          />
        </View>

        {/* Modules & SEO */}
        <View style={styles.section} wrap={false}>
          <Text style={styles.subtitle}>Modules & SEO</Text>
          <Field label="Hébergement prévu" value={data.hasHosting} />
          <Field label="Fournisseur" value={data.hostingProvider} />
          <Field label="Infogérance ?" value={data.hostingManaged} />
          <Field label="Trafic attendu" value={data.expectedTraffic} />
          <Field
            label="Besoins techniques spécifiques"
            value={data.technicalNeeds}
          />
          <Field
            label="Fonctionnement en mode application"
            value={data.appLikeUsage}
          />
          <Field label="Référencement / SEO" value={data.seo} />
          <Field label="Mots clés" value={data.keywords} />
          <Field
            label="Outils de suivi / analytics"
            value={data.trackingTools}
          />
        </View>

        {/* Budget & Échéance */}
        <View style={styles.section} wrap={false}>
          <Text style={styles.subtitle}>Budget & Échéance</Text>
          <Field label="Estimation de budget" value={data.budget} />
          <Field label="Deadline connue ?" value={data.deadlineKnown} />
          <Field label="Date souhaitée" value={data.deadlineDate} />
        </View>

        {/* Remerciements */}
        <View style={{ marginTop: 20 }}>
          <Text style={styles.paragraph}>
            Merci pour votre confiance. Je vous recontacterai rapidement pour
            discuter de la suite donnée à votre projet.
          </Text>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Document généré automatiquement depuis le formulaire – www.johannr.fr
        </Text>
      </Page>
    </Document>
  );
};

export default BriefPDF;
