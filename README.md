Formulaire projet – Portfolio JohannR.fr

Ce projet est un formulaire multi-étapes développé en React et Tailwind, destiné à recueillir les besoins d’un client souhaitant créer ou refondre un site web.
Il est utilisé en démo sur mon portfolio johannr.fr comme exemple d’outil personnalisé que je peux concevoir pour un indépendant, une PME ou une agence.
✨ Fonctionnalités

    ✅ Formulaire multi-étapes clair et progressif (6 étapes)

    ✅ Collecte des besoins : type de projet, objectifs, fonctionnalités, design, budget…

    ✅ Génération PDF automatique du brief à la fin du formulaire

    ✅ Envoi des données vers Airtable via Zapier

    ✅ Notification automatique par e-mail

    ✅ Design responsive, UI soignée via TailwindCSS

🔧 Stack technique

    Next.js (React)

    TailwindCSS pour le design

    Zapier pour connecter le formulaire à Airtable et l’email

    Airtable pour stocker les soumissions

    React-PDF pour générer un fichier PDF à partir des données utilisateur

🚀 Démo

🧪 Le formulaire est visible ici :
👉 formulaire-portfolio.vercel.app

📌 Attention : les soumissions via Zapier sont actives temporairement (limites du plan gratuit).
📁 Organisation du projet

/pages
index.tsx # Page d’accueil du formulaire
/components
FormStep\*.tsx # Étapes 1 à 6 du formulaire
FormWrapper.tsx # Gestion de la progression et des transitions
PdfGenerator.tsx # Création et téléchargement du PDF
/utils
sendToZapier.ts # Envoi des données à l’API Zapier
/public
/assets # Logos, icônes...

📌 À propos

Ce projet me permet de montrer ma capacité à concevoir des outils sur-mesure, mêlant :

    UX claire

    Intégration d’outils no-code comme Zapier

    Génération de documents dynamiques

    Automatisation de la communication (emails, base de données)
