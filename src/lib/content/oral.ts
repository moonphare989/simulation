import type { OralTopic } from '@/lib/types'

// =====================================================================
// AuditLab — Réponses orales : 30 sujets d'entretien (PFE France).
// Trois versions calibrées (courte 20-30 s, standard 45-60 s,
// approfondie 90-120 s : définition → objectif → étapes → exemple
// chiffré fictif → conclusion). Français oral professionnel, phrases
// courtes. Tous les exemples chiffrés sont fictifs et pédagogiques.
// =====================================================================

export const oralTopics: OralTopic[] = [
  {
    id: 'o-001',
    domain: 'Audit & méthodologie',
    title: 'Audit légal vs audit contractuel',
    question: 'Quelle est la différence entre audit légal et audit contractuel ?',
    shortVersion:
      'L’audit légal est imposé par la loi. Le commissaire aux comptes certifie les comptes annuels, dès que certains seuils sont dépassés. L’audit contractuel, c’est le client qui le commande, pour un besoin précis : audit d’acquisition, revue de procédures. La boîte à outils est la même. Ce qui change, c’est le mandat : un cadre légal et un rapport normalisé, contre une lettre de mission et des objectifs négociés.',
    standardVersion:
      'Deux cadres, une même démarche. L’audit légal est une obligation : la loi désigne un commissaire aux comptes, qui certifie que les comptes annuels sont réguliers, sincères et donnent une image fidèle. Son rapport est normalisé, sa responsabilité est encadrée. L’audit contractuel est une commande de l’entité : audit d’acquisition avant une vente, audit de procédures, revue de cycle. Là, c’est la lettre de mission qui fixe le périmètre et les livrables. Les techniques se recoupent : prise de connaissance, évaluation du contrôle interne, contrôles substantifs. Mais l’audit légal suit des normes d’exercice professionnel, et son opinion s’adresse aux tiers. En résumé : même boîte à outils, mandat et destinataire différents.',
    deepVersion:
      'Définition d’abord. L’audit légal est une mission imposée par la loi : un commissaire aux comptes, désigné, certifie les comptes annuels. L’audit contractuel est une mission choisie : l’entité la commande pour un besoin précis. Objectif ensuite : certifier pour les tiers — actionnaires, banques, autorités — dans le légal ; répondre à une question de gestion dans le contractuel. Démarche : la prise de connaissance et l’évaluation du contrôle interne se retrouvent dans les deux, mais le légal suit des normes d’exercice professionnel, avec un programme de travail orienté risque et un rapport au format imposé. Exemple fictif : une société de 250 salariés, 40 millions d’euros de chiffre d’affaires, dépasse les seuils de désignation : elle a un CAC. Une PME de 3 millions d’euros, elle, n’en a pas — mais son dirigeant veut la vendre : l’acquéreur commande un audit d’acquisition, concentré sur les comptes de clôture, le cycle ventes et le passif. Même technicien, deux mandats. Le rythme diffère aussi : le CAC intervient chaque exercice, dans une mission permanente ; l’auditeur contractuel livre une étude ponctuelle, sur le périmètre demandé. Et la responsabilité n’a pas le même régime : encadrée par la loi pour l’un, par le contrat pour l’autre. Conclusion : je présente la différence par le destinataire du rapport — les tiers dans un cas, le commanditaire dans l’autre — parce que c’est ça qui détermine tout le reste : normes, responsabilité, étendue des travaux.',
    structure: [
      'Cadrer en une phrase : légal = obligation, contractuel = commande.',
      'Nommer l’intervenant et le référentiel : CAC et NEP d’un côté, lettre de mission de l’autre.',
      'Dérouler la différence d’objectif : certifier pour les tiers vs répondre à un besoin.',
      'Illustrer par un exemple : seuils de désignation vs audit d’acquisition.',
      'Conclure sur le destinataire du rapport — c’est lui qui commande tout le reste.',
    ],
    tips: [
      'Ne récitez pas les seuils exacts du Code de commerce : « dès que certains seuils sont dépassés » suffit, et évite un chiffre faux.',
      'Transition qui marque : « même boîte à outils, mandat différent ».',
      'Évitez « c’est quasiment pareil » : minimisez la différence et le recruteur relancera dessus.',
    ],
  },
  {
    id: 'o-002',
    domain: 'Audit & méthodologie',
    title: 'Les étapes d’une mission d’audit',
    question: 'Décrivez-moi les grandes étapes d’une mission d’audit.',
    shortVersion:
      'Je la découpe en quatre temps. Un : la planification — acceptation de la mission, prise de connaissance de l’entité, seuil de signification. Deux : l’évaluation du contrôle interne — je décris les procédures et je les teste. Trois : les contrôles substantifs sur les comptes — confirmation des tiers, examens des documents, recalculs. Quatre : la synthèse — récapitulation des anomalies, événements postérieurs, rapport. Et partout, la même discipline : chaque conclusion s’appuie sur des éléments probants documentés.',
    standardVersion:
      'Une mission d’audit se déroule en phases. D’abord la planification : lettre de mission, prise de connaissance du secteur et des processus, évaluation des risques, fixation du seuil de signification. Ensuite, l’évaluation du contrôle interne : description des procédures cycle par cycle, tests de conception et de fonctionnement. Cette étape détermine l’étendue des contrôles : un contrôle interne fiable me permet d’alléger, un contrôle défaillant m’oblige à renforcer. Puis les contrôles substantifs : confirmations directes des tiers, examens de pièces, recalculs, revues analytiques. Enfin la synthèse : récapitulatif des anomalies corrigées et non corrigées, examen des événements postérieurs à la clôture, et le rapport. Le fil rouge : chaque phase produit des documents de travail, parce qu’une conclusion non documentée n’est pas une conclusion.',
    deepVersion:
      'Je structure en quatre phases. Définition du cadre : la mission commence par la planification — acceptation, lettre de mission, compréhension de l’entité, de son secteur et de son contrôle interne. Objectif de cette phase : identifier où les risques de comptes significatifs se logent, et fixer le seuil de signification — en pratique une fraction d’un agrégat comme le résultat courant. Deuxième phase : l’évaluation du contrôle interne. Je décris les procédures par cycle — achats, ventes, trésorerie — puis je les teste : est-ce que la procédure décrite existe et fonctionne ? Un exemple fictif : sur le cycle achats, je teste que chaque facture est rapprochée du bon de commande et du bon de livraison avant paiement. Si le contrôle tient sur mon échantillon, je peux alléger les contrôles substantifs ; s’il casse, je renforce. Troisième phase : les contrôles substantifs — confirmations bancaires et clients, examens de pièces, recalculs, revues analytiques sur les variations de charges. Quatrième phase : la synthèse et le rapport — anomalies cumulées comparées au seuil, événements postérieurs, opinion. Exemple chiffré fictif : sur une mission, les anomalies non corrigées totalisent 80 000 euros contre un seuil à 150 000 — l’opinion reste sans réserve, mais tout est documenté et communiqué. Conclusion : une mission, c’est une progression du risque vers l’opinion, chaque étape laissant une trace vérifiable.',
    structure: [
      'Annoncer le découpage : planification, contrôle interne, contrôles substantifs, synthèse.',
      'Relier les étapes entre elles : le contrôle interne conditionne l’étendue des substantifs.',
      'Nommer les outils de chaque phase : lettre de mission, tests de procédures, confirmations.',
      'Donner un exemple chiffré : anomalies cumulées vs seuil de signification.',
      'Conclure sur la discipline commune : chaque phase documentée.',
    ],
    tips: [
      'Annoncez le plan avant de dérouler — « je la découpe en quatre temps » — le recruteur suit mieux.',
      'Marquez une micro-pause entre chaque phase : le rythme remplace la récitation.',
      'Évitez l’excès de détail sur une seule étape : si vous partez dans le cut-off à la première phrase, vous n’en sortirez pas.',
    ],
  },
  {
    id: 'o-003',
    domain: 'Audit & méthodologie',
    title: 'Test de conformité vs cheminement',
    question: 'Quelle différence entre un test de conformité et un test de cheminement ?',
    shortVersion:
      'Le cheminement, c’est suivre une transaction témoin de bout en bout : de la commande jusqu’au paiement, pour comprendre comment le système fonctionne réellement. Le test de conformité vérifie que la procédure écrite est appliquée telle quelle : est-ce que ça se passe comme c’est dit ? Le premier sert à connaître, le second à vérifier. En pratique, le cheminement vient souvent en premier — on ne teste la conformité qu’une fois le système compris.',
    standardVersion:
      'Deux outils d’approche du contrôle interne, deux intentions différentes. Le cheminement — walk-through en anglais — consiste à prendre une transaction, une seule, et à la suivre physiquement dans le système : la commande client, sa validation, la livraison, la facture, l’encaissement, la comptabilisation. Objectif : comprendre le flux réel, avec ses acteurs et ses systèmes, pas le flux décrit dans le manuel. Le test de conformité, lui, vérifie l’application : la procédure décrite est-elle respectée en pratique ? Je prélève quelques occurrences et je compare le fait à la règle. La séquence logique : cheminement d’abord pour comprendre, test de conformité ensuite pour vérifier, puis — si je m’appuie sur le contrôle — tests de fonctionnement sur un échantillon plus large. C’est une gradation : connaître, vérifier, s’appuyer.',
    deepVersion:
      'Définitions. Le cheminement : suivre une transaction témoin de bout en bout dans le système. Le test de conformité : vérifier que la procédure telle qu’elle est décrite est bien appliquée. Objectifs : le cheminement sert à comprendre — il répond à « comment ça marche vraiment ici ? » ; le test de conformité sert à vérifier — il répond à « est-ce que la règle écrite est respectée ? ». Démarche concrète : sur le cycle ventes, je choisis une facture ordinaire — disons la facture 1257, fictive — et je remonte la chaîne : commande signée, bon de livraison, facture éditée, comptabilisation, encaissement, lettrage. J’observe qui fait quoi, sur quel système, avec quel document. Ensuite, je teste la conformité : sur dix commandes, est-ce que la procédure d’acceptation client est appliquée à chaque fois ? Exemple chiffré fictif : la procédure prévoit un plafond de commande à 10 000 euros avec validation du directeur ; mon test de conformité sur 15 commandes montre que 2 au-delà du plafond sont passées sans validation — le contrôle n’est pas conforme. Conclusion : le cheminement éclaire, le test de conformité constate. À l’oral, je les relie simplement : connaître d’abord, vérifier ensuite, s’appuyer enfin — c’est cette progression qui structure toute l’approche du contrôle interne.',
    structure: [
      'Poser les deux définitions en une phrase chacune.',
      'Distinguer les objectifs : comprendre le flux réel vs vérifier la règle.',
      'Dérouler un cheminement concret : une transaction suivie de la commande au lettrage.',
      'Illustrer le test de conformité par un écart chiffré (plafond non respecté).',
      'Conclure sur la gradation : connaître, vérifier, s’appuyer.',
    ],
    tips: [
      'Le mot « walk-through » glissé une fois montre la lecture ; répété, il fait précieux — dites-le une seule fois.',
      'Les candidats confondent les deux : annoncez d’emblée « deux intentions différentes » pour montrer que vous savez où est le piège.',
      'Phrase de conclusion prête à l’emploi : « connaître, vérifier, s’appuyer ».',
    ],
  },
  {
    id: 'o-004',
    domain: 'Audit & méthodologie',
    title: 'Test substantif',
    question: 'C’est quoi un test substantif ?',
    shortVersion:
      'C’est un contrôle direct sur les comptes, par opposition au contrôle du système. Deux familles : les tests de détails — je vérifie le solde lui-même par confirmation tierce, examen de pièce, recalcul — et les procédures analytiques substantives — je confronte le solde à ce que j’attendais. Exemple : pour les créances clients, je circularise les clients, ou je vérifie que les encaissements de janvier soldent les factures de décembre. Le test substantif porte sur le chiffre ; le test de procédures porte sur le processus qui l’a produit.',
    standardVersion:
      'Un test substantif vise directement la validité des soldes et des transactions, là où les tests de procédures évaluent le contrôle interne. Deux familles. Les tests de détails : confirmation directe d’un tiers — banque, client, fournisseur, avocat —, examen des pièces justificatives, inspection physique des actifs, recalcul. Les procédures analytiques substantives : confronter le solde à une attente construite — cohérence entre charges et volumes, variation mensuelle des marges, corrélation loyers-surfaces. Le choix dépend du risque et du contrôle interne : un contrôle fort permet d’alléger, un contrôle faible impose des substantifs étendus. Exemple sur le cycle ventes : circularisation de clients sélectionnés, vérification du cut-off sur les dernières factures, et contrôle que les encaissements postérieurs soldent les créances à la clôture. En résumé : le substantif attaque le chiffre, le test de procédures attaque le processus qui l’a produit.',
    deepVersion:
      'Définition : un test substantif est un contrôle portant directement sur les soldes et les opérations, pour en vérifier l’existence, l’exhaustivité, l’évaluation ou le rattachement. Objectif : obtenir des éléments probants suffisants et pertinents sur le chiffre lui-même, indépendamment de la qualité du système. Deux familles : les tests de détails et les procédures analytiques substantives. Les détails : confirmation directe des tiers — la banque confirme le solde et les cautions ; un client confirme le solde de son compte ; inspection des immobilisations ; recalcul des amortissements ; examen de factures. L’analytique : je construis une attente indépendante — par exemple, les frais de téléphone par ligne et par mois, ou le carburant rapporté aux kilomètres de flotte — et j’explique l’écart. Exemple chiffré fictif : le compte clients affiche 1,2 million d’euros. Je circularise les clients représentant 60 % du solde ; 92 % des réponses concordent au centime ; pour deux écarts, l’un est un règlement en transit de 8 500 euros — confirmé par l’encaissement du 3 janvier — et l’autre une différence de TVA de 320 euros sur une facture client. Conclusion : le substantif, c’est la preuve du chiffre. Je conclus toujours par l’étendue — combien j’ai testé — et la limite — ce que je n’ai pas couvert et pourquoi — parce qu’une conclusion sans limite annoncée survend la preuve.',
    structure: [
      'Définir : contrôle direct sur les soldes et opérations.',
      'Opposer aussitôt aux tests de procédures : chiffre vs processus.',
      'Détailler les deux familles : tests de détails et analytique substantif.',
      'Donner un exemple chiffré : circularisation clients et traitement des écarts.',
      'Conclure par l’étendue et la limite — ne pas survendre la preuve.',
    ],
    tips: [
      'Évitez « je vérifie que c’est bon » : dites « existence, exhaustivité, évaluation, rattachement » — les critères précis rassurent.',
      'L’exemple vaut plus que la typologie : gardez une circularisation chiffrée en réserve.',
      'Terminer par la limite (« ce que je n’ai pas couvert ») est rare chez les candidats — c’est un marqueur de maturité.',
    ],
  },
  {
    id: 'o-005',
    domain: 'Audit & méthodologie',
    title: 'Seuil de signification',
    question: 'Comment déterminez-vous le seuil de signification ?',
    shortVersion:
      'C’est le montant au-delà duquel une anomalie influence le jugement du lecteur des comptes. Je le calibre sur une fraction d’un agrégat pertinent : 5 à 10 % du résultat courant, ou 0,5 à 1 % du chiffre d’affaires ou du bilan selon le profil. Pas de formule magique : une société en perte s’apprécie sur le chiffre d’affaires, et le choix se documente. En dessous, un plancher de travail oriente les tests.',
    standardVersion:
      'Le seuil de signification, c’est le montant à partir duquel une anomalie, seule ou cumulée, peut modifier l’opinion ou la décision du lecteur des comptes. La détermination combine référence et jugement. Référence : une fraction d’un agrégat — souvent 5 à 10 % du résultat courant, ou 0,5 à 1 % du chiffre d’affaires ou du total de bilan pour des structures à résultat volatil. Jugement : le profil de l’entité, les attentes des tiers — banques, actionnaires, autorité de marché — et les zones de risque. Une société déficitaire se juge plutôt sur le chiffre d’affaires ou les fonds propres qu’un bénéfice volatil. Deux compléments : le plancher de signification, plus strict, calibré la taille des anomalies individuelles à creuser ; et la réévaluation en fin de mission, quand je connais mieux les chiffres réels. Le point clé : le seuil se justifie par écrit, il ne se décrète pas.',
    deepVersion:
      'Définition : le seuil de signification est le montant au-delà duquel une anomalie — isolée ou cumulée avec d’autres — devient susceptible d’influencer la décision économique du lecteur des comptes. Objectif : concentrer les travaux sur ce qui compte et arbitrer en fin de mission entre les anomalies corrigées et non corrigées. Étapes de détermination : premièrement, choisir l’agrégat de référence — résultat courant pour une structure rentable et stable, chiffre d’affaires ou total de bilan quand le résultat est volatil ou faible ; deuxièmement, appliquer une fraction usuelle — de l’ordre de 5 à 10 % du résultat courant, 0,5 à 1 % du chiffre d’affaires — comme point de départ, pas comme verdict ; troisièmement, ajuster au contexte : attentes des prêteurs, réglementation, zones à risque identifiées ; enfin documenter. Exemple chiffré fictif : une société au résultat courant de 2 millions d’euros ; seuil provisoire à 10 %, soit 200 000 euros. En fin de mission, les anomalies non corrigées totalisent 150 000 euros — sous le seuil, l’opinion reste sans réserve — mais je les communique à la direction et je documente l’arbitrage. Et je fixe un plancher, disons 20 000 euros, en dessous duquel une anomalie individuelle n’est pas creusée sauf indice de fraude. Conclusion : le seuil n’est pas une règle, c’est un jugement documenté. Ce que je retiens pour l’oral : donner la fourchette, expliquer le choix de l’agrégat, et surtout dire qu’on l’écrit.',
    structure: [
      'Définir : le montant qui influence le jugement du lecteur.',
      'Donner les repères : fraction du résultat courant, du CA ou du bilan selon le profil.',
      'Expliquer l’ajustement au contexte et le choix de l’agrégat.',
      'Illustrer par un arbitrage chiffré de fin de mission (anomalies cumulées vs seuil).',
      'Conclure : un jugement documenté, pas une formule magique.',
    ],
    tips: [
      'Les fourchettes « 5 à 10 % » se donnent avec précaution : « ordres de grandeur usuels, pas des règles ».',
      'Le mot-clé qui rassure : « je le documente » — un seuil non écrit n’existe pas pour un tiers.',
      'Si le recruteur demande un chiffre unique, résistez : expliquez que l’agrégat se choisit selon le profil de l’entité.',
    ],
  },
  {
    id: 'o-006',
    domain: 'Audit & méthodologie',
    title: 'Éléments probants',
    question: 'Qu’est-ce qu’un élément probant, et qu’est-ce qui en fait la qualité ?',
    shortVersion:
      'C’est l’information sur laquelle je m’appuie pour fonder ma conclusion — une confirmation bancaire, une facture, un procès-verbal d’inventaire. Trois critères de qualité : la pertinence, ça répond à l’objectif du contrôle ; la suffisance, il en faut assez, ça dépend du risque ; et la fiabilité de la source. Et une hiérarchie se dégage : un document externe obtenu directement du tiers pèse plus qu’un document interne généré par l’entité. La preuve, en audit, ça se pèse et ça se garde.',
    standardVersion:
      'Un élément probant, c’est toute information qui fonde l’opinion : confirmations de tiers, documents comptables, observations physiques, recalculs, données analytiques. Sa qualité se juge sur trois axes. La pertinence : l’information répond-elle à l’objectif du contrôle — une facture prouve l’existence d’une charge, pas son rattachement à l’exercice. La suffisance : la quantité dépend du risque d’anomalie et de la qualité du contrôle interne — plus de risque, plus de preuves. La fiabilité : elle croît quand la source est externe, quand le document est original, quand il est obtenu directement par l’auditeur. D’où la hiérarchie pratique : une confirmation bancaire reçue directement pèse plus qu’un relevé fourni par le client ; une confirmation d’avocat pèse plus qu’une estimation interne d’un litige. Et une règle d’or : la preuve se documente — origine, étendue, résultats — parce qu’un élément probant non archivé n’existe pas pour le relecteur.',
    deepVersion:
      'Définition : un élément probant est une information collectée et évaluée par l’auditeur pour fonder son opinion sur les comptes. Objectif : transformer un doute raisonnable en conviction raisonnable — les comptes sont audités, pas reconstitués. Étapes : je collecte par des tests de procédures et des tests substantifs ; j’évalue sur trois critères ; j’archive. Les critères : pertinence — le lien entre la preuve et l’objectif ; suffisance — le volume, calibré sur le risque ; fiabilité — la source. La hiérarchie de fiabilité, en pratique : une confirmation obtenue directement du tiers — banque, client, avocat — domine ; un document externe daté et signé — facture fournisseur — vient ensuite ; un document interne — bon de livraison édité par l’entité — pèse moins ; une déclaration orale de la direction ne suffit jamais seule. Exemple chiffré fictif : sur le litige prud’homal du client, la direction évoque 60 000 euros probablement. La preuve forte, c’est la confirmation de l’avocat : « risque de condamnation estimé entre 50 000 et 80 000 euros » — je documente la provision à 80 000 euros sur la borne haute, hypothèse prudente notée dans le mémo. Conclusion : la qualité d’une preuve se défend à l’oral par trois mots — pertinent, suffisant, fiable — et un exemple de hiérarchie de sources. Éviter l’écueil inverse : la surcollecte de documents inutiles, qui noie le dossier et ne renforce pas la conclusion.',
    structure: [
      'Définir : une information qui fonde l’opinion.',
      'Énoncer les trois critères : pertinent, suffisant, fiable.',
      'Dérouler la hiérarchie de fiabilité : externe direct, externe, interne, déclaration.',
      'Illustrer : litige provisionné sur confirmation d’avocat, avec chiffres.',
      'Conclure : preuve archivée, hypothèse prudente, pas de surcollecte.',
    ],
    tips: [
      'Trois mots à aligner d’emblée : « pertinent, suffisant, fiable » — le triptyque structure toute la réponse.',
      'Évitez « preuve irréfutable » : en audit on obtient une conviction raisonnable, pas une certitude judiciaire.',
      'La phrase de fin « une preuve non archivée n’existe pas » marque l’esprit pratique du métier.',
    ],
  },
  {
    id: 'o-007',
    domain: 'Audit & méthodologie',
    title: 'Échantillonnage en audit',
    question: 'Comment constituez-vous un échantillon en audit ?',
    shortVersion:
      'Deux approches. L’échantillon raisonné : je choisis selon le risque — les montants au-dessus d’un seuil, les opérations sensibles, les périodes de clôture. L’échantillon statistique : sélection aléatoire dans une population homogène, taille liée au risque accepté, et — c’est l’avantage — je peux extrapoler les anomalies à toute la population. Le raisonné cible, le statistique mesure. En pratique, je combine : tout ce qui est significatif en raisonné, plus un tirage aléatoire pour juger le reste.',
    standardVersion:
      'Je distingue deux approches, avec deux usages différents. L’échantillon raisonné — ciblé — oriente le risque : je sélectionne en priorité les montants individuellement significatifs, les écritures manuelles de clôture, les opérations inhabituelles, les tiers sensibles. Il est excellent pour concentrer le travail, mais il ne permet pas d’extrapoler : ce que je trouve ne dit rien du reste. L’échantillon statistique, lui, repose sur une sélection aléatoire dans une population homogène : la taille se calcule à partir du risque accepté et du taux d’anomalie toléré. Son avantage décisif : l’extrapolation — si je trouve 2 % d’anomalies sur mon tirage, je peux estimer 2 % d’anomalies dans la population, avec un intervalle de confiance. En pratique, la combinaison est courante : les gros montants à 100 %, un raisonné sur les zones à risque, et un tirage aléatoire sur le solde de la population. Et quoi qu’il arrive : la méthode de sélection s’écrit dans le mémo, sinon le résultat n’est pas défendable.',
    deepVersion:
      'Définition : l’échantillonnage est l’application de contrôles à une partie d’une population, pour tirer une conclusion sur le tout. Objectif : couvrir le risque sans tout contrôler — parce que l’audit à 100 % n’existe que sur les populations finies et significatives. Étapes de constitution : d’abord définir la population — homogène, complète, sans doublons ; puis choisir l’approche. Raisonné : je cible — montants au-dessus du seuil de signification individuel, écritures de fin de période, fournisseurs nouveaux, opérations en cash. Statistique : tirage aléatoire, taille liée au risque d’anomalie accepté et au taux toléré ; en sortie, extrapolation possible. Exemple chiffré fictif : une population de 1 200 factures d’achats, 2,4 millions d’euros. Je contrôle à 100 % les 40 factures au-delà de 20 000 euros — 1,1 million, 46 % du montant. Sur le reste, tirage aléatoire de 60 factures : je détecte 3 anomalies de codification TVA, soit 5 % — extrapolé à la population résiduelle, je chiffre l’incidence potentielle et je la compare au seuil. Les anomalies détectées, elles, se traitent une par une, quelle que soit leur taille, si elles révèlent une fraude ou un contournement. Conclusion : je résume toujours par « le raisonné cible, le statistique mesure » — et je précise que la méthode se documente, parce qu’un échantillon non justifié est une opinion, pas un contrôle.',
    structure: [
      'Définir : contrôler une partie pour conclure sur le tout.',
      'Séparer raisonné et statistique, avec leur usage propre.',
      'Expliquer la constitution : population homogène, seuils, aléatoire.',
      'Dérouler l’exemple chiffré : 1 200 factures, contrôle intégral au-delà d’un seuil, extrapolation.',
      'Conclure : « le raisonné cible, le statistique mesure » — et la méthode s’écrit.',
    ],
    tips: [
      'L’erreur classique du candidat : oublier que seul le statistique s’extrapole. Dites-le explicitement.',
      'Gardez un exemple à deux couches (100 % sur le significatif + tirage sur le reste) : c’est le réflexe du praticien.',
      'Ne confondez pas seuil de signification et seuil de sélection : le premier arbitre l’opinion, le second oriente l’échantillon.',
    ],
  },
  {
    id: 'o-008',
    domain: 'Audit & méthodologie',
    title: 'Revue analytique',
    question: 'À quoi sert une revue analytique ?',
    shortVersion:
      'À confronter les comptes à une attente indépendante. Je construis ce que les charges devraient faire — volumes, effectifs, historiques — et j’analyse les écarts. Exemple : les frais de personnel montent de 18 % avec un effectif stable. Soit une explication à obtenir et vérifier, soit une anomalie. Deux usages : en planification, pour repérer les zones à risque ; en fin de mission, comme contrôle global de cohérence.',
    standardVersion:
      'La revue analytique confronte les données comptables à des attentes construites indépendamment. Concrètement : des ratios, des variations mensuelles, des corrélations — charges de personnel contre effectif et heures payées, électricité contre tonnes produites, loyers contre surfaces occupées, marge par produit contre historique. Deux usages. En planification : les écarts inexpliqués désignent les cycles où les contrôles seront renforcés — c’est une carte du risque. En fin de mission : la revue globale vérifie que l’ensemble des comptes est cohérent avec ce que je sais de l’activité — c’est un filet de sécurité final. La méthode a une limite : l’explication du client ne clôt rien tant qu’elle n’est pas validée par un élément fiable — la convention collective, la facture, le tableau d’amortissement. Et une règle : une corrélation qui marche trop bien — variation quasi nulle partout — mérite aussi une explication, parce qu’un compte peut être « calé » sur le budget.',
    deepVersion:
      'Définition : la revue analytique est l’examen de données et corrélations plausibles entre comptes, pour identifier les écarts significatifs entre attendu et réalisé. Objectif : repérer le risque et vérifier la cohérence d’ensemble, à moindre coût — c’est le contrôle le moins coûteux par euro couvert. Étapes : construire une attente indépendante — à partir de volumes, d’effectifs, d’historiques, de ratios sectoriels ; comparer au réalisé ; identifier les écarts significatifs ; demander l’explication ; la valider par une preuve ; conclure. Exemple chiffré fictif : les frais de téléphonie mobile passent de 54 000 à 71 000 euros, plus 31 %, alors que l’effectif est passé de 120 à 123 personnes. Écart à interroger. Explication obtenue : migration vers des forfaits data en mars. Validation : je recalcul le coût théorique — 123 lignes à 48 euros, plus les options — j’obtiens 71 000 environ, et je vérifie deux factures d’opérateur. L’écart devient expliqué et validé : la revue analytique a fait son travail. Contre-exemple : personne ne m’explique — là, le contrôle substantif prend le relais, par examen de factures sur échantillon. Conclusion : la revue analytique oriente et conforte, elle ne prouve pas seule. À l’oral, la formule qui résume : « je compare le réalisé à un attendu que je construis moi-même — et une explication sans validation ne clôt rien ».',
    structure: [
      'Définir : confronter le réalisé à un attendu construit indépendamment.',
      'Situer les deux usages : planification (carte du risque) et fin de mission (filet global).',
      'Dérouler la méthode : attente, comparaison, écart, explication, validation.',
      'Dérouler l’exemple chiffré : téléphonie + 31 %, recalcul théorique, factures.',
      'Conclure : oriente et conforte, mais ne prouve pas seule.',
    ],
    tips: [
      'Un chiffre d’exemple vaut dix principes : gardez « téléphonie + 31 % » en poche.',
      'Évitez « je fais des ratios » — dites quelles corrélations : personnel/effectif, électricité/tonnes.',
      'Marquez le point rare : une variation trop plate mérite aussi une explication.',
    ],
  },
  {
    id: 'o-009',
    domain: 'Cycles & contrôles',
    title: 'Cycle achats-fournisseurs',
    question: 'Quels contrôles clés réalisez-vous sur le cycle achats-fournisseurs ?',
    shortVersion:
      'Le contrôle central, c’est le rapprochement à trois voies : bon de commande, bon de livraison, facture — quantités et prix concordent avant paiement. Autour : la séparation des tâches — celui qui commande n’est pas celui qui réceptionne, ni celui qui paie ; la validation des factures dans les délégations ; le cut-off — les factures non parvenues à la clôture ; et la balance fournisseurs, avec ses comptes débiteurs à comprendre. L’enjeu : payer ce qu’on a réellement reçu, au prix convenu, dans le bon exercice.',
    standardVersion:
      'Je structure le cycle achats par ses points de contrôle. En amont, la séparation des fonctions : commande, réception, comptabilisation, paiement — quatre rôles distincts, sinon la fraude devient simple. Au cœur, le rapprochement à trois voies : chaque facture est confrontée au bon de commande et au bon de livraison — quantités reçues, prix convenu — avant validation. Ensuite, les validations : respect des délégations, plafonds, imputations comptables cohérentes. En clôture, le cut-off : les biens reçus non facturés partent en factures non parvenues — un stock de fin de période livré mais non facturé doit engendrer une dette. Enfin, la balance fournisseurs : je m’attends à un solde créditeur ; un compte fournisseur débiteur — on a payé plus qu’on ne devait — s’analyse comme une avance ou une anomalie. Et le risque fraude reste en filigrane : facture fictive, fournisseur créé de toutes pièces, doublon de paiement — d’où l’intérêt des contrôles de doublons et du référentiel fournisseurs.',
    deepVersion:
      'Définition du périmètre : le cycle achats va de l’expression du besoin au paiement du fournisseur. Objectif des contrôles : existence et évaluation des dettes, exhaustivité, rattachement à l’exercice — et prévention de la fraude. Étapes de contrôle : un, la séparation des fonctions — commande, réception, comptabilisation, paiement, réconciliation — chacun son rôle ; deux, le rapprochement à trois voies sur facture : commande, réception, facturation — quantités et prix ; trois, la revue des validations — délégations, seuils, imputations ; quatre, la balance fournisseurs — ancienneté, comptes débiteurs, lettrage ; cinq, le cut-off de clôture. Exemple chiffré fictif : à la clôture du 31/12, le dernier bon de livraison est le 30/12 à 23 h — les marchandises reçues ce jour-là, 46 000 euros de denrées, sans facture au 31/12, donnent lieu à facture non parvenue : charge et dette enregistrées. Symétriquement, une facture reçue le 2/01 pour une livraison du 12/01 ne charge pas l’exercice clos. Contrôle du doublon : la même facture 8 300 euros saisie deux fois — la MEFC sur la référence la fait sauter. Conclusion : je résume le cycle par son enjeu — « payer ce qu’on a reçu, au prix convenu, dans le bon exercice » — et je précise que le contrôle s’appuie sur le rapprochement à trois voies comme colonne vertébrale.',
    structure: [
      'Cadrer le périmètre : du besoin au paiement.',
      'Énoncer la colonne vertébrale : rapprochement à trois voies.',
      'Dérouler les contrôles d’entourage : séparations, délégations, balance, doublons.',
      'Illustrer le cut-off avec un exemple chiffré (FNP de fin d’année).',
      'Conclure par l’enjeu en une phrase : payer ce qu’on a reçu, au prix convenu, au bon exercice.',
    ],
    tips: [
      'La séparation des tâches se raconte en rôles — « celui qui commande ne réceptionne pas » — pas en théorie.',
      'Le rapprochement à trois voies est le terme attendu : si le recruteur dit « three-way match », reprenez le terme français.',
      'Évitez de tout mettre au même niveau : hiérarchisez, le trois-voies d’abord.',
    ],
  },
  {
    id: 'o-010',
    domain: 'Cycles & contrôles',
    title: 'Cycle ventes-clients',
    question: 'Quels sont les points de contrôle clés du cycle ventes ?',
    shortVersion:
      'Trois temps. La prise de commande : acceptation du client, encadrement des encours, validation des prix. La facturation : séparation commande / facturation / encaissement, cut-off — tout ce qui est livré avant la clôture doit être facturé, rien d’autre. Puis le recouvrement : lettrage des comptes, balance âgée, dépréciation des créances douteuses. L’enjeu : reconnaître un chiffre d’affaires réel et recouvrable — ni anticipé, ni omis, ni gonflé.',
    standardVersion:
      'Le cycle ventes se contrôle de la commande à l’encaissement. D’abord l’acceptation client : encours autorisé, solvabilité, validation selon délégations — le contrôle en amont évite les créances pourries. Ensuite la facturation : séparation des rôles entre commande, facturation et encaissement ; prix conformes aux tarifs et aux conditions ; et surtout le cut-off — le chiffre d’affaires se rattache à la livraison : tout ce qui est livré avant la clôture doit être facturé, via les produits non encore facturés le cas échéant, et une facture de janvier pour une livraison de décembre ne gonfle pas l’exercice clos. Enfin le recouvrement : lettrage des règlements sur les factures, balance âgée des créances, identification des comptes anciens, dépréciation des créances douteuses sur perte probable. Deux contrôles complémentaires : la TVA collectée — cohérence entre CA et TVA déclarée, taux appliqués — et la revue des avoirs et retours, zone classique d’abus. L’enjeu résumé : un CA réel, recouvrable, au bon exercice.',
    deepVersion:
      'Définition du périmètre : du bon de commande client à l’encaissement et au lettrage. Objectif : validité du chiffre d’affaires — existence, exhaustivité, évaluation, rattachement. Étapes de contrôle : un, l’acceptation client — encours plafonnés, vérification de solvabilité, délégations ; deux, la livraison et la facturation — séparation des rôles, prix conformes aux conditions, déclenchement de la facture par la livraison ; trois, le cut-off de clôture ; quatre, les encaissements — imputation, lettrage, écarts ; cinq, la dépréciation. Exemple chiffré fictif : à la clôture du 31/12, un client a reçu 38 000 euros de marchandises le 30, non facturées : j’enregistre un produit non encore facturé — CA et créance au 31/12. À l’inverse, une facture du 3/01 pour une livraison du 8/01 ne rentre pas. Sur le recouvrement : le client X présente 22 000 euros de créances, dont 12 000 euros à plus de 120 jours, avec relances sans effet — perte probable estimée à 60 % du stock ancien, dépréciation de 7 200 euros, documentée par la balance âgée et l’historique des règlements. Contrôle TVA : CA TTC de l’exercice, cohérence avec la TVA collectée déclarée, sondage de taux par nature de produit. Conclusion : le cycle ventes se résume par son triple enjeu — réalité, rattachement, recouvrabilité — et chaque enjeu a son outil : le trois-rôles séparés, le cut-off, la balance âgée.',
    structure: [
      'Cadrer le périmètre : de la commande au lettrage.',
      'Dérouler les temps forts : acceptation, facturation, encaissement.',
      'Creuser le cut-off avec un exemple chiffré dans les deux sens.',
      'Traiter le recouvrement : balance âgée, dépréciation chiffrée.',
      'Conclure : réalité, rattachement, recouvrabilité.',
    ],
    tips: [
      'Le CA est le compte le plus sensible de l’opinion : dites-le — « c’est le solde que le recruteur attend en premier ».',
      'Coupez court aux généralités : un exemple de cut-off chiffré vaut mieux que trois définitions.',
      'Évitez « les clients sont des voleurs » : restez factuel — risque, contrôle, preuve.',
    ],
  },
  {
    id: 'o-011',
    domain: 'Cycles & contrôles',
    title: 'Cycle trésorerie',
    question: 'Comment audite-t-on la trésorerie ?',
    shortVersion:
      'Par des preuves directes : c’est le compte le plus exposé. La confirmation bancaire, obtenue de la banque — soldes, emprunts, cautions. Le rapprochement revu et re-calculé : chèques émis non débités et remises en transit s’analysent et se datent. La séparation des tâches : qui paie n’enregistre pas. Le cut-off des virements de fin d’exercice, zone classique de manipulation. La trésorerie se confirme auprès de la banque — elle ne se déduit pas des livres du client.',
    standardVersion:
      'La trésorerie concentre risque de fraude et simplicité de preuve. Les contrôles clés : la confirmation bancaire directe — pour chaque compte : soldes à la date de clôture, emprunts attachés, cautions et sûretés, personnes habilitées à signer ; le relevé de la banque, pas celui du client. Ensuite le rapprochement bancaire : je le reprends, je re-calcule, et j’analyse les éléments en transit — chèques émis non débités : sont-ils présentés rapidement ou « dormiraient-ils » ? remises en chemin : quel délai ? Un chèque émis depuis plus de six mois non débité appelle une explication. Puis la séparation des fonctions : le rapprochement est fait par quelqu’un qui n’enregistre ni n’approuve les paiements. Le cut-off : les virements émis autour de la clôture — un virement du 31/12 débité le 2/01 reste une sortie de trésorerie de l’exercice. Enfin la revue des frais bancaires et emprunts : cohérence des intérêts avec les tableaux d’amortissement. En résumé : confirmer, rapprocher, séparer, dater.',
    deepVersion:
      'Définition du périmètre : comptes bancaires, caisses, instruments de paiement, et leur environnement — emprunts et cautions. Objectif : existence et propriété des soldes, exhaustivité des dettes financières attachées, séparation des pouvoirs, rattachement des flux. Étapes : un, obtenir directement de chaque banque la confirmation — solde à la clôture, mais aussi cautions, aval, signatures autorisées, comptes fermés dans l’année ; deux, reprendre le rapprochement bancaire du client : re-calcul, pointage, et analyse des éléments en transit datés ; trois, vérifier la séparation des tâches sur les paiements ; quatre, tester le cut-off des virements autour de la clôture ; cinq, recouper les frais financiers avec les contrats. Exemple chiffré fictif : la banque confirme un solde de 1 245 300 euros. Le compte 512 du client affiche 1 249 900 euros. Le rapprochement explique l’écart : un chèque émis de 8 400 euros non débité au 31/12, une remise de chèques de 3 800 euros en chemin. Re-calcul : 1 249 900 − 8 400 + 3 800 = 1 245 300 : concordance. Mais je note que le chèque de 8 400 euros est daté du 14/09 — trois mois et demi sans présentation : je demande la pièce et l’explication ; c’est aussi parfois un chèque jamais envoyé, donc une dette toujours vivante. Conclusion : la formule à retenir — « la trésorerie se confirme, se rapproche et se date » — et le réflexe de regarder l’ancienneté des éléments en transit, pas seulement leur montants.',
    structure: [
      'Cadrer : soldes, instruments, et environnement bancaire.',
      'Annoncer la preuve reine : la confirmation directe de la banque.',
      'Dérouler le rapprochement re-calculé et l’analyse des éléments en transit.',
      'Illustrer par un rapprochement chiffré qui concorde — avec le chèque « endormi ».',
      'Conclure : confirmer, rapprocher, séparer, dater.',
    ],
    tips: [
      'Insistez sur « obtenu directement de la banque » : le relevé fourni par le client n’a pas la même force.',
      'L’anecdote du chèque endormi transforme une liste en histoire — les recruteurs s’en souviennent.',
      'Évitez « la trésorerie, c’est simple » : dites plutôt « preuve simple, risque élevé ».',
    ],
  },
  {
    id: 'o-012',
    domain: 'Cycles & contrôles',
    title: 'Coupure d’exercice (cut-off)',
    question: 'Expliquez-moi la coupure d’exercice.',
    shortVersion:
      'C’est le rattachement de chaque opération au bon exercice. Une charge appartient à l’exercice qui la consomme, un produit à celui qui la réalise — la date de paiement ou de facture ne suffit pas. Le test classique : je prends les dernières livraisons et factures avant la clôture, et les premières après, et je vérifie la continuité des numéros et le rattachement. Les états de clôture associés : charges constatées d’avance, factures non parvenues, et leurs symétriques produits. Le cut-off est la zone de manipulation favorite du résultat.',
    standardVersion:
      'La coupure d’exercice garantit que chaque flux tombe dans le bon exercice. Le principe : une charge se rattache à la période de consommation, un produit à la période de réalisation — pas au paiement, pas à la facture. La méthode de test : sélectionner les dernières opérations avant la clôture et les premières après — livraisons, factures, virements — vérifier la chronologie des documents et la continuité des séquences de numérotation ; toute rupture de séquence s’explique. Les états de clôture qui matérialisent le cut-off : charges constatées d’avance — payées mais consommées ensuite ; factures non parvenues — reçues non facturées ; et côté produits : produits constatés d’avance et produits non encore facturés. Exemple : une livraison du 30/12 non facturée au 31/12 doit figurer en produit non encore facturé et en créance ; une facture du 3/01 pour un abonnement couvrant l’année suivante ne charge pas l’exercice clos. Pourquoi c’est sensible : quelques jours de décalage suffisent à déplacer des montants significatifs — c’est la manipulation de résultat la plus discrète.',
    deepVersion:
      'Définition : la coupure d’exercice — cut-off — est le contrôle du rattachement chronologique des opérations à l’exercice comptable. Objectif : que chaque exercice porte ses charges et ses produits, ni plus ni moins. Étapes du test : un, identifier le dernier document de chaque nature avant la clôture — dernier bon de livraison, dernière facture, dernier virement — et le premier après ; deux, vérifier la continuité des séquences de numérotation — une facture manquante dans la séquence s’explique ou s’investigue ; trois, rattacher chaque document à son exercice selon la date de transfert du bien ou de consommation du service ; quatre, passer les écritures de clôture nécessaires. Exemple chiffré fictif : la dernière facture de vente est la 4512, au 30/12 ; la première de janvier est la 4513 — la séquence tient. Mais un bon de livraison du 30/12 à 23 h, 38 000 euros, n’a pas de facture au 31/12 : produit non encore facturé — CA et créance de l’exercice. Symétriquement, la facture d’électricité couvrant décembre arrive le 5/01 : facture non parvenue — charge et dette au 31/12. Et l’abonnement logiciel payé le 15/12 pour l’année suivante : charge constatée d’avance — actif. Conclusion : je termine par l’enjeu — le cut-off est la manipulation de résultat la plus silencieuse, donc l’un des tests systématiques — et par la méthode en une phrase : « je trace les documents autour de la clôture, je vérifie les séquences, je rattache par la date de fait, pas par la date de papier ».',
    structure: [
      'Définir : rattachement de chaque flux au bon exercice.',
      'Énoncer la règle de fond : date de fait — livraison, consommation — pas date de papier.',
      'Dérouler le test : derniers et premiers documents, continuité des séquences.',
      'Illustrer avec les quatre états de clôture chiffrés (PNR, FNP, CCA).',
      'Conclure sur l’enjeu : la manipulation la plus silencieuse du résultat.',
    ],
    tips: [
      'La formule « date de fait, pas date de papier » sonne juste et se retient.',
      'Ayez les quatre sigles dans l’ordre : CCA, FNP, PCA, PNR — l’inverse des paires charge/produit.',
      'Ne dites pas « je vérifie les dates » : tout le monde vérifie des dates ; dites que vous tracez les séquences de numérotation.',
    ],
  },
  {
    id: 'o-013',
    domain: 'Comptabilité & clôture',
    title: 'CCA, FNP, PCA, PNR',
    question: 'Quelle différence entre charges constatées d’avance, factures non parvenues, produits constatés d’avance et produits non encore facturés ?',
    shortVersion:
      'Deux paires symétriques. Côté charges : la charge constatée d’avance — payée mais consommée ensuite, un actif ; la facture non parvenue — consommée mais non facturée, une dette. Côté produits : le produit constaté d’avance — encaissé d’avance, un passif ; le produit non encore facturé — livré mais non facturé, une créance. Mémo : l’avance inverse le flux enregistré ; le non-parvenu compense une absence.',
    standardVersion:
      'Quatre états de clôture, deux paires. Charges constatées d’avance : une charge comptabilisée mais dont une partie appartient à l’exercice suivant — assurance annuelle payée en octobre : au 31/12, neuf mois passés à l’actif. Factures non parvenues : le bien ou le service est reçu, la facture pas encore — la livraison de décembre facturée en janvier : charge et dette comptabilisées, sur justification du bon de réception. Produits constatés d’avance : l’encaissement est déjà là, la prestation pas encore — l’abonnement client encaissé en décembre pour l’année suivante : un passif, la dette de prester. Produits non encore facturés : la prestation est faite, la facture pas — livraison de décembre, facture de janvier : produit et créance reconnus. La logique d’ensemble : l’exercice porte ce qu’il consomme et ce qu’il réalise. CCA et PCA annulent un excès d’enregistrement ; FNP et PNR corrigent un manque. Et les quatre se testent par la coupure d’exercice.',
    deepVersion:
      'Définitions en une ligne chacune. CCA : charge enregistrée mais rattachable à l’exercice suivant — un actif. FNP : bien ou service reçu, non facturé à la clôture — une dette. PCA : produit enregistré ou encaissé, rattachable à l’exercice suivant — un passif. PNR : prestation réalisée, non facturée — une créance. Objectif de ces écritures : couper l’exercice au vrai — indépendamment des dates de paiement et de facturation. Étapes de mise en œuvre : identifier les flux qui chevauchent la clôture — par revue des dernières et premières factures, des abonnements, des contrats ; chiffrer la part d’avance ou le montant non facturé ; passer l’écriture de régularisation ; la documenter. Exemples chiffrés fictifs : assurance annuelle de 12 000 euros payée le 1er octobre — au 31/12, CCA de 9 000 euros : trois mois pour l’exercice, neuf pour le suivant. Électricité de décembre, 4 200 euros, facture reçue le 6/01 : FNP de 4 200. Abonnement SaaS encaissé le 20/12, 24 000 euros pour l’année à venir : PCA de 24 000. Livraison au client le 30/12, 38 000 euros, facture émise le 3/01 : PNR de 38 000 — chiffre d’affaires et créance de l’exercice. Conclusion : le mémo que je retiens — l’avance inverse le flux enregistré : la charge en trop devient actif, le produit en trop devient passif ; le non-parvenu crée ce qui manque : dette côté charges, créance côté produits. À l’oral, cette phrase de symétrie suffit à montrer que la mécanique est comprise.',
    structure: [
      'Poser les quatre définitions, une ligne chacune.',
      'Rassembler par paires : avance = inverser ; non-parvenu = compléter.',
      'Expliquer le déclencheur : flux qui chevauchent la clôture.',
      'Dérouler quatre exemples chiffrés courts et réalistes.',
      'Conclure par la phrase de symétrie — elle prouve la mécanique comprise.',
    ],
    tips: [
      'Résistez à la récitation des comptes (486, 408, 487, 418) au début : donnez le sens d’abord, les numéros si on vous les demande.',
      'Un seul exemple par état suffit — quatre exemples, quatre phrases, pas plus.',
      'La phrase de symétrie est votre bouée : si vous perdez le fil, revenez à « avance = inverser, non-parvenu = compléter ».',
    ],
  },
  {
    id: 'o-014',
    domain: 'Comptes & trésorerie',
    title: 'Lettrage des comptes',
    question: 'C’est quoi le lettrage des comptes ?',
    shortVersion:
      'C’est le rapprochement de chaque règlement avec la facture qu’il solde. Un compte lettré donne un solde exploitable — ce que le client doit vraiment — et fait ressortir les anomalies : doublons de règlement, écarts de TVA, avoirs oubliés. En pratique, je rapproche par référence et montant ; les écarts se qualifient un par un ; l’ancien non-lettré appelle relance, voire dépréciation. Sans lettrage, un solde client est un stock d’écritures, pas une dette.',
    standardVersion:
      'Le lettrage apparie chaque règlement avec la ou les factures qu’il éteint. Son intérêt est triple. La lisibilité : un compte lettré affiche un solde qui correspond à des factures identifiées et impayées — le vrai risque de recouvrement. La détection d’anomalies : un règlement sans facture — doublon, acompte, erreur de compte ; une facture soldée d’un montant différent — écart de TVA, escompte non comptabilisé, prélèvement partiel. Le pilotage : les factures non lettrées anciennes alimentent la balance âgée, la relance et la dépréciation des créances douteuses. La méthode : rapprocher par référence et montant ; qualifier chaque écart un par un — jamais en écart global ; tenir une règle de nommage pour les règlements multi-factures. En audit, le lettrage se teste : un lettrage forcé — qui coupe des montants pour « faire tomber » le solde — est une faiblesse de contrôle interne à remonter.',
    deepVersion:
      'Définition : le lettrage est l’apurement des comptes de tiers par rapprochement individualisé des factures et des règlements. Objectif : transformer un solde brut — somme de débits et de crédits — en solde exploitable — somme de factures réellement dues. Étapes : extraire le grand livre auxiliaire du compte ; apparier chaque règlement aux factures visées, par référence et montant ; qualifier les écarts ; relancer ou provisionner le non-lettré ancien. Exemple chiffré fictif : le client Dupont — facture F-101 de 12 000 euros, facture F-112 de 3 600 euros, avoir AV-9 de 400 euros, règlement de 15 200 euros. Lettrage : le règlement solde F-112 et F-101 moins l’avoir — 12 000 + 3 600 − 400 = 15 200 : compte apuré. Deuxième cas : un règlement de 11 280 sur une facture de 12 000 — écart de 720 exactement : le client a payé le HT, déduction de la TVA non due ; l’écart se qualifie, se documente au libellé, et se traite — avoir ou relance selon le droit — mais ne se laisse pas dormir. Troisième cas : deux règlements identiques de 6 430 euros le même mois : doublon — restitution ou imputation sur d’autres factures. Conclusion : sans lettrage, la balance clients n’est qu’un stock d’écritures ; avec lui, c’est un outil de recouvrement et une preuve de contrôle. La phrase d’oral : « un solde non lettré est une somme, pas une information ».',
    structure: [
      'Définir : apparier règlements et factures, entrée par entrée.',
      'Expliquer les trois apports : solde exploitable, détection d’écarts, pilotage du recouvrement.',
      'Dérouler la méthode : référence, montant, qualification des écarts.',
      'Dérouler trois cas chiffrés : apurement parfait, écart de TVA, doublon.',
      'Conclure : « une somme, pas une information ».',
    ],
    tips: [
      'L’écart exact de TVA — 720 sur 12 000 — est un exemple vécu partout : gardez-le.',
      'Évitez « le lettrage, c’est de la saisie » : c’est un contrôle de fond déguisé en tâche technique.',
      'Si on vous coupe la parole, ayez la conclusion en une phrase prête : le solde exploitable.',
    ],
  },
  {
    id: 'o-015',
    domain: 'Comptes & trésorerie',
    title: 'Rapprochement bancaire',
    question: 'Expliquez-moi le rapprochement bancaire.',
    shortVersion:
      'C’est la confrontation du compte de banque en comptabilité — le 512 — avec le relevé envoyé par la banque. Point de départ : les deux soldes sont rarement égaux, à cause des décalages. Je pointe les opérations communes ; restent les écarts : chèques émis non débités, remises en circulation, prélèvements non comptabilisés, erreurs. Le rapprochement recalcule le solde exact. Les points d’audit : l’ancienneté des éléments en transit — un chèque endormi depuis des mois est une anomalie — et la reprise indépendante du calcul.',
    standardVersion:
      'Le rapprochement bancaire confronte le solde comptable du compte banque au solde du relevé bancaire, et explique l’écart. Étape un : partir du solde du relevé, ajouter les remises en circulation — enregistrées en comptabilité mais pas encore créditées par la banque — et retrancher les chèques émis non débités ; aboutir au solde comptable, ou l’inverse selon le sens de présentation. Étape deux : qualifier chaque élément en transit par sa nature et sa date. Les points qui intéressent l’auditeur : l’ancienneté — une remise en circulation de plusieurs semaines ou un chèque émis non présenté depuis plus de six mois appelle une explication, parfois une écriture — la fraude au chèque endormi existe ; l’exhaustivité — prélèvements et frais bancaires non comptabilisés à détecter ; la coupure — les virements autour de la clôture ; et l’indépendance du re-calcul. En gestion courante, le rapprochement est un contrôle interne de fond : fait par une personne qui n’enregistre pas les paiements, daté, archivé.',
    deepVersion:
      'Définition : le rapprochement bancaire explique la différence entre le solde du compte bancaire tenu en comptabilité et le solde du relevé de la banque, à une même date. Objectif : valider l’exactitude du solde de trésorerie — un des rares comptes où un tiers, la banque, fournit une preuve directe. Étapes : relever le solde du relevé ; pointer les opérations déjà enregistrées des deux côtés ; lister les éléments en transit — remises en circulation à ajouter au relevé, chèques émis non débités à retrancher, prélèvements à comptabiliser ; recalculer et égaliser les deux soldes. Exemple chiffré fictif : relevé au 31/12 : 14 180 euros. Comptable : 15 240 euros. En transit : un chèque émis de 1 630 euros non débité ; une remise de chèques de 570 euros non créditée ; des frais bancaires de 20 euros non comptabilisés. Re-calcul : 15 240 − 20 = 15 220 côté comptable ajusté ; 14 180 + 570 − 1 630 = 13 120 ; écart résiduel de 2 100 — à analyser : une erreur de pointage, un prélèvement manqué — l’écart résiduel se cherche toujours, il ne s’arrondit pas. Points d’audit : l’ancienneté des chèques endormis — six mois et plus, la prescription du chèque joue et la dette peut se révéler vivante ; la coupure des virements de fin d’exercice ; et la séparation des tâches : le rapprochement par quelqu’un d’autre que celui qui saisit. Conclusion : le rapprochement, c’est le seul endroit où la comptabilité rencontre un tiers qui parle — je reprends le calcul moi-même, je date chaque écart, et je ne laisse aucun résidu inexpliqué.',
    structure: [
      'Définir : expliquer l’écart entre comptable et relevé, à date fixe.',
      'Énoncer la valeur : une preuve directe fournie par un tiers.',
      'Dérouler les étapes : pointage, éléments en transit, re-calcul.',
      'Dérouler l’exemple chiffré — jusqu’à l’écart résiduel qu’on cherche.',
      'Conclure sur les trois réflexes : indépendance, ancienneté, zéro résidu.',
    ],
    tips: [
      'Présentez le calcul comme une histoire : solde relevé, ajustements, écart — le recruteur suit les chiffres.',
      'L’écart résiduel qu’on « arrondit » est la faute à dénoncer : aucun résidu ne reste inexpliqué.',
      'Dites qui fait le rapprochement — la séparation des tâches vaut plus que la technique de calcul.',
    ],
  },
  {
    id: 'o-016',
    domain: 'Comptes & trésorerie',
    title: 'Écritures en suspens',
    question: 'Que faites-vous des écritures en suspens ?',
    shortVersion:
      'Un compte d’attente — un 47 quelque chose — c’est une zone de transit : l’écriture y séjourne en attendant sa qualification. Le principe : transit, pas stockage. Mon travail : identifier ce qui s’y trouve, avec sa date et sa justification ; apurer — réimputer vers les bons comptes ; et faire le vide avant la clôture. Un suspens ancien, c’est une anomalie en dormance : une compensation cachée, une pièce manquante, parfois les deux. Et un compte d’attente alimenté en continu est une faiblesse de procédure à remonter.',
    standardVersion:
      'Les comptes d’attente — classe 47 en France — accueillent provisoirement des montants en attente de justification : un prélèvement non identifié, une différence de change, un règlement sans référence. Ma règle : transit, jamais stockage. La démarche : extraire le détail du compte, ligne par ligne, avec sa date ; exiger une justification pour chaque solde — le libellé doit dire ce que c’est et depuis quand ; apurer par réimputation ; et viser un solde nul à la clôture. Ce qui se passe quand on ne le fait pas : les suspens s’empilent, se compensent entre eux — un montant en trop d’un côté cachant un manque de l’autre — et le compte devient une poubelle d’anomalies non résolues. En audit, je regarde l’ancienneté et la rotation : un suspens de plus de quelques mois, ou un compte qui grossit d’exercice en exercice, est une faiblesse de contrôle interne à documenter — et parfois le lieu où se cachent des différences de change non comptabilisées ou des doubles règlements non restitués.',
    deepVersion:
      'Définition : une écriture en suspens est une écriture provisoirement imputée à un compte d’attente — 471, 472, 476/477 pour les écarts de change en France — faute de justification ou de pièce. Objectif : ne jamais laisser l’approximation s’installer — le suspens est un aveu d’ignorance daté, utile si on le vide, dangereux si on l’accumule. Étapes de traitement : un, extraire le détail du compte avec les dates — un suspens sans date est déjà une anomalie ; deux, qualifier chaque solde : de quoi s’agit-il, quelle pièce manque, qui peut répondre ; trois, apurer : réimputer au bon compte, restituer un double règlement, comptabiliser la différence de change définitive ; quatre, contrôler le point zéro en clôture. Exemple chiffré fictif : le 471 affiche 34 600 euros au 31/12. En détail : un prélèvement de 1 240 euros non identifié depuis mars — banque sollicitée, imputation au fournisseur concerné ; deux règlements clients identiques de 6 430 euros — double paiement : restitution engagée, 6 430 euros sortent du suspens ; un écart de change latent de 21 000 euros — perte définitive sur une créance dollar : comptabilisée en 476/667 puis apurée ; solde résiduel : 890 euros, justifiés par une facture d’énergie en cours de réception. Le compte est passé de 34 600 à 890 justifiés. Conclusion : un suspens bien tenu est un outil ; un suspens sale est un cache-misère. La phrase d’oral : « je veux la date et la justification de chaque suspens — sinon ce n’est plus du transit, c’est de la marge d’erreur ».',
    structure: [
      'Définir : écriture en transit faute de justification, sur compte d’attente.',
      'Poser la règle : transit, jamais stockage.',
      'Dérouler le traitement : extraire, qualifier, apurer, point zéro.',
      'Dérouler l’exemple chiffré : 34 600 € ramenés à 890 justifiés.',
      'Conclure : outil si vidé, cache-misère si accumulé.',
    ],
    tips: [
      'La formule « un aveu d’ignorance daté » surprend agréablement : une ignorance qui se traque n’est plus une faute.',
      'Évitez de descendre dans tous les sous-comptes 47x : un exemple de 471 et un écart de change suffisent.',
      'Le chiffre de rotation — « grossit d’exercice en exercice » — est le marqueur que le recruteur attend sur le contrôle interne.',
    ],
  },
  {
    id: 'o-017',
    domain: 'Gestion & analyse',
    title: 'Besoin en fonds de roulement',
    question: 'Expliquez-moi le besoin en fonds de roulement.',
    shortVersion:
      'C’est l’argent immobilisé par le cycle d’exploitation : les stocks et les créances clients d’un côté, les dettes fournisseurs et sociales de l’autre. BFR égale stocks plus créances d’exploitation, moins dettes d’exploitation. L’interprétation dépend du métier : une grande distribution a un BFR négatif — elle encaisse avant de payer ; une industrie lourde l’a positif et lourd. Ce qui le fait bouger : les délais clients et fournisseurs, la rotation des stocks. C’est un indicateur de pilotage, pas juste de structure.',
    standardVersion:
      'Le besoin en fonds de roulement mesure l’écart entre les actifs d’exploitation — stocks et créances clients — et les ressources d’exploitation immédiates — dettes fournisseurs, fiscales et sociales. Formule : BFR égale stocks plus créances d’exploitation, moins dettes d’exploitation. Si positif, l’activité immobilise de la trésorerie : il faut la financer — par le fonds de roulement ou par dette court terme. Si négatif, l’activité dégage de la trésorerie : on encaisse les clients avant de régler les fournisseurs — le modèle de la grande distribution. Les leviers : réduire les délais clients — DSO —, allonger les délais fournisseurs — DPO —, accélérer la rotation des stocks. En analyse, je regarde le BFR en jours de chiffre d’affaires et sa saisonnalité : un pic prévisible — activité marquée — se prépare par un crédit de trésorerie dimensionné. Et en audit ou en contrôle de gestion, une dérive du BFR est un signal : clients qui paient plus mal, stocks qui s’accumulent.',
    deepVersion:
      'Définition : le BFR est le besoin de financement généré par le décalage entre les décaissements et les encaissements du cycle d’exploitation. Objectif de l’indicateur : mesurer combien l’activité immobilise — ou dégage — de trésorerie, indépendamment des investissements. Calcul : stocks plus créances clients et autres créances d’exploitation, moins dettes fournisseurs, fiscales et sociales. Lecture en jours de chiffre d’affaires pour comparer les périodes et les acteurs. Étapes d’analyse : décomposer le BFR par poste ; convertir chaque poste en jours — DSO, DPO, rotation des stocks ; identifier les tendances et la saisonnalité ; remonter aux causes commerciales ou opérationnelles. Exemple chiffré fictif : une PME industrielle — stocks 420 000 euros, créances clients 510 000, dettes fournisseurs 300 000, dettes fiscales et sociales 90 000. BFR : 420 + 510 − 300 − 90 = 540 000 euros. Avec un CA annuel de 3,6 millions, le BFR représente 54 jours de chiffre d’affaires. Un an plus tôt, il était de 45 jours : neuf jours de dérive, soit 90 000 euros de trésorerie consommés — cause : le DSO passé de 49 à 56 jours, un client majeur en difficulté. Conclusion : le BFR n’est pas qu’un solde de structure, c’est un thermomètre des pratiques commerciales et opérationnelles. Phrase d’oral : « derrière chaque jour de BFR, il y a une décision — un délai accordé, un stock constitué, un fournisseur pressé ».',
    structure: [
      'Définir : le décalage encaissements / décaissements de l’exploitation.',
      'Poser la formule : stocks + créances − dettes d’exploitation.',
      'Expliquer les lectures : positif / négatif, en jours de CA, saisonnalité.',
      'Dérouler l’exemple chiffré : 540 000 €, 54 jours, dérive de 9 jours expliquée.',
      'Conclure : un thermomètre des pratiques — chaque jour est une décision.',
    ],
    tips: [
      'Donnez le cas « BFR négatif » de la distribution : c’est le contre-exemple qui prouve la compréhension.',
      'La dérive — neuf jours, 90 000 € — raconte mieux que la définition : gardez-la.',
      'Évitez « c’est compliqué à calculer » : le calcul est simple, c’est l’interprétation qui a de la valeur.',
    ],
  },
  {
    id: 'o-018',
    domain: 'Gestion & analyse',
    title: 'DSO et DPO',
    question: 'Que mesurent le DSO et le DPO ?',
    shortVersion:
      'Deux durées, une symétrie. Le DSO — days sales outstanding — mesure le nombre de jours de chiffre d’affaires immobilisés en créances clients : créances TTC divisées par CA TTC, multiplié par 360. Le DPO — days payables outstanding — mesure le délai qu’on prend pour payer les fournisseurs : dettes fournisseurs sur achats TTC, multiplié par 360. L’un serre la trésorerie, l’autre la protège. Mais attention : allonger le DPO au-delà des conditions convenues dégrade la relation et, souvent, les prix.',
    standardVersion:
      'Le DSO et le DPO sont deux indicateurs de délai, en miroir. Le DSO : créances clients TTC divisées par chiffre d’affaires TTC, fois 360 — il dit combien de jours de ventes sont enfermés dans les créances. Un DSO qui monte signifie des clients qui paient plus lentement — ou un lettrage qui décroche. Le DPO : dettes fournisseurs TTC divisées par achats TTC, fois 360 — le temps qu’on se donne pour payer. Un DPO qui s’allonge économise de la trésorerie, au prix de la relation fournisseur. Ensemble, ils composent le besoin en fonds de roulement avec la rotation des stocks : réduire le DSO et allonger raisonnablement le DPO libère de la trésorerie. Deux précautions d’analyse : toujours TTC, pour neutraliser la TVA ; et lire l’évolution plutôt que le niveau — 45 jours n’a de sens que comparé aux conditions contractuelles et au secteur. Exemple rapide : DSO à 52 jours contre 45 un an plus tôt : sept jours de dérive sur 10 millions d’euros de CA, c’est près de 195 000 euros de trésorerie immobilisés.',
    deepVersion:
      'Définitions. DSO, days sales outstanding : le nombre de jours de chiffre d’affaires immobilisés en créances clients. DPO, days payables outstanding : le nombre de jours d’achats financés par les fournisseurs. Objectif : piloter les deux versants du cycle d’exploitation — le recouvrement et le paiement — donc directement le BFR. Formules : DSO égale créances clients TTC sur CA TTC fois 360 ; DPO égale dettes fournisseurs TTC sur achats TTC fois 360. Le TTC n’est pas un détail : comparer des créances TTC à un CA HT gonfle artificiellement le ratio d’un sixième environ en TVA à 20 %. Étapes d’analyse : calculer en TTC ; comparer aux conditions contractuelles et à l’historique ; décomposer par client — la moyenne cache les mauvais payeurs ; relier au BFR. Exemple chiffré fictif : créances clients 1 400 000 euros TTC, CA 10 950 000 euros TTC. DSO : 1 400 000 ÷ 10 950 000 × 360 = 46 jours. Conditions convenues : 30 jours fin de mois, soit environ 45 jours réels : le DSO est à l’équilibre. Mais la balance âgée montre que 62 % du solde se concentre sur cinq clients, dont un à 96 jours : la moyenne masque le risque — action de relance ciblée. Côté DPO : dettes fournisseurs 390 000 euros, achats 5 400 000 euros TTC : 26 jours — les fournisseurs sont payés vite, peut-être trop : renégociation possible, escomptes à comparer. Conclusion : le DSO mesure un risque, le DPO une ressource ; l’un se serre, l’autre s’allonge — dans les limites des conditions convenues. Phrase d’oral : « le DSO se pilote client par client, le DPO se négocie face à ses fournisseurs ».',
    structure: [
      'Définir les deux ratios en une phrase chacun.',
      'Poser les formules — et l’obligation du TTC.',
      'Expliquer la lecture : vs conditions contractuelles, vs historique, par client.',
      'Dérouler l’exemple chiffré : 46 jours en moyenne, mais un client à 96 jours.',
      'Conclure : le DSO se pilote, le DPO se négocie.',
    ],
    tips: [
      'Le point TTC est le marqueur technique : oubliez-le et le recruteur connaît votre niveau.',
      'Ayez la parade à la question piège « un bon DSO, c’est combien ? » : « ça se compare aux conditions convenues et au secteur, pas à un chiffre magique ».',
      'La conclusion symétrique se débite bien : un risque d’un côté, une ressource de l’autre.',
    ],
  },
  {
    id: 'o-019',
    domain: 'Fiscalité',
    title: 'TVA collectée et TVA déductible',
    question: 'Différence entre TVA collectée et TVA déductible — et comment se calcule la TVA à décaisser ?',
    shortVersion:
      'La TVA collectée, c’est la taxe facturée aux clients sur les ventes : elle constitue une dette envers l’État. La TVA déductible, c’est celle payée sur les achats : une créance sur l’État. La TVA à décaisser, c’est la différence : collectée moins déductible, versée au Trésor — en France, sur la déclaration mensuelle ou trimestrielle. Si la déductible dépasse la collectée, on obtient un crédit de TVA à récupérer. Et le point de vigilance : l’exigibilité — selon le régime, la TVA naît à la facturation ou à l’encaissement.',
    standardVersion:
      'Deux faces d’une même taxe. La TVA collectée est facturée sur les opérations imposables — ventes de biens, prestations : comptabilisée au passif, elle est une dette envers l’État, que l’entreprise encaisse pour son compte. La TVA déductible est celle supportée sur les achats et charges, sous réserve de conditions : dépense professionnelle, facture conforme mentionnant la TVA, non exclue par la réglementation. Le solde : TVA à décaisser égale TVA collectée moins TVA déductible — versée périodiquement ; si le solde est négatif, crédit de TVA, à imputer ou à rembourser. Les contrôles associés en comptabilité : la cohérence entre CA et TVA collectée déclarée — un contrôle type revue analytique ; le taux applicable par nature d’opération — en France 20 % le taux normal, des taux réduits pour l’alimentaire, les médicaments, certains livres et travaux ; la TVA sur les encaissements pour les prestations de services au taux d’exigibilité sur débits ou paiements, selon les options ; et l’autoliquidation sur certains achats intracommunautaires. En clôture, la TVA se régularise : TVA sur factures non parvenues, ajustements de taux, dépréciation des créances qui emporte récupération de la TVA collectée antérieure.',
    deepVersion:
      'Définitions : la TVA collectée est la taxe ajoutée par l’entreprise sur ses ventes — dette fiscale ; la TVA déductible est la taxe supportée sur ses achats professionnels — créance fiscale. Objectif du mécanisme : l’entreprise n’est qu’un collecteur intermédiaire ; la charge finale repose sur le consommateur. Calcul : TVA à décaisser égale TVA collectée moins TVA déductible de la période ; en France, déclarée sur la CA3 — mensuelle, ou trimestrielle sous conditions de régime. Un solde négatif donne un crédit de TVA : imputation sur les périodes suivantes ou demande de remboursement. Étapes de contrôle comptable : un, rapprocher la TVA collectée du CA — cohérence de base, contrôle type revue analytique ; deux, vérifier les taux par nature d’opération ; trois, contrôler la TVA déductible sur échantillon de factures d’achat — mention de la taxe, professionnel, non exclu ; quatre, traiter les régularisations de clôture. Exemple chiffré fictif : au mois de septembre — ventes 500 000 euros HT à 20 % : TVA collectée 100 000 euros. Achats 300 000 euros HT à 20 % dont une note de repas de 600 euros non déductible : TVA déductible 60 000 moins 120 = 59 880 euros. TVA à décaisser : 100 000 − 59 880 = 40 120 euros, payée en octobre. Attention au point d’exigibilité : sur les prestations de services, la TVA est exigible à l’encaissement par défaut — une prestation facturée en septembre mais payée en octobre génère la TVA d’octobre. Et le cas de la créance irrécouvrable : la TVA collectée correspondante peut être récupérée après les formalités d’irrécouvrabilité. Conclusion : deux comptes en miroir — 44571 et 44566 en France — un solde à verser, et un point de vigilance unique : l’exigibilité, c’est-à-dire le moment où la taxe naît.',
    structure: [
      'Définir les deux notions en miroir : dette et créance fiscale.',
      'Poser le calcul : collectée − déductible = à décaisser ; négatif = crédit.',
      'Énoncer les conditions de déductibilité et le rôle de la facture.',
      'Dérouler l’exemple chiffré mensuel, avec la note de repas exclue.',
      'Conclure sur le point de vigilance : l’exigibilité.',
    ],
    tips: [
      'Ne récitez pas tous les taux réduits : « 20 % en taux normal, des réduits sur des catégories précises » suffit — dire un faux taux coûte cher.',
      'L’exemple de la note de repas non déductible ancre la théorie dans la pratique.',
      'Le mot « collecteur intermédiaire » dit en une phrase toute la mécanique.',
    ],
  },
  {
    id: 'o-020',
    domain: 'Comptabilité & clôture',
    title: 'Amortissements',
    question: 'Comment fonctionne l’amortissement des immobilisations ?',
    shortVersion:
      'C’est la constatation comptable de la consommation d’un actif durable. Base amortissable, durée d’utilité, mode de calcul — linéaire le plus souvent, exceptionnellement progressif pour le matériel qui s’use vite au début. Point de départ : la mise en service, pas l’achat. Exemple : une machine de 50 000 euros sur cinq ans, mise en service le 1er mars — annuité pleine de 10 000 euros, mais première année au prorata : 10 000 fois dix douzièmes, soit 8 333 euros. Et si la valeur réelle de l’actif décroche de sa valeur nette comptable, c’est une dépréciation, un autre mécanisme.',
    standardVersion:
      'L’amortissement étale le coût d’une immobilisation sur sa durée d’utilité, selon son rythme de consommation. Les paramètres : la base amortissable — coût d’acquisition, éventuellement diminuée de la valeur résiduelle si elle est significative et mesurable ; la durée d’utilité — économique, pas fiscale, même si la durée d’usage fiscal sert de repère ; le mode — linéaire en principe, progressif pour les matériels qui perdent davantage de valeur à leurs débuts. Le démarrage se fait à la mise en service — et l’annuité se calcule au prorata temporis la première année, et aussi la dernière en linéaire. Le contrôle côté audit ou comptabilité : la cohérence du tableau d’amortissement — immobilisations d’ouverture plus entrées moins sorties égale clôture ; l’annuité se re-calculer ; le rapprochement dotations et charges ; et la détection des durées trop généreuses ou trop courtes. Distinction à connaître : l’amortissement constate une consommation irréversible prévue ; la dépréciation constate une perte de valeur non prévue — elles ne se remplacent pas, elles s’additionnent le cas échéant.',
    deepVersion:
      'Définition : l’amortissement est la constatation échelonnée de la consommation des avantages économiques d’un actif — son usure, son temps. Objectif : faire porter à chaque exercice la part de l’immobilisation qu’il consomme, plutôt que charger l’achat sur une seule année. Paramètres : base amortissable — coût, moins valeur résiduelle si significative ; durée d’utilité ; mode — linéaire ou progressif, ce dernier réservé à des cas où la consommation est plus forte au début. Étapes de la comptabilisation : à l’entrée, immobilisation au coût ; à chaque clôture, dotation au compte 681 en contrepartie du compte d’amortissement 28 ; en sortie, retraiter valeur brute et amortissements cumulés, plus-value ou moins-value à la clé. Exemple chiffré fictif : machine de 50 000 euros, durée d’utilité cinq ans, linéaire, mise en service le 1er mars. Annuité pleine : 10 000 euros. Première année au prorata : 10 000 × 10/12 = 8 333,33 euros. À la fin de la deuxième année : amortissements cumulés 8 333,33 + 10 000 = 18 333,33 ; valeur nette comptable : 31 666,67 euros. Contrôles associés : le tableau d’amortissement se réconcilie — immobilisation d’ouverture + acquisitions − sorties = clôture ; la dotation se recoupe avec les entrées de l’exercice ; les durées nouvelles se justifient ; et une valeur actuelle inférieure à la VNC déclenche une dépréciation — distincte de l’amortissement, car non prévue au plan initial. Conclusion : l’amortissement est un jugement — durée et mode — appliqué avec constance. Phrase d’oral : « je consomme, donc je dote ; ce que je n’avais pas prévu, je le déprécie ».',
    structure: [
      'Définir : la consommation des avantages économiques, étalée.',
      'Poser les paramètres : base, durée d’utilité, mode, mise en service.',
      'Dérouler la mécanique : dotation, amortissements cumulés, VNC.',
      'Dérouler l’exemple chiffré avec le prorata de première année.',
      'Conclure en séparant nettement amortissement et dépréciation.',
    ],
    tips: [
      'Mise en service, pas achat : c’est le piège classique — dites-le explicitement.',
      'Le prorata en dix douzièmes se calcule vite : entraînez-vous à le donner de tête.',
      'La phrase finale « je consomme donc je dote » sépare proprement les deux notions que les candidats mélangent.',
    ],
  },
  {
    id: 'o-021',
    domain: 'Comptabilité & clôture',
    title: 'Provisions et dépréciations',
    question: 'Quelle différence entre une provision et une dépréciation ?',
    shortVersion:
      'La provision pour risques et charges concerne un passif : un risque probable, estimable, né d’un événement passé — un litige, une garantie donnée, une restructuration. Elle se comptabilise au passif. La dépréciation concerne un actif : la valeur actuelle d’un bien ou d’une créance passe sous sa valeur nette comptable — on constate la perte de valeur. Deux directions opposées : une dette probable d’un côté, un actif amoindri de l’autre. Et le troisième terme à ne pas confondre : l’amortissement, qui est la consommation prévue, pas une surprise.',
    standardVersion:
      'Deux mécanismes, deux directions. La provision pour risques et charges : passif dont l’échéance ou le montant est incertain — un litige prud’homal, une garantie de performance, une amende probable, une restructurement engagée. Conditions : obligation à la clôture, sortie de ressources probable, montant estimable avec fiabilité ; la comptabilisation se fait au passif, en charge du résultat. La dépréciation : actif dont la valeur actuelle — le maximum entre le marché et l’utilité — est inférieure à la valeur nette comptable : un stock démodé, une créance douteuse, un terrain en perte de valeur. On constate la moins-value par un compte correctif — l’actif reste brut, la dépréciation s’inscrit en moins. Le contrôle associé : les provisions se justifient par des éléments probants — courrier d’avocat, procédure, calcul ; les dépréciations de créances par la balance âgée et l’historique des recouvrements. Le point de vigilance commun : la sincérité — une provision gonflée lisse le résultat, une provision manquante le flatte ; c’est l’un des ajustements de résultat les plus surveillés en clôture.',
    deepVersion:
      'Définitions. Provision pour risques et charges : passif incertain en échéance ou en montant, né d’un événement antérieur à la clôture — le litige, la garantie, la restructuration engagée, l’amende probable. Dépréciation : constatation de la moindre valeur d’un actif — sa valeur actuelle est tombée sous sa valeur nette comptable. Objectifs distincts : la provision anticipe une sortie de ressources future ; la dépréciation corrige une évaluation d’actif à une date donnée. Étapes de comptabilisation : identifier l’événement déclencheur avant la clôture ; estimer le montant — méthode documentée ; enregistrer — provision au 15xx en France, dépréciation aux comptes 29, 39, 49 ; reprendre quand la cause disparaît. Exemple chiffré fictif : un — litige avec un ancien salarié : l’avocat estime une condamnation probable entre 50 000 et 80 000 euros : provision à 80 000 euros, hypothèse prudente notée au dossier. Deux — créance client de 12 000 euros, en retard de 120 jours, relances sans effet : perte probable estimée à 50 % : dépréciation de 6 000 euros — la créance reste brute, un compte correctif la réduira à la valeur d’inventaire. Trois — stock de produits de saison invendus : valeur de réalisation estimée à 70 % du coût : dépréciation des 30 %. Conclusion : trois notions à ne pas mélanger — l’amortissement consomme de façon prévue, la dépréciation corrige une valeur, la provision anticipe un risque. Phrase d’oral : « amortir ce qui s’use, déprécier ce qui vaut moins, provisionner ce qui va coûter ».',
    structure: [
      'Définir les deux notions : passif probable vs perte de valeur d’actif.',
      'Énoncer les conditions de la provision : événement passé, probable, estimable.',
      'Dérouler la mécanique comptable de la dépréciation : actif brut, compte correctif.',
      'Illustrer par trois cas chiffrés courts : litige, créance, stock.',
      'Conclure avec le triptyque : amortir, déprécier, provisionner.',
    ],
    tips: [
      'Le triptyque final est votre meilleure défense : amortir, déprécier, provisionner.',
      'Le chiffre prudent — 80 000 sur une fourchette 50-80 — montre la prudence appliquée, pas récitée.',
      'Évitez « provision pour dépréciation » : cette formulation ancienne mélange deux registres ; séparez les mots.',
    ],
  },
  {
    id: 'o-022',
    domain: 'Cycles & contrôles',
    title: 'Piste d’audit fiable',
    question: 'C’est quoi la piste d’audit fiable ?',
    shortVersion:
      'C’est la capacité à remonter — et descendre — la chaîne complète d’une opération : de l’écriture comptable à la pièce d’origine, et inversement. Une facture comptabilisée doit se relier à son bon de livraison, son bon de commande, sa validation ; un montant au bilan doit se justifier par les documents. En pratique, je la teste par échantillon : je pars d’une écriture et je remonte ; ou d’une commande et je descends. S’il y a une rupture — pièce manquante, référence muette — la piste n’est pas fiable. C’est une exigence légale et un outil de contrôle quotidien.',
    standardVersion:
      'La piste d’audit fiable garantit la traçabilité intégrale des opérations dans les deux sens : de la pièce source vers l’écriture comptable, et de l’écriture vers la pièce. Objectif : qu’à tout moment, un tiers — auditeur, administration, direction — puisse justifier un montant publié par les documents qui l’ont généré. Concrètement, une chaîne sans rupture : besoin exprimé, bon de commande numéroté, bon de livraison signé, facture référencée, imputation validée, règlement tracé, écriture lettrée. Ce qui casse la piste : les pièces sans référence, les références sans pièce, les écritures manuelles massives de clôture sans support, les logiciels non reliés entre eux, les corrections directes en base. Le test par l’auditeur : échantillonner dans les deux sens — de l’écriture vers l’amont et de la commande vers l’aval — et mesurer le taux de chaînes complètes. En France, l’exigence s’ancre dans les règles comptables et l’obligation de justifier les écritures ; elle devient critique avec la facture électronique, où la structure même du flux doit assurer la traçabilité.',
    deepVersion:
      'Définition : la piste d’audit fiable est la capacité à relier, sans rupture, toute écriture comptable aux documents et événements qui l’ont produite — et inversement, tout document source à ses écritures. Objectif : la justifiabilité permanente des comptes — un montant publié doit pouvoir être démontré à postériori, par un tiers, sans l’aide de la mémoire de celui qui l’a saisi. Étapes d’évaluation : cartographier le flux — du besoin au paiement ; identifier les points de capture — commande, réception, facture, imputation ; tester la bidirectionnalité sur échantillon ; chiffrer le taux de complétude ; documenter les ruptures. Exemple chiffré fictif : sur 90 factures d’achat testées, 84 remontent intégralement à la commande et à la réception ; 4 n’ont pas de bon de commande — achats hors procédure ; 1 a une référence de BL muette — pièce introuvable ; 1 doublon de saisie de 18 600 euros — deux écritures pour une facture. Taux de rattachement complet : 84 sur 90, environ 93 % — la piste n’est pas fiable au sens strict : les six ruptures s’analysent, la plus grave étant le doublon, et la conclusion alimente la lettre de faiblesses. Conclusion : la piste d’audit fiable n’est pas un luxe documentaire — c’est la condition pour qu’un compte soit auditable et une écriture défendable. Phrase d’oral : « je dois pouvoir partir du chiffre et arriver au papier — dans les deux sens, sans sauter de maillon ».',
    structure: [
      'Définir : la traçabilité bidirectionnelle écriture ↔ pièces.',
      'Expliquer l’objectif : justifier tout montant publié à un tiers.',
      'Dérouler l’évaluation : cartographie du flux, échantillon, deux sens.',
      'Dérouler l’exemple chiffré : 84/90, et la typologie des ruptures.',
      'Conclure : condition d’auditabilité — « du chiffre au papier, sans sauter de maillon ».',
    ],
    tips: [
      'Insistez sur les deux sens : beaucoup de candidats ne décrivent qu’un seul — l’amont.',
      'Le taux chiffré — 84 sur 90 — rend la faiblesse mesurable : c’est l’esprit de la lettre au client.',
      'Évitez la digression sur la facture électronique : mentionnez-la, ne vous y installez pas.',
    ],
  },
  {
    id: 'o-023',
    domain: 'Cycles & contrôles',
    title: 'Rapprochement à trois voies (3-way match)',
    question: 'Expliquez-moi le rapprochement à trois voies.',
    shortVersion:
      'Avant de payer une facture fournisseur, je confronte trois documents : le bon de commande — ce que j’ai commandé, à quel prix ; le bon de livraison — ce que j’ai effectivement reçu, en quelle quantité ; la facture — ce qu’on me demande de payer. Les trois doivent concorder en quantités et en prix. Sinon : écart à traiter avant validation. Une facture sans réception, c’est un risque de payer du vent ; une quantité facturée supérieure à la reçue, une surfacturation. C’est le contrôle de base du cycle achats.',
    standardVersion:
      'Le rapprochement à trois voies confronte la commande, la réception et la facture. Le bon de commande fixe l’accord — références, quantités, prix, conditions. Le bon de livraison atteste de ce qui a été physiquement reçu — quantités contrôlées à l’arrivée, anomalies notées. La facture formule la demande de paiement. Le contrôle vérifie la concordance : quantités facturées égales quantités reçues ; prix facturés égaux prix commandés ; conditions conformes — escomptes, frais. Trois familles d’anomalies typiques : facture sans réception — paiement d’un bien jamais livré, signal d’achat fictif ; écart de quantité — livraison partielle surfacturée ou retour non crédité ; écart de prix — tarif non conforme à la commande, promotion non appliquée. Ce contrôle bloque la non-conformité en amont du paiement, ce qui est bien moins coûteux que la récupération a posteriori. En audit, je le teste : échantillon de factures, remontée aux deux autres voies, mesure des écarts — c’est aussi un excellent indicateur du contrôle interne du cycle achats.',
    deepVersion:
      'Définition : le rapprochement à trois voies — three-way match — est le contrôle qui met en vis-à-vis le bon de commande, le bon de livraison et la facture, avant tout paiement. Objectif : ne payer que ce qui a été commandé et effectivement reçu, au prix convenu — les trois assertions d’existence, d’exactitude et de conformité d’une seule traite. Étapes : un, la commande — validée dans la délégation, références et prix fixés ; deux, la réception — quantités comptées à l’arrivée, écarts de livraison notés sur le bon ; trois, la facture — rapprochée des deux documents, en quantités et en prix ; quatre, la décision — concordance : paiement ; écart : blocage et traitement. Exemple chiffré fictif : commande de 1 550 unités à 12 euros, soit 18 600 euros. Le bon de livraison constate 1 550 reçues. La facture porte sur 1 550 unités à 12,40 euros : 19 220 euros. Écart de prix : 620 euros — le tarif facturé ne respecte pas la commande : la facture est bloquée, le fournisseur réclame une majoration tarifale non convenue ; sans le rapprochement, l’écart se paie et se perd. Autre cas : facture de 18 600 euros sans bon de livraison — rien n’est jamais arrivé : refus de payer, et signal d’anomalie sérieuse — fournisseur fictif ou fraude interne. Conclusion : le trois-voies est le contrôle de base du cycle achats parce qu’il attaque les trois risques majeurs à la fois — payer ce qui n’existe pas, payer trop, payer deux fois. Phrase d’oral : « commander, recevoir, payer — trois documents, trois fois la même réalité, sinon on bloque ».',
    structure: [
      'Définir : commande / réception / facture mis en vis-à-vis avant paiement.',
      'Énoncer l’objectif : ne payer que le commandé-reçu au prix convenu.',
      'Dérouler les étapes et la décision : concordance ou blocage.',
      'Dérouler deux cas chiffrés : écart de prix, facture sans réception.',
      'Conclure : un contrôle, trois risques — existence, exactitude, doublon.',
    ],
    tips: [
      'Le terme anglais « three-way match » peut ouvrir ; le terme français doit suivre aussitôt.',
      'Les deux cas d’écart — prix et existence — couvrent l’essentiel : ne vous perdez pas en typologie exhaustive.',
      'Concluez sur le blocage avant paiement : la chronologie est le point fort du contrôle.',
    ],
  },
  {
    id: 'o-024',
    domain: 'Audit & méthodologie',
    title: 'Anomalie corrigée vs non corrigée',
    question: 'Que faites-vous d’une anomalie non corrigée par le client ?',
    shortVersion:
      'Je ne la laisse pas disparaître. Je la documente, je la quantifie, je la communique par écrit. Puis je la cumule avec les autres anomalies non corrigées et je compare le total au seuil de signification. Sous le seuil : opinion sans réserve, mais récapitulatif formalisé à la direction — au plus haut dirigeant, voire aux organes de gouvernance. Au-dessus : réserve dans le rapport, voire refus de certifier selon l’ampleur. La règle : aucune anomalie ne s’évapore — elle se pèse, se cumule et se communique.',
    standardVersion:
      'Une anomalie non corrigée suit un chemin précis. D’abord, la qualification : de quoi s’agit-il, quel compte, quel montant, quelle cause — erreur, jugement contesté, fraude. Ensuite, la communication : je la présente à la direction avec l’écriture de correction proposée ; le client peut accepter ou refuser — son refus n’efface rien. Puis l’évaluation : j’additionne les anomalies non corrigées — individuelles et cumulées, avec leur incidence sur le résultat et les agrégats — et je compare au seuil de signification. Trois issues : en dessous du seuil, l’opinion reste sans réserve, mais la récapitulation écrite part au moins au plus haut dirigeant — et, dans certains cadres, à ceux chargés de la gouvernance ; significative mais sans caractère généralisé, l’opinion devient « avec réserve » ; diffuse et généralisée, le refus de certifier. Et deux garde-fous : les anomalies révélatrices de fraude ou de faiblesse de contrôle interne suivent leur propre circuit de remontée, quelle que soit leur taille ; et tout se documente — une anomalie non écrite n’existe pas.',
    deepVersion:
      'Définition : une anomalie non corrigée est un écart constaté par l’auditeur — erreur de fait, d’évaluation, de présentation — que l’entité choisit de ne pas corriger dans ses comptes. Objectif du traitement : arbitrer l’incidence sur l’opinion, mais aussi tracer — la direction a été informée, elle a décidé en connaissance de cause. Étapes : qualifier l’anomalie — nature, compte, montant, cause ; proposer l’écriture de correction ; formaliser l’échange — date, destinataire, montant ; cumuler les non-corrigées ; comparer au seuil de signification ; ajuster l’opinion ; informer au bon niveau — direction, plus haut dirigeant, organes de gouvernance selon le cadre. Exemple chiffré fictif : au fil de la mission, je relève trois anomalies non corrigées : une facture non parvenue omise de 95 000 euros, une surestimation de stock de 60 000 euros, une charge de maintenance de 25 000 euros imputée en immobilisation. Cumul : 180 000 euros. Seuil de signification : 150 000. Le cumul dépasse le seuil : sans correction, l’opinion ne peut rester sans réserve — je présente le récapitulatif au dirigeant, qui fait corriger les deux premières : 155 000 euros corrigés, il reste 25 000, sous le seuil : opinion sans réserve, avec le récapitulatif formalisé et archivé. Le cas limite à connaître : même sous le seuil, une anomalie qui révèle une fraude ou un contournement de contrôle change de dimension — remontée systématique, quelle que soit la taille. Conclusion : la règle tient en trois verbes — peser, cumuler, communiquer. Phrase d’oral : « une anomalie ne se négocie pas, elle se pèse ».',
    structure: [
      'Définir : un écart constaté que l’entité refuse de corriger.',
      'Dérouler le traitement : qualifier, proposer, formaliser, cumuler.',
      'Comparer le cumul au seuil — et les trois issues possibles.',
      'Dérouler l’exemple chiffré : 180 000 contre un seuil de 150 000, puis correction partielle.',
      'Conclure : peser, cumuler, communiquer — et la fraude change de circuit.',
    ],
    tips: [
      'La graduation sans réserve / réserve / refus doit sortir nettement : c’est la colonne vertébrale de la réponse.',
      'L’exemple où le client corrige in extremis est réaliste : les comptes ne sont jamais « propres » du premier coup.',
      'Évitez « je force le client » : vous informez, vous arbitrez, vous rapportez — la contrainte n’est pas de votre fait.',
    ],
  },
  {
    id: 'o-025',
    domain: 'Audit & méthodologie',
    title: 'Mémo de cycle',
    question: 'C’est quoi un mémo de cycle ?',
    shortVersion:
      'C’est le document de travail qui consigne toute la démarche sur un cycle : description du système et des procédures, évaluation du contrôle interne, travaux réalisés et leur étendue, anomalies relevées, conclusion argumentée. Sa fonction est double : prouver le travail — un mémoire auditable par un tiers — et permettre la revue par le chef de mission. Un bon mémo se lit sans explication complémentaire : quelqu’un qui n’y était pas comprend ce qui a été fait, pourquoi, et ce qu’il en ressort.',
    standardVersion:
      'Le mémo de cycle est la trace écrite de l’audit d’un cycle — achats, ventes, trésorerie. Sa structure habituelle : le contexte et le périmètre — entité, exercice, comptes concernés, seuils ; la description du système — flux, acteurs, systèmes d’information, procédures ; l’évaluation du contrôle interne — forces et faiblesses, tests de procédures et leurs résultats ; le programme de travail réalisé — contrôles substantifs, échantillons, étendue ; les résultats — anomalies, écarts, leur traitement ; et la conclusion — opinion argumentée sur la fiabilité du cycle, avec les limites. Ses fonctions : la preuve du travail effectué — en cas de litige ou de relecture, le mémo fait foi ; la revue — le chef de mission ou le signataire relit et approuve par visa ; la continuité — l’exercice suivant repart du mémo, pas de zéro ; et la formation du nouveau venu, qui comprend le cycle en le lisant. La règle de qualité : le mémo se suffit à lui-même — une conclusion sans travaux décrits est une opinion, pas un document de travail.',
    deepVersion:
      'Définition : le mémo de cycle est le document de travail qui retrace la démarche d’audit appliquée à un cycle, de la compréhension du système à la conclusion. Objectif : rendre le travail vérifiable — par le relecteur interne, par le co-auditeur, par un tiers en cas de contentieux — et transmissible d’un exercice à l’autre. Structure en cinq blocs : périmètre et seuils ; description du système — flux, acteurs, contrôles ; évaluation du contrôle interne — tests, résultats, forces et faiblesses ; travaux substantifs — nature, étendue, calendrier, résultats ; conclusion argumentée — fiabilité des comptes du cycle, anomalies et incidence, points à suivre. Exemple concret, fictif : le mémo du cycle achats d’une PME — je décris le flux de la commande au paiement, avec le rapprochement à trois voies comme contrôle clé ; je le teste sur 15 factures : 13 concordances, 2 écarts — une facture sans bon de livraison, un écart de prix de 620 euros — contrôle fonctionnel mais non systématique ; j’ajuste les substantifs : circularisation de 8 fournisseurs, test de cut-off sur les 30 derniers BL, revue de la balance et des comptes débiteurs. Conclusion du mémo : comptes fournisseurs acceptables, deux faiblesses à remonter — absence de BL pour les achats urgents, délégations non à jour — avec les anomalies quantifiées et le suivi ouvert. Conclusion générale : un mémo, c’est une démonstration — et une convention de lecture : celui qui relit doit tout comprendre sans appeler l’auteur. Phrase d’oral : « mon mémoire doit pouvoir être relu en mon absence ».',
    structure: [
      'Définir : la trace écrite de la démarche sur un cycle.',
      'Poser les fonctions : preuve, revue, continuité, formation.',
      'Dérouler la structure en cinq blocs.',
      'Dérouler l’exemple du cycle achats : tests, écarts, conclusion.',
      'Conclure : une démonstration lisible sans l’auteur.',
    ],
    tips: [
      'La phrase « relisible en mon absence » est le meilleur résumé du standard attendu.',
      'Ne dites pas « c’est administratif » : le mémo EST la preuve — sans lui, le travail n’a pas eu lieu.',
      'Si le recruteur demande la structure, donnez les cinq blocs dans l’ordre — l’ordre compte.',
    ],
  },
  {
    id: 'o-026',
    domain: 'Référentiels',
    title: 'CGNC vs PCG',
    question: 'Quelle différence entre le CGNC marocain et le PCG français ?',
    shortVersion:
      'Deux référentiels comptables nationaux, proches par l’esprit, distincts par la lettre. Le PCG français est fixé par l’Autorité des normes comptables, avec la logique française des classes de comptes, du bilan et du compte de résultat normalisés. Le CGNC marocain, institué par la loi comptable 9-88, structure la comptabilité en classes et états de synthèse — dont le CPC, le compte de produits et charges. Les principes fondamentaux se recoupent largement : prudence, permanence des méthodes, coût historique. Ce qui diffère : la nomenclature détaillée, la présentation des états, certains traitements — et l’environnement juridique et fiscal propre à chaque pays.',
    standardVersion:
      'Le CGNC et le PCG sont deux normalisations comptables nationales. Points communs : la comptabilité en partie double, le respect des mêmes grands principes — image fidèle, prudence, permanence des méthodes, coût historique, spécialisation des exercices — et une organisation par classes de comptes. Le PCG français est émis par l’Autorité des normes comptables et s’insère dans un environnement où l’information financière est largement alignée sur les normes internationales pour les sociétés cotées ; le CGNC marocain découle de la loi comptable — la 9-88 — et structure la pratique autour du Code général de normalisation comptable, avec ses états de synthèse : bilan, compte de produits et charges, plus les tableaux de flux et changement de patrimoine selon les tailles d’entités. Les différences pratiques se nichent dans le détail : nomenclatures de comptes, présentation et libellé des états, traitement de certains sujets — amortissements, provisions, subventions, engagement de retraite — et surtout l’environnement fiscal de chaque pays, qui colore l’option comptable. Pour le praticien qui passe de l’un à l’autre, la méthode est la même : partir des principes, qui se recoupent, et s’approprier la nomenclature et les états de synthèse locaux.',
    deepVersion:
      'Définitions : le PCG — plan comptable général — est le référentiel comptable français, arrêté par l’Autorité des normes comptables, qui régit les comptes personnels des entités françaises ; le CGNC — code général de normalisation comptable — est le référentiel marocain, institué par la loi 9-88, applicable aux entités marocaines. Objectifs communs : normaliser la tenue, la présentation et la publication des comptes, garantir la comparabilité et l’image fidèle. Architectures : tous deux organisent la comptabilité par classes — les masses fondamentales se répondent : classes 1 à 5 pour le bilan, classes 6 et 7 pour la gestion — avec des contenus et des comptes qui diffèrent dans le détail ; le CGNC structure la sortie autour des états de synthèse — bilan, CPC, et selon les cas tableaux des flux de trésorerie et des changements de patrimoine — tandis que le PCG articule bilan, compte de résultat et annexes, l’ensemble nourrissant la liasse. Étapes pour passer de l’un à l’autre — mon expérience de stage fictive : partir des principes partagés — prudence, permanence, spécialisation — ; établir la table de correspondance des comptes utilisés — les masses se retrouvent, les sous-comptes se traduisent ; repointer les états de synthèse locals ; vérifier les traitements spécifiques — subventions, engagement de retraite, amortissements dérogatoires à traduction différente. Exemple chiffré fictif : une dotation d’amortissement de 10 000 euros — 10 000 dirhams chez le client marocain — passe par le même raisonnement de durée d’utilité, mais les comptes mouvementés et la présentation diffèrent : la correspondance se documente dans le tableau de passage. Conclusion : deux langues comptables pour une même grammaire. Phrase d’oral : « les principes voyagent, les nomenclatures se traduisent ».',
    structure: [
      'Définir les deux référentiels et leurs émetteurs respectifs.',
      'Poser les points communs : principes, partie double, classes.',
      'Situer les différences : nomenclature, états de synthèse, environnement fiscal.',
      'Dérouler la méthode de passage : principes d’abord, correspondance des comptes ensuite.',
      'Conclure : « les principes voyagent, les nomenclatures se traduisent ».',
    ],
    tips: [
      'Ne récitez pas les classes une à une : citez « 1 à 5 pour le bilan, 6-7 pour la gestion », qui est vrai des deux côtés.',
      'Reconnaissez la limite : les détails réglementaires évoluent — renvoyez aux textes plutôt qu’affirmer de mémoire.',
      'La phrase finale sur la traduction montre le praticien, pas le théoricien.',
    ],
  },
  {
    id: 'o-027',
    domain: 'Relation client',
    title: 'Le client refuse un document',
    question: 'Le client refuse de vous communiquer un document — que faites-vous ?',
    shortVersion:
      'Je ne contourne jamais, et je ne laisse pas mourir la demande. Je reformule précisément le besoin et le cadre — pourquoi ce document est nécessaire aux travaux. Je trace par écrit : demande, date, pièce visée. Si le refus persiste, j’informe le chef de mission, qui remonte au niveau adapté de la direction. Et j’évalue la limitation : un document inaccessible, c’est une borne des travaux, documentée dans le mémo, avec son incidence éventuelle sur l’opinion — réserve si l’élément est significatif. Ce qu’on ne fait jamais : bricoler une alternative sans le dire.',
    standardVersion:
      'Un refus de document se traite en escalade structurée, pas en affrontement. D’abord, vérifier la demande : est-elle précise — pièce, période, format — et justifiée — à quel contrôle elle sert ? Un refus vient parfois d’une demande floue ou perçue comme intrusive. Ensuite, tracer : la demande part par écrit, datée, avec la liste visée ; le refus aussi se documente. Puis remonter en interne : le chef de mission décide de relancer au bon niveau — la direction générale ou la gouvernance selon la sensibilité — parce qu’un refus opposé à l’auditeur est parfois un signal de fraude ou de zone sensible, pas un simple conflit d’ego. Enfin, mesurer la limitation : si le document manquant empêche d’obtenir des éléments probants suffisants sur un point significatif, la mission porte une limitation d’étendue — elle se documente et peut conduire à une réserve, voire à un refus de certifier selon l’ampleur. Deux interdits : accepter oralement sans trace, et improviser une compensation non documentée — l’honnêteté de la mission tient à la trace écrite des limites.',
    deepVersion:
      'Définition du problème : le refus de communication est une limitation à l’accès aux informations — il touche directement la capacité à obtenir des éléments probants. Objectif du traitement : obtenir la pièce si possible, sinon transformer le refus en limitation documentée, avec ses conséquences assumées — jamais en angle mort. Étapes : un, qualifier la demande — pièce exacte, période, objectif du contrôle : « le contrat de prêt, pour vérifier les intérêts » vaut mieux que « vos documents bancaires » ; deux, formaliser — écrit daté, références des pièces, échéance de réponse ; trois, écouter le motif du refus — confidentialité, piste externe, inexistence de la pièce : un document « inexistant » est une réponse, qui appelle une explication écrite ; quatre, escalader — chef de mission, puis direction, puis gouvernance selon le cadre de la mission — le refus d’un dirigeant lui-même est un signal à part entière ; cinq, trancher l’incidence — la limitation est-elle significative ? Exemple chiffré fictif : la direction refuse de communiquer les évaluations à l’appui d’une provision pour litige de 800 000 euros. Relance écrite, refus maintenu : la note d’auditeur documente la demande, le refus, l’absence d’élément probant — la mission conclut à une réserve sur ce point, faute d’éléments suffisants. Si en revanche la pièce refusée porte sur 8 000 euros non significatifs, l’incidence est nulle sur l’opinion — mais la trace reste. Conclusion : le refus ne se contourne pas, il se documente et se pèse. Phrase d’oral : « un refus n’arrête pas la mission, il borne les travaux — et cette borne s’écrit ».',
    structure: [
      'Qualifier le refus : limitation d’accès aux éléments probants.',
      'Affiner la demande : pièce exacte, période, objectif du contrôle.',
      'Formaliser et escalader : écrit daté, chef de mission, direction.',
      'Peser l’incidence : significative → réserve ; mineure → trace quand même.',
      'Conclure : le refus borne les travaux, et cette borne s’écrit.',
    ],
    tips: [
      'Le mot « escalade » est parfois mal perçu : préférez « remonte au niveau adapté ».',
      'Le contraste chiffré — 800 000 significatifs contre 8 000 négligeables — montre que vous savez arbitrer, pas seulement protester.',
      'Évitez « je menace le client » : le rapport fait ce travail ; vous, vous documentez.',
    ],
  },
  {
    id: 'o-028',
    domain: 'Audit & méthodologie',
    title: 'Justifier une conclusion',
    question: 'Comment justifiez-vous une conclusion en audit ?',
    shortVersion:
      'Une conclusion se construit comme une démonstration : objectif du contrôle, travaux réalisés, résultats obtenus, analyse, limite. Le cœur : les éléments probants — leur nature, leur étendue, leur source. Par exemple : « j’ai circularisé 25 clients sur 62, soit 70 % du solde ; 22 réponses concordantes ; les 3 écarts s’expliquent par des règlements en transit confirmés postérieurement ; je conclus à la fiabilité du solde, avec cette étendue pour limite ». Une conclusion sans étendue ni limite n’est pas une conclusion, c’est une impression.',
    standardVersion:
      'Ma règle : une conclusion d’audit est un chaînon argumenté, pas une opinion détachée. La chaîne complète : l’objectif — quelle assertion je teste, existence, exhaustivité, évaluation, rattachement ; les travaux — leur nature et leur étendue, échantillon, période, sources ; les résultats — ce que j’ai trouvé, y compris les écarts ; l’analyse — pourquoi les résultats suffisent à conclure ; et la limite — ce que je n’ai pas couvert et pourquoi c’est acceptable. Exemple type : valider le solde clients. Objectif : existence et exactitude. Travaux : circularisation directe de 25 clients représentant 70 % du solde, plus revue des encaissements postérieurs pour le reste. Résultats : 22 réponses concordantes au centime ; 3 écarts — deux règlements en transit, un écart de TVA de 320 euros. Analyse : les écarts sont expliqués et validés par pièces ; le solde non circularisé est couvert par les encaissements de janvier. Limite : 30 % du solde confirmé par preuve alternative, hypothèse documentée. Conclusion : solde fiable. Cette discipline vaut à l’écrit comme à l’oral : le recruteur entend tout de suite la différence entre « c’est bon » et « voilà pourquoi je peux le dire ».',
    deepVersion:
      'Définition : justifier une conclusion, c’est exposer le lien entre les éléments probants collectés et l’opinion émise — la conclusion n’est que le point final de l’argument. Objectif : la conclusion doit être rejouable par un tiers — même travaux, même résultat, même verdict. Étapes de construction : formuler l’objectif du contrôle en assertion — existence, exhaustivité, évaluation, rattachement ; définir la stratégie — tests de détails, analytique, ou combinaison ; exécuter avec une étendue calibrée sur le risque ; consigner les résultats, écarts compris ; analyser — pourquoi ces résultats emportent la conclusion ; borner — étendue non couverte, hypothèses, limites assumées. Exemple chiffré fictif, complet : le solde clients s’élève à 1,6 million d’euros, 62 comptes. Risque évalué modéré, contrôle interne correct mais perfectible. Stratégie : circularisation directe des comptes au-delà de 50 000 euros — 25 comptes, 1,12 million, 70 % du solde — et revue des encaissements postérieurs pour les 37 autres. Résultats : 22 réponses concordantes ; 2 écarts de règlements en transit — confirmés par les entrées des premiers jours de janvier — ; 1 écart de TVA de 320 euros — imputation corrigée à la demande. Analyse : 100 % du solde est couvert par preuve directe ou preuve alternative ; les anomalies détectées sont corrigées ou expliquées. Limite : la preuve alternative repose sur l’hypothèse qu’un encaissement postérieur démontre l’existence antérieure — hypothèse écrite. Conclusion : le solde est fidèle. Phrase d’oral : « je conclus toujours en remontant la chaîne : objectif, travaux, résultats, analyse, limite — le reste n’est pas une conclusion, c’est un sentiment ».',
    structure: [
      'Poser le principe : une conclusion est un chaînon argumenté.',
      'Énoncer la chaîne : objectif, travaux, résultats, analyse, limite.',
      'Expliquer le calibrage de l’étendue sur le risque.',
      'Dérouler l’exemple chiffré complet : circularisation 25/62, 70 % du solde.',
      'Conclure : « rejouable par un tiers — sinon ce n’est pas une conclusion ».',
    ],
    tips: [
      'Évitez « je suis sûr de moi » : la conviction se démontre, elle ne se déclare pas.',
      'Annoncez la chaîne avant de dérouler l’exemple : le squelette aide l’auditeur autant que le recruteur.',
      'Assumez la limite à voix haute : c’est le signe de maturité le plus net en entretien.',
    ],
  },
  {
    id: 'o-029',
    domain: 'Relation client',
    title: 'Présenter une faiblesse à la direction',
    question: 'Comment présentez-vous une faiblesse de contrôle interne à la direction ?',
    shortVersion:
      'En factuel, jamais en accusateur. La structure : le constat — ce qui se passe, décrit précisément ; le risque — ce que ça permettrait ; la conséquence — chiffrée si possible ; la recommandation — proportionnée, avec un responsable et un horizon. Par exemple : « sur 90 factures testées, 6 n’ont pas de bon de commande ; le risque est de payer des achats non autorisés ; recommandation : bloquer la saisie sans BC, sous six mois ». Je hiérarchise par criticité, je reste sur les faits, et je propose — je ne décris pas seulement.',
    standardVersion:
      'Une faiblesse se présente comme un dossier, pas comme un réquisitoire. Premier temps : le constat factuel — ce que j’ai observé, avec les chiffres et l’étendue : « sur 90 factures testées, 6 n’ont pas de bon de commande, dont 2 au-delà du seuil de délégation ». Pas d’adjectif, pas de responsable nommé — le processus est en cause, pas la personne. Deuxième temps : le risque associé — ce que la faiblesse rend possible : paiement d’achats non autorisés, fraude facilitée, rupture de piste d’audit. Troisième temps : la conséquence potentielle, chiffrée quand c’est possible — l’exposition, pas la certitude. Quatrième temps : la recommandation — proportionnée au risque, avec un propriétaire et un horizon réalistes : verrou de saisie, mise à jour des délégations, revue périodique. Cinquième temps : le suivi — la faiblesse revient à la direction jusqu’à sa correction, avec un échéancier. La posture compte : je viens avec des faits datés et une proposition, pas avec un jugement — la direction décide, j’ai fait mon travail en lui donnant de décider bien informée.',
    deepVersion:
      'Définition de l’exercice : remonter une faiblesse de contrôle interne, c’est transformer une observation d’audit en décision de gestion pour la direction. Objectif : obtenir une correction — donc convaincre sans braquer, avec des faits. Étapes de présentation : un, le constat — factuel, daté, quantifié : ce que j’ai testé, ce que j’ai trouvé ; deux, le risque — le scénario que la faiblesse autorise, formulé en conditions réalistes ; trois, la conséquence — l’exposition chiffrée quand elle se chiffre ; quatre, la recommandation — proportionnée, avec responsable et horizon ; cinq, le suivi — échéancier et point d’avancement. Exemple chiffré fictif, en situation : constat — « sur 90 factures d’achat testées en septembre, 6 sont saisies sans bon de commande, dont 2 dépassent le seuil de délégation ; une facture de 18 600 euros a été payée deux fois — doublon détecté et récupéré ». Risque : « la procédure d’autorisation peut être contournée pour des montants significatifs ; le doublon montre que la double validation n’a pas joué ». Conséquence : « exposition actuelle estimée à environ 40 000 euros d’achats annuels sans trace d’autorisation ». Recommandation : « verrou système : aucune facture validable sans référence de BC ; délégations actualisées et signées ; revue mensuelle des factures bloquées — sous six mois, avec le responsable achats comme pilote ». Présentation : une page, le constat en tête, la recommandation en clôture. Conclusion : la direction retient les chiffres et la proposition, pas le vocabulaire d’audit. Phrase d’oral : « je décris le processus défaillant, je ne désigne personne — les faits font le travail ».',
    structure: [
      'Poser l’esprit : convaincre la direction de corriger, sans braquer.',
      'Dérouler les cinq temps : constat, risque, conséquence, recommandation, suivi.',
      'Soigner le constat : chiffres, étendue, aucune personne nommée.',
      'Dérouler l’exemple chiffré complet — jusqu’au verrou système et son pilote.',
      'Conclure : les faits font le travail, la direction décide informée.',
    ],
    tips: [
      'Bannissez « c’est grave » : gravité démontrée par les chiffres, pas par l’adverbe.',
      'Toujours un responsable et un délai dans la recommandation : une recommandation sans pilote n’est qu’un souhait.',
      'La phrase « le processus est en cause, pas la personne » désamorce la résistance d’auditoire — gardez-la.',
    ],
  },
  {
    id: 'o-030',
    domain: 'Entretien RH',
    title: 'Se présenter en entretien RH',
    question: 'Présentez-vous en deux minutes.',
    shortVersion:
      'Quatre temps courts. Qui je suis : parcours en une phrase, formation et dernière expérience. Ce que je sais faire : deux ou trois compétences concrètes, chacune appuyée sur un exemple réel — pas une liste d’adjectifs. Ce que je cherche : le poste visé, et pourquoi cette entreprise précisément — une raison vérifiable. Ce que j’apporte : ce que la direction gagnera à m’intégrer. Et je m’entraîne à le dire en cent-vingt secondes chrono : deux minutes dépassées, l’attention décroche. Sur le fond : uniquement des expériences réelles que je peux détailler si on me relance.',
    standardVersion:
      'Ma présentation suit quatre blocs, dans l’ordre. Un — le parcours : une ou deux phrases, formation et expériences significatives, sans chronologie exhaustive ; l’essentiel est de donner des repères. Deux — les compétences : deux ou trois, choisies parce qu’elles servent le poste, et chacune ancrée sur un fait vérifiable : « le rapprochement bancaire mensuel sur cinq comptes », pas « rigoureux et motivé ». Trois — le projet : ce que je vise, et ce qui m’attache à cette entreprise en particulier — le poste, le secteur, une actualité, une valeur incarnée ; la raison doit être sincère et vérifiable. Quatre — l’apport : reformulé du point de vue de l’employeur — ce que je peux prendre en charge rapidement, là où je serai utile dès les premières semaines. La forme : deux minutes maximum, phrases courtes, rythme posé, une idée par phrase ; une question en suspens à la fin peut relancer l’échange. La règle d’honnêteté : ne citer que des expériences réelles — tout ce que je raconte doit pouvoir être creusé en entretien technique sans que je recule.',
    deepVersion:
      'Définition de l’exercice : la présentation RH n’est pas une biographie, c’est une proposition — pourquoi ce poste, pourquoi moi, pourquoi ici. Objectif : donner au recruteur une structure à suivre pour le reste de l’entretien, et trois faits mémorables. Étapes de construction : d’abord l’inventaire — mes expériences réelles, formation, projets, compétences prouvées ; puis la sélection — deux ou trois compétences utiles au poste visé ; ensuite la rédaction en quatre blocs — parcours, compétences, projet, apport ; enfin l’entraînement — chronomètre sur deux minutes, passage à voix haute, reformulation jusqu’à ce que ça sonne naturel. Contenu de chaque bloc : le parcours en une phrase claire ; chaque compétence suivie d’un exemple concret — « tenu de dix rapprochements bancaires mensuels sur cinq comptes, écart résiduel zéro » ; le projet relié à l’entreprise par une raison précise — « votre alternance en audit externe sur la région, parce que le cabinet accompagne des PME industrielles, le terrain que je cherche » ; l’apport du point de vue de l’employeur — « autonome sur les tâches de révision dès la fin de la période de formation ». Exemple de squelette — à adapter à votre parcours réel : « Étudiant en master comptabilité-contrôle, j’ai fait un stage de six mois en service comptable : saisie et contrôle d’environ cent cinquante factures par mois, lettrage de quarante-cinq comptes tiers, trois tableaux de bord Excel suivis par la direction. Je cherche un premier poste en audit ou en révision : je veux apprendre la démarche sur le terrain. Ce que j’apporte : je connais le rythme des clôtures, je suis autonome sur Excel, et je documente mon travail. » Les pièges à éviter : réciter le CV — le recruteur l’a lu ; les adjectifs auto-proclamés — chaque qualité doit venir d’un exemple ; dépasser deux minutes ; et toute expérience inventée — la relance technique la fait tomber. Conclusion : deux minutes, quatre blocs, trois faits mémorables, zéro invention. Phrase d’oral : « une présentation réussie, c’est celle où le recruteur n’a plus qu’à choisir quoi creuser ».',
    structure: [
      'Poser l’esprit : une proposition, pas une biographie.',
      'Dérouler les quatre blocs : parcours, compétences, projet, apport.',
      'Ancrer chaque compétence sur un fait vérifiable et chiffré.',
      'S’entraîner chronomètre en main : deux minutes maximum.',
      'Conclure : trois faits mémorables, zéro invention — le reste se creuse.',
    ],
    tips: [
      'Une idée par phrase : à l’oral, la phrase longue perd l’auditeur — et vous.',
      'Remplacez chaque adjectif par un exemple : « rigoureux » devient « écart résiduel zéro sur dix rapprochements ».',
      'Terminez sur une phrase d’ouverture : elle invite à la question suivante au lieu de clore l’échange.',
    ],
  },
]
