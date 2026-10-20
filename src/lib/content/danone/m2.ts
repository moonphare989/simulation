// =====================================================================
// Fiche 3 — Centrale Danone · Mission 2
// Contrôle du processus Procure-to-Pay et piste d’audit fiable
// (≈ 90 factures fournisseurs et clients / mois)
// =====================================================================
import type { Mission } from '@/lib/types'
import { DANONE_REFERENCE, FICHE3_DISCLAIMER, danoneBase } from './_commun'

export const danoneM2: Mission = {
  ...danoneBase(2),
  id: 'danone-m2',
  title: 'Contrôle du processus Procure-to-Pay et piste d’audit fiable',
  summary:
    'Contrôler environ 90 factures par mois sur les cycles Procure-to-Pay (achats) et Order-to-Cash (ventes) : ordonner le circuit, rapprocher commande / réception / facture (3-way match), détecter les incohérences et documenter la piste d’audit. Scénario fictif à visée pédagogique.',
  referenceData: [
    FICHE3_DISCLAIMER,
    ...DANONE_REFERENCE,
    'Mission 2 : environ 90 factures fournisseurs et clients par mois contrôlées sur la piste d’audit fiable, avec rapprochement commande / réception / facture et suivi des incohérences détectées.',
  ],
  comprehension: {
    intro:
      'Une facture ne se juge jamais seule : elle n’est qu’un maillon d’une chaîne qui commence bien avant elle (la demande d’achat, la commande) et finit bien après (le paiement, l’archivage). Le cycle Procure-to-Pay (P2P, « de l’achat au paiement ») décrit ce parcours côté fournisseurs : demande d’achat, validation, commande, réception, facture, rapprochement, validation, comptabilisation, paiement, archivage. Son miroir côté clients est le cycle Order-to-Cash (O2C, « de la commande à l’encaissement ») : commande client, validation, livraison, facturation, enregistrement de la créance, suivi, encaissement, lettrage. Dans ce scénario fictif, le contrôle porte sur environ 90 factures par mois, fournisseurs et clients confondus. Le fil rouge est la piste d’audit fiable : la capacité à relier chaque écriture comptable à son opération et à ses pièces, dans un ordre chronologique, avec des données cohérentes et protégées contre les modifications non tracées. On distingue trois plans, souvent confondus à tort : la traçabilité des opérations (la chaîne documentaire), la documentation comptable (pièces, journaux, écritures datées et validées) et les exigences fiscales de conservation (documents comptables conservés 10 ans selon le code de commerce ; documents fiscaux 6 ans selon le livre des procédures fiscales — durées de principe à confronter au cas concret).',
    definitions: [
      { term: 'Cycle Procure-to-Pay (P2P)', definition: 'Ensemble du parcours d’une dépense : expression du besoin, validation, commande, réception, facture fournisseur, rapprochement, validation finale, comptabilisation, paiement et archivage. Chaque étape produit une trace.' },
      { term: 'Cycle Order-to-Cash (O2C)', definition: 'Parcours symétrique côté ventes : commande client, validation (crédit, stock), livraison avec bon de livraison, facturation, enregistrement de la créance, suivi/recouvrement, encaissement, lettrage et archivage.' },
      { term: 'Demande d’achat', definition: 'Document interne par lequel un service exprime un besoin (produit, quantité, délai). Point de départ du contrôle : sans besoin identifié et validé, aucune dépense légitime.' },
      { term: 'Bon de commande', definition: 'Document contractuel adressé au fournisseur après validation de la demande : référence, quantités, prix convenus, conditions. Il fixe la référence attendue contre laquelle la facture sera rapprochée.' },
      { term: 'Bon de réception / bon de livraison', definition: 'Preuve que les biens ont été livrés (BL, émis par le vendeur) ou reçus (BR, signé par le magasinier/réceptionnaire). Atteste le fait générateur de la dette : on doit ce que l’on a reçu.' },
      { term: 'Rapprochement à trois voies (3-way match)', definition: 'Comparaison systématique commande ↔ réception ↔ facture sur les quantités, prix, références et entité concernée. Une facture conforme à ce qui a été commandé ET reçu est présumée due ; tout écart exige une explication avant paiement.' },
      { term: 'Bon à payer', definition: 'Validation finale (visa du responsable habilité) qui déclenche le paiement. Elle doit intervenir après le rapprochement et selon le principe de séparation des tâches : celui qui commande, celui qui reçoit et celui qui paie ne sont pas la même personne.' },
      { term: 'Comptabilisation', definition: 'Traduction de la facture validée en écriture comptable (journal des achats ou des ventes), avec imputation générale et auxiliaire et isolation de la TVA. Elle intervient au moment de la réception de la facture ou à sa validation selon l’organisation.' },
      { term: 'Piste d’audit fiable', definition: 'Notion à manier avec précision : capacité à reconstituer, dans un ordre chronologique et sans rupture, l’historique des opérations, de la pièce d’origine à l’écriture comptable et inversement. Les textes relatifs aux logiciels de facturation (CGI, art. 289) mobilisent l’expression pour la capacité du système à retracer les opérations de facturation ; en pratique comptable, on la décline en : chronologie des enregistrements, cohérence des données entre documents, intégrité (pas de modification non tracée) et traçabilité documentaire.' },
      { term: 'Chronologie', definition: 'Ordre temporel ininterrompu des opérations et de leur enregistrement : chaque étape du cycle est datée, et les dates se suivent de façon logique (commande avant réception, réception avant ou à la facture, paiement après validation).' },
      { term: 'Cohérence', definition: 'Concordance des données entre les documents d’un même flux : mêmes références, mêmes quantités, mêmes prix, même entité, mêmes montants après application du taux de TVA applicable (20 % sur la plupart des achats, 5,5 % sur les produits alimentaires vendus).' },
      { term: 'Intégrité des données', definition: 'Garantie que les informations ne sont pas modifiées sans trace : écritures validées non modifiables en place, corrections par écritures inverses documentées, journal chronologique conservé.' },
      { term: 'Traçabilité documentaire', definition: 'Capacité à retrouver, pour chaque opération, l’ensemble de ses pièces (demande, commande, réception, facture, preuve de paiement) grâce à des références croisées et un archivage organisé.' },
      { term: 'Exigences fiscales de conservation', definition: 'Obligations de conservation des pièces : les documents comptables relèvent en principe d’une conservation de 10 ans (code de commerce) et les documents fiscaux de 6 ans (livre des procédures fiscales) ; ces durées de principe doivent être confrontées aux textes applicables au cas concret.' },
    ],
    keyPoints: [
      'Le P2P et l’O2C sont des chaînes : chaque maillon (demande, commande, réception, facture, paiement/encaissement) produit une trace datée.',
      'Le 3-way match (commande / réception / facture) est le cœur du contrôle : quantités, prix, références, entité.',
      'Une facture sans commande ni réception n’est pas payable telle quelle : elle exige une justification rétroactive ou une validation documentée.',
      'La séparation des tâches protège le cycle : celui qui commande ne reçoit pas et ne paie pas seul.',
      'La piste d’audit fiable se décline en trois plans distincts : traçabilité des opérations, documentation comptable, exigences fiscales de conservation.',
      'La chronologie doit être logique : une facture antérieure à sa commande est une alerte, pas une coïncidence.',
      'L’intégrité des données suppose des corrections tracées (contre-passation), jamais des modifications en place.',
      'Le TTC se vérifie : HT × (1 + taux applicable) — 20 % ou 5,5 % selon la nature des opérations.',
      'Chaque incohérence détectée est documentée, affectée à un responsable et suivie jusqu’à résolution.',
      'L’archivage référencé referme la boucle : sans pièce retrouvable, le contrôle n’a servi à rien.',
    ],
  },
  objectives: {
    why:
      'Sur environ 90 factures par mois, un contrôle désordonné ne voit rien : il faut un processus balisé. Le contrôle P2P/O2C atteste que chaque facture correspond à une opération réelle, autorisée, correctement quantifiée et rattachée à la bonne période — et la piste d’audit fiable rend ce contrôle démontrable a posteriori, face à un auditeur ou à l’administration.',
    infoSought: [
      'L’existence, pour chaque facture, d’une commande et d’une preuve de réception/livraison.',
      'La concordance des quantités, prix unitaires, références et montants entre les trois documents.',
      'La cohérence arithmétique des factures : HT, TVA au taux applicable, TTC.',
      'La conformité de l’entité/bénéficiaire : qui a commandé, qui a reçu, qui paie.',
      'La chronologie des étapes et des dates (commande → réception → facture → paiement).',
      'La complétude de la documentation : rapprochements tracés, validations signées, écarts justifiés.',
      'Le suivi des incohérences : combien, lesquelles, qui les traite, quand.',
    ],
    risksCovered: [
      'Paiement de factures sans commande ni réception (dépenses non autorisées, voire fictives).',
      'Surfacturation non détectée : quantités ou prix facturés supérieurs au convenu.',
      'Erreur de référence ou de produit livré (qualité, litige, retour).',
      'Facturation de la mauvaise entité (erreur de rattachement de la charge, erreur de TVA).',
      'Doublons de facturation et double paiement.',
      'Rupture de chronologie signalant des opérations reconstituées ou antidatées.',
      'Rapprochements non documentés : contrôle inexplicable, donc contestable.',
      'Écarts de TVA (mauvais taux, mauvais calcul) passant inaperçus.',
      'Archivage incomplet rendant la piste d’audit incomplète au moment d’un contrôle.',
    ],
  },
  preparation: {
    documents: [
      'La cartographie des processus P2P et O2C de l’entité (qui fait quoi, à quelle étape).',
      'Les procédures d’achat : seuils de validation, matrice d’habilitations, séparation des tâches.',
      'Les journaux des achats et des ventes du mois, et la balance auxiliaire fournisseurs/clients.',
      'Les fichiers de rapprochement du mois (commande / réception / facture) et leurs statuts.',
      'Un échantillon de dossiers documentaires complets : demande d’achat, bon de commande, bon de réception, facture, bon à payer.',
      'Les bons de livraison clients et les commandes clients correspondantes.',
      'Le tableau de suivi des incohérences et écarts du mois (statut, responsable, délai).',
      'La politique d’archivage et la nomenclature des pièces (durées de conservation).',
      'Le référentiel de TVA applicable (taux par famille de biens et services).',
      'Les comptes rendus des contrôles précédents (récurrences à surveiller).',
    ],
    questionsToAsk: [
      'Quel est l’échantillon à contrôler ce mois-ci : les 90 factures en totalité ou un échantillon raisonné ?',
      'Qui est habilité à valider une commande, une réception, un bon à payer ?',
      'Que fait-on d’une facture reçue sans commande : rejet, régularisation, validation a posteriori ?',
      'Le rapprochement est-il systématique avant paiement, ou par exception ?',
      'Où sont archivées les commandes et réceptions, et comment sont-elles reliées aux factures ?',
      'Quel est le seuil de matérialité au-delà duquel un écart exige une escalade ?',
      'Les écarts détectés sont-ils suivis dans un tableau partagé avec la direction ?',
    ],
    precautions: [
      'Ne jamais conclure sur une facture isolée : reconstituer le dossier complet (commande + réception + facture).',
      'Vérifier la chronologie avant les montants : une date incohérente invalide le dossier entier.',
      'Recalculer la TVA soi-même plutôt que de faire confiance au TTC imprimé.',
      'Documenter chaque rapprochement (références croisées, statut, visa) : un contrôle non tracé n’existe pas.',
      'Signaler les récurrences : trois fois le même écart chez un fournisseur, ce n’est plus une erreur, c’est une pratique.',
    ],
  },
  method: [
    { title: 'Cartographier le cycle attendu', description: 'Formaliser les étapes normales du P2P et de l’O2C avec leurs documents et leurs acteurs : demande, validation, commande, réception/livraison, facture, rapprochement, validation, comptabilisation, paiement/encaissement, archivage.', why: 'Sans référentiel de ce qui est « normal », aucune anomalie n’est détectable.' },
    { title: 'Constituer l’échantillon du mois', description: 'Extraire les environ 90 factures fournisseurs et clients du mois avec leurs références : n°, date, tiers, cycle (P2P/O2C), montants HT et TTC, liens commande et réception, statut de rapprochement.', why: 'Un échantillon structuré transforme un contrôle artisanal en contrôle répétable et mesurable.' },
    { title: 'Vérifier l’existence des maillons amont', description: 'Pour chaque facture, contrôler la présence du bon de commande et du bon de réception (P2P) ou de la commande client et du bon de livraison (O2C).', why: 'Une facture sans amont documentaire est le premier signal de dépense non autorisée ou de vente fictive.' },
    { title: 'Contrôler la chronologie', description: 'Comparer les dates : commande antérieure à réception, réception antérieure ou concomitante à la facture, paiement postérieur à la validation.', why: 'Une chronologie impossible (facture avant commande) signale une reconstitution ou une fraude potentielle.' },
    { title: 'Réaliser le 3-way match', description: 'Rapprocher ligne à ligne : quantités facturées = quantités commandées = quantités reçues ; prix facturés = prix convenus ; références identiques ; entité bénéficiaire cohérente.', why: 'C’est le contrôle pivot : il atteste que l’on paie (ou facture) exactement ce qui a été convenu et reçu.' },
    { title: 'Recalculer les montants', description: 'Vérifier HT × (1 + taux) = TTC au taux applicable (20 % sur la plupart des achats, 5,5 % sur les produits alimentaires vendus) et la cohérence des totaux.', why: 'Les écarts arithmétiques échappent au rapprochement documentaire : le TTC imprimé n’est pas une preuve.' },
    { title: 'Qualifier chaque écart', description: 'Classer les anomalies : absence de pièce, écart de quantité, écart de prix, mauvaise référence, mauvaise entité, écart TVA, doublon — avec le montant concerné.', why: 'Un écart qualifié est un écart traitable et comparable d’un mois sur l’autre.' },
    { title: 'Rechercher l’explication avant la conclusion', description: 'Pour chaque anomalie, demander la pièce manquante ou l’explication (retour partiel, avenant, erreur de saisie fournisseur) et l’obtenir par écrit.', why: 'Beaucoup d’écarts apparents ont une cause légitime : conclure trop vite décrédibilise le contrôle.' },
    { title: 'Évaluer la matérialité et la récurrence', description: 'Hiérarchiser : montant en jeu, criticité (TVA, entité, fraude possible), fréquence d’apparition chez un même tiers ou dans un même cycle.', why: 'Un écart de 1 € et un écart d’entité de 2 000 € ne se traitent pas dans le même ordre.' },
    { title: 'Documenter le rapprochement', description: 'Tracer chaque contrôle : références croisées, statut (OK / écart / absent), date, contrôleur, pièces vers l’archivage.', why: 'La documentation du contrôle est elle-même un maillon de la piste d’audit : sans elle, le travail est invisible et indéfendable.' },
    { title: 'Suivre la résolution', description: 'Affecter chaque incohérence à un responsable avec un délai, suivre les statuts jusqu’à résolution et arbitrer les blocages.', why: 'Un écart détecté mais jamais soldé revient au moment le plus défavorable (clôture, audit).' },
    { title: 'Contrôler l’archivage et la traçabilité', description: 'Vérifier que chaque dossier complet est archivé et retrouvable (référence facture ↔ commande ↔ réception ↔ écriture) et que la conservation prévue est respectée.', why: 'La piste d’audit fiable se joue sur la durée : un archivage incomplet rompt la chaîne bien après la fin du mois.' },
    { title: 'Boucler par un bilan de contrôle', description: 'Produire une synthèse du mois : nombre de factures contrôlées, incohérences par nature, écarts résolus, points d’attention, indicateurs.', why: 'Le bilan transforme le contrôle en pilotage : il nourrit le tableau de bord et la remontée des failles de procédure.' },
  ],
  exercises: [
    {
      id: 'danone-m2-ex1',
      title: 'Ordonner le cycle P2P — et son miroir O2C',
      cycle: 'P2P / O2C',
      context:
        'Avant de contrôler, il faut savoir ce qui est « normal ». Ordonnez le circuit attendu d’une dépense, puis celui d’une vente. Toute la suite de la mission repose sur cette chronologie de référence.',
      risks: ['Contrôle sans référentiel', 'Chronologie erronée considérée comme normale'],
      documents: [],
      questions: [
        {
          id: 'danone-m2-ex1-q1',
          question: 'Quelle est la chronologie correcte du cycle Procure-to-Pay ?',
          type: 'mcq',
          options: [
            'Demande d’achat → validation (budget/habilitation) → bon de commande → réception (bon de réception) → réception de la facture → rapprochement commande/réception/facture → bon à payer → comptabilisation → paiement → archivage',
            'Bon de commande → facture → réception → paiement → rapprochement → archivage',
            'Facture → comptabilisation → demande d’achat → validation → paiement → archivage',
            'Demande d’achat → facture → bon à payer → réception → rapprochement → comptabilisation → archivage',
          ],
          expected: '0',
          explanation:
            'Le circuit sain part du besoin (demande validée), passe par l’engagement (commande) et le fait générateur de la dette (réception), puis la facture est rapprochée avant tout paiement. Nuance d’organisation : selon les entités, la comptabilisation peut intervenir dès la réception de la facture (avant le bon à payer), la provision de la dette étant alors enregistrée avant le décaissement — l’essentiel est que le paiement ne précède jamais le rapprochement et la validation. Les autres options paient avant de rapprocher ou reçoivent après avoir payé : elles inversent le sens du contrôle.',
        },
        {
          id: 'danone-m2-ex1-q2',
          question: 'Quelle est la chronologie correcte du cycle Order-to-Cash ?',
          type: 'mcq',
          options: [
            'Commande client → validation (crédit, disponibilité) → livraison (bon de livraison signé) → facturation → enregistrement de la créance → suivi/relance → encaissement → lettrage du compte client',
            'Facturation → livraison → commande client → encaissement → lettrage',
            'Livraison → commande client → facturation → lettrage → encaissement',
            'Commande client → encaissement → facturation → livraison → lettrage',
          ],
          expected: '0',
          explanation:
            'Côté ventes, la créance naît de la livraison (fait générateur) et se matérialise par la facture ; l’encaissement vient ensuite, puis le lettrage éteint la créance contre le règlement. Facturer avant de livrer ou encaisser avant de facturer sont des signaux d’anomalie (sauf acompte documenté).',
        },
        {
          id: 'danone-m2-ex1-q3',
          question: 'Pour chaque étape du P2P (demande, validation, commande, réception, rapprochement, bon à payer, comptabilisation, paiement, archivage), quel est son objectif de contrôle ?',
          type: 'open',
          keywords: ['besoin', 'autorisation', 'engagement', 'réception', 'rapprochement', 'séparation des tâches', 'piste d’audit'],
          explanation:
            'Demande : exprimer un besoin réel (légitimité). Validation : autoriser la dépense dans le budget (habilitation). Commande : figer l’engagement contractuel (prix, quantités). Réception : attester le fait générateur (on ne doit que ce qui est reçu). Rapprochement : concilier les trois documents (exactitude). Bon à payer : engager le paiement par une personne habilitée distincte (séparation des tâches). Comptabilisation : traduire l’opération dans les comptes à la bonne période (image fidèle). Paiement : éteindre la dette via un moyen tracé. Archivage : conserver la chaîne documentaire complète (piste d’audit, exigences de conservation). Chaque réponse attendue relie l’étape au risque qu’elle neutralise.',
        },
      ],
      solutionSummary:
        'P2P : demande → validation → commande → réception → facture → rapprochement 3 voies → bon à payer → comptabilisation → paiement → archivage. O2C : commande → validation → livraison → facture → créance → suivi → encaissement → lettrage. L’enjeu n’est pas la récitation : c’est de savoir quel risque chaque étape neutralise (dépense non autorisée, dette injustifiée, paiement indû, créance fictive) et où s’inscrit la traçabilité. En entretien, annoncer les deux cycles en miroir montre une vision process, pas seulement une vision facture.',
      interviewTips: [
        'Présentez P2P et O2C « en miroir » : le recruteur apprécie la vision d’ensemble.',
        'Pour chaque étape, citez le risque neutralisé : c’est ce qui distingue une récitation d’une compréhension.',
      ],
    },
    {
      id: 'danone-m2-ex2',
      title: 'Atelier 90 factures — détection d’incohérences',
      cycle: 'P2P / O2C',
      context:
        'Le mois de contrôle fictif comprend 90 factures, fournisseurs (cycle P2P) et clients (cycle O2C) confondues. La TVA appliquée est de 20 % sur les factures d’achat (P2P) et de 5,5 % sur les ventes de produits alimentaires (O2C). Une ligne est réputée incohérente si : son rapprochement est « Écart » ou « Absent », OU si son TTC ne correspond pas à HT × (1 + taux). À vous de compter, repérer et hiérarchiser.',
      risks: ['Factures sans commande', 'Surfacturation', 'Écart de TVA non détecté'],
      documents: [
        {
          kind: 'table',
          name: 'Journal mensuel des 90 factures contrôlées (fictif)',
          columns: ['N° facture', 'Date', 'Tiers (fournisseur / client)', 'Cycle', 'HT (€)', 'TTC (€)', 'Commande', 'Récep. / Livr.', 'Rapprochement'],
          rows: [
            ['FA-001', '09/06/2024', 'Froid & Maintenance Pro', 'P2P', 277, 332.4, 'Oui', 'Oui', 'OK'],
            ['FA-002', '16/06/2024', 'Transports Ravel', 'P2P', 374.5, 449.4, 'Oui', 'Oui', 'OK'],
            ['FA-003', '23/06/2024', 'Imprimerie du Val', 'P2P', 471, 565.2, 'Oui', 'Oui', 'OK'],
            ['FA-004', '03/06/2024', 'Hypermarché Verdier', 'O2C', 2320, 2447.6, 'Oui', 'Oui', 'OK'],
            ['FA-005', '10/06/2024', 'Boulangerie Rousseau', 'O2C', 2840, 2996.2, 'Oui', 'Oui', 'OK'],
            ['FA-006', '17/06/2024', 'Locabox Plastiques', 'P2P', 762.5, 915, 'Oui', 'Oui', 'OK'],
            ['FA-007', '24/06/2024', 'Sécuritest Contrôles', 'P2P', 859, 1030.8, 'Oui', 'Oui', 'OK'],
            ['FA-008', '04/06/2024', 'TechniFroid Services', 'P2P', 956.5, 1147.8, 'Oui', 'Oui', 'OK'],
            ['FA-009', '11/06/2024', 'Grand Frais du Nord', 'O2C', 4920, 5190.6, 'Oui', 'Oui', 'Écart'],
            ['FA-010', '18/06/2024', 'Supérette Lemoine', 'O2C', 5440, 5739.2, 'Oui', 'Oui', 'OK'],
            ['FA-011', '25/06/2024', 'Froid & Maintenance Pro', 'P2P', 1247, 1496.4, 'Oui', 'Oui', 'OK'],
            ['FA-012', '05/06/2024', 'Transports Ravel', 'P2P', 1344.5, 1613.4, 'Non', 'Non', 'Absent'],
            ['FA-013', '12/06/2024', 'Imprimerie du Val', 'P2P', 1441, 1729.2, 'Oui', 'Oui', 'OK'],
            ['FA-014', '19/06/2024', 'Hypermarché Verdier', 'O2C', 7520, 7933.6, 'Oui', 'Oui', 'OK'],
            ['FA-015', '26/06/2024', 'Boulangerie Rousseau', 'O2C', 8040, 8482.2, 'Oui', 'Oui', 'OK'],
            ['FA-016', '06/06/2024', 'Locabox Plastiques', 'P2P', 1732.5, 2079, 'Oui', 'Oui', 'OK'],
            ['FA-017', '13/06/2024', 'Sécuritest Contrôles', 'P2P', 1829, 2194.8, 'Oui', 'Oui', 'OK'],
            ['FA-018', '20/06/2024', 'TechniFroid Services', 'P2P', 1926.5, 2311.8, 'Oui', 'Oui', 'OK'],
            ['FA-019', '27/06/2024', 'Grand Frais du Nord', 'O2C', 520, 548.6, 'Oui', 'Oui', 'OK'],
            ['FA-020', '07/06/2024', 'Supérette Lemoine', 'O2C', 1040, 1097.2, 'Oui', 'Oui', 'OK'],
            ['FA-021', '14/06/2024', 'Froid & Maintenance Pro', 'P2P', 2217, 2660.4, 'Oui', 'Oui', 'OK'],
            ['FA-022', '21/06/2024', 'Transports Ravel', 'P2P', 2314.5, 2777.4, 'Oui', 'Oui', 'OK'],
            ['FA-023', '28/06/2024', 'Imprimerie du Val', 'P2P', 840, 1080, 'Oui', 'Oui', 'OK'],
            ['FA-024', '08/07/2024', 'Hypermarché Verdier', 'O2C', 3120, 3291.6, 'Oui', 'Oui', 'OK'],
            ['FA-025', '15/07/2024', 'Boulangerie Rousseau', 'O2C', 3640, 3840.2, 'Oui', 'Oui', 'OK'],
            ['FA-026', '22/07/2024', 'Locabox Plastiques', 'P2P', 2702.5, 3243, 'Oui', 'Oui', 'OK'],
            ['FA-027', '02/07/2024', 'Sécuritest Contrôles', 'P2P', 2799, 3358.8, 'Oui', 'Oui', 'OK'],
            ['FA-028', '09/07/2024', 'TechniFroid Services', 'P2P', 2896.5, 3475.8, 'Oui', 'Oui', 'OK'],
            ['FA-029', '16/07/2024', 'Grand Frais du Nord', 'O2C', 5720, 6034.6, 'Oui', 'Oui', 'OK'],
            ['FA-030', '23/07/2024', 'Supérette Lemoine', 'O2C', 6240, 6583.2, 'Oui', 'Oui', 'OK'],
            ['FA-031', '03/07/2024', 'Froid & Maintenance Pro', 'P2P', 3187, 3824.4, 'Non', 'Non', 'Absent'],
            ['FA-032', '10/07/2024', 'Transports Ravel', 'P2P', 3284.5, 3941.4, 'Oui', 'Oui', 'OK'],
            ['FA-033', '17/07/2024', 'Imprimerie du Val', 'P2P', 3381, 4057.2, 'Oui', 'Oui', 'OK'],
            ['FA-034', '24/07/2024', 'Hypermarché Verdier', 'O2C', 8320, 8777.6, 'Oui', 'Oui', 'OK'],
            ['FA-035', '04/07/2024', 'Boulangerie Rousseau', 'O2C', 8840, 9326.2, 'Oui', 'Oui', 'OK'],
            ['FA-036', '11/07/2024', 'Locabox Plastiques', 'P2P', 3672.5, 4407, 'Oui', 'Oui', 'Écart'],
            ['FA-037', '18/07/2024', 'Sécuritest Contrôles', 'P2P', 3769, 4522.8, 'Oui', 'Oui', 'OK'],
            ['FA-038', '25/07/2024', 'TechniFroid Services', 'P2P', 3866.5, 4639.8, 'Oui', 'Oui', 'OK'],
            ['FA-039', '05/07/2024', 'Grand Frais du Nord', 'O2C', 1320, 1392.6, 'Oui', 'Oui', 'OK'],
            ['FA-040', '12/07/2024', 'Supérette Lemoine', 'O2C', 1840, 1941.2, 'Oui', 'Oui', 'OK'],
            ['FA-041', '19/07/2024', 'Froid & Maintenance Pro', 'P2P', 4157, 4988.4, 'Oui', 'Oui', 'OK'],
            ['FA-042', '26/07/2024', 'Transports Ravel', 'P2P', 4254.5, 5105.4, 'Oui', 'Oui', 'OK'],
            ['FA-043', '06/07/2024', 'Imprimerie du Val', 'P2P', 4351, 5221.2, 'Oui', 'Oui', 'OK'],
            ['FA-044', '13/07/2024', 'Hypermarché Verdier', 'O2C', 3920, 4135.6, 'Oui', 'Oui', 'OK'],
            ['FA-045', '20/07/2024', 'Boulangerie Rousseau', 'O2C', 4440, 4684.2, 'Oui', 'Oui', 'OK'],
            ['FA-046', '27/07/2024', 'Locabox Plastiques', 'P2P', 442.5, 531, 'Oui', 'Oui', 'OK'],
            ['FA-047', '07/08/2024', 'Sécuritest Contrôles', 'P2P', 539, 646.8, 'Non', 'Non', 'Absent'],
            ['FA-048', '14/08/2024', 'TechniFroid Services', 'P2P', 636.5, 763.8, 'Oui', 'Oui', 'OK'],
            ['FA-049', '21/08/2024', 'Grand Frais du Nord', 'O2C', 6520, 6878.6, 'Oui', 'Oui', 'OK'],
            ['FA-050', '28/08/2024', 'Supérette Lemoine', 'O2C', 7040, 7427.2, 'Oui', 'Oui', 'OK'],
            ['FA-051', '08/08/2024', 'Froid & Maintenance Pro', 'P2P', 927, 1112.4, 'Oui', 'Oui', 'OK'],
            ['FA-052', '15/08/2024', 'Transports Ravel', 'P2P', 1024.5, 1229.4, 'Oui', 'Oui', 'Écart'],
            ['FA-053', '22/08/2024', 'Imprimerie du Val', 'P2P', 1121, 1345.2, 'Oui', 'Oui', 'OK'],
            ['FA-054', '02/08/2024', 'Hypermarché Verdier', 'O2C', 9120, 9621.6, 'Oui', 'Oui', 'OK'],
            ['FA-055', '09/08/2024', 'Boulangerie Rousseau', 'O2C', 9640, 10170.2, 'Non', 'Non', 'Absent'],
            ['FA-056', '16/08/2024', 'Locabox Plastiques', 'P2P', 1412.5, 1695, 'Oui', 'Oui', 'OK'],
            ['FA-057', '23/08/2024', 'Sécuritest Contrôles', 'P2P', 1509, 1810.8, 'Oui', 'Oui', 'OK'],
            ['FA-058', '03/08/2024', 'TechniFroid Services', 'P2P', 620, 743, 'Oui', 'Oui', 'OK'],
            ['FA-059', '10/08/2024', 'Grand Frais du Nord', 'O2C', 2120, 2236.6, 'Oui', 'Oui', 'OK'],
            ['FA-060', '17/08/2024', 'Supérette Lemoine', 'O2C', 2640, 2785.2, 'Oui', 'Oui', 'OK'],
            ['FA-061', '24/08/2024', 'Froid & Maintenance Pro', 'P2P', 1897, 2276.4, 'Oui', 'Oui', 'OK'],
            ['FA-062', '04/08/2024', 'Transports Ravel', 'P2P', 1994.5, 2393.4, 'Oui', 'Oui', 'OK'],
            ['FA-063', '11/08/2024', 'Imprimerie du Val', 'P2P', 2091, 2509.2, 'Non', 'Non', 'Absent'],
            ['FA-064', '18/08/2024', 'Hypermarché Verdier', 'O2C', 4720, 4979.6, 'Oui', 'Oui', 'OK'],
            ['FA-065', '25/08/2024', 'Boulangerie Rousseau', 'O2C', 5240, 5528.2, 'Oui', 'Oui', 'OK'],
            ['FA-066', '05/08/2024', 'Locabox Plastiques', 'P2P', 2382.5, 2859, 'Oui', 'Oui', 'OK'],
            ['FA-067', '12/08/2024', 'Sécuritest Contrôles', 'P2P', 2479, 2974.8, 'Oui', 'Oui', 'OK'],
            ['FA-068', '19/08/2024', 'TechniFroid Services', 'P2P', 2576.5, 3091.8, 'Oui', 'Oui', 'OK'],
            ['FA-069', '26/08/2024', 'Grand Frais du Nord', 'O2C', 7320, 7722.6, 'Oui', 'Oui', 'OK'],
            ['FA-070', '06/09/2024', 'Supérette Lemoine', 'O2C', 7840, 8271.2, 'Oui', 'Oui', 'OK'],
            ['FA-071', '13/09/2024', 'Froid & Maintenance Pro', 'P2P', 2867, 3440.4, 'Oui', 'Oui', 'OK'],
            ['FA-072', '20/09/2024', 'Transports Ravel', 'P2P', 2964.5, 3557.4, 'Oui', 'Oui', 'OK'],
            ['FA-073', '27/09/2024', 'Imprimerie du Val', 'P2P', 3061, 3673.2, 'Oui', 'Oui', 'OK'],
            ['FA-074', '07/09/2024', 'Hypermarché Verdier', 'O2C', 320, 337.6, 'Oui', 'Oui', 'Écart'],
            ['FA-075', '14/09/2024', 'Boulangerie Rousseau', 'O2C', 840, 886.2, 'Oui', 'Oui', 'OK'],
            ['FA-076', '21/09/2024', 'Locabox Plastiques', 'P2P', 3352.5, 4023, 'Oui', 'Oui', 'OK'],
            ['FA-077', '28/09/2024', 'Sécuritest Contrôles', 'P2P', 3449, 4138.8, 'Oui', 'Oui', 'OK'],
            ['FA-078', '08/09/2024', 'TechniFroid Services', 'P2P', 3546.5, 4255.8, 'Oui', 'Oui', 'OK'],
            ['FA-079', '15/09/2024', 'Grand Frais du Nord', 'O2C', 2920, 3080.6, 'Oui', 'Oui', 'OK'],
            ['FA-080', '22/09/2024', 'Supérette Lemoine', 'O2C', 2000, 2200, 'Oui', 'Oui', 'OK'],
            ['FA-081', '02/09/2024', 'Froid & Maintenance Pro', 'P2P', 3837, 4604.4, 'Non', 'Non', 'Absent'],
            ['FA-082', '09/09/2024', 'Transports Ravel', 'P2P', 3934.5, 4721.4, 'Oui', 'Oui', 'OK'],
            ['FA-083', '16/09/2024', 'Imprimerie du Val', 'P2P', 4031, 4837.2, 'Oui', 'Oui', 'OK'],
            ['FA-084', '23/09/2024', 'Hypermarché Verdier', 'O2C', 5520, 5823.6, 'Oui', 'Oui', 'OK'],
            ['FA-085', '03/09/2024', 'Boulangerie Rousseau', 'O2C', 6040, 6372.2, 'Oui', 'Oui', 'OK'],
            ['FA-086', '10/09/2024', 'Locabox Plastiques', 'P2P', 4322.5, 5187, 'Oui', 'Oui', 'OK'],
            ['FA-087', '17/09/2024', 'Sécuritest Contrôles', 'P2P', 219, 262.8, 'Oui', 'Oui', 'OK'],
            ['FA-088', '24/09/2024', 'TechniFroid Services', 'P2P', 316.5, 379.8, 'Oui', 'Oui', 'OK'],
            ['FA-089', '04/09/2024', 'Grand Frais du Nord', 'O2C', 8120, 8566.6, 'Oui', 'Oui', 'OK'],
            ['FA-090', '11/09/2024', 'Supérette Lemoine', 'O2C', 8640, 9115.2, 'Non', 'Non', 'Absent'],
          ],
          note: 'Document fictif. TVA : 20 % sur les factures P2P, 5,5 % sur les ventes O2C (produits alimentaires). TTC attendu = HT × 1,20 (P2P) ou HT × 1,055 (O2C).',
        },
      ],
      questions: [
        {
          id: 'danone-m2-ex2-q1',
          question: 'Rappel de la règle : une ligne est incohérente si son rapprochement est « Écart » ou « Absent », OU si son TTC ne correspond pas à HT × (1 + taux). Combien de lignes incohérentes comptez-vous ?',
          type: 'numeric',
          expected: 14,
          explanation:
            '14 incohérences : 7 factures sans commande ni réception/livraison (rapprochement « Absent ») : FA-012, FA-031, FA-047, FA-055, FA-063, FA-081, FA-090 ; 4 factures avec rapprochement « Écart » : FA-009, FA-036, FA-052, FA-074 ; 3 factures dont le TTC est incohérent avec le taux : FA-023, FA-058, FA-080. Les autres 76 lignes sont cohérentes. Compter séparément chaque famille d’anomalie évite l’erreur classique qui consiste à tout mélanger.',
        },
        {
          id: 'danone-m2-ex2-q2',
          question: 'Identifiez toutes les factures arrivées SANS commande ni réception/livraison.',
          type: 'multi',
          options: ['FA-009', 'FA-012', 'FA-023', 'FA-031', 'FA-036', 'FA-047', 'FA-055', 'FA-058', 'FA-063', 'FA-074', 'FA-081', 'FA-090'],
          expected: ['1', '3', '5', '6', '8', '10', '11'],
          explanation:
            'Sept factures cumulent les deux colonnes « Non » : FA-012, FA-031, FA-047, FA-063, FA-081 (cycle P2P) et FA-055, FA-090 (cycle O2C). Attention aux leurres : FA-009, FA-036, FA-052 et FA-074 présentent un rapprochement « Écart » mais possèdent commande et réception ; FA-023, FA-058 et FA-080 ont un problème de TTC, pas de pièces amont. Trois familles d’anomalies distinctes : ne pas tout mettre dans le même panier.',
        },
        {
          id: 'danone-m2-ex2-q3',
          question: 'Recalculez le TTC de FA-023 (P2P, HT 840,00 €, TVA 20 %) : quel est l’écart avec le TTC affiché (1 080,00 €) ?',
          type: 'numeric',
          expected: 72,
          explanation:
            'TTC attendu : 840,00 × 1,20 = 1 008,00 €. Écart : 1 080,00 − 1 008,00 = 72,00 € (une inversion de chiffres dans le TTC imprimé). Sur 14 lignes incohérentes, seules trois relèvent d’un écart arithmétique : c’est exactement pourquoi le TTC affiché ne doit jamais être recopié sans recalcul.',
        },
        {
          id: 'danone-m2-ex2-q4',
          question: 'Recalculez le TTC de FA-058 (P2P, HT 620,00 €, TVA 20 %) : quel est l’écart avec le TTC affiché (743,00 €) ?',
          type: 'numeric',
          expected: 1,
          explanation:
            'TTC attendu : 620,00 × 1,20 = 744,00 €. Écart : 744,00 − 743,00 = 1,00 €. Un écart d’un euro semble dérisoire, mais il rompt la cohérence arithmétique de la facture, bloque le lettrage du règlement (le fournisseur prélèvera 744,00 €) et signale une saisie ou une impression approximative : on demande la correction, même pour 1,00 €.',
        },
        {
          id: 'danone-m2-ex2-q5',
          question: 'Recalculez le TTC de FA-080 (O2C, HT 2 000,00 €, TVA 5,5 %) : quel est l’écart avec le TTC affiché (2 200,00 €) ?',
          type: 'numeric',
          expected: 90,
          explanation:
            'TTC attendu : 2 000,00 × 1,055 = 2 110,00 €. Écart : 2 200,00 − 2 110,00 = 90,00 €. Le TTC affiché correspond en réalité à un taux de 10 % (2 000,00 × 1,10 = 2 200,00 €) : taux de TVA erroné sur une vente de produits alimentaires (5,5 %). C’est l’anomalie la plus lourde des trois : elle touche la facturation client et la TVA collectée déclarée.',
        },
        {
          id: 'danone-m2-ex2-q6',
          question: 'Vous ne pouvez traiter que trois dossiers aujourd’hui : lesquels choisissez-vous et pourquoi ?',
          type: 'open',
          keywords: ['montant', 'TVA', 'sans commande', 'fournisseur', 'récurrence', 'client', 'risque'],
          explanation:
            'Une hiérarchie défendable : (1) FA-080 — taux de TVA erroné sur une facture client (2 000,00 € HT, écart 90,00 €) : impact direct sur la créance et la TVA collectée, à corriger avant encaissement ; (2) FA-081 ou FA-063 — facture P2P sans commande ni réception et de montant élevé (3 837,00 € / 2 091,00 € HT) : risque de dépense non autorisée, à faire justifier avant paiement ; (3) FA-055 — vente sans commande client ni bon de livraison (9 640,00 € HT) : risque de créance sans fait générateur documenté. Critères mobilisables : montant en jeu, nature de l’anomalie (TVA et entité avant l’arithmétique), position dans le cycle (avant ou après paiement), récurrence du tiers. L’important est de justifier l’ordre, pas de le deviner.',
        },
      ],
      solutionSummary:
        'Sur 90 factures (54 P2P à TVA 20 %, 36 O2C à TVA 5,5 %) : 14 lignes incohérentes — 7 sans commande ni réception/livraison, 4 avec rapprochement « Écart », 3 avec TTC incohérent (écarts de 72,00 €, 1,00 € et 90,00 € — cette dernière trahissant un taux de 10 % appliqué au lieu de 5,5 %). Priorisation : TVA client (FA-080) > factures majeures sans amont documentaire (FA-081, FA-063, FA-055) > écarts mineurs. À l’oral, expliquez vos trois critères de tri : nature du risque, montant, position dans le cycle.',
      interviewTips: [
        'Annoncez le total (14) avec sa décomposition (7 + 4 + 3) : le détail prouve que vous avez vraiment compté.',
        'Justifiez la priorisation par le risque (TVA, entité, montant), pas par l’ordre du tableau.',
      ],
    },
    {
      id: 'danone-m2-ex3',
      title: '3-way match : détecteur d’anomalies',
      cycle: 'P2P',
      context:
        'Quatre dossiers documentaires complets (commande / réception / facture). Chacun cache une anomalie d’une nature différente. À vous de qualifier l’écart, de le chiffrer et de conclure. Montants et sociétés fictifs.',
      risks: ['Surfacturation', 'Référence erronée', 'Mauvaise entité facturée'],
      documents: [
        {
          kind: 'text',
          name: 'Dossier A — Commande / réception / facture (fictif)',
          content:
            'BON DE COMMANDE COM-2024-0412 (03/07/2024)\n' +
            'Fournisseur : Cartonnages Rhône\n' +
            '40 palettes étiquetées REF-ETQ-12 à 12,50 € HT l’unité = 500,00 € HT\n' +
            'BON DE RÉCEPTION BR-2024-0355 (10/07/2024)\n' +
            'Reçu : 40 palettes REF-ETQ-12 — conforme, aucune réserve\n' +
            'FACTURE FA-2024-1287 (12/07/2024)\n' +
            '45 palettes REF-ETQ-12 × 12,50 € = 562,50 € HT\n' +
            'TVA 20 % 112,50 € — TTC 675,00 €',
          note: 'Document fictif à visée pédagogique.',
        },
        {
          kind: 'text',
          name: 'Dossier B — Commande / réception / facture (fictif)',
          content:
            'BON DE COMMANDE COM-2024-0431 (05/07/2024)\n' +
            'Fournisseur : AgriLog Emballages\n' +
            '200 sacs isothermes modèle SI-40 à 8,40 € HT l’unité = 1 680,00 € HT\n' +
            'BON DE RÉCEPTION BR-2024-0367 (12/07/2024)\n' +
            'Reçu : 200 sacs isothermes SI-40 — conforme\n' +
            'FACTURE FA-2024-1301 (15/07/2024)\n' +
            '200 sacs isothermes SI-40 × 9,40 € = 1 880,00 € HT\n' +
            'TVA 20 % 376,00 € — TTC 2 256,00 €',
          note: 'Document fictif à visée pédagogique.',
        },
        {
          kind: 'text',
          name: 'Dossier C — Commande / livraison / facture (fictif)',
          content:
            'COMMANDE CLIENT CV-2024-0744 (02/07/2024) — Épicerie Bianchi\n' +
            '1 000 yaourts nature 125 g (REF-YA-125) à 0,86 € HT = 860,00 € HT\n' +
            'BON DE LIVRAISON BL-2024-0912 (04/07/2024)\n' +
            'Livré : 1 000 yaourts REF-YA-125 — reçu sans réserve\n' +
            'FACTURE FV-2024-0611 (04/07/2024)\n' +
            '1 000 yaourts sucrés (REF-YA-215) × 0,86 € = 860,00 € HT\n' +
            'TVA 5,5 % 47,30 € — TTC 907,30 €',
          note: 'Document fictif à visée pédagogique.',
        },
        {
          kind: 'text',
          name: 'Dossier D — Commande / réception / facture (fictif)',
          content:
            'BON DE COMMANDE COM-2024-0450 (08/07/2024)\n' +
            'Entité commandataire : Centrale Danone — site logistique de Lyon-Brotteaux\n' +
            'Fournisseur : Froid & Maintenance Pro — dépannage groupe froid\n' +
            'Prestation : 12 heures d’intervention à 95,00 € HT = 1 140,00 € HT\n' +
            'BON DE RÉCEPTION BR-2024-0380 (09/07/2024)\n' +
            'Signé par le gardien du site de Paris-Brasserie (pas le site commandataire)\n' +
            'FACTURE FA-2024-1316 (10/07/2024)\n' +
            'Adressée à : CD Logistique SAS (entité sœur), mention « pour le compte de »\n' +
            '12 h × 95,00 € = 1 140,00 € HT — TVA 20 % 228,00 € — TTC 1 368,00 €',
          note: 'Document fictif à visée pédagogique.',
        },
      ],
      questions: [
        {
          id: 'danone-m2-ex3-q1',
          question: 'Dossier A : quelle est la nature de l’anomalie ?',
          type: 'mcq',
          options: [
            'Écart de quantité : la facture porte 45 unités contre 40 commandées et reçues',
            'Écart de prix unitaire : le tarif facturé dépasse le tarif commandé',
            'Référence produit incohérente entre réception et facture',
            'Anomalie d’entité : la facture est adressée à une autre société',
          ],
          expected: '0',
          explanation:
            'Commande : 40 palettes. Réception : 40 palettes (conforme). Facture : 45 palettes. Les quantités facturées dépassent ce qui a été commandé ET reçu : 5 palettes facturées à tort. Le prix unitaire (12,50 €) et la référence (REF-ETQ-12) sont, eux, conformes.',
        },
        {
          id: 'danone-m2-ex3-q2',
          question: 'Dossier A : quel est l’écart HT induit par l’anomalie ?',
          type: 'numeric',
          expected: 62.5,
          explanation: '5 palettes × 12,50 € = 62,50 € HT (soit 75,00 € TTC à 20 %). La facture devrait être ramenée à 40 × 12,50 = 500,00 € HT / 600,00 € TTC, contre 562,50 / 675,00 € facturés.',
        },
        {
          id: 'danone-m2-ex3-q3',
          question: 'Dossier B : quelle est la nature de l’anomalie ?',
          type: 'mcq',
          options: [
            'Écart de quantité : 200 facturés contre 199 reçus',
            'Écart de prix unitaire : 9,40 € facturés contre 8,40 € commandés',
            'Référence incohérente : modèle SI-40 facturé en SI-44',
            'Absence de bon de réception',
          ],
          expected: '1',
          explanation:
            'Quantités identiques (200 partout), référence identique (SI-40), réception présente et conforme : l’écart porte sur le prix unitaire — 9,40 € facturés contre 8,40 € convenus, soit 1,00 € par unité. C’est la surfacturation classique, indétectable sans le rapprochement du bon de commande.',
        },
        {
          id: 'danone-m2-ex3-q4',
          question: 'Dossier B : quel est l’écart HT total induit par l’anomalie ?',
          type: 'numeric',
          expected: 200,
          explanation: '200 unités × (9,40 − 8,40) = 200,00 € HT (240,00 € TTC à 20 %). La facture correcte serait 1 680,00 € HT / 2 016,00 € TTC, contre 1 880,00 / 2 256,00 € présentés.',
        },
        {
          id: 'danone-m2-ex3-q5',
          question: 'Dossier C : quelle est la nature de l’anomalie ?',
          type: 'mcq',
          options: [
            'Écart de quantité : 1 000 facturés contre 990 livrés',
            'Écart de prix unitaire',
            'Référence produit incohérente : la facture porte REF-YA-215 (yaourts sucrés) alors que commande et livraison portent REF-YA-125 (yaourts nature)',
            'Taux de TVA erroné : 5,5 % appliqué au lieu de 20 %',
          ],
          expected: '2',
          explanation:
            'Quantités (1 000) et prix (0,86 €) concordent ; le taux de 5,5 % est correct pour des denrées alimentaires. L’anomalie est la référence : on a livré et réceptionné des yaourts NATURE, la facture mentionne des yaourts SUCRÉS. Même montants, produit différent : sans correction, la facture ne décrit pas ce qui a été vendu — risque commercial et fiscal (la facture doit décrire précisément les biens livrés).',
        },
        {
          id: 'danone-m2-ex3-q6',
          question: 'Dossier D : quelle est la nature de l’anomalie ?',
          type: 'mcq',
          options: [
            'Écart de quantité sur les heures d’intervention',
            'Écart de prix horaire',
            'Anomalie d’entité/bénéficiaire : le commandataire est le site de Lyon, la réception est signée à Paris, et la facture est adressée à une entité sœur (CD Logistique SAS)',
            'Absence totale de bon de réception',
          ],
          expected: '2',
          explanation:
            'Quantités (12 h) et prix (95,00 €) concordent, la réception existe. Mais l’entité ne correspond pas : le site commandataire (Lyon-Brotteaux) n’est ni celui qui a signé la réception (Paris-Brasserie) ni celui qui est facturé (CD Logistique SAS). Avant paiement, il faut clarifier : quelle entité a bénéficié de la prestation, laquelle doit supporter la charge, et obtenir une facture adressée à la bonne entité — sinon la charge et la TVA sont portées par la mauvaise société.',
        },
        {
          id: 'danone-m2-ex3-q7',
          question: 'Quelle démarche commune appliquez-vous aux quatre dossiers avant de conclure ?',
          type: 'open',
          keywords: ['rapprochement', 'quantité', 'prix', 'référence', 'entité', 'documenter', 'fournisseur'],
          explanation:
            'Même mécanique partout : (1) rapprocher les trois documents ligne à ligne — quantités, prix unitaires, références, entités — ; (2) qualifier l’écart constaté (quantité, prix, référence, entité) et le chiffrer (62,50 € HT pour A, 200,00 € HT pour B) ; (3) demander l’explication ou la pièce corrective : avoir ou facture rectifiée pour A et B, facture corrigée de la référence pour C, réadressage d’entité pour D ; (4) ne rien payer ni comptabiliser de définitif avant la pièce conforme ; (5) documenter le rapprochement et l’écart dans le suivi. Le 3-way match n’est pas un gadget : c’est le seul contrôle qui confronte simultanément ce qui a été convenu, reçu et facturé.',
        },
      ],
      solutionSummary:
        'Quatre natures d’anomalie, une seule méthode. A : écart de quantité (45 facturés / 40 reçus) → 62,50 € HT en trop. B : écart de prix unitaire (9,40 contre 8,40) → 200,00 € HT en trop. C : référence produit erronée (nature livrés, sucrés facturés) → facture à corriger malgré des montants identiques. D : entité incohérente entre commandataire, réceptionnaire et facturé → clarification d’entité obligatoire. Dans tous les cas : qualifier, chiffrer, demander la correction écrite, ne payer qu’une pièce conforme, tracer. À l’oral, récitez les quatre axes du rapprochement : quantités, prix, références, entité.',
      interviewTips: [
        'Les quatre axes du 3-way match (quantité, prix, référence, entité) constituent une réponse « passe-partout » de grande qualité : mémorisez-les.',
        'Sur le dossier D, montrez que vous pensez « périmètre juridique » : une facture adressée à la mauvaise entité engage la mauvaise société.',
      ],
    },
    {
      id: 'danone-m2-ex4',
      title: 'La piste d’audit fiable, sans approximation',
      cycle: 'Transversal',
      context:
        'Notion fréquemment brandie et rarement définie proprement. Trois questions pour distinguer traçabilité des opérations, documentation comptable et exigences fiscales — sans dire d’inexactitude juridique.',
      risks: ['Confusion des notions', 'Durées de conservation erronées', 'Modification non tracée'],
      documents: [],
      questions: [
        {
          id: 'danone-m2-ex4-q1',
          question: 'Quelle proposition décrit le mieux une piste d’audit fiable ?',
          type: 'mcq',
          options: [
            'La possibilité de relier, dans les deux sens, chaque opération à sa pièce justificative et à son écriture comptable, grâce à un enregistrement chronologique, des données cohérentes entre documents et une protection contre les modifications non tracées',
            'Un logiciel de facturation certifié par un organisme tiers, exigence qui ne concerne que les ventes aux particuliers',
            'La conservation de toutes les pièces comptables pendant 10 ans, sans autre exigence',
            'Un fichier Excel de suivi des factures tenu à jour par le comptable',
          ],
          expected: '0',
          explanation:
            'La piste d’audit fiable est d’abord une capacité : remonter et descendre la chaîne opération ↔ pièce ↔ écriture, sans rupture chronologique, avec des données cohérentes et des corrections tracées. Prudence sur les approximations : l’exigence de « piste d’audit fiable » attachée aux logiciels de facturation (CGI, art. 289) vise la traçabilité des opérations de facturation par le système — ce n’est pas une définition générale de l’audit comptable ; la conservation (10 ans / 6 ans selon la nature des documents) est une exigence séparée ; et un fichier Excel, aussi soigné soit-il, ne se substitue pas au système comptable.',
        },
        {
          id: 'danone-m2-ex4-q2',
          question: 'Quelles durées de conservation citer (de principe, à confronter au cas concret) ?',
          type: 'mcq',
          options: [
            'Documents comptables : 10 ans (code de commerce) ; documents fiscaux : 6 ans (livre des procédures fiscales)',
            '3 ans pour tous les documents comptables et fiscaux',
            '6 ans pour tous les documents, comptables comme fiscaux',
            '30 ans pour les pièces comptables, 1 an pour les pièces fiscales',
          ],
          expected: '0',
          explanation:
            'En droit français de référence : les pièces comptables se conservent en principe 10 ans (code de commerce), les documents fiscaux 6 ans (livre des procédures fiscales) — avec des durées spécifiques selon les documents et des situations particulières (litige, contrôle) : d’où l’habitude de citer des durées « de principe » et de vérifier le cas concret. Répondre « 6 ans pour tout » ou « 3 ans » est l’erreur classique en entretien.',
        },
        {
          id: 'danone-m2-ex4-q3',
          question: 'Distinguez : traçabilité des opérations, documentation comptable, exigences fiscales de conservation.',
          type: 'open',
          keywords: ['chronologie', 'cohérence', 'intégrité', 'traçabilité', 'conservation', 'pièces'],
          explanation:
            'Trois plans distincts et complémentaires. La traçabilité des opérations : chaque étape du cycle (demande, commande, réception, facture, paiement) est datée, référencée et reliée aux suivantes — on reconstitue le fil. La documentation comptable : chaque écriture s’appuie sur une pièce identifiée, archivée, retrouvable (journaux, libellés, comptes auxiliaires, références croisées) — le fil est prouvable. Les exigences fiscales de conservation : les pièces sont conservées aux durées de principe (10 ans comptable, 6 ans fiscal, durées à confronter au cas), dans un format intègre, avec des corrections tracées (jamais de modification en place). La « piste d’audit fiable » s’apprécie à la croisée des trois : une chaîne chronologique cohérente (traçabilité), appuyée sur des pièces (documentation), conservées et intègres (fiscal). Confondre les trois expose à des formulations juridiquement inexactes — par exemple réduire la notion au seul logiciel de facturation ou à la seule durée de conservation.',
        },
      ],
      solutionSummary:
        'Piste d’audit fiable = capacité bidirectionnelle à relier opération ↔ pièce ↔ écriture, sur les trois plans : traçabilité des opérations (chronologie, références croisées), documentation comptable (pièces justificatives, journaux, écritures datées), exigences fiscales de conservation (10 ans comptable / 6 ans fiscal, de principe). Les corrections passent par des écritures tracées, jamais par modification en place. Réflexe d’entretien : préciser « durées de principe, à vérifier selon le cas », plutôt que d’affirmer une règle unique.',
      interviewTips: [
        'Distinguez explicitement les trois plans (traçabilité, documentation, conservation) : la confusion est un piège tendu par les recruteurs.',
        'Sur les durées, citez les deux chiffres (10 / 6) avec leur source et leur nuance : c’est un marqueur de rigueur.',
      ],
    },
  ],
  interviewQuestions: [
    { question: 'Expliquez le cycle Procure-to-Pay de bout en bout.', expected: 'Demande d’achat → validation → bon de commande → réception → facture → rapprochement commande/réception/facture → bon à payer → comptabilisation → paiement → archivage. Chaque étape produit une trace datée et référencée ; le paiement n’intervient qu’après rapprochement et validation par une personne habilitée distincte (séparation des tâches).', hint: 'Illustrez avec le miroir O2C pour montrer la vision process.' },
    { question: 'Qu’est-ce que le rapprochement à trois voies et pourquoi est-il central ?', expected: 'La comparaison commande / réception / facture sur les quantités, prix, références et entité. Il atteste que la facture correspond à ce qui a été convenu ET reçu : c’est le contrôle qui empêche de payer des dépenses non autorisées ou surfacturées. Tout écart est qualifié, chiffré et justifié avant paiement.' },
    { question: 'Comment traitez-vous une facture reçue sans bon de commande ni bon de réception ?', expected: 'Jamais payable telle quelle : mise en attente, demande de justification (qui a commandé, qui a reçu, pourquoi l’amont manque), validation rétroactive documentée si l’opération est réelle et légitime, sinon rejet. L’objectif n’est pas de bloquer mais de reconstituer l’amont avant de payer.' },
    { question: 'Que contrôlez-vous dans un 3-way match ?', expected: 'Quatre axes : quantités (facturées = commandées = reçues), prix unitaires (facturés = convenus), références/qualité (produit facturé = produit livré), entité/bénéficiaire (commandataire = réceptionnaire = facturé). Puis le calcul : HT × (1 + taux) = TTC au taux applicable.' },
    { question: 'Expliquez le cycle Order-to-Cash et ses points de contrôle.', expected: 'Commande client → validation (crédit, disponibilité) → livraison (BL signé) → facture → créance enregistrée → suivi/relance → encaissement → lettrage. Contrôles : rapprochement commande/BL/facture, correcte évaluation de la créance, TVA collectée au bon taux (5,5 % sur denrées), suivi des encaissements et lettrage des comptes clients.' },
    { question: 'Que signifie « piste d’audit fiable » pour vous ?', expected: 'La capacité à relier dans les deux sens chaque opération à sa pièce et à son écriture, avec chronologie continue, cohérence des données et intégrité (corrections tracées, jamais de modification en place). Je distingue trois plans : traçabilité des opérations, documentation comptable, exigences fiscales de conservation (10 ans / 6 ans de principe).' },
    { question: 'Une facture porte un TTC incohérent avec le HT : que faites-vous ?', expected: 'Je recalcule HT × (1 + taux applicable) — 20 % ou 5,5 % selon la nature. Écart confirmé (ex. 743,00 € contre 744,00 € attendus) : pièce mise en attente, correction demandée au fournisseur, jamais de recopie du TTC erroné. Même 1,00 € compte : la cohérence arithmétique conditionne le lettrage du règlement.' },
    { question: 'Comment documentez-vous vos rapprochements pour qu’ils soient exploitables a posteriori ?', expected: 'Références croisées (n° commande, BL, facture, écriture), statut (OK/écart/absent), date et contrôleur, explication des écarts, archivage relié. Un contrôle non documenté est réputé n’avoir pas eu lieu : face à un auditeur, seule la trace compte.' },
    { question: 'Sur 90 factures mensuelles, comment organisez-vous le contrôle ?', expected: 'Table de contrôle structurée (n°, date, tiers, cycle, HT, TTC, commande, réception, statut), recalcul systématique du TTC, comptage par famille d’anomalies (absentes, écarts, TVA), priorisation par risque et montant, suivi des résolutions et bilan mensuel. L’objectif : un contrôle répétable et mesurable, pas une inspection artisanale.' },
    { question: 'Quels risques couvre la séparation des tâches dans le cycle achats ?', expected: 'Elle empêche une même personne de commander, recevoir, contrôler et payer : sans elle, une dépense fictive peut être créée et payée de bout en bout par la même main. C’est pourquoi le bon à payer est visé par un responsable habilité distinct de l’émetteur de la commande.' },
    { question: 'Que faites-vous d’un écart détecté chez un fournisseur pour la troisième fois consécutive ?', expected: 'Je qualifie la récurrence : même nature d’écart, même tiers. L’incident isolé devient une pratique — je documente les trois occurrences, j’alerte le responsable achats (renégociation ou mise en demeure de conformité facturation) et je l’inscris au tableau de suivi des anomalies pour la direction. C’est le pont vers la remontée de faille de procédure.' },
  ],
  followUps: [
    { question: 'Le fournisseur dit « la réception existe, le magasinier ne l’a juste pas signée » : ça change quoi ?', expected: 'Le fait générateur doit être prouvé, pas affirmé : je demanderais le justificatif de réception (scan du BR, badge d’accès, bon d’entrée stock). Tant que la preuve manque, la facture reste en attente de justification — avec un délai de suivi, pour ne pas pénaliser indûment un fournisseur de bonne foi.' },
    { question: 'Le paiement a déjà été émis avant le rapprochement : que faites-vous ?', expected: 'Je reconstruis le dossier a posteriori (commande, réception, justification), je qualifie l’écart éventuel en trop-payé et j’engage le recouvrement auprès du fournisseur (avoir ou remboursement), tout en signalant la faille de procédure : payer avant rapprocher, c’est le symptôme d’un contrôle interne défaillant.' },
    { question: 'Comment un auditeur externe vérifierait-il votre piste d’audit ?', expected: 'Par des sondages bidirectionnels : partir d’écritures et redescendre aux pièces, et partir de pièces (commandes, BL) et remonter aux écritures ; contrôle de chronologie, de références croisées et d’intégrité (écritures validées non modifiées en place). Les ruptures trouvées (pièce sans écriture, écriture sans pièce) qualifient la piste de non fiable sur ces points.' },
    { question: 'La facture est dématérialisée (PDF signé électroniquement) : la piste d’audit change-t-elle ?', expected: 'Le support change, l’exigence non : intégrité du fichier (signature, horodatage), archivage électronique structuré et recherchable, références croisées conservées, durées de conservation identiques. La dématérialisation mal organisée (PDF noyés dans des mails) dégrade la traçabilité plus qu’elle ne l’améliore.' },
    { question: 'Pourquoi compter les incohérences par famille plutôt que globalement ?', expected: 'Parce que les familles n’ont ni la même cause ni le même remède : absence d’amont (procédure/achats), écart de rapprochement (fournisseur ou réception), écart de TVA (facturation/paramétrage). Le comptage par famille transforme un total anecdotique en diagnostic de process — et nourrit les indicateurs du tableau de bord.' },
    { question: 'Que répondriez-vous à un responsable qui trouve votre contrôle trop lent ?', expected: 'Je montrerais le coût comparé : le temps de contrôle par facture contre le coût d’un double paiement, d’une TVA mal déclarée ou d’une dépense non autorisée. Puis des leviers d’accélération qui ne dégradent pas la qualité : contrôles par risque (seuils), automatisation du recalcul TVA et des détections de doublons, traitement par exception.' },
    { question: 'Sur les 90 factures, une seule est dans le rouge : faut-il tout de même parler des 89 autres ?', expected: 'Oui : le bilan mensuel donne les deux — 76 lignes cohérentes, 14 incohérentes réparties en trois familles. La statistique prouve le sérieux du contrôle, situe la matérialité et évite l’effet « alarme permanente » ; l’anomalie majeure est mise en avant, la base saine documentée.' },
  ],
  evaluation: {
    criteria: [
      { label: 'Vision process', description: 'Restitue les cycles P2P et O2C avec leurs documents, acteurs et points de contrôle — pas seulement la facture.' },
      { label: 'Rapprochement 3 voies', description: 'Contrôle quantités, prix, références et entité entre commande, réception et facture, et qualifie chaque écart.' },
      { label: 'Contrôle arithmétique', description: 'Recalcule HT × (1 + taux) = TTC au taux applicable (20 % / 5,5 %) au lieu de recopier le TTC imprimé.' },
      { label: 'Qualification et priorisation', description: 'Classe les anomalies par nature, chiffre les écarts et hiérarchise par risque, montant et position dans le cycle.' },
      { label: 'Documentation du contrôle', description: 'Trace chaque rapprochement (références croisées, statut, visa) pour le rendre exploitable et défendable.' },
      { label: 'Piste d’audit fiable', description: 'Distingue traçabilité des opérations, documentation comptable et exigences fiscales de conservation, sans approximation juridique.' },
      { label: 'Détection de récurrence', description: 'Repère les anomalies qui se répètent et les transforme en signal de faille de procédure à remonter.' },
    ],
  },
}
