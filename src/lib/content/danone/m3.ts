// =====================================================================
// Fiche 3 — Centrale Danone · Mission 3
// Vérification des justificatifs : validité, cohérence, exhaustivité
// =====================================================================
import type { Mission } from '@/lib/types'
import { DANONE_REFERENCE, FICHE3_DISCLAIMER, danoneBase } from './_commun'

export const danoneM3: Mission = {
  ...danoneBase(3),
  id: 'danone-m3',
  title: 'Vérification des justificatifs',
  summary:
    'Vérifier la validité, l’authenticité apparente, la cohérence, l’exhaustivité et la conformité des justificatifs du mois : existence de la pièce, concordance des montants, identité des tiers, dates, nature du bien ou service, preuve de livraison/réception, autorisation interne — et détection des manquants, incohérents et dupliqués. Scénario fictif à visée pédagogique.',
  referenceData: [
    FICHE3_DISCLAIMER,
    ...DANONE_REFERENCE,
    'Mission 3 : vérification de la validité et de l’exhaustivité des justificatifs sur les factures contrôlées du mois (dossiers conformes, incomplets, incohérents, duplicatas, rapprochement journal des ventes / remises de chèques).',
  ],
  comprehension: {
    intro:
      '« Justifier » une écriture, c’est prouver. Mais prouver quoi, exactement ? La vérification des justificatifs repose sur cinq notions que l’on confond trop vite. La validité : la pièce soutient-elle réellement l’opération — existe-t-elle, émane-t-elle du bon tiers, décrit-elle bien le bien ou service, le montant est-il le bon ? L’authenticité apparente : la pièce semble-t-elle émaner de l’émetteur annoncé (présentation, références, absence d’altération) — l’authenticité au sens strict relevant d’expertises plus poussées, le comptable contrôle ce qu’il peut voir. La cohérence : les pièces d’un même dossier concordent-elles entre elles et avec la comptabilité (montants, dates, identités, nature) ? L’exhaustivité : toutes les opérations de la période ont-elles leur justificatif — rien de caché, rien d’oublié ? La conformité : la pièce répond-elle aux exigences formelles (mentions obligatoires, autorisation interne, validations requises) ? Dans ce scénario fictif, la vérification porte sur les dossiers du mois : détection de pièces manquantes, d’incohérences entre pièces, de duplicatas et de ruptures d’exhaustivité (rapprochement du journal des ventes avec les remises de chèques encaissées). Réflexe de base : un verdict (« conforme », « incomplet », « incohérent ») ne se prononce qu’après avoir recherché la preuve complémentaire, jamais sur une impression.',
    definitions: [
      { term: 'Justificatif (pièce justificative)', definition: 'Document qui prouve la réalité, le montant et la nature d’une opération : facture, bon de commande, bon de réception/livraison, relevé bancaire, note de frais avec pièces jointes. Sans justificatif, l’écriture n’est pas défendable.' },
      { term: 'Validité', definition: 'La pièce soutient effectivement l’opération qu’elle prétend constater : bon émetteur, bon destinataire, bonne nature de bien ou service, bon montant, date plausible. Une facture valide fonde l’enregistrement ; une pièce non valide le fragilise.' },
      { term: 'Authenticité apparente', definition: 'Ensemble des indices visibles suggérant que la pièce émane bien de l’émetteur annoncé : présentation cohérente, numérotation plausible, absence d’altération, coordonnées vérifiables. Nuance : l’authenticité au sens strict relève de vérifications plus poussées (contact de l’émetteur, rapprochements externes) — le comptable contrôle l’apparence et escalade le doute.' },
      { term: 'Cohérence', definition: 'Concordance des informations entre les pièces d’un même dossier et avec la comptabilité : montants (facture ↔ BL ↔ commande), dates, identités des tiers, nature du bien. Une facture de 1 240,00 € contre un BL de 1 420,00 € est incohérente : l’une des deux pièces (ou les deux) ne décrit pas l’opération réelle.' },
      { term: 'Exhaustivité', definition: 'Toutes les opérations de la période sont enregistrées et justifiées : chaque livraison facturable a sa facture, chaque encaissement sa trace. Se vérifie par rapprochements croisés (journal ↔ relevés ↔ pièces), jamais par simple lecture du journal.' },
      { term: 'Conformité', definition: 'Respect des exigences de forme : mentions obligatoires de la facture, autorisation interne (bon de commande validé, visa), validations requises (bon à payer, visa manager d’une note de frais). Une pièce peut être réelle mais non conforme — la déduction de TVA ou le remboursement s’en trouvent fragilisés.' },
      { term: 'Duplicata', definition: 'Copie d’une pièce déjà comptabilisée. Un duplicata reçu par un second canal (mail + courrier, rescan) ne doit jamais être resaisi : la détection repose sur le couple fournisseur + numéro de facture (+ montant et date).' },
      { term: 'Pièce manquante', definition: 'Élément du dossier absent au moment du contrôle (BL non signé, autorisation absente). Le traitement : demande de la pièce, statut « incomplet », jamais de validation définitive tant que le dossier n’est pas reconstitué.' },
      { term: 'Autorisation interne', definition: 'Preuve que l’opération a été voulue et approuvée en interne : bon de commande validé, déplacement autorisé, visa hiérarchique. Une dépense réelle mais non autorisée reste une anomalie de contrôle interne.' },
      { term: 'Rapprochement de justificatifs', definition: 'Technique de croisement systématique : facture contre commande et réception, journal des ventes contre relevé d’encaissements, journal des achats contre relevé bancaire. C’est l’outil privilégié des contrôles de cohérence et d’exhaustivité.' },
      { term: 'Sondage / revue exhaustive', definition: 'Deux étendues de contrôle : le sondage vérifie un échantillon (critères : montant, risque, rotation) ; la revue exhaustive traite la totalité. L’exhaustivité des opérations, elle, se contrôle par rapprochement — même sur échantillon, la méthode reste le croisement.' },
      { term: 'Verdict de contrôle', definition: 'Conclusion qualifiée d’un dossier : conforme (dossier complet et concordant), incomplet (pièce(s) manquante(s)), incohérent (contradiction entre pièces ou avec la comptabilité). Chaque verdict s’accompagne de la preuve qui le fonde et, si besoin, de la preuve complémentaire à rechercher.' },
    ],
    keyPoints: [
      'Cinq notions à ne pas confondre : validité, authenticité apparente, cohérence, exhaustivité, conformité.',
      'Un verdict se prononce sur preuves, jamais sur impression : on cherche d’abord la pièce complémentaire.',
      'La cohérence se contrôle en croisant les pièces d’un même dossier : montants, dates, identités, nature.',
      'L’exhaustivité se contrôle par rapprochement (journal ↔ relevés ↔ pièces), pas par lecture du journal.',
      'Le duplicata est la première cause de double comptabilisation : rechercher fournisseur + numéro de facture avant toute saisie.',
      'Une facture et un avoir de même montant ne sont pas nécessairement une anomalie : vérifier le lien de correction entre les deux pièces.',
      'L’autorisation interne (commande validée, visa) fait partie du justificatif au même titre que la facture.',
      'L’authenticité apparente s’arrête au visible : au moindre doute, escalader (contact émetteur, responsable) au lieu de conclure seul.',
      'Chaque dossier contrôlé reçoit un statut tracé : conforme, incomplet, incohérent — avec la suite donnée.',
      'Un écart même faible (1 €, 0,35 €) rompt la cohérence et se traite comme une incohérence à expliquer.',
    ],
  },
  objectives: {
    why:
      'Les comptes ne valent que par leurs preuves : une écriture justifiée par une pièce incomplète, incohérente ou dupliquée est une écriture fragile — en clôture comme en audit. Cette mission installe le réflexe « dossier complet et concordant avant validation », et la capacité à documenter un verdict de contrôle défendable devant un tiers.',
    infoSought: [
      'L’existence d’une pièce pour chaque opération enregistrée (et inversement : chaque pièce a son opération).',
      'La concordance des montants entre les pièces du dossier et avec l’écriture comptable.',
      'L’identité exacte des tiers : émetteur, destinataire, bénéficiaire.',
      'Les dates : cohérence interne du dossier et rattachement à la bonne période.',
      'La nature du bien ou du service : description, quantité, référence.',
      'La preuve de réception ou de livraison, et l’autorisation interne.',
      'L’absence de duplicata et de compensation injustifiée (facture + avoir).',
      'L’exhaustivité du mois : rien d’enregistré sans pièce, rien de réel sans écriture.',
    ],
    risksCovered: [
      'Comptabilisation de pièces dupliquées (double charge, double dette).',
      'Validation de dossiers incomplets (BL manquant, autorisation absente).',
      'Incohérences non détectées entre facture, BL et commande (surfacturation, erreur).',
      'Opérations réelles non enregistrées (ruptures d’exhaustivité, ventes non facturées).',
      'Pièces non conformes : mentions manquantes fragilisant la TVA déductible.',
      'Tiers usurpés ou confondus (homonymies, entités sœurs).',
      'Écarts résiduels non expliqués bloquant le lettrage et le rapprochement.',
      'Avoirs utilisés pour neutraliser des factures à tort (compensation de complaisance).',
      'Verdicts de contrôle indéfendables faute de preuve documentée.',
    ],
  },
  preparation: {
    documents: [
      'La liste des dossiers du mois à vérifier avec leur statut de réception.',
      'Les dossiers documentaires : factures, bons de commande, bons de réception/livraison, autorisations internes.',
      'Le journal des achats et le journal des ventes du mois.',
      'Les relevés bancaires et le journal de banque (contrôles de cohérence des règlements).',
      'Le relevé de remises de chèques (pour le contrôle d’exhaustivité des encaissements).',
      'La liste des duplicatas reçus (mail, portail, courrier) à écarter.',
      'Les balances auxiliaires clients et fournisseurs (rapprochement des soldes aux pièces).',
      'La grille des mentions obligatoires et les exigences de validation interne (habilitations, visas).',
      'Le tableau de suivi des pièces manquantes et des relances en cours.',
      'Les procédures de rejet : qui peut refuser une pièce, sous quelle forme, avec quel délai.',
    ],
    questionsToAsk: [
      'Le contrôle du mois est-il exhaustif ou par sondage — et selon quels critères d’échantillonnage ?',
      'Quelles pièces sont exigibles pour chaque type d’opération (seuils, nature) ?',
      'Qui contacter pour obtenir une pièce manquante : le tiers, le service interne, l’archivage ?',
      'Un dossier incomplet bloque-t-il le paiement, ou un acompte est-il envisageable ?',
      'Comment sont tracés les duplicatas écartés (pour prouver qu’ils n’ont pas été perdus) ?',
      'Quel écart de montant déclenche une demande de correction : tout écart, ou un seuil de matérialité ?',
      'Où consigner les verdicts (conforme / incomplet / incohérent) pour qu’ils soient exploitables en clôture ?',
    ],
    precautions: [
      'Ne jamais prononcer un verdict avant d’avoir cherché la preuve complémentaire (relance, archive, banque).',
      'Comparer chaque pièce du dossier à toutes les autres — pas seulement la facture au BL.',
      'Traquer le duplicata avant toute conclusion de validité : deux canaux, même pièce.',
      'Documenter chaque demande de pièce et chaque réponse : le dossier de contrôle doit raconter l’histoire du dossier contrôlé.',
      'Ne pas confondre « conforme » et « complet » : une facture conforme peut vivre dans un dossier incomplet.',
    ],
  },
  method: [
    { title: 'Structurer le périmètre de vérification', description: 'Lister les opérations du mois à justifier (achats, ventes, encaissements, notes de frais) et leur étendue de contrôle : exhaustive ou par sondage raisonné (montants, risques, rotation).', why: 'Un contrôle sans périmètre défini ne peut être ni terminé, ni prouvé.' },
    { title: 'Vérifier l’existence de la pièce', description: 'Contrôler qu’une pièce existe, est lisible et accessible pour chaque opération : facture, commande, réception/livraison, autorisation.', why: 'L’existence est la première condition de validité : pas de pièce, pas de justificatif.' },
    { title: 'Apprécier l’authenticité apparente', description: 'Examiner la présentation : émetteur identifiable, numérotation plausible, absence d’altération, cohérence du canal de réception ; escalader au moindre doute sérieux.', why: 'La plupart des pièces fautives se révèlent à l’œil : incohérences de forme, mentions incohérentes, doublons « trop parfaits ».' },
    { title: 'Contrôler l’identité des tiers', description: 'Vérifier émetteur, destinataire, bénéficiaire : raison sociale complète, adresse, entité du groupe concernée, homonymies éventuelles.', why: 'Une pièce valide pour la mauvaise entité (ou le mauvais homonyme) justifie une opération… qui n’est pas celle du compte mouvementé.' },
    { title: 'Contrôler les dates', description: 'Comparer les dates des pièces entre elles (commande ≤ réception ≤ facture) et avec la période comptable visée.', why: 'Les dates incohérentes invalident le dossier et signalent des reconstitutions.' },
    { title: 'Contrôler la nature du bien ou du service', description: 'Lire la description : référence, quantité, qualité — et vérifier qu’elle correspond à l’activité et à la comptabilisation proposée.', why: 'La pièce doit décrire l’opération réelle : une référence erronée (produit livré ≠ produit facturé) invalide la facture malgré des montants justes.' },
    { title: 'Rapprocher les montants', description: 'Comparer facture ↔ BL ↔ commande ↔ écriture, et recalculer HT, TVA au taux applicable (20 % / 5,5 %) et TTC.', why: 'La concordance des montants est le cœur de la cohérence : tout écart, même faible, exige une explication.' },
    { title: 'Vérifier la preuve de réception et l’autorisation', description: 'S’assurer du BL/BR signé et de l’autorisation interne (commande validée, visa) pour chaque dépense.', why: 'Réalité de la livraison et volonté interne : deux preuves distinctes, toutes deux indispensables.' },
    { title: 'Traquer les duplicatas et compensations', description: 'Rechercher les pièces en double (fournisseur + numéro + montant) et examiner les couples facture + avoir de même montant (lien de correction légitime ou neutralisation suspecte).', why: 'Le doublon double la charge ; la compensation de complaisance cache des opérations.' },
    { title: 'Contrôler l’exhaustivité', description: 'Croiser le journal avec des sources indépendantes : relevé de remises de chèques, relevés bancaires, BL non facturés, bordereaux d’expédition.', why: 'Une écriture fausse se voit dans son dossier ; une opération manquante ne se voit que par rapprochement externe.' },
    { title: 'Qualifier chaque dossier', description: 'Attribuer un statut : conforme, incomplet (pièce(s) à obtenir), incohérent (contradiction constatée) — avec la preuve et le montant en cause.', why: 'Le statut transforme le contrôle en action : qui relancer, quoi corriger, quand solder.' },
    { title: 'Rechercher la preuve complémentaire avant de conclure', description: 'Pour chaque dossier non conforme : relance du tiers, recherche en archive, contrôle du relevé bancaire, confirmation directe.', why: 'Le verdict définitif se prononce preuves réunies : conclure trop vite, c’est devoir se rétracter.' },
    { title: 'Documenter et suivre', description: 'Tracer verdicts, demandes de pièces, réponses et corrections ; suivre jusqu’à résolution et alimenter le bilan mensuel.', why: 'Le dossier de contrôle est lui-même un justificatif : celui du sérieux du contrôle.' },
  ],
  exercises: [
    {
      id: 'danone-m3-ex1',
      title: 'Classer les types de contrôle',
      cycle: 'Transversal',
      context:
        'Cinq notions, cinq objectifs différents. Avant de contrôler des dossiers réels (fictifs), vérifiez que vous savez ce que vous contrôlez — et pourquoi. Les définitions données à l’étape Compréhension servent de référentiel.',
      risks: ['Confusion des notions', 'Verdict injustifié'],
      documents: [],
      questions: [
        {
          id: 'danone-m3-ex1-q1',
          question: 'Une facture existe, décrit bien le service reçu et le montant exact : quelle notion venez-vous de contrôler ?',
          type: 'mcq',
          options: [
            'La validité (la pièce soutient réellement l’opération)',
            'L’exhaustivité (toutes les opérations ont leur pièce)',
            'La conformité (les mentions formelles sont respectées)',
            'La cohérence (les pièces du dossier concordent entre elles)',
          ],
          expected: '0',
          explanation:
            'Existence + adéquation au fait (bon service, bon montant) : c’est la définition de la validité d’une pièce — elle fonde effectivement l’opération. L’exhaustivité interroge le périmètre (rien de manquant dans le mois) ; la conformité interroge la forme (mentions, visas) ; la cohérence compare plusieurs pièces entre elles.',
        },
        {
          id: 'danone-m3-ex1-q2',
          question: 'Le journal des ventes affiche 11 845,00 € d’encaissements chèques, le relevé de remises en montre 12 430,00 € : quelle notion est en jeu ?',
          type: 'mcq',
          options: [
            'La validité',
            'L’authenticité apparente',
            'L’exhaustivité',
            'La conformité',
          ],
          expected: '2',
          explanation:
            'Un montant encaissé qui ne figure pas au journal est une opération non enregistrée : le problème est d’exhaustivité. Ni la validité (les écritures existantes peuvent être parfaites), ni la conformité (aucun problème de forme), ni l’authenticité (aucune suspicion sur l’origine du document) — c’est le rapprochement qui révèle le trou.',
        },
        {
          id: 'danone-m3-ex1-q3',
          question: 'La facture mentionne un BL de 1 420,00 € pour un montant facturé de 1 240,00 € : quelle notion est en jeu ?',
          type: 'mcq',
          options: [
            'La cohérence (contradiction entre pièces du dossier)',
            'L’exhaustivité',
            'La validité seule, sans autre contrôle',
            'L’authenticité au sens strict',
          ],
          expected: '0',
          explanation:
            'Deux pièces du même dossier décrivent différemment la même opération : incohérence. Elle peut provenir d’une erreur de saisie (BL ou facture), d’une livraison partielle, d’un retour non documenté… Le rôle du contrôleur : constater l’écart, rechercher la cause, demander la pièce qui tranche — pas choisir arbitrairement une des deux valeurs.',
        },
        {
          id: 'danone-m3-ex1-q4',
          question: 'Parmi les contrôles suivants, lesquels relèvent de la conformité ?',
          type: 'multi',
          options: [
            'Vérifier que la facture porte le numéro de TVA intracommunautaire de l’émetteur',
            'Vérifier que la note de frais porte le visa du manager',
            'Vérifier que le bon de commande a été validé par une personne habilitée',
            'Rapprocher le montant facturé du montant du bon de livraison',
            'Contrôler que chaque chèque encaissé figure au journal des ventes',
            'Comparer la date de facture à la date de réception',
          ],
          expected: ['0', '1', '2'],
          explanation:
            'La conformité est une affaire de forme et d’autorisations : mentions obligatoires (numéro de TVA), validations requises (visa manager, commande habilitée). Le rapprochement facture/BL relève de la cohérence ; le contrôle chèques/journal relève de l’exhaustivité ; la comparaison des dates sert la cohérence (et la chronologie). Classer chaque contrôle évite de croire qu’on a « tout vérifié » alors qu’un seul axe l’a été.',
        },
        {
          id: 'danone-m3-ex1-q5',
          question: 'Expliquez la différence entre validité et conformité à l’aide d’un exemple.',
          type: 'open',
          keywords: ['réalité', 'opération', 'forme', 'mentions', 'TVA', 'déduction'],
          explanation:
            'La validité interroge le fond : la pièce décrit-elle une opération réelle, du bon tiers, pour le bon montant ? La conformité interroge la forme : la pièce respecte-t-elle les exigences (mentions obligatoires, autorisations, visas) ? Exemple : une facture parfaitement réelle (service rendu, montant exact) mais sans numéro de TVA de l’émetteur est valide sur le fond et non conforme sur la forme — sa déduction de TVA serait fragilisée. Inversement, une facture formellement impeccable décrivant un service jamais rendu est conforme… et non valide. Les deux contrôles sont complémentaires : l’un sans l’autre laisse passer respectivement le risque fiscal et le risque de pièce fictive.',
        },
      ],
      solutionSummary:
        'Validité (le fond : la pièce prouve l’opération), conformité (la forme : mentions, autorisations, visas), cohérence (les pièces concordent entre elles), exhaustivité (rien ne manque), authenticité apparente (la pièce semble émaner de l’émetteur). Les pièges : croire qu’une facture conforme est valide, ou qu’un journal complet garantit l’exhaustivité. À l’oral, savoir nommer le type de contrôle que l’on réalise est aussi valorisé que savoir le réaliser.',
      interviewTips: [
        'Donnez un exemple où une pièce est conforme mais non valide (et l’inverse) : la distinction devient mémorable.',
        'Annoncez toujours le type de contrôle en cours : « là, je contrôle la cohérence » — vocabulaire exact = crédibilité.',
      ],
    },
    {
      id: 'danone-m3-ex2',
      title: 'Dossiers de pièces : conforme, incomplet, incohérent',
      cycle: 'Achats',
      context:
        'Trois dossiers de pièces du mois, trois situations typiques. Pour chacun : un verdict, un montant, et la preuve complémentaire éventuelle avant de conclure. Montants et sociétés fictifs.',
      risks: ['Validation de dossier incomplet', 'Incohérence non détectée', 'Verdict prématuré'],
      documents: [
        {
          kind: 'table',
          name: 'Dossier 1 — Achat de matières premières (fictif)',
          columns: ['Pièce', 'Date', 'Référence', 'Montant (€)'],
          rows: [
            ['Bon de commande COM-2024-0518', '02/07/2024', '40 tonnes de sucre cristallisé — 87,00 € / t', '3 480,00 HT'],
            ['Bon de réception BR-2024-0421', '05/07/2024', '40 tonnes reçues, conforme', '3 480,00'],
            ['Facture FA-2024-1330', '06/07/2024', '40 t × 87,00 € — TVA 5,5 % (denrée alimentaire)', '3 480,00 HT'],
            ['Bon à payer validé (responsable achats)', '08/07/2024', 'visa A. Ndiaye', '—'],
          ],
          note: 'Document fictif. TVA applicable : taux réduit de 5,5 % sur les denrées alimentaires (sucre — denrée destinée à l’alimentation humaine ; régime à confirmer selon le cas). Total facture : 3 671,40 € TTC.',
        },
        {
          kind: 'table',
          name: 'Dossier 2 — Prestation de nettoyage (fictif)',
          columns: ['Pièce', 'Date', 'Référence', 'Montant (€)'],
          rows: [
            ['Facture FA-2024-1352', '10/07/2024', 'Prestation nettoyage juin — TVA 20 %', '2 150,00 HT'],
            ['Bon de commande', '—', 'absent du dossier', '—'],
            ['Bon de réception', '—', 'absent du dossier', '—'],
            ['Autorisation / visa', '—', 'absent du dossier', '—'],
          ],
          note: 'Document fictif. Total facture : 2 580,00 € TTC. Aucune autre pièce jointe au dossier.',
        },
        {
          kind: 'table',
          name: 'Dossier 3 — Achat d’équipement de réserve (fictif)',
          columns: ['Pièce', 'Date', 'Référence', 'Montant (€)'],
          rows: [
            ['Bon de commande COM-2024-0533', '11/07/2024', 'Étagères de réserve — lot unique', '1 420,00 HT'],
            ['Bon de réception BR-2024-0440', '14/07/2024', 'Lot reçu, conforme, sans réserve', '1 420,00'],
            ['Facture FA-2024-1361', '15/07/2024', 'Étagères de réserve — TVA 20 %', '1 240,00 HT'],
            ['Bon à payer validé (responsable logistique)', '16/07/2024', 'visa L. Berthier', '—'],
          ],
          note: 'Document fictif. TVA facturée : 248,00 € — TTC 1 488,00 €.',
        },
      ],
      questions: [
        {
          id: 'danone-m3-ex2-q1',
          question: 'Dossier 1 (achat de matières premières) : quel verdict ?',
          type: 'mcq',
          options: [
            'Conforme : pièce complète, montants concordants (commande = réception = facture), autorisation présente',
            'Incomplet : il manque une pièce obligatoire',
            'Incohérent : contradiction de montant entre pièces',
            'Non conforme : la TVA appliquée est nécessairement erronée',
          ],
          expected: '0',
          explanation:
            'Commande, réception et facture concordent (40 tonnes, 87,00 €/t, 3 480,00 € HT) et le bon à payer est visé : dossier conforme. Le contrôle arithmétique confirme : TVA 5,5 % = 191,40 €, TTC = 3 480,00 × 1,055 = 3 671,40 €. Le taux réduit sur denrées alimentaires est applicable en référence (à confirmer selon le produit exact et le régime), mais dans ce scénario le dossier est complet et concordant : conforme.',
        },
        {
          id: 'danone-m3-ex2-q2',
          question: 'Dossier 2 (prestation de nettoyage, facture seule) : quel verdict et quelle suite immédiate ?',
          type: 'mcq',
          options: [
            'Incomplet : facture seule au dossier — demander bon de commande, bon de réception et autorisation avant toute validation',
            'Conforme : une facture suffit à justifier une charge',
            'Incohérent : les montants se contredisent',
            'Non valide : la prestation n’a manifestement pas été réalisée',
          ],
          expected: '0',
          explanation:
            'Le dossier ne contient que la facture : ni commande, ni réception, ni visa. Verdict : incomplet — la suite est la demande de pièces (qui a commandé ? qui a reçu ?) avant validation ou paiement. Attention aux mauvaises réponses : une facture seule ne justifie pas une charge (validité non établie côté réception) ; aucune contradiction de montant n’existe (il n’y a rien à comparer) ; et on ne peut pas conclure à la non-réalité de la prestation — c’est précisément ce que les pièces demandées établiront.',
        },
        {
          id: 'danone-m3-ex2-q3',
          question: 'Dossier 3 (étagères de réserve) : quel verdict ?',
          type: 'mcq',
          options: [
            'Conforme : le bon à payer est visé, donc tout va bien',
            'Incohérent : la facture (1 240,00 €) contredit le bon de commande et le bon de réception (1 420,00 €)',
            'Incomplet seulement : il manque le détail du lot',
            'Conforme partiellement : l’écart est couvert par le visa',
          ],
          expected: '1',
          explanation:
            'Commande et réception concordent à 1 420,00 € HT, la facture porte 1 240,00 € HT : contradiction entre pièces — dossier incohérent. Le visa du bon à payer ne « couvre » pas l’écart : une validation ne justifie jamais une incohérence de 180,00 €. Causes possibles à instruire : remise non mentionnée, erreur de saisie fournisseur, livraison partielle non signalée, ou BL erroné. Le verdict s’accompagne de la recherche de la pièce qui tranche.',
        },
        {
          id: 'danone-m3-ex2-q4',
          question: 'Dossier 3 : quel est l’écart de montant HT entre la facture et les autres pièces ?',
          type: 'numeric',
          expected: 180,
          explanation: '1 420,00 − 1 240,00 = 180,00 € HT (soit 216,00 € TTC à 20 %). L’écart se chiffre toujours : c’est lui qui détermine la matérialité de la relance et le traitement (correction de facture ou régularisation du BL).',
        },
        {
          id: 'danone-m3-ex2-q5',
          question: 'Pour le dossier 3, quelle preuve complémentaire rechercheriez-vous avant de conclure ? Et pour le dossier 2 ?',
          type: 'open',
          keywords: ['fournisseur', 'avoir', 'remise', 'bon de livraison', 'commande', 'responsable', 'écrit'],
          explanation:
            'Dossier 3 : demander au fournisseur l’explication écrite de l’écart de 180,00 € — avoir de régularisation si une remise a été accordée après commande, facture rectifiée si erreur, ou correction du BL/BR si la quantité réellement livrée diffère (avec contre-vérification physique ou du stock). Si l’explication confirme la facture (1 240,00 €), le dossier devient cohérent après correction de la commande/réception ; sinon, la facture est corrigée. Dossier 2 : contacter le service demandeur (qui a commandé le nettoyage ?) et le prestataire (preuve d’intervention : planning, badge, bon d’intervention signé), et rechercher l’autorisation interne correspondante. Dans les deux cas : la preuve s’obtient par écrit, la conclusion n’intervient qu’après — et le statut « incomplet » ou « incohérent » reste tracé jusqu’à résolution.',
        },
      ],
      solutionSummary:
        'Dossier 1 : conforme — chaîne complète (commande = réception = facture = 3 480,00 € HT, TVA 5,5 %, TTC 3 671,40 €, visa). Dossier 2 : incomplet — facture seule, demander commande, réception et autorisation avant paiement. Dossier 3 : incohérent — facture 1 240,00 € contre BL/commande 1 420,00 €, écart de 180,00 € HT à expliquer par écrit (avoir, remise, erreur ou livraison partielle) ; le visa ne couvre pas l’écart. Méthode constante : qualifier le verdict, chiffrer l’écart, demander la preuve complémentaire, conclure après réponse.',
      interviewTips: [
        'Ne prononcez jamais « conforme » sans avoir cité ce qui l’établit (chaîne complète + concordance + visa) : le verdict se argumente.',
        'Sur le dossier 3, la formule clé : « le visa ne couvre pas l’incohérence » — elle montre que vous hiérarchisez les preuves.',
      ],
    },
    {
      id: 'danone-m3-ex3',
      title: 'Duplicatas et compensations',
      cycle: 'Achats',
      context:
        'Extrait du journal des achats de juillet 2024 : dix lignes. Deux configurations à repérer : une facture scannée deux fois, et un couple facture + avoir de même montant chez le même fournisseur. Toutes les données sont fictives.',
      risks: ['Double comptabilisation', 'Compensation injustifiée', 'Perte de traçabilité'],
      documents: [
        {
          kind: 'table',
          name: 'Journal des achats — extrait de 10 lignes (fictif)',
          columns: ['Ligne', 'N° pièce', 'Date', 'Fournisseur', 'HT (€)', 'Canal de réception'],
          rows: [
            [1, 'FA-2024-1182', '04/07/2024', 'Transports Ravel', 612.4, 'Portail'],
            [2, 'FA-2024-1185', '05/07/2024', 'Imprimerie du Val', 1248, 'Mail'],
            [3, 'FA-2024-1187', '08/07/2024', 'Papier & Logistique', 890.4, 'Courrier'],
            [4, 'FA-2024-1190', '09/07/2024', 'Astral Nettoyage', 1530, 'Portail'],
            [5, 'FA-2024-1201', '12/07/2024', 'Froid & Maintenance', 1240, 'Mail'],
            [6, 'AV-2024-0127', '12/07/2024', 'Froid & Maintenance', -1240, 'Mail'],
            [7, 'FA-2024-1194', '10/07/2024', 'Sécuritest Contrôles', 460.8, 'Portail'],
            [8, 'FA-2024-1197', '11/07/2024', 'Locabox Plastiques', 2092.6, 'Courrier'],
            [9, 'FA-2024-1187', '08/07/2024', 'Papier & Logistique', 890.4, 'Mail (rescan)'],
            [10, 'FA-2024-1205', '15/07/2024', 'Bureau Vert', 756, 'Portail'],
          ],
          note: 'Document fictif. Ligne 6 : avoir AV-2024-0127 référençant la facture FA-2024-1201 (« annulation, erreur de destinataire »). Ligne 9 : même numéro, même date, même montant que la ligne 3.',
        },
      ],
      questions: [
        {
          id: 'danone-m3-ex3-q1',
          question: 'Quelles lignes faut-il examiner pour suspicion de duplicata ou de compensation ?',
          type: 'multi',
          options: [
            'Ligne 3 — FA-2024-1187 Papier & Logistique (890,40 €)',
            'Ligne 5 — FA-2024-1201 Froid & Maintenance (1 240,00 €)',
            'Ligne 6 — AV-2024-0127 Froid & Maintenance (−1 240,00 €)',
            'Ligne 9 — FA-2024-1187 Papier & Logistique (890,40 €, rescan)',
            'Ligne 1 — FA-2024-1182 Transports Ravel (612,40 €)',
            'Ligne 7 — FA-2024-1194 Sécuritest Contrôles (460,80 €)',
            'Ligne 10 — FA-2024-1205 Bureau Vert (756,00 €)',
          ],
          expected: ['0', '1', '2', '3'],
          explanation:
            'Deux configurations suspectes. Duplicata : lignes 3 et 9 portent le même numéro (FA-2024-1187), la même date, le même fournisseur et le même montant (890,40 € HT) — la ligne 9 arrive par un canal différent (mail, rescan) : c’est un doublon de saisie probable, donc une charge et une dette doublées à corriger. Compensation : lignes 5 et 6 forment un couple facture + avoir de même montant (1 240,00 / −1 240,00) chez le même fournisseur, le même jour — à examiner : l’avoir référence la facture pour « erreur de destinataire », ce qui peut être légitime (facture émise à tort puis annulée) mais doit être vérifié (l’annulation totale suggère que la facture ne devait pas exister : les deux pièces doivent rester comptabilisées pour la traçabilité, et l’opération réelle, si elle existe, doit être refacturée correctement). Les lignes 1, 7 et 10 sont des factures standards sans particularité.',
        },
        {
          id: 'danone-m3-ex3-q2',
          question: 'Décrivez votre démarche complète pour traiter le doublon (lignes 3 et 9) et le couple facture/avoir (lignes 5 et 6).',
          type: 'open',
          keywords: ['annuler', 'contre-passation', 'fournisseur', 'confirmation', 'traçabilité', 'piste d’audit', 'duplicata'],
          explanation:
            'Doublon (3/9) : (1) confirmer qu’il s’agit du même document (même n°, même date, même montant — comparer les scans) ; (2) annuler la seconde saisie par contre-passation (jamais de suppression en place), avec libellé explicite « annulation doublon de saisie » ; (3) vérifier l’incidence sur la TVA déductible (elle suit la correction) et sur le compte fournisseur (la dette retombe à 890,40 € HT + TVA) ; (4) archiver la seconde réception avec mention « duplicata écarté » pour prouver qu’il n’a pas été perdu ; (5) si le fournisseur a déjà été payé deux fois — non ici, les règlements suivraient — engager le recouvrement. Couple facture/avoir (5/6) : (1) contrôler la légitimité de l’avoir : motif « erreur de destinataire » — demander confirmation écrite au fournisseur et vérifier si une facture corrigée a été émise à la bonne entité ; (2) conserver les deux pièces comptabilisées (la traçabilité exige que la facture erronée et son avoir restent visibles) ; (3) vérifier que l’opération réelle (la prestation de maintenance) est bien facturée à la bonne entité — sinon la charge manque quelque part ; (4) documenter l’analyse dans le dossier du mois. Dans les deux cas, la règle est la même : corriger par écriture tracée, confirmer par écrit avec le tiers, conserver la preuve du contrôle.',
        },
      ],
      solutionSummary:
        'Deux configurations détectées : le doublon FA-2024-1187 saisi deux fois (890,40 € HT — canaux courrier puis mail), à annuler par contre-passation avec TVA corrigée ; et le couple FA-2024-1201 / AV-2024-0127 (1 240,00 € / −1 240,00 €) « annulation pour erreur de destinataire », à confirmer par écrit tout en conservant les deux pièces pour la traçabilité, en vérifiant que l’opération réelle est refacturée à la bonne entité. Le réflexe sous-jacent : numéro de pièce + fournisseur + montant avant toute saisie, et jamais de suppression en place — des corrections tracées uniquement.',
      interviewTips: [
        'Citez le triplet de détection (fournisseur + numéro + montant) : c’est la réponse courte que le recruteur attend.',
        'Sur la compensation, montrez que vous vérifiez le lien de correction : un avoir qui annule une facture doit se justifier et se tracer.',
      ],
    },
    {
      id: 'danone-m3-ex4',
      title: 'Exhaustivité : journal des ventes contre remises de chèques',
      cycle: 'Encaissements',
      context:
        'Fin de mois : le journal des ventes enregistre les encaissements par chèque, la banque fournit le relevé de remises de chèques du 31 août 2024. Les deux doivent se recouper exactement. Montants et sociétés fictifs.',
      risks: ['Encaissement non enregistré', 'Créance client fausse', 'Vente non justifiée'],
      documents: [
        {
          kind: 'table',
          name: 'Relevé de remises de chèques du 31/08/2024 (fictif)',
          columns: ['N° chèque', 'Date de remise', 'Tireur (client)', 'Montant (€)'],
          rows: [
            ['4312749', '31/08/2024', 'Supérette Lemoine', 2450],
            ['4312751', '31/08/2024', 'Épicerie Bianchi', 1180],
            ['4312756', '31/08/2024', 'Hypermarché Verdier', 585],
            ['4312760', '31/08/2024', 'Crèmerie Odéon', 3210],
            ['4312762', '31/08/2024', 'Café des Halles', 940],
            ['4312768', '31/08/2024', 'Boulangerie Rousseau', 4065],
            ['TOTAL REMIS', '—', '6 chèques', 12430],
          ],
          note: 'Document fictif. Total contrôlé : 2 450,00 + 1 180,00 + 585,00 + 3 210,00 + 940,00 + 4 065,00 = 12 430,00 €.',
        },
        {
          kind: 'table',
          name: 'Journal des ventes — encaissements chèques d’août 2024 (fictif)',
          columns: ['N° écriture', 'Date', 'Client', 'Chèque rattaché', 'Montant (€)'],
          rows: [
            ['VE-2024-1120', '29/08/2024', 'Supérette Lemoine', '4312749', 2450],
            ['VE-2024-1121', '30/08/2024', 'Épicerie Bianchi', '4312751', 1180],
            ['VE-2024-1122', '30/08/2024', 'Crèmerie Odéon', '4312760', 3210],
            ['VE-2024-1123', '31/08/2024', 'Café des Halles', '4312762', 940],
            ['VE-2024-1124', '31/08/2024', 'Boulangerie Rousseau', '4312768', 4065],
            ['TOTAL JOURNAL', '—', '5 encaissements', '—', 11845],
          ],
          note: 'Document fictif. Total contrôlé : 2 450,00 + 1 180,00 + 3 210,00 + 940,00 + 4 065,00 = 11 845,00 €.',
        },
      ],
      questions: [
        {
          id: 'danone-m3-ex4-q1',
          question: 'Quel est l’écart entre le total remis en banque et le total enregistré au journal des ventes ?',
          type: 'numeric',
          expected: 585,
          explanation:
            '12 430,00 − 11 845,00 = 585,00 €. Le rapprochement ligne à ligne par numéro de chèque identifie immédiatement le responsable : le chèque n° 4312756 d’Hypermarché Verdier (585,00 €) figure au relevé de remises mais aucune écriture ne le rattache. C’est une rupture d’exhaustivité : un encaissement réel, prouvé par la banque, absent de la comptabilité.',
        },
        {
          id: 'danone-m3-ex4-q2',
          question: 'Décrivez votre démarche complète : contrôle, identification, correction et prévention.',
          type: 'open',
          keywords: ['rapprochement', 'numéro de chèque', 'écriture manquante', 'lettrage', 'client', 'correctif', 'prévention'],
          explanation:
            'Contrôle : rapprocher le relevé de remises et le journal ligne à ligne — le numéro de chèque est la clé (le total seul ne dit pas QUI manque) ; ici 6 chèques remis contre 5 enregistrés, écart de 585,00 €. Identification : le chèque 4312756 (Hypermarché Verdier) est encaissé sans écriture. Correction : enregistrer l’encaissement manquant (crédit 411VER Hypermarché Verdier 585,00 / débit 512000 Banque 585,00), puis lettre le règlement sur la facture concernée — la créance client est actuellement surévaluée d’autant. Vérification : retrouver la facture d’origine et le bordereau de remise pour attacher la preuve à l’écriture. Prévention : rapprochement systématique relevé ↔ journal en fin de mois (l’exhaustivité ne se contrôle que par rapprochement externe), et rattachement du numéro de chèque à chaque écriture d’encaissement pour automatiser le contrôle. Signal aussi à tirer : l’écart a traversé le mois — combien de temps le chèque serait-il resté non lettré sans ce contrôle ?',
        },
      ],
      solutionSummary:
        'Écart de 585,00 € (12 430,00 € remis contre 11 845,00 € enregistrés), identifié ligne à ligne grâce au numéro de chèque : le chèque 4312756 d’Hypermarché Verdier est encaissé sans écriture. Correction : enregistrement de l’encaissement (512000 / 411VER) et lettrage sur la facture d’origine, la créance étant surévaluée de 585,00 €. Prévention : rapprochement mensuel systématique relevé ↔ journal avec la référence chèque comme clé. Message clé : l’exhaustivité ne se prouve pas en lisant le journal, mais en le croisant avec une source indépendante.',
      interviewTips: [
        'Insistez sur la clé de rapprochement (numéro de chèque) : le total donne le montant, la clé donne le responsable.',
        'Concluez sur la prévention : un contrôle qui n’est pas systématisé ne détectera la prochaine rupture que par hasard.',
      ],
    },
  ],
  interviewQuestions: [
    { question: 'Que vérifiez-vous quand vous contrôlez la validité d’un justificatif ?', expected: 'Que la pièce soutient réellement l’opération : existence, bon émetteur et destinataire, nature du bien/service, montant exact, date plausible — le fond, par opposition à la conformité de forme.', hint: 'Valider ≠ rendre conforme : distinguez les deux plans.' },
    { question: 'Quelle différence faites-vous entre validité et conformité ?', expected: 'La validité interroge le fond (l’opération est-elle réelle et correctement décrite ?) ; la conformité interroge la forme (mentions obligatoires, autorisations, visas). Une pièce réelle peut être non conforme (TVA fragilisée) ; une pièce conforme peut être non valide (opération fictive). Les deux contrôles sont complémentaires.' },
    { question: 'Comment contrôlez-vous l’exhaustivité des opérations du mois ?', expected: 'Par rapprochement avec des sources indépendantes : journal des ventes ↔ relevé de remises de chèques et relevés bancaires, BL non facturés ↔ journal des ventes, bordereaux d’expédition ↔ factures. La lecture du journal ne prouve jamais l’exhaustivité : seule le croisement le peut.' },
    { question: 'Un dossier contient facture, BL et commande, mais la facture (1 240,00 €) contredit le BL (1 420,00 €) : que faites-vous ?', expected: 'Je qualifie le dossier « incohérent », je chiffre l’écart (180,00 € HT) et je recherche la pièce qui tranche : explication écrite du fournisseur (remise, avoir), vérification de la quantité réellement livrée, correction de la pièce erronée. Jamais de validation en l’état : un visa ne couvre pas une incohérence.' },
    { question: 'Comment détectez-vous un duplicata de facture ?', expected: 'Par la recherche du triplet fournisseur + numéro de facture + montant, y compris entre canaux de réception (courrier, mail, portail). Un même numéro arrivé deux fois = un seul enregistrement ; la seconde réception est écartée et tracée « duplicata écarté » pour prouver qu’elle n’a pas été perdue.' },
    { question: 'Une facture annulée par un avoir de même montant : anomalie ou pas ?', expected: 'À vérifier, pas à préjuger : le couple facture + avoir peut être légitime (erreur de destinataire, annulation avant paiement) — on contrôle le lien de correction, on conserve les deux pièces pour la traçabilité, et on vérifie que l’opération réelle est refacturée correctement. Ce qui serait anormal : une compensation de complaisance ou une opération réelle restée sans facture valide.' },
    { question: 'Que faites-vous face à une pièce à l’authenticité douteuse (présentation incohérente, numérotation bizarre) ?', expected: 'Je n’ai pas la prétention de trancher l’authenticité seul : je documente les indices, j’escalade au responsable comptable, et on confirme avec l’émetteur (contact vérifié, pas le numéro de la pièce douteuse). En attendant : pièce en attente, pas de paiement. Mieux vaut un retard justifié qu’un décaissement indû.' },
    { question: 'Pourquoi rapprocher les encaissements chèques du relevé de remises plutôt que du journal de banque seul ?', expected: 'Parce que le relevé de remises est la source indépendante amont : il prouve ce qui a été physiquement remis en banque. Le journal de banque enregistre ce qui a été saisi — or l’erreur d’exhaustivité naît précisément entre la remise et la saisie. Croiser deux sources dont l’une est externe, c’est le seul moyen de détecter les trous.' },
    { question: 'Quel statut donnez-vous à un dossier en attente de pièce, et pourquoi tracer ce statut ?', expected: '« Incomplet, relance faite le [date] » — un statut daté et nommé. Sans trace, le dossier revient en clôture comme une surprise ; avec trace, il se pilote : qui relance, quoi, depuis quand. Le tableau des pièces manquantes est un instrument de pilotage, pas une formalité.' },
    { question: 'Un écart minime (par exemple 1,00 €) apparaît entre deux pièces : le négligez-vous ?', expected: 'Non : l’écart rompt la cohérence arithmétique du dossier, bloque le lettrage du règlement réel et signale une approximation de saisie ou de facturation. Je le documente et demande la correction — le seuil de matérialité ne s’applique pas à la cohérence interne d’un dossier, seulement à la priorité de traitement.' },
  ],
  followUps: [
    { question: 'Le fournisseur ne répond pas à vos demandes de pièces manquantes : quelle est la suite ?', expected: 'Relance écrite datée, copie au responsable achats, et blocage du paiement de la facture concernée (la dette reste comptabilisée mais non payable) ; au bout du délai interne, escalade direction et, le cas échéant, rejet définitif documenté. Le dossier reste tracé en « incomplet — sans réponse » : jamais de validation par lassitude.' },
    { question: 'Le BL manquant « sera signé la semaine prochaine » : validez-vous le dossier ?', expected: 'Non : la validation suit la pièce, pas la promesse. Le dossier reste « incomplet » avec relance datée ; s’il s’agit d’un paiement urgent justifié, une procédure d’exception validée par le responsable peut exister — mais elle reste une exception documentée, jamais la règle.' },
    { question: 'Et si c’est un document interne qui manque (autorisation, visa) ?', expected: 'Même exigence, autre interlocuteur : le demandeur interne et son responsable. Une dépense réelle non autorisée est une anomalie de contrôle interne — je la documente et la signale : c’est exactement le type de récurrence qui nourrit une remontée de faille de procédure.' },
    { question: 'Vous trouvez 3 duplicatas le même mois : coïncidence ou signal ?', expected: 'Signal : j’analyse les canaux d’arrivée et les personnes impliquées. Si les trois viennent du même circuit (par exemple double flux portail + mail), le problème est organisationnel : je propose un correctif de process (canal unique, détection automatique) et je documente la récurrence pour le responsable.' },
    { question: 'Comment réagiriez-vous si le rapprochement chèques/journal révélait une écriture SANS chèque correspondant ?', expected: 'C’est l’inverse de l’exhaustivité : une écriture sans preuve d’encaissement — possible créance soldée à tort ou écriture erronée. Je reconstitue le dossier (bordereau de remise, relevé, facture), je qualifie (erreur de rattachement, chèque perdu, écriture fictive ?) et j’escalade : ce sens d’anomalie est plus riche d’enseignements que le premier.' },
    { question: 'Sur quelles bases refusez-vous une pièce, plutôt que de demander sa correction ?', expected: 'Le rejet définitif se justifie par l’irrécupérabilité : pièce illisible sans duplicata possible, émetteur introuvable, incohérence majeure non expliquée. Partout ailleurs, la correction documentée reste préférable — elle préserve la relation tiers et la traçabilité ; le rejet n’est qu’une issue de dernier recours, tracée et motivée.' },
    { question: 'Votre contrôle du mois révèle 8 dossiers incomplets sur 60 : c’est beaucoup ?', expected: 'Ça dépend de la norme interne et de la tendance : 8/60 isolé peut refléter un mois perturbé (grève transport, changement de prestataire) ; 8/60 récurrents sur trois mois signale une faille de process (pièces non exigées à la source). Le chiffre ne s’interprète que comparé — d’où l’intérêt du tableau de bord mensuel des anomalies.' },
  ],
  evaluation: {
    criteria: [
      { label: 'Distinction des notions', description: 'Nomme et distingue validité, authenticité apparente, cohérence, exhaustivité et conformité sans les confondre.' },
      { label: 'Contrôle de dossier', description: 'Vérifie l’existence, l’identité des tiers, les dates, la nature du bien, les montants et les autorisations internes.' },
      { label: 'Rapprochement de pièces', description: 'Croise systématiquement facture, commande, réception et écriture — et chiffre chaque écart constaté.' },
      { label: 'Détection de doublons et compensations', description: 'Applique le triplet fournisseur / numéro / montant et analyse les couples facture + avoir avec leur lien de correction.' },
      { label: 'Contrôle d’exhaustivité', description: 'Rapproche le journal de sources indépendantes (relevés, remises) en utilisant une clé d’identification fiable.' },
      { label: 'Verdict documenté', description: 'Qualifie chaque dossier (conforme, incomplet, incohérent) avec la preuve et la suite donnée, et recherche la preuve complémentaire avant de conclure.' },
    ],
  },
}
