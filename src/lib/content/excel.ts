import type { DashboardSpec, DocTable, ExcelExercise, ExcelFormulaCard } from '@/lib/types'

// =====================================================================
// AuditLab — Module Excel & données (fiche Danone, mission 6).
// 16 fiches formules (syntaxe Excel français, séparateur « ; »),
// 5 exercices interactifs aux données vérifiées (rapprochement,
// doublons, statistiques conditionnelles, contrôle de cohérence,
// indicateurs) et 3 specs de tableaux de bord alignées sur la fiche.
// Toutes les données sont fictives (visée pédagogique PFE).
// =====================================================================

// ---------------------------------------------------------------------
// 1. FICHES FORMULES (16)
// ---------------------------------------------------------------------

export const excelFormulaCards: ExcelFormulaCard[] = [
  {
    id: 'fc-somme',
    name: 'SOMME',
    syntax: '=SOMME(nombre1; [nombre2]; …)',
    purpose:
      'Additionner une plage de cellules : le total de contrôle par excellence — total des factures d’un mois, somme des soldes détail d’une balance, total général à recouper.',
    example:
      '=SOMME(D2:D31) totalise les montants TTC des 30 factures du trimestre : 252 314,10 € (extrait pédagogique de l’exercice « Statistiques conditionnelles »).',
    oldVersionAlternative:
      'La saisie manuelle =D2+D3+D4+… est l’« ancienne méthode » : chaque ligne insérée ou supprimée casse la formule silencieusement. SOMME absorbe les extensions de plage — à condition de garder des bornes cohérentes.',
  },
  {
    id: 'fc-somme-si',
    name: 'SOMME.SI',
    syntax: '=SOMME.SI(plage; critère; [plage_somme])',
    purpose:
      'Totaliser uniquement les lignes qui répondent à UN critère : montant total d’un fournisseur, d’un mois, d’un type de pièce — l’agrégation la plus fréquente des tableaux de bord comptables.',
    example:
      '=SOMME.SI(B2:B31;"Éleclairs Énergie";D2:D31) renvoie 65 947,35 € : le total du trimestre pour ce fournisseur, sans filtre ni copier-coller.',
    oldVersionAlternative:
      'Filtre + SOUS.TOTAL(109;plage) : le total suit le filtre mais disparaît au changement de filtre et ne se recopie pas dans un tableau de bord — lecture instantanée, résultat non traçable.',
  },
  {
    id: 'fc-somme-si-ens',
    name: 'SOMME.SI.ENS',
    syntax: '=SOMME.SI.ENS(plage_somme; plage_critères1; critère1; [plage_critères2; critère2]; …)',
    purpose:
      'Totaliser sous PLUSIEURS critères simultanés (fournisseur ET mois, type ET seuil). Attention à l’ordre : la plage à sommer vient EN PREMIER, contrairement à SOMME.SI.',
    example:
      '=SOMME.SI.ENS(D2:D31;B2:B31;"Laiterie du Nord";C2:C31;"Septembre 2024") renvoie 33 010,00 € : le total septembre du fournisseur, critère par critère.',
    oldVersionAlternative:
      'SOMME.SI sur une colonne de clé concaténée (=B2&"|"&C2) : fonctionne, mais la clé doit être maintenue et se documente mal — un critère par colonne reste lisible et auditable.',
  },
  {
    id: 'fc-nb-si',
    name: 'NB.SI',
    syntax: '=NB.SI(plage; critère)',
    purpose:
      'Compter les cellules qui répondent à un critère : nombre de factures d’un fournisseur, de pièces hors délai, d’anomalies résolues — le compteur de base du tableau de bord.',
    example:
      '=NB.SI(F2:F16;">5") renvoie 4 : les pièces saisies en plus de 5 jours — à diviser par =NB(F2:F16) pour un pourcentage (4 ÷ 15 = 26,7 %).',
    oldVersionAlternative:
      'Filtre + comptage manuel (ou SOUS.TOTAL(103;plage)) : non figé, non recopiable, source d’écarts entre deux tirages successifs.',
  },
  {
    id: 'fc-nb-si-ens',
    name: 'NB.SI.ENS',
    syntax: '=NB.SI.ENS(plage_critères1; critère1; [plage_critères2; critère2]; …)',
    purpose:
      'Compter sous plusieurs critères : anomalies « haute » ET « ouvertes », factures d’un fournisseur ET d’un mois — chaque critère doit correspondre à une intention, jamais à une prudence automatique.',
    example:
      '=NB.SI.ENS(C2:C16;"haute";E2:E16;"ouverte") renvoie 3 : les anomalies de criticité haute encore ouvertes — la priorité n° 1 du tableau de bord « Anomalies ».',
    oldVersionAlternative:
      'Filtres multiples + SOUS.TOTAL(103;plage) : la lecture est instantanée mais le résultat ne vit pas dans une cellule — impossible à recouper ou à archiver.',
  },
  {
    id: 'fc-si',
    name: 'SI',
    syntax: '=SI(test_logique; valeur_si_vrai; valeur_si_faux)',
    purpose:
      'Décider dans une cellule : ok/écart, dans les temps/hors délai — le statut calculé de chaque ligne, dénombrable ensuite par NB.SI.',
    example:
      '=SI(F2>5;"hors délai";"ok") marque chaque pièce au-delà du seuil de saisie : le tableau de bord compte alors les « hors délai » au lieu de les chercher au filtre.',
    oldVersionAlternative:
      'Aucune — fonction fondatrice. Sa limite : UN seul test par formule ; au-delà, les SI imbriqués deviennent illisibles — d’où SI.CONDITIONS.',
  },
  {
    id: 'fc-si-conditions',
    name: 'SI.CONDITIONS',
    syntax: '=SI.CONDITIONS(test1; valeur1; [test2; valeur2]; …; [VRAI; valeur_si_aucun_test])',
    purpose:
      'Enchaîner plusieurs tests sans imbrication : échelles de criticité, tranches d’ancienneté, statuts selon des seuils. La première condition vraie gagne — l’ordre des tests est le cœur de la formule.',
    example:
      '=SI.CONDITIONS(C2>=1000;"haute";C2>=100;"moyenne";VRAI;"basse") classe une anomalie par montant : 2 500 € → « haute » ; 300 € → « moyenne » ; 40 € → « basse ».',
    oldVersionAlternative:
      'SI imbriqués : =SI(C2>=1000;"haute";SI(C2>=100;"moyenne";"basse")) — fonctionnent sur toutes les versions mais deviennent vite illisibles. SI.CONDITIONS exige Excel 2019/365.',
  },
  {
    id: 'fc-recherchex',
    name: 'RECHERCHEX',
    syntax:
      '=RECHERCHEX(valeur_cherchée; tableau_recherche; tableau_renvoyé; [si_non_trouvé]; [si_mode_correspondance]; [si_mode_recherche])',
    purpose:
      'Retrouver une valeur dans une plage et renvoyer la cellule correspondante d’une autre colonne : correspondance exacte par défaut, recherche à droite comme à gauche, et [si_non_trouvé] gère l’absence proprement.',
    example:
      '=RECHERCHEX(A2;Journal!$C$2:$C$19;Journal!$F$2:$F$19;"absente") renvoie le montant comptabilisé de la facture A2 — ou « absente » au lieu d’un #N/A brut.',
    oldVersionAlternative:
      '=SIERREUR(RECHERCHEV(A2;Journal!$C$2:$F$19;4;FAUX);"absente") ou =INDEX(Journal!$F$2:$F$19;EQUIV(A2;Journal!$C$2:$C$19;0)) : à privilégier dès que le fichier voyage vers des Excel antérieurs à 2019/365 — RECHERCHEX y renvoie #NOM?.',
  },
  {
    id: 'fc-recherchev',
    name: 'RECHERCHEV',
    syntax: '=RECHERCHEV(valeur_cherchée; table_matrice; no_index_col; [valeur_approximative])',
    purpose:
      'La recherche historique : retrouver une valeur dans la PREMIÈRE colonne d’une table et renvoyer la cellule de la colonne no_index_col. Le FAUX final (correspondance exacte) est indispensable en comptabilité.',
    example:
      '=RECHERCHEV(A2;$A$2:$D$20;4;FAUX) renvoie le montant (colonne 4) de la facture A2. Limites à connaître : (1) no_index_col est FIGÉ — insérer une colonne entre A et D décale le résultat SANS déclencher d’erreur ; (2) la valeur cherchée doit être à GAUCHE du résultat ; (3) l’oubli du FAUX provoque des correspondances approximatives silencieuses.',
    oldVersionAlternative:
      'C’est elle, l’ancienne formule — encore omniprésente dans les fichiers clients. La migration naturelle : INDEX+EQUIV (supprime les trois limites) ou RECHERCHEX si les versions le permettent.',
  },
  {
    id: 'fc-index-equiv',
    name: 'INDEX + EQUIV',
    syntax: '=INDEX(plage_renvoi; EQUIV(valeur_cherchée; plage_recherche; 0))',
    purpose:
      'La recherche robuste : EQUIV localise la position exacte (le 0 final = correspondance exacte), INDEX renvoie la valeur à cette position — insensible aux insertions de colonnes, indifférent au sens gauche/droite.',
    example:
      '=INDEX($D$2:$D$20;EQUIV(A2;$A$2:$A$20;0)) renvoie le montant de la facture A2 : insérer une colonne entre A et D ne change rien, les plages suivent — là où RECHERCHEV se décale.',
    oldVersionAlternative:
      'C’EST l’alternative ancienne — toujours d’actualité pour la compatibilité et les recherches à gauche ; RECHERCHEX en est la version moderne, pas la remplacent sur tous les parcs.',
  },
  {
    id: 'fc-estna',
    name: 'ESTNA',
    syntax: '=ESTNA(valeur)',
    purpose:
      'Tester si une formule renvoie #N/A — l’erreur d’ABSENCE. C’est le détecteur du rapprochement de deux listes : une valeur cherchée introuvable, rien d’autre.',
    example:
      '=SI(ESTNA(RECHERCHEX(A2;Journal!$C$2:$C$19;Journal!$C$2:$C$19));"écart";"ok") : ESTNA ne renvoie VRAI que sur #N/A — l’absence du journal, pas une formule cassée.',
    oldVersionAlternative:
      'ESTERREUR capte TOUTES les erreurs (#DIV/0!, #REF!, #VALEUR!…) et brouille le diagnostic : sur un rapprochement, on veut précisément distinguer l’absence d’une erreur de formule.',
  },
  {
    id: 'fc-sierreur',
    name: 'SIERREUR',
    syntax: '=SIERREUR(valeur; valeur_si_erreur)',
    purpose:
      'Remplacer toute erreur par une valeur choisie — habiller une RECHERCHEV pour livrer un fichier lisible. Réserve d’usage : masquer une erreur n’est pas la corriger — à réserver aux absences attendues.',
    example:
      '=SIERREUR(RECHERCHEV(A2;$A$2:$D$20;4;FAUX);"non trouvé") affiche « non trouvé » à la place du #N/A — le lecteur voit un statut, pas un plantage.',
    oldVersionAlternative:
      '=SI(ESTNA(RECHERCHEV(…));"non trouvé";RECHERCHEV(…)) : la formule est calculée deux fois ; SIERREUR (Excel 2007+) l’écrit une seule fois.',
  },
  {
    id: 'fc-sommeprod',
    name: 'SOMMEPROD',
    syntax: '=SOMMEPROD(matrice1; [matrice2]; …)',
    purpose:
      'Multiplier deux plages terme à terme puis additionner : la moyenne PONDÉRÉE en une formule — délai pondéré par les montants, ancienneté pondérée par les soldes.',
    example:
      '=SOMMEPROD(F2:F16;E2:E16)/SOMME(E2:E16) renvoie 6,6 jours de délai moyen pondéré par les montants, contre 3,8 jours en moyenne simple — les grosses pièces traînent davantage.',
    oldVersionAlternative:
      'Colonne intermédiaire =F2*E2 puis =SOMME : même résultat, mais une colonne de plus à maintenir, documenter et protéger.',
  },
  {
    id: 'fc-doublons-mefc',
    name: 'Détection des doublons — NB.SI en mise en forme conditionnelle',
    syntax: '=NB.SI($A$2:$A$100;A2)>1  (règle « Utiliser une formule », appliquée à la plage A2:A100)',
    purpose:
      'Faire s’auto-signaler les valeurs présentes plusieurs fois : références de factures, n° de pièce, RIB — sans tri ni revue visuelle, la mise à jour est automatique.',
    example:
      'Sélectionner A2:A100 > Accueil > Mise en forme conditionnelle > Nouvelle règle > Utiliser une formule > =NB.SI($A$2:$A$100;A2)>1 > fond rouge. Pour les doublons SUBTILS (référence erronée), construire d’abord une clé composite en colonne F (=C2&"|"&E2) puis appliquer =NB.SI($F$2:$F$100;$F2)>1 à toute la ligne.',
    oldVersionAlternative:
      'Tri + lecture paire par paire : dépend de l’œil, ne se documente pas. Le filtre « supprimer les doublons » TRASNFORME les données — à ne jamais utiliser sur une source comptable.',
  },
  {
    id: 'fc-tcd',
    name: 'Tableau croisé dynamique (TCD)',
    syntax:
      'Sélectionner la plage > Insertion > Tableau croisé dynamique > glisser les champs en Lignes / Colonnes / Valeurs > Actualiser — aucune formule écrite.',
    purpose:
      'Croiser, compter et totaliser sans formule : ventes par cycle et par responsable, factures par fournisseur et par mois — outil d’exploration et de contre-vérification des ordres de grandeur.',
    example:
      'Sur la feuille « Anomalies » (A2:F16) > TCD > Cycle en lignes, Statut en colonnes, Référence en valeurs (Comptage) : Achats 3 (1 résolue, 1 en cours, 1 ouverte), Trésorerie 3… Penser à Actualiser après chaque mise à jour de la source — un TCD non actualisé est un faux témoin.',
    oldVersionAlternative:
      'Matrice de NB.SI.ENS — une formule par cellule du tableau croisé : le même tableau en formules, moins souple mais traçable cellule par cellule et compatible partout.',
  },
  {
    id: 'fc-mefc',
    name: 'Mise en forme conditionnelle (règles)',
    syntax:
      'Accueil > Mise en forme conditionnelle > Règles de mise en surbrillance des cellules / Nouvelle règle > « Utiliser une formule » (accepte toute formule logique)',
    purpose:
      'Rendre l’anomalie VISIBLE sans tri ni filtre : délais négatifs en rouge, encours > 60 jours, seuils dépassés — l’alerte voyage avec le fichier et se met à jour seule.',
    example:
      'Règle par formule sur F2:F16 : =F2<0 (anomalies en retard) ; règle de valeur sur E2:E16 : supérieure à 10 000 (pièces significatives) ; barres de données sur les soldes — un graphique dans la cellule.',
    oldVersionAlternative:
      'Mise en forme manuelle : ne se met PAS à jour quand les données changent — à réserver à la présentation finale, jamais au contrôle.',
  },
]

