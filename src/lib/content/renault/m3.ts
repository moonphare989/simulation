import type { Mission } from '@/lib/types'

// =====================================================================
// Fiche 2 — Renault · Mission 3 : Rapprochements bancaires (la plus riche)
// Scénario pédagogique fictif — juin à septembre 2025, montants en euros.
// 10 rapprochements mensuels + 15 suspens + écritures de régularisation.
// =====================================================================

export const renaultMission3: Mission = {
  id: 'renault-m3',
  ficheId: 'renault',
  order: 3,
  title: 'Rapprochements bancaires : dix mois, quinze suspens, des écritures correctrices',
  period: 'Juin – Septembre 2025 · scénario pédagogique (données fictives)',
  company: 'Renault (scénario pédagogique — simulation)',
  sector: 'Automobile · service comptable et financier',
  referenceData: [
    'Dix rapprochements bancaires mensuels produits et revus : décembre 2024 à septembre 2025 (soldes relevé et comptable, suspens, écarts résiduels)',
    'Quinze écarts et suspens analysés et résolus : virement en transit, frais bancaires non comptabilisés, prélèvement inconnu, chèque non débité, remise non créditée, doublon, erreur de montant, erreur de date, encaissement non identifié, opération dans le mauvais compte, chèque ancien de plus de six mois, remise de chèques en transit, virement client non affecté, frais de change, prélèvement SEPA rejeté',
    'Rapprochement détaillé du mois d\u2019août 2025 : 13 opérations au relevé, 12 au journal de banque, solde rapproché de 1 139 170 € et écritures correctrices de 9 310 €',
    'Cinq comptes bancaires suivis quotidiennement (mission 1 de la fiche)',
    'BFR suivi sur deux exercices fictifs : 380 000 € en N contre 285 000 € en N-1 (mission 2 de la fiche)',
    'Environ cinquante décaissements par mois contrôlés par échantillonnage (mission 4 de la fiche)',
    'Matrice des délégations de signature appliquée : cinq signataires fictifs, plafonds de 8 000 € à 200 000 € (mission 4 de la fiche)',
    'Bons à payer vérifiés avant tout paiement fournisseur (mission 4 de la fiche)',
    'Plus de soixante-dix écritures de clôture mensuelle revues sur l\u2019ensemble des clôtures (mission 5 de la fiche)',
  ],
  summary:
    "Mission la plus riche de la fiche : maîtriser la procédure de rapprochement bancaire en dix étapes, produire les rapprochements de dix mois consécutifs, analyser quinze suspens (décalages normaux contre anomalies), chiffrer le solde rapproché et passer les écritures correctrices nécessaires. Un écart résiduel de 5 090 € en septembre sert de fil rouge à l'investigation. Scénario entièrement fictif, montants en euros.",

  comprehension: {
    intro:
      "Le compte 512 de la comptabilité et le relevé de la banque racontent la même histoire — mais jamais le même jour, et jamais exactement dans le même ordre. Chèques émis non encore présentés, remises créditées à J+2, virements en transit, frais prélevés sans avis : autant de décalages qui font diverger les deux soldes. Le rapprochement bancaire est la procédure qui réconcilie ces deux versions du monde, mois après mois. Dans ce scénario pédagogique fictif, le stagiaire reprend dix rapprochements mensuels (décembre 2024 à septembre 2025), traite quinze suspens de natures différentes et apprend à distinguer ce qui est normal (le temps bancaire) de ce qui est anormal (l'erreur, l'omission, la fraude potentielle). C'est le cœur du métier de la trésorerie comptable et l'un des sujets les plus testés en entretien. Précision de référentiel : les comptes cités (512, 627, 471…) appartiennent au plan comptable général français ; en IFRS, aucun plan de comptes n'est imposé et les intitulés diffèrent, mais la logique du rapprochement est strictement identique dans tous les référentiels.",
    definitions: [
      {
        term: 'Rapprochement bancaire',
        definition:
          "Procédure périodique qui compare le relevé de compte envoyé par la banque et le compte de banque tenu en comptabilité, explique chaque divergence et aboutit à un solde rapproché identique calculé depuis les deux documents.",
      },
      {
        term: 'Relevé bancaire',
        definition:
          "Document de la banque listant, pour la période, toutes les opérations portées au compte (débits et crédits) et le solde en fin de période. C'est la vision « banque » de la trésorerie.",
      },
      {
        term: 'Compte de banque en comptabilité (512)',
        definition:
          "Compte du plan comptable général reflétant la vision « entreprise » des mouvements bancaires, alimenté par le journal de banque. Son solde diverge du relevé tant que des opérations n'ont pas été portées des deux côtés.",
      },
      {
        term: 'Pointage',
        definition:
          "Action de rapprocher une à une les opérations communes aux deux documents, par référence, montant et sens. Une opération pointée existe des deux côtés, même si les dates différent légèrement.",
      },
      {
        term: 'Suspens',
        definition:
          "Opération présente dans un seul des deux documents à la date du rapprochement. Il devient soit un décalage temporel qui se résorbera (normal), soit une anomalie à traiter (écriture manquante, doublon, erreur).",
      },
      {
        term: 'Décalage temporel',
        definition:
          "Divergence liée aux délais d'acheminement ou de traitement : chèque émis non encore présenté, remise non encore créditée, virement émis en fin de mois débité le mois suivant. Aucune écriture correctrice n'est requise ; l'élément se reporte d'un rapprochement à l'autre jusqu'à sa résorption.",
      },
      {
        term: 'Chèque émis non débité',
        definition:
          "Chèque comptabilisé et remis au bénéficiaire mais pas encore présenté à la banque : le solde comptable est plus bas que le relevé. Se surveille : un chèque ancien jamais présenté doit être traité (validité limitée dans le temps selon les règles bancaires applicables, prescription possible).",
      },
      {
        term: 'Remise de chèques non créditée',
        definition:
          "Chèques clients déposés en banque et comptabilisés mais non encore crédités (délai d'encaissement, souvent J+1 à J+2) : le solde comptable est plus élevé que le relevé.",
      },
      {
        term: 'Virement en transit',
        definition:
          "Virement émis ou reçu comptabilisé en fin de période mais porté au compte bancaire de la période suivante. Décalage pur, très fréquent en fin de mois.",
      },
      {
        term: 'Frais bancaires non comptabilisés',
        definition:
          "Frais de tenue de compte, commissions, frais de change prélevés par la banque sans pièce comptable envoyée : ils figurent au relevé et pas en comptabilité. Anomalie : une écriture correctrice (charge / 512) doit être passée.",
      },
      {
        term: 'Écriture correctrice',
        definition:
          "Écriture de régularisation passée en comptabilité à la suite du rapprochement : frais à comptabiliser, prélèvement inconnu mis en attente, extourne d'un doublon, reclassement entre comptes bancaires.",
      },
      {
        term: 'Extourne',
        definition:
          "Écriture inverse d'une écriture erronée ou obsolète : même comptes, même montant, sens inverses. On extourne un doublon, une écriture de période erronée ou un chèque prescrit.",
      },
      {
        term: 'Compte d\u2019attente (471)',
        definition:
          "Compte transitoire du PCG utilisé pour comptabiliser un montant dont l'imputation définitive n'est pas connue (prélèvement inconnu, encaissement non identifié). À solder dès l'identification — un compte d'attente qui gonfle est un signal d'alerte.",
      },
      {
        term: 'Solde rapproché',
        definition:
          "Solde obtenu après ajustement des deux documents : solde relevé corrigé des éléments non encore portés en banque, égal au solde comptable corrigé des éléments non encore comptabilisés. S'il diffère, l'écart résiduel doit être expliqué avant conclusion.",
      },
    ],
    keyPoints: [
      "Le rapprochement part toujours des deux soldes de fin de période et aboutit à un solde rapproché unique ; chaque écart intermédiaire doit être nommé et chiffré.",
      "Un suspens n'est pas une anomalie en soi : les décalages temporels (chèques émis, remises, virements en transit) sont normaux et se reportent ; les éléments non comptabilisés, doublons et erreurs exigent un traitement.",
      "L'ancienneté est le critère de tri : un suspens de un à trois jours est du temps bancaire ; un suspens de plusieurs mois appelle une investigation (chèque ancien, doublon, réclamation).",
      "Le pointage se fait sur les couples (référence, montant, sens) — jamais sur la seule date : une même opération peut être datée différemment des deux côtés.",
      "Toute écriture correctrice découle d'une pièce ou d'une confirmation : le compte d'attente (471) ne doit être qu'un passage, jamais un débarras.",
      "Un écart résiduel non expliqué interdit la conclusion : on repointe, on vérifie les doubles, on interroge la banque, et on documente chaque hypothèse.",
      "Les écritures correctrices respectent le sens : un frais débité par la banque se comptabilise par le débit d'une charge au crédit du 512 ; un encaissement non identifié par le débit du 512 au crédit du 471.",
      "Le rapprochement est un contrôle de fond, pas un formalisme : il détecte erreurs de saisie, oublis, doublons de paiement et peut révéler des débits frauduleux — c'est la première ligne de défense de la trésorerie.",
      "Les comptes utilisés (512, 627, 471…) relèvent du PCG ; en IFRS les libellés changent mais la procédure est identique. En entretien, le nommer montre la conscience du référentiel applicable.",
    ],
  },

  objectives: {
    why:
      "Sans rapprochement, le solde comptable de banque n'est qu'une opinion. Le rapprochement est le seul contrôle qui garantit, mois par mois, que la comptabilité bancaire reflète la réalité du compte : il détecte les oublis de comptabilisation, les doubles paiements, les prélèvements erronés et les débits suspects. Dans ce scénario pédagogique, dix mois de rapprochements et quinze suspens font vivre la totalité de la procédure — du pointage à l'écriture correctrice — avec un écart résiduel à investiguer, comme dans la vraie vie. C'est aussi la mission qui apprend la patience méthodique : un rapprochement ne se conclut que lorsqu'il est nul d'écarts inexpliqués et documenté.",
    infoSought: [
      'Le solde relevé et le solde comptable de chaque compte bancaire à chaque fin de mois',
      'La liste exhaustive des suspens par nature, montant, date et ancienneté',
      'La distinction entre décalages temporels (report sans écriture) et anomalies (traitement immédiat)',
      'Les écritures correctrices nécessaires : comptes, montants, sens, justificatifs',
      'Les doublons de comptabilisation et paiements indu à extourner ou récupérer',
      'Les opérations anciennes ou inhabituelles à escalader (chèque de plus de six mois, prélèvement inconnu)',
      "L'écart résiduel éventuel et sa cause — jusqu'à zéro ou à une explication documentée",
    ],
    risksCovered: [
      "Risque d'omission : frais, prélèvements ou encaissements jamais comptabilisés (comptabilité fausse, résultat erroné)",
      "Risque de doublon : facture ou paiement comptabilisé ou payé deux fois (perte de trésorerie)",
      "Risque d'erreur de saisie : montant inversé, mauvais compte bancaire, mauvaise période",
      "Risque de fraude : débit frauduleux, virement vers un compte inconnu, faux ordre de prélèvement",
      "Risque de fraude interne : dissimulation de détournement par des comptes d'attente jamais soldés",
      "Risque de cut-off : opérations rattachées à la mauvaise période, soldes de clôture faux",
      "Risque de conclusion hâtive : écart résiduel masqué par une écriture d'équilibrage non justifiée",
      "Risque de perte documentaire : rapprochements non archivés, suspens sans historique, piste d'audit rompue",
    ],
  },

  preparation: {
    documents: [
      "Relevés bancaires des cinq comptes pour chaque mois à rapprocher (avec soldes de début et de fin)",
      "Journaux de banque (comptes 512001 à 512005) avec les reportés de soldes",
      "Rapprochements bancaires du mois précédent (état des suspens reportés)",
      "Journal des chèques émis (souches, numéros, bénéficiaires)",
      "Bordereaux de remises de chèques et de billets",
      "Avis de virements émis et reçus, avec références",
      "Conditions bancaires : barème des frais, délais de valeur, dates de crédit des remises",
      "Chronologie des virements internes entre les cinq comptes",
      "Balance des comptes d\u2019attente (471 et assimilés) pour identifier les montants en instance",
      "Matrice des délégations et contacts bancaires (pour les réclamations et confirmations)",
      "Historique des anomalies des mois précédents et leur statut de résolution",
    ],
    questionsToAsk: [
      "Quels comptes bancaires entrent dans le périmètre du rapprochement mensuel, et à quelle date de clôture ?",
      "Les soldes de départ sont-ils déjà rapprochés (reprise des suspens du mois précédent) ?",
      "Quels délais de valeur et dates de crédit des remises la banque applique-t-elle ?",
      "Quelle ancienneté déclenche le traitement d'un suspens (par exemple chèque non présenté depuis plus de six mois) ?",
      "Qui contacter à la banque pour une réclamation, et avec quels délais de réponse contractuels ?",
      "Quels comptes d'attente sont tolérés et pendant combien de temps ?",
      "Le rapprochement est-il revu et signé par le responsable avant archivage ?",
    ],
    precautions: [
      "Vérifier la continuité : le solde initial du mois doit être le solde final rapproché du mois précédent — sinon, reprendre le rapprochement antérieur.",
      "Pointer sur les couples référence / montant / sens, jamais sur la date seule : une date différente n'est pas un écart si l'opération figure des deux côtés.",
      "Ne jamais passer d'écriture d'équilibrage « pour boucher » un écart résiduel : chaque écriture correctrice exige une pièce ou une confirmation écrite.",
      "Surveiller l'ancienneté des suspens et l' historicaliser : un chèque ancien ou un compte d'attente qui dort devient une anomalie de plus en plus difficile à justifier.",
      "Documenter chaque étape (pointage, hypothèse, confirmation) : le rapprochement est une pièce d'audit potentielle.",
    ],
  },

  method: [
    {
      title: 'Rassembler le relevé bancaire et le compte de banque en comptabilité',
      description:
        "Obtenir le relevé de la période et l'extrait du journal de banque (compte 512) pour la même période, avec les soldes de début ; vérifier que le solde initial comptable est bien le solde rapproché du mois précédent.",
      why: "Un rapprochement n'est qu'une chaîne : si le point de départ est faux, tout ce qui suit l'est aussi.",
    },
    {
      title: 'Vérifier les dates et la période couvertes',
      description:
        "S'assurer que les deux documents couvrent exactement la même période (dates d'ouverture et de clôture), et repérer les opérations de bord de période (J-1, J+1) sources de décalages.",
      why: "La moitié des divergences vient d'un problème de périmètre temporel, pas de fond : le cut-off se joue à la journée.",
    },
    {
      title: 'Pointer les opérations communes',
      description:
        "Rapprocher une à une les opérations présentes des deux côtés, par référence, montant et sens ; marquer chaque ligne pointée. Les dates peuvent différer de quelques jours sans que ce soit un écart.",
      why: "Le pointage élimine le bruit : il ne reste ensuite que les vraies divergences, toutes identifiées et chiffrées.",
    },
    {
      title: 'Isoler les opérations présentes dans un seul des deux documents',
      description:
        "Lister d'un côté ce qui est au relevé sans être en comptabilité, de l'autre ce qui est en comptabilité sans être au relevé : c'est l'état des suspens.",
      why: "C'est la matière première du diagnostic : chaque suspens recevra ensuite un statut, normal ou anormal.",
    },
    {
      title: 'Distinguer le décalage temporel de l\u2019erreur ou de l\u2019omission',
      description:
        "Pour chaque suspens, juger : s'agit-il d'un délai d'acheminement banal (chèque récent, remise de la veille, virement fin de mois) ou d'une anomalie (élément non comptabilisé, doublon, montant différent, libellé inconnu) ?",
      why: "Cette distinction conditionne tout le reste : un décalage se reporte, une anomalie se traite — confondre les deux ruine le rapprochement.",
    },
    {
      title: 'Traiter les familles d\u2019opérations une par une',
      description:
        "Passer en revue les familles : chèques émis, virements émis et reçus, prélèvements SEPA, remises de chèques et de billets, frais et commissions bancaires, opérations de change.",
      why: "Chaque famille a ses délais et ses pièges propres : le traitement par famille rend le contrôle exhaustif et rapide.",
    },
    {
      title: 'Détecter les écritures manquantes ou en double',
      description:
        "Rechercher dans les suspens non expliqués les signatures d'un oubli (opération banque sans comptabilité) ou d'un doublon (deux écritures identiques, deux paiements rapprochés d'une même facture).",
      why: "Les oublis faussent le résultat ; les doubles détruisent la trésorerie : ce sont les deux anomalies les plus coûteuses du rapprochement.",
    },
    {
      title: 'Analyser les opérations anciennes ou inhabituelles',
      description:
        "Isoler les suspens anciens (chèque non présenté depuis plus de six mois, compte d'attente dormant) et les opérations atypiques (montant rond élevé, libellé incompréhensible, contrepartie inconnue) et les escalader.",
      why: "L'ancienneté et l'atypisme sont les deux signaux classiques d'une fraude ou d'une perte latente : les ignorer, c'est assumer le risque.",
    },
    {
      title: 'Déterminer les écritures comptables nécessaires',
      description:
        "Pour chaque anomalie, définir l'écriture correctrice : comptes, sens, montant, justificatif (avis bancaire, confirmation écrite) ; mettre en compte d'attente (471) les montants en instance d'identification, avec un plan de solder.",
      why: "Le rapprochement ne se termine pas dans un tableau : il se termine dans le journal — sinon la comptabilité reste fausse.",
    },
    {
      title: 'Conclure sur la cohérence et documenter',
      description:
        "Calculer le solde rapproché depuis le relevé et depuis la comptabilité, vérifier l'égalité, traiter ou expliquer tout écart résiduel, puis faire viser et archiver le rapprochement avec ses annexes.",
      why: "Un rapprochement visé, nul d'écarts inexpliqués et archivé est une preuve de contrôle — face à la direction comme face à un auditeur.",
    },
  ],

  exercises: [
    {
      id: 'renault-ex-3-1',
      title: 'Exercice 1 · Procédure de rapprochement guidée (mois d\u2019août)',
      cycle: 'Trésorerie',
      context:
        "Dans ce cas, on me confie le rapprochement du compte principal (Banque Avenir, 512001) pour le mois d'août 2025 (données fictives). Les soldes de départ sont identiques des deux côtés : 1 184 300,00 € au 1er août, repris du rapprochement de juillet. Je dois calculer les soldes de fin, le solde rapproché et les écritures correctrices. Toutes les opérations sont fictives et exprimées en euros.",
      documents: [
        {
          kind: 'table',
          name: 'Relevé bancaire Banque Avenir — compte 512001, août 2025 (document fictif)',
          columns: ['Date', 'Opération libellée par la banque', 'Débit (€)', 'Crédit (€)'],
          rows: [
            ['01/08', 'Solde de départ', '—', 1184300],
            ['02/08', 'Virement reçu — client Sablier & Cie', '—', 86500],
            ['03/08', 'Prélèvement — fournisseur Métalux', 42300, '—'],
            ['05/08', 'Remise de chèques créditée', '—', 58750],
            ['07/08', 'Virement émis — salaires', 148000, '—'],
            ['09/08', 'Frais de tenue de compte (3e trimestre)', 145, '—'],
            ['12/08', 'Virement reçu — client Verdot SA', '—', 63200],
            ['15/08', 'Prélèvement SEPA — Sogex Énergie', 18420, '—'],
            ['18/08', 'Chèque n° 518234 payé', 27600, '—'],
            ['21/08', 'Virement émis — fournisseur Orcom', 91250, '—'],
            ['25/08', 'Remise de chèques créditée', '—', 32400],
            ['27/08', 'Prélèvement SEPA — émetteur « XYLO CORP » (non identifié)', 8900, '—'],
            ['28/08', 'Frais de change', 265, '—'],
            ['29/08', 'Virement reçu — client Balder', '—', 74100],
          ],
          note:
            "Le solde de fin de période n'est pas indiqué : il se calcule. Le prélèvement « XYLO CORP » ne correspond à aucun fournisseur connu du fichier fournisseurs fictif. Document fictif à but pédagogique.",
        },
        {
          kind: 'table',
          name: 'Journal de banque — compte 512001, août 2025 (comptabilité, document fictif)',
          columns: ['Date', 'Libellé de l\u2019écriture', 'Encaissement (€)', 'Décaissement (€)'],
          rows: [
            ['01/08', 'Solde initial (rapproché de juillet)', '—', 1184300],
            ['02/08', 'Virement client Sablier & Cie', 86500, '—'],
            ['04/08', 'Prélèvement fournisseur Métalux', '—', 42300],
            ['05/08', 'Remise de chèques', 58750, '—'],
            ['07/08', 'Virement des salaires', '—', 148000],
            ['12/08', 'Virement client Verdot SA', 63200, '—'],
            ['16/08', 'Prélèvement Sogex Énergie', '—', 18420],
            ['20/08', 'Chèque n° 518234 — fournisseur Balder', '—', 27600],
            ['21/08', 'Virement fournisseur Orcom', '—', 91250],
            ['25/08', 'Remise de chèques', 32400, '—'],
            ['29/08', 'Virement client Balder', 74100, '—'],
            ['30/08', 'Chèque n° 518241 émis — fournisseur Kallista', '—', 35800],
            ['30/08', 'Remise de chèques — client Névé', 12600, '—'],
          ],
          note:
            "Le chèque 518241 a été remis au fournisseur le 30/08 ; la banque le débitlera le 02/09. La remise Névé sera créditée par la banque le 02/09. Les dates de comptabilisation peuvent différer de quelques jours des dates bancaires (ex. : Métalux comptabilisé le 04/08, débité le 03/08). Document fictif.",
        },
      ],
      questions: [
        {
          id: 'rn3-e1-q1',
          question: 'Calculer le solde du relevé bancaire au 31 août 2025, en euros.',
          type: 'numeric',
          expected: 1162370,
          explanation:
            "Solde relevé = 1 184 300 + 86 500 − 42 300 + 58 750 − 148 000 − 145 + 63 200 − 18 420 − 27 600 − 91 250 + 32 400 − 8 900 − 265 + 74 100 = 1 162 370,00 €. Dans ce cas, je recalcule ce solde une seconde fois par cumul progressif avant de continuer.",
        },
        {
          id: 'rn3-e1-q2',
          question: 'Calculer le solde comptable du compte 512001 au 31 août 2025, en euros.',
          type: 'numeric',
          expected: 1148480,
          explanation:
            "Solde comptable = 1 184 300 + 86 500 − 42 300 + 58 750 − 148 000 + 63 200 − 18 420 − 27 600 − 91 250 + 32 400 + 74 100 − 35 800 + 12 600 = 1 148 480,00 €. L\u2019écart brut avec le relevé (1 162 370 − 1 148 480 = 13 890 €) devra être entièrement expliqué.",
        },
        {
          id: 'rn3-e1-q3',
          question:
            'Calculer le solde rapproché au 31 août 2025, en euros (il doit être identique depuis le relevé et depuis la comptabilité).',
          type: 'numeric',
          expected: 1139170,
          explanation:
            "Voie relevé : 1 162 370 − 35 800 (chèque 518241 émis non débité) + 12 600 (remise Névé non créditée) = 1 139 170 €. Voie comptable : 1 148 480 − 145 (frais de tenue de compte) − 8 900 (prélèvement XYLO CORP) − 265 (frais de change) = 1 139 170 €. Les deux voies convergent : le rapprochement est juste.",
        },
        {
          id: 'rn3-e1-q4',
          question:
            'Quel est le montant total des écritures correctrices à passer en comptabilité, en euros ?',
          type: 'numeric',
          expected: 9310,
          explanation:
            "Écritures correctrices = frais de tenue de compte 145 + prélèvement inconnu 8 900 + frais de change 265 = 9 310,00 €. Les deux autres suspens (chèque 518241, remise Névé) sont des décalages temporels : aucune écriture, simple report à septembre.",
        },
        {
          id: 'rn3-e1-q5',
          question:
            "Rédigez votre démarche en cinq étapes pour ce rapprochement, et traitez spécifiquement le prélèvement « XYLO CORP » de 8 900 € : quelle classification, quel traitement comptable, quelles actions avant de conclure ?",
          type: 'open',
          keywords: [
            'pointer',
            'suspens',
            'décalage',
            'banque',
            '471',
            'attente',
            'réclamation',
            'justificatif',
            'documenter',
          ],
          explanation:
            "Démarche attendue : (1) vérifier la continuité des soldes initiaux (1 184 300 € des deux côtés, repris du rapprochement de juillet) ; (2) pointer les opérations communes par référence, montant et sens (les écarts de date de quelques jours, comme Métalux comptabilisé au 04/08 et débité au 03/08, ne sont pas des suspens) ; (3) établir l\u2019état des suspens : côté comptabilité, chèque 518241 (35 800 €) et remise Névé (12 600 €) ; côté banque, frais 145 €, prélèvement XYLO CORP 8 900 €, frais de change 265 € ; (4) qualifier chaque suspens : les deux premiers sont des décalages temporels (report sans écriture), les trois derniers sont des anomalies (écritures correctrices) ; (5) calculer le solde rapproché des deux voies (1 139 170 €) et documenter. Traitement du prélèvement XYLO CORP : c\u2019est une anomalie à investiguer (émetteur inconnu). Dans ce cas, je commencerais par interroger la banque (réclamation écrite avec la référence de l\u2019opération), je passerais en attendant l\u2019écriture débit 471 « compte d\u2019attente » / crédit 512 pour 8 900 € afin que le 512 soit juste, et je ne solderais le 471 qu\u2019après identification : remboursement obtenu, contrepartie reconnue ou confirmation du prélèvement. Tant que l\u2019origine n\u2019est pas établie, je ne conclus pas le rapprochement sans mentionner ce point, car un prélèvement inconnu peut être le symptôme d\u2019un ordre de prélèvement frauduleux.",
        },
      ],
      risks: [
        'Prélèvement frauduleux ou erroné non détecté',
        'Frais et commissions jamais comptabilisés',
        'Décalage temporel confondu avec une anomalie (ou l\u2019inverse)',
      ],
      solutionSummary:
        "Soldes au 31 août : relevé 1 162 370 €, comptabilité 1 148 480 €, écart brut 13 890 €. Suspens côté comptabilité : chèque 518241 émis non débité (35 800 €) et remise Névé non créditée (12 600 €) — deux décalages temporels sans écriture, à reporter sur septembre. Suspens côté banque : frais de tenue de compte (145 €), prélèvement XYLO CORP inconnu (8 900 €) et frais de change (265 €) — trois anomalies nécessitant 9 310 € d'écritures correctrices. Solde rapproché : 1 139 170 € par les deux voies. Le prélèvement inconnu exige une réclamation bancaire et un passage provisoire en compte d'attente (471) : on ne solde jamais un suspens inexpliqué par une écriture d'équilibrage. En entretien, dérouler la procédure en dix étapes avec ce cas concret (continuité, pointage, suspens, qualification, correcteurs, conclusion) suffit à démontrer la maîtrise complète du cycle.",
      interviewTips: [
        "Annoncer les deux voies du solde rapproché et leur convergence : c'est la signature d'un rapprochement maîtrisé.",
        "Qualifier chaque suspens en deux mots (décalage / anomalie) avant d'en parler : le vocabulaire juste crédibilise.",
        "Sur le prélèvement inconnu, citer la réclamation bancaire et le 471 : traitement professionnel complet.",
      ],
    },

    {
      id: 'renault-ex-3-2',
      title: 'Exercice 2 · Atelier : dix rapprochements mensuels',
      cycle: 'Trésorerie',
      context:
        "Le service a produit dix rapprochements mensuels consécutifs (décembre 2024 à septembre 2025, données fictives). Neuf se concluent par un écart entièrement expliqué par les suspens. Je dois contrôler chaque mois, repérer celui qui présente un écart résiduel non expliqué et définir la démarche. Rappel : écart brut = solde relevé − solde comptable ; un chèque émis non débité rend le relevé plus élevé que la comptabilité, une remise non créditée ou des frais non comptabilisés l'abaissent.",
      documents: [
        {
          kind: 'table',
          name: 'Synthèse des dix rapprochements mensuels (documents fictifs, montants en €)',
          columns: ['Mois', 'Solde relevé banque (€)', 'Solde comptable 512 (€)', 'Principaux suspens identifiés'],
          rows: [
            ['déc. 2024', 2410800, 2402650, 'Chèques émis non débités : 22 750 · Remise non créditée : 14 600'],
            ['janv. 2025', 2285400, 2296900, 'Chèques émis non débités : 4 300 · Remise non créditée : 15 800'],
            ['févr. 2025', 2176300, 2173450, 'Chèques émis non débités : 9 450 · Remise non créditée : 6 600'],
            ['mars 2025', 2348900, 2340200, 'Chèques émis non débités : 12 300 · Remise non créditée : 3 600'],
            ['avr. 2025', 2204500, 2197750, 'Chèques émis non débités : 8 250 · Remise non créditée : 1 500'],
            ['mai 2025', 2152800, 2158250, 'Chèques émis non débités : 2 150 · Remise non créditée : 7 600'],
            ['juin 2025', 2310600, 2306150, 'Chèques émis non débités : 6 950 · Remise non créditée : 2 500'],
            ['juil. 2025', 2274300, 2269900, 'Chèques émis non débités : 11 200 · Remise non créditée : 6 800'],
            ['août 2025', 1162370, 1148480, 'Chèque 518241 non débité : 35 800 · Remise non créditée : 12 600 · Frais et prélèvement non comptabilisés : 9 310'],
            ['sept. 2025', 1386500, 1372900, 'Chèques émis non débités : 18 900 · Remises non créditées : 9 750 · Frais non comptabilisés : 640'],
          ],
          note:
            "Les suspens listés sont ceux identifiés à la clôture de chaque mois. Convention : l'écart brut se calcule relevé − comptabilité. Documents fictifs à but pédagogique.",
        },
      ],
      questions: [
        {
          id: 'rn3-e2-q1',
          question: 'Calculer l\u2019écart brut (relevé − comptabilité) de septembre 2025, en euros.',
          type: 'numeric',
          expected: 13600,
          explanation:
            "Écart brut = 1 386 500 − 1 372 900 = 13 600,00 €.",
        },
        {
          id: 'rn3-e2-q2',
          question:
            "Les suspens identifiés de septembre expliquent : + 18 900 (chèques émis non débités) − 9 750 (remises non créditées) − 640 (frais non comptabilisés). Quel est l'écart résiduel inexpliqué, en euros ?",
          type: 'numeric',
          expected: 5090,
          explanation:
            "Suspens explicatifs = 18 900 − 9 750 − 640 = 8 510 €. Écart résiduel = 13 600 − 8 510 = 5 090,00 €. Ce mois ne peut pas être conclu : 5 090 € restent sans origine identifiée. Tous les autres mois se concluent à zéro (exemple de contrôle : décembre, 2 410 800 − 2 402 650 = 8 150 = 22 750 − 14 600).",
        },
        {
          id: 'rn3-e2-q3',
          question: 'Parmi ces natures de suspens, lesquels relèvent d\u2019un simple décalage temporel, sans écriture correctrice ?',
          type: 'multi',
          options: [
            'Chèque émis non encore débité',
            'Remise de chèques non encore créditée',
            'Frais bancaires débités par la banque et non comptabilisés',
            'Prélèvement inconnu (émetteur non identifié)',
            'Virement émis en fin de mois, débité en début de mois suivant',
            'Doublon de comptabilisation d\u2019une même facture',
            'Chèque émis il y a plus de six mois, jamais présenté',
            'Virement client reçu mais non affecté au compte client',
          ],
          expected: ['0', '1', '4'],
          explanation:
            "Les décalages temporels : chèque émis non débité, remise non créditée, virement en transit — le temps bancaire fait son œuvre, l\u2019opération apparaîtra et les suspens se résorberont d\u2019eux-mêmes. Les autres natures exigent un traitement : frais non comptabilisés (écriture correctrice), prélèvement inconnu (investigation + 471), doublon (extourne ou récupération), chèque ancien non présenté (traitement de prescription à étudier), virement client non affecté (lettrage / affectation comptable).",
        },
        {
          id: 'rn3-e2-q4',
          question: 'Quel rapprochement mensuel nécessite une investigation avant conclusion ?',
          type: 'mcq',
          options: [
            'Décembre 2024 : écart brut de 8 150 € entièrement expliqué',
            'Janvier 2025 : écart brut de − 11 500 € entièrement expliqué',
            'Août 2025 : écart brut de 13 890 € entièrement expliqué par 35 800 − 12 600 − 9 310',
            'Septembre 2025 : écart brut de 13 600 € dont 5 090 € inexpliqués',
          ],
          expected: '3',
          explanation:
            "Seul septembre présente un écart résiduel : 13 600 € d\u2019écart brut, dont 8 510 € expliqués par les suspens recensés — il reste 5 090 € sans origine. Les autres mois (y compris août, riche de trois catégories de suspens) se concluent à résiduel nul. Un rapprochement n\u2019est conclu que lorsqu\u2019il ne reste aucun écart inexpliqué.",
        },
        {
          id: 'rn3-e2-q5',
          question:
            "Décrivez votre démarche face à l'écart résiduel de 5 090 € de septembre : au moins quatre actions ordonnées, avant toute conclusion. Rédigez une réponse structurée.",
          type: 'open',
          keywords: [
            'repointer',
            'doublon',
            'omission',
            'banque',
            'réclamation',
            'montant',
            'vérifier',
            'documenter',
            'escalader',
          ],
          explanation:
            "Démarche attendue : (1) repointer l\u2019intégralité des deux documents (une erreur de pointage de 5 090 € est l\u2019explication la plus fréquente) ; (2) chercher les signatures d\u2019anomalie de ce montant : écriture en double pour 5 090 €, opération débitée deux fois, omission d\u2019un décaissement ou d\u2019un encaissement ; (3) vérifier les reports : les chèques 518241 (35 800 €) et la remise Névé (12 600 €) d\u2019août ont-ils bien été débités / crédités en septembre et portés au rapprochement ? un suspens antérieur non résorbé crée exactement ce type d\u2019écart ; (4) interroger la banque par réclamation écrite avec les références (le résiduel peut provenir d\u2019un rejet, d\u2019un frais inédit ou d\u2019une écriture bancaire non libellée) ; (5) ne rien conclure ni rien passer comme écriture d\u2019équilibrage sans justification ; si l\u2019investigation s\u2019enlise, escalader au responsable avec un dossier documenté. Dans ce cas, je commencerais par le repointage complet, car c\u2019est le test le moins coûteux et le plus souvent concluant.",
        },
      ],
      risks: [
        'Conclusion prononcée avec écart résiduel non expliqué',
        'Écriture d\u2019équilibrage sans justificatif',
        'Suspens antérieur non résorbé et non suivi',
      ],
      solutionSummary:
        "Les dix rapprochements se contrôlent par le même test : écart brut (relevé − comptabilité) = somme algébrique des suspens. Neuf mois passent le test (décembre : 8 150 = 22 750 − 14 600 ; janvier : − 11 500 = 4 300 − 15 800 ; août : 13 890 = 35 800 − 12 600 − 9 310, etc.). Septembre échoue : 13 600 € d'écart brut contre 8 510 € de suspens expliqués, soit 5 090 € de résiduel inexpliqué. La démarche face à un résiduel : repointage complet, recherche de doublon ou d'omission au montant exact, vérification des suspens reportés (le chèque 518241 d'août devait se dérouler en septembre), réclamation bancaire documentée, et escalade si besoin — jamais d'écriture d'équilibrage sans pièce. Ce fil rouge illustre la règle d'or du rapprochement : la conclusion suit la preuve, pas le calendrier.",
      interviewTips: [
        "Énoncer le test d'ensemble (écart brut = somme des suspens) avant de commenter les mois : cela montre la méthode.",
        "Sur le résiduel, proposer le repointage d'abord : c'est la réponse attendue d'un praticien.",
        "Citer la vérification des reports inter-mois (août → septembre) : très apprécié car peu de candidats y pensent.",
      ],
    },

    {
      id: 'renault-ex-3-3',
      title: 'Exercice 3 · Quinze suspens à résoudre',
      cycle: 'Trésorerie',
      context:
        "À la clôture de septembre 2025 (données fictives), l'état des suspens des cinq comptes bancaires compte quinze lignes. Je dois les classer (décalage normal contre anomalie à traiter), chiffrer les écritures correctrices et définir les actions avant conclusion. Ancienneté calculée au 30 septembre 2025.",
      documents: [
        {
          kind: 'table',
          name: 'État des quinze suspens au 30/09/2025 (document fictif, montants en €)',
          columns: ['N°', 'Nature', 'Description', 'Date', 'Ancienneté', 'Montant (€)'],
          rows: [
            ['S1', 'Virement en transit', 'Virement émis au fournisseur comptabilisé le 29/09, débit bancaire attendu le 01/10', '29/09', '1 j', 47300],
            ['S2', 'Frais bancaires non comptabilisés', 'Frais de tenue de compte du trimestre (relevé du 28/09)', '28/09', '2 j', 240],
            ['S3', 'Prélèvement inconnu', 'Libellé « SEPA — XYLO CORP », aucun fournisseur de ce nom', '12/09', '18 j', 8900],
            ['S4', 'Chèque émis non débité', 'Chèque n° 518267 remis au fournisseur Verti', '15/09', '15 j', 21400],
            ['S5', 'Remise non créditée', 'Remise de chèques déposée le 29/09, crédit attendu le 01/10', '29/09', '1 j', 16850],
            ['S6', 'Doublon', 'Facture Gunnar payée deux fois : virements des 03/07 et 15/07', '15/07', '77 j', 19600],
            ['S7', 'Erreur de montant', 'Facture de 12 450 € comptabilisée et payée 12 540 €', '21/08', '40 j', 90],
            ['S8', 'Erreur de date', 'Prélèvement comptabilisé le 31/08 (période clôturée) alors qu\u2019il a été débité le 02/09', '31/08', '30 j', 31250],
            ['S9', 'Encaissement non identifié', 'Virement reçu sans libellé exploitable, donneur d\u2019ordre inconnu', '09/09', '21 j', 24500],
            ['S10', 'Mauvais compte bancaire', 'Virement fournisseur Orcom de 62 400 € comptabilisé sur le 512002, débité sur le 512001', '11/09', '19 j', 62400],
            ['S11', 'Chèque ancien non présenté', 'Chèque n° 517942 émis le 05/03, jamais présenté au paiement', '05/03', '209 j', 14700],
            ['S12', 'Remise de chèques en transit', 'Remise du 30/09, crédit attendu le 02/10', '30/09', '0 j', 28300],
            ['S13', 'Virement client non affecté', 'Règlement du client Halden reçu et comptabilisé, non lettré à son compte client', '18/09', '12 j', 37800],
            ['S14', 'Frais de change', 'Commission sur paiement fournisseur en devises (compte Banque Alpine)', '26/09', '4 j', 318],
            ['S15', 'Prélèvement SEPA rejeté', 'Prélèvement client Marges & Co rejeté pour provision insuffisante, encaissement déjà comptabilisé', '23/09', '7 j', 12450],
          ],
          note:
            "Les comptes concernés : S1, S2, S4, S5, S7, S11, S12 et S13 sur le 512001 (Banque Avenir) ; S3, S8, S9 et S15 sur le 512003 (Banque Océane) ; S6 sur le 512002 (Banque Méridienne) ; S10 entre 512001 et 512002 ; S14 sur le 512004 (Banque Alpine). Document fictif à but pédagogique.",
        },
      ],
      questions: [
        {
          id: 'rn3-e3-q1',
          question:
            'Parmi les quinze suspens, sélectionner ceux qui correspondent à un décalage temporel normal, sans écriture correctrice ni récupération à engager.',
          type: 'multi',
          options: [
            'S1 — Virement en transit (1 jour)',
            'S2 — Frais bancaires non comptabilisés (2 jours)',
            'S3 — Prélèvement inconnu (18 jours)',
            'S4 — Chèque émis non débité (15 jours)',
            'S5 — Remise non créditée (1 jour)',
            'S6 — Doublon de paiement (77 jours)',
            'S9 — Encaissement non identifié (21 jours)',
            'S11 — Chèque ancien non présenté (209 jours)',
            'S12 — Remise de chèques en transit (0 jour)',
            'S15 — Prélèvement SEPA rejeté (7 jours)',
          ],
          expected: ['0', '3', '4', '8'],
          explanation:
            "S1, S4, S5 et S12 sont des décalages temporels : virement en transit d\u2019un jour, chèque récent non présenté, remises créditées à J+1/J+2 — le temps bancaire les résorbera sans écriture. Tous les autres exigent un traitement : S2 et S14 (écritures correctrices de charges), S3 et S9 (investigation + compte d\u2019attente), S6 (récupération du trop-perçu fournisseur), S7 (régularisation de 90 €), S8 (erreur de période), S10 (reclassement entre comptes 512), S11 (chèque ancien : traitement à étudier), S13 (lettrage client), S15 (extourne de l\u2019encaissement rejeté).",
        },
        {
          id: 'rn3-e3-q2',
          question:
            'Quel est le montant total des frais à comptabiliser en charges à la suite de ce rapprochement (S2 + S14), en euros ?',
          type: 'numeric',
          expected: 558,
          explanation:
            "Frais de tenue de compte 240 € + frais de change 318 € = 558,00 €. Ces deux éléments figurent au relevé sans comptabilisation : écritures correctrices débit 627 (services bancaires) ou compte de charges de change approprié / crédit 512, pièces à l\u2019appui (relevé).",
        },
        {
          id: 'rn3-e3-q3',
          question:
            'Quel montant le fournisseur Gunnar doit-il rembourser suite au doublon S6, en euros ?',
          type: 'numeric',
          expected: 19600,
          explanation:
            "La facture a été payée deux fois (virements des 03/07 et 15/07, chacun de 19 600 €) : le trop-perçu à récupérer est de 19 600,00 € — par remboursement ou imputation sur une échéance ultérieure, après confirmation écrite du fournisseur (rapprochement de compte et lettrage des deux règlements).",
        },
        {
          id: 'rn3-e3-q4',
          question:
            "Dans le cadre de l'erreur de montant S7, quel est l'écart entre le montant payé et le montant exact de la facture, en euros ?",
          type: 'numeric',
          expected: 90,
          explanation:
            "Facture exacte : 12 450 € ; payé : 12 540 €. L\u2019écart de 90,00 € (inversion de chiffres à la saisie) est un indu en faveur du fournisseur : récupération ou imputation, avec correction de l\u2019écriture comptable si le montant a aussi été comptabilisé pour 12 540 €.",
        },
        {
          id: 'rn3-e3-q5',
          question: 'Que faire du chèque S11, émis depuis plus de six mois et jamais présenté ?',
          type: 'mcq',
          options: [
            'Ne rien faire : il finira bien par être présenté',
            'Le passer en charge irrécouvrable immédiatement',
            "Vérifier sa validité et le statut du bénéficiaire, contacter ce dernier, et selon les règles applicables procéder à l'extourne de l'écriture avec validation",
            'Modifier le montant du chèque dans le journal de banque pour solder le compte',
          ],
          expected: '2',
          explanation:
            "Un chèque émis depuis 209 jours sans présentation est une anomalie à traiter, pas un suspens à dormir : dans ce cas, je vérifierais d\u2019abord la durée de validité du chèque selon les règles bancaires applicables, je contacterais le bénéficiaire (paiement de remplacement ? chèque perdu ? dette éteinte ?), puis, si le chèque est devenu non payable ou si la dette est éteinte, j\u2019extournerais l\u2019écriture (crédit du 512 par le débit du compte de dette) avec la validation du responsable. La réponse « ne rien faire » laisse un suspens qui peut masquer une fraude ou une dette mal soldée.",
        },
        {
          id: 'rn3-e3-q6',
          question:
            "Avant de conclure sur le prélèvement inconnu S3 (8 900 €), quelles vérifications et actions menez-vous ? Rédigez une réponse structurée intégrant : pièces, interlocuteurs, écriture, ancienneté, justification.",
          type: 'open',
          keywords: [
            'pièce',
            'justificatif',
            'banque',
            'interlocuteur',
            'fournisseurs',
            'écriture',
            '471',
            'ancienneté',
            'documenter',
          ],
          explanation:
            "Dans ce cas, je commencerais par collecter les pièces : avis de prélèvement, libellé bancaire complet, mandat SEPA éventuellement signé (un prélèvement récurrent suppose un mandat antérieur). Interlocuteurs : la banque (réclamation écrite avec référence et demande d\u2019origine du mandat), le service achats et la comptabilité fournisseurs (recherche d\u2019un fournisseur « XYLO CORP », d\u2019une facture ou d\u2019un contrat correspondant), éventuellement les autres services (abonnements, assurances). Écriture : en attendant l\u2019identification, débit 471 « compte d\u2019attente » / crédit 512 pour 8 900 € — le 512 est ainsi juste et le montant reste visible au grand livre. Ancienneté : 18 jours au 30/09 ; je poserais une échéance de résolution (par exemple 15 jours) au-delà de laquelle le point est escaladé, car un mandat SEPA frauduleux laissé sans réponse se répète tous les mois. Justification et documentation : tant qu\u2019aucune origine n\u2019est documentée, la conclusion du rapprochement mentionne le suspens ouvert avec son plan de traitement ; on ne solde jamais un inconnu par une écriture d\u2019équilibrage.",
        },
      ],
      risks: [
        'Mandat SEPA frauduleux laissé actif',
        'Compte d\u2019attente utilisé comme débarras et jamais soldé',
        'Trop-perçu fournisseur jamais récupéré',
      ],
      solutionSummary:
        "Classement des quinze suspens : quatre décalages normaux sans écriture (S1 virement en transit, S4 chèque récent non débité, S5 et S12 remises en cours de crédit) ; onze anomalies à traiter : écritures correctrices de charges (S2 + S14 = 558 €), investigation avec compte d'attente (S3 prélèvement inconnu, S9 encaissement non identifié), récupération de trop-perçu (S6 : 19 600 € ; S7 : 90 €), erreur de période (S8), reclassement entre comptes 512 (S10), chèque ancien à traiter (S11 : 209 jours), lettrage client (S13), extourne d'encaissement rejeté (S15 : 12 450 €). Trois réflexes font la différence à l'oral : l'ancienneté comme critère de priorité, le compte d'attente comme outil transitoire strictement documenté, et le refus de conclure tant qu'un suspens inexpliqué subsiste. Chiffres à retenir pour l'entretien : 558 € de charges correctrices, 19 690 € de trop-perçus à récupérer (S6 + S7), un résiduel de 5 090 € à investiguer (exercice 2).",
      interviewTips: [
        "Classer les suspens en deux colonnes (décalage / anomalie) avant de détailler : la structure prime.",
        "Citer l'ancienneté de chaque suspens en jours : c'est le langage du responsable trésorerie.",
        "Rappeler que le 471 doit être soldé : un compte d'attente qui vieillit est une remarque d'audit classique.",
      ],
    },

    {
      id: 'renault-ex-3-4',
      title: 'Exercice 4 · Écritures de régularisation',
      cycle: 'Trésorerie',
      context:
        "Les anomalies détectées lors des rapprochements doivent maintenant se traduire en écritures (plan de comptes simplifié du PCG ; en IFRS, les intitulés changent mais la logique est la même). Cinq cas, puis deux contrôles de montants.",
      documents: [
        {
          kind: 'text',
          name: 'Note de service — écritures correctrices à passer (document fictif)',
          content:
            "Service trésorerie — clôture de septembre 2025\n\nCinq écritures correctrices sont à préparer avant validation du responsable :\n\nCAS 1 — Frais de tenue de compte du trimestre, débités par la banque le 28/09 : 240,00 €.\nCAS 2 — Prélèvement XYLO CORP du 12/09 : 8 900,00 €, émetteur non identifié à ce jour.\nCAS 3 — Virement reçu de 24 500,00 € le 09/09, donneur d\u2019ordre inconnu.\nCAS 4 — Virement fournisseur Orcom de 62 400,00 € débité sur le 512001 (Banque Avenir) mais comptabilisé sur le 512002 (Banque Méridienne).\nCAS 5 — Remise de chèques du 30/09 (28 300,00 €), qui sera créditée par la banque le 02/10.\n\nChaque écriture doit être accompagnée de sa pièce justificative et validée avant saisie.\n\n(Personnages et montants fictifs)",
          note: 'Document fictif à but pédagogique.',
        },
      ],
      questions: [
        {
          id: 'rn3-e4-q1',
          question: 'CAS 1 — Frais bancaires de 240 € débités par la banque et non comptabilisés. Quelle écriture passer ?',
          type: 'mcq',
          options: [
            'Débit 627 (services bancaires) / Crédit 512',
            'Débit 512 / Crédit 627',
            'Débit 627 / Crédit 411',
            'Débit 401 / Crédit 512',
          ],
          expected: '0',
          explanation:
            "La banque a prélevé les frais : la trésorerie diminue (crédit du 512) et une charge est constatée (débit du 627, services bancaires, en PCG). Dans ce cas, je joindrais le relevé comme pièce justificative.",
        },
        {
          id: 'rn3-e4-q2',
          question:
            'CAS 2 — Prélèvement inconnu de 8 900 €, en attente d\u2019identification. Quelle écriture passer ?',
          type: 'mcq',
          options: [
            'Débit 512 / Crédit 471 (compte d\u2019attente)',
            'Débit 471 (compte d\u2019attente) / Crédit 512',
            'Débit 601 / Crédit 512',
            'Aucune écriture : attendre la réponse de la banque',
          ],
          expected: '1',
          explanation:
            "Le compte 512 doit refléter le relevé : la banque a débité 8 900 €, donc le 512 diminue (crédit). Faute de connaître la nature, le montant part en compte d\u2019attente au débit (471), à solder dès identification. « Aucune écriture » laisserait le 512 faux : l\u2019attente concerne l\u2019imputation, pas la comptabilisation.",
        },
        {
          id: 'rn3-e4-q3',
          question:
            'CAS 3 — Virement reçu de 24 500 €, donneur d\u2019ordre inconnu. Quelle écriture passer ?',
          type: 'mcq',
          options: [
            'Débit 471 / Crédit 512',
            'Débit 512 / Crédit 471',
            'Débit 512 / Crédit 706',
            'Aucune écriture : attendre l\u2019identification du client',
          ],
          expected: '1',
          explanation:
            "Miroir du cas 2 : la banque a crédité le compte, donc le 512 augmente (débit) ; l\u2019origine étant inconnue, on crédite le compte d\u2019attente (471) en attendant le lettrage au bon client. Comptabiliser d\u2019emblée un produit (706) serait une erreur : rien ne prouve qu\u2019il s\u2019agisse d\u2019un produit de la période.",
        },
        {
          id: 'rn3-e4-q4',
          question:
            'CAS 4 — Virement de 62 400 € débité sur le 512001 mais comptabilisé sur le 512002. Quelle écriture passer ?',
          type: 'mcq',
          options: [
            'Débit 512002 / Crédit 512001',
            'Débit 512001 / Crédit 512002',
            'Débit 401 / Crédit 512001',
            'Aucune écriture : les deux comptes appartiennent à la même entité',
          ],
          expected: '1',
          explanation:
            "Il faut créditer le compte qui a été débité à tort (512002 : il avait été décrémenté alors que la banque n\u2019a rien débité) et débiter le compte réellement débité (512001). Écriture de reclassement interne : débit 512001 / crédit 512002 pour 62 400 € — neutralisée en consolidation, mais nécessaire pour que chaque compte soit juste individuellement, condition des rapprochements bancaires.",
        },
        {
          id: 'rn3-e4-q5',
          question:
            'CAS 5 — Remise de chèques de 28 300 € qui sera créditée le 02/10. Quelle écriture passer au 30/09 ?',
          type: 'mcq',
          options: [
            'Débit 512 / Crédit 411 pour 28 300 €',
            'Débit 627 / Crédit 512 pour 28 300 €',
            'Aucune écriture correctrice : décalage temporel, la remise est déjà comptabilisée',
            'Extourner la remise et la repasser en octobre',
          ],
          expected: '2',
          explanation:
            "La remise a déjà été comptabilisée lors du dépôt (débit 5112 remises en attente ou 512 selon la pratique / crédit 411) : le seul écart avec la banque est un délai de crédit de deux jours. C\u2019est un décalage temporel : aucun écriture correctrice, simple mention au rapprochement en suspens qui se résorbera début octobre. Passer une écriture reviendrait à compter deux fois l\u2019opération.",
        },
        {
          id: 'rn3-e4-q6',
          question:
            'Contrôle de montant : la facture de l\u2019erreur S7 avait été payée 12 540 € alors qu\u2019elle s\u2019élevait à… quel montant exact, en euros ?',
          type: 'numeric',
          expected: 12450,
          explanation:
            "12 540 − 90 = 12 450,00 €. Le montant exact de la facture est 12 450 € ; l\u2019indu de 90 € sera récupéré par avoir ou imputation, et l\u2019écriture corrigée si elle avait été saisie pour 12 540 €.",
        },
        {
          id: 'rn3-e4-q7',
          question:
            'Contrôle de montant : total des charges correctrices de services bancaires et de change à passer (cas 1 + frais de change de 318 €), en euros ?',
          type: 'numeric',
          expected: 558,
          explanation:
            "240 + 318 = 558,00 €. Les charges correctrices du rapprochement se limitent à ces deux éléments : les autres écritures (471, reclassement 512) ne transitent pas par le résultat.",
        },
      ],
      risks: [
        'Sens des écritures inversé (charge contre compte d\u2019attente)',
        'Comptabilisation d\u2019un produit sur un encaissement non identifié',
        'Double comptabilisation d\u2019une remise en transit',
      ],
      solutionSummary:
        "Cinq cas, cinq écritures distinctes : frais bancaires → débit 627 / crédit 512 ; prélèvement inconnu → débit 471 / crédit 512 (attente documentée) ; encaissement non identifié → débit 512 / crédit 471 ; mauvais compte bancaire → débit 512001 / crédit 512002 (reclassement neutre en consolidation) ; remise en transit → aucune écriture (décalage temporel déjà comptabilisé). Les contrôles de montants : facture exacte de 12 450 € (indu de 90 €) et 558 € de charges correctrices. La logique générale à retenir : le 512 doit toujours rejoindre le relevé ; ce qui manque de nature transite par le 471 avec échéance de résolution ; ce qui est déjà comptabilisé mais en attente côté banque ne se touche plus. Signal référentiel : ces comptes appartiennent au PCG ; en IFRS, les libellés diffèrent mais les trois principes ci-dessus restent exactement les mêmes.",
      interviewTips: [
        "Pour chaque cas, raisonner d'abord sur le 512 (« que dit la banque ? ») puis sur la contrepartie : le sens ne peut plus se tromper.",
        "Rappeler que le 471 est un état transitoire suivi d'une échéance : cela désamorce la question piège sur les comptes d'attente.",
        "Sur le cas 5, affirmer clairement « aucune écriture » avec la justification du décalage : l'assurance paie.",
      ],
    },
  ],

  interviewQuestions: [
    {
      question: 'Expliquez le principe du rapprochement bancaire.',
      expected:
        "Comparer le relevé de la banque et le compte 512 de la comptabilité sur une même période : pointer les opérations communes, expliquer chaque divergence (décalages temporels et anomalies), passer les écritures correctrices nécessaires et aboutir à un solde rapproché identique calculé depuis les deux documents. Il valide la sincérité du solde de banque.",
      hint: "Donner la finalité (solde fiable, détection d'anomalies) aussi bien que la mécanique.",
    },
    {
      question: "Pourquoi le solde du compte 512 diffère-t-il presque toujours du solde du relevé ?",
      expected:
        "Parce que les deux documents n'enregistrent pas les opérations au même moment : chèques émis non présentés, remises non créditées, virements en transit côté comptabilité ; frais prélevés et prélèvements non comptabilisés côté banque. Ce sont ces décalages et oublis que le rapprochement mesure.",
    },
    {
      question: 'Quelle est la différence entre un suspens normal et une anomalie ?',
      expected:
        "Le suspens normal est un décalage temporel : l'opération est correctement enregistrée d'un côté et attendue de l'autre (chèque récent, remise en cours de crédit, virement fin de mois) — il se reporte sans écriture. L'anomalie est une divergence de fond : oubli de comptabilisation, doublon, erreur de montant, de compte ou de période, opération inconnue — elle exige un traitement : écriture correctrice, extourne, réclamation.",
    },
    {
      question: 'Comment traitez-vous un prélèvement que vous ne parvenez pas à identifier ?',
      expected:
        "Je passe l'écriture débit 471 / crédit 512 pour que le compte de banque soit exact, je lance une réclamation écrite à la banque avec la référence de l'opération et je recherche côté interne (fournisseurs, mandats SEPA, abonnements). Je fixe une échéance de résolution et j'escalade au-delà : un prélèvement inconnu peut être la trace d'un mandat frauduleux, et dans ce cas il faut faire cesser les prélèvements futurs, pas seulement expliquer le passé.",
    },
    {
      question: 'Un chèque émis il y a plus de six mois n\u2019a jamais été présenté : que faites-vous ?',
      expected:
        "Je vérifie la validité du chèque selon les règles bancaires applicables, je contacte le bénéficiaire (chèque perdu, dette éteinte ?), et si le chèque n'est plus payable ou si la dette est soldée, j'extourne l'écriture avec validation. Un suspens ancien ne doit jamais rester ouvert sans traitement documenté.",
    },
    {
      question: 'Quelles écritures correctrices connaissez-vous sur un rapprochement ?',
      expected:
        "En PCG : frais bancaires (débit 627 / crédit 512), prélèvement inconnu (débit 471 / crédit 512), encaissement non identifié (débit 512 / crédit 471), reclassement entre comptes 512, extourne de doublon ou de chèque prescrit. Chaque écriture avec sa pièce ; le 471 est transitoire et suivi d'une échéance de lettrage.",
    },
    {
      question: "Que révèle un écart résiduel non expliqué en fin de rapprochement ?",
      expected:
        "Que le travail n'est pas terminé : erreur de pointage, doublon, omission, suspens antérieur non résorbé, ou opération bancaire non libellée. La démarche : repointage intégral, recherche au montant exact de l'écart, vérification des reports du mois précédent, réclamation bancaire. Aucune écriture d'équilibrage sans justification — et pas de conclusion tant que l'écart n'est pas expliqué.",
    },
    {
      question: 'À quelle fréquence faut-il rapprocher, et pourquoi ?',
      expected:
        "Au minimum mensuellement, à chaque clôture ; quotidiennement pour les comptes à fort volume en trésorerie de marché. Plus l'intervalle est court, plus les suspens sont frais et faciles à traiter, et plus vite une anomalie ou une fraude est détectée. Le fréquence se calibre sur le volume d'opérations et l'exposition au risque.",
    },
    {
      question: "Le rapprochement peut-il détecter une fraude ? Donnez un exemple.",
      expected:
        "Oui : débits inexpliqués (mandat SEPA frauduleux), virements vers des comptés inconnus, chèques émis à des bénéficiaires fantômes, détournements masqués par des comptes d'attente jamais soldés. Le rapprochement est souvent le premier contrôle qui rend visible un flux sortant sans justification comptable.",
    },
    {
      question: 'Que faites-vous lorsque la comptabilité a enregistré une opération en double ?',
      expected:
        "Je vérifie qu'il s'agit bien du même couple facture/paiement (référence, montant, dates), j'extourne l'écriture comptable en double, et si le paiement est aussi parti deux fois, j'engage la récupération du trop-perçu auprès du bénéficiaire (remboursement ou imputation). Documenter : les deux références, la confirmation du tiers, l'écriture d'extourne.",
    },
    {
      question: "PCG ou IFRS : le rapprochement change-t-il de méthode ?",
      expected:
        "Non : la procédure est identique (pointage, suspens, correcteurs, solde rapproché). Seuls les intitulés de comptes changent — 512, 627 et 471 sont des comptes du plan comptable général français ; en IFRS aucun plan n'est imposé et chaque société définit sa nomenclature. Ce qui est universel : le compte de banque doit refléter le relevé, et les montants non identifiés transitent par un compte d'attente suivi.",
    },
  ],

  followUps: [
    {
      question: "Votre rapprochement tombe juste au centime… parce que vous avez passé une écriture d'équilibrage. Qu'en dites-vous ?",
      expected:
        "Je la retire : une écriture d'équilibrage n'est pas une conclusion, c'est un cache-misère. Je reprends le pointage intégral, je cherche le montant exact de l'écart dans les doubles et les omissions, et je documente chaque hypothèse testée. Un rapprochement juste par construction est plus suspect qu'un rapprochement avec un écart résiduel assumé et investigué.",
    },
    {
      question: "Le même écart revient trois mois de suite dans vos suspens : que faites-vous ?",
      expected:
        "C'est le signe d'un suspens qui ne se résorbe pas : chèque jamais présenté, remise jamais créditée, réclamation sans réponse. Je passe en revue son ancienneté (délai de traitement dépassé), j'escalade : relance bancaire formelle, contact bénéficiaire, et traitement comptable adapté (extourne éventuelle). Un suspens récurrent doit changer de statut : du technique au litigieux.",
    },
    {
      question: "Comment vérifiez-vous que le solde initial du mois est bien le solde rapproché du mois précédent ?",
      expected:
        "En reprenant l'état de rapprochement précédent : solde rapproché de fin M = solde comptable de début M+1 ; et en vérifiant que les suspens reportés (chèques, remises) se sont effectivement déroulés dans le mois suivant. La chaîne des rapprochements est le meilleur contrôle de continuité des soldes de banque.",
    },
    {
      question: "On vous demande de rapprocher dix mois d'un coup, en rattrapage : par où commencez-vous ?",
      expected:
        "Par l'ordre chronologique strict et la continuité : décembre d'abord, puis chaque mois dans l'ordre, en reportant les suspens. Rapprocher septembre avant décembre aboutit à des écarts fantômes dus aux suspens non résorbés. Je construis aussi un tableau de synthèse (mois, écarts, suspens) pour suivre la résorption d'ensemble — comme dans l'atelier de cette mission.",
    },
    {
      question: "Un encaissement non identifié dort depuis 21 jours en compte d'attente : quelle est votre inquiétude ?",
      expected:
        "Qu'il ne soit pas un produit pour nous : virement reçu par erreur (à restituer), doublon d'un règlement déjà lettré, ou règlement dont le libellé a été mal traité (le client attend sa facture soldée). Je relance l'identification avec la banque (donneur d'ordre), je passe en revue les encaissements attendus non reçus, et je préviens le service clients : un compte client qui réclame alors que l'argent est arrivé est un litige commercial en formation.",
    },
    {
      question: "Le responsable vous demande de conclure le rapprochement de septembre malgré le résiduel de 5 090 €. Que répondez-vous ?",
      expected:
        "Je conclus avec une réserve explicite : soldes provisoires, écart résiduel de 5 090 € en investigation (repointage lancé, réclamation bancaire à émettre), avec une date de mise au propre. Refuser de signer un état faux n'est pas de la rigidité : c'est la condition de validité du contrôle — et le responsable, en général, attend précisément ce garde-fou du futur professionnel.",
    },
  ],

  evaluation: {
    criteria: [
      {
        label: 'Maîtrise de la procédure en dix étapes',
        description:
          "Déroule le rapprochement dans l'ordre : continuité des soldes, pointage, suspens, qualification, familles d'opérations, correcteurs, conclusion documentée.",
      },
      {
        label: 'Exactitude des soldes rapprochés',
        description:
          "Calcule sans erreur les soldes de fin, l'écart brut, le solde rapproché par les deux voies et vérifie leur convergence.",
      },
      {
        label: 'Qualification des suspens',
        description:
          "Distingue décalages temporels et anomalies ; utilise l'ancienneté comme critère de priorité et de risque.",
      },
      {
        label: 'Écritures correctrices pertinentes',
        description:
          "Propose le bon couple de comptes, le bon sens et la pièce justificative ; utilise le compte d'attente à bon escient et avec échéance.",
      },
      {
        label: "Gestion de l'écart résiduel",
        description:
          "Refuse les écritures d'équilibrage non justifiées ; met en œuvre repointage, recherche ciblée, réclamation bancaire et escalade.",
      },
      {
        label: 'Documentation et traçabilité',
        description:
          "Archive les rapprochements avec leurs annexes, tient l'historique des suspens et leurs statuts de résolution.",
      },
      {
        label: 'Conscience du référentiel',
        description:
          "Situe les comptes utilisés dans le PCG et sait transposer la logique en IFRS sans présenter les intitulés comme universels.",
      },
    ],
  },
}
