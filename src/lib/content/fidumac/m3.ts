import type { Mission } from '@/lib/types'

// =====================================================================
// Fiche 1 — Fidumac (cabinet fictif) · Mission 3
// Révision comptable de quarante comptes selon le CGNC marocain
// Scénario pédagogique fictif — janvier–mars 2026 — montants en MAD
// =====================================================================

export const fidumacMission3: Mission = {
  id: 'fidumac-m3',
  ficheId: 'fidumac',
  order: 3,
  title: 'Révision comptable de quarante comptes selon le CGNC marocain',
  period: 'Janvier – Mars 2026 (scénario pédagogique)',
  company: 'Fidumac (cabinet fictif)',
  sector: 'Distribution et BTP (entreprises clientes fictives)',
  referenceData: [
    'Revues analytiques et tests de détail portant sur quarante comptes, dans le but de contrôler la conformité au CGNC marocain',
    'Périmètre fictif : quarante comptes de la balance de Distra Maroc (distribution) au 31/12/2025, couvrant les classes 1 à 7 du CGNC (capitaux propres, dettes de financement, immobilisations, stocks, tiers, trésorerie, charges et produits)',
    'Travaux fictifs : rapprochements balance générale / grand livre / états de synthèse, revue analytique N / N-1 / prévisions, tests de détail par sondage sur pièces justificatives, contrôle de la séparation des exercices (CCA et FNP), appréciation des provisions et dépréciations',
    'Chiffres de travail : ventes de marchandises 23 148 000,00 MAD (N) contre 21 300 000,00 MAD (N-1) ; achats de marchandises 15 620 000,00 MAD (N) contre 14 200 000,00 MAD (N-1) ; clients 2 005 640,00 MAD ; fournisseurs 1 388 400,00 MAD',
    'Seuil de signification de la mission : 250 000,00 MAD (retenu pour la récapitulation des anomalies)',
    'Référentiel : CGNC marocain — Code Général de Normalisation Comptable, distinct du Plan Comptable Général français (PCG) ; montants en MAD, scénario entièrement fictif',
  ],
  summary:
    'Troisième volet du commissariat aux comptes de Distra Maroc : réviser quarante comptes de la balance par des revues analytiques et des tests de détail, pour contrôler la conformité au CGNC marocain. Apprendre à rapprocher balance, grand livre et états de synthèse ; à lire une variation N / N-1 et à repérer ce qui est inhabituel ; à prioriser les comptes par matérialité et par risque ; à exécuter des tests de détail sur pièces ; à traiter la séparation des exercices (charges constatées d\'avance, factures non parvenues) ; et à apprécier provisions et dépréciations avec des chiffres vérifiés.',
  comprehension: {
    intro:
      'Troisième volet du scénario Fidumac, toujours dans le commissariat aux comptes de Distra Maroc (entreprise fictive de distribution) pour l\'exercice clos le 31/12/2025. Le contrôle interne a été évalué en mission 2 ; l\'équipe passe à la révision proprement dite : revues analytiques et tests de détail portant sur quarante comptes, dans le but de contrôler la conformité au CGNC marocain. Tout est inventé : entreprises, personnes, montants.\n\nLa révision commence par trois documents qui doivent raconter la même histoire : la balance générale (tous les soldes par compte), le grand livre (le détail des écritures de chaque compte) et les états de synthèse (bilan et compte de produits et charges). Les rapprocher — vérifier que le total des comptes de charges et de produits du CPC provient bien de la balance, et que les soldes repris au bilan concordent — est le premier contrôle : sans lui, réviser des chiffres faux n\'a pas de sens.\n\nVient ensuite la revue analytique : comparer N à N-1 et aux prévisions, compte par compte, en calculant des variations absolues et relatives. L\'objectif n\'est pas de tout comprendre, mais de repérer les variations inhabituelles — trop fortes, nulles alors qu\'elles devraient bouger, de sens inattendu — et de former des hypothèses. Une variation inhabituelle n\'est pas une anomalie : c\'est une question à creuser.\n\nLa priorisation s\'appuie sur trois critères : la matérialité (le poids du compte au seuil de signification), le risque (ce que le compte recèle d\'erreurs possibles) et la variation (ce qui a changé de façon surprenante). Les comptes retenus font l\'objet de tests de détail : examiner des pièces justificatives, recalculer des montants, vérifier des imputations — par sondage, jamais en exhaustif.\n\nLa séparation des exercices — le cut-off — structure la fin de révision : une charge dont le service a été rendu en décembre doit figurer en 2025 même si la facture arrive en janvier (facture non parvenue, FNP, compte 4417 au CGNC) ; une charge payée d\'avance pour 2026 doit être neutralisée (charge constatée d\'avance, CCA, compte 3491). Les provisions et dépréciations s\'apprécient avec la balance âgée, une politique chiffrée et les recouvrements postérieurs à la clôture.\n\nLe référentiel est le CGNC marocain : clients 3421, fournisseurs 4411, FNP 4417, CCA 3491, provisions pour dépréciation des clients 3940, ventes 7111, achats de marchandises 6111. Ce n\'est pas le PCG français : la logique est identique, les numéros non — d\'où l\'exercice final de traduction.\n\nRègle d\'honnêteté : scénario fictif, tout au conditionnel. Et un réflexe numérique : chaque variation citée doit être recalculée avant d\'être affirmée.',
    definitions: [
      {
        term: 'Balance générale',
        definition:
          'Tableau des soldes de tous les comptes à une date donnée, en deux colonnes (débiteur / créditeur) après totalisation du grand livre. C\'est la matière première de la révision : chaque compte du CPC et du bilan doit s\'y retrouver.',
      },
      {
        term: 'Grand livre',
        definition:
          'Ensemble des comptes individuels montrant, pour chacun, le détail des écritures (date, pièce, libellé, débit, crédit) aboutissant au solde repris dans la balance. Il permet de reconstituer l\'histoire d\'un compte.',
      },
      {
        term: 'Rapprochement balance / grand livre / états de synthèse',
        definition:
          'Contrôle de concordance : le solde de chaque compte de la balance doit égaliser celui du grand livre, et les agrégats du bilan et du CPC (soldes des classes 1 à 7 convenus) doivent découler de la balance. Un écart rend les états inexploitables.',
      },
      {
        term: 'Revue analytique',
        definition:
          'Analyse des tendances et des cohérences : comparaison N / N-1 / prévisions, ratios et corrélations entre comptes (achats et ventes, charges de personnel et effectifs, intérêts et dettes). Elle détecte les variations inhabituelles et forme des hypothèses.',
      },
      {
        term: 'Variation inhabituelle',
        definition:
          'Variation de solde ou de flux sans explication apparente : trop forte au regard de l\'activité, inattendue de sign, ou stabilité suspecte. Elle déclenche une explication à obtenir et, si nécessaire, un test de détail.',
      },
      {
        term: 'Programme de travail',
        definition:
          'Document qui traduit la stratégie d\'audit en travaux exécutables : comptes concernés, objectifs (assertions), tests prévus, échantillons, références des feuilles. Il se suit et se pointe au fur et à mesure de l\'avancement.',
      },
      {
        term: 'Test de détail',
        definition:
          'Contrôle direct d\'un compte ou d\'une opération : examen de la pièce justificative, recalcul, vérification d\'imputation et de rattachement, confirmation externe. Il fournit des éléments probants sur les assertions (réalité, exhaustivité, valorisation, cut-off).',
      },
      {
        term: 'Pièce justificative',
        definition:
          'Document qui prouve l\'opération : facture, bon de livraison signé, contrat, relevé bancaire, PV. Sans pièce (ou avec une pièce non probante), l\'opération n\'est pas justifiée : c\'est un problème de justification, distinct d\'une erreur de calcul.',
      },
      {
        term: 'Imputation comptable',
        definition:
          'Affectation d\'une opération au bon compte du plan (CGNC). Une erreur d\'imputation (fournitures de bureau en 6111 au lieu de 6125) ne change pas le résultat total mais déforme l\'analyse des comptes : c\'est une anomalie de classement.',
      },
      {
        term: 'Séparation des exercices (cut-off)',
        definition:
          'Rattachement de chaque charge et de chaque produit à l\'exercice qui l\'a engendré. Le critère de rattachement d\'une charge est le service fait (prestation reçue), celui d\'un produit de marchandises est la livraison.',
      },
      {
        term: 'Charges constatées d\'avance (CCA)',
        definition:
          'Charge comptabilisée sur l\'exercice mais dont le service ne sera rendu qu\'au suivant : loyer de janvier payé en décembre, prime d\'assurance couvrant 2026. Au CGNC, l\'actif régularisateur est le compte 3491 (486 en PCG français).',
      },
      {
        term: 'Factures non parvenues (FNP)',
        definition:
          'Charge de l\'exercice dont le service a été rendu mais dont la facture n\'est pas encore reçue ou saisie à la clôture : électricité de décembre, prestation de décembre facturée en janvier. Au CGNC, la dette est constatée au 4417 (408 en PCG), extournée à l\'ouverture.',
      },
      {
        term: 'Provision pour dépréciation des clients',
        definition:
          'Correction de la valeur des créances dont le recouvrement est incertain, au 3940 au CGNC (491 en PCG), dotée via le 6194. Elle s\'apprécie par une balance âgée, une politique d\'ancienneté et les recouvrements postérieurs à la clôture.',
      },
      {
        term: 'Anomalie de valorisation, de classement, de présentation',
        definition:
          'Les trois familles d\'anomalies de révision : valorisation (mauvais montant ou mauvaise méthode), classement (mauvais compte ou mauvais exercice), présentation (bon montant, bon compte, mauvais libellé ou mauvais regroupement dans les états).',
      },
      {
        term: 'Traçabilité',
        definition:
          'Possibilité de relier chaque chiffre des états de synthèse à la balance, au grand livre, aux écritures et aux pièces — dans les deux sens. C\'est la piste d\'audit : sans elle, aucun constat n\'est démontrable.',
      },
    ],
    keyPoints: [
      'Trois documents, une seule vérité : balance générale, grand livre et états de synthèse doivent concorder avant toute révision.',
      'La revue analytique compare N, N-1 et les prévisions : elle repère les variations inhabituelles et forme des hypothèses — elle ne prouve rien seule.',
      'La priorisation des comptes combine matérialité (poids au seuil), risque (sensibilité aux anomalies) et variation (surprise).',
      'Un test de détail porte sur des pièces : existence, contenu, imputation, rattachement — par sondage justifié.',
      'Le cut-off se traite avec deux comptes CGNC : 3491 pour les charges constatées d\'avance, 4417 pour les factures non parvenues — tous deux extournés à l\'ouverture.',
      'Les dépréciations de créances se raisonnent : balance âgée, politique d\'ancienneté, cas particuliers, recouvrements postérieurs — et se chiffrent.',
      'Une variation inhabituelle est une question, pas une conclusion : corroborer avant de qualifier.',
      'Les comptes se corrroborent entre eux : un remboursement d\'emprunt (1481) explique la baisse des intérêts (6311) ; une reprise de provision (7194) doit s\'accorder avec la provision de clôture (3940).',
      'Référentiel : CGNC marocain, pas PCG français — la logique se traduit, les numéros ne se transposent pas.',
      'Honnêteté : scénario fictif, démarches au conditionnel, chiffres recalculés avant d\'être cités.',
    ],
  },
  objectives: {
    why:
      'La révision comptable est le cœur technique du commissariat aux comptes : c\'est là que l\'opinion se construit, compte par compte. Savoir rapprocher les documents, lire une balance, prioriser par la matérialité et le risque, exécuter un test de détail et traiter le cut-off donne au candidat une grammaire immédiatement réutilisable — au Maroc comme en France, seul le référentiel change. Et la capacité à chiffrer chaque constat (variation, provision, incidence cumulée) est ce qu\'un senior vérifie en premier chez un stagiaire.',
    infoSought: [
      'Les quarante comptes retenus et la raison de leur sélection (matérialité, risque, variation)',
      'Le seuil de signification retenu et son mode de calcul',
      'La concordance préalable : balance, grand livre et états de synthèse rapprochés ?',
      'Les prévisions ou budgets de l\'exercice disponibles pour la revue analytique',
      'Les politiques comptables du client : dépréciations, amortissements, cut-off',
      'La nature et l\'étendue des tests de détail prévus par compte (échantillons, pièces)',
      'Les anomalies de l\'exercice précédent et leurs corrections (continuité)',
    ],
    risksCovered: [
      'États de synthèse non rapprochés de la balance ou du grand livre (chiffres de base faux)',
      'Variations inhabituelles non expliquées (charges gonflées, produits minorés)',
      'Anomalies de valorisation (montants erronés, dépréciations insuffisantes)',
      'Anomalies de classement (imputations erronées entre comptes)',
      'Anomalies de présentation dans les états de synthèse',
      'Non-respect de la séparation des exercices : CCA et FNP omises ou erronées',
      'Provisions pour dépréciation des créances insuffisantes ou incohérentes entre N-1 et N',
      'Pièces justificatives manquantes ou non probantes sur les comptes testés',
      'Non-conformité au CGNC marocain (référentiel mal appliqué, confusion avec le PCG)',
    ],
  },
  preparation: {
    documents: [
      'Balance générale au 31/12/2025 (et balance N-1 pour la comparaison)',
      'Grand livre des comptes significatifs et journal des écritures de clôture',
      'États de synthèse provisoires : bilan, compte de produits et charges (CPC), notes',
      'Tableau des immobilisations et plan d\'amortissements (acquisitions, cessions, dotations)',
      'Balance âgée clients au 31/12/2025 et détail des créances douteuses',
      'Balances fournisseurs et factures reçues après la clôture (pour les FNP)',
      'Fiches de stock, procès-verbal d\'inventaire physique et valorisation',
      'Relevés bancaires de clôture et rapprochements bancaires au 31/12/2025',
      'Budgets et prévisions de l\'exercice (pour la revue analytique)',
      'Dossier de l\'exercice précédent : feuilles de roulement et anomalies corrigées',
      'Plan de comptes interne du client et reconcile avec le CGNC',
    ],
    questionsToAsk: [
      'Quels sont les quarante comptes retenus, et pourquoi eux plutôt que d\'autres ?',
      'La balance a-t-elle été rapprochée du grand livre et des états provisoires avant mon intervention ?',
      'Quel seuil de signification a été retenu pour apprécier les anomalies ?',
      'Des budgets ou prévisions existent-ils pour élargir la revue analytique au-delà de N-1 ?',
      'Quelles politiques le client applique-t-il en matière de dépréciation des créances et d\'amortissements ?',
      'Quels échantillons de pièces dois-je examiner pour les tests de détail, et selon quelle méthode ?',
      'Les anomalies de l\'exercice précédent ont-elles été corrigées, et avec quel suivi ?',
    ],
    precautions: [
      'Ne jamais présenter le scénario comme vécu : tout est fictif, les démarches au conditionnel.',
      'Recalculer chaque variation et chaque provision avant de la citer : un chiffre faux détruit la feuille de travail.',
      'Ne pas confondre solde de balance et solde de grand livre : le premier est un résumé, le second une histoire — vérifier la concordance.',
      'Une variation inhabituelle n\'est pas une anomalie : obtenir l\'explication et corroborer avant de qualifier.',
      'Se rappeler que le cut-off va dans les deux sens : produits et charges, écarts vers N+1 et vers N.',
      'Garder le référentiel en tête : CGNC marocain (4417, 3491, 3940…), à traduire — pas à transposer — pour un entretien en France.',
    ],
  },
  method: [
    {
      title: 'Cadrer le programme de révision',
      description:
        'Relire le plan de mission : quarante comptes à réviser, seuil de signification (250 000,00 MAD), assertions sensibles par compte, calendrier et responsable de relecture.',
      why: 'Un programme cadré évite le double emploi (déjà couvert en contrôle interne) et oriente l\'effort là où l\'opinion se joue.',
    },
    {
      title: 'Obtenir et fiabiliser les documents de base',
      description:
        'Collecter balance générale N et N-1, grand livre des comptes significatifs, états de synthèse provisoires ; vérifier que les états sont bien issus de la balance (concordance des totaux).',
      why: 'Réviser des états non rapprochés de la balance revient à auditer un chiffre déjà faux : tout le reste s\'écroulerait.',
    },
    {
      title: 'Rapprocher balance, grand livre et états de synthèse',
      description:
        'Pour chaque compte des quarante : vérifier l\'égalité du solde de balance et du solde de grand livre ; contrôler que les agrégats du CPC et du bilan reprennent ces soldes (soldes des classes 6 et 7 vers le CPC, classes 1 à 5 vers le bilan).',
      why: 'C\'est le contrôle de traçabilité amont : il garantit que le chiffre révisé est bien celui des états.',
    },
    {
      title: 'Mener la revue analytique',
      description:
        'Calculer pour chaque compte la variation N / N-1 en montant et en pourcentage, compléter par les prévisions quand elles existent, et comparer des comptes liés (achats/ventes, intérêts/emprunts, dotations/amortissements cumulés).',
      why: 'La revue analytique est le radar : elle désigne en une page les comptes dont l\'évolution appelle une explication.',
    },
    {
      title: 'Identifier et documenter les variations inhabituelles',
      description:
        'Lister les variations surprenantes (par exemple +210,44 % sur les fournitures de bureau, −90,26 % sur la provision clients), noter pour chacune l\'explication spontanée du client et l\'hypothèse d\'audit correspondante.',
      why: 'Une variation inexpliquée est le premier symptôme d\'une anomalie de valorisation, de classement ou de cut-off.',
    },
    {
      title: 'Prioriser les comptes à tester',
      description:
        'Croiser matérialité, risque et variation pour classer les quarante comptes : tests de détail renforcés sur les prioritaires, revue analytique seule sur les comptes stables et non significatifs. Documenter la raison de chaque niveau.',
      why: 'La révision est un sondage raisonné : le temps est rare, il se concentre là où le risque et le montant se rejoignent.',
    },
    {
      title: 'Exécuter les tests de détail sur pièces',
      description:
        'Pour chaque compte prioritaire : sélectionner les écritures (par matérialité, aléatoire ou orientée risque), examiner la pièce (existence, contenu, montant), recalculer (extournes, soldes), vérifier l\'imputation au plan CGNC.',
      why: 'Les éléments probants se prennent sur les pièces : c\'est le seul moyen de couvrir réalité, exhaustivité et valorisation.',
    },
    {
      title: 'Contrôler les imputations',
      description:
        'Vérifier que les charges vont au bon compte (6111 marchandises contre 6125 fournitures de bureau, 6131 locations contre 6142 transports…) et repérer les reclassements nécessaires au seuil.',
      why: 'Une erreur d\'imputation laisse le résultat intact mais fausse la marge, la revue analytique et la lisibilité des comptes.',
    },
    {
      title: 'Contrôler la séparation des exercices',
      description:
        'Autour de la clôture : dernières factures reçues et émises, livraisons de décembre/janvier, contrats de services. Comptabiliser les FNP (4417) pour les services faits non facturés et neutraliser les CCA (3491) pour les règlements d\'avance.',
      why: 'La frontière d\'exercice concentre les manipulations et les erreurs : c\'est un test systématique, pas une option.',
    },
    {
      title: 'Apprécier provisions et dépréciations',
      description:
        'Reprendre la balance âgée clients, appliquer la politique d\'ancienneté (10 %, 25 %, 50 %, 100 % au cas par cas), comparer au solde du 3940, tester les recouvrements postérieurs à la clôture et proposer la dotation complémentaire (6194).',
      why: 'Les dépréciations sont le lieu des jugements : les chiffrer (politique × balance âgée × faits postérieurs) est la seule défense contre l\'arbitraire.',
    },
    {
      title: 'Contrôler immobilisations, stocks et banques',
      description:
        'Rapprocher le tableau des immobilisations et les dotations (6193) des acquisitions ; relier le stock comptable au PV d\'inventaire ; rapprocher soldes bancaires, relevés et rapprochements au 31/12.',
      why: 'Ces comptes concentrent la matérialité : une erreur de valorisation y dépasse vite le seuil.',
    },
    {
      title: 'Documenter les anomalies au fil de l\'eau',
      description:
        'Pour chaque constat : référence du compte, fait, critère CGNC violé, incidence chiffrée, écriture de correction proposée, réponse du client. Rattacher chaque chiffre à la pièce et à la feuille de travail.',
      why: 'La traçabilité fait la valeur du dossier : un constat non référencé n\'est pas un constat.',
    },
    {
      title: 'Récapituler et conclure par compte',
      description:
        'Cumuler les incidences corrigées et non corrigées, les comparer au seuil de signification (250 000,00 MAD), conclure par compte (conforme, à corriger, à provisionner) et préparer la note de synthèse.',
      why: 'La conclusion d\'audit se construit sur le cumul chiffré : c\'est lui qui décide de l\'opinion, pas le sentiment.',
    },
    {
      title: 'Faire relire et archiver',
      description:
        'Soumettre les feuilles au senior, intégrer les corrections, archiver les copies de pièces référencées et préparer le report vers le dossier de l\'exercice suivant.',
      why: 'La relecture valide la qualité des éléments probants ; l\'archivage prépare la continuité N+1.',
    },
  ],
  exercises: [
    // ============================ EXERCICE 1 ============================
    {
      id: 'fidumac-m3-ex1',
      title: 'Comprendre la balance : lire les variations N / N-1',
      cycle: 'Révision comptable',
      context:
        'Premier exercice de révision chez Distra Maroc (fictif). Mme Idrissi vous remet un extrait de la balance au 31/12/2025 : douze comptes avec leurs soldes N et N-1. Avant tout test de détail, vous devez lire les variations et repérer ce qui est inhabituel. Scénario fictif ; montants en MAD.',
      documents: [
        {
          kind: 'table',
          name: 'Extrait de la balance générale au 31/12/2025 — douze comptes (fictif)',
          columns: ['N° compte', 'Libellé', 'Solde N (MAD)', 'Solde N-1 (MAD)', 'Variation (MAD)', 'Variation %'],
          rows: [
            ['3111', 'Marchandises', 3180000.0, 2940000.0, 240000.0, '+8,16 %'],
            ['3421', 'Clients', 2005640.0, 1842300.0, 163340.0, '+8,87 %'],
            ['3940', 'Provisions pour dépréciation des clients', 4500.0, 46200.0, -41700.0, '−90,26 %'],
            ['4411', 'Fournisseurs', 1388400.0, 1245600.0, 142800.0, '+11,46 %'],
            ['5141', 'Banque', 352900.0, 318640.0, 34260.0, '+10,75 %'],
            ['6111', 'Achats de marchandises', 15620000.0, 14200000.0, 1420000.0, '+10,00 %'],
            ['6125', 'Achats de fournitures de bureau', 261700.0, 84300.0, 177400.0, '+210,44 %'],
            ['6131', 'Locations et charges locatives', 312000.0, 312000.0, 0.0, '0,00 %'],
            ['6171', 'Charges de personnel', 5040000.0, 4800000.0, 240000.0, '+5,00 %'],
            ['7111', 'Ventes de marchandises', 23148000.0, 21300000.0, 1848000.0, '+8,68 %'],
            ['6194', 'Dotations aux provisions pour dépréciation des créances', 0.0, 46200.0, -46200.0, '−100,00 %'],
            ['7194', 'Reprises sur provisions pour dépréciation des créances', 41700.0, 0.0, 41700.0, 'Nouveau'],
          ],
          note: 'Document fictif. Vérifiez chaque variation : par exemple 261 700,00 − 84 300,00 = 177 400,00 MAD (+210,44 %) ; 4 500,00 − 46 200,00 = −41 700,00 MAD (−90,26 %).',
        },
      ],
      questions: [
        {
          id: 'fidumac-m3-ex1-q1',
          question: 'Quel est le montant de la variation du compte 6125 (achats de fournitures de bureau) ?',
          type: 'numeric',
          expected: 177400,
          explanation:
            '261 700,00 − 84 300,00 = 177 400,00 MAD. La variation absolue se calcule toujours N − N-1 avant de commenter le pourcentage.',
        },
        {
          id: 'fidumac-m3-ex1-q2',
          question: 'Quel est le taux de variation du compte 6125 (en %) ?',
          type: 'numeric',
          expected: 210.44,
          explanation:
            '177 400,00 / 84 300,00 = 210,44 %. Un triplement d\'une charge de structure sur un exercice est une variation inhabituelle typique : elle appelle une explication et un test de détail.',
        },
        {
          id: 'fidumac-m3-ex1-q3',
          question: 'De combien la provision pour dépréciation des clients (3940) a-t-elle diminué ?',
          type: 'numeric',
          expected: 41700,
          explanation:
            '46 200,00 − 4 500,00 = 41 700,00 MAD de diminution (−90,26 %). Combinée aux comptes 6194 (dotation nulle en N) et 7194 (reprise de 41 700,00), cette baisse suggère que le client a repris l\'essentiel de ses provisions sans reconstituer la couverture des créances actuelles.',
        },
        {
          id: 'fidumac-m3-ex1-q4',
          question: 'Quels comptes présentent la variation la plus inhabituelle au vu du tableau ?',
          type: 'mcq',
          options: [
            '3421 Clients (+8,87 %) et 4411 Fournisseurs (+11,46 %), en phase avec l\'activité',
            '6125 Fournitures de bureau (+210,44 %) d\'une part, et l\'ensemble 3940 / 6194 / 7194 (provision divisée par dix, dotation nulle, reprise intégrale) d\'autre part',
            '6131 Locations (0,00 %) et 6171 Charges de personnel (+5,00 %)',
            '5141 Banque (+10,75 %)',
          ],
          expected: '1',
          explanation:
            'Les variations de clients, fournisseurs, banque et personnel sont cohérentes avec une activité en croissance (~+9 à +11 %) ; le loyer stable et les effectifs à +5 % restent plausibles. En revanche, +210,44 % sur une charge de structure et l\'évaporation des provisions de créances (3940 −90,26 %, 6194 nul, 7194 nouveau) sont les deux signaux à creuser en priorité.',
        },
        {
          id: 'fidumac-m3-ex1-q5',
          question: 'Ventes +8,68 % et achats de marchandises +10,00 % : que déduisez-vous ?',
          type: 'mcq',
          options: [
            'Rien : ces deux comptes n\'ont aucun lien',
            'La marge commerciale est vraisemblablement dégradée : les achats croissent plus vite que les ventes, ce qu\'il faut corroborer (prix d\'achat, mix produits, dépréciations de stocks, erreurs d\'imputation)',
            'Le chiffre d\'affaires est forcément surévalué',
            'La TVA a été mal comptabilisée',
          ],
          expected: '1',
          explanation:
            'C\'est la lecture croisée type de la revue analytique : un écart de 1,32 point entre la croissance des achats et celle des ventes comprime la marge commerciale. La déduction reste une hypothèse à corroborer (évolution des prix d\'achat, mix, stocks, imputations) — pas une conclusion.',
        },
        {
          id: 'fidumac-m3-ex1-q6',
          question:
            'Le compte 6125 a triplé. Formulez vos hypothèses et décrivez (au conditionnel) votre premier contrôle.',
          type: 'open',
          keywords: ['imputation', 'justificatif', 'échantillon', 'budget', 'population', 'variation', 'sondage'],
          explanation:
            'Réponse attendue (exemple) : hypothèses — erreur d\'imputation (des charges d\'exploitation saisies au 6125), changement de périmètre ou de fournisseur, consommations exceptionnelles, ou charge gonflée à des fins de résultat. Le premier contrôle serait de demander l\'explication du client, puis d\'examiner un échantillon de factures du 6125 : contenu des pièces, concordance avec la nature « fournitures de bureau », rapprochement du budget, et recherche d\'imputations à reclasser (par exemple des achats de marchandises passés au 6125). La variation serait documentée avec son explication et, le cas échéant, la correction chiffrée.',
        },
      ],
      risks: ['Variations inhabituelles inexpliquées', 'Provisions évaporées', 'Marge dégradée', 'Erreur d\'imputation'],
      solutionSummary:
        'La démarche consisterait à recalculer d\'abord chaque variation (le tableau se vérifie : +163 340,00 sur les clients, +1 848 000,00 sur les ventes, −41 700,00 sur la provision), puis à trier les signaux : inhabituel — le 6125 à +210,44 % et le trio 3940 / 6194 / 7194 (provision quasi annulée, dotation nulle, reprise de 41 700,00) ; cohérent — clients, fournisseurs, banque et personnel suivent l\'activité (+5 à +11 %) ; à surveiller — achats (+10,00 %) supérieurs aux ventes (+8,68 %), soit une marge commerciale sous pression à corroborer. Dans ce cas, je demanderais les explications du client sur le 6125 et les provisions, puis j\'examinerais un échantillon de pièces du 6125 (nature, justificatif, imputation) et je testerais la balance âgée pour reconstituer la dépréciation nécessaire — ce que fait l\'exercice 4. À l\'oral, l\'important est de montrer qu\'une balance se lit en trois familles : cohérent, inexpliqué, à corroborer.',
      interviewTips: [
        'Annoncez toujours le recalcul avant l\'interprétation : « je vérifie 261 700 − 84 300 = 177 400, soit +210,44 % ».',
        'Ne concluez jamais « anomalie » sur une variation : dites « variation inhabituelle, hypothèses à corroborer ».',
      ],
    },
    // ============================ EXERCICE 2 ============================
    {
      id: 'fidumac-m3-ex2',
      title: 'Prioriser les risques sur quarante comptes',
      cycle: 'Révision comptable',
      context:
        'M. Sabri vous confie maintenant la balance complète des quarante comptes à réviser chez Distra Maroc (fictif). Avant de lancer les tests de détail, vous devez hiérarchiser : quels comptes appellent un test approfondi, lesquels une simple revue analytique ? Seuil de signification : 250 000,00 MAD. Scénario fictif ; montants en MAD.',
      documents: [
        {
          kind: 'table',
          name: 'Balance des quarante comptes révisés — N et N-1 (fictif)',
          columns: ['N° compte', 'Libellé', 'Solde N (MAD)', 'Solde N-1 (MAD)', 'Variation (MAD)'],
          rows: [
            ['1111', 'Capital social', 5000000.0, 5000000.0, 0.0],
            ['1140', 'Réserve légale', 262500.0, 237500.0, 25000.0],
            ['1191', 'Résultat net de l\'exercice', 1386420.0, 1204800.0, 181620.0],
            ['1481', 'Emprunts auprès des établissements de crédit', 1250000.0, 1600000.0, -350000.0],
            ['2210', 'Frais préliminaires', 84000.0, 120000.0, -36000.0],
            ['2811', 'Amortissements des frais préliminaires', 84000.0, 72000.0, 12000.0],
            ['2332', 'Matériel et outillage', 980000.0, 940000.0, 40000.0],
            ['28332', 'Amortissements du matériel et outillage', 462000.0, 398000.0, 64000.0],
            ['2333', 'Matériel de transport', 1720000.0, 1480000.0, 240000.0],
            ['28333', 'Amortissements du matériel de transport', 790000.0, 640000.0, 150000.0],
            ['2355', 'Matériel informatique', 462500.0, 350000.0, 112500.0],
            ['28355', 'Amortissements du matériel informatique', 187500.0, 140000.0, 47500.0],
            ['3111', 'Marchandises', 3180000.0, 2940000.0, 240000.0],
            ['3413', 'Fournisseurs, avances et acomptes', 94600.0, 71200.0, 23400.0],
            ['3421', 'Clients', 2005640.0, 1842300.0, 163340.0],
            ['3424', 'Clients douteux ou litigieux', 58750.0, 21400.0, 37350.0],
            ['3940', 'Provisions pour dépréciation des clients', 4500.0, 46200.0, -41700.0],
            ['3455', 'État - TVA récupérable', 104250.0, 96400.0, 7850.0],
            ['3488', 'Débiteurs divers', 38900.0, 22300.0, 16600.0],
            ['4411', 'Fournisseurs', 1388400.0, 1245600.0, 142800.0],
            ['4415', 'Fournisseurs, effets à payer', 186000.0, 210000.0, -24000.0],
            ['4417', 'Fournisseurs, factures non parvenues', 21400.0, 19800.0, 1600.0],
            ['4432', 'Rémunérations dues au personnel', 148300.0, 139800.0, 8500.0],
            ['4488', 'Créditeurs divers', 24700.0, 31200.0, -6500.0],
            ['5141', 'Banque', 352900.0, 318640.0, 34260.0],
            ['5161', 'Caisse', 42350.0, 38900.0, 3450.0],
            ['6111', 'Achats de marchandises', 15620000.0, 14200000.0, 1420000.0],
            ['6114', 'Variation de stocks de marchandises', -240000.0, -180000.0, -60000.0],
            ['6125', 'Achats de fournitures de bureau', 261700.0, 84300.0, 177400.0],
            ['6131', 'Locations et charges locatives', 312000.0, 312000.0, 0.0],
            ['6135', 'Primes d\'assurances', 96500.0, 92000.0, 4500.0],
            ['6137', 'Rémunérations d\'intermédiaires et honoraires', 138000.0, 86000.0, 52000.0],
            ['6142', 'Transports', 246800.0, 219300.0, 27500.0],
            ['6171', 'Charges de personnel', 5040000.0, 4800000.0, 240000.0],
            ['6193', 'Dotations d\'exploitation aux amortissements (immobilisations corporelles)', 274000.0, 251000.0, 23000.0],
            ['6194', 'Dotations aux provisions pour dépréciation des créances', 0.0, 46200.0, -46200.0],
            ['6311', 'Intérêts des emprunts et dettes', 118750.0, 152400.0, -33650.0],
            ['7111', 'Ventes de marchandises', 23148000.0, 21300000.0, 1848000.0],
            ['7194', 'Reprises sur provisions pour dépréciation des créances', 41700.0, 0.0, 41700.0],
            ['7381', 'Intérêts et produits assimilés', 9400.0, 8200.0, 1200.0],
          ],
          note: 'Document fictif. Balance simplifiée pour l\'entraînement : chaque variation se vérifie (solde N − solde N-1). La cohérence 3940 N-1 (46 200,00) + dotation N (0,00) − reprise N (41 700,00) = solde N (4 500,00) se constate sur trois comptes.',
        },
      ],
      questions: [
        {
          id: 'fidumac-m3-ex2-q1',
          question: 'Quels comptes méritent une priorité de test au regard du tableau ?',
          type: 'multi',
          options: [
            '3424 Clients douteux ou litigieux : +37 350,00 MAD (+174,53 %)',
            '6125 Achats de fournitures de bureau : +177 400,00 MAD (+210,44 %)',
            '3940 Provisions pour dépréciation des clients : −41 700,00 MAD (−90,26 %)',
            '6131 Locations et charges locatives : 0,00 MAD de variation',
            '7194 Reprises sur provisions pour dépréciation des créances : +41 700,00 MAD (compte apparu en N)',
            '4432 Rémunérations dues au personnel : +8 500,00 MAD (+6,08 %)',
            '6135 Primes d\'assurances : +4 500,00 MAD (+4,89 %)',
          ],
          expected: ['0', '1', '2', '4'],
          explanation:
            'Quatre signaux de priorité : la montée des clients douteux (3424, +174,53 %) combinée à l\'effondrement de la provision (3940, −90,26 %) et à la reprise intégrale (7194) dessine un risque de dépréciation insuffisante ; le 6125 (+210,44 %) reste une charge à expliquer et à tester sur pièces. Les comptes stables ou évoluant modérément (6131, 4432, 6135) relèvent de la revue analytique seule.',
        },
        {
          id: 'fidumac-m3-ex2-q2',
          question: 'Quel couple de comptes se corrobore mutuellement et explique une variation a priori surprenante ?',
          type: 'mcq',
          options: [
            '1111 Capital social et 1140 Réserve légale',
            '1481 Emprunts (−350 000,00 MAD) et 6311 Intérêts des emprunts (−33 650,00 MAD, −22,08 %) : le remboursement d\'emprunt explique la baisse des intérêts',
            '5161 Caisse et 6142 Transports',
            '2355 Matériel informatique et 7381 Intérêts et produits assimilés',
          ],
          expected: '1',
          explanation:
            'La lecture croisée est la force de la revue analytique : la dette de financement baisse de 21,88 % (1 600 000 → 1 250 000) et, dans les mêmes proportions, les intérêts passent de 152 400,00 à 118 750,00 (−22,08 %). La variation du 6311, inhabituelle isolément, devient cohérente corroborée par le 1481 : hypothèse validée, pas d\'anomalie a priori.',
        },
        {
          id: 'fidumac-m3-ex2-q3',
          question: 'Quel est le taux de variation du compte 3424 (clients douteux) (en %) ?',
          type: 'numeric',
          expected: 174.53,
          explanation:
            '37 350,00 / 21 400,00 = 174,53 %. Des clients douteux qui ont presque triplé pendant que la provision fond : la combinaison justifie un test de la balance âgée (exercice 4).',
        },
        {
          id: 'fidumac-m3-ex2-q4',
          question: 'Quel travail spécifique le couple 3424 / 3940 appelle-t-il en priorité ?',
          type: 'mcq',
          options: [
            'Une confirmation des fournisseurs',
            'Une revue de la balance âgée clients et le recalcul de la dépréciation nécessaire au 3940, avec test des recouvrements postérieurs à la clôture',
            'Un contrôle des dotations aux amortissements',
            'Une revue des états de rapprochement bancaire',
          ],
          expected: '1',
          explanation:
            'Clients douteux en hausse forte + provision en chute libre : le poste clients est probablement surévalué. Le travail type : reprendre la balance âgée, identifier les créances anciennes, appliquer la politique de dépréciation, comparer au 3940 (4 500,00) et proposer la dotation complémentaire (6194).',
        },
        {
          id: 'fidumac-m3-ex2-q5',
          question:
            'Rédigez (au conditionnel) le programme de travail des comptes prioritaires identifiés : quels tests, sur quels documents, avec quelle logique d\'échantillonnage ?',
          type: 'open',
          keywords: ['matérialité', 'variation', 'risque', 'sondage', 'justificatif', 'cut-off', 'confirmation', 'dépréciation'],
          explanation:
            'Réponse attendue (exemple) : sur le 6125, test de détail par sondage sur factures (nature des pièces, budget, recherche d\'imputations erronées) ; sur le poste clients (3424 / 3940 / 7194), revue de la balance âgée, recalcul de la dépréciation selon la politique, confirmations directes des clients douteux et recouvrements postérieurs ; sur le 6111 / 7111, revue analytique croisées avec le 3111 (stock) et contrôle du cut-off aux dates de clôture ; sur le 1481 / 6311, simple corroboration par le tableau de remboursement. Chaque test serait dimensionné par la matérialité (seuil de 250 000,00 MAD) et le risque, avec échantillon justifié et documentation des conclusions.',
        },
      ],
      risks: ['Priorisation mal fondée', 'Dépréciation insuffisante', 'Charge inexpliquée', 'Matérialité mal appréciée'],
      solutionSummary:
        'La procédure consisterait à trier les quarante comptes en trois familles. Prioritaires (tests de détail) : 3424 + 3940 + 7194 (le trio des dépréciations, avec 6194 à zéro — risque de clients surévalués), 6125 (+210,44 % à justifier sur pièces), et par matérialité 6111 / 7111 / 3111 (les masses de l\'exploitation, avec cut-off systématique). Corroborés sans test lourd : 1481 avec 6311 (remboursement d\'emprunt expliquant −22,08 % d\'intérêts), 2355 avec 28355 et 6193 (renouvellement informatique cohérent), 2210 avec 2811 (frais préliminaires totalement amortis). Revue analytique seule : comptes stables ou peu significatifs (6131, 6135, 4432, 5161, 7381, 3455…). Dans ce cas, je documenterais ce classement avec les trois critères (matérialité au seuil de 250 000,00 MAD, risque par nature, variation surprenante) pour qu\'il soit discutable et refaisable. À l\'oral, montrer que l\'on sait NE PAS tout tester est aussi important que savoir tester : la révision est un art du triage raisonné.',
      interviewTips: [
        'Structurez votre réponse par familles (prioritaire / corroboré / analytique) : le recruteur entend alors un plan, pas une liste.',
        'Citez la cohérence 1481-6311 : les corroborations croisées entre comptes sont ce qui distingue une vraie revue analytique d\'un simple contrôle de variation.',
      ],
    },
    // ============================ EXERCICE 3 ============================
    {
      id: 'fidumac-m3-ex3',
      title: 'Test de détail et cut-off : CCA et FNP à la clôture',
      cycle: 'Révision comptable',
      context:
        'Vous testez la séparation des exercices de Distra Maroc (fictif) au 31/12/2025. M. Sabri vous remet la liste des factures de charges de fin et de début d\'exercice, avec les dates de service fait, de facturation et de comptabilisation. Objectif : identifier les charges constatées d\'avance (CCA) et les factures non parvenues (FNP) à comptabiliser. Scénario fictif ; montants en MAD.',
      documents: [
        {
          kind: 'table',
          name: 'Factures de charges autour de la clôture du 31/12/2025 (fictif)',
          columns: ['N° facture', 'Prestataire', 'Nature', 'Service fait', 'Date facture', 'Comptabilisée le', 'Montant TTC (MAD)'],
          rows: [
            ['FAC-1201', 'Sud Net', 'Nettoyage des locaux — décembre', '12/2025', '12/12/2025', '12/12/2025', 8400.0],
            ['FAC-1202', 'Atlas Info', 'Maintenance informatique (contrat annuel, exercice 2025)', '12/2025', '03/01/2026', '03/01/2026', 6300.0],
            ['FAC-1203', 'Immobilier Rif', 'Loyer de janvier 2026, réglé le 28/12/2025', '01/2026', '28/12/2025', '28/12/2025', 9800.0],
            ['FAC-1204', 'Assurance Atlas', 'Prime annuelle couvrant 01/01/2026 au 31/12/2026', '01/2026 à 12/2026', '15/12/2025', '15/12/2025', 12000.0],
            ['FAC-1205', 'Trans Maroc', 'Transport de marchandises — fin décembre', '28/12/2025', '02/01/2026', '02/01/2026', 4650.0],
            ['FAC-1206', 'Lydec Fiction', 'Électricité consommée en décembre 2025', '12/2025', '05/01/2026', 'Non comptabilisée', 3750.0],
          ],
          note: 'Document fictif. TVA fictive de 20 % incluse. Rappel : le rattachement d\'une charge suit le service fait ; la CCA (compte 3491) neutralise les charges payées d\'avance, la FNP (compte 4417) constate les dettes pour services faits non facturés.',
        },
      ],
      questions: [
        {
          id: 'fidumac-m3-ex3-q1',
          question: 'Quel est le montant total des factures non parvenues (FNP) à comptabiliser au 31/12/2025 ?',
          type: 'numeric',
          expected: 14700,
          explanation:
            'Trois services faits en 2025 facturés ou saisis en 2026 : FAC-1202 (6 300,00), FAC-1205 (4 650,00) et FAC-1206 (3 750,00). Total FNP : 6 300,00 + 4 650,00 + 3 750,00 = 14 700,00 MAD à constater au 4417.',
        },
        {
          id: 'fidumac-m3-ex3-q2',
          question: 'Quel est le montant total des charges constatées d\'avance (CCA) à isoler au 31/12/2025 ?',
          type: 'numeric',
          expected: 21800,
          explanation:
            'Deux charges de 2025 dont le service profite à 2026 : FAC-1203 (loyer de janvier 2026, 9 800,00) et FAC-1204 (prime d\'assurance couvrant 2026, 12 000,00). Total CCA : 9 800,00 + 12 000,00 = 21 800,00 MAD à activer au 3491.',
        },
        {
          id: 'fidumac-m3-ex3-q3',
          question: 'Au CGNC, dans quel compte constate-t-on une facture non parvenue fournisseur ?',
          type: 'mcq',
          options: [
            '3491 Charges constatées d\'avance',
            '4417 Fournisseurs, factures non parvenues',
            '4411 Fournisseurs',
            '6194 Dotations aux provisions pour dépréciation des créances',
          ],
          expected: '1',
          explanation:
            'La FNP est une dette : au CGNC elle se constate au 4417 « Fournisseurs, factures non parvenues » (408 en PCG français), en débitant la charge concernée. Le 3491 est l\'actif régularisateur symétrique pour les charges d\'avance.',
        },
        {
          id: 'fidumac-m3-ex3-q4',
          question: 'Quelle écriture enregistre la charge constatée d\'avance sur le loyer FAC-1203 ?',
          type: 'mcq',
          options: [
            'Débit 6131 Locations et charges locatives 9 800,00 / Crédit 4411 Fournisseurs 9 800,00',
            'Débit 3491 Charges constatées d\'avance 9 800,00 / Crédit 6131 Locations et charges locatives 9 800,00',
            'Débit 6131 9 800,00 / Crédit 3491 9 800,00',
            'Aucune écriture : il suffit d\'une note explicative',
          ],
          expected: '1',
          explanation:
            'Le loyer de janvier 2026 a été comptabilisé en charges de 2025 (avec le paiement) : il faut le neutraliser au 31/12/2025 en soldant la charge (crédit 6131) par l\'actif régularisateur (débit 3491). L\'extourne le 01/01/2026 le remettra en charges de 2026. L\'option 3 double la charge au lieu de la neutraliser.',
        },
        {
          id: 'fidumac-m3-ex3-q5',
          question: 'Quelle situation du tableau génère une FNP ?',
          type: 'mcq',
          options: [
            'Un paiement effectué en décembre pour un service de janvier',
            'Un service rendu en décembre 2025, facturé et comptabilisé en janvier 2026',
            'Une facture de décembre comptabilisée en décembre',
            'Une prime d\'assurance couvrant l\'exercice suivant',
          ],
          expected: '1',
          explanation:
            'La FNP naît du décalage service fait / facturation : le service appartient à 2025, la charge doit donc figurer en 2025 (avec la dette au 4417) même si la facture arrive en 2026. Les options 1 et 4 génèrent des CCA ; l\'option 3 est conforme.',
        },
        {
          id: 'fidumac-m3-ex3-q6',
          question:
            'Rédigez (au conditionnel) les écritures de régularisation au 31/12/2025 et expliquez le principe de séparation des exercices qui les fonde.',
          type: 'open',
          keywords: ['cut-off', '4417', '3491', 'rattachement', 'service fait', 'charge', 'extourne'],
          explanation:
            'Réponse attendue (exemple) : principe — chaque charge se rattache à l\'exercice du service fait, indépendamment de la date de facturation ou de paiement. Écritures : pour les FNP, débit des charges concernées (6133 entretien ou 6145 électricité par exemple) et crédit 4417 pour 14 700,00 MAD (6 300,00 + 4 650,00 + 3 750,00), en distinguant HT et TVA si le détail est connu ; pour les CCA, débit 3491 et crédit des charges (6131 loyers 9 800,00 ; 6135 assurances 12 000,00) pour 21 800,00 MAD. Toutes ces écritures seraient extournées à l\'ouverture de 2026. L\'incidence nette sur le résultat 2025 serait documentée et rapprochée du seuil.',
        },
      ],
      risks: ['Cut-off des charges', 'CCA omises', 'FNP omises', 'Rattachement erroné'],
      solutionSummary:
        'La démarche consisterait à classer chaque facture selon deux questions : le service a-t-il été rendu avant ou après le 31/12/2025 ? la charge a-t-elle été comptabilisée dans le bon exercice ? Résultat : trois FNP pour 14 700,00 MAD (FAC-1202, 1205, 1206 — services faits en 2025, factures de janvier) à constater au 4417 ; deux CCA pour 21 800,00 MAD (FAC-1203 loyer de janvier, FAC-1204 prime 2026) à isoler au 3491 ; une facture conforme (FAC-1201). Les écritures : débit charges / crédit 4417 pour les FNP, débit 3491 / crédit charges pour les CCA, avec extourne au 01/01/2026. L\'incidence nette sur le résultat 2025 serait chiffrée (les FNP majorent les charges de 14 700,00, les CCA les minorent de 21 800,00) et confrontée au seuil de signification. À l\'oral, ayez le réflexe des deux questions — « quand le service ? » puis « quand la saisie ? » — et le mot « extourne » : ce sont les marqueurs du cut-off bien maîtrisé.',
      interviewTips: [
        'Les deux comptes CGNC à connaître par cœur pour le cut-off : 3491 (CCA) et 4417 (FNP) — avec leurs équivalents PCG (486, 408) si l\'entretien est en France.',
        'Précisez toujours que ces écritures s\'extournent à l\'ouverture : le cut-off est un jeu de frontières, pas une modification définitive.',
      ],
    },
    // ============================ EXERCICE 4 ============================
    {
      id: 'fidumac-m3-ex4',
      title: 'Provisions et dépréciations : recalculer la couverture des créances',
      cycle: 'Révision comptable',
      context:
        'Suite logique de la priorisation : le poste clients de Distra Maroc (fictif) avec un soupçon de dépréciation insuffisante (3940 à 4 500,00 MAD alors que les clients douteux ont triplé). Vous reprenez la balance âgée au 31/12/2025 et la politique de dépréciation du client. Scénario fictif ; montants en MAD, créances hors taxes.',
      documents: [
        {
          kind: 'table',
          name: 'Balance âgée clients au 31/12/2025 — huit clients (fictif)',
          columns: ['Client', 'Non échu (MAD)', '1-30 j (MAD)', '31-60 j (MAD)', '61-90 j (MAD)', 'Plus de 90 j (MAD)', 'Total dû (MAD)'],
          rows: [
            ['Comptoir du Sud', 30000.0, 12000.0, 6200.0, 0.0, 0.0, 48200.0],
            ['Grenier Distribution', 40000.0, 15500.0, 8000.0, 0.0, 0.0, 63500.0],
            ['Atlas Restauration', 14900.0, 5000.0, 3000.0, 5000.0, 0.0, 27900.0],
            ['Menara Épicerie', 8400.0, 4000.0, 2000.0, 2000.0, 2000.0, 18400.0],
            ['Rif Distribution', 12000.0, 4000.0, 2000.0, 4750.0, 9000.0, 31750.0],
            ['Tanger Loisirs', 9600.0, 4000.0, 2000.0, 0.0, 0.0, 15600.0],
            ['Fès Catering', 12300.0, 6000.0, 4000.0, 0.0, 0.0, 22300.0],
            ['Agadir Hôtellerie', 5850.0, 2000.0, 2000.0, 0.0, 0.0, 9850.0],
            ['TOTAL', '', '', 29200.0, 11750.0, 11000.0, 237500.0],
          ],
          note: 'Document fictif. Politique de dépréciation de Distra Maroc : 0 % (non échu et 1-30 j) ; 10 % (31-60 j) ; 25 % (61-90 j) ; 50 % (plus de 90 j) ; cas particulier : Rif Distribution en liquidation judiciaire (fictive) — dépréciation de 100 % sur ses 9 000,00 MAD de plus de 90 jours. Solde du compte 3940 avant correction : 4 500,00 MAD.',
        },
      ],
      questions: [
        {
          id: 'fidumac-m3-ex4-q1',
          question: 'Quel est le montant total des créances de la balance âgée ?',
          type: 'numeric',
          expected: 237500,
          explanation:
            '48 200 + 63 500 + 27 900 + 18 400 + 31 750 + 15 600 + 22 300 + 9 850 = 237 500,00 MAD. Vérifiez aussi les tranches : 29 200,00 (31-60 j), 11 750,00 (61-90 j) et 11 000,00 (plus de 90 j).',
        },
        {
          id: 'fidumac-m3-ex4-q2',
          question: 'Quel est le montant de la dépréciation totale nécessaire au 31/12/2025 selon la politique ?',
          type: 'numeric',
          expected: 15857.5,
          explanation:
            'Tranche 31-60 j : 29 200,00 × 10 % = 2 920,00. Tranche 61-90 j : 11 750,00 × 25 % = 2 937,50. Tranche plus de 90 j : 2 000,00 (Menara) × 50 % = 1 000,00, plus Rif Distribution en liquidation : 9 000,00 × 100 % = 9 000,00. Total : 2 920,00 + 2 937,50 + 1 000,00 + 9 000,00 = 15 857,50 MAD.',
        },
        {
          id: 'fidumac-m3-ex4-q3',
          question: 'Quelle dotation complémentaire faut-il enregistrer, sachant que le 3940 est déjà crédité de 4 500,00 MAD ?',
          type: 'numeric',
          expected: 11357.5,
          explanation:
            'Dépréciation nécessaire (15 857,50) − provision existante (4 500,00) = dotation complémentaire de 11 357,50 MAD à comptabiliser : débit 6194 (dotations aux provisions pour dépréciation des créances) / crédit 3940.',
        },
        {
          id: 'fidumac-m3-ex4-q4',
          question: 'Quelles étapes accompagnent le calcul pour en faire un élément probant ?',
          type: 'multi',
          options: [
            'Reclasser les créances douteuses au compte 3424 et le justifier (litiges, insolvabilité déclarée)',
            'Demander des confirmations directes aux clients significatifs, dont Rif Distribution',
            'Tester les recouvrements postérieurs à la clôture (encaissements de janvier-février 2026)',
            'Comparer la politique appliquée à celle de N-1 pour vérifier la cohérence',
            'Attendre la décision du client pour compter la provision comme certaine',
          ],
          expected: ['0', '1', '2', '3'],
          explanation:
            'Le calcul seul ne suffit pas : reclassement au 3424 documenté, confirmations directes, recouvrements postérieurs et cohérence de la politique avec N-1 transforment la balance âgée en élément probant. La provision reste une estimation : elle n\'attend pas la « décision » du client pour être nécessaire, elle se déduit des faits.',
        },
        {
          id: 'fidumac-m3-ex4-q5',
          question:
            'Expliquez (au conditionnel) votre raisonnement complet : de la balance âgée à l\'écriture de dotation, en passant par la critique de la situation actuelle.',
          type: 'open',
          keywords: ['balance âgée', 'politique', 'tranches', '3424', '3940', '6194', 'recouvrement', 'dotation'],
          explanation:
            'Réponse attendue (exemple) : je reprendrais la balance âgée (237 500,00 MAD, dont 11 000,00 de plus de 90 jours), j\'appliquerais la politique par tranche (10 % / 25 % / 50 %) en traitant Rif Distribution à 100 % (liquidation), soit une dépréciation nécessaire de 15 857,50 MAD. Constatant que le 3940 ne porte que 4 500,00 (et que la dotation 6194 est nulle avec une reprise de 41 700,00 au 7194), je proposerais une dotation complémentaire de 11 357,50 MAD (débit 6194 / crédit 3940) après reclassement des créances concernées au 3424. Les preuves : confirmations clients, recouvrements postérieurs, cohérence de la politique avec N-1. L\'incidence (11 357,50 sur le résultat) serait portée au récapitulatif des anomalies face au seuil de 250 000,00 MAD.',
        },
      ],
      risks: ['Dépréciation insuffisante', 'Reprise injustifiée', 'Créances douteuses non reclassées', 'Estimation non corroborée'],
      solutionSummary:
        'Dans ce cas, je recalculerais tout : total de la balance âgée (237 500,00 MAD), tranches (29 200,00 / 11 750,00 / 11 000,00), puis dépréciation nécessaire selon la politique — 2 920,00 (10 % de 29 200,00) + 2 937,50 (25 % de 11 750,00) + 1 000,00 (50 % de 2 000,00 Menara) + 9 000,00 (100 % Rif Distribution, liquidation) = 15 857,50 MAD. Face au 3940 de 4 500,00, la dotation complémentaire serait de 11 357,50 MAD (6194 / 3940), après reclassement des créances concernées au 3424. La situation actuelle serait critiquée pour ce qu\'elle est : une reprise de 41 700,00 (7194) sans reconstitution de la couverture alors que les douteux triplaient — le schéma type de la dépréciation insuffisante. Les preuves à réunir : confirmations directes, recouvrements postérieurs, cohérence de la politique avec N-1. À l\'oral, l\'exercice se raconte en une phrase : « une politique × une balance âgée × des faits postérieurs = un montant, et l\'écart avec le solde du 3940 fait la dotation ».',
      interviewTips: [
        'Déroulez le calcul tranche par tranche à l\'oral : 10 % de 29 200 = 2 920 ; 25 % de 11 750 = 2 937,50 — le recruteur teste votre sûreté numérique.',
        'Rappelez la triade de comptes CGNC : 3424 (douteux), 3940 (dépréciation), 6194 (dotation) — et leurs cousins PCG 416 / 491 / 6817 si l\'entretien est français.',
      ],
    },
    // ============================ EXERCICE 5 ============================
    {
      id: 'fidumac-m3-ex5',
      title: 'CGNC marocain contre PCG français : traduire son expérience',
      cycle: 'Révision comptable',
      context:
        'Dernier exercice de la mission, orienté entretien. Vous préparez un entretien en France et vous devez savoir traduire votre expérience de révision menée au CGNC marocain : mêmes assertions, mêmes tests, numéros et libellés différents. Scénario fictif ; équivalences usuelles (les libellés exacts peuvent varier selon les plans de comptes internes).',
      documents: [
        {
          kind: 'table',
          name: 'Table d\'équivalence usuelle CGNC (Maroc) / PCG (France) (fictif)',
          columns: ['Poste', 'Compte CGNC (Maroc)', 'Compte PCG (France)'],
          rows: [
            ['Clients', '3421', '410'],
            ['Clients douteux ou litigieux', '3424', '416'],
            ['Provisions pour dépréciation des clients', '3940', '491'],
            ['Fournisseurs', '4411', '400'],
            ['Fournisseurs, factures non parvenues', '4417', '408'],
            ['Charges constatées d\'avance', '3491', '486'],
            ['Achats de marchandises', '6111', '607'],
            ['Ventes de marchandises', '7111', '707'],
            ['Banque', '5141', '512'],
            ['Caisse', '5161', '530'],
          ],
          note: 'Document fictif d\'entraînement. Équivalences usuelles entre CGNC marocain et PCG français : la logique comptable (assertions, cut-off, dépréciations) est commune, la numérotation diffère. Vérifiez toujours le libellé avant de citer un numéro.',
        },
      ],
      questions: [
        {
          id: 'fidumac-m3-ex5-q1',
          question: 'Quel est l\'équivalent PCG français du compte 3421 « Clients » du CGNC ?',
          type: 'mcq',
          options: [
            'Compte 410',
            'Compte 401',
            'Compte 411',
            'Compte 421',
          ],
          expected: '0',
          explanation:
            'Clients : 3421 au CGNC marocain, 410 en PCG français (le 411 étant une subdivision usuelle pour « clients et comptes rattachés »). Le 401 côté PCG relève des fournisseurs.',
        },
        {
          id: 'fidumac-m3-ex5-q2',
          question: 'La charge constatée d\'avance au 3491 (CGNC) correspond à quel compte PCG ?',
          type: 'mcq',
          options: [
            'Compte 486',
            'Compte 408',
            'Compte 491',
            'Compte 481',
          ],
          expected: '0',
          explanation:
            'CCA : 3491 au CGNC, 486 en PCG. Le 408 PCG est la facture non parvenue (4417 CGNC) ; le 491 PCG, la dépréciation des clients (3940 CGNC).',
        },
        {
          id: 'fidumac-m3-ex5-q3',
          question: 'Quelles affirmations sur la différence CGNC / PCG sont exactes ?',
          type: 'multi',
          options: [
            'La logique d\'audit (assertions, cut-off, dépréciations, éléments probants) est transposable d\'un référentiel à l\'autre',
            'Les factures non parvenues se traitent au 4417 au Maroc et au 408 en France',
            'Le CGNC parle de « provisions pour dépréciation » quand le PCG parle de « dépréciations »',
            'Il faut mémoriser les numéros marocains pour les réciter en entretien en France',
            'Le vocabulaire marocain (CPC, états de synthèse) se traduit sans peine (compte de résultat, états financiers)',
          ],
          expected: ['0', '1', '2', '4'],
          explanation:
            'Quatre affirmations exactes : la logique est transposable, les FNP sont 4417 / 408, la « provision pour dépréciation » marocaine correspond à la « dépréciation » française, et le vocabulaire se traduit. Réciter des numéros marocains en France serait au contraire une erreur : on traduit les libellés et la démarche, pas la numérotation.',
        },
        {
          id: 'fidumac-m3-ex5-q4',
          question: 'Transposer directement les numéros de comptes marocains dans un contexte français serait la bonne façon de présenter son expérience.',
          type: 'truefalse',
          options: ['Vrai', 'Faux'],
          expected: '1',
          explanation:
            'Faux : la bonne méthode est la traduction — dire « clients, 3421 au CGNC, équivalent 410 en France » montre la maîtrise des deux référentiels. Réciter des numéros sans les situer fait perdre toute crédibilité technique.',
        },
        {
          id: 'fidumac-m3-ex5-q5',
          question:
            'Vous passez un entretien en France : comment présentez-vous votre révision de quarante comptes menée au CGNC, en trois ou quatre phrases ?',
          type: 'open',
          keywords: ['référentiel', 'traduire', 'libellé', 'logique', 'assertion', 'PCG', 'CGNC', 'expérience'],
          explanation:
            'Réponse attendue (exemple) : je présenterais la démarche d\'abord — rapprochements balance / grand livre / états, revue analytique N / N-1, priorisation par matérialité et risque, tests de détail sur pièces, cut-off et dépréciations — en précisant qu\'elle a été appliquée au CGNC marocain (clients 3421 contre 410 en France, FNP 4417 contre 408, CCA 3491 contre 486, dépréciations 3940 contre 491). Je signalerais spontanément la différence de référentiel et je conclurais que les assertions et les tests sont identiques : seul le plan de comptes change. Le tout au conditionnel s\'il s\'agit du scénario fictif AuditLab.',
        },
      ],
      risks: ['Confusion de référentiels', 'Numéros transposés à tort', 'Expérience mal traduite'],
      solutionSummary:
        'La démarche consisterait à préparer une « table de traduction » personnelle : les dix postes les plus fréquents (clients, fournisseurs, FNP, CCA, dépréciations, achats, ventes, banque, caisse, clients douteux) avec leurs équivalents CGNC / PCG, et pour chacun, l\'idée associée (assertion testée, écriture type). Dans ce cas, je répéterais la présentation ainsi : « J\'ai travaillé sur un scénario de révision au CGNC marocain : rapprochements, revue analytique, tests de détail et cut-off — la même grammaire qu\'en France, avec une numérotation différente : clients 3421 contre 410, FNP 4417 contre 408, CCA 3491 contre 486, dépréciation 3940 contre 491. » Et je préciserais que le vocabulaire se traduit (états de synthèse → états financiers, CPC → compte de résultat). À l\'oral, cette capacité à « faire le pont » entre référentiels est un différenciateur net : elle montre une compréhension des principes, pas une mémoire des numéros.',
      interviewTips: [
        'Ayez votre table d\'équivalence par cœur sur dix postes : c\'est un investissement d\'une heure pour un réflexe durable en entretien.',
        'Dites « je traduis mon expérience » plutôt que « j\'adapte » : le mot montre que rien ne se perd de la logique d\'audit.',
      ],
    },
  ],
  interviewQuestions: [
    {
      question: 'Pourquoi rapprocher balance, grand livre et états de synthèse avant de commencer la révision ?',
      hint: 'La traçabilité amont.',
      expected:
        'Parce que la révision porte sur les chiffres des états : si le CPC n\'est pas issu de la balance ou si un solde de balance ne correspond pas au grand livre, je réviserais des chiffres faux. Ce rapprochement garantit la traçabilité amont : chaque montant des états doit pouvoir être suivi jusqu\'aux écritures et aux pièces.',
    },
    {
      question: 'Qu\'est-ce qu\'une revue analytique et que peut-elle prouver ?',
      hint: 'Un radar, pas une preuve.',
      expected:
        'C\'est l\'analyse des variations et des cohérences : N contre N-1 et contre les prévisions, ratios et corrélations entre comptes (intérêts et dettes, achats et ventes). Elle détecte les variations inhabituelles et forme des hypothèses — mais elle ne prouve rien seule : chaque hypothèse appelle une corroboration ou un test de détail.',
    },
    {
      question: 'Comment choisissez-vous les comptes à tester en détail ?',
      hint: 'Trois critères.',
      expected:
        'Par la matérialité (poids du compte au regard du seuil de signification), le risque (sensibilité du compte aux anomalies : provisions, cut-off, estimations) et la variation (évolutions surprenantes de la revue analytique). Dans le scénario, le trio 3424 / 3940 / 7194 et le 6125 à +210,44 % auraient été prioritaires ; les comptes corroborés entre eux (1481 / 6311) ne demandent qu\'une lecture croisée.',
    },
    {
      question: 'Expliquez la différence entre une charge constatée d\'avance et une facture non parvenue, avec les comptes CGNC.',
      hint: 'Deux régularisations de sens opposés.',
      expected:
        'La CCA est une charge déjà comptabilisée (et souvent payée) dont le service profite à l\'exercice suivant : loyer de janvier payé en décembre — on la neutralise au 3491 (486 PCG) en créditant la charge. La FNP est l\'inverse : un service rendu dans l\'exercice mais non facturé à la clôture — on constate la dette au 4417 (408 PCG) en débitant la charge. Les deux écritures s\'extournent à l\'ouverture.',
    },
    {
      question: 'Comment testez-vous le cut-off des charges à la clôture ?',
      hint: 'La frontière 2025 / 2026.',
      expected:
        'J\'examinerais les dernières factures reçues et saisies de décembre et les premières de janvier, avec leur date de service fait : tout service de décembre non facturé donne une FNP (4417), tout paiement de décembre pour un service de janvier donne une CCA (3491). Le tableau de six factures du scénario illustrait les deux sens : 14 700,00 MAD de FNP et 21 800,00 MAD de CCA à régulariser.',
    },
    {
      question: 'Comment appréciez-vous la dépréciation des créances clients ?',
      hint: 'Politique × balance âgée × faits.',
      expected:
        'En trois temps : reprendre la balance âgée par tranches d\'ancienneté ; appliquer la politique de dépréciation (par exemple 10 % / 25 % / 50 %, 100 % pour un cas de liquidation) en traitant les cas particuliers ; corroborer par les confirmations directes et les recouvrements postérieurs à la clôture. L\'écart entre la dépréciation nécessaire (15 857,50 MAD dans le scénario) et le solde du 3940 (4 500,00) fait la dotation (11 357,50 par 6194).',
    },
    {
      question: 'Une variation de +210,44 % sur un compte de charges : que faites-vous ?',
      hint: 'Hypothèses puis pièces.',
      expected:
        'Je demanderais l\'explication du client, puis je testerais sur pièces un échantillon du compte : nature des factures, concordance avec le budget, recherche d\'imputations erronées (charges d\'un autre compte saisies ici) et, si le montant est significatif, extension de l\'échantillon. La variation resterait documentée avec son explication et sa conclusion — inhabituelle ne veut pas dire anormale.',
    },
    {
      question: 'Que contrôlez-vous sur une pièce justificative lors d\'un test de détail ?',
      hint: 'Quatre vérifications.',
      expected:
        'Quatre choses : qu\'elle existe et est originale (pas une copie non certifiée) ; que son contenu correspond à l\'opération comptabilisée (montant, tiers, date) ; qu\'elle rattache l\'opération au bon exercice (service fait) ; qu\'elle justifie l\'imputation retenue. Une pièce manquante, c\'est un problème de justification ; une pièce conforme avec un mauvais compte, c\'est une erreur d\'imputation.',
    },
    {
      question: 'Comment réagissez-vous à un solde de provisions qui baisse de 90 % alors que les clients douteux triplent ?',
      hint: 'Le trio 3940 / 6194 / 7194.',
      expected:
        'C\'est le signal type de la dépréciation insuffisante : la reprise (7194) a vidé le 3940 sans que la dotation (6194) ne suive la montée des douteux (3424 +174,53 %). Je recalculerais la dépréciation nécessaire sur la balance âgée, je testerais les recouvrements postérieurs, et je proposerais la dotation complémentaire — 11 357,50 MAD dans le scénario — en documentant l\'écart avec la politique.',
    },
    {
      question: 'Quels documents demandez-vous avant de commencer la révision d\'un compte ?',
      hint: 'Balance, grand livre, pièces.',
      expected:
        'La balance générale et celle de N-1, le grand livre du compte (l\'histoire des écritures), les pièces justificatives des écritures sélectionnées, et selon le compte : balance âgée (clients), tableau des immobilisations et d\'amortissements, PV d\'inventaire (stocks), relevés et rapprochements bancaires (banque), budgets pour la revue analytique.',
    },
    {
      question: 'Citez trois familles d\'anomalies de révision avec un exemple chacune.',
      hint: 'Valorisation, classement, présentation.',
      expected:
        'Valorisation : dépréciation de créances insuffisante (11 357,50 MAD à doter). Classement : fournitures de bureau de 11 280,00 MAD imputées au 6111 achats de marchandises au lieu du 6125 — le résultat ne change pas, la marge oui. Présentation : un compte non regroupé dans la bonne rubrique du bilan ou du CPC, ou un libellé trompeur dans les notes.',
    },
    {
      question: 'Vous avez révisé au CGNC marocain : comment le présentez-vous en France ?',
      hint: 'Traduire, jamais transposer.',
      expected:
        'Je présente la démarche (rapprochements, revue analytique, tests de détail, cut-off, dépréciations) qui est universelle, et je traduis les libellés : clients 3421 contre 410, FNP 4417 contre 408, CCA 3491 contre 486, dépréciations 3940 contre 491, ventes 7111 contre 707. Je signale spontanément la différence de référentiel : ça montre que je maîtrise les principes, pas seulement des numéros.',
    },
  ],
  followUps: [
    {
      question: 'La balance concorde avec le grand livre : votre révision est-elle pour autant fiable ?',
      expected:
        'La concordance ne garantit que la traçabilité amont : les chiffres des états sont ceux de la comptabilité. Elle ne dit rien de la réalité des opérations — une facture fictive ou une dépréciation insuffisante passent parfaitement en balance. La fiabilité vient des tests de détail et des corroborations externes, pas de l\'arithmétique.',
    },
    {
      question: 'Votre revue analytique montre un loyer stable à 312 000,00 MAD : pourquoi est-ce un point à regarder ?',
      expected:
        'La stabilité absolue peut être normale (bail à loyer fixe) comme suspecte (loyer non réévalué par erreur, ou imputations déplacées vers d\'autres comptes). Je vérifierais le bail et les échéances, et je croiserais avec le compte de TVA et les décaissements. Une invariabilité parfaite sur plusieurs exercices se vérifie, elle ne se présume pas.',
    },
    {
      question: 'Le client vous dit que la FNP d\'électricité est « dérisoire » : 3 750,00 MAD. Vous insistez ?',
      expected:
        'Le principe de séparation des exercices ne dépend pas du montant : 3 750,00 MAD TTC de service fait en décembre doit figurer en 2025. En revanche, l\'incidence sur l\'opinion est nulle face au seuil de 250 000,00 MAD : je documenterais l\'anomalie, la proposerais à la correction, et l\'inscrirais au récapitulatif des anomalies — sans en faire un point de rapport.',
    },
    {
      question: 'Pourquoi le compte 6114 « variation de stocks » est-il négatif, et que cela vous dit-il ?',
      expected:
        'Une variation de stocks négative (−240 000,00 MAD) signifie un stockage : le stock final dépasse l\'initial de 240 000,00 MAD, ce qui allège les charges de l\'exercice. C\'est cohérent avec la hausse du 3111 (marchandises +240 000,00) — une corroboration croisée à souligner, qui doit aussi alerter : un stock qui monte pendant que la marge se dégrade mérite un regard sur la valorisation et l\'obsolescence.',
    },
    {
      question: 'Vous trouvez une erreur d\'imputation de 9 400,00 MAD entre deux comptes de charges : vous corrigez ?',
      expected:
        'Je ne corrige pas moi-même : je documente l\'anomalie (comptes, montant, référence des pièces) et je propose l\'écriture de reclassement au client (débit 6125 / crédit 6111). L\'incidence sur le résultat étant nulle, l\'enjeu est la sincérité du classement : la correction serait portée au récapitulatif et suivie jusqu\'à son passage ou son refus documenté.',
    },
    {
      question: 'Le client refuse de doter la dépréciation de 11 357,50 MAD : que se passe-t-il ?',
      expected:
        'L\'anomalie passerait en « non corrigée » au récapitulatif des anomalies, cumulée avec les autres. Ici, 11 357,50 MAD reste très inférieur au seuil de 250 000,00 MAD : pas d\'incidence attendue sur l\'opinion, mais le refus et son incidence seraient documentés, discutés avec la direction, et le cumul suivi jusqu\'au rapport — car d\'autres anomalies peuvent s\'y ajouter.',
    },
    {
      question: 'En une phrase : pourquoi la revue analytique précède-t-elle toujours les tests de détail ?',
      expected:
        'Parce qu\'elle désigne les comptes où les tests ont une raison d\'être — variation inhabituelle, incohérence, matérialité — et qu\'elle évite de dépenser des heures de sondage sur des comptes dont l\'évolution est expliquée et corroborée.',
    },
  ],
  evaluation: {
    criteria: [
      {
        label: 'Maîtrise des documents de base',
        description: 'Rapproche balance, grand livre et états de synthèse et explique ce que ce contrôle garantit (et ne garantit pas).',
      },
      {
        label: 'Lecture analytique des balances',
        description: 'Recalcule les variations, identifie les variations inhabituelles et les corroborations entre comptes.',
      },
      {
        label: 'Priorisation par matérialité et risque',
        description: 'Classe les comptes en prioritaire / corroboré / analytique avec des critères explicites et un seuil de signification.',
      },
      {
        label: 'Exécution des tests de détail',
        description: 'Examine les pièces justificatives, contrôle les imputations et documente chaque constat avec références.',
      },
      {
        label: 'Traitement du cut-off',
        description: 'Identifie CCA et FNP, propose les écritures de régularisation CGNC (3491, 4417) avec extourne à l\'ouverture.',
      },
      {
        label: 'Chiffrage des provisions',
        description: 'Recalcule une dépréciation par tranches d\'ancienneté, la compare au solde du compte et en déduit la dotation.',
      },
      {
        label: 'Conscience référentielle et honnêteté',
        description: 'Traduit le CGNC en PCG sans transposer les numéros ; présente le scénario comme fictif et au conditionnel.',
      },
    ],
  },
}