// ---------------------------------------------------------------------
// 2. EXERCICES INTERACTIFS (5) — données fictives vérifiées
// ---------------------------------------------------------------------

export const excelExercises: ExcelExercise[] = [
  {
    id: 'ex-rapprochement-listes',
    title: 'Exercice 1 — Rapprochement de deux listes : factures reçues vs journal',
    objective:
      'Comparer la liste des factures fournisseurs reçues en septembre (20 pièces) et les écritures du journal des achats (18 lignes). Le comptage naïf annonce 2 manquantes — le rapprochement ligne à ligne, lui, sépare les absences réelles des doubles saisies. Colonnes A à F fournies ; le rapprochement se fait sur le n° de pièce.',
    dataColumns: ['Liste', 'N° pièce', 'Date', 'Tiers / Compte', 'N° écriture', 'Montant (€)'],
    dataRows: [
      ['Factures reçues', 'FA-2024-101', '12/09/2024', 'Laiterie du Nord', '—', 18450],
      ['Factures reçues', 'FA-2024-102', '10/09/2024', 'Emballages Vertes', '—', 4286.4],
      ['Factures reçues', 'FA-2024-103', '08/09/2024', 'Éleclairs Énergie', '—', 12730.55],
      ['Factures reçues', 'FA-2024-104', '14/09/2024', 'Froid & Maintenance', '—', 3120],
      ['Factures reçues', 'FA-2024-105', '05/09/2024', 'Logitrans Transport', '—', 7845.2],
      ['Factures reçues', 'FA-2024-106', '19/09/2024', 'Sécuritest Contrôles', '—', 1265],
      ['Factures reçues', 'FA-2024-107', '16/09/2024', 'Laiterie du Nord', '—', 21300],
      ['Factures reçues', 'FA-2024-108', '18/09/2024', 'Emballages Vertes', '—', 5812.75],
      ['Factures reçues', 'FA-2024-109', '03/09/2024', 'Éleclairs Énergie', '—', 9480.1],
      ['Factures reçues', 'FA-2024-110', '21/09/2024', 'Froid & Maintenance', '—', 2940],
      ['Factures reçues', 'FA-2024-111', '23/09/2024', 'Laiterie du Nord', '—', 15275.5],
      ['Factures reçues', 'FA-2024-112', '07/09/2024', 'Logitrans Transport', '—', 6430],
      ['Factures reçues', 'FA-2024-113', '11/09/2024', 'Emballages Vertes', '—', 4218],
      ['Factures reçues', 'FA-2024-114', '24/09/2024', 'Sécuritest Contrôles', '—', 1890],
      ['Factures reçues', 'FA-2024-115', '25/09/2024', 'Éleclairs Énergie', '—', 11205.6],
      ['Factures reçues', 'FA-2024-116', '20/09/2024', 'Froid & Maintenance', '—', 3585],
      ['Factures reçues', 'FA-2024-117', '27/09/2024', 'Laiterie du Nord', '—', 9840],
      ['Factures reçues', 'FA-2024-118', '17/09/2024', 'Logitrans Transport', '—', 8125.3],
      ['Factures reçues', 'FA-2024-119', '23/09/2024', 'Emballages Vertes', '—', 3674.25],
      ['Factures reçues', 'FA-2024-120', '26/09/2024', 'Laiterie du Nord', '—', 14560],
      ['Journal (écritures)', 'FA-2024-109', '06/09/2024', '401ELE', 'EC-2024-0954', 9480.1],
      ['Journal (écritures)', 'FA-2024-105', '07/09/2024', '401LOG', 'EC-2024-0957', 7845.2],
      ['Journal (écritures)', 'FA-2024-112', '10/09/2024', '401LOG', 'EC-2024-0961', 6430],
      ['Journal (écritures)', 'FA-2024-103', '11/09/2024', '401ELE', 'EC-2024-0963', 12730.55],
      ['Journal (écritures)', 'FA-2024-102', '12/09/2024', '401EMB', 'EC-2024-0964', 4286.4],
      ['Journal (écritures)', 'FA-2024-113', '13/09/2024', '401EMB', 'EC-2024-0965', 4218],
      ['Journal (écritures)', 'FA-2024-101', '14/09/2024', '401LDN', 'EC-2024-0966', 18450],
      ['Journal (écritures)', 'FA-2024-104', '16/09/2024', '401FRO', 'EC-2024-0967', 3120],
      ['Journal (écritures)', 'FA-2024-113', '16/09/2024', '401EMB', 'EC-2024-0971', 4218],
      ['Journal (écritures)', 'FA-2024-107', '18/09/2024', '401LDN', 'EC-2024-0973', 21300],
      ['Journal (écritures)', 'FA-2024-118', '19/09/2024', '401LOG', 'EC-2024-0975', 8125.3],
      ['Journal (écritures)', 'FA-2024-108', '20/09/2024', '401EMB', 'EC-2024-0976', 5812.75],
      ['Journal (écritures)', 'FA-2024-116', '22/09/2024', '401FRO', 'EC-2024-0979', 3585],
      ['Journal (écritures)', 'FA-2024-110', '24/09/2024', '401FRO', 'EC-2024-0982', 2940],
      ['Journal (écritures)', 'FA-2024-114', '26/09/2024', '401SEC', 'EC-2024-0985', 1890],
      ['Journal (écritures)', 'FA-2024-119', '26/09/2024', '401EMB', 'EC-2024-0987', 3674.25],
      ['Journal (écritures)', 'FA-2024-115', '28/09/2024', '401ELE', 'EC-2024-0988', 11205.6],
      ['Journal (écritures)', 'FA-2024-120', '30/09/2024', '401LDN', 'EC-2024-0991', 14560],
    ],
    tasks: [
      {
        question:
          'Par simple différence de comptage (20 factures reçues, 18 écritures au journal), combien de factures SEMBLENT ne pas avoir été comptabilisées ? Quelle hypothèse ce calcul suppose-t-il ?',
        expected:
          '2 en apparence (20 − 18). Ce comptage naïf suppose qu’une écriture correspond exactement à une facture — hypothèse fausse dès qu’il existe une double saisie : le doublon occupe une ligne qui ne rapproche aucune facture supplémentaire.',
      },
      {
        question:
          'Quelle formule placez-vous en face de chaque facture pour signaler son absence au journal (n° de facture en A2, références du journal en Journal!C2:C19) ?',
        expected:
          'RECHERCHEX renvoie #N/A précisément quand la facture est absente du journal ; ESTNA intercepte cette absence (et elle seule) ; SI la traduit en statut lisible. Alternative compatible toutes versions : =SI(NB.SI(Journal!$C$2:$C$19;A2)=0;"écart";"ok").',
        formula: '=SI(ESTNA(RECHERCHEX(A2;Journal!$C$2:$C$19;Journal!$C$2:$C$19));"écart";"ok")',
      },
      {
        question: 'Que renvoie exactement =ESTNA(RECHERCHEX(A2;Journal!$C$2:$C$19;Journal!$C$2:$C$19)) quand la facture A2 manque au journal ?',
        expected:
          'VRAI. RECHERCHEX échoue en #N/A (valeur absente), et ESTNA(#N/A) = VRAI — c’est ce VRAI que la fonction SI convertit en « écart ». ESTNA n’intercepte QUE #N/A : une erreur de formule (#REF!, #DIV/0!…) resterait visible au lieu d’être confondue avec une absence.',
        formula: '=ESTNA(RECHERCHEX(A2;Journal!$C$2:$C$19;Journal!$C$2:$C$19))  →  VRAI',
      },
      {
        question:
          'Après rapprochement ligne à ligne (et dans les deux sens) : quelles anomalies exactement, et pour quels montants ?',
        expected:
          '3 factures sans écriture — FA-2024-106 (1 265,00 €), FA-2024-111 (15 275,50 €), FA-2024-117 (9 840,00 €), soit 26 380,50 € non comptabilisés — et 1 double saisie : FA-2024-113 (4 218,00 €) passée deux fois (EC-2024-0965 et EC-2024-0971). L’écart de totaux (166 033,65 − 143 871,15 = 22 162,50 €) mélange les deux natures : 26 380,50 € de manquant moins 4 218,00 € de double — seul le rapprochement ligne à ligne les sépare.',
      },
    ],
    explanation:
      'Le piège de l’exercice est le comptage naïf : 18 écritures ne couvrent que 17 factures, car la double saisie de la FA-2024-113 occupe une ligne « en trop ». La méthode : rapprocher ligne à ligne avec =SI(ESTNA(RECHERCHEX(…));"écart";"ok") (ou NB.SI=0 sur les versions anciennes), DANS LES DEUX SENS — puis qualifier chaque écart : absence (3 factures, 26 380,50 €) ou excès (1 double saisie, 4 218,00 €). L’écart de totaux (22 162,50 €) alerte mais n’explique rien : deux phénomènes de signes opposés s’y neutralisent en partie. En entretien, une phrase suffit à marquer le point : « je ne rapproche jamais deux listes par différence de totaux, mais ligne à ligne, dans les deux sens ».',
  },
  {
    id: 'ex-detection-doublons',
    title: 'Exercice 2 — Détection de doublons subtils dans un registre de paiements',
    objective:
      'Le registre de septembre compte 25 paiements. Deux sont des doublons « subtils » — aucune ligne n’est identique à une autre : références différentes, dates différentes. Colonnes A à E fournies (n° paiement, date, bénéficiaire, référence, montant) ; la clé de détection se construit en colonne F.',
    dataColumns: ['N° paiement', 'Date', 'Bénéficiaire', 'Référence', 'Montant (€)'],
    dataRows: [
      ['PAY-2409-001', '02/09/2024', 'Imprimerie Label', 'FAC-881', 642.3],
      ['PAY-2409-002', '02/09/2024', 'Télécom Fixe', 'ABO-09', 1240],
      ['PAY-2409-003', '03/09/2024', 'Netpropreté Services', 'FAC-1204', 2870],
      ['PAY-2409-004', '04/09/2024', 'Éleclairs Énergie', 'P-2024-1206', 1874.5],
      ['PAY-2409-005', '05/09/2024', 'Froid & Maintenance', 'VIR-58213', 3120],
      ['PAY-2409-006', '05/09/2024', 'Office Location', 'LOY-2409', 9500],
      ['PAY-2409-007', '05/09/2024', 'Assurances Risq', 'POL-4471', 4310],
      ['PAY-2409-008', '06/09/2024', 'Éleclairs Énergie', 'P-2024-1260', 1874.5],
      ['PAY-2409-009', '06/09/2024', 'Sécuritest Contrôles', 'FAC-221', 1890],
      ['PAY-2409-010', '09/09/2024', 'Logitrans Transport', 'FAC-338', 7845.2],
      ['PAY-2409-011', '09/09/2024', 'Froid & Maintenance', 'VIR-58213', 3120],
      ['PAY-2409-012', '10/09/2024', 'Emballages Vertes', 'FAC-455', 4286.4],
      ['PAY-2409-013', '11/09/2024', 'Laiterie du Nord', 'FAC-512', 18450],
      ['PAY-2409-014', '12/09/2024', 'Imprimerie Label', 'FAC-889', 715.8],
      ['PAY-2409-015', '13/09/2024', 'Télécom Fixe', 'CON-114', 326.4],
      ['PAY-2409-016', '16/09/2024', 'Netpropreté Services', 'FAC-1241', 2955],
      ['PAY-2409-017', '17/09/2024', 'Office Location', 'TAX-2409', 1900],
      ['PAY-2409-018', '18/09/2024', 'Assurances Risq', 'AV-2210', 860],
      ['PAY-2409-019', '19/09/2024', 'Logitrans Transport', 'FAC-341', 6430],
      ['PAY-2409-020', '23/09/2024', 'Emballages Vertes', 'FAC-460', 5812.75],
      ['PAY-2409-021', '24/09/2024', 'Laiterie du Nord', 'FAC-518', 21300],
      ['PAY-2409-022', '25/09/2024', 'Sécuritest Contrôles', 'FAC-229', 1265],
      ['PAY-2409-023', '26/09/2024', 'Éleclairs Énergie', 'P-2024-1318', 12730.55],
      ['PAY-2409-024', '27/09/2024', 'Netpropreté Services', 'FAC-1250', 2640],
      ['PAY-2409-025', '30/09/2024', 'Télécom Fixe', 'ABO-10', 1310],
    ],
    tasks: [
      {
        question: 'Pourquoi un simple tri sur la colonne Référence ne suffit-il pas à détecter tous les doublons ?',
        expected:
          'Parce qu’un des deux doublons porte DEUX références différentes : P-2024-1206 et P-2024-1260 (transposition à la ressaisie). Le tri sépare les deux lignes au lieu de les rapprocher — et le second doublon (même référence, dates différentes) n’est pas non plus une ligne identique. Il faut une clé construite, pas une colonne brute.',
      },
      {
        question:
          'Quelle clé composite construire en colonne F, et avec quelle formule tester chaque ligne ?',
        expected:
          'La clé bénéficiaire|montant neutralise les variations de référence et de date : un paiement légitime ne partage presque jamais les deux. Le NB.SI sur la clé, comparé à 1, signale chaque ligne appartenant à un doublon — ici 4 lignes : 2 paires.',
        formula: 'En F2 : =C2&"|"&E2   —   en G2 : =NB.SI($F$2:$F$26;F2)>1',
      },
      {
        question: 'Quelle règle de mise en forme conditionnelle fait s’auto-signaler les lignes en doublon ?',
        expected:
          'Une règle « Utiliser une formule » appliquée à toute la plage A2:F26 : la colonne de la clé est verrouillée en absolu ($F), la ligne en relatif — chaque ligne est comparée à toute la colonne, et la couleur suit les mises à jour sans tri ni filtre.',
        formula: '=NB.SI($F$2:$F$26;$F2)>1',
      },
      {
        question: 'Quels sont les deux doublons, et quelle est l’exposition totale ?',
        expected:
          'Doublon 1 : PAY-2409-004 (04/09) et PAY-2409-008 (06/09) — Éleclairs Énergie, 1 874,50 €, références P-2024-1206 / P-2024-1260 (transposition à la ressaisie). Doublon 2 : PAY-2409-005 (05/09) et PAY-2409-011 (09/09) — Froid & Maintenance, 3 120,00 €, même référence VIR-58213 exécutée deux fois. Exposition totale : 4 994,50 € payés en trop.',
      },
    ],
    explanation:
      'Un doublon subtil ne se voit ni au tri ni au filtre : il se construit. La démarche : identifier ce qui rend deux paiements « le même » (bénéficiaire ET montant), concaténer cette clé (=C2&"|"&E2), compter les occurrences (=NB.SI($F$2:$F$26;F2)>1) et rendre le signal permanent par mise en forme conditionnelle. Sur les 25 paiements (119 268,40 € au total), la clé signale exactement 4 lignes : 2 paires de doublons — 4 994,50 € payés en double (une occurrence de chaque paire). Point d’entretien : la clé se choisit selon le risque — ici la référence ne pouvait pas servir (elle variait), donc on raisonne en « qui a été payé combien » ; et on documente le taux de faux positifs accepté, car deux paiements légitimes identiques existeraient dans un vrai mois.',
  },
  {
    id: 'ex-stats-conditionnelles',
    title: 'Exercice 3 — Statistiques conditionnelles : totaux par fournisseur et par mois',
    objective:
      'Trente factures fournisseurs sur juillet–septembre 2024 (colonnes A à D : n°, fournisseur, mois, montant TTC). Objectif : écrire les agrégations SOMME.SI / SOMME.SI.ENS du tableau de bord, puis prouver leur exactitude par un contrôle de cohérence à trois chemins.',
    dataColumns: ['N° facture', 'Fournisseur', 'Mois', 'Montant TTC (€)'],
    dataRows: [
      ['FA-2024-0701', 'Laiterie du Nord', 'Juillet 2024', 21300],
      ['FA-2024-0702', 'Emballages Vertes', 'Juillet 2024', 4286.4],
      ['FA-2024-0703', 'Éleclairs Énergie', 'Juillet 2024', 12730.55],
      ['FA-2024-0704', 'Froid & Maintenance', 'Juillet 2024', 3120],
      ['FA-2024-0705', 'Logitrans Transport', 'Juillet 2024', 7845.2],
      ['FA-2024-0706', 'Sécuritest Contrôles', 'Juillet 2024', 1265],
      ['FA-2024-0707', 'Laiterie du Nord', 'Juillet 2024', 18450],
      ['FA-2024-0708', 'Emballages Vertes', 'Juillet 2024', 5812.75],
      ['FA-2024-0709', 'Éleclairs Énergie', 'Juillet 2024', 9480.1],
      ['FA-2024-0710', 'Logitrans Transport', 'Juillet 2024', 6430],
      ['FA-2024-0801', 'Laiterie du Nord', 'Août 2024', 19870],
      ['FA-2024-0802', 'Emballages Vertes', 'Août 2024', 3674.25],
      ['FA-2024-0803', 'Éleclairs Énergie', 'Août 2024', 11205.6],
      ['FA-2024-0804', 'Froid & Maintenance', 'Août 2024', 2940],
      ['FA-2024-0805', 'Logitrans Transport', 'Août 2024', 8125.3],
      ['FA-2024-0806', 'Sécuritest Contrôles', 'Août 2024', 1890],
      ['FA-2024-0807', 'Laiterie du Nord', 'Août 2024', 15275.5],
      ['FA-2024-0808', 'Emballages Vertes', 'Août 2024', 4218],
      ['FA-2024-0809', 'Éleclairs Énergie', 'Août 2024', 10320.45],
      ['FA-2024-0810', 'Froid & Maintenance', 'Août 2024', 3585],
      ['FA-2024-0901', 'Laiterie du Nord', 'Septembre 2024', 18450],
      ['FA-2024-0902', 'Emballages Vertes', 'Septembre 2024', 5812.75],
      ['FA-2024-0903', 'Éleclairs Énergie', 'Septembre 2024', 12730.55],
      ['FA-2024-0904', 'Froid & Maintenance', 'Septembre 2024', 3120],
      ['FA-2024-0905', 'Logitrans Transport', 'Septembre 2024', 7845.2],
      ['FA-2024-0906', 'Sécuritest Contrôles', 'Septembre 2024', 1265],
      ['FA-2024-0907', 'Laiterie du Nord', 'Septembre 2024', 14560],
      ['FA-2024-0908', 'Emballages Vertes', 'Septembre 2024', 4286.4],
      ['FA-2024-0909', 'Éleclairs Énergie', 'Septembre 2024', 9480.1],
      ['FA-2024-0910', 'Froid & Maintenance', 'Septembre 2024', 2940],
    ],
    tasks: [
      {
        question:
          'Quelle formule donne le total des factures d’un fournisseur donné sur un mois donné — et que renvoie-t-elle pour « Laiterie du Nord » en septembre 2024 ?',
        expected:
          'SOMME.SI.ENS : la plage à sommer en PREMIER argument, puis les paires plage/critère. Laiterie du Nord en septembre : FA-2024-0901 (18 450,00 €) + FA-2024-0907 (14 560,00 €) = 33 010,00 €.',
        formula: '=SOMME.SI.ENS($D$2:$D$31;$B$2:$B$31;"Laiterie du Nord";$C$2:$C$31;"Septembre 2024")',
      },
      {
        question: 'Quel est le total du trimestre pour Éleclairs Énergie ?',
        expected:
          '65 947,35 € : 12 730,55 + 9 480,10 (juillet) + 11 205,60 + 10 320,45 (août) + 12 730,55 + 9 480,10 (septembre) — un seul critère suffit, SOMME.SI est donc plus simple ici.',
        formula: '=SOMME.SI($B$2:$B$31;"Éleclairs Énergie";$D$2:$D$31)',
      },
      {
        question: 'Quel est le montant total des factures de juillet 2024 ?',
        expected: '90 720,00 € : le critère porte sur la colonne Mois, la plage sommée reste les montants.',
        formula: '=SOMME.SI($C$2:$C$31;"Juillet 2024";$D$2:$D$31)',
      },
      {
        question:
          'Contrôle de cohérence : quelle relation doit relier les totaux par fournisseur, les totaux par mois et la somme générale — et que vaut-elle ici ?',
        expected:
          'Les trois chemins doivent converger : somme des 6 totaux fournisseurs = somme des 3 totaux mensuels = =SOMME(D2:D31). Ici 107 905,50 + 28 090,55 + 65 947,35 + 15 705,00 + 30 245,70 + 4 420,00 = 90 720,00 + 81 104,10 + 80 490,00 = 252 314,10 € par les trois voies. Un écart signale une ligne oubliée, un doublon ou une plage mal bornée — pas une différence d’arrondi à tolérer.',
        formula: '=SOMME(D2:D31)  →  252 314,10 €',
      },
      {
        question: 'Combien de factures « Emballages Vertes » sur le trimestre ?',
        expected: '6 factures (2 par mois) : 4 286,40 + 5 812,75 + 3 674,25 + 4 218,00 + 5 812,75 + 4 286,40 = 28 090,55 € — le comptage accompagne toujours le total.',
        formula: '=NB.SI($B$2:$B$31;"Emballages Vertes")',
      },
    ],
    explanation:
      'SOMME.SI.ENS totalise sous critères, NB.SI.ENS compte : les deux gestes du tableau de bord. Trois réflexes valent la note d’entretien : (1) l’ordre des arguments de SOMME.SI.ENS — la plage à sommer vient en premier, à la différence de SOMME.SI ; (2) verrouiller les plages ($) pour recopier sans dérive ; (3) l’exactitude se démontre par recoupement : par fournisseur, par mois et en somme générale, les trois chemins donnent 252 314,10 €. Un total ne se lit pas, il se recoupe — c’est la marque d’un fichier tenu par un comptable, pas par un utilisateur d’Excel.',
  },
  {
    id: 'ex-controle-coherence',
    title: 'Exercice 4 — Contrôle de cohérence : total de balance contre somme des comptes',
    objective:
      'La balance auxiliaire clients au 30/09/2024 affiche un TOTAL GÉNÉRAL de 82 460,00 € pour 12 comptes détail listés. Poser la formule de contrôle, calculer l’écart, écarter une cause fréquente (transposition de chiffres), puis recouper avec la balance générale pour identifier la ligne manquante.',
    dataColumns: ['Compte', 'Intitulé', 'Solde (€)'],
    dataRows: [
      ['411ALP', 'Alpina Distribution', 12480],
      ['411BOR', 'Bornia Supermarchés', 8940],
      ['411CAM', 'Campec restauration', 5260],
      ['411DOL', 'Dolliaf commerce', 3715],
      ['411FRA', 'Francine food', 6930],
      ['411GOU', 'Gourmandiz', 2145],
      ['411HYV', 'Hyver & fils', 9870],
      ['411IDE', 'Idéal épicerie', 4305],
      ['411JUL', 'Julliat grossiste', 7620],
      ['411KAI', 'Kaiseki import', 1980],
      ['411MAR', 'Marchés réunis', 11340],
      ['411NOR', 'Nordic fresh', 5775],
      ['TOTAL GÉNÉRAL (balance)', 'Total affiché — balance générale au 30/09/2024', 82460],
    ],
    tasks: [
      {
        question:
          'Quelle formule de contrôle posez-vous entre le total affiché (C15) et la somme des comptes détail (C2:C13) ? Quel résultat attendez-vous en temps normal ?',
        expected:
          'La formule de contrôle : total affiché − somme recalculée. En temps normal elle renvoie 0 ; ici elle renvoie 2 100,00 € — le fichier porte son propre verdict, il suffit de l’écouter.',
        formula: '=C15-SOMME(C2:C13)',
      },
      {
        question: 'Quel est l’écart, et que raconte-t-il ?',
        expected:
          '2 100,00 € (82 460,00 − 80 360,00). Le total affiché excède la somme des lignes : soit une ligne manque au détail, soit une ligne en trop est intégrée au total, soit un montant est faux. L’écart quantifie, il ne qualifie pas encore.',
      },
      {
        question: 'Cet écart est-il compatible avec une transposition de chiffres (ex. 5 412 saisi 4 512) ?',
        expected:
          'Non. Une transposition de chiffres produit toujours un écart divisible par 9 (5 412 − 4 512 = 900 = 9 × 100). Or 2 100,00 ÷ 9 ≈ 233,33 : l’écart n’est pas divisible par 9 — le diagnostic « chiffre mal recopié » s’écarte, et l’hypothèse « ligne entière manquante ou en trop » devient prioritaire.',
      },
      {
        question: 'Comment identifier la cause, et quelle correction documenter ?',
        expected:
          'Recouper l’extrait avec la balance générale : le compte 411LEM « Lemoine Épicerie » (2 100,00 €) figure dans le total général mais sa ligne a été filtrée dans le tirage de l’extrait. Après rétablissement de la ligne, =C15-SOMME(C2:C14) renvoie 0. La cause (ligne filtrée lors de l’extraction) se documente dans la note de méthode : un contrôle à 0 sans cause écrite reste un accident, pas une démonstration.',
      },
    ],
    explanation:
      'Un écart de total est un signal, pas une explication : la méthode consiste à le quantifier (2 100,00 €), à écarter les causes fréquentes (l’écart non divisible par 9 écarte la transposition de chiffres), puis à recouper avec la source amont (balance générale) — qui révèle la ligne filtrée. Trois réflexes d’entretien : la formule de contrôle se laisse dans le fichier (écart attendu : 0) ; un extrait filtré n’est jamais une preuve d’exhaustivité ; la cause se documente (note de méthode), car le même contrôle, le mois suivant, doit pouvoir être rejoué par un tiers.',
  },
  {
    id: 'ex-construction-indicateurs',
    title: 'Exercice 5 — Construction d’indicateurs : délai moyen pondéré et part en retard',
    objective:
      'Quinze pièces saisies en septembre (colonnes A à F : n°, dates de réception et de saisie, type, montant, délai calculé). Construire les indicateurs du tableau de bord « Factures et délais » : délai moyen simple, délai moyen pondéré par les montants, part des pièces et part des montants en retard — puis confronter les lectures.',
    dataColumns: ['N° pièce', 'Date réception', 'Date saisie', 'Type', 'Montant TTC (€)', 'Délai (j)'],
    dataRows: [
      ['FA-2024-1301', '02/09/2024', '05/09/2024', 'achat', 12480, 3],
      ['FA-2024-1302', '03/09/2024', '04/09/2024', 'frais généraux', 340, 1],
      ['FA-2024-1303', '03/09/2024', '10/09/2024', 'achat', 21300, 7],
      ['FA-2024-1304', '04/09/2024', '06/09/2024', 'vente', 5812.75, 2],
      ['FA-2024-1305', '05/09/2024', '06/09/2024', 'frais généraux', 615, 1],
      ['FA-2024-1306', '05/09/2024', '13/09/2024', 'achat', 15275.5, 8],
      ['FA-2024-1307', '09/09/2024', '10/09/2024', 'vente', 3674.25, 1],
      ['FA-2024-1308', '10/09/2024', '11/09/2024', 'frais généraux', 285, 1],
      ['FA-2024-1309', '11/09/2024', '15/09/2024', 'achat', 9480.1, 4],
      ['FA-2024-1310', '12/09/2024', '27/09/2024', 'achat', 18450, 15],
      ['FA-2024-1311', '16/09/2024', '18/09/2024', 'vente', 4286.4, 2],
      ['FA-2024-1312', '17/09/2024', '19/09/2024', 'frais généraux', 940, 2],
      ['FA-2024-1313', '18/09/2024', '21/09/2024', 'vente', 6430, 3],
      ['FA-2024-1314', '23/09/2024', '24/09/2024', 'frais généraux', 380, 1],
      ['FA-2024-1315', '24/09/2024', '30/09/2024', 'achat', 11205.6, 6],
    ],
    tasks: [
      {
        question: 'Si la colonne « Délai (j) » n’existait pas, quelle formule la calcule en F2 ?',
        expected:
          'La différence des dates : les dates Excel étant des numéros de série de jours, la soustraction renvoie un nombre de jours (cellule au format Standard, pas Date). Condition préalable : des dates réellement saisies en dates — une date en texte casse tous les indicateurs en aval.',
        formula: '=C2-B2',
      },
      {
        question: 'Quel est le délai moyen de saisie simple ?',
        expected:
          '3,8 jours (57 jours cumulés ÷ 15 pièces). Lisible mais écrase les extrêmes : la FA-2024-1310 (15 jours) disparaît dans la moyenne — d’où l’indicateur suivant.',
        formula: '=MOYENNE(F2:F16)',
      },
      {
        question: 'Quel est le délai moyen pondéré par les montants, et pourquoi pondérer ?',
        expected:
          '6,6 jours contre 3,8 en simple : une facture de 18 450,00 € restée 15 jours (FA-2024-1310) pèse davantage qu’un frais général de 340,00 € à 1 jour. La moyenne simple compte des pièces, la pondérée compte des enjeux — en comptabilité, c’est la seconde qui pilote les priorités.',
        formula: '=SOMMEPROD(F2:F16;E2:E16)/SOMME(E2:E16)',
      },
      {
        question: 'Quelle part des pièces est saisie en plus de 5 jours ?',
        expected:
          '26,7 % : 4 pièces sur 15 (les délais 7, 8, 15 et 6 jours). Une pièce sur quatre dépasse le seuil — l’indicateur se retient avec son seuil documenté (5 jours, convention interne).',
        formula: '=NB.SI(F2:F16;">5")/NB(F2:F16)',
      },
      {
        question: 'Quelle part du MONTANT est concernée par ces retards — et que dire des deux lectures ensemble ?',
        expected:
          '59,7 % : 66 231,10 € sur 110 954,60 € (21 300,00 + 15 275,50 + 18 450,00 + 11 205,60). Le contraste est LE message du tableau de bord : 26,7 % des pièces mais 59,7 % des montants — le retard pèse d’abord en euros, pas en volume. Priorité de traitement : les grosses pièces en retard.',
        formula: '=SOMME.SI(F2:F16;">5";E2:E16)/SOMME(E2:E16)',
      },
    ],
    explanation:
      'Un indicateur se construit en trois gestes : la donnée de base fiable (des dates en dates, un délai =C2-B2), la formule d’agrégation adaptée à la question (MOYENNE pour des pièces, SOMMEPROD pour des enjeux, NB.SI/SOMME.SI pour un seuil), et la confrontation des lectures. Ici, la moyenne simple (3,8 j) rassure, la pondérée (6,6 j) alerte, la part en volume (26,7 %) semble contenue, la part en euros (59,7 %) ne l’est pas : c’est exactement le type d’écart d’interprétation qu’un tableau de bord doit révéler — et qu’un recruteur attend de voir maîtrisé. Dernier réflexe : chaque indicateur s’accompagne de sa formule de contrôle (=SOMME(F2:F16)/NB(F2:F16) doit égaler MOYENNE) et de ses conventions (jours calendaires, seuil 5 jours) documentées.',
  },
]

