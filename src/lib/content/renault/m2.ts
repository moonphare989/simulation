import type { Mission } from '@/lib/types'

// =====================================================================
// Fiche 2 — Renault · Mission 2 : Compréhension et suivi du BFR
// Scénario pédagogique fictif — juin à septembre 2025, montants en euros.
// Toutes les personnes, entreprises et montants sont fictifs.
// =====================================================================

export const renaultMission2: Mission = {
  id: 'renault-m2',
  ficheId: 'renault',
  order: 2,
  title: 'Comprendre et suivre le besoin en fonds de roulement (BFR)',
  period: 'Juin – Septembre 2025 · scénario pédagogique (données fictives)',
  company: 'Renault (scénario pédagogique — simulation)',
  sector: 'Automobile · service comptable et financier',
  referenceData: [
    'Cinq comptes bancaires suivis quotidiennement (mission 1 de la fiche : Banque Avenir, Méridienne, Océane, Alpine, Helvia)',
    'BFR suivi sur deux exercices fictifs N et N-1 : BFR strict de 380 000 € en N contre 285 000 € en N-1, BFR élargi de 300 200 € contre 219 300 €',
    'Chiffre d\u2019affaires HT de référence : 2 850 000 € en N contre 2 500 000 € en N-1 (scénario pédagogique)',
    'Dix rapprochements bancaires mensuels produits entre décembre 2024 et septembre 2025 (mission 3 de la fiche)',
    'Quinze écarts et suspens bancaires analysés et résolus (mission 3 de la fiche)',
    'Environ cinquante décaissements par mois contrôlés par échantillonnage (mission 4 de la fiche)',
    'Matrice des délégations de signature appliquée : cinq signataires fictifs, plafonds de 8 000 € à 200 000 € (mission 4 de la fiche)',
    'Bons à payer vérifiés avant tout paiement fournisseur (mission 4 de la fiche)',
    'Plus de soixante-dix écritures de clôture mensuelle revues sur l\u2019ensemble des clôtures (mission 5 de la fiche)',
  ],
  summary:
    "Mission pédagogique consacrée au besoin en fonds de roulement : savoir le calculer (stocks + créances clients − dettes fournisseurs), l'élargir, l'interpréter en variation, le relier au fonds de roulement et à la trésorerie nette (TN = FR − BFR), mesurer les délais de paiement (DSO, DPO, DIO) et proposer des actions réalistes en connaissant les limites des indicateurs. Scénario entièrement fictif, montants en euros.",

  comprehension: {
    intro:
      "La trésorerie ne se joue pas seulement sur les comptes bancaires : elle se joue aussi, et surtout, dans le cycle d'exploitation. Chaque jour, une entreprise industrielle prête de l'argent à ses clients (créances), immobilise de la valeur (stocks) et bénéficie d'un crédit de ses fournisseurs (dettes). La somme de ces trois postes détermine le besoin en fonds de roulement — le BFR — c'est-à-dire l'argent que l'activité absorbe en permanence. Dans ce scénario pédagogique fictif, le stagiaire suit le BFR d'une société industrielle sur deux exercices, l'explique à son responsable, calcule les délais qui le composent (DSO, DPO, DIO) et identifie les leviers d'action. Point de vigilance de calibrage : le BFR, le fonds de roulement et la trésorerie nette sont des concepts d'analyse financière issus de la tradition comptable francophone (PCG) ; les comptes consolidés IFRS d'un groupe coté ne présentent pas ces soldes de la même façon (IAS 1 classe par échéance et par nature), même si l'analyse économique sous-jacente reste identique. Toute réponse solide signale donc la convention retenue avant de conclure.",
    definitions: [
      {
        term: 'Besoin en fonds de roulement (BFR)',
        definition:
          "Montant que l'exploitation immobilise en permanence : BFR = stocks + créances clients − dettes fournisseurs. Version stricte (trois postes) ou élargie (créances d'exploitation et dettes d'exploitation au sens large).",
      },
      {
        term: 'Stocks',
        definition:
          "Actifs détenus pour être vendus ou consommés dans le cycle d'exploitation : matières premières, en-cours de production, produits finis. Chaque euro de stock est un euro de trésorerie temporairement immobilisé.",
      },
      {
        term: 'Créances clients',
        definition:
          "Montants facturés aux clients et non encore encaissés, TTC en pratique. Elles constituent un crédit gratuit accordé aux clients, dont le poids se mesure par le DSO.",
      },
      {
        term: 'Dettes fournisseurs',
        definition:
          "Montants dus aux fournisseurs et non encore payés, TTC. Elles constituent un crédit gratuit obtenu des fournisseurs, qui finance partiellement stocks et créances.",
      },
      {
        term: 'Fonds de roulement (FR)',
        definition:
          "Excédent des ressources stables (capitaux propres + dettes financières à long terme) sur l'actif immobilisé net : FR = ressources stables − actif immobilisé. Il mesure ce que les ressources durables laissent disponible pour l'exploitation.",
      },
      {
        term: 'Trésorerie nette (TN)',
        definition:
          "Différence entre FR et BFR : TN = FR − BFR. Positive, elle signifie que les ressources durables couvrent l'actif immobilisé et le besoin d'exploitation ; négative, elle signale un financement court terme du cycle ou des immobilisations.",
      },
      {
        term: 'DSO (Days Sales Outstanding)',
        definition:
          "Délai moyen de règlement des clients, en jours de chiffre d'affaires : DSO = créances clients TTC × 360 / CA TTC (convention usuelle sur 360 jours). Plus il augmente, plus le BFR s'alourdit.",
      },
      {
        term: 'DPO (Days Payables Outstanding)',
        definition:
          "Délai moyen de paiement des fournisseurs, en jours d'achats : DPO = dettes fournisseurs TTC × 360 / achats TTC. Plus il est long, plus il finance le BFR — au prix, parfois, de la relation commerciale.",
      },
      {
        term: 'DIO (Days Inventory Outstanding)',
        definition:
          "Durée moyenne de détention des stocks, en jours de consommation : DIO = stocks × 360 / achats consommés. Avec DSO et DPO, il complète le « cycle de conversion de trésorerie » (CCC = DSO + DIO − DPO).",
      },
      {
        term: 'Ratio BFR / CA',
        definition:
          "BFR rapporté au chiffre d'affaires (HT), en pourcentage : il permet de comparer des exercices de tailles différentes et de repérer une dérive structurelle indépendante de la croissance.",
      },
      {
        term: 'Affacturage',
        definition:
          "Cession des créances clients à un factor qui avance les fonds (avec ou sans recours). Réduit le DSO apparent et le BFR, mais a un coût (commission, intérêts) et transfère ou non le risque selon la formule.",
      },
      {
        term: 'Escompte de créances',
        definition:
          "Mobilisation d'effets de commerce auprès d'une banque avant leur échéance. Financement court terme adossé aux créances, dégressif en coût, soumis à l'existence d'effets acceptés.",
      },
      {
        term: 'Charges constatées d\u2019avance / produits constatés d\u2019avance',
        definition:
          "Régularisations de clôture qui déplacent la frontière charge/produit entre périodes ; elles affectent les composantes du BFR élargi (créances et dettes d'exploitation) et se retrouvent dans la mission 5 de cette fiche.",
      },
    ],
    keyPoints: [
      'Formule de base : BFR = stocks + créances clients − dettes fournisseurs ; version élargie : + autres créances d\u2019exploitation − dettes fiscales, sociales et autres dettes d\u2019exploitation.',
      "Le BFR finance un décalage structurel : tant que les clients paient plus tard que les fournisseurs ne sont payés et que les stocks tournent lentement, l'exploitation absorbe de la trésorerie.",
      'Trésorerie nette : TN = FR − BFR. Un BFR en hausse dégrade la TN à FR constant ; une TN négative peut provenir d\u2019un FR insuffisant autant que d\u2019un BFR excessif.',
      "L'interprétation se fait en variation et en ratio (BFR/CA) : une hausse du BFR en valeur absolue peut n'être que l'effet mécanique de la croissance.",
      'Chaque jour de DSO supplémentaire coûte environ (CA TTC / 360) € de besoin additionnel ; chaque jour de DPO gagné l\u2019allège d\u2019autant.',
      'Trois familles de leviers : côté clients (recouvrement, escompte, affacturage), côté stocks (rotation, pilotage des achats), côté fournisseurs (négociation des délais, sans dégrader la relation).',
      'Erreurs fréquentes : comparer HT et TTC sans le dire, confondre BFR et trésorerie, conclure sur un seul indicateur, oublier que DSO, DPO et DIO sont des moyennes qui masquent la structure des encours.',
      'Conventions et référentiels : l\u2019année de 360 jours, le périmètre strict ou élargi, HT ou TTC sont des choix à expliciter ; en IFRS, BFR, FR et TN ne sont pas des soldes présentés nativement — c\u2019est un outil d\u2019analyse interne ou de communication financière francophone.',
    ],
  },

  objectives: {
    why:
      "Suivre la trésorerie sans comprendre le BFR, c'est traiter le symptôme et ignorer la maladie : un compte bancaire qui se vide souvent traduit un cycle d'exploitation qui absorbe trop de ressources. Dans ce scénario pédagogique, la mission BFR existe pour quantifier ce que l'exploitation immobilise, expliquer pourquoi la trésorerie se tend alors même que l'activité grandit, et objectiver les négociations (délais clients, conditions fournisseurs, pilotage des stocks). C'est aussi un sujet d'entretien extrêmement fréquent : savoir dérouler la formule, la variation et les leviers avec des chiffres fait la différence.",
    infoSought: [
      'Le montant du BFR strict et du BFR élargi à chaque clôture (N et N-1)',
      'La variation du BFR entre deux exercices et sa décomposition par poste',
      'Le poids du BFR rapporté au chiffre d\u2019affaires (BFR/CA) et son évolution',
      'Les délais réels de règlement : DSO, DPO, DIO, et leur variation',
      'La cohérence d\u2019ensemble : FR, BFR et trésorerie nette (TN = FR − BFR)',
      'Les causes économiques d\u2019une variation : allongement des délais clients, gonflement des stocks, raccourcissement des délais fournisseurs, effet de croissance',
      'Les leviers d\u2019action mobilisables et leurs coûts ou limites (recouvrement, affacturage, escompte, négociation fournisseurs, pilotage des stocks)',
    ],
    risksCovered: [
      "Risque d'asphyxie progressive : un BFR qui croît plus vite que le CA vide la trésorerie alors que le résultat est bon",
      "Risque de dérive du recouvrement : délais clients qui s'allongent sans relance structurée",
      "Risque d'obsolescence des stocks : sur-stockage coûteux, dépréciations à la clé",
      "Risque de dégradation de la relation fournisseurs : délais imposés unilatéralement, ruptures d'approvisionnement",
      "Risque d'interprétation erronée : conclure sur un indicateur unique ou sur des conventions non explicitées (HT/TTC, 360/365 jours)",
      "Risque de financement inadapté : BFR durable financé par du court terme renouvelé au lieu de ressources stables",
      "Risque de signal trompeur en consolidation : des soldes (FR, BFR, TN) non comparables entre référentiels ou entre conventions internes",
    ],
  },

  preparation: {
    documents: [
      'Bilans simplifiés N et N-1 (postes d\u2019exploitation : stocks, créances, dettes)',
      'Comptes de résultat N et N-1 (chiffre d\u2019affaires HT, achats) pour les ratios',
      'Balance âgée clients (répartition des créances par ancienneté)',
      'Balance âgée fournisseurs (montants dus par échéance)',
      'État des stocks par nature (matières, en-cours, produits finis) avec rotation',
      'Tableau des échéanciers clients et fournisseurs des mois à venir',
      'Conditions contractuelles de paiement négociées (délais standards, escomptes proposés)',
      'Contrats d\u2019affacturage ou conventions d\u2019escompte existants, avec leurs coûts',
      'Historique du BFR sur plusieurs clôtures pour distinguer tendance et accident',
      'Prévisionnel de trésorerie (pour relier BFR et tensions de la mission 1)',
    ],
    questionsToAsk: [
      "Quelle convention de BFR utilise l'entreprise : stricte (trois postes) ou élargie ? Sur quelle base, HT ou TTC ?",
      "Le calcul des délais se fait-il sur 360 jours ? Les encours sont-ils pris bruts ou nets des dépréciations ?",
      "Quels sont les délais de paiement contractuels standards clients et fournisseurs ?",
      "Existe-t-il déjà des outils de financement du poste clients (affacturage, escompte, assurance-crédit) ?",
      "Quels postes de stocks sont les plus lents à tourner ? Y a-t-il des stocks dormants identifiés ?",
      "Quelle est la politique interne en matière de marge de sécurité de trésorerie ?",
      "Les dépréciations de créances sont-elles importantes et comment affectent-elles la lecture du DSO ?",
    ],
    precautions: [
      "Vérifier la cohérence des bases avant tout calcul : créances et dettes en TTC, CA en TTC pour le DSO, ou tout en HT, mais jamais un mélange non explicité.",
      "Préciser systématiquement la convention (360 jours, BFR strict ou élargi) : deux analystes avec deux conventions peuvent conclure différemment sur la même donnée.",
      "Ne jamais interpréter un BFR en valeur absolue sans le rapporter au CA : la croissance mécanique n'est pas une dérive.",
      "Croiser les indicateurs moyens (DSO, DPO, DIO) avec les balances âgées : une moyenne peut rester stable pendant que la queue de distribution se dégrade.",
      "Relier la conclusion au financement : une variation de BFR n'a de sens que rapportée au FR et à la trésorerie nette.",
    ],
  },

  method: [
    {
      title: 'Collecter les postes d\u2019exploitation du bilan',
      description:
        "Relever stocks, créances clients et comptes rattachés, dettes fournisseurs, et le cas échéant autres créances et dettes d'exploitation, pour N et N-1, avec le chiffre d'affaires HT de chaque exercice.",
      why: 'Le BFR se calcule sur des postes précis et comparables : un périmètre mal défini fausse tous les ratios suivants.',
    },
    {
      title: 'Expliciter la convention de calcul',
      description:
        "Choisir et documenter la convention : BFR strict ou élargi, montants TTC ou HT, année de 360 jours pour les délais.",
      why: 'La convention fait partie du résultat : un BFR sans convention est un chiffre ininterprétable et non comparable.',
    },
    {
      title: 'Calculer le BFR strict de chaque exercice',
      description:
        "Appliquer BFR = stocks + créances clients − dettes fournisseurs pour N puis pour N-1.",
      why: 'C\u2019est le socle du dialogue avec le responsable : un calcul simple, mais qu\u2019il faut savoir dérouler sans erreur de signe.',
    },
    {
      title: 'Calculer le BFR élargi',
      description:
        "Ajouter les autres créances d'exploitation et déduire les dettes fiscales, sociales et autres dettes d'exploitation.",
      why: 'Le BFR élargi capte des éléments réels du cycle (TVA à payer, charges sociales, avances clients) qui changent parfois le diagnostic.',
    },
    {
      title: 'Analyser la variation entre deux exercices',
      description:
        "Calculer la variation du BFR et la décomposer poste par poste : qui a gonflé le besoin, qui l'a allégé.",
      why: "La variation dit l'histoire de l'année : dérive du recouvrement, sur-stockage, resserrement fournisseurs ou simple croissance.",
    },
    {
      title: 'Rapporter le BFR au chiffre d\u2019affaires',
      description:
        "Calculer BFR/CA en pourcentage pour N et N-1 et commenter l'écart en points.",
      why: "Le ratio neutralise l'effet de taille : c'est lui qui distingue la croissance saine de la dérive structurelle.",
    },
    {
      title: 'Calculer les délais du cycle',
      description:
        "DSO = créances TTC × 360 / CA TTC ; DPO = dettes fournisseurs TTC × 360 / achats TTC ; DIO = stocks × 360 / achats consommés. Les comparer entre exercices.",
      why: "Les délais traduisent le BFR en langage opérationnel, négociable avec les commerciaux, les acheteurs et la production.",
    },
    {
      title: 'Croiser avec le fonds de roulement et la trésorerie nette',
      description:
        "Calculer FR = ressources stables − actif immobilisé net, puis TN = FR − BFR, dans la même convention que le BFR.",
      why: "Un BFR élevé n\u2019est un problème que rapporté aux ressources durables : la TN situe le débat (structure de financement ou pilotage du cycle).",
    },
    {
      title: 'Interpréter par composante',
      description:
        "Qualifier chaque écart : allongement client (DSO), gonflement des stocks (DIO), raccourcissement fournisseur (DPO), croissance du CA, ou mix de tout.",
      why: "L\u2019interprétation oriente les actions : on ne négocie pas un DPO comme on relance un DSO.",
    },
    {
      title: 'Chiffrer les incidences des scénarios',
      description:
        "Simuler les effets : un jour de DSO en plus coûte (CA TTC / 360) ; dix jours en plus coûtent dix fois ce montant, toutes choses égales par ailleurs.",
      why: "Le chiffrage transforme une intuition en argument de négociation interne.",
    },
    {
      title: 'Proposer des actions réalistes avec leurs limites',
      description:
        "Lister les leviers (recouvrement, escompte, affacturage, délais fournisseurs, pilotage des stocks) avec coût, délai de mise en œuvre et limites.",
      why: "Un responsable attend des actions mise en œuvre possible, pas un catalogue théorique : chaque levier a un coût ou une contrepartie.",
    },
    {
      title: 'Rédiger une note de synthèse honnête',
      description:
        "Conclure avec la convention, les chiffres clés, la cause probable de la variation, les actions proposées et les limites de l\u2019analyse (moyennes, référentiel).",
      why: "Une note qui cache ses hypothèses est une note contestable ; une note qui les affiche est une note crédible.",
    },
  ],

  exercises: [
    {
      id: 'renault-ex-2-1',
      title: 'Exercice 1 · Calculer le BFR sur deux exercices',
      cycle: 'Exploitation',
      context:
        "Dans ce cas, on me demande d'établir le BFR de la société (fictive) aux deux dernières clôtures, en convention stricte puis élargie, et de commenter la variation. Le bilan est volontairement simplifié ; les montants sont en euros.",
      documents: [
        {
          kind: 'table',
          name: 'Bilan simplifié — postes d\u2019exploitation (données fictives, en €)',
          columns: ['Poste', 'N (30/06/2025)', 'N-1 (30/06/2024)'],
          rows: [
            ['Stocks (matières, en-cours, produits finis)', 190000, 158000],
            ['Créances clients et comptes rattachés (TTC)', 427500, 375000],
            ['Autres créances d\u2019exploitation', 48200, 41500],
            ['Dettes fournisseurs (TTC)', 237500, 248000],
            ['Dettes fiscales et sociales', 92400, 78300],
            ['Autres dettes d\u2019exploitation (avances clients)', 35600, 28900],
            ['Mémo : chiffre d\u2019affaires HT de l\u2019exercice', 2850000, 2500000],
          ],
          note:
            'Convention de l\u2019exercice : BFR strict = stocks + créances clients − dettes fournisseurs ; BFR élargi = BFR strict + autres créances d\u2019exploitation − dettes fiscales et sociales − autres dettes d\u2019exploitation. Document fictif à but pédagogique.',
        },
      ],
      questions: [
        {
          id: 'rn2-e1-q1',
          question: 'Calculer le BFR strict à la clôture N, en euros.',
          type: 'numeric',
          expected: 380000,
          explanation:
            "BFR N = 190 000 + 427 500 − 237 500 = 380 000,00 €. L\u2019exploitation immobilise 380 000 € de façon permanente à la clôture N.",
        },
        {
          id: 'rn2-e1-q2',
          question: 'Calculer le BFR strict à la clôture N-1, en euros.',
          type: 'numeric',
          expected: 285000,
          explanation:
            "BFR N-1 = 158 000 + 375 000 − 248 000 = 285 000,00 €. À noter : les dettes fournisseurs de N-1 (248 000 €) sont supérieures à celles de N (237 500 €), ce qui allégeait le besoin de l\u2019exercice précédent.",
        },
        {
          id: 'rn2-e1-q3',
          question: 'De combien le BFR strict a-t-il augmenté entre N-1 et N, en euros ?',
          type: 'numeric',
          expected: 95000,
          explanation:
            "Variation = 380 000 − 285 000 = +95 000 €. Décomposition : stocks +32 000, créances clients +52 500, dettes fournisseurs −10 500 (le recul du crédit fournisseur alourdit le besoin). Chaque poste pèse et doit être cité dans le commentaire.",
        },
        {
          id: 'rn2-e1-q4',
          question: 'Calculer le BFR élargi à la clôture N, en euros.',
          type: 'numeric',
          expected: 300200,
          explanation:
            "BFR élargi N = 380 000 + 48 200 (autres créances) − 92 400 (dettes fiscales et sociales) − 35 600 (autres dettes) = 300 200,00 €. Pour information, le BFR élargi N-1 vaut 219 300 € : la convention élargie donne un besoin plus faible mais une hausse comparable (+80 900 €).",
        },
        {
          id: 'rn2-e1-q5',
          question:
            "Calculer le ratio BFR strict / CA HT de N, en pourcentage, arrondi au dixième de point (ex. 12,3).",
          type: 'numeric',
          expected: 13.3,
          explanation:
            "BFR/CA (N) = 380 000 / 2 850 000 = 13,3 % (13,33 % précisément). En N-1 : 285 000 / 2 500 000 = 11,4 %. La dérive d\u2019environ 1,9 point signifie que le besoin croît nettement plus vite que l\u2019activité : ce n\u2019est pas un simple effet de croissance.",
        },
        {
          id: 'rn2-e1-q6',
          question:
            "Rédigez le commentaire que vous feriez à votre responsable : que signifie cette variation de BFR, quelles en sont les causes possibles, et quelles premières vérifications proposez-vous ?",
          type: 'open',
          keywords: [
            'augmentation',
            ' besoin',
            'trésorerie',
            'créances',
            'stocks',
            'délai',
            'clients',
            'fournisseurs',
            'ratio',
            'vérifications',
          ],
          explanation:
            "Commentaire attendu : le BFR strict passe de 285 000 € à 380 000 € (+95 000 €), soit +33 %, alors que le CA ne progresse que de +14 % ; le ratio BFR/CA glisse de 11,4 % à 13,3 % : la dégradation est structurelle, pas mécanique. Causes possibles à vérifier : allongement des délais clients (balance âgée : part des créances de plus de 60 jours), gonflement des stocks (rotation, stocks dormants), raccourcissement des délais fournisseurs (renégociations, moins bons rapports de force). Vérifications proposées : balance âgée clients, état des stocks par nature, historique des délais de paiement contractuels. Incidence : à FR constant, la trésorerie nette s\u2019est dégradée d\u2019autant (95 000 € de plus à financer). Dans ce cas, je commencerais par la balance âgée clients, car les créances sont le poste qui a le plus contribué à la hausse.",
        },
      ],
      risks: [
        "Dérive du BFR plus rapide que la croissance",
        'Retards clients non détectés par les moyennes',
        'Conclusion tirée sans ratio ni convention explicite',
      ],
      solutionSummary:
        "BFR strict : 380 000 € en N contre 285 000 € en N-1, soit +95 000 € (+33 %) pour un CA en hausse de +14 %. BFR élargi : 300 200 € contre 219 300 € (+80 900 €). Le ratio BFR/CA passe de 11,4 % à 13,3 % : la dégradation dépasse l'effet de croissance. La décomposition de la variation : stocks +32 000 €, créances clients +52 500 €, dettes fournisseurs −10 500 € (recul du crédit fournisseur). Le commentaire solide cite la convention, la décomposition, le ratio, puis propose des vérifications ciblées (balance âgée, rotation des stocks, conditions fournisseurs). Attention au piège classique : une hausse du BFR n'est pas automatiquement mauvaise — c'est la comparaison à la croissance du CA qui tranche. Signal référentiel : BFR et BFR/CA relèvent de l'analyse financière PCG ; en IFRS consolidé, on raisonnera plutôt sur le fonds de roulement liquidité et le cycle de conversion de trésorerie, avec des définitions à préciser.",
      interviewTips: [
        "Annoncer la convention avant le chiffre : « en convention stricte, TTC, le BFR vaut... ».",
        "Décomposer la variation par poste : le recruteur évalue la capacité à expliquer, pas seulement à calculer.",
        "Terminer par une action : « je vérifierais d'abord la balance âgée clients » montre le réflexe opérationnel.",
      ],
    },

    {
      id: 'renault-ex-2-2',
      title: 'Exercice 2 · Fonds de roulement, BFR et trésorerie nette',
      cycle: 'Structure financière',
      context:
        "Toujours sur les données fictives de l'exercice N : les ressources stables de la société se composent des capitaux propres (1 245 000 €) et des dettes financières à long terme (680 000 €), pour un actif immobilisé net de 1 562 300 €. Je dois articuler FR, BFR et trésorerie nette — et découvrir qu'un changement de convention change le diagnostic.",
      documents: [
        {
          kind: 'table',
          name: 'Données de structure financière — exercice N (données fictives, en €)',
          columns: ['Élément', 'Montant (€)'],
          rows: [
            ['Capitaux propres', 1245000],
            ['Dettes financières à long terme', 680000],
            ['Actif immobilisé net', 1562300],
            ['Mémo : BFR strict N (exercice 1)', 380000],
            ['Mémo : BFR élargi N (exercice 1)', 300200],
          ],
          note:
            "FR = (capitaux propres + dettes financières à long terme) − actif immobilisé net ; TN = FR − BFR, avec le BFR dans la convention retenue. Document fictif à but pédagogique.",
        },
      ],
      questions: [
        {
          id: 'rn2-e2-q1',
          question: 'Calculer le fonds de roulement (FR), en euros.',
          type: 'numeric',
          expected: 362700,
          explanation:
            "FR = (1 245 000 + 680 000) − 1 562 300 = 362 700,00 €. Les ressources durables financent l\u2019actif immobilisé et laissent 362 700 € disponibles pour l\u2019exploitation.",
        },
        {
          id: 'rn2-e2-q2',
          question:
            'Calculer la trésorerie nette en convention stricte : TN = FR − BFR strict. Indiquez le montant avec son signe, en euros.',
          type: 'numeric',
          expected: -17300,
          explanation:
            "TN = 362 700 − 380 000 = −17 300 €. En convention stricte, la trésorerie nette est négative : le BFR absorbe plus que ce que le FR laisse disponible, l\u2019écart étant couvert par du court terme (découverts, concours bancaires).",
        },
        {
          id: 'rn2-e2-q3',
          question:
            'Calculer la trésorerie nette en convention élargie (BFR élargi = 300 200 €), en euros.',
          type: 'numeric',
          expected: 62500,
          explanation:
            "TN = 362 700 − 300 200 = +62 500 €. La convention change le diagnostic : le même bilan peut présenter une TN négative (stricte) ou positive (élargie). D\u2019où l\u2019importance d\u2019annoncer la convention utilisée — et de garder la même d\u2019une période à l\u2019autre.",
        },
        {
          id: 'rn2-e2-q4',
          question: 'Un BFR négatif signifie le plus souvent que :',
          type: 'mcq',
          options: [
            "L'entreprise est en difficulté et ne paie plus ses fournisseurs",
            "Les dettes fournisseurs et autres dettes d'exploitation financent les stocks et les créances clients",
            "L'entreprise n'a plus de clients à crédit",
            "Le fonds de roulement est négatif",
          ],
          expected: '1',
          explanation:
            "Un BFR négatif traduit une exploitation qui dégage des ressources : les dettes d'exploitation (fournisseurs, fiscalité, social) dépassent stocks et créances. C'est structurellement le cas de la grande distribution : encaissement comptant des clients, rotation rapide des stocks, délais fournisseurs longs. Ce n'est ni bon ni mauvais en soi : cela signifie que l'activité prête moins qu'elle n'emprunte à son écosystème — et que la moindre dérive des délais clients ou des stocks peut inverser le signe.",
        },
        {
          id: 'rn2-e2-q5',
          question: 'Une trésorerie nette positive avec un BFR très élevé suppose nécessairement que :',
          type: 'mcq',
          options: [
            "Le BFR est en réalité mal calculé",
            "Le fonds de roulement est encore plus élevé que le BFR",
            "L'entreprise n'a pas de dettes financières",
            "Les stocks sont nuls",
          ],
          expected: '1',
          explanation:
            "TN = FR − BFR : si TN est positive malgré un BFR élevé, c'est que les ressources stables (FR) dépassent ce besoin. Cas typique : une société qui vient de réaliser une augmentation de capital ou une emprunt long non encore investi. La TN est alors positive mais peut masquer un BFR mal piloté : les deux soldes se lisent ensemble.",
        },
        {
          id: 'rn2-e2-q6',
          question:
            "Expliquez en quelques phrases pourquoi deux conventions de BFR peuvent conduire à des diagnostics de trésorerie nette opposés, et ce que vous diriez à votre responsable pour éviter tout malentendu (mention référentiel attendue).",
          type: 'open',
          keywords: [
            'convention',
            'stricte',
            'élargi',
            'fiscales',
            'sociales',
            'avances',
            'comparer',
            'PCG',
            'IFRS',
          ],
          explanation:
            "Le BFR strict ne retient que stocks, créances clients et dettes fournisseurs ; le BFR élargi intègre les autres créances d\u2019exploitation, les dettes fiscales et sociales et les avances clients. Or ces postes sont loin d\u2019être négligeables : ici 92 400 € de dettes fiscales et sociales et 35 600 € d\u2019avances réduisent le besoin élargi de 79 800 € (net des autres créances) — suffisant pour faire passer la TN de −17 300 € à +62 500 €. Pour éviter tout malentendu, je préciserais par écrit la convention utilisée, je garderais la même dans le temps, et je rappellerais que FR, BFR et TN sont des soldes d\u2019analyse francophone (PCG) : en IFRS, les états financiers ne présentent pas ces soldes nativement, l\u2019analyse se fait alors par liquidité courante et cycle de conversion de trésorerie, avec des définitions à documenter. Dans ce cas, je fourniraIS les deux calculs côte à côte avec un libellé explicite.",
        },
      ],
      risks: [
        'Diagnostic de trésorerie inversé par changement de convention non signalé',
        'BFR élevé financé durablement par du court terme',
        'Comparaison entre entreprises sans harmonisation des soldes',
      ],
      solutionSummary:
        "FR = 362 700 €. En convention stricte, TN = FR − BFR = 362 700 − 380 000 = −17 300 € (trésorerie négative, financement court terme du cycle) ; en convention élargie, TN = 362 700 − 300 200 = +62 500 €. Le même bilan raconte deux histoires selon la convention : la différence vient des dettes fiscales et sociales et des avances clients (environ 79 800 € nets) prises en compte ou non. Les pièges à maîtriser : BFR négatif = exploitation qui dégage des ressources (typique de la distribution), pas une situation pathologique ; TN positive avec BFR élevé = FR surdimensionné (par exemple capital récemment augmenté). La règle d'or : annoncer la convention, la garder constante, et préciser qu'en IFRS ces soldes n'existent pas nativement dans les états financiers consolidés.",
      interviewTips: [
        "Dérouler l'articulation FR → BFR → TN dans cet ordre : c'est la logique de l'équilibre financier minimal.",
        "Assumer le signe de la TN stricte et l'expliquer par le financement court terme : les recruteurs apprécient la franchise technique.",
        "Citer la convention ET le référentiel (PCG vs IFRS) en une phrase : c'est un marqueur de maturité.",
      ],
    },

    {
      id: 'renault-ex-2-3',
      title: 'Exercice 3 · Délais de paiement : DSO, DPO, DIO',
      cycle: 'Exploitation',
      context:
        "Pour transformer le BFR en leviers opérationnels, je calcule les délais du cycle d'exploitation sur les deux exercices, puis je chiffre l'incidence d'un allongement du DSO. Convention : année de 360 jours, encours TTC, TVA fictive à 20 %.",
      documents: [
        {
          kind: 'table',
          name: 'Données d\u2019exploitation pour le calcul des délais (données fictives, en €)',
          columns: ['Élément', 'N', 'N-1'],
          rows: [
            ['Chiffre d\u2019affaires HT', 2850000, 2500000],
            ['Chiffre d\u2019affaires TTC (TVA 20 %)', 3420000, 3000000],
            ['Créances clients TTC (clôture)', 427500, 375000],
            ['Achats TTC de l\u2019exercice', 1900000, 1800000],
            ['Dettes fournisseurs TTC (clôture)', 237500, 248000],
            ['Achats consommés de l\u2019exercice', 1800000, 1680000],
            ['Stocks (clôture)', 190000, 158000],
          ],
          note:
            "Formules conventionnelles : DSO = créances clients TTC × 360 / CA TTC ; DPO = dettes fournisseurs TTC × 360 / achats TTC ; DIO = stocks × 360 / achats consommés. Document fictif à but pédagogique.",
        },
      ],
      questions: [
        {
          id: 'rn2-e3-q1',
          question: 'Calculer le DSO de N, en jours (arrondi au dixième si nécessaire).',
          type: 'numeric',
          expected: 45,
          explanation:
            "DSO = 427 500 × 360 / 3 420 000 = 45,0 jours. Les clients règlent en moyenne 45 jours de chiffre d\u2019affaires TTC après la facturation. Le DSO de N-1 est identique : 375 000 × 360 / 3 000 000 = 45 jours — la dérive du BFR ne vient donc PAS des délais clients.",
        },
        {
          id: 'rn2-e3-q2',
          question: 'Calculer le DPO de N, en jours (arrondi au dixième si nécessaire).',
          type: 'numeric',
          expected: 45,
          explanation:
            "DPO = 237 500 × 360 / 1 900 000 = 45,0 jours. L\u2019entreprise paie ses fournisseurs en moyenne 45 jours après achat. La dégradation vient du côté fournisseurs : le DPO de N-1 était de 248 000 × 360 / 1 800 000 = 49,6 jours.",
        },
        {
          id: 'rn2-e3-q3',
          question: 'Calculer le DPO de N-1, en jours (arrondi au dixième).',
          type: 'numeric',
          expected: 49.6,
          explanation:
            "DPO (N-1) = 248 000 × 360 / 1 800 000 = 49,6 jours. La perte de 4,6 jours de crédit fournisseur équivaut, au rythme des achats TTC de N (1 900 000 / 360 ≈ 5 277,78 €/jour), à environ 24 300 € de besoin supplémentaire — une part significative de la hausse du BFR.",
        },
        {
          id: 'rn2-e3-q4',
          question: 'Calculer le DIO de N, en jours (arrondi au dixième si nécessaire).',
          type: 'numeric',
          expected: 38,
          explanation:
            "DIO = 190 000 × 360 / 1 800 000 = 38,0 jours. Le DIO de N-1 valait 158 000 × 360 / 1 680 000 = 33,9 jours : les stocks tournent plus lentement (+4,1 jours), ce qui alourdit aussi le besoin. Avec DSO stable, l\u2019essentiel de la dérive du BFR s\u2019explique par le couple DPO (−4,6 jours) et DIO (+4,1 jours).",
        },
        {
          id: 'rn2-e3-q5',
          question:
            "Les dirigeants envisagent d'accorder 10 jours de délai supplémentaires aux grands clients. Chiffrer le besoin de financement additionnel attendu (CA TTC journalier × 10), en euros.",
          type: 'numeric',
          expected: 95000,
          explanation:
            "CA TTC journalier = 3 420 000 / 360 = 9 500 €/jour. Dix jours de DSO supplémentaires = 9 500 × 10 = 95 000 € de trésorerie immobilisée en plus, toutes choses égales par ailleurs. À rapprocher de la hausse de BFR constatée (+95 000 €) : la décision équivaudrait à reproduire intégralement la dégradation de l\u2019année.",
        },
        {
          id: 'rn2-e3-q6',
          question:
            "Expliquez l'incidence d'un allongement de 10 jours du DSO sur le BFR et la trésorerie, puis proposez deux leviers chiffrables de réduction du besoin. Rédigez quelques phrases structurées.",
          type: 'open',
          keywords: [
            'immobilisée',
            'trésorerie',
            '95 000',
            'BFR',
            'recouvrement',
            'escompte',
            'affacturage',
            'stock',
            'fournisseurs',
          ],
          explanation:
            "Incidence : +10 jours de DSO = 95 000 € de créances supplémentaires (9 500 €/jour de CA TTC), donc +95 000 € de BFR et −95 000 € de trésorerie nette à FR constant. Leviers chiffrables : (1) côté clients — campagne de recouvrement ciblée sur la balance âgée (par exemple récupérer 5 jours de DSO = 47 500 €), escompte pour paiement anticipé (coût de l\u2019escompte à comparer au coût du financement), ou affacturage sans recours (cède le poste clients mais coûte une commission et des intérêts) ; (2) côté stocks — réduire le DIO de 4 jours économise 1 800 000 / 360 × 4 = 20 000 € de besoin ; (3) côté fournisseurs — restaurer 3 jours de DPO sur les achats TTC de N allège 5 277,78 × 3 ≈ 15 800 €, à négocier sans dégrader la relation. Dans ce cas, je chiffrerais chaque levier avec son coût avant de recommander un mix.",
        },
      ],
      risks: [
        "Accord de délais clients sans chiffrage du besoin induit",
        'Leviers de BFR évalués sans leur coût',
        'Interprétation de moyennes sans regarder la structure des encours',
      ],
      solutionSummary:
        "Délais de N : DSO 45 jours, DPO 45 jours, DIO 38 jours ; en N-1 : DSO 45, DPO 49,6, DIO 33,9. Le diagnostic est net : les délais clients sont stables, la dérive du BFR vient du raccourcissement du crédit fournisseur (−4,6 jours) et du ralentissement des stocks (+4,1 jours). L'incidence d'un allongement de 10 jours de DSO se chiffre simplement : CA TTC journalier (9 500 €) × 10 = 95 000 € de besoin supplémentaire. Les leviers se chiffrent de la même façon : chaque jour gagné (ou perdu) sur DSO, DPO ou DIO vaut un montant précis — c'est l'argumentaire du trésorier auprès des commerciaux, des acheteurs et de la production. Limites à rappeler : les délais sont des moyennes (la balance âgée montre la réalité), la base 360 jours est une convention, et les montants dépendent du TTC ou HT retenu.",
      interviewTips: [
        "Annoncer les formules avant de les appliquer, puis donner les trois délais dans l'ordre DSO / DPO / DIO.",
        "Conclure sur le cycle de conversion de trésorerie (DSO + DIO − DPO) : ici 38 jours en N contre 29,3 en N-1.",
        "Chiffrer systématiquement un jour de délai en euros : c'est le réflexe que le recruteur attend du futur trésorier.",
      ],
    },

    {
      id: 'renault-ex-2-4',
      title: 'Exercice 4 · Actions réalistes et limites des indicateurs',
      cycle: 'Exploitation',
      context:
        "Le DSO est de 45 jours, le BFR strict de 380 000 € et le ratio BFR/CA de 13,3 %. Le responsable demande un plan d'action pour réduire le besoin de financement, et veut surtout savoir quelles limites présenter aux dirigeants pour éviter les fausses bonnes idées.",
      documents: [
        {
          kind: 'text',
          name: 'Note interne du responsable trésorerie (document fictif)',
          content:
            "Bonjour,\n\nObjectif de la direction : ramener le BFR/CA sous 12 % d'ici la clôture prochaine, sans dégrader les ventes ni la relation fournisseurs.\n\nMerci de me proposer :\n1. trois actions chiffrables sur le poste clients ;\n2. deux actions sur les stocks ;\n3. une piste fournisseurs avec ses limites ;\n4. les limites des indicateurs (DSO, DPO, BFR/CA) à présenter pour éviter toute décision hâtive.\n\nLe comité de direction aura les yeux sur le DSO : méfiance si quelqu'un vous annonce qu'il a baissé, il faut savoir pourquoi.\n\nCordialement,\nLe responsable trésorerie (personnage fictif)",
          note: 'Document fictif à but pédagogique — les montants et personnes sont imaginaires.',
        },
      ],
      questions: [
        {
          id: 'rn2-e4-q1',
          question:
            "Proposez votre plan d'action : au moins trois actions chiffrables (poste clients, stocks, fournisseurs), chacune avec sa contrepartie ou sa limite. Rédigez une réponse structurée.",
          type: 'open',
          keywords: [
            'recouvrement',
            'balance âgée',
            'escompte',
            'affacturage',
            'caution',
            'stock',
            'rotation',
            'délai',
            'fournisseurs',
            'coût',
          ],
          explanation:
            "Plan attendu (exemples chiffrables sur les données du dossier) : (1) Poste clients — plan de recouvrement adossé à la balance âgée (chaque jour de DSO récupéré = 9 500 €), relances structurées à J+30/J+45, escompte pour paiement anticipé offert de façon ciblée (le coût de l\u2019escompte se compare au coût du financement), affacturage avec ou sans recours (réduit le DSO apparent, coûte commissions et intérêts, et selon la formule la caution ou le recours peut maintenir une part du risque) ; (2) Stocks — réduire le DIO de quelques jours par un pilotage des réapprovisionnements (1 800 000 / 360 = 5 000 € de besoin par jour de stock), identifier les stocks dormants, sécuriser la qualité (sinon dépréciations) ; (3) Fournisseurs — renégocier 2 à 3 jours de DPO sur les achats majeurs (≈ 5 277,78 €/jour TTC), en contrepartie possible : acceptation de livraisons plus fréquentes, engagement de volumes, risque de dégradation de la relation et de perte d\u2019escomptes fournisseurs. Dans ce cas, je présenterais un tableau action / gain chiffré / coût / délai de mise en œuvre, et une recommandation de séquence (recouvrement d\u2019abord, car sans coût financier direct).",
        },
        {
          id: 'rn2-e4-q2',
          question: 'Le DSO passe de 45 à 40 jours. Quelle conclusion est certaine ?',
          type: 'mcq',
          options: [
            "Le recouvrement des créances s'est amélioré",
            "Le risque client a diminué",
            "Le BFR a nécessairement baissé",
            "Aucune de ces conclusions n'est certaine à elle seule : la baisse peut provenir d'un effet de dénominateur, d'une cession de créances ou d'un changement de mix",
          ],
          expected: '3',
          explanation:
            "Le DSO est un ratio : numérateur (créances) et dénominateur (CA TTC) bougent ensemble. Une croissance rapide du CA fait mécaniquement baisser le DSO à qualité de recouvrement constante ; un affacturage cédé en fin de mois fait plonger le numérateur ; un mix accru de ventes comptantes dégrade la lecture du reste du portefeuille. La seule conclusion sûre : le délai moyen apparent a baissé. La cause exige l\u2019analyse (balance âgée, périmètre, affacturage éventuel).",
        },
        {
          id: 'rn2-e4-q3',
          question: "Augmenter le DPO (délais fournisseurs) est une « amélioration » du BFR qui comporte des limites. Laquelle n'est PAS une limite réelle ?",
          type: 'mcq',
          options: [
            "Risque de dégradation de la relation commerciale et de la priorité de livraison",
            "Perte possible d'escomptes fournisseurs pour paiement rapide",
            "Dégradation du scoring fournisseur et des conditions futures",
            "Amélioration automatique et sans contrepartie de la trésorerie nette",
          ],
          expected: '3',
          explanation:
            "La quatrième proposition est fausse (et c\u2019est pourquoi elle n\u2019est pas une limite) : l\u2019allongement du DPO allège le BFR mais n\u2019a rien d\u2019automatique ni de gratuit. Il se négocie, peut coûter des escomptes perdus, dégrader la priorité de traitement en période de tension, et il existe souvent un plafond légal ou contractuel des délais (selon la réglementation applicable et les accords interprofessionnels). En IFRS comme en PCG, l\u2019analyse reste la même : le poste fournisseurs est un crédit à gérer, pas une variable magique.",
        },
      ],
      risks: [
        'Plan d\u2019action non chiffré ou sans coûts associés',
        'Décision fondée sur un indicateur unique (DSO)',
        'Négociation fournisseurs menée sans mesurer les contreparties',
      ],
      solutionSummary:
        "Un plan d'action BFR crédible se présente en tableau : action, poste concerné, gain chiffré (en jours puis en euros), coût ou contrepartie, délai de mise en œuvre. Sur ce dossier : recouvrement adossé à la balance âgée (9 500 € par jour de DSO), escompte ciblé ou affacturage (avec commissions et, selon la formule, recours ou caution), pilotage des stocks (5 000 € par jour de DIO), renégociation prudente des délais fournisseurs (≈ 5 278 € par jour de DPO TTC) en mesurant les contreparties. Les limites des indicateurs font partie de la réponse : DSO, DPO et DIO sont des moyennes sensibles au mix et au dénominateur, le ratio BFR/CA dépend de la convention (HT/TTC, strict/élargi), et une amélioration apparente peut masquer une cession de créances ou un effet de croissance. Le réflexe attendu en entretien : chiffrer chaque levier, annoncer son coût, et rappeler qu'un indicateur ne se lit jamais seul.",
      interviewTips: [
        "Répondre en tableau mental « action / gain / coût » : trois colonnes suffisent à crédibiliser le plan.",
        "Citer au moins une limite d'indicateur : c'est la question piège favorite des recruteurs sur le BFR.",
        "Soigner la formulation du levier fournisseurs : « négocier », jamais « imposer ».",
      ],
    },
  ],

  interviewQuestions: [
    {
      question: 'Définissez le BFR et donnez sa formule.',
      expected:
        "Le besoin en fonds de roulement est le montant que l'exploitation immobilise en permanence : BFR = stocks + créances clients − dettes fournisseurs (convention stricte). Version élargie : on ajoute les autres créances d'exploitation et on déduit les dettes fiscales, sociales et autres dettes d'exploitation. Il se lit en montant, en variation et en ratio BFR/CA.",
      hint: "Préciser la convention (strict/élargi, TTC) dès la définition : le detail fait la différence.",
    },
    {
      question: "Quel est le rôle de chaque composante du BFR ?",
      expected:
        "Les stocks immobilisent de la valeur entre l'achat et la vente ; les créances clients prêtent de l'argent entre la facturation et l'encaissement ; les dettes fournisseurs obtiennent un crédit gratuit entre la réception et le paiement. Le BFR est la somme algébrique de ces trois temps du cycle d'exploitation.",
    },
    {
      question: 'Comment articulez-vous FR, BFR et trésorerie nette ?',
      expected:
        "FR = ressources stables − actif immobilisé net : ce que le long terme laisse à l'exploitation. BFR : ce que l'exploitation absorbe. TN = FR − BFR : le solde, positif ou négatif, qui se retrouve en trésorerie. Une TN négative signifie que le cycle (ou des immobilisations) est financé par du court terme.",
    },
    {
      question: "Que se passe-t-il si les délais clients s'allongent de dix jours ?",
      expected:
        "Le BFR augmente du CA TTC journalier × 10 (par exemple 9 500 €/jour × 10 = 95 000 € sur ce dossier fictif) : la trésorerie baisse d'autant à FR constant, et il faut financer ce besoin (escompte, affacturage, découvert) ou le compenser par ailleurs.",
    },
    {
      question: "Une hausse des stocks a-t-elle le même effet qu'une hausse des créances ?",
      expected:
        "Elle alourdit le BFR du même montant, mais pas avec le même risque : une créance est un droit de créance sur un tiers (risque de défaut, recouvrable), un stock est une valeur qui se déprécie (obsolescence, casse, dépréciation) et qui coûte à détenir (stockage, assurance). Les leviers diffèrent aussi : recouvrement d'un côté, pilotage des achats et de la production de l'autre.",
    },
    {
      question: "Le BFR de votre société a augmenté de 33 % alors que le CA n'a progressé que de 14 % : comment réagissez-vous ?",
      expected:
        "Je rapporte le BFR au CA (le ratio passe de 11,4 % à 13,3 % sur le dossier fictif) pour confirmer la dérive structurelle, je décompose la variation par poste, je calcule les délais (DSO, DPO, DIO) pour identifier la cause, puis je propose des actions chiffrées. L'ordre est important : ratio, décomposition, délais, actions.",
      hint: "Le recruteur teste l'ordre des réflexes : ratio avant conclusion.",
    },
    {
      question: "Quelle différence entre le BFR d'un distributeur et celui d'un industriel ?",
      expected:
        "Le distributeur encaisse souvent comptant et tourne ses stocks vite avec des délais fournisseurs longs : son BFR est fréquemment négatif (l'exploitation dégage des ressources). L'industriel accorde des délais clients, détient matières et en-cours : son BFR est positif et croît avec l'activité. Même économie, signes opposés.",
    },
    {
      question: "Que valent le DSO, le DPO et le DIO comme indicateurs, et quelles sont leurs limites ?",
      expected:
        "Ils traduisent le BFR en jours négociables par les opérationnels (commerciaux, acheteurs, production). Limites : ce sont des moyennes qui masquent la structure des encours (balance âgée nécessaire) ; le dénominateur (CA TTC, achats TTC) crée des effets mécaniques ; une cession de créances (affacturage) améliore le DSO sans améliorer le recouvrement ; la base 360 jours est une convention.",
    },
    {
      question: "Citez trois leviers pour réduire le BFR et leurs contreparties.",
      expected:
        "Clients : recouvrement structuré (coût administratif, action commerciale à coordonner), escompte pour paiement anticipé (coût financier), affacturage (commissions, et recours ou caution selon la formule). Stocks : pilotage des réapprovisionnements et déstockage (risque de rupture de production). Fournisseurs : allongement négocié du DPO (perte d'escomptes, relation commerciale, limites réglementaires éventuelles des délais de paiement).",
    },
    {
      question: "En quoi la notion de BFR dépend-elle du référentiel comptable ?",
      expected:
        "BFR, FR et TN sont des soldes d'analyse de la tradition francophone (PCG, analyse financière). En IFRS, les états financiers consolidés ne présentent pas ces soldes : la classification des actifs et passifs se fait par nature et par échéance (IAS 1). L'analyse économique reste faisable — cycle de conversion de trésorerie, dettes d'exploitation — mais les définitions doivent être documentées avant toute comparaison. Pour un groupe coté comme Renault, le BFR est donc surtout un outil de gestion interne.",
      hint: "Mention IAS 1 / présentation PCG : marqueur de culture comptable.",
    },
  ],

  followUps: [
    {
      question: "Votre directeur vous dit : « le DSO a baissé, nous sommes plus performants ». Que répondez-vous ?",
      expected:
        "Je demande le détail : croissance du CA (effet dénominateur), affacturage récent, mix de clientèle, cession de créances en fin de période. Un DSO qui baisse peut traduire une amélioration du recouvrement, mais aussi un artefact. Je complète par la balance âgée, qui montre la structure réelle des encours.",
    },
    {
      question: "Un fournisseur majeur refuse de passer de 45 à 60 jours : quels arguments financiers mobilisez-vous ?",
      expected:
        "Chiffrer les deux sens : 15 jours représentent environ 79 200 € de besoin (5 277,78 €/jour TTC sur ce dossier) pour nous. Je peux proposer des contreparties : engagements de volumes, prévisions de commande partagées, paiement partiel anticipé avec escompte. L'argument financier marche mieux en win-win qu'en unilateral.",
    },
    {
      question: "Le BFR est négatif : faut-il s'en réjouir ou s'en méfier ?",
      expected:
        "Les deux. C'est structurellement favorable (l'exploitation dégage des ressources, typique de la distribution), mais fragile : cela repose sur la capacité à encaisser vite et à conserver de longs délais fournisseurs. Tout ralentissement des ventes ou durcissement des conditions d'achat peut inverser le signe très vite.",
    },
    {
      question: "Comment le BFR se dégrade-t-il pendant une croissance forte ?",
      expected:
        "Mécaniquement : plus de ventes à crédit créent plus de créances, l'avance de trésorerie sur le cycle s'accentue et le BFR monte en absolu. Le point de vigilance est la vitesse : si le BFR/CA se dégrade en même temps, la croissance consomme plus de trésorerie qu'elle n'en dégage — c'est le schéma classique de la crise de croissance.",
    },
    {
      question: "Quels documents demanderiez-vous pour vérifier un DSO annoncé ?",
      expected:
        "La balance âgée clients (structure des encours), le détail du CA TTC de la période, la liste des créances cédées ou affacturées en fin de période, et la politique de dotation des dépréciations (encours bruts ou nets). Sans ces éléments, le DSO est un chiffre de communication, pas un instrument de pilotage.",
    },
    {
      question: "La trésorerie nette est positive mais le BFR a fortement augmenté : est-ce rassurant ?",
      expected:
        "Partiellement : cela signifie que le FR a progressé plus vite (augmentation de capital, emprunt long) et couvre encore le besoin. Mais la dérive du BFR reste un signal opérationnel à traiter : le jour où le FR cessera de croître, la trésorerie encaissera la facture. Je chiffrerais la part du FR qui compense la dérive.",
    },
  ],

  evaluation: {
    criteria: [
      {
        label: 'Maîtrise des formules',
        description:
          "BFR strict et élargi, FR, TN, DSO, DPO, DIO : sait les énoncer puis les appliquer sans erreur de signe ni de base (HT/TTC).",
      },
      {
        label: 'Analyse en variation et en ratio',
        description:
          "Compare deux exercices, décompose la variation par poste et rapporte le BFR au CA avant de conclure.",
      },
      {
        label: 'Interprétation économique',
        description:
          "Relie chaque variation à sa cause plausible (délais, stocks, croissance) et propose les vérifications adaptées.",
      },
      {
        label: 'Chiffrage des incidences',
        description:
          "Traduit un jour de délai en euros, simule l'effet d'un scénario (allongement DSO) sur le BFR et la trésorerie.",
      },
      {
        label: 'Réalisme des actions proposées',
        description:
          "Actions mise en œuvre possible avec coûts et contreparties (recouvrement, escompte, affacturage, stocks, fournisseurs).",
      },
      {
        label: 'Conscience des conventions et référentiels',
        description:
          "Explicite ses conventions (360 jours, strict/élargi, TTC) et situe les soldes par rapport au PCG et aux présentations IFRS.",
      },
      {
        label: 'Qualité de la communication',
        description:
          "Note structurée : constat chiffré, cause, actions, limites — exprimée en langage accessible à un dirigeant.",
      },
    ],
  },
}
