import type { PracticalCase } from '@/lib/types'

// =====================================================================
// Laboratoire de cas pratiques — Partie 2 (cas 07 à 12)
// Scénarios 100 % fictifs à visée pédagogique. Tous les montants sont
// vérifiés et cohérents entre les documents de chaque dossier.
// Notation : expected = index d'option en string, nombre en number,
// string[] pour multi, keywords pour open (cf. exercise-runner.tsx).
// =====================================================================

export const casesPart2: PracticalCase[] = [
  // ---------------------------------------------------------------
  // CAS 07 — Décaissements et délégations (Renault)
  // ---------------------------------------------------------------
  {
    id: 'cas-07',
    title: 'Contrôle des décaissements : délégations violées, doublon et 3-way défaillant',
    origin: 'Fiche Renault · Trésorerie',
    domain: 'Décaissements · Contrôle interne',
    difficulty: 3,
    situation:
      'Vous contrôlez par échantillonnage exhaustif les décaissements de septembre 2025 au service trésorerie (scénario pédagogique Renault, données fictives). On vous remet la matrice des délégations de signature et le tableau des 15 paiements du mois avec leurs pièces (bon de commande, bon de réception, bon à payer). Vous devez repérer les violations de délégation, le paiement en doublon et les ruptures du 3-way match, chiffrer l’incidence financière et calculer le taux d’exception à reporter au responsable.',
    documents: [
      {
        kind: 'table',
        name: 'Matrice des délégations de signature (extraits)',
        columns: ['Signataire', 'Plafond par paiement', 'Formalités'],
        rows: [
          ['Assistant trésorerie', '10 000 €', '1 signature'],
          ['Trésorier', '50 000 €', '1 signature'],
          ['Responsable financier', '200 000 €', '1 signature'],
          ['Au-delà de 200 000 €', 'Sans limite', 'Double signature : directeur financier + responsable financier'],
        ],
        note: 'Document fictif. Les délégations s’apprécient paiement par paiement.',
      },
      {
        kind: 'table',
        name: 'Paiements de septembre 2025 (échantillon exhaustif du mois)',
        columns: ['N°', 'Date', 'Bénéficiaire', 'Montant (€)', 'Signataire', 'Réf. facture', 'BC', 'Réception', 'Bon à payer'],
        rows: [
          ['P-101', '02/09', 'Itergo Industries', 8500, 'Assistant', 'FA-2251', 'BC-771', 'R-4551', 'oui'],
          ['P-102', '03/09', 'Printemps Fournitures', 6200, 'Assistant', 'FA-889', 'BC-772', 'R-4552', 'oui'],
          ['P-103', '04/09', 'StratéGIS Conseil', 14500, 'Assistant', 'FA-2209', 'BC-773', 'R-4553', 'oui'],
          ['P-104', '05/09', 'Transports Rapides', 3100, 'Assistant', 'FA-331', 'BC-774', 'R-4554', 'oui'],
          ['P-105', '08/09', 'Itergo Industries', 8500, 'Trésorier', 'FA-2251', 'BC-771', 'R-4551', 'oui'],
          ['P-106', '09/09', 'Maintenance Pro', 12400, 'Trésorier', 'FA-556', 'BC-775', '— absente', 'oui'],
          ['P-107', '10/09', 'Numérik Équipements', 27800, 'Trésorier', 'FA-1201', 'BC-776', 'R-4556', 'oui'],
          ['P-108', '11/09', 'Assurances Ouest', 15600, 'Trésorier', 'FA-770', 'BC-777', 'n/a (prime)', 'oui'],
          ['P-109', '12/09', 'BâtiSud Travaux', 125000, 'Trésorier', 'FA-0912', 'BC-778', 'R-4557', 'oui'],
          ['P-110', '15/09', 'Morgat & Fils', 4300, 'Assistant', 'FA-664', 'BC-779', 'R-4558', 'oui'],
          ['P-111', '16/09', 'Télécom Fixe', 2150, 'Assistant', 'FA-445', 'BC-780', 'n/a (abonnement)', 'oui'],
          ['P-112', '17/09', 'Outilyage Nord', 18900, 'Trésorier', 'FA-1330', '— sans BC', 'R-4559', 'oui'],
          ['P-113', '18/09', 'Fournitures Bureau', 1850, 'Assistant', 'FA-221', 'BC-781', 'R-4560', 'oui'],
          ['P-114', '22/09', 'Itergo Industries', 22400, 'Resp. financier', 'FA-2288', 'BC-782', 'R-4561', 'oui'],
          ['P-115', '25/09', 'Net Pressing', 900, 'Assistant', 'FA-112', 'BC-783', 'R-4562', 'oui'],
        ],
        note: 'Document fictif. P-101 et P-105 se réfèrent à la même facture FA-2251. La réception du paiement P-106 n’a jamais été établie. Le paiement P-112 a été lancé sans bon de commande (achat de proximité, selon le trésorier).',
      },
      {
        kind: 'text',
        name: 'Règles P2P applicables',
        content:
          'Aucun paiement fournisseur ne peut être lancé sans bon à payer visé, appuyé d’un rapprochement à trois voies (3-way match) : bon de commande ↔ bon de réception ↔ facture.\n' +
          'Les charges récurrentes (assurances, abonnements télécom) suivent le même flux documentaire ; la mention « n/a » signale une prestation sans livraison physique (pas d’anomalie en soi).\n' +
          'Toute facture déjà réglée doit être marquée « payée » dans le logiciel pour bloquer un second paiement.\n' +
          'Document fictif. Référentiel : contrôle interne trésorerie (séparation des tâches, délégations) — principes transverses à tous les référentiels comptables.',
      },
    ],
    tasks: [
      {
        id: 'cas-07-q1',
        question: 'Quels paiements présentent une non-conformité à signaler ?',
        type: 'multi',
        options: [
          'P-103 — 14 500 € signé par l’assistant trésorerie (plafond 10 000 €)',
          'P-105 — 8 500 € : la facture FA-2251 a déjà été réglée par P-101 (doublon)',
          'P-106 — 12 400 € sans bon de réception (3-way incomplet)',
          'P-109 — 125 000 € signé par le trésorier (plafond 50 000 €)',
          'P-112 — 18 900 € lancé sans bon de commande (3-way incomplet)',
          'P-107 — 27 800 € signé par le trésorier (conforme : ≤ 50 000 €)',
          'P-114 — 22 400 € signé par le responsable financier (conforme)',
          'P-108 — 15 600 € : prime d’assurance au montant élevé',
        ],
        expected: ['0', '1', '2', '3', '4'],
        explanation:
          'Cinq paiements sont en exception : P-103 (délégation dépassée : 14 500 € > 10 000 € pour un assistant), P-105 (doublon : même facture FA-2251 que P-101, même BC, même réception), P-106 (réception absente : le 3-way ne peut pas être conclu), P-109 (délégation largement dépassée : 125 000 € signés par le trésorier alors que le plafond est de 50 000 €), P-112 (paiement sans bon de commande). Les pièges : P-107 et P-114 sont conformes à la matrice (montant ≤ plafond du signataire), et le montant élevé d’une prime d’assurance (P-108) n’est pas une non-conformité en soi — les pièces y sont complètes.',
      },
      {
        id: 'cas-07-q2',
        question: 'Montant du doublon de paiement à récupérer ou imputer (en €) ?',
        type: 'numeric',
        expected: 8500,
        explanation:
          'P-101 et P-105 règlent tous deux la facture FA-2251 d’Itergo Industries pour 8 500 €. Le doublon porte donc sur 8 500 € : démarche de recouvrement auprès du fournisseur (remboursement ou imputation sur une facture ultérieure), avec écriture de régularisation du compte 401 si nécessaire. Origine probable : la facture n’a pas été marquée « payée » après le premier règlement — c’est la défaillance du contrôle anti-doublon à documenter.',
      },
      {
        id: 'cas-07-q3',
        question: 'Montant total des paiements dont la conformité documentaire fait défaut (doublon + sans réception + sans BC), en € ?',
        type: 'numeric',
        expected: 39800,
        explanation:
          'Paiements concernés : P-105 (doublon) 8 500 € + P-106 (sans bon de réception) 12 400 € + P-112 (sans bon de commande) 18 900 € = 39 800 €. Ce sont les paiements à « geler » ou à faire justifier avant tout nouveau décaissement vers ces fournisseurs : 39 800 € de flux sans chaîne documentaire complète.',
      },
      {
        id: 'cas-07-q4',
        question: 'Quel est le taux d’exception de l’échantillon (5 non-conformités sur 15 paiements) ?',
        type: 'mcq',
        options: [
          'Environ 13 %',
          'Environ 25 %',
          'Environ 33 %',
          'Environ 50 %'],
        expected: '2',
        explanation:
          'Calcul : 5 paiements non conformes ÷ 15 paiements contrôlés = 0,333 → 33,3 % d’exceptions. Un taux d’exception d’un tiers sur un échantillon exhaustif du mois est très élevé : le contrôle du respect des délégations n’est pas opérant (le logiciel ne bloque pas les paiements au-delà du plafond du signataire). C’est le genre d’indicateur à mettre en avant dans le reporting mensuel de contrôle interne.',
      },
      {
        id: 'cas-07-q5',
        question: 'Qui pouvait seul signer valablement le paiement P-109 (125 000 €) ?',
        type: 'mcq',
        options: [
          'L’assistant trésorerie avec l’accord oral du trésorier',
          'Le trésorier, puisque la réception et le bon à payer existaient',
          'Le responsable financier seul (125 000 € ≤ 200 000 €)',
          'Le directeur financier seul, quel que soit le montant',
        ],
        expected: '2',
        explanation:
          'Lecture de la matrice : le trésorier plafonne à 50 000 €, le responsable financier à 200 000 €. 125 000 € ≤ 200 000 € : le paiement relevait du responsable financier seul (la double signature ne s’impose qu’au-delà de 200 000 €). L’existence des pièces (BC, réception, bon à payer) ne régularise jamais un défaut de délégation : la validité du paiement tient à la signature, pas aux pièces jointes. Un accord oral ne vaut pas délégation.',
      },
      {
        id: 'cas-07-q6',
        question: 'Rédigez vos recommandations de contrôle interne à la suite de ce contrôle.',
        type: 'open',
        keywords: ['délégation', 'doublon', 'récupération', 'bon à payer', 'contrôle'],
        explanation:
          'Recommandations attendues : (1) paramétrer le logiciel de paiement pour bloquer tout paiement dépassant le plafond du signataire (contrôle automatisé de la délégation) ; (2) marquer les factures « payées » et dédoublonner automatiquement (référence facture + fournisseur + montant) pour prévenir tout second paiement ; (3) exiger le 3-way complet avant visa du bon à payer : aucune réception manquante, aucun paiement hors commande ; (4) récupérer le doublon de 8 500 € auprès d’Itergo (ou l’imputer sur une échéance future, avec accord écrit) ; (5) faire signer a posteriori une régularisation de délégation pour P-103 et P-109 et alerter le hiérarchique ; (6) suivre un taux d’exception mensuel avec un objectif (par exemple < 5 %) et un reporting au responsable financier.',
      },
    ],
    expectedFindings: [
      'P-103 : violation de délégation — 14 500 € signés par l’assistant trésorerie dont le plafond est de 10 000 €.',
      'P-105 : doublon — la facture FA-2251 (8 500 €) d’Itergo Industries a été payée deux fois (P-101 puis P-105).',
      'P-106 : 3-way défaillant — 12 400 € payés sans bon de réception établi.',
      'P-109 : violation majeure de délégation — 125 000 € signés par le trésorier (plafond 50 000 €) ; le paiement relevait du responsable financier.',
      'P-112 : 3-way défaillant — 18 900 € payés sans bon de commande.',
      'Incidence chiffrable : 39 800 € de paiements sans chaîne documentaire complète (dont 8 500 € de doublon récupérable).',
      'Taux d’exception : 5/15 = 33,3 % — très élevé, le contrôle des délégations n’est pas opérant.',
    ],
    conclusionModel:
      'Le contrôle exhaustif des 15 décaissements de septembre 2025 met en évidence un taux d’exception de 33 % : deux violations de délégation (P-103 : 14 500 € signés au-delà du plafond assistant ; P-109 : 125 000 € signés par le trésorier au lieu du responsable financier), un doublon de paiement de 8 500 € sur la facture FA-2251 et deux ruptures du 3-way match (P-106 sans réception pour 12 400 € ; P-112 sans commande pour 18 900 €), soit 39 800 € de flux sans conformité documentaire complète. Actions immédiates : récupération du doublon auprès du fournisseur, gel des paiements litigieux en attente de justificatifs, régularisation des délégations a posteriori. Recommandations structurelles : blocage automatisé des paiements au-delà du plafond du signataire, marquage des factures payées avec contrôle anti-doublon, visa du bon à payer conditionné au 3-way complet, et suivi mensuel du taux d’exception. Contrôle mené sur données fictives à visée pédagogique.',
  },

  // ---------------------------------------------------------------
  // CAS 08 — Clôture mensuelle : 25 écritures à trier (Renault)
  // ---------------------------------------------------------------
  {
    id: 'cas-08',
    title: 'Clôture mensuelle : 25 écritures de fin de mois à trier avant validation',
    origin: 'Fiche Renault · Trésorerie',
    domain: 'Clôture mensuelle · CAP / PNR / CCA',
    difficulty: 4,
    situation:
      'Vous assistez le responsable comptable lors de la clôture mensuelle de septembre 2025 (scénario pédagogique Renault, données fictives). Il vous remet le journal des OD de fin de mois — 25 écritures — avec les pièces du dossier, et vous demande de « trier » : repérer les écritures erronées (doublons, montants faux, imputations douteuses, écritures sans justificatif), les classer par priorité de correction et chiffrer l’incidence nette sur le résultat de septembre avant la revue de direction.',
    documents: [
      {
        kind: 'table',
        name: 'Journal des OD — clôture du 30/09/2025 (25 écritures)',
        columns: ['N° OD', 'Cpte débité', 'Cpte crédité', 'Libellé', 'Montant (€)', 'Justificatif'],
        rows: [
          ['OD-001', '622', '408', 'CAP — prestation de sous-traitance septembre', 12500, 'contrat + estimation'],
          ['OD-002', '622', '408', 'CAP — prestation de sous-traitance septembre', 12500, '—'],
          ['OD-003', '486', '616', 'CCA — assurance 07/N–06/N+1 (payée le 01/07, 9 mois d’avance)', 10800, 'police + échéancier'],
          ['OD-004', '606', '408', 'CAP — charges diverses à déterminer', 7600, '—'],
          ['OD-005', '681', '280', 'Dotation — amortissements septembre', 9250, 'tableau d’amortissement'],
          ['OD-006', '681', '280', 'Dotation — amortissements septembre', 9250, 'tableau d’amortissement'],
          ['OD-007', '418', '706', 'PNR — prestation de maintenance réalisée non facturée', 8400, 'BL n° 2210 signé'],
          ['OD-008', '486', '616', 'CCA — assurance (régularisation du contrat)', 14400, 'police'],
          ['OD-009', '606', '408', 'CAP — électricité septembre (relevé de compteur)', 6300, 'relevé de compteur'],
          ['OD-010', '418', '706', 'PNR — bonus client à facturer', 11200, '—'],
          ['OD-011', '486', '613', 'CCA — loyer d’octobre payé d’avance (virement du 28/09)', 6200, 'ordonnancement + bail'],
          ['OD-012', '618', '168', 'Intérêts courus sur emprunt — septembre', 2750, 'tableau d’emprunt'],
          ['OD-013', '6811', '2818', 'Dotation — matériel de transport', 3400, 'tableau d’amortissement'],
          ['OD-014', '615', '401', 'Réparation du compresseur', 5300, 'facture FR-2210'],
          ['OD-015', '418', '706', 'PNR — commissions de septembre', 5750, 'état des commissions'],
          ['OD-016', '606', '408', 'CAP — électricité septembre (régularisation)', 63000, '—'],
          ['OD-017', '612', '408', 'CAP — honoraires externes du trimestre', 9800, 'contrat de mission'],
          ['OD-018', '612', '408', 'CAP — honoraires externes du trimestre', 9800, '—'],
          ['OD-019', '603', '31', 'Variation de stocks — déstockage de septembre', 2100, 'inventaire permanent'],
          ['OD-020', '645', '431', 'Régularisation charges sociales septembre', 4900, 'bulletin de paie'],
          ['OD-021', '624', '408', 'CAP — fret de septembre', 4350, 'bordereaux de transport'],
          ['OD-022', '518', '762', 'Intérêts courus à recevoir — dépôt à terme', 1850, 'attestation bancaire'],
          ['OD-023', '418', '708', 'PNR — loyers de sous-location septembre', 3250, 'bail + état des lieux'],
          ['OD-024', '641', '421', 'CAP — salaires de septembre (payés le 05/10)', 14900, 'journal de paie'],
          ['OD-025', '628', '486', 'Abonnement IT — part consommée en septembre', 1400, 'échéancier'],
        ],
        note: 'Document fictif. CAP = charges à payer (408 factures non parvenues), PNR = produits à recevoir (418), CCA = charges constatées d’avance (486). Comptes selon PCG ; équivalents CGNC (3481 produits à recevoir, 4496… selon plan) — logique identique.',
      },
      {
        kind: 'text',
        name: 'Pièces et éléments du dossier de clôture',
        content:
          '— Relevé de compteur électrique : consommation de septembre estimée à 6 300 € HT au tarif en vigueur (la facture d’électricité n’est pas encore parvenue : CAP à constater).\n' +
          '— Police d’assurance : prime annuelle de 14 400 € payée le 01/07/N, couvrant juillet N → juin N+1.\n' +
          '— Journal d’août (extrait) : OD-A07 — 615 D / 401 C — « Réparation du compresseur » — 5 300 € (déjà comptabilisée en août).\n' +
          '— Emprunt : les intérêts courus non échus se comptabilisent en charges financières (661 au PCG), pas en charges de biens et services divers.\n' +
          '— La clôture mensuelle est validée par le responsable comptable après revue de chaque OD et justification documentée.\n' +
          'Document fictif.',
      },
    ],
    tasks: [
      {
        id: 'cas-08-q1',
        question: 'Quelles écritures devez-vous faire corriger avant la validation de la clôture ?',
        type: 'multi',
        options: [
          'OD-001 — CAP prestation septembre (contrat + estimation)',
          'OD-002 — CAP prestation septembre, resaisie sans pièce',
          'OD-003 — CCA assurance (9/12e du contrat : 10 800 €)',
          'OD-004 — CAP « charges diverses à déterminer » sans pièce',
          'OD-006 — dotation amortissements saisie une seconde fois',
          'OD-008 — CCA assurance saisie à 14 400 € (base : total du contrat)',
          'OD-010 — PNR « bonus client à facturer » sans BL ni état signé',
          'OD-011 — CCA loyer d’octobre payé d’avance',
          'OD-012 — intérêts courus imputés au 618 (biens et services divers)',
          'OD-014 — réparation du compresseur déjà comptabilisée en août',
          'OD-016 — CAP électricité saisi ×10 (63 000 € au lieu de 6 300 €)',
          'OD-018 — CAP honoraires du T3 saisi une seconde fois',
        ],
        expected: ['1', '3', '4', '5', '6', '8', '9', '10', '11'],
        explanation:
          'Neuf écritures sont erronées : OD-002, OD-006 et OD-018 sont des doublons (mêmes comptes, mêmes montants, mêmes libellés que OD-001, OD-005 et OD-017) ; OD-004 et OD-010 sont sans justificatif (une charge « à déterminer » et un bonus client sans BL ni état : produit potentiellement fictif) ; OD-008 prend en CCA la totalité du contrat (14 400 €) alors que la part d’avance est de 9/12 (10 800 €) ; OD-012 relève des charges financières (661) et non du 618 ; OD-014 duplique une charge d’août déjà comptabilisée (erreur de période) ; OD-016 saisi ×10 l’électricité (63 000 € contre 6 300 € du relevé). À l’inverse, OD-001, OD-003, OD-011 sont des écritures standards correctes (CAP justifié, CCA au bon prorata, CCA loyer payé d’avance).',
      },
      {
        id: 'cas-08-q2',
        question: 'Quelle est la nature de l’écriture OD-007 (418 D / 706 C, prestation réalisée non facturée) ?',
        type: 'mcq',
        options: [
          'Une charge à payer (CAP)',
          'Une charge constatée d’avance (CCA)',
          'Un produit net à recevoir (PNR) — produit à rattacher à septembre',
          'Une dotation aux amortissements',
        ],
        expected: '2',
        explanation:
          'Une prestation réalisée (BL signé) mais non facturée au 30/09 génère un produit à rattacher à septembre : débit 418 « clients, produits non encore facturés » / crédit 706. C’est le miroir du CAP (408) côté charges. À ne pas confondre avec la CCA (486 : charge payée d’avance neutralisée) ni avec la facture à établir définitive. Comptes PCG ; en CGNC marocain, produits à recevoir (3481) — même logique.',
      },
      {
        id: 'cas-08-q3',
        question: 'Montant total des doublons à extourner (OD-002 + OD-006 + OD-018), en € ?',
        type: 'numeric',
        expected: 31550,
        explanation:
          'OD-002 (doublon de OD-001) : 12 500 €. OD-006 (doublon de OD-005) : 9 250 €. OD-018 (doublon de OD-017) : 9 800 €. Total = 12 500 + 9 250 + 9 800 = 31 550 € de charges comptées deux fois, à extourner avant validation. Le doublon est l’erreur de clôture la plus fréquente : d’où l’intérêt d’un contrôle automatique (mêmes comptes + même montant + même libellé).',
      },
      {
        id: 'cas-08-q4',
        question: 'Incidence de l’erreur de saisie ×10 sur OD-016 (63 000 € saisis pour 6 300 € dus), en € ?',
        type: 'numeric',
        expected: 56700,
        explanation:
          'La charge correcte d’électricité (relevé de compteur) est de 6 300 € HT : OD-009 la constate déjà correctement en CAP. OD-016 ajoute 63 000 € de plus, sans justificatif. Incidence = 63 000 − 6 300 = 56 700 € de charges excessives, qui écrasent le résultat de septembre. C’est l’anomalie la plus lourde du journal : à corriger en priorité absolue.',
      },
      {
        id: 'cas-08-q5',
        question: 'Incidence nette de toutes les corrections sur le résultat de septembre (en €) ?',
        type: 'numeric',
        expected: 86350,
        explanation:
          'Signe par signe : annulation des doublons OD-002/006/018 → + 31 550. Correction OD-016 (×10) → + 56 700. Correction OD-008 (CCA excessive de 14 400 − 10 800 = 3 600, qui sous-évalue les charges) → − 3 600. Annulation OD-004 (charge sans objet, 7 600) → + 7 600. Annulation OD-010 (produit sans justificatif, 11 200) → − 11 200. Annulation OD-014 (charge d’août re-saisie en septembre, 5 300) → + 5 300. OD-012 : simple reclassement 618 → 661, sans incidence sur le résultat. Total : 31 550 + 56 700 − 3 600 + 7 600 − 11 200 + 5 300 = + 86 350 €. Le résultat publié de septembre est sous-évalué de 86 350 €.',
      },
      {
        id: 'cas-08-q6',
        question:
          'Décrivez votre démarche de revue du journal de clôture et les garanties à demander avant validation.',
        type: 'open',
        keywords: ['justificatif', 'extourne', 'doublon', 'cut-off', 'validation'],
        explanation:
          'Démarche attendue : (1) contrôler la complétude documentaire : chaque OD doit reposer sur une pièce (contrat, relevé, BL signé, tableau d’amortissement) — OD-004 et OD-016 sans pièce sont rejetées d’office ; (2) dérouler les contrôles de cohérence : montants recalculés (CCA au prorata 9/12 = 10 800 €, pas 14 400 € ; électricité au relevé = 6 300 €), imputations vérifiées (intérêts → 661), période vérifiée (OD-014 déjà en août) ; (3) chasser les doublons par tri sur comptes + montant + libellé ; (4) extourner les écritures erronées et documenter chaque correction ; (5) justifier le cut-off : CAP/PNR rattachés au bon mois ; (6) soumettre la clôture corrigée (+ 86 350 € sur le résultat) à la validation du responsable comptable, avec la grille de revue signée — la revue formalisée (qui a revu quoi, quand) est la garantie demandée.',
      },
    ],
    expectedFindings: [
      'Trois doublons à extourner : OD-002 (12 500 €), OD-006 (9 250 €), OD-018 (9 800 €) — soit 31 550 € de charges comptées deux fois.',
      'Erreur de saisie ×10 sur OD-016 : 63 000 € comptabilisés au lieu de 6 300 € (relevé de compteur) → 56 700 € de charges excessives.',
      'CCA d’assurance erronée (OD-008) : 14 400 € passés (total du contrat) au lieu de 10 800 € (9 mois d’avance sur 12) → 3 600 € d’excès.',
      'OD-004 (7 600 €) et OD-010 (11 200 €) sans justificatif : charge « à déterminer » et produit « bonus client » non étayés — à annuler/instruire.',
      'OD-012 : intérêts courus imputés au 618 (charges diverses) au lieu du 661 (charges financières) — reclassement sans incidence de résultat.',
      'OD-014 : charge d’août déjà comptabilisée re-saisie au 30/09 — erreur de période de 5 300 €.',
      'Incidence nette sur le résultat de septembre : + 86 350 € (résultat publié sous-évalué).',
    ],
    conclusionModel:
      'La revue du journal de clôture du 30/09/2025 (25 OD) a isolé neuf écritures erronées : trois doublons (31 550 €), une erreur de saisie ×10 sur le CAP d’électricité (56 700 € d’excès), une CCA d’assurance surévaluée de 3 600 €, deux écritures sans justificatif (charge de 7 600 € à annuler, produit de 11 200 € non étayé), une erreur d’imputation (2 750 € à reclasser du 618 vers le 661) et une charge d’août re-saisie en septembre (5 300 €). L’incidence nette sur le résultat ressort à + 86 350 € : le résultat de septembre publié est sous-évalué d’autant, et la correction est indispensable avant la revue de direction. Recommandations : contrôle anti-doublon systématique sur le couple comptes/montant/libellé, recalcul automatique des prorata de CCA, interdiction de passer une OD sans pièce référencée, et grille de revue de clôture signée par le responsable comptable. Les intitulés de comptes cités suivent le PCG ; la logique CAP/PNR/CCA est identique en CGNC marocain et en IFRS (ajustements d’exercice). Dossier fictif, à visée pédagogique.',
  },

  // ---------------------------------------------------------------
  // CAS 09 — Facturation d'achat à imputer (Danone)
  // ---------------------------------------------------------------
  {
    id: 'cas-09',
    title: 'Cinq factures d’achat à imputer : bons comptes, bonne TVA, un cas ambigu',
    origin: 'Fiche Danone · Comptabilité',
    domain: 'Imputation comptable · TVA',
    difficulty: 2,
    situation:
      'Au service comptabilité (scénario pédagogique Centrale Danone, données fictives), vous recevez un lot de 5 factures fournisseurs à saisie directe. Avant toute imputation, vous devez contrôler chaque facture (mentions, arithmétique, taux de TVA), déterminer le compte de charge et le montant de TVA déductible, passer les écritures correctes — et traiter un cas ambigu qui résiste. Le responsable attend le détail des imputations et le total de TVA déductible du lot.',
    documents: [
      {
        kind: 'table',
        name: 'Récapitulatif du lot de factures à imputer (TVA française, à titre pédagogique)',
        columns: ['N°', 'Fournisseur', 'Objet', 'HT (€)', 'Taux TVA', 'TVA (€)', 'TTC (€)'],
        rows: [
          ['F1', 'Papyrus Bureau', 'Papeterie et fournitures de bureau', 1250, '20 %', 250, 1500],
          ['F2', 'Vergers du Sud', 'Fruits pour atelier de production (fraises, mangues)', 12400, '5,5 %', 682, 13082],
          ['F3', 'Maintenance Pro', 'Entretien de la ligne de conditionnement', 4830, '20 %', 966, 5796],
          ['F4', 'Publicité Azur', 'Campagne d’affichage — lancement nouveau yaourt', 9500, '20 %', 1900, 11400],
          ['F5', 'Digisoft', '« Prestations IT — maintenance et hébergement » (sans détail)', 2975, '20 %', 595, 3570],
        ],
        note: 'Document fictif. Taux de TVA français (20 % et 5,5 % sur les denrées alimentaires) utilisés à titre pédagogique — le référentiel fiscal applicable (France, Maroc…) détermine les taux et les règles de déduction (prorata, délais).',
      },
      {
        kind: 'text',
        name: 'Détail des factures (mentions et conditions)',
        content:
          'F1 — Papyrus Bureau SARL — facture FA-2024-0812 du 12/06/2024\n' +
          '  80 ramettes A4, 12 kits bureautiques… Montant HT 1 250,00 € · TVA 20 % 250,00 € · Net à payer 1 500,00 € · Paiement 30 jours fin de mois.\n' +
          'F2 — Vergers du Sud — facture VG-2214 du 12/06/2024\n' +
          '  2 000 barquettes de fraises, 800 kg de mangues (denrées alimentaires). Montant HT 12 400,00 € · TVA 5,5 % 682,00 € · Net à payer 13 082,00 € · Paiement à réception.\n' +
          'F3 — Maintenance Pro — facture MP-0771 du 13/06/2024\n' +
          '  Intervention préventive sur la ligne de conditionnement n° 3 (12 h × 402,50 €). Montant HT 4 830,00 € · TVA 20 % 966,00 € · Net à payer 5 796,00 € · Comptant.\n' +
          'F4 — Publicité Azur — facture PA-3310 du 14/06/2024\n' +
          '  Affichage urbain 4 semaines (lancement yaourt Yallon). Montant HT 9 500,00 € · TVA 20 % 1 900,00 € · Net à payer 11 400,00 € · 45 jours.\n' +
          'F5 — Digisoft — facture DS-1199 du 15/06/2024\n' +
          '  « Prestations IT — maintenance et hébergement, service divers » : ni détail des prestations, ni période couverte, ni quantités. Montant HT 2 975,00 € · TVA 20 % 595,00 € · Net à payer 3 570,00 € · 30 jours.\n' +
          'Document fictif.',
      },
      {
        kind: 'text',
        name: 'Éléments complémentaires sur la facture F5 (Digisoft)',
        content:
          '— Le contrat Digisoft enregistré au service couvre deux volets : une maintenance logicielle mensuelle (prestation récurrente) et un hébergement annuel facturé d’avance au 1er janvier de chaque exercice.\n' +
          '— Le responsable informatique indique que « la maintenance de juin a bien été assurée », mais ne sait pas dire ce que couvre exactement le montant de la facture DS-1199.\n' +
          '— Aucun bon de commande n’est rattaché à la facture dans le logiciel.\n' +
          '— Procédure interne : toute facture doit être rattachée à un BC et détaille prestations et période ; à défaut, la demander au fournisseur avant paiement.\n' +
          'Document fictif.',
      },
    ],
    tasks: [
      {
        id: 'cas-09-q1',
        question: 'Quelle est l’écriture correcte pour la facture F1 (Papyrus Bureau, 1 250 € HT, TVA 20 %) ?',
        type: 'mcq',
        options: [
          'Débit 606 (1 250) / Débit 44566 (250) / Crédit 401 (1 500)',
          'Débit 401 (1 500) / Crédit 606 (1 250) / Crédit 44566 (250)',
          'Débit 606 (1 500) / Crédit 401 (1 500) — TVA comprise',
          'Débit 615 (1 250) / Crédit 401 (1 500) — TVA négligée',
        ],
        expected: '0',
        explanation:
          'Schéma d’imputation d’une facture d’achat de services/fournitures : la charge est enregistrée pour son montant HT au débit du compte d’imputation (606 fournitures non stockables pour la papeterie), la TVA déductible au débit du 44566, et la dette fournisseur au crédit du 401 pour le TTC. Vérification arithmétique : 1 250 × 1,20 = 1 500 € ✓. En CGNC marocain, même logique avec les comptes d’achats (61…) et de TVA récupérable — seules les références changent.',
      },
      {
        id: 'cas-09-q2',
        question: 'Quel compte d’imputation convient à la facture F3 (entretien de la ligne de conditionnement) ?',
        type: 'mcq',
        options: [
          '606 — fournitures non stockables',
          '6152 — entretien et réparations du matériel',
          '623 — publicité et communications',
          '627 — services bancaires',
        ],
        expected: '1',
        explanation:
          'L’entretien préventif d’un équipement de production est une charge d’entretien et réparation du matériel : 6152 (entretien des biens mobiliers au PCG). Les pièges : le 606 concerne les fournitures consommables (papeterie, F1), le 623 la publicité (F4), le 627 les services bancaires. Question d’oral classique : une mauvaise imputation ne change pas le résultat total mais dégrade la fiabilité de la balance analytique, la comparabilité N/N-1 et la piste d’audit.',
      },
      {
        id: 'cas-09-q3',
        question: 'Montant de la TVA de la facture F2 (Vergers du Sud, 12 400 € HT de denrées), en € ?',
        type: 'numeric',
        expected: 682,
        explanation:
          'Les fruits sont des denrées alimentaires : taux réduit de 5,5 % (en TVA française, à titre pédagogique). Calcul : 12 400 × 5,5 % = 682 €. Attention au piège du taux par défaut : appliquer 20 % donnerait 2 480 € de TVA — un écart de 1 798 € sur la déclaration. D’où le réflexe : recalculer soi-même la TVA plutôt que de faire confiance au TTC imprimé, et vérifier le taux par famille de biens (le référentiel fiscal applicable — France, Maroc… — fixe les taux et les règles de déduction).',
      },
      {
        id: 'cas-09-q4',
        question: 'Montant TTC de la facture F2, en € ?',
        type: 'numeric',
        expected: 13082,
        explanation:
          'TTC = HT + TVA = 12 400 + 682 = 13 082 €, ou directement 12 400 × 1,055 = 13 082 €. Contrôle de cohérence systématique avant imputation : HT × (1 + taux) = TTC affiché — les trois montants de la facture doivent se recouper au centime.',
      },
      {
        id: 'cas-09-q5',
        question: 'TVA déductible totale sur les factures F1 à F4 (hors F5 en cours d’analyse), en € ?',
        type: 'numeric',
        expected: 3798,
        explanation:
          'F1 : 1 250 × 20 % = 250 €. F2 : 12 400 × 5,5 % = 682 €. F3 : 4 830 × 20 % = 966 €. F4 : 9 500 × 20 % = 1 900 €. Total = 250 + 682 + 966 + 1 900 = 3 798 €. La F5 (595 €) est écartée du total déductible tant que la prestation n’est pas qualifiée : une TVA sur une facture insuffisamment détaillée (et sans BC) engage la déduction — prudence jusqu’à régularisation.',
      },
      {
        id: 'cas-09-q6',
        question:
          'La facture F5 (Digisoft, 2 975 € HT) arrive sans détail, sans période et sans BC : quelle est votre analyse et votre démarche avant imputation ?',
        type: 'open',
        keywords: ['période', 'rattachement', 'fournisseur', 'justificatif', 'avance'],
        explanation:
          'Analyse : la facture F5 cumule les signaux d’alerte — libellé générique (« service divers »), aucune période couverte, aucun BC rattaché, et un contrat Digisoft à deux volets dont l’un (hébergement annuel) est facturé d’avance. Risques : (1) erreur de rattachement — si le montant couvre un hébergement d’avance, une partie relève d’une charge constatée d’avance (486) et non du mois de juin ; (2) mauvaise imputation (maintenance récurrente vs hébergement) ; (3) dépense sans autorisation (absence de BC) ; (4) TVA déductible fragile sur facture non conforme. Démarche : suspendre le paiement, demander au fournisseur une facture rectificative détaillée (prestations, période, quantités) et au responsable informatique la confirmation des prestations de juin ; rapprocher le montant du contrat (maintenance mensuelle attendue) ; imputer ensuite selon la période couverte — charge du mois pour la maintenance, CCA pour la part d’avance — et documenter la décision dans le dossier.',
      },
    ],
    expectedFindings: [
      'Imputations correctes : F1 → 606 (fournitures de bureau) ; F2 → 601/606 selon plan des achats de denrées (taux 5,5 %) ; F3 → 6152 (entretien matériel) ; F4 → 623 (publicité) ; F5 → à qualifier.',
      'TVA recalculée facture par facture : 250 € (F1), 682 € (F2 à 5,5 %), 966 € (F3), 1 900 € (F4) — 3 798 € déductibles hors F5.',
      'F5 (Digisoft) : facture non conforme — ni détail, ni période, ni BC : à faire rectifier avant paiement ; risque de CCA si la prestation est facturée d’avance.',
      'Arithmétique vérifiée sur les 5 factures : HT × (1 + taux) = TTC au centime (1 500 / 13 082 / 5 796 / 11 400 / 3 570 €).',
      'Point de référentiel : taux et déductibilité de TVA dépendent du droit fiscal applicable (France : 20 % et 5,5 % denrées ; Maroc : taux et prorata propres) — la méthode de contrôle, elle, est invariante.',
    ],
    conclusionModel:
      'Le lot de 5 factures a été contrôlé avant imputation : arithmétique conforme sur chacune (HT × (1 + taux) = TTC), TVA recalculée de manière indépendante pour 3 798 € déductibles sur F1–F4, et imputations retenues : 606 pour la papeterie (F1), achat de denrées à 5,5 % pour F2, 6152 pour l’entretien de la ligne de conditionnement (F3), 623 pour la campagne publicitaire (F4). La facture F5 (Digisoft, 2 975 € HT) est mise en suspens : libellé générique, aucune période couverte, aucun bon de commande — une facture rectificative détaillée est demandée au fournisseur avant paiement, avec rattachement à contrôler (part d’avance éventuelle en charge constatée d’avance) et TVA déductible différée en attendant la régularisation. Recommandation : verrouiller la saisie sur le rattachement BC + détail des prestations. Taux de TVA utilisés à titre pédagogique selon le droit français ; le traitement fiscal réel dépend du référentiel applicable. Données fictives.',
  },

  // ---------------------------------------------------------------
  // CAS 10 — P2P et piste d'audit fiable (Danone)
  // ---------------------------------------------------------------
  {
    id: 'cas-10',
    title: 'P2P et piste d’audit fiable : 12 factures, des incohérences et un verdict',
    origin: 'Fiche Danone · Comptabilité',
    domain: 'P2P · Piste d’audit fiable',
    difficulty: 3,
    situation:
      'Vous auditez la piste d’audit fiable du processus Purchase-to-Pay (scénario pédagogique Centrale Danone, données fictives) : l’entreprise doit pouvoir justifier chaque facture par sa commande et sa réception, du BC au paiement. On vous remet l’échantillon de 12 factures du mois avec leur rattachement documentaire. Vous devez repérer les incohérences (facture sans amont, écart de quantité, écart de prix, doublon), chiffrer les écarts 3-way, calculer la part de factures correctement rattachées et conclure sur la fiabilité du dispositif.',
    documents: [
      {
        kind: 'table',
        name: 'Échantillon de 12 factures — rattachement P2P du mois',
        columns: ['N° facture', 'Fournisseur', 'Montant facture HT (€)', 'BC', 'Réception', 'Observation de rattachement'],
        rows: [
          ['FA-501', 'Vergers du Sud', 12400, 'BC-901 (4 000 kg × 3,10 €)', 'R-2101 (4 000 kg)', 'conforme'],
          ['FA-502', 'Papyrus Bureau', 1250, 'BC-902', 'R-2102', 'conforme'],
          ['FA-503', 'Digisoft', 2975, '— aucune', '— aucune', 'aucune pièce d’origine'],
          ['FA-504', 'Maintenance Pro', 4830, 'BC-904', 'R-2104', 'conforme'],
          ['FA-505', 'Emballages Plus', 18600, 'BC-905 (12 000 u × 1,55 €)', 'R-2105 (11 000 u reçues)', 'écart de quantité'],
          ['FA-506', 'Vergers du Sud', 8060, 'BC-906 (4 000 kg × 1,90 €)', 'R-2106 (4 000 kg)', 'facturé à 2,015 €/kg'],
          ['FA-507', 'Publicité Azur', 9500, '— sans BC', 'n/a (prestation)', 'hors procédure'],
          ['FA-508', 'Fromagerie des Alpes', 6300, 'BC-908', 'R-2108', 'conforme'],
          ['FA-509', 'Transports Rapides', 3200, 'BC-909', '— sans BL transport', 'pièce manquante'],
          ['FA-510', 'Numérik Équipements', 27800, 'BC-910', 'R-2110', 'conforme'],
          ['FA-511', 'Emballages Plus', 18600, 'BC-905', 'R-2105', 'même BC et même réception que FA-505'],
          ['FA-512', 'Outilyage Nord', 18900, 'BC-912', 'R-2112', 'conforme'],
        ],
        note: 'Document fictif. FA-506 : prix facturé de 2,015 €/kg contre 1,90 €/kg au BC-906, sans avenant connu (4 000 kg facturés).',
      },
      {
        kind: 'text',
        name: 'Procédure P2P — exigences de la piste d’audit fiable',
        content:
          'Définition : la piste d’audit fiable garantit la traçabilité intégrale et ininterrompue de chaque opération, du besoin exprimé (demande d’achat) à la commande (BC), à la réception (contrôle quantité/qualité), à la facture (rapprochement 3-way), jusqu’au paiement et à l’imputation.\n' +
          'Règles locales : (1) toute facture doit être rattachée à un BC visé et à un bon de réception ; (2) tout écart de prix suppose un avenant au BC ; (3) une facture ne peut être payée qu’après rapprochement conforme ; (4) les prestations sans livraison physique (publicité, services) font l’objet d’un BC « prestation » avec bon de réalisation signé.\n' +
          'Document fictif. Principe transversal : la piste d’audit fiable est exigée par tous les environnements de contrôle (contrôle interne comptable, audit externe — par exemple les exigences de traçabilité documentaire des NEP françaises ou de la loi 9/98 marocaine pour la preuve comptable).',
      },
    ],
    tasks: [
      {
        id: 'cas-10-q1',
        question: 'Quelles factures présentent une incohérence de rattachement ?',
        type: 'multi',
        options: [
          'FA-503 — aucun BC ni réception (2 975 € HT)',
          'FA-505 — 12 000 unités facturées pour 11 000 reçues (18 600 € HT)',
          'FA-506 — prix facturé (2,015 €/kg) supérieur au BC (1,90 €/kg) sans avenant',
          'FA-507 — prestation publicitaire sans BC « prestation » (9 500 € HT)',
          'FA-509 — transport sans bon de réception/BL (3 200 € HT)',
          'FA-511 — doublon de FA-505 (même BC-905, même réception R-2105)',
          'FA-501 — fruits conformes au BC et à la réception (12 400 € HT)',
          'FA-510 — équipement conforme (BC-910, réception R-2110)',
        ],
        expected: ['0', '1', '2', '3', '4', '5'],
        explanation:
          'Six factures brisent la chaîne : FA-503 n’a aucun amont documentaire (aucune pièce d’origine) ; FA-505 facture 12 000 unités pour 11 000 reçues (écart de quantité) ; FA-506 facture au-dessus du prix commandé sans avenant (écart de prix) ; FA-507 est hors procédure (prestation sans BC) ; FA-509 n’a pas de BL de transport (la réception fait défaut) ; FA-511 est un doublon de FA-505 (mêmes BC et réception). FA-501 et FA-510 sont les témoins conformes : BC + réception + montants qui se recoupent.',
      },
      {
        id: 'cas-10-q2',
        question: 'Écart de quantité sur FA-505 (12 000 unités facturées, 11 000 reçues, à 1,55 €/unité), en € HT ?',
        type: 'numeric',
        expected: 1550,
        explanation:
          'Étape 1 : quantité en écart = 12 000 − 11 000 = 1 000 unités. Étape 2 : valorisation au prix convenu = 1 000 × 1,55 = 1 550 € HT. La facture ne devrait porter que sur 11 000 × 1,55 = 17 050 € ; le fournisseur a facturé 18 600 € : écart de 1 550 € à faire rectifier (ou à justifier par une livraison complémentaire documentée).',
      },
      {
        id: 'cas-10-q3',
        question: 'Écart de prix sur FA-506 (4 000 kg facturés à 2,015 €/kg contre 1,90 €/kg au BC), en € HT ?',
        type: 'numeric',
        expected: 460,
        explanation:
          'Étape 1 : écart de prix unitaire = 2,015 − 1,90 = 0,115 €/kg. Étape 2 : quantité concernée = 4 000 kg (la réception est conforme au BC). Étape 3 : écart total = 0,115 × 4 000 = 460 € HT. Facture attendue : 4 000 × 1,90 = 7 600 € ; facture reçue : 8 060 €. Sans avenant signé, l’écart n’est pas dû : contestation fournisseur.',
      },
      {
        id: 'cas-10-q4',
        question: 'Montant total des anomalies chiffrées (écart de quantité FA-505 + écart de prix FA-506 + doublon FA-511), en € HT ?',
        type: 'numeric',
        expected: 20610,
        explanation:
          'Étape 1 : écart de quantité FA-505 = 1 550 €. Étape 2 : écart de prix FA-506 = 460 €. Étape 3 : doublon FA-511 = 18 600 € (une seconde facture de 18 600 € acceptée sur le même BC-905 et la même réception R-2105). Total = 1 550 + 460 + 18 600 = 20 610 € HT d’enjeu financier direct, dont 18 600 € de doublon — l’anomalie la plus lourde, à bloquer avant paiement.',
      },
      {
        id: 'cas-10-q5',
        question: 'Quelle part de l’échantillon dispose d’une piste d’audit complète et conforme (BC + réception + montants recoupés) ?',
        type: 'mcq',
        options: [
          '25 % (3 factures sur 12)',
          '50 % (6 factures sur 12)',
          '75 % (9 factures sur 12)',
          '100 % — les documents existent partout',
        ],
        expected: '1',
        explanation:
          'Dénombrement : FA-501, FA-502, FA-504, FA-508, FA-510 et FA-512 ont BC + réception + montants conformes : 6 factures sur 12 = 50 %. L’autre moitié de l’échantillon (FA-503, 505, 506, 507, 509, 511) présente une rupture de chaîne. Un taux de rattachement conforme de 50 % est rédhibitoire pour une piste d’audit « fiable » : le dispositif P2P ne permet pas, en l’état, de justifier la moitié des achats du mois.',
      },
      {
        id: 'cas-10-q6',
        question: 'Concluez sur la fiabilité de la piste d’audit fiable du processus P2P et proposez vos recommandations.',
        type: 'open',
        keywords: ['piste d’audit fiable', 'rattachement', 'faiblesse', 'recommandation', '3-way'],
        explanation:
          'Conclusion attendue : le dispositif n’est pas fiable en l’état — 6 factures sur 12 (50 %) présentent une rupture de rattachement (absence de BC ou de réception, écart de quantité, écart de prix sans avenant, doublon), pour un enjeu chiffré de 20 610 € HT dont 18 600 € de doublon. Recommandations : (1) bloquer le paiement de FA-511 (doublon) et contester les écarts FA-505/FA-506 ; (2) rendre le rapprochement 3-way obligatoire dans l’outil (contrôle bloquant : quantités facturées = réceptionnées, prix facturés = BC) ; (3) interdire la saisie d’une facture sans BC (numérotation et mariage BC/facture/réception automatique) ; (4) exiger un avenant signé pour tout écart de prix ; (5) instaurer un BC « prestation » avec bon de réalisation pour les services ; (6) mesurer mensuellement le taux de factures correctement rattachées (objectif proche de 100 %) et le suivre en tableau de bord. Mentionner que l’exigence de traçabilité documentaire relève du contrôle interne comptable et de la preuve des opérations dans tous les référentiels.',
      },
    ],
    expectedFindings: [
      'FA-503 : aucune pièce d’origine (ni BC ni réception) — facture sans amont documentaire, à faire justifier avant paiement.',
      'FA-505 : écart de quantité de 1 550 € HT (12 000 unités facturées pour 11 000 reçues à 1,55 €).',
      'FA-506 : écart de prix de 460 € HT (2,015 €/kg facturés contre 1,90 €/kg commandés, sans avenant).',
      'FA-507 : prestation publicitaire de 9 500 € HT enregistrée hors procédure (sans BC « prestation »).',
      'FA-509 : transport de 3 200 € HT sans bon de livraison/réception.',
      'FA-511 : doublon de FA-505 — 18 600 € HT sur le même BC-905 et la même réception R-2105 : paiement à bloquer.',
      'Enjeu total : 20 610 € HT ; seulement 6 factures sur 12 (50 %) disposent d’un rattachement complet et conforme — la piste d’audit n’est pas fiable en l’état.',
    ],
    conclusionModel:
      'Le test de rattachement sur l’échantillon de 12 factures du mois conclut à une piste d’audit non fiable : 50 % des factures présentent une rupture de chaîne (absence de BC ou de réception, écart de quantité de 1 550 €, écart de prix de 460 € sans avenant, doublon de 18 600 € sur le même couple BC/réception), soit un enjeu direct de 20 610 € HT. Le doublon FA-511 est bloqué avant paiement, les écarts FA-505 et FA-506 sont contestés auprès du fournisseur et les factures sans amont (FA-503, FA-507, FA-509) sont suspendues en attente de justificatifs. Recommandations prioritaires : rapprochement 3-way bloquant dans l’outil (quantités et prix facturés contre BC et réception), interdiction de saisie sans BC référencé, avenants obligatoires pour tout écart de prix, BC « prestation » avec bon de réalisation pour les services, et suivi mensuel du taux de rattachement conforme. L’exigence de traçabilité du besoin au paiement est un principe commun au contrôle interne comptable et à la preuve des opérations dans tous les référentiels. Dossier fictif, à visée pédagogique.',
  },

  // ---------------------------------------------------------------
  // CAS 11 — Lettrage de comptes clients (Danone)
  // ---------------------------------------------------------------
  {
    id: 'cas-11',
    title: 'Lettrage du compte client « Épicerie Moderne » : règlements, avoirs et écart',
    origin: 'Fiche Danone · Comptabilité',
    domain: 'Comptes clients · Lettrage',
    difficulty: 2,
    situation:
      'Au service comptabilité (scénario pédagogique Centrale Danone, données fictives), vous prenez en charge le lettrage du compte client 411EM « Épicerie Moderne » pour juillet 2024. Le grand livre auxiliaire affiche 8 lignes (un solde à report, trois factures, un avoir et trois règlements). Vous devez constituer les groupes de lettrage corrects, déterminer le solde restant, analyser l’écart résiduel et proposer les actions de recouvrement.',
    documents: [
      {
        kind: 'table',
        name: 'Grand livre auxiliaire — client 411EM « Épicerie Moderne » — juillet 2024',
        columns: ['Date', 'Pièce', 'Libellé', 'Débit (€)', 'Crédit (€)'],
        rows: [
          ['01/07', '—', 'Solde à report (facture F-0442 du 12/06, échue le 11/07)', 3200, ''],
          ['05/07', 'F-1101', 'Facture — HT 3 975,00 + TVA 20 % 795,00', 4770, ''],
          ['08/07', 'V-0812', 'Virement client reçu', '', 4770],
          ['12/07', 'F-1102', 'Facture — HT 5 320,00 + TVA 20 % 1 064,00', 6384, ''],
          ['15/07', 'AV-207', 'Avoir — retour marchandises sur F-1102 (HT 798,00 + TVA 159,60)', '', 957.6],
          ['18/07', 'CH-0813', 'Chèque remis à l’encaissement', '', 5426.4],
          ['22/07', 'F-1103', 'Facture — HT 2 000,00 + TVA 20 % 400,00', 2400, ''],
          ['25/07', 'V-0814', 'Virement client reçu (libellé « règlement F-1103 — montant HT »)', '', 2000],
        ],
        note: 'Document fictif. Le lettrage consiste à rapprocher chaque facture de ses règlements (et avoirs) pour isoler le solde réellement non réglé.',
      },
      {
        kind: 'text',
        name: 'Éléments de contexte sur le client',
        content:
          '— Le solde à report de 3 200 € correspond à la facture F-0442 du 12/06, jamais réglée malgré deux relances (15 jours puis 30 jours de retard).\n' +
          '— Le virement V-0814 (2 000,00 €) porte le libellé « règlement facture F-1103 — montant HT ».\n' +
          '— L’entreprise n’accorde pas d’escompte de règlement à ce client.\n' +
          '— La facture F-1103 (TTC 2 400,00 €) a été émise le 22/07 pour une livraison du même jour.\n' +
          '— Référentiel : comptes PCG (411 clients, 411D dépréciations) ; en CGNC marocain, clients et comptes rattachés (3421) et dépréciations (2921) — la logique du lettrage est identique.\n' +
          'Document fictif.',
      },
    ],
    tasks: [
      {
        id: 'cas-11-q1',
        question: 'Quel lettrage est correct pour solder la facture F-1102 (6 384 € TTC) ?',
        type: 'mcq',
        options: [
          'F-1102 seule, sans l’avoir ni le chèque',
          'F-1102 + AV-207 + CH-0813 (6 384 − 957,60 − 5 426,40 = 0)',
          'F-1103 + V-0814 (2 400 − 2 000 = 400 ≠ 0)',
          'AV-207 + CH-0813 sans la facture',
        ],
        expected: '1',
        explanation:
          'La facture F-1102 (6 384 €) a donné lieu à un retour de marchandises matérialisé par l’avoir AV-207 (957,60 €), puis à un chèque CH-0813 (5 426,40 €) : le groupe {F-1102 ; AV-207 ; CH-0813} se solde exactement à zéro (6 384 − 957,60 − 5 426,40 = 0) — c’est le lettrage correct. À noter : F-1101 + V-0812 (4 770 − 4 770 = 0) constitue lui aussi un groupe soldé. En revanche F-1103 + V-0814 laisse un écart de 400 € : lettrage partiel, à analyser.',
      },
      {
        id: 'cas-11-q2',
        question: 'Montant du chèque CH-0813 à lettrer avec F-1102 et l’avoir AV-207 (en €) ?',
        type: 'numeric',
        expected: 5426.4,
        explanation:
          'Le règlement attendu = facture TTC − avoir TTC = 6 384,00 − 957,60 = 5 426,40 €. Détail TVA : facture HT 5 320,00 + TVA 1 064,00 = 6 384,00 ; avoir HT 798,00 + TVA 159,60 = 957,60. Le chèque CH-0813 porte exactement ce montant : le groupe se solde au centime, signe d’un client (et d’un lettrage) propre sur cette facture.',
      },
      {
        id: 'cas-11-q3',
        question: 'Solde du compte client au 31/07/2024, après lettrage des groupes soldés (en €) ?',
        type: 'numeric',
        expected: 3600,
        explanation:
          'Méthode : total débits = 3 200 + 4 770 + 6 384 + 2 400 = 16 754 € ; total crédits = 4 770 + 957,60 + 5 426,40 + 2 000 = 13 154 € ; solde = 16 754 − 13 154 = 3 600 €. Lecture par groupes : groupe F-1101/V-0812 soldé (0) ; groupe F-1102/AV-207/CH-0813 soldé (0) ; restent le solde à report de 3 200 € (F-0442 jamais réglée) et l’écart de 400 € sur F-1103 : 3 200 + 400 = 3 600 €.',
      },
      {
        id: 'cas-11-q4',
        question: 'Écart restant sur la facture F-1103 après le virement V-0814 (en €) ?',
        type: 'numeric',
        expected: 400,
        explanation:
          'F-1103 TTC = 2 400,00 € (HT 2 000,00 + TVA 400,00) ; virement V-0814 = 2 000,00 € ; écart = 400,00 € — soit exactement le montant de la TVA. Le libellé du virement (« règlement F-1103 — montant HT ») l’explique : le client a payé le montant hors taxes au lieu du TTC. Action : réclamer les 400 € en rappelant que la créance est TTC, avec copie de la facture.',
      },
      {
        id: 'cas-11-q5',
        question:
          'Quelle incohérence globale relevez-vous sur ce compte et quelles actions engagez-vous ?',
        type: 'open',
        keywords: ['lettrage', 'avoir', 'TVA', 'relance', 'dépréciation'],
        explanation:
          'Incohérences : (1) un écart de 400 € sur F-1103 qui correspond exactement à la TVA — le client a réglé le HT (confirmé par le libellé du virement) : réclamation des 400 € ; (2) une créance ancienne : F-0442 (3 200 €) impayée depuis le 12/06 malgré deux relances — à relancer fermement, et à porter en créance douteuse avec dépréciation (411D / 491 au PCG, 2921/3421 au CGNC) si le risque de non-recouvrement est avéré ; l’escompte n’explique rien puisque l’entreprise n’en accorde pas. Actions : (3) achever le lettrage (groupes soldés correctement constitués : F-1101/V-0812 et F-1102/AV-207/CH-0813) ; (4) produire la balance âgée du compte (3 600 € dont 3 200 € de plus de 45 jours) ; (5) documenter le suivi et proposer une provision si nécessaire — c’est la sortie attendue d’un lettrage : un solde justifié ligne par ligne.',
      },
    ],
    expectedFindings: [
      'Le virement V-0814 (2 000 €) correspond au montant HT de F-1103 : le client a payé hors taxes, il manque 400 € de TVA — réclamation à émettre.',
      'La facture F-0442 (3 200 €, juin) reste impayée au 31/07 malgré deux relances : relance ferme et dépréciation à apprécier (créance de plus de 45 jours).',
      'Le groupe F-1102 + AV-207 + CH-0813 se solde à zéro : facture, avoir et règlement correctement lettrés (6 384 − 957,60 − 5 426,40 = 0) ; idem F-1101 + V-0812.',
      'Solde du compte au 31/07 : 3 600 € = 3 200 € (F-0442 impayée) + 400 € (TVA à réclamer sur F-1103).',
      'L’escompte n’explique pas l’écart : l’entreprise n’en accorde pas à ce client.',
    ],
    conclusionModel:
      'Le lettrage du compte client « Épicerie Moderne » au 31/07/2024 fait ressortir un solde de 3 600 € entièrement expliqué : deux groupes soldés par lettrage (F-1101/V-0812 ; F-1102/AV-207/CH-0813, ce dernier intégrant l’avoir de retour de 957,60 €), un écart de 400 € sur F-1103 correspondant à la TVA non réglée (le client a viré le montant HT, confirmé par le libellé du virement — réclamation émise), et la facture F-0442 de 3 200 € impayée depuis juin malgré deux relances — relance recommandée et dépréciation à apprécier sur la base de la balance âgée si le risque se confirme. Actions de fond : rappel systématique au client du caractère TTC des créances et suivi mensuel de l’ancienneté. Comptes cités selon PCG (411/491) ; équivalents CGNC marocain (3421/2921) avec une logique identique. Dossier fictif, conclusion à visée pédagogique.',
  },

  // ---------------------------------------------------------------
  // CAS 12 — Grand écart de trésorerie à expliquer (Transversal)
  // ---------------------------------------------------------------
  {
    id: 'cas-12',
    title: 'Grand écart de trésorerie : 12 895 € à démêler avant la revue de direction',
    origin: 'Transversal',
    domain: 'Trésorerie · Réconciliation globale',
    difficulty: 5,
    situation:
      'Société Aquilo (fictive). Le 1er septembre, le responsable financier vous convoque : le relevé bancaire du 31/08 affiche 65 390 € quand la comptabilité n’en reconnaît que 52 495 € — un écart de 12 895 € que personne ne sait expliquer, et la revue de direction a lieu demain matin. Il vous remet le journal de banque d’août, le relevé, la facture Papyrus suspectée et la balance, avec une seule information fiable : les soldes d’ouverture au 01/08 étaient parfaitement rapprochés (69 435 € de part et d’autre). Vous devez dérouler une méthodologie de réconciliation, chiffrer chaque composante de l’écart, proposer les écritures correctrices et rédiger la note d’explication.',
    documents: [
      {
        kind: 'text',
        name: 'Note du responsable financier — 01/09/2025',
        content:
          '« Le solde de notre compte bancaire au 31/08 ne concorde pas avec la comptabilité : relevé 65 390 € contre 52 495 € au 512, soit un écart de 12 895 € que personne ne sait m’expliquer.\n' +
          'Avant la revue de direction de demain matin, je veux une note chiffrée : origine de chaque composante de l’écart, écritures correctrices proposées et solde rapproché.\n' +
          'Je vous remets le journal de banque d’août, le relevé bancaire, la facture Papyrus et la balance. Les soldes d’ouverture au 01/08 étaient rapprochés (69 435 € de part et d’autre). »\n' +
          'Société Aquilo (fictive) — document fictif.',
      },
      {
        kind: 'table',
        name: 'Journal de banque — août 2025 (extraits)',
        columns: ['Date', 'Libellé', 'Réf. pièce', 'Compte', 'Débit 512 (€)', 'Crédit 512 (€)'],
        rows: [
          ['02/08', 'Paiement fournisseur Papyrus Bureau (FA-887)', 'V-1021', '401', '', 12450],
          ['09/08', 'Virement fournisseur Itergo Industries', 'V-1022', '401', '', 3800],
          ['12/08', 'Virement fournisseur Itergo Industries', 'V-1023', '401', '', 3800],
          ['15/08', 'Encaissement client Sabord SARL', 'V-1024', '411', 2000, ''],
          ['20/08', 'Prélèvement SEPA assurance', 'PRL-0815', '616', '', 840],
          ['22/08', 'Chèque n° 3188 — Maintenance Pro', 'CH-3188', '401', '', 2200],
          ['30/08', 'Remise de chèques clients (dont 4 150 € Épicerie Moderne)', 'REM-0831', '411', 4150, ''],
        ],
        note: 'Document fictif. Le 12/08, le virement Itergo a été saisi une seconde fois (V-1023) alors que la banque n’a exécuté qu’un seul transfert. La remise de chèques du 30/08 n’est créditée par la banque que le 01/09 (J+1).',
      },
      {
        kind: 'table',
        name: 'Relevé bancaire — août 2025 (opérations de fin de mois)',
        columns: ['Date', 'Opération', 'Débit (€)', 'Crédit (€)'],
        rows: [
          ['02/08', 'Virement émis — Papyrus Bureau (FA-887)', 1245, ''],
          ['09/08', 'Virement émis — Itergo Industries', 3800, ''],
          ['15/08', 'Virement reçu — Sabord SARL', '', 2000],
          ['20/08', 'Prélèvement SEPA — assurance', 840, ''],
          ['28/08', 'Frais et commissions bancaires d’août', 235, ''],
          ['31/08', 'Intérêts créditeurs', '', 75],
        ],
        note: 'Document fictif. Solde au 01/08 : 69 435 € · Solde au 31/08 : 65 390 €. Aucune trace au relevé du second virement Itergo, de la remise de chèques du 30/08 ni du chèque n° 3188 (non présenté).',
      },
      {
        kind: 'table',
        name: 'Balance au 31/08/2025 (extraits)',
        columns: ['Compte', 'Libellé', 'Solde débiteur (€)', 'Solde créditeur (€)'],
        rows: [
          ['512001', 'Banque courante', 52495, ''],
          ['401PAP', 'Fournisseur Papyrus Bureau', 11205, ''],
          ['401ITE', 'Fournisseur Itergo Industries', 3800, ''],
          ['627', 'Services bancaires', '— aucun mouvement enregistré en août', ''],
          ['768', 'Produits d’intérêts', '— aucun mouvement enregistré en août', ''],
        ],
        note: 'Document fictif. Un solde débiteur de compte fournisseur traduit un paiement en excédent par rapport à la dette : indice à exploiter.',
      },
      {
        kind: 'text',
        name: 'Facture FA-887 — Papyrus Bureau (payée en août)',
        content:
          'Papyrus Bureau SARL (données fictives)\n' +
          'Facture n° FA-887 du 28/07/2025 — paiement reçu le 02/08/2025 par virement.\n' +
          'Désignation : fournitures et consommables bureautiques — lot trimestriel.\n' +
          'Montant HT : 1 037,50 € · TVA 20 % : 207,50 € · Net à payer TTC : 1 245,00 € · Conditions : comptant.\n' +
          'Note interne du service comptable : « le virement envoyé le 02/08 semble anormalement élevé ; vérifier la saisie ».\n' +
          'Document fictif.',
      },
    ],
    tasks: [
      {
        id: 'cas-12-q1',
        question: 'Montant TTC correct de la facture FA-887 Papyrus (en €) ?',
        type: 'numeric',
        expected: 1245,
        explanation:
          'Contrôle arithmétique de la facture : HT 1 037,50 € × 1,20 = 1 245,00 € TTC (TVA 207,50 €). Or le journal de banque enregistre un paiement de 12 450 € : la note interne du service comptable était fondée. Le montant réellement dû — et réellement débité par la banque (relevé : virement de 1 245 €) — est de 1 245,00 €.',
      },
      {
        id: 'cas-12-q2',
        question: 'Excès comptabilisé au 512 du fait de l’erreur de saisie ×10 (en €) ?',
        type: 'numeric',
        expected: 11205,
        explanation:
          'Erreur ×10 : 12 450 € saisis au lieu de 1 245 €. Excès = 12 450 − 1 245 = 11 205 €. Indice en balance : le compte 401 Papyrus ressort débiteur de 11 205 € — l’entreprise a « payé » 11 205 € de trop en comptabilité : c’est exactement l’excès de saisie. Écriture de correction : débit 512 / crédit 401 Papyrus pour 11 205 € (extourne partielle du paiement).',
      },
      {
        id: 'cas-12-q3',
        question: 'Solde du 512 après correction des deux erreurs de saisie (×10 et doublon Itergo), avant frais et intérêts (en €) ?',
        type: 'numeric',
        expected: 67500,
        explanation:
          'Étape 1 — solde erroné au 31/08 : 52 495 €. Étape 2 — extourne de l’excès ×10 : + 11 205 € → 63 700 €. Étape 3 — extourne du doublon Itergo (virement de 3 800 € saisi deux fois, exécuté une fois) : + 3 800 € → 67 500 €. Les deux erreurs de saisie expliquent à elles seules 15 005 € d’écart. Restent à traiter les éléments du relevé non comptabilisés (frais, intérêts) et les décalages.',
      },
      {
        id: 'cas-12-q4',
        question: 'Solde rapproché au 31/08/2025 (en €) ?',
        type: 'numeric',
        expected: 67340,
        explanation:
          'Chemin 1 — depuis la comptabilité corrigée : 52 495 + 11 205 (extourne ×10) + 3 800 (extourne doublon) − 235 (frais bancaires à comptabiliser) + 75 (intérêts à comptabiliser) = 67 340 €. Chemin 2 — depuis le relevé : 65 390 + 4 150 (remise de chèques en transit, créditée le 01/09) − 2 200 (chèque n° 3188 émis non présenté) = 67 340 €. Les deux chemins convergent au centime : le rapprochement est démontré.',
      },
      {
        id: 'cas-12-q5',
        question: 'Montant total des écritures correctrices à passer (en €) ?',
        type: 'numeric',
        expected: 15315,
        explanation:
          'Quatre écritures : extourne de l’excès de saisie ×10 : 11 205 € (512 D / 401 Papyrus C). Extourne du doublon Itergo : 3 800 € (512 D / 401 Itergo C). Frais bancaires d’août : 235 € (627 D / 512 C). Intérêts créditeurs : 75 € (512 D / 768 C). Total = 11 205 + 3 800 + 235 + 75 = 15 315 €. Les décalages (remise en transit, chèque non présenté) ne donnent lieu à aucune écriture : ils se reportent sur le rapprochement de septembre.',
      },
      {
        id: 'cas-12-q6',
        question: 'Décrivez votre démarche de résolution de l’écart, étape par étape.',
        type: 'open',
        keywords: ['pointage', 'extourne', 'transit', 'frais', 'doublon'],
        explanation:
          'Démarche attendue : (1) partir des soldes (52 495 € comptable / 65 390 € relevé) et de l’écart brut 12 895 € ; (2) pointer le journal de banque contre le relevé ligne à ligne (couples référence/montant/sens) ; (3) qualifier chaque suspens : erreurs comptables (paiement ×10 de 11 205 €, doublon Itergo de 3 800 €), éléments du relevé non comptabilisés (frais 235 €, intérêts 75 €), décalages normaux (remise de chèques en transit 4 150 €, chèque émis non présenté 2 200 €) ; (4) croiser avec les indices de la balance (401 Papyrus débiteur de 11 205 €, 401 Itergo débiteur de 3 800 €, 627 et 768 sans mouvement) ; (5) passer les écritures correctrices (15 315 € au total) ; (6) calculer le solde rapproché par les deux chemins (67 340 €) et exiger la convergence ; (7) documenter la note chiffrée et faire valider. Contrôle final : 11 205 + 3 800 − 235 + 75 − 4 150 + 2 200 = 12 895 € — l’écart est intégralement expliqué.',
      },
      {
        id: 'cas-12-q7',
        question:
          'Rédigez la note d’explication à adresser au responsable financier pour la revue de direction (quelques lignes, chiffrée).',
        type: 'open',
        keywords: ['12 895', 'erreur', 'doublon', 'extourne', 'solde rapproché'],
        explanation:
          'Note attendue : « L’écart de 12 895 € constaté au 31/08 entre le relevé (65 390 €) et la comptabilité (52 495 €) est intégralement expliqué et corrigé. Origines : une erreur de saisie ×10 sur le paiement de la facture Papyrus FA-887 (12 450 € débités au lieu de 1 245 €, soit 11 205 € d’excès — extournée), un doublon de comptabilisation du virement Itergo (3 800 € — extourné), des frais bancaires de 235 € et des intérêts de 75 € non comptabilisés (régularisés), auxquels s’ajoutent deux décalages normaux sans écriture : la remise de chèques du 30/08 (4 150 €, créditée le 01/09) et le chèque n° 3188 non présenté (2 200 €). Les écritures correctrices totalisent 15 315 €. Le solde rapproché s’établit à 67 340 €, convergent par les deux chemins de calcul. Recommandations : contrôle de saisie (double validation des montants > 1 000 €), détection automatique des doublons de virement. »',
      },
    ],
    expectedFindings: [
      'Erreur de saisie ×10 sur le paiement de la facture Papyrus FA-887 : 12 450 € débités au 512 au lieu de 1 245 € → excès de 11 205 € (indice : compte 401 Papyrus débiteur de 11 205 € en balance).',
      'Doublon de comptabilisation du virement fournisseur Itergo : 3 800 € saisis deux fois (V-1022 et V-1023) pour un seul transfert exécuté par la banque.',
      'Frais bancaires d’août (235 €) et intérêts créditeurs (75 €) présents au relevé et non comptabilisés.',
      'Remise de chèques en transit (4 150 €, créditée le 01/09) et chèque n° 3188 émis non présenté (2 200 €) : décalages normaux, aucune écriture.',
      'Réconciliation complète : 11 205 + 3 800 − 235 + 75 − 4 150 + 2 200 = 12 895 € ; écritures correctrices de 15 315 € ; solde rapproché de 67 340 € (convergence des deux chemins).',
    ],
    conclusionModel:
      'L’écart de trésorerie de 12 895 € constaté au 31/08/2025 est intégralement expliqué et traité. Il résulte de la combinaison de quatre anomalies comptables — une erreur de saisie ×10 sur le paiement Papyrus FA-887 (11 205 € d’excès, le compte fournisseur débiteur en balance en apportait la preuve), un doublon de virement Itergo (3 800 €), des frais bancaires non comptabilisés (235 €) et des intérêts créditeurs non comptabilisés (75 €) — et de deux décalages bancaires normaux (remise de chèques de 4 150 € en transit, chèque de 2 200 € non présenté). Les écritures correctrices proposées totalisent 15 315 € et le solde rapproché s’établit à 67 340 €, vérifié par convergence des deux chemins de calcul (comptabilité corrigée et relevé ajusté). Recommandations soumises à la revue de direction : double validation des saisies de paiement dépassant un seuil, contrôle anti-doublon sur les virements fournisseurs, comptabilisation systématique des frais et intérêts dès réception du relevé. Comptes cités selon PCG (512, 627, 768, 401) ; la méthode de réconciliation est identique en CGNC et en IFRS. Dossier fictif, à visée pédagogique.',
  },
]