// ---------------------------------------------------------------------
// 3. SPECS DE TABLEAUX DE BORD (3 — fiche Danone)
// ---------------------------------------------------------------------

const tdb1Sample: DocTable = {
  kind: 'table',
  name: 'Suivi des saisies — septembre 2024 (extrait pédagogique)',
  columns: ['N° pièce', 'Date réception', 'Date saisie', 'Type', 'Montant TTC (€)', 'Délai (j)'],
  rows: [
    ['FA-2024-1301', '02/09/2024', '05/09/2024', 'achat', 12480, 3],
    ['FA-2024-1302', '03/09/2024', '04/09/2024', 'frais généraux', 340, 1],
    ['FA-2024-1303', '03/09/2024', '10/09/2024', 'achat', 21300, 7],
    ['FA-2024-1304', '04/09/2024', '06/09/2024', 'vente', 5812.75, 2],
    ['FA-2024-1305', '05/09/2024', '06/09/2024', 'frais généraux', 615, 1],
    ['FA-2024-1306', '05/09/2024', '13/09/2024', 'achat', 15275.5, 8],
    ['FA-2024-1307', '09/09/2024', '10/09/2024', 'vente', 3674.25, 1],
    ['FA-2024-1308', '10/09/2024', '11/09/2024', 'frais généraux', 285, 1],
    ['FA-2024-1309', '11/09/2024', '15/09/2024', 'achat', 9480.1, 4],
    ['FA-2024-1310', '12/09/2024', '27/09/2024', 'achat', 18450, 15],
    ['FA-2024-1311', '16/09/2024', '18/09/2024', 'vente', 4286.4, 2],
    ['FA-2024-1312', '17/09/2024', '19/09/2024', 'frais généraux', 940, 2],
    ['FA-2024-1313', '18/09/2024', '21/09/2024', 'vente', 6430, 3],
    ['FA-2024-1314', '23/09/2024', '24/09/2024', 'frais généraux', 380, 1],
    ['FA-2024-1315', '24/09/2024', '30/09/2024', 'achat', 11205.6, 6],
  ],
  note: 'Document fictif — extrait pédagogique de 15 pièces (le mois réel en compte environ 150). Délai = date de saisie − date de réception, en jours calendaires.',
}

