import type { Mission } from '@/lib/types'

// =====================================================================
// Fiche 2 — Renault · Mission 5 : Contrôle des écritures de clôture mensuelle
// Scénario pédagogique fictif — juin à septembre 2025, montants en euros.
// Revue de plus de soixante-dix écritures de clôture : justificatifs,
// montants, imputations, dates, périodes de rattachement, écritures
// inhabituelles et contrôles de cohérence croisés.
// =====================================================================

export const renaultMission5: Mission = {
  id: 'renault-m5',
  ficheId: 'renault',
  order: 5,
  title: 'Contrôle des écritures de clôture : soixante-dix écritures, sept anomalies, un ajustement de 450 000,00 € à challenger',
  period: 'Juin – Septembre 2025 · scénario pédagogique (données fictives)',
  company: 'Renault (scénario pédagogique — simulation)',
  sector: 'Automobile · service comptable et financier',
  referenceData: [
    'Plus de soixante-dix écritures de clôture mensuelle revues sur les clôtures de juin à septembre 2025 : régularisations, dotations, reprises et écritures courantes connexes des journaux OD, AC, VE et BQ',
    'Contrôle systématique des justificatifs, des montants, des imputations, des dates et des périodes de rattachement de chaque écriture revue',
    'Onze écritures appelant une revue approfondie : quatre écritures inhabituelles (virement interne reclassé, ajustement de marge manuel, écart d\u2019arrondi répété, contrepassation non documentée) et sept anomalies (doublon, écriture sans justificatif, erreur d\u2019imputation classe 2 contre classe 6, TVA omise, date hors période, montant décimal aberrant, compte inexistant au plan)',
    'Trois contrôles de cohérence croisés menés en fin de revue : factures non parvenues contre solde du compte 408, dotations aux provisions contre dossiers justificatifs, amortissements théoriques contre amortissements comptabilisés',
    'Suspens et rapprochements exploités lors de la revue des écritures de clôture : comptes 408, 418, 471, 486 et 487, état des factures non parvenues et suivi de leur apurement',
    'Une écriture d\u2019ajustement de résultat de 450 000,00 € demandée par la direction financière, analysée et challengée avant toute validation',
    'Cinq comptes bancaires suivis quotidiennement (mission 1 de la fiche) ; BFR suivi sur deux exercices fictifs (mission 2 de la fiche) ; dix rapprochements bancaires et quinze suspens traités (mission 3 de la fiche) ; environ cinquante décaissements contrôlés par échantillonnage avec matrice des délégations (mission 4 de la fiche)',
  ],
  summary:
    "Mission de clôture : relire plus de soixante-dix écritures de clôture mensuelle issues des quatre clôtures du stage (juin à septembre 2025), contrôler justificatifs, montants, imputations, dates et périodes de rattachement, détecter sept anomalies (doublon, écriture sans justificatif, erreur d'imputation, TVA omise, date hors période, montant décimal aberrant, compte inexistant au plan) et challenger quatre écritures inhabituelles — dont un ajustement de résultat de 450 000,00 € demandé par la direction — avant validation. Trois contrôles de cohérence croisés (factures non parvenues contre solde du 408, dotations contre dossiers, amortissements théoriques contre comptabilisés) achèvent la revue. Scénario entièrement fictif, montants en euros.",

  comprehension: {
    intro:
      "Chaque fin de mois, le service comptable arrête les comptes : le résultat du mois doit refléter ce qui s'est réellement passé — ni plus, ni moins. Or, entre ce qui s'est passé et ce qui est facturé, encaissé ou comptabilisé, il y a toujours un décalage : des prestations reçues sans facture, des livraisons non encore facturées, des loyers payés d'avance, des abonnements encaissés pour l'année entière. Les écritures de clôture existent pour rétablir le rattachement : charges à payer, produits à recevoir, charges et produits constatés d'avance, dotations aux amortissements, provisions, dépréciations, reprises — plus leurs extournes le mois suivant. Dans ce scénario pédagogique fictif, le stagiaire relit plus de soixante-dix écritures issues des clôtures de juin à septembre 2025 : contrôler les justificatifs, les montants, les imputations, les dates et les périodes de rattachement ; traquer doublons, TVA omise, comptes inexistant au plan et dates hors période ; challenger les écritures inhabituelles — jusqu'à un ajustement de résultat de 450 000,00 € demandé par la direction la veille de la clôture. C'est le contrôle de dernier passage avant la diffusion du résultat mensuel, et l'un des sujets les plus discriminants en entretien. Précision de référentiel : les comptes cités (408, 418, 486, 487, 6811, 7815…) appartiennent au plan comptable général français ; en IFRS, aucun plan de comptes n'est imposé et les intitulés diffèrent, mais les principes de rattachement à la période et d'estimation des obligations sont strictement identiques.",
    definitions: [
      {
        term: 'Clôture mensuelle',
        definition:
          "Arrêt périodique des comptes en fin de mois : écritures de régularisation, calcul du résultat du mois, contrôles de cohérence et production du reporting. Mêmes principes que l'annuelle, mais à maille fine : chaque erreur est petite, fraîche et encore corrigeable.",
      },
      {
        term: 'Clôture annuelle',
        definition:
          "Arrêt définitif des comptes de l'exercice : inventaire physique, écritures de fin d'exercice, documents de synthèse, affectation du résultat et contrôle légal éventuel. Elle hérite de tout ce que les clôtures mensuelles ont laissé passer : plus l'annuel approche, plus les corrections deviennent lourdes.",
      },
      {
        term: 'Écriture manuelle (journal OD)',
        definition:
          "Écriture saisie à la main au journal des opérations diverses, hors des flux automatiques (ventes, achats, banque, paie). Aucune écriture manuelle n'est correcte par construction : chacune dépend d'un humain, donc d'un justificatif, d'un montant, d'une imputation, d'une date — à contrôler un par un.",
      },
      {
        term: 'Charge à payer (facture non parvenue)',
        definition:
          "Charge consommée dans la période dont la facture n'est pas encore reçue : débit du compte de charge / crédit du 408 « Fournisseurs, factures non parvenues », sur pièces internes (bon de travail, relevé, contrat). Solder le 408 à la réception de la facture.",
      },
      {
        term: 'Produit à recevoir',
        definition:
          "Produit de la période réalisé (livraison, prestation achevée) mais non encore facturé : débit du 418 « Clients, produits non encore facturés » / crédit du compte de produit, adossé aux bons de livraison ou éléments d'exécution signés.",
      },
      {
        term: 'Charge constatée d\u2019avance (CCA)',
        definition:
          "Charge comptabilisée dans la période mais afférente aux périodes suivantes (loyer, assurance, abonnement payés d'avance) : débit du 486 / crédit du compte de charge. S'extourne au fil de la consommation, mois par mois.",
      },
      {
        term: 'Produit constaté d\u2019avance (PCA)',
        definition:
          "Produit comptabilisé (facturé ou encaissé) mais afférent aux périodes suivantes : débit du compte de produit / crédit du 487. Viré au résultat à mesure de l'exécution, pour ne pas majorer le résultat de la période de facturation.",
      },
      {
        term: 'Provision (pour risques et charges, dépréciation)',
        definition:
          "Constatation d'une obligation probable (litige, garantie) ou d'une perte de valeur (créance douteuse) : débit 6815 ou 6817 / crédit 151 ou 491. Une provision est une estimation documentée — jamais un réglage du résultat : c'est la ligne rouge de la clôture.",
      },
      {
        term: 'Amortissement',
        definition:
          "Constatation de la consommation des immobilisations : débit 6811 / crédit 28xx, selon le plan du tableau d'amortissement. La dotation mensuelle est un recalcul qui ne doit jamais dériver du tableau — encore moins être saisie à trois décimales.",
      },
      {
        term: 'Écriture de régularisation',
        definition:
          "Écriture de clôture qui rattache charges et produits à la bonne période (charges à payer, produits à recevoir, CCA, PCA) ou constate les estimations de fin de période (dotations, reprises). Éphémère par nature : la plupart s'extournent ou s'apurent au mois suivant.",
      },
      {
        term: 'Cut-off (rattachement à la période)',
        definition:
          "Principe qui attache chaque charge et chaque produit à la période de son fait générateur (livraison, prestation reçue) et non de sa facture ou de son encaissement. Le contrôle de cut-off cible les opérations de bord de période — les trois premiers jours du mois suivant racontent la clôture du mois précédent.",
      },
      {
        term: 'Contrôle de cohérence',
        definition:
          "Confrontation de deux sources indépendantes qui doivent concorder : grille des factures non parvenues contre solde du 408, dotations comptabilisées contre dossiers, dotation théorique contre dotation saisie. Tout écart nommé et chiffré est une piste d'anomalie.",
      },
      {
        term: 'Suspens',
        definition:
          "Élément en attente d'imputation ou d'apurement : compte d'attente 471, facture non parvenue, écart non expliqué. Un suspens sain a un âge, un propriétaire et une échéance ; un suspens qui dort devient une anomalie — puis un sujet d'audit.",
      },
      {
        term: 'Écriture inhabituelle',
        definition:
          "Écriture atypique par le compte utilisé, le montant, le libellé ou la répétition : contrepassation non motivée, ajustement manuel de marge, écart d'arrondi récurrent, virement interne reclassé en clôture. À challenger systématiquement : c'est là que se cachent aussi bien l'erreur grossière que la manipulation.",
      },
    ],
    keyPoints: [
      "La clôture mensuelle n'est pas une mini-clôture annuelle : mêmes principes (rattachement, prudence), mais rythme mensuel, matérialité plus fine et correction encore facile avant l'annuel.",
      "Chaque écriture de régularisation a sa mécanique et son miroir : la charge à payer s'apure à la facture, la CCA s'extourne à la consommation, la PCA se vire au résultat à l'exécution.",
      "Une écriture de clôture se contrôle sur cinq axes : justificatif, montant, imputation, date, période — c'est l'ordre de la rapidité de contrôle, et presque l'ordre inverse de la gravité des erreurs.",
      "Un doublon ne se voit pas ligne à ligne : il faut trier par compte et par date — deux saisies identiques le même jour, mêmes comptes, même montant, même libellé.",
      "Les contrôles de cohérence (grille contre solde, théorie contre comptabilisé, dossiers contre dotations) détectent ce que la revue ligne à ligne laisse passer.",
      "Une écriture manuelle qui touche directement le résultat (ajustement de marge, ajustement de produit) exige quatre choses avant tout visa : décomposition chiffrée, origine documentée, autorisation conforme à la matrice des délégations, revue par un tiers.",
      "La régularité est une information : une dotation identique chaque mois se vérifie en une seconde, et un montant qui dérive (64 466,667 € au lieu de 64 500,00 €) saute aux yeux dès qu'on trie par compte.",
      "Une validation orale ne vaut rien en comptabilité : les autorisations s'exigent par écrit, dans la matrice des délégations — une absence d'objection « de passage » n'est pas une autorisation.",
      "Les comptes cités (408, 418, 486, 487, 6811, 7815…) relèvent du PCG ; en IFRS les intitulés changent et aucun plan n'est imposé, mais la logique de rattachement et d'estimation est identique — le nommer en entretien montre la conscience du référentiel.",
    ],
  },

  objectives: {
    why:
      "Une écriture de clôture erronée coûte deux fois : elle fausse le résultat du mois qu'elle clôture, puis à nouveau celui du mois où elle se corrige. La revue des écritures de clôture est donc le contrôle de dernier passage avant la diffusion du résultat mensuel : elle garantit que chaque charge et chaque produit est justifié, correctement imputé, correctement chiffré et rattaché à la bonne période. Dans ce scénario pédagogique, la revue de plus de soixante-dix écritures fait vivre les cinq axes du contrôle — justificatif, montant, imputation, date, période — et enseigne le réflexe le plus important du métier : aucune écriture, surtout celle qui « arrange » le résultat, ne se valide sans pièce, sans origine et sans autorisation.",
    infoSought: [
      'La liste exhaustive des écritures revues et leur statut après tri : conforme, à compléter, à corriger, à escalader',
      'Les justificatifs disponibles pour chaque écriture de régularisation (pièce, dossier, contrat, note)',
      'La correcte imputation : comptes existant au plan et adaptés à la nature de l\u2019opération (classe 2 contre classe 6, charge contre produit)',
      'Le bon rattachement à la période : fait générateur contre date comptable, écritures datées hors période',
      'La cohérence des montants : recalculs, symétrie des extournes, décimales, TVA ventilée',
      'Les écritures inhabituelles : origine, autorisation, explication et cohérence comptable',
      'L\u2019impact chiffré des anomalies détectées sur le résultat de chaque mois clôturé et sur le reporting diffusé',
    ],
    risksCovered: [
      "Risque de cut-off : charges et produits rattachés à la mauvaise période, résultats mensuels faux",
      "Risque d'erreur d'imputation : immobilisation passée en charge (et inversement), compte inexistant au plan",
      "Risque de doublon : écriture saisie deux fois, résultat déformé du double du montant",
      "Risque d'omission : TVA non ventilée, charge non comptabilisée, facture non parvenue oubliée",
      "Risque de manipulation du résultat : ajustements manuels adossés à des notes sans pièce (window dressing)",
      "Risque de fraude : écritures inhabituelles répétées (écarts d'arrondi), contrepassations non documentées, produits adossés à des comptes d'attente",
      "Risque de perte de traçabilité : écritures sans justificatif, revue non documentée, piste d'audit rompue",
      "Risque de conclusion hâtive : validation sous la pression du calendrier de reporting",
    ],
  },

  preparation: {
    documents: [
      'Journaux de clôture (OD) des quatre mois, avec numéros de séquence et libellés complets',
      'Extraction des écritures courantes connexes des journaux AC, VE et BQ retenues pour la revue',
      'Balance générale et grand livre des comptes de régularisation (408, 418, 471, 486, 487, 151, 491, 28xx, 681x, 781x)',
      'Plan de comptes interne et politique d\u2019immobilisation (seuil d\u2019immobilisation des biens unitaires)',
      'Grilles de clôture : factures non parvenues, produits à recevoir, charges et produits constatés d\u2019avance',
      'Tableaux d\u2019amortissement et dossier des immobilisations',
      'Dossiers justificatifs : provisions (litiges, garanties) et dépréciations de créances (balance âgée clients)',
      'Contrats d\u2019assurance, d\u2019abonnement et de location (pour contrôler les charges d\u2019avance et leur étalement)',
      'Dernier reporting mensuel diffusé (pour mesurer l\u2019impact des corrections à venir)',
      'Matrice des délégations : qui peut demander, saisir et valider quel montant d\u2019écriture',
      'Historique des anomalies des clôtures précédentes et de leur traitement',
    ],
    questionsToAsk: [
      'Quel est le périmètre exact de la revue : toutes les écritures de clôture, ou un échantillon ciblé ?',
      'Les clôtures précédentes ont-elles déjà fait l\u2019objet d\u2019une revue, et avec quelles conclusions ?',
      'Qui valide les écritures manuelles, et selon quels seuils de la matrice des délégations ?',
      'Les écritures de régularisation sont-elles saisies par un seul comptable (séparation des tâches) ?',
      'Quel est le statut des comptes d\u2019attente et des suspens à la date de la revue ?',
      'Existe-t-il des instructions de la direction en cours sur des ajustements de résultat ?',
      'Quelles clôtures sont encore réouvribles, et lesquelles sont figées par la diffusion du reporting ?',
    ],
    precautions: [
      "Ne jamais valider une écriture sur la seule confiance en celui qui l'a passée : la pièce fait foi, pas la personne.",
      "Recalculer soi-même les montants récurrents (dotations mensuelles, extournes de CCA et PCA) avant de les accepter : la régularité apparente peut masquer une dérive.",
      "Surveiller les montants à décimales aberrantes et les libellés vagues (« régularisation à imputer ») : ce sont les signatures classiques du recalcul manuel non documenté.",
      "Challenger toute écriture touchant directement le résultat (ajustement de marge, ajustement de produit) : exiger la décomposition chiffrée et l'autorisation avant tout visa.",
      "Documenter chaque anomalie avec son chiffrage et son traitement proposé : une revue non documentée ne protège personne — ni le stagiaire, ni le responsable, ni l'entreprise.",
    ],
  },

  method: [
    {
      title: 'Cadrer le périmètre de la revue',
      description:
        "Rassembler le journal des OD des quatre clôtures, l'extraction des écritures connexes (AC, VE, BQ), la balance, le plan de comptes et les grilles de clôture ; formaliser ce qui est revu et ce qui ne l'est pas.",
      why: "Une revue sans périmètre défini devient une impression, pas un contrôle : ce qui n'est pas dans le périmètre n'est pas couvert.",
    },
    {
      title: 'Vérifier l\u2019exhaustivité et la chronologie de l\u2019extraction',
      description:
        "Contrôler que toutes les dates tombent dans la période revue et que la numérotation des écritures est continue, sans trou de séquence.",
      why: "Un trou dans la séquence des numéros peut masquer une écriture supprimée — le premier signal d'une manipulation possible.",
    },
    {
      title: 'Contrôler les justificatifs de chaque écriture',
      description:
        "Pour chaque ligne : la pièce existe-t-elle, est-elle adaptée (facture, BL signé, contrat, avis d'avocat, tableau), est-elle lisible et datée ? Marquer oui / incomplet / non.",
      why: "Une écriture sans pièce n'est pas une écriture : c'est une affirmation. Le justificatif est l'axe le plus rapide et le plus discriminant du contrôle.",
    },
    {
      title: 'Contrôler les montants',
      description:
        "Recalculer ce qui se recalcule : dotations mensuelles issues du tableau d'amortissement, extournes symétriques des CCA et PCA, montants périodiques (loyers, abonnements) ; traquer décimales aberrantes et incohérences avec la pièce.",
      why: "L'erreur de saisie est l'anomalie la plus fréquente et la plus coûteuse si elle n'est pas détectée avant la diffusion du résultat.",
    },
    {
      title: 'Contrôler les imputations comptables',
      description:
        "Vérifier que le compte débité et le compte crédité existent au plan, correspondent à la nature de l'opération (classe 2 contre classe 6, charge contre produit) et que le sens de l'écriture est juste.",
      why: "Une bonne pièce sur un mauvais compte fausse aussi bien le résultat que les documents de synthèse : l'imputation est une décision comptable, pas une habitude de saisie.",
    },
    {
      title: 'Contrôler les dates et la période de rattachement',
      description:
        "Confronter le fait générateur (livraison, prestation reçue) à la date comptable ; repérer les écritures de régularisation datées hors période et les écritures de bord de mois.",
      why: "Le rattachement à la bonne période est la raison d'être de la clôture : une écriture juste imputée à la mauvaise période reste une erreur de résultat.",
    },
    {
      title: 'Passer en revue les écritures de régularisation type par type',
      description:
        "Traiter successivement les charges à payer (408), produits à recevoir (418), charges constatées d'avance (486) et produits constatés d'avance (487) : mécanique, montant, apurement et extourne prévisible.",
      why: "Chaque type a sa logique propre et ses erreurs typiques : le traitement par famille rend le contrôle exhaustif et rapide.",
    },
    {
      title: 'Contrôler les dotations : amortissements, provisions, dépréciations',
      description:
        "Comparer chaque dotation au tableau d'amortissement et à son dossier (litige, garantie, créance douteuse) ; vérifier la symétrie des dotations mensuelles et l'existence des justificatifs d'estimation.",
      why: "Les dotations sont des estimations : sans référentiel (tableau, dossier), elles deviennent des variables d'ajustement du résultat.",
    },
    {
      title: 'Contrôler reprises et extournes',
      description:
        "Vérifier que chaque CCA et PCA de la clôture précédente s'est extournée à la consommation ou à l'exécution, et que chaque reprise (7815, 7817) correspond à un événement documenté.",
      why: "Une extourne manquante double une charge ou un produit ; une reprise immotivée majore le résultat : les deux déforment le mois courant.",
    },
    {
      title: 'Mener les contrôles de cohérence croisés',
      description:
        "Confronter les sources indépendantes : grille des factures non parvenues contre solde du 408, dotations comptabilisées contre dossiers justificatifs, amortissements théoriques contre amortissements saisis.",
      why: "La confrontation de deux sources qui doivent concorder est le détecteur le plus puissant : elle révèle ce que la revue ligne à ligne ne peut pas voir.",
    },
    {
      title: 'Isoler et challenger les écritures inhabituelles',
      description:
        "Repérer les montants ronds élevés, comptes atypiques, libellés vagues, saisies manuelles récurrentes et contrepassations non motivées ; pour chacune, exiger origine, justificatif chiffré et autorisation.",
      why: "L'inhabituel est le territoire privilégié de l'erreur grossière comme de la fraude : l'ignorer, c'est assumer le risque.",
    },
    {
      title: 'Traiter les suspens et écarts détectés',
      description:
        "Pour chaque écart ou suspens issu de la revue : identifier la cause, chiffrer l'impact, définir le traitement (correction, extourne, apurement, réclamation) et une échéance.",
      why: "Un écart constaté mais non traité revient contaminer les clôtures suivantes — et se concentre dans la clôture annuelle.",
    },
    {
      title: 'Documenter les anomalies et proposer les corrections',
      description:
        "Tenir la feuille de revue : chaque anomalie avec son n° d'écriture, son chiffrage, son impact sur le résultat, la correction proposée et le statut de validation.",
      why: "La revue n'existe que si elle est documentée : la feuille de revue est la piste d'audit du contrôle lui-même.",
    },
    {
      title: 'Faire valider, corriger et archiver',
      description:
        "Faire viser les corrections par le responsable selon la matrice des délégations, les passer au journal, puis archiver le dossier de clôture complet (revue, pièces, corrections, visas).",
      why: "Le cycle se termine par une validation formelle et un archivage — pas par une impression : c'est ce qui rend le contrôle opposable.",
    },
  ],

  exercises: [
    {
      id: 'f2m5-ex1',
      title: 'Exercice 1 · Journal de clôture à trier : soixante-dix écritures',
      cycle: 'Clôture',
      context:
        "Dans ce cas, on me confie la revue des écritures de clôture des quatre mois du stage (données fictives). Le responsable a extrait du journal des opérations diverses et des journaux de flux connexes les soixante-dix écritures soumises à revue — l'extraction représente la revue d'ensemble de plus de soixante-dix écritures des clôtures de juin à septembre 2025. J'attends de moi un tri en quatre catégories : conforme, à compléter, à corriger, à escalader. Toutes les écritures sont fictives et exprimées en euros, montants hors taxes sauf mention contraire (TVA à 20 %) ; le plan de comptes interne est aligné sur le PCG (les dotations transitent par 6811, 6815, 6817, 686 ou 687) et la politique interne immobilise les biens unitaires d'au moins 500,00 € HT.",
      documents: [
        {
          kind: 'table',
          name: 'Journal de clôture — extraction des écritures revues, juin à septembre 2025 (document fictif)',
          columns: ['N°', 'Date', 'Journal', 'Compte débité', 'Compte crédité', 'Montant (€)', 'Libellé', 'Justificatif'],
          rows: [
            [1, '03/06', 'AC', '606', '401', 4720, 'Facture d\u2019électricité — consommation de mai 2025', 'oui'],
            [2, '10/06', 'AC', '601', '401', 184300, 'Achat de matières premières — fournisseur Métalux (montant HT)', 'oui'],
            [3, '12/06', 'VE', '411', '701', 262400, 'Ventes de produits finis — client Corvet (BL n° 2451)', 'oui'],
            [4, '18/06', 'BQ', '512', '411', 86500, 'Encaissement client Sablier & Cie', 'oui'],
            [5, '20/06', 'AC', '607', '401', 47900, 'Achat de marchandises import — fournisseur Nordvik (montant HT)', 'oui'],
            [6, '25/06', 'BQ', '627', '512', 240, 'Frais de tenue de compte — 2e trimestre 2025', 'oui'],
            [7, '26/06', 'VE', '411', '706', 54200, 'Prestations de services — client Vulpia', 'oui'],
            [8, '27/06', 'AC', '615', '401', 2870, 'Maintenance des équipements — juin 2025', 'oui'],
            [9, '30/06', 'BQ', '641', '512', 148000, 'Virement des salaires — juin 2025', 'oui'],
            [10, '30/06', 'OD', '606', '408', 4850, 'Énergie de juin — facture non parvenue (charge à payer)', 'oui'],
            [11, '30/06', 'OD', '622', '408', 12000, 'Honoraires d\u2019audit — mission intermédiaire de juin (charge à payer)', 'oui'],
            [12, '30/06', 'OD', '418', '706', 27500, 'Prestations de juin non encore facturées — client Corvet (produit à recevoir)', 'oui'],
            [13, '30/06', 'OD', '486', '626', 43200, 'Prime d\u2019assurance annuelle payée en juin — couverture juillet 2025 à juin 2026 (CCA)', 'oui'],
            [14, '30/06', 'OD', '706', '487', 22500, 'Maintenance facturée d\u2019avance — août 2025 à janvier 2026 (PCA)', 'oui'],
            [15, '30/06', 'OD', '6811', '2813', 28750, 'Dotation aux amortissements — construction, juin', 'oui'],
            [16, '30/06', 'OD', '6811', '2815', 64500, 'Dotation aux amortissements — installations techniques, juin', 'oui'],
            [17, '30/06', 'OD', '6815', '151', 120000, 'Provision pour litige — fournisseur Métalux (avis d\u2019avocat)', 'oui'],
            [18, '30/06', 'OD', '491', '7817', 19600, 'Reprise de dépréciation — client Gunnar (règlement partiel reçu)', 'oui'],
            [19, '30/06', 'OD', '486', '606', 4600, 'Régularisation cut-off — part de la facture d\u2019énergie de juin afférente à juillet (CCA)', 'oui'],
            [20, '30/06', 'OD', '512002', '512001', 500000, 'Virement interne entre comptes bancaires — reclassé en OD à la clôture', 'incomplet'],
            [21, '02/07', 'BQ', '613', '512', 27600, 'Loyer du trimestre juillet-septembre — paiement unique', 'oui'],
            [22, '08/07', 'AC', '408', '401', 4850, 'Facture d\u2019électricité de juin — solde de la charge à payer n° 10', 'oui'],
            [23, '12/07', 'OD', '613', '408', 7900, 'Location d\u2019équipement de chantier — prestation de juin imputée tardivement', 'oui'],
            [24, '15/07', 'AC', '606', '401', 1850, 'Achat d\u2019un micro-ordinateur portable et écran — service comptabilité', 'oui'],
            [25, '15/07', 'VE', '411', '707', 31800, 'Ventes de marchandises — client Ardenn', 'oui'],
            [26, '21/07', 'BQ', '401', '512', 184300, 'Règlement fournisseur Métalux — facture du 10/06', 'oui'],
            [27, '31/07', 'OD', '613', '408', 9200, 'Location d\u2019équipements — juillet, facture non parvenue (charge à payer)', 'oui'],
            [28, '31/07', 'OD', '418', '701', 41300, 'Produits livrés fin juillet non encore facturés — client Ardenn (produit à recevoir)', 'oui'],
            [29, '31/07', 'OD', '486', '613', 18400, 'Charges constatées d\u2019avance — loyers d\u2019août et septembre payés d\u2019avance (2 × 9 200)', 'oui'],
            [30, '31/07', 'OD', '6811', '2818', 9625, 'Dotation aux amortissements — matériel informatique, juillet', 'oui'],
            [31, '31/07', 'OD', '6817', '491', 46800, 'Dépréciation de la créance client Verdot — compte douteux (60 %)', 'oui'],
            [32, '31/07', 'OD', '606', '486', 4600, 'Régularisation cut-off — extourne de la CCA énergie, mois de juillet consommé', 'oui'],
            [33, '31/07', 'OD', '6788', '512', 12.57, 'Écart d\u2019arrondi — 3e occurrence consécutive (juin : 11,30 € ; juillet : 9,80 €)', 'non'],
            [34, '31/07', 'OD', '706', '418', 27500, 'Contrepassation de l\u2019écriture n° 12 (produit à recevoir de juin) — motif non documenté', 'non'],
            [35, '08/08', 'AC', '606', '401', 4930, 'Facture d\u2019électricité — consommation de juillet', 'oui'],
            [36, '11/08', 'VE', '411', '701', 297600, 'Ventes de produits finis — client Balder', 'oui'],
            [37, '19/08', 'AC', '601', '401', 152700, 'Achat de matières premières — fournisseur Orcom (montant HT)', 'oui'],
            [38, '26/08', 'BQ', '512', '411', 63200, 'Encaissement client Verdot SA', 'oui'],
            [39, '27/08', 'AC', '622', '401', 1440, 'Honoraires de conseil juridique — facture TTC (HT 1 200,00 + TVA 20 %)', 'oui'],
            [40, '31/08', 'OD', '606', '408', 5120, 'Énergie d\u2019août — facture non parvenue (charge à payer)', 'oui'],
            [41, '31/08', 'OD', '615', '408', 3480, 'Maintenance d\u2019août — prestation reçue non facturée (charge à payer)', 'oui'],
            [42, '31/08', 'OD', '418', '706', 18750, 'Prestations d\u2019août non encore facturées — client Vulpia (produit à recevoir)', 'oui'],
            [43, '31/08', 'OD', '418', '708', 6400, 'Commissions de partenariat d\u2019août — produits à recevoir (contrat non joint)', 'incomplet'],
            [44, '31/08', 'OD', '486', '622', 14400, 'Abonnement plateforme — semestre septembre 2025 à février 2026 payé en août (CCA)', 'oui'],
            [45, '31/08', 'OD', '701', '487', 15900, 'Acompte client Balder sur livraisons de septembre-octobre (PCA)', 'oui'],
            [46, '31/08', 'OD', '6811', '2813', 28750, 'Dotation aux amortissements — construction, août', 'oui'],
            [47, '31/08', 'OD', '6811', '2815', '64 466,667', 'Dotation aux amortissements — installations techniques, août (recalcul manuel)', 'incomplet'],
            [48, '31/08', 'OD', '6815', '151', 85000, 'Provision pour garanties produits — retours atelier (dossier qualité)', 'oui'],
            [49, '31/08', 'OD', '151', '7815', 60000, 'Reprise de provision pour litige Métalux — accord transactionnel signé', 'oui'],
            [50, '31/08', 'OD', '613', '486', 9200, 'Régularisation cut-off — extourne de la CCA loyer, mois d\u2019août consommé', 'oui'],
            [51, '31/08', 'OD', '487', '706', 3750, 'Régularisation cut-off — part de la PCA maintenance consommée en août', 'oui'],
            [52, '31/08', 'OD', '701', '6788', 38600, 'Ajustement de marge manuel — « recalage marge atelier » (note du contrôleur de gestion)', 'incomplet'],
            [53, '03/09', 'AC', '408', '401', 5120, 'Facture d\u2019électricité d\u2019août — solde de la charge à payer n° 40', 'oui'],
            [54, '09/09', 'VE', '411', '706', 71400, 'Prestations de services — client Halden', 'oui'],
            [55, '16/09', 'BQ', '401', '512', 152700, 'Règlement fournisseur Orcom — facture du 19/08', 'oui'],
            [56, '24/09', 'AC', '606', '401', 3240, 'Facture d\u2019eau — septembre 2025', 'oui'],
            [57, '29/09', 'BQ', '613', '512', 27600, 'Loyer du 4e trimestre (octobre-décembre) payé d\u2019avance — imputé en charge', 'oui'],
            [58, '30/09', 'OD', '606', '408', 4670, 'Énergie de septembre — facture non parvenue (charge à payer)', 'oui'],
            [59, '30/09', 'OD', '418', '701', 52800, 'Livraisons de fin septembre non encore facturées — client Sablier & Cie (produit à recevoir)', 'oui'],
            [60, '30/09', 'OD', '486', '613', 27600, 'Charges constatées d\u2019avance — loyers du 4e trimestre payés d\u2019avance (3 × 9 200)', 'oui'],
            [61, '30/09', 'OD', '706', '487', 18000, 'Abonnement annuel facturé d\u2019avance — octobre 2025 à septembre 2026 (PCA)', 'oui'],
            [62, '30/09', 'OD', '6811', '2818', 9625, 'Dotation aux amortissements — matériel informatique, septembre', 'oui'],
            [63, '30/09', 'OD', '6817', '491', 62400, 'Dépréciation de la créance client Marges & Co — prélèvement SEPA rejeté', 'oui'],
            [64, '30/09', 'OD', '6815', '151', 150000, 'Provision pour litige salarié — dossier RH (avis du conseil juridique)', 'oui'],
            [65, '30/09', 'OD', '6815', '151', 150000, 'Provision pour litige salarié — dossier RH (avis du conseil juridique)', 'oui'],
            [66, '30/09', 'OD', '491', '7817', 12450, 'Reprise de dépréciation — client Halden (règlement intégral reçu)', 'oui'],
            [67, '30/09', 'OD', '613', '486', 9200, 'Régularisation cut-off — extourne de la CCA loyer, mois de septembre consommé', 'oui'],
            [68, '30/09', 'OD', '487', '706', 3750, 'Régularisation cut-off — part de la PCA maintenance consommée en septembre', 'oui'],
            [69, '30/09', 'OD', '6788', '471', 22500, 'Régularisation à imputer — sans pièce ni note', 'non'],
            [70, '30/09', 'OD', '689', '151', 75000, 'Provision pour restructuration — dotation (plan en cours d\u2019élaboration)', 'incomplet'],
          ],
          note:
            "Conventions du scénario fictif : montants hors taxes sauf mention contraire (TVA 20 %) ; journaux OD (opérations diverses), AC (achats), VE (ventes), BQ (banque) ; justificatif = pièce disponible au dossier (oui / incomplet / non). Le plan de comptes interne est aligné sur le PCG : les dotations transitent par 6811, 6815, 6817, 686 ou 687. Document fictif à but pédagogique.",
        },
      ],
      questions: [
        {
          id: 'f2m5-ex1-q1',
          question:
            'Tri préalable : parmi ces écritures, lesquelles appellent une revue prioritaire avant validation de la clôture ?',
          type: 'multi',
          options: [
            'n° 20 — virement interne de 500 000,00 € entre comptes bancaires, passé en OD à la clôture de juin',
            'n° 24 — acquisition d\u2019un micro-ordinateur de 1 850,00 € imputée en charge (606) au lieu de l\u2019immobilisation (2183)',
            'n° 15 — dotation aux amortissements de la construction de 28 750,00 € au 30/06, adossée au tableau d\u2019amortissement',
            'n° 39 — honoraires de 1 440,00 € TTC enregistrés en charge sans ventilation de la TVA déductible',
            'n° 43 — produits à recevoir de 6 400,00 € sur commissions de partenariat (contrat non joint au dossier)',
            'n° 47 — dotation aux amortissements de 64 466,667 € calculée manuellement, avec trois décimales',
            'n° 60 — charges constatées d\u2019avance de 27 600,00 € sur le loyer du 4e trimestre payé d\u2019avance',
            'n° 64 et 65 — deux saisies identiques de la provision pour litige salarié de 150 000,00 € le même 30/09',
          ],
          expected: ['0', '1', '3', '5', '7'],
          explanation:
            "Cinq écritures appellent la revue prioritaire. n° 20 : un virement interne pur n'a rien à faire au journal OD de clôture, et 500 000,00 € exige la vérification du couple 512001/512002 (même date, même montant, sens opposés) — à reclasser en BQ et à justifier. n° 24 : un bien durable de 1 850,00 € HT (seuil interne d'immobilisation : 500,00 €) imputé au 606 (classe 6) au lieu du 2183 (classe 2) : charge excessive, actif manquant, dotation manquante. n° 39 : la facture TTC de 1 440,00 € (HT 1 200,00 + TVA 240,00) est enregistrée en charge pour son TTC sans ventilation du 44566 : TVA déductible omise de 240,00 € et charge majorée d'autant. n° 47 : une dotation à trois décimales (64 466,667 €) est le signe d'un recalcul manuel non documenté, à refaire pour 64 500,00 € selon le tableau. n° 64/65 : deux saisies identiques le même jour — doublon de 150 000,00 € à extourner. Les n° 15 et 60 sont conformes ; le n° 43 est à compléter (joindre le contrat) mais non prioritaire. Quatre autres signaux existent aussi dans le journal : n° 23 (date hors période), n° 33 (écart d'arrondi répété), n° 34 (contrepassation non documentée), n° 52 (ajustement de marge manuel), n° 69 (écriture sans justificatif) et n° 70 (compte 689 inexistant au plan).",
        },
        {
          id: 'f2m5-ex1-q2',
          question:
            'Combien d\u2019écritures de l\u2019extraction sont totalement dépourvues de justificatif (colonne « Justificatif » = non) ?',
          type: 'numeric',
          expected: 3,
          explanation:
            "Trois écritures sont sans aucune pièce : n° 33 (écart d'arrondi de 12,57 €), n° 34 (contrepassation du produit à recevoir de juin, motif non documenté) et n° 69 (régularisation à imputer de 22 500,00 €). Cinq écritures supplémentaires ont un justificatif incomplet (n° 20, 43, 47, 52 et 70) : à compléter avant validation. Dans ce cas, je liste ces huit écritures sur la feuille de revue avec un statut distinct : « sans pièce » appelle le refus de validation, « incomplet » appelle une demande de complément.",
        },
        {
          id: 'f2m5-ex1-q3',
          question:
            "Après le tri, calculer le montant total des écritures de régularisation conformes de l'extraction — charges à payer, produits à recevoir, charges et produits constatés d'avance, dotations aux amortissements, provisions et dépréciations, reprises, régularisations de cut-off — en excluant les journaux de flux (AC, VE, BQ), les écritures inhabituelles et les écritures erronées. En euros.",
          type: 'numeric',
          expected: 1078670,
          explanation:
            "Le tri écarte : les 24 écritures de flux AC/VE/BQ (dont les deux anomalies n° 24 et n° 39), les quatre écritures inhabituelles (n° 20, 33, 34 et 52), et les écritures erronées restantes (n° 23, 47, 65, 69 et 70) — la seconde saisie du litige salarié (n° 65) ne compte pas une deuxième fois. Restent 37 écritures de régularisation conformes : charges à payer 39 320,00 € ; produits à recevoir 146 750,00 € ; charges constatées d'avance 103 600,00 € ; produits constatés d'avance 56 400,00 € ; dotations aux amortissements 141 250,00 € ; provisions et dépréciations 464 200,00 € (une seule saisie du litige salarié) ; reprises 92 050,00 € ; régularisations de cut-off 35 100,00 €. Total : 1 078 670,00 €. Dans ce cas, je recalcule ce total par catégorie puis je le contrôle par cumul croisé avant de le reporter sur la feuille de revue.",
        },
        {
          id: 'f2m5-ex1-q4',
          question: 'Quelle paire d\u2019écritures constitue un vrai doublon à extourner ?',
          type: 'mcq',
          options: [
            'n° 15 et n° 46 — dotations construction de 28 750,00 € passées les 30/06 et 31/08',
            'n° 64 et n° 65 — provisions pour litige salarié de 150 000,00 € passées le même 30/09, mêmes comptes, même libellé',
            'n° 10 et n° 22 — charge à payer électricité de juin (4 850,00 €) puis facture venue la solder le 08/07',
            'n° 19 et n° 32 — CCA énergie de 4 600,00 € au 30/06 puis son extourne au 31/07',
          ],
          expected: '1',
          explanation:
            "Le doublon, c'est n° 64/65 : mêmes comptes (6815/151), même montant (150 000,00 €), même date (30/09), même libellé — double saisie, dont une à extourner. Les autres paires sont des régularités saines : des dotations mensuelles identiques sur des dates différentes sont la norme du tableau d'amortissement (n° 15/46) ; une charge à payer suivie de sa facture est le cycle normal d'apurement du 408 (n° 10/22) ; une CCA suivie de son extourne le mois de consommation est la mécanique même du cut-off (n° 19/32). Dans ce cas, la méthode de détection est le tri par compte puis par date : le doublon se voit au même jour, jamais à la lecture linéaire du journal.",
        },
        {
          id: 'f2m5-ex1-q5',
          question:
            "Rédigez votre démarche de revue de ce journal de clôture en cinq temps : cadrage, contrôles par axe, signaux détectés, chiffrage des corrections, validation et escalade. Intégrez le traitement des écritures inhabituelles et le total de régularisations conformes. Réponse structurée attendue.",
          type: 'open',
          keywords: [
            'justificatif',
            'montant',
            'imputation',
            'période',
            'cohérence',
            'priorité',
            'extourne',
            'escalader',
            'documenter',
          ],
          explanation:
            "Démarche attendue : (1) Cadrer : vérifier l'exhaustivité de l'extraction (numérotation continue, dates dans la période juin-septembre), disposer du plan de comptes, de la balance et des grilles de clôture. (2) Contrôler par les cinq axes, dans l'ordre de rapidité : justificatif (huit écritures sans pièce ou incomplète), montant (dotation aberrante n° 47 à trois décimales, TVA omise n° 39), imputation (micro-ordinateur en charge n° 24, compte 689 inexistant au plan n° 70), date (charge de juin passée le 12/07, n° 23), période (rattachement de chaque régularisation). (3) Isoler les signaux : sept anomalies (doublon n° 65, sans justificatif n° 69, erreur d'imputation n° 24, TVA omise n° 39, date hors période n° 23, montant décimal aberrant n° 47, compte inexistant n° 70) et quatre écritures inhabituelles (virement interne reclassé n° 20, ajustement de marge n° 52, écart d'arrondi répété n° 33, contrepassation mystérieuse n° 34) — onze écritures à revoir, priorité aux montants qui touchent le résultat (150 000,00 € ; 75 000,00 € ; 38 600,00 €). (4) Chiffrer les corrections : extourne du doublon (150 000,00 €), dotation refaite à 64 500,00 € (écart de 33,33 €), réimputation au 2183 (1 850,00 €), ventilation TVA (240,00 € au 44566), reprise de la charge de juin (7 900,00 €), réécriture de la provision sur le 687 avec dossier (75 000,00 €), rejet ou complément des écritures sans pièce, reclassement du virement interne en BQ. (5) Documenter et escalader : feuille de revue avec statut par écriture, total des régularisations conformes (1 078 670,00 €), visa du responsable selon la matrice des délégations, et escalade de l'ajustement de marge manuel et de toute écriture touchant directement le résultat.",
        },
      ],
      risks: [
        'Doublon de provision non détecté avant la diffusion du reporting mensuel',
        'Immobilisation passée en charge : actif et résultat faux, dotation manquante',
        'Écriture inhabituelle validée sur son libellé, sans pièce ni autorisation',
      ],
      solutionSummary:
        "Le tri des soixante-dix écritures fait ressortir onze lignes à revoir. Quatre écritures inhabituelles : virement interne de 500 000,00 € reclassé en OD (n° 20, à reclasser en BQ et à justifier par le couple bancaire), ajustement de marge manuel de 38 600,00 € (n° 52, décomposition chiffrée et autorisation à exiger), écart d'arrondi répété de 12,57 € (n° 33, cause à identifier et traitement à automatiser), contrepassation non documentée du produit à recevoir de 27 500,00 € (n° 34, à challenger). Sept anomalies : doublon de provision de 150 000,00 € (n° 65, extourne), écriture sans justificatif de 22 500,00 € (n° 69, rejet ou pièce), erreur d'imputation classe 2 contre classe 6 (n° 24, 1 850,00 € à réimputer au 2183), TVA omise de 240,00 € (n° 39), date hors période (n° 23, charge de juin de 7 900,00 € passée le 12/07), montant décimal aberrant (n° 47, dotation de 64 466,667 € à refaire pour 64 500,00 €), compte 689 inexistant au plan (n° 70, 75 000,00 € à réécrire au 687 avec dossier). Trois écritures sont sans justificatif (n° 33, 34, 69) et cinq incomplètes (n° 20, 43, 47, 52, 70). Le total des écritures de régularisation conformes ressort à 1 078 670,00 € (charges à payer 39 320,00 € ; produits à recevoir 146 750,00 € ; CCA 103 600,00 € ; PCA 56 400,00 € ; dotations 141 250,00 € ; provisions et dépréciations 464 200,00 € ; reprises 92 050,00 € ; cut-off 35 100,00 €). En entretien, annoncer le tri en quatre catégories (conforme / à compléter / à corriger / à escalader) puis dérouler les cinq axes du contrôle suffit à démontrer la maîtrise complète de la revue de clôture.",
      interviewTips: [
        "Annoncer le tri en quatre catégories (conforme, à compléter, à corriger, à escalader) avant de détailler : la structure crédibilise d'emblée.",
        "Citer les cinq axes du contrôle dans l'ordre — justificatif, montant, imputation, date, période : c'est la grille systématique attendue d'un praticien.",
        "Sur le doublon, décrire la méthode (tri par compte puis par date) plutôt que la chance : c'est ce qui distingue la revue outillée de la lecture linéaire.",
      ],
    },

    {
      id: 'f2m5-ex2',
      title: 'Exercice 2 · Cut-off et rattachement : huit situations de bord de mois',
      cycle: 'Clôture',
      context:
        "La clôture de septembre 2025 est arrêtée au 30/09 (données fictives). Huit situations de bord de mois me sont soumises : pour chacune, le fait générateur — ce qui s'est réellement passé (livraison, prestation reçue, période couverte) — est à confronter à l'écriture passée et à sa date. Je dois dire lesquelles exigent une écriture de régularisation au 30/09, lesquelles sont correctement traitées, et chiffrer les régularisations. Règle d'or : le fait générateur commande la période — jamais la facture, jamais l'encaissement.",
      documents: [
        {
          kind: 'table',
          name: 'Huit situations de cut-off — clôture de septembre 2025 (document fictif)',
          columns: ['Cas', 'Opération — fait générateur et dates', 'Écriture comptabilisée', 'Montant (€)'],
          rows: [
            ['C1', 'Maintenance — prestation reçue et acceptée le 26/09/2025 ; facture reçue début octobre', 'AC le 03/10 : débit 615 / crédit 401 — charge imputée à octobre', 5600],
            ['C2', 'Livraison de produits — bon de livraison client signé le 30/09/2025 ; facture émise le 03/10', 'VE le 03/10 : débit 411 / crédit 701 — produit imputé à octobre', 84000],
            ['C3', 'Loyer du 4e trimestre (octobre-décembre) — payé et imputé en charge le 29/09', 'BQ le 29/09 : débit 613 / crédit 512 — charge de septembre', 27600],
            ['C4', 'Licence ERP annuelle (octobre 2025 → septembre 2026) — facture comptabilisée le 26/09', 'AC le 26/09 : débit 622 / crédit 401 — charge de septembre', 21600],
            ['C5', 'Conseil juridique — prestation rendue le 30/09 ; facture non parvenue à la clôture', 'OD au 30/09 : débit 622 / crédit 408 — charge à payer de septembre', 12500],
            ['C6', 'Acompte facturé le 26/09 pour une prestation prévue en novembre 2025', 'VE le 26/09 : débit 411 / crédit 706 — produit de septembre', 24000],
            ['C7', 'Électricité de septembre (relevé) — facture non parvenue à la clôture', 'OD au 30/09 : débit 606 / crédit 408 — charge à payer de septembre', 4670],
            ['C8', 'Transport d\u2019une expédition du 30/09 — facture reçue le 04/10', 'AC le 04/10 : débit 624 / crédit 401 — charge imputée à octobre', 3800],
          ],
          note:
            "Convention du scénario : chaque cas compare le fait générateur (colonne 2) à l'écriture réellement passée (colonne 3). La clôture de septembre couvre la période du 01/09 au 30/09/2025. Document fictif à but pédagogique.",
        },
      ],
      questions: [
        {
          id: 'f2m5-ex2-q1',
          question:
            'Lesquels de ces huit cas appellent une écriture de régularisation à la clôture du 30/09 ?',
          type: 'multi',
          options: [
            'C1 — maintenance de septembre comptabilisée en charge d\u2019octobre',
            'C2 — livraison signée le 30/09, produit comptabilisé en octobre',
            'C3 — loyer du 4e trimestre payé le 29/09, imputé en charge de septembre',
            'C4 — licence annuelle octobre 2025 → septembre 2026, imputée en charge de septembre',
            'C5 — conseil juridique de septembre, charge à payer passée au 30/09',
            'C6 — acompte facturé le 26/09 pour une prestation de novembre, produit comptabilisé en septembre',
            'C7 — électricité de septembre, charge à payer passée au 30/09',
            'C8 — transport d\u2019une expédition du 30/09, charge comptabilisée en octobre',
          ],
          expected: ['0', '1', '2', '3', '5', '7'],
          explanation:
            "Six cas exigent une régularisation. C1 et C8 : des charges de septembre (prestation reçue le 26/09, transport de l'expédition du 30/09) comptabilisées en octobre — charges à passer au 30/09 par le 408 (5 600,00 € et 3 800,00 €). C2 : le produit appartient à septembre dès la livraison signée (BL du 30/09) — produit à recevoir par le 418 pour 84 000,00 €, même si la facture part en octobre. C3 et C4 : des charges payées mais afférentes aux périodes suivantes — charges constatées d'avance par le 486 (27 600,00 € et 21 600,00 €). C6 : l'acompte facturé pour une prestation de novembre a été comptabilisé en produit de septembre — produit constaté d'avance par le 487 pour 24 000,00 €. C5 et C7 sont correctement traités : charge à payer passée au 30/09, exactement le traitement attendu d'une facture non parvenue de fin de mois.",
        },
        {
          id: 'f2m5-ex2-q2',
          question:
            'Cas C2 — le bon de livraison est signé le 30/09, la facture est émise le 03/10 : à quelle période le produit doit-il être rattaché ?',
          type: 'mcq',
          options: [
            'Octobre — la facture fait foi, le produit suit la facturation',
            'Septembre — le fait générateur est la livraison (BL signé le 30/09) ; le produit à recevoir (418) la constate',
            'Pour moitié sur chaque mois — prorata de prudence entre livraison et facture',
            'Au choix — un écart de trois jours est immatériel sur un résultat mensuel',
          ],
          expected: '1',
          explanation:
            "Le produit se rattache à la période du fait générateur : la livraison, matérialisée par le BL signé le 30/09. La facture du 03/10 n'est qu'un document de facturation, pas le fait générateur. L'écriture correcte au 30/09 : débit 418 « Clients, produits non encore facturés » / crédit 701 pour 84 000,00 € — puis la facture d'octobre solde le 418. « La facture fait foi » est l'erreur classique du cut-off ; le prorata et l'immatérialité sont des façons élégantes de fuir la question : le rattachement est binaire, la période est celle du fait générateur.",
        },
        {
          id: 'f2m5-ex2-q3',
          question:
            'Cas C6 — l\u2019acompte de 24 000,00 € facturé le 26/09 pour une prestation de novembre a été comptabilisé au produit de septembre. Quel est le traitement correct ?',
          type: 'mcq',
          options: [
            'C\u2019est correct : l\u2019émission de la facture crée le produit de la période',
            'Incorrect : le produit relève de novembre — extourner le produit et constater un produit constaté d\u2019avance (débit 706 / crédit 487) pour 24 000,00 €',
            'Incorrect : il faut laisser le produit en septembre mais provisionner une charge équivalente pour symétrie',
            'C\u2019est correct si la prestation de novembre est certaine à 100 %',
          ],
          expected: '1',
          explanation:
            "Le produit suit l'exécution, pas la facturation : la prestation aura lieu en novembre, donc le produit de 24 000,00 € n'appartient pas à septembre. L'écriture de clôture : débit 706 / crédit 487 « Produits constatés d'avance » pour 24 000,00 € — le produit sera réintégré au résultat à mesure de l'exécution (ici, en novembre). Ni la certitude de la prestation ni la symétrie par provision ne justifient de majorer le résultat d'un produit non exécuté : c'est précisément l'objet du PCA d'empêcher le window dressing par facturation anticipée.",
        },
        {
          id: 'f2m5-ex2-q4',
          question:
            'Calculer le montant total à reclasser en charges constatées d\u2019avance (compte 486) au 30/09, en euros.',
          type: 'numeric',
          expected: 49200,
          explanation:
            "Deux cas génèrent des CCA : C3, le loyer du 4e trimestre payé le 29/09 et imputé en charge (27 600,00 € pour octobre-décembre, aucun mois consommé en septembre), et C4, la licence ERP annuelle octobre 2025 → septembre 2026 comptabilisée en charge de septembre (21 600,00 €). Total à reclasser : 27 600,00 + 21 600,00 = 49 200,00 € — écriture débit 486 / crédit 613 (C3) et débit 486 / crédit 622 (C4), pièces à l'appui (contrat de bail, contrat de licence).",
        },
        {
          id: 'f2m5-ex2-q5',
          question:
            'Calculer le montant total des charges à payer (408) et produits à recevoir (418) à comptabiliser au 30/09 pour les cas mal rattachés, en euros.',
          type: 'numeric',
          expected: 93400,
          explanation:
            "Trois cas mal rattachés : C1, la maintenance reçue le 26/09 et facturée en octobre — charge à payer de 5 600,00 € (débit 615 / crédit 408) ; C2, la livraison du 30/09 facturée en octobre — produit à recevoir de 84 000,00 € (débit 418 / crédit 701) ; C8, le transport de l'expédition du 30/09 facturé le 04/10 — charge à payer de 3 800,00 € (débit 624 / crédit 408). Total : 5 600,00 + 84 000,00 + 3 800,00 = 93 400,00 €.",
        },
        {
          id: 'f2m5-ex2-q6',
          question:
            "Décrivez votre démarche de contrôle du cut-off sur une clôture mensuelle : sélection des opérations à tester, tests menés, écritures et contrôles de supervision. Réponse structurée.",
          type: 'open',
          keywords: [
            'sélection',
            'bord',
            'période',
            'facture',
            'justificatif',
            'rattachement',
            'écriture',
            'documenter',
          ],
          explanation:
            "Démarche attendue : (1) Sélection : remonter systématiquement les opérations de bord de période — les derniers BL et prestations des cinq derniers jours du mois, les factures reçues et les paiements des trois à cinq premiers jours du mois suivant (C1, C2 et C8 en sont l'illustration : tout se joue sur quelques jours), plus les paiements d'avance (loyers, assurances, licences) et les facturations d'avance clients. (2) Tests : pour chaque opération, confronter le fait générateur (BL signé, prestation reçue, période couverte par le contrat) à la date et à l'imputation comptables ; vérifier le justificatif et le montant. (3) Écritures : classer chaque cas — charge à payer (débit charge / crédit 408) pour le consommé non facturé, produit à recevoir (débit 418 / crédit produit) pour le livré non facturé, CCA (débit 486 / crédit charge) pour le payé non consommé, PCA (débit produit / crédit 487) pour le facturé non exécuté — et chiffrer chaque régularisation (ici : 49 200,00 € de CCA, 93 400,00 € de charges à payer et produits à recevoir). (4) Supervision et documentation : tenir la grille de cut-off (cas, fait générateur, écriture, montant, statut), la faire viser, et réutiliser les premiers jours du mois suivant comme test inversé — une charge de septembre qui apparaît au journal du 3 octobre est l'indice d'un cut-off raté.",
        },
      ],
      risks: [
        'Charge de septembre oubliée : résultat du mois majoré, dette sous-évaluée',
        'Produit comptabilisé avant exécution : window dressing sur le résultat mensuel',
        'Charge d\u2019avance imputée en totalité sur le mois de paiement : période faussée',
      ],
      solutionSummary:
        "Six cas sur huit appellent une régularisation au 30/09 : C1 et C8 (charges de septembre facturées en octobre — charges à payer de 5 600,00 € et 3 800,00 €), C2 (produit de septembre facturé en octobre — produit à recevoir de 84 000,00 € : le BL signé le 30/09 fait foi), C3 et C4 (charges payées d'avance imputées en septembre — CCA de 27 600,00 € et 21 600,00 €, soit 49 200,00 € au total), et C6 (acompte facturé pour novembre — PCA de 24 000,00 €). C5 et C7 sont correctement traités : charges à payer passées au 30/09. Total des charges à payer et produits à recevoir à comptabiliser : 93 400,00 €. Le principe directeur tient en une phrase : le fait générateur — livraison, prestation reçue, période couverte — commande la période, jamais la facture ni l'encaissement. En entretien, chiffrer les régularisations (49 200,00 € de CCA, 93 400,00 € de FNP et PNR) transforme une opinion en contrôle : c'est la différence entre savoir le principe et savoir clôturer.",
      interviewTips: [
        "Énoncer la règle d'or d'entrée — « le fait générateur commande la période » — puis l'appliquer cas par cas : la règle structure la réponse.",
        "Distinguer FNP et CCA en une phrase : reçu mais pas facturé contre payé mais pas consommé — le vocabulaire juste crédibilise.",
        "Chiffrer chaque régularisation proposée : un cut-off sans montant reste une opinion, pas un contrôle.",
      ],
    },

    {
      id: 'f2m5-ex3',
      title: 'Exercice 3 · Cohérence entre comptes : trois contrôles croisés, trois écarts',
      cycle: 'Clôture',
      context:
        "La revue des quatre clôtures se termine par des contrôles de cohérence croisés (données fictives) : trois confrontations entre des sources indépendantes — les dossiers justificatifs ou la théorie des tableaux d'un côté, la comptabilité effective de l'autre. Deux écarts paraissent petits, le troisième est plus lourd. Je dois les chiffrer, les interpréter et définir les contrôles complémentaires avant validation.",
      documents: [
        {
          kind: 'table',
          name: 'Contrôles de cohérence croisés — clôtures juin à septembre 2025 (document fictif)',
          columns: ['Contrôle', 'Détail de la confrontation', 'Théorie / dossiers (€)', 'Comptabilité (€)'],
          rows: [
            ['A', 'Factures non parvenues de septembre : grille de clôture (énergie 4 670,00 + maintenance 3 480,00 + honoraires d\u2019audit 12 000,00) contre solde du compte 408 au 30/09 (balance générale)', 20150, 18750],
            ['B', 'Dotations aux provisions et dépréciations justifiées par les cinq dossiers (litige Métalux, garanties produits, créances Verdot et Marges & Co, litige salarié) contre dotations passées aux comptes 6815 et 6817 de juin à septembre (journal)', 464200, 614200],
            ['C', 'Dotation théorique d\u2019août des installations techniques (tableau d\u2019amortissement) contre dotation comptabilisée le 31/08 au journal (écriture n° 47 de l\u2019exercice 1)', 64500, '64 466,667'],
          ],
          note:
            "Chaque contrôle confronte deux sources indépendantes qui doivent concorder : la grille de clôture (source comptable préparatoire) contre la balance ; les dossiers justificatifs contre le journal ; le tableau d'amortissement contre la saisie. Document fictif à but pédagogique.",
        },
      ],
      questions: [
        {
          id: 'f2m5-ex3-q1',
          question:
            'Calculer l\u2019écart du contrôle A entre le total des factures non parvenues recensées et le solde du compte 408, en euros.',
          type: 'numeric',
          expected: 1400,
          explanation:
            "Écart A = 20 150,00 − 18 750,00 = 1 400,00 €. Le compte 408 est sous-évalué par rapport à la grille de clôture : une facture non parvenue a été saisie à un montant faux. En confrontant la grille ligne à ligne au grand livre du 408, la FNP maintenance (3 480,00 €) ressort saisie pour 2 080,00 € — inversion de chiffres à la saisie, l'écart (3 480 − 2 080 = 1 400) y correspond exactement. Correction : débiter la charge et créditer le 408 de 1 400,00 € pour recalier le solde sur la grille, et faire éditer la grille depuis la balance à l'avenir (une seule source de vérité).",
        },
        {
          id: 'f2m5-ex3-q2',
          question:
            'Calculer l\u2019écart du contrôle C entre la dotation aux amortissements des installations techniques comptabilisée en août et la dotation théorique du tableau, en euros.',
          type: 'numeric',
          expected: 33.33,
          explanation:
            "Écart C = 64 466,667 − 64 500,00 = 33,33 €. Trois décimales et un écart au tableau d'amortissement : la dotation a été recalculée à la main, sans pièce ni note (justificatif « incomplet » au journal, écriture n° 47 de l'exercice 1). La dotation mensuelle issue du tableau est de 64 500,00 € — comme en juin et juillet. Correction : extourner la dotation manuelle et repasser 64 500,00 €, avec le tableau d'amortissement en pièce jointe. Un écart de 33,33 € paraît dérisoire : c'est justement le piège — l'anomalie n'est pas le montant, c'est le recalcul hors référentiel.",
        },
        {
          id: 'f2m5-ex3-q3',
          question:
            'L\u2019écart de 1 400,00 € du contrôle A : quelle origine est cohérente avec ce montant ?',
          type: 'mcq',
          options: [
            'La FNP maintenance de 3 480,00 € a été saisie pour 2 080,00 € — inversion de chiffres à la saisie',
            'La FNP énergie de 4 670,00 € a été oubliée à la saisie',
            'Les honoraires d\u2019audit de 12 000,00 € ont été comptabilisés deux fois dans le 408',
            'Un simple arrondi de conversion lors de la saisie de la facture',
          ],
          expected: '0',
          explanation:
            "Seule l'hypothèse de l'inversion colle au montant : 3 480,00 − 2 080,00 = 1 400,00 € exactement — et l'inversion de chiffres (3 4 80 → 2 0 80) est l'erreur de saisie la plus fréquente en comptabilité. Les autres hypothèses échouent au test du montant : une FNP énergie oubliée créerait un écart de 4 670,00 € ; un doublon d'honoraires créerait un écart de 12 000,00 € — et dans l'autre sens (408 trop élevé) ; un arrondi de conversion se compte en centimes, pas en milliers d'euros. La règle : l'écart chiffré oriente l'hypothèse, puis la confrontation ligne à ligne la confirme.",
        },
        {
          id: 'f2m5-ex3-q4',
          question:
            'Le contrôle B révèle 150 000,00 € de dotations comptabilisées en excédent des dossiers justificatifs. Que révèle le plus probablement cet écart ?',
          type: 'mcq',
          options: [
            'Les dossiers de provisions sont sous-évalués : il faut plutôt compléter les dossiers que corriger le journal',
            'Le doublon de saisie de la provision pour litige salarié : deux écritures identiques de 150 000,00 € passées le même 30/09 (n° 64 et 65 du journal de l\u2019exercice 1)',
            'Une reprise de provision de 150 000,00 € passée par erreur en dotation',
            'Un simple décalage de périodicité entre la décision et sa comptabilisation, sans impact sur le résultat',
          ],
          expected: '1',
          explanation:
            "614 200,00 − 464 200,00 = 150 000,00 € : l'excédent correspond exactement au montant de la provision pour litige salarié — dont le journal (exercice 1, écritures n° 64 et 65) montre deux saisies identiques le même 30/09, mêmes comptes 6815/151, même libellé. C'est le doublon. Traitement : extourner la seconde saisie (les charges de septembre étaient majorées de 150 000,00 €), évaluer l'impact sur le reporting déjà diffusé (marge, provisions) et le signaler au responsable du reporting, puis instaurer le contrôle anti-doublon au moment de la validation (tri par compte et par date). Les autres hypothèses ne collent ni au montant ni au sens de l'écart — et l'idée qu'un écart de 150 000,00 € serait « sans impact » sur le résultat est fausse par construction.",
        },
        {
          id: 'f2m5-ex3-q5',
          question:
            "Quels contrôles complémentaires menez-vous pour boucler ces trois écarts avant la validation de la clôture ? Rédigez une réponse structurée (contrôles, corrections, validations).",
          type: 'open',
          keywords: [
            'grille',
            'dossier',
            'balance',
            'extourne',
            'correction',
            'justificatif',
            'documenter',
          ],
          explanation:
            "Contrôles complémentaires attendus : (1) Contrôle A — lettrer le compte 408 ligne à ligne contre la grille des factures non parvenues (identifier la saisie à montant faux, ici 2 080,00 € au lieu de 3 480,00 €), vérifier l'apurement des FNP des mois précédents (la maintenance d'août, facture toujours non parvenue, doit rester au 408), puis corriger de 1 400,00 € et faire éditer la grille depuis la balance. (2) Contrôle B — reprendre chaque dossier de provision (litige Métalux, garanties, créances douteuses, litige salarié), confirmer que le journal ne contient qu'une saisie par dossier (extourne du doublon de 150 000,00 €), et faire viser l'incidence sur le reporting déjà diffusé. (3) Contrôle C — faire viser le tableau d'amortissement comme référentiel unique, extourner la dotation manuelle et repasser 64 500,00 € avec le tableau en pièce. (4) Transversal : documenter chaque écart (montant, origine, correction, visa) sur la feuille de revue, faire valider les corrections selon la matrice des délégations, et archiver le dossier. Un contrôle de cohérence sans correction ni documentation n'est qu'un constat : la clôture n'est validée que lorsque les trois écarts sont expliqués, corrigés et tracés.",
        },
      ],
      risks: [
        'Solde du 408 faux : dettes sous-évaluées, rapprochement fournisseur impossible',
        'Doublon de dotation publié : résultat et reporting mensuel faux',
        'Dotation d\u2019amortissement recalculée hors tableau : référentiel d\u2019amortissement rompu',
      ],
      solutionSummary:
        "Écart A : 20 150,00 − 18 750,00 = 1 400,00 € — le 408 est sous-évalué ; la FNP maintenance a été saisie pour 2 080,00 € au lieu de 3 480,00 € (inversion de chiffres) : correction de 1 400,00 € au 408 et lettrage grille / grand livre. Écart B : 614 200,00 − 464 200,00 = 150 000,00 € — les dotations excèdent les dossiers de l'exact montant de la provision pour litige salarié saisie deux fois (écritures n° 64 et 65 du journal de l'exercice 1) : extourne de la seconde saisie, recalage du résultat de septembre et incidence à signaler sur le reporting diffusé. Écart C : 64 466,667 − 64 500,00 = 33,33 € — dotation manuelle non conforme au tableau d'amortissement : extourne puis repasse de 64 500,00 € avec le tableau en pièce. Les contrôles de cohérence croisés fonctionnent parce qu'ils confrontent des sources indépendantes : la grille contre la balance, les dossiers contre le journal, le tableau contre la saisie — et l'écart chiffré oriente l'hypothèse (1 400,00 € = inversion de saisie ; 150 000,00 € = doublon ; 33,33 € = recalcul hors référentiel). En entretien, montrer que l'écart B confirme le doublon détecté à l'exercice 1 démontre la convergence des contrôles — la signature d'une revue maîtrisée.",
      interviewTips: [
        "Définir d'emblée le contrôle de cohérence comme une confrontation de deux sources indépendantes : c'est la définition exacte, et elle structure tout le raisonnement.",
        "Chiffrer chaque écart avant de l'interpréter : le montant oriente l'hypothèse — c'est le réflexe du praticien.",
        "Relier l'écart B au doublon du journal de l'exercice 1 : montrer que les contrôles convergent vers la même anomalie.",
      ],
    },

    {
      id: 'f2m5-ex4',
      title: 'Exercice 4 · Écriture exceptionnelle : légitime ou suspecte ?',
      cycle: 'Clôture',
      context:
        "Dernier cas (données fictives) : la veille de la clôture de septembre, une note de la direction financière demande une écriture d'ajustement de résultat de 450 000,00 €. Je dois analyser cette note, dire si l'écriture est acceptable en l'état, quels éléments exiger avant validation, et quel montage serait défendable si les éléments venaient. La note est reproduite ci-dessous, telle que soumise au service comptable.",
      documents: [
        {
          kind: 'text',
          name: 'Note de la direction financière — écriture d\u2019ajustement de résultat, 450 000,00 € (document fictif)',
          content:
            "NOTE DE LA DIRECTION FINANCIÈRE\n\nDe : D. Vasseur, directeur financier\nÀ : Service comptable — responsable de clôture\nDate : 29 septembre 2025 (veille de clôture)\nObjet : écriture d'ajustement de la marge atelier — 450 000,00 €\n\nLa marge atelier du 3e trimestre ressort à 450 000,00 € sous la prévision budgétaire, en raison de retards de facturation sur les chantiers en cours. Afin de présenter un résultat mensuel conforme à la trajectoire validée par la direction générale, il est demandé de passer au 30/09 l'écriture suivante :\n\nDébit 471 (compte d'attente) / Crédit 706 (prestations de services) — 450 000,00 €\nLibellé : « ajustement marge atelier T3 »\n\nLa régularisation interviendra naturellement lors de la facturation des chantiers au 4e trimestre. Le bien-fondé de la méthode a été évoqué de passage avec le commissaire aux comptes, qui n'a pas formulé d'objection. La valorisation détaillée des chantiers reste chez le contrôleur de gestion (fichier non diffusable). Merci de passer l'écriture avant la remontée du reporting de vendredi, 17h00.\n\n(Personnages, montants et circonstances fictifs)",
          note: 'Document fictif à but pédagogique — la situation décrite est un cas d\u2019école de pression sur la clôture.',
        },
      ],
      questions: [
        {
          id: 'f2m5-ex4-q1',
          question:
            "Rédigez votre analyse de cette note : l'écriture est-elle acceptable en l'état ? Quels éléments manquent, quelle est votre position et quelle démarche suivez-vous avant validation ? Intégrez le sens comptable de l'écriture demandée. Réponse structurée attendue.",
          type: 'open',
          keywords: [
            'justificatif',
            'justification',
            'autorisation',
            'origine',
            'cohérence',
            'explication',
            'revue',
            'délégation',
          ],
          explanation:
            "Analyse attendue : l'écriture n'est pas acceptable en l'état. Sens comptable d'abord : un produit au crédit du 706 adossé à un débit du 471 (compte d'attente) ne veut rien dire de défendable — un produit s'adosse à des éléments réels (BL signés, avancement mesurable), pas à une attente ; le 471 n'est pas un fourre-tout du résultat. Ensuite les manques : aucune justification documentée (ni décomposition chiffrée par chantier, ni éléments d'exécution — la « valorisation détaillée » est réputée non diffusable, ce qui est une opacité en soi) ; aucune autorisation conforme à la matrice des délégations (une note interne du directeur financier ne remplace pas le circuit demandeur / saisisseur / valideur, et une écriture de 450 000,00 € dépasse à l'évidence les seuils comptables courants) ; aucune explication de l'origine de l'écart (retards de facturation réels ? ou simple écart au budget, qui ne se comptabilise pas) ; aucune cohérence vérifiable avec le dossier de clôture. Signaux aggravants : le montant est calqué exactement sur l'écart au budget (l'écriture est construite sur la cible, pas sur des éléments réels — c'est du window dressing caractérisé) ; la prétendue absence d'objection orale du commissaire aux comptes n'est pas opposable ; l'urgence du reporting sert de pression ; et la promesse d'une « régularisation naturelle » au 4e trimestre revient à admettre que l'écriture ne repose sur rien. Démarche : suspendre la saisie, exiger les éléments (décomposition par chantier, autorisation écrite, revue par le responsable comptable), proposer le montage défendable si les éléments existent (produit à recevoir au 418 sur travaux réellement réalisés et mesurables), escalader la demande avec dossier écrit, et tracer ma position. Refuser en l'état n'est pas refuser en soi : c'est conditionner — la pièce, l'autorisation, la revue.",
        },
        {
          id: 'f2m5-ex4-q2',
          question: 'Que faites-vous en premier, en recevant cette note la veille de la clôture ?',
          type: 'mcq',
          options: [
            'Passer l\u2019écriture : la note est signée du directeur financier, l\u2019autorisation existe',
            'Refuser définitivement : toute écriture manuelle demandée par la direction est une manipulation',
            'Suspendre la saisie et demander les éléments justificatifs — décomposition chiffrée, origine de l\u2019écart, autorisation conforme à la matrice des délégations — puis faire viser par le responsable comptable',
            'Passer l\u2019écriture au 471 « en attendant » et la régulariser au 4e trimestre comme le prévoit la note',
          ],
          expected: '2',
          explanation:
            "La bonne réaction est la suspension documentée avec demande d'éléments. Passer l'écriture parce qu'elle est signée confond autorité et autorisation : une note interne ne vaut pas autorisation comptable (et le circuit délégations / séparation des tâches existe précisément pour ça). Refuser définitivement et par principe est excessif : si des travaux réellement réalisés et mesurables existent, un produit à recevoir est défendable — la question n'est pas qui demande, mais ce qui se justifie. Passer « en attendant » est la pire option : elle valide l'artifice tout en gardant une trace d'attente — le 471 n'est pas une zone de parking du résultat. Dans ce cas, je réponds par écrit, le jour même : éléments exigés, délai, et position suspendue jusqu'à production.",
        },
        {
          id: 'f2m5-ex4-q3',
          question: 'Quels éléments exiger avant toute validation de cette écriture ?',
          type: 'multi',
          options: [
            'La décomposition chiffrée de l\u2019écart de marge par chantier (valorisation détaillée des travaux en cours)',
            'Le rattachement à des éléments facturables : avancement, bons de travaux, éléments mesurables et datés',
            'L\u2019autorisation écrite conforme à la matrice des délégations (montant, seuils, signataires)',
            'La contre-signature du commissaire aux comptes sur l\u2019écriture avant saisie',
            'La revue et le visa du responsable comptable (séparation des tâches : demandeur, saisisseur et valideur distincts)',
            'Un libellé plus explicite que « ajustement marge atelier T3 »',
            'La cohérence avec le dossier de clôture : produit correspondant à des prestations réelles de la période',
            'L\u2019engagement écrit de la direction de contrepasser l\u2019écriture au 4e trimestre',
          ],
          expected: ['0', '1', '2', '4', '6'],
          explanation:
            "Cinq éléments s'exigent : la décomposition chiffrée par chantier (sinon le montant reste une assertion) ; le rattachement à des éléments facturables et mesurables (le produit ne peut reposer sur une opinion de gestion) ; l'autorisation écrite conforme à la matrice des délégations (450 000,00 € dépasse les seuils courants de validation comptable) ; la revue et le visa du responsable comptable — le demandeur ne peut pas être le valideur ; et la cohérence avec le dossier de clôture (prestations réelles de la période, contrôlables en audit). Les trois autres options sont des pièges : le commissaire aux comptes ne contresigne jamais les écritures du client (il en prend connaissance — et l'absence d'objection orale invoquée dans la note ne vaut rien) ; un libellé plus joli ne justifie rien ; et l'engagement de contrepassation au 4e trimestre est le symptôme du problème — une écriture justifiée n'a pas besoin d'être promise à l'extourne, seule une écriture artificielle se corrige « naturellement ».",
        },
        {
          id: 'f2m5-ex4-q4',
          question:
            'Si les éléments venaient à être documentés (travaux réellement réalisés et mesurables en septembre), quel montage comptable serait défendable ?',
          type: 'mcq',
          options: [
            'Débit 418 (clients, produits non encore facturés) / crédit 706, adossé aux travaux réalisés et mesurables de septembre, autorisé et revu selon les règles',
            'Débit 471 / crédit 706, comme demandé : le compte d\u2019attente est prévu pour les régularisations en attente',
            'Débit 119 (report à nouveau) / crédit 706 : puiser dans les réserves pour lisser le résultat du mois',
            'Aucun montage : un écart de marge au budget ne se compense jamais par une écriture comptable',
          ],
          expected: '0',
          explanation:
            "Le montage défendable est le produit à recevoir : débit 418 / crédit 706, pour la part des travaux réellement réalisée et mesurable au 30/09 — avec les éléments d'exécution en pièces, l'autorisation conforme et le visa du responsable comptable. C'est exactement la mécanique du produit à recevoir de l'exercice 1 (n° 12, 28, 42, 59) : le fait générateur (travaux réalisés) crée le produit, la facturation d'octobre soldera le 418. Le 471 en contrepartie d'un produit reste indéfendable (une attente n'est pas un fait générateur) ; puiser dans le report à nouveau pour lisser un résultat mensuel mélange affectation du résultat et compte de résultat — et c'est de la manipulation pure ; et « aucun montage » est trop absolu : ce n'est pas l'écart au budget qui se comptabilise, mais les travaux réels non facturés — à condition qu'ils soient prouvés. La nuance est le cœur de la réponse : le budget ne s'écrit pas, la réalité s'écrit.",
        },
      ],
      risks: [
        'Produit fictif de 450 000,00 € adossé à un compte d\u2019attente : résultat mensuel manipulé',
        'Pression hiérarchique et urgence artificielle substituées à la procédure de validation',
        'Validation orale du commissaire aux comptes invoquée à tort comme autorisation',
      ],
      solutionSummary:
        "L'écriture demandée (débit 471 / crédit 706 pour 450 000,00 €) n'est pas acceptable en l'état : un produit ne s'adosse pas à un compte d'attente ; le montant est calqué sur l'écart au budget plutôt que sur des éléments réels ; aucun justificatif chiffré n'est joint (la valorisation est « non diffusable ») ; l'autorisation repose sur une note interne et une prétendue absence d'objection orale du commissaire aux comptes — non opposable ; l'urgence du reporting fait pression ; et la promesse d'une régularisation « naturelle » au 4e trimestre avoue que l'écriture ne repose sur rien. La position professionnelle : suspension, demande écrite des éléments (décomposition par chantier, rattachement à des travaux mesurables, autorisation selon la matrice des délégations, revue du responsable comptable), escalade avec dossier. Si les éléments existaient, le montage défendable serait le produit à recevoir : débit 418 / crédit 706, adossé aux travaux réellement réalisés et mesurables au 30/09 — ni plus, ni moins. La règle à retenir : ce n'est pas l'écart au budget qui se comptabilise, c'est la réalité documentée ; et une écriture qui « arrange » le résultat se juge à ce qu'elle peut prouver, pas à qui la demande.",
      interviewTips: [
        "Commencer par le sens comptable : « un produit au 706 adossé à un 471, qu'est-ce que ça veut dire ? » — l'absurdité du montage condamne la note avant tout argument d'autorité.",
        "Citer les quatre exigences dans l'ordre — pièce chiffrée, autorisation écrite, revue d'un tiers, cohérence avec le dossier : c'est une grille réutilisable pour toute écriture sensible.",
        "Formuler le refus comme une condition : « je suspends jusqu'à production des éléments » — ferme sur le principe, ouvert sur la preuve ; c'est la posture attendue d'un futur professionnel.",
      ],
    },
  ],

  interviewQuestions: [
    {
      question: 'Pourquoi clôturer les comptes chaque mois alors que l\u2019exercice est annuel ?',
      expected:
        "Pour piloter : un résultat mensuel fiable détecte les dérives à temps, nourrit le reporting et prépare la clôture annuelle. Chaque clôture mensuelle applique les mêmes principes que l'annuelle (rattachement, prudence) à maille fine — écritures de régularisation, contrôles de cohérence — si bien que l'annuelle hérite d'un socle déjà assaini au lieu de concentrer les corrections.",
      hint: 'Donner la finalité de pilotage aussi bien que la mécanique comptable.',
    },
    {
      question: 'Quelle est la différence entre une clôture mensuelle et une clôture annuelle ?',
      expected:
        "Mêmes principes, exigences et conséquences différentes. La mensuelle arrête un résultat provisoire à maille fine : écritures de régularisation, contrôle de cohérence, reporting — sans inventaire physique ni documents de synthèse définitifs, et encore corrigeable. L'annuelle arrête l'exercice : inventaire, écritures de fin d'exercice, comptes annuels, affectation du résultat, contrôle légal. Une erreur mensuelle non corrigée se concentre dans l'annuelle, où elle devient lourde — d'où l'intérêt de la revue mensuelle des écritures.",
    },
    {
      question: 'Qu\u2019est-ce qu\u2019une charge à payer et quelle est l\u2019écriture type ?',
      expected:
        "Une charge consommée dans la période dont la facture n'est pas encore parvenue : débit du compte de charge (606, 615, 622…) / crédit du 408 « Fournisseurs, factures non parvenues », sur pièces internes (relevé, bon de travail, contrat). Exemple du scénario : énergie de septembre, 4 670,00 € au 30/09. Le 408 se solde à la réception de la facture — et se contrôle par confrontation à la grille de clôture.",
    },
    {
      question: 'Définissez le produit à recevoir et donnez l\u2019écriture.',
      expected:
        "Un produit réalisé dans la période (livraison, prestation achevée) non encore facturé : débit du 418 « Clients, produits non encore facturés » / crédit du compte de produit (701, 706), adossé aux bons de livraison ou éléments d'exécution signés. Exemple du scénario : livraisons de fin septembre non facturées, 52 800,00 €. La facture du mois suivant solde le 418.",
    },
    {
      question: 'Charge constatée d\u2019avance ou charge à payer : quelle différence ?',
      expected:
        "Deux régularisations inverses. La charge à payer est une charge consommée mais non comptabilisée (elle majore les charges de la période : débit charge / crédit 408) ; la charge constatée d'avance est une charge comptabilisée mais non consommée (elle minore les charges : débit 486 / crédit charge). L'une ajoute ce qui manque, l'autre retire ce qui est en trop — et la CCA s'extourne au fil de la consommation, mois par mois.",
    },
    {
      question: 'Qu\u2019est-ce qu\u2019un produit constaté d\u2019avance et pourquoi le comptabilise-t-on ?',
      expected:
        "Un produit comptabilisé (facturé ou encaissé) qui s'exécutera sur les périodes suivantes : débit du compte de produit / crédit du 487, pour ne pas majorer le résultat de la période de facturation. Exemple du scénario : abonnement annuel facturé d'avance, 18 000,00 € en septembre pour octobre 2025 à septembre 2026. C'est le garde-fou contre le window dressing par facturation anticipée.",
    },
    {
      question: 'Comment contrôlez-vous le cut-off d\u2019une clôture mensuelle ?',
      expected:
        "En sélectionnant les opérations de bord de période : BL et prestations des cinq derniers jours du mois, factures et paiements des trois à cinq premiers jours du mois suivant, paiements d'avance et facturations d'avance. Puis en confrontant le fait générateur à la date comptable, et en passant les régularisations : charges à payer, produits à recevoir, CCA, PCA. Le test inversé — les premières écritures du mois suivant racontent la clôture du mois précédent — complète le contrôle. Le scénario en montre huit cas, dont six à régulariser.",
    },
    {
      question: 'Comment réagissez-vous face à une écriture manuelle inhabituelle en clôture ?',
      expected:
        "Je la suspends et je la challenge sur quatre points : origine (qui, pourquoi), justificatif chiffré, autorisation conforme à la matrice des délégations, cohérence comptable et avec le dossier. Une écriture atypique n'est pas forcément frauduleuse, mais elle ne se valide jamais sur son libellé : contrepassation non motivée, ajustement de marge manuel et écart d'arrondi récurrent du scénario illustrent les trois familles à surveiller — et si l'investigation s'enlise, j'escalade avec un dossier écrit.",
    },
    {
      question: 'Qu\u2019est-ce qu\u2019un contrôle de cohérence ? Donnez deux exemples.',
      expected:
        "La confrontation de deux sources indépendantes qui doivent concorder. Exemples du scénario : total des factures non parvenues de la grille de clôture contre solde du 408 (écart de 1 400,00 € — inversion de saisie) ; dotations comptabilisées contre dossiers justificatifs (écart de 150 000,00 € — doublon de provision) ; dotation théorique contre dotation saisie (écart de 33,33 € — recalcul manuel). Tout écart nommé et chiffré devient une piste d'anomalie : c'est le détecteur le plus puissant de la revue.",
    },
    {
      question: 'PCG ou IFRS : les écritures de régularisation changent-elles ?',
      expected:
        "La logique est identique — rattachement à la période, séparation charges/produits, estimation des obligations — mais les intitulés changent : 408, 418, 486, 487, 6811 sont des comptes du PCG ; en IFRS aucun plan n'est imposé et la présentation diffère (les régularisations passent par des « other payables » ou du « deferred income » par exemple). En entretien, nommer le référentiel évite de présenter les comptes français comme universels.",
    },
  ],

  followUps: [
    {
      question:
        "La direction insiste : l'ajustement de 450 000,00 € doit passer avant la remontée du reporting de vendredi 17h00. Que répondez-vous ?",
      expected:
        "Je tiens la position documentée : sans décomposition chiffrée, sans autorisation conforme et sans éléments réels d'exécution, l'écriture ne passe pas. Je propose une alternative honnête — résultat publié avec l'écart de 450 000,00 € expliqué en commentaires de reporting, ou produit à recevoir documenté si les éléments existent — et j'escalade au responsable comptable avec la note et ma réponse écrites. Céder à l'urgence créerait une écriture sans piste d'audit ; la trace écrite de ma position protège l'entreprise autant que moi.",
    },
    {
      question:
        "Le doublon de provision de 150 000,00 € a déjà été diffusé dans le reporting de septembre. Que faites-vous ?",
      expected:
        "J'extourne la seconde saisie dès la réouverture de la clôture (ou au mois suivant selon la politique), je recale le résultat de septembre — les charges y étaient majorées de 150 000,00 € — et je signale l'incidence au responsable du reporting (marge, niveau de provisions) pour note de correction. Puis j'installe le contrôle préventif : tri par compte et par date au moment de la validation, pour qu'un doublon ne passe plus jamais la clôture.",
    },
    {
      question:
        "Le comptable vous assure que l'écart d'arrondi de 12,57 € revient chaque mois « depuis toujours ». Quelle est votre réaction ?",
      expected:
        "La répétition est le signal, pas la rassurance : trois occurrences consécutives d'écritures manuelles sans pièce (12,57 €, 11,30 €, 9,80 €) appellent une cause identifiée — arrondi de rapprochement bancaire, de conversion, de paramétrage — et une correction du processus, pas une tolérance. Je demande l'origine de chaque montant, je documente la règle de traitement, et je fais supprimer la saisie manuelle au profit d'un traitement automatique : les écritures « historiques » sont exactement celles que l'audit relève en premier.",
    },
    {
      question:
        "Vous trouvez une charge de juin de 7 900,00 € comptabilisée le 12/07, juin étant clôturé et diffusé. Que faites-vous ?",
      expected:
        "Je chiffre l'impact : le résultat de juin est majoré de 7 900,00 € (charge manquante) et celui de juillet minoré d'autant. Selon la politique : réouverture de juin si elle est possible, sinon correction au mois courant avec note d'incidence sur les deux mois, information du responsable du reporting, et contrôle renforcé du cut-off suivant — recherche systématique des factures et prestations des premiers jours du mois suivant, qui racontent la clôture du mois précédent.",
    },
    {
      question:
        "Il reste onze écritures à revoir et le responsable veut tout valider avant 18h00. Quelle est votre position ?",
      expected:
        "Je hiérarchise par risque : d'abord les écritures qui touchent directement le résultat et les montants significatifs — le doublon de 150 000,00 €, l'ajustement de marge, la provision de 75 000,00 € sur un compte inexistant — puis le reste. Et je refuse la validation globale : je valide ce que j'ai revu et je liste explicitement ce qui reste ouvert, avec un délai. Une validation à l'aveugle déplace le risque, elle ne l'élimine pas — et le responsable attend précisément ce garde-fou.",
    },
    {
      question:
        "Le solde du 408 ne concorde pas avec la grille des factures non parvenues. Quelle est votre démarche ?",
      expected:
        "Confronter ligne à ligne : grille contre grand livre du 408, pour repérer la FNP omise, la saisie à un montant faux (l'écart de 1 400,00 € du scénario venait d'une inversion : 2 080,00 € saisis au lieu de 3 480,00 €) ou la FNP soldée à tort. Puis corriger, documenter l'écart et son origine, et faire évoluer la grille de clôture pour qu'elle soit éditée depuis la balance — une seule source de vérité évite que les deux documents divergent à nouveau.",
    },
  ],

  evaluation: {
    criteria: [
      {
        label: 'Maîtrise des écritures de régularisation',
        description:
          "Connaît et sait contrôler charges à payer, produits à recevoir, charges et produits constatés d'avance, dotations, provisions et reprises — mécanique, montant, apurement et extourne.",
      },
      {
        label: 'Contrôle du cut-off',
        description:
          "Confronte fait générateur et date comptable sur les opérations de bord de période ; qualifie chaque cas (FNP, PNR, CCA, PCA) et chiffre les reclassements nécessaires.",
      },
      {
        label: 'Détection des anomalies',
        description:
          "Repère doublons, TVA omise, erreurs d'imputation, dates hors période, montants aberrants et comptes inexistants — par tri méthodique et contrôles de cohérence croisés.",
      },
      {
        label: 'Traitement des écritures inhabituelles',
        description:
          "Challenge origine, justificatif, autorisation et cohérence ; refuse la validation sur libellé ; suspend, documente et escalade avec dossier.",
      },
      {
        label: 'Contrôles de cohérence',
        description:
          "Confronte des sources indépendantes (grille contre solde, dossiers contre dotations, théorie contre comptabilisé), chiffre les écarts et les interprète correctement.",
      },
      {
        label: 'Rigueur documentaire et escalade',
        description:
          "Trie, chiffre, documente et fait valider chaque anomalie selon la matrice des délégations ; trace la revue pour la piste d'audit et sait refuser une validation à l'aveugle.",
      },
    ],
  },
}
