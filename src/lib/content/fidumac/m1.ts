import type { Mission } from '@/lib/types'

// =====================================================================
// Fiche 1 — Fidumac (cabinet fictif) · Mission 1
// Participation à deux missions d'audit : audit légal et audit contractuel
// Scénario pédagogique fictif — janvier–mars 2026 — montants en MAD
// =====================================================================

export const fidumacMission1: Mission = {
  id: 'fidumac-m1',
  ficheId: 'fidumac',
  order: 1,
  title: 'Participation à deux missions d\'audit : audit légal et audit contractuel',
  period: 'Janvier – Mars 2026 (scénario pédagogique)',
  company: 'Fidumac (cabinet fictif)',
  sector: 'Distribution et BTP (entreprises clientes fictives)',
  referenceData: [
    'Deux missions d\'audit menées en parallèle entre janvier et mars 2026 : une mission d\'audit légal (commissariat aux comptes) et une mission d\'audit contractuel',
    'Secteurs des clients fictifs : distribution (Distra Maroc) et BTP (BâtiSud Maroc)',
    'Exercice audité pour la mission légale : année comptable close le 31/12/2025',
    'Phases couvertes : planification, prise de connaissance, identification des risques, stratégie d\'audit, collecte d\'éléments probants, synthèse, documentation, conclusions et limites',
    'Référentiel de la mission légale : CGNC marocain (Code Général de Normalisation Comptable) — distinct du Plan Comptable Général français',
    'Toutes les entreprises, personnes et montants sont fictifs ; montants exprimés en MAD (dirhams)',
  ],
  summary:
    'Découvrir la grammaire commune des missions d\'audit en participant, au sein du cabinet fictif Fidumac, à un audit légal de commissariat aux comptes (distribution) et à un audit contractuel (BTP). Apprendre à distinguer les deux cadres, à suivre les étapes d\'une mission, à comprendre les risques sectoriels (stocks, marges, cut-off, avancement de chantier, provisions) et à raisonner en éléments probants avec leurs limites.',
  comprehension: {
    intro:
      'Fidumac est un cabinet fictif d\'audit et de commissariat aux comptes installé à Casablanca. Dans ce scénario pédagogique, vous rejoignez pour un stage de fin d\'études l\'équipe de M. Sabri, chef de mission, entre janvier et mars 2026. Tout est inventé pour l\'entraînement : entreprises, personnes, montants.\n\nLa première mission est un audit légal : Fidumac est commissaire aux comptes de Distra Maroc (entreprise fictive de distribution) pour l\'exercice clos le 31/12/2025. L\'objectif est de certifier que les états de synthèse sont réguliers, sincères et donnent une image fidèle du patrimoine et du résultat.\n\nLa seconde mission est un audit contractuel commandité par la direction de BâtiSud Maroc (entreprise fictive de BTP) : une revue des situations de travaux et des marges prévisionnelles de ses chantiers. Aucune certification des comptes annuels n\'est attendue : le rapport répond au besoin défini dans la lettre de mission.\n\nLes deux missions suivent la même grammaire : planification, prise de connaissance de l\'entité, identification des risques, stratégie d\'audit, collecte d\'éléments probants, synthèse, documentation, conclusions et limites.\n\nLa distribution et le BTP exposent à des risques propres : stocks, marges et séparation des exercices (cut-off) pour l\'une ; avancement des chantiers, situations de travaux et provisions pour l\'autre.\n\nAttention au référentiel : les comptes sont tenus selon le CGNC marocain, qui n\'est pas le Plan Comptable Général français (classes et libellés différentes). Un entretien en France vous demandera de traduire votre expérience, pas de réciter des numéros de comptes marocains.\n\nEnfin, gardez le réflexe d\'honnêteté : ces missions n\'ont pas été réellement vécues. Les corrections sont formulées au conditionnel — « dans ce cas, je commencerais par… », « la procédure consisterait à… » — pour rester mobilisables sans être affirmées comme vécues.',
    definitions: [
      {
        term: 'Audit légal (commissariat aux comptes)',
        definition:
          'Mission d\'audit rendue obligatoire par les textes (désignation en assemblée) et destinée aux actionnaires et aux tiers. Elle se conclut par une opinion sur la régularité, la sincérité et l\'image fidèle des états financiers.',
      },
      {
        term: 'Audit contractuel',
        definition:
          'Mission convenu par contrat (lettre de mission) entre un commanditaire et le cabinet. L\'objectif est librement défini : revue d\'acquisition, fiabilisation d\'un processus, évaluation d\'un chantier… Aucune opinion de certification sur les comptes annuels.',
      },
      {
        term: 'États de synthèse (CGNC)',
        definition:
          'Au Maroc, l\'ensemble des documents de synthèse : bilan, compte de produits et charges (CPC), tableau des flux de trésorerie et notes. Le PCG français parle d\'états financiers et présente le résultat en compte 12, alors que le CGNC utilise une classe 8 dédiée aux comptes de résultats.',
      },
      {
        term: 'Image fidèle',
        definition:
          'Qualité exigée des états de synthèse : ils doivent traduire fidèlement la réalité économique de l\'entité, sous réserve des choix comptables autorisés et de l\'importance relative des anomalies.',
      },
      {
        term: 'Élément probant',
        definition:
          'Information recueillie par l\'auditeur pour fonder son opinion. Il doit être pertinent (lié à l\'assertion testée) et suffisant (en quantité et en qualité). Une confirmation externe obtenue directement est plus fiable qu\'un document interne non diffusé.',
      },
      {
        term: 'Seuil de signification',
        definition:
          'Montant au-delà duquel une anomalie (ou un cumul d\'anomalies) est susceptible d\'influencer le jugement des utilisateurs des états financiers. Il guide l\'étendue des travaux et l\'appréciation des incidences.',
      },
      {
        term: 'Risque d\'anomalies significatives',
        definition:
          'Risque que les états de synthèse contiennent des anomalies supérieures au seuil de signification, avant prise en compte des contrôles de l\'entité. Il combine risque inhérent et risque lié au contrôle.',
      },
      {
        term: 'Assurance raisonnable',
        definition:
          'Niveau d\'assurance élevé mais non absolu, obtenu par des diligences adaptées. L\'audit repose sur des sondages, des estimations et des jugements : il ne garantit pas l\'exactitude de chaque chiffre.',
      },
      {
        term: 'Cut-off (séparation des exercices)',
        definition:
          'Contrôle de l\'affectation des opérations au bon exercice : une livraison de décembre doit fonder un produit de décembre, une prestation reçue en décembre doit donner une charge de décembre (ou une facture non parvenue), même si la facture arrive en janvier.',
      },
      {
        term: 'Inventaire physique des stocks',
        definition:
          'Comptage des quantités réellement détenues à une date donnée, avec feuilles de comptage numérotées, double comptage et rapprochement avec le stock comptable, puis valorisation au coût (ou à la valeur nette de réalisation si inférieure).',
      },
      {
        term: 'Avancement d\'un chantier',
        definition:
          'Pour un contrat de longue durée, pourcentage d\'avancement économique, généralement mesuré par le rapport entre les coûts engagés et le coût total estimé du chantier. Il sert à reconnaître le chiffre d\'affaires avant la facturation intégrale.',
      },
      {
        term: 'Situation de travaux',
        definition:
          'Document contractuel du BTP constatant la valeur des travaux exécutés sur une période, visé par le maître d\'œuvre, déduction faite de la retenue de garantie, et qui sert de base à la facturation.',
      },
      {
        term: 'Provision pour risques et charges',
        definition:
          'Passif dont l\'échéance ou le montant n\'est pas certain, mais dont l\'existence à la clôture est probable (par exemple une pénalité de retard de chantier). Au CGNC, la dotation passe par le compte 6195 ; en France, par le compte 6815.',
      },
      {
        term: 'Rapport d\'audit et opinion',
        definition:
          'Document final de la mission : opinion (certification, certification avec réserve, refus) dans le cadre légal ; rapport de constats et de recommandations dans le cadre contractuel.',
      },
    ],
    keyPoints: [
      'Audit légal et audit contractuel partagent la méthode mais diffèrent par le destinataire, la base (textes contre contrat), l\'objectif et le rapport.',
      'La chronologie de référence : planification, prise de connaissance, identification des risques, stratégie d\'audit, collecte d\'éléments probants, synthèse, documentation, conclusions et limites.',
      'La documentation est transversale : chaque phase est documentée au fil de l\'eau, pas seulement à la fin.',
      'Distribution : trois zones de risque prioritaires — réalité et valorisation des stocks, marge, cut-off des ventes.',
      'BTP : le chiffre d\'affaires se reconnaît à l\'avancement (coûts engagés / coût total estimé), rapproché des situations facturées ; provisions et retenues de garantie complètent le contrôle.',
      'Un élément probant se juge sur sa pertinence, sa fiabilité (hiérarchie des sources) et sa suffisance ; les preuves externes corrôborées priment.',
      'L\'audit donne une assurance raisonnable : sondages, estimations, refus d\'accès ou rotation des interventions créent des limites à documenter.',
      'Référentiel : le CGNC marocain n\'est pas le PCG français — même logique, numéros et libellés souvent différents (clients 3421 contre 410, ventes de marchandises 7111 contre 707, FNP 4417 contre 408).',
      'Honnêteté : scénario fictif, correction au conditionnel ; en entretien, présentez la démarche, pas une expérience vécue inventée.',
    ],
  },
  objectives: {
    why:
      'Comprendre la coexistence de deux cadres de mission permet de situer n\'importe quel travail d\'audit demandé ensuite. Savoir dérouler les étapes d\'une mission donne un fil conducteur réutilisable en entretien comme en pratique. Connaître les risques sectoriels (stocks, cut-off, avancement, provisions) montre une capacité à adapter la démarche au métier du client. Enfin, raisonner en éléments probants et en limites évite le piège du candidat qui « certifie » trop vite.',
    infoSought: [
      'Le destinataire du travail (actionnaires et tiers, ou commanditaire contractuel)',
      'La base de la mission : textes et désignation, ou lettre de mission',
      'L\'objectif précis et le livrable attendu (opinion ou rapport de constats)',
      'La période couverte et le référentiel comptable applicable (CGNC)',
      'Le seuil de signification retenu et son mode de calcul',
      'Les interlocuteurs et les documents accessibles (dossier permanent, balances, contrats de chantiers)',
      'Les limites prévisibles : accès aux documents, rotation des interventions, jugements et estimations',
    ],
    risksCovered: [
      'Confusion entre audit légal et audit contractuel (objectif et rapport inadaptés)',
      'Stocks surévalués ou inexacts en distribution',
      'Chiffre d\'affaires mal séparé entre exercices (cut-off des ventes)',
      'Marge déformée par des erreurs de valorisation ou de rattachement des charges',
      'Avancement de chantier mal estimé (chiffre d\'affaires et production erronés)',
      'Provisions insuffisantes (pénalités, pertes à terminer, retenues de garantie mal suivies)',
      'Éléments probants insuffisants ou non pertinents pour fonder une conclusion',
      'Méconnaissance du référentiel CGNC conduisant à des contrôles hors sujet pour un entretien en France',
    ],
  },
  preparation: {
    documents: [
      'Lettre de mission ou extrait du mandat de commissaire aux comptes',
      'Statuts, procès-verbaux d\'assemblées et rapports de l\'exercice précédent',
      'États de synthèse N et N-1 (bilan, CPC, notes) selon le CGNC',
      'Balances générales N et N-1 et grand livre des comptes significatifs',
      'Dossier permanent du client et feuilles de roulement de l\'an dernier',
      'Manuel de procédures et organigramme fonctionnel',
      'Programme d\'inventaire physique et procès-verbal d\'inventaire du 31/12/2025',
      'Fichiers clients et fournisseurs (balances âgées, comptes individuels)',
      'Contrats de chantiers, situations de travaux, états de coûts et estimations à terminer (BTP)',
      'Relevés bancaires et rapprochements de clôture',
    ],
    questionsToAsk: [
      'Quel est le cadre exact de chaque mission : mandat légal ou contrat, et qui recevra le rapport ?',
      'Quel référentiel comptable s\'applique et sous quelle version du CGNC ?',
      'Quel seuil de signification a été retenu et comment a-t-il été calculé ?',
      'Quels cycles et comptes sont jugés significatifs cette année ?',
      'Qui sont les interlocuteurs clés côté client et quels accès aux documents sont prévus ?',
      'Le planning intègre-t-il l\'inventaire physique, la visite de chantier et les dates de clôture ?',
      'Quelles limites ont été identifiées lors du dernier exercice (refus d\'accès, estimations sensibles) ?',
    ],
    precautions: [
      'Ne jamais présenter le scénario comme une expérience vécue : le contenu est fictif et conçu pour s\'entraîner.',
      'Formuler les démarches au conditionnel (« je commencerais par… », « la procédure consisterait à… ») jusqu\'à ce qu\'elles soient réellement pratiquées.',
      'Vérifier tout calcul avant de le citer : un chiffre faux détruit une démonstration juste.',
      'Distinguer systématiquement les faits observés des interprétations, et documenter les deux séparément.',
      'Respecter la confidentialité des documents du client, même fictifs, comme s\'ils étaient réels.',
      'Se rappeler que le CGNC marocain n\'est pas le PCG français : traduire les libellés, pas seulement les chiffres.',
    ],
  },
  method: [
    {
      title: 'Situer la mission dans son cadre',
      description:
        'Relire la lettre de mission ou l\'extrait de mandat : destinataire, base légale ou contractuelle, objectif, période, référentiel. En cas de doute, poser la question au chef de mission avant tout travail.',
      why: 'Un même geste technique (confirmation, rapprochement, inventaire) ne se documente ni ne se conclut de la même manière selon le cadre de la mission.',
    },
    {
      title: 'Planifier la participation du stagiaire',
      description:
        'Identifier les tâches confiées, le temps disponible, les interlocuteurs et les livrables attendus (feuilles de travail, notes, tableaux de rapprochement). Fixer les points d\'avance avec le chef de mission.',
      why: 'La planification transforme une présence en participation mesurable et sécurise la relecture par le senior.',
    },
    {
      title: 'Prendre connaissance de l\'entité',
      description:
        'Lire le dossier permanent, l\'organigramme, les états de synthèse N-1 et le secteur. Pour Distra Maroc (distribution) : poids des stocks, saisonnalité, marges par rayon. Pour BâtiSud Maroc (BTP) : carnet de chantiers, durée des contrats, mode de facturation.',
      why: 'Les risques ne se devinent pas : ils se déduisent de l\'activité, de son cycle d\'exploitation et de son environnement.',
    },
    {
      title: 'Identifier les risques et assertions sensibles',
      description:
        'Traduire l\'activité en assertions : réalité des stocks, valorisation, séparation des exercices (cut-off), réalité du chiffre d\'affaires, avancement des chantiers, exhaustivité des provisions.',
      why: 'Chaque assertion sensible oriente le choix des contrôles et des documents à collecter.',
    },
    {
      title: 'Fixer la stratégie d\'audit',
      description:
        'Arbitrer entre contrôles substantifs et approche par les risques, définir le seuil de signification, la taille des échantillons, les dates d\'intervention (intermédiaires, inventaire, clôture).',
      why: 'La stratégie dimensionne l\'effort : elle décide où l\'équipe passe du temps et où elle s\'appuie sur des contrôles existants.',
    },
    {
      title: 'Collecter les éléments probants',
      description:
        'Exécuter les programmes de travail : rapprochements (inventaire physique / stock comptable, situations / avancement), tests de détail, confirmations externes, revues analytiques. Croiser les sources.',
      why: 'L\'opinion et le rapport ne valent que par la qualité et la suffisance des preuves recueillies.',
    },
    {
      title: 'Contrôler le cut-off et la séparation des exercices',
      description:
        'Examiner les derniers bons de livraison de décembre et les premiers de janvier, les factures émises et reçues autour de la clôture, les situations de travaux visées en janvier pour des travaux de décembre.',
      why: 'La frontière d\'exercice est le lieu privilégié des manipulations et des erreurs de chiffre d\'affaires et de charges.',
    },
    {
      title: 'Apprécier provisions et estimations',
      description:
        'Revoir les hypothèses du client : coût total des chantiers, pénalités probables, dépréciations de stocks et de créances. Confronter les estimations aux données postérieures à la clôture.',
      why: 'Les estimations contiennent le risque de manipulation le plus difficile à détecter : la démonstration doit être chiffrée et documentée.',
    },
    {
      title: 'Synthétiser les constats',
      description:
        'Regrouper les anomalies chiffrées, évaluer leur incidence individuelle et cumulée au regard du seuil de signification, préparer les points à discuter avec le client.',
      why: 'La synthèse transforme des constats épars en une conclusion argumentée et défendable.',
    },
    {
      title: 'Documenter au fil de l\'eau',
      description:
        'Renseigner les feuilles de travail : objectif, source, échantillon, résultat, conclusion. Marquer les rapprochements, archiver les copies de documents référencées.',
      why: 'Une conclusion non documentée est une conclusion non prouvée : la piste d\'audit doit permettre à un tiers de refaire le travail.',
    },
    {
      title: 'Formuler conclusions et limites',
      description:
        'Rédiger la note de synthèse : ce qui a été contrôlé, ce qui a été trouvé, ce qui n\'a pas pu être vérifié et pourquoi (accès refusé, estimation non corroborable, rotation des interventions).',
      why: 'Les limites assumées protègent le lecteur du rapport et crédibilisent le reste de la conclusion.',
    },
    {
      title: 'Faire relire et capitaliser',
      description:
        'Soumettre les feuilles au senior, intégrer les corrections, mettre à jour le dossier permanent pour l\'exercice suivant.',
      why: 'La relecture est un contrôle qualité interne ; la capitalisation évite de refaire deux fois la même prise de connaissance.',
    },
  ],
  exercises: [
    // ============================ EXERCICE 1 ============================
    {
      id: 'fidumac-m1-ex1',
      title: 'Audit légal vs audit contractuel : le tableau qui clarifie tout',
      cycle: 'Transversal',
      context:
        'Premier jour chez Fidumac (cabinet fictif). M. Sabri vous remet les deux dossiers : le mandat de commissaire aux comptes de Distra Maroc et la lettre de mission contractuelle de BâtiSud Maroc. Avant tout travail technique, il vous demande de restituer par écrit les différences entre les deux cadres. Scénario entièrement fictif ; montants en MAD.',
      documents: [
        {
          kind: 'table',
          name: 'Tableau comparatif — audit légal et audit contractuel (support fictif d\'entraînement)',
          columns: ['Critère', 'Audit légal (commissariat aux comptes)', 'Audit contractuel'],
          rows: [
            ['Destinataire', 'Les actionnaires et les tiers', 'Le commanditaire : direction, acquéreur, prêteur… selon le contrat'],
            ['Base de la mission', 'Désignation prévue par les textes (assemblée)', 'Contrat de mission (lettre de mission)'],
            ['Cadre normatif', 'Normes d\'exercice professionnel du pays du mandat', 'Termes de référence convenus et méthodologie du cabinet'],
            ['Objectif type', 'Certifier la régularité, la sincérité et l\'image fidèle des états de synthèse', 'Répondre à un besoin défini : acquisition, organisation, fiabilité d\'un processus'],
            ['Rapport', 'Rapport général avec opinion (et rapports spéciaux éventuels)', 'Rapport de mission : constats, conclusions, recommandations'],
            ['Exemplarité (périodicité)', 'Mandat pluriannuel encadré par les textes, avec rotation', 'Ponctuel ou récurrent selon la convention'],
            ['Incidence sur les comptes annuels', 'Opinion : certification, certification avec réserve, ou refus', 'Aucune opinion de certification'],
          ],
          note: 'Document fictif destiné à l\'entraînement. Les règles précises de durée et de rotation des mandats dépendent des textes de chaque pays : citez le principe, pas un chiffre appris par cœur.',
        },
      ],
      questions: [
        {
          id: 'fidumac-m1-ex1-q1',
          question: 'Qui est le destinataire principal du rapport d\'audit légal ?',
          type: 'mcq',
          options: [
            'La direction générale de l\'entreprise auditée',
            'Les actionnaires et les tiers',
            'Le cabinet d\'audit lui-même',
            'L\'administration fiscale',
          ],
          expected: '1',
          explanation:
            'L\'audit légal est une mission d\'intérêt collectif : le rapport s\'adresse aux actionnaires et, au-delà, aux tiers (prêteurs, fournisseurs, salariés). La direction est un interlocuteur, pas le destinataire du rapport.',
        },
        {
          id: 'fidumac-m1-ex1-q2',
          question: 'Sur quoi repose l\'audit contractuel de BâtiSud Maroc ?',
          type: 'mcq',
          options: [
            'Un contrat de mission (lettre de mission) définissant l\'objectif',
            'Une désignation obligatoire en assemblée générale',
            'Une obligation fiscale annuelle',
            'Un règlement intérieur du cabinet',
          ],
          expected: '0',
          explanation:
            'L\'audit contractuel est un engagement convenu : sa base est la lettre de mission, qui fixe l\'objectif (ici la revue des situations de travaux et des marges prévisionnelles), le périmètre et le rapport attendu.',
        },
        {
          id: 'fidumac-m1-ex1-q3',
          question: 'Parmi ces caractéristiques, lesquelles sont propres à l\'audit légal ?',
          type: 'multi',
          options: [
            'Il débouche sur une opinion sur les états de synthèse',
            'Son mandat est pluriannuel et encadré par les textes',
            'Son objectif est librement défini par le client',
            'Son rapport est remis au seul commanditaire',
            'Il peut aboutir à une certification avec réserve ou à un refus de certifier',
          ],
          expected: ['0', '1', '4'],
          explanation:
            'L\'objectif librement défini et le rapport remis au seul commanditaire caractérisent l\'audit contractuel. L\'opinion, le mandat encadré et les réserves ou refus relèvent de l\'audit légal.',
        },
        {
          id: 'fidumac-m1-ex1-q4',
          question: 'Un audit contractuel se conclut normalement par une opinion de certification sur les comptes annuels.',
          type: 'truefalse',
          options: ['Vrai', 'Faux'],
          expected: '1',
          explanation:
            'Faux. L\'audit contractuel produit un rapport de mission (constats, conclusions, recommandations) sur le périmètre convenu. Seul l\'audit légal certifie les comptes annuels.',
        },
        {
          id: 'fidumac-m1-ex1-q5',
          question: 'Que peut produire un audit légal si des anomalies significatives restent non corrigées ?',
          type: 'mcq',
          options: [
            'Une certification avec réserve, un refus de certifier, ou une certification sans incidence si les anomalies restent très en deçà du seuil de signification',
            'Rien : le commissaire aux comptes ne peut que certifier',
            'Une amende à la charge du client',
            'Un simple courrier sans portée sur le rapport',
          ],
          expected: '0',
          explanation:
            'Tout dépend de l\'incidence au regard du seuil de signification : négligeable, l\'opinion peut rester sans réserve ; significative, elle appelle une réserve ; généralisée, un refus de certifier.',
        },
        {
          id: 'fidumac-m1-ex1-q6',
          question: 'Que signifie la ligne « exemplarité (périodicité) » du tableau ?',
          type: 'mcq',
          options: [
            'L\'audit légal s\'exerce sur plusieurs exercices dans les limites fixées par les textes (avec rotation), alors que la mission contractuelle dure ce que dure le contrat',
            'L\'audit légal est renouvelé librement à l\'infini',
            'L\'audit contractuel est forcément annuel',
            'Les deux missions ont toujours la même durée',
          ],
          expected: '0',
          explanation:
            '« Exemplarité » désigne ici le fait que la mission légale se répète d\'exercice en exercice sous mandat encadré (rotation prévue par les textes), quand la mission contractuelle est ponctuelle ou récurrente selon la seule volonté des parties.',
        },
        {
          id: 'fidumac-m1-ex1-q7',
          question:
            'Expliquez en trois phrases les deux différences essentielles entre audit légal et audit contractuel : destinataire et base de la mission.',
          type: 'open',
          keywords: ['destinataire', 'actionnaires', 'tiers', 'contrat', 'opinion', 'certification', 'mandat'],
          explanation:
            'Réponse attendue (exemple) : l\'audit légal s\'adresse aux actionnaires et aux tiers, tandis que l\'audit contractuel s\'adresse au commanditaire défini par le contrat. L\'audit légal repose sur une désignation prévue par les textes, l\'audit contractuel sur une lettre de mission. Seul l\'audit légal débouche sur une opinion de certification des états de synthèse.',
        },
      ],
      risks: ['Confusion des cadres de mission', 'Rapport inadapté au destinataire', 'Objectif mal compris'],
      solutionSummary:
        'Dans ce cas, je commencerais par relire la lettre de mission et l\'extrait de mandat pour vérifier destinataire, base, objectif et rapport attendu, puis je remplirais le tableau comparatif. Les deux missions de la fiche illustrent parfaitement le tableau : le mandat de commissaire aux comptes de Distra Maroc (distribution, exercice 2025) vise la certification des états de synthèse ; la mission contractuelle de BâtiSud Maroc (BTP) vise une revue des situations de travaux et des marges prévisionnelles, sans opinion. La procédure consisterait ensuite à vérifier que chaque feuille de travail précise le cadre dans lequel elle est réalisée, car un même constat (par exemple un avancement de chantier discuté) ne se documente ni ne se communique de la même manière selon que la mission est légale ou contractuelle. En entretien, cette capacité à qualifier le cadre avant de décrire le geste technique est un marqueur de maturité.',
      interviewTips: [
        'Commencez toujours par qualifier le cadre (« mission légale, destinataire : actionnaires et tiers ») avant de décrire les travaux.',
        'Si on vous demande la durée exacte d\'un mandat de commissaire aux comptes, répondez sur le principe (mandat encadré, rotation) sans inventer de chiffre.',
      ],
    },
    // ============================ EXERCICE 2 ============================
    {
      id: 'fidumac-m1-ex2',
      title: 'Les étapes d\'une mission d\'audit : remettre la chronologie en ordre',
      cycle: 'Transversal',
      context:
        'Pour l\'onboarding, Mme Idrissi (associée fictive) vous demande de restituer la chronologie d\'une mission d\'audit, telle qu\'utilisée chez Fidumac : planification, prise de connaissance, identification des risques, stratégie d\'audit, collecte d\'éléments probants, synthèse, documentation, conclusions et limites. Scénario fictif.',
      documents: [
        {
          kind: 'text',
          name: 'Feuille de route des phases (support fictif d\'entraînement)',
          content:
            'PHASE 1 — PLANIFICATION\nAcceptation (ou maintien) de la mission, évaluation de l\'indépendance,\nchoix de l\'équipe, budget et calendrier, rédaction du plan de mission\net fixation du seuil de signification.\n\nPHASE 2 — PRISE DE CONNAISSANCE\nEntité, activité, secteur, organisation, systèmes comptables et d\'information,\nrevue du dossier permanent, entretiens avec les opérationnels.\n\nPHASE 3 — IDENTIFICATION DES RISQUES\nTraduction de la prise de connaissance en assertions sensibles\n(réalité, exhaustivité, valorisation, rattachement, présentation).\n\nPHASE 4 — STRATÉGIE D\'AUDIT\nArbitrage entre approche substantive et fiabilité des contrôles du client,\ndimensionnement des échantillons, dates d\'intervention.\n\nPHASE 5 — COLLECTE D\'ÉLÉMENTS PROBANTS\nExécution des programmes de travail : tests de détail, confirmations,\nrapprochements, revues analytiques, assistance à l\'inventaire,\nvisite de chantier pour le BTP.\n\nPHASE 6 — SYNTHÈSE\nCumul des anomalies, incidence au seuil de signification,\npoints à discuter avec le client, révision des estimations.\n\nPHASE 7 — DOCUMENTATION\nFeuilles de travail référencées et datées, piste d\'audit, dossier permanent\nmis à jour. Étape transversale : chaque phase est documentée au fil de l\'eau.\n\nPHASE 8 — CONCLUSIONS ET LIMITES\nNote de synthèse, opinion (mission légale) ou rapport de mission (contractuel),\nexpression des limites : sondages, estimations, refus d\'accès, rotation.',
          note: 'Support fictif. Les découpages varient d\'un cabinet à l\'autre ; l\'ordre logique, lui, est stable.',
        },
      ],
      questions: [
        {
          id: 'fidumac-m1-ex2-q1',
          question: 'Quelle phase ouvre la mission ?',
          type: 'mcq',
          options: [
            'La collecte d\'éléments probants',
            'La planification (acceptation, équipe, calendrier, seuil de signification)',
            'La rédaction du rapport',
            'La synthèse des anomalies',
          ],
          expected: '1',
          explanation:
            'Tout commence par la planification : accepter la mission, vérifier l\'indépendance, dimensionner l\'équipe, fixer le calendrier et le seuil de signification. On ne collecte des preuves qu\'une fois la stratégie posée.',
        },
        {
          id: 'fidumac-m1-ex2-q2',
          question: 'Que fait-on immédiatement après l\'identification des risques ?',
          type: 'mcq',
          options: [
            'On rédige le rapport final',
            'On élabore la stratégie d\'audit (nature, étendue, calendrier des travaux)',
            'On clôture le dossier permanent',
            'On sollicite la confirmation des fournisseurs',
          ],
          expected: '1',
          explanation:
            'Les risques identifiés déterminent la réponse d\'audit : contrôles substantifs ou appui sur les contrôles du client, taille des échantillons, dates d\'intervention. C\'est la stratégie d\'audit.',
        },
        {
          id: 'fidumac-m1-ex2-q3',
          question: 'Quel enchaînement est correct ?',
          type: 'mcq',
          options: [
            'Prise de connaissance → identification des risques → stratégie d\'audit → collecte d\'éléments probants → synthèse → conclusions et limites',
            'Collecte d\'éléments probants → prise de connaissance → stratégie d\'audit → identification des risques → synthèse',
            'Synthèse → documentation → identification des risques → stratégie d\'audit → éléments probants',
            'Stratégie d\'audit → planification → documentation → risques → synthèse',
          ],
          expected: '0',
          explanation:
            'La logique est : comprendre (prise de connaissance), en déduire les risques, décider de la réponse (stratégie), exécuter (preuves), conclure (synthèse puis conclusions et limites).',
        },
        {
          id: 'fidumac-m1-ex2-q4',
          question: 'Où se situe la documentation dans le déroulement de la mission ?',
          type: 'mcq',
          options: [
            'Uniquement à la fin, au moment du rapport',
            'Tout au long de la mission : chaque phase est documentée au fil de l\'eau',
            'Seulement pendant la collecte des éléments probants',
            'Après la remise du rapport, à titre d\'archive',
          ],
          expected: '1',
          explanation:
            'La documentation est transversale : une feuille de travail datée et référencée pour chaque contrôle effectué. Rédiger tout à la fin expose à l\'oubli et rend la piste d\'audit invérifiable.',
        },
        {
          id: 'fidumac-m1-ex2-q5',
          question: 'Décrivez la phase de planification : contenu et livrables.',
          type: 'open',
          keywords: ['acceptation', 'indépendance', 'plan de mission', 'seuil de signification', 'équipe', 'calendrier', 'budget'],
          explanation:
            'Réponse attendue (exemple) : la planification couvre l\'acceptation ou le maintien de la mission, la vérification de l\'indépendance, la constitution de l\'équipe, le budget et le calendrier. Elle aboutit au plan de mission, qui fixe notamment le seuil de signification et la répartition des cycles entre les membres de l\'équipe.',
        },
      ],
      risks: ['Démarche désordonnée', 'Confusion des phases', 'Documentation tardive'],
      solutionSummary:
        'La procédure consisterait à mémoriser la chaîne : planification → prise de connaissance → identification des risques → stratégie d\'audit → collecte d\'éléments probants → synthèse → documentation (transversale) → conclusions et limites. Un moyen simple de la retenir : on ne peut pas dimensionner des travaux (stratégie) sans avoir compris l\'entité (prise de connaissance) ni traduit cette compréhension en risques ; et on ne peut pas conclure sans preuves ni synthèse. Dans un entretien, dérouler spontanément cette chaîne avant de répondre à une question technique montre que votre démarche est structurée, pas improvisée.',
      interviewTips: [
        'Ancrez chaque phase sur un livrable : plan de mission, note de risques, programme de travail, feuilles de travail, note de synthèse.',
        'Précisez que la documentation est transversale : c\'est une réponse qui différencie un candidat préparé.',
      ],
    },
    // ============================ EXERCICE 3 ============================
    {
      id: 'fidumac-m1-ex3',
      title: 'Particularités du secteur distribution : stocks, marges et cut-off',
      cycle: 'Ventes-Clients / Stocks',
      context:
        'Mission d\'audit légal de Distra Maroc (entreprise fictive de distribution), clôture au 31/12/2025. Vous assistez à l\'inventaire physique du rayon produits de grande consommation le 31/12/2025 au soir, puis vous rapprochez le stock comptable du stock compté. Vous contrôlez également le cut-off des dernières livraisons de décembre. Tous les montants sont en MAD et fictifs.',
      documents: [
        {
          kind: 'table',
          name: 'Rapprochement inventaire physique / stock comptable au 31/12/2025 — rayon PGC (fictif)',
          columns: [
            'Référence',
            'Désignation',
            'Stock comptable (qté)',
            'Stock physique (qté)',
            'Écart (qté)',
            'Coût unitaire (MAD)',
            'Écart valorisé (MAD)',
          ],
          rows: [
            ['PGC-101', 'Huile de table 5 L', 420, 415, -5, 78.5, -392.5],
            ['PGC-102', 'Sucre 1 kg', 1250, 1262, 12, 9.2, 110.4],
            ['PGC-103', 'Farine 25 kg', 80, 74, -6, 182.0, -1092.0],
            ['PGC-104', 'Thé vert 200 g', 640, 640, 0, 24.0, 0.0],
            ['PGC-105', 'Café 500 g', 310, 298, -12, 68.0, -816.0],
            ['TOTAL', 'Écart net du rayon', '', '', -11, '', -2190.1],
          ],
          note: 'Document fictif. Écart valorisé = écart de quantité × coût unitaire. L\'écart net négatif signifie un stock comptable supérieur au stock physique (surévaluation).',
        },
        {
          kind: 'table',
          name: 'Contrôle du cut-off des ventes — dernières livraisons de décembre 2025 (fictif)',
          columns: ['N° BL', 'Date de livraison', 'Client', 'N° facture', 'Date de facturation', 'Comptabilisée le', 'Montant HT (MAD)'],
          rows: [
            ['BL-2025-4910', '29/12/2025', 'Comptoir du Sud', 'FV-2025-1389', '29/12/2025', '29/12/2025', 18400.0],
            ['BL-2025-4915', '30/12/2025', 'Ste Grenier Distribution', 'FV-2026-0012', '05/01/2026', '05/01/2026', 31200.0],
            ['BL-2025-4918', '30/12/2025', 'Atlas Restauration', 'FV-2026-0018', '04/01/2026', '04/01/2026', 15800.0],
            ['BL-2026-0003', '02/01/2026', 'Atlas Restauration', 'FV-2025-1396', '31/12/2025', '31/12/2025', 9600.0],
          ],
          note: 'Document fictif. La vente de marchandises se rattache à l\'exercice de la livraison effective (bon de livraison signé), pas à la date de facturation.',
        },
      ],
      questions: [
        {
          id: 'fidumac-m1-ex3-q1',
          question:
            'L\'écart net du rayon correspond à une surévaluation du stock comptable. Quel est son montant (MAD) ?',
          type: 'numeric',
          expected: 2190.1,
          explanation:
            'Écarts valorisés : -392,50 + 110,40 - 1 092,00 + 0,00 - 816,00 = -2 190,10 MAD. Le stock comptable est surévalué de 2 190,10 MAD par rapport au stock physique compté.',
        },
        {
          id: 'fidumac-m1-ex3-q2',
          question: 'Quelle est l\'incidence de la correction de cet écart de stock sur le résultat 2025 ?',
          type: 'mcq',
          options: [
            'Le résultat 2025 diminue de 2 190,10 MAD : la correction baisse le stock final et augmente la charge de marchandises vendues',
            'Le résultat 2025 augmente de 2 190,10 MAD',
            'Aucune incidence : un écart de stock n\'affecte que la trésorerie',
            'L\'incidence ne se ressent qu\'en 2026',
          ],
          expected: '0',
          explanation:
            'Stock final surévalué de 2 190,10 MAD : en corrigeant, le stock final baisse, la variation de stocks se dégrade et le résultat 2025 diminue d\'autant.',
        },
        {
          id: 'fidumac-m1-ex3-q3',
          question:
            'Sur le tableau de cut-off, quel est le montant total du chiffre d\'affaires 2025 sous-évalué (livraisons de décembre facturées en 2026) ?',
          type: 'numeric',
          expected: 47000,
          explanation:
            'BL-2025-4915 (31 200,00 MAD) et BL-2025-4918 (15 800,00 MAD) ont été livrés en décembre 2025 mais facturés et comptabilisés en janvier 2026 : 31 200,00 + 15 800,00 = 47 000,00 MAD de chiffre d\'affaires 2025 à reclasser. À l\'inverse, BL-2026-0003 (9 600,00 MAD) livré en janvier a été facturé en décembre 2025 et devra être retiré du chiffre d\'affaires 2025.',
        },
        {
          id: 'fidumac-m1-ex3-q4',
          question: 'Quel document fait foi pour dater une vente de marchandises livrées ?',
          type: 'mcq',
          options: [
            'La facture, quelle que soit sa date',
            'Le bon de livraison signé (date de livraison effective)',
            'Le bon de commande du client',
            'Le relevé de compte client',
          ],
          expected: '1',
          explanation:
            'Le transfert des risques suit la livraison : le bon de livraison signé, daté, est la pièce qui rattache la vente à l\'exercice. La facture peut être émise avant ou après.',
        },
        {
          id: 'fidumac-m1-ex3-q5',
          question:
            'En distribution, le stock est valorisé au coût, sauf si sa valeur nette de réalisation lui est inférieure.',
          type: 'truefalse',
          options: ['Vrai', 'Faux'],
          expected: '0',
          explanation:
            'Vrai : c\'est le principe commun au CGNC marocain et au PCG français (et aux IFRS). Un article dont le prix de vente probable passe sous le coût doit être déprécié.',
        },
        {
          id: 'fidumac-m1-ex3-q6',
          question:
            'Décrivez votre démarche de contrôle : assistance à l\'inventaire, exploitation de l\'écart, marges et cut-off.',
          type: 'open',
          keywords: ['inventaire', 'physique', 'comptable', 'écart', 'valorisation', 'cut-off', 'bon de livraison', 'correction'],
          explanation:
            'Réponse attendue (exemple) : lors de l\'inventaire physique, je vérifierais la discipline du comptage (feuillets numérotés, double comptage, mouvements bloqués), puis je rapprocherais stock comptable et stock physique référence par référence. J\'exploiterais chaque écart (surévaluation nette de 2 190,10 MAD ici) en valorisant au coût unitaire et en proposant la correction. Enfin, sur le cut-off, je passerais en revue les derniers bons de livraison signés de décembre et les premiers de janvier pour reclasser les 47 000,00 MAD de ventes livrées non facturées en 2025, et retirer les 9 600,00 MAD facturés avant livraison.',
        },
      ],
      risks: ['Stocks surévalués', 'Chiffre d\'affaires mal séparé entre exercices', 'Marges déformées', 'Valorisation inadaptée'],
      solutionSummary:
        'Dans ce cas, je commencerais par assister à l\'inventaire physique en observant la méthode (comptage, feuillets numérotés, double comptage, blocage des mouvements), puis je rapprocherais le stock compté du stock comptable : ici, surévaluation nette de 2 190,10 MAD (écarts valorisés : -392,50 + 110,40 - 1 092,00 - 816,00), à corriger par une baisse du stock final et une hausse de la charge de marchandises vendues, ce qui diminue le résultat 2025 d\'autant. La procédure consisterait ensuite à vérifier la valorisation (coût, ou valeur nette de réalisation si inférieure) et le bien-fondé des dépréciations sur les références à rotation lente. Sur le cut-off, je retiendrais les livraisons de décembre 2025 facturées en janvier (31 200,00 + 15 800,00 = 47 000,00 MAD à reclasser en 2025) et la livraison de janvier facturée en décembre (9 600,00 MAD à retirer du chiffre d\'affaires 2025). Selon le référentiel et l\'importance relative, ces reclassements se traduiraient par des écritures de produits à recevoir ou de produits constatés d\'avance. Le rapprochement « inventaire physique / stock comptable » et le tableau de cut-off seraient conservés comme éléments probants dans le dossier.',
      interviewTips: [
        'Citez le trio gagnant du secteur distribution : réalité des stocks, valorisation, cut-off.',
        'Chiffrez toujours l\'incidence (2 190,10 MAD sur le résultat ; 47 000,00 MAD de chiffre d\'affaires reclassé) : les recruteurs adorent les candidats qui concluent en montants.',
      ],
    },
    // ============================ EXERCICE 4 ============================
    {
      id: 'fidumac-m1-ex4',
      title: 'Particularités du secteur BTP : avancement, situations de travaux et provisions',
      cycle: 'Production / Chantiers',
      context:
        'Mission contractuelle chez BâtiSud Maroc (entreprise fictive de BTP) : revue du chantier « Résidence Les Palmiers », immeuble de bureaux sur 18 mois (juillet 2025 – décembre 2026). Vous devez rapprocher l\'avancement économique du chantier des situations de travaux facturées et apprécier les provisions. Montants fictifs en MAD HT.',
      documents: [
        {
          kind: 'table',
          name: 'Situations de travaux visées — chantier « Résidence Les Palmiers » (fictif)',
          columns: ['N° situation', 'Période', 'Montant HT (MAD)', 'Cumul facturé HT (MAD)', 'Visa maître d\'œuvre', 'Date de facturation'],
          rows: [
            ['SIT-01', 'Juillet – septembre 2025', 1150000.0, 1150000.0, 'Visée', '06/10/2025'],
            ['SIT-02', 'Octobre – décembre 2025', 850000.0, 2000000.0, 'Visée', '08/01/2026'],
          ],
          note: 'Document fictif. Retenue de garantie contractuelle : 5 % du montant de chaque situation, libérée à la réception définitive des travaux.',
        },
        {
          kind: 'table',
          name: 'Estimation à fin décembre 2025 (fictif)',
          columns: ['Élément', 'Montant (MAD HT)', 'Observation'],
          rows: [
            ['Marché initial HT', 4800000.0, 'Immeuble de bureaux, 18 mois (juillet 2025 – décembre 2026)'],
            ['Coûts engagés cumulés à fin 2025', 1920000.0, 'État des coûts du chantier validé par le conducteur de travaux'],
            ['Coût total estimé du chantier', 4000000.0, 'Estimation du conducteur de travaux, à confronter'],
            ['Situations facturées cumulées', 2000000.0, 'SIT-01 et SIT-02'],
            ['Pénalité de retard probable', 120000.0, 'Le retard constaté déclencherait la clause pénale du marché'],
          ],
          note: 'Document fictif. Avancement économique = coûts engagés cumulés / coût total estimé.',
        },
      ],
      questions: [
        {
          id: 'fidumac-m1-ex4-q1',
          question: 'Quel est l\'avancement économique du chantier au 31/12/2025 (en %) ?',
          type: 'numeric',
          expected: 48,
          explanation:
            'Avancement = coûts engagés cumulés / coût total estimé = 1 920 000,00 / 4 000 000,00 = 48 %.',
        },
        {
          id: 'fidumac-m1-ex4-q2',
          question: 'Quel chiffre d\'affaires total faut-il reconnaître au 31/12/2025 selon la méthode à l\'avancement (MAD) ?',
          type: 'numeric',
          expected: 2304000,
          explanation:
            'Chiffre d\'affaires à reconnaître = avancement × montant du marché = 48 % × 4 800 000,00 = 2 304 000,00 MAD.',
        },
        {
          id: 'fidumac-m1-ex4-q3',
          question: 'Quel est l\'écart entre le chiffre d\'affaires à reconnaître et les situations facturées (MAD) ?',
          type: 'numeric',
          expected: 304000,
          explanation:
            '2 304 000,00 (à reconnaître) - 2 000 000,00 (facturé via situations) = 304 000,00 MAD : des travaux exécutés mais non encore facturés, à constater à la clôture (créances sur travaux non encore facturables / production en cours).',
        },
        {
          id: 'fidumac-m1-ex4-q4',
          question: 'Quel est le montant cumulé de la retenue de garantie sur les situations facturées (MAD) ?',
          type: 'numeric',
          expected: 100000,
          explanation:
            'Retenue de garantie = 5 % × 2 000 000,00 = 100 000,00 MAD. Cette somme est retenue sur les règlements et ne sera libérée qu\'à la réception définitive : elle doit rester identifiable dans les comptes clients.',
        },
        {
          id: 'fidumac-m1-ex4-q5',
          question: 'Comment traiter la pénalité de retard probable de 120 000,00 MAD ?',
          type: 'mcq',
          options: [
            'L\'ignorer tant que le client ne l\'a pas réclamée',
            'Constituer une provision pour risques et charges (dotation via le compte 6195 au CGNC), car l\'obligation est probable à la clôture',
            'La comptabiliser en charge certaine de l\'exercice suivant',
            'En faire une simple note annexée sans écriture',
          ],
          expected: '1',
          explanation:
            'Une pénalité probable à la clôture (clause pénale déclenchée par le retard) appelle une provision pour risques et charges : dotation d\'exploitation via 6195 au CGNC marocain (6815 en PCG français). L\'attendre serait sous-évaluer les charges.',
        },
        {
          id: 'fidumac-m1-ex4-q6',
          question:
            'Pourquoi le BTP ne peut-il pas attendre la facturation pour reconnaître l\'activité, et quelles limites de la méthode ?',
          type: 'open',
          keywords: ['avancement', 'coûts', 'coût total', 'production', 'situation', 'estimation', 'incertitude', 'provision'],
          explanation:
            'Réponse attendue (exemple) : un chantier de 18 mois chevauche deux exercices : attendre la facturation concentrerait tout le chiffre d\'affaires en 2026 et fausserait la comparabilité. La méthode à l\'avancement (coûts engagés / coût total estimé) lisse l\'activité : ici 48 % d\'avancement, soit 2 304 000,00 MAD à reconnaître. Ses limites : le coût total estimé (4 000 000,00) est un jugement, révisable ; l\'avancement coûté peut être auto-évalué ; des provisions pour pertes à terminer ou pénalités (120 000,00) peuvent s\'ajouter.',
        },
      ],
      risks: ['Avancement mal estimé', 'Chiffre d\'affaires de chantier erroné', 'Provisions insuffisantes', 'Retenues de garantie mal suivies'],
      solutionSummary:
        'Dans ce cas, je commencerais par reconstituer l\'avancement économique : 1 920 000,00 / 4 000 000,00 = 48 %, soit un chiffre d\'affaires à reconnaître de 48 % × 4 800 000,00 = 2 304 000,00 MAD. La procédure consisterait ensuite à le rapprocher des situations facturées (2 000 000,00) : il manque 304 000,00 de travaux exécutés non facturés, à constater à la clôture ; à vérifier la retenue de garantie (5 % × 2 000 000,00 = 100 000,00 MAD, créance à suivre jusqu\'à la réception définitive) ; et à apprécier les provisions : le marché reste bénéficiaire (4 800 000,00 de produits contre 4 000 000,00 de coûts, soit 800 000,00 de marge prévisionnelle), mais la pénalité de retard probable de 120 000,00 MAD appelle une provision pour risques et charges (dotation 6195 au CGNC ; 6815 en France). Je confronterais enfin l\'estimation du coût total à des éléments probants : devis complémentaires, historique de chantiers similaires, confirmation du conducteur de travaux. Toute révision du coût total modifierait mécaniquement l\'avancement et le chiffre d\'affaires : c\'est la principale zone de jugement du secteur.',
      interviewTips: [
        'Donnez la formule d\'avancement (coûts engagés / coût total estimé) et appliquez-la immédiatement au chiffre du cas : 48 %.',
        'Terminez par les provisions : pénalités et pertes à terminer sont le complément obligatoire de tout raisonnement BTP.',
      ],
    },
    // ============================ EXERCICE 5 ============================
    {
      id: 'fidumac-m1-ex5',
      title: 'Éléments probants et limites des travaux : le réflexe du conditionnel',
      cycle: 'Transversal',
      context:
        'Fin de mission. M. Sabri (chef de mission fictif) vous laisse cette note sur la qualité des preuves et les limites de l\'audit, avant de vous demander de préparer la note de synthèse. Scénario fictif.',
      documents: [
        {
          kind: 'text',
          name: 'Note interne — éléments probants et limites (fictive)',
          content:
            'NOTE DE M. SABRI — ÉLÉMENTS PROBANTS ET LIMITES DES TRAVAUX (fictive)\n\n1. Qualités d\'un élément probant\n   - Pertinence : la preuve doit tester l\'assertion visée\n     (réalité, exhaustivité, valorisation, rattachement, présentation).\n   - Suffisance : nombre et qualité suffisants au regard du risque\n     et du seuil de signification.\n   - Fiabilité de la source, par ordre décroissant :\n     a) preuve obtenue directement par l\'auditeur\n        (confirmation tiers, observation physique) ;\n     b) document externe remis par le client\n        (relevé bancaire, facture originale) ;\n     c) document interne diffusé à l\'extérieur\n        (bon de livraison signé par le client) ;\n     d) document interne non diffusé (feuille de stock théorique).\n\n2. Corroboration\n   Croiser systématiquement : un montant de facture se confronte\n   au bon de réception, au contrat tarifaire et, si utile,\n   à la confirmation directe du tiers.\n\n3. Limites des travaux\n   - Sondages : l\'audit n\'examine pas 100 % des opérations.\n   - Estimations : avancement, provisions, dépréciations\n     reposent sur des jugements du client.\n   - Jugements : seuils, classifications, présentation.\n   - Accès : un document refusé ou détruit limite la portée.\n   - Rotation des interventions : la réglementation impose\n     des alternances qui empêchent de tout vérifier chaque année.\n   - Événements postérieurs : l\'auditeur arrête ses travaux\n     à une date donnée.\n\n4. Conséquence\n   L\'audit apporte une assurance RAISONNABLE, pas absolue.\n   Une limite non documentée est une opinion fragile : chaque\n   restriction doit figurer dans le dossier et, le cas échéant,\n   dans le rapport.',
          note: 'Document fictif destiné à l\'entraînement. La terminologie « assurance raisonnable » est commune aux normes internationales et aux cadres nationaux.',
        },
      ],
      questions: [
        {
          id: 'fidumac-m1-ex5-q1',
          question: 'Parmi ces sources, laquelle est la plus fiable pour attester la réalité d\'une créance client ?',
          type: 'mcq',
          options: [
            'La balance âgée imprimée par le client',
            'La confirmation directe du client obtenue par l\'auditeur (lettre de circularisation)',
            'La copie de la facture conservée par le service commercial',
            'L\'explication orale du responsable de la recouvrance',
          ],
          expected: '1',
          explanation:
            'La confirmation directe est recueillie par l\'auditeur auprès du tiers : source externe, obtenue directement — en haut de la hiérarchie des preuves. La balance âgée est un document interne ; la copie de facture un document interne non diffusé ; l\'oral n\'est pas une preuve.',
        },
        {
          id: 'fidumac-m1-ex5-q2',
          question: 'Quelles qualités doit réunir un élément probant ?',
          type: 'multi',
          options: [
            'Être pertinent au regard de l\'assertion contrôlée',
            'Être suffisant en quantité et en qualité',
            'Provenir d\'une source fiable, externe de préférence',
            'Être recueilli directement par l\'auditeur lorsque c\'est possible',
            'Être fourni spontanément par le client sans aucune vérification',
          ],
          expected: ['0', '1', '2', '3'],
          explanation:
            'Pertinence, suffisance, fiabilité de la source et collecte directe quand c\'est possible : les quatre qualités attendues. Une preuve « fournie spontanément sans vérification » n\'a aucune valeur probante.',
        },
        {
          id: 'fidumac-m1-ex5-q3',
          question: 'L\'audit apporte une assurance absolue sur l\'exactitude de chaque chiffre des comptes.',
          type: 'truefalse',
          options: ['Vrai', 'Faux'],
          expected: '1',
          explanation:
            'Faux : sondages, estimations, jugements et limites d\'accès font que l\'audit apporte une assurance raisonnable — un niveau élevé, mais non absolu.',
        },
        {
          id: 'fidumac-m1-ex5-q4',
          question: 'Que faire si les éléments probants restent insuffisants sur un point sensible ?',
          type: 'mcq',
          options: [
            'Conclure quand même favorablement pour ne pas retarder le rapport',
            'Étendre les travaux ; à défaut, exprimer une réserve ou une limite dans le rapport',
            'Demander au client de signer une décharge',
            'Remplacer la preuve manquante par une explication orale du comptable',
          ],
          expected: '1',
          explanation:
            'Deux issues possibles : obtenir davantage de preuves (étendre les travaux) ou refléter l\'insuffisance dans le rapport (réserve, limitation de la portée). Ignorer le problème falsifie l\'opinion.',
        },
        {
          id: 'fidumac-m1-ex5-q5',
          question: 'Qu\'est-ce qu\'une limite des travaux d\'audit et comment la formuler dans une note de synthèse ?',
          type: 'open',
          keywords: ['raisonnable', 'sondage', 'estimation', 'jugement', 'limite', 'réserve', 'documentation'],
          explanation:
            'Réponse attendue (exemple) : une limite est ce que l\'auditeur n\'a pas pu vérifier : sondages (pas d\'examen exhaustif), estimations et jugements (avancement, provisions), refus d\'accès, rotation des interventions, arrêt des travaux avant les événements postérieurs. Elle se formule factuellement dans la note de synthèse — ce qui a été contrôlé, ce qui ne l\'a pas été et pourquoi — et se traduit, si elle est significative, par une réserve dans le rapport. L\'audit n\'apporte qu\'une assurance raisonnable.',
        },
      ],
      risks: ['Preuves insuffisantes', 'Opinion non fondée', 'Limites non documentées'],
      solutionSummary:
        'La démarche consisterait à évaluer chaque preuve avec trois filtres : pertinence (teste-t-elle l\'assertion visée ?), suffisance (nombre et qualité au regard du risque et du seuil), fiabilité (source externe directe > document externe remis > document interne diffusé > document interne). Dans ce cas, je commencerais par les preuves les plus fiables (confirmations, observation physique, relevés bancaires) et je corroborerais les autres par recoupement. Les limites — sondages, estimations, jugements, refus d\'accès, rotation des interventions — seraient listées une par une dans la note de synthèse, avec leur incidence éventuelle sur l\'opinion. À l\'oral, ce vocabulaire (« assurance raisonnable », « réserve », « limitation de portée ») est un excellent signal de sérieux : il montre que vous savez ce que l\'audit ne peut pas promettre.',
      interviewTips: [
        'Employez « assurance raisonnable » plutôt que « garantie » : le mot « garantie » sonne faux chez un auditeur.',
        'Illustrez la corroboration : un montant croisé sur trois documents vaut mieux qu\'un document parfait isolé.',
      ],
    },
  ],
  interviewQuestions: [
    {
      question: 'Expliquez-moi concrètement comment vous procéderiez pour participer à la prise de connaissance d\'un nouveau client.',
      hint: 'Structurez : sources, entretiens, restitution.',
      expected:
        'Je commencerais par le dossier permanent et les états de synthèse N-1 pour reprendre l\'historique, puis l\'organigramme et le manuel de procédures. J\'ajouterais des entretiens courts avec la comptabilité, les achats et le commercial pour comprendre les flux réels. Je restituerais le tout en une note : activité, cycles significatifs, systèmes d\'information, points d\'attention. Dans un scénario de formation, la démarche serait la même : comprendre avant de contrôler.',
    },
    {
      question: 'Pourquoi effectue-t-on une prise de connaissance avant tout contrôle ?',
      hint: 'Risques, seuil, assertion.',
      expected:
        'Parce qu\'elle détermine les risques et le seuil de signification, donc la nature et l\'étendue des travaux. Sans connaissance du secteur (stocks en distribution, avancement en BTP), on teste au hasard : les contrôles perdent leur pertinence.',
    },
    {
      question: 'Quel document utiliseriez-vous pour vérifier la réalité d\'une vente de fin d\'exercice ?',
      hint: 'Pensez à la date qui fait foi.',
      expected:
        'Le bon de livraison signé et daté par le client, corroboré par la facture et, si le montant est sensible, par une confirmation directe du client. C\'est la date de livraison qui rattache la vente à l\'exercice.',
    },
    {
      question: 'Quel risque cherchez-vous à couvrir en assistant à l\'inventaire physique des stocks ?',
      hint: 'Trois mots : réalité, valorisation, cut-off.',
      expected:
        'La surévaluation du stock (stock comptable supérieur au physique, comme un écart net de 2 190,10 MAD constaté sur un rayon), les erreurs de valorisation (coût ou valeur nette de réalisation) et le cut-off : derniers bons de réception et de livraison autour de la clôture.',
    },
    {
      question: 'Comment avez-vous sélectionné les rayons ou les chantiers examinés ?',
      hint: 'Méthode d\'échantillonnage.',
      expected:
        'Par risque et par importance relative : rayons à forte valeur ou à rotation lente d\'abord, chantiers représentatifs du chiffre d\'affaires ou à estimation sensible. Entraînement fictif oblige, je le présenterais comme la méthode appliquée dans le scénario : sélection orientée risque, avec des éléments aléatoires en complément.',
    },
    {
      question: 'Que feriez-vous si vous détectiez une anomalie lors de vos travaux ?',
      hint: 'Documenter, chiffrer, remonter.',
      expected:
        'Je la documenterais immédiatement (fait observé, références, montant), je vérifierais si elle est isolée ou systémique en étendant le cas échéant l\'échantillon, je chiffrerais l\'incidence au seuil de signification, puis je la remonterais au senior avec une proposition de correction. Aucune conclusion non étayée dans le dossier.',
    },
    {
      question: 'Comment justifieriez-vous votre conclusion à la fin de la mission ?',
      hint: 'Preuves + seuil + limites.',
      expected:
        'Par la piste d\'audit : objectifs, échantillons, documents examinés, résultats, conclusions, le tout référencé. Les anomalies seraient cumulées et comparées au seuil de signification ; les points non vérifiés seraient présentés comme limites. Une conclusion se justifie par les preuves, jamais par l\'autorité.',
    },
    {
      question: 'Comment savez-vous que votre contrôle est suffisant ?',
      hint: 'Suffisance = fonction du risque et du seuil.',
      expected:
        'La suffisance se raisonne : plus le risque est élevé, plus les preuves doivent être nombreuses et fiables ; les anomalies détectées ou l\'impossibilité d\'obtenir une preuve déclenchent une extension. C\'est un équilibre documenté entre coût, risque et seuil de signification, pas un sentiment.',
    },
    {
      question: 'Que se passe-t-il si le client refuse de vous transmettre un document ?',
      hint: 'Étapes avant la réserve.',
      expected:
        'Je relancerais par écrit en expliquant l\'usage du document, je proposerais une alternative (copie certifiée, confirmation directe du tiers, visite sur place). En cas de refus maintenu, le senior en apprécierait l\'incidence : limite de portée documentée, réserve, voire refus de certifier si le point est central.',
    },
    {
      question: 'Quelle est la différence entre un test de cheminement et un test de conformité ?',
      hint: 'Une transaction contre un échantillon.',
      expected:
        'Le test de cheminement (walkthrough) suit une ou très peu de transactions de bout en bout pour vérifier que le processus décrit existe tel quel. Le test de conformité teste le fonctionnement d\'un contrôle précis sur un échantillon de transactions pour évaluer s\'il a opéré efficacement pendant la période.',
    },
    {
      question: 'Quelle est la différence entre audit interne et audit externe ?',
      hint: 'Rattachement, destinataire, objectif.',
      expected:
        'L\'audit interne est une fonction de l\'entité, rattachée à la direction ou au comité d\'audit : il évalue les processus et le contrôle interne pour l\'organisation. L\'audit externe est conduit par un cabinet indépendant : il certifie (cadre légal) ou constate (cadre contractuel) pour des destinataires externes. Les outils se recoupent (tests, échantillons), les objectifs et l\'indépendance diffèrent.',
    },
    {
      question: 'Vous avez travaillé sur le CGNC marocain : quelle prudence adopter pour un poste en France ?',
      hint: 'Traduire, pas transposer.',
      expected:
        'Je présenterais la logique (assertions, cut-off, provisions) qui est universelle, en traduisant les libellés : clients 3421 au Maroc contre 410 en France, ventes de marchandises 7111 contre 707, factures non parvenues 4417 contre 408, « provisions pour dépréciation » au CGNC contre « dépréciations » au PCG. Je signalerais spontanément la différence de référentiel plutôt que de réciter des numéros marocains.',
    },
  ],
  followUps: [
    {
      question: 'Vous dites « certification avec réserve » : concrètement, ça s\'écrit comment dans un rapport ?',
      expected:
        'Le rapport identifie l\'anomalie non corrigée, son montant et son incidence (par exemple une surévaluation du stock de 2 190,10 MAD), puis exprime que les comptes sont réguliers et sincères à l\'exception des points décrits. Le lecteur doit pouvoir chiffrer l\'incidence lui-même.',
    },
    {
      question: 'L\'associé vous dit : « l\'écart de stock n\'est que 2 000 MAD sur des millions, on n\'en parle pas ». Que répondez-vous ?',
      expected:
        'Je distinguerai l\'incidence (négligeable au regard du seuil de signification : pas d\'effet sur l\'opinion) et la documentation (l\'anomalie reste relevée dans le récapitulatif des anomalies corrigées ou non). Un petit montant non répétitif n\'appelle pas de réserve, mais disparaître du dossier, jamais.',
    },
    {
      question: 'Pourquoi la rotation des interventions est-elle une limite et pas une simple contrainte d\'organisation ?',
      expected:
        'Parce qu\'elle empêche de refaire chaque année les mêmes vérifications au même endroit : certains contrôles ne sont exercés qu\'une année sur plusieurs. L\'assurance de l\'auditeur sur la période s\'en trouve réduite, ce qui doit être assumé dans son plan de sondage et son opinion.',
    },
    {
      question: 'Le cut-off ne concerne que les ventes ?',
      expected:
        'Non : il concerne aussi les achats et charges (factures non parvenues, charges constatées d\'avance), les stocks (derniers bons de réception), la paie, et le BTP (travaux exécutés non facturés). Toute frontière d\'exercice est une zone de contrôle.',
    },
    {
      question: 'Sur le chantier, qui vous garantit que le coût total estimé de 4 000 000 MAD est honnête ?',
      expected:
        'Personne a priori : c\'est une estimation. Je la corroborerais par les devis d\'achats, les contrats de sous-traitance, l\'historique de chantiers similaires et les révisions successives. Une estimation non corroborée reste une zone de risque, et une révision à la hausse du coût total diminuerait l\'avancement et le chiffre d\'affaires.',
    },
    {
      question: 'Vous venez de qualifier l\'audit contractuel de « non normé ». Exact ?',
      expected:
        'Non, je nuancerais : le contrat et les termes de référence fixent le cadre, et le cabinet applique sa méthodologie et ses normes professionnelles (indépendance, qualité). Ce qui change, c\'est l\'objectif et l\'absence d\'opinion de certification sur les comptes annuels, pas l\'absence de méthode.',
    },
    {
      question: 'En une phrase : pourquoi documenter au fil de l\'eau plutôt qu\'à la fin ?',
      expected:
        'Parce que la mémoire des sources et des références s\'évapore, et qu\'une piste d\'audit reconstituée après coup ne permet plus à un relecteur de refaire le travail — la preuve devient invérifiable.',
    },
  ],
  evaluation: {
    criteria: [
      {
        label: 'Qualification des cadres de mission',
        description: 'Sait distinguer audit légal et contractuel (destinataire, base, objectif, rapport) avant de décrire les travaux.',
      },
      {
        label: 'Maîtrise de la chronologie de mission',
        description: 'Restitue sans erreur la chaîne planification → connaissance → risques → stratégie → preuves → synthèse → documentation → conclusions et limites.',
      },
      {
        label: 'Lecture des risques sectoriels',
        description: 'Identifie stocks, marges et cut-off en distribution ; avancement, situations de travaux et provisions en BTP.',
      },
      {
        label: 'Chiffrage des incidences',
        description: 'Calcule et exprime les incidences en montants (écarts valorisés, chiffre d\'affaires à reclasser, provisions).',
      },
      {
        label: 'Culture des éléments probants',
        description: 'Hiérarchise les sources, corrobore et reconnaît les limites (assurance raisonnable).',
      },
      {
        label: 'Conscience référentielle',
        description: 'Sait que le CGNC marocain diffère du PCG français et traduit les libellés plutôt que de transposer les numéros.',
      },
      {
        label: 'Honnêteté pédagogique',
        description: 'Présente le scénario comme un entraînement, formule les démarches au conditionnel et ne revendique aucune expérience vécue.',
      },
    ],
  },
}