const tdb2Sample: DocTable = {
  kind: 'table',
  name: 'Balance auxiliaire des tiers au 30/09/2024 (extrait pédagogique)',
  columns: ['Compte', 'Tiers', 'Type', 'Solde (€)', 'Ancienneté (j)'],
  rows: [
    ['411ALP', 'Alpina Distribution', 'client', 12480, 38],
    ['411BOR', 'Bornia Supermarchés', 'client', 8940, 55],
    ['411CAM', 'Campec restauration', 'client', 5260, 61],
    ['411DOL', 'Dolliaf commerce', 'client', 3715, 22],
    ['411FRA', 'Francine food', 'client', 6930, 47],
    ['411GOU', 'Gourmandiz', 'client', 2145, 75],
    ['411HYV', 'Hyver & fils', 'client', 9870, 63],
    ['411IDE', 'Idéal épicerie', 'client', 4305, 29],
    ['411MAR', 'Marchés réunis', 'client', 11340, 41],
    ['411NOR', 'Nordic fresh', 'client', 5775, 12],
    ['401ELE', 'Éleclairs Énergie', 'fournisseur', 12730.55, 30],
    ['401EMB', 'Emballages Vertes', 'fournisseur', 4286.4, 68],
    ['401FRO', 'Froid & Maintenance', 'fournisseur', 3120, 73],
    ['401LOG', 'Logitrans Transport', 'fournisseur', 7845.2, 25],
    ['401SEC', 'Sécuritest Contrôles', 'fournisseur', 1265, 82],
  ],
  note: 'Document fictif — 10 comptes clients et 5 comptes fournisseurs sur les 45 tiers suivis. Ancienneté en jours calendaires depuis la dernière écriture lettrée.',
}

