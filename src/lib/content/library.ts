import type { LibraryEntry } from '@/lib/types'

// =====================================================================
// AuditLab — Bibliothèque technique : 108 notions couvrant l'audit
// externe (26), l'audit interne & le contrôle interne (21), la
// comptabilité (34), la trésorerie (17) et les référentiels (10).
// Chaque notion où la règle DIFFÈRE selon le référentiel (PCG / CGNC /
// IFRS / fiscalité locale) est marquée « ⚠ Règle différente selon le
// référentiel » dans la définition. Les exemples chiffrés sont
// recalculés (vérifiés conception 2025).
// =====================================================================

const DOMAINS = {
  auditExterne: 'Audit externe',
  auditInterne: 'Audit interne & contrôle interne',
  comptabilite: 'Comptabilité',
  tresorerie: 'Trésorerie',
  referentiels: 'Référentiels',
} as const

export const libraryEntries: LibraryEntry[] = [
  // -----------------------------------------------------------------
  // AUDIT EXTERNE (26)
  // -----------------------------------------------------------------
  {
    id: 'lib-aud-01',
    domain: DOMAINS.auditExterne,
    term: 'Audit légal (commissariat aux comptes)',
    definition:
      'Mission de certification des comptes annuels confiée à un commissaire aux comptes (CAC), professionnel inscrit sur une liste officielle, dans les conditions du code de commerce (L. 821-1 et suivants). Le CAC exprime une opinion sur la régularité, la sincérité et l\u2019image fidèle des comptes : c\u2019est une mission d\u2019assurance raisonnable, fondée sur des sondages et des éléments probants — jamais une certitude absolue ni un examen exhaustif des écritures.',
    example:
      'Une SA dépasse 2 des 3 seuils (total bilan > 4 M€, CA HT > 8 M€, effectif > 50) : elle doit désigner un CAC dont la mission couvre l\u2019exercice et s\u2019achève par un rapport général aux actionnaires.',
    referentiel: 'NEP',
    seeAlso: ['Commissaire aux comptes (CAC)', 'Rapport d\u2019audit (opinion)', 'Risque d\u2019anomalies significatives (RAS)'],
  },
  {
    id: 'lib-aud-02',
    domain: DOMAINS.auditExterne,
    term: 'Audit contractuel',
    definition:
      'Audit réalisé dans le cadre d\u2019un contrat (due diligence d\u2019acquisition, audit d\u2019acquisition, revue limitée, audit de conformité contractuelle) : l\u2019étendue des travaux, le référentiel d\u2019intervention et le format du rapport sont fixés par la lettre de mission, et non par la loi. Il obéit aux normes professionnelles convenues (souvent ISA/ISAE à l\u2019international) mais ne confère pas l\u2019assurance légale du commissariat aux comptes.',
    example:
      'Dans une due diligence avant acquisition, l\u2019auditeur relit trois exercices de comptes, teste le BFR et les engagements hors bilan, et rend un rapport à usage restreint destiné au seul acquéreur.',
    referentiel: ' transversal',
    seeAlso: ['Audit légal (commissariat aux comptes)', 'Élément probant'],
  },
  {
    id: 'lib-aud-03',
    domain: DOMAINS.auditExterne,
    term: 'Commissaire aux comptes (CAC)',
    definition:
      'Professionnel inscrit sur la liste officielle près les cours d\u2019appel, soumis à un code de déontologie, dont la mission légale comprend : certifier les comptes annuels, signaler les irrégularités et inexactitudes, révéler les faits délictueux au procureur de la République, vérifier la sincérité et la concordance des informations données aux actionnaires. Il est soumis à des règles strictes d\u2019indépendance et placé sous la surveillance du H3C et des compagnies régionales.',
    example:
      'Sur découverte d\u2019un détournement de fonds par un cadre, le CAC consigne l\u2019anomalie, en informe les dirigeants et le comité, et établit les obligations de révélation au ministère public le cas échéant.',
    referentiel: 'NEP',
    seeAlso: ['Indépendance du commissaire aux comptes', 'Révélation des faits délictueux', 'Vérifications spécifiques et rapport spécial'],
  },
  {
    id: 'lib-aud-04',
    domain: DOMAINS.auditExterne,
    term: 'NEP (norme d\u2019exercice professionnel)',
    definition:
      'Normes d\u2019exercice professionnel du commissariat aux comptes en France : élaborées sous l\u2019égide du H3C et homologuées par arrêté du ministre de la Justice, elles organisent la mission légale de bout en bout (acceptation, plan de mission, seuil de signification, éléments probants, confirmations externes, documentation, rapport). Leur numérotation reprend largement la structure des ISA (NEP 320 : seuil de signification ; NEP 500 : éléments probants ; NEP 505 : confirmations externes ; NEP 530 : échantillonnage).',
    example:
      'La NEP 505 encadre la circularisation bancaire : la demande part avec l\u2019accord de la société auditée mais la réponse revient directement entre les mains du CAC, sans transiter par le client.',
    referentiel: 'NEP',
    seeAlso: ['ISA (normes internationales d\u2019audit)', 'Élément probant', 'Seuil de signification'],
  },
  {
    id: 'lib-aud-05',
    domain: DOMAINS.auditExterne,
    term: 'Élément probant',
    definition:
      'Information recueillie par l\u2019auditeur pour fonder son opinion : elle doit être suffisante (quantité) et appropriée (qualité — pertinence et fiabilité de la source). Hiérarchie de fiabilité : un document obtenu directement d\u2019un tiers (relevé bancaire, réponse de circularisation, acte notarié) pèse plus qu\u2019un document interne produit par l\u2019entité ; une preuve générée par un système fiable et contrôlé pèse plus qu\u2019une donnée saisie manuellement. Un faisceau d\u2019éléments convergents vaut mieux qu\u2019une pièce isolée.',
    example:
      'Un rapprochement bancaire préparé par le client est moins probant que le relevé bancaire obtenu directement de la banque par circularisation NEP 505 ; l\u2019auditeur croise les deux.',
    referentiel: 'NEP',
    seeAlso: ['Confirmations externes (circularisation)', 'Tests substantifs', 'Échantillonnage en audit'],
  },
  {
    id: 'lib-aud-06',
    domain: DOMAINS.auditExterne,
    term: 'Seuil de signification',
    definition:
      'Montant au-delà duquel les anomalies, prises individuellement ou en cumul, sont susceptibles d\u2019influencer le jugement économique des utilisateurs des comptes. Fixé en planification à partir d\u2019un critère pertinent (usages courants : environ 1 % du total bilan, 0,5–1 % du CA, 5 % du résultat courant avant impôt), il est réévalué en fin de mission pour conclure sur l\u2019incidence des anomalies non corrigées. À distinguer du seuil de remontée (inférieur) déclenchant la correction des anomalies détectées.',
    example:
      'Total bilan de 2 000 000 € → seuil retenu à 1 % = 20 000 €. Un cumul d\u2019anomalies de 6 600 € (PCA non passé) reste sous le seuil mais doit être documenté et proposé à la correction.',
    formula: 'Seuil ≈ 1 % du total bilan — ou 5 % du résultat courant avant impôt, selon le critère jugé pertinent',
    referentiel: 'NEP',
    seeAlso: ['Anomalie significative (et cumul des anomalies)', 'Plan de mission et programme de travail', 'Risque d\u2019anomalies significatives (RAS)'],
  },
  {
    id: 'lib-aud-07',
    domain: DOMAINS.auditExterne,
    term: 'Risque d\u2019anomalies significatives (RAS)',
    definition:
      'Risque que les comptes contiennent des anomalies supérieures au seuil de signification. Il se décompose en risque inhérent (sensibilité naturelle du compte ou de l\u2019activité), risque de contrôle (défaut d\u2019efficacité du contrôle interne) et risque de non-détection (procédures d\u2019audit non concluantes). Le modèle multiplicatif guide l\u2019allocation des heures : plus les risques inhérent et de contrôle sont élevés, plus les travaux substantifs doivent être renforcés pour maintenir un risque de non-détection faible.',
    formula: 'Risque d\u2019audit = Risque inhérent × Risque de contrôle × Risque de non-détection',
    example:
      'Comptes de charges à l\u2019étranger, clôtures décentralisées et contrôle interne faible : la multiplication RI × RC élevée impose des tests de détail renforcés sur les charges de fin d\u2019exercice.',
    referentiel: 'NEP',
    seeAlso: ['Approche par les risques', 'Contrôle interne en audit légal', 'Seuil de signification'],
  },
  {
    id: 'lib-aud-08',
    domain: DOMAINS.auditExterne,
    term: 'Approche par les risques',
    definition:
      'Démarche qui oriente la mission vers les zones où le risque d\u2019anomalies significatives est le plus élevé : compréhension de l\u2019entité et de son environnement, évaluation des risques inhérents et de contrôle par cycle, identification des risques significatifs (estimations, fraude, transactions inhabituelles), puis conception de procédures répondant spécifiquement à chaque risque. C\u2019est le cœur de la planification (NEP 315 et NEP 330).',
    example:
      'Un cycle achats-fournisseurs fragmenté entre trois entités et des factures non parvenues volumineuses : l\u2019équipe renforce les tests de détail sur les FNP au 31/12.',
    referentiel: 'NEP',
    seeAlso: ['Risque d\u2019anomalies significatives (RAS)', 'Procédures analytiques (revue analytique)', 'Cycles d\u2019audit'],
  },
  {
    id: 'lib-aud-09',
    domain: DOMAINS.auditExterne,
    term: 'Tests de procédures (tests des contrôles)',
    definition:
      'Procédures destinées à évaluer l\u2019efficacité de la conception et du fonctionnement des contrôles internes pertinents pour l\u2019audit, sur la période couverte. Si les contrôles testés par sondage se révèlent fiables (aucune déviation ou déviation tolérée), l\u2019auditeur peut alléger les tests substantifs et s\u2019appuyer sur les contrôles — notamment automatisés ; sinon il bascule sur une approche exclusivement substantive. Un contrôle non documenté ou non tracé ne peut pas être testé.',
    example:
      'Test du contrôle automatique de rapprochement commande/réception/facture (three-way match) sur 25 factures d\u2019un mois : zéro écart → l\u2019auditeur réduit ses vérifications de détail sur les prix et quantités.',
    referentiel: 'NEP',
    seeAlso: ['Tests substantifs', 'Échantillonnage en audit', 'Contrôle interne en audit légal'],
  },
  {
    id: 'lib-aud-10',
    domain: DOMAINS.auditExterne,
    term: 'Tests substantifs',
    definition:
      'Procédures destinées à détecter directement les anomalies au niveau des soldes et des transactions : tests de détail (inspection des pièces, vérification de calcul, confirmations externes, observation physique) et procédures analytiques substantives. Ils apportent des éléments probants sur les assertions elles-mêmes, contrairement aux tests de procédures qui évaluent le système ; ils restent la base lorsque le contrôle interne ne peut pas être utilisé.',
    example:
      'Vérifier l\u2019apurement d\u2019un compte client en rapprochant chaque règlement de la facture correspondante (lettrage) et en analysant les soldes non lettrés de plus de 90 jours.',
    referentiel: 'NEP',
    seeAlso: ['Tests de procédures (tests des contrôles)', 'Élément probant', 'Procédures analytiques (revue analytique)'],
  },
  {
    id: 'lib-aud-11',
    domain: DOMAINS.auditExterne,
    term: 'Procédures analytiques (revue analytique)',
    definition:
      'Analyses de tendances, de ratios et de cohérence entre données comptables et données physiques, opérationnelles ou sectorielles, pour identifier les variations anormales et orienter les travaux. Utilisées à deux moments : en phase d\u2019évaluation des risques (approche par les risques) et en revue finale de cohérence d\u2019ensemble avant le rapport. Une variation inexpliquée n\u2019est pas une anomalie en soi mais un signal à creuser.',
    example:
      'Marge brute passée de 32 % à 24 % alors que les prix de vente ont augmenté : la revue analytique oriente les travaux vers la valorisation des stocks et le cut-off des ventes.',
    referentiel: 'NEP',
    seeAlso: ['Risque d\u2019anomalies significatives (RAS)', 'Tests substantifs', 'Seuil de signification'],
  },
  {
    id: 'lib-aud-12',
    domain: DOMAINS.auditExterne,
    term: 'Confirmations externes (circularisation)',
    definition:
      'Demande d\u2019information envoyée directement à un tiers (banque, client, fournisseur, avocat, confrère) avec l\u2019accord de l\u2019entité auditée, la réponse revenant directement à l\u2019auditeur (NEP 505). C\u2019est l\u2019un des éléments probants les plus fiables pour l\u2019existence des soldes et l\u2019exhaustivité des dettes et emprunts ; une absence de réponse appelle des procédures alternatives, une réponse contradictoire une investigation.',
    example:
      'Circularisation des 5 plus gros clients (80 % du solde) + sondage sur le solde : un client conteste la facture F-315 → l\u2019auditeur vérifie les pièces de vente et identifie un avoir à émettre ou un décalage de cut-off.',
    referentiel: 'NEP',
    seeAlso: ['Élément probant', 'Lettrage', 'Créance douteuse (et irrécouvrable)'],
  },
  {
    id: 'lib-aud-13',
    domain: DOMAINS.auditExterne,
    term: 'Échantillonnage en audit',
    definition:
      'Sélection d\u2019une partie d\u2019une population (factures, écritures, rapprochements) pour tirer une conclusion sur l\u2019ensemble : sondage en attributs (taux de déviation, pour les tests de contrôles) ou en variables (montants, pour les tests de détail). Méthodes de sélection : aléatoire, systématique (pas constant), ou monétaire (probabilité de sélection proportionnelle au montant — le haut de bilan sort plus souvent). Le risque d\u2019échantillonnage (conclure à tort à l\u2019absence d\u2019anomalie) doit être évalué et documenté (NEP 530).',
    example:
      'Population de 4 200 factures d\u2019achat : sélection monétaire de 60 factures couvrant environ 40 % de la valeur ; l\u2019anomalie extrapolée reste sous le seuil de signification.',
    referentiel: 'NEP',
    seeAlso: ['Tests de procédures (tests des contrôles)', 'Tests substantifs', 'Seuil de signification'],
  },
  {
    id: 'lib-aud-14',
    domain: DOMAINS.auditExterne,
    term: 'Cycles d\u2019audit',
    definition:
      'Découpage de la mission en blocs homogènes reliant un processus métier et ses comptes : ventes-clients, achats-fournisseurs, paie-personnel, immobilisations, stocks et en-cours, trésorerie, capitaux propres, provisions et estimations. Chaque cycle est traité par une feuille de mission dédiée, avec ses risques, ses assertions ciblées et son programme de travail.',
    example:
      'Cycle paie contrôlé par la cohérence effectif/masse salariale, le test de recalcul d\u2019un échantillon de bulletins et le rapprochement avec les déclarations sociales (DSN) et les comptes.',
    referentiel: ' transversal',
    seeAlso: ['Feuille de mission', 'Assertions', 'Approche par les risques'],
  },
  {
    id: 'lib-aud-15',
    domain: DOMAINS.auditExterne,
    term: 'Feuille de mission',
    definition:
      'Document de travail (working paper) qui trace le travail effectué sur un compte ou un cycle : objectifs et assertions visés, description des contrôles testés, échantillon et méthode de sélection, travaux détaillés, anomalies relevées, conclusions et renvois vers les pièces. Un dossier de travail de qualité permet à un réviseur indépendant de reconstituer la logique du travail sans explication complémentaire — c\u2019est le test de « lisibilité extérieure ».',
    example:
      'La feuille de mission « clients » contient le lettrage, la circularisation, le balance âgée, le test de la dépréciation et la conclusion : « solde certifié sans anomalie significative ».',
    referentiel: 'NEP',
    seeAlso: ['Dossier permanent / dossier de la période', 'Cycles d\u2019audit', 'Élément probant'],
  },
  {
    id: 'lib-aud-16',
    domain: DOMAINS.auditExterne,
    term: 'Dossier permanent / dossier de la période',
    definition:
      'Le dossier permanent regroupe les documents stables d\u2019un exercice à l\u2019autre : statuts, organigrammes, description des activités, contrats longs (emprunts, bail), historique des anomalies et comptes des exercices précédents. Le dossier de la période (ex-intérim) contient les travaux de l\u2019exercice : plan de mission, feuilles, synthèse et rapport. La documentation obéit à la NEP 230 : contenu suffisant, daté, validé et archivé.',
    example:
      'Le dossier permanent évite de re-documenter chaque année la convention de compte bancaire ; le dossier de la période contient la circularisation bancaire de l\u2019exercice.',
    referentiel: 'NEP',
    seeAlso: ['Feuille de mission', 'Plan de mission et programme de travail'],
  },
  {
    id: 'lib-aud-17',
    domain: DOMAINS.auditExterne,
    term: 'Plan de mission et programme de travail',
    definition:
      'Documents de planification : le plan de mission décrit la stratégie d\u2019ensemble (seuil de signification, risques significatifs, approche par cycle, calendrier de intervention, équipe et budget d\u2019heures) ; le programme de travail décline, cycle par cycle, les procédures à mettre en œuvre et les assertions visées. Révisés en cours de mission si les risques évoluent — un plan figé face à un événement majeur est une faute de pilotage.',
    example:
      'Plan de mission : seuil 20 000 €, risques significatifs « cut-off ventes » et « dépréciation des créances », calendrier d\u2019intervention sur deux semaines de janvier.',
    referentiel: 'NEP',
    seeAlso: ['Seuil de signification', 'Approche par les risques', 'Feuille de mission'],
  },
  {
    id: 'lib-aud-18',
    domain: DOMAINS.auditExterne,
    term: 'Déclaration de direction',
    definition:
      'Lettre signée par la direction en fin de mission par laquelle elle reconnaît sa responsabilité sur l\u2019établissement des comptes et confirme par écrit les déclarations significatives données oralement : exhaustivité des procès et litiges, absence de fraude impliquant la direction, projets de cession d\u2019actifs, transactions avec les parties liées. Elle ne remplace jamais un élément probant mais borne les responsabilités respectives de la direction et de l\u2019auditeur.',
    example:
      'La direction confirme qu\u2019aucun litige salarial autre que celui provisionné 40 000 € n\u2019est en cours — l\u2019auditeur confronte cette déclaration à la circularisation de l\u2019avocat.',
    referentiel: 'NEP',
    seeAlso: ['Élément probant', 'Rapport d\u2019audit (opinion)', 'Provision pour risques et charges'],
  },
  {
    id: 'lib-aud-19',
    domain: DOMAINS.auditExterne,
    term: 'Assertions',
    definition:
      'Critères implicites sur lesquels porte l\u2019opinion : existence ou réalité (l\u2019actif existe à la clôture), droits et obligations (l\u2019entité détient le droit / porte la dette), exhaustivité (rien n\u2019a été omis), évaluation et imputation (les montants sont correctement chiffrés), rattachement / cut-off (enregistrement dans la bonne période), présentation et intelligibilité. Chaque procédure d\u2019audit vise une ou plusieurs assertions — savoir dire « ce contrôle teste quelle assertion » est une question d\u2019entretien classique.',
    example:
      'La circularisation bancaire cible l\u2019existence du solde et l\u2019exhaustivité des emprunts ; le test de cut-off cible le rattachement des ventes au bon exercice.',
    referentiel: 'NEP',
    seeAlso: ['Cut-off (rattachement des opérations à l\u2019exercice)', 'Élément probant', 'Confirmations externes (circularisation)'],
  },
  {
    id: 'lib-aud-20',
    domain: DOMAINS.auditExterne,
    term: 'Contrôle interne en audit légal',
    definition:
      'Prise de connaissance obligatoire du contrôle interne de l\u2019audité (NEP 315 : compréhension de l\u2019entité et de son environnement) pour évaluer le risque de contrôle et calibrer la nature des travaux : contrôles automatisés fiables → allègement possible des tests substantifs ; environnement de contrôle faible → approche substantive renforcée. Point clé en entretien : l\u2019auditeur légal n\u2019émet pas d\u2019opinion sur le contrôle interne, il l\u2019utilise — contrairement à l\u2019auditeur interne.',
    example:
      'Séparation des tâches inexistante dans une PME (le comptable crée les fournisseurs et prépare les paiements) : le CAC renonce aux tests de procédures et vérifie en détail les 20 plus gros paiements.',
    referentiel: 'NEP',
    seeAlso: ['Tests de procédures (tests des contrôles)', 'Audit interne', 'Risque d\u2019anomalies significatives (RAS)'],
  },
  {
    id: 'lib-aud-21',
    domain: DOMAINS.auditExterne,
    term: 'Indépendance du commissaire aux comptes',
    definition:
      'Exigence déontologique : le CAC ne doit présenter aucun lien financier, familial ou professionnel susceptible d\u2019altérer son objectivité. Incompatibilités principales : missions de conseil et de comptabilité chez le client, mandats sociaux, détention d\u2019intérêts significatifs, liens familiaux avec les dirigeants. La rotation des associés signataires et l\u2019encadrement des honoraires complètent le dispositif ; le contrôle s\u2019exerce par le H3C. En cabinet, des logiciels d\u2019indépendance vérifient les liens avant chaque acceptation de mission.',
    example:
      'Un CAC ne peut certifier les comptes d\u2019une société dont il a tenu ou révisé la comptabilité au cours des exercices couverts par sa mission.',
    referentiel: 'NEP',
    seeAlso: ['Commissaire aux comptes (CAC)', 'Audit contractuel'],
  },
  {
    id: 'lib-aud-22',
    domain: DOMAINS.auditExterne,
    term: 'Anomalie significative (et cumul des anomalies)',
    definition:
      'Écart par rapport au référentiel comptable applicable, quantifié et qualifié, relevé par l\u2019auditeur. Les anomalies non corrigées sont cumulées et comparées au seuil de signification — et au seuil de remontée, inférieur, déclenchant la correction des anomalies détectées même mineures. Certaines anomalies restent significatives par nature (fraude, non-conformité, window dressing) même sous le seuil : le qualitatif pèse autant que le quantitatif.',
    example:
      'Anomalies non corrigées cumulées de 6 600 € sous un seuil de 20 000 € : opinion sans réserve possible, mais demande écrite de correction et documentation précise de chaque écart.',
    referentiel: 'NEP',
    seeAlso: ['Seuil de signification', 'Rapport d\u2019audit (opinion)', 'Élément probant'],
  },
  {
    id: 'lib-aud-23',
    domain: DOMAINS.auditExterne,
    term: 'Rapport d\u2019audit (opinion)',
    definition:
      'Expression de l\u2019opinion du CAC : certification sans réserve (comptes réguliers, sincères et donnant image fidèle), certification avec réserve(s) (anomalie significative mais localisée, ou limitation aux travaux), refus de certifier (anomalies significatives et généralisées) ou impossibilité d\u2019exprimer une opinion (limitations généralisées). Le rapport justifie les motivations et chiffre l\u2019incidence des réserves lorsque c\u2019est possible.',
    example:
      'Stocks invérifiables (inventaire inaccessible, absence de valorisation fiable) représentant 40 % de l\u2019actif : le CAC refuse de certifier, l\u2019incidence étant à la fois significative et généralisée.',
    referentiel: 'NEP',
    seeAlso: ['Anomalie significative (et cumul des anomalies)', 'Seuil de signification', 'Vérifications spécifiques et rapport spécial'],
  },
  {
    id: 'lib-aud-24',
    domain: DOMAINS.auditExterne,
    term: 'Vérifications spécifiques et rapport spécial',
    definition:
      'Missions annexes du CAC : vérifier la sincérité et la concordance avec les comptes annuels des informations données dans le rapport de gestion du conseil et dans les documents adressés aux actionnaires (rapport général, partie « vérifications spécifiques ») ; signaler au conseil les irrégularités et inexactitudes relevées (rapport spécial présenté à l\u2019assemblée) ; vérifier le respect de l\u2019égalité entre actionnaires (droits de même catégorie).',
    example:
      'Le rapport de gestion annonce une progression du résultat que les comptes ne confirment pas : le CAC le signale dans ses vérifications spécifiques.',
    referentiel: 'NEP',
    seeAlso: ['Commissaire aux comptes (CAC)', 'Rapport d\u2019audit (opinion)'],
  },
  {
    id: 'lib-aud-25',
    domain: DOMAINS.auditExterne,
    term: 'Révélation des faits délictueux',
    definition:
      'Obligation légale du CAC de révéler au procureur de la République les faits délictueux dont il a eu connaissance à l\u2019occasion de sa mission légale (code de commerce, L. 823-12), sauf exceptions limitées liées au caractère manifestement non intentionnel de certains faits. Cette révélation, effectuée par écrit et sans égard aux sanctions internes, ne peut engager sa responsabilité civile ; elle ne couvre pas les faits appris à l\u2019occasion de missions autres que la certification. Le secret professionnel s\u2019efface devant cette obligation.',
    example:
      'Découverte de fausses factures émises volontairement : le CAC, après avoir confronté la direction, rédige une révélation écrite au procureur en plus de son incidence sur l\u2019opinion.',
    referentiel: 'NEP',
    seeAlso: ['Commissaire aux comptes (CAC)', 'Anomalie significative (et cumul des anomalies)'],
  },
  {
    id: 'lib-aud-26',
    domain: DOMAINS.auditExterne,
    term: 'Audit des estimations comptables (NEP 540)',
    definition:
      'Les estimations — provisions pour litiges, dépréciations de créances, durées d\u2019amortissement, avancement des contrats, pertes à l\u2019achèvement — dépendent de jugements et concentrent donc le risque d\u2019audit. L\u2019auditeur teste la méthode et sa cohérence avec les exercices antérieurs, les hypothèses et données sources, l\u2019exhaustivité des situations, et réalise un test rétrospectif : comparer les estimations de l\u2019an passé aux réalisations pour mesurer le biais éventuel de la direction.',
    example:
      'Provision pour litige estimée par la direction à 40 000 € : l\u2019auditeur la confronte à la réponse de l\u2019avocat (circularisation) qui évalue une probabilité élevée de condamnation entre 30 000 et 60 000 € — estimation dans la fourchette, jugement documenté.',
    referentiel: 'NEP',
    seeAlso: ['Provision pour risques et charges', 'Dépréciation des créances', 'Confirmations externes (circularisation)'],
  },

  // -----------------------------------------------------------------
  // AUDIT INTERNE & CONTRÔLE INTERNE (21)
  // -----------------------------------------------------------------
  {
    id: 'lib-ai-01',
    domain: DOMAINS.auditInterne,
    term: 'Audit interne',
    definition:
      'Activité indépendante et objective d\u2019assurance et de conseil qui évalue et améliore l\u2019efficacité du gouvernement d\u2019entreprise, de la gestion des risques et des dispositifs de contrôle (normes IIA). Il rapporte fonctionnellement au comité d\u2019audit et à la direction générale, travaille par missions planifiées sur les risques, et émet des recommandations suivies dans le temps. Différence clé avec l\u2019audit externe : il ne certifie pas les comptes et travaille pour l\u2019organisation, pas pour les tiers.',
    example:
      'Mission « procédure achats » : cartographie du processus, tests de 40 dossiers d\u2019achat, constats sur l\u2019absence de bon de commande, plan d\u2019action suivi en comité d\u2019audit trois mois plus tard.',
    referentiel: ' transversal',
    seeAlso: ['Les trois lignes de maîtrise', 'Constat et recommandation d\u2019audit interne', 'Audit légal (commissariat aux comptes)'],
  },
  {
    id: 'lib-ai-02',
    domain: DOMAINS.auditInterne,
    term: 'Les trois lignes de maîtrise',
    definition:
      'Modèle d\u2019organisation des contrôles (IIA) : 1re ligne = opérationnels et managers, propriétaires du risque, qui exécutent les autocontrôles ; 2e ligne = fonctions de pilotage et de conformité (gestion des risques, qualité, sécurité) qui outillent et contrôlent la première ligne ; 3e ligne = audit interne, indépendant, qui évalue l\u2019ensemble du dispositif et rend compte au comité d\u2019audit. Savoir situer un service (trésorerie = 1re ligne, contrôle de gestion = 2e ligne, audit interne = 3e ligne) est un classique d\u2019entretien.',
    referentiel: ' transversal',
    seeAlso: ['Audit interne', 'Autocontrôle de premier niveau', 'Gouvernement d\u2019entreprise'],
  },
  {
    id: 'lib-ai-03',
    domain: DOMAINS.auditInterne,
    term: 'Contrôle interne',
    definition:
      'Dispositif conçu et mis en œuvre par la direction et le personnel pour fournir une assurance raisonnable quant à la maîtrise des risques et l\u2019atteinte des objectifs : fiabilité de l\u2019information (notamment comptable et financière), protection du patrimoine, efficacité des opérations, respect des lois et règlements. La France n\u2019impose pas de définition légale unique du contrôle interne des sociétés non cotées ; on s\u2019appuie sur les cadres COSO et, pour les émetteurs cotés, sur le dispositif décrit par l\u2019AMF.',
    example:
      'Dans une PME, le contrôle interne se résume parfois à la revue mensuelle du dirigeant : c\u2019est déjà un contrôle, mais incomplet au regard des cinq composantes COSO.',
    referentiel: ' transversal',
    seeAlso: ['COSO', 'Activités de contrôle (préventives et détectives)', 'Dispositif de contrôle interne AMF (sociétés cotées)'],
  },
  {
    id: 'lib-ai-04',
    domain: DOMAINS.auditInterne,
    term: 'COSO',
    definition:
      'Cadre de référence international du contrôle interne (Committee of Sponsoring Organizations of the Treadway Commission) : cinq composantes interdépendantes — environnement de contrôle (éthique, compétence, organisation), évaluation des risques, activités de contrôle, information et communication, pilotage (monitoring) — déployées sur quatre catégories d\u2019objectifs : stratégiques, opérationnels, reporting et conformité. Référence commune pour décrire et évaluer un dispositif de contrôle interne.',
    example:
      'Une évaluation COSO d\u2019un processus achats : environnement de contrôle solide (code de conduite) mais pilotage faible (aucun suivi des écarts) → plan d\u2019action sur la composante « pilotage ».',
    referentiel: ' transversal',
    seeAlso: ['Contrôle interne', 'Matrice des risques et des contrôles', 'Dispositif de contrôle interne AMF (sociétés cotées)'],
  },
  {
    id: 'lib-ai-05',
    domain: DOMAINS.auditInterne,
    term: 'Cartographie des risques',
    definition:
      'Inventaire hiérarchisé des risques de l\u2019organisation, évalués en probabilité d\u2019occurrence et en impact (grille d\u2019évaluation, souvent à deux entrées), avec pour chaque risque un propriétaire et les dispositifs de maîtrise existants. C\u2019est la matière première du plan d\u2019audit interne (on audite d\u2019abord les zones critiques) et du dispositif de contrôle interne ; elle doit être actualisée périodiquement et partagée.',
    example:
      'Risque « erreur de saisie des factures fournisseurs » noté probabilité 4/5 et impact 3/5 : criticité 12/25 → priorité haute, contrôle renforcé sur le rapprochement BL/facture.',
    formula: 'Criticité d\u2019un risque = Probabilité d\u2019occurrence × Impact',
    referentiel: ' transversal',
    seeAlso: ['Matrice des risques et des contrôles', 'Risque inhérent et risque de contrôle', 'Échelle de maturité du contrôle interne'],
  },
  {
    id: 'lib-ai-06',
    domain: DOMAINS.auditInterne,
    term: 'Activités de contrôle (préventives et détectives)',
    definition:
      'Politiques et procédures qui réduisent les risques à un niveau accepté : contrôles préventifs qui empêchent l\u2019erreur (validation à quatre yeux, masque de saisie bloquant, habilitations) ou contrôles détectifs qui la révèlent (rapprochement bancaire mensuel, revue des anomalies, audit). Ils peuvent être manuels ou automatisés : l\u2019automatisation fiabilise (constance, piste d\u2019audit, pas de fatigue) mais ne dispense pas de contrôler les paramétrages et les droits d\u2019accès.',
    example:
      'Le rapprochement bancaire mensuel est un contrôle détectif ; l\u2019impossibilité de créer un fournisseur sans double validation est un contrôle préventif automatisé.',
    referentiel: ' transversal',
    seeAlso: ['Séparation des tâches', 'Autocontrôle de premier niveau', 'Test de conception et d\u2019efficacité opérationnelle'],
  },
  {
    id: 'lib-ai-07',
    domain: DOMAINS.auditInterne,
    term: 'Séparation des tâches',
    definition:
      'Principe central du contrôle interne : celui qui exprime le besoin et commande, celui qui réceptionne, celui qui comptabilise et celui qui paie doivent être des personnes distinctes — sinon la fraude devient possible et indétectable (fournisseur fictif, détournement de règlement). Quand l\u2019effectif ne permet pas la séparation, des contrôles compensatoires sont mis en place (revue du dirigeant, séparation physique des supports, réclamations fournisseurs).',
    example:
      'Un salarié qui crée le fournisseur, valide la facture et prépare le virement cumule trois pouvoirs : contrôle compensatoire — revue mensuelle par le dirigeant du journal des paiements avec justification pièce à pièce.',
    referentiel: ' transversal',
    seeAlso: ['Procédure d\u2019engagement de dépense', 'Activités de contrôle (préventives et détectives)', 'RACI'],
  },
  {
    id: 'lib-ai-08',
    domain: DOMAINS.auditInterne,
    term: 'Piste d\u2019audit',
    definition:
      'Capacité à reconstituer chronologiquement l\u2019origine, la saisie, la modification et l\u2019imputation d\u2019une opération : qui a fait quoi, quand, sur quel justificatif. En comptabilité informatisée, elle suppose des enregistrements chronologiques, datés, nominatifs et irréversibles (pas de suppression : seule la contre-passion corrige une erreur). C\u2019est à la fois une exigence réglementaire, un objectif de contrôle interne et l\u2019outil quotidien de l\u2019auditeur qui remonte une écriture vers sa pièce.',
    example:
      'Depuis une écriture douteuse de 3 500 €, l\u2019auditeur remonte l\u2019écriture → la facture scannée → le bon de commande → l\u2019habilitation du valideur : la piste d\u2019audit est complète.',
    referentiel: ' transversal',
    seeAlso: ['Journal', 'Élément probant', 'Activités de contrôle (préventives et détectives)'],
  },
  {
    id: 'lib-ai-09',
    domain: DOMAINS.auditInterne,
    term: 'Matrice des risques et des contrôles',
    definition:
      'Tableau croisant, pour chaque étape d\u2019un processus : le risque associé, sa criticité, les contrôles en place (préventif ou détectif, manuel ou automatisé, fréquence, preuve disponible, responsable). C\u2019est le livrable central d\u2019une mission d\u2019audit interne et la base du test des contrôles : pas de contrôle tracé = pas de contrôle testable. Elle objective aussi les zones sans aucun contrôle (cases vides).',
    example:
      'Étape « création fournisseur » : risque de doublon/fraude, contrôle préventif automatisé de contrôle des coordonnées bancaires (IBAN) avec alerte — testable sur l\u2019écran d\u2019alerte et le journal des rejets.',
    referentiel: ' transversal',
    seeAlso: ['Cartographie des risques', 'Test de conception et d\u2019efficacité opérationnelle', 'Procédure d\u2019engagement de dépense'],
  },
  {
    id: 'lib-ai-10',
    domain: DOMAINS.auditInterne,
    term: 'Constat et recommandation d\u2019audit interne',
    definition:
      'Le constat décrit l\u2019écart entre la norme de référence (procédure, bonne pratique, cadre réglementaire) et la réalité observée, avec sa cause et sa conséquence — si possible chiffrée. La recommandation propose une action, un responsable et un délai. Un constat de qualité est factuel (échantillon daté, pièces citées), discuté en réunion de clôture avec les audités avant publication du rapport : la contradiction améliore l\u2019exactitude et l\u2019acceptation.',
    example:
      'Constat : « sur 40 dossiers d\u2019achat testés, 12 ne comportent pas de bon de commande signé préalablement (risque : engagement de dépense non autorisé) ; recommandation : rendre le BC obligatoire dans l\u2019ERP au-delà de 1 000 €, responsable : direction des achats, délai : 3 mois. »',
    referentiel: ' transversal',
    seeAlso: ['Suivi des recommandations', 'Échelle de maturité du contrôle interne', 'Chantier d\u2019audit interne (phases)'],
  },
  {
    id: 'lib-ai-11',
    domain: DOMAINS.auditInterne,
    term: 'Suivi des recommandations',
    definition:
      'Boucle de gouvernance qui donne sa valeur à l\u2019audit interne : chaque recommandation reçoit un plan d\u2019action daté et un propriétaire ; l\u2019audit interne suit l\u2019état de mise en œuvre (mis en place, en cours, abandonné/risque accepté par la direction) et remonte au comité d\u2019audit les retards et les risques acceptés. Une recommandation sans suivi ni relance est une recommandation morte — point classique d\u2019entretien sur la valeur ajoutée réelle de la fonction.',
    example:
      'Suivi trimestriel : 8 recommandations sur 10 closes, une en retard de 6 mois (séparation des tâches en paie) escaladée au comité d\u2019audit, une risque accepté et documenté.',
    referentiel: ' transversal',
    seeAlso: ['Constat et recommandation d\u2019audit interne', 'Gouvernement d\u2019entreprise', 'Chantier d\u2019audit interne (phases)'],
  },
  {
    id: 'lib-ai-12',
    domain: DOMAINS.auditInterne,
    term: 'Échelle de maturité du contrôle interne',
    definition:
      'Gradation de la qualité d\u2019un dispositif ou d\u2019un processus, généralement en cinq niveaux (inspirés du CMMI) : 1 informel/chaotique (dépend des personnes), 2 défini (procédures écrites), 3 déployé (appliqué de façon homogène), 4 mesuré (indicateurs et écarts suivis), 5 optimisé (amélioration continue). Elle sert à positionner chaque processus, objectiver les progrès attendus et fixer des cibles réalistes entre deux missions.',
    example:
      'Processus achats évalué niveau 2 (procédure écrite mais non appliquée dans les filiales) avec cible niveau 3 à 18 mois : déploiement et contrôles de conformité mensuels.',
    referentiel: ' transversal',
    seeAlso: ['Constat et recommandation d\u2019audit interne', 'COSO'],
  },
  {
    id: 'lib-ai-13',
    domain: DOMAINS.auditInterne,
    term: 'Test de conception et d\u2019efficacité opérationnelle',
    definition:
      'Tester un contrôle comporte deux dimensions distinctes : la conception (le contrôle, tel que décrit, réduit-il réellement le risque visé ? est-il placé au bon endroit du processus ?) puis l\u2019efficacité opérationnelle (fonctionne-t-il en pratique, sur toute la période, sans déviation ?), vérifiée par sondage sur des preuves datées (visa, écran, journal). Un contrôle bien conçu mais non exécuté en août n\u2019est pas efficace : l\u2019auditeur cherche les trous de continuité.',
    example:
      'Rapprochement bancaire mensuel bien conçu, mais absent du mois d\u2019août (vérificateur en vacances, aucun remplaçant) : défaillance d\u2019efficacité opérationnelle, écart détecté avec un mois de retard.',
    referentiel: ' transversal',
    seeAlso: ['Tests de procédures (tests des contrôles)', 'Matrice des risques et des contrôles', 'Échantillonnage en audit'],
  },
  {
    id: 'lib-ai-14',
    domain: DOMAINS.auditInterne,
    term: 'Autocontrôle de premier niveau',
    definition:
      'Contrôles réalisés par les opérationnels eux-mêmes, au fil du processus qu\u2019ils exécutent : vérification avant validation, checklist de clôture, revue à quatre yeux entre collègues, contrôles de complétude avant transmission. Ils constituent la première barrière du dispositif (1re ligne) ; leur fiabilité dépend de la formalisation des procédures, de la formation et de la charge de travail — un autocontrôle non tracé ne peut pas être démontré.',
    example:
      'L\u2019assistante comptable vérifie la cohérence TTC/HT/TVA de chaque facture avant saisie et coche une grille mensuelle conservée comme preuve du contrôle.',
    referentiel: ' transversal',
    seeAlso: ['Les trois lignes de maîtrise', 'Activités de contrôle (préventives et détectives)'],
  },
  {
    id: 'lib-ai-15',
    domain: DOMAINS.auditInterne,
    term: 'Gouvernement d\u2019entreprise',
    definition:
      'Ensemble des mécanismes qui organisent la direction et le contrôle de l\u2019entité : répartition des pouvoirs entre assemblée, conseil (et ses comités spécialisés — notamment comité d\u2019audit et des risques) et dirigeants, dispositifs de transparence et de responsabilité. Le contrôle interne et l\u2019audit interne s\u2019inscrivent dans ce cadre : l\u2019audit interne en est l\u2019instrument indépendant d\u2019évaluation, rattaché au comité d\u2019audit pour garantir son indépendance vis-à-vis de la direction générale.',
    example:
      'Un comité d\u2019audit trimestriel : revue du plan d\u2019audit interne, des suites données aux recommandations, des litiges et de la position du CAC.',
    referentiel: ' transversal',
    seeAlso: ['Audit interne', 'Les trois lignes de maîtrise', 'Dispositif de contrôle interne AMF (sociétés cotées)'],
  },
  {
    id: 'lib-ai-16',
    domain: DOMAINS.auditInterne,
    term: 'Risque inhérent et risque de contrôle',
    definition:
      'Le risque inhérent est la probabilité d\u2019anomalie liée à la nature de l\u2019activité, du compte ou de l\u2019opération en l\u2019absence de tout contrôle (manipulations d\u2019espèces, estimations subjectives, transactions complexes, secteur volatil). Le risque de contrôle mesure la possibilité que le contrôle interne ne prévienne ni ne détecte ces anomalies. Leur combinaison forme, avec le risque de non-détection, le risque d\u2019anomalies significatives que l\u2019auditeur cherche à ramener sous un niveau acceptable.',
    example:
      'Les espèces en caisse présentent un risque inhérent maximal ; si les rapprochements de caisse sont mensuels et non signés, le risque de contrôle reste élevé.',
    referentiel: ' transversal',
    seeAlso: ['Risque d\u2019anomalies significatives (RAS)', 'Cartographie des risques', 'Contrôle interne'],
  },
  {
    id: 'lib-ai-17',
    domain: DOMAINS.auditInterne,
    term: 'RACI',
    definition:
      'Matrice de responsabilités (Responsible — exécute ; Accountable — rend compte, responsable unique ; Consulted — consulté ; Informed — informé) appliquée à chaque étape d\u2019un processus. Outil de description des processus et de diagnostic : une étape sans « Accountable » ou une même personne « R » et « A » partout révèle des zones de fragilité ou des ruptures de séparation des tâches.',
    example:
      'Étape « paiement fournisseur » : R = comptable fournisseurs, A = directeur financier, C = acheteur, I = trésorerie — toute étape sans A unique est un constat d\u2019audit.',
    referentiel: ' transversal',
    seeAlso: ['Séparation des tâches', 'Procédure d\u2019engagement de dépense'],
  },
  {
    id: 'lib-ai-18',
    domain: DOMAINS.auditInterne,
    term: 'Procédure d\u2019engagement de dépense',
    definition:
      'Chaîne de contrôles type du cycle achats : expression du besoin, bon de commande validé par le responsable budgeté (seuils de délégation), réception des biens (bon de réception), rapprochement à trois volets commande/réception/facture (quantités et prix), imputation comptable et analytique, paiement selon l\u2019échéancier. Chaque maillon est un contrôle préventif documenté dont la preuve (BC, BR, visa) rend le contrôle auditable.',
    example:
      'Le rapprochement à trois volets bloque la facture d\u2019un fournisseur facturant 12 pièces alors que 10 ont été réceptionnées : l\u2019écart est remonté au service achats avant comptabilisation.',
    referentiel: ' transversal',
    seeAlso: ['Séparation des tâches', 'Matrice des risques et des contrôles', 'RACI'],
  },
  {
    id: 'lib-ai-19',
    domain: DOMAINS.auditInterne,
    term: 'Chantier d\u2019audit interne (phases)',
    definition:
      'Déroulé type d\u2019une mission d\u2019audit interne : cadrage (lettre de mission, objectifs et périmètre), prise de connaissance (entretiens, collecte des procédures, flux), évaluation des risques du processus, tests de contrôles sur échantillon, élaboration et validation des constats (réunion de clôture), rapport, suivi des recommandations. La qualité de la communication (réunions d\u2019ouverture et de clôture, restitution intermédiaire) conditionne l\u2019acceptation des conclusions autant que la rigueur technique.',
    example:
      'Mission de 15 jours-homme : 3 jours de cadrage, 6 jours de tests terrain, 3 jours de restitution, rapport sous 10 jours, plan d\u2019action sous 30 jours.',
    referentiel: ' transversal',
    seeAlso: ['Constat et recommandation d\u2019audit interne', 'Suivi des recommandations', 'Audit interne'],
  },
  {
    id: 'lib-ai-20',
    domain: DOMAINS.auditInterne,
    term: 'Contrôle de gestion (place dans le dispositif)',
    definition:
      'Fonction de pilotage (2e ligne de maîtrise) qui compare réalisations et prévisions, calcule et explique les écarts, et alimente la décision : budgets, reporting mensuel, tableaux de bord, comptabilité analytique et coûts. Il contribue à la maîtrise du risque « décisions fondées sur une information erronée » et fournit à l\u2019audit interne comme à l\u2019auditeur externe des données d\u2019analyse (revues analytiques, budgets vs réels).',
    example:
      'Écart sur marge de −150 k€ au mois de juin décomposé en écart de volume, de prix et de mix : le contrôle de gestion oriente l\u2019investigation avant l\u2019auditeur.',
    formula: 'Écart total = Réalisé − Prévu (décomposable en écart sur volume, sur prix, sur mix)',
    referentiel: ' transversal',
    seeAlso: ['Les trois lignes de maîtrise', 'Procédures analytiques (revue analytique)'],
  },
  {
    id: 'lib-ai-21',
    domain: DOMAINS.auditInterne,
    term: 'Référentiel de processus et procédures écrites',
    definition:
      'Documentation formalisée du « qui fait quoi, quand et comment » : cartographie des processus, procédures illustrées (diagrammes de flux), instructions de travail et modes opératoires, mises à jour et versions datées. Sans documentation, ni transfert de connaissance, ni continuité en cas d\u2019absence, ni audit possible : l\u2019auditeur teste systématiquement l\u2019existence, la diffusion et l\u2019application réelle de ces documents — l\u2019écart entre le dit et le fait étant le constat le plus fréquent.',
    example:
      'Procédure de clôture en 12 étapes avec responsables et délais (J+1 à J+10) : l\u2019audit vérifie sur deux clôtures les dates réelles de validation et les preuves associées.',
    referentiel: ' transversal',
    seeAlso: ['Piste d\u2019audit', 'Constat et recommandation d\u2019audit interne', 'Chantier d\u2019audit interne (phases)'],
  },

  // -----------------------------------------------------------------
  // COMPTABILITÉ (34)
  // -----------------------------------------------------------------
  {
    id: 'lib-cpt-01',
    domain: DOMAINS.comptabilite,
    term: 'Débit et crédit',
    definition:
      'Convention d\u2019enregistrement en partie double : tout mouvement s\u2019analyse par sa destination (débit = emploi) et son origine (crédit = ressource). Les comptes d\u2019actif et de charges augmentent au débit, les comptes de passif et de produits au crédit. L\u2019égalité cumulée des débits et des crédits garantit la cohérence des enregistrements et se vérifie à tout moment par la balance.',
    example:
      'Achat de fournitures 1 000 € HT (TVA 20 %) : débit du compte de charges 1 000, débit du compte de TVA déductible 200, crédit du compte fournisseur 1 200.',
    referentiel: 'PCG',
    seeAlso: ['Journal', 'Balance', 'TVA déductible'],
  },
  {
    id: 'lib-cpt-02',
    domain: DOMAINS.comptabilite,
    term: 'Journal',
    definition:
      'Registre chronologique des écritures comptables : chaque pièce justificative donne lieu à une écriture datée, équilibrée (débits = crédits), avec libellé, comptes et montants. La numérotation chronologique et l\u2019irréversibilité des enregistrements (piste d\u2019audit : une erreur se corrige par contre-passation, jamais par effacement) sont exigées ; les écritures sont ensuite reportées au grand livre.',
    example:
      'Facture d\u2019achat n° F-315 du 12/03 : pièce numérotée, écriture datée du 12/03 reportée du journal des achats vers le grand livre fournisseurs et charges.',
    referentiel: 'PCG',
    seeAlso: ['Grand livre', 'Piste d\u2019audit', 'Débit et crédit'],
  },
  {
    id: 'lib-cpt-03',
    domain: DOMAINS.comptabilite,
    term: 'Grand livre',
    definition:
      'Ensemble des comptes de l\u2019entité dans lesquels sont reportées toutes les écritures du journal : il retrace, compte par compte (généraux et auxiliaires clients/fournisseurs), les mouvements au débit et au crédit et permet de calculer le solde de chaque compte. Le grand livre auxiliaire clients donne le détail client par client, dont la somme doit être égale au compte général 411.',
    example:
      'Contrôle de cohérence : total des soldes auxiliaires clients = solde du compte général clients ; tout écart révèle une écriture imputée au mauvais niveau.',
    referentiel: 'PCG',
    seeAlso: ['Journal', 'Balance', 'Lettrage'],
  },
  {
    id: 'lib-cpt-04',
    domain: DOMAINS.comptabilite,
    term: 'Balance',
    definition:
      'Table récapitulative de tous les comptes à une date donnée : cumuls de débits, cumuls de crédits et soldes (débiteur ou créditeur). Instrument de contrôle central : total des débits du journal = total des crédits = total de la balance des comptes. Point classique d\u2019entretien : une balance équilibrée ne prouve pas l\u2019exactitude des comptes — une écriture passée deux fois ou imputée au mauvais compte laisse la balance équilibrée.',
    example:
      'La balance au 31/12 totalise 4 850 000 € au débit et 4 850 000 € au crédit : l\u2019équilibre est vérifié, l\u2019exhaustivité et l\u2019imputation restent à auditer.',
    referentiel: 'PCG',
    seeAlso: ['Journal', 'Grand livre', 'Bilan'],
  },
  {
    id: 'lib-cpt-05',
    domain: DOMAINS.comptabilite,
    term: 'Plan comptable et classes de comptes',
    definition:
      'Nomenclature normalisée des comptes. PCG français : classe 1 capitaux et financements longs, classe 2 immobilisations, classe 3 stocks et en-cours, classe 4 tiers (clients, fournisseurs, État, social), classe 5 comptes financiers, classe 6 charges, classe 7 produits, classe 8 comptes spéciaux (engagements hors bilan). ⚠ Règle différente selon le référentiel — CGNC marocain : classe 1 financement permanent, 2 actif immobilisé, 3 actif circulant hors trésorerie, 4 passif circulant hors trésorerie, 5 trésorerie (actif et passif), 6 charges, 7 produits, 8 comptes de résultats : la classe 4 marocaine est un passif circulant (la française est « tiers », mixte) et la classe 8 marocaine recueille les résultats (la française, les engagements hors bilan).',
    example:
      'Un compte client est en classe 4 en France (tiers) et en classe 3 au Maroc (actif circulant) : même logique économique, numérotation différente.',
    referentiel: 'PCG',
    seeAlso: ['CGNC (Code général de normalisation comptable, Maroc)', 'PCG français (ANC)', 'Balance'],
  },
  {
    id: 'lib-cpt-06',
    domain: DOMAINS.comptabilite,
    term: 'TVA collectée',
    definition:
      'TVA facturée sur les ventes de l\u2019entité : dette fiscale envers l\u2019État dès son exigibilité, comptabilisée isolément au crédit d\u2019un compte de TVA collectée (4457 en PCG) lors de l\u2019enregistrement de la facture de vente TTC. Le redevable ne fait que collecter la taxe pour le compte du Trésor : il la reverse après imputation de la TVA déductible.',
    example:
      'Ventes du mois 100 000 € HT au taux de 20 % → TVA collectée 20 000 € créditée au compte dédié, à déclarer selon l\u2019échéancier applicable.',
    formula: 'TVA collectée = Ventes HT × taux de TVA',
    referentiel: 'PCG',
    seeAlso: ['TVA déductible', 'TVA à décaisser / crédit de TVA', 'Exigibilité de la TVA'],
  },
  {
    id: 'lib-cpt-07',
    domain: DOMAINS.comptabilite,
    term: 'TVA déductible',
    definition:
      'TVA payée sur les achats, charges et immobilisations, imputable sur la TVA collectée si des conditions sont réunies : taxe mentionnée sur un document probant (facture conforme), portant sur des biens ou services affectés à l\u2019exploitation et n\u2019entrant pas dans les exclusions du droit à déduction. Comptabilisée au débit d\u2019un compte de TVA déductible (4456 en PCG). À distinguer de la simple TVA facturée : sans facture conforme, pas de déduction — c\u2019est aussi une question de cut-off fiscal.',
    example:
      'Achats du mois 60 000 € HT à 20 % → TVA déductible 12 000 € imputable ; TVA à décaisser = 20 000 − 12 000 = 8 000 €.',
    formula: 'TVA déductible = Achats HT × taux (sous conditions de facture probante et d\u2019affectation à l\u2019exploitation)',
    referentiel: 'PCG',
    seeAlso: ['TVA collectée', 'TVA à décaisser / crédit de TVA', 'Exigibilité de la TVA'],
  },
  {
    id: 'lib-cpt-08',
    domain: DOMAINS.comptabilite,
    term: 'Exigibilité de la TVA',
    definition:
      'Moment où la taxe devient exigible (déclarable et payable). ⚠ Règle différente selon le référentiel / le pays — France : livraison du bien pour les ventes de biens, encaissement pour les prestations de services (option possible pour l\u2019exigibilité au débit, à la facturation) ; Maroc : exigibilité liée à la nature de l\u2019opération avec régimes des débits (facturation) ou des encaissements selon les cas et options — vérifier la règle et l\u2019option en vigueur. Cette mécanique pilote le cut-off fiscal de décembre/janvier (TVA sur prestations payées en janvier mais facturées en décembre, etc.).',
    example:
      'Prestation de service facturée 10 000 € HT le 15/12, encaissée le 10/01 : en France, sans option pour le débit, la TVA de 2 000 € est exigible sur la période de l\u2019encaissement (janvier).',
    referentiel: 'PCG',
    seeAlso: ['TVA collectée', 'TVA marocaine', 'Cut-off (rattachement des opérations à l\u2019exercice)'],
  },
  {
    id: 'lib-cpt-09',
    domain: DOMAINS.comptabilite,
    term: 'TVA à décaisser / crédit de TVA',
    definition:
      'Solde de la période de déclaration : TVA à décaisser si la TVA collectée excède la TVA déductible (dette à payer, compte 44551 en PCG) ; crédit de TVA à reporter (ou remboursable sous conditions) dans le cas inverse. La déclaration récapitule collecte, déductions et solde ; l\u2019auditeur rapproche la déclaration déposée des comptes et vérifie la périodicité et les délais de paiement.',
    example:
      'Mars : TVA collectée 20 000 €, TVA déductible 12 000 € → TVA à décaisser 8 000 €, déclarée et payée le mois suivant ; en avril, TVA déductible 26 000 € → crédit de 6 000 € à reporter.',
    formula: 'TVA à décaisser = TVA collectée − TVA déductible',
    referentiel: 'PCG',
    seeAlso: ['TVA collectée', 'TVA déductible'],
  },
  {
    id: 'lib-cpt-10',
    domain: DOMAINS.comptabilite,
    term: 'Charges constatées d\u2019avance (CCA)',
    definition:
      'Écriture de régularisation de clôture : charges enregistrées dans l\u2019exercice mais dont une partie concerne l\u2019exercice suivant (loyer, assurance, abonnements payés d\u2019avance). Au 31/12, la quote-part de l\u2019exercice suivant est neutralisée (solde de la charge, inscription à un compte de CCA, 486 en PCG), extournée à la réouverture de l\u2019exercice N+1. ⚠ Règle différente selon le référentiel : le PCG utilise des comptes de régularisation dédiés ; en IFRS, les paiements d\u2019avance sont des actifs (prepaid expenses) sans numérotation imposée — la logique est identique, la présentation non.',
    example:
      'Prime d\u2019assurance annuelle de 12 000 € payée le 01/10/N couvrant 12 mois : au 31/12/N, CCA = 12 000 × 9/12 = 9 000 € ; seuls 3 000 € restent en charges de N.',
    formula: 'CCA = Montant payé × durée restant à courir après la clôture ÷ durée totale de couverture',
    referentiel: 'PCG',
    seeAlso: ['Produits constatés d\u2019avance (PCA)', 'Factures non parvenues (FNP)', 'Extourne'],
  },
  {
    id: 'lib-cpt-11',
    domain: DOMAINS.comptabilite,
    term: 'Factures non parvenues (FNP)',
    definition:
      'Charges de l\u2019exercice (biens reçus, prestations réalisées avant la clôture) non encore facturées à la date d\u2019arrêté : la charge et la dette correspondantes doivent être constatées par écriture d\u2019inventaire (compte 408 en PCG), sur la base des bons de réception et des contrats. La TVA déductible, elle, n\u2019est prise en compte qu\u2019à réception de la facture conforme. Omission des FNP = charges de l\u2019exercice minorées = résultat majoré, anomalie classique de cut-off.',
    example:
      'Marchandises reçues le 28/12, facture reçue en janvier pour 8 000 € HT : au 31/12, charge et dette de 8 000 € (FNP) ; la TVA de 1 600 € ne sera déductible qu\u2019en janvier.',
    referentiel: 'PCG',
    seeAlso: ['Produits à recevoir (PNR)', 'Cut-off (rattachement des opérations à l\u2019exercice)', 'Extourne'],
  },
  {
    id: 'lib-cpt-12',
    domain: DOMAINS.comptabilite,
    term: 'Produits constatés d\u2019avance (PCA)',
    definition:
      'Produits comptabilisés dans l\u2019exercice mais acquis au client sur l\u2019exercice suivant (abonnements, loyers, maintenances facturés d\u2019avance) : la quote-part de N+1 est neutralisée au 31/12 par un compte de PCA (487 en PCG), extournée à la réouverture. ⚠ Règle différente selon le référentiel : en IFRS (IFRS 15), la contrepartie d\u2019un paiement reçu d\u2019avance est une dette (obligation de prestations à venir), le produit n\u2019étant constaté qu\u2019au transfert du contrôle — pas de compte normalisé.',
    example:
      'Abonnement annuel de 12 000 € facturé et encaissé le 01/10/N : au 31/12/N, PCA = 12 000 × 9/12 = 9 000 € ; le produit de N se limite à 3 000 €.',
    formula: 'PCA = Montant facturé × durée restant à courir après la clôture ÷ durée totale de la prestation',
    referentiel: 'PCG',
    seeAlso: ['Charges constatées d\u2019avance (CCA)', 'Cut-off (rattachement des opérations à l\u2019exercice)', 'Extourne'],
  },
  {
    id: 'lib-cpt-13',
    domain: DOMAINS.comptabilite,
    term: 'Produits à recevoir (PNR)',
    definition:
      'Produits acquis à l\u2019exercice (prestations réalisées, marchandises livrées) non encore facturés à la clôture : écriture d\u2019inventaire constatant la créance sur le client (compte 418 « clients, factures à établir » en PCG, la TVA étant isolée en TVA à régulariser, exigible à la facturation). Symétrique exact des factures non parvenues fournisseurs ; souvent appelé FAE (factures à établir).',
    example:
      'Maintenance de décembre achevée mais non facturée, valeur estimée 5 000 € HT : débit 418 pour 6 000 € (dont TVA 1 000 € à régulariser), crédit du compte de produits pour 5 000 €.',
    referentiel: 'PCG',
    seeAlso: ['Factures non parvenues (FNP)', 'Cut-off (rattachement des opérations à l\u2019exercice)', 'Extourne'],
  },
  {
    id: 'lib-cpt-14',
    domain: DOMAINS.comptabilite,
    term: 'Provision pour risques et charges',
    definition:
      'Passif dont l\u2019échéance ou le montant n\u2019est pas certain (litiges, garanties données, pertes à l\u2019achèvement de contrats, restructurations) : une provision est constituée lorsque l\u2019obligation envers un tiers existe à la clôture et que le montant peut être estimé de façon fiable ; dotation en charge à la constitution, reprise lorsque le risque disparaît ou se réalise. ⚠ Règle différente selon le référentiel : IAS 37 (IFRS) ne reconnaît que les obligations présentes, probables et estimables — les passifs éventuels restent en annexe — et interdit les provisions pour restructurations non détaillées ; le PCG suit une logique voisine mais admet en outre des provisions réglementées (amortissements dérogatoires) d\u2019origine fiscale sans équivalent IFRS.',
    example:
      'Litige prud\u2019homal avec condamnation probable estimée à 40 000 € : débit d\u2019une dotation aux provisions, crédit du compte de provision ; reprise si transaction finale à 25 000 €.',
    referentiel: 'PCG',
    seeAlso: ['Principe de prudence', 'Audit des estimations comptables (NEP 540)', 'Dépréciation des créances'],
  },
  {
    id: 'lib-cpt-15',
    domain: DOMAINS.comptabilite,
    term: 'Dépréciation des créances',
    definition:
      'Ajustement de la valeur des créances clients dont le recouvrement devient incertain : dès qu\u2019un doute existe (retard significatif, dégradation financière du débiteur, procédure collective), une dépréciation constate la perte probable (dotation en charge ; dépréciation venant en diminution de la créance au bilan). La créance devenue définitivement irrécouvrable est passée en charge pour son montant. ⚠ Règle différente selon le référentiel : en IFRS (IFRS 9), la perte attendue (expected credit loss) est estimée dès l\u2019origine et par paliers de dégradation, quand le PCG raisonne créance par créance sur la perte probable.',
    example:
      'Créance de 12 000 € sur un client en procédure de sauvegarde, perte probable estimée à 40 % → dépréciation de 4 800 € ; en cas d\u2019irrécouvrabilité totale, charge de 12 000 € et reprise de la dépréciation.',
    formula: 'Dépréciation = Montant de la créance × taux de perte probable',
    referentiel: 'PCG',
    seeAlso: ['Créance douteuse (et irrécouvrable)', 'Provision pour risques et charges', 'Lettrage'],
  },
  {
    id: 'lib-cpt-16',
    domain: DOMAINS.comptabilite,
    term: 'Amortissement linéaire',
    definition:
      'Répartition du coût d\u2019une immobilisation sur sa durée d\u2019utilité selon un rythme constant, à compter de la date de mise en service (et non d\u2019acquisition) : annuité = base amortissable ÷ durée, avec prorata temporis en première et dernière année. La dotation est une charge d\u2019exploitation ; l\u2019amortissement cumulé vient en déduction de la valeur brute au bilan pour donner la valeur nette comptable. Toute modification de durée ou de méthode s\u2019analyse comme un changement d\u2019estimation traité de façon prospective.',
    example:
      'Machine de 10 000 € mise en service le 01/04, durée 5 ans → dotation de N = 10 000 × 20 % × 9/12 = 1 500 € ; annuité complète de 2 000 € les exercices suivants.',
    formula: 'Dotation linéaire = Base amortissable × (1 ÷ durée) ; taux linéaire = 100 % ÷ durée',
    referentiel: 'PCG',
    seeAlso: ['Amortissement dégressif', 'Valeur nette comptable (VNC)', 'Écritures de clôture (inventaire)'],
  },
  {
    id: 'lib-cpt-17',
    domain: DOMAINS.comptabilite,
    term: 'Amortissement dégressif',
    definition:
      'Modalité fiscale (possible si la durée d\u2019utilité est d\u2019au moins 3 ans) : l\u2019annuité se calcule sur la valeur nette comptable de début d\u2019exercice, au taux linéaire multiplié par un coefficient — France : 1,25 pour 3-4 ans, 1,75 pour 5-6 ans, 2,25 au-delà — avec bascule en linéaire dès que le taux linéaire calculé sur la durée restante excède le taux dégressif. L\u2019excédent d\u2019amortissement sur l\u2019amortissement économique est isolé en amortissements dérogatoires (provision réglementée), dotation ou reprise selon le sens. ⚠ Règle différente selon le référentiel/pays : c\u2019est une faculté d\u2019origine fiscale (coefficients et conditions fixés par le CGI ; le Maroc applique ses propres règles de dégressivité fiscale — vérifier le texte en vigueur), sans équivalent en IFRS.',
    example:
      'Bien de 10 000 €, 5 ans, coefficient 1,75 → taux dégressif 20 % × 1,75 = 35 % : N1 = 3 500 € ; N2 = 35 % × 6 500 = 2 275 € ; bascule en linéaire quand 1/durée restante dépasse 35 %.',
    formula: 'Taux dégressif = (100 % ÷ durée) × coefficient (1,25 / 1,75 / 2,25 selon la durée)',
    referentiel: 'PCG',
    seeAlso: ['Amortissement linéaire', 'Valeur nette comptable (VNC)', 'Provision pour risques et charges'],
  },
  {
    id: 'lib-cpt-18',
    domain: DOMAINS.comptabilite,
    term: 'Valeur nette comptable (VNC)',
    definition:
      'Valeur d\u2019origine (coût d\u2019acquisition ou de production) diminuée des amortissements cumulés et des dépréciations : c\u2019est le montant net inscrit au bilan pour une immobilisation, une créance ou un stock. La VNC sert de base au calcul des plus ou moins-values de cession (prix de cession − VNC) et aux tests de dépréciation futurs.',
    example:
      'Machine acquise 10 000 €, amortissements cumulés 6 000 € → VNC 4 000 € ; cession à 5 000 € → plus-value de 1 000 € comptabilisée.',
    formula: 'VNC = Valeur brute − Amortissements cumulés − Dépréciations',
    referentiel: 'PCG',
    seeAlso: ['Amortissement linéaire', 'Dépréciation des créances', 'Coût historique'],
  },
  {
    id: 'lib-cpt-19',
    domain: DOMAINS.comptabilite,
    term: 'Cut-off (rattachement des opérations à l\u2019exercice)',
    definition:
      'Contrôle de séparation des exercices : toute charge et tout produit doit être rattaché à l\u2019exercice qui le concerne, indépendamment de la date de facturation ou d\u2019encaissement (principe d\u2019indépendance des exercices). Le travail d\u2019audit consiste à vérifier la chronologie des derniers bons de livraison et factures de décembre et des premiers de janvier, puis la correction des écarts via les comptes de régularisation (PCA, CCA, FNP, PNR).',
    example:
      'BL du 30/12 facturé le 03/01 : le produit appartient à N (PNR à constater). Inversement, une facture de décembre pour une livraison du 05/01 est un PCA à neutraliser.',
    referentiel: 'PCG',
    seeAlso: ['Produits constatés d\u2019avance (PCA)', 'Factures non parvenues (FNP)', 'Produits à recevoir (PNR)', 'Assertions'],
  },
  {
    id: 'lib-cpt-20',
    domain: DOMAINS.comptabilite,
    term: 'Lettrage',
    definition:
      'Rapprochement, dans les comptes clients ou fournisseurs, de chaque facture avec les règlements (et avoirs) qui l\u2019apurent, compte auxiliaire par compte auxiliaire. Le lettrage fait ressortir les soldes non lettrés : créances ou dettes exigibles non justifiées — avances reçues ou versées, doubles factures, écarts de règlement, litiges, anomalies de cut-off. C\u2019est l\u2019outil de base du contrôle des comptes de tiers par le comptable comme par l\u2019auditeur, et le point de départ de la balance âgée.',
    example:
      'Compte client : F101 (30 000 €) réglée 20 000 € → lettrage partiel, solde ouvert 10 000 € ; un règlement reçu sans facture lettrable suggère une avance à reclasser ou un double encaissement.',
    referentiel: ' transversal',
    seeAlso: ['Rapprochement bancaire', 'Créance douteuse (et irrécouvrable)', 'Confirmations externes (circularisation)'],
  },
  {
    id: 'lib-cpt-21',
    domain: DOMAINS.comptabilite,
    term: 'Rapprochement bancaire',
    definition:
      'Comparaison périodique (idéalement mensuelle) entre le solde du compte de banque tenu en comptabilité et le solde du relevé bancaire, avec justification de chaque différence : chèques émis non encore débités, remises en circulation, virements en transit, agios et frais non comptabilisés, erreurs. Le solde « réel » s\u2019obtient en corrigeant le solde comptable des opérations en circulation. Contrôle détectif clé du cycle trésorerie — son absence est un constat d\u2019audit systématique.',
    example:
      'Solde comptable 12 450 € ; chèques émis non débités 3 200 € ; remises non créditées 5 400 € ; agios 50 € non comptabilisés → solde du relevé = 12 450 − 3 200 + 5 400 − 50 = 14 600 €, et écriture d\u2019agios à passer.',
    formula: 'Solde bancaire = Solde comptable − chèques émis non débités + remises non créditées ± éléments non comptabilisés',
    referentiel: 'PCG',
    seeAlso: ['Virement en transit', 'Compte de suspens', 'Lettrage', 'Date de valeur'],
  },
  {
    id: 'lib-cpt-22',
    domain: DOMAINS.comptabilite,
    term: 'Compte de suspens',
    definition:
      'Compte d\u2019attente où l\u2019on enregistre momentanément une opération dont l\u2019imputation définitive est inconnue ou dont la pièce manque. Usage légitime en flux tendu, mais un solde ancien, croissant ou apuré en fin d\u2019exercice devient un signal d\u2019alarme pour l\u2019auditeur : écritures « tiroir », fraudes, régularisations de cut-off déguisées, pertes d\u2019information. Les suspens doivent être apurés avant l\u2019arrêté des comptes.',
    example:
      'Un compte « à classer » créditeur de 25 000 € depuis trois mois révèle, à l\u2019analyse, un règlement client non imputé et une facture fournisseur non comptabilisée.',
    referentiel: ' transversal',
    seeAlso: ['Suspens de trésorerie', 'Virement en transit', 'Rapprochement bancaire'],
  },
  {
    id: 'lib-cpt-23',
    domain: DOMAINS.comptabilite,
    term: 'Créance douteuse (et irrécouvrable)',
    definition:
      'Créance dont le recouvrement est incertain (défaillance financière, disparition, litige) : reclassée en créance douteuse, dépréciée à hauteur de la perte probable, puis passée en irrécouvrable (charge) lorsque la perte devient certaine (clôture de procédure, prescription). L\u2019auditeur s\u2019appuie sur la balance âgée, la liste des contentieux, les lettres de relance et l\u2019évolution des provisions N-1 vs réalisations.',
    example:
      'Client en liquidation judiciaire, créance de 12 000 €, offre de règlement à 10 % → dépréciation de 10 800 € ; après clôture de la procédure sans dividendes, solde en irrécouvrable.',
    referentiel: 'PCG',
    seeAlso: ['Dépréciation des créances', 'Lettrage', 'DSO (délai moyen de recouvrement)'],
  },
  {
    id: 'lib-cpt-24',
    domain: DOMAINS.comptabilite,
    term: 'Escompte de règlement',
    definition:
      'Réduction financière accordée pour paiement anticipé, à distinguer des réductions commerciales (rabais, remise, ristourne) qui minorent la base imposable et le produit. L\u2019escompte acquis (client a payé assez vite) est une charge financière ; l\u2019escompte conditionnel — accordé si le client paie avant une date fixée — doit être estimé à la clôture comme charge probable avec sa dette. ⚠ Règle différente selon le référentiel : en IFRS (IFRS 15), l\u2019escompte attendu est traité comme une réduction du prix de la transaction (donc du produit), pas comme une charge financière.',
    example:
      'Facture de 50 000 € avec escompte de 2 % si paiement avant le 15/01 : à la clôture, si le bénéfice de l\u2019escompte est probable, charge probable de 1 000 € (50 000 × 2 %) à constater.',
    formula: 'Escompte = Montant de la facture × taux d\u2019escompte',
    referentiel: 'PCG',
    seeAlso: ['Effet de commerce', 'Produits à recevoir (PNR)'],
  },
  {
    id: 'lib-cpt-25',
    domain: DOMAINS.comptabilite,
    term: 'Effet de commerce',
    definition:
      'Titre négociable matérialisant une créance et mobilisable : lettre de change relevée (LCR) ou billet à ordre, à échéance fixe, remis à l\u2019encaissement ou escompté à la banque (avec recours contre le porteur en cas de défaillance du tiré). Comptabilisé hors du compte client courant (effets à recevoir), avec suivi des échéanciers ; l\u2019escompte génère intérêts et commissions et constitue une ressource de trésorerie courte.',
    example:
      'Effet de 20 000 € escompté 60 jours avant échéance au taux de 6 % : intérêts = 20 000 × 6 % × 60/360 = 200 € nets de commissions.',
    formula: 'Intérêts d\u2019escompte = Nominal × taux × durée ÷ 360',
    referentiel: 'PCG',
    seeAlso: ['Cession de créances (Dailly)', 'Escompte de règlement', 'Affacturage (factoring)'],
  },
  {
    id: 'lib-cpt-26',
    domain: DOMAINS.comptabilite,
    term: 'Extourne',
    definition:
      'Écriture inverse passée à l\u2019ouverture de l\u2019exercice pour annuler les écritures de régularisation de clôture (CCA, PCA, FNP, PNR) : elle restitue les comptes de charges et de produits à leur réalité du moment — la facture finit par arriver, le temps de la prestation s\u2019écoule. Sans extourne, les comptes de régularisation s\u2019empilent et les clôtures suivantes deviennent inauditables ; l\u2019auditeur vérifie l\u2019extourne systématique au 01/01.',
    example:
      'PCA de 9 000 € constaté au 31/12/N (abonnement d\u2019avance) extourné au 01/01/N+1 : le produit redevient acquis au fil de la fourniture du service de N+1.',
    referentiel: 'PCG',
    seeAlso: ['Produits constatés d\u2019avance (PCA)', 'Charges constatées d\u2019avance (CCA)', 'Écritures de clôture (inventaire)'],
  },
  {
    id: 'lib-cpt-27',
    domain: DOMAINS.comptabilite,
    term: 'Principe de prudence',
    definition:
      'Principe fondamental du PCG : éviter de transférer sur des exercices futurs des incertitudes présentes susceptibles de minorer le patrimoine et le résultat. En clair : les moins-values probables sont constatées dès qu\u2019elles sont connues (dépréciations, provisions, stocks ramenés à leur valeur nette de réalisation), tandis que les plus-values latentes restent ignorées jusqu\u2019à leur réalisation. C\u2019est le moteur de la plupart des écritures de clôture — et une divergence d\u2019esprit assumée avec les IFRS, plus orientées information économique de l\u2019investisseur.',
    example:
      'Terrain acheté 100 000 € dont la valeur de marché atteindrait 150 000 € : aucun gain comptabilisé ; une créance douteuse, elle, est immédiatement dépréciée.',
    referentiel: 'PCG',
    seeAlso: ['Provision pour risques et charges', 'Dépréciation des créances', 'Image fidèle (régularité, sincérité)'],
  },
  {
    id: 'lib-cpt-28',
    domain: DOMAINS.comptabilite,
    term: 'Indépendance des exercices',
    definition:
      'Principe selon lequel à chaque exercice ses charges et ses produits : les charges sont rattachées à la consommation de l\u2019exercice, les produits à l\u2019acquisition (transfert du bien ou achèvement de la prestation), indépendamment des dates de facturation, d\u2019encaissement ou de décaissement. Il commande l\u2019ensemble des écritures de régularisation (CCA, PCA, FNP, PNR) et le travail de cut-off de l\u2019auditeur.',
    example:
      'Un loyer de janvier N+1 payé en décembre N est une charge de N+1 (CCA au 31/12/N) ; une prestation de décembre encaissée en janvier est un produit de N.',
    referentiel: 'PCG',
    seeAlso: ['Cut-off (rattachement des opérations à l\u2019exercice)', 'Écritures de clôture (inventaire)', 'Extourne'],
  },
  {
    id: 'lib-cpt-29',
    domain: DOMAINS.comptabilite,
    term: 'Coût historique',
    definition:
      'Évaluation des biens et dettes à leur coût d\u2019entrée — prix payé ou coût de production — conservé comme valeur d\u2019inscription au bilan ; les évolutions ultérieures ne se traduisent comptablement que par des dépréciations (à la baisse), jamais par des réévaluations libres. Une réévaluation légale, très encadrée, reste possible dans des cas exceptionnels. ⚠ Règle différente selon le référentiel : les IFRS ouvrent des options de réévaluation (certaines catégories d\u2019immobilisations corporelles et incorporelles, instruments financiers à la juste valeur obligatoire pour plusieurs catégories) — la mesure y est plus économique, moins patrimoniale.',
    example:
      'Immeuble acquis 300 000 € : il reste au bilan pour 300 000 € moins amortissement, quel que soit le marché ; en IFRS, une option de réévaluation pourrait l\u2019inscrire à sa juste valeur.',
    referentiel: 'PCG',
    seeAlso: ['Valeur nette comptable (VNC)', 'Bilan', 'IFRS (normes comptables internationales)'],
  },
  {
    id: 'lib-cpt-30',
    domain: DOMAINS.comptabilite,
    term: 'Image fidèle (régularité, sincérité)',
    definition:
      'Objectif de l\u2019information comptable française : comptes réguliers (conformes aux règles et procédures du référentiel), sincères (estimations loyales, de bonne foi, sans intention de tromper) et donnant une image fidèle — c\u2019est-à-dire une représentation complète et pertinente du patrimoine, de la situation financière et du résultat. L\u2019annexe vient compléter les comptes lorsque l\u2019application des règles ne suffit pas. ⚠ Différence d\u2019esprit selon le référentiel : les IFRS visent d\u2019abord une information utile à la décision des investisseurs (représentation fidèle parmi les caractéristiques qualitatives), le PCG protège d\u2019abord le patrimoine et le créancier.',
    example:
      'Un litige non provisionné mais significatif et non mentionné en annexe : les comptes peuvent être réguliers en forme mais ne pas donner d\u2019image fidèle.',
    referentiel: 'PCG',
    seeAlso: ['Bilan', 'Compte de résultat', 'Principe de prudence'],
  },
  {
    id: 'lib-cpt-31',
    domain: DOMAINS.comptabilite,
    term: 'Bilan',
    definition:
      'Photographie du patrimoine à une date donnée : à l\u2019actif, les immobilisations, stocks, créances et trésorerie ; au passif, les capitaux propres et les dettes. Le bilan PCG est classé (actif immobilisé / circulant) et présenté net des amortissements et dépréciations. ⚠ Règle différente selon le référentiel : le CGNC marocain structure le bilan en masses propres (financement permanent / actif immobilisé / actif circulant hors trésorerie / passif circulant / trésorerie) ; les IFRS (IAS 1) imposent le classement courant / non courant avec option pour une présentation par ordre de liquidité, et une plus grande liberté d\u2019agencement.',
    example:
      'Lecture d\u2019équilibre : actif immobilisé financé par les ressources stables (FR), actif circulant partiellement financé par le passif circulant (BFR), le solde étant la trésorerie nette.',
    referentiel: 'PCG',
    seeAlso: ['Compte de résultat', 'Fonds de roulement (FR)', 'États de synthèse marocains (CPC, ESG)'],
  },
  {
    id: 'lib-cpt-32',
    domain: DOMAINS.comptabilite,
    term: 'Compte de résultat',
    definition:
      'Film des flux de l\u2019exercice : produits et charges aboutissant au résultat net, après impôt. ⚠ Règle différente selon le référentiel : le PCG français classe par nature en trois marges (exploitation, financier, exceptionnel) ; le CGNC marocain distingue les résultats d\u2019exploitation, financier, courant et non courant, détaillés dans le CPC puis retraités en soldes de gestion dans l\u2019ESG ; les IFRS acceptent un classement par nature ou par fonction et imposent la présentation du résultat global (comprehensive income), intégrant notamment les variations d\u2019actifs de réévaluation ou de conversion non reprises au résultat.',
    example:
      'Chez un distributeur : marge commerciale = ventes de marchandises − coût d\u2019achat des marchandises vendues, première ligne clé du compte de résultat.',
    referentiel: 'PCG',
    seeAlso: ['Bilan', 'États de synthèse marocains (CPC, ESG)', 'IFRS (normes comptables internationales)'],
  },
  {
    id: 'lib-cpt-33',
    domain: DOMAINS.comptabilite,
    term: 'Stock (CMUP, FIFO)',
    definition:
      'Actif circulant détenu pour la vente en l\u2019état ou pour la transformation ; valorisé au coût d\u2019acquisition ou de production, puis, à la clôture, ramené à la valeur nette de réalisation si elle est inférieure (dépréciation). Méthodes unitaires autorisées : CMUP — coût moyen pondéré (après chaque entrée ou sur la période) — ou FIFO (premier entré, premier sorti) ; le LIFO est interdit en PCG comme en IFRS (IAS 2). En période de hausse des prix, le FIFO valorise les sorties moins cher que le CMUP, donc majore le résultat.',
    example:
      'Stock initial : 100 unités à 10 € ; achat : 200 unités à 12 €. CMUP = (1 000 + 2 400) ÷ 300 = 11,33 € ; une sortie de 150 unités est valorisée 1 700 €.',
    formula: 'CMUP = (valeur du stock initial + valeur des entrées de la période) ÷ (quantités initiales + quantités entrées)',
    referentiel: 'PCG',
    seeAlso: ['DIO (délai de rotation des stocks)', 'Principe de prudence', 'BFR (besoin en fonds de roulement)'],
  },
  {
    id: 'lib-cpt-34',
    domain: DOMAINS.comptabilite,
    term: 'Écritures de clôture (inventaire)',
    definition:
      'Ensemble des écritures passées à l\u2019arrêté des comptes pour appliquer les principes : régularisations (CCA, PCA, FNP, PNR), amortissements, dépréciations des créances et des stocks, provisions pour risques, reprise des suspens, variation des stocks, cut-off des factures et de la TVA. Elles concentrent le risque d\u2019audit de fin d\u2019exercice — et les questions d\u2019entretien : savoir citer l\u2019écriture, son sens et son incidence chiffrée sur le résultat.',
    example:
      'Chez un distributeur au 31/12 : PCA 8 600 €, PNR 15 200 €, dépréciation clients 4 800 €, variation de stocks +130 000 € — chaque écriture est documentée, chiffrée et extournée ou reprise l\u2019exercice suivant.',
    referentiel: 'PCG',
    seeAlso: ['Cut-off (rattachement des opérations à l\u2019exercice)', 'Extourne', 'Produits constatés d\u2019avance (PCA)'],
  },

  // -----------------------------------------------------------------
  // TRÉSORERIE (17)
  // -----------------------------------------------------------------
  {
    id: 'lib-trs-01',
    domain: DOMAINS.tresorerie,
    term: 'BFR (besoin en fonds de roulement)',
    definition:
      'Solde entre les besoins d\u2019exploitation (stocks, créances clients TTC, créances fiscales et sociales) et les ressources d\u2019exploitation (dettes fournisseurs TTC, dettes fiscales et sociales) : il mesure le décalage de trésorerie induit par le cycle d\u2019exploitation. Un BFR négatif est une ressource — le métier encaisse avant de payer (distribution, restauration) ; un BFR positif doit être financé (industrie, BTP). Notion d\u2019analyse financière transversale : le calcul est identique quel que soit le référentiel comptable, seules les données sources changent.',
    example:
      'Stocks 250 000 € + créances clients 400 000 € − dettes fournisseurs 300 000 € = BFR de 150 000 €, à comparer au CA (BFR en jours de CA) et au FR.',
    formula: 'BFR = Stocks + Créances d\u2019exploitation − Dettes d\u2019exploitation',
    referentiel: ' transversal',
    seeAlso: ['Fonds de roulement (FR)', 'Trésorerie nette (TN)', 'DSO (délai moyen de recouvrement)'],
  },
  {
    id: 'lib-trs-02',
    domain: DOMAINS.tresorerie,
    term: 'Fonds de roulement (FR)',
    definition:
      'Excédent des ressources stables (capitaux propres, amortissements et dépréciations assimilés, dettes financières long terme) sur les emplois stables (actif immobilisé net) : la part du long terme disponible pour financer le cycle d\u2019exploitation. Un FR positif est la règle prudentielle pour les activités à BFR positif ; un FR négatif dénote un financement de long terme par le court terme, fragile.',
    example:
      'Ressources stables 1 000 000 €, actif immobilisé net 400 000 € → FR = 600 000 €, dont 150 000 € absorbés par le BFR.',
    formula: 'FR = Ressources stables − Emplois stables',
    referentiel: ' transversal',
    seeAlso: ['BFR (besoin en fonds de roulement)', 'Trésorerie nette (TN)', 'Bilan'],
  },
  {
    id: 'lib-trs-03',
    domain: DOMAINS.tresorerie,
    term: 'Trésorerie nette (TN)',
    definition:
      'Solde des comptes de trésorerie (disponibilités, valeurs mobilières de placement liquides) diminué des concours bancaires courants et soldes créditeurs de banque. Elle découle mécaniquement de l\u2019équilibre financier : TN = FR − BFR — une trésorerie durablement négative signifie une dépendance aux découverts, coûteuse et fragile ; l\u2019analyse du tableau de flux identifie si la création de trésorerie vient du résultat, du BFR ou des investissements.',
    example:
      'FR 600 000 €, BFR 150 000 € → TN = 450 000 € de trésorerie positive, dont une part plaçable à court terme.',
    formula: 'TN = FR − BFR',
    referentiel: ' transversal',
    seeAlso: ['Fonds de roulement (FR)', 'BFR (besoin en fonds de roulement)', 'Placement des excédents de trésorerie'],
  },
  {
    id: 'lib-trs-04',
    domain: DOMAINS.tresorerie,
    term: 'DSO (délai moyen de recouvrement)',
    definition:
      'Nombre de jours de chiffre d\u2019affaires représenté par les créances clients : indicateur central du pilotage du poste clients (politique de crédit, relances, recouvrement, affacturage). Le calcul doit être homogène — créances TTC sur CA TTC. Une dérive du DSO tend la trésorerie (BFR) et augmente le risque de dépréciation ; le suivi mensuel par balance âgée complète l\u2019indicateur global.',
    example:
      'Créances clients TTC 420 000 €, CA TTC 2 520 000 € → DSO = 420 000 ÷ 2 520 000 × 360 = 60 jours de CA.',
    formula: 'DSO = Créances clients TTC ÷ CA TTC × 360',
    referentiel: ' transversal',
    seeAlso: ['DPO (délai moyen de paiement fournisseurs)', 'Cycle de conversion de trésorerie (CCC)', 'Créance douteuse (et irrécouvrable)'],
  },
  {
    id: 'lib-trs-05',
    domain: DOMAINS.tresorerie,
    term: 'DPO (délai moyen de paiement fournisseurs)',
    definition:
      'Nombre de jours d\u2019achats représenté par les dettes fournisseurs : allonger le DPO finance le BFR, mais au prix de pénalités possibles (encadrement légal des délais de paiement entre professionnels en France), de pertes d\u2019escomptes et de dégradation de la relation fournisseurs. Calcul homogène : dettes fournisseurs TTC sur achats TTC (auquel on peut rattacher les services extérieurs pour un economic DPO plus fidèle).',
    example:
      'Dettes fournisseurs TTC 300 000 €, achats TTC 2 700 000 € → DPO = 300 000 ÷ 2 700 000 × 360 = 40 jours d\u2019achats.',
    formula: 'DPO = Dettes fournisseurs TTC ÷ Achats TTC × 360',
    referentiel: ' transversal',
    seeAlso: ['DSO (délai moyen de recouvrement)', 'Cycle de conversion de trésorerie (CCC)', 'BFR (besoin en fonds de roulement)'],
  },
  {
    id: 'lib-trs-06',
    domain: DOMAINS.tresorerie,
    term: 'DIO (délai de rotation des stocks)',
    definition:
      'Nombre de jours de consommation ou de production immobilisés en stock : mesure d\u2019efficacité du pilotage (couverture de service, obsolescence, rotation par famille). Une hausse du DIO enfle le BFR sans améliorer le service rendu ; l\u2019auditeur y voit aussi un risque comptable (stocks invendables à déprécier). Le dénominateur doit être cohérent avec la nature du stock (coût d\u2019achat des marchandises vendues pour les marchandises, coût de production des produits finis vendus pour la production).',
    example:
      'Stock de 200 000 € pour un coût d\u2019achat des marchandises vendues de 1 800 000 € → DIO = 200 000 ÷ 1 800 000 × 360 = 40 jours de consommation.',
    formula: 'DIO = Stock (ou stock moyen) ÷ Coût d\u2019achat (ou de production) des volumes écoulés × 360',
    referentiel: ' transversal',
    seeAlso: ['Stock (CMUP, FIFO)', 'BFR (besoin en fonds de roulement)', 'Cycle de conversion de trésorerie (CCC)'],
  },
  {
    id: 'lib-trs-07',
    domain: DOMAINS.tresorerie,
    term: 'Cycle de conversion de trésorerie (CCC)',
    definition:
      'Durée totale entre le décaissement des achats et l\u2019encaissement des ventes : CCC = DIO + DSO − DPO. Plus le cycle est court — ou négatif — plus le cycle d\u2019exploitation finance lui-même la trésorerie : levier majeur pour une PME et argument d\u2019entretien (agir sur les trois leviers : réduire les stocks, accélérer les encaissements, négocier les délais fournisseurs).',
    example:
      'DIO 40 j, DSO 60 j, DPO 40 j → CCC = 40 + 60 − 40 = 60 jours de CA à financer par le FR ou la dette bancaire.',
    formula: 'CCC = DIO + DSO − DPO',
    referentiel: ' transversal',
    seeAlso: ['DIO (délai de rotation des stocks)', 'DSO (délai moyen de recouvrement)', 'DPO (délai moyen de paiement fournisseurs)'],
  },
  {
    id: 'lib-trs-08',
    domain: DOMAINS.tresorerie,
    term: 'Virement en transit',
    definition:
      'Virement émis ou reçu enregistré par une partie mais pas encore par l\u2019autre (banque, entité du groupe) à la date d\u2019arrêté : il laisse un écart visible dans les comptes de transit, que le rapprochement de fin de période doit expliquer. En audit, le virement en transit est une zone à risque : chèques/virements émis en décembre et débités en janvier (à surveiller pour le cut-off), flux inter-compagnies non lettrés, doubles comptabilisations.',
    example:
      'Virement de 50 000 € émis le 30/12 du compte A, crédité sur le compte B le 02/01 : au 31/12, un compte d\u2019attente « virements en transit » absorbe l\u2019écart, apuré au rapprochement de janvier.',
    referentiel: ' transversal',
    seeAlso: ['Compte de suspens', 'Rapprochement bancaire', 'Suspens de trésorerie'],
  },
  {
    id: 'lib-trs-09',
    domain: DOMAINS.tresorerie,
    term: 'Suspens de trésorerie',
    definition:
      'Comptes d\u2019attente dédiés aux flux dont la contrepartie n\u2019est pas encore identifiée : virements reçus sans ordre de paiement, prélèvements sans référence, refacturations en cours, flux de centralisation. Un suspens apuré quotidiennement est la marque d\u2019un bon contrôle trésorerie ; un suspens ancien, croissant ou justifié à grand renfort de commentaires est le premier signal de fraude ou de perte d\u2019information — les montages frauduleux passent presque toujours par ces comptes.',
    example:
      'Prélèvement SEPA de 1 200 € sans facture au 31/12 : en suspens le temps de la réclamation fournisseur, puis apuré à réception de la pièce (charge rattachée à l\u2019exercice concerné).',
    referentiel: ' transversal',
    seeAlso: ['Compte de suspens', 'Virement en transit', 'Rapprochement bancaire'],
  },
  {
    id: 'lib-trs-10',
    domain: DOMAINS.tresorerie,
    term: 'Prévision de trésorerie (plan de trésorerie)',
    definition:
      'Projection des encaissements et décaissements (échéancier de factures TTC, paie, TVA, échéances d\u2019emprunts, impôts) par semaine ou par mois, avec calcul du solde de trésorerie cumulé, pour anticiper les besoins (mobilisation de lignes) et les excédents (placement). Le plan glissant (rolling forecast) est réactualisé chaque clôture mensuelle ; l\u2019analyse des écarts prévu/réalisé fiabilise progressivement les hypothèses (DSO et DPO constatés).',
    example:
      'Plan mensuel : solde initial 100 000 €, encaissements prévus 420 000 €, décaissements 510 000 € → solde final prévisionnel 10 000 € : décision d\u2019échelonner des paiements fournisseurs et de ne pas placer.',
    formula: 'Solde final = Solde initial + Encaissements − Décaissements',
    referentiel: ' transversal',
    seeAlso: ['Trésorerie nette (TN)', 'Cash pooling', 'Placement des excédents de trésorerie'],
  },
  {
    id: 'lib-trs-11',
    domain: DOMAINS.tresorerie,
    term: 'Cash pooling',
    definition:
      'Centralisation des soldes bancaires d\u2019un groupe : pooling physique (les soldes des comptes participants sont virés quotidiennement vers le compte chef, ramenés à zéro — target balancing) ou pooling virtuel (les soldes sont additionnés en net par la banque, sans mouvement). Objectifs : mutualiser excédents et découverts, réduire les frais financiers nets, concentrer la négociation bancaire. Exige une discipline de prévision, une convention cadre et l\u2019attention aux droits locaux (fiscalité, change).',
    example:
      'Trois filiales aux soldes +50 000, −20 000 et +10 000 € : le pooling laisse apparaître un solde net consolidé de +40 000 €, évitant un découvert coûteux chez la deuxième.',
    referentiel: ' transversal',
    seeAlso: ['Prévision de trésorerie (plan de trésorerie)', 'Virement en transit'],
  },
  {
    id: 'lib-trs-12',
    domain: DOMAINS.tresorerie,
    term: 'Affacturage (factoring)',
    definition:
      'Cession de créances clients à un factor qui assure le recouvrement et peut préfinancer les factures, avec ou sans recours contre le cédant, avec ou sans assurance-crédit. Effets : amélioration du BFR (les créances sont remplacées par de la trésorerie), externalisation du recouvrement et couverture du risque — au prix de commissions, d\u2019intérêts de préfinancement et d\u2019un impact relationnel client (le client est notifié de payer le factor).',
    example:
      '500 000 € de créances cédées avec financement à 90 % : 450 000 € de trésorerie immédiate, le solde (réserve) versé au recouvrement des débiteurs.',
    referentiel: ' transversal',
    seeAlso: ['Cession de créances (Dailly)', 'DSO (délai moyen de recouvrement)', 'Effet de commerce'],
  },
  {
    id: 'lib-trs-13',
    domain: DOMAINS.tresorerie,
    term: 'Cession de créances (Dailly)',
    definition:
      'Cession de créances professionnelles à un établissement de crédit, en garantie ou en mobilisation, par acte daté signé (mécanisme dit « Dailly », loi du 2 janvier 1981) : la banque est payée directement par les débiteurs notifiés. Distinct de l\u2019affacturage : c\u2019est une technique bancaire de mobilisation du poste clients, sans prestation de recouvrement ni d\u2019assurance-crédit, souvent utilisée en complément des lignes court terme.',
    example:
      'Une PME cède 200 000 € de créances clients à sa banque, qui lui avance 190 000 € — les clients notifiés règlent désormais la banque.',
    referentiel: ' transversal',
    seeAlso: ['Affacturage (factoring)', 'Effet de commerce', 'DSO (délai moyen de recouvrement)'],
  },
  {
    id: 'lib-trs-14',
    domain: DOMAINS.tresorerie,
    term: 'Emprunt à annuités constantes',
    definition:
      'Emprunt remboursé par une annuité constante (capital + intérêts) : l\u2019intérêt se calcule sur le capital restant dû, donc la part d\u2019intérêts décroît et la part d\u2019amortissement croît au fil du temps. Le tableau d\u2019amortissement alimente le plan de trésorerie (échéances TTC) et la séparation au bilan entre dette courante (échéance à moins d\u2019un an) et dette non courante.',
    example:
      'Emprunt de 100 000 € sur 4 ans à 5 % : annuité = 100 000 × 0,05 ÷ (1 − 1,05⁻⁴) ≈ 28 201 €. Année 1 : intérêts 5 000 €, amortissement 23 201 € ; année 2 : intérêts sur 76 799 € ≈ 3 840 €.',
    formula: 'Annuité constante = Capital × t ÷ (1 − (1 + t)⁻ⁿ)',
    referentiel: ' transversal',
    seeAlso: ['Prévision de trésorerie (plan de trésorerie)', 'Bilan'],
  },
  {
    id: 'lib-trs-15',
    domain: DOMAINS.tresorerie,
    term: 'Placement des excédents de trésorerie',
    definition:
      'Gestion des surplus de trésorerie selon le triptyque sécurité / liquidité / rendement : comptes à terme, SICAV monétaires, dépôts à vue rémunérés, accords de reverse repo — en veillant à l\u2019adéquation des durées avec le plan de trésorerie (pas de placement immobilisé face à un besoin prévisible à deux semaines) et à la sécurité de la contrepartie. Question d\u2019entretien récurrente : citer le triptyque et l\u2019exemple d\u2019un arbitrage cohérent avec les prévisions.',
    example:
      'Excédent prévisionnel stable de 200 000 € sur 6 mois : placement en compte à terme 6 mois plutôt qu\u2019en SICAV actions — liquidité, sécurité et rendement alignés sur le besoin.',
    referentiel: ' transversal',
    seeAlso: ['Prévision de trésorerie (plan de trésorerie)', 'Trésorerie nette (TN)'],
  },
  {
    id: 'lib-trs-16',
    domain: DOMAINS.tresorerie,
    term: 'Date de valeur',
    definition:
      'Date à laquelle une opération bancaire prend effet dans le calcul des intérêts — distincte de la date d\u2019opération/comptabilisation : barème de dates de valeur (J+1, J+2…) selon le sens du flux et le canal (guichet, virement SEPA, chèque). Le trésorier optimise ses transferts en jouant sur ces dates ; l\u2019auditeur, lui, veille à la comptabilisation au bon exercice sur la base de la date d\u2019opération, la date de valeur n\u2019étant qu\u2019une explication d\u2019écart dans le rapprochement bancaire.',
    example:
      'Remise de chèques du 31/12 créditée en valeur au 02/01 : en comptabilité, l\u2019encaissement reste attaché à l\u2019exercice clos ; il figure « en circulation » dans le rapprochement bancaire de clôture.',
    referentiel: ' transversal',
    seeAlso: ['Rapprochement bancaire', 'Virement en transit', 'Échelle d\u2019intérêts et agios'],
  },
  {
    id: 'lib-trs-17',
    domain: DOMAINS.tresorerie,
    term: 'Échelle d\u2019intérêts et agios',
    definition:
      'Relevé bancaire périodique des positions débitrices : dates de valeur, nombres débiteurs (solde × jours), intérêts débiteurs (agios), commissions et frais. Le contrôle des échelles d\u2019intérêts — taux appliqué, dates de valeur respectées, jours de banque, commissions non prévues — est un réflexe du trésorier et un travail d\u2019audit du cycle trésorerie ; il alimente la comptabilisation des charges financières de l\u2019exercice (cut-off des agios de décembre reçus en janvier).',
    example:
      'Position débitrice de 100 000 € pendant 30 jours au taux de 8 % : intérêts ≈ 100 000 × 8 % × 30/360 ≈ 666,67 €, à confronter à l\u2019échelle reçue de la banque.',
    formula: 'Intérêts (méthode des nombres) = Encours × taux × nombre de jours ÷ 360',
    referentiel: ' transversal',
    seeAlso: ['Date de valeur', 'Rapprochement bancaire'],
  },

  // -----------------------------------------------------------------
  // RÉFÉRENTIELS (10)
  // -----------------------------------------------------------------
  {
    id: 'lib-ref-01',
    domain: DOMAINS.referentiels,
    term: 'CGNC (Code général de normalisation comptable, Maroc)',
    definition:
      'Référentiel comptable marocain issu de la loi n° 9-88 relative aux obligations comptables des commerçants : plan comptable marocain en 8 classes (1 financement permanent, 2 actif immobilisé, 3 actif circulant hors trésorerie, 4 passif circulant hors trésorerie, 5 trésorerie — actif et passif, 6 charges, 7 produits, 8 comptes de résultats), tenue en partie double, journal, grand livre, balance et états de synthèse. ⚠ Règle différente du PCG : la classe 4 marocaine est un passif circulant (la française « tiers » est mixte), la classe 5 marocaine regroupe toute la trésorerie, et la classe 8 marocaine collecte les résultats quand la française recueille les engagements hors bilan.',
    example:
      'Un fournisseur à payer est classé 4xxx au Maroc (passif circulant) et 401 en France (tiers) : même dette, numérotation et lecture de bilan différentes.',
    referentiel: 'CGNC',
    seeAlso: ['États de synthèse marocains (CPC, ESG)', 'Plan comptable et classes de comptes', 'TVA marocaine'],
  },
  {
    id: 'lib-ref-02',
    domain: DOMAINS.referentiels,
    term: 'États de synthèse marocains (CPC, ESG)',
    definition:
      'Le CGNC prévoit cinq états de synthèse formant tronc commun : le bilan (BL), le compte de produits et charges (CPC), l\u2019état des soldes de gestion (ESG — retraitement du CPC en soldes intermédiaires : marge brute, valeur ajoutée, excédent brut d\u2019exploitation, résultat d\u2019exploitation et courant), le tableau de financement (TF) et l\u2019état des informations complémentaires (ETIC). ⚠ À différencier du PCG français (bilan, compte de résultat, annexe) et d\u2019IFRS (jeu complet : situation financière, résultat global, flux de trésorerie, variations des capitaux propres et notes).',
    example:
      'L\u2019EBE se lit directement dans l\u2019ESG marocain, alors qu\u2019en France il se calcule à partir du compte de résultat (soldes intermédiaires de gestion).',
    referentiel: 'CGNC',
    seeAlso: ['CGNC (Code général de normalisation comptable, Maroc)', 'Compte de résultat', 'Bilan'],
  },
  {
    id: 'lib-ref-03',
    domain: DOMAINS.referentiels,
    term: 'TVA marocaine',
    definition:
      'Taxe sur la valeur ajoutée du code général des impôts marocain : taux standard de 20 % et taux réduits de 14 %, 10 % et 7 % selon les biens et services, exonérations et régimes assimilés ; exigibilité selon la nature de l\u2019opération avec régimes des débits (facturation) ou des encaissements selon les cas ; déclarations mensuelles, ou trimestrielles pour les redevables dont le chiffre d\u2019affaires demeure sous le seuil fixé par la loi. ⚠ Règle différente de la France (taux 20 / 10 / 5,5 / 2,1 % et mécanique d\u2019exigibilité propre) : toujours vérifier les taux et seuils en vigueur auprès de la DGI avant l\u2019entretien.',
    example:
      'Prestation de services au Maroc au taux standard : 10 000 DH HT → 2 000 DH de TVA ; exigibilité selon le régime applicable à l\u2019opération (encaissement ou débit), à confirmer.',
    referentiel: 'CGNC',
    seeAlso: ['Exigibilité de la TVA', 'CGNC (Code général de normalisation comptable, Maroc)'],
  },
  {
    id: 'lib-ref-04',
    domain: DOMAINS.referentiels,
    term: 'PCG français (ANC)',
    definition:
      'Plan comptable général : nomenclature et règles comptables des comptes individuels français, fixé par règlement de l\u2019Autorité des normes comptables (ANC — notamment le règlement ANC n° 2014-03 dit « PCG 2014 », régulièrement modifié). Structure en classes 1 à 8 (la 8 recevant les engagements hors bilan), documents de synthèse (bilan, compte de résultat, annexe), principes directeurs (prudence, indépendance des exercices, coût historique). L\u2019ANC édicte aussi des règlements spécifiques et des avis. ⚠ Le PCG ne s\u2019applique ni au Maroc (CGNC) ni aux comptes consolidés IFRS des cotées.',
    example:
      'Une société française non cotée tient ses comptes individuels au PCG ; seuls ses comptes consolidés, si elle est cotée, sont en IFRS.',
    referentiel: 'PCG',
    seeAlso: ['Plan comptable et classes de comptes', 'Périmètre d\u2019application des IFRS', 'Image fidèle (régularité, sincérité)'],
  },
  {
    id: 'lib-ref-05',
    domain: DOMAINS.referentiels,
    term: 'IFRS (normes comptables internationales)',
    definition:
      'Corpus des normes IAS et IFRS émis par l\u2019IASB (IFRS Foundation) : objectif d\u2019une information financière utile à la décision économique des investisseurs, caractéristiques qualitatives (pertinence, représentation fidèle), primauté de la substance économique sur la forme juridique, juste valeur pour de nombreuses catégories d\u2019actifs, résultat global et notes volumineuses. Pas de plan de comptes imposé : c\u2019est un référentiel d\u2019objectifs et de principes plus qu\u2019une nomenclature.',
    example:
      'Un contrat de location de longue durée peut être substance d\u2019achat et imposé à l\u2019actif (droit d\u2019usage) alors que la forme juridique est un simple loyer.',
    referentiel: 'IFRS',
    seeAlso: ['Périmètre d\u2019application des IFRS', 'Coût historique', 'Compte de résultat'],
  },
  {
    id: 'lib-ref-06',
    domain: DOMAINS.referentiels,
    term: 'Périmètre d\u2019application des IFRS',
    definition:
      'En Europe, les normes IFRS s\u2019appliquent obligatoirement aux comptes consolidés des sociétés cotées (règlement (CE) n° 1606/2002) — elles ne sont PAS obligatoires pour toutes les sociétés : les comptes individuels français demeurent établis selon le PCG, et des options d\u2019application existent pour certains comptes consolidés de sociétés non cotées selon les États membres. Point d\u2019honnêteté technique en entretien : dire « les IFRS concernent le consolidé des cotées en Europe, pas la comptabilité sociale d\u2019une PME française » vaut mieux qu\u2019un discours vague.',
    example:
      'Une PME industrielle française non cotée : comptes individuels au PCG, sans obligation IFRS ; un groupe coté au CAC 40 publie ses comptes consolidés en IFRS.',
    referentiel: 'IFRS',
    seeAlso: ['IFRS (normes comptables internationales)', 'PCG français (ANC)'],
  },
  {
    id: 'lib-ref-07',
    domain: DOMAINS.referentiels,
    term: 'NEP (normes d\u2019exercice professionnel, France)',
    definition:
      'Normes d\u2019audit légal françaises : élaborées sous l\u2019égide du H3C (Haut conseil du commissariat aux comptes) et homologuées par arrêté du ministre de la Justice, elles s\u2019imposent au CAC pour l\u2019ensemble de la mission légale ; la CNCC publie la version consolidée et des guides d\u2019application. La numérotation suit la structure des ISA : NEP 200 (acceptation), NEP 315 (compréhension de l\u2019entité), NEP 320 (seuil), NEP 330 (réponses aux risques), NEP 500 (éléments probants), NEP 505 (confirmations), NEP 530 (échantillonnage), NEP 540 (estimations), NEP 700 (rapport).',
    example:
      'Un dossier d\u2019audit légal français se réfère aux NEP ; le même groupe audité au niveau mondial suit les ISA pour les entités hors France — d\u2019où l\u2019importance de connaître les deux vocabulaires.',
    referentiel: 'NEP',
    seeAlso: ['ISA (normes internationales d\u2019audit)', 'Commissaire aux comptes (CAC)', 'Seuil de signification'],
  },
  {
    id: 'lib-ref-08',
    domain: DOMAINS.referentiels,
    term: 'ISA (normes internationales d\u2019audit)',
    definition:
      'Normes internationales d\u2019audit de l\u2019IAASB (comité dépendant de l\u2019IFAC) : cadre mondial de l\u2019audit d\u2019états financiers — ISA 200 (objectifs généraux), ISA 315 (risques), ISA 320 (caractère significatif), ISA 330 (réponses), ISA 500 (éléments probants), ISA 700 (rapport). En France, la mission légale du CAC suit les NEP (proches mais avec des spécificités de droit français) ; les ISA s\u2019appliquent directement aux missions internationales et servent de référence aux auditeurs contractuels. La famille ISAE (dont ISAE 3000) couvre les autres missions d\u2019assurance (revues limitées, attestations).',
    example:
      'Un groupe coté audité par un réseau international : l\u2019audit du consolidé mondial suit les ISA, la mission légale française des filiales suit les NEP.',
    referentiel: ' transversal',
    seeAlso: ['NEP (normes d\u2019exercice professionnel, France)', 'Élément probant', 'Audit contractuel'],
  },
  {
    id: 'lib-ref-09',
    domain: DOMAINS.referentiels,
    term: 'Normes IIA (audit interne)',
    definition:
      'Normes internationales d\u2019audit interne de l\u2019IIA (Institute of Internal Auditors) : définition de l\u2019audit interne, code de déontologie (intégrité, objectivité, confidentialité, compétence), normes de qualification et de fonctionnement, et éléments obligatoires du service — charte d\u2019audit interne, plan fondé sur les risques, supervision, programme d\u2019assurance et d\u2019amélioration qualité et remontée des non-conformités. Référence mondiale pour structurer une fonction et évaluer sa conformité professionnelle.',
    example:
      'Une charte d\u2019audit interne approuvée par le comité d\u2019audit, un plan annuel fondé sur la cartographie des risques et des évaluations qualité périodiques : les piliers IIA en pratique.',
    referentiel: ' transversal',
    seeAlso: ['Audit interne', 'Les trois lignes de maîtrise', 'Gouvernement d\u2019entreprise'],
  },
  {
    id: 'lib-ref-10',
    domain: DOMAINS.referentiels,
    term: 'Dispositif de contrôle interne AMF (sociétés cotées)',
    definition:
      'Cadre de référence de l\u2019AMF décrivant le dispositif de contrôle interne attendu des émetteurs cotés (composantes de type COSO : environnement de contrôle, gestion des risques, activités de contrôle, information et communication, surveillance) et la présentation, par le président du conseil d\u2019administration, des conditions de préparation et d\u2019organisation des travaux du conseil et des procédures de contrôle interne internes (rapport prévu par le code de commerce pour les sociétés cotées). L\u2019AMF contrôle l\u2019information financière et le respect de son règlement général.',
    example:
      'Le rapport du président d\u2019une société cotée décrit les procédures de contrôle interne ; l\u2019AMF peut demander des compléments sur les comptes et l\u2019information donnée au marché.',
    referentiel: ' transversal',
    seeAlso: ['COSO', 'Gouvernement d\u2019entreprise', 'Contrôle interne'],
  },
]
