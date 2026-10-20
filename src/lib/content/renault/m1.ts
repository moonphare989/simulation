import type { Mission } from '@/lib/types'

// =====================================================================
// Fiche 2 — Renault · Mission 1 : Suivi quotidien de la trésorerie
// Scénario pédagogique fictif — juin à septembre 2025, montants en euros.
// Toutes les personnes, banques, montants et documents sont fictifs.
// =====================================================================

export const renaultMission1: Mission = {
  id: 'renault-m1',
  ficheId: 'renault',
  order: 1,
  title: 'Suivi quotidien de la trésorerie : cinq comptes bancaires et prévisionnel',
  period: 'Juin – Septembre 2025 · scénario pédagogique (données fictives)',
  company: 'Renault (scénario pédagogique — simulation)',
  sector: 'Automobile · service comptable et financier',
  referenceData: [
    'Cinq comptes bancaires suivis quotidiennement : Banque Avenir (compte principal 512001), Banque Méridienne (paie et social, 512002), Banque Océane (prélèvements SEPA, 512003), Banque Alpine (devises, 512004), Banque Helvia (compte à terme caution, 512005)',
    'Tableau de suivi quotidien : soldes initiaux, encaissements, décaissements, virements internes, soldes finaux, consolidés sur deux journées types (8 et 9 septembre 2025)',
    'Prévisionnel de trésorerie hebdomadaire suivi en prévu / réalisé / écart sur quatre semaines',
    'BFR suivi en parallèle de la trésorerie (mission 2 de la fiche) : stocks + créances clients − dettes fournisseurs',
    'Dix rapprochements bancaires mensuels produits entre décembre 2024 et septembre 2025 (mission 3 de la fiche)',
    'Quinze écarts et suspens bancaires analysés et résolus (mission 3 de la fiche)',
    'Environ cinquante décaissements par mois contrôlés par échantillonnage (mission 4 de la fiche)',
    'Matrice des délégations de signature appliquée : cinq signataires fictifs, plafonds de 8 000 € à 200 000 € (mission 4 de la fiche)',
    'Bons à payer vérifiés avant tout paiement fournisseur (mission 4 de la fiche)',
    'Plus de soixante-dix écritures de clôture mensuelle revues sur l\u2019ensemble des clôtures (mission 5 de la fiche)',
  ],
  summary:
    "Dans ce scénario pédagogique, le candidat apprend à tenir le suivi quotidien de cinq comptes bancaires : calculer les soldes par compte, consolider en neutralisant les virements internes, comparer prévu et réalisé, distinguer trésorerie comptable et trésorerie disponible, puis détecter et communiquer une tension de liquidité naissante. Tous les montants, personnes et banques sont fictifs et exprimés en euros.",

  comprehension: {
    intro:
      "Le service de trésorerie d'une entreprise industrielle démarre rarement la journée par la comptabilité : il démarre par les soldes. Dans le cadre d'un stage simulé au sein d'un service comptable et financier d'un groupe coté (scénario pédagogique fictif), la première mission confiée est le suivi quotidien de cinq comptes bancaires. L'objectif est double : savoir dire à tout moment combien l'entreprise détient réellement, et anticiper ce qu'elle devra payer demain. Cette mission impose de maîtriser le vocabulaire des flux (encaissement, décaissement, virement interne), de comprendre la différence entre un mouvement de trésorerie et un enregistrement comptable, et de savoir construire un tableau de suivi lisible, exact et traçable. Les chiffres manipulés ici sont volontairement simples : ce qui est évalué, c'est la rigueur de la démarche. À noter : une société cotée comme Renault présente ses comptes consolidés en IFRS, mais la mécanique quotidienne du suivi bancaire est identique quel que soit le référentiel ; seuls la présentation et certains libellés changent entre IFRS et PCG. Ce module reste volontairement transversal aux deux référentiels.",
    definitions: [
      {
        term: 'Compte bancaire à vue',
        definition:
          "Compte sur lequel les fonds sont retirables à tout moment sans pénalité. S'oppose au compte à terme, dont les fonds sont bloqués pendant une durée convenue et ne constituent pas de la trésorerie immédiatement disponible.",
      },
      {
        term: 'Encaissement',
        definition:
          "Flux entrant de trésorerie : réception effective de fonds sur un compte bancaire (virement client, remise de chèques, prélèvement encaissé). Un encaissement n'est pas forcément déjà un produit comptabilisé, et réciproquement.",
      },
      {
        term: 'Décaissement',
        definition:
          "Flux sortant de trésorerie : paiement effectif (virement émis, prélèvement subi, chèque débité). Le décaissement peut précéder, suivre ou coïncider avec l'enregistrement de la charge.",
      },
      {
        term: 'Produit',
        definition:
          "En comptabilité d'engagement, richesse créée par l'activité, enregistrée lorsqu'elle est acquise (livraison, prestation), indépendamment de l'encaissement. Exemple pédagogique : une vente livrée en juin et encaissée en juillet est un produit de juin.",
      },
      {
        term: 'Charge',
        definition:
          "Consommation de ressources enregistrée lorsqu'elle est consommée, indépendamment du paiement. Exemple pédagogique : un loyer de juin payé début juillet est une charge de juin si l'usage porte sur juin.",
      },
      {
        term: 'Mouvement de trésorerie',
        definition:
          "Variation des disponibilités (entrées et sorties de fonds). Il ne modifie pas le résultat : un encaissement de créance transforme une créance en disponibilité, sans créer de produit nouveau.",
      },
      {
        term: 'Virement interne',
        definition:
          "Transfert entre deux comptes de la même entité. Il n'a aucun effet sur la trésorerie consolidée : ce qui sort d'un compte entre dans un autre. Oublier de l'annuler en consolidation est l'erreur classique du débutant.",
      },
      {
        term: 'Solde bancaire',
        definition:
          "Solde du compte tel que le tient la banque (relevé). Il diffère du solde comptable (compte 512 du plan comptable général) tant que des opérations ne sont pas encore portées des deux côtés : chèques émis non débités, remises non créditées, virements en transit.",
      },
      {
        term: 'Trésorerie disponible',
        definition:
          "Montant réellement utilisable immédiatement : soldes bancaires des comptes à vue, hors comptes bloqués et hors plafonds de crédit mobilisables. À distinguer du solde comptable consolidé.",
      },
      {
        term: 'Prévision de trésorerie',
        definition:
          "Estimation chiffrée, par période (jour, semaine, mois), des encaissements et décaissements attendus. Elle sert de référence : l'écart entre prévu et réalisé est le premier indicateur d'alerte du trésorier.",
      },
      {
        term: 'Échéance',
        definition:
          "Date à laquelle un paiement doit être effectué (facture fournisseur, échéance de paie, échéancier d'emprunt, prélèvement SEPA annoncé). Le suivi des échéances à court terme évite les ruptures de liquidité.",
      },
      {
        term: 'Tension de liquidité',
        definition:
          "Situation où les disponibilités d'un compte (ou de l'ensemble) deviennent insuffisantes pour couvrir les échéances immédiates, même si la situation consolidée paraît satisfaisante sur plusieurs jours.",
      },
      {
        term: 'Traçabilité',
        definition:
          "Possibilité de reconstituer l'historique d'un montant : qui a saisi, quand, sur quel document source, avec quelle validation. En trésorerie, elle repose sur le rapprochement entre relevés bancaires, journal de banque et pièces justificatives.",
      },
      {
        term: 'Marge de sécurité',
        definition:
          "Surplus de trésorerie conservé au-delà du strict besoin, pour absorber un aléa (encaissement en retard, prélèvement oublié). Elle est fixée par la politique interne de l'entreprise.",
      },
    ],
    keyPoints: [
      "Encaissement et décaissement sont des flux de trésorerie ; produit et charge sont des enregistrements comptables d'engagement. Le décalage temporel entre les deux est le cœur du métier de trésorier.",
      "Un virement interne ne modifie pas la trésorerie consolidée : il doit apparaître symétriquement (émis / reçu) et s'annuler en consolidation.",
      "Un solde consolidé positif peut masquer un compte débiteur : les tensions de liquidité s'analysent compte par compte, puis en consolidé.",
      "Trésorerie comptable (solde du compte 512) et trésorerie disponible (solde bancaire à vue, hors comptes bloqués) diffèrent à cause des opérations en transit.",
      "Chaque écart prévu / réalisé doit être expliqué et qualifié : erreur de prévision, retard client, dépense inattendue, ou anomalie à investiguer.",
      "Une anomalie ou un risque de liquidité se communique avec des chiffres, une date d'impact et une proposition d'action — jamais en impression générale.",
      "Toute ligne du tableau de suivi doit pouvoir être rattachée à un document (relevé, avis de virement, échéancier) : c'est la traçabilité.",
      "Le suivi est identique en PCG et en IFRS pour la mécanique bancaire quotidienne ; la présentation des flux dans les états financiers (IAS 7 en IFRS, tableau de financement en PCG) est la seule différence à connaître.",
    ],
  },

  objectives: {
    why:
      "La direction ne peut pas piloter une entreprise sur des comptes mensuels figés : elle a besoin, chaque matin, du montant réellement disponible et du montant qui devra sortir dans les prochains jours. Dans ce scénario pédagogique, la mission de suivi quotidien existe pour sécuriser les paiements (paie, fournisseurs, impôts), éviter les découverts et frais inutiles, et alimenter le prévisionnel en retours d'expérience. C'est aussi la meilleure école pour un débutant : on y apprend les flux réels avant d'apprendre les écritures.",
    infoSought: [
      'Les soldes réels et disponibles de chacun des cinq comptes bancaires à la date du jour',
      "L'effet net des virements internes du jour (ils doivent s'annuler en consolidation)",
      "Les écarts entre encaissements prévus et réalisés, et leur cause (retard client, annulation, erreur)",
      'Les échéances des prochains jours par compte (paie, prélèvements SEPA, fournisseurs majeurs)',
      'Les mouvements inhabituels : encaissement non identifié, débit inattendu, montant anormal',
      "Le besoin éventuel de virement interne ou de financement à court terme pour couvrir un compte",
      'La justification documentaire de chaque mouvement (traçabilité du tableau)',
    ],
    risksCovered: [
      "Risque de rupture de liquidité : incapacité à payer une échéance malgré une situation globalement saine",
      "Risque de découvert non autorisé : frais et agios, dégradation de la relation bancaire",
      "Risque d'erreur de saisie : montant erroné, mauvais compte, opération comptabilisée en double",
      "Risque de fraude au virement : flux sortant sans justification ( faux fournisseur, compte tiers inconnu)",
      "Risque de décision à l'aveugle : paiements lancés sans connaître le disponible réel",
      "Risque de non-respect des échéances : pénalités de retard fournisseurs, image de solvabilité dégradée",
      "Risque d'absence de traçabilité : impossibilité de justifier un solde lors d'un contrôle ou d'un audit",
      "Risque de dérive non détectée du BFR : une trésorerie qui se dégrade semaine après semaine sans alerte",
    ],
  },

  preparation: {
    documents: [
      "Extraits de soldes du matin des cinq comptes bancaires (Banque Avenir, Méridienne, Océane, Alpine, Helvia)",
      'Relevés bancaires téléchargés la veille au soir (format banque, avec dates de valeur)',
      'Journal de banque du jour (comptabilité, comptes 512001 à 512005)',
      'Prévisionnel de trésorerie de la semaine et du mois (prévu / réalisé / écart)',
      'Calendrier des échéances : paie, cotisations sociales, prélèvements SEPA annoncés, TVA',
      'Échéancier fournisseurs et clients avec dates de règlement attendues',
      'Tableau des virements internes prévus (arbitrages entre comptes)',
      'Procédure interne de suivi de trésorerie (qui saisit, qui valide, seuils d\u2019alerte)',
      'Matrice des délégations de signature (pour vérifier qui peut lancer un virement interne)',
      'Historique des anomalies du mois précédent et leur traitement',
    ],
    questionsToAsk: [
      "Quels comptes sont à vue, lesquels sont bloqués (compte à terme) et avec quel préavis de déblocage ?",
      'À quelle heure sont téléchargés les relevés et quelle date de coupure retient-on pour le tableau du jour ?',
      "Qui valide les virements internes entre comptes et selon quels seuils de délégation ?",
      'Quel est le seuil d\u2019alerte de trésorerie (marge de sécurité minimale) défini par la direction ?',
      "À qui remonte-t-on une anomalie ou un risque de liquidité, et sous quel délai ?",
      'Existe-t-il des lignes de crédit mobilisables à très court terme (escompte, découvert négocié) ?',
      'Les prévisions sont-elles tenues en TTC et en dates d\u2019opération ou en dates de valeur ?',
    ],
    precautions: [
      "Fixer une date de coupure claire (par exemple 17h30) pour figer les soldes du jour et éviter les mélanges de journées.",
      "Ne jamais mélanger date d'opération et date de valeur : le suivi de trésorerie se fait en date d'opération, le rapprochement bancaire tiendra compte des décalages.",
      "Identifier avant tout calcul les comptes non disponibles (compte à terme, plafonds, comptes de garantie) pour ne pas les présenter comme disponibles.",
      "Vérifier la symétrie des virements internes (égalité entre émis et reçus) avant de consolider.",
      "Documenter immédiatement tout écart constaté : montant, compte, hypothèse de cause, action lancée.",
      "Garder les montants en euros avec deux décimales maximum et arrondir de façon cohérente.",
    ],
  },

  method: [
    {
      title: 'Collecter les soldes d\u2019ouverture des cinq comptes',
      description:
        "Relever le solde de clôture de la veille pour chaque compte bancaire, depuis la source la plus fiable (relevé bancaire ou tableau de la veille réconcilié).",
      why: 'Un suivi quotidien n\u2019est qu\u2019une chaîne : toute erreur de solde initial se propage sur tous les calculs suivants.',
    },
    {
      title: 'Qualifier la nature de chaque compte',
      description:
        "Rappeler en tête de tableau la nature de chaque compte : à vue, dédié (paie, prélèvements SEPA, devises) ou bloqué (compte à terme).",
      why: "La disponibilité réelle dépend de la nature du compte : un solde brillant sur un compte bloqué ne paiera personne demain.",
    },
    {
      title: 'Recenser les encaissements du jour',
      description:
        "Lister tous les flux entrants par compte : virements clients reçus, remises de chèques créditées, avoirs fournisseurs remboursés.",
      why: "Les encaissements réels sont la matière première de l\u2019analyse d\u2019écart avec le prévisionnel.",
    },
    {
      title: 'Recenser les décaissements du jour',
      description:
        "Lister tous les flux sortants : virements fournisseurs, paie, impôts et taxes, prélèvements SEPA, frais bancaires.",
      why: "C\u2019est la sortie des fonds qui crée la tension : elle doit être exhaustive et rattachée à une autorisation de paiement.",
    },
    {
      title: 'Isoler les virements internes',
      description:
        "Identifier les transferts entre comptes de l\u2019entreprise et les présenter dans des colonnes distinctes (émis / reçus), jamais noyés dans les encaissements et décaissements.",
      why: "Un virement interne n\u2019est ni un encaissement ni un décaissement au sens du pilotage : l\u2019annuler en consolidation évite de doubler les flux.",
    },
    {
      title: 'Calculer les soldes de fin de journée par compte',
      description:
        "Appliquer la formule : solde final = solde initial + encaissements − décaissements + virements internes reçus − virements internes émis.",
      why: "Le solde par compte est l\u2019unité de pilotage : c\u2019est lui qui autorise ou non une échéance de demain.",
    },
    {
      title: 'Consolider et contrôler l\u2019annulation des virements internes',
      description:
        "Additionner les soldes finaux des cinq comptes et vérifier que la somme des virements internes émis égale celle des virements reçus.",
      why: "La consolidation n\u2019a de sens que si les arbitrages internes sont neutres ; sinon, le total est faux.",
    },
    {
      title: 'Comparer au prévisionnel et chiffrer les écarts',
      description:
        "Positionner prévu et réalisé côte à côte par semaine, calculer les écarts d\u2019encaissements et de décaissements, puis l\u2019écart cumulé de solde.",
      why: "Un écart chiffré et daté est un signal d\u2019alerte exploitable ; une impression vague ne l\u2019est pas.",
    },
    {
      title: 'Analyser les causes des écarts',
      description:
        "Qualifier chaque écart : retard de client, prélèvement oublié dans le prévisionnel, facture reçue plus tôt, erreur de saisie, mouvement inattendu.",
      why: "La cause oriente l\u2019action : relancer un client n\u2019a rien à voir avec corriger une saisie erronée.",
    },
    {
      title: 'Contrôler les échéances des prochains jours',
      description:
        "Projeter les soldes J+1 à J+5 compte par compte en intégrant échéanciers et encaissements attendus, et identifier tout solde projeté négatif.",
      why: "La trésorerie se gère en avance : une tension détectée la veille se règle par un simple arbitrage, détectée le jour même par un appel d\u2019urgence.",
    },
    {
      title: 'Détecter et qualifier les mouvements inhabituels',
      description:
        "Signaler tout flux atypique : encaissement sur un compte qui n\u2019en reçoit jamais, libellé incompréhensible, montant rond élevé, contrepartie inconnue.",
      why: "Les mouvements inhabituels sont le premier symptôme des erreurs de comptabilisation comme des tentatives de fraude.",
    },
    {
      title: 'Communiquer, alerter et documenter',
      description:
        "Mettre le tableau à disposition de l\u2019équipe, alerter le responsable avec des chiffres en cas de tension, et archiver le tableau du jour.",
      why: "Un suivi non partagé ne protège personne : la valeur du travail réside dans sa lisibilité et sa remontée à temps.",
    },
  ],

  exercises: [
    {
      id: 'renault-ex-1-1',
      title: 'Exercice 1 · Tableau de suivi quotidien sur cinq comptes',
      cycle: 'Trésorerie',
      context:
        "Dans ce cas, on me confie le suivi quotidien des cinq comptes bancaires (tous fictifs) pour deux journées types de septembre 2025. Je dois calculer les soldes finaux, consolider en neutralisant les virements internes, puis expliquer les mouvements qui attirent l\u2019œil. La société est fictive ; tous les montants sont en euros.",
      documents: [
        {
          kind: 'table',
          name: 'Tableau de suivi — Jour 1 (8 septembre 2025, données fictives)',
          columns: [
            'Compte',
            'Nature',
            'Solde initial (€)',
            'Encaissements (€)',
            'Décaissements (€)',
            'Virement interne reçu (€)',
            'Virement interne émis (€)',
          ],
          rows: [
            ['C1 · Banque Avenir', 'Compte principal (512001)', 1250000, 486200, 512400, 0, 300000],
            ['C2 · Banque Méridienne', 'Paie et social (512002)', 180000, 5300, 96500, 300000, 0],
            ['C3 · Banque Océane', 'Prélèvements SEPA (512003)', 95000, 0, 88500, 0, 0],
            ['C4 · Banque Alpine', 'Devises (512004)', 60000, 12000, 0, 0, 0],
            ['C5 · Banque Helvia', 'Compte à terme — caution (512005)', 150000, 0, 0, 0, 0],
          ],
          note:
            "Le virement interne de 300 000 € du compte C1 vers le compte C2 provisionne la paie du lendemain. L\u2019encaissement de 5 300 € reçu sur le compte C2 (paie) porte le libellé « VIR SEPA — RÉGL CLIENT DG-1147 », ce qui est inhabituel sur ce compte. Document fictif à but pédagogique.",
        },
        {
          kind: 'table',
          name: 'Tableau de suivi — Jour 2 (9 septembre 2025, données fictives)',
          columns: [
            'Compte',
            'Solde initial (= solde final J1)',
            'Encaissements (€)',
            'Décaissements (€)',
            'Virement interne reçu (€)',
            'Virement interne émis (€)',
          ],
          rows: [
            ['C1 · Banque Avenir', 'report J1', 615700, 540250, 0, 150000],
            ['C2 · Banque Méridienne', 'report J1', 0, 148000, 150000, 0],
            ['C3 · Banque Océane', 'report J1', 0, 0, 0, 0],
            ['C4 · Banque Alpine', 'report J1', 0, 18300, 0, 0],
            ['C5 · Banque Helvia', 'report J1', 0, 0, 0, 0],
          ],
          note:
            "Les soldes initiaux du Jour 2 sont les soldes finaux du Jour 1 (à recalculer). Le décaissement de 148 000 € sur C2 est le virement des salaires ; le virement interne de 150 000 € de C1 vers C2 couvre les décaissements sociaux à venir. Document fictif.",
        },
      ],
      questions: [
        {
          id: 'rn1-e1-q1',
          question:
            'Calculer le solde final du compte C1 (Banque Avenir) au Jour 1, en euros.',
          type: 'numeric',
          expected: 923800,
          explanation:
            "Solde final = 1 250 000 + 486 200 (encaissements) − 512 400 (décaissements) − 300 000 (virement interne émis) = 923 800,00 €. Dans ce cas, je vérifierais le report de ce solde comme solde initial du Jour 2.",
        },
        {
          id: 'rn1-e1-q2',
          question:
            'Calculer le solde final du compte C2 (Banque Méridienne) au Jour 1, en euros.',
          type: 'numeric',
          expected: 388800,
          explanation:
            "Solde final = 180 000 + 5 300 − 96 500 + 300 000 (virement interne reçu) = 388 800,00 €. Le virement interne reçu augmente le solde de C2 sans créer d\u2019encaissement extérieur.",
        },
        {
          id: 'rn1-e1-q3',
          question:
            'Calculer le solde consolidé de fin de Jour 1 (somme des soldes finaux des cinq comptes), en euros.',
          type: 'numeric',
          expected: 1541100,
          explanation:
            "Soldes finaux : C1 923 800 + C2 388 800 + C3 6 500 (95 000 − 88 500) + C4 72 000 (60 000 + 12 000) + C5 150 000 = 1 541 100,00 €. Contrôle : 1 735 000 (initiaux) + 503 500 (encaissements extérieurs) − 697 400 (décaissements) = 1 541 100 €. Les virements internes (300 000 émis = 300 000 reçus) s\u2019annulent.",
        },
        {
          id: 'rn1-e1-q4',
          question:
            'Calculer le solde consolidé de fin de Jour 2, en euros (enchaîner les soldes finaux du Jour 1 avec les flux du Jour 2).',
          type: 'numeric',
          expected: 1450250,
          explanation:
            "Jour 2 : C1 = 923 800 + 615 700 − 540 250 − 150 000 = 849 250 ; C2 = 388 800 − 148 000 + 150 000 = 390 800 ; C3 = 6 500 ; C4 = 72 000 − 18 300 = 53 700 ; C5 = 150 000. Total = 1 450 250,00 €. Contrôle : 1 541 100 + 615 700 − (540 250 + 148 000 + 18 300) = 1 450 250 €. Les virements internes du Jour 2 (150 000 €) s\u2019annulent également.",
        },
        {
          id: 'rn1-e1-q5',
          question:
            "Pourquoi les virements internes ne modifient-ils pas la trésorerie consolidée, et quels mouvements de ces deux journées vous semblent inhabituels ? Rédigez une réponse structurée (principe, puis au moins deux constats chiffrés).",
          type: 'open',
          keywords: [
            'annulent',
            'consolidé',
            'compte',
            'encaissement',
            '5 300',
            'libellé',
            'client',
            'compte 3',
            'solde bas',
          ],
          explanation:
            "Principe : un virement interne déplace des fonds entre deux comptes de la même entité ; ce qui quitte C1 arrive sur C2, donc la somme des soldes est inchangée (300 000 € le Jour 1, 150 000 € le Jour 2 : elles s\u2019annulent en consolidation). Constats inhabituels : (1) l\u2019encaissement de 5 300 € sur le compte paie C2, avec un libellé « RÉGL CLIENT » : un règlement client reçu sur un compte dédié à la paie est à reclasser et à confirmer ; (2) le compte C3 tombe à 6 500 € après 88 500 € de prélèvements, un solde très bas pour un compte qui encaissera de nouveaux prélèvements SEPA — c\u2019est le point de départ du test de tension de l\u2019exercice 4. Dans ce cas, je signalerais les deux points dans le tableau du jour avec un code d\u2019alerte.",
        },
      ],
      risks: [
        'Erreur de consolidation (virements internes comptés deux fois)',
        'Encaissement client affecté au mauvais compte',
        'Solde de compte laissé sans surveillance avant échéances',
      ],
      solutionSummary:
        "Les soldes finaux du Jour 1 sont : C1 923 800 €, C2 388 800 €, C3 6 500 €, C4 72 000 €, C5 150 000 €, soit un consolidé de 1 541 100 €. Au Jour 2 : C1 849 250 €, C2 390 800 €, C3 6 500 €, C4 53 700 €, C5 150 000 €, soit 1 450 250 €. Les virements internes (300 000 € puis 150 000 €) s\u2019annulent à chaque consolidation : ils arbitrissent la trésorerie entre comptes sans la créer. Deux points méritent signalement : un règlement client de 5 300 € arrivé sur le compte paie (reclassement et confirmation à faire), et le compte C3 qui descend à 6 500 € alors que des prélèvements SEPA arrivent (alerte de liquidité, traitée dans l\u2019exercice 4). La méthode à décrire en entretien : qualifier chaque compte, isoler les virements internes, calculer par compte puis consolider, et toujours contrôler la cohérence par un second chemin de calcul (variation des flux extérieurs).",
      interviewTips: [
        "Annoncer d'entrée la formule du solde final puis donner le contrôle croisé (variation nette des flux extérieurs) : cela montre la rigueur.",
        "Sur les mouvements inhabituels, citer des montants précis (5 300 €, 6 500 €) plutôt que « il y a des choses bizarres ».",
        "Rappeler que les virements internes sont des arbitrages, pas des ressources : un recruteur y est toujours sensible.",
      ],
    },

    {
      id: 'renault-ex-1-2',
      title: 'Exercice 2 · Prévisions contre réalisations',
      cycle: 'Trésorerie',
      context:
        "Le prévisionnel de septembre 2025 part d\u2019un solde initial de 1 735 000 € (situation fictive cohérente avec l\u2019exercice 1). Chaque semaine, je dois calculer le solde réalisé cumulé, mesurer les écarts et interpréter la dérive. Les soldes prévus cumulés sont déjà calculés ; les soldes réalisés cumulés restent à établir.",
      documents: [
        {
          kind: 'table',
          name: 'Prévisionnel de trésorerie — septembre 2025 (solde initial 1 735 000 €, données fictives)',
          columns: [
            'Semaine',
            'Encaissements prévus (€)',
            'Encaissements réalisés (€)',
            'Décaissements prévus (€)',
            'Décaissements réalisés (€)',
            'Solde prévu cumulé (€)',
            'Solde réalisé cumulé (€)',
          ],
          rows: [
            ['S1 (1–7 sept.)', 480000, 462300, 520000, 512400, 1695000, 'à calculer'],
            ['S2 (8–14 sept.)', 510000, 528900, 495000, 486700, 1710000, 'à calculer'],
            ['S3 (15–21 sept.)', 560000, 541200, 540000, 558300, 1730000, 'à calculer'],
            ['S4 (22–30 sept.)', 505000, 498600, 480000, 511900, 1755000, 'à calculer'],
          ],
          note:
            "Le solde prévu cumulé de la semaine S est le solde prévu de S−1 augmenté des encaissements prévus et diminué des décaissements prévus de S (ex. : S1 = 1 735 000 + 480 000 − 520 000 = 1 695 000 €). Document fictif à but pédagogique.",
        },
      ],
      questions: [
        {
          id: 'rn1-e2-q1',
          question:
            "L'écart d'encaissements de la semaine S1 (réalisé − prévu) est défavorable. Quel est son montant en valeur absolue, en euros ?",
          type: 'numeric',
          expected: 17700,
          explanation:
            "Écart = 462 300 − 480 000 = −17 700 € : les encaissements réalisés sont inférieurs de 17 700 € aux prévus, ce qui est défavorable pour la trésorerie.",
        },
        {
          id: 'rn1-e2-q2',
          question:
            'Calculer le solde réalisé cumulé à la fin de la semaine S2, en euros.',
          type: 'numeric',
          expected: 1727100,
          explanation:
            "S1 réalisé : 1 735 000 + 462 300 − 512 400 = 1 684 900 €. S2 réalisé : 1 684 900 + 528 900 − 486 700 = 1 727 100,00 €. Le solde réalisé est alors supérieur au prévu (1 710 000 €) de 17 100 € : l\u2019écart cumulé (encaissements manqués de S1 compensés par le bon S2 et la modération des décaissements).",
        },
        {
          id: 'rn1-e2-q3',
          question:
            'Calculer le solde réalisé cumulé à la fin de la semaine S4, en euros.',
          type: 'numeric',
          expected: 1696700,
          explanation:
            "S3 réalisé : 1 727 100 + 541 200 − 558 300 = 1 710 000 €. S4 réalisé : 1 710 000 + 498 600 − 511 900 = 1 696 700,00 €.",
        },
        {
          id: 'rn1-e2-q4',
          question:
            'De combien le solde réalisé de fin S4 est-il inférieur au solde prévu de fin S4, en euros ?',
          type: 'numeric',
          expected: 58300,
          explanation:
            "Écart total = 1 696 700 − 1 755 000 = −58 300 €. Contrôle par les flux : écarts cumulés d\u2019encaissements (−17 700 + 18 900 − 18 800 − 6 400 = −24 000) moins écarts cumulés de décaissements (−7 600 − 8 300 + 18 300 + 31 900 = +34 300) : −24 000 − 34 300 = −58 300 €. La dérive vient à la fois d\u2019encaissements manqués et d\u2019un décaissement S4 supérieur au prévu.",
        },
        {
          id: 'rn1-e2-q5',
          question:
            "Interpréter la dérive constatée et proposer trois actions concrètes de trésorerie. Rédigez une réponse structurée (constat chiffré, causes possibles, actions, suivi).",
          type: 'open',
          keywords: [
            'recouvrement',
            'clients',
            'encaissements',
            'décaissements',
            'écart',
            'échéances',
            'décaler',
            'alerter',
            'prévisions',
          ],
          explanation:
            "Constat : le solde réalisé de fin S4 est inférieur de 58 300 € au prévu, avec une dégradation concentrée sur S3 et S4. Causes possibles : retards de règlements clients (encaissements inférieurs aux prévus de 18 800 € en S3), dépassement des décaissements prévus en S4 (+31 900 € : dépenses non budgétées ou échéance décalée). Actions : renforcer le recouvrement sur les clients en retard, ré-arbitrer ou décaler les décaissements non urgents de S4, actualiser le prévisionnel avec les nouvelles dates et alerter le responsable si la marge de sécurité est menacée. Suivi : recalculer l\u2019écart chaque semaine et documenter la cause de chaque écart. Dans ce cas, je commencerais par l\u2019analyse des encaissements manqués, car ce sont eux qui dégradent durablement le solde.",
        },
      ],
      risks: [
        'Dérive du prévisionnel non détectée',
        'Retards clients non relancés',
        'Décisions prises sur des données périmées',
      ],
      solutionSummary:
        "Soldes réalisés cumulés : S1 1 684 900 € ; S2 1 727 100 € ; S3 1 710 000 € ; S4 1 696 700 €, contre un prévu de fin S4 de 1 755 000 €. L\u2019écart total de −58 300 € se décompose en −24 000 € d\u2019encaissements manqués et +34 300 € de décaissements supplémentaires (l\u2019excédent de dépenses dégrade le solde d\u2019autant). Les semaines S3 et S4 concentrent la dérive. Un bon réflexe de trésorier : toujours recouper l\u2019écart de solde avec la somme des écarts de flux, et qualifier chaque écart (retard client, dépense inattendue, erreur de prévision) avant de proposer une action. À l\u2019oral, insister sur le fait qu\u2019un écart défavorable d\u2019encaissement appelle une action de recouvrement, tandis qu\u2019un écart défavorable de décaissement appelle une vérification (dépense légitime non prévue, ou double paiement).",
      interviewTips: [
        "Décomposer l'écart (encaissements vs décaissements) avant de conclure : les deux n'appellent pas les mêmes actions.",
        "Formuler les actions en verbes concrets : relancer, décaler, arbitrer, actualiser.",
        "Mentionner la vérification croisée : écart de solde = somme des écarts de flux cumulés.",
      ],
    },

    {
      id: 'renault-ex-1-3',
      title: 'Exercice 3 · Trésorerie comptable contre trésorerie disponible',
      cycle: 'Trésorerie',
      context:
        "Au soir du 9 septembre (fin du Jour 2 de l\u2019exercice 1), la comptabilité affiche un solde consolidé de 1 450 250 €. Mais tout n\u2019est pas utilisable : un compte est bloqué, des chèques émis n\u2019ont pas encore été débités, et une remise de chèques n\u2019a pas encore été créditée. Je dois déterminer la trésorerie réellement disponible.",
      documents: [
        {
          kind: 'table',
          name: 'Éléments de passage au 9 septembre 2025 (données fictives)',
          columns: ['Élément', 'Montant (€)', 'Effet sur la disponibilité'],
          rows: [
            ['Solde comptable consolidé (comptes 512001 à 512005)', 1450250, 'Référence de départ'],
            ['Dont compte à terme bloqué (caution, Banque Helvia)', 150000, 'Non disponible'],
            ['Chèques émis comptabilisés, non encore débités par la banque', 62400, 'Solde bancaire supérieur au solde comptable'],
            ['Remise de chèques comptabilisée, non encore créditée par la banque', 38750, 'Solde bancaire inférieur au solde comptable'],
          ],
          note:
            "Le solde comptable intègre déjà les chèques émis et la remise de chèques (enregistrés en comptabilité). La banque, elle, ne les a pas encore portés au compte. Document fictif à but pédagogique.",
        },
      ],
      questions: [
        {
          id: 'rn1-e3-q1',
          question:
            "Un chèque émis et comptabilisé mais pas encore débité par la banque rend le solde bancaire :",
          type: 'mcq',
          options: [
            'Supérieur au solde comptable',
            'Inférieur au solde comptable',
            'Identique au solde comptable',
            'Sans lien avec le solde comptable',
          ],
          expected: '0',
          explanation:
            "La comptabilité a déjà diminué le solde (le chèque est enregistré), mais la banque n\u2019a pas encore débité le compte : le solde bancaire est donc supérieur au solde comptable de ce montant. À l\u2019inverse, une remise de chèques non créditée rend le solde bancaire inférieur au comptable.",
        },
        {
          id: 'rn1-e3-q2',
          question:
            'Calculer la trésorerie immédiatement disponible (solde bancaire des comptes à vue, compte à terme exclu), en euros.',
          type: 'numeric',
          expected: 1323900,
          explanation:
            "Étape 1 : solde comptable des comptes à vue = 1 450 250 − 150 000 (compte à terme bloqué) = 1 300 250 €. Étape 2 : solde bancaire des comptes à vue = 1 300 250 + 62 400 (chèques émis non débités) − 38 750 (remise non créditée) = 1 323 900,00 €. C\u2019est la trésorerie immédiatement disponible.",
        },
        {
          id: 'rn1-e3-q3',
          question:
            'La trésorerie comptable d\u2019une entreprise est toujours immédiatement disponible. Vrai ou faux ?',
          type: 'truefalse',
          expected: '1',
          explanation:
            "Faux. Le solde comptable inclut des éléments non disponibles : comptes bloqués (compte à terme, cautions), encaissements comptabilisés mais pas encore crédités par la banque ; il exclut en sens inverse des décaissements pas encore débités. La disponibilité réelle s\u2019apprécie côté banque, à vue.",
        },
        {
          id: 'rn1-e3-q4',
          question:
            "Citez au moins quatre causes d'écart entre trésorerie comptable et trésorerie disponible, et expliquez pourquoi le compte à terme est exclu. Rédigez quelques phrases structurées.",
          type: 'open',
          keywords: [
            'bloqué',
            'chèque',
            'débité',
            'remise',
            'créditée',
            'virement',
            'transit',
            'délai',
            'caution',
          ],
          explanation:
            "Causes classiques : (1) chèques émis comptabilisés mais non débités par la banque ; (2) remises de chèques ou de billets comptabilisées mais non créditées ; (3) virements en transit (émis ou reçus entre deux dates de valeur) ; (4) frais bancaires ou prélèvements débités par la banque non encore comptabilisés ; (5) comptes bloqués (compte à terme, caution). Le compte à terme est exclu car les fonds ne sont pas retirables à vue : servir une échéance de demain avec est impossible sans déblocage (souvent assorti d\u2019un préavis et d\u2019une perte d\u2019intérêts). Dans ce cas, je présenterais la trésorerie en trois lignes : comptable, disponible, bloquée.",
        },
      ],
      risks: [
        'Décisions prises sur un solde comptable trompeur',
        'Oubli des comptes bloqués dans le disponible',
        'Sous-estimation des frais bancaires non comptabilisés',
      ],
      solutionSummary:
        "Le solde comptable consolidé de 1 450 250 € ne dit pas ce que l\u2019entreprise peut dépenser demain. Après retrait du compte à terme bloqué (150 000 €) et ajustement des éléments en transit (+ 62 400 € de chèques émis non débités, − 38 750 € de remise non créditée), la trésorerie immédiatement disponible s\u2019établit à 1 323 900 €. La leçon : le suivi de trésorerie se fait sur des soldes bancaires à vue ; le solde comptable (comptes 512) est une vue comptable qui rejoindra la banque avec un décalage. C\u2019est précisément ce décalage que le rapprochement bancaire (mission 3) mesure et explique mois par mois. Signal référentiel : les comptes 512 ou la présentation peuvent varier selon le plan de comptes applicable (PCG en France ; en IFRS, pas de plan de comptes imposé et présentation par rubriques de liquidité), mais la logique disponible / en transit est universelle.",
      interviewTips: [
        "Structurer la réponse en trois soldes : comptable, bancaire à vue, bloqué.",
        "Expliquer le sens de chaque élément de passage avec une phrase courte (un chèque émis non débité gonfle la banque).",
        "Rattacher ce sujet au rapprochement bancaire : cela montre la vision d'ensemble du cycle trésorerie.",
      ],
    },

    {
      id: 'renault-ex-1-4',
      title: 'Exercice 4 · Détecter et communiquer une tension de liquidité',
      cycle: 'Trésorerie',
      context:
        "Au matin du 10 septembre, les soldes comptables des comptes à vue sont les suivants : C1 849 250 €, C2 390 800 €, C3 6 500 €, C4 53 700 € (soit 1 300 250 € au total, compte à terme exclu). Le calendrier des prochains jours annonce une vague de prélèvements SEPA sur le compte C3 et une échéance fournisseur majeure sur C1. Le responsable trésorerie est en réunion toute la matinée.",
      documents: [
        {
          kind: 'table',
          name: 'Échéances et encaissements attendus du 11 au 13 septembre 2025 (données fictives)',
          columns: ['Élément', 'Date', 'Compte concerné', 'Montant (€)'],
          rows: [
            ['Prélèvements SEPA divers (énergie, télécom, assurances)', '11/09', 'C3 · Banque Océane', 68400],
            ['Encaissements clients attendus', '11/09', 'C1 · Banque Avenir', 95000],
            ['Encaissements clients attendus', '12/09', 'C1 · Banque Avenir', 260000],
            ['Encaissements clients attendus', '13/09', 'C1 · Banque Avenir', 310000],
            ['Échéance fournisseur majeure (Métalux)', '13/09', 'C1 · Banque Avenir', 420000],
          ],
          note:
            "Le compte C2 (paie et social) ne connaît pas de sortie sur la période. Le compte C4 (devises) est hors périmètre euro pour ces échéances. Document fictif à but pédagogique.",
        },
      ],
      questions: [
        {
          id: 'rn1-e4-q1',
          question:
            "Si aucune action n'est menée, quel sera le solde du compte C3 au soir du 11 septembre ? Indiquez le montant avec son signe (négatif si débiteur), en euros.",
          type: 'numeric',
          expected: -61900,
          explanation:
            "C3 = 6 500 − 68 400 = −61 900 € : le compte devient débiteur de 61 900 €, ce qui signifie un découvert (souvent non autorisé sur ce type de compte, donc frais et image dégradée auprès de la banque).",
        },
        {
          id: 'rn1-e4-q2',
          question:
            "Quel est le montant minimal du virement interne à effectuer aujourd'hui vers C3 pour couvrir les prélèvements en laissant une marge de sécurité de 10 000 € ? En euros.",
          type: 'numeric',
          expected: 71900,
          explanation:
            "Besoin = 68 400 − 6 500 (solde existant) + 10 000 (marge) = 71 900 €. Un virement interne de 71 900 € depuis C1 (qui dispose de 849 250 €) règle le problème sans financement externe.",
        },
        {
          id: 'rn1-e4-q3',
          question:
            'Calculer le solde consolidé projeté au soir du 13 septembre (comptes à vue, aucune action supposée en dehors du virement éventuel), en euros.',
          type: 'numeric',
          expected: 1476850,
          explanation:
            "Consolidé projeté = 1 300 250 + (95 000 + 260 000 + 310 000) − (68 400 + 420 000) = 1 476 850 €. Le virement interne vers C3, s\u2019il est fait, ne change rien au consolidé. Conclusion clé : la situation consolidée est largement positive, mais un compte passera négatif — la tension est invisible si l\u2019on ne regarde que le total.",
        },
        {
          id: 'rn1-e4-q4',
          question:
            "Rédigez le message d'alerte que vous adresseriez au responsable trésorerie (objet, constat chiffré, risque, action proposée, délai). Puis expliquez en deux phrases pourquoi la consolidation positive ne supprime pas le problème.",
          type: 'open',
          keywords: [
            'responsable',
            'alerter',
            'virement',
            'interne',
            '71 900',
            'immédiat',
            'découvert',
            'marge',
            'compte',
          ],
          explanation:
            "Exemple de message : « Objet : risque de découvert sur le compte C3 demain 11/09. Les prélèvements SEPA de 68 400 € partiront sur un solde de 6 500 € : découvert de 61 900 € attendu. Proposition : virement interne de 71 900 € de C1 vers C3 aujourd\u2019hui avant 16h (C1 conserve 777 350 € et absorbe l\u2019échéance Métalux de 420 000 € du 13/09 avec les encaissements attendus). Le consolidé projeté au 13/09 reste positif à 1 476 850 € ; il s\u2019agit d\u2019un pur arbitrage entre comptes, sans financement externe. Merci de votre validation. » La consolidation positive ne supprime pas le problème car chaque compte fonctionne seul face à sa banque : un découvert local génère frais et alerte bancaire, et peut fragiliser la relation avec l\u2019établissement, quand bien même le groupe est solvable. Dans ce cas, je commencerais par envoyer ce message chiffré puis je préparerais le virement pour qu\u2019il ne reste qu\u2019à valider.",
        },
      ],
      risks: [
        'Découvert non autorisé et frais associés',
        'Échéance fournisseur majeure mal anticipée',
        'Alerte remontée trop tard, sans proposition',
      ],
      solutionSummary:
        "La situation est une tension de liquidité localisée : le compte C3 sera débiteur de 61 900 € au soir du 11 septembre en l\u2019absence d\u2019action, alors que le consolidé projeté au 13 septembre reste très positif (1 476 850 €). La solution est un virement interne de 71 900 € de C1 vers C3 (couverture + marge de 10 000 €), à déclencher avant l\u2019heure de coupure des virements. Le message au responsable doit contenir : le fait (prélèvements de 68 400 € sur solde de 6 500 €), le risque (découvert, frais), la solution chiffrée (71 900 € depuis C1) et le délai (avant 16h). En entretien, ce cas se raconte en trois temps : détection par projection des soldes, arbitrage entre comptes, communication anticipée avec proposition — jamais une simple constatation.",
      interviewTips: [
        "Commencer par le chiffre qui fait réagir : « le compte passe à −61 900 € demain ».",
        "Toujours proposer la solution dans le même message que l'alerte : le responsable n'a plus qu'à valider.",
        "Préciser l'heure limite de traitement des virements : cela montre le sens opérationnel.",
      ],
    },
  ],

  interviewQuestions: [
    {
      question: "Pourquoi suivre la trésorerie quotidiennement alors que la comptabilité est mensuelle ?",
      expected:
        "Parce que les engagements de paiement sont quotidiens : paie, prélèvements SEPA, échéances fournisseurs. Un compte peut devenir débiteur entre deux clôtures mensuelles. Le suivi quotidien sécurise les paiements, évite les découverts et alimente le prévisionnel.",
      hint: "Penser aux conséquences concrètes : frais, image bancaire, échéances manquées.",
    },
    {
      question: "Quelle est la différence entre un encaissement et un produit ?",
      expected:
        "L\u2019encaissement est un flux de trésorerie (des fonds arrivent sur le compte) ; le produit est un élément de résultat enregistré lorsque la richesse est acquise (livraison, prestation). Une vente encaissée d\u2019avance est un encaissement sans produit immédiat ; une créance encaissée tardivement est un produit sans encaissement immédiat.",
    },
    {
      question: "Comment traitez-vous un virement entre deux comptes bancaires de l'entreprise ?",
      expected:
        "Je l\u2019isole dans des colonnes dédiées (émis / reçu), je vérifie sa symétrie, et je l\u2019annule en consolidation : il ne crée ni encaissement ni décaissement vis-à-vis de l\u2019extérieur. Je vérifie aussi qu\u2019il est autorisé selon la matrice des délégations et qu\u2019il est documenté (motif : provision de paie, couverture de prélèvements).",
    },
    {
      question: "Le solde consolidé est positif mais un compte est débiteur : pourquoi est-ce un problème ?",
      expected:
        "Chaque compte fonctionne seul face à sa banque : un découvert local déclenche frais, agios et parfois une alerte de la banque, même si le groupe est solvable. La correction est un arbitrage interne (virement du compte excédentaire), à déclencher avant l\u2019heure de coupure.",
    },
    {
      question: "Comment Construisez-vous un tableau de suivi quotidien de trésorerie ?",
      expected:
        "Une ligne par compte (avec sa nature : à vue, dédié, bloqué), des colonnes solde initial, encaissements, décaissements, virements internes reçus et émis, solde final, puis une ligne consolidée avec contrôle d\u2019annulation des virements internes. Un code d\u2019alerte pour les anomalies, une date de coupure fixe, et une diffusion systématique à l\u2019équipe.",
      hint: "Décrire les colonnes précisément : c'est ce que le recruteur attend.",
    },
    {
      question: "Trésorerie comptable ou trésorerie disponible : laquelle pilotez-vous et pourquoi ?",
      expected:
        "La disponible : soldes bancaires à vue, hors comptes bloqués. Le solde comptable (512) est utile pour la cohérence avec la comptabilité, mais il contient des éléments en transit (chèques non débités, remises non créditées) qui faussent la vision utilisable.",
    },
    {
      question: "Comment détectez-vous qu'une tension de liquidité se prépare ?",
      expected:
        "En projetant les soldes par compte sur les jours à venir avec l\u2019échéancier (prélèvements annoncés, paie, fournisseurs majeurs) et les encaissements attendus, en comparant au seuil d\u2019alerte interne. Les signaux : solde projeté négatif, encaissements en retard répétés, écart prévu/réalisé qui se creuse.",
    },
    {
      question: "Vous constatez un encaissement inhabituel sur un compte dédié à la paie. Que faites-vous ?",
      expected:
        "Je le signale dans le tableau du jour, je vérifie le libellé et le donneur d\u2019ordre, je rapproche avec les règlements clients attendus, et je prépare si besoin un reclassement entre comptes (virement interne ou écriture comptable selon le diagnostic). Si l\u2019origine reste inconnue, l\u2019anomalie part en suspens avec investigation — on ne laisse pas un montant non identifié dormir.",
    },
    {
      question: "Quel est le rôle du prévisionnel dans le suivi quotidien ?",
      expected:
        "Il est la référence qui rend le réel interprétable : sans prévu, aucun écart mesurable. Il permet d\u2019anticiper les tensions (projeter les soldes), d\u2019arbitrer entre comptes, et il progresse par les retours d\u2019expérience (causes d\u2019écarts documentées).",
    },
    {
      question: "Que signifie la traçabilité en trésorerie et comment la garantissez-vous ?",
      expected:
        "Pouvoir reconstituer chaque montant : source (relevé, avis de virement), saisie (qui, quand), validation, et justification (commande, facture, bon à payer). Concrètement : référencer les documents dans le tableau, numéroter les virements internes, archiver chaque journal quotidien, ne jamais modifier un tableau diffusé (créer une version corrigée).",
    },
    {
      question: "Un recruteur vous demande : la différence entre date d'opération et date de valeur ?",
      expected:
        "La date d\u2019opération est celle où le mouvement est réalisé ; la date de valeur est celle retenue par la banque pour calculer les intérêts, souvent décalée (J+1, J+2). Le suivi de gestion se fait en date d\u2019opération ; les frais de découvert se calculent en dates de valeur — d\u2019où l\u2019intérêt de connaître les conditions bancaires.",
    },
  ],

  followUps: [
    {
      question: "Votre prévision d'encaissements est fausse de 20 % cette semaine : vous en faites quoi ?",
      expected:
        "J\u2019analyse d\u2019abord la cause : retards clients (action recouvrement), annulation ou erreur de saisie dans le prévisionnel (correction et double contrôle), ou événement conjoncturel (note pour la direction). Puis j\u2019actualise le prévisionnel et je vérifie l\u2019impact sur les soldes projetés et la marge de sécurité. Une erreur de prévision non analysée se répète.",
    },
    {
      question: "Un virement interne émis n'arrive pas sur le compte destinataire : quelle est votre démarche ?",
      expected:
        "Je vérifie la confirmation d\u2019exécution côté banque émettrice et l\u2019exactitude de l\u2019IBAN destinataire interne, je garde la trace écrite, puis j\u2019appelle le service bancaire concerné avec les références du virement. Tant que l\u2019opération est en transit, je la maintiens en suspens dans le suivi des deux comptes ; si elle est perdue, je déclenche une réclamation bancaire documentée.",
    },
    {
      question: "Comment savez-vous qu'un encaissement de 5 300 € sur un compte paie est réellement inhabituel ?",
      expected:
        "Par la nature du compte (aucun encaissement client n\u2019y arrive normalement), par le libellé (mention « RÉGL CLIENT » sur un compte dédié), et par l\u2019historique (aucun flux comparable les semaines précédentes). L\u2019habituel se juge par la nature du compte et par les statistiques de flux, pas au ressenti.",
    },
    {
      question: "Le responsable ne répond pas et la vague de prélèvements part demain matin : vous faites quoi ?",
      expected:
        "J\u2019applique la procédure interne : s\u2019il existe un seuil de délégation me permettant le virement interne, je le prépare complètement (bénéficiaire, montant, justification) et je tente une validation rapide par écrit ; sinon je remonte au suppléant désigné. Je ne laisserais pas un compte passer en découvert faute de réponse, mais je ne dépasserais jamais seul mes propres délégations : l\u2019alerte écrite horodatée protège aussi le process.",
    },
    {
      question: "Pourquoi exclure le compte à terme de la trésorerie disponible, alors qu'il figure dans les soldes ?",
      expected:
        "Parce qu\u2019il n\u2019est pas retirable à vue : le déblocage suppose un préavis, une renonciation aux intérêts et parfois des pénalités. Il reste un élément de patrimoine financier mobilisable en dernier recours, pas un instrument de paiement quotidien.",
    },
    {
      question: "Qu'est-ce qui vous permettrait de dire que ce compte C3 est mal calibré structurellement ?",
      expected:
        "Si l\u2019incident se répète : virements internes de secours chaque mois pour couvrir les prélèvements. Le calibrage se juge sur l\u2019historique (flux mensuels récurrents du compte) : provisionner en début de mois un solde proche du besoin, ou rediriger une partie des encaissements vers ce compte. Une anomalie répétée n\u2019est plus un aléa, c\u2019est un paramétrage à corriger.",
    },
  ],

  evaluation: {
    criteria: [
      {
        label: 'Exactitude des calculs de soldes',
        description:
          "Sait enchaîner soldes initiaux, flux et virements internes sans erreur, et contrôler le résultat par un second chemin de calcul (variation nette des flux extérieurs).",
      },
      {
        label: 'Maîtrise du vocabulaire des flux',
        description:
          "Distingue sans hésiter encaissement / décaissement / produit / charge / mouvement de trésorerie, et solde comptable / solde bancaire / disponible.",
      },
      {
        label: 'Neutralisation des virements internes',
        description:
          "Isole les arbitrages entre comptes, vérifie leur symétrie et les annule proprement en consolidation.",
      },
      {
        label: 'Analyse d\u2019écarts prévu / réalisé',
        description:
          "Chiffre les écarts, les décompose (encaissements / décaissements) et propose des actions cohérentes avec les causes.",
      },
      {
        label: 'Détection de tension de liquidité',
        description:
          "Projette les soldes par compte sur les jours à venir, repère les soldes futurs négatifs et propose l\u2019arbitrage adapté avec marge de sécurité.",
      },
      {
        label: 'Communication d\u2019une anomalie',
        description:
          "Formule une alerte factuelle : fait chiffré, risque, action proposée, délai — adaptée au destinataire.",
      },
      {
        label: 'Traçabilité du travail',
        description:
          "Référence chaque montant à sa source, date de coupure explicite, tableaux archivés et diffusés.",
      },
    ],
  },
}