const tdb3Sample: DocTable = {
  kind: 'table',
  name: 'Suivi des anomalies — septembre 2024 (extrait pédagogique)',
  columns: ['Référence', 'Cycle', 'Criticité', 'Responsable', 'Statut', 'Délai restant (j)'],
  rows: [
    ['AN-2024-101', 'Achats', 'haute', 'M. Diallo', 'ouverte', -5],
    ['AN-2024-102', 'Achats', 'moyenne', 'M. Diallo', 'résolue', 0],
    ['AN-2024-103', 'Ventes', 'basse', 'Mme Lopez', 'résolue', 0],
    ['AN-2024-104', 'Ventes', 'haute', 'Mme Lopez', 'ouverte', 3],
    ['AN-2024-105', 'Trésorerie', 'moyenne', 'M. Bertin', 'en cours', 7],
    ['AN-2024-106', 'Trésorerie', 'haute', 'M. Bertin', 'ouverte', -12],
    ['AN-2024-107', 'Stocks', 'moyenne', 'Mme Nguyen', 'en cours', 4],
    ['AN-2024-108', 'Stocks', 'basse', 'Mme Nguyen', 'résolue', 0],
    ['AN-2024-109', 'Paie', 'moyenne', 'M. Rousseau', 'en cours', 10],
    ['AN-2024-110', 'Paie', 'basse', 'M. Rousseau', 'ouverte', 15],
    ['AN-2024-111', 'Achats', 'moyenne', 'M. Diallo', 'en cours', 2],
    ['AN-2024-112', 'Trésorerie', 'haute', 'M. Bertin', 'en cours', 6],
    ['AN-2024-113', 'Ventes', 'moyenne', 'Mme Lopez', 'ouverte', -3],
    ['AN-2024-114', 'Transversal', 'basse', 'Mme Nguyen', 'résolue', 0],
    ['AN-2024-115', 'Transversal', 'moyenne', 'M. Rousseau', 'résolue', 0],
  ],
  note: 'Document fictif — 15 anomalies sur les 24 recensées dans le mois. Délai restant en jours avant échéance de traitement : négatif = échéance dépassée.',
}

