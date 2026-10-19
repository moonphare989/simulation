import type { Mission } from '@/lib/types'

// =====================================================================
// Fiche 1 — Fidumac (cabinet fictif) · Mission 4
// Documentation des anomalies et rédaction de mémos de cycle
// Scénario pédagogique fictif — janvier–mars 2026 — montants en MAD
// =====================================================================

export const fidumacMission4: Mission = {
  id: 'fidumac-m4',
  ficheId: 'fidumac',
  order: 4,
  title: 'Documentation des anomalies et rédaction de mémos de cycle',
  period: 'Janvier – Mars 2026 (scénario pédagogique)',
  company: 'Fidumac (cabinet fictif)',
  sector: 'Distribution et BTP (entreprises clientes fictives)',
  referenceData: [
    'Documentation d\'une dizaine d\'anomalies d\'enregistrement relevées lors des travaux de révision des exercices clos le 31/12/2025, sur fiche normalisée en treize champs',
    'Contribution à la rédaction de deux mémos de cycle destinés au dossier d\'audit des commissaires aux comptes : Achats-Fournisseurs (DistriNord, fictif) et Ventes-Clients (Batiprode, fictif)',
    'Fiche modèle d\'anomalie en 13 champs : référence, cycle, compte, montant, risque, fait observé, critère de contrôle, cause éventuelle, incidence, justificatifs, correction proposée, réponse du client, conclusion',
    'Seuil de signification des deux dossiers : 250 000,00 MAD — le récapitulatif des anomalies cumule les incidences corrigées et non corrigées face à ce seuil',
    'Référentiel : CGNC marocain (6111, 34552, 4411, 4417, 3491, 3421, 4452, 3940, 6194) ; scénario entièrement fictif, janvier–mars 2026, montants en MAD à deux décimales',
  ],
  summary:
    'Quatrième volet du scénario Fidumac : documenter une dizaine d\'anomalies d\'enregistrement et contribuer aux mémos de cycle des commissariats aux comptes de DistriNord et Batiprode (fictifs). Apprendre à qualifier un constat (erreur comptable, problème de justificatif, faiblesse de contrôle interne) ; à rédiger une fiche d\'anomalie en treize champs qui sépare le fait observé de la conclusion ; à chiffrer une incidence (HT, TVA, exercice concerné) et à proposer l\'écriture de correction au CGNC ; à tenir le récapitulatif des anomalies corrigées et non corrigées face au seuil de signification de 250 000,00 MAD ; et à structurer un mémo de cycle complet, de l\'objectif à la conclusion.',
  comprehension: {
    intro:
      'Quatrième volet du scénario Fidumac. Après la prise de connaissance (mission 1), l\'évaluation du contrôle interne (mission 2) et la révision des comptes (mission 3), l\'équipe vous confie la formalisation : documenter une dizaine d\'anomalies d\'enregistrement et contribuer à deux mémos de cycle destinés au dossier d\'audit des commissaires aux comptes. Le scénario s\'élargit : aux côtés du dossier Distra Maroc, Fidumac suit deux autres commissariats aux comptes, eux aussi arrêtés au 31/12/2025 — DistriNord (distribution, fictif) pour le mémo Achats-Fournisseurs, Batiprode (BTP, fictif) pour le mémo Ventes-Clients. Tout est inventé : entreprises, personnes, montants.\n\nPourquoi tant de formalisme ? Parce qu\'en audit, un constat non documenté n\'existe pas. Le dossier de travail doit permettre à un tiers — un associé, un confrère, un juge — de refaire le raisonnement sans son auteur : c\'est la piste d\'audit, du chiffre des états de synthèse jusqu\'à la pièce, en passant par la balance, le grand livre et les écritures. La fiche d\'anomalie en est la brique : treize champs, du fait observé à la conclusion, en passant par le critère violé, l\'incidence chiffrée, les justificatifs, la correction proposée et la réponse du client.\n\nLa discipline centrale est la séparation du fait observé et de la conclusion. Le fait est le constat brut, référencé et daté : « les factures F-2026-0312 et F-2026-0347, même livraison, même montant de 18 450,00 MAD, sont toutes deux comptabilisées ». La conclusion est la qualification après analyse : « doublon de 18 450,00 TTC à extourner, FNP omise au 31/12/2025, correction acceptée le 12/02/2026 ». Confondre les deux, c\'est présenter un jugement comme une preuve — la fiche perd sa défendabilité.\n\nTrois familles de constats se distinguent avant toute rédaction : l\'erreur comptable (les comptes sont faux : double saisie, imputation erronée, cut-off manqué — traitement : écriture de correction), le problème de justificatif (l\'opération est peut-être exacte mais non prouvée : facture sans bon de réception, écriture sans pièce — traitement : obtenir la preuve, puis conclure) et la faiblesse de contrôle interne (le processus laisse passer les erreurs — traitement : recommandation, pas d\'écriture). Une même fiche peut mêler les trois : le doublon est une erreur, sa cause une faiblesse, sa preuve un justificatif.\n\nVient ensuite la mécanique des incidences. Chaque anomalie se chiffre — montant, comptes, HT et TVA distingués, exercice concerné — puis rejoint le récapitulatif des anomalies : corrigée (l\'écriture est passée, l\'incidence disparaît des états) ou non corrigée (le refus ou l\'attente la maintient dans les comptes). En fin de mission, le cumul des non corrigées se confronte au seuil de signification — 250 000,00 MAD dans le scénario : c\'est lui, et non l\'anomalie isolée, qui décide de l\'opinion et, le cas échéant, de la réserve. C\'est l\'importance relative : 18 450,00 MAD isolés pèsent peu ; additionnés, les montants décident.\n\nRestent les mémos. Le mémo de cycle rassemble, pour un cycle, les fiches et le raisonnement qui les accompagne : objectif, périmètre, processus étudié, risques, contrôles, travaux réalisés, anomalies, éléments probants, conclusion. Le mémo de synthèse agrège les cycles, cumule les anomalies non corrigées face au seuil et prépare l\'opinion. Le premier est la mémoire du cycle ; le second, la mémoire de la mission.\n\nLe référentiel reste le CGNC marocain : achats 6111, TVA récupérable sur charges 34552 (subdivision du 3455), fournisseurs 4411, factures non parvenues 4417, charges constatées d\'avance 3491, clients 3421, TVA facturée 4452, provisions pour dépréciation 3940 et dotations 6194. Traduire les libellés pour un entretien en France, jamais transposer les numéros. Et la règle d\'honnêteté inchangée : scénario fictif, fiches et mémos rédigés au conditionnel, chaque montant recalculé avant d\'être affirmé.',
    definitions: [
      {
        term: 'Anomalie',
        definition:
          'Écart entre ce qui est (le fait observé) et ce qui devrait être (le critère : CGNC, procédure interne, assertion d\'audit). Elle se démontre en rapprochant un constat chiffré et référencé de la règle violée — jamais par une impression.',
      },
      {
        term: 'Fiche d\'anomalie (modèle en 13 champs)',
        definition:
          'Document normalisé de documentation : référence, cycle, compte, montant, risque, fait observé, critère de contrôle, cause éventuelle, incidence, justificatifs, correction proposée, réponse du client, conclusion. Elle rend chaque constat traçable, chiffré et discutable.',
      },
      {
        term: 'Fait observé',
        definition:
          'Le constat brut, décrit objectivement et référencé (pièces, dates, montants) : « la facture F-2026-0347 doublonne la F-2026-0312 pour la livraison BL-2025-1188 ». Il ne contient ni jugement ni interprétation — c\'est ce qui rend la fiche défendable.',
      },
      {
        term: 'Conclusion (de fiche d\'anomalie)',
        definition:
          'La qualification du fait après analyse : nature de l\'anomalie, incidence chiffrée, statut corrigé ou non, recommandation éventuelle. Elle se sépare du fait observé parce qu\'elle engage le jugement : le lecteur doit pouvoir la vérifier en remontant au fait.',
      },
      {
        term: 'Incidence',
        definition:
          'Effet chiffré de l\'anomalie sur les comptes : montant, comptes mouvementés, exercice concerné, HT et TVA distingués. Sans incidence chiffrée, une anomalie ne peut être ni cumulée ni comparée au seuil de signification.',
      },
      {
        term: 'Écriture de correction',
        definition:
          'Écriture proposée par l\'auditeur pour rétablir la conformité : extourne de doublon, reclassement, régularisation de cut-off, dotation. L\'auditeur la propose et la documente dans la fiche ; c\'est le client qui la comptabilise — jamais l\'inverse.',
      },
      {
        term: 'Anomalie corrigée / non corrigée',
        definition:
          'Corrigée : l\'écriture a été comptabilisée par le client — l\'incidence disparaît des états. Non corrigée : le refus ou l\'attente maintient l\'incidence dans les comptes ; elle reste au récapitulatif et se cumule aux autres non corrigées jusqu\'au rapport.',
      },
      {
        term: 'Récapitulatif des anomalies',
        definition:
          'Tableau de fin de mission : toutes les anomalies, leurs incidences, leur statut (corrigée / non corrigée) et le cumul des non corrigées confronté au seuil de signification. C\'est lui qui nourrit la décision d\'opinion — pas l\'anomalie isolée.',
      },
      {
        term: 'Importance relative',
        definition:
          'Principe selon lequel une anomalie n\'est significative qu\'au regard de son montant et de son contexte : 18 450,00 MAD isolés pèsent peu face à un seuil de 250 000,00 MAD ; le même montant peut devenir décisif dans un cumul. Elle fonde le seuil et, le cas échéant, la réserve.',
      },
      {
        term: 'Élément probant',
        definition:
          'Information qui rend un constat vérifiable : pièce originale, confirmation directe, recalcul, observation physique. La fiche d\'anomalie cite ses justificatifs ; sans eux, le fait observé reste une affirmation — et l\'anomalie, une opinion.',
      },
      {
        term: 'Piste d\'audit',
        definition:
          'Chaîne qui relie un chiffre des états de synthèse à la balance, au grand livre, aux écritures, aux pièces et aux feuilles de travail — et inversement. La documentation des anomalies (références, justificatifs, corrections suivies) est ce qui la maintient intacte.',
      },
      {
        term: 'Mémo de cycle',
        definition:
          'Note de synthèse d\'un cycle (Achats-Fournisseurs, Ventes-Clients…) structurée en neuf rubriques : objectif, périmètre, processus étudié, risques, contrôles, travaux réalisés, anomalies, éléments probants, conclusion. Il rassemble les fiches du cycle et prépare le mémo de synthèse.',
      },
      {
        term: 'Mémo de synthèse',
        definition:
          'Note d\'agrégation de fin de mission : reprend les conclusions des mémos de cycle, cumule les anomalies non corrigées face au seuil de signification, liste les points discutés avec la direction et prépare l\'opinion — la réserve éventuelle comprise.',
      },
      {
        term: 'Réserve',
        definition:
          'Mention du rapport du commissaire aux comptes limitant la certification : elle naît d\'anomalies non corrigées dont le cumul dépasse le seuil de signification, ou d\'impossibilités d\'obtenir des éléments probants. Une anomalie isolée, corrigée ou marginale, n\'appelle pas de réserve.',
      },
    ],
    keyPoints: [
      'Un fait observé se documente tel quel ; la conclusion se formule après analyse — ne jamais confondre les deux dans une fiche.',
      'La fiche d\'anomalie en treize champs rend chaque constat vérifiable : référence, pièces, incidence chiffrée, correction, réponse du client, conclusion.',
      'Toute affirmation s\'appuie sur un élément probant : pièce, confirmation, recalcul — la piste d\'audit doit permettre de remonter jusqu\'à la source.',
      'Une anomalie corrigée disparaît du cumul ; une non corrigée s\'additionne aux autres face au seuil de signification (250 000,00 MAD).',
      'L\'importance relative se juge au cumul, pas à l\'unité : une anomalie de 18 450,00 MAD est dérisoire seule, significative si le cumul approche le seuil.',
      'Le mémo de cycle organise les constats d\'un cycle en neuf rubriques ; le mémo de synthèse agrège les cycles pour préparer l\'opinion.',
      'Trois familles à distinguer avant de documenter : erreur comptable (les comptes sont faux), problème de justificatif (l\'opération n\'est pas prouvée), faiblesse de contrôle interne (le processus laisse passer).',
      'L\'auditeur propose l\'écriture de correction, il ne la comptabilise pas : c\'est le client qui corrige ses propres comptes.',
      'Le CGNC marocain sert de critère de contrôle : 6111, 34552, 4411, 4417, 3491, 3421, 4452, 3940, 6194 — les mêmes réflexes qu\'au PCG, des numéros différents.',
      'Honnêteté : scénario fictif, fiches et mémos rédigés au conditionnel, montants recalculés avant d\'être cités.',
    ],
  },
  objectives: {
    why:
      'La documentation est ce qui transforme des travaux corrects en un dossier défendable : c\'est elle que l\'associé relit, que le dossier permanent conserve et qu\'un tiers doit pouvoir refaire. Savoir qualifier un constat (erreur, justificatif, contrôle interne), rédiger une fiche en treize champs qui sépare le fait de la conclusion, chiffrer une incidence, proposer une écriture de correction au CGNC et confronter le cumul des anomalies au seuil de signification : ce sont les gestes qui font passer un stagiaire du statut d\'exécutant à celui de rédacteur du dossier. Et la capacité à structurer un mémo de cycle complet est, en entretien, la preuve qu\'on sait écrire pour les autres — pas seulement calculer pour soi.',
    infoSought: [
      'Le modèle de fiche d\'anomalie du cabinet et ses treize champs exacts',
      'La numérotation des références d\'anomalies (ANO-XX) et le classement des fiches et justificatifs',
      'Le seuil de signification retenu pour chaque dossier (250 000,00 MAD ici) et la règle de cumul des anomalies',
      'Les anomalies déjà détectées par l\'équipe (tests de conformité, revues, cut-off) et leur état de documentation',
      'Les corrections déjà acceptées, refusées ou mises en attente par les clients, avec leurs justificatifs',
      'La structure imposée des mémos de cycle et les relecteurs prévus (senior, chef de mission)',
      'Les comptes CGNC mouvementés par chaque anomalie (6111, 34552, 4411, 4417, 3491, 3421, 3940, 6194)',
    ],
    risksCovered: [
      'Constats non documentés ou non référencés (piste d\'audit rompue, dossier non défendable)',
      'Confusion entre fait observé et conclusion (un jugement présenté comme un constat)',
      'Incidence non chiffrée ou non ventilée (HT / TVA, comptes, exercice concerné)',
      'Anomalies corrigées comptées comme non corrigées — ou l\'inverse — dans le récapitulatif',
      'Cumul des anomalies non confronté au seuil de signification (250 000,00 MAD)',
      'Écritures de correction erronées en comptes ou en sens (6111 / 34552 / 4417 au CGNC)',
      'Mémos de cycle incomplets (rubriques manquantes) ou incohérents avec les fiches d\'anomalies',
      'Recommandations de contrôle interne absentes des mémos malgré les faiblesses constatées',
      'Non-respect du CGNC marocain ou transposition abusive depuis le PCG français',
    ],
  },
  preparation: {
    documents: [
      'Le modèle de fiche d\'anomalie du cabinet (treize champs) et les fiches déjà ouvertes',
      'Les feuilles de travail des tests (cheminements, tests de conformité, revues) où figurent les exceptions',
      'Le récapitulatif des anomalies en cours, avec les statuts de correction',
      'La balance générale, le grand livre des comptes concernés et les journaux des achats et des ventes',
      'Les pièces justificatives des anomalies : factures, bons de livraison, avoirs, situations de travaux, confirmations',
      'Le plan de mission et le seuil de signification (250 000,00 MAD)',
      'Le manuel de procédures du client (processus du cycle à décrire dans le mémo)',
      'Les mémos de cycle des exercices précédents (structure et continuité N-1)',
      'Les comptes rendus des réunions avec le client (réponses aux anomalies)',
      'Le plan de comptes CGNC du client avec ses subdivisions (3455, 34552…)',
      'Le calendrier de bouclage : date limite des corrections avant le rapport',
    ],
    questionsToAsk: [
      'Quel est exactement le modèle de fiche (champs, ordre) et qui valide chaque fiche ?',
      'Comment numérote-t-on les anomalies et où classe-t-on les justificatifs ?',
      'Quelles anomalies sont déjà ouvertes, corrigées ou en attente de réponse du client ?',
      'Le seuil de signification est-il le même pour les deux dossiers (DistriNord, Batiprode) ?',
      'Quelle structure de mémo de cycle le cabinet impose-t-il, et qui relit avant validation ?',
      'Les écritures de correction proposées sont-elles suivies d\'un journal des corrections chez le client ?',
      'Faut-il présenter les fiches au client avant de rédiger les mémos (réunion de bouclage) ?',
    ],
    precautions: [
      'Ne jamais présenter le scénario comme vécu : tout est fictif, fiches et mémos rédigés au conditionnel.',
      'Décrire le fait avant de conclure : une fiche où le jugement précède le constat n\'est pas défendable.',
      'Recalculer chaque incidence avant de la citer (HT, TVA, exercice concerné) et vérifier les cumuls.',
      'Ne pas confondre les statuts : corrigée / non corrigée se prouve par une écriture passée, pas par une promesse.',
      'Rappel des rôles : l\'auditeur propose l\'écriture, le client la comptabilise — jamais l\'inverse.',
      'Garder le CGNC en tête et traduire les libellés (pas les numéros) pour un entretien en France.',
    ],
  },
  method: [
    {
      title: 'S\'approprier le modèle de fiche et les références',
      description:
        'Relire la fiche type en treize champs, la numérotation ANO-XX, le classement du dossier et le seuil de signification (250 000,00 MAD) avant d\'ouvrir la première fiche.',
      why: 'Une documentation normalisée est une documentation discutable et refaisable : le modèle garantit l\'homogénéité du dossier.',
    },
    {
      title: 'Collecter les constats au fil des travaux',
      description:
        'Relever au jour le jour les exceptions des tests, les écarts des revues analytiques et les anomalies de cut-off dans un journal de constats daté.',
      why: 'Documenter au fil de l\'eau évite la reconstruction de mémoire : un constat non noté le jour même est perdu.',
    },
    {
      title: 'Qualifier chaque constat',
      description:
        'Trier en trois familles : erreur comptable (les comptes sont faux), problème de justificatif (l\'opération n\'est pas prouvée), faiblesse de contrôle interne (le processus laisse passer).',
      why: 'Qualifier avant de documenter évite d\'écrire une fiche d\'anomalie pour une faiblesse de processus — ou de réclamer une écriture là où il manque une preuve.',
    },
    {
      title: 'Corroborer le fait avant de le documenter',
      description:
        'Réunir les justificatifs (pièces, confirmations directes, recalculs), vérifier les références et les dates, reconstituer la chronologie complète de l\'opération.',
      why: 'Un fait observé non corroboré expose la fiche à la contradiction : la force d\'un constat est celle de ses preuves.',
    },
    {
      title: 'Rattacher le fait à un critère de contrôle',
      description:
        'Citer la règle violée : principe ou compte du CGNC (séparation des exercices, 4417, 3491…), procédure interne du client, assertion d\'audit (réalité, exhaustivité, valorisation, rattachement).',
      why: 'Sans critère, il n\'y a pas d\'anomalie : l\'écart se démontre en confrontant le fait à la norme.',
    },
    {
      title: 'Chiffrer l\'incidence',
      description:
        'Préciser le montant, les comptes mouvementés, la ventilation HT / TVA et l\'exercice concerné ; distinguer l\'incidence brute de l\'effet net sur le résultat.',
      why: 'L\'incidence chiffrée est ce qui permet le cumul et la comparaison au seuil : sans elle, rien ne se décide.',
    },
    {
      title: 'Rédiger la fiche d\'anomalie en treize champs',
      description:
        'Remplir chaque champ du modèle, du fait observé à la conclusion, en séparant strictement le constat du jugement et en référençant chaque justificatif.',
      why: 'La fiche complète protège l\'équipe : fait, critère, incidence, correction et réponse du client s\'y répondent sans trou.',
    },
    {
      title: 'Proposer l\'écriture de correction',
      description:
        'Libellé, comptes CGNC, sens et montant — extourne de doublon, reclassement, régularisation de cut-off (4417, 3491) ou dotation (6194 / 3940) — avec extourne à l\'ouverture précisée le cas échéant.',
      why: 'Une proposition d\'écriture précise accélère la réponse du client et évite les corrections approximatives.',
    },
    {
      title: 'Obtenir la réponse du client',
      description:
        'Présenter les fiches en réunion de bouclage, recueillir acceptation, refus motivé ou mise en attente, et documenter la réponse et sa date dans la fiche.',
      why: 'La réponse du client fait partie de la fiche : elle conditionne le statut corrigé / non corrigé et le suivi jusqu\'au rapport.',
    },
    {
      title: 'Tenir le récapitulatif et les statuts à jour',
      description:
        'Suivre chaque écriture proposée jusqu\'à sa comptabilisation, dater les corrections, cumuler les incidences non corrigées et documenter les refus.',
      why: 'Le récapitulatif n\'a de valeur que s\'il est exact le jour du rapport : les statuts vivent avec la mission.',
    },
    {
      title: 'Confronter le cumul au seuil de signification',
      description:
        'Comparer l\'incidence cumulée — et surtout celle des non corrigées — au seuil de 250 000,00 MAD, et apprécier l\'importance relative en montant et en nature.',
      why: 'C\'est le mécanisme central de la décision d\'opinion : le cumul, pas l\'anomalie isolée, fait la réserve.',
    },
    {
      title: 'Rédiger le mémo de cycle',
      description:
        'Construire les neuf rubriques : objectif, périmètre, processus étudié, risques, contrôles, travaux réalisés, anomalies (fiches récapitulées), éléments probants, conclusion avec recommandations.',
      why: 'Le mémo transforme des fiches éparses en un raisonnement de cycle lisible par l\'associé et conservé au dossier permanent.',
    },
    {
      title: 'Préparer la montée vers la synthèse',
      description:
        'Extraire de chaque mémo les points à cumuler, les recommandations de contrôle interne et les points à discuter avec la direction pour le mémo de synthèse.',
      why: 'Le mémo de synthèse et l\'opinion se construisent sur les conclusions de cycle : ils n\'ont pas d\'autre matière.',
    },
    {
      title: 'Faire relire, archiver et suivre',
      description:
        'Soumettre fiches et mémos au senior, intégrer les remarques, archiver les justificatifs référencés et suivre les corrections restantes jusqu\'au rapport.',
      why: 'La relecture valide la défendabilité du dossier ; le suivi documente ce qui restera non corrigé au jour de l\'opinion.',
    },
  ],
  exercises: [
    // ============================ EXERCICE 1 ============================
    {
      id: 'fidumac-m4-ex1',
      title: 'Distinguer erreur comptable, problème de justificatif et faiblesse de contrôle interne',
      cycle: 'Transversal',
      context:
        'Premier travail de la mission : M. Sabri vous remet le journal des constats de la semaine, relevés au fil des travaux sur les dossiers DistriNord et Batiprode (fictifs). Avant d\'ouvrir la moindre fiche d\'anomalie, vous devez qualifier chaque situation : de quelle famille s\'agit-il ? Scénario fictif ; montants en MAD.',
      documents: [
        {
          kind: 'text',
          name: 'Journal des constats — semaine du 2 au 6 février 2026 (fictif)',
          content:
            'JOURNAL DES CONSTATS — SEMAINE DU 2 AU 6 FÉVRIER 2026\nDossiers DistriNord (distribution) et Batiprode (BTP) — travaux de\ncommissariat aux comptes, exercices clos le 31/12/2025.\nSix situations relevées au fil des travaux.\n\nSITUATION 1 — DistriNord. La facture FA-2025-0712 du fournisseur\nAlimentation Nord (fictif), 7 320,00 MAD TTC, est comptabilisée au\n6111 / 34552 / 4411 depuis le 18/11/2025 : le bon de réception\nBL-2025-0921 est introuvable, le service réception ne retrouve pas\ntrace du visa.\n\nSITUATION 2 — DistriNord. La facture d\'honoraires du cabinet\nMena Conseils (fictif), 12 400,00 MAD HT, a été saisie deux fois au\n6137 (pièces AC-2025-0781 et AC-2025-0782, même référence\nfournisseur).\n\nSITUATION 3 — DistriNord. La demande d\'achat DA-2025-0644\n(2 800,00 MAD TTC) a été émise ET validée par le même chef de\nrayon : le visa du directeur des achats manque.\n\nSITUATION 4 — DistriNord. À l\'inventaire physique du 31/12/2025,\nle stock compté du rayon épicerie est inférieur de 1 240,00 MAD au\nstock comptable ; aucune explication n\'est fournie (ni casse\nenregistrée, ni livraison en transit).\n\nSITUATION 5 — DistriNord. Une écriture d\'opérations diverses de\n8 600,00 MAD au 6125, passée le 30/12/2025, ne comporte aucune\npièce justificative : le libellé indique seulement « régularisation\nfournitures ».\n\nSITUATION 6 — Batiprode. La provision pour dépréciation des\ncréances a été maintenue à 4 500,00 MAD, son niveau de fin 2024,\nsans balance âgée à l\'appui ni justification de la politique appliquée.',
          note: 'Document fictif. Chacune de ces situations appellera un traitement différent : erreur comptable (écriture de correction), problème de justificatif (preuve à obtenir) ou faiblesse de contrôle interne (recommandation).',
        },
      ],
      questions: [
        {
          id: 'fidumac-m4-ex1-q1',
          question: 'Quelle est la différence entre une erreur comptable et un problème de justificatif ?',
          type: 'mcq',
          options: [
            'L\'erreur comptable rend les comptes faux (montant, compte ou exercice erroné) ; le problème de justificatif laisse les comptes peut-être exacts, mais non prouvés par les pièces',
            'Aucune : ce sont deux termes synonymes',
            'Le problème de justificatif est toujours plus grave que l\'erreur comptable',
            'L\'erreur comptable ne concerne jamais les montants, seulement les libellés',
          ],
          expected: '0',
          explanation:
            'L\'erreur comptable se constate dans les comptes : double saisie, imputation erronée, charge au mauvais exercice — l\'incidence se chiffre et se corrige par écriture. Le problème de justificatif est un défaut de preuve : l\'opération est peut-être parfaitement réelle et bien enregistrée, mais rien ne le démontre — on obtient la preuve avant de conclure.',
        },
        {
          id: 'fidumac-m4-ex1-q2',
          question: 'Quelles situations constituent d\'abord une erreur comptable (les comptes sont faux, incidence chiffrable) ?',
          type: 'multi',
          options: [
            'S1 — Facture de 7 320,00 MAD TTC sans bon de réception retrouvé',
            'S2 — Honoraires de 12 400,00 MAD HT saisis deux fois',
            'S3 — Demande d\'achat validée par son propre émetteur',
            'S4 — Écart d\'inventaire de 1 240,00 MAD non expliqué',
            'S5 — Écriture OD de 8 600,00 MAD sans pièce justificative',
            'S6 — Provision clients maintenue sans balance âgée ni politique justifiée',
          ],
          expected: ['1', '3'],
          explanation:
            'Deux erreurs comptables avérées : S2 (double saisie — la charge est doublée de 12 400,00 MAD HT, extourne immédiate) et S4 (le stock comptable contredit l\'inventaire physique de 1 240,00 MAD sans explication — le compte 3111 est faux tant que l\'écart n\'est pas traité). S1 et S5 sont des problèmes de justificatif (preuve manquante), S6 une estimation non étayée (preuve et recalcul à obtenir), S3 une faiblesse de contrôle interne.',
        },
        {
          id: 'fidumac-m4-ex1-q3',
          question: 'La situation 3 (DA-2025-0644 validée par son émetteur) relève de quelle famille ?',
          type: 'mcq',
          options: [
            'Erreur comptable : une écriture de correction s\'impose au 6111',
            'Problème de justificatif : il manque une pièce à obtenir du fournisseur',
            'Faiblesse de contrôle interne (cumul émission / validation) : recommandation à formuler, sans écriture comptable',
            'Aucune anomalie : le montant est faible (2 800,00 MAD TTC)',
          ],
          expected: '2',
          explanation:
            'L\'auto-validation d\'une demande d\'achat est un cumul de fonctions : le processus ne sépare pas celui qui demande de celui qui autorise. Rien n\'indique que les comptes soient faux — le constat appelle une recommandation de contrôle interne (visa du directeur des achats), pas une écriture. Et la matérialité d\'un contrôle ne se juge pas au montant d\'une seule DA.',
        },
        {
          id: 'fidumac-m4-ex1-q4',
          question: 'Face à la situation 5 (écriture OD de 8 600,00 MAD sans pièce), quel est le premier réflexe ?',
          type: 'mcq',
          options: [
            'Annuler immédiatement l\'écriture : sans pièce, elle est forcément indue',
            'Demander la pièce au client et rechercher les corroborations (facture du fournisseur, relevés, grand livre) ; ne conclure qu\'ensuite — documenter le fait observé, pas la conclusion',
            'Ne rien signaler : l\'écriture est déjà passée au journal',
            'Étendre l\'échantillon des tests sans chercher la pièce',
          ],
          expected: '1',
          explanation:
            'Une écriture sans pièce est d\'abord un problème de justification : la charge peut être parfaitement légitime (facture de décembre reçue en janvier, par exemple). Annuler sans chercher serait aussi faux que laisser passer : on obtient la preuve, on documente le fait (« écriture de 8 600,00 sans justificatif rattaché ») et l\'on ne conclut (annulation, correction) qu\'une fois la recherche achevée.',
        },
        {
          id: 'fidumac-m4-ex1-q5',
          question:
            'Expliquez (au conditionnel) votre démarche pour qualifier puis documenter chacune des six situations : quelle famille, quel traitement, quelle trace ?',
          type: 'open',
          keywords: ['erreur comptable', 'justificatif', 'contrôle interne', 'fait observé', 'conclusion', 'incidence', 'recommandation', 'corroboration'],
          explanation:
            'Réponse attendue (exemple) : je trierais chaque situation en trois familles — erreurs comptables (S2 double saisie, S4 écart d\'inventaire non expliqué : incidence à chiffrer, écriture à proposer), problèmes de justificatif (S1 facture sans BL, S5 écriture sans pièce, S6 provision non étayée : preuve à obtenir avant de conclure, la S6 appelant en outre un recalcul sur balance âgée) et faiblesse de contrôle interne (S3 auto-validation : recommandation, pas d\'écriture). Puis je documenterais au fil de l\'eau : journal de constats daté, fiche d\'anomalie en treize champs pour chaque constat retenu — fait observé référencé, critère, cause éventuelle, incidence, justificatifs, correction proposée, réponse du client, conclusion. S2, déjà extournée par le client, donnerait une fiche soldée « corrigée » ; S1, si la livraison est corroborée, une simple observation. Chaque trace (pièce, date, montant) maintiendrait la piste d\'audit.',
        },
      ],
      risks: ['Qualification erronée d\'un constat', 'Conclusion précipitée', 'Faiblesse confondue avec anomalie comptable', 'Preuve non recherchée'],
      solutionSummary:
        'La démarche consisterait à trier les six situations en trois familles avant toute fiche. Erreurs comptables (les comptes sont faux) : S2, la double saisie des honoraires de 12 400,00 MAD HT (extournée dès le lendemain par le client — la fiche serait ouverte puis soldée « corrigée ») et S4, l\'écart d\'inventaire de 1 240,00 MAD non expliqué (le stock comptable est faux tant que l\'écart n\'est pas traité ; une fois la cause établie — casse de décembre non enregistrée —, l\'écriture se chiffre). Problèmes de justificatif (preuve manquante) : S1, la facture sans bon de réception (à corroborer par le PV de quai et la confirmation fournisseur — futur ANO-08), S5, l\'écriture OD de 8 600,00 MAD sans pièce (à justifier ou annuler) et S6, la provision maintenue sans balance âgée (estimation non étayée — le recalcul donnera l\'incidence, futur ANO-06). Faiblesse de contrôle interne : S3, la DA validée par son émetteur (futur ANO-09 : recommandation, pas d\'écriture). Dans ce cas, je documenterais chaque situation le jour même, puis j\'ouvrirais une fiche par anomalie retenue en vérifiant que la qualification guide le traitement : écriture pour l\'erreur, preuve pour le justificatif, recommandation pour la faiblesse. À l\'oral, cette grille de tri (comptes faux / preuve manquante / processus défaillant) est un marqueur de maturité : elle évite de réclamer une écriture là où il faut une preuve, et inversement.',
      interviewTips: [
        'Annoncez la famille avant le traitement : « erreur comptable → écriture ; justificatif → preuve à obtenir ; contrôle interne → recommandation ».',
        'Ne qualifiez jamais une situation sans l\'avoir corroborée : une facture sans bon de réception n\'est pas forcément une charge indue.',
      ],
    },
    // ============================ EXERCICE 2 ============================
    {
      id: 'fidumac-m4-ex2',
      title: 'La fiche d\'anomalie : documenter un doublon fournisseur de 18 450,00 MAD',
      cycle: 'Achats-Fournisseurs',
      context:
        'Chez DistriNord (fictif), le contrôle de la séparation des exercices vous a conduit à revoir les factures reçues en janvier 2026. Vous y constatez un doublon fournisseur : deux factures pour une même livraison, toutes deux comptabilisées. M. Sabri vous demande de rédiger la fiche d\'anomalie complète selon le modèle en treize champs du cabinet. Scénario fictif ; montants en MAD, TVA fictive à 20 %.',
      documents: [
        {
          kind: 'table',
          name: 'Journal des achats — extrait janvier 2026 (fictif)',
          columns: ['N° pièce', 'Date', 'Comptes mouvementés', 'Libellé', 'Montant TTC (MAD)'],
          rows: [
            ['AC-2026-0118', '05/01/2026', '6111 / 34552 / 4411', 'Facture F-2026-0312 — Sahel Emballages (livraison BL-2025-1188 du 29/12/2025)', 18450.0],
            ['AC-2026-0192', '22/01/2026', '6111 / 34552 / 4411', 'Facture F-2026-0347 — Sahel Emballages (livraison BL-2025-1188 du 29/12/2025)', 18450.0],
            ['AC-2026-0204', '23/01/2026', '6125 / 34552 / 4411', 'Fournitures de bureau — Bureau Nord (BC-2026-0031)', 3480.0],
          ],
          note: 'Document fictif. Même fournisseur, même bon de livraison BL-2025-1188 (réception du 29/12/2025), même montant TTC : F-2026-0347 est un duplicata émis par le fournisseur le 22/01/2026 à la suite d\'une relance. Aucune facture non parvenue (4417) n\'avait été constatée au 31/12/2025 pour cette livraison. La ligne du 23/01 est conforme.',
        },
        {
          kind: 'table',
          name: 'Compte 4411 — Fournisseur Sahel Emballages, extrait (fictif)',
          columns: ['Date', 'Libellé', 'Débit (MAD)', 'Crédit (MAD)'],
          rows: [
            ['05/01/2026', 'Facture F-2026-0312 (pièce AC-2026-0118)', '', 18450.0],
            ['22/01/2026', 'Facture F-2026-0347 (pièce AC-2026-0192)', '', 18450.0],
            ['31/01/2026', 'Solde créditeur au 31/01/2026', '', 36900.0],
          ],
          note: 'Document fictif. HT 15 375,00 + TVA 20 % (3 075,00) = TTC 18 450,00 MAD par facture. Aucun règlement n\'est intervenu à fin janvier 2026 : le solde de 36 900,00 MAD représente deux fois la dette réelle de 18 450,00 MAD.',
        },
        {
          kind: 'text',
          name: 'Modèle de fiche d\'anomalie — 13 champs (support fictif du cabinet)',
          content:
            'MODÈLE DE FICHE D\'ANOMALIE — 13 CHAMPS\n\n1. Référence — numéro unique de l\'anomalie (ANO-XX) et dossier.\n2. Cycle — Achats-Fournisseurs, Ventes-Clients, Trésorerie…\n3. Compte — comptes CGNC mouvementés (et subdivisions).\n4. Montant — montant en jeu, TTC et HT / TVA distingués.\n5. Risque — assertion ou risque d\'audit concerné (surévaluation,\n   exhaustivité, rattachement…).\n6. Fait observé — le constat brut, référencé et daté, sans\n   interprétation.\n7. Critère de contrôle — la règle violée : CGNC, procédure interne,\n   assertion.\n8. Cause éventuelle — explication plausible, à confirmer (le mot\n   « éventuelle » protège la fiche d\'un diagnostic non prouvé).\n9. Incidence — effet chiffré sur les comptes : montant, comptes,\n   exercice concerné.\n10. Justificatifs — pièces et preuves réunies (BL, factures,\n    confirmations, courriers).\n11. Correction proposée — l\'écriture (comptes, sens, montant) avec\n    extourne éventuelle : le client la comptabilise, pas l\'auditeur.\n12. Réponse du client — acceptation, refus motivé ou mise en\n    attente, datés et justifiés.\n13. Conclusion — corrigée ou non corrigée, recommandation\n    éventuelle.\n\nRègle d\'écriture : le fait observé se prouve ; la conclusion se\ndiscute. Les deux ne se mélangent jamais dans un même paragraphe.',
          note: 'Support fictif. Le modèle est celui du dossier d\'entraînement : treize champs, du fait observé à la conclusion.',
        },
      ],
      questions: [
        {
          id: 'fidumac-m4-ex2-q1',
          question:
            '« Les factures F-2026-0312 et F-2026-0347 portent sur la même livraison BL-2025-1188 et sont toutes deux comptabilisées » : dans la fiche, cette phrase relève de quel champ ?',
          type: 'mcq',
          options: [
            'La conclusion : c\'est la qualification du problème',
            'Le fait observé : le constat brut, référencé et daté',
            'La cause éventuelle : l\'explication du double envoi',
            'La réponse du client : sa réaction au constat',
          ],
          expected: '1',
          explanation:
            'C\'est le fait observé : une description vérifiable, appuyée sur des références (numéros de factures, BL, dates, montants). La conclusion viendra après analyse (« doublon de 18 450,00 TTC à extourner, FNP omise au 31/12/2025 ») ; la cause (absence de rapprochement facture / BL) et la réponse du client relèvent d\'autres champs.',
        },
        {
          id: 'fidumac-m4-ex2-q2',
          question: '« Absence de rapprochement facture / bon de livraison à la saisie » : à quel champ cette phrase appartient-elle ?',
          type: 'mcq',
          options: [
            'Au fait observé',
            'À la cause éventuelle : une explication plausible du doublon, à confirmer par le client',
            'Au critère de contrôle : la règle violée',
            'À l\'incidence',
          ],
          expected: '1',
          explanation:
            'C\'est la cause éventuelle : elle explique pourquoi le doublon a pu passer, mais reste à confirmer — le mot « éventuelle » protège la fiche d\'un diagnostic non prouvé. Le critère de contrôle énoncerait la règle elle-même : « toute facture doit être rapprochée du bon de livraison avant saisie » et « la charge se rattache au service fait » (CGNC : FNP au 4417).',
        },
        {
          id: 'fidumac-m4-ex2-q3',
          question:
            'Rédigez (au conditionnel) la fiche d\'anomalie complète du doublon Sahel Emballages, champ par champ, selon le modèle en treize champs.',
          type: 'open',
          keywords: ['fait observé', 'critère', 'cause', 'incidence', 'correction proposée', 'réponse du client', 'conclusion', 'justificatif'],
          explanation:
            'Réponse attendue (exemple) : référence ANO-2026-01, cycle Achats-Fournisseurs, comptes 6111 / 34552 / 4411 / 4417, montant 18 450,00 MAD TTC (HT 15 375,00, TVA 3 075,00), risque de surévaluation des charges et des dettes. Fait observé : la livraison BL-2025-1188 du 29/12/2025 est facturée deux fois (F-2026-0312 et F-2026-0347) et les deux factures sont comptabilisées, sans FNP constatée au 31/12/2025 — le 4411 affiche 36 900,00 MAD pour une dette réelle de 18 450,00. Critère : rattachement de la charge au service fait (CGNC, FNP au 4417) et unicité de la facture par rapprochement facture / BL. Cause éventuelle : absence de rapprochement à la saisie et de provisionnement des FNP, duplicata non identifié. Incidence : 15 375,00 HT manquants en 2025 (FNP omise) et 18 450,00 TTC doublés en 2026. Justificatifs : BL signé, les deux factures, journal des achats, compte 4411, courrier du fournisseur du 03/02/2026. Correction proposée : au 31/12/2025, débit 6111 15 375,00 / débit 34552 3 075,00 / crédit 4417 18 450,00 (extournable au 01/01/2026) ; en 2026, extourne d\'une des deux saisies (débit 4411 / crédit 6111 / crédit 34552). Réponse du client : acceptation, écritures passées le 12/02/2026. Conclusion : anomalie corrigée, incidence résiduelle nulle, faiblesse portée au mémo de cycle.',
        },
      ],
      risks: ['Fait observé et conclusion confondus', 'Incidence non chiffrée ou non ventilée', 'Champs de la fiche incomplets', 'Piste d\'audit rompue (justificatifs non référencés)'],
      solutionSummary:
        'La fiche complète se rédigerait ainsi (modèle en 13 champs). RÉFÉRENCE : ANO-2026-01 (dossier DistriNord, fictif). CYCLE : Achats-Fournisseurs. COMPTES : 6111 / 34552 / 4411 / 4417. MONTANT : 18 450,00 MAD TTC (HT 15 375,00 + TVA 20 % 3 075,00). RISQUE : surévaluation des charges et des dettes ; séparation des exercices. FAIT OBSERVÉ : la livraison BL-2025-1188 du fournisseur Sahel Emballages, réceptionnée le 29/12/2025, a été facturée deux fois (F-2026-0312 du 05/01/2026 et duplicata F-2026-0347 du 22/01/2026) et les deux factures sont comptabilisées au journal des achats de janvier 2026 (pièces AC-2026-0118 et AC-2026-0192) ; aucune FNP n\'avait été constatée au 31/12/2025 pour cette livraison ; le solde du 4411 s\'élève à 36 900,00 MAD pour une dette réelle de 18 450,00 MAD. CRITÈRE DE CONTRÔLE : rattachement de la charge au service fait (séparation des exercices, CGNC : FNP au 4417) ; unicité de la facture par rapprochement facture / bon de livraison. CAUSE ÉVENTUELLE : absence de rapprochement facture / BL à la saisie et de provisionnement des factures non parvenues ; le duplicata du fournisseur n\'a pas été identifié comme tel. INCIDENCE : exercice 2025 — charge manquante de 15 375,00 HT (FNP omise, avec 3 075,00 de TVA récupérable) ; exercice 2026 — charge et dette doublées de 18 450,00 TTC. JUSTIFICATIFS : BL-2025-1188 signé, factures F-2026-0312 et F-2026-0347, extraits du journal des achats de janvier 2026, compte 4411 Sahel Emballages, courrier du fournisseur du 03/02/2026 confirmant le double envoi, relevé de compte du fournisseur. CORRECTION PROPOSÉE : au 31/12/2025, débit 6111 15 375,00 / débit 34552 3 075,00 / crédit 4417 18 450,00 (extournable au 01/01/2026) ; en 2026, extourne d\'une des deux saisies : débit 4411 18 450,00 / crédit 6111 15 375,00 / crédit 34552 3 075,00 — le client comptabilise, l\'auditeur propose. RÉPONSE DU CLIENT : la direction confirme le double envoi (courrier du 03/02/2026) et accepte les deux écritures, comptabilisées le 12/02/2026. CONCLUSION : anomalie corrigée — incidence résiduelle nulle sur les états de synthèse ; la faiblesse (rapprochement facture / BL, suivi des FNP) est portée au mémo de cycle Achats-Fournisseurs avec recommandation, et la fiche reste au dossier avec ses justificatifs. Dans ce cas, je veillerais à ce que chaque montant cité soit recalculé (15 375,00 + 3 075,00 = 18 450,00) et que chaque affirmation renvoie à une pièce : c\'est la piste d\'audit qui fait la valeur de la fiche.',
      interviewTips: [
        'Récitez les treize champs dans l\'ordre : référence, cycle, compte, montant, risque, fait observé, critère, cause éventuelle, incidence, justificatifs, correction proposée, réponse du client, conclusion — un marqueur de rigueur en entretien.',
        'Illustrez chaque champ avec le doublon de 18 450,00 MAD : le recruteur entend alors une méthode appliquée, pas une liste récitée.',
      ],
    },
    // ============================ EXERCICE 3 ============================
    {
      id: 'fidumac-m4-ex3',
      title: 'L\'écriture de correction : chiffrer et proposer (sans jamais la comptabiliser)',
      cycle: 'Achats-Fournisseurs',
      context:
        'Suite de la fiche ANO-2026-01 : M. Sabri vous demande de chiffrer l\'écriture de correction du doublon Sahel Emballages chez DistriNord (fictif) et de la proposer au client. Rappel des rôles : l\'auditeur propose, le client comptabilise. Scénario fictif ; montants en MAD, TVA fictive à 20 %.',
      documents: [
        {
          kind: 'table',
          name: 'Synthèse du constat — livraison BL-2025-1188 (fictif)',
          columns: ['Élément', 'Valeur', 'Détail'],
          rows: [
            ['Réception de la livraison', '29/12/2025', 'BL-2025-1188 signé au quai'],
            ['Facture originale', 'F-2026-0312 — 05/01/2026', 'HT 15 375,00 + TVA 3 075,00 = TTC 18 450,00'],
            ['Duplicata', 'F-2026-0347 — 22/01/2026', 'Même livraison, même TTC 18 450,00'],
            ['FNP constatée au 31/12/2025', '0,00', 'Aucune facture non parvenue enregistrée'],
            ['Total comptabilisé en janvier 2026', '36 900,00', 'Deux saisies de 18 450,00 TTC'],
            ['Règlements intervenus à fin janvier 2026', '0,00', 'Aucun paiement'],
          ],
          note: 'Document fictif. Le service a été rendu le 29/12/2025 : la charge appartient à l\'exercice 2025 (FNP omise au 31/12/2025), et la double saisie de janvier 2026 déforme l\'exercice suivant.',
        },
      ],
      questions: [
        {
          id: 'fidumac-m4-ex3-q1',
          question: 'Quel est le montant TTC du correctif à comptabiliser au 31/12/2025 (charge manquante) ?',
          type: 'numeric',
          expected: 18450,
          explanation:
            'La charge de la livraison BL-2025-1188 manque entièrement à l\'exercice 2025 : HT 15 375,00 + TVA 20 % (3 075,00) = 18 450,00 MAD TTC à constater en facture non parvenue au 31/12/2025.',
        },
        {
          id: 'fidumac-m4-ex3-q2',
          question: 'Quel est le montant HT de la facture (TVA fictive à 20 %) ?',
          type: 'numeric',
          expected: 15375,
          explanation:
            '18 450,00 / 1,20 = 15 375,00 MAD HT, la TVA récupérable étant de 3 075,00 MAD (compte 34552). Ventiler HT et TVA est indispensable : les deux ne touchent ni les mêmes comptes ni les mêmes contrôles.',
        },
        {
          id: 'fidumac-m4-ex3-q3',
          question: 'Quelle écriture corrige l\'exercice 2025 (FNP omise) ?',
          type: 'mcq',
          options: [
            'Débit 6111 Achats de marchandises 15 375,00 / Débit 34552 État – TVA récupérable sur charges 3 075,00 / Crédit 4417 Fournisseurs, factures non parvenues 18 450,00',
            'Débit 4417 Fournisseurs, factures non parvenues 18 450,00 / Crédit 6111 Achats de marchandises 15 375,00 / Crédit 34552 État – TVA récupérable sur charges 3 075,00 (l\'écriture inverse)',
            'Débit 6111 Achats de marchandises 18 450,00 / Crédit 5141 Banque 18 450,00',
            'Débit 3491 Charges constatées d\'avance 18 450,00 / Crédit 6111 Achats de marchandises 18 450,00',
          ],
          expected: '0',
          explanation:
            'Le service est fait en 2025 : on constate la charge (6111) et la TVA récupérable (34552) contre la dette au 4417 (FNP) pour 18 450,00 TTC — écriture extournable au 01/01/2026. L\'option 2 est l\'inverse (extourne) : elle conviendrait si la FNP avait été comptabilisée en double, pas si elle manque. L\'option 3 confond charge et règlement ; l\'option 4 confond FNP (4417) et CCA (3491).',
        },
        {
          id: 'fidumac-m4-ex3-q4',
          question: 'En janvier 2026, une fois la FNP corrigée puis extournée à l\'ouverture, quelle écriture élimine le doublon ?',
          type: 'mcq',
          options: [
            'Débit 4411 Fournisseurs 18 450,00 / Crédit 6111 Achats de marchandises 15 375,00 / Crédit 34552 État – TVA récupérable sur charges 3 075,00',
            'Débit 6111 15 375,00 / Débit 34552 3 075,00 / Crédit 4411 18 450,00 (une troisième saisie)',
            'Débit 3455 État – TVA récupérable 18 450,00 / Crédit 4452 État – TVA facturée 18 450,00',
            'Aucune écriture : le doublement de la dette se réglera au paiement',
          ],
          expected: '0',
          explanation:
            'L\'extourne d\'une des deux saisies ramène la charge de 2026 à son montant réel : on solde la dette excédentaire (débit 4411) en annulant la charge (crédit 6111) et la TVA récupérée en trop (crédit 34552). Aucun règlement n\'étant intervenu, tout se joue au 4411 — un trop-payé aurait appelé le 3413 (avances et acomptes). L\'option 4 confond comptabilité et trésorerie.',
        },
        {
          id: 'fidumac-m4-ex3-q5',
          question:
            'Anomalie corrigée ou non corrigée : expliquez la différence, ses effets sur le récapitulatif des anomalies et sur l\'opinion (seuil de signification : 250 000,00 MAD).',
          type: 'open',
          keywords: ['corrigée', 'non corrigée', 'cumul', 'seuil', 'signification', 'opinion', 'réserve', 'récapitulatif'],
          explanation:
            'Réponse attendue (exemple) : corrigée — le client a comptabilisé la correction proposée (ici le 12/02/2026) : l\'incidence disparaît des états et la fiche est soldée avec la date et la preuve de comptabilisation ; non corrigée — le refus ou l\'attente maintient l\'incidence dans les comptes : elle reste au récapitulatif et se cumule aux autres non corrigées. En fin de mission, le cumul des non corrigées se confronte au seuil de 250 000,00 MAD : au-dessous, pas d\'incidence sur l\'opinion ; au-dessus (ou en cas d\'impossibilité d\'obtenir des preuves), une réserve peut naître. Ici, 18 450,00 MAD corrigés ne pèsent plus rien — mais un refus les aurait ajoutés au cumul, à suivre jusqu\'au rapport et, le cas échéant, à la lettre d\'affirmation.',
        },
      ],
      risks: ['Écriture proposée à l\'envers', 'HT / TVA non ventilés', 'Exercice de rattachement erroné', 'Auditeur qui comptabilise lui-même'],
      solutionSummary:
        'Dans ce cas, la correction se jouerait sur deux exercices. Au 31/12/2025 : la charge de la livraison BL-2025-1188 (service fait le 29/12/2025) manque — FNP omise — donc débit 6111 Achats de marchandises 15 375,00, débit 34552 État – TVA récupérable sur charges 3 075,00, crédit 4417 Fournisseurs, factures non parvenues 18 450,00, écriture extournable au 01/01/2026 ; l\'inverse (débit 4417 / crédit 6111 / crédit 34552) est l\'extourne, utile seulement si la FNP avait été comptabilisée en double. En 2026 : les deux factures F-2026-0312 et F-2026-0347 étant saisies, l\'extourne d\'une des deux (débit 4411 18 450,00 / crédit 6111 15 375,00 / crédit 34552 3 075,00) ramène la charge de l\'exercice à son montant réel. Le montant du correctif est le même des deux côtés — 18 450,00 TTC — mais sa ventilation HT / TVA (15 375,00 / 3 075,00) permet le suivi exact des comptes. L\'auditeur propose ces écritures ; le client les comptabilise (ici le 12/02/2026) ; la fiche passe alors en « corrigée » et l\'incidence sort du cumul. À l\'oral, montrez que vous raisonnez « sens + comptes + exercice » : la même triplette 6111 / 34552 / 4417 change de sens selon qu\'on constate la dette ou qu\'on l\'extourne.',
      interviewTips: [
        'Annoncez la ventilation avant le total : « 15 375,00 HT, 3 075,00 de TVA, 18 450,00 TTC » — le détail prouve la maîtrise mieux que le total.',
        'Le mot-clé du rôle : « je propose, le client comptabilise » — dites-le systématiquement en parlant d\'écriture de correction.',
      ],
    },
    // ============================ EXERCICE 4 ============================
    {
      id: 'fidumac-m4-ex4',
      title: 'Dix anomalies à documenter : écritures, observations et incidence cumulée',
      cycle: 'Transversal (récapitulatif)',
      context:
        'Fin de mission : Mme Idrissi vous remet le récapitulatif des dix anomalies documentées sur les dossiers DistriNord et Batiprode (fictifs), avec leur incidence et leur statut au 28/02/2026. À vous de déterminer lesquelles appellent une écriture, de vérifier le cumul et de préparer la décision. Seuil de signification : 250 000,00 MAD. Scénario fictif ; montants en MAD.',
      documents: [
        {
          kind: 'table',
          name: 'Récapitulatif des dix anomalies documentées au 28/02/2026 (fictif)',
          columns: ['Réf', 'Cycle', 'Comptes', 'Incidence (MAD)', 'Nature du constat'],
          rows: [
            ['ANO-01', 'Achats-Fournisseurs', '6111 / 34552 / 4417 / 4411', 18450.0, 'Doublon fournisseur : factures F-2026-0312 et F-2026-0347 pour la même livraison, et FNP omise au 31/12/2025'],
            ['ANO-02', 'Achats-Fournisseurs', '6111 / 6125', 11280.0, 'Erreur d\'imputation : fournitures de bureau saisies au 6111'],
            ['ANO-03', 'Achats-Fournisseurs', '6111 / 34552 / 4411', 2760.0, 'Avoir fournisseur AVR-2026-0117 reçu et non comptabilisé'],
            ['ANO-04', 'Achats-Fournisseurs', '6145 / 4417', 3750.0, 'FNP omise : électricité consommée en décembre 2025'],
            ['ANO-05', 'Achats-Fournisseurs', '6131 / 3491', 9800.0, 'CCA non isolée : loyer de janvier 2026 payé le 28/12/2025'],
            ['ANO-06', 'Ventes-Clients', '6194 / 3940', 11357.5, 'Dépréciation des créances insuffisante : dotation complémentaire à enregistrer'],
            ['ANO-07', 'Ventes-Clients', '3421 / 4452', 4830.0, 'Situation de travaux visée le 28/12/2025, comptabilisée le 06/01/2026 (cut-off)'],
            ['ANO-08', 'Achats-Fournisseurs', '4411', 0.0, 'Facture FA-2025-0712 sans bon de réception rattaché, livraison corroborée par ailleurs'],
            ['ANO-09', 'Achats-Fournisseurs', '4411 (processus)', 0.0, 'Demande d\'achat DA-2025-0644 validée par son propre émetteur'],
            ['ANO-10', 'Ventes-Clients', '3421', 0.0, 'Libellé erroné sur une situation de travaux (montant et comptes corrects)'],
          ],
          note: 'Document fictif. Incidence = montant brut de l\'anomalie (TTC) ; le reclassement ANO-02 déplace 11 280,00 MAD entre deux comptes de charges sans effet sur le résultat total. Statuts au 28/02/2026 : ANO-01, ANO-02, ANO-04, ANO-05 et ANO-07 corrigées ; ANO-03 (avoir à saisir) et ANO-06 (dotation discutée) non corrigées à ce jour.',
        },
      ],
      questions: [
        {
          id: 'fidumac-m4-ex4-q1',
          question: 'Quelles anomalies appellent une écriture de correction (extourne, reclassement, régularisation ou dotation) ?',
          type: 'multi',
          options: [
            'ANO-01 — Doublon fournisseur et FNP omise (18 450,00 MAD)',
            'ANO-02 — Erreur d\'imputation 6111 / 6125 (11 280,00 MAD)',
            'ANO-03 — Avoir non comptabilisé (2 760,00 MAD)',
            'ANO-04 — FNP électricité omise (3 750,00 MAD)',
            'ANO-05 — CCA non isolée (9 800,00 MAD)',
            'ANO-06 — Dépréciation insuffisante (11 357,50 MAD)',
            'ANO-07 — Cut-off des ventes (4 830,00 MAD)',
            'ANO-08 — Facture sans bon de réception, corroborée (0,00 MAD)',
            'ANO-09 — DA validée par son émetteur (0,00 MAD)',
            'ANO-10 — Libellé erroné (0,00 MAD)',
          ],
          expected: ['0', '1', '2', '3', '4', '5', '6'],
          explanation:
            'Sept anomalies déforment les comptes et appellent une écriture : le doublon et sa FNP omise (ANO-01), le reclassement 6111 / 6125 (ANO-02 — écriture nécessaire même si le résultat ne bouge pas), l\'avoir à comptabiliser (ANO-03), la FNP électricité (ANO-04), la CCA à isoler (ANO-05), la dotation de dépréciation (ANO-06) et le rattachement du produit (ANO-07). Les trois autres se traitent sans écriture : justificatif complété (ANO-08), faiblesse de délégation relevant d\'une recommandation (ANO-09), anomalie de présentation corrigée par un libellé (ANO-10).',
        },
        {
          id: 'fidumac-m4-ex4-q2',
          question: 'Quelle est l\'incidence cumulée des anomalies à corriger (somme de la colonne Incidence de ces sept anomalies) ?',
          type: 'numeric',
          expected: 62227.5,
          explanation:
            '18 450,00 + 11 280,00 + 2 760,00 + 3 750,00 + 9 800,00 + 11 357,50 + 4 830,00 = 62 227,50 MAD. Le cumul se vérifie ligne par ligne : c\'est la somme des incidences brutes, avant distinction entre corrigées et non corrigées.',
        },
        {
          id: 'fidumac-m4-ex4-q3',
          question: 'Au 28/02/2026, que dire de ce cumul face au seuil de signification de 250 000,00 MAD ?',
          type: 'mcq',
          options: [
            'Il dépasse le seuil : une réserve s\'impose d\'office',
            'Il représente 24,89 % du seuil, et les non corrigées ne pèsent que 14 117,50 MAD (2 760,00 + 11 357,50) : aucune incidence sur l\'opinion à ce stade, mais corrections à obtenir et cumul à suivre jusqu\'au rapport',
            'Le cumul est nul puisque la majorité des anomalies est corrigée',
            'Chaque anomalie doit être comparée au seuil individuellement, jamais cumulée',
          ],
          expected: '1',
          explanation:
            '62 227,50 / 250 000,00 = 24,89 %. La mécanique est à deux niveaux : en brut, le cumul reste sous le seuil ; en net, les non corrigées (2 760,00 + 11 357,50 = 14 117,50 MAD) en sont très éloignées. La décision : obtenir les corrections restantes et suivre le cumul — la réserve n\'apparaît que si les non corrigées franchissent le seuil. Et l\'importance relative se juge toujours sur le cumul, jamais sur l\'anomalie isolée.',
        },
        {
          id: 'fidumac-m4-ex4-q4',
          question:
            'Quelle est votre décision d\'audit et votre communication au client ? Que changerait-il si une anomalie non corrigée de 240 000,00 MAD s\'ajoutait au récapitulatif ?',
          type: 'open',
          keywords: ['correction', 'cumul', 'seuil', 'signification', 'opinion', 'réserve', 'suivi', 'synthèse'],
          explanation:
            'Réponse attendue (exemple) : je demanderais la comptabilisation des deux corrections restantes (avoir ANO-03, dotation ANO-06), je tiendrais le récapitulatif à jour jusqu\'au rapport et je documenterais les refus éventuels — la lettre d\'affirmation pouvant rappeler les incidences non corrigées. Le cumul des non corrigées (14 117,50 MAD) restant très inférieur au seuil de 250 000,00 MAD, l\'opinion ne serait pas affectée : conclusion « pas d\'incidence significative » portée au mémo de synthèse avec le détail des anomalies. Si une non corrigée de 240 000,00 MAD s\'ajoutait, le cumul atteindrait 254 117,50 MAD et dépasserait le seuil : la discussion de réserve s\'ouvrirait alors — incidence chiffrée, critère violé et motivation dans le rapport.',
        },
      ],
      risks: ['Cumul mal calculé', 'Statuts corrigé / non corrigé confondus', 'Importance relative mal appréciée', 'Anomalie sans incidence comptée à tort'],
      solutionSummary:
        'La démarche consisterait à trier les dix anomalies en trois statuts. À corriger par écriture : ANO-01 (doublon et FNP omise, 18 450,00), ANO-02 (reclassement 6111 / 6125, 11 280,00 — écriture nécessaire mais incidence nulle sur le résultat), ANO-03 (avoir à comptabiliser, 2 760,00), ANO-04 (FNP électricité, 3 750,00), ANO-05 (CCA à isoler, 9 800,00), ANO-06 (dotation 6194 / 3940, 11 357,50) et ANO-07 (rattachement du produit, 4 830,00). Simple observation ou recommandation : ANO-08 (justificatif complété), ANO-09 (faiblesse de délégation) et ANO-10 (présentation). Le cumul des incidences à corriger se vérifie : 18 450,00 + 11 280,00 + 2 760,00 + 3 750,00 + 9 800,00 + 11 357,50 + 4 830,00 = 62 227,50 MAD, soit 24,89 % du seuil de 250 000,00 MAD ; à ce jour, 48 110,00 sont corrigées (ANO-01, 02, 04, 05, 07) et 14 117,50 non corrigées (ANO-03, ANO-06). La décision en découle : obtenir les corrections restantes, maintenir le cumul sous surveillance — aucune réserve en vue tant que les non corrigées restent très inférieures au seuil. Une anomalie supplémentaire non corrigée de 240 000,00 MAD ferait basculer le cumul à 254 117,50 MAD, au-delà du seuil : là commencerait la discussion de réserve. À l\'oral, le réflexe à montrer est le cumul chiffré face au seuil — jamais l\'anomalie isolée.',
      interviewTips: [
        'Annoncez le cumul en le recalculant à voix haute : 18 450 + 11 280 + 2 760 + 3 750 + 9 800 + 11 357,50 + 4 830 = 62 227,50 MAD — la sûreté numérique se démontre.',
        'Distinguez toujours brut et net : 62 227,50 en brut, 14 117,50 non corrigées — le recruteur écoute cette double lecture.',
      ],
    },
    // ============================ EXERCICE 5 ============================
    {
      id: 'fidumac-m4-ex5',
      title: 'Mémo de cycle Achats-Fournisseurs — DistriNord (fictif)',
      cycle: 'Achats-Fournisseurs',
      context:
        'M. Sabri vous confie la rédaction du mémo de cycle Achats-Fournisseurs du dossier DistriNord (fictif), à partir des fiches d\'anomalies et des feuilles de travail. Le mémo doit être complet : objectif, périmètre, processus étudié, risques, contrôles, travaux réalisés, anomalies, éléments probants, conclusion. Scénario fictif ; montants en MAD.',
      documents: [
        {
          kind: 'text',
          name: 'Mémo de cycle Achats-Fournisseurs — DistriNord (fictif)',
          content:
            'MÉMO DE CYCLE — ACHATS-FOURNISSEURS\nDossier : DistriNord (fictif), distribution alimentaire — commissariat\naux comptes, exercice clos le 31/12/2025\nRéf. ME-DN-AF-01 · Rédacteur : stagiaire · Relecteur : M. Sabri\n(chef de mission fictif) · Date : 20/02/2026\n\n1. OBJECTIF\nVérifier que les achats et les dettes fournisseurs au 31/12/2025 sont\nréels, exhaustifs, correctement valorisés et rattachés au bon\nexercice, et que le contrôle interne du cycle apporte une assurance\nraisonnable.\n\n2. PÉRIMÈTRE\nComptes : 6111 Achats de marchandises (12 640 000,00 MAD, contre\n11 510 000,00 en 2024, soit +9,82 %) ; 6125, 6131, 6135, 6145\ncharges externes ; 4411 Fournisseurs (986 400,00 MAD) ; 4417 FNP ;\n3491 CCA ; 34552 TVA récupérable sur charges. Populations :\n412 demandes d\'achat, 528 factures fournisseurs.\nSeuil de signification : 250 000,00 MAD.\n\n3. PROCESSUS ÉTUDIÉ\nDemande d\'achat → bon de commande → réception (BL visé au\nquai) → rapprochement facture / BC / BL → saisie (6111 / 34552 /\n4411) → validation → règlement. Intervenants : achats, réception,\ncomptabilité, trésorerie.\n\n4. RISQUES IDENTIFIÉS\nDoublons de saisie (référence fournisseur non contrôlée) ;\nséparation des exercices (FNP omises, CCA non isolées) ; erreurs\nd\'imputation ; justificatifs manquants ; cumul émission / validation\ndes demandes d\'achat.\n\n5. CONTRÔLES INTERNE TESTÉS\nRapprochement facture / BC / BL avant saisie : conforme sur 11\nfactures sur 12 (ANO-08 : facture FA-2025-0712 sans BL rattaché,\nlivraison corroborée par ailleurs). Délégations : 14 DA sur 15\nconformes (ANO-09 : DA-2025-0644 validée par son émetteur).\nRéférence fournisseur en clé unique : ABSENTE à la saisie. Revue\nmensuelle de balance fournisseurs : effective, non formalisée par\nvisa.\n\n6. TRAVAUX RÉALISÉS\nCheminement d\'une DA jusqu\'au règlement ; test du rapprochement\nsur 12 factures ; test des délégations sur 15 DA ; revue analytique du\n6111 (N / N-1) ; revue du journal des achats de janvier 2026 pour le\ncut-off ; lettrage du compte Sahel Emballages ; revue des FNP / CCA\nde clôture.\n\n7. ANOMALIES RELEVÉES\nSept fiches : ANO-01 doublon fournisseur 18 450,00 (F-2026-0312 /\nF-2026-0347, FNP omise au 31/12/2025) ; ANO-02 imputation 6111 /\n6125 11 280,00 ; ANO-03 avoir non comptabilisé 2 760,00 ; ANO-04\nFNP électricité 3 750,00 ; ANO-05 CCA loyer janvier 2026 9 800,00 ;\nANO-08 facture sans BL 0,00 ; ANO-09 DA auto-validée 0,00.\nIncidence cumulée du cycle : 46 040,00 MAD, dont corrigées\n43 280,00 (ANO-01, 02, 04, 05) et non corrigée 2 760,00 (ANO-03,\navoir à saisir) ; ANO-08 et ANO-09 sans incidence comptable.\n\n8. ÉLÉMENTS PROBANTS\nBL-2025-1188 signé ; factures F-2026-0312 et F-2026-0347 ; courrier\ndu fournisseur du 03/02/2026 confirmant le double envoi ; extraits\ndu journal des achats et du compte 4411 Sahel Emballages ; copies\ndes fiches ANO-01 à ANO-09 ; PV de réception de quai et\nconfirmation fournisseur (ANO-08) ; journal des DA (ANO-09) ;\nrelevé d\'électricité et bail (ANO-04, ANO-05).\n\n9. CONCLUSION\nAprès corrections, les comptes du cycle Achats-Fournisseurs de\nDistriNord (fictif) seraient réguliers et sincères au 31/12/2025 :\nl\'incidence cumulée du cycle (46 040,00 MAD en brut, 2 760,00 non\ncorrigées) demeure très inférieure au seuil de 250 000,00 MAD —\naucune incidence attendue sur l\'opinion à ce stade. Recommandations :\nréférence fournisseur en clé unique à la saisie, lettrage\nsystématique des comptes fournisseurs, provisionnement\nautomatique des FNP de clôture, formalisation par visa de la revue\nmensuelle de balance.',
          note: 'Document fictif. Mémo rédigé au conditionnel dans le dossier d\'entraînement ; chiffres cohérents avec les fiches d\'anomalies (exercices 2 à 4) et le seuil de 250 000,00 MAD.',
        },
      ],
      questions: [
        {
          id: 'fidumac-m4-ex5-q1',
          question: 'Quelle rubrique du mémo décrit le circuit DA → BC → réception → rapprochement → saisie → règlement ?',
          type: 'mcq',
          options: [
            'L\'objectif',
            'Le processus étudié',
            'Le périmètre',
            'La conclusion',
          ],
          expected: '1',
          explanation:
            'Le processus étudié décrit le circuit réel de l\'information et les intervenants : c\'est lui qui permet au lecteur de situer chaque contrôle et chaque anomalie dans la chaîne. Le périmètre, lui, liste les comptes et les populations ; l\'objectif énonce les assertions.',
        },
        {
          id: 'fidumac-m4-ex5-q2',
          question: 'Que contient la rubrique « Anomalies relevées » du mémo ?',
          type: 'mcq',
          options: [
            'La description détaillée du processus d\'achat',
            'Les fiches d\'anomalies du cycle récapitulées avec leurs incidences et leur statut corrigé / non corrigé',
            'La liste des pièces du dossier permanent',
            'Les comptes du CPC et leur variation N / N-1',
          ],
          expected: '1',
          explanation:
            'La rubrique récapitule les sept fiches du cycle (ANO-01 à ANO-05, ANO-08, ANO-09) avec leurs montants, leur incidence cumulée (46 040,00 MAD) et leur statut — corrigées 43 280,00, non corrigée 2 760,00. Chaque ligne renvoie à la fiche complète et à ses justificatifs : le mémo agrège, il ne remplace pas.',
        },
        {
          id: 'fidumac-m4-ex5-q3',
          question: 'Quelle est l\'incidence cumulée du cycle Achats-Fournisseurs au 20/02/2026 selon le mémo ?',
          type: 'numeric',
          expected: 46040,
          explanation:
            '18 450,00 + 11 280,00 + 2 760,00 + 3 750,00 + 9 800,00 + 0,00 + 0,00 = 46 040,00 MAD (ANO-08 et ANO-09 étant sans incidence comptable). Dont corrigées 43 280,00 et non corrigée 2 760,00.',
        },
        {
          id: 'fidumac-m4-ex5-q4',
          question: 'Pourquoi la conclusion du mémo cite-t-elle le seuil de signification ?',
          type: 'mcq',
          options: [
            'Parce que la conclusion d\'un cycle confronte l\'incidence cumulée des anomalies (46 040,00 MAD en brut, 2 760,00 non corrigées) au seuil de 250 000,00 MAD pour apprécier l\'incidence sur l\'opinion',
            'Parce que le seuil est une information comptable appartenant au client',
            'Parce que chaque facture doit être comparée au seuil individuellement',
            'Parce que la réglementation fiscale marocaine l\'exige dans tout mémo',
          ],
          expected: '0',
          explanation:
            'La conclusion d\'un mémo de cycle se démontre par des chiffres : incidence cumulée rapportée au seuil (46 040,00 / 250 000,00, et surtout 2 760,00 non corrigées), d\'où « aucune incidence attendue sur l\'opinion à ce stade ». Sans ce rapport chiffré, la conclusion serait une impression — exactement ce que la fiche d\'anomalie interdit avec le fait observé.',
        },
        {
          id: 'fidumac-m4-ex5-q5',
          question:
            'Restituez la structure du mémo de cycle (les neuf rubriques dans l\'ordre) et expliquez le rôle de ce document dans le dossier d\'audit.',
          type: 'open',
          keywords: ['objectif', 'périmètre', 'processus', 'risques', 'contrôles', 'travaux', 'anomalies', 'conclusion'],
          explanation:
            'Réponse attendue (exemple) : les neuf rubriques dans l\'ordre — objectif (assertions visées), périmètre (comptes, populations, seuil), processus étudié (circuit et intervenants), risques identifiés, contrôles interne testés (avec exceptions), travaux réalisés, anomalies relevées (fiches récapitulées avec incidences et statuts), éléments probants (pièces et preuves), conclusion (rapport incidence / seuil et recommandations). Le rôle : mémoire du cycle lisible par l\'associé, support du mémo de synthèse (qui cumule les non corrigées face au seuil pour préparer l\'opinion), input du dossier permanent et point de départ de la mission suivante (recommandations à suivre). Chaque montant du mémo se recalcule et renvoie à une fiche : le mémo agrège des faits prouvés, il n\'affirme rien par lui-même.',
        },
      ],
      risks: ['Mémo incomplet (rubriques manquantes)', 'Fiches non récapitulées', 'Conclusion non chiffrée', 'Recommandations absentes'],
      solutionSummary:
        'La démarche consisterait à lire le mémo comme un raisonnement en neuf rubriques : l\'objectif (les assertions), le périmètre (comptes, populations, seuil de 250 000,00 MAD), le processus (DA → BC → BL → rapprochement → saisie → règlement), les risques, les contrôles testés (avec leurs exceptions : ANO-08, ANO-09), les travaux réalisés, les anomalies (les sept fiches récapitulées : incidence cumulée 46 040,00 MAD, dont 43 280,00 corrigées et 2 760,00 non corrigées), les éléments probants (pièces, courrier du fournisseur, confirmations) et la conclusion (rapport incidence / seuil, recommandations). Dans ce cas, je vérifierais trois cohérences avant de soumettre le mémo : chaque anomalie renvoie à une fiche et à ses justificatifs ; chaque montant se recalcule (18 450,00 + 11 280,00 + 2 760,00 + 3 750,00 + 9 800,00 = 46 040,00) ; la conclusion se fonde sur le rapport au seuil, pas sur une impression. Le mémo de cycle est la mémoire du cycle : il prépare le mémo de synthèse, alimente le dossier permanent et sert de point de départ à la mission suivante. À l\'oral, savoir restituer les neuf rubriques d\'un bloc — objectif, périmètre, processus, risques, contrôles, travaux, anomalies, éléments probants, conclusion — montre que l\'on sait écrire pour le dossier, pas seulement pour soi.',
      interviewTips: [
        'Déroulez les neuf rubriques sur les doigts : objectif, périmètre, processus, risques, contrôles, travaux, anomalies, éléments probants, conclusion — la structure se récite, le contenu se démontre.',
        'Le mémo se conclut sur le rapport incidence / seuil (46 040,00 contre 250 000,00 MAD) : c\'est cette phrase que l\'associé lit en premier.',
      ],
    },
    // ============================ EXERCICE 6 ============================
    {
      id: 'fidumac-m4-ex6',
      title: 'Mémo de cycle Ventes-Clients — Batiprode (fictif)',
      cycle: 'Ventes-Clients',
      context:
        'Dernier exercice de la mission : le mémo de cycle Ventes-Clients du dossier Batiprode (fictif), entreprise de BTP. Même exigence de structure en neuf rubriques — et une attention particulière à la séparation du fait observé et de la conclusion dans chaque fiche récapitulée. Scénario fictif ; montants en MAD.',
      documents: [
        {
          kind: 'text',
          name: 'Mémo de cycle Ventes-Clients — Batiprode (fictif)',
          content:
            'MÉMO DE CYCLE — VENTES-CLIENTS\nDossier : Batiprode (fictif), BTP — commissariat aux comptes,\nexercice clos le 31/12/2025\nRéf. ME-BP-VC-01 · Rédacteur : stagiaire · Relecteur : M. Sabri\n(chef de mission fictif) · Date : 27/02/2026\n\n1. OBJECTIF\nVérifier que les produits des travaux et les créances clients au\n31/12/2025 sont réels, exhaustifs, correctement valorisés et\nrattachés au bon exercice, et que le contrôle interne du cycle\napporte une assurance raisonnable.\n\n2. PÉRIMÈTRE\nComptes : produits des travaux (18 750 000,00 MAD en 2025, contre\n17 100 000,00 en 2024, soit +9,65 %) ; 3421 Clients (1 264 800,00\nMAD) ; 3424 Clients douteux ou litigieux ; 3940 Provisions pour\ndépréciation des clients ; 6194 Dotations ; 4452 TVA facturée.\nPopulations : 18 chantiers actifs, 386 situations de travaux émises\nen 2025. Seuil de signification : 250 000,00 MAD.\n\n3. PROCESSUS ÉTUDIÉ\nAvancement du chantier → situation de travaux mensuelle visée\npar le maître d\'œuvre → facturation (3421 / produits des travaux /\n4452) → encaissement, avec retenue de garantie libérée à la\nréception définitive. Intervenants : conducteurs de travaux,\nservice facturation, comptabilité, trésorerie.\n\n4. RISQUES IDENTIFIÉS\nRattachement des situations à l\'exercice du visa (cut-off) ;\navancement surrestimé ; dépréciation des créances insuffisante ;\nlibellés erronés entre chantiers ; balance âgée non formalisée.\n\n5. CONTRÔLES INTERNE TESTÉS\nVisa du maître d\'œuvre avant facturation : conforme sur les 10\nsituations testées. Revue mensuelle de la balance âgée clients :\neffective 11 mois sur 12 (visa absent en août 2025). Rapprochement\nsituations / factures / encaissements : conforme sur 9 échantillons\nsur 10.\n\n6. TRAVAUX RÉALISÉS\nCheminement de la situation ST-2025-114 (Résidence Al Manar —\ntranche 2) ; revue des situations de travaux autour de la clôture\n(cut-off) ; revue du 3940 et recalcul de la dépréciation sur la\nbalance âgée ; confirmations directes de 8 clients significatifs\n(7 retours concordants, 1 écart expliqué et appuré) ; test des\nrecouvrements de janvier-février 2026 ; revue analytique des\nproduits (N / N-1 par chantier).\n\n7. ANOMALIES RELEVÉES\nTrois fiches, chacune séparant le fait observé de la conclusion :\nANO-06 — FAIT OBSERVÉ : le 3940 s\'élève à 4 500,00 MAD alors que\nle recalcul sur la balance âgée (237 500,00 MAD de créances, dont\n29 200,00 entre 31 et 60 jours, 11 750,00 entre 61 et 90 jours et\n11 000,00 de plus de 90 jours, la société Chantiers du Nord étant\nen liquidation judiciaire pour 9 000,00) donne une dépréciation\nnécessaire de 15 857,50 MAD. CONCLUSION : dépréciation\ninsuffisante de 11 357,50 MAD ; dotation proposée (6194 / 3940) ;\nnon comptabilisée à ce jour (le client estime sa provision\nsuffisante).\nANO-07 — FAIT OBSERVÉ : la situation ST-2025-114, visée le\n28/12/2025 pour des travaux de décembre (4 830,00 MAD TTC), n\'a\nété facturée et comptabilisée que le 06/01/2026. CONCLUSION :\nproduit mal rattaché ; écriture proposée au 31/12/2025 (débit 3421\n4 830,00 / crédit produits des travaux 4 025,00 / crédit 4452 TVA\nfacturée 805,00) ; corrigée le 10/02/2026.\nANO-10 — FAIT OBSERVÉ : le libellé de la situation ST-2025-098\nmentionne le chantier « Immeuble Doha » au lieu de « Résidence\nAl Manar » (montant et comptes corrects). CONCLUSION : anomalie\nde présentation sans incidence comptable ; correction du libellé\nrecommandée.\nIncidences cumulées du cycle : 16 187,50 MAD en brut (11 357,50 +\n4 830,00 + 0,00), dont corrigée 4 830,00 et non corrigée\n11 357,50.\n\n8. ÉLÉMENTS PROBANTS\nBalance âgée signée au 31/12/2025 ; confirmations directes des 8\nclients significatifs ; situations de travaux visées (ST-2025-114,\nST-2025-098) ; jugement de liquidation de Chantiers du Nord ;\ncopies des fiches ANO-06, ANO-07, ANO-10 ; écriture de\nrattachement comptabilisée ; relevés d\'encaissements de\njanvier-février 2026.\n\n9. CONCLUSION\nLes produits et créances du cycle Ventes-Clients de Batiprode\n(fictif) seraient réguliers et sincères au 31/12/2025 après prise en\ncompte de la dotation discutée : l\'incidence cumulée du cycle\n(16 187,50 MAD en brut, 11 357,50 non corrigées) demeure très\ninférieure au seuil de 250 000,00 MAD — aucune incidence\nattendue sur l\'opinion à ce stade, le point ANO-06 restant suivi\njusqu\'au rapport. Recommandations : balance âgée mensuelle\nformalisée par visa, rattachement des situations à la date de visa\ndu maître d\'œuvre, revue des libellés de chantiers à la facturation.',
          note: 'Document fictif. Mémo rédigé au conditionnel dans le dossier d\'entraînement ; la dépréciation nécessaire (15 857,50 MAD) reprend le calibrage des exercices précédents de la fiche (politique 10 % / 25 % / 50 %, cas de liquidation à 100 %).',
        },
      ],
      questions: [
        {
          id: 'fidumac-m4-ex6-q1',
          question: 'Quelle est l\'incidence cumulée du cycle Ventes-Clients (somme des incidences brutes des fiches ANO-06, ANO-07 et ANO-10) ?',
          type: 'numeric',
          expected: 16187.5,
          explanation:
            '11 357,50 + 4 830,00 + 0,00 = 16 187,50 MAD — la fiche ANO-10 (libellé erroné) étant sans incidence comptable. Dont corrigée 4 830,00 (ANO-07) et non corrigée 11 357,50 (ANO-06).',
        },
        {
          id: 'fidumac-m4-ex6-q2',
          question:
            'Dans la fiche ANO-06, la phrase « le 3940 s\'élève à 4 500,00 MAD alors que le recalcul sur la balance âgée donne une dépréciation nécessaire de 15 857,50 MAD » est :',
          type: 'mcq',
          options: [
            'Une conclusion : la qualification de l\'anomalie',
            'Un fait observé : le constat brut, chiffré et référencé, sans interprétation',
            'La cause éventuelle de l\'anomalie',
            'La réponse du client à la dotation proposée',
          ],
          expected: '1',
          explanation:
            'C\'est un fait observé : deux soldes confrontés, des montants vérifiables (4 500,00 au 3940, 15 857,50 recalculés sur une balance âgée signée). La conclusion suit, après analyse : « dépréciation insuffisante de 11 357,50, dotation proposée, non comptabilisée à ce jour » — c\'est elle qui engage le jugement et le suivi.',
        },
        {
          id: 'fidumac-m4-ex6-q3',
          question: 'La dotation de 11 357,50 MAD n\'est pas comptabilisée à la date du mémo : qu\'en fait le mémo ?',
          type: 'mcq',
          options: [
            'Il l\'ignore, puisqu\'elle est discutée avec le client',
            'Il la maintient en « non corrigée » : l\'incidence reste au récapitulatif, se cumule aux autres non corrigées et se confronte au seuil de signification jusqu\'au rapport',
            'Il la transforme en recommandation de contrôle interne',
            'Il la déduit des produits du cycle pour conclure',
          ],
          expected: '1',
          explanation:
            'Tant que l\'écriture n\'est pas passée, l\'incidence demeure dans les comptes : la fiche reste « non corrigée », le montant rejoint le cumul des non corrigées (14 117,50 MAD tous cycles confondus au 28/02/2026) et le suivi se poursuit jusqu\'au rapport. Ici, 11 357,50 MAD restent très loin du seuil de 250 000,00 MAD : pas d\'incidence sur l\'opinion à ce stade — mais le point est tracé, pas enterré.',
        },
        {
          id: 'fidumac-m4-ex6-q4',
          question: 'Quelle rubrique du mémo réunit les justificatifs qui rendent les constats vérifiables (confirmations, situations visées, balance âgée signée) ?',
          type: 'mcq',
          options: [
            'Les éléments probants',
            'Le périmètre',
            'Les risques identifiés',
            'La conclusion',
          ],
          expected: '0',
          explanation:
            'La rubrique « éléments probants » inventorie les preuves : balance âgée signée, confirmations directes des 8 clients significatifs, situations visées, jugement de liquidation, copies des fiches et écriture comptabilisée. C\'est elle qui ancre chaque fait observé dans la piste d\'audit — sans elle, le mémo ne serait qu\'un récit.',
        },
        {
          id: 'fidumac-m4-ex6-q5',
          question: 'Pourquoi le mémo distingue-t-il systématiquement le fait observé de la conclusion ?',
          type: 'open',
          keywords: ['fait observé', 'conclusion', 'objectif', 'vérifiable', 'preuve', 'défendable', 'client', 'qualification'],
          explanation:
            'Réponse attendue (exemple) : parce que les deux n\'ont pas le même statut. Le fait observé est un constat brut, référencé et chiffré (le 3940 à 4 500,00 contre 15 857,50 recalculés) : un tiers peut le vérifier en remontant aux pièces — il ne se discute pas, il se prouve. La conclusion (dépréciation insuffisante de 11 357,50, dotation proposée, non comptabilisée) est une qualification qui engage le jugement et, à terme, l\'opinion : elle se discute. Séparer les deux rend la fiche et le mémo défendables — le client peut contester la conclusion, pas le fait prouvé ; l\'associé peut refaire le raisonnement ; la piste d\'audit reste intacte. C\'est aussi une garantie d\'honnêteté : présenter un jugement comme un constat reviendrait à faire dire aux preuves ce qu\'elles ne disent pas.',
        },
      ],
      risks: ['Fait et conclusion confondus', 'Anomalie non corrigée mal suivie', 'Mémo incohérent avec les fiches', 'Conclusion non rapportée au seuil'],
      solutionSummary:
        'Dans ce cas, je lirais le mémo Ventes-Clients de Batiprode avec la même grille que le précédent : objectif (assertions sur produits et créances), périmètre (produits des travaux 18 750 000,00 MAD, +9,65 %, clients 1 264 800,00 MAD, 386 situations), processus (avancement → situation visée → facturation → encaissement), risques (cut-off du visa, avancement, dépréciation), contrôles testés (visa conforme 10/10, balance âgée 11 mois sur 12), travaux (cheminement, confirmations directes de 8 clients, recalcul de la dépréciation, recouvrements postérieurs), anomalies (trois fiches : 11 357,50 + 4 830,00 + 0,00 = 16 187,50 MAD d\'incidence brute, dont 11 357,50 non corrigées), éléments probants et conclusion (rapport au seuil, suivi de la dotation discutée). Le marqueur de ce mémo est la séparation systématique du fait observé et de la conclusion dans chaque fiche : « le 3940 s\'élève à 4 500,00 alors que le recalcul donne 15 857,50 » est un fait contrôlable ; « dépréciation insuffisante de 11 357,50, dotation proposée, non comptabilisée » est la conclusion qui engage le jugement. Cette distinction rend le mémo défendable : le client peut discuter la conclusion, pas le fait prouvé ; l\'associé peut refaire le raisonnement ; la piste d\'audit reste intacte. À l\'oral, la phrase « je décris ce que j\'ai vu, je conclus après analyse » résume la qualité qu\'un chef de mission cherche chez un rédacteur de mémos.',
      interviewTips: [
        'Servez-vous de la fiche ANO-06 comme exemple : le fait (4 500,00 contre 15 857,50) puis la conclusion (dotation de 11 357,50) se récitent en deux phrases.',
        'Rappelez que la distinction fait / conclusion protège aussi le client : il peut contester la qualification, pas le constat prouvé.',
      ],
    },
  ],
  interviewQuestions: [
    {
      question: 'Pourquoi documenter chaque anomalie sur une fiche normalisée plutôt que de la signaler oralement ou par courriel ?',
      hint: 'Piste d\'audit et défendabilité.',
      expected:
        'Parce que le dossier d\'audit doit être refaisable et défendable : une anomalie non documentée n\'existe pas pour le dossier. La fiche normalisée (treize champs) rend le constat traçable — fait observé référencé, critère, incidence chiffrée, justificatifs, correction, réponse du client — et maintient la piste d\'audit du chiffre des états jusqu\'à la pièce. Elle protège aussi l\'équipe en cas de contestation ou de changement de commissaire.',
    },
    {
      question: 'Qu\'est-ce qu\'un fait observé et en quoi diffère-t-il d\'une conclusion ?',
      hint: 'Le constat contre le jugement.',
      expected:
        'Le fait observé est le constat brut, objectif et référencé : « la facture F-2026-0347 doublonne la F-2026-0312 pour la livraison BL-2025-1188, soit 18 450,00 MAD comptabilisés deux fois ». La conclusion est la qualification après analyse : « doublon à extourner, FNP omise au 31/12/2025, correction acceptée le 12/02/2026 ». Séparer les deux rend la fiche vérifiable : le lecteur contrôle le fait, puis discute la conclusion.',
    },
    {
      question: 'Décrivez votre fiche d\'anomalie type.',
      hint: 'Treize champs.',
      expected:
        'Treize champs : référence (ANO-XX), cycle, comptes, montant, risque, fait observé, critère de contrôle, cause éventuelle, incidence chiffrée, justificatifs, correction proposée (l\'écriture, que le client comptabilise), réponse du client, conclusion (corrigée ou non, recommandation). Chaque chiffre renvoie à une pièce et à une feuille de travail — c\'est la piste d\'audit.',
    },
    {
      question: 'Comment chiffrez-vous l\'incidence d\'une anomalie ?',
      hint: 'Montant, comptes, exercice.',
      expected:
        'En trois précisions : le montant (en distinguant HT et TVA — le doublon de 18 450,00 TTC pèse 15 375,00 sur les charges et 3 075,00 sur la TVA récupérable), les comptes mouvementés (6111, 34552, 4411, 4417) et l\'exercice concerné (une FNP omise corrige 2025 ; l\'extourne du doublon corrige 2026). Une incidence non ventilée ne peut être ni cumulée ni comparée au seuil.',
    },
    {
      question: 'Quelle différence entre une anomalie corrigée et une non corrigée — et pourquoi cela compte-t-il ?',
      hint: 'Le récapitulatif des anomalies.',
      expected:
        'Corrigée : le client a comptabilisé l\'écriture proposée — l\'incidence disparaît des états et de mon cumul. Non corrigée : l\'incidence reste dans les comptes ; elle se cumule aux autres non corrigées dans le récapitulatif et se confronte au seuil de signification. C\'est ce cumul, pas l\'anomalie isolée, qui peut mener à une réserve.',
    },
    {
      question: 'Comment jugez-vous si une anomalie est significative ?',
      hint: 'Importance relative et cumul.',
      expected:
        'Par l\'importance relative : je rapporte l\'incidence au seuil de signification (250 000,00 MAD dans le scénario) et, surtout, je la cumule aux autres anomalies non corrigées. Une anomalie de 18 450,00 MAD isolée ne modifie pas l\'opinion ; le même montant s\'additionne à un cumul qui peut approcher ou dépasser le seuil. Je considère aussi la nature : une fraude, même faible, n\'a pas le même traitement qu\'une erreur isolée.',
    },
    {
      question: 'Qu\'est-ce qu\'un mémo de cycle et à quoi sert-il ?',
      hint: 'La mémoire du cycle.',
      expected:
        'La note qui rassemble, pour un cycle (Achats-Fournisseurs, Ventes-Clients), l\'objectif, le périmètre, le processus étudié, les risques, les contrôles, les travaux réalisés, les anomalies (fiches récapitulées), les éléments probants et la conclusion. Il sert de mémoire du cycle pour l\'associé, de support au mémo de synthèse et d\'input pour le dossier permanent et la mission suivante.',
    },
    {
      question: 'Mémo de cycle, mémo de synthèse : quelle différence ?',
      hint: 'Le cycle contre la mission.',
      expected:
        'Le mémo de cycle conclut sur un cycle à partir de ses travaux et de ses fiches d\'anomalies (incidence cumulée du cycle : 46 040,00 MAD pour Achats-Fournisseurs chez DistriNord). Le mémo de synthèse agrège les cycles : il cumule les anomalies non corrigées de toute la mission face au seuil, liste les points discutés avec la direction et prépare l\'opinion — la réserve éventuelle comprise. Le cycle nourrit la synthèse ; jamais l\'inverse.',
    },
    {
      question: 'Qui comptabilise l\'écriture de correction proposée par l\'auditeur ?',
      hint: 'La frontière des rôles.',
      expected:
        'Le client, toujours. L\'auditeur propose l\'écriture (comptes, sens, montant — par exemple l\'extourne du doublon : débit 4411 / crédit 6111 / crédit 34552 pour 18 450,00 TTC), la documente dans la fiche et suit sa comptabilisation. S\'il la passait lui-même, il perdrait son indépendance et deviendrait juge de sa propre correction.',
    },
    {
      question: 'Quand et comment naît une réserve dans le rapport du commissaire aux comptes ?',
      hint: 'Cumul et seuil.',
      expected:
        'Quand des anomalies significatives ne sont pas corrigées : leur cumul confronté au seuil de signification le dépasse, ou une impossibilité d\'obtenir des éléments probants limite les travaux. La réserve motive alors l\'incidence non corrigée (montant, comptes, critère violé) dans le rapport. Dans le scénario, le cumul non corrigé de 14 117,50 MAD contre un seuil de 250 000,00 MAD n\'aurait appelé aucune réserve — mais une anomalie supplémentaire non corrigée de 240 000,00 MAD aurait fait basculer le cumul à 254 117,50 MAD, au-delà du seuil.',
    },
  ],
  followUps: [
    {
      question: 'Le client comptabilise la correction après votre départ : que devient la fiche ?',
      expected:
        'Elle reste au dossier, mise à jour : la réponse du client et la date de comptabilisation y sont portées, le statut passe à « corrigée », et l\'incidence sort du cumul des non corrigées au récapitulatif. La fiche n\'est jamais détruite : elle documente aussi la faiblesse qui a laissé passer l\'anomalie, et la recommandation associée la suit jusqu\'au prochain exercice.',
    },
    {
      question: 'Une FNP de 3 750,00 MAD sur un seuil de 250 000,00 : vous en parlez dans le rapport ?',
      expected:
        'Je la documente et je la propose à la correction — le principe de séparation des exercices ne dépend pas du montant — mais isolée, elle est dérisoire au regard du seuil : aucune incidence sur l\'opinion. Elle figurera au récapitulatif (corrigée ou non corrigée) et dans le mémo de cycle, pas dans le rapport.',
    },
    {
      question: 'Le client refuse d\'extourner le doublon de 18 450,00 MAD : que faites-vous ?',
      expected:
        'Je documente le refus et son motif dans la fiche (champ « réponse du client ») : l\'anomalie passe en non corrigée au récapitulatif et son incidence se cumule aux autres. 18 450,00 MAD restant très inférieurs au seuil de 250 000,00 MAD, l\'opinion n\'est pas en jeu à elle seule — mais le cumul suit, la direction en est informée, et le point remontera au mémo de synthèse et, si nécessaire, à la lettre d\'affirmation et au rapport.',
    },
    {
      question: 'Pourquoi la fiche parle-t-elle de « cause éventuelle » et pas simplement de « cause » ?',
      expected:
        'Parce que l\'auditeur constate des faits, il ne lit pas dans les intentions : l\'absence de rapprochement facture / bon de livraison est une cause plausible du doublon, à confirmer par le client. Écrire « cause » affirmerait un diagnostic ; « éventuelle » garde la fiche factuelle et la cause vérifiable — c\'est ce qui la rend défendable en discussion.',
    },
    {
      question: 'Votre mémo de cycle conclut « pas d\'incidence sur l\'opinion » : qu\'avez-vous besoin de prouver pour l\'écrire ?',
      expected:
        'Trois choses : que les travaux du cycle sont achevés et documentés (programme pointé, éléments probants réunis) ; que chaque anomalie est fichée avec son incidence et son statut ; et que le cumul — corrigées et non corrigées — est confronté au seuil (46 040,00 MAD en brut, 2 760,00 non corrigées, contre 250 000,00 pour Achats-Fournisseurs chez DistriNord). La conclusion d\'un mémo se démontre par des chiffres, elle ne se sent pas.',
    },
    {
      question: 'En une phrase : pourquoi la piste d\'audit est-elle l\'affaire de toute votre documentation d\'anomalies ?',
      expected:
        'Parce qu\'une anomalie documentée — références, justificatifs, incidence chiffrée, correction suivie — doit permettre à un tiers de remonter du chiffre des états de synthèse jusqu\'à la pièce qui la prouve, et de refaire tout le raisonnement sans moi.',
    },
  ],
  evaluation: {
    criteria: [
      {
        label: 'Qualification des constats',
        description:
          'Distinguer erreur comptable, problème de justificatif et faiblesse de contrôle interne, et choisir le traitement adapté (écriture, preuve à obtenir, recommandation).',
      },
      {
        label: 'Rédaction de la fiche d\'anomalie',
        description:
          'Remplir les treize champs du modèle en séparant le fait observé de la conclusion, avec références et justificatifs cités à chaque affirmation.',
      },
      {
        label: 'Chiffrage des incidences',
        description:
          'Ventiler HT / TVA, identifier les comptes CGNC mouvementés et l\'exercice concerné, et vérifier les cumuls (62 227,50 MAD sur dix anomalies).',
      },
      {
        label: 'Écritures de correction au CGNC',
        description:
          'Proposer l\'extourne, le reclassement, la régularisation de cut-off (4417, 3491) ou la dotation (6194 / 3940) dans le bon sens — sans jamais les comptabiliser.',
      },
      {
        label: 'Argumentation par l\'importance relative',
        description:
          'Confronter le cumul des anomalies corrigées et non corrigées au seuil de signification (250 000,00 MAD) et en tirer la conclusion d\'opinion adaptée.',
      },
      {
        label: 'Structuration des mémos de cycle',
        description:
          'Construire le mémo en neuf rubriques cohérentes avec les fiches, et présenter le scénario comme fictif, au conditionnel, piste d\'audit comprise.',
      },
    ],
  },
}
