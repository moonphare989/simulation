// =====================================================================
// Fiche 3 — Centrale Danone · Mission 1
// Saisie et imputation comptable des factures (≈ 150 factures / mois)
// =====================================================================
import type { Mission } from '@/lib/types'
import { DANONE_REFERENCE, FICHE3_DISCLAIMER, danoneBase } from './_commun'

export const danoneM1: Mission = {
  ...danoneBase(1),
  id: 'danone-m1',
  title: 'Saisie et imputation comptable des factures',
  summary:
    'Traiter environ 150 factures par mois : contrôler la forme et le fond de chaque pièce, choisir le journal, imputer en comptabilité générale et auxiliaire, isoler la TVA au taux applicable (20 % ou 5,5 %), rattacher chaque opération à la bonne période et alimenter la piste d’audit. Scénario fictif : la centrale laitière « Centrale Danone » sert uniquement de décor pédagogique.',
  referenceData: [
    FICHE3_DISCLAIMER,
    ...DANONE_REFERENCE,
    'Mission 1 : environ 150 factures par mois à saisir et imputer (achats, ventes, avoirs, notes de frais), avec contrôle des mentions obligatoires, des calculs HT/TVA/TTC et du compte auxiliaire.',
  ],
  comprehension: {
    intro:
      'La saisie comptable est la porte d’entrée de l’information financière : une facture mal contrôlée, mal imputée ou rattachée à la mauvaise période se propage jusqu’aux états financiers, à la TVA déclarée et aux tableaux de bord de gestion. Dans ce scénario fictif, le service comptabilité de la centrale laitière traite environ 150 factures par mois (juin à septembre 2024), en distinguant les factures d’achat, les factures de vente, les avoirs et les notes de frais. Chaque pièce suit le même circuit : contrôle des mentions et du fond, choix du journal, imputation en compte général et en compte auxiliaire, isolation de la TVA déductible ou collectée, puis archivage référencé. L’objectif pédagogique est double : savoir exécuter la saisie avec justesse, et savoir expliquer en entretien pourquoi chaque contrôle existe (exhaustivité, réalité, rattachement à la période, piste d’audit fiable). Référentiel utilisé : plan comptable général français (PCG) ; TVA de référence 20 %, et 5,5 % pour les ventes de produits alimentaires — le taux applicable doit être précisé dans chaque cas.',
    definitions: [
      { term: 'Facture', definition: 'Pièce justificative émise par un vendeur (ou un prestataire) qui détaille les biens ou services livrés, les prix, la TVA et les conditions de règlement. En comptabilité française, elle fonde l’enregistrement de l’opération.' },
      { term: 'Mentions obligatoires', definition: 'Informations exigées sur une facture en droit fiscal français : identité et adresse des parties, SIREN, numéro de TVA intracommunautaire de l’émetteur, numéro de facture unique et séquentiel, date, désignation détaillée, quantités, prix unitaires, taux et montant de TVA, total HT et TTC. Une mention manquante ou inexacte peut entraîner une amende fiscale et, en pratique, fragiliser la déduction de TVA.' },
      { term: 'Facture d’achat', definition: 'Facture reçue d’un fournisseur : elle constate une charge ou une immobilisation et une dette fournisseur (comptes 4xx). Elle se comptabilise au journal des achats (ou journal fournisseurs).' },
      { term: 'Facture de vente', definition: 'Facture émise vers un client : elle constate un produit (comptes 7xx) et une créance client (411xxx), la TVA étant collectée (445710). Elle se comptabilise au journal des ventes.' },
      { term: 'Avoir', definition: 'Document émis pour rectifier une facture : retour de marchandises, remise accordée après facturation, erreur de prix. Chez l’émetteur, il s’enregistre en sens inverse de la facture d’origine ; chez le destinataire, il réduit la dette ou la charge.' },
      { term: 'Note de frais', definition: 'Récapitulatif des dépenses avancées par un collaborateur (transport, hébergement, restauration), justifié par des pièces, validé par son manager puis remboursé. Ce n’est pas une facture fournisseur : le tiers est le salarié (compte de tiers du personnel) et la TVA n’est déductible que si elle figure sur les justificatifs au taux réellement applicable.' },
      { term: 'Journal comptable', definition: 'Registre chronologique regroupant les écritures par nature : journal des achats, des ventes, de banque, de caisse et d’opérations diverses (OD). Le choix du journal dépend de la nature de la pièce, pas de la préférence du comptable.' },
      { term: 'Imputation comptable', definition: 'Choix des comptes (général et auxiliaire) mouvementés par une écriture. Une imputation juste traduit fidèlement la nature économique de l’opération : charge, immobilisation, produit, créance ou dette.' },
      { term: 'Compte général / compte auxiliaire', definition: 'Le compte général (ex. 612000) porte la nature de l’opération ; le compte auxiliaire (ex. 401LOC pour le fournisseur Locabox, 411LEM pour le client Lemoine) individualise le tiers pour le lettrage, les relances et les règlements. Saisir sans auxiliaire, c’est rendre le compte fournisseur/client inexploitable.' },
      { term: 'Débit / crédit', definition: 'Les deux sens d’écriture d’un compte. Au PCG : les comptes de charges et d’actif augmentent au débit ; les comptes de produits et de passif augmentent au crédit. Chaque écriture équilibrée respecte l’égalité débit = crédit.' },
      { term: 'Charge (classe 6)', definition: 'Consommation de l’exercice (achats, services extérieurs, charges de personnel…) : le bénéfice de la dépense est immédiatement consommé.' },
      { term: 'Immobilisation (classe 2)', definition: 'Bien durable (matériel, mobilier, logiciels) utilisé plusieurs exercices et inscrit à l’actif, puis amorti. La frontière charge/immobilisation dépend de la durée d’utilisation et de la politique interne (seuil de valeur unitaire).' },
      { term: 'TVA déductible / TVA collectée', definition: 'La TVA facturée sur les achats est déductible (445660 sur biens et services courants, 445620 sur immobilisations) ; la TVA facturée aux clients est collectée (445710). La TVA sur notes de frais n’est déductible qu’au taux figurant sur les justificatifs. L’exigibilité suit en principe la facturation (livraison/prestation), sauf régime particulier — à préciser selon le régime de TVA de l’entité.' },
      { term: 'Rattachement à la bonne période (cut-off)', definition: 'Principe de rattachement des charges et produits à la période de consommation ou de réalisation, indépendamment de la date de facturation ou d’encaissement. Une facture de juin couvrant juillet doit être traitée en conséquence (compte de régularisation 47x/48x le cas échéant).' },
      { term: 'Piste d’audit', definition: 'Chaîne documentaire qui permet de relier une écriture comptable à sa pièce d’origine datée et identifiée (et inversement). Sans pièce, une écriture n’est pas justifiable ; sans écriture, une pièce est inerte.' },
    ],
    keyPoints: [
      'Une écriture ne se saisit jamais sans pièce contrôlée : contrôle de forme (mentions), puis de fond (réalité, montants, doublon).',
      'Le journal se choisit selon la nature de la pièce : achats, ventes, banque ou opérations diverses.',
      'Toute écriture est équilibrée : total des débits = total des crédits.',
      'Charge (classe 6) et immobilisation (classe 2) ne se confondent jamais : durée d’utilisation et politique interne de seuil décident.',
      'La TVA s’isole toujours : 445660 / 445620 à l’achat, 445710 à la vente — au taux réellement applicable (20 %, 5,5 % pour les produits alimentaires, 10 % sur certaines prestations).',
      'Chaque facture de tiers doit porter un compte auxiliaire : sans ventilation, pas de lettrage, ni de relance possible.',
      'La facture se rattache à sa période de consommation, pas à sa date d’arrivée sur le bureau.',
      'Les calculs se vérifient avant saisie : HT + TVA = TTC, et TVA = HT × taux.',
      'Les cas ambigus se traitent par la demande d’information, jamais par l’à-peu-près.',
      'Numéro de pièce, date de saisie et compte auxiliaire alimentent la piste d’audit : la saisie est un acte de traçabilité.',
    ],
  },
  objectives: {
    why:
      'Environ 150 factures par mois ne pardonnent pas l’improvisation : sans méthode, les erreurs d’imputation, de TVA et de périodicité s’accumulent et polluent la balance, la déclaration de TVA et les tableaux de bord. Cette mission sécurise la chaîne « pièce → écriture → piste d’audit », première brique d’une comptabilité fiable et auditable.',
    infoSought: [
      'La nature exacte de chaque pièce : achat, vente, avoir, note de frais, ou cas ambigu à clarifier.',
      'Les mentions obligatoires et la cohérence arithmétique de la facture (HT, TVA, TTC).',
      'Le compte général pertinent (charge ou immobilisation) et le compte auxiliaire du tiers.',
      'Le taux de TVA applicable et sa base (20 %, 5,5 % produits alimentaires, 10 % sur certaines prestations).',
      'La période de rattachement de la charge ou du produit.',
      'L’absence de doublon (facture déjà saisie ou scannée deux fois).',
      'Les références croisées : bon de commande, bon de livraison/réception, numéro de facture.',
    ],
    risksCovered: [
      'Comptabilisation d’une facture fictive ou non due (absence de bon de commande/réception).',
      'Erreur de sens débit/crédit inversant le sens de l’opération.',
      'Confusion charge / immobilisation faussant le résultat et l’actif.',
      'TVA omise, sur-comptée ou comptée au mauvais taux (risque fiscal, déclaration erronée).',
      'Compte auxiliaire absent ou erroné : lettrage et relances impossibles.',
      'Doublon de saisie gonflant charges et dettes.',
      'Rattachement à la mauvaise période (cut-off mensuel ou annuel).',
      'Perte de pièce ou rupture de la piste d’audit (écriture introuvable après coup).',
      'Comptabilisation « à l’estime » d’une pièce ambiguë au lieu de demander l’information.',
    ],
  },
  preparation: {
    documents: [
      'Le plan comptable interne et la nomenclature des comptes auxiliaires (fournisseurs, clients).',
      'La liste des journaux et leurs règles d’utilisation (achats, ventes, banque, OD).',
      'Les factures du mois à traiter (papier et dématérialisées) avec leur bordereau de réception.',
      'Les bons de commande et bons de réception associés (pour le contrôle de fond).',
      'Le barème de TVA applicable à l’activité : 5,5 % sur les produits alimentaires vendus, 20 % sur la plupart des achats, 10 % sur certaines prestations.',
      'La politique d’immobilisation de l’entité (seuil de valeur unitaire, durée d’utilisation).',
      'Le calendrier de cut-off mensuel (date de blocage des journaux du mois).',
      'Le modèle de note de frais et la charte de remboursement.',
      'La procédure de validation des écritures (visa du responsable comptable).',
      'Le mode d’archivage et la nomenclature des pièces (numérotation, scan, répertoires mensuels).',
    ],
    questionsToAsk: [
      'Quel est mon périmètre exact : uniquement la saisie, ou aussi le contrôle de fond ?',
      'Quel seuil interne sépare la charge de l’immobilisation pour le petit matériel ?',
      'Comment traiter une facture reçue sans bon de commande ni bon de réception : rejet, validation par le chef de service, ou compte d’attente ?',
      'À quelle date les journaux du mois sont-ils verrouillés, et qui peut déverrouiller ?',
      'Quels taux de TVA appliquer aux différentes familles de produits et de prestations ?',
      'Comment gérer les factures ambiguës : fichier d’attente, mailbox, ticket interne ?',
      'À qui faire valider une écriture de correction sur un journal déjà clôturé ?',
    ],
    precautions: [
      'Ne jamais saisir une pièce incomplète ou illisible : la remettre en circulation avec une question écrite.',
      'Vérifier le doublon avant tout (numéro de facture, montant, fournisseur) : une même facture peut arriver par deux canaux.',
      'Recalculer HT, TVA et TTC avant imputation — l’erreur arithmétique du fournisseur ne doit pas entrer dans les comptes.',
      'Conserver la trace de ses questions et réponses : une clarification orale se double d’un mail de confirmation.',
      'Respecter le cut-off : une charge de juillet saisie en juin fausse les deux mois.',
    ],
  },
  method: [
    { title: 'Réceptionner et référencer la pièce', description: 'Enregistrer l’arrivée de la facture (bordereau, date de réception, canal papier ou dématérialisé) et lui affecter un identifiant unique de suivi.', why: 'La date de réception alimente le délai de traitement ; la référence unique empêche la perte et le doublon.' },
    { title: 'Contrôler la forme (mentions obligatoires)', description: 'Vérifier numéro de facture unique, date, identité et adresse des parties, SIREN, numéro de TVA intracommunautaire de l’émetteur, désignation, quantités, prix, taux et montant de TVA, totaux HT/TTC, conditions de règlement.', why: 'Une facture non conforme fragilise la déduction de TVA et expose à une amende fiscale.' },
    { title: 'Contrôler le fond', description: 'Rapprocher la facture du bon de commande et du bon de réception/livraison : quantités, prix, référence, bénéficiaire, période.', why: 'Ce contrôle atteste que l’opération est réelle, autorisée et conforme à ce qui a été commandé et reçu.' },
    { title: 'Vérifier l’absence de doublon', description: 'Rechercher le couple fournisseur + numéro de facture (et le montant) dans les saisies du mois et des mois précédents.', why: 'Le doublon est l’erreur la plus fréquente et la plus coûteuse en temps de correction.' },
    { title: 'Qualifier la nature de la pièce', description: 'Déterminer s’il s’agit d’une facture d’achat, d’une facture de vente, d’un avoir, d’une note de frais ou d’un cas ambigu à clarifier.', why: 'La nature détermine le journal, le sens de l’écriture et les comptes mobilisés.' },
    { title: 'Identifier la période de rattachement', description: 'Comparer la date de facturation, la période de prestation et le cut-off mensuel en cours.', why: 'Le rattachement à la bonne période conditionne la sincérité des résultats mensuels et annuels.' },
    { title: 'Choisir le journal', description: 'Achats pour les factures fournisseurs, ventes pour les factures clients et avoirs associés, opérations diverses pour les notes de frais et les régularisations, banque pour les règlements.', why: 'Le journal est la première clé de tri de la piste d’audit : une pièce au mauvais journal devient difficile à retrouver.' },
    { title: 'Imputer en comptabilité générale', description: 'Sélectionner le compte de charge, d’immobilisation ou de produit correspondant à la nature réelle de l’opération, en respectant le plan comptable interne.', why: 'L’imputation traduit l’économie de l’opération : elle façonne le résultat, l’actif et les tableaux de bord.' },
    { title: 'Imputer en comptabilité auxiliaire', description: 'Rattacher l’écriture au compte auxiliaire du fournisseur ou du client concerné, jamais au compte général 401000/411000 seul.', why: 'Sans auxiliaire : pas de lettrage, pas de relance, pas de rapprochement des règlements.' },
    { title: 'Isoler la TVA au bon compte et au bon taux', description: 'Calculer la TVA déductible (445660 biens et services courants, 445620 immobilisations) ou collectée (445710) en appliquant le taux réellement applicable et en vérifiant HT × (1 + taux) = TTC.', why: 'La TVA alimente directement la déclaration : un mauvais taux ou un mauvais sous-compte crée un risque fiscal.' },
    { title: 'Saisir l’écriture équilibrée', description: 'Enregistrer débits et crédits, libellé explicite, date de pièce, référence du justificatif et compte auxiliaire.', why: 'Une écriture équilibrée, libellée et référencée est retrouvable et justifiable — c’est la piste d’audit.' },
    { title: 'Contrôler après saisie', description: 'Relire l’écriture, vérifier l’équilibre, le sens, les montants et la cohérence avec la pièce ; faire viser les écritures atypiques.', why: 'La relecture immédiate corrige l’erreur au coût le plus faible ; après clôture, la correction coûte dix fois plus.' },
    { title: 'Archiver la pièce référencée', description: 'Classer ou scanner la facture avec son numéro, dans le répertoire du mois, en conservant le lien écriture ↔ pièce.', why: 'La conservation organisée des pièces (durées fiscales et commerciales de conservation) ferme la boucle de la piste d’audit fiable.' },
  ],
  exercises: [
    {
      id: 'danone-m1-ex1',
      title: 'Facture d’achat à comptabiliser',
      cycle: 'Achats',
      context:
        'Vous recevez la facture de crédit-bail mensuelle du chariot élévateur du quai d’expédition. Contrôlez la pièce, puis déterminez l’écriture à passer au journal des achats pour juin 2024. Montants et sociétés fictifs.',
      risks: ['Erreur d’imputation', 'TVA mal isolée', 'Écriture non justifiable'],
      documents: [
        {
          kind: 'text',
          name: 'Facture fournisseur FA-2024-0871 — Leaselys Crédit-Bail (fictive)',
          content:
            'FACTURE N° FA-2024-0871\n' +
            'Émetteur : Leaselys Crédit-Bail — 14 rue des Forgerons, 69007 Lyon\n' +
            'SIREN 812 447 032 — N° TVA intracom. FR 41 812447032\n' +
            'Client : Centrale Danone — Service comptabilité, 12 quai de la Brasserie, 75015 Paris\n' +
            'Date d’émission : 28/06/2024 — Date de réception : 01/07/2024\n' +
            'Désignation : redevance de crédit-bail mobilier — chariot élévateur électrique CE-24\n' +
            'Période couverte : 01/06/2024 au 30/06/2024 — Échéance : 27/07/2024 (30 jours)\n' +
            'Montant HT ...................... 1 240,00 €\n' +
            'TVA 20 % ......................... 248,00 €\n' +
            'TOTAL TTC ....................... 1 488,00 €\n' +
            'Règlement par virement — pénalités de retard : 3 × taux d’intérêt légal,\n' +
            'indemnité forfaitaire de recouvrement : 40 €.',
          note: 'Document fictif à visée pédagogique.',
        },
      ],
      questions: [
        {
          id: 'danone-m1-ex1-q1',
          question: 'Quelle écriture convient-il de passer au journal des achats ?',
          type: 'mcq',
          options: [
            'Débit 612000 Redevances de crédit-bail 1 240,00 € ; Débit 445660 TVA déductible sur autres biens et services 248,00 € ; Crédit 401LEA Leaselys 1 488,00 €',
            'Débit 401LEA Leaselys 1 488,00 € ; Crédit 612000 Redevances de crédit-bail 1 240,00 € ; Crédit 445660 TVA déductible 248,00 €',
            'Débit 612000 Redevances de crédit-bail 1 240,00 € ; Débit 445710 TVA collectée 248,00 € ; Crédit 401LEA Leaselys 1 488,00 €',
            'Débit 612000 Redevances de crédit-bail 1 488,00 € ; Crédit 401LEA Leaselys 1 488,00 €',
          ],
          expected: '0',
          explanation:
            'La redevance de crédit-bail mobilier est une charge (612xxx) ; la TVA facturée à 20 % est déductible sur biens et services courants (445660) ; la dette est portée par le compte auxiliaire fournisseur 401LEA. Total débit 1 240,00 + 248,00 = 1 488,00 = crédit : l’écriture est équilibrée. L’option 2 inverserait TVA collectée/déductible (on ne collecte pas la TVA d’un fournisseur), l’option 3 enregistre le TTC en charge sans isoler la TVA, l’option 1 inverse le sens de l’écriture.',
        },
        {
          id: 'danone-m1-ex1-q2',
          question: 'Vérifiez le total TTC de la facture : quel montant devrait s’afficher ?',
          type: 'numeric',
          expected: 1488,
          explanation:
            'HT 1 240,00 € × 1,20 = 1 488,00 €. La facture est arithmétiquement cohérente : TTC = HT + TVA = 1 240,00 + 248,00 = 1 488,00 €. Ce contrôle systématique, avant toute saisie, aurait détecté par exemple une inversion de chiffres.',
        },
        {
          id: 'danone-m1-ex1-q3',
          question: 'Quel montant de TVA déductible cette facture génère-t-elle ?',
          type: 'numeric',
          expected: 248,
          explanation:
            'TVA = HT × taux = 1 240,00 × 0,20 = 248,00 €. À isoler au compte 445660, sous réserve du régime de TVA de l’entité et de la conformité formelle de la facture (numéro de TVA de l’émetteur notamment).',
        },
        {
          id: 'danone-m1-ex1-q4',
          question: 'Avant de saisir cette facture, quels contrôles préalables auriez-vous dû réaliser ? Décrivez votre check-list.',
          type: 'open',
          keywords: ['mentions', 'numéro de facture', 'TVA', 'montant', 'doublon', 'bon de commande', 'période'],
          explanation:
            'Dans ce scénario, on aurait vérifié : (1) la forme — mentions obligatoires lisibles, numéro unique, SIREN et n° TVA de l’émetteur, taux de 20 % appliqué à la bonne base ; (2) l’arithmétique — 1 240,00 × 1,20 = 1 488,00 € ; (3) le fond — contrat de crédit-bail signé, bien réceptionné et en service, redevance conforme au contrat ; (4) l’absence de doublon (recherche fournisseur + n° de facture) ; (5) la période couverte (juin, cohérente avec le mois de rattachement) ; (6) le compte auxiliaire 401LEA à renseigner. Chaque contrôle manqué se paie plus tard : risque fiscal (mentions), dette erronée (doublon), cut-off faux (période).',
        },
      ],
      solutionSummary:
        'Facture conforme et équilibrée : HT 1 240,00 €, TVA 20 % 248,00 €, TTC 1 488,00 €. Écriture au journal des achats : débit 612000 (1 240,00), débit 445660 (248,00), crédit 401LEA (1 488,00). Trois pièges évités : TVA collectée au lieu de déductible, TTC en charge sans isolation de TVA, compte général sans auxiliaire. À l’oral, insister sur la check-list « forme → calcul → fond → doublon → période → auxiliaire », résumée en quelques secondes.',
      interviewTips: [
        'Annoncez la check-list avant le détail : le recruteur évalue la méthode, pas la mémoire des numéros de comptes.',
        'Illustrez d’un exemple chiffré (HT × 1,20 = TTC) : montrer que vous calculez avant de saisir.',
      ],
    },
    {
      id: 'danone-m1-ex2',
      title: 'Facture de vente à comptabiliser',
      cycle: 'Ventes',
      context:
        'Côté ventes maintenant : la centrale facture la livraison hebdomadaire d’une supérette. Produits alimentaires : pensez au taux de TVA applicable. Montants et sociétés fictifs.',
      risks: ['Taux de TVA erroné', 'Créance mal enregistrée', 'Produit mal qualifié'],
      documents: [
        {
          kind: 'text',
          name: 'Facture client FV-2024-0562 — Centrale Danone vers Supérette Lemoine (fictive)',
          content:
            'FACTURE N° FV-2024-0562\n' +
            'Émettrice : Centrale Danone — Service facturation, 12 quai de la Brasserie, 75015 Paris\n' +
            'SIREN 512 003 118 — N° TVA intracom. FR 65 512003118\n' +
            'Client : Supérette Lemoine — 3 place du Marché, 89100 Sens — compte auxiliaire 411LEM\n' +
            'Date de facture : 02/07/2024 — Livraison du 01/07/2024 (BL n° BL-2024-0879)\n' +
            'Yaourts nature 125 g, cartons de 12 : 2 000 unités × 2,40 € = 4 800,00 €\n' +
            'Fromages frais 100 g, packs de 6 : 1 900 unités × 2,00 € = 3 800,00 €\n' +
            'Total HT ....................... 8 600,00 €\n' +
            'TVA 5,5 % (produits alimentaires) .. 473,00 €\n' +
            'TOTAL TTC ...................... 9 073,00 €\n' +
            'Règlement : 30 jours fin de mois.',
          note: 'Document fictif à visée pédagogique.',
        },
      ],
      questions: [
        {
          id: 'danone-m1-ex2-q1',
          question: 'Quelle écriture passe-t-on au journal des ventes ?',
          type: 'mcq',
          options: [
            'Débit 411LEM Supérette Lemoine 9 073,00 € ; Crédit 701000 Ventes de produits finis 8 600,00 € ; Crédit 445710 TVA collectée 473,00 €',
            'Crédit 411LEM Supérette Lemoine 9 073,00 € ; Débit 701000 Ventes de produits finis 8 600,00 € ; Débit 445710 TVA collectée 473,00 €',
            'Débit 411LEM Supérette Lemoine 10 320,00 € ; Crédit 701000 Ventes de produits finis 8 600,00 € ; Crédit 445710 TVA collectée 1 720,00 €',
            'Débit 411LEM Supérette Lemoine 9 073,00 € ; Crédit 707000 Ventes de marchandises 8 600,00 € ; Crédit 445710 TVA collectée 473,00 €',
          ],
          expected: '0',
          explanation:
            'La créance client (411LEM) s’enregistre au TTC ; le produit (701000 ventes de produits finis, puisque la centrale vend sa propre production) au HT ; la TVA au taux de 5,5 % est collectée en 445710. L’option 3 appliquerait un taux de 20 % (8 600,00 × 0,20 = 1 720,00 €) — erreur fréquente quand le logiciel pré-remplit le taux normal ; l’option 4 confond produits finis (701) et marchandises revendues en l’état (707).',
        },
        {
          id: 'danone-m1-ex2-q2',
          question: 'Quel montant de TVA collectée cette vente génère-t-elle ?',
          type: 'numeric',
          expected: 473,
          explanation:
            'TVA = 8 600,00 × 0,055 = 473,00 €. Les livraisons de denrées alimentaires destinées à l’alimentation humaine relèvent du taux réduit de 5,5 % en TVA française (taux de référence à confirmer selon la nature exacte du produit et le régime applicable).',
        },
        {
          id: 'danone-m1-ex2-q3',
          question: 'Quel total TTC le client doit-il ?',
          type: 'numeric',
          expected: 9073,
          explanation: 'TTC = 8 600,00 × 1,055 = 9 073,00 €. Vérification croisée : 4 800,00 + 3 800,00 = 8 600,00 € HT ; 8 600,00 + 473,00 = 9 073,00 € TTC.',
        },
        {
          id: 'danone-m1-ex2-q4',
          question: 'Le logiciel de facturation propose par défaut la TVA à 20 % : pourquoi faut-il ici retenir 5,5 % ?',
          type: 'mcq',
          options: [
            'Parce que les yaourts et fromages frais sont des denrées alimentaires destinées à l’alimentation humaine, relevant du taux réduit de TVA en droit français',
            'Parce que le client est une petite supérette et bénéficierait d’un taux préférentiel',
            'Parce que la livraison a lieu en juillet et que le taux baisse l’été (fiction totale)',
            'Parce que la TVA sur les ventes est toujours au taux le plus bas',
          ],
          expected: '0',
          explanation:
            'Le taux de TVA dépend de la nature du bien ou du service, jamais du client ni de la saison. Les denrées alimentaires destinées à l’alimentation humaine relèvent du taux réduit (5,5 %) — à distinguer de la restauration sur place (10 %). Un taux erroné fausse simultanément la créance client, la TVA collectée et la déclaration.',
        },
        {
          id: 'danone-m1-ex2-q5',
          question: 'Quels contrôles spécifiques à une facture de vente auriez-vous réalisés avant enregistrement ?',
          type: 'open',
          keywords: ['commande', 'bon de livraison', 'quantités', 'prix', 'client', 'numéro de TVA'],
          explanation:
            'On aurait rapproché la facture : (1) de la commande client (conditions, tarifs) ; (2) du bon de livraison BL-2024-0879 (quantités réellement livrées : 2 000 et 1 900 unités) ; (3) des prix du tarif client ; (4) de l’identité et de l’adresse de facturation du client (compte auxiliaire 411LEM) ; (5) du numéro de TVA intracommunautaire de l’émettrice (mentions de nos propres factures) ; (6) de l’absence de facture déjà émise pour cette livraison. Côté ventes, la qualité de la facture émise engage aussi l’entreprise vis-à-vis de son client et du fisc.',
        },
      ],
      solutionSummary:
        'Créance 9 073,00 € (TTC) chez le client 411LEM ; produit 8 600,00 € en 701000 ; TVA collectée 473,00 € en 445710 au taux réduit de 5,5 % applicable aux denrées alimentaires. Le piège central de l’exercice est le taux : 20 % par défaut du logiciel donnerait 1 720,00 € de TVA et 10 320,00 € de TTC — soit 647,00 € de trop facturé au client. À l’oral : le taux de TVA se déduit de la nature du bien, pas des habitudes du logiciel.',
      interviewTips: [
        'Le taux de TVA alimentaire (5,5 %) est un grand classique d’entretien en comptabilité agroalimentaire : sachez le justifier.',
        'Soulignez le contrôle facture ↔ bon de livraison : c’est l’équivalent ventes du 3-way match achats.',
      ],
    },
    {
      id: 'danone-m1-ex3',
      title: 'Avoir client et note de frais',
      cycle: 'Ventes / Notes de frais',
      context:
        'Deux pièces inhabituelles arrivent le même jour : un avoir client pour retours de produits et la note de frais d’un commercial. Deux documents, deux logiques comptables différentes. Montants et personnes fictifs.',
      risks: ['Avoir passé en facture', 'TVA de note de frais surévaluée', 'Confusion tiers fournisseur / salarié'],
      documents: [
        {
          kind: 'text',
          name: 'Avoir AV-2024-0312 — Centrale Danone vers Épicerie Bianchi (fictif)',
          content:
            'AVOIR N° AV-2024-0312\n' +
            'Émettrice : Centrale Danone — Service facturation\n' +
            'Client : Épicerie Bianchi — 9 rue Basse, 21000 Dijon — compte auxiliaire 411BIA\n' +
            'Date : 24/07/2024 — Réf. facture d’origine : FV-2024-0518 du 10/07/2024\n' +
            'Motif : retour de 240 cartons de yaourts nature 125 g (chaîne du froid interrompue)\n' +
            '240 cartons × 1,75 € ............ 420,00 € HT\n' +
            'TVA 5,5 % ............................ 23,10 €\n' +
            'NET À VOTRE CREDIT ............... 443,10 €\n' +
            'Imputation : sur le prochain règlement du client.',
          note: 'Document fictif à visée pédagogique.',
        },
        {
          kind: 'text',
          name: 'Note de frais NF-2024-158 — S. Garnier (fictive)',
          content:
            'NOTE DE FRAIS N° NF-2024-158\n' +
            'Collaborateur : S. Garnier, commercial grands comptes\n' +
            'Déplacement Paris – Lyon, 18 et 19/06/2024 (rendez-vous client)\n' +
            'Train A/R 2e classe ........ 89,10 € TTC (dont TVA 10 % : 8,10 € — HT 81,00 €)\n' +
            'Hôtel 1 nuit .................. 128,70 € TTC (dont TVA 10 % : 11,70 € — HT 117,00 €)\n' +
            'Repas du soir ................. 45,10 € TTC (dont TVA 10 % : 4,10 € — HT 41,00 €)\n' +
            'Total HT 239,00 € — TVA 10 % : 23,90 € — Total TTC 262,90 €\n' +
            'Justificatifs joints : billets, facture hôtel, ticket restaurant.\n' +
            'Visa manager : en attente — remboursement demandé par virement.',
          note: 'Document fictif à visée pédagogique. Le visa manager manque : à traiter avant comptabilisation.',
        },
      ],
      questions: [
        {
          id: 'danone-m1-ex3-q1',
          question: 'Quelle écriture convient pour l’avoir AV-2024-0312 au journal des ventes ?',
          type: 'mcq',
          options: [
            'Débit 701000 Ventes de produits finis 420,00 € ; Débit 445710 TVA collectée 23,10 € ; Crédit 411BIA Épicerie Bianchi 443,10 €',
            'Crédit 701000 Ventes de produits finis 420,00 € ; Crédit 445710 TVA collectée 23,10 € ; Débit 411BIA Épicerie Bianchi 443,10 €',
            'Débit 601000 Achats de matières premières 420,00 € ; Débit 445660 TVA déductible 23,10 € ; Crédit 401BIA Épicerie Bianchi 443,10 €',
            'Aucune écriture : un avoir non réclamé par le client ne se comptabilise pas',
          ],
          expected: '0',
          explanation:
            'Un avoir émis se comptabilise en sens inverse de la facture d’origine : le produit est débité (annulation partielle de la vente), la TVA collectée est débitée (elle disparaît de la dette fiscale) et la créance client est créditée (le client nous doit moins). L’option 2 reproduit une facture ; l’option 3 traite l’avoir comme un achat ; l’option 4 est fausse : l’avoir réduit une créance déjà constatée, il doit être enregistré pour que le compte 411BIA reste exact.',
        },
        {
          id: 'danone-m1-ex3-q2',
          question: 'Le visa du manager étant en attente, quelle est la bonne conduite pour la note de frais ?',
          type: 'mcq',
          options: [
            'Comptabiliser immédiatement : le remboursement est légitime puisque les justificatifs sont joints',
            'Mettre la note en attente, demander le visa du manager, puis comptabiliser une fois validée (débit 625100 pour 239,00 € HT, débit 445660 pour 23,90 € de TVA, crédit du compte de tiers du personnel)',
            'Comptabiliser le TTC en charge et récupérer la TVA plus tard sans justificatif',
            'Refuser la note : les notes de frais ne sont pas des pièces comptables',
          ],
          expected: '1',
          explanation:
            'Une note de frais exige : des justificatifs (présents ici), l’autorisation du responsable (absente : à obtenir avant saisie), puis l’enregistrement HT/TVA au compte 625100 Voyages et déplacements, la TVA de 10 % (transport de voyageurs, hébergement, restauration) n’étant déductible que sur justificatif au taux réel. Le règlement transite par un compte de tiers du personnel (ex. 425000) avant le virement bancaire — selon la procédure interne. Comptabiliser sans visa, c’est contourner le contrôle interne.',
        },
        {
          id: 'danone-m1-ex3-q3',
          question: 'Quel montant TTC total la note de frais représente-t-elle ?',
          type: 'numeric',
          expected: 262.9,
          explanation: '89,10 + 128,70 + 45,10 = 262,90 € TTC. Contrôle par la TVA : HT 239,00 + TVA 23,90 = 262,90 €. Les trois prestations relèvent du taux intermédiaire de 10 % (transport de voyageurs, hébergement, restauration).',
        },
        {
          id: 'danone-m1-ex3-q4',
          question: 'Expliquez les différences de traitement comptable entre une facture d’achat, un avoir client et une note de frais.',
          type: 'open',
          keywords: ['sens', 'émetteur', 'tiers', 'TVA', 'justificatif', 'validation'],
          explanation:
            'Trois différences structurantes. (1) Le sens : la facture d’achat constate une charge/dette ; l’avoir client constate l’annulation partielle d’un produit/créance, en sens inverse de la facture d’origine. (2) Le tiers : la facture mobilise un compte fournisseur (401xxx) ou client (411xxx) ; la note de frais mobilise un compte de tiers du personnel (remboursement au salarié) — le salarié n’est pas un fournisseur. (3) La TVA : déductible sur facture d’achat conforme (445660/445620), collectée sur la facture de vente puis déduite sur l’avoir ; sur note de frais, déductible uniquement au taux figurant sur les justificatifs. Enfin, la validation diffère : bon à payer fournisseur, ajustement client automatique, visa manager pour la note de frais. Dans ce scénario, on aurait donc traité chaque pièce selon sa logique propre, en refusant tout traitement « passe-partout ».',
        },
      ],
      solutionSummary:
        'Avoir : débit 701000 (420,00), débit 445710 (23,10), crédit 411BIA (443,10) — sens inverse de la facture, TVA 5,5 %. Note de frais : après visa manager, débit 625100 (239,00 HT), débit 445660 (23,90 de TVA à 10 %), crédit du compte de tiers du personnel (262,90) puis virement. Les trois pièges : passer l’avoir comme une facture, confondre le salarié avec un fournisseur, et compter la TVA « au doigt mouillé » au lieu de lire les justificatifs.',
      interviewTips: [
        '« Un avoir se saisit en sens inverse de la facture » : formule courte à retenir.',
        'Sur les notes de frais, citez le trio justificatif / visa manager / TVA au taux réel : c’est ce que cherche le recruteur.',
      ],
    },
    {
      id: 'danone-m1-ex4',
      title: 'Cas ambigus : avant de saisir, demander — jamais deviner',
      cycle: 'Achats',
      context:
        'Trois factures volontairement ambiguës. Dans chaque situation, une information manque ou un choix d’imputation dépend d’une règle interne. Test : résistez à la tentation de saisir « quelque chose ».',
      risks: ['Saisie à l’estime', 'Cut-off mensuel erroné', 'Immobilisation/charge arbitraire', 'TVA déduite sur facture non conforme'],
      documents: [
        {
          kind: 'text',
          name: 'Pièce A — Facture F-2024-778, prestation à cheval sur deux mois (fictive)',
          content:
            'FACTURE N° F-2024-778\n' +
            'Fournisseur : TechniFroid Services — maintenance des chambres froides\n' +
            'Prestation : contrat de maintenance préventive du 24/06/2024 au 07/07/2024 (14 jours)\n' +
            'Montant HT 980,00 € — TVA 20 % 196,00 € — TTC 1 176,00 €\n' +
            'Reçue le 26/06/2024, alors que le journal de juin est encore ouvert.\n' +
            'Imputation suggérée par le logiciel : 615000 Entretien et réparations.',
          note: 'Document fictif à visée pédagogique.',
        },
        {
          kind: 'text',
          name: 'Pièce B — Facture F-2024-790, bien mixte charge/immobilisation (fictive)',
          content:
            'FACTURE N° F-2024-790\n' +
            'Fournisseur : Locabox Plastiques\n' +
            'Objet : « ensemble complet » — 30 rayonnages mobiles de réserve\n' +
            'et 1 machine d’étiquetage automatique\n' +
            'Montant HT 1 800,00 € — TVA 20 % 360,00 € — TTC 2 160,00 €\n' +
            'Aucun détail unitaire fourni. Le service logistique indique\n' +
            'que la machine sera utilisée plusieurs années.',
          note: 'Document fictif à visée pédagogique.',
        },
        {
          kind: 'text',
          name: 'Pièce C — Facture F-2024-801, fournisseur sans n° de TVA lisible (fictive)',
          content:
            'FACTURE N° F-2024-801\n' +
            'Fournisseur : Cabinet Vernal, conseil en organisation\n' +
            'Honoraires pour mission de juin 2024 : 1 500,00 € HT\n' +
            'TVA 20 % : 300,00 € — TTC : 1 800,00 €\n' +
            'Le numéro de TVA intracommunautaire du cabinet est illisible\n' +
            '(tache d’encre) ; le SIREN est présent.',
          note: 'Document fictif à visée pédagogique.',
        },
      ],
      questions: [
        {
          id: 'danone-m1-ex4-q1',
          question: 'De manière générale, que faire avant de saisir une facture ambiguë ?',
          type: 'mcq',
          options: [
            'Mettre la pièce en attente, documenter la question posée et demander l’information complémentaire au bon interlocuteur (fournisseur, responsable, service concerné)',
            'Saisir une estimation au compte le plus vraisemblable, puis régulariser si quelqu’un s’en aperçoit',
            'Saisir au compte proposé par défaut du logiciel : il connaît mieux que nous',
            'Rejeter définitivement la facture et la renvoyer au fournisseur sans explication',
          ],
          expected: '0',
          explanation:
            'On ne devine jamais : une estimation non documentée est une anomalie volontaire, et le compte « par défaut » du logiciel est un choix d’imputation déguisé. La bonne pratique : pièce en attente référencée, question écrite (traçabilité), réponse intégrée, puis saisie. Rejeter sans explication ferait perdre un délai de règlement et détériorerait la relation fournisseur.',
        },
        {
          id: 'danone-m1-ex4-q2',
          question: 'Pièce A (prestation du 24/06 au 07/07, 14 jours) : quel rattachement retient-on de préférence ?',
          type: 'mcq',
          options: [
            'Tout en juin : la facture est arrivée avant la clôture du mois',
            'Tout en juillet : la prestation n’est terminée qu’en juillet',
            'Rattacher à la période de consommation : 7 jours sur juin et 7 jours sur juillet, soit 490,00 € HT par mois (répartition documentée ou compte de régularisation selon la procédure interne)',
            'Ne rien comptabiliser avant la fin de la prestation, au 07/07',
          ],
          expected: '2',
          explanation:
            'Le principe de rattachement commande d’étaler la charge sur la période réellement consommée : 14 jours, 7 en juin (24 au 30) et 7 en juillet (1er au 7), d’où 980,00 / 2 = 490,00 € HT par mois. La facture complète peut être saisie en juin avec une répartition interne documentée, ou passée via un compte de régularisation — l’essentiel est de documenter la méthode retenue et de rester cohérent d’un mois sur l’autre. À l’échelle de l’exercice annuel, le point est surtout de gestion mensuelle ; en clôture annuelle, la même logique s’applique entre exercices.',
        },
        {
          id: 'danone-m1-ex4-q3',
          question: 'Pièce B (machine + rayonnages, 1 800,00 € HT sans détail unitaire) : quelle est la démarche correcte ?',
          type: 'mcq',
          options: [
            'Passer l’ensemble en charge (classe 6) : 1 800,00 € reste un petit montant',
            'Passer l’ensemble en immobilisation (classe 2) : la machine dure plusieurs années',
            'Demander au fournisseur la ventilation unitaire et se référer à la politique d’immobilisation interne (seuil de valeur) : la machine serait vraisemblablement immobilisée (215xxx), les rayonnages suivant le seuil interne',
            'Saisir sur un compte d’attente (classe 4) et n’y toucher qu’à la clôture annuelle',
          ],
          expected: '2',
          explanation:
            'Le traitement dépend de la durée d’utilisation et de la valeur unitaire — or la facture ne donne ni ventilation ni valeur unitaire : impossible de décider seul. La machine utilisée plusieurs années relève en principe de la classe 2 ; les rayonnages suivent le seuil interne (biens de faible valeur unitaire souvent passés en charge par tolérance de gestion). Sans ventilation, on demanderait une facture détaillée au fournisseur avant de saisir — la réponse dépend de la politique de l’entité, à citer comme telle en entretien.',
        },
        {
          id: 'danone-m1-ex4-q4',
          question: 'Pour chaque pièce A, B et C : quelle information manque, à qui la demander et pourquoi ?',
          type: 'open',
          keywords: ['période', 'rattachement', 'ventilation', 'immobilisation', 'seuil', 'numéro de TVA', 'fournisseur'],
          explanation:
            'Pièce A : il manque la règle de rattachement interne (répartition mensuelle d’une prestation à cheval) — à demander au responsable comptable ; 980,00 € se répartirait en 490,00 € sur juin et juillet. Pièce B : il manque la ventilation unitaire (machine vs rayonnages) et le seuil d’immobilisation interne — ventilation à demander au fournisseur, seuil au responsable comptable ; la machine irait vraisemblablement en 215xxx, TVA en 445620. Pièce C : il manque le numéro de TVA intracommunautaire lisible du fournisseur — à demander au Cabinet Vernal (facture rectifiée ou duplicata propre) ; sans facture conforme, la déduction de la TVA de 300,00 € serait fragilisée. Dans les trois cas, la démarche est identique : documenter la question, la poser au bon interlocuteur, obtenir la réponse par écrit, puis saisir. Le compte d’attente n’est qu’un parking temporaire, jamais une solution.',
        },
      ],
      solutionSummary:
        'Trois ambiguïtés, trois demandes d’information : (A) règle de rattachement interne — 980,00 € HT répartis 490,00 € / 490,00 € entre juin et juillet ; (B) ventilation unitaire + seuil d’immobilisation — machine en 215xxx probable, rayonnages selon politique interne ; (C) facture rectifiée avec n° de TVA lisible avant de déduire 300,00 € de TVA. Morale : la saisie ne commence que lorsque la pièce est complète ; une question posée coûte un mail, une erreur d’imputation coûte une régularisation.',
      interviewTips: [
        'Dites-le noir sur blanc : « on ne devine jamais, on demande et on documente » — c’est une réponse de professionnel, pas de débutant.',
        'Illustrez avec la pièce C : la TVA déductible exige une facture conforme ; c’est concret et fiscal.',
      ],
    },
    {
      id: 'danone-m1-ex5',
      title: 'Erreurs d’imputation : détecter et corriger',
      cycle: 'Achats',
      context:
        'Contrôle qualité d’un lot d’écritures déjà saisies au journal des achats de juillet 2024 (juin pour la dernière). Cinq anomalies se sont glissées dans le lot. Montants et sociétés fictifs.',
      risks: ['Charge/immobilisation confondus', 'TVA omise ou mal ventilée', 'Auxiliaire absent', 'Cut-off mensuel'],
      documents: [
        {
          kind: 'table',
          name: 'Journal des achats — extrait à contrôler (fictif)',
          columns: ['N° écriture', 'Journal', 'Date pièce', 'Compte', 'Libellé', 'Débit (€)', 'Crédit (€)'],
          rows: [
            ['AC-2024-0581', 'Achats', '05/07/2024', '606400 Fournitures administratives', 'Fournitures bureau — Bureau Vert (FA-1182)', 320, '—'],
            ['AC-2024-0581', 'Achats', '05/07/2024', '401BVE Bureau Vert', 'Fournitures bureau — Bureau Vert (FA-1182)', '—', 320],
            ['AC-2024-0590', 'Achats', '09/07/2024', '615000 Entretien et réparations', 'Machine d’étiquetage — Locabox (FA-1195)', 5040, '—'],
            ['AC-2024-0590', 'Achats', '09/07/2024', '401LOC Locabox', 'Machine d’étiquetage — Locabox (FA-1195)', '—', 5040],
            ['AC-2024-0597', 'Achats', '11/07/2024', '613000 Locations', 'Location chariot — Transports Ravel (FA-1198)', 960, '—'],
            ['AC-2024-0597', 'Achats', '11/07/2024', '445660 TVA déd. s/ ABS', 'Location chariot — Transports Ravel (FA-1198)', 192, '—'],
            ['AC-2024-0597', 'Achats', '11/07/2024', '401000 Fournisseurs (compte général)', 'Location chariot — Transports Ravel (FA-1198)', '—', 1152],
            ['AC-2024-0603', 'Achats', '12/07/2024', '215400 Matériel industriel', 'Compresseur froid — TechniFroid (FA-1204)', 2500, '—'],
            ['AC-2024-0603', 'Achats', '12/07/2024', '445660 TVA déd. s/ ABS', 'Compresseur froid — TechniFroid (FA-1204)', 500, '—'],
            ['AC-2024-0603', 'Achats', '12/07/2024', '401TFI TechniFroid', 'Compresseur froid — TechniFroid (FA-1204)', '—', 3000],
            ['AC-2024-0609', 'Achats', '30/06/2024', '615000 Entretien et réparations', 'Nettoyage juillet 2024 — Astral (FA-1312)', 1200, '—'],
            ['AC-2024-0609', 'Achats', '30/06/2024', '445660 TVA déd. s/ ABS', 'Nettoyage juillet 2024 — Astral (FA-1312)', 240, '—'],
            ['AC-2024-0609', 'Achats', '30/06/2024', '401AST Astral Nettoyage', 'Nettoyage juillet 2024 — Astral (FA-1312)', '—', 1440],
          ],
          note: 'Document fictif. FA-1195 : machine facturée 4 200,00 € HT, TVA 20 % 840,00 €, TTC 5 040,00 €. FA-1204 : compresseur 2 500,00 € HT. FA-1182 : fournitures 320,00 € HT, TVA 20 %.',
        },
      ],
      questions: [
        {
          id: 'danone-m1-ex5-q1',
          question: 'Quelles anomalies détectez-vous dans ce lot d’écritures ?',
          type: 'multi',
          options: [
            'AC-0581 : TVA déductible omise (64,00 € non isolés, crédit fournisseur sous-évalué)',
            'AC-0590 : bien immobilisable (machine, 4 200,00 € HT) passée intégralement en charge avec le TTC',
            'AC-0597 : compte auxiliaire fournisseur non renseigné (compte général 401000)',
            'AC-0603 : TVA sur immobilisation imputée en 445660 au lieu de 445620',
            'AC-0609 : charge de juillet (nettoyage du mois de juillet) comptabilisée au 30/06 (mauvaise période)',
            'AC-0581 : sens de l’écriture inversé (débit/crédit)',
            'AC-0603 : montant TTC incohérent (2 500,00 + 500,00 ≠ 3 000,00)',
            'AC-0609 : fournisseur Astral inconnu du référentiel',
          ],
          expected: ['0', '1', '2', '3', '4'],
          explanation:
            'Cinq anomalies réelles. AC-0581 : TVA de 320,00 × 0,20 = 64,00 € omise — le fournisseur devrait 384,00 €. AC-0590 : une machine de 4 200,00 € HT utilisée plusieurs années est une immobilisation (215400), avec TVA de 840,00 € en 445620 — passer le TTC de 5 040,00 € en 615000 surévalue les charges et sous-évalue l’actif. AC-0597 : le crédit est passé sur 401000 général sans auxiliaire : lettrage et règlement impossibles. AC-0603 : le TTC est cohérent (3 000,00 = 2 500,00 + 500,00), mais la TVA d’une immobilisation doit être isolée en 445620 pour la déclaration. AC-0609 : le nettoyage de juillet saisi au 30/06 viole le rattachement à la période (une charge constatée d’avance serait le traitement de correction). Les autres options sont des leurres : aucun sens inversé, aucun montant incohérent, aucun fournisseur inconnu.',
        },
        {
          id: 'danone-m1-ex5-q2',
          question: 'Quelle est l’écriture correcte pour AC-2024-0590 (machine d’étiquetage, FA-1195) ?',
          type: 'mcq',
          options: [
            'Débit 215400 Matériel industriel 4 200,00 € ; Débit 445620 TVA déductible sur immobilisations 840,00 € ; Crédit 401LOC Locabox 5 040,00 €',
            'Débit 615000 Entretien et réparations 5 040,00 € ; Crédit 401LOC Locabox 5 040,00 €',
            'Débit 215400 Matériel industriel 5 040,00 € ; Crédit 401LOC Locabox 5 040,00 €',
            'Débit 606400 Fournitures administratives 4 200,00 € ; Débit 445660 TVA déductible 840,00 € ; Crédit 401LOC Locabox 5 040,00 €',
          ],
          expected: '0',
          explanation:
            'Immobilisation au HT (4 200,00 € en 215400), TVA déductible sur immobilisations (840,00 € en 445620), dette fournisseur au TTC (5 040,00 €). L’option 2 reproduit l’erreur ; l’option 3 inscrit le TTC à l’actif sans isoler la TVA ; l’option 4 confond charge et immobilisation et place la TVA d’immobilisation en 445660.',
        },
        {
          id: 'danone-m1-ex5-q3',
          question: 'Sur AC-0603 (compresseur 2 500,00 € HT), quel montant de TVA aurait dû être isolé, et où ?',
          type: 'numeric',
          expected: 500,
          explanation:
            'TVA = 2 500,00 × 0,20 = 500,00 €. Le montant est correct dans l’écriture, mais le sous-compte est faux : la TVA sur acquisitions d’immobilisations se ventile en 445620 (et non 445660), car la déclaration de TVA distingue la TVA sur immobilisations de celle sur biens et services courants. Une simple ventilation erronée suffit à fausser les lignes de la déclaration.',
        },
        {
          id: 'danone-m1-ex5-q4',
          question: 'Sur AC-0581 (fournitures de bureau 320,00 € HT), quel montant de TVA a été omis ?',
          type: 'numeric',
          expected: 64,
          explanation: 'TVA = 320,00 × 0,20 = 64,00 €. L’écriture crédite le fournisseur de 320,00 € alors qu’il devrait 384,00 € : dette sous-évaluée, TVA déductible perdue, et discordance future avec le règlement du fournisseur (384,00 € décaissés contre 320,00 € comptabilisés).',
        },
        {
          id: 'danone-m1-ex5-q5',
          question: 'Décrivez la démarche complète pour corriger ces écritures en gardant une piste d’audit propre.',
          type: 'open',
          keywords: ['contre-passation', 'écriture inverse', 'compte juste', 'TVA', 'auxiliaire', 'validation', 'piste d’audit'],
          explanation:
            'Dans ce scénario, on aurait procédé ainsi : (1) documenter chaque anomalie (référence de l’écriture, nature de l’erreur, pièce justificative) dans une note de contrôle ; (2) faire valider les corrections par le responsable comptable — a fortiori si le journal du mois est déjà clôturé ; (3) contre-passer l’écriture erronée (écriture inverse, même montant, même date, libellé « annulation ») puis saisir l’écriture correcte — ou passer une écriture de régularisation en journal OD si la période est verrouillée ; (4) rétablir la TVA (64,00 € en 445660 pour AC-0581, 840,00 € en 445620 pour AC-0590, reventilation 500,00 € de 445660 vers 445620 pour AC-0603) ; (5) renseigner le compte auxiliaire manquant (ventilation du 401000 vers 401TRA) ; (6) pour AC-0609, annuler la charge de juin et la réimputer en juillet, ou la laisser en charges constatées d’avance (486) selon la procédure interne ; (7) conserver la trace : écritures d’annulation liées aux écritures d’origine, note de validation, pièces archivées. Jamais de correction « à la va-vite » directement dans l’écriture d’origine : l’historique doit rester lisible.',
        },
      ],
      solutionSummary:
        'Cinq anomalies détectées : TVA omise (AC-0581, 64,00 €), immobilisation en charge (AC-0590 : 215400 / 445620 pour 4 200,00 + 840,00), auxiliaire manquant (AC-0597), TVA d’immobilisation en 445660 (AC-0603, 500,00 €), mauvaise période (AC-0609, nettoyage de juillet au 30/06). Correction type : contre-passation + écriture juste, TVA rétablie, auxiliaire ventilé, validation du responsable, le tout documenté. Le contrat pédagogique est simple : détecter vite, corriger proprement, tracer toujours.',
      interviewTips: [
        'Structurez votre réponse de correction en trois temps : documenter, contre-passer, ressaisir — puis validation et traçabilité.',
        'Citez spontanément la distinction 445660 / 445620 : c’est un détail qui signale la pratique.',
      ],
    },
  ],
  interviewQuestions: [
    { question: 'Décrivez le circuit complet d’une facture fournisseur, de sa réception à son archivage.', expected: 'Réception et référencement → contrôle de forme (mentions) → contrôle de fond (commande/réception) → contrôle de doublon → qualification et journal → imputation générale et auxiliaire → TVA isolée au taux applicable → saisie équilibrée → relecture/visa → archivage référencé. Chaque étape laisse une trace exploitable (piste d’audit).', hint: 'Appuyez-vous sur la check-list en 6 points de la méthode.' },
    { question: 'Quelles différences faites-vous entre une facture d’achat, une facture de vente, un avoir et une note de frais ?', expected: 'Sens de l’écriture (charge/dette vs produit/créance vs écriture inverse vs remboursement au personnel), comptes mobilisés (6xx/401 vs 7xx/411 vs 425-421 selon procédure), traitement de la TVA (déductible, collectée, déduction sur l’avoir, TVA au taux réel des justificatifs), et validation requise (bon à payer vs ajustement client vs visa manager).' },
    { question: 'Comment distinguez-vous une charge d’une immobilisation ?', expected: 'Durée d’utilisation du bien (plus d’un exercice → classe 2) et politique interne de seuil de valeur unitaire. Un bien durable de valeur significative s’immobilise (215xxx) avec TVA en 445620 ; un bien de faible valeur ou consommé immédiatement passe en charge. En cas de doute (ensemble mixte), on demande la ventilation et le seuil interne — on ne devine pas.' },
    { question: 'Que contrôlez-vous sur une facture avant de la saisir ?', expected: 'La forme : mentions obligatoires (numéro unique, date, identités, SIREN, n° TVA de l’émetteur, désignation, quantités, prix, taux TVA, totaux). Le calcul : HT × (1 + taux) = TTC. Le fond : bon de commande, bon de réception, période. Le doublon : fournisseur + numéro de facture. Puis la période de rattachement et le compte auxiliaire.' },
    { question: 'Sur quels comptes comptabilisez-vous la TVA et selon quelles règles ?', expected: 'Achats courants : 445660 ; immobilisations : 445620 ; ventes : 445710. Taux applicable selon la nature du bien : 20 % (normal), 5,5 % (denrées alimentaires), 10 % (transport de voyageurs, hébergement, restauration). L’exigibilité suit en principe la facturation, sous réserve du régime de TVA de l’entité ; la déduction exige une facture conforme.' },
    { question: 'Pourquoi le compte auxiliaire est-il aussi important que le compte général ?', expected: 'Le compte général donne la nature ; l’auxiliaire donne le qui. Sans auxiliaire : pas de lettrage, pas de relance, pas de rapprochement des règlements, soldes tiers inexploitables. La balance auxiliaire devient muette et le contrôle des comptes tiers impossible.' },
    { question: 'Une facture couvre juin et juillet : que faites-vous ?', expected: 'Rattachement à la période de consommation : répartition documentée (ex. 980,00 € → 490,00 € juin, 490,00 € juillet) ou compte de régularisation selon la procédure interne. L’objectif : des résultats mensuels sincères ; en clôture annuelle, la même logique s’applique entre exercices (cut-off).' },
    { question: 'Comment réagissez-vous face à une facture ambiguë ou incomplète ?', expected: 'Jamais d’estimation : pièce en attente référencée, question écrite au bon interlocuteur (fournisseur, responsable), réponse intégrée, puis saisie. Chaque clarification est tracée (mail, note). La règle d’or : on ne devine pas, on demande.' },
    { question: 'Quelles erreurs d’imputation avez-vous le plus rencontrées et comment les corrigez-vous ?', expected: 'Erreurs types : TVA omise ou au mauvais sous-compte, charge à la place d’immobilisation, auxiliaire absent, doublon, mauvaise période. Correction : note de contrôle, validation du responsable, contre-passation de l’écriture erronée puis ressaisie correcte (ou OD de régularisation si période verrouillée), TVA rétablie, traces conservées.' },
    { question: 'Que se passerait-il si tout le monde saisissait « au feeling » sans contrôle préalable ?', expected: 'Les états financiers deviendraient invérifiables : doublons, dettes/créances fausses, TVA mal déclarée (risque fiscal), cut-off détruit, piste d’audit rompue — et un coût de correction exponentiel. La rigueur à la saisie est la première ligne de contrôle interne : le contrôle le moins cher est celui fait avant l’écriture.' },
    { question: 'En quoi la saisie alimente-t-elle la piste d’audit fiable ?', expected: 'Chaque écriture porte sa date, son libellé, sa référence de pièce et ses comptes général/auxiliaire : on peut remonter de la balance au justificatif, et du justificatif à l’écriture, dans un ordre chronologique conservé. Sans cette discipline de saisie, la reconstitution des opérations devient impossible.' },
  ],
  followUps: [
    { question: 'Vous découvrez un doublon deux mois après la saisie : la période est clôturée. Que faites-vous ?', expected: 'On ne modifie jamais l’historique : note d’anomalie, validation du responsable, écriture de régularisation en OD (contre-passation de la facture dupliquée, TVA corrigée en conséquence), rapprochement avec le règlement réel du fournisseur, et inscription au suivi des anomalies pour mesurer la récurrence.' },
    { question: 'Le fournisseur refuse de corriger une facture non conforme (n° de TVA illisible) : quelle est votre position ?', expected: 'La déduction de TVA exige une facture conforme : sans rectification ni duplicata propre, on suspendrait la déduction de la TVA correspondante et on escaladerait au responsable comptable (relance écrite, éventuel blocage du paiement de la part concernée), en documentant les échanges.' },
    { question: 'Le logiciel propose toujours la TVA à 20 % : comment vous prémunissez-vous du taux erroné ?', expected: 'Double contrôle : paramétrage des taux par famille d’articles/prestations (5,5 % sur denrées), et contrôle arithmétique systématique HT × (1 + taux) = TTC avant validation ; en cas d’écart, retour à la nature réelle du bien vendu ou acheté.' },
    { question: 'Pourquoi ne pas simplement modifier l’écriture d’origine directement ?', expected: 'Parce que l’historique doit rester lisible et inviolable : la traçabilité exige que l’erreur et sa correction soient visibles séparément (contre-passation + ressaisie), avec validation du responsable. Modifier en place détruit la piste d’audit et empêche de mesurer les erreurs (donc de les corriger en process).' },
    { question: 'Que faire si le volume mensuel double (de 150 à 300 factures) ?', expected: 'Fiabiliser avant d’accélérer : détection de doublons automatisée, pré-imputation par famille de dépenses, seuils et nomenclature formalisés, circuit de validation parallélisé, indicateurs de délais et de reprises. On priorise les contrôles à plus haut risque (montants, TVA, cut-off) et on documente la nouvelle organisation.' },
    { question: 'Un commercial vous demande de passer sa note de frais sans justificatif « pour ce mois-ci seulement ». Réponse ?', expected: 'Refus courtois et motivé : pas de justificatif, pas de comptabilisation — c’est une exigence de fond, pas de forme. On propose de l’aider à retrouver les pièces, on rappelle le visa manager, et on documente la demande pour le responsable si elle se répète.' },
    { question: 'Comment vérifiez-vous que vous n’avez rien oublié en fin de mois ?', expected: 'Rapprochement des comptes d’attente et du fichier de suivi des pièces (reçues / saisies / en attente), contrôle du bordereau de réception contre le journal, liste des pièces ambiguës non résolues, et revue des écritures sans auxiliaire ou sans référence de pièce — exhaustivité avant clôture mensuelle.' },
  ],
  evaluation: {
    criteria: [
      { label: 'Contrôle de pièce', description: 'Vérifie formes (mentions), calculs (HT/TVA/TTC) et fond (commande, réception) avant toute saisie, et sait dire ce qu’il ferait en cas de non-conformité.' },
      { label: 'Qualification et imputation', description: 'Qualifie la pièce (achat, vente, avoir, note de frais, ambiguë) et choisit journal, comptes généraux et auxiliaires pertinents sans approximation.' },
      { label: 'Maîtrise de la TVA', description: 'Isole la TVA sur les bons comptes (445660, 445620, 445710) au taux réellement applicable (20 %, 5,5 %, 10 %) et vérifie l’arithmétique.' },
      { label: 'Sens débit/crédit', description: 'Construit des écritures équilibrées et correctement orientées (charge/dette, produit/créance, avoir en sens inverse).' },
      { label: 'Rattachement à la période', description: 'Applique le principe de rattachement (cut-off mensuel et annuel) et connaît les comptes de régularisation.' },
      { label: 'Gestion des ambiguïtés', description: 'Met en attente, questionne le bon interlocuteur et documente — jamais d’estimation ni de compte « par défaut » non justifié.' },
      { label: 'Traçabilité et correction', description: 'Corrige par contre-passation validée et documentée, conserve l’historique lisible et alimente la piste d’audit.' },
    ],
  },
}