export const dashboardSpecs: DashboardSpec[] = [
  {
    id: 'tdb-factures-delais',
    name: 'Tableau de bord 1 — Factures et délais de traitement',
    objective:
      'Répondre à une question de gestion : « la saisie des pièces suit-elle le rythme des réceptions ? » Destiné au responsable comptable, mis à jour chaque semaine. Chaque indicateur est relié à une action : traiter la file, prioriser les grosses pièces, réallouer la saisie — un indicateur sans action est de la décoration.',
    indicators: [
      {
        name: 'Délai moyen de saisie',
        formula: '=MOYENNE(F2:F16)',
        interpretation:
          '3,8 jours sur l’extrait. À comparer au seuil interne (5 jours ici). La moyenne seule écrase les cas extrêmes — la FA-2024-1310 (15 jours) y disparaît : toujours l’accompagner de l’indicateur suivant.',
      },
      {
        name: 'Part des pièces saisies en plus de 5 jours',
        formula: '=NB.SI(F2:F16;">5")/NB(F2:F16)',
        interpretation:
          '26,7 % (4 pièces sur 15). Une pièce sur quatre dépasse le seuil : plus parlante que la moyenne, cette part dimensionne la file à traiter — et son seuil (5 jours) se documente dans la note de méthode.',
      },
      {
        name: 'Délai moyen pondéré par les montants',
        formula: '=SOMMEPROD(F2:F16;E2:E16)/SOMME(E2:E16)',
        interpretation:
          '6,6 jours contre 3,8 en moyenne simple : les grosses factures traînent davantage. Le retard pèse d’abord en euros, pas en volume — la pondération change la priorité de traitement.',
      },
      {
        name: 'Montant total traité',
        formula: '=SOMME(E2:E16)',
        interpretation:
          '110 954,60 € : l’enjeu financier couvert par la période — dénominateur des indicateurs en euros et référence de charge pour le mois (à comparer aux ~150 pièces réelles du mois complet).',
      },
      {
        name: 'Part du montant concernée par les retards',
        formula: '=SOMME.SI(F2:F16;">5";E2:E16)/SOMME(E2:E16)',
        interpretation:
          '59,7 % (66 231,10 €). Le contraste avec les 26,7 % en volume est LE message du tableau de bord : moins d’une pièce sur quatre en retard, mais près de six euros sur dix — prioriser le traitement des grosses pièces en retard.',
      },
      {
        name: 'Volumétrie par type',
        formula: '=NB.SI(D2:D16;"achat") — montants par =SOMME.SI(D2:D16;"achat";E2:E16)',
        interpretation:
          '6 achats / 4 ventes / 5 frais généraux : la charge de saisie et son enjeu par nature de pièce — à décliner par jour ou par semaine pour lisser les pics de réception.',
      },
    ],
    structure: [
      'Feuille « Données » : une ligne par pièce (n°, dates, type, montant) — jamais de ligne de total insérée dans la plage, sinon toutes les formules doubles comptent.',
      'Feuille « Calculs » : colonne Délai (=C2-B2), statut (=SI(F2>5;"hors délai";"ok")), sous-totaux par type et par semaine.',
      'Feuille « TdB » : les six indicateurs, leurs seuils (cible 5 jours) et la tendance du mois précédent — un indicateur sans historique ne se commente pas.',
      'Feuille « Note de méthode » : périmètre (extrait pédagogique de 15 pièces sur ~150 réelles), source et date d’extraction, convention « jours calendaires », seuil de 5 jours documenté.',
      'Graphique : courbe du délai moyen par semaine avec ligne de seuil — un graphique = un message.',
    ],
    sampleData: tdb1Sample,
    referenceCheck: [
      'Somme croisée : la somme des montants par type (SOMME.SI) doit égaler le total général =SOMME(E2:E16) — ici 110 954,60 € par les deux chemins.',
      'Formule de contrôle de complétude : =NB(D2:D16)-NB.SI(D2:D16;"achat")-NB.SI(D2:D16;"vente")-NB.SI(D2:D16;"frais généraux") doit renvoyer 0 (aucun type inconnu qui échapperait aux compteurs).',
      'Recoupement des délais : recalculer trois délais à la main (date saisie − date réception) et vérifier que =SOMME(F2:F16)/NB(F2:F16) coïncide avec =MOYENNE(F2:F16) — deux formules, un même résultat.',
      'Hypothèse documentée : jours calendaires (et non ouvrés), seuil de 5 jours, extrait de 15 pièces — périmètre écrit dans la note de méthode.',
      'Relecture par un tiers sur la base des contrôles chiffrés, diffusion datée et versionnée (TdB_2024-09_v1.xlsx…).',
    ],
  },
  {
    id: 'tdb-comptes-tiers',
    name: 'Tableau de bord 2 — Comptes clients et fournisseurs',
    objective:
      'Éclairer les décisions de relance et de paiement : qui doit quoi depuis combien de temps, et quelle part du risque se concentre sur peu de tiers. Balance auxiliaire au 30/09/2024 (extrait de 15 comptes : 10 clients, 5 fournisseurs sur 45 réels), destinée au responsable comptable, mise à jour mensuelle.',
    indicators: [
      {
        name: 'Encours clients total',
        formula: '=SOMME.SI(D2:D16;"client";E2:E16)',
        interpretation:
          '70 760,00 € : le poste à recouvrer — dénominateur des ratios clients et point de recoupement avec le compte 411 de la balance générale.',
      },
      {
        name: 'Encours clients de plus de 60 jours',
        formula: '=SOMME.SI.ENS(E2:E16;D2:D16;"client";F2:F16;">60")',
        interpretation:
          '17 275,00 € soit 24,4 % de l’encours (Campec 61 j, Gourmandiz 75 j, Hyver 63 j) : relances graduées à lancer, échéanciers à convenir — et au-delà de la politique interne, passage en créances douteuses et dépréciation à envisager.',
      },
      {
        name: 'Concentration des créances — top 3 clients',
        formula: '=(GRANDE.VALEUR($E$2:$E$11;1)+GRANDE.VALEUR($E$2:$E$11;2)+GRANDE.VALEUR($E$2:$E$11;3))/SOMME.SI($D$2:$D$16;"client";$E$2:$E$16)',
        interpretation:
          '47,6 % (33 690,00 € sur Alpina, Marchés réunis et Hyver) : la défaillance d’un seul gros débiteur dégraderait près de la moitié du poste — à suivre en tendance et, le cas échéant, à couvrir (assurance-crédit, encadrement des encours par client).',
      },
      {
        name: 'Solde moyen par client',
        formula: '=SOMME.SI(D2:D16;"client";E2:E16)/NB.SI(D2:D16;"client")',
        interpretation:
          '7 076,00 € : l’ordre de grandeur d’un compte moyen — repère immédiat pour repérer les soldes anormaux (le solde moyen n’est pas un objectif, c’est un étalon).',
      },
      {
        name: 'Dettes fournisseurs totales',
        formula: '=SOMME.SI(D2:D16;"fournisseur";E2:E16)',
        interpretation:
          '29 247,15 € : ce que l’entité doit à court terme — à rapprocher des échéances convenues et du calendrier de trésorerie.',
      },
      {
        name: 'Dettes fournisseurs de plus de 60 jours',
        formula: '=SOMME.SI.ENS(E2:E16;D2:D16;"fournisseur";F2:F16;">60")',
        interpretation:
          '8 671,40 € soit 29,6 % (Emballages 68 j, Froid & Maintenance 73 j, Sécuritest 82 j) : risque de dégradation de la relation et des conditions commerciales — règlements à programmer avant la relance du fournisseur.',
      },
    ],
    structure: [
      'Feuille « Balance » : une ligne par compte (compte, tiers, type, solde, ancienneté en jours) — extraction de la balance auxiliaire, jamais de ligne de total dans la plage.',
      'Feuille « Calculs » : tranches d’ancienneté (=SI.CONDITIONS(F2>90;">90 j";F2>60;"61-90 j";VRAI;"≤60 j")), top 5 clients (tri daté ou GRANDE.VALEUR), sous-totaux par type.',
      'Feuille « TdB » : encours, part > 60 jours, concentration top 3, dettes — avec les seuils d’alerte internes (60 jours documenté).',
      'Feuille « Note de méthode » : date d’arrêté (30/09/2024), source (balance auxiliaire), convention « ancienneté en jours calendaires depuis la dernière écriture lettrée », seuil de 60 jours.',
      'Graphique : barres triées des encours clients décroissants — les trois premières barres racontent la concentration.',
    ],
    sampleData: tdb2Sample,
    referenceCheck: [
      'Somme croisée : total clients + total fournisseurs = =SOMME(E2:E16) → 70 760,00 + 29 247,15 = 100 007,15 € par les deux chemins.',
      'Recoupement avec la balance générale : le total de l’extrait doit se rapprocher des comptes 411/401 — tout écart de périmètre se documente, il ne se tolère pas.',
      'Contrôle d’exhaustivité : nombre de comptes de l’extrait (15) recoupé avec la balance auxiliaire complète — un compte filtré fausse chaque ratio (cf. exercice 4 : ligne oubliée = 2 100,00 € d’écart).',
      'Hypothèse documentée : ancienneté en jours calendaires, seuil de 60 jours, arrêté au 30/09/2024, soldes bruts (avant dépréciation).',
      'Relecture par un tiers sur la base des contrôles chiffrés, diffusion mensuelle datée et versionnée.',
    ],
  },
  {
    id: 'tdb-anomalies-controles',
    name: 'Tableau de bord 3 — Anomalies comptables et contrôles à réaliser',
    objective:
      'Piloter la résolution des anomalies issues des contrôles du mois : qui traite quoi, avant quand, et où les process pèchent. Suivi de septembre 2024 (extrait de 15 anomalies sur 24), revu en hebdo — chaque indicateur déclenche une action : prioriser, relancer, ou remonter une faille de procédure à la direction.',
    indicators: [
      {
        name: 'Taux de résolution des anomalies',
        formula: '=NB.SI(E2:E16;"résolue")/NB(E2:E16)',
        interpretation:
          '33,3 % (5 sur 15). À suivre en tendance plutôt qu’en valeur isolée — et avec son dénominateur documenté : « résolues / recensées du mois » ne dit pas la même chose que « résolues / clôturées ».',
      },
      {
        name: 'Anomalies de criticité haute encore ouvertes',
        formula: '=NB.SI.ENS(C2:C16;"haute";E2:E16;"ouverte")',
        interpretation:
          '3 (AN-101 à −5 j, AN-104 à +3 j, AN-106 à −12 j), dont 2 déjà en retard : la priorité n° 1 du tableau de bord — responsable nommé, échéance resserrée, revue au prochain hebdo.',
      },
      {
        name: 'Anomalies en retard (échéance dépassée)',
        formula: '=NB.SI(F2:F16;"<0")',
        interpretation:
          '3 : délai restant négatif = échéance dépassée. À signaler par mise en forme conditionnelle (=F2<0 en rouge) plutôt qu’à chercher au filtre — l’alerte doit sauter aux yeux du comité.',
      },
      {
        name: 'Retard moyen des anomalies en retard',
        formula: '=MOYENNE.SI(F2:F16;"<0")',
        interpretation:
          '−6,7 jours : l’ampleur moyenne du dépassement (−5, −12, −3). À comparer au mois précédent : un retard moyen qui s’allonge est un problème de capacité ou de priorisation, pas d’exécution.',
      },
      {
        name: 'Charge par responsable',
        formula: '=NB.SI(D2:D16;"M. Bertin") — idem par responsable',
        interpretation:
          '3 anomalies par responsable sur l’extrait : charge équilibrée ici — l’indicateur sert à repérer le responsable qui porterait à lui seul 10 tickets, signe d’un goulot d’étranglement.',
      },
      {
        name: 'Répartition par cycle',
        formula: '=NB.SI(B2:B16;"Achats") — idem par cycle',
        interpretation:
          'Achats 3, Ventes 3, Trésorerie 3, Stocks 2, Paie 2, Transversal 2 : la répartition du mois. Une récurrence sur un même cycle, mois après mois, signale une faille de process — c’est une remontée à la direction, pas une liste de tickets.',
      },
    ],
    structure: [
      'Feuille « Anomalies » : une ligne par anomalie (référence, cycle, criticité, responsable, statut, délai restant en jours — négatif si dépassé).',
      'Feuille « Calculs » : compteurs par statut / criticité / responsable / cycle (NB.SI.ENS), taux de résolution, retard moyen.',
      'Feuille « TdB » : les six indicateurs + le tableau nominatif des hautes ouvertes (référence, responsable, échéance) — une page, des propriétaires, des échéances.',
      'Feuille « Note de méthode » : définition du dénominateur du taux, échelle de criticité, convention « résolue = preuve de correction obtenue », date d’arrêté.',
      'MEFC : délai < 0 en rouge sur la ligne, statut « résolue » en vert — l’alerte et l’avancement se lisent sans filtre ni tri.',
    ],
    sampleData: tdb3Sample,
    referenceCheck: [
      'Somme croisée par statut : résolues + en cours + ouvertes = =NB(E2:E16) → 5 + 5 + 5 = 15 ; idem par criticité : 4 hautes + 7 moyennes + 4 basses = 15.',
      'Contrôle par cycle : la somme des compteurs (3 + 3 + 3 + 2 + 2 + 2) doit égaler le total des anomalies recensées.',
      'Recoupement de clôture : une anomalie ne passe « résolue » qu’avec la preuve de la correction (document obtenu ou écriture passée) — sinon statut « en cours » : le taux de résolution ne se gonfle jamais.',
      'Hypothèse documentée : dénominateur du taux, échelle de criticité, sens du délai restant (négatif = dépassé), extrait de 15 sur 24.',
      'Revue hebdomadaire datée : chaque changement de statut horodaté — la trajectoire des statuts est elle-même une preuve de pilotage.',
    ],
  },
]
