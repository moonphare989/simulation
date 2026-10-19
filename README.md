# AuditLab — Simulateur d'entretiens PFE

Application web interactive de préparation aux entretiens de **stage de fin d'études (PFE) de six mois en France** dans les domaines : audit externe et légal, audit contractuel, audit interne, contrôle interne, comptabilité générale, révision comptable, trésorerie et rapprochements bancaires, contrôle de gestion, contrôle des achats/ventes/décaissements, clôture mensuelle et annuelle.

## Lancer l'application

```bash
bun run dev        # démarre sur http://localhost:3000
```

Ouvrez ensuite la page dans le panneau d'aperçu. Aucune variable d'environnement n'est nécessaire : le modèle de langage est consommé côté serveur via le SDK `z-ai-web-dev-sdk` déjà configuré dans l'environnement (jamais exposé au navigateur).

```bash
bun run lint       # qualité du code (ESLint)
bunx tsc --noEmit  # vérification des types
```

## Ce que contient l'application

| Section | Contenu |
|---|---|
| **Accueil** | Tableau de bord de progression, accès rapides, encadré d'honnêteté Mode A / Mode B |
| **Parcours d'apprentissage** | Les 3 fiches de stage transformées en **15 missions pédagogiques** (Fidumac : 4, Renault : 5, Centrale Danone : 6), chacune en **10 étapes** : compréhension, objectifs, préparation, méthode, mise en situation, travail actif, correction, entretien, relances, évaluation. **73 exercices interactifs** (369 questions) avec documents simulés (factures, relevés bancaires, balances, journaux de clôture, échantillons de paiements…) et notation automatique |
| **Bibliothèque technique** | 108 définitions/formules classées par domaine et référentiel (PCG, CGNC marocain, IFRS, NEP), avec recherche instantanée et renvois croisés |
| **Simulateur d'entretien** | Conversation dynamique avec un **vrai modèle de langage** (backend `/api/interview`) : 6 profils de recruteurs (RH, auditeur senior, chef de mission, manager audit, responsable comptable, responsable trésorerie), 5 niveaux de difficulté, 19 thèmes, mode pédagogique (correction après chaque réponse) ou entretien blanc (bilan à la fin), option « centré sur mon CV réel ». **Fallback autonome honnête** si le modèle est indisponible : banque locale + évaluation par mots-clés (limites affichées) |
| **Cas pratiques** | Laboratoire de **12 dossiers** complets (cut-off, BTP, cycle achats, balance, trésorerie 5 comptes, rapprochement, délégations, clôture, TVA, P2P, lettrage, réconciliation multi-anomalies) avec anomalie à découvrir, notation de la démarche et conclusion modèle |
| **Questions rapides** | **262 questions** classées par métier (8), catégorie (16) et difficulté (1-5), avec réponse attendue, raisonnement, erreurs fréquentes, réponses orales courte/développée, relance et grille de notation. Sessions de 10 questions + **répétition espacée** (les notions mal maîtrisées reviennent au bon moment) |
| **Réponses orales** | 30 sujets en **3 versions calibrées** (20-30 s / 45-60 s / 90-120 s), structure en 5 étapes, boutons « Reformuler plus naturellement » et « Réponse plus technique » (transformations locales déterministes) |
| **Excel & données** | 16 fiches formules (SOMME.SI.ENS, RECHERCHEX, doublons, TCD…), 5 exercices à données vérifiées, 3 tableaux de bord specs (factures/délais, comptes tiers, anomalies) |
| **Mon évolution** | KPI, graphique de réussite par métier, compétences maîtrisées/en cours/à revoir (jamais « maîtrisé » après une seule bonne réponse), questions à revoir, missions non étudiées, **programme de révision personnalisé** |
| **Mes expériences réelles** | Mode B : registre des **expériences authentiques uniquement** (attestation obligatoire), utilisé par le simulateur pour l'option CV |
| **Références** | 26 notes de sources institutionnelles (ANC, Code de commerce, NEP, loi 9-88 CGNC, IFRS…) avec statut de vérification honnête — aucune URL fabriquée |
| **Paramètres** | Difficulté/durée par défaut, mode LLM activable/désactivable, **export/import JSON** de la progression, réinitialisation |

## Honnêteté professionnelle (conception)

- Les trois fiches de stage sont des **scénarios pédagogiques fictifs** : l'application ne présente jamais leurs missions comme réellement vécues et formule les corrections de manière hypothétique (« dans ce cas, je commencerais par… »).
- Le module « Mes expériences réelles » n'accepte que des expériences déclarées par l'utilisateur avec **attestation d'authenticité**.
- Le simulateur interdit au modèle de langage d'inventer un stage, un employeur ou un fait biographique dans ses reformulations (règles codées dans le prompt système de `/api/interview`).
- Les référentiels ne sont jamais confondus : **CGNC marocain** ≠ **PCG français** ; les IFRS ne sont pas présentées comme obligatoires pour toutes les entités ; les points dépendant du référentiel sont signalés.
- Toutes les données chiffrées des exercices ont été vérifiées par script (totaux, TVA, soldes rapprochés, taux).

## Architecture technique

- **Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 + shadcn/ui**, React 19.
- Une seule route visible (`/`) : navigation par sections côté client (imports dynamiques par section).
- **Contenu = données** : tout le contenu pédagogique vit dans `src/lib/content/` (fiches, missions, questions, cas, bibliothèque, référentiels), découplé de l'interface.
- **Progression** : Zustand + persistance `localStorage` (`auditlab-progress-v1`) — répétition espacée inspirée de SM-2. Export/import JSON inclus. Les données ne sont **pas synchronisées entre appareils**.
- **LLM** : `z-ai-web-dev-sdk` utilisé uniquement côté serveur (route `src/app/api/interview/route.ts`), JSON strict, timeout, retry, fallback local en cas d'indisponibilité.

## Limites connues (déclarées)

- L'évaluation en **mode autonome** (sans LLM) est lexicale (mots-clés) : elle est affichée comme telle et ne remplace pas un jugement humain.
- La persistance est **locale au navigateur** : pensez à exporter votre progression avant de changer d'appareil.
- Les contenus juridiques/réglementaires (gratification de stage, TVA, textes) renvoent aux textes en vigueur et à leur relecture : aucune version figée n'est présentée comme certaine.
- Le mode « entretien blanc » conserve les observations du modèle pour le bilan final ; celles-ci restent locales à la session.
