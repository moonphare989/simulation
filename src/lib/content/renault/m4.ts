import type { Mission } from '@/lib/types'

// =====================================================================
// Fiche 2 — Renault · Mission 4 : Contrôle des décaissements par échantillonnage
// Scénario pédagogique fictif — juin à septembre 2025, montants en euros.
// Environ cinquante paiements contrôlés par mois : population, échantillon,
// délégations de signature, bons à payer, three-way match, doublons et indus.
// =====================================================================

export const renaultMission4: Mission = {
  id: 'renault-m4',
  ficheId: 'renault',
  order: 4,
  title: 'Contrôle des décaissements par échantillonnage : délégations, bons à payer et exceptions',
  period: 'Juin – Septembre 2025 · scénario pédagogique (données fictives)',
  company: 'Renault (scénario pédagogique — simulation)',
  sector: 'Automobile · service comptable et financier',
  referenceData: [
    'Environ cinquante décaissements contrôlés chaque mois par échantillonnage, de juin à septembre 2025 : sélection documentée (seuil des 10 000 € et tirage aléatoire), contrôle des autorisations, des délégations, des bons à payer et du rapprochement facture / commande / réception',
    'Population de juillet 2025 intégralement chiffrée : 50 paiements pour 1 056 260 €, dont 20 paiements supérieurs à 10 000 € représentant 88,4 % de la valeur',
    'Matrice des délégations de signature appliquée : cinq signataires fictifs, plafonds de 8 000 € à 200 000 € (A. Vasseur 8 000 €, M. Delaunay 20 000 €, S. Boyer 50 000 €, H. Marchal 120 000 €, C. Aubril 200 000 €)',
    'Bons à payer vérifiés avant tout paiement fournisseur : existence, signature habilitée, dossier complet (facture, commande, bon de réception)',
    'Quatre violations de délégation détectées sur l\u2019échantillon de quinze paiements d\u2019août 2025 — dont un fractionnement de 9 800 € et un dépassement de 410 € — soit un taux d\u2019exception de 26,7 %',
    'Rapprochement facture / commande / réception (three-way match) contrôlé sur trois dossiers en instance de paiement fin août : 1 350 € d\u2019écarts de facturation relevés et un changement d\u2019IBAN contre-vérifié',
    'Doublons et paiements indu recherchés sur l\u2019extension de septembre : deux doublons (2 875 € et 16 200 €) et un paiement indu couvert par un avoir (5 240 €), soit 24 315 € à récupérer',
    'Cinq comptes bancaires suivis quotidiennement (mission 1 de la fiche)',
    'BFR suivi sur deux exercices fictifs : 380 000 € en N contre 285 000 € en N-1 (mission 2 de la fiche)',
    'Dix rapprochements bancaires mensuels produits et revus de décembre 2024 à septembre 2025 (mission 3 de la fiche)',
    'Plus de soixante-dix écritures de clôture mensuelle revues sur l\u2019ensemble des clôtures (mission 5 de la fiche)',
  ],
  summary:
    'Mission consacrée au contrôle des décaissements par échantillonnage : définir une population mensuelle exhaustive (cinquante paiements en juillet pour 1 056 260 €), sélectionner et documenter un échantillon (seuil des 10 000 € et tirage aléatoire), contrôler les délégations de signature (cinq signataires, plafonds de 8 000 € à 200 000 €), vérifier les bons à payer, rapprocher facture, commande et réception, surveiller bénéficiaires et IBAN, puis traquer doublons et paiements indu (24 315 € à récupérer en septembre). La conclusion se joue sur un taux d\u2019exception de 26,7 % en août : quatre violations sur quinze obligent à étendre l\u2019échantillon et à qualifier la cause avant de juger le processus. Scénario entièrement fictif, montants en euros.',

  comprehension: {
    intro:
      'Les missions précédentes observaient la trésorerie depuis la banque : les soldes du matin (mission 1), le cycle d\u2019exploitation (mission 2), le rapprochement bancaire (mission 3). Celle-ci remonte le flux à contre-courant, jusqu\u2019à l\u2019instant précis où l\u2019argent quitte l\u2019entreprise : le décaissement. C\u2019est le point le plus exposé du dispositif comptable, parce qu\u2019une seule signature suffit à transférer des fonds — et que l\u2019erreur y est rarement réversible : un doublon, un paiement indu ou un virement vers un IBAN détourné ne se corrigent pas par une écriture, ils se récupèrent… quand ils se récupèrent. Comme on ne peut pas tout contrôler en profondeur, le contrôle s\u2019organise par échantillonnage : environ cinquante paiements par mois dans ce scénario, dont une partie sélectionnée obligatoirement (montants élevés) et le reste par tirage aléatoire documenté. Sur chaque paiement testé, on vérifie l\u2019autorisation (délégations de signature, bons à payer), la justification (rapprochement facture / commande / réception), l\u2019exactitude du bénéficiaire (IBAN), puis on traque les doublons et paiements indu. L\u2019enjeu final n\u2019est pas la liste des anomalies : c\u2019est la conclusion sur la fiabilité du processus — car une exception isolée ne se traite pas comme une cause systémique. Précision de référentiel : les contrôles décrits ici (délégations, bons à payer, rapprochement facture / commande / réception) sont des dispositifs de contrôle interne universels — le PCG comme les IFRS fixent des principes, pas des pièces ; seuls les intitulés comptables sous-jacents varient entre référentiels.',
    definitions: [
      {
        term: 'Population',
        definition:
          'Ensemble exhaustif des unités soumises au contrôle : ici, tous les décaissements d\u2019une période donnée (un mois, environ cinquante paiements). Toute conclusion d\u2019échantillonnage n\u2019a de valeur que rapportée à une population définie, exhaustive et chiffrée — en nombre et en valeur.',
      },
      {
        term: 'Échantillon',
        definition:
          'Sous-ensemble de la population effectivement contrôlé. Il se construit par un critère de risque (seuil de montant) et par tirage aléatoire sur le reste ; sa composition doit être documentée pour être reproductible et défendable devant un tiers.',
      },
      {
        term: 'Échantillonnage aléatoire',
        definition:
          'Méthode de sélection dans laquelle chaque paiement de la population a une chance connue d\u2019être tiré (tirage aléatoire simple ou systématique). Il garantit la représentativité, mais peut rater les gros montants : on le complète toujours d\u2019une sélection à seuil.',
      },
      {
        term: 'Échantillonnage monétaire (sélection à base monétaire)',
        definition:
          'Sélection orientée par le risque de valeur : tout élément supérieur à un seuil (par exemple 10 000 €) est examiné obligatoirement, car il concentre l\u2019essentiel du montant en jeu. Combiné au tirage aléatoire sur le solde de la population, il couple couverture monétaire et représentativité.',
      },
      {
        term: 'Délégation de signature',
        definition:
          'Autorisation formelle donnée à une personne d\u2019engager l\u2019entreprise jusqu\u2019à un plafond : un signataire ne peut valider un paiement supérieur à son plafond personnel. Elle fait l\u2019objet d\u2019une matrice écrite, datée, signée et revue périodiquement.',
      },
      {
        term: 'Matrice des délégations',
        definition:
          'Tableau de référence des signataires habilités et de leurs plafonds (montant par paiement, cumul par bénéficiaire et par jour pour prévenir le fractionnement). Le contrôle des décaissements confronte chaque paiement signé à cette matrice — plafond inclus.',
      },
      {
        term: 'Bon à payer (BAP)',
        definition:
          'Pièce qui matérialise l\u2019autorisation définitive de payer : après rapprochement facture / commande / réception, le signataire habilité appose son visa sur le dossier ; le règlement ne peut partir qu\u2019après. Son absence, son défaut de signature ou un plafond dépassé constituent une exception.',
      },
      {
        term: 'Rapprochement facture / commande / réception (three-way match)',
        definition:
          'Contrôle de cohérence à trois documents : la facture n\u2019est payable que si elle correspond à une commande effective (prix, quantités) et à une réception constatée (bon de réception signé). Il garantit que l\u2019entreprise paie ce qui a été commandé et réellement reçu.',
      },
      {
        term: 'Exception',
        definition:
          'Écart constaté lors du contrôle d\u2019un élément de l\u2019échantillon : paiement hors délégation, bon à payer manquant, écart facture / commande / réception, doublon, IBAN douteux. Chaque exception se documente (fait, preuve, cause) et se qualifie : isolée ou systémique.',
      },
      {
        term: 'Taux d\u2019exception',
        definition:
          'Proportion d\u2019exceptions dans l\u2019échantillon contrôlé (exceptions divisé par éléments testés). Quelques pourcents orientent vers des exceptions isolées ; un taux élevé — par exemple supérieur à 10 à 15 % — oriente vers une cause systémique et impose d\u2019étendre l\u2019échantillon avant de conclure.',
      },
      {
        term: 'Paiement indu',
        definition:
          'Paiement effectué alors qu\u2019il ne devait pas l\u2019être, en tout ou partie : facture couverte ultérieurement par un avoir, avance non consommée, trop-perçu. Il ouvre droit à récupération (remboursement ou imputation sur une échéance ultérieure), à documenter et à suivre jusqu\u2019à son dénouement.',
      },
      {
        term: 'Double paiement (doublon)',
        definition:
          'Règlement deux fois d\u2019une même dette : même fournisseur, même montant, références de facture proches mais distinctes, libellé identique, dates rapprochées. Avant de conclure, on confirme par lettrage et rapprochement de compte que les deux règlements ne recouvrent pas deux prestations distinctes.',
      },
      {
        term: 'Fraude au faux fournisseur et fraude au président',
        definition:
          'Deux fraudes par ingénierie sociale qui ciblent les décaissements : le faux fournisseur annonce un changement de RIB (e-mail usurpé) pour détourner le paiement ; la fraude au président fait émaner d\u2019un dirigeant usurpé un ordre de virement urgent et confidentiel. Parade commune : contre-vérification de tout changement de coordonnées bancaires par un canal indépendant (appel au numéro connu).',
      },
      {
        term: 'Séparation des tâches',
        definition:
          'Principe de contrôle interne : celui qui saisit la facture, celui qui valide le paiement et celui qui exécute le virement doivent être des personnes différentes. Son absence — un même acteur qui signe, saisit et contrôle — est la faille qui rend erreurs et détournements possibles.',
      },
    ],
    keyPoints: [
      'La population avant l\u2019échantillon : sans population exhaustive, chiffrée en nombre et en valeur, aucune sélection ni aucune conclusion n\u2019a de sens.',
      'Seuil et aléatoire se combinent : les paiements élevés sont sélectionnés obligatoirement (risque monétaire), le reste par tirage aléatoire documenté (représentativité) — car les contournements se cachent sous le seuil.',
      'L\u2019échantillon se documente comme une preuve : méthode, source, liste, date, visa — il doit être reproductible par un tiers et justifiable devant le responsable.',
      'La délégation protège l\u2019entreprise : un paiement au-delà du plafond du signataire est une exception, même sans perte démontrée — le contrôle est binaire.',
      'Le plafond est inclus : un paiement d\u2019un montant exactement égal au plafond est régulier ; confondre « au plafond » et « hors plafond » est l\u2019erreur classique du contrôleur débutant.',
      'Le fractionnement est une violation déguisée : le plafond s\u2019apprécie aussi au cumul des règlements adressés à un même bénéficiaire le même jour.',
      'Le bon à payer matérialise la décision : sans BAP signé par une personne habilitée, le paiement ne devrait jamais partir — son absence est une exception en soi.',
      'Le three-way match prouve la justification : on paie ce qui a été commandé et réellement reçu ; l\u2019IBAN vérifié au fichier fournisseurs prouve qu\u2019on le paie au bon bénéficiaire.',
      'Tout changement de RIB se contre-vérifie par un canal indépendant : c\u2019est la parade n°1 contre la fraude au faux fournisseur et la fraude au président.',
      'Le taux d\u2019exception oriente la conclusion : exceptions isolées et cause systémique ne se traitent pas de la même façon ; au-delà d\u2019un seuil raisonnable, on étend l\u2019échantillon avant de conclure sur le processus.',
    ],
  },

  objectives: {
    why:
      'Parce que le décaissement est le seul moment où la comptabilité se transforme de façon irréversible en argent parti. Une facture mal enregistrée se corrige par une écriture ; un paiement indu, un doublon ou un virement frauduleux doit être récupéré auprès d\u2019un tiers — quand il peut l\u2019être. Les décaissements concentrent donc le risque de perte directe : paiement non autorisé, paiement sans livraison justifiée, paiement en double, paiement vers un compte détourné. Le contrôle par échantillonnage (environ cinquante paiements par mois dans ce scénario) permet de tester en profondeur les quatre verrous du processus — l\u2019autorisation (délégation), la décision (bon à payer), la justification (facture / commande / réception) et l\u2019exactitude du bénéficiaire (IBAN) — puis de conclure sur la fiabilité du dispositif. C\u2019est aussi la mission où l\u2019on apprend à conclure : une anomalie n\u2019est pas une opinion, c\u2019est un fait documenté, qualifié, chiffré, avec une incidence et une recommandation.',
    infoSought: [
      'La population mensuelle des décaissements : nombre, montant total, exhaustivité rapprochée des relevés bancaires',
      'La méthode de sélection et sa documentation : seuil, tirage aléatoire, liste, couverture en nombre et en valeur',
      'La conformité des paiements testés à la matrice des délégations : plafonds, cumuls, fractionnements',
      'L\u2019existence et la complétude des bons à payer sur les paiements testés',
      'La concordance facture / commande / réception (quantités, prix) et les écarts chiffrés',
      'L\u2019exactitude du bénéficiaire et de l\u2019IBAN au moment du paiement',
      'Les doublons, paiements indu et avoirs non imputés, avec les montants à récupérer',
    ],
    risksCovered: [
      'Risque de paiement non autorisé : signature hors délégation, absence de suppléance, contournement par fractionnement',
      'Risque de paiement sans justification : facture sans commande ou sans réception constatée',
      'Risque de double paiement : même dette réglée deux fois sous des références différentes',
      'Risque de paiement indu : avoir postérieur non déduit, avance non consommée, trop-perçu',
      'Risque de fraude externe : faux fournisseur, changement de RIB usurpé, fraude au président',
      'Risque de confusion des tâches : le même acteur qui saisit, signe et contrôle le paiement',
      'Risque de conclusion hâtive : anomalies non qualifiées (isolées ou systémiques), échantillon non représentatif',
      'Risque de perte de traçabilité : exceptions non documentées, récupérations non suivies, piste d\u2019audit rompue',
    ],
  },

  preparation: {
    documents: [
      'Journal des décaissements du mois (extraction ERP) : n° de paiement, date, bénéficiaire, facture, montant, signataire, statut de validation',
      'Matrice des délégations en vigueur, datée et signée : signataires, plafonds, règles de cumul, date d\u2019effet',
      'Procédure d\u2019achat et de paiement fournisseurs : circuit commande, réception, facture, bon à payer, virement',
      'Spécimens de signature et habilitations des signataires',
      'Fichier fournisseurs : RIB enregistrés, contacts connus, dates d\u2019entrée en relation',
      'Bons de commande et bons de réception du mois (ERP achats)',
      'Factures fournisseurs réglées et en instance, avec les avoirs reçus',
      'Relevés bancaires du mois, pour contrôler l\u2019exhaustivité de la population (lien avec la mission 3)',
      'Historique des anomalies de paiement des mois précédents et leur suivi',
      'Seuils et consignes d\u2019échantillonnage du service (politique interne de sélection)',
      'Modèles de feuille de sélection et de fiche d\u2019exception',
    ],
    questionsToAsk: [
      'Combien de décaissements par mois, pour quel montant total, et depuis quelle extraction (journal, ERP, relevés) ?',
      'Où se trouve la matrice des délégations à jour, et quelles règles de cumul prévoit-elle (par paiement, par jour, par bénéficiaire) ?',
      'Le workflow bloque-t-il les paiements hors délégation, ou se contente-t-il d\u2019une alerte à l\u2019écran ?',
      'Qui émet et qui signe le bon à payer, et à quel moment précis du circuit ?',
      'Les changements de RIB fournisseurs suivent-ils une contre-vérification systématique ?',
      'Quel taux d\u2019exception déclenche une extension d\u2019échantillon ou une escalade ?',
      'Comment les exceptions sont-elles suivies : recueil, responsable, délai de traitement, récupérations ?',
    ],
    precautions: [
      'Vérifier l\u2019exhaustivité de la population avant tout tirage : rapprocher le journal des décaissements des relevés bancaires du mois (mission 3).',
      'Ne jamais conclure à une anomalie sans confirmation : un « doublon » apparent peut recouvrir deux prestations distinctes — lettrer et confirmer avant d\u2019écrire.',
      'Ne pas modifier les documents sources : travailler sur copies et référencer chaque pièce dans la fiche d\u2019exception.',
      'Rester factuel sur les suspicions de fraude : un IBAN différent n\u2019est pas une accusation — contre-vérifier par un canal indépendant avant toute escalade.',
      'Documenter la sélection comme une preuve : méthode, source, liste, date — elle doit être reproductible par un tiers.',
      'Chiffrer chaque incidence avant de la remonter : une exception sans montant ni portée ne peut être ni hiérarchisée ni suivie.',
    ],
  },

  method: [
    {
      title: 'Définir la population des décaissements du mois',
      description:
        'Extraire du journal des paiements tous les décaissements de la période (environ cinquante par mois dans le scénario), vérifier l\u2019exhaustivité par rapprochement avec les relevés bancaires, puis chiffrer la population en nombre et en valeur.',
      why:
        'Un échantillon n\u2019a de sens que rapporté à une population exhaustive : une population incomplète fausse la sélection comme la conclusion.',
    },
    {
      title: 'Comprendre le processus et la matrice des délégations avant de tester',
      description:
        'Lire la procédure de paiement (circuit commande, réception, facture, bon à payer, virement), recueillir la matrice des délégations en vigueur (signataires, plafonds, règles de cumul) et repérer les points de contrôle du workflow.',
      why:
        'On ne contrôle bien que ce que l\u2019on comprend : sans la matrice et le circuit, un paiement « validé » ne veut rien dire.',
    },
    {
      title: 'Choisir la méthode d\u2019échantillonnage',
      description:
        'Arrêter la règle de sélection : tout paiement supérieur au seuil (par exemple 10 000 €) est sélectionné obligatoirement ; le reste alimente un tirage aléatoire documenté ; au besoin, ciblage complémentaire (fournisseurs nouveaux, changements de RIB, montants répétés).',
      why:
        'La sélection à seuil capte le risque monétaire, l\u2019aléatoire la représentativité : l\u2019une sans l\u2019autre laisse un angle mort.',
    },
    {
      title: 'Documenter et tracer la sélection',
      description:
        'Consigner la méthode, la source, la date, la liste des numéros tirés et les effectifs (population, sélectionnés, couverture en nombre et en valeur) ; faire viser la feuille de sélection avant de commencer les contrôles.',
      why:
        'Une sélection non documentée est indéfendable : elle doit être reproductible par un tiers et justifiable devant le responsable comme devant un auditeur.',
    },
    {
      title: 'Vérifier l\u2019autorisation de chaque paiement sélectionné',
      description:
        'Pour chaque paiement de l\u2019échantillon, retrouver qui a autorisé (signataire), sur quelle pièce (bon à payer signé), et vérifier que l\u2019habilitation était en vigueur à la date du paiement.',
      why:
        'Le premier verrou du décaissement est l\u2019autorisation : un paiement sans autorisation formelle est une exception, quel que soit son montant.',
    },
    {
      title: 'Contrôler la conformité aux délégations',
      description:
        'Confronter montant et signataire à la matrice : plafond respecté (plafond inclus), absence de contournement par fractionnement (cumul des règlements à un même bénéficiaire le même jour), cohérence avec la fonction du signataire.',
      why:
        'La délégation est le garde-fou contre les engagements excessifs : la contrôler, c\u2019est tester l\u2019existence même du contrôle interne des paiements.',
    },
    {
      title: 'Vérifier le bon à payer',
      description:
        'S\u2019assurer de l\u2019existence du bon à payer pour chaque paiement testé, de sa signature par une personne habilitée, de la complétude du dossier joint (facture, commande, bon de réception) et de la concordance des montants.',
      why:
        'Le bon à payer est la trace matérielle de la décision de payer : son absence ou son incomplétude désigne un processus contourné.',
    },
    {
      title: 'Rapprocher facture, commande et réception',
      description:
        'Pour chaque dossier, contrôler le three-way match : quantités et prix facturés contre la commande, quantités contre le bon de réception signé ; chiffrer tout écart (surfacturation, écart de prix, livraison partielle facturée en totalité).',
      why:
        'Ce rapprochement prouve que l\u2019entreprise paie ce qu\u2019elle a commandé et réellement reçu — c\u2019est le cœur de la justification du décaissement.',
    },
    {
      title: 'Contrôler le bénéficiaire et l\u2019IBAN',
      description:
        'Comparer l\u2019IBAN du paiement au RIB enregistré au fichier fournisseurs ; pour tout changement de coordonnées, exiger la contre-vérification par un canal indépendant (appel au numéro connu du dossier) avant toute mise à jour.',
      why:
        'C\u2019est la parade n°1 contre la fraude au faux fournisseur : le paiement le mieux justifié devient une perte s\u2019il part sur un compte détourné.',
    },
    {
      title: 'Rechercher les doublons et les paiements indu',
      description:
        'Passer l\u2019échantillon — et idéalement la population entière — au crible des critères combinés : même bénéficiaire, même montant, dates rapprochées, libellés identiques malgré des références distinctes ; rapprocher les avoirs reçus des factures réglées.',
      why:
        'Doublons et indus ne se voient pas à la pièce : ils se détectent par recoupement — et chaque euro trouvé est un euro récupérable.',
    },
    {
      title: 'Qualifier et documenter chaque exception',
      description:
        'Pour chaque anomalie : consigner le fait (références, montants), la preuve (pièces, copies), la cause probable, l\u2019incidence chiffrée et le traitement attendu (avoir à réclamer, remboursement, correction du processus).',
      why:
        'Une exception non documentée n\u2019existe pas pour le rapport : la qualité du dossier fait la force de la conclusion.',
    },
    {
      title: 'Évaluer le caractère systémique et décider de l\u2019extension',
      description:
        'Calculer le taux d\u2019exception ; au-delà d\u2019un seuil raisonnable (quelques pourcents), suspecter une cause systémique, interroger le dispositif (workflow bloquant ou non, séparation des tâches) et étendre l\u2019échantillon sur une période ou un segment complémentaire avant de conclure.',
      why:
        'Exception isolée et cause systémique n\u2019ouvrent pas la même conclusion : confondre les deux ruine la valeur du contrôle.',
    },
    {
      title: 'Formuler les recommandations et le plan d\u2019action',
      description:
        'Traduire les causes en recommandations hiérarchisées — workflow bloquant au-delà du plafond, cumul anti-fractionnement, procédure de changement de RIB contre-vérifiée, détection automatique des doublons, suppléance des signataires — chacune avec un responsable désigné et un délai.',
      why:
        'Le contrôle des décaissements n\u2019a de valeur que s\u2019il change le dispositif : une recommandation sans responsable ni délai reste un vœu.',
    },
    {
      title: 'Conclure sur la fiabilité du processus et archiver',
      description:
        'Rédiger la conclusion en s\u2019appuyant sur les taux, les causes qualifiées et les contrôles croisés ; distinguer « aucune anomalie détectée dans le périmètre testé » d\u2019une opinion sur l\u2019ensemble ; archiver sélection, exceptions, confirmations et suivi des récupérations.',
      why:
        'La conclusion est l\u2019aboutissement : mesurée, documentée, traçable — elle doit tenir devant le responsable, l\u2019auditeur et le temps.',
    },
  ],

  exercises: [
    {
      id: 'renault-ex-4-1',
      title: 'Exercice 1 · Population et échantillon : les cinquante paiements de juillet',
      cycle: 'Décaissements',
      context:
        'Premier geste du contrôle : la population. Le journal des paiements de juillet 2025 (données fictives) recense les cinquante décaissements du mois — c\u2019est la population à contrôler. La consigne du service : tout paiement supérieur à 10 000 € est sélectionné obligatoirement, le reste l\u2019est par tirage aléatoire documenté. Avant de tirer quoi que ce soit, je dois connaître ma population : combien de paiements, pour quel total, combien dépassent le seuil. Tous les montants sont en euros.',
      documents: [
        {
          kind: 'text',
          name: 'Note de consigne — sélection des paiements à contrôler (document fictif)',
          content:
            'Service audit comptable — consigne de mission\n\n1. Population : l\u2019intégralité des décaissements du mois, extraite du journal des paiements et rapprochée des relevés bancaires.\n2. Sélection obligatoire : tout paiement supérieur à 10 000 €.\n3. Complément : tirage aléatoire documenté sur les paiements restants.\n4. La feuille de sélection (méthode, source, liste, effectifs) est datée et visée avant le début des contrôles.\n\n(Personnages et montants fictifs)',
          note: 'Document fictif à but pédagogique.',
        },
        {
          kind: 'table',
          name: 'Journal des paiements — population de juillet 2025, 50 décaissements (document fictif)',
          columns: ['N°', 'Date', 'Bénéficiaire', 'Facture', 'Montant (€)', 'Signataire', 'Statut validation'],
          rows: [
            ['PA-701', '01/07/2025', 'Sogex Énergie', 'FA-2025-1101', 4175, 'A. Vasseur', 'Validé'],
            ['PA-702', '01/07/2025', 'Prestance Propreté', 'FA-2025-1102', 2300, 'A. Vasseur', 'Validé'],
            ['PA-703', '02/07/2025', 'Métalux', 'FA-2025-1103', 62400, 'H. Marchal', 'Validé'],
            ['PA-704', '02/07/2025', 'Bordelet Emballages', 'FA-2025-1104', 9430, 'M. Delaunay', 'Validé'],
            ['PA-705', '02/07/2025', 'Altisia Intérim', 'FA-2025-1105', 12400, 'M. Delaunay', 'Validé'],
            ['PA-706', '03/07/2025', 'Novaxis IT', 'FA-2025-1106', 8640, 'M. Delaunay', 'Validé'],
            ['PA-707', '03/07/2025', 'Clairval Services', 'FA-2025-1107', 890, 'A. Vasseur', 'Validé'],
            ['PA-708', '03/07/2025', 'Orcom', 'FA-2025-1108', 38200, 'S. Boyer', 'Validé'],
            ['PA-709', '04/07/2025', 'Transgault Transport', 'FA-2025-1109', 5120, 'A. Vasseur', 'Validé'],
            ['PA-710', '04/07/2025', 'Gunnar', 'FA-2025-1110', 15750, 'M. Delaunay', 'Validé'],
            ['PA-711', '07/07/2025', 'Ferrotool Maintenance', 'FA-2025-1111', 6400, 'A. Vasseur', 'Validé'],
            ['PA-712', '07/07/2025', 'Métalux', 'FA-2025-1112', 31500, 'S. Boyer', 'Validé'],
            ['PA-713', '07/07/2025', 'Kallista', 'FA-2025-1113', 9120, 'M. Delaunay', 'En attente'],
            ['PA-714', '08/07/2025', 'Cabinet Vernal', 'FA-2025-1114', 145000, 'C. Aubril', 'Validé'],
            ['PA-715', '08/07/2025', 'Aldenum Logistique', 'FA-2025-1115', 22400, 'S. Boyer', 'Validé'],
            ['PA-716', '08/07/2025', 'Sogex Énergie', 'FA-2025-1116', 3780, 'A. Vasseur', 'Validé'],
            ['PA-717', '09/07/2025', 'Verti', 'FA-2025-1117', 10250, 'M. Delaunay', 'Validé'],
            ['PA-718', '09/07/2025', 'Prestance Propreté', 'FA-2025-1118', 1950, 'A. Vasseur', 'Validé'],
            ['PA-719', '09/07/2025', 'Orcom', 'FA-2025-1119', 45000, 'S. Boyer', 'Validé'],
            ['PA-720', '10/07/2025', 'Bordelet Emballages', 'FA-2025-1120', 4620, 'A. Vasseur', 'Validé'],
            ['PA-721', '10/07/2025', 'Altisia Intérim', 'FA-2025-1121', 11230, 'M. Delaunay', 'Validé'],
            ['PA-722', '10/07/2025', 'Transgault Transport', 'FA-2025-1122', 7830, 'A. Vasseur', 'Validé'],
            ['PA-723', '11/07/2025', 'Gunnar', 'FA-2025-1123', 27800, 'S. Boyer', 'Validé'],
            ['PA-724', '11/07/2025', 'Novaxis IT', 'FA-2025-1124', 9850, 'M. Delaunay', 'Validé'],
            ['PA-725', '11/07/2025', 'Métalux', 'FA-2025-1125', 85000, 'H. Marchal', 'Validé'],
            ['PA-726', '15/07/2025', 'Clairval Services', 'FA-2025-1126', 1245, 'A. Vasseur', 'Validé'],
            ['PA-727', '15/07/2025', 'Ferrotool Maintenance', 'FA-2025-1127', 18900, 'M. Delaunay', 'Validé'],
            ['PA-728', '15/07/2025', 'Verti', 'FA-2025-1128', 720, 'A. Vasseur', 'Validé'],
            ['PA-729', '15/07/2025', 'Aldenum Logistique', 'FA-2025-1129', 14600, 'M. Delaunay', 'Validé'],
            ['PA-730', '15/07/2025', 'Sogex Énergie', 'FA-2025-1130', 5310, 'A. Vasseur', 'Validé'],
            ['PA-731', '15/07/2025', 'Kallista', 'FA-2025-1131', 187500, 'C. Aubril', 'Validé'],
            ['PA-732', '16/07/2025', 'Cabinet Vernal', 'FA-2025-1132', 24600, 'S. Boyer', 'Validé'],
            ['PA-733', '16/07/2025', 'Prestance Propreté', 'FA-2025-1133', 2875, 'A. Vasseur', 'En attente'],
            ['PA-734', '16/07/2025', 'Orcom', 'FA-2025-1134', 108500, 'H. Marchal', 'Validé'],
            ['PA-735', '17/07/2025', 'Transgault Transport', 'FA-2025-1135', 3460, 'A. Vasseur', 'Validé'],
            ['PA-736', '17/07/2025', 'Altisia Intérim', 'FA-2025-1136', 16800, 'M. Delaunay', 'Validé'],
            ['PA-737', '17/07/2025', 'Gunnar', 'FA-2025-1137', 4905, 'A. Vasseur', 'Validé'],
            ['PA-738', '18/07/2025', 'Bordelet Emballages', 'FA-2025-1138', 3050, 'A. Vasseur', 'Validé'],
            ['PA-739', '18/07/2025', 'Novaxis IT', 'FA-2025-1139', 42750, 'S. Boyer', 'En attente'],
            ['PA-740', '21/07/2025', 'Métalux', 'FA-2025-1140', 940, 'A. Vasseur', 'Validé'],
            ['PA-741', '21/07/2025', 'Verti', 'FA-2025-1141', 13350, 'M. Delaunay', 'Validé'],
            ['PA-742', '21/07/2025', 'Ferrotool Maintenance', 'FA-2025-1142', 2240, 'A. Vasseur', 'Validé'],
            ['PA-743', '22/07/2025', 'Clairval Services', 'FA-2025-1143', 1530, 'A. Vasseur', 'En attente'],
            ['PA-744', '22/07/2025', 'Aldenum Logistique', 'FA-2025-1144', 2410, 'A. Vasseur', 'Validé'],
            ['PA-745', '22/07/2025', 'Kallista', 'FA-2025-1145', 3690, 'A. Vasseur', 'Validé'],
            ['PA-746', '23/07/2025', 'Sogex Énergie', 'FA-2025-1146', 7250, 'A. Vasseur', 'Validé'],
            ['PA-747', '23/07/2025', 'Cabinet Vernal', 'FA-2025-1147', 5980, 'A. Vasseur', 'Validé'],
            ['PA-748', '23/07/2025', 'Transgault Transport', 'FA-2025-1148', 860, 'A. Vasseur', 'Validé'],
            ['PA-749', '24/07/2025', 'Prestance Propreté', 'FA-2025-1149', 1120, 'A. Vasseur', 'Validé'],
            ['PA-750', '24/07/2025', 'Gunnar', 'FA-2025-1150', 640, 'A. Vasseur', 'Validé'],
          ],
          note:
            'Le statut « Validé » matérialise l\u2019enregistrement de la validation au workflow ; « En attente » signale un dossier de validation incomplet à la date d\u2019extraction. Le comptage et le total portent sur l\u2019ensemble des cinquante lignes. Document fictif à but pédagogique.',
        },
      ],
      questions: [
        {
          id: 'rn4-e1-q1',
          question:
            'Combien de paiements de la population de juillet dépassent strictement 10 000 € — donc relèvent de la sélection obligatoire ?',
          type: 'numeric',
          expected: 20,
          explanation:
            'Vingt paiements sont strictement supérieurs à 10 000 € : de 10 250 € (PA-717) à 187 500 € (PA-731). Ils totalisent 933 930,00 €, soit 88,4 % de la valeur de la population : la sélection obligatoire capte l\u2019essentiel du risque monétaire.',
        },
        {
          id: 'rn4-e1-q2',
          question: 'Quel est le montant total de la population (les cinquante paiements de juillet), en euros ?',
          type: 'numeric',
          expected: 1056260,
          explanation:
            'Total de la population : 1 056 260,00 €. Contrôle d\u2019ensemble : 20 paiements supérieurs à 10 000 € pour 933 930,00 € + 30 paiements inférieurs ou égaux au seuil pour 122 330,00 € = 1 056 260,00 €. Dans ce cas, je recalcule ce total une seconde fois par cumul progressif avant de l\u2019utiliser : une erreur d\u2019exhaustivité invaliderait la sélection et la couverture en valeur.',
        },
        {
          id: 'rn4-e1-q3',
          question: 'Quelle méthode d\u2019échantillonnage est la mieux adaptée pour ce contrôle ?',
          type: 'mcq',
          options: [
            'Un tirage aléatoire simple de quinze paiements parmi les cinquante, sans critère de montant',
            'La sélection obligatoire de tous les paiements supérieurs à 10 000 €, complétée par un tirage aléatoire documenté sur les paiements restants',
            'La sélection des quinze paiements les plus élevés du mois, sans contrôle des autres',
            'La sélection des paiements intervenus la dernière semaine du mois',
          ],
          expected: '1',
          explanation:
            'La sélection à seuil couvre le risque monétaire : les vingt paiements au-dessus de 10 000 € totalisent 933 930,00 €, soit 88,4 % de la valeur — les contrôler tous est obligatoire. Mais les contournements (fractionnement en plusieurs paiements sous le seuil) et les petites fraudes se logent aussi dans les montants modestes : le tirage aléatoire documenté sur les trente paiements restants préserve la représentativité. Les montants seuls (option 2) donnent un échantillon biaisé, la dernière semaine (option 3) n\u2019a aucune base de risque, et l\u2019aléatoire seul (option 0) peut rater l\u2019essentiel de la valeur.',
        },
        {
          id: 'rn4-e1-q4',
          question:
            'Un tirage aléatoire simple, sans sélection préalable des paiements élevés, suffit à couvrir le risque des décaissements.',
          type: 'truefalse',
          options: ['Vrai', 'Faux'],
          expected: '1',
          explanation:
            'Faux : avec vingt paiements au-dessus de 10 000 € — dont deux au-delà de 145 000 € — un tirage aveugle ne garantit pas de les capter, et 88,4 % de la valeur de la population peut ainsi échapper au contrôle. L\u2019aléatoire assure la représentativité, la sélection à seuil assure la couverture monétaire : les deux se complètent, aucun ne suffit seul.',
        },
        {
          id: 'rn4-e1-q5',
          question:
            'Documentez votre sélection : quelle population, quel seuil, quel tirage, et quels éléments tracez-vous pour que la sélection soit justifiable et reproductible ? Rédigez une réponse structurée.',
          type: 'open',
          keywords: [
            'population',
            'seuil',
            'aléatoire',
            'documenter',
            'traçabilité',
            'représentativité',
            'justifier',
            'méthode',
          ],
          explanation:
            'Démarche attendue : (1) définir la population — les cinquante décaissements de juillet, 1 056 260,00 €, extraits du journal des paiements et rapprochés des relevés bancaires pour l\u2019exhaustivité ; (2) appliquer le seuil — tout paiement supérieur à 10 000 € est sélectionné obligatoirement (vingt paiements, 933 930,00 €, 88,4 % de la valeur) ; (3) compléter par un tirage aléatoire documenté sur les trente paiements restants (source, méthode — par exemple tirage systématique ou table de nombres aléatoires — et liste des numéros tirés) ; (4) tracer la sélection : feuille datée et visée indiquant méthode, source, liste, effectifs et couverture en nombre et en valeur. Dans ce cas, je veillerais à ce qu\u2019un tiers puisse reproduire la sélection à l\u2019identique et à ce que la méthode soit justifiable devant le responsable : une sélection non documentée serait attaquable, et la conclusion avec elle.',
        },
      ],
      risks: [
        'Population incomplète ou non chiffrée avant le tirage',
        'Sélection non documentée : échantillon non reproductible',
        'Tirage aléatoire seul : le risque monétaire n\u2019est pas couvert',
      ],
      solutionSummary:
        'La population de juillet compte 50 paiements pour 1 056 260,00 €. Vingt paiements dépassent strictement 10 000 € — de 10 250 € à 187 500 € — et totalisent 933 930,00 €, soit 88,4 % de la valeur : sélection obligatoire. Les trente paiements restants (122 330,00 €) alimentent le tirage aléatoire documenté. La méthode couple ainsi couverture monétaire (le seuil capte l\u2019essentiel du risque de perte) et représentativité (l\u2019aléatoire attrape les contournements sous le seuil, comme les fractionnements). Observation bonus de fin de contrôle : quatre paiements restent au statut « En attente » (dossiers de validation incomplets) — signal à explorer pour la complétude des bons à payer. Réflexe professionnel à retenir : chiffrer la population avant de la sélectionner, documenter la sélection pour qu\u2019un tiers puisse la reproduire. En entretien, énoncer population, seuil, tirage puis documentation dans cet ordre suffit à démontrer la méthode.',
      interviewTips: [
        'Annoncer les chiffres de population avant la méthode (« 50 paiements, 1 056 260 €, dont 20 au-dessus du seuil ») : le chiffrage d\u2019abord crédibilise.',
        'Justifier le seuil par la valeur couverte (88,4 %) : cela montre qu\u2019on sélectionne par le risque, pas par commodité.',
        'Citer la reproductibilité de la sélection (liste, date, visa) : c\u2019est le détail final que le recruteur attend et que les candidats oublient.',
      ],
    },

    {
      id: 'renault-ex-4-2',
      title: 'Exercice 2 · Matrice de délégations : quatre violations sur quinze',
      cycle: 'Décaissements',
      context:
        'Deuxième geste : le contrôle des délégations, sur l\u2019échantillon d\u2019août (données fictives). L\u2019échantillon combine les neuf paiements supérieurs à 10 000 € et un tirage aléatoire de six paiements pris dans le reste du mois — quinze au total, pour 378 750,00 €. Chaque paiement a été validé au workflow puis décaissé ; je confronte maintenant signataire et montant à la matrice des délégations. Règles de la matrice : le plafond est inclus (un paiement d\u2019un montant exactement égal au plafond est régulier) et il s\u2019apprécie aussi au cumul des règlements adressés à un même bénéficiaire le même jour.',
      documents: [
        {
          kind: 'table',
          name: 'Matrice des délégations de signature — paiements fournisseurs (document fictif)',
          columns: ['Signataire', 'Fonction', 'Plafond par paiement (€)'],
          rows: [
            ['A. Vasseur', 'Comptable fournisseurs', 8000],
            ['M. Delaunay', 'Responsable comptabilité fournisseurs', 20000],
            ['S. Boyer', 'Directrice administrative et financière adjointe', 50000],
            ['H. Marchal', 'Directeur administratif et financier', 120000],
            ['C. Aubril', 'Directrice générale', 200000],
          ],
          note:
            'Délégations en vigueur au 1er janvier 2025, revues annuellement, signées du directeur administratif et financier. Le plafond s\u2019entend inclus (un paiement d\u2019un montant égal au plafond est régulier) et s\u2019apprécie également au cumul des règlements adressés à un même bénéficiaire le même jour — la lutte contre le fractionnement fait partie du dispositif. Document fictif à but pédagogique.',
        },
        {
          kind: 'table',
          name: 'Journal des paiements d\u2019août 2025 — échantillon de quinze paiements contrôlés (document fictif)',
          columns: ['N°', 'Date', 'Bénéficiaire', 'Facture', 'Objet', 'Montant (€)', 'Signataire', 'Statut'],
          rows: [
            ['PA-801', '01/08/2025', 'Sogex Énergie', 'FA-2025-2101', 'Facture d\u2019énergie — juillet', 7250, 'A. Vasseur', 'Validé'],
            ['PA-802', '04/08/2025', 'Métalux', 'FA-2025-2104', 'Acier embouti — livraison du 28/07', 31500, 'S. Boyer', 'Validé'],
            ['PA-803', '04/08/2025', 'Verti', 'FA-2025-2105', 'Outillage spécifique série V', 50000, 'S. Boyer', 'Validé'],
            ['PA-804', '05/08/2025', 'Altisia Intérim', 'FA-2025-2106', 'Intérim production — juillet', 12400, 'M. Delaunay', 'Validé'],
            ['PA-805', '05/08/2025', 'Orcom', 'FA-2025-2107', 'Composants — commande C-2025-447', 19850, 'M. Delaunay', 'Validé'],
            ['PA-806', '05/08/2025', 'Ferrotool Maintenance', 'FA-2025-2108', 'Révision ligne d\u2019emboutissage', 34500, 'A. Vasseur', 'Validé'],
            ['PA-807', '08/08/2025', 'Aldenum Logistique', 'FA-2025-2110', 'Prestations logistiques — juillet', 9120, 'M. Delaunay', 'Validé'],
            ['PA-808', '08/08/2025', 'Bordelet Emballages', 'FA-2025-2111', 'Emballages série Z', 4620, 'A. Vasseur', 'Validé'],
            ['PA-809', '11/08/2025', 'Cabinet Vernal', 'FA-2025-2113', 'Conseil organisation — tranche 2', 96000, 'H. Marchal', 'Validé'],
            ['PA-810', '12/08/2025', 'Transgault Transport', 'FA-2025-2114', 'Affrètements — août', 16800, 'M. Delaunay', 'Validé'],
            ['PA-811', '12/08/2025', 'Prestance Propreté', 'FA-2025-2115', 'Nettoyage des sites — juillet', 4900, 'A. Vasseur', 'Validé'],
            ['PA-812', '12/08/2025', 'Prestance Propreté', 'FA-2025-2116', 'Nettoyage des sites — juillet', 4900, 'A. Vasseur', 'Validé'],
            ['PA-813', '14/08/2025', 'Gunnar', 'FA-2025-2118', 'Pièces détachées', 2300, 'A. Vasseur', 'Validé'],
            ['PA-814', '14/08/2025', 'Kallista', 'FA-2025-2119', 'Étude de compatibilité — acompte', 64200, 'H. Marchal', 'Validé'],
            ['PA-815', '19/08/2025', 'Novaxis IT', 'FA-2025-2121', 'Licences et maintenance — T3', 20410, 'M. Delaunay', 'Validé'],
          ],
          note:
            'Les paiements PA-811 et PA-812 correspondent à deux factures distinctes (FA-2025-2115 et FA-2025-2116) reçues le même jour pour le même objet. Tous les paiements de cet extrait ont été décaissés. Document fictif à but pédagogique.',
        },
      ],
      questions: [
        {
          id: 'rn4-e2-q1',
          question:
            'Combien de paiements de cet échantillon violent la matrice des délégations (dépassements et fractionnements compris) ?',
          type: 'numeric',
          expected: 4,
          explanation:
            'Quatre paiements sur quinze violent la délégation : PA-806, PA-811, PA-812 et PA-815. Ce sont quatre paiements pour trois schémas distincts — un dépassement manifeste, un fractionnement en deux règlements et un dépassement de faible montant. Le taux d\u2019exception qui en résulte (4 ÷ 15, soit 26,7 %) est traité à l\u2019exercice 5.',
        },
        {
          id: 'rn4-e2-q2',
          question: 'Sélectionner les paiements qui violent la matrice des délégations.',
          type: 'multi',
          options: [
            'PA-801 — 01/08 — Sogex Énergie — 7 250,00 € — signé A. Vasseur',
            'PA-802 — 04/08 — Métalux — 31 500,00 € — signé S. Boyer',
            'PA-803 — 04/08 — Verti — 50 000,00 € — signé S. Boyer',
            'PA-804 — 05/08 — Altisia Intérim — 12 400,00 € — signé M. Delaunay',
            'PA-805 — 05/08 — Orcom — 19 850,00 € — signé M. Delaunay',
            'PA-806 — 05/08 — Ferrotool Maintenance — 34 500,00 € — signé A. Vasseur',
            'PA-807 — 08/08 — Aldenum Logistique — 9 120,00 € — signé M. Delaunay',
            'PA-808 — 08/08 — Bordelet Emballages — 4 620,00 € — signé A. Vasseur',
            'PA-809 — 11/08 — Cabinet Vernal — 96 000,00 € — signé H. Marchal',
            'PA-810 — 12/08 — Transgault Transport — 16 800,00 € — signé M. Delaunay',
            'PA-811 — 12/08 — Prestance Propreté — 4 900,00 € — signé A. Vasseur',
            'PA-812 — 12/08 — Prestance Propreté — 4 900,00 € — signé A. Vasseur',
            'PA-813 — 14/08 — Gunnar — 2 300,00 € — signé A. Vasseur',
            'PA-814 — 14/08 — Kallista — 64 200,00 € — signé H. Marchal',
            'PA-815 — 19/08 — Novaxis IT — 20 410,00 € — signé M. Delaunay',
          ],
          expected: ['5', '10', '11', '14'],
          explanation:
            'Trois schémas, quatre paiements. PA-806 : 34 500,00 € signé par A. Vasseur, plafond 8 000 € — dépassement manifeste de 26 500,00 €. PA-811 et PA-812 : deux règlements de 4 900,00 € le même jour au même bénéficiaire, chacun sous le plafond de 8 000 € pris isolément, mais le cumul de 9 800,00 € dépasse le plafond du signataire — c\u2019est un fractionnement, violation à part entière. PA-815 : 20 410,00 € signé par M. Delaunay, plafond 20 000 € — dépassement de 410,00 € seulement, le plus subtil. Pièges à ne pas cocher : PA-803 (50 000,00 € exactement au plafond de S. Boyer : régulier, le plafond est inclus) et PA-805 (19 850,00 €, sous le plafond). Tous les autres paiements respectent les plafonds de leurs signataires.',
        },
        {
          id: 'rn4-e2-q3',
          question: 'Le paiement PA-803 (50 000,00 € signé par S. Boyer) viole la délégation.',
          type: 'truefalse',
          options: ['Vrai', 'Faux'],
          expected: '1',
          explanation:
            'Faux : la matrice précise que le plafond s\u2019entend inclus — un paiement d\u2019un montant exactement égal au plafond est régulier. 50 000,00 € sous le plafond de 50 000 € de S. Boyer : le paiement est conforme. C\u2019est le piège symétrique du contrôle : refuser un paiement « au plafond » est aussi une erreur que l\u2019accepter « hors plafond » — dans les deux cas, on lit la matrice de travers.',
        },
        {
          id: 'rn4-e2-q4',
          question:
            'Que faire d\u2019une violation constatée ? Décrivez votre traitement complet, de la découverte de la violation PA-806 à la recommandation finale.',
          type: 'open',
          keywords: [
            'documenter',
            'exception',
            'cause',
            'escalader',
            'responsable',
            'étendre',
            'recommandation',
            'délai',
          ],
          explanation:
            'Démarche attendue : (1) documenter l\u2019exception — référence PA-806, montant 34 500,00 €, signataire et plafond, écart chiffré de 26 500,00 €, pièces à l\u2019appui (journal, matrice, écran de validation) ; (2) qualifier la cause en interrogeant le signataire et le service : erreur isolée, contournement délibéré, absence de contrôleur ? (3) escalader auprès du responsable hiérarchique du signataire — une violation de délégation ne se traite jamais en silence ; (4) mesurer l\u2019incidence : le paiement est parti, le fournisseur est-il légitime, la preuve de la prestation existe-t-elle ? le contrôle documentaire (three-way match) se renforce sur ce paiement ; (5) si une cause systémique est suspectée, étendre l\u2019échantillon ; (6) formuler une recommandation — workflow bloquant au-delà du plafond, alerte sur le cumul jour / bénéficiaire — avec un responsable désigné et un délai, puis suivre sa mise en œuvre. Dans ce cas, je ne classerais jamais la violation sans trace écrite : la règle de la délégation est binaire, et c\u2019est cette binarité qui protège l\u2019entreprise.',
        },
      ],
      risks: [
        'Paiements hors délégation non détectés (workflow non bloquant)',
        'Fractionnement sous le seuil pour contourner un plafond',
        'Réflexe inverse : confondre « au plafond » et « hors plafond »',
      ],
      solutionSummary:
        'Quatre paiements sur quinze violent la matrice : PA-806 (34 500,00 € signé A. Vasseur, plafond 8 000 € — dépassement manifeste de 26 500,00 €) ; PA-811 et PA-812 (deux règlements de 4 900,00 € le même jour au même bénéficiaire sous un plafond de 8 000 € : le cumul de 9 800,00 € constitue un fractionnement) ; PA-815 (20 410,00 € signé M. Delaunay, plafond 20 000 € — un dépassement de 410,00 € seulement, le plus subtil). Deux pièges à ne pas cocher : PA-803, exactement au plafond de S. Boyer (régulier, plafond inclus), et PA-805, sous le plafond. Détail qui compte : c\u2019est le tirage aléatoire qui a capté le fractionnement — preuve que la sélection à seuil seule ne suffit pas. Échantillon total : 378 750,00 € ; taux d\u2019exception : 4 ÷ 15 = 26,7 % (exercice 5 pour la conclusion). Le traitement d\u2019une violation : documenter, qualifier la cause, escalader, recommander avec responsable et délai — jamais classer sans suite.',
      interviewTips: [
        'Qualifier chaque violation en deux mots (dépassement / fractionnement) : le vocabulaire juste structure la réponse.',
        'Citer le piège du plafond inclus : cela montre que vous savez où le contrôle devient un piège pour le contrôleur lui-même.',
        'Rappeler que le fractionnement se détecte au cumul jour / bénéficiaire : c\u2019est la réponse attendue quand le recruteur demande « et sous le seuil ? ».',
      ],
    },

    {
      id: 'renault-ex-4-3',
      title: 'Exercice 3 · Rapprochement facture / commande / réception : trois dossiers',
      cycle: 'Achats-fournisseurs',
      context:
        'Troisième geste : le contrôle documentaire en profondeur (three-way match). Fin août, trois dossiers de paiement attendent l\u2019émission du bon à payer (données fictives) : Métalux (dossier A), Verti (dossier B) et Gunnar (dossier C). La table de suivi ERP donne les commandes et les réceptions ; les factures sont reproduites ci-dessous, avec — pour le dossier C — l\u2019e-mail reçu du « fournisseur ». Je dois contrôler chaque dossier avant d\u2019autoriser le paiement. Montants TTC en euros.',
      documents: [
        {
          kind: 'table',
          name: 'Suivi commandes et réceptions — extrait ERP achats (document fictif)',
          columns: ['Dossier', 'Commande', 'Fournisseur', 'Article', 'Qté commandée', 'Prix convenu (€)', 'Qté reçue (BR)', 'RIB enregistré (IBAN)'],
          rows: [
            ['A', 'C-2025-0412', 'Métalux', 'Tôle emboutie réf. TE-40', 200, 42.5, 180, 'FR76 3000 4000 0300 0102 7654 321'],
            ['B', 'C-2025-0418', 'Verti', 'Outillage réf. OV-12', 500, 18.9, 500, 'FR76 3000 4000 0300 0110 2456 987'],
            ['C', 'C-2025-0421', 'Gunnar', 'Pièces détachées réf. PD-77', 120, 64, 120, 'FR76 3000 4000 0300 0125 3478 210'],
          ],
          note:
            'BR : bon de réception. Le prix convenu est celui de la commande ferme ; le RIB enregistré est celui validé à l\u2019entrée en relation du fournisseur. Montants TTC. Document fictif à but pédagogique.',
        },
        {
          kind: 'text',
          name: 'Facture FA-2025-2201 — Métalux (document fictif)',
          content:
            'MÉTALUX — Zone industrielle des Forges (société fictive)\nFacture FA-2025-2201 · Date : 22/08/2025\nCommande de référence : C-2025-0412\n\nTôle emboutie réf. TE-40\nQuantité facturée : 200\nPrix unitaire facturé : 42,50 €\nMontant total TTC : 8 500,00 €\n\nConditions : règlement à 30 jours par virement.\n\n(Société, référence et montants fictifs)',
          note: 'Dossier A — en instance de mise en paiement, bon à payer à émettre. Document fictif à but pédagogique.',
        },
        {
          kind: 'text',
          name: 'Facture FA-2025-2234 — Verti (document fictif)',
          content:
            'VERTI — 14 rue de la Fontainerie (société fictive)\nFacture FA-2025-2234 · Date : 26/08/2025\nCommande de référence : C-2025-0418\n\nOutillage réf. OV-12\nQuantité facturée : 500\nPrix unitaire facturé : 19,90 €\nMontant total TTC : 9 950,00 €\n\nConditions : règlement à 30 jours.\n\n(Société, référence et montants fictifs)',
          note: 'Dossier B — en instance de mise en paiement, bon à payer à émettre. Document fictif à but pédagogique.',
        },
        {
          kind: 'text',
          name: 'Facture FA-2025-2258 — Gunnar et e-mail joint (document fictif)',
          content:
            'GUNNAR — Parc d\u2019activités des Chênes (société fictive)\nFacture FA-2025-2258 · Date : 29/08/2025\nCommande de référence : C-2025-0421\n\nPièces détachées réf. PD-77\nQuantité facturée : 120\nPrix unitaire facturé : 64,00 €\nMontant total TTC : 7 680,00 €\n\nCoordonnées bancaires pour règlement :\nIBAN FR76 3000 4000 0300 0999 8877 665\n\n——— E-mail reçu le même jour ———\n« Madame, Monsieur,\nNotre établissement bancaire a été modifié : merci de mettre à jour votre fichier et de régler la facture FA-2025-2258 sur notre nouveau compte sous cinq jours, notre trésorerie étant particulièrement tendue.\nService comptable clients — Gunnar »\n\n(Société, références, IBAN et montants fictifs)',
          note: 'Dossier C — en instance de mise en paiement, bon à payer à émettre. Document fictif à but pédagogique.',
        },
      ],
      questions: [
        {
          id: 'rn4-e3-q1',
          question: 'Dossier A (Métalux) — quelle anomalie ce dossier présente-t-il ?',
          type: 'mcq',
          options: [
            'La facture porte sur une commande inexistante dans l\u2019ERP',
            'La facture est établie sur les 200 unités commandées alors que le bon de réception n\u2019en constate que 180 : vingt unités sont facturées sans livraison constatée',
            'Le prix unitaire facturé dépasse le prix convenu',
            'L\u2019IBAN de règlement ne correspond pas au RIB enregistré',
          ],
          expected: '1',
          explanation:
            'La facture Métalux reprend la commande en tous points (prix et quantité) : 200 × 42,50 € = 8 500,00 €. Mais le bon de réception ne constate que 180 unités : le montant dû au prix convenu est de 180 × 42,50 € = 7 650,00 €. Vingt unités sont facturées sans livraison constatée — une surfacturation de 850,00 € que seul le rapprochement à trois documents révèle : le prix est exact, la commande est réelle, c\u2019est la réception qui manque.',
        },
        {
          id: 'rn4-e3-q2',
          question:
            'Chiffrer l\u2019écart du dossier A : montant facturé au-delà de ce qui est dû au prix convenu, en euros.',
          type: 'numeric',
          expected: 850,
          explanation:
            'Écart = (200 − 180) × 42,50 € = 20 × 42,50 € = 850,00 €. La facture de 8 500,00 € ne devrait porter que sur 7 650,00 € : 850,00 € sont réclamés sans réception correspondante. Dans ce cas, je demanderais un avoir de 850,00 € ou la livraison des vingt unités manquantes, et la mise en paiement serait ajustée à 7 650,00 € en attendant.',
        },
        {
          id: 'rn4-e3-q3',
          question: 'Dossier B (Verti) — quelle affirmation est exacte ?',
          type: 'mcq',
          options: [
            'La facture est conforme : quantités et prix correspondent au bon de commande',
            'Le prix unitaire facturé (19,90 €) dépasse le prix convenu (18,90 €) de 1,00 € par pièce, soit 500,00 € d\u2019écart total',
            'La réception constate davantage de pièces que la commande n\u2019en portait',
            'La facture ne référence aucune commande',
          ],
          expected: '1',
          explanation:
            'Quantités conformes (500 commandées, 500 reçues, 500 facturées), mais le prix facturé de 19,90 € dépasse le prix convenu de 18,90 € : la facture de 9 950,00 € excède le montant dû de 9 450,00 €, soit 500,00 € d\u2019écart de prix (1,00 € × 500 pièces). L\u2019écart d\u2019un euro par pièce est exactement le genre de subtilité que le three-way match existe pour attraper : le contrôle des quantités seul ne la détecterait pas.',
        },
        {
          id: 'rn4-e3-q4',
          question: 'Dossier C (Gunnar) — quels éléments doivent alerter avant tout paiement ?',
          type: 'multi',
          options: [
            'L\u2019IBAN indiqué sur la facture et dans l\u2019e-mail diffère du RIB enregistré dans le fichier fournisseurs',
            'Le montant total de la facture (7 680,00 €) correspond exactement à la commande et à la réception',
            'L\u2019e-mail demande une mise à jour du RIB et un règlement rapide (« sous cinq jours »)',
            'La quantité facturée (120) correspond à la fois à la commande et à la réception',
          ],
          expected: ['0', '2'],
          explanation:
            'Les éléments d\u2019alerte sont l\u2019IBAN différent du RIB enregistré et la demande de règlement rapide : changement de coordonnées bancaires plus pression d\u2019urgence — la signature classique de la fraude au faux fournisseur. Les deux autres options sont exactes mais rassurantes : le montant et les quantités concordent parfaitement, ce qui rend le dossier séduisant — c\u2019est précisément le piège, une facture parfaitement justifiée dont seul le bénéficiaire est faux. Aucune mise à jour de RIB ne se fait sur la foi d\u2019un e-mail : contre-vérification par canal indépendant (appel au numéro connu du dossier fournisseur, jamais celui de l\u2019e-mail), et si le doute persiste, le paiement reste bloqué et le dossier escaladé.',
        },
        {
          id: 'rn4-e3-q5',
          question:
            'Total des écarts de facturation constatés sur les dossiers A et B (montants facturés au-delà des montants dus), en euros.',
          type: 'numeric',
          expected: 1350,
          explanation:
            'Dossier A : 850,00 € (vingt unités non livrées mais facturées) + dossier B : 500,00 € (écart de prix de 1,00 € sur 500 pièces) = 1 350,00 € d\u2019écarts de facturation à régulariser avant paiement. Le dossier C, lui, ne présente aucun écart de montant : son anomalie est ailleurs — le bénéficiaire.',
        },
        {
          id: 'rn4-e3-q6',
          question:
            'Avant de conclure sur ces trois dossiers, décrivez votre démarche et les actions correctrices pour chacun : que demandez-vous, à qui, et que faites-vous du dossier C ? Rédigez une réponse structurée.',
          type: 'open',
          keywords: [
            'avoir',
            'commande',
            'réception',
            'fournisseur',
            'vérifier',
            'IBAN',
            'appeler',
            'escalader',
            'documenter',
          ],
          explanation:
            'Démarche attendue. Dossier A : réclamer à Métalux un avoir de 850,00 € (ou la livraison des vingt unités manquantes), vérifier le bon de réception signé (les 180 unités sont-elles confirmées par le magasin ?) et ajuster la mise en paiement à 7 650,00 €. Dossier B : refuser la facture au prix facturé, demander à Verti un avoir de 500,00 € ou une refacturation au prix convenu (18,90 €) et ne payer que 9 450,00 € — le prix de la commande ferme prévaut. Dossier C : ne jamais mettre à jour le RIB sur la foi d\u2019un e-mail ; appeler Gunnar au numéro figurant au dossier fournisseur (pas celui de l\u2019e-mail) pour contre-vérifier le changement de compte ; si la modification n\u2019est pas confirmée, bloquer le paiement, escalader auprès du responsable et signaler la tentative — c\u2019est potentiellement une fraude au faux fournisseur. Avant de conclure : documenter chaque écart (copies des factures, bons de réception, courriers), attendre les avoirs et confirmations, et mentionner les trois dossiers dans la feuille d\u2019exceptions avec leur incidence chiffrée (850,00 €, 500,00 €, risque sur 7 680,00 €). Dans ce cas, je ne conclurais qu\u2019une fois chaque action engagée et tracée : le three-way match n\u2019est complet que si le bénéficiaire réel est vérifié.',
        },
      ],
      risks: [
        'Surfacturation sur quantités non reçues (dossier A)',
        'Écart de prix facturé / convenu non détecté (dossier B)',
        'Paiement sur un IBAN détourné (dossier C — fraude au faux fournisseur)',
      ],
      solutionSummary:
        'Dossier A : la facture Métalux porte sur les 200 unités commandées (8 500,00 €) alors que le bon de réception n\u2019en constate que 180 (7 650,00 €) — 850,00 € facturés sans livraison. Dossier B : la facture Verti facture 19,90 € l\u2019unité contre 18,90 € convenus — 9 950,00 € au lieu de 9 450,00 €, soit 500,00 € d\u2019écart de prix. Dossier C : quantités et montant Gunnar sont exacts (120 × 64,00 € = 7 680,00 €) mais l\u2019IBAN de la facture et de l\u2019e-mail diffère du RIB enregistré — signature classique de la fraude au faux fournisseur, aggravée par l\u2019argument d\u2019urgence. Écarts de facturation A + B : 1 350,00 €. Actions : réclamer les avoirs (850,00 € et 500,00 €) ou faire refacturer, ajuster les mises en paiement — et pour le dossier C, ne rien mettre à jour sans contre-vérification téléphonique au numéro connu, avec escalade si le doute persiste. Le three-way match n\u2019est complet que si le quatrième élément — le bénéficiaire réel — est vérifié : un dossier parfaitement justifié peut partir sur un mauvais compte.',
      interviewTips: [
        'Présenter chaque dossier en une phrase — fait, écart chiffré, action : le recruteur évalue la concision du diagnostic.',
        'Sur le dossier C, dire « risque de fraude au faux fournisseur, à contre-vérifier » plutôt que « fraude » : la nuance est professionnelle.',
        'Citer le canal indépendant (appel au numéro du dossier) comme réflexe unique face à un changement de RIB.',
      ],
    },

    {
      id: 'renault-ex-4-4',
      title: 'Exercice 4 · Doublons et paiements indu : le contrôle de septembre',
      cycle: 'Décaissements',
      context:
        'L\u2019échantillon est étendu à septembre — suite logique du taux d\u2019exception d\u2019août, dont la conclusion fait l\u2019objet de l\u2019exercice 5. Ce mois-là, le contrôle porte sur les doublons et paiements indu (données fictives) : douze paiements décaissés et comptabilisés, et les avoirs fournisseurs reçus en fin de mois. Mise en garde de la méthode : les doublons ne se détectent pas sur la référence de facture — deux facturations distinctes peuvent décrire la même prestation.',
      documents: [
        {
          kind: 'table',
          name: 'Journal des paiements de septembre 2025 — extrait contrôlé (document fictif)',
          columns: ['N°', 'Date', 'Bénéficiaire', 'Réf. facture', 'Libellé', 'Montant (€)', 'Signataire'],
          rows: [
            ['PA-901', '01/09/2025', 'Sogex Énergie', 'FA-2025-3101', 'Abonnement et consommation — août', 3940, 'A. Vasseur'],
            ['PA-902', '02/09/2025', 'Métalux', 'FA-2025-3102', 'Tôles embouties — lot 7', 27300, 'S. Boyer'],
            ['PA-903', '02/09/2025', 'Clairval Services', 'FA-2025-3105', 'Prestations de maintenance — août', 2875, 'A. Vasseur'],
            ['PA-904', '03/09/2025', 'Novaxis IT', 'FA-2025-3107', 'Licences utilisateurs — T3', 12600, 'M. Delaunay'],
            ['PA-905', '04/09/2025', 'Altisia Intérim', 'FA-2025-3109', 'Intérim production — août', 14250, 'M. Delaunay'],
            ['PA-906', '05/09/2025', 'Clairval Services', 'FA-2025-3118', 'Prestations de maintenance — août', 2875, 'A. Vasseur'],
            ['PA-907', '08/09/2025', 'Prestance Propreté', 'FA-2025-3112', 'Nettoyage des sites — août', 4620, 'A. Vasseur'],
            ['PA-908', '09/09/2025', 'Transgault Transport', 'FA-2025-3122', 'Affrètements spéciaux — septembre', 16200, 'M. Delaunay'],
            ['PA-909', '10/09/2025', 'Gunnar', 'FA-2025-3116', 'Pièces détachées réf. PD-82', 5930, 'A. Vasseur'],
            ['PA-910', '12/09/2025', 'Transgault Transport', 'FA-2025-3131', 'Affrètements spéciaux — septembre', 16200, 'M. Delaunay'],
            ['PA-911', '17/09/2025', 'Bordelet Emballages', 'FA-2025-3141', 'Cartons et palettes — retour à charger', 5240, 'A. Vasseur'],
            ['PA-912', '24/09/2025', 'Orcom', 'FA-2025-3148', 'Composants — lot 12', 38700, 'S. Boyer'],
          ],
          note:
            'Tous ces paiements ont été décaissés et comptabilisés. Le contrôle des doublons ne peut pas se limiter aux références de facture : deux facturations distinctes peuvent porter le même libellé. Document fictif à but pédagogique.',
        },
        {
          kind: 'table',
          name: 'Avoirs fournisseurs reçus en septembre 2025 (document fictif)',
          columns: ['Réf. avoir', 'Date', 'Fournisseur', 'Facture rattachée', 'Motif', 'Montant (€)'],
          rows: [
            ['AV-2025-0442', '22/09/2025', 'Bordelet Emballages', 'FA-2025-3141', 'Retour de 40 palettes consignées — avoir total sur la facture', 5240],
            ['AV-2025-0447', '26/09/2025', 'Novaxis IT', 'FA-2025-3152', 'Régularisation d\u2019une licence facturée en double — facture non encore réglée', 1980],
          ],
          note:
            'Chaque avoir se rattache à une facture précise ; son imputation dépend du statut de règlement de cette facture. Document fictif à but pédagogique.',
        },
      ],
      questions: [
        {
          id: 'rn4-e4-q1',
          question: 'Sélectionner les paiements qui appellent une investigation pour doublon ou paiement indu.',
          type: 'multi',
          options: [
            'PA-901 — Sogex Énergie — 3 940,00 € — « Abonnement et consommation — août »',
            'PA-902 — Métalux — 27 300,00 € — « Tôles embouties — lot 7 »',
            'PA-903 — Clairval Services — 2 875,00 € — « Prestations de maintenance — août » (02/09)',
            'PA-904 — Novaxis IT — 12 600,00 € — « Licences utilisateurs — T3 »',
            'PA-905 — Altisia Intérim — 14 250,00 € — « Intérim production — août »',
            'PA-906 — Clairval Services — 2 875,00 € — « Prestations de maintenance — août » (05/09)',
            'PA-907 — Prestance Propreté — 4 620,00 € — « Nettoyage des sites — août »',
            'PA-908 — Transgault Transport — 16 200,00 € — « Affrètements spéciaux — septembre » (09/09)',
            'PA-909 — Gunnar — 5 930,00 € — « Pièces détachées réf. PD-82 »',
            'PA-910 — Transgault Transport — 16 200,00 € — « Affrètements spéciaux — septembre » (12/09)',
            'PA-911 — Bordelet Emballages — 5 240,00 € — « Cartons et palettes » (avoir AV-2025-0442 reçu le 22/09)',
            'PA-912 — Orcom — 38 700,00 € — « Composants — lot 12 »',
          ],
          expected: ['2', '5', '7', '9', '10'],
          explanation:
            'Cinq paiements appellent une investigation. Deux doublons présumés, repérés au recoupement : PA-903 et PA-906 (Clairval Services, deux fois 2 875,00 € aux 02/09 et 05/09, références FA-2025-3105 et FA-2025-3118 différentes mais libellé identique) ; PA-908 et PA-910 (Transgault Transport, deux fois 16 200,00 € aux 09/09 et 12/09, références différentes, même libellé). Dans les deux cas : même bénéficiaire, même montant, trois jours d\u2019écart — la signature du doublon. Et un paiement indu : PA-911 (Bordelet Emballages, 5 240,00 €), couvert après coup par l\u2019avoir AV-2025-0442 du 22/09 (retour de 40 palettes consignées) — la facture a été réglée en totalité puis annulée par l\u2019avoir : le paiement est devenu indu. L\u2019avoir Novaxis (1 980,00 €) rattache à une facture non réglée : il se déduira du paiement à venir, il ne crée pas d\u2019indu.',
        },
        {
          id: 'rn4-e4-q2',
          question: 'Qu\u2019est-ce qui doit faire suspecter un doublon entre deux paiements ?',
          type: 'mcq',
          options: [
            'Même bénéficiaire, même montant, dates à trois jours d\u2019intervalle et libellé identique — malgré des références de facture différentes',
            'Des références de facture différentes suffisent à écarter tout risque de doublon',
            'Des montants différents mais un libellé identique',
            'Le même signataire sur les deux paiements',
          ],
          expected: '0',
          explanation:
            'La signature du doublon est le couple de critères recoupés : même bénéficiaire, même montant, dates rapprochées, libellé identique. Les références de facture différentes ne rassurent en rien — un fournisseur qui facture deux fois la même prestation émet deux factures distinctes, et c\u2019est précisément pour cela que le doublon échappe au pointage par référence. Des montants différents écartent en pratique le doublon simple, et le signataire commun est sans incidence sur la question.',
        },
        {
          id: 'rn4-e4-q3',
          question:
            'Un avoir reçu après le règlement transforme obligatoirement le paiement en perte définitive.',
          type: 'truefalse',
          options: ['Vrai', 'Faux'],
          expected: '1',
          explanation:
            'Faux : l\u2019avoir ouvre un droit de récupération, pas une perte. Le paiement devient indu à hauteur de l\u2019avoir : il se récupère par remboursement du fournisseur ou par imputation sur une échéance ultérieure. Le rôle du contrôle est précisément de s\u2019assurer que cette créance est identifiée, comptabilisée (compte d\u2019avoir à recevoir) et suivie jusqu\u2019à son dénouement — un avoir non imputé dort, un indu non suivi se perd.',
        },
        {
          id: 'rn4-e4-q4',
          question:
            'Montant total des sommes payées en trop identifiées sur septembre — les deux doublons présumés plus le paiement couvert par l\u2019avoir AV-2025-0442 — en euros.',
          type: 'numeric',
          expected: 24315,
          explanation:
            'Doublon Clairval : 2 875,00 € + doublon Transgault : 16 200,00 € + paiement indu Bordelet : 5 240,00 € = 24 315,00 € à récupérer (remboursement ou imputation), sous réserve de la confirmation fournisseur pour les deux doublons présumés. Chaque euro identifié par le contrôle est un euro de trésorerie récupérable : c\u2019est ce qui fait la valeur économique mesurable du contrôle des décaissements.',
        },
        {
          id: 'rn4-e4-q5',
          question:
            'Avant de conclure à un doublon ou à un paiement indu, quelle démarche de confirmation menez-vous ? Rédigez une réponse structurée.',
          type: 'open',
          keywords: [
            'lettrage',
            'rapprochement',
            'fournisseur',
            'confirmation',
            'écrit',
            'commande',
            'prestation',
            'remboursement',
            'imputation',
          ],
          explanation:
            'Démarche attendue : (1) lettrer le compte du fournisseur et établir le rapprochement de compte — les deux règlements apparaissent-ils contre une ou deux factures ouvertes ? y a-t-il un solde créditeur inexpliqué ? (2) vérifier l\u2019existence de deux prestations distinctes : deux bons de commande, deux bons de travail ou deux situations distincts pour les mêmes libellés — si les deux références correspondent à deux prestations réelles, il n\u2019y a pas de doublon ; (3) demander une confirmation écrite au fournisseur (relevé de compte, courriel du service comptable) indiquant si la dette est soldée une ou deux fois ; (4) si le doublon est confirmé, négocier la récupération : remboursement par virement ou imputation sur la prochaine échéance, avec écrite de confirmation ; (5) pour le paiement indu Bordelet, appliquer l\u2019avoir : imputation sur la facture suivante ou demande de remboursement, et suivi jusqu\u2019à encaissement ; (6) documenter chaque étape dans la fiche d\u2019exception. Dans ce cas, je ne qualifierais jamais un paiement de doublon dans le rapport sans la confirmation écrite du fournisseur : deux libellés identiques peuvent recouvrir deux prestations distinctes, et une accusation erronée coûte la crédibilité du contrôle.',
        },
      ],
      risks: [
        'Doublons sous références différentes non détectés',
        'Paiement indu assimilé à une perte au lieu d\u2019une créance à récupérer',
        'Conclusion de doublon prononcée sans confirmation fournisseur',
      ],
      solutionSummary:
        'Deux doublons présumés et un indu. Clairval Services a été réglée deux fois 2 875,00 € pour le même libellé « Prestations de maintenance — août » (02/09 et 05/09, références FA-2025-3105 et FA-2025-3118) ; Transgault Transport deux fois 16 200,00 € pour « Affrètements spéciaux — septembre » (09/09 et 12/09, références FA-2025-3122 et FA-2025-3131) — mêmes bénéficiaires, mêmes montants, trois jours d\u2019écart, libellés identiques : la signature du doublon, malgré des références différentes. Et le paiement Bordelet de 5 240,00 € (PA-911) est devenu indu : l\u2019avoir AV-2025-0442 du 22/09 le couvre intégralement (retour de 40 palettes consignées). L\u2019avoir Novaxis de 1 980,00 € rattache à une facture non réglée : pas d\u2019indu, il se déduira du prochain paiement. Total à récupérer : 2 875,00 + 16 200,00 + 5 240,00 = 24 315,00 €, sous réserve de confirmation écrite. Avant de conclure : lettrage et rapprochement de compte fournisseur, vérification que chaque paire ne recouvre pas deux prestations distinctes, puis remboursement ou imputation — un indu est une créance à récupérer, pas une perte à constater.',
      interviewTips: [
        'Donner la signature du doublon (bénéficiaire, montant, dates rapprochées, libellé) avant de conclure : le critère fait la compétence.',
        'Sur l\u2019indu, employer « imputation ou remboursement » : le recruteur cherche la notion de récupération.',
        'Relier le contrôle de septembre à l\u2019extension d\u2019échantillon décidée après août : la chronologie du contrôle raconte la démarche.',
      ],
    },

    {
      id: 'renault-ex-4-5',
      title: 'Exercice 5 · L\u2019anomalie remet-elle en cause le processus ?',
      cycle: 'Décaissements',
      context:
        'Fin septembre, bilan (données fictives). Sur l\u2019échantillon d\u2019août — quinze paiements testés contre la matrice des délégations — quatre violations ont été relevées : PA-806 (34 500,00 € signé sous un plafond de 8 000 €), PA-811 et PA-812 (fractionnement : 9 800,00 € cumulés le même jour) et PA-815 (dépassement de 410,00 €). L\u2019entretien avec le comptable fournisseurs apporte deux éléments : le workflow de validation déployé mi-juillet ne bloque pas les paiements hors plafond (il se contente d\u2019une alerte à l\u2019écran), et le responsable des validations était absent une partie d\u2019août, sans suppléance formalisée. Le responsable de mission attend ma conclusion sur la fiabilité du processus de décaissement.',
      documents: [
        {
          kind: 'text',
          name: 'Feuille d\u2019exceptions — contrôle des délégations, échantillon d\u2019août 2025 (document fictif)',
          content:
            'EXCEPTIONS RELEVÉES — échantillon de quinze paiements testés\n\nE-01 · PA-806 — 05/08 — Ferrotool Maintenance — 34 500,00 € — signé A. Vasseur (plafond 8 000 €) — dépassement : 26 500,00 €\nE-02 · PA-811 — 12/08 — Prestance Propreté — 4 900,00 € — fractionnement (1/2)\nE-03 · PA-812 — 12/08 — Prestance Propreté — 4 900,00 € — fractionnement (2/2) — cumul jour / bénéficiaire : 9 800,00 €\nE-04 · PA-815 — 19/08 — Novaxis IT — 20 410,00 € — signé M. Delaunay (plafond 20 000 €) — dépassement : 410,00 €\n\nFaits relevés en entretien :\n— le workflow ne bloque pas les paiements hors plafond (alerte simple à l\u2019écran) ;\n— absence de suppléance formalisée pendant les congés du responsable des validations.\n\n(Document fictif à but pédagogique)',
          note: 'Document fictif à but pédagogique.',
        },
      ],
      questions: [
        {
          id: 'rn4-e5-q1',
          question:
            'Rédigez votre analyse : l\u2019anomalie constatée remet-elle en cause le processus ? Intégrez la décision d\u2019échantillonnage, la qualification de la cause, l\u2019incidence, la recommandation et son plan d\u2019action (responsable, délai).',
          type: 'open',
          keywords: [
            'étendre',
            'échantillon',
            'cause systémique',
            'exception isolée',
            'incidence',
            'recommandation',
            'plan d\u2019action',
            'responsable',
            'délai',
          ],
          explanation:
            'Analyse attendue : quatre violations sur quinze paiements testés (26,7 %), ce n\u2019est pas un niveau d\u2019exception isolée — quelques pourcents tout au plus le seraient. Combiné aux faits relevés (workflow non bloquant, absence de suppléance), tout oriente vers une cause systémique : le dispositif lui-même laisse passer les paiements hors délégation. La bonne décision a donc été d\u2019étendre l\u2019échantillon — c\u2019est le contrôle de septembre (exercice 4), qui n\u2019a plus relevé de violation de délégation mais 24 315,00 € de doublons et paiements indu à récupérer. L\u2019incidence se chiffre : aucun manque à gagner démontré sur les quatre violations d\u2019août (paiements à des fournisseurs légitimes), mais un défaut de contrôle structurel — l\u2019argent aurait pu partir n\u2019importe où, et 24 315,00 € sont effectivement partis en trop en septembre. La conclusion : le processus de décaissement n\u2019est pas fiable en l\u2019état — faiblesse de conception (contrôle non bloquant, pas de détection de doublons) plutôt que comportement délictueux. La recommandation, hiérarchisée, avec responsable et délai : rendre le workflow bloquant au-delà du plafond et sur les cumuls jour / bénéficiaire (responsable DAF, sous un mois) ; mettre en place la détection automatique des doublons (comptable fournisseurs, deux mois) ; formaliser la suppléance des signataires (DRH et DAF, un mois) ; suivre les récupérations des 24 315,00 € (trésorerie, immédiat). Dans ce cas, je distinguerais clairement l\u2019exception isolée — qui se corrige — de la cause systémique — qui se répare : c\u2019est cette distinction qui fonde toute la conclusion.',
        },
        {
          id: 'rn4-e5-q2',
          question:
            'Quatre violations sur quinze suffisent, à elles seules, à conclure que le processus de décaissement est défaillant.',
          type: 'truefalse',
          options: ['Vrai', 'Faux'],
          expected: '1',
          explanation:
            'Faux — et c\u2019est un piège dans les deux sens. Quatre violations sur quinze suffisent à interdire toute conclusion positive immédiate et à imposer d\u2019étendre l\u2019échantillon, mais elles ne suffisent pas, à elles seules, à démontrer la défaillance du processus : encore faut-il qualifier la cause (quatre circonstances indépendantes ou un défaut commun ?) et croiser les autres contrôles (bons à payer, three-way match, doublons). C\u2019est l\u2019extension à septembre et l\u2019analyse du dispositif (workflow non bloquant) qui transforment la présomption en conclusion documentée. Le taux déclenche l\u2019investigation ; il ne la remplace pas.',
        },
        {
          id: 'rn4-e5-q3',
          question:
            'Face à un taux d\u2019exception de 26,7 % sur l\u2019échantillon d\u2019août, quelle est la bonne réaction méthodologique ?',
          type: 'mcq',
          options: [
            'Conclure immédiatement au bon fonctionnement du processus : aucune perte n\u2019est démontrée',
            'Étendre le contrôle à un échantillon complémentaire (par exemple septembre) avant toute conclusion : un tel taux suggère une cause systémique',
            'Arrêter les contrôles et rédiger immédiatement une conclusion défavorable définitive sur le seul échantillon d\u2019août',
            'Considérer les quatre violations comme des exceptions isolées, sans incidence sur la conclusion',
          ],
          expected: '1',
          explanation:
            'Un taux d\u2019exception de 26,7 % dépasse largement le niveau des exceptions isolées (quelques pourcents) : la première réaction est d\u2019étendre l\u2019échantillon et d\u2019interroger le dispositif (workflow bloquant ? séparation des tâches ? suppléance ?) avant de conclure. Conclure positivement « faute de perte démontrée » (option 0) confond incidence et contrôle ; conclure négativement sur le seul échantillon (option 2) saute l\u2019étape de qualification de la cause ; classer sans investigation (option 3) ignore le signal. Dans le scénario, l\u2019extension sur septembre n\u2019a plus relevé de violation de délégation mais 24 315,00 € de doublons et paiements indu : la conclusion finale — processus non fiable en l\u2019état, recommandations datées — n\u2019a pu être prononcée qu\u2019après cette extension.',
        },
        {
          id: 'rn4-e5-q4',
          question:
            'Calculer le taux d\u2019exception du contrôle des délégations d\u2019août (quatre paiements violateurs sur quinze testés), en pourcentage arrondi au dixième.',
          type: 'numeric',
          expected: 26.7,
          explanation:
            'Taux d\u2019exception = 4 ÷ 15 = 0,2667, soit 26,7 % arrondi au dixième. Ce chiffre n\u2019est pas anecdotique : à titre de repère, un processus sain présente des exceptions isolées de quelques pourcents ; au-delà de 10 à 15 %, on cherche une cause systémique et on étend l\u2019échantillon avant de conclure. Dans ce cas, c\u2019est ce taux qui a déclenché l\u2019extension de septembre — et donc la découverte des 24 315,00 € à récupérer.',
        },
      ],
      risks: [
        'Conclusion hâtive sur un échantillon insuffisant',
        'Exception isolée et cause systémique confondues',
        'Recommandation formulée sans responsable ni délai',
      ],
      solutionSummary:
        'Le taux d\u2019exception s\u2019établit à 4 ÷ 15 = 26,7 % : bien au-delà du niveau d\u2019exceptions isolées. Combiné aux faits relevés (workflow non bloquant, absence de suppléance), il oriente vers une cause systémique — mais la conclusion sur le processus ne se prononce qu\u2019après extension du contrôle : c\u2019est le contrôle de septembre (exercice 4), qui n\u2019a plus relevé de violation de délégation mais 24 315,00 € de doublons et paiements indu à récupérer. Conclusion finale : le processus de décaissement présente des faiblesses de conception (contrôle non bloquant) et de couverture (pas de détection des doublons) ; l\u2019incidence d\u2019août est nulle en perte démontrée, mais 24 315,00 € sont partis en trop en septembre — le défaut de contrôle a un coût. Recommandations hiérarchisées, chacune avec responsable et délai : workflow bloquant au-delà du plafond et sur les cumuls jour / bénéficiaire ; détection automatique des doublons ; suppléance formalisée des signataires ; suivi des récupérations. À l\u2019oral, la structure attendue tient en cinq temps : chiffrer (26,7 %), qualifier (cause systémique probable), étendre (septembre), conclure (processus perfectible), recommander (plan d\u2019action daté et nommé).',
      interviewTips: [
        'Annoncer le taux d\u2019exception en premier (26,7 %) : le chiffre donne le ton de toute la réponse.',
        'Utiliser « cause systémique » et « exception isolée » comme les deux branches du raisonnement : c\u2019est la grille du recruteur.',
        'Terminer par responsable et délai sur chaque recommandation : une conclusion sans plan d\u2019action n\u2019est pas une conclusion.',
      ],
    },
  ],

  interviewQuestions: [
    {
      question: 'Pourquoi les décaissements présentent-ils un risque particulier en audit ?',
      expected:
        'Parce que c\u2019est le seul moment où la comptabilité se transforme de façon irréversible en argent parti : une signature suffit à transférer des fonds, et l\u2019erreur (doublon, indu, IBAN détourné) ne se corrige pas par une écriture mais par une récupération auprès d\u2019un tiers — quand elle est possible. Le risque de perte directe y est maximal : paiement non autorisé, sans livraison justifiée, en double ou vers un compte frauduleux.',
      hint: 'Appuyer le raisonnement sur l\u2019irréversibilité du paiement : c\u2019est l\u2019argument qui différencie ce cycle des autres.',
    },
    {
      question: 'Pourquoi contrôle-t-on les décaissements par échantillonnage plutôt qu\u2019exhaustivement ?',
      expected:
        'Parce que le volume (environ cinquante paiements par mois dans le scénario) et la profondeur des contrôles pièce par pièce (délégation, bon à payer, three-way match, IBAN) rendent l\u2019exhaustivité coûteuse. L\u2019échantillonnage teste en profondeur un sous-ensemble représentatif — sélection à seuil pour le risque monétaire, tirage aléatoire documenté pour la représentativité — à condition de définir et chiffrer la population en préalable et de documenter la sélection.',
    },
    {
      question: 'Comment choisissez-vous votre échantillon de paiements ?',
      expected:
        'En deux temps : sélection obligatoire des paiements au-delà d\u2019un seuil (par exemple 10 000 € — dans le scénario de juillet, vingt paiements couvrant 88,4 % de la valeur), puis tirage aléatoire documenté sur le reste, car les contournements comme le fractionnement se cachent sous le seuil. Je consigne méthode, source, liste et date pour que la sélection soit reproductible par un tiers.',
      hint: 'Mentionner la couverture en valeur du seuil : cela prouve que la sélection est dictée par le risque.',
    },
    {
      question: 'Qu\u2019est-ce qu\u2019une délégation de signature et que contrôlez-vous dessus ?',
      expected:
        'L\u2019autorisation formelle donnée à un signataire d\u2019engager l\u2019entreprise jusqu\u2019à un plafond. Le contrôle confronte chaque paiement testé à la matrice : montant inférieur ou égal au plafond du signataire (plafond inclus), appréciation du cumul des règlements à un même bénéficiaire le même jour pour détecter les fractionnements, et délégation en vigueur à la date du paiement.',
    },
    {
      question: 'Qu\u2019est-ce qu\u2019un bon à payer et que vérifiez-vous ?',
      expected:
        'La pièce qui matérialise l\u2019autorisation définitive de payer, apposée après contrôle du dossier complet (facture, commande, réception). Je vérifie : existence pour chaque paiement testé, signature par une personne habilitée et dans son plafond, complétude du dossier joint et concordance des montants. Sans bon à payer signé, un paiement ne devrait jamais partir : son absence est une exception en soi.',
    },
    {
      question: 'Expliquez le rapprochement facture / commande / réception.',
      expected:
        'Le three-way match : la facture n\u2019est payable que si son contenu correspond à une commande ferme (prix, quantités) et à un bon de réception signé (livraisons effectives). Il garantit que l\u2019entreprise paie ce qui a été commandé et réellement reçu — et il détecte les surfacturations sur quantités non livrées, les écarts de prix et les factures sans commande.',
    },
    {
      question: 'Vous découvrez un paiement signé au-delà du plafond du signataire : que faites-vous ?',
      expected:
        'Je documente l\u2019exception (référence, écart chiffré, pièces), je qualifie la cause avec les intéressés (erreur isolée, contournement, absence de contrôle bloquant), j\u2019escalade au responsable, et je renforce la vérification documentaire sur ce paiement (three-way match, bénéficiaire). Si le taux d\u2019exception le justifie, j\u2019étends l\u2019échantillon ; la recommandation va vers un workflow bloquant au-delà du plafond, avec responsable et délai.',
    },
    {
      question: 'Comment détectez-vous un double paiement ?',
      expected:
        'Par recoupement de critères combinés : même bénéficiaire, même montant, dates rapprochées, libellés identiques — les références de facture pouvant différer, deux facturations distinctes décrivant la même prestation. Puis confirmation avant conclusion : lettrage du compte fournisseur, rapprochement de compte, demande écrite ; si le doublon est avéré, récupération par remboursement ou imputation sur l\u2019échéance suivante.',
      hint: 'Insister sur la confirmation préalable : le doublon apparent peut recouvrir deux prestations distinctes.',
    },
    {
      question: 'Un fournisseur annonce par e-mail un changement de RIB : quelle est votre réaction ?',
      expected:
        'Aucune mise à jour sur la seule foi d\u2019un e-mail : je contre-vérifie par un canal indépendant — appel au numéro connu du dossier fournisseur, jamais celui de l\u2019e-mail. C\u2019est la parade à la fraude au faux fournisseur ; en cas de doute persistant, le paiement reste bloqué et le dossier est escaladé. Toute modification de coordonnées bancaires suit une procédure à double validation.',
    },
    {
      question: 'Quand une anomalie constatée remet-elle en cause le processus entier ?',
      expected:
        'Quand elle n\u2019est pas isolée : taux d\u2019exception élevé (26,7 % sur l\u2019échantillon d\u2019août du scénario), répétition d\u2019un même schéma (fractionnement), cause identifiée dans le dispositif lui-même (workflow non bloquant, absence de séparation des tâches). Une exception isolée se documente et se corrige ; une cause systémique impose d\u2019étendre l\u2019échantillon, de chiffrer l\u2019incidence et de recommander un plan d\u2019action — responsable et délai compris.',
    },
  ],

  followUps: [
    {
      question:
        'Votre échantillon de quinze paiements ne révèle aucune anomalie : le processus est-il fiable ?',
      expected:
        'Pas de conclusion hâtive : l\u2019absence d\u2019exception sur un échantillon réduit le risque, elle ne le démontre pas. Je vérifie la qualité de la sélection (seuil et aléatoire), j\u2019étends éventuellement le contrôle (autre mois, autre segment) et je croise avec des contrôles indépendants (rapprochements bancaires, lettrage). Un échantillon propre autorise la formulation « aucune anomalie détectée dans le périmètre testé » — et c\u2019est exactement cette formulation, mesurée, que je tiens dans le rapport.',
    },
    {
      question:
        'Le signataire qui a dépassé son plafond de 410 € vous dit qu\u2019il « dépannait » pendant les congés du responsable : vous concluez comment ?',
      expected:
        'L\u2019intention n\u2019efface pas l\u2019exception : 410 € ou 26 500 €, la règle est la même et le contrôle est binaire. Mais la cause compte pour la conclusion : l\u2019absence de suppléance formalisée est une cause organisationnelle, pas une excuse. La recommandation vise donc le dispositif — suppléants habilités et désignés, contrôle renforcé en période d\u2019absence — sans nier l\u2019exception elle-même, qui reste documentée dans la feuille d\u2019exceptions.',
    },
    {
      question:
        'Le directeur financier vous demande de retirer du rapport la violation de 410 € : « c\u2019est du détail ». Que répondez-vous ?',
      expected:
        'Je maintiens l\u2019exception avec son contexte : elle est factuelle, documentée et révélatrice d\u2019une faiblesse du workflow — le paiement est passé malgré le dépassement. Je peux hiérarchiser le rapport, l\u2019incidence de 410 € étant faible, mais pas supprimer un fait contrôlé : le tri sélectif des exceptions ruine la piste d\u2019audit et la crédibilité du contrôle. Le bon compromis : garder le fait, ajuster le niveau de lecture.',
    },
    {
      question:
        'Pourquoi ne pas conclure immédiatement à la défaillance du processus avec quatre violations sur quinze ?',
      expected:
        'Parce que quatre points ne qualifient pas encore la cause : isolée (quatre circonstances indépendantes) ou systémique (workflow non bloquant, absence de suppléance). La démarche est d\u2019étendre l\u2019échantillon — septembre dans le scénario — et d\u2019interroger le dispositif avant de conclure. La conclusion porte sur le processus, pas sur les seules anomalies constatées : le taux déclenche l\u2019investigation, il ne la remplace pas.',
    },
    {
      question:
        'Le fournisseur confirme par écrit que les deux factures de 16 200 € correspondent à deux prestations distinctes : quelle suite ?',
      expected:
        'Je requalifie : pas de doublon, donc pas d\u2019exception — mais la confirmation écrite rejoint le dossier, car c\u2019est elle qui fonde la requalification. Le contrôle fait alors ressortir un point de qualité documentaire : deux factures au même libellé et au même montant mériteraient des libellés distincts côté fournisseur ; je le signale comme recommandation mineure, pour la traçabilité des contrôles futurs — sans en faire une anomalie.',
    },
    {
      question:
        'On vous propose d\u2019automatiser le contrôle des décaissements dans l\u2019ERP : quels contrôles programmez-vous ?',
      expected:
        'Des verrous bloquants : rejet automatique des paiements au-delà du plafond du signataire (plafond inclus), cumul par bénéficiaire et par jour contre le fractionnement, rapprochement facture / commande / réception obligatoire avant bon à payer, verrouillage du RIB (modification uniquement via procédure contre-vérifiée), alerte doublon sur les critères combinés (bénéficiaire, montant, dates rapprochées) et piste d\u2019audit complète. L\u2019automatisation renforce le contrôle ; elle ne remplace pas l\u2019échantillonnage de fond ni l\u2019analyse de cause.',
    },
  ],

  evaluation: {
    criteria: [
      {
        label: 'Définition et couverture de la population',
        description:
          'Délimite la population (période, source, exhaustivité), la chiffre en nombre et en valeur, et la rapproche des relevés bancaires avant toute sélection.',
      },
      {
        label: 'Échantillonnage documenté',
        description:
          'Combine sélection à seuil et tirage aléatoire, justifie la méthode par le risque, et documente la sélection pour qu\u2019elle soit reproductible par un tiers.',
      },
      {
        label: 'Contrôle des délégations',
        description:
          'Confronte chaque paiement à la matrice : plafond inclus, cumul par bénéficiaire et par jour, délégation en vigueur — et repère les fractionnements.',
      },
      {
        label: 'Vérification documentaire des paiements',
        description:
          'Contrôle le bon à payer (existence, signature, dossier complet), le three-way match facture / commande / réception, ainsi que le bénéficiaire et l\u2019IBAN.',
      },
      {
        label: 'Détection et qualification des anomalies',
        description:
          'Repère doublons, paiements indu et signaux de fraude, confirme avant de conclure, chiffre l\u2019incidence et qualifie la cause (isolée ou systémique).',
      },
      {
        label: 'Conclusion et recommandations',
        description:
          'Décide de l\u2019extension d\u2019échantillon sur la base du taux d\u2019exception, conclut sur la fiabilité du processus et formule des recommandations avec responsable et délai.',
      },
    ],
  },
}
