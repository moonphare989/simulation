import type { Mission } from '@/lib/types'

// =====================================================================
// Fiche 1 — Fidumac (cabinet fictif) · Mission 2
// Évaluation du contrôle interne sur trois cycles
// Scénario pédagogique fictif — janvier–mars 2026 — montants en MAD
// =====================================================================

export const fidumacMission2: Mission = {
  id: 'fidumac-m2',
  ficheId: 'fidumac',
  order: 2,
  title: 'Évaluation du contrôle interne sur trois cycles : Achats-Fournisseurs, Ventes-Clients, Trésorerie',
  period: 'Janvier – Mars 2026 (scénario pédagogique)',
  company: 'Fidumac (cabinet fictif)',
  sector: 'Distribution et BTP (entreprises clientes fictives)',
  referenceData: [
    'Plus de dix tests de cheminement et de conformité sur trois cycles : Achats-Fournisseurs, Ventes-Clients, Trésorerie',
    'Populations fictives testées chez Distra Maroc (distribution) : 640 demandes d\'achat, environ 612 factures fournisseurs comptabilisées, 2 480 factures de ventes émises et 3 100 virements bancaires sur l\'exercice 2025',
    'Échantillons fictifs : 12 demandes d\'achat (autorisation), 6 factures fournisseurs (rapprochement facture / BC / réception), 10 factures de ventes (contrôle des prix), 10 virements (autorisation des paiements), 12 revues mensuelles de la balance âgée',
    'Mission rattachée au commissariat aux comptes de Distra Maroc pour l\'exercice clos le 31/12/2025 : l\'évaluation du contrôle interne oriente la stratégie d\'audit (appui sur les contrôles ou approche substantive)',
    'Référentiel comptable : CGNC marocain — distinct du Plan Comptable Général français ; montants exprimés en MAD (dirhams)',
    'Toutes les entreprises, personnes et montants sont fictifs ; corrections formulées de manière hypothétique (« dans ce cas, je commencerais par… »)',
  ],
  summary:
    'Poursuivre la mission de commissariat aux comptes de Distra Maroc en évaluant le contrôle interne de trois cycles : Achats-Fournisseurs, Ventes-Clients et Trésorerie. Apprendre à distinguer conception, mise en œuvre et efficacité opérationnelle d\'un contrôle ; à choisir entre test de cheminement, test de conformité et test substantif ; à constituer et justifier un échantillon ; à évaluer une exception sans la confondre avec une anomalie comptable ; et à conclure sur la fiabilité des contrôles avec des recommandations utiles au client.',
  comprehension: {
    intro:
      'Deuxième volet du scénario Fidumac. Dans la mission de commissariat aux comptes de Distra Maroc (entreprise fictive de distribution), l\'équipe a décidé d\'évaluer le contrôle interne des trois cycles les plus significatifs : Achats-Fournisseurs, Ventes-Clients et Trésorerie. M. Sabri, chef de mission fictif, vous confie plus de dix tests de cheminement et de conformité. Tout est inventé pour l\'entraînement : entreprises, personnes, montants.\n\nLe contrôle interne est l\'ensemble des politiques et procédures mises en place par la direction pour garantir la fiabilité de l\'information financière, l\'efficacité des opérations et la conformité aux règles. L\'auditeur ne le conçoit pas : il le décrit, l\'évalue et décide s\'il peut s\'y appuyer pour réduire l\'étendue de ses contrôles substantifs.\n\nLe raisonnement de l\'auditeur suit le modèle du risque : le risque d\'anomalies significatives combine un risque inhérent (ce que l\'activité comporte comme erreurs possibles, indépendamment des contrôles) et un risque lié au contrôle (le risque que les contrôles ne préviennent ou ne détectent pas ces anomalies). Évaluer le contrôle interne, c\'est apprécier ce second terme.\n\nUn contrôle s\'évalue en trois temps : est-il bien conçu (conception) ? existe-t-il réellement et est-il appliqué (mise en œuvre) ? a-t-il fonctionné de manière efficace tout au long de la période (efficacité opérationnelle) ? Trois familles de tests correspondent à ces questions : le test de cheminement (une transaction suivie de bout en bout pour vérifier que le processus décrit existe tel quel), le test de conformité (un échantillon de transactions pour vérifier qu\'un contrôle précis a opéré efficacement pendant la période) et le test substantif (un contrôle direct des soldes ou des opérations, indépendant du contrôle interne).\n\nL\'échantillon se constitue avec méthode : population définie, méthode de sélection (aléatoire, par intervalles, orientée risque), taille justifiée par le risque et le seuil de signification. Chaque sélection se documente pour être refaisable.\n\nUne exception constatée lors d\'un test (par exemple une facture comptabilisée sans bon de réception) n\'est pas automatiquement une anomalie comptable : c\'est d\'abord une défaillance de contrôle. L\'auditeur en recherche la cause, l\'incidence chiffrée, le caractère isolé ou systémique, puis décide : étendre les travaux, corriger les comptes, ou simplement recommander.\n\nLe référentiel reste le CGNC marocain, distinct du PCG français : achats de marchandises 6111, clients 3421, TVA récupérable 3455, fournisseurs 4411, banque 5141. En entretien, présentez la logique des contrôles — elle est universelle.\n\nRègle d\'honnêteté inchangée : scénario fictif, démarches formulées au conditionnel, aucune expérience vécue à revendiquer.',
    definitions: [
      {
        term: 'Contrôle interne',
        definition:
          'Ensemble des politiques et procédures conçues par la direction pour prévenir, détecter et corriger les erreurs : autorisations, séparations de tâches, rapprochements, revues. L\'auditeur externe l\'évalue dans la seule mesure où il fonde son opinion sur les comptes.',
      },
      {
        term: 'Risque inhérent',
        definition:
          'Propension d\'une assertion ou d\'un solde à contenir des anomalies, indépendamment de tout contrôle : par exemple la sensibilité naturelle de la trésorerie aux détournements ou des stocks en distribution. Il oriente les cycles jugés sensibles.',
      },
      {
        term: 'Risque lié au contrôle',
        definition:
          'Risque que les contrôles de l\'entité ne préviennent pas ou ne détectent pas à temps les anomalies. C\'est ce risque que l\'évaluation du contrôle interne cherche à apprécier, cycle par cycle.',
      },
      {
        term: 'Conception d\'un contrôle',
        definition:
          'Qualité de la règle elle-même : est-elle adaptée au risque visé ? Un seuil de délégation mal calibré (par exemple un chef de rayon autorisé à commander sans limite) est mal conçu, même s\'il est respecté.',
      },
      {
        term: 'Mise en œuvre d\'un contrôle',
        definition:
          'Existence réelle du contrôle dans l\'entreprise : la procédure décrite est-elle appliquée ? Un contrôle bien conçu mais jamais appliqué n\'existe pas pour l\'auditeur.',
      },
      {
        term: 'Efficacité opérationnelle',
        definition:
          'Fonctionnement effectif du contrôle tout au long de la période, avec une constance suffisante. Elle se teste sur un échantillon étalé dans le temps, jamais sur une transaction unique.',
      },
      {
        term: 'Test de cheminement (walkthrough)',
        definition:
          'Suivi d\'une transaction (ou d\'un très petit nombre) de l\'opération initiale au solde final, en vérifiant chaque étape documentaire. Il atteste de la mise en œuvre du processus décrit, pas de son efficacité.',
      },
      {
        term: 'Test de conformité',
        definition:
          'Test du fonctionnement d\'un contrôle précis sur un échantillon de transactions tirées de la période : chaque sélection est confrontée à la règle (seuil, visa, rapprochement) et le taux d\'exception est calculé.',
      },
      {
        term: 'Test substantif',
        definition:
          'Contrôle direct des soldes ou des opérations (confirmation, rapprochement, inspection, revue analytique) qui ne repose pas sur le contrôle interne. Il devient dominant quand les contrôles du client se révèlent non fiables.',
      },
      {
        term: 'Échantillon',
        definition:
          'Sous-ensemble de la population testée, constitué avec une méthode explicite (aléatoire, par intervalles, orientée risque) et une taille justifiée. Sa représentativité conditionne l\'extrapolation des conclusions.',
      },
      {
        term: 'Exception',
        definition:
          'Écart constaté lors d\'un test de conformité : la transaction sélectionnée ne respecte pas la règle testée (absence de visa, seuil dépassé, document absent). Elle s\'évalue : cause, incidence, caractère isolé ou systémique.',
      },
      {
        term: 'Défaillance de contrôle',
        definition:
          'Contrôle absent, contourné ou inefficace sur une ou plusieurs transactions. Une défaillance expose à des anomalies ; elle n\'implique pas qu\'une anomalie comptable soit déjà présente dans les comptes.',
      },
      {
        term: 'Anomalie comptable',
        definition:
          'Erreur dans les comptes au regard du référentiel (CGNC) : doublon, mauvais montant, mauvaise période, mauvaise imputation. Elle se corrige par écriture ; elle se chiffre et se compare au seuil de signification.',
      },
      {
        term: 'Séparation des tâches',
        definition:
          'Principe selon lequel une même personne ne cumule pas l\'autorisation d\'une opération, son enregistrement et la garde des actifs. Son absence multiplie les risques de détournement dissimulable.',
      },
      {
        term: 'Feuille de test de contrôle',
        definition:
          'Document de travail qui décrit le contrôle testé, la population, la méthode et la taille de l\'échantillon, les exceptions relevées et la conclusion. Elle doit permettre à un relecteur de refaire le test.',
      },
    ],
    keyPoints: [
      'Le contrôle interne appartient au client ; l\'auditeur l\'évalue uniquement pour dimensionner ses propres travaux et formuler des recommandations.',
      'Le risque d\'anomalies significatives combine risque inhérent et risque lié au contrôle : évaluer le contrôle interne, c\'est apprécier le second terme.',
      'Trois niveaux de jugement sur un contrôle : conception, mise en œuvre, efficacité opérationnelle — chacun appelle un test différent.',
      'Test de cheminement = le processus existe comme décrit (une transaction) ; test de conformité = le contrôle a fonctionné (un échantillon) ; test substantif = les comptes sont justes (contrôle direct).',
      'Un échantillon se justifie par écrit : population, méthode de sélection, taille, périodicité — aucune sélection « au hasard » non documentée.',
      'Une exception n\'est pas une anomalie comptable : d\'abord une défaillance de contrôle à évaluer (cause, incidence, caractère systémique) avant de conclure aux comptes.',
      'Un taux d\'exception élevé ferme la porte à l\'appui sur les contrôles : l\'auditeur bascule vers des tests substantifs étendus.',
      'La conclusion d\'un test de conformité porte sur la fiabilité du contrôle, pas sur l\'exactitude des comptes ; les recommandations adressent les causes observées.',
      'Référentiel : CGNC marocain (6111, 3421, 3455, 4411, 5141…), différent du PCG français — traduisez la logique, pas les numéros.',
      'Honnêteté : scénario fictif ; chaque démarche se formule au conditionnel (« je commencerais par… », « le test consisterait à… »).',
    ],
  },
  objectives: {
    why:
      'L\'évaluation du contrôle interne est le moment où l\'auditeur décide de sa stratégie : s\'appuyer sur les contrôles du client (et alléger les tests substantifs) ou ne pas s\'y appuyer (et renforcer les contrôles directs). Savoir construire un test de conformité, le documenter et l\'interpréter est une compétence immédiatement valorisable en entretien : elle montre que l\'on comprend pourquoi l\'audit n\'examine pas toutes les transactions. C\'est aussi la porte d\'entrée des recommandations au client, donc du conseil.',
    infoSought: [
      'Les trois cycles retenus comme significatifs et la raison de ce choix',
      'La description des processus : manuel de procédures, narratifs, organigramme fonctionnel, matrice des délégations',
      'Les points de contrôle identifiés dans chaque processus et leur nature (préventif ou détectif, manuel ou automatisé)',
      'La population de chaque test et la base d\'échantillonnage disponible (journaux, numérotation des pièces)',
      'La méthode de sélection et la taille d\'échantillon retenues par l\'équipe, avec leur justification',
      'Les seuils de signification et les taux d\'exception au-delà desquels l\'appui sur les contrôles sera abandonné',
      'Le format de documentation attendu (feuilles de travail du cabinet) et le circuit de relecture',
    ],
    risksCovered: [
      'Achats non autorisés (contournement des seuils de délégation)',
      'Factures fournisseurs fictives ou non dues (absence de rapprochement avec la réception)',
      'Doublons de comptabilisation et paiements indues',
      'Erreurs de prix, de quantités, d\'imputation et de période sur les achats',
      'Ventes fictives ou omissions de ventes, erreurs de facturation',
      'Créances anciennes sans suivi et dépréciations insuffisantes',
      'Paiements non autorisés et détournements en trésorerie (bénéficiaires non contrôlés)',
      'Opérations bancaires non enregistrées, enregistrées en double ou mal saisies',
      'Suspens anciens non régularisés dans les rapprochements bancaires',
      'Séparation des tâches insuffisante (comptabilisation et encaissements par la même personne)',
    ],
  },
  preparation: {
    documents: [
      'Manuel de procédures et description narrative des trois cycles (à jour ?)',
      'Organigramme fonctionnel et matrice des délégations (seuils d\'autorisation)',
      'Journal des demandes d\'achat de l\'exercice et liasses DA / BC / BR archivées',
      'Journal des achats et grand livre des comptes 6111, 6125, 3455 et 4411',
      'Fichier fournisseurs (référencement, coordonnées bancaires) et balances fournisseurs',
      'Journal des ventes, fichier tarifs et extraits de factures clients',
      'Balance âgée clients au 31/12/2025 et preuves de relances',
      'Relevés bancaires de l\'exercice, journaux de banque et rapprochements mensuels',
      'Ordres de virement et pièces de paiement (visas, signatures)',
      'Rapports d\'anomalies et de recommandations des exercices précédents',
    ],
    questionsToAsk: [
      'Pourquoi ces trois cycles ont-ils été jugés significatifs, et quels contrôles l\'équipe veut-elle tester exactement ?',
      'Le manuel de procédures est-il à jour, et qui sont les intervenants réels de chaque étape ?',
      'Quelles populations serviront de base d\'échantillonnage et comment y accéder (journaux, numérotation continue) ?',
      'Quelle méthode de sélection et quelle taille d\'échantillon le senior a-t-il arrêtées, et pourquoi ?',
      'Quel taux d\'exception est jugé acceptable avant de renoncer à l\'appui sur les contrôles ?',
      'Comment les exceptions seront-elles remontées et discutées avec le client ?',
      'Quel format de feuille de test le cabinet utilise-t-il, et qui relit les conclusions ?',
    ],
    precautions: [
      'Ne jamais présenter le scénario comme vécu : tout est fictif et conçu pour s\'entraîner.',
      'Formuler les démarches au conditionnel jusqu\'à ce qu\'elles soient réellement pratiquées.',
      'Ne pas conclure à l\'efficacité d\'un contrôle sur une seule transaction : un cheminement ne remplace pas un test de conformité.',
      'Ne pas confondre exception (défaillance de contrôle) et anomalie comptable (erreur dans les comptes) : l\'une se recommande, l\'autre se corrige.',
      'Vérifier chaque calcul de taux et d\'incidence avant de le citer : un pourcentage faux ruine la crédibilité du test.',
      'Respecter la confidentialité des documents du client, même fictifs, et ne rien emporter hors du dossier.',
    ],
  },
  method: [
    {
      title: 'Recadrer l\'évaluation dans la mission d\'audit',
      description:
        'Relire le plan de mission : pourquoi les cycles Achats-Fournisseurs, Ventes-Clients et Trésorerie sont testés, quels contrôles l\'équipe envisage d\'utiliser comme éléments probants, et ce que la stratégie deviendrait en cas de défaillance.',
      why: 'L\'évaluation du contrôle interne n\'est pas une fin : elle dimensionne les travaux substantifs et peut les alléger — à condition d\'être conduite avec rigueur.',
    },
    {
      title: 'Collecter la documentation des processus',
      description:
        'Obtenir le manuel de procédures, l\'organigramme fonctionnel et la matrice des délégations ; confronter la description théorique aux entretiens avec les opérationnels (achats, magasin, comptabilité, trésorerie).',
      why: 'Un test contre une règle mal comprise ne prouve rien : il faut d\'abord connaître la règle telle qu\'elle doit s\'appliquer.',
    },
    {
      title: 'Décrire chaque processus par étapes documentaires',
      description:
        'Pour le cycle Achats : DA, BC, BR, facture, comptabilisation, règlement. Pour les ventes : commande, validation d\'encours, BL, facture, encaissement. Pour la trésorerie : ordre de paiement, visa, virement, relevé, rapprochement.',
      why: 'La chaîne documentaire fixe les points où un contrôle peut s\'exercer — et ceux où l\'auditeur testera.',
    },
    {
      title: 'Identifier et classer les points de contrôle',
      description:
        'Lister les contrôles existants et les qualifier : préventif ou détectif, manuel ou automatisé, formel ou de fait. Repérer les séparations de tâches réelles, pas seulement théoriques.',
      why: 'La nature du contrôle détermine le test adapté : on ne teste pas un rapprochement comme une autorisation.',
    },
    {
      title: 'Évaluer la conception des contrôles',
      description:
        'Se demander, contrôle par contrôle, s\'il est conçu pour prévenir ou détecter le risque visé : le seuil de délégation couvre-t-il les montants en jeu ? le rapprochement porte-t-il sur les prix ET les quantités ?',
      why: 'Un contrôle mal conçu doit être signalé au client dès cette étape : inutile de tester plus loin son efficacité.',
    },
    {
      title: 'Exécuter les tests de cheminement',
      description:
        'Suivre une transaction de bout en bout par cycle, avec copie de la liasse documentaire complète, et repérer les écarts entre la description et la réalité (étapes sautées, visas absents, cumuls de fonctions).',
      why: 'Le cheminement atteste de la mise en œuvre du processus ; il révèle la plupart des faiblesses de conception avant tout sondage.',
    },
    {
      title: 'Décider de l\'appui sur les contrôles',
      description:
        'Avec le senior, arbitrer : si les contrôles paraissent conçus et appliqués, planifier des tests de conformité ; sinon, renoncer à l\'appui et dimensionner des tests substantifs renforcés.',
      why: 'Tester l\'efficacité d\'un contrôle inexistant serait une perte de temps ; l\'arbitrage économise des heures de mission.',
    },
    {
      title: 'Constituer les échantillons',
      description:
        'Définir la population (nombre de pièces, numérotation), choisir la méthode (aléatoire, par intervalles, orientée risque), fixer la taille et répartir les sélections sur la période (y compris des dates proches de la clôture).',
      why: 'Un échantillon non représentatif ou non documenté interdit toute extrapolation : la conclusion du test serait inutilisable.',
    },
    {
      title: 'Exécuter les tests de conformité',
      description:
        'Pour chaque sélection, confronter la pièce à la règle : le visa existe-t-il ? le montant respecte-t-il le seuil ? le rapprochement facture / BC / BR est-il prouvé ? Consigner chaque résultat, conforme ou non.',
      why: 'Le taux d\'exception qui en sort est la mesure chiffrée de la fiabilité du contrôle — le cœur du livrable.',
    },
    {
      title: 'Documenter chaque test au fur et à mesure',
      description:
        'Renseigner la feuille de test : contrôle testé, population, méthode et taille de l\'échantillon, sélections référencées, exceptions, calculs. Marquer les copies et référencer les pièces examinées.',
      why: 'Un test non documenté est un test non prouvé : la piste d\'audit doit permettre de le refaire.',
    },
    {
      title: 'Évaluer chaque exception',
      description:
        'Pour chaque écart : rechercher la cause (négligence, contournement, absence de procédure), chiffrer l\'incidence, déterminer si elle est isolée ou systémique, et demander au client les éléments complémentaires utiles.',
      why: 'La même exception peut être une coquille isolée ou le symptôme d\'un contrôle inexistant : le traitement diffère du tout au tout.',
    },
    {
      title: 'Étendre les travaux si nécessaire',
      description:
        'Si une exception suggère un caractère systémique, étendre l\'échantillon ou tester la population entière sur le point concerné (par exemple toutes les factures sans BR), puis recalculer le taux d\'exception.',
      why: 'L\'extension transforme un doute en mesure : elle évite de conclure sur un échantillon devenu suspect.',
    },
    {
      title: 'Conclure sur la fiabilité des contrôles',
      description:
        'Rédiger la conclusion par contrôle testé : fiable (appui possible, contrôle étendu), partiellement fiable (appui limité, contrôles complémentaires), non fiable (approche substantive). Comparer les incidences cumulées au seuil de signification.',
      why: 'La conclusion doit être actionnable : elle déclenche la stratégie d\'audit des travaux substantifs.',
    },
    {
      title: 'Formuler les recommandations et transmettre',
      description:
        'Transformer les causes observées en recommandations concrètes (visa obligatoire, verrouillage du fichier fournisseurs, suivi des suspens), puis soumettre les feuilles au senior pour relecture et intégration au dossier.',
      why: 'Les recommandations constituent la valeur ajoutée visible pour le client ; la relecture garantit la qualité avant transmission.',
    },
  ],
  exercises: [
    // ============================ EXERCICE 1 ============================
    {
      id: 'fidumac-m2-ex1',
      title: 'Test de cheminement sur le cycle Achats-Fournisseurs',
      cycle: 'Achats-Fournisseurs',
      context:
        'Premier travail sur le contrôle interne de Distra Maroc (fictif). M. Sabri vous demande de cheminer une transaction d\'achat de bout en bout : de la demande d\'achat au virement de règlement, pour vérifier que le processus décrit dans le manuel de procédures existe réellement. Scénario entièrement fictif ; montants en MAD.',
      documents: [
        {
          kind: 'table',
          name: 'Cheminement d\'une transaction — DA-2025-0871 (support fictif d\'entraînement)',
          columns: ['Étape', 'Document', 'Date', 'Intervenant', 'Contrôle théorique', 'Observation'],
          rows: [
            ['1. Expression du besoin', 'Demande d\'achat DA-2025-0871', '04/02/2025', 'Chef de rayon (M. Alaoui)', 'DA signée avec motif', 'Signée, motif mentionné'],
            ['2. Autorisation', 'DA visée', '05/02/2025', 'Directeur des achats (Mme Bennis)', 'Seuil de délégation : 20 000,00 MAD TTC', 'Visa apposé — montant 18 600,00 MAD TTC dans le seuil'],
            ['3. Commande', 'Bon de commande BC-2025-0453', '05/02/2025', 'Service achats', 'BC rattaché à la DA', 'Quantités conformes à la DA'],
            ['4. Réception', 'Bon de réception BR-2025-0612', '07/02/2025', 'Magasinier (M. Chafik)', 'BR contrôlé contre le BC (quantités)', 'BR signé et daté, quantités conformes'],
            ['5. Facture', 'Facture FRS-2025-1188 — 18 600,00 MAD TTC', '08/02/2025', 'Comptabilité (Mme Raji)', 'Rapprochement facture / BC / BR avant saisie', 'Aucun visa de rapprochement sur la liasse'],
            ['6. Comptabilisation', 'Journal des achats, pièce n° 2401', '10/02/2025', 'Comptabilité (Mme Raji)', 'Imputation conforme au plan de comptes CGNC', '6111 (15 500,00) / 3455 (3 100,00) / 4411 (18 600,00)'],
            ['7. Règlement', 'Virement VIR-2025-09201', '28/02/2025', 'Trésorerie (M. Ziani)', 'Facture visée ; double signature ≥ 10 000,00 MAD', 'Trésorier + DAF, facture visée'],
          ],
          note: 'Document fictif. HT 15 500,00 MAD + TVA 20 % (3 100,00 MAD) = TTC 18 600,00 MAD. Un test de cheminement suit une transaction unique : il atteste de la mise en œuvre du processus, pas de son efficacité sur la période.',
        },
      ],
      questions: [
        {
          id: 'fidumac-m2-ex1-q1',
          question: 'Quel est l\'objectif premier d\'un test de cheminement ?',
          type: 'mcq',
          options: [
            'Mesurer le taux d\'erreur des comptes du cycle',
            'Vérifier que le processus tel que décrit dans le manuel existe réellement et fonctionne comme décrit, en suivant une transaction de bout en bout',
            'Contrôler le solde du compte fournisseur à la clôture',
            'Sélectionner un échantillon représentatif de la population',
          ],
          expected: '1',
          explanation:
            'Le cheminement (walkthrough) suit une transaction de l\'initiateur au solde final pour confronter la description théorique à la réalité : étapes, documents, intervenants. Il ne mesure ni un taux d\'erreur (c\'est le test de conformité) ni un solde (test substantif).',
        },
        {
          id: 'fidumac-m2-ex1-q2',
          question: 'Quel document atteste que les marchandises ont bien été reçues ?',
          type: 'mcq',
          options: [
            'La demande d\'achat signée',
            'Le bon de commande émis par le service achats',
            'Le bon de réception signé et daté par le magasinier',
            'La facture visée pour paiement par la trésorerie',
          ],
          expected: '2',
          explanation:
            'Seul le bon de réception (BR) prouve l\'arrivée physique des marchandises : il est signé par le magasinier et rapproché du bon de commande. La DA exprime un besoin, le BC une commande, la facture une dette — aucun ne prouve la réception.',
        },
        {
          id: 'fidumac-m2-ex1-q3',
          question: 'Sur quels points le rapprochement facture / BC / BR doit-il porter ?',
          type: 'multi',
          options: [
            'Les quantités facturées par rapport aux quantités reçues (BR)',
            'Les prix unitaires facturés par rapport aux prix commandés (BC)',
            'Les références croisées DA / BC / BR / facture',
            'Les conditions de paiement et la devise',
            'La couleur du papier de la facture fournisseur',
          ],
          expected: ['0', '1', '2', '3'],
          explanation:
            'Le rapprochement triangulaire porte sur tout ce qui peut créer un écart : quantités (facture vs BR), prix (facture vs BC), références et conditions. L\'aspect physique du document n\'est pas un point de contrôle.',
        },
        {
          id: 'fidumac-m2-ex1-q4',
          question: 'Le test de cheminement suffit à conclure que le contrôle « rapprochement facture / BC / BR » fonctionne avec efficacité opérationnelle sur toute la période.',
          type: 'truefalse',
          options: ['Vrai', 'Faux'],
          expected: '1',
          explanation:
            'Faux. Une seule transaction ne prouve qu\'une chose : à cette date, le processus a été (ou non) appliqué. L\'efficacité opérationnelle se teste sur un échantillon étalé sur la période — c\'est le test de conformité.',
        },
        {
          id: 'fidumac-m2-ex1-q5',
          question:
            'L\'observation relève qu\'aucun visa de rapprochement ne figure sur la liasse de la facture FRS-2025-1188. Qualifiez l\'écart et décrivez (au conditionnel) votre démarche : que testez-vous ensuite, et comment le documentez-vous ?',
          type: 'open',
          keywords: ['conception', 'mise en œuvre', 'écart', 'test de conformité', 'échantillon', 'documenter', 'conclusion'],
          explanation:
            'Réponse attendue (exemple) : l\'absence de visa est un écart entre le manuel (contrôle prévu) et la réalité observée — un doute sur la mise en œuvre du contrôle, donc sur son efficacité. Dans ce cas, je documenterai le fait (copie de la liasse, référence de la pièce), puis un test de conformité sur un échantillon de factures vérifierait si l\'absence de rapprochement est isolée ou systémique. La conclusion distinguerait « contrôle conçu mais non appliqué » d\'« anomalie comptable avérée », et une recommandation formaliserait le visa de rapprochement.',
        },
      ],
      risks: ['Achats non autorisés', 'Factures fictives', 'Absence de réception', 'Séparation insuffisante des tâches'],
      solutionSummary:
        'Dans ce cas, je commencerais par confronter chaque étape du tableau au manuel de procédures : ici, six étapes sur sept sont conformes (DA signée, visa dans le seuil, BC rattaché, BR signé, imputation CGNC correcte, double signature), mais le contrôle clé du cycle — le rapprochement facture / BC / BR avant comptabilisation — n\'est pas prouvé, faute de visa sur la liasse. La démarche consisterait alors à documenter l\'écart (fait observé, référence de pièce, montant 18 600,00 MAD TTC), à le qualifier (doute sur la mise en œuvre d\'un contrôle bien conçu), puis à proposer un test de conformité : un échantillon de factures de l\'exercice à confronter à la règle du rapprochement, avec calcul du taux d\'exception. Si l\'écart se confirmait sur l\'échantillon, la conclusion serait « contrôle non fiable » : pas d\'appui, extension des tests substantifs sur les achats, et recommandation au client (visa obligatoire, rapprochement formalisé). À l\'oral, cette distinction entre « une transaction suivie » et « un contrôle testé sur la période » est un marqueur de rigueur très apprécié.',
      interviewTips: [
        'Dites « cheminement » ou « walkthrough » et précisez « une transaction suivie de bout en bout » : le vocabulaire exact crédibilise immédiatement.',
        'Présentez toujours le constat (pas de visa) séparé de l\'interprétation (contrôle non appliqué) : les faits d\'abord, le jugement ensuite.',
      ],
    },
    // ============================ EXERCICE 2 ============================
    {
      id: 'fidumac-m2-ex2',
      title: 'Test de conformité : autorisation des achats',
      cycle: 'Achats-Fournisseurs',
      context:
        'Le manuel de procédures de Distra Maroc (fictif) fixe des seuils de délégation : le chef de rayon valide les DA jusqu\'à 5 000,00 MAD TTC, le directeur des achats jusqu\'à 20 000,00 MAD TTC, et au-delà la validation du directeur général est requise. Vous testez le contrôle « autorisation des achats » sur un échantillon aléatoire de 12 demandes d\'achat tirées des 640 DA de l\'exercice 2025. Scénario fictif.',
      documents: [
        {
          kind: 'table',
          name: 'Test de conformité — échantillon de 12 demandes d\'achat (fictif)',
          columns: ['N° DA', 'Date', 'Montant TTC (MAD)', 'Émetteur de la demande', 'Visa hiérarchique'],
          rows: [
            ['DA-2025-1001', '03/03/2025', 3200.0, 'Chef de rayon', 'Oui'],
            ['DA-2025-1002', '04/03/2025', 7500.0, 'Chef de rayon', 'Oui'],
            ['DA-2025-1003', '06/03/2025', 18400.0, 'Directeur des achats', 'Oui'],
            ['DA-2025-1004', '07/03/2025', 21500.0, 'Directeur des achats', 'Oui'],
            ['DA-2025-1005', '10/03/2025', 1250.0, 'Chef de rayon', 'Oui'],
            ['DA-2025-1006', '12/03/2025', 9800.0, 'Directeur des achats', 'Oui'],
            ['DA-2025-1007', '14/03/2025', 4300.0, 'Chef de rayon', 'Non'],
            ['DA-2025-1008', '17/03/2025', 22700.0, 'Directeur général', 'Oui'],
            ['DA-2025-1009', '19/03/2025', 6900.0, 'Directeur des achats', 'Oui'],
            ['DA-2025-1010', '21/03/2025', 15000.0, 'Directeur des achats', 'Oui'],
            ['DA-2025-1011', '24/03/2025', 2800.0, 'Chef de rayon', 'Oui'],
            ['DA-2025-1012', '26/03/2025', 24500.0, 'Directeur des achats', 'Non'],
          ],
          note: 'Document fictif. Seuils de délégation : chef de rayon ≤ 5 000,00 MAD TTC ; directeur des achats ≤ 20 000,00 MAD TTC ; au-delà, directeur général. Population : 640 DA sur l\'exercice 2025. Sélection aléatoire.',
        },
      ],
      questions: [
        {
          id: 'fidumac-m2-ex2-q1',
          question: 'Quelles demandes d\'achat présentent une exception au contrôle testé ?',
          type: 'multi',
          options: [
            'DA-2025-1002 : 7 500,00 MAD émise par un chef de rayon (seuil : 5 000,00 MAD)',
            'DA-2025-1004 : 21 500,00 MAD validée par le directeur des achats (seuil : 20 000,00 MAD)',
            'DA-2025-1007 : 4 300,00 MAD sans visa hiérarchique',
            'DA-2025-1008 : 22 700,00 MAD validée par le directeur général',
            'DA-2025-1012 : 24 500,00 MAD émise et visée par le directeur des achats sans validation du directeur général',
          ],
          expected: ['0', '1', '2', '4'],
          explanation:
            'Quatre exceptions : DA-1002 (montant au-dessus du seuil du chef de rayon), DA-1004 (montant au-delà des 20 000,00 MAD du directeur des achats, donc DG requise), DA-1007 (visa absent) et DA-1012 (double non-conformité : seuil dépassé ET visa du seul directeur des achats). DA-1008 est conforme : le DG peut valider 22 700,00 MAD.',
        },
        {
          id: 'fidumac-m2-ex2-q2',
          question: 'Quel est le nombre d\'exceptions détectées dans l\'échantillon ?',
          type: 'numeric',
          expected: 4,
          explanation:
            '4 transactions en exception sur 12 testées : DA-1002, DA-1004, DA-1007 et DA-1012.',
        },
        {
          id: 'fidumac-m2-ex2-q3',
          question: 'Quel est le taux d\'exception de ce test de conformité (en %) ?',
          type: 'numeric',
          expected: 33.33,
          explanation:
            'Taux d\'exception = 4 exceptions / 12 sélectionnées = 33,33 %. Un tel taux sur un contrôle d\'autorisation interdit de considérer le contrôle comme fiable.',
        },
        {
          id: 'fidumac-m2-ex2-q4',
          question: 'Quelle est la conséquence la plus probable d\'un tel taux d\'exception sur la stratégie d\'audit ?',
          type: 'mcq',
          options: [
            'Aucune conséquence : le contrôle reste utilisable comme élément probant',
            'Le contrôle d\'autorisation ne peut pas être jugé fiable : l\'équipe renonce à l\'appui sur ce contrôle et renforce les tests substantifs sur les achats (réalité, justification, doublons)',
            'La mission s\'arrête : il faut refuser de certifier les comptes',
            'Il suffit de retirer les 4 DA en exception de l\'échantillon pour conclure favorablement',
          ],
          expected: '1',
          explanation:
            'Un taux d\'exception de 33,33 % sur le contrôle testé signifie qu\'il n\'a pas fonctionné avec efficacité : pas d\'appui possible. La réponse d\'audit est l\'extension des contrôles substantifs (vérification directe des opérations et des soldes). On ne « retire » jamais les exceptions d\'un échantillon, et l\'opinion n\'est engagée qu\'au stade des anomalies constatées et cumulées au seuil.',
        },
        {
          id: 'fidumac-m2-ex2-q5',
          question:
            'Rédigez (au conditionnel) la conclusion de ce test de conformité et la recommandation associée au client.',
          type: 'open',
          keywords: ['exception', 'taux', 'échantillon', 'conclusion', 'recommandation', 'substantif', 'délégation'],
          explanation:
            'Réponse attendue (exemple) : sur un échantillon aléatoire de 12 DA tirées des 640 de l\'exercice, 4 présentent une exception au contrôle d\'autorisation (33,33 %) : seuils de délégation dépassés ou visa absent. La conclusion serait que le contrôle d\'autorisation n\'est pas fiable, ce qui conduirait à renoncer à l\'appui et à étendre les tests substantifs sur le cycle achats. La recommandation porterait sur la formalisation de la matrice de délégation (validation systématique conforme au seuil, blocage des commandes sans visa) et sur une information de la direction.',
        },
      ],
      risks: ['Achats non autorisés', 'Contournement des seuils', 'Contrôle non fiable'],
      solutionSummary:
        'La procédure consisterait à confronter chaque sélection à la matrice de délégations : DA-1002 (7 500,00 MAD par un chef de rayon limité à 5 000,00), DA-1004 (21 500,00 MAD validée par le directeur des achats limité à 20 000,00), DA-1007 (4 300,00 MAD sans visa) et DA-1012 (24 500,00 MAD sans validation du directeur général) constituent 4 exceptions sur 12, soit un taux de 33,33 %. Dans ce cas, je documenterais chaque exception (référence, montant, nature de la non-conformité), je vérifierais auprès du client si des régularisations a posteriori existent, puis je conclurais à la non-fiabilité du contrôle d\'autorisation : l\'équipe ne s\'y appuierait pas et renforcerait les tests substantifs sur les achats (rapprochement facture / BC / BR sur un échantillon élargi, recherche de doublons, justification des paiements). La recommandation adresserait la cause observée : délégations non appliquées, absence de blocage des commandes non visées, et proposerait une information périodique des DA hors seuil à la direction. À l\'oral, le réflexe « taux d\'exception → décision d\'appui → incidence sur l\'étendue des travaux » montre que l\'on maîtrise la finalité du contrôle interne en audit.',
      interviewTips: [
        'Annoncez toujours la fraction (4/12) avant le pourcentage : le relecteur peut vérifier, le recruteur voit la méthode.',
        'Ne dites jamais « le contrôle est mauvais » : dites « le contrôle n\'est pas fiable sur la période testée, l\'appui n\'est pas possible ».',
      ],
    },
    // ============================ EXERCICE 3 ============================
    {
      id: 'fidumac-m2-ex3',
      title: 'Rapprochement facture / BC / réception : prix, quantités et facture sans réception',
      cycle: 'Achats-Fournisseurs',
      context:
        'Toujours chez Distra Maroc (fictif), vous testez le contrôle « rapprochement facture / bon de commande / bon de réception avant comptabilisation » sur un échantillon de 6 factures fournisseurs. Le manuel exige un visa de rapprochement prouvant que quantités et prix ont été contrôlés. Scénario fictif ; montants en MAD.',
      documents: [
        {
          kind: 'table',
          name: 'Test de conformité — rapprochement facture / BC / BR, échantillon de 6 factures (fictif)',
          columns: ['N° facture', 'Fournisseur', 'Montant facturé TTC (MAD)', 'BC rattaché', 'BR au dossier', 'Prix facturés vs BC', 'Quantités facturées vs BR', 'Écart valorisé (MAD)'],
          rows: [
            ['FRS-2025-3310', 'Atlas Emballages', 12400.0, 'BC-2025-0712', 'Oui', 'Conformes', 'Conformes', 0.0],
            ['FRS-2025-3311', 'Sud Hygiène', 8900.0, 'BC-2025-0718', 'Non (introuvable)', 'Non vérifiables', 'Non vérifiables', 8900.0],
            ['FRS-2025-3312', 'Atlas Emballages', 15750.0, 'BC-2025-0724', 'Oui', '1 050,00 /u facturé contre 950,00 /u au BC', 'Conformes', 1500.0],
            ['FRS-2025-3313', 'Maroc Nettoyage', 6300.0, 'BC-2025-0731', 'Partiel : BR pour 4 200,00 MAD', 'Conformes', '2 100,00 MAD facturés sans réception', 2100.0],
            ['FRS-2025-3314', 'Sud Hygiène', 9800.0, 'BC-2025-0740', 'Oui', 'Conformes', 'Conformes', 0.0],
            ['FRS-2025-3315', 'Atlas Emballages', 4650.0, 'BC-2025-0747', 'Oui', 'Conformes', 'Conformes', 0.0],
          ],
          note: 'Document fictif. Écart valorisé FRS-3312 : (1 050,00 − 950,00) × 15 unités = 1 500,00 MAD. Écart FRS-3313 : 6 300,00 − 4 200,00 = 2 100,00 MAD. Pour FRS-3311, l\'écart correspond au montant facturé sans preuve de réception.',
        },
      ],
      questions: [
        {
          id: 'fidumac-m2-ex3-q1',
          question: 'Quel est le montant total des écarts de prix et de quantités constatés (hors facture sans réception) ?',
          type: 'numeric',
          expected: 3600,
          explanation:
            'FRS-3312 : (1 050,00 − 950,00) × 15 = 1 500,00 MAD d\'écart de prix. FRS-3313 : 6 300,00 − 4 200,00 = 2 100,00 MAD facturés sans réception correspondante. Total : 1 500,00 + 2 100,00 = 3 600,00 MAD.',
        },
        {
          id: 'fidumac-m2-ex3-q2',
          question: 'Quel montant a été comptabilisé sans preuve de réception ?',
          type: 'numeric',
          expected: 8900,
          explanation:
            'La facture FRS-2025-3311 (8 900,00 MAD TTC) a été comptabilisée alors que le bon de réception est introuvable : 8 900,00 MAD de charge sans justification d\'exécution de la prestation.',
        },
        {
          id: 'fidumac-m2-ex3-q3',
          question: 'Quel est le risque principal attaché à la facture FRS-2025-3311 ?',
          type: 'mcq',
          options: [
            'Un simple retard d\'archivage sans aucune conséquence possible',
            'Une charge comptabilisée sans preuve de réception : facture potentiellement fictive, non due, ou prestation non exécutée',
            'Une erreur de TVA sur la facture',
            'Un doublon de paiement certain',
          ],
          expected: '1',
          explanation:
            'Sans BR, rien ne prouve que la prestation a été reçue : la charge de 8 900,00 MAD repose sur un document unique émis par le fournisseur. C\'est le schéma type de la facture fictive ou non due — à corriger ou provisionner si aucune preuve n\'est obtenue.',
        },
        {
          id: 'fidumac-m2-ex3-q4',
          question: 'Quels contrôles internes ont fait défaut sur cet échantillon ?',
          type: 'multi',
          options: [
            'L\'absence de rapprochement facture / BC / BR pour FRS-2025-3311 (comptabilisée sans BR)',
            'L\'absence de contrôle des prix unitaires pour FRS-2025-3312 (facturés au-dessus du BC)',
            'La comptabilisation de FRS-2025-3313 sans BR couvrant la totalité du montant',
            'Le refus du fournisseur Atlas Emballages d\'émettre des factures conformes',
            'L\'absence de double signature sur les virements de règlement',
          ],
          expected: ['0', '1', '2'],
          explanation:
            'Trois défaillances du même contrôle : le rapprochement triangulaire n\'a pas été fait (3311), pas porté sur les prix (3312), pas porté sur les quantités (3313). Les options 4 et 5 sortent du périmètre du contrôle testé (et ne résultent d\'aucun fait observé ici).',
        },
        {
          id: 'fidumac-m2-ex3-q5',
          question:
            'Face à FRS-2025-3311, décrivez votre démarche : quels éléments demandez-vous, quels travaux étendez-vous, et quelle conclusion provisoire documentez-vous ?',
          type: 'open',
          keywords: ['réception', 'fournisseur', 'confirmation', 'extension', 'échantillon', 'régularisation', 'documenter'],
          explanation:
            'Réponse attendue (exemple) : je demanderais au client le BR ou tout justificatif d\'exécution (bon de livraison du prestataire, contrat, PV d\'intervention). À défaut, une confirmation directe du fournisseur Sud Hygiène sur la réalité de la facture serait sollicitée. Si la preuve reste manquante, l\'échantillon serait étendu aux autres factures sans BR pour mesurer le caractère systémique, et une proposition de correction (extourne) ou de provision serait chiffrée. Le tout serait documenté : fait, références, montant, démarche, réponse du client, conclusion provisoire.',
        },
      ],
      risks: ['Factures fictives', 'Erreur de prix', 'Absence de réception', 'Paiement indu'],
      solutionSummary:
        'Dans ce cas, je commencerais par chiffrer les exceptions : 1 500,00 MAD d\'écart de prix (FRS-3312 : prix facturé supérieur au BC, surfacturation à faire rectifier par avoir), 2 100,00 MAD facturés sans réception correspondante (FRS-3313 : à régulariser sur le BR complémentaire ou à contester), et 8 900,00 MAD comptabilisés sans aucune preuve de réception (FRS-2025-3311). La procédure consisterait ensuite à demander les justificatifs manquants, à circulariser le fournisseur pour la facture litigieuse, puis — l\'absence de visa de rapprochement étant déjà constatée au cheminement — à considérer le contrôle comme non fiable et à étendre les tests substantifs sur les factures sans BR. Les corrections attendues : avoir fournisseur de 1 500,00 MAD (prix), contestation ou BR complémentaire pour 2 100,00 MAD, et extourne ou provision pour 8 900,00 MAD si aucune preuve n\'est fournie. À l\'oral, soulignez la hiérarchie des incidences : un écart de prix se corrige par avoir ; une facture sans réception met en cause la réalité même de la charge.',
      interviewTips: [
        'Distinguez les trois familles d\'écarts : prix (contester / avoir), quantités (réception à prouver), absence totale de BR (réalité de la charge en cause).',
        'Le mot « circularisation » (confirmation directe du tiers) est un réflexe attendu face à une facture non justifiée.',
      ],
    },
    // ============================ EXERCICE 4 ============================
    {
      id: 'fidumac-m2-ex4',
      title: 'Doublons, avoirs non comptabilisés et erreur d\'imputation',
      cycle: 'Achats-Fournisseurs',
      context:
        'Troisième test du cycle Achats chez Distra Maroc (fictif) : le contrôle de « non-doublon » à la saisie et le suivi des avoirs fournisseurs. Vous examinez le journal des achats d\'avril 2025, le compte du fournisseur Atlas Emballages et les avoirs reçus. Scénario fictif ; montants en MAD.',
      documents: [
        {
          kind: 'table',
          name: 'Journal des achats — extrait avril 2025 (fictif)',
          columns: ['N° pièce', 'Date', 'Comptes mouvementés', 'Libellé', 'Montant TTC (MAD)'],
          rows: [
            ['AC-2025-0412', '12/04/2025', '6111 / 3455 / 4411', 'Facture FRS-2025-2241 — Atlas Emballages', 17160.0],
            ['AC-2025-0431', '27/04/2025', '6111 / 3455 / 4411', 'Facture FRS-2025-2241 — Atlas Emballages (saisie)', 17160.0],
            ['AC-2025-0450', '30/04/2025', '6111 / 3455 / 4411', 'Fournitures de bureau — BC-2025-0810', 11280.0],
          ],
          note: 'Document fictif. Facture FRS-2025-2241 : HT 14 300,00 + TVA 20 % (2 860,00) = TTC 17 160,00 MAD. La référence de facture fournisseur n\'est pas contrôlée comme clé unique à la saisie.',
        },
        {
          kind: 'table',
          name: 'Compte 4411 — Fournisseur Atlas Emballages, extrait 2025 (fictif)',
          columns: ['Date', 'Libellé', 'Débit (MAD)', 'Crédit (MAD)'],
          rows: [
            ['12/04/2025', 'Facture FRS-2025-2241 (pièce AC-2025-0412)', '', 17160.0],
            ['27/04/2025', 'Facture FRS-2025-2241 (pièce AC-2025-0431)', '', 17160.0],
            ['15/05/2025', 'Règlement VIR-2025-11234', 17160.0, ''],
            ['15/06/2025', 'Règlement VIR-2025-11890', 17160.0, ''],
            ['30/06/2025', 'Solde provisoire', '', 0.0],
          ],
          note: 'Document fictif. La facture a été comptabilisée deux fois et réglée deux fois : le compte est soldé, mais la charge et la TVA récupérable sont doublées, et le second règlement est indu.',
        },
        {
          kind: 'table',
          name: 'Avoirs fournisseurs reçus et non comptabilisés (fictif)',
          columns: ['N° avoir', 'Fournisseur', 'Date de réception', 'Objet', 'Montant TTC (MAD)'],
          rows: [
            ['AVR-2025-0392', 'Atlas Emballages', '15/11/2025', 'Retour d\'emballages facturés à tort', 2760.0],
          ],
          note: 'Document fictif. L\'avoir est archivé au service réception mais n\'a jamais été saisi en comptabilité.',
        },
      ],
      questions: [
        {
          id: 'fidumac-m2-ex4-q1',
          question: 'Quel est le montant du paiement indu lié au doublon de la facture FRS-2025-2241 ?',
          type: 'numeric',
          expected: 17160,
          explanation:
            'La facture (17 160,00 MAD TTC) a été réglée deux fois (VIR-2025-11234 et VIR-2025-11890) : le second règlement de 17 160,00 MAD est indu et constitue une créance sur le fournisseur à récupérer ou à imputer.',
        },
        {
          id: 'fidumac-m2-ex4-q2',
          question: 'Quelle est l\'incidence totale de ces anomalies sur le compte fournisseur (doublon + avoir non comptabilisé) ?',
          type: 'numeric',
          expected: 19920,
          explanation:
            'Doublon comptabilisé et payé deux fois : 17 160,00 MAD de charge et de TVA en trop, et un trop-payé de 17 160,00 MAD à récupérer. Avoir non comptabilisé : 2 760,00 MAD de dette payée à tort / charge non réduite. Incidence totale sur les relations fournisseurs : 17 160,00 + 2 760,00 = 19 920,00 MAD.',
        },
        {
          id: 'fidumac-m2-ex4-q3',
          question: 'Quelle écriture corrigerait le doublon de la facture FRS-2025-2241 ?',
          type: 'mcq',
          options: [
            'Débit 4411 Fournisseurs 17 160,00 / Crédit 6111 Achats 14 300,00 / Crédit 3455 TVA récupérable 2 860,00',
            'Débit 6111 14 300,00 / Crédit 4411 17 160,00',
            'Débit 3413 Fournisseurs, avances et acomptes 17 160,00 / Crédit 6111 14 300,00 / Crédit 3455 2 860,00',
            'Aucune écriture : il suffit d\'annuler le second virement en banque',
          ],
          expected: '2',
          explanation:
            'La facture ayant été comptabilisée ET payée deux fois, l\'extourne de la seconde saisie annule la charge excédentaire (6111 : 14 300,00 HT) et la TVA récupérée en double (3455 : 2 860,00), pour un débit de 17 160,00 qui matérialise la créance sur le fournisseur (3413, avances et acomptes) au titre du trop-payé. L\'option 1 conviendrait si la facture n\'avait été payée qu\'une fois ; l\'option 4 confond comptabilité et trésorerie.',
        },
        {
          id: 'fidumac-m2-ex4-q4',
          question: 'La saisie des fournitures de bureau (pièce AC-2025-0450) au compte 6111 « Achats de marchandises » plutôt qu\'au 6125 « Achats de fournitures de bureau » a quelle incidence ?',
          type: 'mcq',
          options: [
            'Aucune incidence sur le résultat total, mais le classement déforme la marge sur marchandises et la revue analytique du compte 6111',
            'Elle majore le résultat de 11 280,00 MAD',
            'Elle minore le résultat de 11 280,00 MAD',
            'Elle n\'a aucune incidence du tout, même sur l\'analyse des comptes',
          ],
          expected: '0',
          explanation:
            'C\'est une erreur d\'imputation entre deux comptes de charges (6111 → 6125) : le résultat global est inchangé, mais la marge sur ventes de marchandises et la comparabilité N/N-1 du 6111 sont faussées. La correction est un simple reclassement.',
        },
        {
          id: 'fidumac-m2-ex4-q5',
          question:
            'Quels contrôles internes permettraient d\'éviter ces trois anomalies ? Proposez une recommandation par anomalie.',
          type: 'open',
          keywords: ['doublon', 'référence', 'unique', 'lettrage', 'avoir', 'rapprochement', 'imputation'],
          explanation:
            'Réponse attendue (exemple) : contre les doublons, un contrôle de la référence facture fournisseur comme clé unique à la saisie (blocage informatique) et le lettrage systématique du compte fournisseur ; contre les avoirs perdus, une procédure d\'enregistrement des avoirs dès réception avec rapprochement des retours ; contre les erreurs d\'imputation, un plan de comptes guidé à la saisie et une revue mensuelle de la balance par le responsable comptable. Chaque recommandation serait accompagnée d\'un exemple chiffré tiré du test.',
        },
      ],
      risks: ['Doublons', 'Paiement indu', 'Erreur d\'imputation', 'Avoirs non comptabilisés'],
      solutionSummary:
        'La démarche consisterait à reconstituer le fil de chaque anomalie : la facture FRS-2025-2241 (17 160,00 MAD TTC) saisie deux fois (pièces AC-0412 et AC-0431) et payée deux fois, générant un trop-payé de 17 160,00 MAD et une charge excédentaire de 14 300,00 MAD HT ; l\'avoir AVR-2025-0392 de 2 760,00 MAD jamais comptabilisé ; et l\'imputation erronée de 11 280,00 TTC de fournitures de bureau au 6111 au lieu du 6125. L\'incidence cumulée sur les relations fournisseurs s\'élèverait à 19 920,00 MAD. Dans ce cas, je proposerais : l\'extourne du doublon avec inscription du trop-payé en 3413 (avances fournisseurs) en attente de récupération ou d\'imputation, la comptabilisation de l\'avoir, et le reclassement 6111 → 6125. Les recommandations : référence fournisseur en clé unique, lettrage systématique, procédure d\'entrée des avoirs, revue de balance. À l\'oral, notez que deux de ces anomalies auraient été détectées par un simple lettrage des comptes fournisseurs : c\'est l\'argument massue pour la recommandation.',
      interviewTips: [
        'Racontez l\'anomalie dans l\'ordre chronologique (saisie, paiement, constat) : le recruteur évalue votre logique de reconstitution.',
        '« Clé unique » et « lettrage » sont les deux mots qui montrent que vous savez d\'où viennent les doublons.',
      ],
    },
    // ============================ EXERCICE 5 ============================
    {
      id: 'fidumac-m2-ex5',
      title: 'Test de cheminement sur le cycle Ventes-Clients',
      cycle: 'Ventes-Clients',
      context:
        'Deuxième cycle : les ventes. Vous cheminez la commande CC-2025-2210 du client Comptoir du Sud chez Distra Maroc (fictif), de la commande à l\'encaissement, pour vérifier la mise en œuvre du processus décrit et repérer les cumuls de fonctions. Scénario fictif ; montants en MAD.',
      documents: [
        {
          kind: 'table',
          name: 'Cheminement d\'une vente — commande CC-2025-2210 (support fictif)',
          columns: ['Étape', 'Document', 'Date', 'Intervenant', 'Contrôle théorique', 'Observation'],
          rows: [
            ['1. Commande', 'Commande client CC-2025-2210', '01/04/2025', 'Commercial (M. Haddad)', 'Commande écrite du client', 'Bon de commande signé'],
            ['2. Encours', 'Fiche client — plafond 60 000,00 MAD', '01/04/2025', 'Recouvrement (Mme Fassi)', 'Contrôle de l\'encours avant acceptation', 'Encours avant vente : 41 600,00 MAD — commande acceptée'],
            ['3. Livraison', 'BL-2025-4910 signé', '03/04/2025', 'Livreur + client', 'BL signé et daté par le client', 'BL signé, quantités conformes'],
            ['4. Facturation', 'FV-2025-1389', '03/04/2025', 'Comptabilité (Mme Raji)', 'Facture émise sur la base du BL', 'HT 16 000,00 + TVA 3 200,00 = TTC 18 400,00'],
            ['5. Comptabilisation', 'Journal des ventes, pièce 0712', '03/04/2025', 'Comptabilité (Mme Raji)', 'Débit 3421 / Crédit 7111 + 4452', 'Écriture conforme au CGNC'],
            ['6. Encaissement', 'Chèque n° 482011', '20/04/2025', 'Comptabilité (Mme Raji)', 'Encaissement rapproché de la facture', 'Chèque reçu, comptabilisé et remis en banque par Mme Raji'],
          ],
          note: 'Document fictif. Le contrôle de séparation des tâches exige que la personne qui comptabilise les ventes ne traite pas les encaissements : ici, Mme Raji assure les deux fonctions.',
        },
      ],
      questions: [
        {
          id: 'fidumac-m2-ex5-q1',
          question: 'Que vérifie le contrôle de l\'encours client à l\'étape 2 ?',
          type: 'mcq',
          options: [
            'Que la commande est livrée en totalité',
            'Que la créance cumulée du client reste dans le plafond de crédit autorisé avant d\'accepter la commande',
            'Que la facture est émise au bon tarif',
            'Que le chèque client est remis à temps en banque',
          ],
          expected: '1',
          explanation:
            'Le contrôle d\'encours compare la créance cumulée au plafond accordé (ici 41 600,00 + 18 400,00 = 60 000,00 MAD, à la limite exacte du plafond de 60 000,00 MAD) : il prévient le risque de livraison à un client insolvable.',
        },
        {
          id: 'fidumac-m2-ex5-q2',
          question: 'Quelles tâches ne doivent pas être cumulées par une même personne dans le cycle Ventes-Clients ?',
          type: 'multi',
          options: [
            'Comptabiliser les factures de ventes et recevoir les chèques clients',
            'Accorder le plafond de crédit et vendre au client',
            'Signer le bon de livraison pour le compte du client',
            'Encaisser les clients et effectuer le lettrage des comptes clients',
            'Émettre la facture et archiver les bons de livraison',
          ],
          expected: ['0', '1', '3'],
          explanation:
            'Trois cumuls dangereux : facturation + encaissements (dissimulation possible par le lettrage), octroi d\'encours + vente (conflit d\'intérêts commercial), encaissements + lettrage (masquage de détournements par compensation entre comptes). Signer pour le client relève de la falsification, pas d\'un cumul ; facturation + archivage ne créent pas de conflit exploitable.',
        },
        {
          id: 'fidumac-m2-ex5-q3',
          question: 'Quel risque crée le cumul constaté sur Mme Raji (comptabilisation des ventes ET traitement des encaissements) ?',
          type: 'mcq',
          options: [
            'Un risque de sous-facturation systématique',
            'Un risque de détournement d\'encaissements masqué par un lettrage erroné des comptes clients',
            'Aucun risque tant que la banque rapproche les relevés',
            'Un risque de TVA mal calculée',
          ],
          expected: '1',
          explanation:
            'Celui qui encaisse et qui lettre peut détourner un chèque et compenser le compte du client payeur par un encaissement d\'un autre client (robinson / cavalerie de lettrage). Le rapprochement bancaire ne détecte pas ce type de dissimulation : il retrouve le montant global des remises.',
        },
        {
          id: 'fidumac-m2-ex5-q4',
          question: 'Dans une petite équipe où la séparation totale est impossible, quel contrôle compensatoire proposer ?',
          type: 'mcq',
          options: [
            'Renoncer à tout contrôle et accepter le risque',
            'Revue mensuelle, par le responsable comptable, du lettrage et des avoirs clients, avec rapprochement remises de chèques / avis de crédit bancaires',
            'Demander à Mme Raji de signer une charte de bonne conduite',
            'Faire auditer chaque chèque reçu par un expert externe',
          ],
          expected: '1',
          explanation:
            'Le contrôle compensatoire type : une revue indépendante (lettrage, avoirs, rapprochement des remises en banque avec le journal d\'encaissements) exercée par quelqu\'un d\'autre que l\'opérateur. C\'est précisément ce qui rend le risque résiduel acceptable.',
        },
        {
          id: 'fidumac-m2-ex5-q5',
          question:
            'Rédigez la conclusion du cheminement et la recommandation associée (au conditionnel, faits séparés du jugement).',
          type: 'open',
          keywords: ['séparation', 'tâches', 'cumul', 'contrôle compensatoire', 'revue', 'lettrage', 'recommandation'],
          explanation:
            'Réponse attendue (exemple) : le processus décrit (commande → encours → BL → facture → comptabilisation → encaissement) est appliqué, chaque étape étant documentée ; toutefois, la même personne comptabilise les ventes et traite les encaissements, contrairement au principe de séparation des tâches. La conclusion serait donc : mise en œuvre du processus constatée, mais faiblesse de conception organisationnelle. La recommandation : réaffecter l\'encaissement à la trésorerie ou, à défaut, instituer une revue mensuelle indépendante du lettrage et des remises en banque.',
        },
      ],
      risks: ['Ventes fictives', 'Détournement d\'encaissements', 'Séparation insuffisante des tâches', 'Encours non contrôlé'],
      solutionSummary:
        'Dans ce cas, je déroulerais le cheminement comme un récit : commande signée (01/04), contrôle d\'encours à la limite du plafond (41 600,00 + 18 400,00 = 60 000,00 MAD), BL signé le 03/04, facture 18 400,00 MAD TTC le jour même, écriture 3421 / 7111 (16 000,00) / 4452 (3 200,00) conforme au CGNC, encaissement le 20/04. Le processus existe : mise en œuvre constatée. Mais la conclusion serait nuancée : la même personne (Mme Raji) comptabilise les ventes et encaisse, cumul interdit par le principe de séparation des tâches, qui crée un risque de détournement dissimulable par lettrage. La recommandation : séparer les fonctions ou instaurer un contrôle compensatoire (revue mensuelle du lettrage et rapprochement des remises par le responsable). À l\'oral, ce cas montre la différence entre un processus « qui tourne » et un processus « contrôlé » : les deux conclusions ne se confondent pas.',
      interviewTips: [
        'Le cheminement se raconte chronologiquement : une phrase par étape, puis une phrase de conclusion. Pas de hors-sujet.',
        '« Contrôle compensatoire » est le terme attendu quand la séparation des tâches est impossible : il transforme une faiblesse en risque maîtrisé.',
      ],
    },
    // ============================ EXERCICE 6 ============================
    {
      id: 'fidumac-m2-ex6',
      title: 'Test de conformité de la facturation : contrôle des prix',
      cycle: 'Ventes-Clients',
      context:
        'Le tarif officiel 2025 de Distra Maroc (fictif) est : P1 (huile de table 5 L) 245,00 MAD HT l\'unité, P2 (sucre 1 kg) 86,50 MAD HT, P3 (café 500 g) 1 120,00 MAD HT. Vous testez le contrôle « facturation au tarif en vigueur » sur un échantillon de 10 factures de ventes tirées des 2 480 factures de l\'exercice. Scénario fictif.',
      documents: [
        {
          kind: 'table',
          name: 'Test de conformité — prix facturés, échantillon de 10 factures (fictif)',
          columns: ['N° facture', 'Client', 'Produit', 'Quantité', 'Prix unitaire facturé (MAD HT)', 'Montant facturé HT (MAD)'],
          rows: [
            ['FV-2025-0201', 'Comptoir du Sud', 'P1 — Huile de table 5 L', 40, 245.0, 9800.0],
            ['FV-2025-0202', 'Grenier Distribution', 'P2 — Sucre 1 kg', 60, 86.5, 5190.0],
            ['FV-2025-0203', 'Atlas Restauration', 'P1 — Huile de table 5 L', 25, 245.0, 6125.0],
            ['FV-2025-0204', 'Tanger Loisirs', 'P3 — Café 500 g', 8, 1120.0, 8960.0],
            ['FV-2025-0205', 'Fès Catering', 'P2 — Sucre 1 kg', 120, 86.5, 10380.0],
            ['FV-2025-0206', 'Comptoir du Sud', 'P1 — Huile de table 5 L', 30, 240.0, 7200.0],
            ['FV-2025-0207', 'Menara Épicerie', 'P3 — Café 500 g', 5, 1120.0, 5600.0],
            ['FV-2025-0208', 'Rif Distribution', 'P2 — Sucre 1 kg', 200, 86.5, 17300.0],
            ['FV-2025-0209', 'Agadir Hôtellerie', 'P1 — Huile de table 5 L', 15, 245.0, 3675.0],
            ['FV-2025-0210', 'Tanger Loisirs', 'P3 — Café 500 g', 12, 1080.0, 12960.0],
          ],
          note: 'Document fictif. Tarif de référence : P1 = 245,00 MAD HT ; P2 = 86,50 MAD HT ; P3 = 1 120,00 MAD HT. Les prix facturés doivent correspondre au tarif sans écart.',
        },
      ],
      questions: [
        {
          id: 'fidumac-m2-ex6-q1',
          question: 'Quel est le montant total des sous-facturations constatées ?',
          type: 'numeric',
          expected: 630,
          explanation:
            'FV-0206 : (245,00 − 240,00) × 30 = 150,00 MAD. FV-0210 : (1 120,00 − 1 080,00) × 12 = 480,00 MAD. Total : 150,00 + 480,00 = 630,00 MAD de chiffre d\'affaires non facturé au tarif.',
        },
        {
          id: 'fidumac-m2-ex6-q2',
          question: 'Quel est le taux d\'exception de ce test de conformité (en %) ?',
          type: 'numeric',
          expected: 20,
          explanation:
            '2 factures en exception (FV-0206 et FV-0210) sur 10 testées : 2/10 = 20,00 %.',
        },
        {
          id: 'fidumac-m2-ex6-q3',
          question: 'Quel contrôle interne a fait défaut sur les factures en exception ?',
          type: 'mcq',
          options: [
            'Le contrôle du plafond d\'encours client',
            'Le contrôle du prix au moment de la facturation (tarif chargé depuis le fichier articles, ou revue de la facture avant envoi)',
            'Le contrôle de la signature du bon de livraison',
            'Le contrôle du lettrage des encaissements',
          ],
          expected: '1',
          explanation:
            'Les montants facturés ne reprennent pas le tarif officiel : le contrôle de facturation (tarif unique chargé par le système, ou relecture avant émission) n\'a pas fonctionné sur ces deux factures. Les autres contrôles cités ne portent pas sur le prix.',
        },
        {
          id: 'fidumac-m2-ex6-q4',
          question: 'Quelles peuvent être les conséquences d\'erreurs de prix systématiques ?',
          type: 'multi',
          options: [
            'Une sous-évaluation du chiffre d\'affaires (7111) et du résultat',
            'Une déformation de la marge par produit et des comparaisons N / N-1',
            'Un traitement inégal entre clients (rabais de fait non autorisés)',
            'Aucune conséquence sur les états de synthèse',
            'Un risque fiscal si les prix s\'écartent sans justification de la valeur normale',
          ],
          expected: ['0', '1', '2', '4'],
          explanation:
            'Sous-facturation = CA et résultat minorés, marges déformées, discriminations tarifaires non documentées et, au Maroc, un risque fiscal (écarts par rapport à la valeur normale). L\'option « aucune conséquence » est évidemment fausse : 630,00 MAD manquants dans le 7111.',
        },
        {
          id: 'fidumac-m2-ex6-q5',
          question:
            'Comment déterminer si ces exceptions sont isolées ou systémiques, et quelle serait votre conclusion ?',
          type: 'open',
          keywords: ['extension', 'échantillon', 'systémique', 'tarif', 'système', 'conclusion', 'correction'],
          explanation:
            'Réponse attendue (exemple) : j\'examinerais la cause (saisie manuelle du prix au lieu du tarif chargé ? remises non autorisées ?), puis j\'étendrais l\'échantillon aux factures des mêmes produits ou du même opérateur pour mesurer le caractère systémique. Si les écarts se multiplient, la conclusion serait « contrôle non fiable » avec extension des tests substantifs sur le chiffre d\'affaires (revue des prix sur un échantillon élargi, cut-off renforcé) ; la correction consisterait à refacturer l\'écart au tarif (630,00 MAD sur l\'échantillon) et la recommandation à verrouiller le tarif dans le système de facturation.',
        },
      ],
      risks: ['Erreurs de prix', 'Sous-facturation', 'Ventes non justifiées au tarif'],
      solutionSummary:
        'La procédure consisterait à comparer chaque prix facturé au tarif officiel : deux exceptions sur dix (20,00 %) pour une sous-facturation totale de 630,00 MAD HT (150,00 sur FV-0206, 480,00 sur FV-0210). Dans ce cas, je chercherais la cause immédiate (prix saisi manuellement ? remise non autorisée ?) et le caractère systémique (extension de l\'échantillon par produit, par opérateur et par période), avant de conclure : si le contrôle de facturation s\'avère non fiable, les tests substantifs sur le 7111 seraient renforcés (revue des prix, cut-off des ventes) ; au minimum, la correction de 630,00 MAD serait demandée et la recommandation porterait sur le verrouillage du tarif dans le système. À l\'oral, retenez la formule : « une erreur de prix n\'est pas une fraude, mais un défaut de contrôle de facturation — sa systémicité est la vraie question ».',
      interviewTips: [
        'Chiffrez d\'abord (150,00 + 480,00 = 630,00 MAD), qualifiez ensuite (contrôle de facturation), concluez enfin (appui ou non).',
        'Évitez le mot « fraude » devant une simple erreur de prix : le recruteur vous reprochera l\'excès ; dites « caractère systémique à évaluer ».',
      ],
    },
    // ============================ EXERCICE 7 ============================
    {
      id: 'fidumac-m2-ex7',
      title: 'Créances anciennes : revue de la balance âgée et justificatifs de recouvrement',
      cycle: 'Ventes-Clients',
      context:
        'Dernier test du cycle Ventes chez Distra Maroc (fictif) : le contrôle « revue mensuelle de la balance âgée clients avec visa du responsable comptable ». Vous examinez les douze balances âgées mensuelles de 2025 et les justificatifs des créances de plus de 90 jours. Scénario fictif ; montants en MAD.',
      documents: [
        {
          kind: 'table',
          name: 'Suivi des revues mensuelles de la balance âgée 2025 (fictif)',
          columns: ['Mois', 'Balance âgée produite', 'Visa du responsable comptable'],
          rows: [
            ['Janvier', 'Oui', 'Oui'],
            ['Février', 'Oui', 'Oui'],
            ['Mars', 'Oui', 'Oui'],
            ['Avril', 'Oui', 'Non'],
            ['Mai', 'Oui', 'Oui'],
            ['Juin', 'Oui', 'Oui'],
            ['Juillet', 'Oui', 'Oui'],
            ['Août', 'Oui', 'Non'],
            ['Septembre', 'Oui', 'Oui'],
            ['Octobre', 'Oui', 'Oui'],
            ['Novembre', 'Oui', 'Non'],
            ['Décembre', 'Oui', 'Oui'],
          ],
          note: 'Document fictif. Le contrôle testé suppose que la balance âgée est produite chaque mois ET visée par le responsable comptable.',
        },
        {
          kind: 'table',
          name: 'Créances de plus de 90 jours au 31/12/2025 (fictif)',
          columns: ['Client', 'Total dû (MAD)', 'Créances > 90 jours (MAD)', 'Justificatif au dossier', 'Observation'],
          rows: [
            ['Comptoir du Sud', 48200.0, 0.0, '—', 'Encours courant'],
            ['Grenier Distribution', 63500.0, 0.0, '—', 'Encours courant'],
            ['Atlas Restauration', 27900.0, 0.0, '—', 'Retards ponctuels (61-90 jours)'],
            ['Menara Épicerie', 18400.0, 2000.0, 'Relances documentées, échéancier accepté', 'Suivi actif'],
            ['Rif Distribution', 31750.0, 9000.0, 'Aucun justificatif', 'Client injoignable depuis octobre'],
            ['TOTAL', 189750.0, 11000.0, '', ''],
          ],
          note: 'Document fictif. Total dû des cinq clients : 189 750,00 MAD, dont 11 000,00 MAD de plus de 90 jours.',
        },
      ],
      questions: [
        {
          id: 'fidumac-m2-ex7-q1',
          question: 'Combien de revues mensuelles de la balance âgée présentent une exception (visa absent) ?',
          type: 'numeric',
          expected: 3,
          explanation:
            'Trois mois sans visa : avril, août et novembre 2025, soit 3 exceptions sur 12 revues (25,00 %). La balance est produite chaque mois, mais le contrôle de revue n\'est pas toujours formalisé.',
        },
        {
          id: 'fidumac-m2-ex7-q2',
          question: 'Quel montant de créances de plus de 90 jours ne dispose d\'aucun justificatif de suivi ?',
          type: 'numeric',
          expected: 9000,
          explanation:
            'Les 9 000,00 MAD de Rif Distribution (client injoignable depuis octobre) ne sont appuyés d\'aucune relance ni échéancier : ni recouvrement documenté, ni décision de dépréciation.',
        },
        {
          id: 'fidumac-m2-ex7-q3',
          question: 'À quelle conséquence la défaillance du contrôle « revue de la balance âgée » expose-t-elle ?',
          type: 'mcq',
          options: [
            'À une sous-évaluation du chiffre d\'affaires de l\'exercice',
            'À des créances anciennes sans suivi : dépréciations insuffisantes au 3940 et dettes clients surestimées',
            'À une TVA facturée mal comptabilisée',
            'À des paiements fournisseurs indues',
          ],
          expected: '1',
          explanation:
            'Sans revue régulière, les créances douteuses ne sont ni identifiées, ni reclassées au 3424, ni dépréciées au 3940 : les comptes clients restent surévalués. C\'est l\'assertion « valorisation » du poste clients qui est en jeu.',
        },
        {
          id: 'fidumac-m2-ex7-q4',
          question: 'Quelle procédure appliqueriez-vous en priorité sur la créance Rif Distribution ?',
          type: 'mcq',
          options: [
            'La passer en perte immédiatement sans autre formalité',
            'Demander une confirmation directe du solde au client (circularisation), tester les recouvrements postérieurs à la clôture et évaluer la dépréciation nécessaire (jusqu\'à 100 % si le risque de non-recouvrement est établi)',
            'Attendre la balance âgée de juin 2026 pour décider',
            'Demander au commercial de passer une écriture de reprise',
          ],
          expected: '1',
          explanation:
            'La confirmation directe du tiers et les recouvrements postérieurs sont les preuves les plus fiables de la valeur réelle de la créance ; la dépréciation (3940 / dotation 6194) se décide ensuite selon le risque. Ni l\'abandon, ni l\'attente, ni une écriture passée par le commercial ne sont des procédures d\'audit.',
        },
        {
          id: 'fidumac-m2-ex7-q5',
          question:
            'Rédigez la conclusion du test et la recommandation associée (au conditionnel), en séparant faits et jugement.',
          type: 'open',
          keywords: ['visa', 'défaillance', 'dépréciation', 'confirmation', 'recouvrement', 'recommandation', 'balance âgée'],
          explanation:
            'Réponse attendue (exemple) : faits — 3 revues sur 12 sans visa (25,00 %), 9 000,00 MAD de créances sans justificatif de suivi. Jugement — le contrôle de revue mensuelle n\'est pas formalisé avec constance ; il ne peut être considéré comme fiable, ce qui conduit à contrôler directement la valorisation du poste clients (confirmations, recouvrements postérieurs, balance âgée testée ligne à ligne). Recommandation — visa systématique, relances documentées par tranche d\'âge et revue trimestrielle des dépréciations avec le commissaire aux comptes.',
        },
      ],
      risks: ['Créances anciennes', 'Dépréciations insuffisantes', 'Suivi de recouvrement absent'],
      solutionSummary:
        'Dans ce cas, je rapprocherais d\'abord les deux documents : le contrôle « revue mensuelle visée » présente 3 exceptions sur 12 (avril, août, novembre — 25,00 %), et la balance au 31/12 révèle 11 000,00 MAD de plus de 90 jours dont 9 000,00 MAD (Rif Distribution) sans aucun justificatif. La démarche consisterait à circulariser les clients anciens, à tester les recouvrements postérieurs à la clôture, puis à évaluer la dépréciation nécessaire au 3940 (dotation 6194) — Rif Distribution pouvant justifier une dépréciation totale. La conclusion du test porterait sur la non-fiabilité de la revue mensuelle, avec pour conséquence l\'absence d\'appui sur ce contrôle pour l\'assertion « valorisation » des clients ; la recommandation viserait la formalisation du visa et un processus de relance documenté par tranche d\'ancienneté. À l\'oral, soulignez que la défaillance d\'un contrôle de suivi ne prouve pas encore la surévaluation : c\'est le test substantif qui la chiffrera.',
      interviewTips: [
        '« Balance âgée » doit déclencher chez vous : tranches d\'ancienneté, 3424 (clients douteux), 3940 (dépréciation), 6194 (dotation).',
        'Rappelez que la dépréciation se décide sur des preuves (confirmation, recouvrements postérieurs), pas sur l\'âge seul.',
      ],
    },
    // ============================ EXERCICE 8 ============================
    {
      id: 'fidumac-m2-ex8',
      title: 'Test de conformité des paiements : autorisation et bénéficiaires',
      cycle: 'Trésorerie',
      context:
        'Troisième cycle : la trésorerie. La procédure de Distra Maroc (fictif) impose : justificatif joint à tout paiement, signature du trésorier pour les virements inférieurs à 10 000,00 MAD, double signature (trésorier + directeur administratif et financier) à partir de 10 000,00 MAD, et bénéficiaire obligatoirement référencé au fichier fournisseurs. Vous testez 10 virements tirés des 3 100 de l\'exercice 2025. Scénario fictif.',
      documents: [
        {
          kind: 'table',
          name: 'Test de conformité — autorisation des virements, échantillon de 10 paiements (fictif)',
          columns: ['N° virement', 'Date', 'Bénéficiaire', 'Montant (MAD)', 'Signataires', 'Justificatif joint'],
          rows: [
            ['VIR-2025-0501', '05/05/2025', 'Atlas Emballages (référencé)', 8400.0, 'Trésorier', 'Facture visée FRS-2025-3310'],
            ['VIR-2025-0502', '08/05/2025', 'Sud Hygiène (référencé)', 15000.0, 'Trésorier seul', 'Facture visée FRS-2025-3311'],
            ['VIR-2025-0503', '12/05/2025', 'Maroc Nettoyage (référencé)', 6200.0, 'Trésorier', 'Facture visée'],
            ['VIR-2025-0504', '15/05/2025', 'Atlas Emballages (référencé)', 21500.0, 'Trésorier + DAF', 'Facture visée'],
            ['VIR-2025-0505', '19/05/2025', 'Sud Hygiène (référencé)', 12800.0, 'Trésorier seul', 'Facture visée'],
            ['VIR-2025-0506', '22/05/2025', 'Maroc Nettoyage (référencé)', 3450.0, 'Trésorier', 'Facture visée'],
            ['VIR-2025-0507', '26/05/2025', 'Atlas Emballages (référencé)', 18900.0, 'Trésorier + DAF', 'Facture visée'],
            ['VIR-2025-0508', '29/05/2025', 'Sud Hygiène (référencé)', 9700.0, 'Trésorier', 'Facture visée'],
            ['VIR-2025-0509', '31/05/2025', 'GSC Conseil (non référencé)', 2300.0, 'Trésorier', 'Aucun justificatif'],
            ['VIR-2025-0510', '02/06/2025', 'Atlas Emballages (référencé)', 11250.0, 'Trésorier + DAF', 'Facture visée'],
          ],
          note: 'Document fictif. Règle : double signature pour tout virement ≥ 10 000,00 MAD ; justificatif obligatoire ; bénéficiaire référencé au fichier fournisseurs.',
        },
      ],
      questions: [
        {
          id: 'fidumac-m2-ex8-q1',
          question: 'Quels virements présentent une exception aux règles d\'autorisation ?',
          type: 'multi',
          options: [
            'VIR-2025-0502 : 15 000,00 MAD signé du seul trésorier (double signature requise)',
            'VIR-2025-0505 : 12 800,00 MAD signé du seul trésorier (double signature requise)',
            'VIR-2025-0507 : 18 900,00 MAD signé trésorier + DAF',
            'VIR-2025-0509 : 2 300,00 MAD à un bénéficiaire non référencé, sans justificatif',
            'VIR-2025-0510 : 11 250,00 MAD signé trésorier + DAF',
          ],
          expected: ['0', '1', '3'],
          explanation:
            'Trois exceptions : 0502 et 0505 dépassent 10 000,00 MAD sans double signature ; 0509 cumule bénéficiaire non référencé et absence totale de justificatif. Les virements 0507 et 0510 respectent la double signature ; 0508 (9 700,00 MAD) reste sous le seuil.',
        },
        {
          id: 'fidumac-m2-ex8-q2',
          question: 'Quel est le montant total des virements non conformes ?',
          type: 'numeric',
          expected: 30100,
          explanation:
            'VIR-0502 (15 000,00) + VIR-0505 (12 800,00) + VIR-0509 (2 300,00) = 30 100,00 MAD réglés en non-conformité avec les règles d\'autorisation.',
        },
        {
          id: 'fidumac-m2-ex8-q3',
          question: 'Quel est le taux d\'exception de ce test (en %) ?',
          type: 'numeric',
          expected: 30,
          explanation:
            '3 exceptions sur 10 virements testés = 30,00 %. Le contrôle d\'autorisation des paiements ne peut pas être jugé fiable.',
        },
        {
          id: 'fidumac-m2-ex8-q4',
          question: 'Quel élément de l\'échantillon constitue le signal le plus préoccupant ?',
          type: 'mcq',
          options: [
            'Le montant de VIR-2025-0507 (18 900,00 MAD), le plus élevé de l\'échantillon',
            'VIR-2025-0509 : bénéficiaire non référencé ET absence de justificatif — combinaison typique d\'un indicateur de fraude potentielle',
            'Le fait que tous les paiements partent le même mois',
            'L\'absence de chèques dans l\'échantillon',
          ],
          expected: '1',
          explanation:
            'Un paiement à un bénéficiaire jamais référencé, sans pièce justificative, est le schéma classique du détournement (fournisseur fictif). Le montant seul ne dit rien : le risque naît de la combinaison « hors fichier + sans preuve ».',
        },
        {
          id: 'fidumac-m2-ex8-q5',
          question:
            'Décrivez les suites à donner à ce test (au conditionnel) : travaux, remontée, recommandations.',
          type: 'open',
          keywords: ['bénéficiaire', 'fournisseurs', 'justificatif', 'senior', 'extension', 'recommandation', 'fraude'],
          explanation:
            'Réponse attendue (exemple) : sur VIR-2025-0509, je vérifierais l\'existence réelle du bénéficiaire (recherche, pièce d\'identité du compte crédité), je demanderais le justificatif au client et j\'étendrais le test aux autres paiements vers des bénéficiaires non référencés. Le point serait remonté immédiatement au senior compte tenu du risque de fraude. La conclusion serait « contrôle non fiable » (30,00 % d\'exceptions), avec extension des tests substantifs sur les décaissements, et les recommandations porteraient sur le verrouillage du fichier fournisseurs, la double signature systématique à partir de 10 000,00 MAD et l\'interdiction de payer sans pièce visée.',
        },
      ],
      risks: ['Paiements non autorisés', 'Détournements', 'Bénéficiaires non contrôlés', 'Fournisseurs fictifs'],
      solutionSummary:
        'La procédure consisterait à confronter chaque virement aux trois règles (seuil de signature, justificatif, référencement du bénéficiaire) : 3 exceptions sur 10 (30,00 %) pour 30 100,00 MAD non conformes, dont deux manquements à la double signature (15 000,00 et 12 800,00 MAD) et un paiement de 2 300,00 MAD à un bénéficiaire inconnu du fichier fournisseurs, sans aucune pièce. Dans ce cas, je traiterais d\'abord le signal de fraude : vérification de l\'existence du bénéficiaire, extension du test à tous les paiements hors fichier, remontée immédiate au senior. La conclusion du test — contrôle d\'autorisation non fiable — conduirait à renoncer à tout appui et à renforcer les contrôles substantifs sur la trésorerie (revue exhaustive des décaissements significatifs, rapprochements, confirmations bancaires). Les recommandations : fichier fournisseurs verrouillé (création validée à deux), double signature effective, paiement impossible sans justificatif visé. À l\'oral, ce cas permet de montrer que l\'auditeur évalue mais ne conclut pas à la fraude : il documente des indicateurs et remonte.',
      interviewTips: [
        'Ne dites jamais « c\'est une fraude » : dites « indicateur de risque de fraude, remonté au senior pour travaux complémentaires ».',
        'Les trois règles de paiement (seuil, justificatif, référencement) se citent de mémoire : c\'est un plan de réponse tout fait en entretien.',
      ],
    },
    // ============================ EXERCICE 9 ============================
    {
      id: 'fidumac-m2-ex9',
      title: 'Rapprochement bancaire et suspens anciens',
      cycle: 'Trésorerie',
      context:
        'Toujours en trésorerie chez Distra Maroc (fictif), vous testez le contrôle « rapprochement bancaire mensuel produit ET revu ». Vous reprenez le rapprochement au 31/12/2025 et les suspens antérieurs laissés en attente dans les rapprochements précédents. Scénario fictif ; montants en MAD.',
      documents: [
        {
          kind: 'table',
          name: 'Rapprochement bancaire au 31/12/2025 (fictif)',
          columns: ['Éléments de rapprochement', 'Montant (MAD)'],
          rows: [
            ['Solde comptable banque (compte 5141) au 31/12/2025', 318640.0],
            ['Chèques émis non encore débités par la banque :', ''],
            ['— CH-778801 (émis le 18/12/2025)', -9840.0],
            ['— CH-778815 (émis le 22/12/2025)', -6350.0],
            ['— CH-778827 (émis le 28/12/2025)', -8020.0],
            ['Remise de chèques du 30/12/2025 non encore créditée par la banque', 14500.0],
            ['Frais bancaires de décembre 2025 non comptabilisés', -420.0],
            ['Solde du relevé bancaire au 31/12/2025 (à recalculer)', 308510.0],
          ],
          note: 'Document fictif. Le solde du relevé doit se recalculer : 318 640,00 − 9 840,00 − 6 350,00 − 8 020,00 + 14 500,00 − 420,00 = 308 510,00 MAD.',
        },
        {
          kind: 'table',
          name: 'Suspens en attente dans les rapprochements précédents (fictif)',
          columns: ['Référence', 'Nature', 'Date d\'émission', 'Montant (MAD)', 'Ancienneté au 31/12/2025'],
          rows: [
            ['CH-776412', 'Chèque émis non débité par la banque', '15/07/2025', 5480.0, 'Plus de 5 mois'],
            ['CH-776930', 'Chèque émis non débité par la banque', '29/08/2025', 2240.0, 'Plus de 4 mois'],
            ['RM-2025-114', 'Remise de chèque non créditée par la banque', '20/09/2025', 3160.0, 'Plus de 3 mois'],
          ],
          note: 'Document fictif. Ces suspens figurent dans les rapprochements depuis plusieurs mois sans qu\'aucune relance ni régularisation ne soit documentée.',
        },
      ],
      questions: [
        {
          id: 'fidumac-m2-ex9-q1',
          question: 'Recalculez le solde du relevé bancaire au 31/12/2025 à partir du rapprochement.',
          type: 'numeric',
          expected: 308510,
          explanation:
            '318 640,00 − 9 840,00 − 6 350,00 − 8 020,00 + 14 500,00 − 420,00 = 308 510,00 MAD. Le recalcul valide l\'arithmétique du rapprochement : c\'est le premier réflexe devant toute feuille de rapprochement.',
        },
        {
          id: 'fidumac-m2-ex9-q2',
          question: 'Quel est le montant total des suspens de plus de trois mois restés sans régularisation ?',
          type: 'numeric',
          expected: 10880,
          explanation:
            'CH-776412 (5 480,00) + CH-776930 (2 240,00) + RM-2025-114 (3 160,00) = 10 880,00 MAD de suspens anciens : des chèques émis jamais débités et une remise jamais créditée, qui traînent depuis l\'été.',
        },
        {
          id: 'fidumac-m2-ex9-q3',
          question: 'Que devrait faire la trésorerie des chèques émis depuis plus de cinq mois et jamais débités ?',
          type: 'mcq',
          options: [
            'Les laisser indéfiniment dans le rapprochement, ils finiront par passer',
            'Relancer le bénéficiaire, réclamer le chèque ou en émettre un nouveau, et à défaut reclasser la dette en constatant la réalité (chéquier perdu, bénéficiaire disparu) — en documentant la décision',
            'Passer une écriture de produit pour annuler la dette immédiatement',
            'Demander à la banque de débiter le compte d\'office',
          ],
          expected: '1',
          explanation:
            'Un suspens ancien n\'est pas anodin : le fournisseur n\'a pas été payé (la dette existe toujours en substance) ou le chèque est perdu. La démarche : relance, remplacement, ou reclassement documenté. La banque ne peut pas débiter un chèque jamais présenté ; l\'annulation en produit ne se décide qu\'au terme d\'un délai et d\'un raisonnement documenté.',
        },
        {
          id: 'fidumac-m2-ex9-q4',
          question: 'Quelle faiblesse de contrôle interne ces suspens anciens révèlent-ils ?',
          type: 'mcq',
          options: [
            'Un problème de valorisation des stocks',
            'L\'absence de suivi des rapprochements : les états sont produits mais les suspens ne sont ni apurés, ni relancés, ni escaladés',
            'Une erreur de comptabilisation des ventes',
            'Un défaut de séparation entre achats et magasin',
          ],
          expected: '1',
          explanation:
            'Produire un rapprochement ne suffit pas : le contrôle utile est le suivi des suspens (lettrage, relances, escalade au-delà d\'un seuil d\'ancienneté). Des suspens de 3 à 5 mois prouvent que ce suivi n\'existe pas.',
        },
        {
          id: 'fidumac-m2-ex9-q5',
          question:
            'Pourquoi des suspens anciens constituent-ils un point d\'audit ? Décrivez les risques et la démarche (au conditionnel).',
          type: 'open',
          keywords: ['suspens', 'rapprochement', 'suivi', 'annulation', 'reclassement', 'dette', 'créance', 'détournement'],
          explanation:
            'Réponse attendue (exemple) : un chèque émis non débité depuis des mois signifie que la dette fournisseur, soldée comptablement, subsiste en substance (sous-évaluation des dettes) ; une remise non créditée peut receler une créance sur la banque, voire un chèque impayé ou détourné. La démarche : reprendre chaque suspens, obtenir les justificatifs, relancer, reclasser (rétablissement de dette ou créance), évaluer d\'éventuelles provisions, et recommander un suivi mensuel des suspens avec seuil d\'escalade. Le risque de détournement (chéque refait, remise disparue) justifie la remontée au senior.',
        },
      ],
      risks: ['Suspens anciens', 'Suivi des rapprochements absent', 'Opérations non enregistrées', 'Détournements'],
      solutionSummary:
        'Dans ce cas, je recalculerais d\'abord le rapprochement (solde relevé attendu : 308 510,00 MAD — conforme), puis je listerais les suspens antérieurs : 10 880,00 MAD au total (5 480,00 + 2 240,00 de chèques jamais débités, 3 160,00 de remise jamais créditée). Le contrôle testé — rapprochement produit ET suivi — serait jugé non fiable sur son second volet : les états existent, le suivi n\'existe pas. La démarche consisterait à documenter chaque suspens (fait, montant, ancienneté), à demander la régularisation (relances, réémission de chèques, reclassement de la dette ou de la créance), et à recommander un apurement mensuel avec seuil d\'ancienneté. Un suspens de plus de trois mois est aussi un indicateur possible de détournement : le point serait remonté au senior. À l\'oral, la phrase clé : « un rapprochement non suivi est un contrôle de façade ».',
      interviewTips: [
        'Recalculez toujours un rapprochement avant de le commenter : c\'est le geste technique le plus facile à faire exécuter en entretien.',
        '« Apurer les suspens » : employez ce verbe, il signe la pratique.',
      ],
    },
    // ============================ EXERCICE 10 ============================
    {
      id: 'fidumac-m2-ex10',
      title: 'Complétude des enregistrements bancaires : non enregistrés, doublons et erreurs de saisie',
      cycle: 'Trésorerie',
      context:
        'Dernier test de trésorerie chez Distra Maroc (fictif) : le contrôle « rapprochement mensuel bancaire / journal de banque avec traitement des écarts ». Vous croisez le relevé bancaire de janvier 2026 avec le journal de banque pour vérifier que toutes les opérations sont enregistrées, une seule fois, et au bon montant. Scénario fictif ; montants en MAD.',
      documents: [
        {
          kind: 'table',
          name: 'Croisement relevé bancaire / journal de banque — janvier 2026 (fictif)',
          columns: ['Opération', 'Date au relevé', 'Montant (MAD)', 'Comptabilisation', 'Observation'],
          rows: [
            ['Prélèvement fournisseur d\'énergie (consommation décembre)', '03/01/2026', 4320.0, 'Non comptabilisée', 'Relevé de consommation décembre 2025 reçu'],
            ['Encaissement client — remise de chèques du 02/01', '05/01/2026', 18600.0, '05/01/2026', 'Conforme'],
            ['Frais de tenue de compte bancaire', '31/01/2026', 890.0, 'Non comptabilisée', '—'],
            ['Virement reçu — client Zohair Distribution', '12/01/2026', 12450.0, '12/01/2026 et 14/01/2026', 'Comptabilisé deux fois'],
            ['Agios trimestriels', '31/01/2026', 1260.0, 'Non comptabilisée', '—'],
            ['Loyer de janvier (prélèvement)', '05/01/2026', 9800.0, '05/01/2026', 'Conforme'],
            ['Paiement fournisseur Maroc Nettoyage', '15/01/2026', 7340.0, '15/01/2026', 'Saisi pour 3 740,00 MAD — écart de saisie'],
            ['Encaissement client — remise du 20/01', '22/01/2026', 9840.0, '22/01/2026', 'Conforme'],
          ],
          note: 'Document fictif. Le prélèvement d\'énergie de 4 320,00 MAD porte sur la consommation de décembre 2025 : il devrait donner lieu à une facture non parvenue au 31/12/2025 (compte 4417) — le point sera repris en mission 3.',
        },
      ],
      questions: [
        {
          id: 'fidumac-m2-ex10-q1',
          question: 'Quel est le total des charges décaissées non comptabilisées ?',
          type: 'numeric',
          expected: 6470,
          explanation:
            'Prélèvement d\'énergie 4 320,00 + frais de tenue de compte 890,00 + agios 1 260,00 = 6 470,00 MAD de charges passées en banque mais jamais saisies : le compte 5141 est surestimé d\'autant côté comptable.',
        },
        {
          id: 'fidumac-m2-ex10-q2',
          question: 'Quelle est l\'incidence brute sur le compte 3421 du doublon d\'encaissement et de l\'erreur de saisie ?',
          type: 'numeric',
          expected: 16050,
          explanation:
            'Doublon sur le virement client : 12 450,00 comptabilisés deux fois. Erreur de saisie : 7 340,00 payés mais saisis pour 3 740,00, soit 3 600,00 d\'écart. Incidence brute : 12 450,00 + 3 600,00 = 16 050,00 MAD.',
        },
        {
          id: 'fidumac-m2-ex10-q3',
          question: 'Comment qualifiez-vous la comptabilisation en double du virement client ?',
          type: 'mcq',
          options: [
            'Une erreur de cut-off : l\'opération est rattachée au mauvais exercice',
            'Une erreur d\'exhaustivité inverse : l\'opération est comptabilisée deux fois, ce qui majore la créance ou minore le solde client et fausse le lettrage',
            'Une erreur d\'imputation : le mauvais compte a été mouvementé',
            'Une simple approximation sans effet sur les comptes',
          ],
          expected: '1',
          explanation:
            'La double comptabilisation d\'un encaissement mine le compte client (ou laisse un solde créditeur) et fausse le lettrage : c\'est une erreur d\'enregistrement touchant l\'exactitude et le rattachement des montants — pas le cut-off ni l\'imputation.',
        },
        {
          id: 'fidumac-m2-ex10-q4',
          question: 'Quel contrôle de complétude ce test illustre-t-il ?',
          type: 'mcq',
          options: [
            'La circularisation des fournisseurs',
            'Le rapprochement périodique entre le relevé bancaire et le journal de banque, avec identification et traitement de chaque écart',
            'L\'inventaire physique des stocks',
            'La revue de la balance âgée clients',
          ],
          expected: '1',
          explanation:
            'Le relevé bancaire est la source externe la plus fiable pour tester la complétude des enregistrements de trésorerie : tout ce qui passe en banque doit figurer au journal, une fois exactement. C\'est le rapprochement qui révèle les manquants, les doublons et les écarts de saisie.',
        },
        {
          id: 'fidumac-m2-ex10-q5',
          question:
            'Quelles écritures de régularisation proposeriez-vous (au conditionnel), et quelles recommandations adresseriez-vous ?',
          type: 'open',
          keywords: ['rapprochement', 'mensuel', 'lettrage', 'extourne', 'correction', 'charge', 'suivi', 'recommandation'],
          explanation:
            'Réponse attendue (exemple) : je proposerais d\'enregistrer les charges manquantes (6 470,00 MAD : énergie en 6145 / 4417 au 31/12, frais et agios en charges financières), d\'extourner le doublon d\'encaissement (12 450,00 MAD au 3421) et de corriger la saisie du paiement fournisseur (3 600,00 MAD). Les recommandations : rapprochement mensuel systématique revu par un responsable, suivi des écarts avec délai de traitement, double contrôle de saisie des montants (pièce / saisie) et lettrage systématique des comptes clients.',
        },
      ],
      risks: ['Opérations non enregistrées', 'Opérations en double', 'Erreurs de saisie', 'Cut-off des charges'],
      solutionSummary:
        'La démarche consisterait à croiser ligne à ligne relevé et journal : trois opérations non enregistrées (4 320,00 + 890,00 + 1 260,00 = 6 470,00 MAD de charges), un encaissement comptabilisé deux fois (12 450,00 MAD) et une erreur de frappe de 3 600,00 MAD sur un paiement fournisseur — soit une incidence brute de 16 050,00 MAD sur les comptes de tiers. Dans ce cas, je proposerais les écritures de régularisation (enregistrement des charges, extourne du doublon, correction de la saisie) et je signalerais que le prélèvement d\'énergie de décembre relève du cut-off 2025 : une facture non parvenue (4417) devrait être comptabilisée à la clôture — point repris dans la mission de révision. La conclusion du test : le contrôle de rapprochement mensuel n\'est pas fiable ; recommandations : revue mensuelle signée, suivi des suspens, contrôle de saisie. À l\'oral, ce cas montre que la banque est le miroir de la comptabilité : tout écart a une cause, et chaque cause a un traitement.',
      interviewTips: [
        'Le relevé bancaire est une source externe : rappelez-le, c\'est l\'argument de fiabilité de tout le test.',
        'Classez les écarts en trois familles (manquant, doublon, montant) : le plan de régularisation s\'en déduit tout seul.',
      ],
    },
    // ============================ EXERCICE 11 ============================
    {
      id: 'fidumac-m2-ex11',
      title: 'Bilan du contrôle interne : évaluer une exception',
      cycle: 'Transversal (synthèse)',
      context:
        'Exercice de synthèse. Le test du contrôle « rapprochement facture / BC / BR » du cycle Achats a été étendu à 25 factures (fictives) après les constats initiaux. Vous devez évaluer les exceptions relevées et conclure. Seuil de signification de la mission : 150 000,00 MAD. Scénario fictif.',
      documents: [
        {
          kind: 'table',
          name: 'Fiche d\'évaluation des exceptions — contrôle « rapprochement facture / BC / BR » (fictif)',
          columns: ['Rubrique', 'Détail'],
          rows: [
            ['Contrôle testé', 'Rapprochement facture / bon de commande / bon de réception avant comptabilisation (cycle Achats-Fournisseurs)'],
            ['Population', 'Environ 612 factures fournisseurs comptabilisées sur l\'exercice 2025'],
            ['Échantillon', '25 factures sélectionnées par sondage aléatoire après extension'],
            ['Exceptions détectées', '3 factures comptabilisées sans bon de réception : FRS-2025-3311 (8 900,00 MAD TTC), FRS-2025-3406 (4 760,00 MAD TTC), FRS-2025-3512 (6 310,00 MAD TTC)'],
            ['Taux d\'exception', '3 / 25 = 12,00 %'],
            ['Cause indiquée par le client', 'Bons de réception « perdus » au magasin ; les réceptions physiques auraient bien eu lieu'],
            ['Travaux complémentaires', 'Circularisation des trois fournisseurs : livraisons confirmées pour FRS-2025-3406 et FRS-2025-3512 ; aucune réponse à ce jour pour FRS-2025-3311'],
            ['Seuil de signification', '150 000,00 MAD'],
          ],
          note: 'Document fictif. Rappel : une exception est une défaillance de contrôle ; l\'anomalie comptable n\'est établie que si la charge s\'avère non justifiée.',
        },
      ],
      questions: [
        {
          id: 'fidumac-m2-ex11-q1',
          question: 'Quelle est l\'incidence cumulée des exceptions chiffrées ?',
          type: 'numeric',
          expected: 19970,
          explanation:
            '8 900,00 + 4 760,00 + 6 310,00 = 19 970,00 MAD de factures comptabilisées sans preuve de réception. À comparer au seuil de signification de 150 000,00 MAD.',
        },
        {
          id: 'fidumac-m2-ex11-q2',
          question: 'Que sont ces trois factures sans bon de réception, au sens strict du test ?',
          type: 'mcq',
          options: [
            'Des anomalies comptables avérées : les charges doivent être annulées',
            'Des exceptions, c\'est-à-dire des défaillances du contrôle testé — qui exposent à une anomalie potentielle tant que la réception n\'est pas prouvée',
            'Des fraudes démontrées du fournisseur',
            'Des erreurs d\'imputation entre comptes de charges',
          ],
          expected: '1',
          explanation:
            'Le test de conformité mesure le contrôle : les trois factures sont des exceptions (le rapprochement n\'a pas été prouvé). Deux sont déjà corroborées par circularisation : l\'anomalie comptable n\'est pas établie pour elles. Seule FRS-2025-3311, non confirmée, reste un risque d\'anomalie.',
        },
        {
          id: 'fidumac-m2-ex11-q3',
          question: 'Quels critères doivent guider l\'évaluation de chaque exception ?',
          type: 'multi',
          options: [
            'La cause de l\'exception (négligence, contournement, absence de procédure)',
            'L\'incidence chiffrée et son rapprochement au seuil de signification',
            'Le caractère isolé ou systémique (extension des travaux nécessaire ?)',
            'La réponse et les éléments complémentaires fournis par le client',
            'La personnalité du magasinier en poste',
          ],
          expected: ['0', '1', '2', '3'],
          explanation:
            'Quatre critères d\'évaluation : cause, incidence (19 970,00 MAD face à 150 000,00 MAD de seuil), systémicité (d\'où l\'extension de 6 à 25 factures) et éléments du client (circularisations). Le jugement sur les personnes n\'a pas sa place dans une fiche d\'exception.',
        },
        {
          id: 'fidumac-m2-ex11-q4',
          question: 'Quelle suite donner à la facture FRS-2025-3311, toujours non confirmée ?',
          type: 'mcq',
          options: [
            'Classer sans suite : 8 900,00 MAD est très inférieur au seuil de 150 000,00 MAD',
            'Étendre les travaux : deuxième demande de confirmation, recherche du BR ou de tout justificatif d\'exécution ; à défaut, proposer l\'extourne de la charge ou une provision, et documenter la limite',
            'Demander au fournisseur de rembourser spontanément',
            'Attendre la clôture des comptes pour voir si le problème se reproduit',
          ],
          expected: '1',
          explanation:
            'L\'insuffisance de preuve appelle soit plus de travaux, soit une incidence dans la conclusion. L\'extourne ou la provision n\'interviendrait qu\'après épuisement des diligences. Le montant, inférieur au seuil, n\'autorise pas l\'oubli : il alimente le récapitulatif des anomalies et la documentation.',
        },
        {
          id: 'fidumac-m2-ex11-q5',
          question: 'Rédigez la conclusion du test de conformité (au conditionnel) : fiabilité du contrôle, incidence, suites pour la mission.',
          type: 'open',
          keywords: ['conclusion', 'fiable', 'taux', 'extension', 'substantif', 'recommandation', 'seuil'],
          explanation:
            'Réponse attendue (exemple) : après extension à 25 factures, le taux d\'exception ressort à 12,00 % ; le contrôle de rapprochement ne serait pas jugé fiable, ce qui interdirait de l\'utiliser comme élément probant. L\'incidence cumulée (19 970,00 MAD) resterait inférieure au seuil de signification (150 000,00 MAD), mais deux factures restent à corroborer et FRS-2025-3311, non confirmée, appellerait extourne ou provision à défaut de preuve. Les suites : tests substantifs étendus sur les achats sans BR, intégration au récapitulatif des anomalies, et recommandation (archivage contrôlé des BR, visa de rapprochement obligatoire).',
        },
        {
          id: 'fidumac-m2-ex11-q6',
          question: 'Une incidence cumulée de 19 970,00 MAD, très inférieure au seuil de 150 000,00 MAD, dispense de toute recommandation au client.',
          type: 'truefalse',
          options: ['Vrai', 'Faux'],
          expected: '1',
          explanation:
            'Faux. L\'incidence sur l\'opinion serait nulle ou négligeable, mais la défaillance du contrôle existe et expose l\'exercice suivant : la recommandation (archivage des BR, visa obligatoire) reste de mise. Le seuil juge les comptes ; la faiblesse de contrôle se traite pour elle-même.',
        },
      ],
      risks: ['Évaluation d\'exception', 'Conclusions non étayées', 'Recommandation manquée'],
      solutionSummary:
        'Dans ce cas, je structurerais l\'évaluation en quatre temps : chiffrer (19 970,00 MAD d\'incidence cumulée, soit 13,31 % du seuil de signification), qualifier (trois exceptions = défaillance du contrôle de rapprochement ; une seule — FRS-2025-3311 — reste une anomalie potentielle faute de confirmation), apprécier la systémicité (taux de 12,00 % après extension, trop élevé pour un contrôle utilisé comme élément probant), puis conclure : le contrôle ne serait pas jugé fiable ; l\'équipe n\'y prendrait pas appui et renforcerait les tests substantifs sur les achats sans BR ; FRS-2025-3311 ferait l\'objet d\'une dernière diligence puis, à défaut, d\'une extourne ou d\'une provision ; enfin la recommandation — archivage contrôlé des bons de réception et visa de rapprochement obligatoire — serait formulée indépendamment de l\'incidence. La logique à retenir : le seuil protège l\'opinion, la recommandation protège le contrôle interne. À l\'oral, savoir dissocier ces deux plans est ce qui distingue un candidat mûr.',
      interviewTips: [
        'Deux plans à ne jamais confondre : incidence sur l\'opinion (seuil) et faiblesse de contrôle (recommandation).',
        'Terminez toujours l\'évaluation d\'une exception par une action : extension, correction, provision ou recommandation — jamais par un constat nu.',
      ],
    },
  ],
  interviewQuestions: [
    {
      question: 'Expliquez la différence entre un test de cheminement, un test de conformité et un test substantif.',
      hint: 'Trois objectifs, trois étendues.',
      expected:
        'Le cheminement suit une transaction de bout en bout pour vérifier que le processus décrit existe et est appliqué (mise en œuvre). Le test de conformité teste le fonctionnement d\'un contrôle précis sur un échantillon de la période (efficacité opérationnelle) et débouche sur un taux d\'exception. Le test substantif contrôle directement les soldes ou opérations (confirmation, rapprochement) sans s\'appuyer sur le contrôle interne. Dans le scénario Distra Maroc, le cheminement de la DA-2025-0871 aurait révélé l\'absence de visa de rapprochement, ce qui aurait justifié un test de conformité, lui-même conclu par un renforcement des tests substantifs.',
    },
    {
      question: 'Pourquoi un auditeur passe-t-il du temps sur le contrôle interne du client alors qu\'il audite les comptes ?',
      hint: 'Modèle du risque, dimensionnement.',
      expected:
        'Parce que le risque d\'anomalies significatives combine risque inhérent et risque lié au contrôle : si les contrôles du client fonctionnent, l\'auditeur peut s\'y appuyer et réduire l\'étendue de ses tests substantifs ; s\'ils ne fonctionnent pas, il doit renforcer les contrôles directs. L\'évaluation du contrôle interne est donc un levier d\'efficacité de la mission — et la source des recommandations au client.',
    },
    {
      question: 'Comment constituerez-vous un échantillon pour un test de conformité ?',
      hint: 'Population, méthode, taille, périodicité.',
      expected:
        'Je définirais d\'abord la population (par exemple les 640 DA de l\'exercice), puis la méthode : aléatoire ou par intervalles pour la représentativité, avec une surpondération orientée risque si nécessaire. La taille se justifierait par le risque et le seuil, et les sélections seraient réparties sur la période, y compris près de la clôture. Chaque choix serait documenté dans la feuille de test pour que le test soit refaisable.',
    },
    {
      question: 'Un test de conformité relève une exception : que faites-vous ?',
      hint: 'Évaluer avant de conclure.',
      expected:
        'J\'évaluerais l\'exception : sa cause (négligence, contournement, absence de procédure), son incidence chiffrée, son caractère isolé ou systémique. Si le doute sur la systémicité persiste, j\'étendrais l\'échantillon ou testerais la population sur ce point. Puis je documenterais le tout et remonterais au senior avec une proposition : correction, provision, ou simple recommandation. Une exception est une défaillance de contrôle, pas automatiquement une anomalie comptable.',
    },
    {
      question: 'Quand dit-on qu\'un contrôle est efficace au sens de l\'audit ?',
      hint: 'Trois conditions successives.',
      expected:
        'Trois conditions cumulatives : il est bien conçu (adapté au risque visé), il est réellement mis en œuvre (appliqué, pas seulement décrit), et il a fonctionné avec efficacité opérationnelle pendant toute la période — testée sur un échantillon étalé dans le temps. Un contrôle peut être bien conçu mais jamais appliqué, ou appliqué sans constance : dans les deux cas, l\'auditeur ne s\'y appuie pas.',
    },
    {
      question: 'Pourquoi la séparation des tâches est-elle si importante en trésorerie et en ventes ?',
      hint: 'Cumuls = dissimulation possible.',
      expected:
        'Parce que les cumuls de fonctions créent des possibilités de dissimulation : celui qui comptabilise les ventes et encaisse peut détourner un chèque et compenser par le lettrage ; celui qui crée les fournisseurs et signe les paiements peut faire vivre un fournisseur fictif. Le contrôle compensatoire (revue indépendante du lettrage, fichier fournisseurs verrouillé) est la réponse quand la séparation est impossible.',
    },
    {
      question: 'Comment distinguerez-vous une anomalie comptable d\'une faiblesse de contrôle interne ?',
      hint: 'Les comptes contre le processus.',
      expected:
        'L\'anomalie est une erreur dans les comptes au regard du CGNC : doublon de 17 160,00 MAD, CCA omise, erreur d\'imputation de 11 280,00 MAD — elle se corrige par écriture et s\'évalue au seuil. La faiblesse de contrôle est un défaut de processus : absence de visa, revue non faite, suspens non suivis — elle se traite par recommandation. Une même cause peut produire les deux, mais le traitement diffère : correction d\'un côté, prévention de l\'autre.',
    },
    {
      question: 'Que faire si le taux d\'exception d\'un test dépasse le seuil accepté par l\'équipe ?',
      hint: 'Deux issues : extension ou renoncement.',
      expected:
        'Deux issues : si l\'exception suggère un problème systémique mal mesuré, j\'étendrais l\'échantillon pour fiabiliser le taux ; si le taux confirmé reste trop élevé, la conclusion serait « contrôle non fiable » : pas d\'appui, et extension des tests substantifs sur le cycle concerné. Dans le scénario, l\'autorisation des achats à 33,33 % d\'exceptions aurait conduit à renoncer à l\'appui et à renforcer les contrôles directs sur les achats.',
    },
    {
      question: 'Comment documentez-vous un test de conformité pour qu\'il soit exploitable ?',
      hint: 'La feuille de test doit être refaisable.',
      expected:
        'La feuille mentionnerait : le contrôle testé et la règle de référence, la population et son volume, la méthode et la taille de l\'échantillon, la liste des sélections référencées, le résultat de chacune (conforme ou exception, avec copie des pièces), le calcul du taux d\'exception et la conclusion. L\'objectif : qu\'un relecteur puisse refaire le test et aboutir au même résultat — c\'est la piste d\'audit.',
    },
    {
      question: 'Risque inhérent et risque lié au contrôle : quelle différence, avec un exemple ?',
      hint: 'Avant et après les contrôles.',
      expected:
        'Le risque inhérent existe indépendamment des contrôles : la trésorerie est par nature exposée aux détournements, les stocks aux surévaluations. Le risque lié au contrôle est le risque que les contrôles de l\'entité ne préviennent pas ou ne détectent pas ces anomalies : par exemple des virements à des bénéficiaires non référencés révèlent un risque lié au contrôle élevé sur un risque inhérent déjà fort — combinaison qui justifie des travaux étendus.',
    },
    {
      question: 'Le client vous dit : « c\'est une erreur isolée, inutile d\'en parler ». Que répondez-vous ?',
      hint: 'Systémicité, documentation, remontée.',
      expected:
        'Je ne conclurais pas avant d\'avoir évalué le caractère isolé : l\'assertion du client n\'est pas une preuve, l\'extension de l\'échantillon l\'est. Si l\'extension confirme l\'isolement et l\'incidence est négligeable au seuil, le point resterait néanmoins documenté dans le dossier et figurerait, le cas échéant, dans le récapitulatif des anomalies. Rien ne disparaît d\'un dossier d\'audit sur parole.',
    },
    {
      question: 'Qu\'apporte l\'évaluation du contrôle interne au client lui-même ?',
      hint: 'Recommandations = valeur ajoutée.',
      expected:
        'Les conclusions débouchent sur des recommandations concrètes : visa de rapprochement obligatoire, verrouillage du fichier fournisseurs, suivi mensuel des suspens bancaires, revue de la balance âgée visée. Le commissaire aux comptes ne corrige pas les comptes, mais il signale les faiblesses qui exposent l\'entreprise aux erreurs et aux fraudes : c\'est la valeur ajoutée visible de la mission, au-delà de l\'opinion.',
    },
  ],
  followUps: [
    {
      question: 'Vous dites « contrôle non fiable » : concrètement, cela change quoi dans vos travaux ?',
      expected:
        'Cela interdit d\'utiliser ce contrôle comme élément probant : je renoncerais à l\'appui et j\'étendrais les tests substantifs du cycle concerné — par exemple, sur les achats, le rapprochement facture / BC / BR sur un échantillon élargi et la recherche systématique de doublons. La nature et l\'étendue des travaux changent, pas seulement la conclusion écrite.',
    },
    {
      question: 'Votre échantillon de 12 demandes d\'achat sur 640 : pourquoi cette taille ?',
      expected:
        'La taille résulte du risque accepté et du seuil d\'exception toléré, arbitré avec le senior ; 12 pièces permettent de détecter un taux d\'exception significatif à moindre coût dans un scénario. En pratique, la taille se justifie par des tables statistiques ou par l\'expérience du cabinet, et surtout : elle se documente. L\'important en entretien est de savoir dire que la taille est un choix raisonné, pas un chiffre magique.',
    },
    {
      question: 'Un taux d\'exception de 12,00 % sur le rapprochement facture / BC / BR : beaucoup ou peu ?',
      expected:
        'C\'est trop pour s\'appuyer sur le contrôle : un contrôle utilisé comme élément probant doit fonctionner quasi systématiquement. Mais c\'est peu au regard des comptes si l\'incidence (19 970,00 MAD) est corroborée et inférieure au seuil : d\'où la double conclusion — pas d\'appui sur le contrôle, extension des substantifs, incidence à suivre mais sans incidence attendue sur l\'opinion.',
    },
    {
      question: 'La balance âgée est produite chaque mois mais trois visas manquent : est-ce vraiment une défaillance ?',
      expected:
        'Oui, au sens du contrôle testé : une revue non visée n\'est pas prouvée — le visa EST la preuve du contrôle. Trois mois non visés sur douze (25,00 %) suffisent à interdire l\'appui, d\'autant que 9 000,00 MAD de créances anciennes sont sans justificatif : le fait confirme la conséquence du défaut.',
    },
    {
      question: 'Pourquoi recalculer un rapprochement bancaire alors que le client l\'a déjà fait ?',
      expected:
        'Parce que l\'arithmétique d\'une feuille peut être fausse, et que mon travail consiste à vérifier, pas à croire. Le recalcul (318 640,00 − 24 210,00 + 14 500,00 − 420,00 = 308 510,00 MAD) valide la cohérence du document avant même d\'en commenter le fond ; c\'est aussi le geste le plus simple pour détecter un rapprochement « de façade ».',
    },
    {
      question: 'Le paiement à un bénéficiaire non référencé : vous parlez d\'indicateur de fraude — c\'est à vous de conclure ?',
      expected:
        'Non : je documente les faits (bénéficiaire absent du fichier, aucun justificatif, 2 300,00 MAD), j\'étends les travaux aux paiements similaires et je remonte au senior. La qualification de fraude éventuelle appartient à la mission, sur la base d\'éléments plus complets — jamais au stagiaire sur une pièce isolée. L\'indicateur se documente, la conclusion se hiérarchise.',
    },
    {
      question: 'En une phrase : pourquoi un cheminement ne suffit jamais à conclure sur l\'efficacité d\'un contrôle ?',
      expected:
        'Parce qu\'une transaction unique ne prouve que l\'existence du processus à un instant donné, alors que l\'efficacité opérationnelle suppose un fonctionnement constant sur toute la période — seule un test de conformité sur échantillon peut l\'établir.',
    },
  ],
  evaluation: {
    criteria: [
      {
        label: 'Distinction des trois familles de tests',
        description: 'Situé cheminement, conformité et substantif par leur objectif, leur étendue et leur conclusion propre.',
      },
      {
        label: 'Construction d\'échantillons',
        description: 'Définit population, méthode de sélection et taille, et justifie chaque choix par le risque et le seuil.',
      },
      {
        label: 'Exécution rigoureuse des tests',
        description: 'Confronte chaque sélection à la règle, calcule les taux d\'exception et vérifie l\'arithmétique des documents (rapprochements, incidences).',
      },
      {
        label: 'Évaluation des exceptions',
        description: 'Recherche cause, incidence, caractère systémique et éléments complémentaires avant toute conclusion ; distingue défaillance de contrôle et anomalie comptable.',
      },
      {
        label: 'Lecture des risques par cycle',
        description: 'Identifie les risques types : achats non autorisés et factures fictives, doublons et paiements indues, détournements d\'encaissements, suspens anciens.',
      },
      {
        label: 'Conclusion et recommandation',
        description: 'Formule une conclusion actionnable (appui ou non, extension) et des recommandations qui adressent les causes observées.',
      },
      {
        label: 'Honnêteté pédagogique',
        description: 'Présente le scénario comme un entraînement fictif et formule les démarches au conditionnel, sans revendiquer d\'expérience vécue.',
      },
    ],
  },
}
