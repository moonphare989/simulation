import type { PracticalCase } from '@/lib/types'

// =====================================================================
// Laboratoire de cas pratiques — Partie 1 (cas 01 à 06)
// Scénarios 100 % fictifs à visée pédagogique (préparation entretien
// PFE audit / comptabilité / trésorerie). Tous les montants sont
// vérifiés et cohérents entre les documents de chaque dossier.
// Notation : expected = index d'option en string, nombre en number,
// string[] pour multi, keywords pour open (cf. exercise-runner.tsx).
// =====================================================================

export const casesPart1: PracticalCase[] = [
  // ---------------------------------------------------------------
  // CAS 01 — Cut-off fin d'exercice distributeur (Fidumac)
  // ---------------------------------------------------------------
  {
    id: 'cas-01',
    title: 'Cut-off fin d’exercice distributeur : ventes à décaler, CA à reclasser',
    origin: 'Fiche Fidumac · Audit',
    domain: 'Cycle ventes · Séparation des exercices',
    difficulty: 3,
    situation:
      'Vous êtes auditeur junior chez Fidumac (cabinet d’audit — scénario pédagogique). Vous intervenez sur la mission d’audit légal de la société Nordica Diffusion (distribution spécialisée, données fictives), dont l’exercice se clôture au 31/12/N. Le senior vous confie le test de cut-off du cycle ventes : il vous remet l’extrait du journal des ventes de décembre N et janvier N+1, les bons de livraison correspondants et la feuille de mission (CA de l’exercice : 2 400 000 € HT ; seuil de signification : 25 000 €). Vous devez rapprocher chaque facture de son bon de livraison, identifier les ventes mal rattachées, chiffrer les reclassements et conclure sur l’incidence.',
    documents: [
      {
        kind: 'table',
        name: 'Journal des ventes — extrait décembre N / janvier N+1 (TVA 20 %)',
        columns: ['N° facture', 'Date facture', 'Client', 'HT (€)', 'TVA 20 % (€)', 'TTC (€)'],
        rows: [
          ['F-1216', '28/12/N', 'Magasin Cap Nord', 12400, 2480, 14880],
          ['F-1217', '30/12/N', 'SuperSol Leval', 8600, 1720, 10320],
          ['F-1218', '02/01/N+1', 'Grands Froids SARL', 15200, 3040, 18240],
          ['F-1219', '03/01/N+1', 'Magasin Cap Nord', 9750, 1950, 11700],
          ['F-1220', '05/01/N+1', 'Discausse Est', 21300, 4260, 25560],
        ],
        note: 'Document fictif. Nordica Diffusion clôture son exercice au 31/12/N. Toutes les factures ont été comptabilisées à leur date de facture.',
      },
      {
        kind: 'table',
        name: 'Bons de livraison (BL) rattachés aux factures de jonction',
        columns: ['N° BL', 'Client', 'Date de livraison', 'Facture rattachée'],
        rows: [
          ['BL-3388', 'Magasin Cap Nord', '28/12/N', 'F-1216'],
          ['BL-3389', 'SuperSol Leval', '04/01/N+1', 'F-1217'],
          ['BL-3390', 'Grands Froids SARL', '30/12/N', 'F-1218'],
          ['BL-3391', 'Magasin Cap Nord', '03/01/N+1', 'F-1219'],
          ['BL-3392', 'Discausse Est', '05/01/N+1', 'F-1220'],
        ],
        note: 'Document fictif. Le bon de livraison matérialise la livraison effective : c’est lui qui déclenche la reconnaissance du chiffre d’affaires (transfert des risques et avantages).',
      },
      {
        kind: 'text',
        name: 'Feuille de mission (extraits)',
        content:
          'Société audité : Nordica Diffusion (fictive) — clôture au 31/12/N.\n' +
          'Chiffre d’affaires de l’exercice N : 2 400 000 € HT.\n' +
          'Seuil de signification retenu : 25 000 €.\n' +
          'Assertion testée : séparation des exercices (cut-off) sur le cycle ventes.\n' +
          'Référentiels : la règle de rattachement des produits est commune — PCG art. 213-4 (spécialisation des exercices), CGNC marocain (principe de rattachement des produits aux exercices), IFRS 15 (reconnaissance au transfert du contrôle, matérialisé par la livraison). Seuls les intitulés de comptes changent selon le référentiel ; la logique du test est identique.',
      },
    ],
    tasks: [
      {
        id: 'cas-01-q1',
        question: 'Quel principe comptable gouverne le traitement de ces factures de jonction décembre / janvier ?',
        type: 'mcq',
        options: [
          'Principe de prudence',
          'Principe de spécialisation (séparation) des exercices',
          'Principe du coût historique',
          'Principe de non-compensation',
        ],
        expected: '1',
        explanation:
          'Le principe de spécialisation des exercices (cut-off) impose de rattacher chaque produit à l’exercice auquel il se rapporte — pour une vente, à la date de livraison (transfert des risques et avantages), indépendamment de la date de facturation. Démarche concrète : pour chaque facture de l’échantillon, on compare la date de facture à la date du BL. Une facture de janvier peut donc concerner N (livraison de décembre) et une facture de décembre peut concerner N+1 (livraison de janvier). Ce test valide l’assertion « séparation des exercices » du cycle ventes.',
      },
      {
        id: 'cas-01-q2',
        question: 'Quelle facture comptabilisée en N+1 doit être rattachée à l’exercice N ?',
        type: 'mcq',
        options: [
          'F-1216 — Magasin Cap Nord (facturée le 28/12/N)',
          'F-1218 — Grands Froids SARL (facturée le 02/01/N+1)',
          'F-1219 — Magasin Cap Nord (facturée le 03/01/N+1)',
          'F-1220 — Discausse Est (facturée le 05/01/N+1)',
        ],
        expected: '1',
        explanation:
          'Étape par étape : F-1219 et F-1220 ont des BL de janvier N+1 → rien à faire. F-1216 : facture et BL du 28/12/N → correctement en N. Reste F-1218 : facturée le 02/01/N+1 mais le BL-3390 atteste d’une livraison le 30/12/N. Le transfert des risques et avantages a eu lieu en N : le CA de 15 200 € HT appartient donc à N. Il faut le rattacher par une écriture de facture à établir (clients — produits non encore facturés : 418 en PCG, 3421 en CGNC marocain ; en IFRS, contrat avec contrepartie conditionnelle déjà satisfaite).',
      },
      {
        id: 'cas-01-q3',
        question: 'Montant HT (en €) de la vente à décaler de N vers N+1 (produit constaté d’avance) ?',
        type: 'numeric',
        expected: 8600,
        explanation:
          'F-1217 est facturée le 30/12/N mais la livraison (BL-3389) date du 04/01/N+1 : le CA ne peut pas rester dans N. Calcul : 8 600 € HT ; contrôle TTC : 8 600 × 1,20 = 10 320 €. Écriture : extourne de la vente (crédit du compte de produits pour 8 600 HT, débit du client pour 10 320 TTC) puis inscription en produit constaté d’avance (4387 en PCG, 4491 en CGNC) pour 8 600 € HT, la TVA de 1 720 € étant à régulariser (44571 / compte de TVA facturée).',
      },
      {
        id: 'cas-01-q4',
        question: 'Incidence nette (en € HT) des reclassements sur le chiffre d’affaires de N ?',
        type: 'numeric',
        expected: 6600,
        explanation:
          'Étape 1 : + 15 200 € (F-1218, livraison du 30/12/N non facturée → CA à rattacher à N). Étape 2 : − 8 600 € (F-1217, facturée en N mais livrée le 04/01/N+1 → CA à décaler en N+1). Étape 3 : incidence nette = 15 200 − 8 600 = + 6 600 €. Le CA de N passe de 2 400 000 à 2 406 600 € HT. Remarque de méthode : on peut aussi dérouler F-1216, F-1219 et F-1220 (facture et BL dans le même exercice) pour confirmer qu’elles n’ont aucune incidence.',
      },
      {
        id: 'cas-01-q5',
        question:
          'Rédigez la note au senior : écritures de régularisation proposées et conclusion provisoire (seuil de signification : 25 000 €).',
        type: 'open',
        keywords: ['extourne', 'produit constaté d’avance', 'facture à établir', 'seuil', 'cut-off'],
        explanation:
          'Démarche attendue, étape par étape : (1) extourner la vente F-1217 (8 600 € HT) et la replacer en produits constatés d’avance ; (2) comptabiliser la facture à établir pour F-1218 (15 200 € HT) au 31/12/N ; (3) chiffrer l’incidence nette : + 6 600 € sur le CA (2 400 000 → 2 406 600 €) ; (4) comparer au seuil : chaque écart (8 600 et 15 200) et l’incidence nette (6 600) sont inférieurs au seuil de 25 000 € — pas d’incidence sur l’opinion envisageable, mais la correction reste exigée au nom du principe de spécialisation des exercices ; (5) relever la faiblesse de contrôle interne sous-jacente : la facturation n’est pas déclenchée par la validation du BL, d’où un risque de récidive du décalage.',
      },
    ],
    expectedFindings: [
      'F-1217 (8 600 € HT) facturée le 30/12/N pour une livraison du 04/01/N+1 (BL-3389) : vente à décaler vers N+1 — produit constaté d’avance.',
      'F-1218 (15 200 € HT) facturée le 02/01/N+1 pour une livraison du 30/12/N (BL-3390) : CA à rattacher à N — facture à établir / clients, produits non encore facturés.',
      'Incidence nette sur le CA de N : + 6 600 € HT (2 400 000 → 2 406 600 €).',
      'Chaque écart est inférieur au seuil de signification (25 000 €) : pas d’incidence sur l’opinion d’audit, mais correction comptable exigée au titre du cut-off.',
      'Faiblesse de contrôle interne : la facturation ne semble pas verrouillée sur le BL validé — risque de récidive des décalages de période.',
    ],
    conclusionModel:
      'À l’issue du test de cut-off ventes portant sur 5 factures de jonction décembre/janvier, deux erreurs de séparation des exercices ont été relevées : F-1217 (8 600 € HT) facturée en N pour une livraison du 04/01/N+1, à décaler en produit constaté d’avance ; F-1218 (15 200 € HT) livrée le 30/12/N mais facturée en N+1, à rattacher à N par une facture à établir. L’incidence nette ressort à + 6 600 € HT sur un CA de 2 400 000 € (2 406 600 € après correction). Ces reclassements, pris individuellement et cumulés, restent inférieurs au seuil de signification de 25 000 € : ils n’affectent pas l’opinion mais la correction des comptes est demandée au titre du principe de spécialisation des exercices (intitulés de comptes à adapter au référentiel applicable — PCG 418/4387, CGNC 3421/4491, IFRS 15 sur le transfert du contrôle). Recommandation de contrôle interne : verrouiller le déclenchement de la facturation sur le bon de livraison validé. Conclusions formulées sur données fictives à titre pédagogique.',
  },

  // ---------------------------------------------------------------
  // CAS 02 — Stocks BTP et situations de travaux (Fidumac)
  // ---------------------------------------------------------------
  {
    id: 'cas-02',
    title: 'Stocks BTP et situations de travaux : avancement, produits et provision',
    origin: 'Fiche Fidumac · Audit',
    domain: 'Stocks · Contrats à long terme',
    difficulty: 4,
    situation:
      'Chez Fidumac (scénario pédagogique), vous auditez la société BâtiSud Travaux (BTP, données fictives), clôture au 31/12/N. L’entreprise facture ses chantiers par situations périodiques, mais le chiffre d’affaires doit suivre l’avancement réel des travaux. On vous remet le tableau des situations de travaux au 31/12/N, la note de méthode du chef comptable et la note du conducteur de travaux. Vous devez vérifier l’avancement de chaque chantier, déterminer le CA à reconnaître, détecter le chantier en perte prévisionnelle et proposer les écritures de régularisation (seuil de signification : 30 000 €).',
    documents: [
      {
        kind: 'table',
        name: 'Situations de travaux au 31/12/N (€ HT)',
        columns: ['Chantier', 'Marché total', 'Situations facturées fin N-1', 'Situations facturées N', 'Coûts engagés cumulés', 'Coût total prévisionnel'],
        rows: [
          ['Immeuble Ravel', 600000, 240000, 180000, 390000, 520000],
          ['Pont de Loire', 400000, 100000, 90000, 180000, 320000],
          ['Extension Usine Kal', 250000, 90000, 60000, 234000, 260000],
          ['Total', 1250000, 430000, 330000, 804000, 1100000],
        ],
        note: 'Document fictif. Les situations facturées ont été comptabilisées en produits au fil de l’eau (et encaissées ou à encaisser). Les coûts engagés cumulés sont ceux reconnus en charges à la clôture.',
      },
      {
        kind: 'text',
        name: 'Note de méthode — reconnaissance des produits (BTP)',
        content:
          'Méthode retenue : rattachement des produits à l’avancement des travaux (percentage of completion).\n' +
          'Étape 1 — avancement économique = coûts engagés cumulés ÷ coût total prévisionnel.\n' +
          'Étape 2 — CA à reconnaître cumulé = avancement × montant total du marché.\n' +
          'Étape 3 — écart entre CA à reconnaître et situations facturées cumulées : produit complémentaire à comptabiliser (produits nets partiels sur opérations à long terme) si le CA à reconnaître excède la facturation, produit constaté d’avance dans le cas inverse.\n' +
          'Étape 4 — toute perte prévisionnelle à l’achèvement (coût total prévisionnel > marché) est provisionnée intégralement dès qu’elle est connue (prudence).\n' +
          'Référentiels : le PCG (produits nets partiels) et le CGNC marocain (produits des contrats à long terme) convergent sur l’avancement ; en IFRS 15, la reconnaissance suit le transfert du contrôle, mesuré par l’avancement — la conclusion économique est la même. Données fictives.',
      },
      {
        kind: 'text',
        name: 'Note du conducteur de travaux — chantier « Extension Usine Kal »',
        content:
          'Retards liés à la météo et à un lot structurel erroné : le coût total prévisionnel est réévalué à 260 000 € HT pour un marché de 250 000 € HT.\n' +
          'Le client refuse tout avenant. Avancement constaté par le maître d’œuvre : 90 %.\n' +
          'Situations validées et facturées à ce jour : 150 000 € HT.\n' +
          'Achèvement prévu au 2e trimestre N+1. Document fictif.',
      },
    ],
    tasks: [
      {
        id: 'cas-02-q1',
        question: 'Quelle méthode de reconnaissance du chiffre d’affaires s’applique à ces chantiers ?',
        type: 'mcq',
        options: [
          'À la facturation des situations',
          'À l’encaissement des situations',
          'À l’avancement des travaux (coûts engagés / coûts prévisionnels)',
          'À la livraison définitive de l’ouvrage',
        ],
        expected: '2',
        explanation:
          'Les situations ne sont qu’un mode de facturation intermédiaire (souvent lié à des considérations de trésorerie et de fiscalité) : elles ne coïncident pas mécaniquement avec la création de valeur. Le CA suit l’avancement économique, mesuré par le ratio coûts engagés cumulés / coût total prévisionnel. La facturation doit donc être rattrapée par des produits nets partiels (ou des produits constatés d’avance) pour aligner le résultat sur la réalité économique du chantier.',
      },
      {
        id: 'cas-02-q2',
        question: 'Avancement du chantier « Immeuble Ravel » au 31/12/N, en % (ex. 62,5) ?',
        type: 'numeric',
        expected: 75,
        explanation:
          'Avancement = coûts engagés cumulés ÷ coût total prévisionnel = 390 000 ÷ 520 000 = 0,75 → 75 %. Contrôle de cohérence : CA cumulé correspondant = 75 % × 600 000 = 450 000 €, à comparer aux situations facturées cumulées de 240 000 + 180 000 = 420 000 €.',
      },
      {
        id: 'cas-02-q3',
        question: 'Produit complémentaire total (en € HT) à reconnaître au 31/12/N sur les trois chantiers ?',
        type: 'numeric',
        expected: 140000,
        explanation:
          'Chantier par chantier : Immeuble Ravel : avancement 390 000/520 000 = 75 % → CA cumulé = 75 % × 600 000 = 450 000 € ; situations facturées cumulées = 240 000 + 180 000 = 420 000 € → produit complémentaire = 450 000 − 420 000 = 30 000 €. Pont de Loire : 180 000/320 000 = 56,25 % → 56,25 % × 400 000 = 225 000 € ; facturé = 100 000 + 90 000 = 190 000 € → + 35 000 €. Extension Kal : 234 000/260 000 = 90 % → 90 % × 250 000 = 225 000 € ; facturé = 90 000 + 60 000 = 150 000 € → + 75 000 €. Total = 30 000 + 35 000 + 75 000 = 140 000 € HT.',
      },
      {
        id: 'cas-02-q4',
        question: 'Provision pour perte à l’achèvement à constater sur le chantier « Extension Usine Kal » (en €) ?',
        type: 'numeric',
        expected: 10000,
        explanation:
          'Calcul : coût total prévisionnel 260 000 € − marché 250 000 € = 10 000 € de perte prévisionnelle à l’achèvement. Principe de prudence : la perte est provisionnée intégralement dès qu’elle est connue, quel que soit l’avancement (elle ne sera pas « lissée » au fil des situations restantes). C’est un point que l’on retrouve dans les trois référentiels (PCG, CGNC, IFRS 15 — coûts de la contrepartie dépassant le prix de vente attendu).',
      },
      {
        id: 'cas-02-q5',
        question: 'Quelles diligences sont nécessaires pour valider ces chiffres avant de conclure ?',
        type: 'multi',
        options: [
          'Rapprocher les situations facturées des factures émises et des encaissements',
          'Faire corroborer l’avancement par le maître d’œuvre (PV de visite, situations signées)',
          'Revoir le chiffrage du coût total prévisionnel et ses réévaluations',
          'Vérifier la provision pour perte à l’achèvement du chantier Kal',
          'Attendre la facturation définitive de l’ouvrage pour tout comptabiliser',
          'Circulariser les clients sur leur satisfaction commerciale',
        ],
        expected: ['0', '1', '2', '3'],
        explanation:
          'La validation s’appuie sur des preuves externes : rapprochement situations/factures/encaissements (réalité et exactitude), avancement corroboré par le maître d’œuvre (existence et évaluation du travail réellement effectué), revue des coûts prévisionnels et de leurs réévaluations (évaluation — c’est là que se logent les chantiers en perte), et contrôle de la provision pour perte (prudence). À l’inverse : attendre la facturation définitive nierait la méthode à l’avancement ; « circulariser les clients sur leur satisfaction » n’est pas une procédure d’audit des situations de travaux.',
      },
      {
        id: 'cas-02-q6',
        question:
          'Proposez les écritures de régularisation au 31/12/N et rédigez votre conclusion d’audit (seuil de signification : 30 000 €).',
        type: 'open',
        keywords: ['produits nets partiels', 'avancement', 'provision', 'perte', 'prudence'],
        explanation:
          'Démarche attendue : (1) comptabiliser 140 000 € HT de produits nets partiels (débit du compte de clients sur opérations à long terme / crédit des produits nets partiels — 475 en PCG, équivalent CGNC pour les contrats à long terme) ; (2) constater la provision pour perte à l’achèvement de 10 000 € (débit charge exceptionnelle ou dotations / crédit provision) ; (3) incidence nette sur le résultat : + 140 000 − 10 000 = + 130 000 € ; (4) comparaison au seuil : 140 000 € et 130 000 € dépassent largement le seuil de 30 000 € → incidences significatives, corrections exigées avant arrêté des comptes, avec incidence sur l’opinion si refus ; (5) conclusion : comptes corrigés, faiblesse de suivi des coûts prévisionnels à documenter (le chantier Kal en perte n’avait déclenché aucune alerte comptable).',
      },
    ],
    expectedFindings: [
      'CA sous-évalué de 140 000 € HT au 31/12/N : la facturation (situations) est en retrait sur l’avancement (Ravel + 30 000, Loire + 35 000, Kal + 75 000).',
      'Chantier « Extension Usine Kal » en perte prévisionnelle : coût total 260 000 € > marché 250 000 € → provision pour perte à l’achèvement de 10 000 € non constatée.',
      'Incidence nette sur le résultat : + 130 000 € (140 000 € de produits complémentaires − 10 000 € de provision), très supérieure au seuil de 30 000 €.',
      'Faiblesse de contrôle interne : le suivi des situations n’est pas rapproché de l’avancement réel ni des réévaluations de coûts prévisionnels.',
      'Point de référentiel : comptes selon PCG (produits nets partiels sur opérations à long terme) / CGNC (contrats à long terme) ; logique identique en IFRS 15 (avancement = mesure du transfert de contrôle).',
    ],
    conclusionModel:
      'Sur la base du tableau des situations et des coûts au 31/12/N, la reconnaissance des produits à l’avancement fait ressortir un produit complémentaire de 140 000 € HT (Ravel : 30 000 € ; Loire : 35 000 € ; Kal : 75 000 €) venant corriger une facturation en retrait sur l’avancement économique. Par ailleurs, le chantier « Extension Usine Kal » est en perte prévisionnelle de 10 000 € (coût total 260 000 € pour un marché de 250 000 €) : la provision à l’achèvement doit être constatée intégralement au titre du principe de prudence. Incidence nette sur le résultat : + 130 000 €, supérieure au seuil de signification (30 000 €) : les écritures de régularisation sont demandées avant arrêté des comptes. Recommandation : outiller le rapprochement situations / avancement / coûts prévisionnels afin que tout chantier dérivant en perte déclenche une alerte comptable. Les intitulés de comptes cités varient selon le référentiel (PCG, CGNC marocain, IFRS 15) sans changer l’analyse. Dossier fictif, conclusions pédagogiques.',
  },

  // ---------------------------------------------------------------
  // CAS 03 — Cycle achats : factures fictives et doublons (Fidumac)
  // ---------------------------------------------------------------
  {
    id: 'cas-03',
    title: 'Cycle achats : facture sans réception, doublon subtil et erreur d’imputation',
    origin: 'Fiche Fidumac · Audit',
    domain: 'Cycle achats-fournisseurs · 3-way match',
    difficulty: 3,
    situation:
      'Toujours chez Fidumac (scénario pédagogique), vous révisionnez le cycle achats de la société Verlaine Distribution (données fictives). Le senior a tiré un échantillon de 8 factures fournisseurs de novembre N et vous remet le tableau de rapprochement bon de commande / bon de réception / facture. Trois soupçons pèsent sur l’échantillon : une facture sans réception, un doublon subtil et une erreur d’imputation. Le seuil de signification est fixé à 20 000 €. Vous devez identifier les factures présentant une anomalie, chiffrer l’incidence cumulée en HT, la comparer au seuil et proposer les diligences complémentaires.',
    documents: [
      {
        kind: 'table',
        name: 'Échantillon factures fournisseurs — novembre N (TVA 20 %)',
        columns: ['N° facture', 'Fournisseur', 'HT (€)', 'TVA (€)', 'TTC (€)', 'Bon de commande', 'Bon de réception', 'Paiement'],
        rows: [
          ['FA-1001', 'Printemps Fournitures', 10000, 2000, 12000, 'BC-771', 'R-4551', 'V-901'],
          ['FA-1002', 'Numérik', 8900, 1780, 10680, 'BC-772', 'R-4552', 'V-902'],
          ['FA-1003', 'StratéGIS Conseil', 12500, 2500, 15000, 'BC-773', '— aucune', 'en cours'],
          ['FA-1004', 'Printemps Fournitures', 10000, 2000, 12000, 'BC-771', 'R-4551', 'V-904'],
          ['FA-1005', 'Transports Rapides', 3200, 640, 3840, 'BC-775', 'R-4554', 'V-905'],
          ['FA-1006', 'Numérik', 6400, 1280, 7680, 'BC-776 (8 unités)', 'R-4556 (4 unités)', 'V-906'],
          ['FA-1007', 'Maintenance Pro', 5600, 1120, 6720, '— sans BC', 'R-4558', 'V-907'],
          ['FA-1008', 'Loyer du siège', 7500, 1500, 9000, '— n/a', '— n/a', 'prélèvement'],
        ],
        note: 'Document fictif. Prix unitaire Numérik : 800 € HT. FA-1007 : prestation d’entretien du système de climatisation, imputée au compte 606 « fournitures non stockables » (imputation attendue : entretien et réparations). FA-1008 : loyer récurrent hors flux commande/réception.',
      },
      {
        kind: 'text',
        name: 'Feuille de mission (extraits)',
        content:
          'Société auditée : Verlaine Distribution (fictive) — clôture au 30/11/N (clôture décalée).\n' +
          'Seuil de signification : 20 000 €.\n' +
          'Assertions testées : réalité des charges, exhaustivité, exactitude et imputation.\n' +
          'Rappel de procédure : les charges récurrentes (loyers, assurances, abonnements) ne transitent pas par le flux commande/réception : l’absence de BC sur ces flux n’est pas une anomalie.\n' +
          'Référentiel : comptes et TVA selon PCG français ; en CGNC marocain, la TVA est récupérable selon des règles de prorata et de délai propres — le traitement fiscal dépend du référentiel applicable.',
      },
    ],
    tasks: [
      {
        id: 'cas-03-q1',
        question: 'Quelle facture correspond à un doublon de paiement ?',
        type: 'mcq',
        options: [
          'FA-1002 — Numérik',
          'FA-1004 — Printemps Fournitures',
          'FA-1006 — Numérik',
          'FA-1007 — Maintenance Pro',
        ],
        expected: '1',
        explanation:
          'FA-1004 reprend exactement les mêmes caractéristiques que FA-1001 : même fournisseur, même BC-771, même réception R-4551, même montant de 10 000 € HT — mais un paiement distinct (V-904 en plus de V-901). Le rapprochement à trois voies n’a pas détecté la double validation d’une même facture. Diligence : extourne du doublon (10 000 € HT + TVA correspondante) et régularisation avec le fournisseur (remboursement ou imputation sur une échéance future).',
      },
      {
        id: 'cas-03-q2',
        question: 'Écart « 3-way » sur la facture FA-1006 (en € HT) ?',
        type: 'numeric',
        expected: 3200,
        explanation:
          'Le BC-776 porte sur 8 unités, la réception R-4556 sur 4 unités seulement, et la facture sur 8 unités. Étape 1 : charge conforme à la réception = 4 × 800 = 3 200 €. Étape 2 : charge facturée = 8 × 800 = 6 400 €. Étape 3 : écart = 6 400 − 3 200 = 3 200 € HT à faire rectifier par le fournisseur (ou à imputer sur la livraison restante si celle-ci est confirmée). Un contrôle « 3-way » correct aurait bloqué cette facture avant paiement.',
      },
      {
        id: 'cas-03-q3',
        question:
          'Incidence cumulée des anomalies quantifiées sur les charges HT (doublon + facture sans réception + écart 3-way), en € ?',
        type: 'numeric',
        expected: 25700,
        explanation:
          'Étape 1 : doublon FA-1004 = 10 000 € HT. Étape 2 : FA-1003 sans réception ni preuve de prestation = 12 500 € HT (à provisionner ou à faire confirmer par le fournisseur — risque de facture fictive). Étape 3 : écart de quantité FA-1006 = 3 200 € HT. Total = 10 000 + 12 500 + 3 200 = 25 700 € HT. L’erreur d’imputation de FA-1007 (606 au lieu de 6155) est un reclassement sans incidence de montant : elle ne se chiffre pas dans l’incidence cumulée.',
      },
      {
        id: 'cas-03-q4',
        question: 'Quelles factures présentent une anomalie à signaler ?',
        type: 'multi',
        options: [
          'FA-1003 — aucun bon de réception ni preuve de prestation (12 500 € HT)',
          'FA-1004 — doublon de FA-1001, même BC et même réception (10 000 € HT)',
          'FA-1006 — facture de 8 unités pour 4 reçues (écart 3 200 € HT)',
          'FA-1007 — erreur d’imputation (606 au lieu de 6155), sans incidence de montant',
          'FA-1008 — loyer sans BC ni réception (charge récurrente hors P2P)',
          'FA-1002 et FA-1005 — factures conformes à retenir comme témoins positifs',
        ],
        expected: ['0', '1', '2', '3'],
        explanation:
          'FA-1003, FA-1004 et FA-1006 portent les trois anomalies chiffrables (réalité des charges, doublon, écart 3-way) ; FA-1007 est une anomalie d’imputation (exactitude / classification) à corriger par reclassement 606 → 6155. À l’inverse : FA-1008 est un loyer récurrent hors flux P2P (pas d’anomalie — c’est le piège classique), et FA-1002 / FA-1005 sont les témoins conformes de l’échantillon.',
      },
      {
        id: 'cas-03-q5',
        question: 'L’incidence cumulée (25 700 € HT) face au seuil de signification (20 000 €) ?',
        type: 'mcq',
        options: [
          'Inférieure au seuil : aucune conséquence, on classe le dossier',
          'Supérieure au seuil : anomalies significatives, à cumuler avec les autres écarts du cycle et à signaler',
          'Égale au seuil après arrondi : sans objet',
          'Le seuil ne s’apprécie que sur le résultat net de l’exercice suivant',
        ],
        expected: '1',
        explanation:
          '25 700 € > 20 000 € : l’incidence cumulée des anomalies du cycle achats dépasse le seuil. Conséquences : (1) les écritures correctrices sont demandées ; (2) les anomalies se cumulent avec les autres écarts relevés sur la mission pour l’appréciation globale ; (3) une incidence supérieure au seuil, si elle n’est pas corrigée, peut affecter l’opinion (réserve) — c’est un point d’oral classique : le seuil ne « pardonne » pas, il hiérarchise.',
      },
      {
        id: 'cas-03-q6',
        question: 'Quelles diligences complémentaires proposez-vous avant de conclure sur le cycle achats ?',
        type: 'open',
        keywords: ['circularisation', 'extourne', 'fournisseur', 'réception', 'provision'],
        explanation:
          'Diligences attendues : (1) circularisation (confirmation directe) des fournisseurs litigieux — Printemps Fournitures sur le doublon, StratéGIS sur la réalité de la prestation, Numérik sur l’écart de quantité ; (2) extourne comptable du doublon (10 000 € HT) et régularisation TVA ; (3) provision pour charge (ou rejet) sur FA-1003 en attendant la confirmation, la charge n’étant pas étayée ; (4) contrôle de l’imputation de FA-1007 et reclassement ; (5) extension de l’échantillon : un doublon détecté sur 8 factures invite à tester la population entière (requête sur factures de même fournisseur/montant/libellé) ; (6) recommandation de contrôle interne : verrouiller le paiement sur le 3-way match et dédoublonner automatiquement (fournisseur + montant + référence).',
      },
    ],
    expectedFindings: [
      'FA-1003 (12 500 € HT) sans bon de réception ni preuve de prestation : risque de facture fictive — à confirmer avec le fournisseur, à provisionner sinon.',
      'FA-1004 : doublon subtil de FA-1001 (même BC-771, même réception R-4551, 10 000 € HT payés deux fois) — extourne et régularisation fournisseur.',
      'FA-1006 : écart 3-way de 3 200 € HT (8 unités facturées pour 4 reçues à 800 €/unité).',
      'FA-1007 : erreur d’imputation — entretien de climatisation porté au 606 au lieu du compte d’entretien et réparations (6155) : reclassement sans incidence de montant.',
      'Incidence cumulée : 25 700 € HT, supérieure au seuil de signification de 20 000 € → anomalies significatives à corriger et à signaler.',
      'FA-1008 (loyer) : absence de BC normale — charge récurrente hors flux P2P, pas une anomalie.',
    ],
    conclusionModel:
      'Le test du cycle achats sur un échantillon de 8 factures a mis en évidence une incidence cumulée de 25 700 € HT : un doublon de paiement de 10 000 € (FA-1004), une facture de 12 500 € sans réception ni preuve de prestation (FA-1003) et un écart 3-way de 3 200 € (FA-1006), auxquels s’ajoute une erreur d’imputation sans incidence de montant (FA-1007). Ce montant dépasse le seuil de signification de 20 000 € : nous demandons la correction des comptes (extourne du doublon, régularisation fournisseur sur l’écart de quantité, confirmation ou provision sur la facture litigieuse) et recommandons le verrouillage du paiement sur le rapprochement commande/réception/facture, avec un contrôle anti-doublon systématique. Diligence complémentaire : circularisation des fournisseurs concernés. Le traitement de TVA associé dépend du référentiel fiscal applicable. Données et conclusions fictives, à visée pédagogique.',
  },

  // ---------------------------------------------------------------
  // CAS 04 — Balance et revue analytique (Fidumac)
  // ---------------------------------------------------------------
  {
    id: 'cas-04',
    title: 'Balance N/N-1 : traquer les variations inhabituelles et prioriser les contrôles',
    origin: 'Fiche Fidumac · Audit',
    domain: 'Balance · Revue analytique',
    difficulty: 3,
    situation:
      'Vous préparez la revue analytique de la société Verlaine Distribution (données fictives) chez Fidumac. Le senior vous remet la balance comparée N/N-1 de 15 comptes significatifs (CA en croissance de +4 %, effectif stable) et les notes d’entretien avec le chef comptable. Vous devez repérer les variations inhabituelles, écarter les évolutions cohérentes avec l’activité, hiérarchiser les comptes à contrôler en priorité et construire le programme de contrôles subsidiaires (contrôles de détail) qui en découle.',
    documents: [
      {
        kind: 'table',
        name: 'Balance comparée — 15 comptes significatifs (€)',
        columns: ['Compte', 'Libellé', 'Solde N-1', 'Solde N', 'Variation €', 'Variation %'],
        rows: [
          ['701', 'Ventes de marchandises', 2850000, 2964000, 114000, 4.0],
          ['601', 'Achats de marchandises', 1950000, 2028000, 78000, 4.0],
          ['613', 'Locations', 96000, 99840, 3840, 4.0],
          ['606', 'Fournitures non stockables', 48000, 86400, 38400, 80.0],
          ['6155', 'Entretien et réparations', 31000, 33480, 2480, 8.0],
          ['616', 'Primes d’assurance', 60000, 60000, 0, 0.0],
          ['627', 'Services bancaires', 12000, 24600, 12600, 105.0],
          ['635', 'Impôts et taxes', 85000, 87550, 2550, 3.0],
          ['661', 'Charges d’intérêts', 42000, 58800, 16800, 40.0],
          ['641', 'Rémunérations du personnel', 520000, 540800, 20800, 4.0],
          ['681', 'Dotations aux amortissements', 89000, 89000, 0, 0.0],
          ['6788', 'Charges exceptionnelles diverses', 4200, 31500, 27300, 650.0],
          ['411', 'Clients', 320000, 460800, 140800, 44.0],
          ['401', 'Fournisseurs', 265000, 271950, 6950, 2.6],
          ['471', 'Compte d’attente', 3500, 24500, 21000, 600.0],
        ],
        note: 'Document fictif. Chiffre d’affaires N : +4 % (ouverture de 6 points de vente). Effectif stable.',
      },
      {
        kind: 'text',
        name: 'Entretien avec le chef comptable (extraits)',
        content:
          '— « Le CA progresse de 4 % avec l’ouverture de 6 points de vente, l’effectif est stable. »\n' +
          '— « Un emprunt de 400 000 € a été contracté en mars N : la hausse des charges d’intérêts est mécanique, le tableau d’amortissement a été revu par le service juridique. »\n' +
          '— « Le compte 471 regroupe des prélèvements et virements en cours d’identification, on le solde « quand on a le temps ». »\n' +
          '— « Les services bancaires ? Le banquier a changé de grille en janvier, sans doute. Je n’ai pas plus d’explication. »\n' +
          '— « Les charges exceptionnelles ? Aucune idée sur le moment, il faudra que je regarde. »\n' +
          'Document fictif.',
      },
    ],
    tasks: [
      {
        id: 'cas-04-q1',
        question: 'De combien le compte 6788 « charges exceptionnelles diverses » a-t-il augmenté (en €) ?',
        type: 'numeric',
        expected: 27300,
        explanation:
          'Lecture de la balance : 31 500 (solde N) − 4 200 (solde N-1) = 27 300 € de hausse, soit ×7,5 (de +650 %). C’est la variation relative la plus forte de la balance — et l’entretien n’a fourni aucune explication : le compte passe en tête des priorités.',
      },
      {
        id: 'cas-04-q2',
        question: 'Somme des hausses inhabituelles des comptes 606, 627, 6788 et 471 (en €) ?',
        type: 'numeric',
        expected: 99300,
        explanation:
          'Étape par étape : 606 « fournitures non stockables » : 86 400 − 48 000 = 38 400 €. 627 « services bancaires » : 24 600 − 12 000 = 12 600 €. 6788 « charges exceptionnelles » : 31 500 − 4 200 = 27 300 €. 471 « compte d’attente » : 24 500 − 3 500 = 21 000 €. Total = 38 400 + 12 600 + 27 300 + 21 000 = 99 300 €. Ce cumul donne l’ordre de grandeur du « stock d’anomalies potentielles » à instruire en contrôles de détail.',
      },
      {
        id: 'cas-04-q3',
        question: 'Quels comptes devez-vous contrôler en priorité ?',
        type: 'multi',
        options: [
          '606 Fournitures non stockables (+80 %)',
          '613 Locations (+4 %)',
          '627 Services bancaires (+105 %)',
          '635 Impôts et taxes (+3 %)',
          '661 Charges d’intérêts (+40 %)',
          '6788 Charges exceptionnelles diverses (+650 %)',
          '411 Clients (+44 % pour un CA à +4 %)',
          '471 Compte d’attente (3 500 → 24 500 €)',
        ],
        expected: ['0', '2', '5', '6', '7'],
        explanation:
          'La revue analytique compare chaque variation à un repère : l’activité (+4 %), l’inflation des charges récurrentes, ou une explication documentée. 606 (+80 %), 627 (+105 %) et 6788 (+650 %) dévient sans explication ; 471 (+600 %) est un compte d’attente qui gonfle — signal d’alerte en soi ; 411 (+44 %) est incohérent avec un CA à +4 % : dégradation du BFR et risque sur le recouvrement. À l’inverse : 613, 635 et 641 suivent l’activité ; 616 et 681 sont stables ; 661 (+40 %) est expliqué par l’emprunt de mars N documenté (à corroborer rapidement, pas une priorité) ; 401 (+2,6 %) est cohérent.',
      },
      {
        id: 'cas-04-q4',
        question: 'Quelle conclusion tirer de la variation du compte 411 (+44 %) alors que le CA progresse de +4 % ?',
        type: 'mcq',
        options: [
          'Évolution normale liée à la croissance de l’activité',
          'Détérioration probable du BFR : délais de règlement en hausse — à confirmer par la balance âgée et à provisionner si des créances deviennent douteuses',
          'Erreur comptable certaine : il faut impérativement réintégrer le montant en produit',
          'Incidence fiscale à provisionner d’office à hauteur de 44 % du solde',
        ],
        expected: '1',
        explanation:
          'Un compte clients qui croît onze fois plus vite que le CA traduit un allongement des délais de règlement (ou des créances non recouvrées). Démarche : (1) demander la balance âgée clients ; (2) identifier les créances dépassant les échéances contractuelles ; (3) apprécier le risque de non-recouvrement et les dépréciations à constater (411D au PCG, 3921/3421+2921 au CGNC marocain) ; (4) éventuellement confirmer les soldes significatifs auprès des clients (circularisation). L’option « réintégrer en produit » est un non-sens : le compte clients est déjà le produit facturé non encaissé.',
      },
      {
        id: 'cas-04-q5',
        question: 'Que faire du compte 471 « compte d’attente » passé de 3 500 à 24 500 € ?',
        type: 'mcq',
        options: [
          'Rien : un compte d’attente est par définition provisoire',
          'Le solder en charges au 6788 pour « nettoyer » la balance',
          'Demander le détail opération par opération, identifier et réimputer chaque élément, et suivre son apurement sous 30 jours',
          'Le transférer au compte de report à nouveau',
        ],
        expected: '2',
        explanation:
          'Un compte d’attente (471) doit être un lieu de passage, jamais un débarras : sa croissance de 600 % est un signal d’alerte classique (opérations non identifiées, fraude potentielle, piste d’audit dégradée). Démarche : détail ligne à ligne, identification du donneur d’ordre ou du bénéficiaire, réimputation au bon compte (charge, produit, tiers), puis contrôle de l’apurement. L’option « tout passer en 6788 » masquerait le problème et polluerait en plus le compte d’exceptions — exactement ce qu’un auditeur doit refuser.',
      },
      {
        id: 'cas-04-q6',
        question:
          'Construisez le programme de contrôles subsidiaires (contrôles de détail) qui découle de cette revue analytique.',
        type: 'open',
        keywords: ['balance âgée', 'justificatifs', 'détail', '471', 'explications'],
        explanation:
          'Structure attendue : (1) pour chaque compte prioritaire, un objectif de contrôle et une procédure : 606 → revue des factures de l’exercice et de l’inventaire des fournitures (réalité des charges, pas de stock dormant) ; 627 → obtenir la nouvelle grille tarifaire de la banque et recouper avec les relevés (les frais de tenue de compte se lisent directement au relevé) ; 6788 → demander le détail des charges exceptionnelles et le justificatif de chacune (l’absence d’explication du chef comptable est en soi une faiblesse) ; 471 → détail et apurement sous 30 jours ; 411 → balance âgée, dépréciations, circularisation des soldes significatifs ; 661 → corroborer rapidement avec le tableau d’amortissement de l’emprunt (déjà documenté). (2) Chiffrer l’enjeu : 99 300 € de hausses inexpliquées sur les quatre comptes de charges/attente. (3) Conclure : les contrôles portent là où la revue analytique a perdu la capacité d’expliquer les variations — c’est exactement la définition des contrôles subsidiaires.',
      },
    ],
    expectedFindings: [
      '606 Fournitures non stockables : +80 % (38 400 €) sans justification — à instruire facture par facture.',
      '627 Services bancaires : +105 % (12 600 €) — « changement de grille » invérifiable en l’état : recouper avec les relevés bancaires.',
      '6788 Charges exceptionnelles : +650 % (27 300 €) sans aucune explication — priorité maximale.',
      '471 Compte d’attente : 3 500 → 24 500 € (+600 %) : signal d’alerte — détail et apurement sous 30 jours exigés.',
      '411 Clients : +44 % (140 800 €) contre un CA à +4 % : dégradation du BFR, balance âgée et dépréciations à apprécier.',
      '661 Charges d’intérêts : +40 % expliqué par l’emprunt de 400 000 € de mars N (documenté) — à corroborer, non prioritaire.',
      'Cumul des hausses inhabituelles (606 + 627 + 6788 + 471) : 99 300 € — c’est le périmètre des contrôles de détail.',
    ],
    conclusionModel:
      'La revue analytique de la balance N/N-1 isole cinq comptes à variation inhabituelle non expliquée : 606 (+80 %), 627 (+105 %), 6788 (+650 %), 471 (+600 %) et 411 (+44 % pour un CA à +4 %), soit un enjeu chiffré de 99 300 € sur les seuls comptes 606/627/6788/471. Les variations cohérentes (601, 613, 641 à +4 %, 616 et 681 stables, 661 expliqué par l’emprunt documenté) ne déclenchent pas de contrôle approfondi. Le programme de contrôles subsidiaires porte donc sur : revue facture par facture du 606, recoupement du 627 avec les relevés bancaires, détail justifié du 6788, apurement du 471 sous 30 jours, et balance âgée du 411 avec appréciation des dépréciations. Le compte d’attente qui triple et les charges exceptionnelles inexpliquées documentent par ailleurs une faiblesse du contrôle interne comptable. Analyse conduite sur données fictives ; intitulés de comptes selon PCG (équivalents CGNC/IFRS à adapter).',
  },

  // ---------------------------------------------------------------
  // CAS 05 — Trésorerie quotidienne à 5 comptes (Renault)
  // ---------------------------------------------------------------
  {
    id: 'cas-05',
    title: 'Position de trésorerie à 5 comptes : soldes finaux, virements internes et suspens',
    origin: 'Fiche Renault · Trésorerie',
    domain: 'Trésorerie quotidienne · Position bancaire',
    difficulty: 2,
    situation:
      'Vous êtes stagiaire au service trésorerie de Renault (scénario pédagogique, données fictives). Chaque matin, vous produisez la position de trésorerie à 5 comptes avant 10 h 30. Ce 13/06/2025, vous devez arrêter les positions du 12 et du 13 juin, vérifier la cohérence des virements internes, repérer les mouvements inhabituels et documenter tout suspens avant le report au responsable financier.',
    documents: [
      {
        kind: 'table',
        name: 'Soldes d’ouverture — matin du 12/06/2025 (€)',
        columns: ['Compte', 'Banque', 'Solde d’ouverture'],
        rows: [
          ['512001 Principal', 'BNP', 150000],
          ['512002 Salaires', 'Société Générale', 45000],
          ['512003 Encaissements', 'Crédit Lyonnais', 82500],
          ['512004 Fournisseurs', 'BNP', 68000],
          ['512005 Épargne', 'Caisse d’Épargne', 200000],
          ['Total', '—', 545500],
        ],
        note: 'Document fictif. Soldes rapprochés au 11/06 au soir.',
      },
      {
        kind: 'table',
        name: 'Mouvements du 12/06/2025 (jour J)',
        columns: ['Compte', 'Libellé', 'Sens', 'Montant (€)'],
        rows: [
          ['512001', 'Encaissement client Sabord SARL (chèque remis)', 'Entrée', 32000],
          ['512001', 'Paiement fournisseur Itergo Industries', 'Sortie', 18500],
          ['512001', 'Virement interne vers 512004 Fournisseurs', 'Sortie', 25000],
          ['512001', 'Virement interne vers 512002 Salaires', 'Sortie', 40000],
          ['512002', 'Virement interne reçu du 512001', 'Entrée', 40000],
          ['512003', 'Remise de chèques clients', 'Entrée', 14200],
          ['512003', 'Frais de tenue de compte', 'Sortie', 320],
          ['512004', 'Virement interne reçu du 512001', 'Entrée', 25000],
          ['512004', 'Paiements fournisseurs (5 virements)', 'Sortie', 37400],
        ],
        note: 'Document fictif.',
      },
      {
        kind: 'table',
        name: 'Mouvements du 13/06/2025 (jour J+1)',
        columns: ['Compte', 'Libellé', 'Sens', 'Montant (€)'],
        rows: [
          ['512001', 'Virement client Morgat & Fils', 'Entrée', 22000],
          ['512001', 'Prélèvement URSSAF', 'Sortie', 12600],
          ['512001', 'Virement interne vers 512005 Épargne', 'Sortie', 30000],
          ['512002', 'Paiement des salaires (virement de masse)', 'Sortie', 83700],
          ['512003', 'Remise de chèques clients', 'Entrée', 9850],
          ['512003', 'Virement client Nordica', 'Entrée', 16500],
          ['512003', 'Frais de tenue de compte', 'Sortie', 280],
          ['512004', 'Paiements fournisseurs (4 virements)', 'Sortie', 21300],
          ['512004', 'Prélèvement SEPA bénéficiaire non identifié', 'Sortie', 2400],
          ['512005', 'Virement interne reçu du 512001', 'Entrée', 30000],
          ['512005', 'Intérêts crédités', 'Entrée', 150],
        ],
        note: 'Document fictif.',
      },
      {
        kind: 'text',
        name: 'Procédure trésorerie (extraits)',
        content:
          '— Virements internes de trésorerie : jusqu’à 50 000 € sur simple validation du trésorier ; au-delà, double signature.\n' +
          '— Tout virement vers un compte d’épargne (512005) requiert un ordre de virement signé du responsable financier, quel que soit le montant.\n' +
          '— Prélèvements SEPA attendus le 13/06 : URSSAF 12 600 € (compte Principal). Aucun autre débit SEPA n’est programmé ce jour-là.\n' +
          '— La position journalière est reportée au responsable financier avant 10 h 30 ; tout suspens doit être documenté et suivi.\n' +
          'Document fictif. Référentiel : comptes de la classe 5 selon PCG ; équivalents CGNC (514 banques) — la logique de position est identique.',
      },
    ],
    tasks: [
      {
        id: 'cas-05-q1',
        question: 'Solde fin de journée du 13/06 du compte 512001 Principal (en €) ?',
        type: 'numeric',
        expected: 77900,
        explanation:
          'Étape 1 — solde du 512001 au soir du 12/06 : 150 000 + 32 000 − 18 500 − 25 000 − 40 000 = 98 500 €. Étape 2 — mouvements du 13/06 : + 22 000 (client Morgat) − 12 600 (URSSAF) − 30 000 (virement vers l’épargne) = − 20 600 €. Étape 3 — solde final : 98 500 − 20 600 = 77 900 €.',
      },
      {
        id: 'cas-05-q2',
        question: 'Solde fin de journée du 13/06 du compte 512004 Fournisseurs (en €) ?',
        type: 'numeric',
        expected: 31900,
        explanation:
          'Étape 1 — solde au soir du 12/06 : 68 000 + 25 000 (virement interne reçu) − 37 400 (paiements fournisseurs) = 55 600 €. Étape 2 — mouvements du 13/06 : − 21 300 (paiements) − 2 400 (prélèvement SEPA non identifié) = − 23 700 €. Étape 3 — solde final : 55 600 − 23 700 = 31 900 €. Attention : le prélèvement inconnu reste débité du solde bancaire — il faudra l’isoler en suspens pour investigation, mais il ne se « retire » pas du solde.',
      },
      {
        id: 'cas-05-q3',
        question: 'Trésorerie totale au soir du 13/06, tous comptes confondus (en €) ?',
        type: 'numeric',
        expected: 463700,
        explanation:
          'Soldes finaux, compte par compte : Principal 77 900 + Salaires 1 300 (85 000 − 83 700) + Encaissements 122 450 (96 380 + 9 850 + 16 500 − 280) + Fournisseurs 31 900 + Épargne 230 150 (200 000 + 30 000 + 150) = 463 700 €. Contrôle croisé : 545 500 (ouverture du 12/06) + 94 700 d’entrées externes − 176 500 de sorties externes = 463 700 €. Les virements internes (25 000 + 40 000 + 30 000 = 95 000 €) figurent en entrée ET en sortie : ils s’annulent et ne modifient jamais la position globale — c’est le contrôle de cohérence attendu.',
      },
      {
        id: 'cas-05-q4',
        question: 'Quels éléments constituent une anomalie à documenter ?',
        type: 'multi',
        options: [
          'Le prélèvement SEPA de 2 400 € au bénéfice inconnu débité le 13/06 sur le compte Fournisseurs',
          'Le virement de 30 000 € vers le compte d’épargne, sans ordre signé du responsable financier',
          'Le virement interne de 40 000 € vers le compte Salaires, en dépassement des délégations',
          'Les frais de tenue de compte de 320 € et 280 € sur le compte Encaissements',
          'Les intérêts de 150 € crédités sur le compte Épargne',
        ],
        expected: ['0', '1'],
        explanation:
          'Anomalie 1 : le prélèvement de 2 400 € ne figure pas dans les débits SEPA programmés du 13/06 (seul l’URSSAF était attendu) — à mettre en suspens et à faire identifier par la banque. Anomalie 2 : la procédure exige un ordre signé du responsable financier pour tout virement vers l’épargne, quel que soit le montant ; le seuil de 50 000 € ne s’applique pas aux virements internes de trésorerie classique — le 40 000 € du compte Salaires est donc conforme. Les frais de tenue de compte et les intérêts crédités sont des opérations bancaires normales.',
      },
      {
        id: 'cas-05-q5',
        question: 'Que faire du prélèvement SEPA de 2 400 € non identifié ?',
        type: 'mcq',
        options: [
          'L’ignorer : il sera probablement identifié le mois prochain',
          'L’annuler en comptabilité pour restaurer le solde attendu',
          'L’isoler en suspens (compte d’attente / section suspens), demander l’avis de prélèvement à la banque et suivre jusqu’à identification',
          'Refaire la position sans ce mouvement pour « lisser » le report',
        ],
        expected: '2',
        explanation:
          'Un débit inconnu n’est jamais neutralisé ni ignoré : le solde bancaire est un fait, on ne le « corrige » pas en comptabilité. Démarche : (1) documenter le suspens dans la position du jour ; (2) demander à la banque l’avis de prélèvement (identité du bénéficiaire, référence de mandat SEPA) ; (3) rapprocher des mandats signés ; (4) suivre quotidiennement jusqu’à identification — et alerter au-delà de quelques jours (un débit SEPA inconnu peut révéler un mandat frauduleux).',
      },
      {
        id: 'cas-05-q6',
        question: 'Décrivez vos contrôles de fin de journée avant le report de la position au responsable financier.',
        type: 'open',
        keywords: ['virements internes', 'suspens', 'justificatif', 'report', 'écart'],
        explanation:
          'Contrôles attendus : (1) pointer chaque virement interne en entrée ET en sortie (les 95 000 € doivent disparaître du total : la position globale ne dépend que des flux externes) ; (2) justifier chaque mouvement par sa pièce (ordre de virement, avis de prélèvement, bordereau de remise) — le virement de 30 000 € vers l’épargne reste sans ordre signé : le signaler ; (3) identifier et documenter les suspens (prélèvement de 2 400 €) avec un suivi au fichier ; (4) recouper le total (463 700 €) par un second calcul (ouverture + entrées − sorties) ; (5) vérifier les soldes tendus (Salaires à 1 300 € : anticiper l’alimentation avant la prochaine paie) ; (6) reporter la position avant 10 h 30 avec les explications d’écart — la position sans explication n’est pas une position.',
      },
    ],
    expectedFindings: [
      'Prélèvement SEPA de 2 400 € non identifié, débité le 13/06 sur le compte Fournisseurs : aucun débit de ce type n’était programmé — suspens à documenter et à faire identifier par la banque.',
      'Virement de 30 000 € vers le compte d’épargne sans ordre signé du responsable financier : violation de la procédure (l’ordre signé est exigé quel que soit le montant pour ce type de virement).',
      'Soldes vérifiés au 13/06 au soir : Principal 77 900 € ; Salaires 1 300 € ; Encaissements 122 450 € ; Fournisseurs 31 900 € ; Épargne 230 150 € — total 463 700 €.',
      'Les virements internes (95 000 € sur les deux jours) sont neutres sur la position globale : contrôlés en +/−, sans incidence sur le total.',
      'Compte Salaires tendu (1 300 € après la paie) : alimentation à anticiper avant la prochaine échéance.',
    ],
    conclusionModel:
      'La position de trésorerie arrêtée au 13/06/2025 au soir fait ressortir 463 700 € tous comptes confondus (Principal 77 900 €, Salaires 1 300 €, Encaissements 122 450 €, Fournisseurs 31 900 €, Épargne 230 150 €), total recoupé par la somme des flux externes depuis l’ouverture du 12/06 (545 500 + 94 700 − 176 500). Les virements internes de 95 000 € ont été pointés en double sens et s’annulent. Deux points sont reportés au responsable financier : un prélèvement SEPA de 2 400 € au bénéfice inconnu, mis en suspens dans l’attente de l’avis bancaire, et un virement de 30 000 € vers le compte d’épargne lancé sans l’ordre signé exigé par la procédure — à régulariser et à signaler comme écart de procédure. Le compte Salaires appelle une anticipation d’alimentation. Position et explications communiquées avant 10 h 30. Données fictives, à visée pédagogique.',
  },

  // ---------------------------------------------------------------
  // CAS 06 — Rapprochement bancaire chargé (Renault)
  // ---------------------------------------------------------------
  {
    id: 'cas-06',
    title: 'Rapprochement bancaire chargé : huit suspens, un solde rapproché, des écritures',
    origin: 'Fiche Renault · Trésorerie',
    domain: 'Rapprochement bancaire · Suspens',
    difficulty: 3,
    situation:
      'Au service trésorerie (scénario pédagogique Renault, données fictives), vous reprenez le rapprochement bancaire du compte Principal pour juillet 2025, laissé en chantier par l’intérimaire : le relevé et la comptabilité divergent de plusieurs milliers d’euros et huit suspens ont été listés sans être classés. Vous devez trier les suspens (décalages normaux contre éléments à comptabiliser), calculer le solde rapproché par les deux chemins, chiffrer les écritures correctrices et rédiger la note de validation.',
    documents: [
      {
        kind: 'table',
        name: 'Soldes au 31/07/2025 — compte Principal (512001)',
        columns: ['Source', 'Solde (€)', 'Nature'],
        rows: [
          ['Comptabilité — compte 512001', 144445, 'solde débiteur'],
          ['Relevé bancaire BNP', 148250, 'solde créditeur'],
        ],
        note: 'Document fictif. Écart brut constaté : 3 805 € avant analyse des suspens (le relevé excède la comptabilité).',
      },
      {
        kind: 'table',
        name: 'Suspens au 31/07/2025 (relevé ↔ comptabilité)',
        columns: ['Élément', 'Au relevé', 'En comptabilité', 'Montant (€)'],
        rows: [
          ['Frais bancaires de juillet', 'Oui (débit)', 'Non', 340],
          ['Prélèvement SEPA bénéficiaire inconnu (12/07)', 'Oui (débit)', 'Non', 1850],
          ['Virement client non affecté (25/07)', 'Oui (crédit)', 'Non', 2630],
          ['Intérêts créditeurs du trimestre', 'Oui (crédit)', 'Non', 95],
          ['Chèque n° 5123 émis le 28/05, non présenté', 'Non', 'Oui (débit)', 1240],
          ['Chèque n° 5156 émis le 29/07, non débité', 'Non', 'Oui (débit)', 5480],
          ['Virement fournisseur émis le 31/07 (débité le 01/08)', 'Non', 'Oui (débit)', 5000],
          ['Remise de chèques du 30/07 (créditée à J+2)', 'Non', 'Oui (crédit)', 8450],
        ],
        note: 'Document fictif. Les soldes d’ouverture (30/06) étaient parfaitement rapprochés.',
      },
      {
        kind: 'text',
        name: 'Note de l’intérimaire et règles de procédure',
        content:
          '« Je n’ai pas eu le temps de tout reclasser : certains suspens sont normaux, d’autres non. Le chèque 5123 de mai commence à inquiéter le responsable — deux mois sans présentation. »\n' +
          '— Règle 1 : tout suspens âgé de plus de 2 mois fait l’objet d’un traitement particulier (relance, extourne, prescription selon le droit applicable).\n' +
          '— Règle 2 : les comptes d’attente (471) doivent être soldés sous 30 jours.\n' +
          '— Règle 3 : le rapprochement est validé par le responsable de trésorerie après convergence des deux soldes rapprochés.\n' +
          'Document fictif. Référentiel : comptes PCG (512, 627, 471…) ; en CGNC marocain et en IFRS, les intitulés changent mais la méthode du rapprochement est identique.',
      },
    ],
    tasks: [
      {
        id: 'cas-06-q1',
        question: 'Parmi ces suspens, lesquels relèvent d’un simple décalage temporel (aucune écriture correctrice) ?',
        type: 'multi',
        options: [
          'Frais bancaires de juillet — 340 €',
          'Prélèvement SEPA inconnu — 1 850 €',
          'Chèque n° 5123 émis en mai, non présenté — 1 240 €',
          'Chèque n° 5156 émis le 29/07 — 5 480 €',
          'Virement émis le 31/07, débité le 01/08 — 5 000 €',
          'Remise de chèques du 30/07, créditée à J+2 — 8 450 €',
          'Virement client non affecté — 2 630 €',
          'Intérêts créditeurs du trimestre — 95 €',
        ],
        expected: ['2', '3', '4', '5'],
        explanation:
          'Un décalage temporel = l’opération est correctement comptabilisée mais la banque ne l’a pas encore portée : chèques émis non débités (n° 5123 et n° 5156), virement émis en fin de mois débité le 1er du mois suivant, remise de chèques en cours d’encaissement. Aucune écriture : ces éléments se reportent d’un rapprochement à l’autre jusqu’à résorption. Nuance pour le chèque 5123 : structurellement c’est un décalage, mais son ancienneté (2 mois) déclenche la règle de traitement particulier — relance du bénéficiaire, extourne si prescription. Les quatre autres suspens existent au relevé mais pas en comptabilité : ils exigent une écriture (frais, prélèvement inconnu → 471, virement client → 471, intérêts → produit).',
      },
      {
        id: 'cas-06-q2',
        question: 'Solde rapproché au 31/07/2025 (en €) ?',
        type: 'numeric',
        expected: 144980,
        explanation:
          'Chemin 1 — depuis la comptabilité : 144 445 − 340 (frais) − 1 850 (prélèvement inconnu) + 2 630 (virement client) + 95 (intérêts) = 144 980 €. Chemin 2 — depuis le relevé : 148 250 + 8 450 (remise non créditée) − 6 720 (chèques émis non débités : 1 240 + 5 480) − 5 000 (virement en transit) = 144 980 €. Les deux chemins convergent au centime : le rapprochement est juste. Contrôle de l’écart brut : 148 250 − 144 445 = 3 805 € = (8 450 − 6 720 − 5 000) − (−340 − 1 850 + 2 630 + 95) = −3 270 − 535 = −3 805 € ✓.',
      },
      {
        id: 'cas-06-q3',
        question: 'Montant total des écritures correctrices à passer au 31/07 (en €) ?',
        type: 'numeric',
        expected: 4915,
        explanation:
          'Les écritures correctrices correspondent aux quatre suspens présents au relevé et absents de la comptabilité : 340 (627 / 512) + 1 850 (471 / 512) + 2 630 (512 / 471) + 95 (512 / 768) = 4 915 €. Les décalages temporels, eux, ne donnent lieu à aucune écriture — ils se suivent dans le temps. Comptes cités selon PCG ; équivalents CGNC (6145 frais bancaires, 3497… selon plan) — la logique est identique.',
      },
      {
        id: 'cas-06-q4',
        question: 'Comment traiter le prélèvement SEPA inconnu de 1 850 € ?',
        type: 'mcq',
        options: [
          'Le laisser : il sera identifié au rapprochement d’août',
          'Le comptabiliser directement en charge (627) faute d’information',
          'Le comptabiliser au compte d’attente (471) au crédit du 512, demander l’avis de prélèvement à la banque et solder dès identification',
          'Extourner le virement client non affecté pour compenser',
        ],
        expected: '2',
        explanation:
          'Un débit bancaire doit être comptabilisé dès qu’il apparaît au relevé — mais sans l’imputer à une charge tant que la nature n’est pas établie : le compte d’attente (471) est l’outil prévu (débit 471 / crédit 512 pour 1 850 €). Ensuite : demande d’avis de prélèvement à la banque, rapprochement avec les mandats SEPA signés, puis réimputation au bon compte et solder du 471 — sous 30 jours selon la procédure. L’option « compenser avec le virement client » viole le principe de non-compensation et détruit la piste d’audit.',
      },
      {
        id: 'cas-06-q5',
        question: 'Que faire du chèque n° 5123, émis le 28/05 et toujours non présenté au 31/07 ?',
        type: 'mcq',
        options: [
          'C’est un décalage normal : ne rien faire, il finira par être présenté',
          'Le reclasser en charge de juillet',
          'Le signaler comme suspens anormalement ancien : relancer le bénéficiaire et envisager l’extourne (validité/prescription selon le droit applicable)',
          'Le comptabiliser en produit de juillet',
        ],
        expected: '2',
        explanation:
          'Règle de procédure : plus de 2 mois sans présentation = traitement particulier. Démarche : (1) relancer le bénéficiaire (le chèque est-il perdu ? égaré ?) ; (2) si le bénéficiaire confirme la perte : annulation du chèque et émission d’un nouveau ou paiement par virement ; (3) à terme, selon le droit applicable (validité limitée du chèque, prescription), extourne de l’écriture initiale — le chèque ne sera jamais débité. Un chèque ancien jamais présenté peut aussi révéler une anomalie (beneficiaire introuvable, chèque annulé mais non extourné) : c’est un point d’attention à documenter pour le responsable.',
      },
      {
        id: 'cas-06-q6',
        question: 'Décrivez votre démarche complète de rapprochement, de la prise en main à la note de validation.',
        type: 'open',
        keywords: ['pointage', 'suspens', 'écritures correctrices', 'solde rapproché', 'validation'],
        explanation:
          'Démarche attendue : (1) partir des deux soldes de fin de période (144 445 € comptable / 148 250 € relevé) ; (2) pointer les opérations communes sur les couples (référence, montant, sens) — jamais sur la seule date ; (3) isoler les suspens et les classer : décalages temporels (chèques émis, remise, virement en transit — pas d’écriture) contre éléments à comptabiliser (frais, prélèvement inconnu, virement client, intérêts — écritures correctrices) ; (4) surveiller l’ancienneté (chèque 5123 : traitement particulier) ; (5) calculer le solde rapproché par les deux chemins et exiger la convergence (144 980 €) ; (6) chiffrer les écritures correctrices (4 915 €) avec leurs imputations (627, 471, 768 selon PCG) ; (7) soumettre le rapprochement à la validation du responsable avec la note récapitulative. Un écart résiduel non expliqué interdirait la conclusion : on repointe, on vérifie les doubles, on interroge la banque.',
      },
    ],
    expectedFindings: [
      'Quatre suspens sont de purs décalages temporels (aucune écriture) : chèques émis non débités (1 240 + 5 480 €), virement en transit (5 000 €), remise de chèques non créditée (8 450 €).',
      'Quatre suspens exigent une écriture correctrice, pour 4 915 € au total : frais bancaires (340 €), prélèvement SEPA inconnu (1 850 € → 471), virement client non affecté (2 630 € → 471), intérêts créditeurs (95 €).',
      'Solde rapproché au 31/07 : 144 980 € (convergence vérifiée par les deux chemins : comptabilité corrigée et relevé ajusté des décalages).',
      'Chèque n° 5123 (mai) anormalement ancien : relance du bénéficiaire et extourne/prescription à envisager selon le droit applicable — signal d’alerte à documenter.',
      'Le prélèvement inconnu et le virement client non affecté alimentent le compte d’attente : apurement sous 30 jours exigé par la procédure.',
    ],
    conclusionModel:
      'Le rapprochement bancaire du compte Principal au 31/07/2025 a été retraité intégralement. Après pointage, huit suspens ont été classés : quatre décalages temporels normaux (chèques émis non débités pour 6 720 €, virement en transit 5 000 €, remise non créditée 8 450 €) qui se reportent sans écriture, et quatre éléments à comptabiliser pour 4 915 € (frais 340 €, prélèvement inconnu 1 850 € mis en compte d’attente, virement client non affecté 2 630 €, intérêts 95 €). Le solde rapproché s’établit à 144 980 €, convergent par les deux chemins de calcul, l’écart brut de 3 805 € étant intégralement expliqué. Point d’attention remonté au responsable : le chèque n° 5123, émis en mai et jamais présenté, relève du traitement des suspens anciens (relance, extourne selon le droit applicable). Le rapprochement est soumis à validation avec les écritures correctrices proposées. Intitulés de comptes selon PCG ; la méthode est strictement identique en CGNC ou en IFRS. Dossier fictif.',
  },
]
