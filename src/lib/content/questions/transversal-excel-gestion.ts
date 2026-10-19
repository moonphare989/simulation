// =====================================================================
// AuditLab — Banque de questions : Excel appliqué & gestion transversale
// 52 questions — IDs qt-101 à qt-152
// Contrôle de gestion (qt-101..qt-118, qt-121..qt-132), Excel finance/compta (qt-119..qt-120),
// audit interne (qt-133..qt-142), contrôle interne (qt-143..qt-152).
// Rédaction recruteur senior PFE — formulations naturelles à l’oral.
// =====================================================================

import type { BankQuestion } from '@/lib/types'

export const transversalExcelGestionQuestions: BankQuestion[] = [
  {
    id: 'qt-101',
    job: 'controle-gestion',
    category: 'definitions',
    difficulty: 1,
    skill: 'Rôle du contrôle de gestion',
    question: 'Pour commencer simplement : c’est quoi, pour toi, le contrôle de gestion ? Décris-moi le métier avec tes mots, pas une définition de manuel.',
    expectedAnswer:
      'Le contrôle de gestion est la fonction qui aide la direction à piloter la performance : elle anticipe (budgets, prévisions), mesure (reporting, comptabilité analytique), analyse les écarts entre le réalisé et les références, et alimente le dialogue de gestion pour décider des actions correctives. C’est une boucle : prévoir, mesurer, analyser, agir. Le contrôleur est un bras armé de la direction et une interface entre la finance et les opérationnels : il traduit les chiffres en causes compréhensibles et les décisions en conséquences chiffrées. Le mot « contrôle » ne signifie pas surveiller les équipes mais maîtriser la trajectoire. Le contour du poste dépend de la taille de l’entreprise : en PME il est souvent proche de la comptabilité et très opérationnel, dans un groupe il est organisé en équipes par business unit avec des niveaux plus analytiques.',
    reasoning:
      'Question d’échauffement qui vérifie que le candidat a compris la finalité du métier au-delà des clichés (« c’est celui qui contrôle les dépenses »). Points attendus : la boucle prévoir/mesurer/analyser/agir, la dimension d’aide à la décision et de dialogue de gestion, et la lucidité sur un périmètre variable selon la taille de la structure. Le candidat qui parle uniquement de clôture comptable ou de police des dépenses n’a pas saisi le rôle.',
    commonErrors: [
      'Réduire le contrôle de gestion à la surveillance des dépenses ou à un rôle de « policier » de l’entreprise.',
      'Confondre contrôleur de gestion et auditeur interne : l’un pilote la performance, l’autre évalue les processus et les risques.',
      'Oublier la dimension d’aide à la décision et de dialogue avec les opérationnels.',
      'Présenter un périmètre figé sans signaler qu’il varie selon la taille de l’entreprise (PME vs groupe).',
    ],
    oralShort:
      'Le contrôle de gestion, c’est la fonction qui permet à la direction de piloter la performance : je prévois avec les budgets, je mesure avec le reporting, j’analyse les écarts, et j’alimente le dialogue de gestion pour décider des actions. Je ne contrôle pas les personnes, je maîtrise la trajectoire chiffrée de l’entreprise, en interface entre la finance et les opérationnels.',
    oralLong:
      'Par définition, le contrôle de gestion est la fonction de pilotage de la performance : il met à disposition de la direction des outils pour anticiper, mesurer et corriger. L’objectif est que l’entreprise atteigne ses objectifs en s’appuyant sur des chiffres fiables et compris de tous. Concrètement, la démarche est une boucle en quatre temps : prévoir — construire budgets et prévisions ; mesurer — produire le reporting périodique ; analyser — décomposer les écarts entre le réalisé et le budget, comprendre les causes ; agir — proposer des actions correctives et en suivre les effets. Par exemple, sur mon stage fictif de contrôleur de gestion junior, chaque mois je sortais le reporting des ventes par région, j’expliquais un écart de chiffre d’affaires par une décomposition volume/prix, et je préparais la réunion de dialogue de gestion entre le DAF et les responsables commerciaux. En conclusion, c’est un rôle d’interface : traduire les chiffres en causes opérationnelles et les décisions en conséquences financières — avec un périmètre qui varie beaucoup selon la taille de l’entreprise.',
    followUp: 'Et dans une PME de trente personnes, tu penses qu’un contrôleur de gestion est justifié ?',
    grading: [
      'Boucle prévoir / mesurer / analyser / agir explicitement citée.',
      'Dimension d’aide à la décision et de dialogue de gestion mentionnée.',
      'Distinction claire avec l’audit interne ou la comptabilité.',
      'Nuance apportée sur le périmètre selon la taille de la structure.',
    ],
  },
  {
    id: 'qt-102',
    job: 'controle-gestion',
    category: 'definitions',
    difficulty: 1,
    skill: 'Sens de calcul et qualification des écarts',
    question: 'En analyse des écarts, c’est quoi un écart favorable et un écart défavorable ? Et surtout : dans quel sens tu calcules un écart ?',
    expectedAnswer:
      'L’écart se calcule par convention réalisé − budget (montant constaté moins montant budgété). Il est favorable s’il améliore le résultat, défavorable s’il le dégrade — et cela dépend de la nature de la ligne, pas seulement du signe : un écart de +192 000 € sur une ligne de chiffre d’affaires est favorable, le même écart positif sur une ligne de charges est défavorable. La bonne pratique est donc : calculer toujours dans le même sens (réalisé − budget), qualifier explicitement chaque écart (favorable/défavorable) dans le commentaire ou par une mise en forme, et préciser la convention retenue dans le fichier pour éviter les contre-sens de lecture.',
    reasoning:
      'Le recruteur piège les candidats qui croient que « positif = favorable » de façon universelle. La maîtrise attendue : la convention de calcul (réalisé − budget), la qualification fonction du caractère produit ou charge de la ligne, et la rigueur de présentation (préciser la convention, qualifier chaque écart). Un contrôleur qui mélange les sens de calcul produit des tableaux illisibles et contestables en réunion.',
    commonErrors: [
      'Appliquer « positif = favorable » à une ligne de charges : un dérapage de charges positif est défavorable.',
      'Calculer budget − réalisé sur certaines lignes et réalisé − budget sur d’autres sans le préciser.',
      'Donner le montant sans jamais qualifier l’écart (favorable/défavorable) ni le commenter.',
      'Confondre écart favorable et bonne performance : un écart favorable peut révéler un budget mal calibré.',
    ],
    oralShort:
      'Par convention, l’écart se calcule réalisé moins budget. Il est favorable s’il améliore le résultat, défavorable s’il le dégrade : un écart positif sur le chiffre d’affaires est favorable, mais le même écart positif sur les charges est défavorable. Je précise donc toujours la convention du fichier et je qualifie chaque écart dans le commentaire.',
    oralLong:
      'Par définition, un écart est la différence entre le réalisé et la référence budgétée, calculée par convention réalisé − budget. L’objectif de cette convention est d’avoir un sens de lecture unique dans tous les tableaux. Concrètement, la qualification se fait en deux étapes : d’abord le calcul, réalisé moins budget, toujours dans le même sens ; ensuite la lecture, qui dépend de la nature de la ligne — sur un produit comme le chiffre d’affaires, un écart positif est favorable ; sur une charge, un écart positif signifie qu’on a dépensé plus que prévu, donc défavorable. Par exemple, si les charges de personnel sont à +15 000 € par rapport au budget, mon tableau affiche un écart positif mais mon commentaire dit « défavorable : surcoût lié aux remplacements non budgétés ». En conclusion, je calcule toujours dans le même sens, je qualifie systématiquement, et je précise la convention dans le fichier — parce qu’un écart mal signé en réunion de direction, c’est une décision prise à l’envers.',
    followUp: 'Tu me donnes un exemple d’écart favorable qui est en réalité une mauvaise nouvelle ?',
    grading: [
      'Convention réalisé − budget énoncée clairement.',
      'Qualification dépendante de la nature de la ligne (produit vs charge).',
      'Bonne pratique de présentation citée (préciser la convention, qualifier les écarts).',
      'Exemple chiffré ou concret pour illustrer.',
    ],
  },
  {
    id: 'qt-103',
    job: 'controle-gestion',
    category: 'definitions',
    difficulty: 1,
    skill: 'Typologie des coûts',
    question: 'Tu me définis les coûts fixes, les coûts variables, les coûts directs et les coûts indirects ? Et pourquoi ces distinctions sont importantes pour toi ?',
    expectedAnswer:
      'Deux axes de classement indépendants. Fixe/variable : comportement face à l’activité — un coût fixe ne varie pas avec le volume à court terme (loyer, amortissements, salaires permanents), un coût variable varie proportionnellement au volume (matières, commissions). Direct/indirect : possibilité d’affectation — un coût direct se rattache sans arbitraire à un produit ou un centre (matière consommée par le produit), un coût indirect est commun et nécessite une clé de répartition (loyer de l’atelier, direction). Les deux axes se croisent : un coût peut être fixe et direct (machine dédiée à un produit), variable et indirect (consommables communs à plusieurs lignes). Importance : le couple fixe/variable fonde le point mort et le direct costing (décisions de gestion court terme), le couple direct/indirect fonde les méthodes de coûts complets et la fiabilité des coûts de revient. Limite à signaler : fixe ne veut pas dire éternel — les charges fixes évoluent par paliers (recrutement, machine supplémentaire) et, à long terme, presque tout devient variable.',
    reasoning:
      'Vérifie la rigueur conceptuelle du candidat : la confusion fixe/direct et variable/indirect est l’erreur la plus fréquente en comptabilité de gestion. Le recruteur attend aussi la conscience que ces classifications servent des usages différents — pilotage court terme pour le couple fixe/variable, valorisation et analyse de rentabilité pour le couple direct/indirect — et qu’elles comportent des limites (fixe par paliers, répartition arbitraire des indirects).',
    commonErrors: [
      'Croire que fixe = direct et variable = indirect : ce sont deux axes indépendants qui se croisent.',
      'Penser qu’un coût fixe est fixe pour toujours : les charges fixes évoluent par paliers d’activité.',
      'Oublier l’horizon temporel : à long terme, presque tout devient variable.',
      'Présenter les clés de répartition des indirects comme objectives alors qu’elles comportent une part d’arbitraire.',
    ],
    oralShort:
      'Fixe et variable, c’est le comportement face au volume : le loyer ne bouge pas, les matières suivent la production. Direct et indirect, c’est l’affectation : la matière première se rattache directement au produit, le loyer de l’atelier doit être réparti. Les deux axes se croisent — une machine dédiée est fixe et directe — et ces distinctions servent le point mort et le calcul des coûts de revient.',
    oralLong:
      'Par définition, il y a deux axes de classement indépendants. Le premier, fixe/variable, décrit le comportement du coût face à l’activité : un coût fixe comme le loyer reste stable à court terme quand le volume change, un coût variable comme les matières premières varie proportionnellement. Le second, direct/indirect, décrit la possibilité d’affecter le coût : direct quand il se rattache sans arbitraire à un produit — la matière consommée —, indirect quand il est commun — le loyer de l’atelier — et nécessite une clé de répartition. L’objectif de ces distinctions est de choisir le bon outil : le couple fixe/variable alimente le point mort et le direct costing, donc les décisions de gestion court terme ; le couple direct/indirect alimente les coûts complets, donc la valorisation et l’analyse de rentabilité. Concrètement, sur mon stage fictif, je classais les charges du budget en fixes et variables pour calculer le seuil de rentabilité, puis j’affectais les charges indirectes par centres d’analyse pour les coûts de revient. En conclusion, ce sont deux découpages différents du même coût, avec leurs limites — un fixe évolue par paliers, une répartition d’indirects reste partiellement arbitraire — et c’est justement pour ça qu’on documente les conventions retenues.',
    followUp: 'Ton directeur commercial veut passer une commande supplémentaire à prix cassé — quelles distinctions de coûts tu utilises pour l’arbitrer ?',
    grading: [
      'Deux axes indépendants identifiés (comportement vs affectation).',
      'Exemples parlants pour chaque catégorie (loyer, matières, machine dédiée).',
      'Usage de chaque distinction cité (point mort, direct costing, coûts complets).',
      'Limite évoquée (fixe par paliers, arbitraire des clés de répartition).',
    ],
  },
  {
    id: 'qt-104',
    job: 'controle-gestion',
    category: 'definitions',
    difficulty: 1,
    skill: 'Tableaux de bord de gestion',
    question: 'C’est quoi un tableau de bord de gestion, et à quoi ça sert vraiment au quotidien ?',
    expectedAnswer:
      'Un tableau de bord est un document synthétique et périodique qui présente un nombre limité d’indicateurs financiers et opérationnels, comparés à des références — budget, N-1, objectifs — et assortis de seuils d’alerte et de commentaires orientés action. Il sert à piloter : détecter vite ce qui dévie, anticiper plutôt que constater, préparer les décisions en réunion, et donner un langage commun aux opérationnels et à la direction. Ce n’est ni un rapport exhaustif ni un empilement de chiffres : la valeur vient de la sélection des indicateurs alignés sur les objectifs, de la comparaison systématique à une référence et du commentaire par exception. Il se distingue du reporting, qui diffuse les données : le tableau de bord les met en perspective pour la décision. Sa fréquence, sa forme et son contenu dépendent du destinataire — un tableau de bord mensuel pour la direction ne ressemble pas à un suivi hebdomadaire d’un responsable d’atelier.',
    reasoning:
      'Question de cadrage pour vérifier que le candidat distingue l’indicateur du chiffre brut et le tableau de bord du listing de données. Points attendus : sélection d’indicateurs (et non exhaustivité), comparaison à des références, commentaire orienté action, distinction reporting/tableau de bord. Le contre-pied classique — « on met tout ce qu’on peut mesurer » — révèle un candidat qui n’a jamais conçu d’outil de pilotage.',
    commonErrors: [
      'Confondre tableau de bord et reporting exhaustif : tout mesurer au lieu de choisir.',
      'Présenter des chiffres sans référence comparée (budget, N-1) : un chiffre seul ne se juge pas.',
      'Oublier le commentaire par exception : des chiffres sans explication ne déclenchent pas de décision.',
      'Ignorer le destinataire et sa fréquence de lecture : le tableau de bord se conçoit pour son utilisateur.',
    ],
    oralShort:
      'Un tableau de bord de gestion, c’est un document synthétique et périodique : peu d’indicateurs, mais choisis parce qu’ils sont alignés sur les objectifs, toujours comparés au budget ou à N-1, avec des seuils d’alerte et des commentaires par exception. Là où le reporting diffuse les données, le tableau de bord sert à piloter : détecter vite, anticiper, préparer la décision.',
    oralLong:
      'Par définition, un tableau de bord de gestion est un outil de pilotage synthétique : un nombre limité d’indicateurs financiers et opérationnels, présentés périodiquement et toujours mis en perspective. L’objectif est de permettre à la direction et aux opérationnels de décider vite et juste : détecter ce qui dévie, anticiper plutôt que constater, préparer les réunions sur des faits partagés. Concrètement, un bon tableau de bord suit des règles de construction : définir le destinataire et la fréquence d’abord ; choisir des indicateurs alignés sur les objectifs et actionnables — pas seulement mesurables ; comparer chaque chiffre à une référence — budget, N-1, objectif — sinon il n’est pas interprétable ; poser des seuils d’alerte ; commenter par exception en expliquant les causes et en proposant des actions. Par exemple, sur mon stage fictif, le tableau de bord mensuel du directeur industriel tenait sur une page : taux de rebut, coût unitaire, volume, disponibilité machine — chacun comparé au budget et à N-1, avec un code couleur et trois lignes de commentaire. En conclusion, la valeur d’un tableau de bord ne vient pas de la quantité de chiffres mais de la qualité de la sélection et du commentaire : c’est un instrument de dialogue et de décision, pas une vitrine de données.',
    followUp: 'Si ton tableau de bord ne peut contenir que cinq indicateurs, tu choisis lesquels et pourquoi ?',
    grading: [
      'Définition orientée pilotage et décision, pas simple diffusion de chiffres.',
      'Comparaison à des références (budget, N-1) citée comme indispensable.',
      'Sélection d’indicateurs plutôt qu’exhaustivité soulignée.',
      'Distinction reporting / tableau de bord ou adaptation au destinataire mentionnée.',
    ],
  },
  {
    id: 'qt-105',
    job: 'controle-gestion',
    category: 'calculs',
    difficulty: 2,
    skill: 'Écart de chiffre d’affaires et taux de réalisation',
    question: 'On passe aux chiffres. Budget annuel de chiffre d’affaires : 2 400 000 €. Réalisé : 2 592 000 €. Quel est l’écart, quel est le taux de réalisation, et comment tu le commentes ?',
    expectedAnswer:
      'Écart = réalisé − budget = 2 592 000 − 2 400 000 = +192 000 €, favorable puisqu’on est sur une ligne de produit. Taux de réalisation = réalisé / budget = 2 592 000 / 2 400 000 = 108 %, soit +8 % de dépassement. Commentaire attendu : l’écart est favorable en montant et en pourcentage, mais il ne suffit pas pour conclure à une bonne performance — il faut le décomposer (effet volume, effet prix, mix produits), vérifier ce que donne le marché (une croissance de 8 % quand le marché fait 15 % est une perte de parts), et regarder la marge : un chiffre d’affaires supérieur obtenu en cassant les prix peut dégrader le résultat. En contrôle de gestion, un écart se calcule, se qualifie, se décompose, puis s’interprète.',
    reasoning:
      'Le recruteur vérifie la fluidité des automatismes de base : écart = réalisé − budget (192 000 €), taux de réalisation = réalisé / budget (108 %), et la capacité à ne pas s’arrêter au calcul. La distinction entre 108 % de taux de réalisation et +8 % d’écart relatif est un piège de formulation. Le vrai filtre est le commentaire : un candidat qui conclut « bonne performance » sans décomposition ni mise en perspective marché/marge n’a pas le réflexe du contrôleur.',
    commonErrors: [
      'Donner le taux sans le montant ou l’inverse : les deux se répondent (192 000 € et 108 %).',
      'Confondre taux de réalisation (108 %) et écart en pourcentage (+8 %) en les présentant comme identiques.',
      'Conclure « bonne performance » sans décomposer l’écart ni recouper avec le marché et la marge.',
      'Calculer le taux avec le réalisé au dénominateur (2 400 000 / 2 592 000) — la formule est réalisé divisé par budget.',
    ],
    oralShort:
      'L’écart, c’est réalisé moins budget : 2 592 000 moins 2 400 000, soit plus 192 000 euros, favorable sur une ligne de produit. Le taux de réalisation, c’est réalisé divisé par budget : 108 %, donc plus 8 %. Mais je ne m’arrête pas là : je décompose volume, prix et mix, je compare au marché et je regarde la marge avant de conclure.',
    oralLong:
      'Par définition, deux mesures complémentaires structurent l’analyse : l’écart en montant, réalisé moins budget, et le taux de réalisation, réalisé divisé par budget. L’objectif est de chiffrer l’écart puis de le relativiser pour qu’il soit parlant en réunion. Concrètement, ici : écart = 2 592 000 − 2 400 000 = +192 000 €, favorable puisque le chiffre d’affaires est un produit ; taux de réalisation = 2 592 000 / 2 400 000 = 108 %, c’est-à-dire un dépassement de +8 % du budget. Par exemple, si je commente ce chiffre en comité, je dis : « Nous sommes à 108 % du budget annuel, soit +192 000 €. Trois précisions avant de nous réjouir : la décomposition — quel est l’effet volume, quel est l’effet prix, quel est le mix ; la comparaison au marché — si le marché a progressé de 15 %, nos 8 % traduisent une perte de parts ; et la marge — si ce chiffre d’affaires a été obtenu par des remises, le résultat peut être en retrait malgré tout. » En conclusion, l’écart et le taux se calculent en trois secondes, se qualifient en une phrase, mais ne s’interprètent qu’avec la décomposition et le recoupement — c’est tout le métier du contrôleur.',
    followUp: 'Le directeur commercial te répond que c’est grâce à une hausse de prix de 10 %. Qu’est-ce que ça t’inspire comme question suivante ?',
    grading: [
      'Calcul juste : +192 000 € (réalisé − budget) et qualification favorable.',
      'Taux de réalisation juste : 108 %, avec la nuance « +8 % de dépassement ».',
      'Réflexe de décomposition (volume/prix/mix) et de recoupement marché.',
      'Lien fait avec la marge : un chiffre d’affaires supérieur n’implique pas un résultat supérieur.',
    ],
  },
  {
    id: 'qt-106',
    job: 'controle-gestion',
    category: 'calculs',
    difficulty: 2,
    skill: 'Marge sur coûts variables',
    question: 'Chiffre d’affaires annuel : 1 500 000 €. Charges variables : 900 000 €. Charges fixes : 480 000 €. Tu me calcules la marge sur coûts variables, son taux, et le résultat ?',
    expectedAnswer:
      'Marge sur coûts variables = CA − charges variables = 1 500 000 − 900 000 = 600 000 €. Taux de marge sur coûts variables = marge / CA = 600 000 / 1 500 000 = 40 % — chaque euro de chiffre d’affaires apporte 0,40 € de marge avant couverture des charges fixes. Résultat = marge sur coûts variables − charges fixes = 600 000 − 480 000 = 120 000 €. Lecture de gestion : la structure est rentable, et ces trois chiffres contiennent déjà l’essentiel du pilotage — le taux de 40 % donne directement le point mort par division des charges fixes par ce taux, et toute variation du chiffre d’affaires se traduit mécaniquement à 40 % en marge. Précision de convention : le taux se calcule marge divisée par CA ; selon les entreprises on parle de taux de marge ou de taux de marque avec des dénominateurs différents, donc toujours préciser la convention retenue dans le fichier.',
    reasoning:
      'Le recruteur teste les automatismes du direct costing : MSCV = CA − charges variables, taux = marge/CA, résultat = MSCV − charges fixes. Les erreurs classiques : diviser par les charges variables, oublier la déduction des fixes pour le résultat, ou confondre marge sur coûts variables et marge nette. Au-delà des chiffres, la lecture structurelle — chaque euro vendu apporte 0,40 € — montre la compréhension du modèle décisoire derrière le calcul.',
    commonErrors: [
      'Diviser la marge par les charges variables (900 000) au lieu du chiffre d’affaires pour le taux.',
      'Confondre marge sur coûts variables et résultat : il faut encore déduire les 480 000 € de charges fixes.',
      'Présenter le taux de 40 % comme une marge nette ou un taux de marque sans préciser la convention.',
      'S’arrêter aux calculs sans lecture de gestion (contribution unitaire, lien vers le point mort).',
    ],
    oralShort:
      'Marge sur coûts variables : 1 500 000 moins 900 000, soit 600 000 €. Son taux : marge divisée par chiffre d’affaires, 600 000 sur 1 500 000, 40 %. Et le résultat : 600 000 moins les 480 000 de charges fixes, soit 120 000 €. Chaque euro vendu apporte quarante centimes de marge avant couverture des fixes — c’est la lecture qui compte.',
    oralLong:
      'Par définition, la marge sur coûts variables est ce qui reste du chiffre d’affaires après déduction des charges qui varient avec l’activité — c’est la contribution à la couverture des charges fixes et au résultat. L’objectif du calcul est double : mesurer la performance de la structure commerciale et donner les paramètres du pilotage court terme. Concrètement, trois étapes : marge sur coûts variables = 1 500 000 − 900 000 = 600 000 € ; taux = marge divisée par CA = 600 000 / 1 500 000 = 40 % ; résultat = marge − charges fixes = 600 000 − 480 000 = 120 000 €. Par exemple, avec ces paramètres, je peux dire immédiatement au directeur commercial qu’une commande additionnelle de 100 000 € apporte 40 000 € de marge, sans toucher aux charges fixes — c’est tout l’intérêt du modèle. En conclusion : 600 000 € de marge, un taux de 40 %, un résultat de 120 000 € ; je précise toujours la convention — marge divisée par CA — car certains secteurs parlent en taux de marque avec d’autres dénominateurs, et une convention mal étiquetée fausse toutes les comparaisons.',
    followUp: 'On te propose une commande additionnelle de 100 000 € à marge réduite — à partir de quel taux tu l’acceptes ?',
    grading: [
      'Marge sur coûts variables juste : 600 000 € (CA − charges variables).',
      'Taux juste : 40 % (marge / CA) avec la convention précisée.',
      'Résultat juste : 120 000 € (MSCV − charges fixes).',
      'Lecture de gestion : contribution unitaire de 0,40 € par euro de CA.',
    ],
  },
  {
    id: 'qt-107',
    job: 'controle-gestion',
    category: 'calculs',
    difficulty: 3,
    skill: 'Point mort / seuil de rentabilité',
    question: 'Charges fixes annuelles : 750 000 €. Prix de vente unitaire : 500 €. Coût variable unitaire : 300 €. Tu me calcules le point mort — en valeur et en volume ?',
    expectedAnswer:
      'Le point mort (seuil de rentabilité) est le niveau d’activité où le résultat est nul : charges fixes divisées par le taux de marge sur coûts variables. Marge sur coûts variables unitaire = 500 − 300 = 200 € ; taux = 200 / 500 = 40 %. Point mort en valeur = 750 000 / 0,40 = 1 875 000 € de chiffre d’affaires. Point mort en volume = charges fixes divisées par la marge unitaire = 750 000 / 200 = 3 750 unités — contrôle de cohérence : 3 750 × 500 = 1 875 000 €. Lecture : en dessous, chaque unité vendue réduit la perte de 200 € ; au-dessus, chaque unité accroît le résultat de 200 €. Hypothèses à expliciter : prix et coût variable unitaires constants, charges fixes stables, structure mono-produit — en réalité les charges fixes évoluent par paliers et un mix produits impose un taux de marge moyen pondéré. Certains distinguent aussi le seuil de rentabilité (montant de chiffre d’affaires, 1 875 000 €) du point mort au sens strict (date à laquelle il est atteint dans l’année).',
    reasoning:
      'Question classique de contrôle de gestion : le candidat doit connaître la formule (charges fixes / taux de marge sur coûts variables) mais surtout éviter l’erreur de diviser les charges fixes par le prix de vente. Le volume s’obtient par les charges fixes divisées par la marge unitaire, et le contrôle croisé (3 750 × 500 = 1 875 000) prouve la maîtrise. La distinction entre niveau et date, et les hypothèses du modèle, font la différence entre un technicien et un candidat qui maîtrise la lecture de gestion.',
    commonErrors: [
      'Diviser les charges fixes par le prix de vente (750 000 / 500) en oubliant la marge sur coûts variables.',
      'Confondre point mort en valeur et point mort en volume, ou ne pas contrôler leur cohérence (3 750 × 500 = 1 875 000).',
      'Ignorer les hypothèses du modèle : charges fixes par paliers, mix produits, prix unitaires constants.',
      'Oublier la distinction entre seuil de rentabilité (montant) et point mort au sens de la date d’atteinte.',
    ],
    oralShort:
      'Marge unitaire : 500 moins 300, 200 euros, soit un taux de 40 %. Le point mort, c’est les charges fixes divisées par ce taux : 750 000 sur 0,40, 1 875 000 euros de chiffre d’affaires. En volume : 750 000 divisés par la marge unitaire de 200, soit 3 750 unités — et on contrôle : 3 750 fois 500, on retombe bien sur 1 875 000.',
    oralLong:
      'Par définition, le point mort — ou seuil de rentabilité — est le niveau d’activité à partir duquel l’entreprise couvre la totalité de ses charges : en dessous elle perd de l’argent, au-dessus elle en gagne. L’objectif du calcul est de chiffrer ce point pour dimensionner l’objectif commercial minimal. Concrètement, trois étapes : la marge sur coûts variables unitaire, 500 − 300 = 200 € ; le taux de marge, 200 / 500 = 40 % ; puis le point mort en valeur, charges fixes divisées par ce taux : 750 000 / 0,40 = 1 875 000 € de chiffre d’affaires. En volume, on divise les charges fixes par la marge unitaire : 750 000 / 200 = 3 750 unités — avec le contrôle de cohérence : 3 750 × 500 = 1 875 000 €. Par exemple, avec ces paramètres, je peux dire au directeur commercial que l’objectif minimal est de 3 750 unités par an, et qu’au-delà chaque unité vendue rapporte 200 € de résultat. En conclusion, 1 875 000 € et 3 750 unités — sous les hypothèses du modèle : prix et coûts unitaires constants, charges fixes stables, mono-produit. En réalité, les charges fixes montent par paliers et, en multi-produits, on travaille avec un taux de marge moyen pondéré — et certains distinguent le seuil (montant) du point mort stricto sensu (la date où on l’atteint dans l’année).',
    followUp: 'Tes charges fixes passent à 900 000 € avec un palier d’investissement — nouveau point mort, et qu’est-ce que ça change pour l’objectif commercial ?',
    grading: [
      'Marge unitaire (200 €) et taux de marge (40 %) calculés correctement.',
      'Point mort en valeur juste : 750 000 / 0,40 = 1 875 000 €.',
      'Point mort en volume juste : 3 750 unités, avec le contrôle croisé.',
      'Hypothèses et limites du modèle citées (paliers, mix, date vs montant).',
    ],
  },
  {
    id: 'qt-108',
    job: 'controle-gestion',
    category: 'calculs',
    difficulty: 4,
    skill: 'Décomposition d’un écart de marge',
    question: 'Budget : 10 000 unités vendues à 25 €, coût variable unitaire 15 €. Réalisé : 9 500 unités à 27 €, coût variable unitaire 16 €. Décompose-moi l’écart de marge en écart sur volume, sur prix et sur coût ?',
    expectedAnswer:
      'Marge budgétée = 10 000 × (25 − 15) = 100 000 €. Marge réalisée = 9 500 × (27 − 16) = 104 500 €. Écart total = 104 500 − 100 000 = +4 500 €, favorable. Décomposition au volume réalisé : écart sur volume = (9 500 − 10 000) × marge unitaire budgétée (10 €) = −5 000 €, défavorable ; écart sur prix = 9 500 × (27 − 25) = +19 000 €, favorable ; écart sur coût variable = 9 500 × (15 − 16) = −9 500 €, défavorable. Bouclage : −5 000 + 19 000 − 9 500 = +4 500 €, on retombe exactement sur l’écart total. Lecture de gestion : la hausse de prix a surcompensé la baisse de volume et le dérapage du coût — mais volume et prix sont liés : vendre 5 % plus cher en perdant 5 % de volume peut signaler un problème de compétitivité ou de marché, à creuser avec le commercial. La clé de la décomposition est la cohérence des conventions : chaque sous-écart est calculé au volume réalisé, sinon la somme ne boucle pas.',
    reasoning:
      'Le recruteur évalue la maîtrise de la décomposition — au-delà du calcul global, la capacité à isoler les causes. Les pièges : mélanger les conventions (calculer certains sous-écarts au volume budgété, d’autres au réalisé) et ne pas vérifier le bouclage. Le signe de l’écart sur coût (coût réalisé supérieur au budget = défavorable) est l’autre difficulté. La lecture croisée prix/volume finalise la réponse : le candidat qui voit le lien entre hausse de prix et baisse de volume montre du recul de gestion.',
    commonErrors: [
      'Mélanger les conventions (volume budgété pour un sous-écart, réalisé pour un autre) : la somme ne retombe plus sur +4 500 €.',
      'Oublier le bouclage final : total des sous-écarts = écart total, à vérifier systématiquement.',
      'Mal signer l’écart sur coût : un coût unitaire réalisé supérieur au budgété est défavorable.',
      'Limiter l’interprétation à « c’est favorable » sans relever le lien entre hausse de prix et baisse de volume.',
    ],
    oralShort:
      'Marge budget : 10 000 fois 10, 100 000 €. Marge réalisée : 9 500 fois 11, 104 500 €. Écart total : plus 4 500 € favorable. Décomposé au volume réel : volume, moins 5 000 ; prix, plus 19 000 ; coût, moins 9 500. Le contrôle : moins 5 000 plus 19 000 moins 9 500, on retombe sur plus 4 500 — ça boucle.',
    oralLong:
      'Par définition, décomposer un écart de marge, c’est isoler les effets volume, prix et coût pour rendre l’écart actionnable. L’objectif est de savoir qui pilote quoi : le commercial sur le volume et le prix, la production ou les achats sur le coût. Concrètement, quatre étapes : marge budgétée = 10 000 × (25 − 15) = 100 000 € ; marge réalisée = 9 500 × (27 − 16) = 104 500 € ; écart total = +4 500 € favorable ; puis la décomposition, calculée intégralement au volume réalisé pour garder des conventions cohérentes — écart sur volume : (9 500 − 10 000) × 10 € de marge unitaire budgétée = −5 000 € ; écart sur prix : 9 500 × (27 − 25) = +19 000 € ; écart sur coût : 9 500 × (15 − 16) = −9 500 €. Et on boucle : −5 000 + 19 000 − 9 500 = +4 500 €, identique à l’écart total. Par exemple, en comité je commente : « la marge progresse de 4 500 € grâce au prix (+19 000), malgré un volume inférieur (−5 000) et un coût unitaire dérapé (−9 500) ; le point de vigilance, c’est le lien prix-volume : on vend plus cher mais moins — il faut vérifier avec le commercial si on a perdu des clients sur le prix. » En conclusion, une décomposition n’est recevable que si elle boucle sur le total et si la lecture croise les effets : ici, le prix compense, mais la dynamique volume mérite une investigation.',
    followUp: 'Le chef des ventes te dit que la baisse de volume vient justement de la hausse de prix. Comment tu reformules ton analyse ?',
    grading: [
      'Écart total juste : +4 500 € favorable (104 500 − 100 000).',
      'Trois sous-écarts justes au volume réalisé : −5 000 / +19 000 / −9 500.',
      'Bouclage vérifié et énoncé : somme des sous-écarts = écart total.',
      'Lecture croisée prix-volume et point de vigilance mentionnés.',
    ],
  },
  {
    id: 'qt-109',
    job: 'controle-gestion',
    category: 'calculs',
    difficulty: 5,
    skill: 'Écart de résultat global',
    question: 'Dernier calcul, plus complet. Budget : 12 000 unités à 80 €, coût variable unitaire 46 €, charges fixes 240 000 €. Réalisé : 10 500 unités à 82 €, coût variable unitaire 49 €, charges fixes 246 000 €. Décompose-moi l’écart de résultat ?',
    expectedAnswer:
      'Résultat budgété = 12 000 × 80 − 12 000 × 46 − 240 000 = 960 000 − 552 000 − 240 000 = 168 000 €. Résultat réalisé = 10 500 × 82 − 10 500 × 49 − 246 000 = 861 000 − 514 500 − 246 000 = 100 500 €. Écart de résultat = 100 500 − 168 000 = −67 500 €, défavorable. Décomposition en contributions au résultat : marge unitaire budgétée = 80 − 46 = 34 € ; écart sur volume = (10 500 − 12 000) × 34 = −51 000 € ; écart sur prix = 10 500 × (82 − 80) = +21 000 € ; écart sur coût variable = 10 500 × (46 − 49) = −31 500 € ; écart sur charges fixes = 240 000 − 246 000 = −6 000 €. Bouclage : −51 000 + 21 000 − 31 500 − 6 000 = −67 500 €. À noter aussi : taux de réalisation du chiffre d’affaires = 861 000 / 960 000 ≈ 89,7 %. Lecture : le facteur dominant est le volume (−51 000 €, les trois quarts de l’écart), le coût variable explique −31 500 €, la hausse de prix ne compense que +21 000 €, et les fixes dérapent de −6 000 €. Ordre d’action : comprendre le volume (marché, force de vente, mix) et le coût unitaire (achats, rendements) — le prix, lui, a partiellement joué son rôle.',
    reasoning:
      'Question de niveau avancé : le candidat doit enchaîner proprement deux comptes de résultat, puis décomposer en quatre sous-écarts avec des conventions de signe cohérentes — l’écart sur charges fixes se raisonne « budget moins réalisé » pour être lu comme contribution au résultat (un coût qui monte pèse négativement). Le bouclage (−67 500) est le contrôle de crédibilité. La hiérarchisation des causes et le taux de réalisation du CA distinguent une réponse de contrôleur confirmé d’une simple récitation de formules.',
    commonErrors: [
      'Se tromper dans les conventions de signe des écarts de charges : un coût réalisé supérieur au budget pèse négativement sur le résultat.',
      'Oublier le bouclage : −51 000 + 21 000 − 31 500 − 6 000 doit redonner exactement −67 500 €.',
      'Erreurs de calcul intermédiaires (marge unitaire 34 €, coûts variables 552 000 / 514 500) qui faussent toute la décomposition.',
      'Rendre le calcul sans hiérarchiser les causes ni proposer d’investigation ciblée.',
    ],
    oralShort:
      'Résultat budget : 168 000 €. Résultat réalisé : 100 500 €. Écart : moins 67 500 défavorable. Décomposition : volume, moins 51 000 ; prix, plus 21 000 ; coût variable, moins 31 500 ; fixes, moins 6 000. Contrôle : la somme redonne moins 67 500. Le volume explique les trois quarts de l’écart — c’est la priorité d’investigation.',
    oralLong:
      'Par définition, l’écart de résultat global se décompose en contributions : volume, prix, coûts variables et charges fixes — chacune isolée, la somme devant boucler sur l’écart total. L’objectif est d’attribuer la dérive aux leviers de gestion pour agir. Concrètement : résultat budgété = 12 000 × 80 − 12 000 × 46 − 240 000 = 168 000 € ; résultat réalisé = 10 500 × 82 − 10 500 × 49 − 246 000 = 100 500 € ; écart total = −67 500 € défavorable. Puis la décomposition, au volume réalisé et en contribution au résultat : marge unitaire budgétée 80 − 46 = 34 € ; volume : (10 500 − 12 000) × 34 = −51 000 € ; prix : 10 500 × (82 − 80) = +21 000 € ; coût variable : 10 500 × (46 − 49) = −31 500 € ; charges fixes : 240 000 − 246 000 = −6 000 €. Bouclage : −51 000 + 21 000 − 31 500 − 6 000 = −67 500 €. Par exemple, mon commentaire en comité : « Nous sommes à 89,7 % du budget de chiffre d’affaires et le résultat décroche de 67 500 €. Trois quarts de l’écart viennent du volume, un peu moins de la moitié du reste du coût variable unitaire ; la hausse de prix a compensé 21 000 €. J’engage deux investigations : volume avec le commercial — marché ou performance de vente — et coût unitaire avec les achats et la production. » En conclusion, la force d’une telle analyse tient au bouclage qui la rend vérifiable et à la hiérarchisation qui la rend actionnable.',
    followUp: 'La direction te demande de chiffrer ce que donnerait un plan d’action qui ramènerait le coût variable unitaire à 47 €. Tu fais quoi ?',
    grading: [
      'Résultats budgété (168 000 €) et réalisé (100 500 €) justes, écart total −67 500 € qualifié.',
      'Quatre sous-écarts justes avec conventions cohérentes (−51 000 / +21 000 / −31 500 / −6 000).',
      'Bouclage énoncé et vérifié, taux de réalisation du CA (≈ 89,7 %) cité.',
      'Hiérarchisation des causes et pistes d’investigation proposées.',
    ],
  },
  {
    id: 'qt-110',
    job: 'controle-gestion',
    category: 'definitions',
    difficulty: 2,
    skill: 'Budget, prévision, réalisé',
    question: 'Budget, prévision, forecast, réalisé — pour moi c’est un peu tout pareil. Tu me clarifies les différences ?',
    expectedAnswer:
      'Trois statuts différents pour les chiffres. Le budget est le plan chiffré annuel construit et validé avant le début de la période : c’est un engagement — délégation de moyens et objectifs négociés avec les responsables. La prévision (forecast) est une estimation actualisée, produite en cours de période, de ce que sera le réalisé : elle est répétée (prévision à M+1, M+2, ou glissante sur un horizon constant en rolling forecast) et sert à anticiper et alerter. Le réalisé est le constat comptable de la période, base du bilan et point de départ des comparaisons. Les usages se distinguent : le budget engage et sert de référence de gestion ; la prévision anticipe l’écart final et déclenche des actions correctives ; le réalisé mesure et alimente l’apprentissage pour N+1. Un même chiffre change de statut selon l’étiquette — d’où l’importance de toujours préciser ce qu’on regarde : un « réalisé + prévision du reste de l’année » n’est ni l’un ni l’autre et doit être identifié comme tel (c’est le full year forecast).',
    reasoning:
      'Vérifie le vocabulaire de gestion — un candidat qui confond budget et prévision envoie des tableaux ambigus et provoque des décisions sur de mauvaises bases. Points attendus : le statut d’engagement du budget (validé avant la période), la nature répétée de la prévision (re-prévisions périodiques, rolling), le réalisé comme constat, et la rigueur d’étiquetage des chiffres hybrides (full year). Le rolling forecast peut être cité comme variante de prévision glissante, sans être présenté comme une norme.',
    commonErrors: [
      'Présenter le budget actualisé en cours d’année comme le budget d’origine : c’est une prévision ou un budget révisé, à étiqueter.',
      'Croire que le budget est immuable par nature : des re-prévisions ou budgets révisés existent, mais documentés et validés.',
      'Oublier d’étiqueter les chiffres hybrides (réalisé + prévision du reste de l’année) : source de contresens en réunion.',
      'Confondre rolling forecast (horizon glissant) et simple re-prévision annuelle.',
    ],
    oralShort:
      'Le budget, c’est le plan annuel validé avant la période : un engagement de moyens et d’objectifs. La prévision, c’est l’estimation actualisée en cours d’année de ce que sera le réalisé — répétée, glissante parfois, pour anticiper et alerter. Le réalisé, c’est le constat comptable. Trois statuts, trois usages — et j’étiquette toujours mes chiffres.',
    oralLong:
      'Par définition, ces trois chiffres n’ont pas le même statut. Le budget est le plan chiffré annuel, construit à l’automne pour l’année suivante et validé par la direction : c’est un engagement — la délégation des moyens et les objectifs des responsables. La prévision, ou forecast, est une estimation actualisée en cours de période : à fin mars, je prédis ce que l’année donnera au final, et je la répète chaque mois ; en rolling forecast, l’horizon reste constant, par exemple douze mois glissants. Le réalisé est le constat comptable, arrêté à la clôture. L’objectif de cette distinction est d’éviter les contresens de gestion : on ne juge pas une performance sur une prévision, et on ne pilote pas sur un budget périmé. Concrètement, dans mes tableaux, chaque colonne est étiquetée : budget, réalisé, prévision — et le chiffre « réalisé janvier à juillet plus prévision d’août à décembre » est identifié comme full year forecast, pas comme un réalisé. Par exemple, sur mon stage fictif, en juillet la direction demandait le full year : je partais du réalisé à M7 et je reconstituais les cinq derniers mois sur hypothèses datées. En conclusion, trois statuts — engagement, anticipation, constat — et une règle d’or : toujours préciser le statut d’un chiffre avant de le commenter.',
    followUp: 'Ton directeur te présente un tableau qui compare le réalisé au « budget » — et tu découvres que ce budget a été re-négocié en mars sans trace. Qu’est-ce que tu lui dis ?',
    grading: [
      'Budget présenté comme engagement validé avant la période.',
      'Prévision/forecast définie comme estimation actualisée et répétée (rolling cité sans être érigé en norme).',
      'Réalisé défini comme constat comptable, base des comparaisons.',
      'Rigueur d’étiquetage des chiffres hybrides (full year forecast) mentionnée.',
    ],
  },
  {
    id: 'qt-111',
    job: 'controle-gestion',
    category: 'limites',
    difficulty: 3,
    skill: 'Limites du budget annuel',
    question: 'Ton budget a été construit en octobre, on est en juin et le marché a complètement changé. Quelles sont les limites du budget annuel, et tu proposes quoi ?',
    expectedAnswer:
      'Limites du budget annuel classique : obsolescence rapide — des hypothèses construites plusieurs mois avant la période deviennent caduques dès que le marché bouge ; lourdeur du processus — cycle de collecte et de négociation qui consomme des semaines ; comportements de jeu budgétaire — négociation de marges de sécurité, objectifs volontairement prudents, budget devenu politique ; rigidité — un chiffre figé décourage l’ajustement et pénalise les managers qui réagissent vite. Réponses possibles : re-prévisions périodiques (recalage à M+3, M+6, documenté et validé), rolling forecast à horizon constant (12 à 18 mois glissants) qui déplace le pilotage du budget vers la prévision continue, budgets par scénarios (central, haut, bas) pour garder des repères quand l’environnement est incertain, pilotage par indicateurs avancés. Nuances à assumer : le budget reste le cadre de délégation des moyens et ne disparaît pas ; le rolling forecast est un choix de gestion, pas une règle — son coût administratif doit être comparé au bénéfice d’anticipation, et une PME en environnement stable peut très bien s’en passer.',
    reasoning:
      'Le recruteur teste la lucidité du candidat sur l’outil budget : les limites (obsolescence, jeux, lourdeur) mais aussi la capacité à ne pas jeter le bébé avec l’eau du bain — le budget garde un rôle d’engagement et de référence. La distinction re-prévision / budget révisé / rolling forecast montre la précision du vocabulaire. La réponse doit signaler que le choix d’un dispositif dépend de la taille et de la volatilité — c’est un choix de gestion, pas une évidence universelle.',
    commonErrors: [
      'Diaboliser le budget annuel : il reste le cadre de délégation des moyens et la référence d’engagement.',
      'Proposer le rolling forecast comme évidence universelle sans évoquer son coût administratif ni la stabilité de l’activité.',
      'Confondre re-prévision (recalage périodique du reste de l’année) et budget révisé (re-négociation formelle validée).',
      'Oublier les comportements de jeu budgétaire (marges de sécurité, prudence excessive) comme limite structurelle.',
    ],
    oralShort:
      'Les limites du budget annuel : il vieillit vite — des hypothèses d’octobre sont caduques en juin —, son processus est lourd, il induit des jeux budgétaires, et sa rigidité pénalise la réactivité. Mes réponses : re-prévisions périodiques documentées, rolling forecast à horizon glissant, ou budgets par scénarios. Mais le budget reste le cadre d’engagement — le rolling est un choix de gestion, pas une norme.',
    oralLong:
      'Par définition, le budget annuel est un engagement chiffré construit en fin d’année précédente — et c’est précisément sa limite : il fige des hypothèses. L’objectif de ma réponse n’est pas de le supprimer mais de le compléter. Concrètement, ses limites sont au nombre de quatre : l’obsolescence — un budget construit en octobre est périmé dès que le marché tourne ; la lourdeur — des semaines de collecte et de négociation ; les jeux budgétaires — chaque responsable négocie des marges de sécurité, le budget devient politique et sur-évalué ; la rigidité — un chiffre figé décourage l’ajustement des managers. Les réponses usuelles : des re-prévisions périodiques, à M+3 ou M+6, documentées et validées — attention, ce n’est pas un budget révisé, qui serait une re-négociation formelle ; le rolling forecast, horizon constant de douze à dix-huit mois glissants, qui déplace le pilotage vers l’anticipation continue ; ou des budgets par scénarios — central, haut, bas — quand l’incertitude est forte. Par exemple, sur mon stage fictif, la re-prévision de juin avait révélé un décalage de volume : la direction a ajusté le plan d’embauche avant la clôture, ce qu’un budget figé aurait empêché. En conclusion : le budget garde son rôle de cadre de délégation des moyens ; je le complète d’un dispositif d’anticipation — et le choix exact, re-prévisions ou rolling, dépend de la volatilité du secteur et du coût administratif que l’entreprise accepte : c’est un arbitrage de gestion, pas une règle.',
    followUp: 'Le DAF te dit : « le rolling forecast, c’est un budget qui ment tous les mois ». Tu lui réponds quoi ?',
    grading: [
      'Au moins trois limites du budget annuel citées (obsolescence, lourdeur, jeux, rigidité).',
      'Solutions hiérarchisées : re-prévisions, rolling forecast, scénarios.',
      'Distinction re-prévision / budget révisé présente.',
      'Position nuancée : le budget garde un rôle, le rolling est un choix de gestion (coût, volatilité).',
    ],
  },
  {
    id: 'qt-112',
    job: 'controle-gestion',
    category: 'procedures',
    difficulty: 3,
    skill: 'Construction d’un tableau de bord',
    question: 'Je te demande de construire le tableau de bord mensuel de ma direction. Concrètement, tu fais quoi — tu choisis quels indicateurs, comment ?',
    expectedAnswer:
      'Démarche en étapes : 1) cadrer le besoin avant toute donnée — qui lit le tableau de bord, pour quelles décisions, à quelle fréquence, avec quel niveau de détail : un comité de direction n’a pas les mêmes attentes qu’un responsable d’atelier ; 2) choisir les indicateurs en partant des objectifs et des leviers : financiers (chiffre d’affaires, marge, résultat, trésorerie) et opérationnels non financiers (volumes, taux de service, retards, effectifs) — chaque indicateur doit être aligné sur un objectif et actionnable par son lecteur ; 3) définir les comparaisons de référence — budget, N-1, objectif — et les seuils d’alerte qui déclenchent le commentaire ; 4) maquetter : une page d’ensemble, une hiérarchie visuelle, le détail en annexes, les codes couleur avec parcimonie — un feu rouge doit rester rare pour rester lu ; 5) fiabiliser : source de données unique, contrôles de cohérence, date de clôture connue ; 6) commenter par exception : écarts significatifs, causes, actions — pas de narration descriptive ; 7) itérer avec les utilisateurs après deux ou trois livraisons. Règle de fond : peu d’indicateurs bien choisis valent mieux qu’un catalogue exhaustif — un tableau de bord se juge aux décisions qu’il déclenche.',
    reasoning:
      'Le recruteur veut distinguer le candidat qui commence par les données disponibles de celui qui commence par les décisions à éclairer. La démarche attendue : besoin d’abord, indicateurs ensuite, références et seuils, maquette, fiabilisation, commentaire par exception, itération. Les marqueurs de maturité : indicateurs actionnables, codes couleur parcimonieux, distinction entre décrire (« le taux de service est à 92 % ») et expliquer (« en baisse de 3 points, cause : absences non remplacées »).',
    commonErrors: [
      'Commencer par les données disponibles plutôt que par les décisions à éclairer.',
      'Empiler quarante indicateurs sans hiérarchie : un tableau de bord illisible n’est pas consulté.',
      'Présenter des chiffres sans référence comparée ni seuil d’alerte.',
      'Commentaires descriptifs (« le CA est de X ») au lieu d’explicatif (causes et actions).',
    ],
    oralShort:
      'Je commence par le besoin : qui lit, pour décider quoi, à quelle fréquence. Ensuite je choisis peu d’indicateurs, alignés sur les objectifs et actionnables par leurs lecteurs. Chaque chiffre est comparé au budget et à N-1, avec des seuils d’alerte. Puis je maquette sur une page, je fiabilise la source, et je commente par exception — causes et actions. Et j’itère après les premières livraisons.',
    oralLong:
      'Par définition, un tableau de bord est un instrument de décision, donc sa construction part de la décision, pas des données. L’objectif est d’éclairer des choix avec des chiffres fiables et lus rapidement. Concrètement, je déroule sept étapes : cadrer le besoin — qui lit, pour quelles décisions, à quelle fréquence ; choisir les indicateurs en partant des objectifs et des leviers — financiers comme la marge, opérationnels comme le taux de service — en exigeant de chacun qu’il soit actionnable par son lecteur ; définir les références — budget, N-1 — et les seuils d’alerte qui déclenchent l’analyse ; maquetter — une page d’ensemble, le détail en annexe, des codes couleur parcimonieux ; fiabiliser — source unique, contrôles de cohérence, date de clôture identifiée ; commenter par exception, en expliquant les causes et les actions ; enfin itérer avec les utilisateurs après quelques livraisons. Par exemple, sur mon stage fictif, le premier tableau de bord commercial comptait vingt-deux indicateurs ; après deux mois, la direction n’en lisait que huit — nous avons recentré, ajouté le taux de marge par segment, et la réunion a gagné en densité. En conclusion : peu d’indicateurs bien choisis, toujours comparés, toujours commentés par exception — un tableau de bord se juge aux décisions qu’il déclenche, pas aux données qu’il contient.',
    followUp: 'Ta direction te demande d’ajouter un indicateur par service « pour ne froisser personne ». Tu gères comment ?',
    grading: [
      'Démarche qui part du besoin et des décisions, pas des données.',
      'Indicateurs actionnables et alignés sur les objectifs, en nombre limité.',
      'Références de comparaison et seuils d’alerte prévus.',
      'Commentaire par exception et itération avec les utilisateurs mentionnés.',
    ],
  },
  {
    id: 'qt-113',
    job: 'controle-gestion',
    category: 'excel',
    difficulty: 3,
    skill: 'Reporting mensuel sous Excel',
    question: 'Chaque mois tu reçois l’export brut de l’ERP. Comment tu construis ton fichier de reporting Excel pour qu’il soit fiable et rapide à produire ?',
    expectedAnswer:
      'Je structure le classeur en couches séparées : un onglet Données brutes où l’export mensuel est collé ou importé tel quel, jamais retouché à la main — c’est la trace de la source ; un onglet Base, où les données sont mises en forme en tableau structuré (Insertion > Tableau) avec des colonnes calculées — mois, famille, écarts ; un onglet Tableau de bord avec les synthèses : tableau croisé dynamique alimenté par la base, formules SOMME.SI.ENS ou RECHERCHEX pointant sur le tableau structuré, graphiques et segments ; un onglet Paramètres pour les hypothèses — seuils, tables de correspondance. Points techniques : le tableau structuré rend la plage extensible — le TCD s’actualise sur les nouvelles lignes sans redéfinir la plage ; les formules sont recopiées une fois pour toutes et seules les données changent ; la mise en forme conditionnelle matérialise les alertes ; des contrôles automatiques vérifient que le total affiché est égal au total de la base. Et un mode opératoire de production, écrit : l’ordre des manipulations, pour que le fichier soit productible par quelqu’un d’autre — la passation est un critère de qualité. Séparation de fond : les données d’un côté, la présentation de l’autre, jamais mélangées.',
    reasoning:
      'Vérifie l’organisation pratique du travail Excel du contrôleur : séparation données/présentation, tableau structuré pour l’extensibilité, automatisation de l’actualisation, contrôles intégrés. Le marqueur de maturité est la reproductibilité — un fichier reconstruit à la main chaque mois est un fichier fragile et non transmissible. L’onglet brut non retouché est aussi une exigence de traçabilité (piste d’audit interne du fichier).',
    commonErrors: [
      'Retravailler l’export à la main dans l’onglet source : la traçabilité est détruite et l’erreur de manipulation devient introuvable.',
      'Formules avec plages figées en dur ($A$2:$A$5000) sur des données qui grandissent : les nouvelles lignes sortent du périmètre — d’où le tableau structuré.',
      'Mélanger saisies manuelles et formules dans les mêmes colonnes : la fiabilité s’effondre.',
      'Reconstruire le fichier chaque mois au lieu de l’actualiser : temps perdu, erreurs de version.',
    ],
    oralShort:
      'Je sépare les couches : un onglet données brutes jamais retouché — c’est la trace ; un onglet base en tableau structuré avec les colonnes calculées ; un onglet tableau de bord avec le TCD et les formules qui pointent dessus ; un onglet paramètres. Le tableau structuré rend la plage extensible, l’actualisation se fait en quelques clics, et j’ajoute des contrôles automatiques de total. Le tout documenté pour la passation.',
    oralLong:
      'Par définition, un fichier de reporting fiable est un fichier en couches : la donnée, la mise en forme, la restitution — séparées. L’objectif est triple : fiabilité, rapidité de production mensuelle, et passabilité à un collègue. Concrètement, quatre onglets : Données brutes — l’export ERP collé tel quel, jamais modifié à la main, c’est ma trace ; Base — les données converties en tableau structuré, avec des colonnes calculées comme le mois ou la famille, et des contrôles de cohérence ; Tableau de bord — un tableau croisé dynamique alimenté par la base, quelques SOMME.SI.ENS et RECHERCHEX sur références structurées, les graphiques et segments ; Paramètres — seuils et tables de correspondance. Par exemple, sur mon stage fictif, la production mensuelle tenait en quinze minutes : importer l’export dans l’onglet brut, actualiser le TCD, vérifier l’onglet de contrôles — total de la base égal total affiché, détection de doublons sur la clé pièce — puis diffuser. En conclusion, les trois règles qui tiennent le fichier debout : données et présentation jamais mélangées, plages structurées plutôt que figées pour absorber les nouveaux mois, contrôles automatiques intégrés — et un mode opératoire écrit, parce qu’un reporting qu’une seule personne sait produire est un risque pour l’entreprise.',
    followUp: 'Ton fichier met vingt minutes à recalculer chaque mois. Tu fais quoi pour l’accélérer ?',
    grading: [
      'Structure en couches : données brutes jamais retouchées / base / tableau de bord / paramètres.',
      'Tableau structuré cité pour l’extensibilité des plages (TCD et formules).',
      'Contrôles automatiques intégrés (totaux, doublons) et actualisation rapide.',
      'Documenté pour la passation — reproductibilité comme critère de qualité.',
    ],
  },
  {
    id: 'qt-114',
    job: 'controle-gestion',
    category: 'definitions',
    difficulty: 2,
    skill: 'Coûts complets vs coûts partiels',
    question: 'Coûts complets, coûts partiels, direct costing — c’est quoi la différence, et quand tu utilises l’un ou l’autre ?',
    expectedAnswer:
      'Coûts complets : toutes les charges sont imputées aux objets de coût — charges directes par affectation, charges indirectes via des centres d’analyse et des clés de répartition. Résultat : un coût de revient complet par produit, utile pour la politique de prix et l’analyse de rentabilité apparente des produits. Limite de fond : la répartition des charges communes comporte une part d’arbitraire — le coût complet est une convention, pas une vérité. Coûts partiels : on n’impute qu’une partie des charges — en direct costing, les seuls coûts variables : on obtient la marge sur coûts variables par produit, sa contribution à la couverture des charges fixes. Usages : décisions court terme — accepter ou non une commande additionnelle, arbitrer un mix, calculer le point mort — et pilotage de la performance commerciale. Règle d’emploi : coûts complets pour des questions de valorisation et de stratégie de prix (avec prudence), coûts partiels pour les décisions marginales de gestion. Dépendances à signaler : le choix dépend du système d’information — une petite structure avec peu d’indirects peut s’en tenir au direct costing simple ; une industrie multi-produits a besoin d’une imputation plus fine, au prix d’un coût administratif ; et pour la valorisation des stocks, c’est le référentiel comptable qui impose ses règles, pas la méthode de gestion choisie.',
    reasoning:
      'Le recruteur vérifie que le candidat connaît les deux familles de méthodes et surtout leurs finalités différentes : valorisation et stratégie de prix contre décision marginale et pilotage. Le piège du coût complet « vrai » doit être démonté — la répartition des charges indirects est un choix conventionnel. La mention des dépendances (taille, SI, référentiel comptable pour les stocks) signale le candidat qui a compris qu’une méthode est un choix de gestion contextualisé.',
    commonErrors: [
      'Présenter le coût complet comme la vérité : c’est une convention de répartition des charges communes.',
      'Utiliser le direct costing pour fixer un prix de vente durable en oubliant la couverture des charges fixes.',
      'Confondre coûts partiels et coûts directs — le direct costing raisonne en variables, pas en directs.',
      'Ignorer les dépendances : taille de l’entreprise, système d’information, règles comptables de valorisation des stocks.',
    ],
    oralShort:
      'Coûts complets : j’impute tout — directs par affectation, indirects par clés de répartition — pour un coût de revient, utile en stratégie de prix, mais avec une part d’arbitraire. Coûts partiels, type direct costing : je n’impute que les variables, j’obtiens des marges sur coûts variables, la contribution de chaque produit — idéal pour les décisions court terme et le point mort. Complet pour valoriser, partiel pour décider.',
    oralLong:
      'Par définition, deux familles de méthodes se partagent la comptabilité de gestion. Les coûts complets imputent toutes les charges aux objets de coût : les charges directes par affectation — la matière d’un produit —, les indirectes par centres d’analyse et clés de répartition — loyer, direction. L’objectif : obtenir un coût de revient complet, dont on se sert pour la politique de prix et l’analyse de rentabilité des produits — avec une lucidité : la répartition des charges communes est conventionnelle, deux clés différentes donnent deux coûts différents. Les coûts partiels, eux, n’imputent qu’une partie des charges : en direct costing, les seuls coûts variables ; chaque produit dégage une marge sur coûts variables, sa contribution à la couverture des charges fixes et au résultat. L’objectif : éclairer les décisions de gestion court terme — accepter une commande additionnelle qui couvre son coût variable fait progresser le résultat ; arbitrer un mix ; calculer un point mort. Par exemple, sur mon stage fictif, le direct costing montrait qu’un produit à marge complète négative avait une marge sur coûts variables positive : la décision d’arrêt devait donc être raisonnée sur les charges fixes évitables, pas sur le coût complet. En conclusion : complet pour valoriser et raisonner la stratégie — avec prudence sur l’arbitraire —, partiel pour décider vite — et le choix dépend de la taille de la structure, du système d’information disponible, et du référentiel comptable dès qu’il s’agit de valoriser des stocks.',
    followUp: 'Un produit est déficitaire en coûts complets mais dégage une marge sur coûts variables positive — tu l’arrêtes ou pas ?',
    grading: [
      'Deux familles clairement distinguées avec leur logique d’imputation.',
      'Finalités différentes citées : valorisation/prix contre décision marginale/pilotage.',
      'Arbitraire de la répartition des charges indirectes reconnu (coût complet = convention).',
      'Dépendances signalées : taille, système d’information, référentiel comptable (stocks).',
    ],
  },
  {
    id: 'qt-115',
    job: 'controle-gestion',
    category: 'excel',
    difficulty: 2,
    skill: 'Contrôles de cohérence du reporting',
    question: 'Avant d’envoyer ton reporting mensuel à la direction, quels contrôles de cohérence tu fais sur ton fichier ?',
    expectedAnswer:
      'Six contrôles systématiques. 1) Le contrôle de total : le total affiché dans le tableau de bord doit être égal au total de la base, vérifié par formule du type =SI(ABS(total_affiché − total_base) > 0,01; "ÉCART"; "OK"), avec une tolérance d’arrondi. 2) Le rapprochement comptable : le chiffre d’affaires du reporting doit coller à la balance comptable du mois — c’est le contrôle de référence, sinon le contrôleur de gestion contredit la comptabilité en réunion. 3) La complétude : nombre de lignes ou de documents cohérent avec l’attendu — =NB.SI.ENS(plage_mois; "2025-06") comparé au nombre attendu, détection de trous dans les numérotations de pièces. 4) Les doublons : =NB.SI(plage_clé; clé) supérieur à 1 sur la clé document. 5) Les cohérences internes : recalcul de l’écart (réalisé − budget), somme des entités égale au total national, taux de marge dans un couloir plausible. 6) La traçabilité : date et heure de l’extract, version du référentiel, source identifiée. Pratique : regrouper ces contrôles dans un onglet Contrôles avec des statuts OK/ÉCART en mise en forme conditionnelle, à vérifier avant chaque diffusion — un contrôle qui n’est pas regardé avant l’envoi ne sert à rien.',
    reasoning:
      'Vérifie la culture du contrôle du contrôleur de gestion. Le rapprochement avec la comptabilité est le contrôle discriminant : un reporting non rapproché de la balance est un reporting contestable. Les contrôles par formule (SI + ABS + tolérance), la détection de doublons par NB.SI et la traçabilité de l’extract sont les attendus techniques. Le piège de réponse : « je relis le fichier » — à cinquante mille lignes, la relecture visuelle ne détecte rien.',
    commonErrors: [
      'Relire visuellement sans formule de contrôle : sur des volumes de milliers de lignes, l’œil ne détecte ni doublon ni ligne manquante.',
      'Oublier le rapprochement avec la comptabilité — le reporting contredit la balance en réunion et la crédibilité en prend un coup.',
      'Comparer des totaux sans tolérance d’arrondi : un écart de quelques centièmes déclenche une fausse alerte permanente.',
      'Ne pas tracer la date et la version de l’extract : on compare des périmètres différents sans le savoir.',
    ],
    oralShort:
      'Six contrôles systématiques : total affiché égal total de la base par formule avec tolérance d’arrondi ; rapprochement du chiffre d’affaires avec la balance comptable — le contrôle qui décide de ma crédibilité ; complétude des lignes et des pièces ; doublons sur la clé par NB.SI ; cohérences internes — somme des entités, recalcul des écarts ; et traçabilité de l’extract. Le tout dans un onglet contrôles, vérifié avant chaque envoi.',
    oralLong:
      'Par définition, la cohérence d’un reporting se prouve par des contrôles automatisés, pas par une relecture. L’objectif est qu’aucune incohérence ne parte en réunion de direction. Concrètement, six contrôles : le contrôle de total — formule du type =SI(ABS(total_affiché − total_base) > 0,01; "ÉCART"; "OK"), le seuil d’un centime tolérant les arrondis ; le rapprochement comptable — mon chiffre d’affaires reporting doit être celui de la balance, sinon je contredis la comptabilité devant la direction et je perds ma crédibilité de contrôleur ; la complétude — nombre de lignes par mois par NB.SI.ENS comparé à l’attendu, trous dans les numérotations de pièces ; les doublons — NB.SI sur la clé document, un doublon de pièce gonfle le reporting ; les cohérences internes — la somme des entités redonne le national, l’écart recalculé réalisé moins budget est identique à l’affiché, le taux de marge reste dans un couloir plausible ; et la traçabilité — date de l’extract, version du référentiel. Par exemple, sur mon stage fictif, l’onglet Contrôles affichait huit statuts : le jour où le rapprochement est passé en rouge, j’ai trouvé un double comptage d’un règlement de fin de mois — diffusé tel quel, il aurait déformé la trésorerie présentée. En conclusion : des contrôles en formules, groupés dans un onglet dédié, matérialisés en OK/ÉCART, et regardés avant chaque diffusion — parce qu’un contrôle qu’on ne regarde pas avant d’envoyer, c’est comme s’il n’existait pas.',
    followUp: 'Ton contrôle de rapprochement est rouge mais la direction attend le reporting dans une heure. Tu fais quoi ?',
    grading: [
      'Contrôles par formule et non par relecture visuelle (SI + ABS + tolérance d’arrondi).',
      'Rapprochement avec la comptabilité identifié comme contrôle de référence.',
      'Détection de doublons et complétude (NB.SI / NB.SI.ENS) citée.',
      'Traçabilité de l’extract et discipline « vérifier avant chaque diffusion » présentes.',
    ],
  },
  {
    id: 'qt-116',
    job: 'controle-gestion',
    category: 'cas-pratiques',
    difficulty: 4,
    skill: 'Communication de résultats décevants',
    question: 'Ton mois est mauvais : résultat en baisse de 15 % par rapport au budget, et la direction est inquiète. Comment tu présentes ça au comité — sans enjoliver, sans dramatiser ?',
    expectedAnswer:
      'Ma structure de présentation : 1) annoncer le fait dès la première minute — résultat à −15 % du budget, montant absolu, sans le noyer dans des slides de contexte : une mauvaise nouvelle tardive est plus grave que la nouvelle elle-même ; 2) décomposer l’écart en causes chiffrées et hiérarchisées (volume, prix, coûts) : le comité doit voir ce qui pèse ; 3) qualifier la nature — exceptionnel ou récurrent : un événement unique identifié ne se reproduit pas, une tendance appelle une action structurelle ; 4) proposer des scénarios d’action avec leur impact chiffré — plan correctif, re-prévision de l’année — et leurs hypothèses ; 5) assumer les incertitudes : je dis ce que je sais, ce que je ne sais pas, quand j’aurai la réponse. Règles de posture : langage factuel, pas de langue de bois ; pas d’enjolivement par réserve de charges ou lissage — c’est de la manipulation de présentation, à proscrire absolument ; pas de dramatisation non plus : mon rôle est d’éclairer la décision, la décision appartient à la direction. Le fond : le contrôleur qui annonce tôt, explique chiffres à l’appui et propose des scénarios est écouté ; celui qui enrobe est démasqué au deuxième mois.',
    reasoning:
      'Évalue la maturité professionnelle du candidat au-delà de la technique : courage factuel, structuration du message, frontière nette avec les manipulations de présentation (réserves, lissage). Le recruteur guette la tentation d’enrobage ou la réponse « c’est la faute du budget mal construit ». Les attendus : annonce directe, décomposition chiffrée, distinction exceptionnel/récurrent, scénarios d’action, et la bonne limite de rôle — le contrôleur éclaire, la direction décide.',
    commonErrors: [
      'Lisser le résultat par des réserves de charges ou un étalement opportuniste : c’est de l’enjolivement comptable, disqualifiant.',
      'Noyer la mauvaise nouvelle dans le détail en espérant qu’elle passe inaperçue : elle ressort toujours, et la confiance en prend un coup.',
      'Annoncer sans décomposition ni causes : le comité ne peut rien décider sur un constat brut.',
      'Dramatiser sans proposer d’actions : le contrôleur devient porteur d’inquiétude, pas de solution.',
    ],
    oralShort:
      'J’annonce le fait en ouverture : résultat à moins 15 % du budget, montant en euros. Puis je décompose l’écart en causes chiffrées et hiérarchisées, je distingue l’exceptionnel du récurrent, et je propose des scénarios d’action chiffrés avec leurs hypothèses. Factuel, sans enjoliver — pas de réserve de charges — et sans dramatiser : j’éclaire, la direction décide.',
    oralLong:
      'Par définition, communiquer un résultat décevant, c’est délivrer une information qui va provoquer une décision — donc elle doit être claire, prouvée et actionnable. L’objectif est que le comité comprenne l’ampleur, les causes et les marges de manœuvre en moins de dix minutes. Concrètement, cinq étapes : annoncer le fait immédiatement — résultat à −15 % du budget, soit le montant en euros, sans slides de mise en contexte ; décomposer l’écart en causes chiffrées hiérarchisées — volume, prix, coûts — pour que chacun voie ce qu’il pilote ; qualifier la nature de chaque cause : exceptionnelle — un sinistre, un litige — ou récurrente — une dérive structurelle de coût — parce que l’action n’est pas la même ; proposer des scénarios chiffrés — plan correctif, re-prévision de l’année — avec leurs hypothèses et leur délai ; enfin assumer les incertitudes : ce que je sais, ce que je ne sais pas encore, quand je répondrai. Par exemple, sur mon stage fictif, un mois à −14 % s’est présenté : décomposition en trois lignes, un point exceptionnel sur quatre causes, un plan commercial sur le volume, et une re-prévision d’année chiffrée — la réunion a duré vingt minutes et s’est conclue sur des actions datées. En conclusion : annoncer tôt, expliquer chiffres à l’appui, distinguer exceptionnel et récurrent, proposer — et refuser absolument l’enjolivement par réserves ou lissage : une mauvaise nouvelle bien présentée se gère, une mauvaise nouvelle enrobée se paie deux fois.',
    followUp: 'Le DAF te demande discrètement de « garder une réserve de charges de côté » pour adoucir le trimestre. Tu lui réponds quoi ?',
    grading: [
      'Annonce directe du constat dès l’ouverture, sans noyage.',
      'Décomposition chiffrée et hiérarchisée des causes (exceptionnel vs récurrent).',
      'Scénarios d’action chiffrés et hypothèses proposés au comité.',
      'Refus explicite de l’enjolivement (réserves, lissage) et posture : éclairer, pas décider.',
    ],
  },
  {
    id: 'qt-117',
    job: 'controle-gestion',
    category: 'cas-pratiques',
    difficulty: 4,
    skill: 'Prévision à M7 (forecast)',
    question: 'On est fin juillet, ton N+1 te demande un forecast du résultat annuel pour lundi. Comment tu t’y prends ?',
    expectedAnswer:
      'Démarche en six étapes : 1) cadrer — résultat annuel full year : réalisé janvier-juillet plus prévision août-décembre ; 2) construire le haut : ventes des cinq derniers mois sur hypothèses explicites — rythme constaté à M7 corrigé de la saisonnalité N-1, carnet de commandes ferme, actions commerciales annoncées ; jamais d’extrapolation linéaire du réalisé, elle ignore la saison ; 3) construire les charges : variables recalculées au volume prévu avec le coût unitaire constaté — pas budgété —, fixes sur le budget corrigé des décisions connues (départs, recrutements proratisés) ; 4) traiter séparément les événements identifiés — un litige ou un sinistre se place à son mois, on ne le lisse pas ; 5) boucler et croiser par deux chemins : reconstitution mois par mois d’une part, vérification par le haut d’autre part — reste à faire = budget annuel − réalisé, taux de réalisation nécessaire sur les cinq mois : si les deux chemins divergent, une hypothèse est fausse ; 6) documenter et livrer : hypothèses datées et sourcées, chiffre central avec fourchette ou sensibilité (haut/bas), et écart prévisible au budget. Points de vigilance : une entreprise jeune n’a pas de saisonnalité fiable — je l’affiche comme incertitude ; et je distingue le forecast (hypothèses à date) du budget révisé (re-négociation formelle).',
    reasoning:
      'Cas pratique qui teste l’organisation d’un travail de prévision sous contrainte de temps. Les différenciateurs : le refus de l’extrapolation linéaire (saisonnalité), le traitement séparé des événements uniques, le croisement par deux méthodes (bottom-up et top-down), la documentation des hypothèses et la livraison avec sensibilité. Le candidat qui livre un chiffre unique sans hypothèses ni fourchette ne comprend pas ce qu’est une prévision : une estimation conditionnelle.',
    commonErrors: [
      'Extrapoler linéairement le réalisé à M7 : la saisonnalité est ignorée et le forecast est faux dès qu’elle existe.',
      'Lisser un événement exceptionnel sur les mois restants au lieu de le placer à sa date : l’année est déformée.',
      'Livrer un chiffre unique sans hypothèses, sans fourchette ni sensibilité : personne ne peut juger le degré d’incertitude.',
      'Ne pas faire boucler le forecast : réalisé + prévision incohérent avec les agrégats annuels déjà communiqués.',
    ],
    oralShort:
      'Je cadre : full year égale réalisé à M7 plus prévision d’août à décembre. Les ventes : rythme constaté corrigé de la saisonnalité N-1, carnet de commandes, actions annoncées. Les charges : variables au volume prévu au coût unitaire constaté, fixes corrigées des décisions connues. Les événements uniques à leur date, pas lissés. Je boucle par deux chemins — mois par mois et par le haut — et je livre un chiffre central avec hypothèses datées et sensibilité.',
    oralLong:
      'Par définition, un forecast à M7 est une estimation conditionnelle du résultat annuel : réalisé janvier-juillet, prévision août-décembre, hypothèses explicites. L’objectif est de donner à la direction une trajectoire probable et les leviers pour la corriger avant la clôture. Concrètement, six étapes : cadrer le livrable — full year ; construire le haut de compte — ventes sur le rythme constaté corrigé de la saisonnalité N-1, enrichi du carnet de commandes et des actions commerciales annoncées, mois par mois, jamais par extrapolation linéaire ; construire les charges — variables au volume prévu avec le coût unitaire constaté, fixes sur budget corrigé des décisions connues ; isoler les événements identifiés — un litige ou un sinistre se place à son mois, pas de lissage ; boucler et croiser — reconstitution mois par mois d’une part, contrôle par le haut d’autre part : le reste à faire doit correspondre au budget annuel moins le réalisé, sinon une hypothèse est fausse ; documenter et livrer — hypothèses datées et sourcées, chiffre central, sensibilité haute et basse, écart prévisible au budget. Par exemple, sur mon stage fictif, le forecast de juillet révélait une année à 92 % du budget : le croisement des deux chemins m’a fait détecter une hypothèse de saisonnalité mal reprise de N-1, corrigée avant la remise. En conclusion, un forecast sérieux n’est pas un chiffre, c’est un chiffre avec ses hypothèses, son incertitude et sa trajectoire — et la distinction forecast/budget révisé reste essentielle : je prédis, je ne re-négocie pas.',
    followUp: 'Ton forecast est prêt dimanche soir quand le directeur commercial t’annonce la perte d’un gros client — tu refais quoi, et pas quoi ?',
    grading: [
      'Refus de l’extrapolation linéaire et prise en compte explicite de la saisonnalité.',
      'Traitement séparé des événements exceptionnels (datés, non lissés).',
      'Bouclage croisé par deux chemins (mois par mois / par le haut) mentionné.',
      'Livrable documenté : hypothèses datées, sensibilité, distinction forecast vs budget révisé.',
    ],
  },
  {
    id: 'qt-118',
    job: 'controle-gestion',
    category: 'justification',
    difficulty: 3,
    skill: 'Seuil d’alerte des écarts',
    question: 'Dans ton reporting mensuel, à partir de quel montant ou quel pourcentage tu juges qu’un écart mérite d’être commenté ?',
    expectedAnswer:
      'Il n’y a pas de règle universelle — c’est un choix de gestion à assumer, dépendant de trois paramètres : la taille de l’entreprise (un écart de 10 000 € est négligeable pour un groupe, critique pour une TPE), le poids du poste (5 % sur une ligne de charges marginales pèse moins que 2 % sur le résultat), et la marge de la structure (en très faible marge, un petit écart de chiffre d’affaires détruit le résultat). Repères de méthode usuelle — à présenter comme des pratiques, pas des normes : combinaison d’un seuil en pourcentage du budget de la ligne (souvent 5 à 10 %) et d’un montant plancher absolu, en retenant l’écart si l’un des deux est dépassé ; ou seuil exprimé en contribution au résultat (tout écart qui décale le résultat de plus de x % est commenté). Exigences de fond : le seuil doit être documenté, cohérent dans le temps et entre entités — changer de seuil chaque mois détruit la comparabilité ; et la marge de manœuvre existe : même sous seuil, un écart répété trois mois dans le même sens mérite commentaire, parce qu’il signale une tendance. Enfin la règle appartient à l’entreprise : beaucoup formalisent une materialité de gestion interne — c’est une bonne pratique, pas une obligation.',
    reasoning:
      'Question de jugement : le recruteur veut distinguer le candidat qui applique un pourcentage magique de celui qui raisonne en materialité relative. Les attendus : pas de règle universelle, dépendances taille/poste/marge, combinaison % et montant, stabilité et documentation du seuil, et l’exception intelligente — l’écart répété sous le seuil qui signale une tendance. Un candidat venant d’un cursus audit peut clarifier que ce seuil de gestion est un choix interne, distinct du seuil de signification d’audit.',
    commonErrors: [
      'Énoncer un pourcentage unique (5 % ou 10 %) comme règle universelle, sans montant ni contexte.',
      'Oublier la dépendance à la taille de l’entreprise et à la marge : les mêmes chiffres n’ont pas le même poids partout.',
      'Changer de seuil de mois en mois : la comparabilité des reportings est détruite.',
      'Ignorer les écarts répétés sous le seuil : trois mois dans le même sens, c’est une tendance, pas du bruit.',
    ],
    oralShort:
      'Pas de règle universelle : c’est un choix de gestion dépendant de la taille de l’entreprise, du poids du poste et de la marge. En pratique, je combine un seuil en pourcentage du budget de la ligne — 5 à 10 % en repère — et un montant plancher : l’écart est commenté si l’un des deux saute. Le seuil est documenté et stable, et un écart répété trois fois passe en commentaire même sous le seuil.',
    oralLong:
      'Par définition, le seuil d’alerte d’un écart est une materialité de gestion : le niveau à partir duquel un écart mérite commentaire et action. L’objectif est d’éviter deux excès symétriques : tout commenter — le reporting devient illisible — et ne rien commenter — les dérives s’installent. Concrètement, je raisonne en trois paramètres : la taille de l’entreprise, parce qu’un écart de 10 000 € change la trajectoire d’une TPE et disparaît dans l’arrondi d’un groupe ; le poids du poste, parce que 5 % sur une ligne accessoire pèse moins que 2 % sur le résultat ; et la marge, parce qu’en structure à très faible marge, un petit écart de chiffre d’affaires détruit le résultat. Ma méthode usuelle, à présenter comme une pratique et non une norme : combiner un seuil en pourcentage du budget de la ligne — 5 à 10 % en repère — et un montant plancher absolu, en retenant l’écart dès que l’un des deux est franchi ; ou raisonner en contribution au résultat. J’y ajoute deux disciplines : le seuil est documenté et stable dans le temps et entre entités, sinon la comparabilité disparaît ; et l’exception intelligente — un écart sous le seuil mais répété trois mois dans le même sens est commenté, parce que la tendance compte plus que le niveau. Par exemple, sur mon stage fictif, une ligne d’approvisionnement oscillait sous le seuil chaque mois, toujours dans le même sens : au cumul annuel, l’écart devenait le troisième facteur de dérive du résultat — signalé dès le quatrième mois. En conclusion : un seuil combiné pourcentage et montant, adapté à la taille et à la marge, documenté et stable, avec la répétition comme critère d’exception — c’est un choix de gestion assumé, pas une norme gravée.',
    followUp: 'Ton seuil est fixé à 5 % mais la direction te reproche de ne pas avoir alerté sur un écart de 3 % sur la masse salariale. Tu réponds quoi ?',
    grading: [
      'Absence de règle universelle affirmée : choix de gestion dépendant du contexte.',
      'Dépendances citées : taille de l’entreprise, poids du poste, marge.',
      'Méthode combinée pourcentage + montant (ou contribution au résultat) proposée comme pratique.',
      'Discipline de fond : seuil documenté, stable, et traitement des écarts répétés.',
    ],
  },
  {
    id: 'qt-119',
    job: 'comptabilite',
    category: 'excel',
    difficulty: 1,
    skill: 'RECHERCHEV : syntaxe et limites',
    question: 'RECHERCHEV — tu me donnes la syntaxe exacte, arguments dans l’ordre, et ses limites ?',
    expectedAnswer:
      'Syntaxe : =RECHERCHEV(valeur_cherchée; table_matrice; no_index_col; [valeur_logique]). Arguments dans l’ordre : 1) la valeur cherchée — par exemple un numéro de compte ; 2) la table_matrice — la plage dans laquelle on cherche, la valeur cherchée devant impérativement se trouver dans la première colonne de cette table ; 3) le no_index_col — le numéro de la colonne qui contient le résultat, compté depuis la première colonne de la table, pas de la feuille ; 4) l’argument facultatif valeur_logique : FAUX (ou 0) pour une correspondance exacte, VRAI (ou 1) pour une correspondance approchée — et attention, si on l’omet, c’est VRAI qui s’applique par défaut. Limites : la recherche ne se fait que vers la droite — impossible de renvoyer une colonne située à gauche de la colonne de recherche ; le no_index_col est figé en dur — l’insertion d’une colonne dans la table décale le résultat sans déclencher d’erreur visible ; une valeur absente renvoie #N/A sans message personnalisé ; et le défaut approché est le piège le plus grave : une recherche approchée sur une table non triée renvoie des résultats faux silencieux. C’est pour ces raisons que RECHERCHEX ou la combinaison INDEX+EQUIV sont préférées quand elles sont disponibles.',
    reasoning:
      'Question d’entrée de jeu sur l’outil le plus utilisé en finance Excel. Le recruteur attend l’ordre exact des arguments — y compris le détail que la table commence à la colonne de recherche — et surtout la connaissance du piège du quatrième argument omis (approché par défaut). Les limites structurelles (recherche à droite, index figé, #N/A brut) préparent la transition vers RECHERCHEX et INDEX+EQUIV.',
    commonErrors: [
      'Omettre le quatrième argument : la correspondance approchée s’applique par défaut et renvoie des résultats faux sans erreur visible.',
      'Compter le no_index_col depuis la colonne A de la feuille au lieu de la première colonne de la table.',
      'Tenter une recherche vers la gauche — impossible avec RECHERCHEV.',
      'Oublier de figer la table avec des $ : à la recopie, la plage se décale et les résultats deviennent faux.',
    ],
    oralShort:
      '=RECHERCHEV(valeur_cherchée ; table_matrice ; no_index_col ; valeur_logique). La valeur cherchée doit être dans la première colonne de la table ; le numéro de colonne se compte depuis la table ; et le dernier argument, FAUX pour l’exact — omis, c’est l’approché par défaut, le piège classique. Limites : recherche à droite seulement, index figé, et #N/A si absent.',
    oralLong:
      'Par définition, RECHERCHEV recherche une valeur dans la première colonne d’une table et renvoie la valeur située sur la même ligne, dans la colonne qu’on désigne. L’objectif : enrichir une liste — par exemple récupérer le libellé d’un compte à partir de son numéro. Concrètement, la syntaxe s’écrit =RECHERCHEV(valeur_cherchée; table_matrice; no_index_col; [valeur_logique]) : la valeur cherchée ; la table, dont la première colonne doit contenir cette valeur ; le numéro de la colonne de résultat compté depuis la première colonne de la table — pas depuis la colonne A de la feuille ; et l’argument logique, FAUX pour une correspondance exacte, VRAI pour approchée — avec le piège : omis, c’est VRAI par défaut, donc une recherche approchée qui renvoie des résultats faux silencieux si la table n’est pas triée. Par exemple, =RECHERCHEV(A2; $G$2:$H$500; 2; FAUX) va chercher le compte en A2 dans la colonne G et renvoyer le libellé de la colonne H, table figée pour la recopie. Les limites : la recherche ne va que vers la droite — impossible de renvoyer ce qui est à gauche de la clé ; le numéro de colonne en dur casse si on insère une colonne ; et l’absence renvoie un #N/A brut. En conclusion : je l’utilise en correspondance exacte, table figée, et dès que je peux, je préfère RECHERCHEX — ou INDEX+EQUIV sur les anciennes versions — qui corrigent ces limites.',
    followUp: 'Ta RECHERCHEV renvoie #N/A alors que tu es sûr que la valeur existe — tu cherches quoi comme causes ?',
    grading: [
      'Syntaxe exacte avec les quatre arguments dans l’ordre.',
      'Comportement du 4e argument expliqué (FAUX exact / VRAI approché / omis = approché).',
      'Au moins trois limites citées : recherche à droite, index en dur, #N/A.',
      'Transition vers RECHERCHEX / INDEX+EQUIV mentionnée.',
    ],
  },
  {
    id: 'qt-120',
    job: 'comptabilite',
    category: 'excel',
    difficulty: 3,
    skill: 'RECHERCHEX vs RECHERCHEV',
    question: 'RECHERCHEX — tu me donnes la syntaxe et les arguments, et concrètement ce qu’elle apporte de plus que RECHERCHEV ?',
    expectedAnswer:
      'Syntaxe : =RECHERCHEX(valeur_cherchée; tableau_recherche; tableau_renvoyé; [si_non_trouvé]; [mode_correspondance]; [mode_recherche]). Les trois premiers arguments sont obligatoires : la valeur cherchée ; le tableau_recherche — la plage, en ligne ou en colonne, où l’on cherche ; le tableau_renvoyé — la plage de même dimension d’où provient le résultat. Les trois suivants sont facultatifs : si_non_trouvé — texte ou valeur renvoyé à la place de #N/A ; mode_correspondance — 0 exacte, qui est le comportement par défaut, -1 exacte ou élément suivant, 1 exacte ou élément précédent, 2 avec caractères génériques ; mode_recherche — 1 du premier au dernier (défaut), -1 du dernier au premier, donc dernière occurrence, 2 et -2 en recherche binaire sur données triées. Apports face à RECHERCHEV : la recherche à gauche devient possible — les deux plages sont citées, plus besoin que la clé soit en première colonne ; plus de numéro de colonne en dur — l’insertion d’une colonne ne casse plus la formule ; si_non_trouvé intègre la gestion des absents, qui exigeait SIERREUR avant ; la correspondance exacte est le défaut — l’inverse de RECHERCHEV ; et le mode -1 permet de récupérer la dernière occurrence, très utile en comptabilité (dernier solde, dernier prix). Dépendance majeure : RECHERCHEX n’existe que sur Excel 365 et 2021 — sur 2016 et antérieur, l’alternative est INDEX+EQUIV, pas RECHERCHEV.',
    reasoning:
      'Vérifie la connaissance précise de la fonction moderne : arguments dans l’ordre, comportement par défaut inversé par rapport à RECHERCHEV (exacte par défaut), gestion intégrée des non-trouvés. Le discriminant de maturité est la dépendance de version : le candidat qui ne signale pas que RECHERCHEX est réservé à 365/2021 et ne propose pas INDEX+EQUIV pour les anciens postes n’a pas travaillé en environnement hétérogène.',
    commonErrors: [
      'Inverser tableau_recherche et tableau_renvoyé dans l’ordre des arguments.',
      'Ignorer la dépendance de version : RECHERCHEX est indisponible avant Excel 365/2021 — sur 2016, c’est INDEX+EQUIV.',
      'Croire que RECHERCHEX cherche en approché par défaut : c’est l’exacte, l’inverse de RECHERCHEV.',
      'Passer un tableau_renvoyé de dimension différente du tableau_recherche : erreur de valeur.',
    ],
    oralShort:
      '=RECHERCHEX(valeur_cherchée ; tableau_recherche ; tableau_renvoyé ; si_non_trouvé ; mode_correspondance ; mode_recherche). Trois arguments obligatoires, le reste optionnel. Apports : recherche à gauche, plus de numéro de colonne en dur, valeur par défaut si non trouvé, exact par défaut, et dernière occurrence possible. Mais uniquement sur 365 et 2021 — avant, INDEX+EQUIV.',
    oralLong:
      'Par définition, RECHERCHEX est la fonction de recherche moderne d’Excel : elle cherche une valeur dans une plage et renvoie la valeur correspondante d’une autre plage. L’objectif : remplacer RECHERCHEV en supprimant ses défauts structurels. Concrètement, la syntaxe : =RECHERCHEX(valeur_cherchée; tableau_recherche; tableau_renvoyé; [si_non_trouvé]; [mode_correspondance]; [mode_recherche]) — la valeur cherchée ; la plage où chercher, une ligne ou une colonne ; la plage à renvoyer, de même dimension ; puis en optionnel : le texte si non trouvé, qui remplace le #N/A ; le mode de correspondance — 0 exacte, et c’est le défaut, -1 exacte ou élément suivant, 1 exacte ou élément précédent, 2 avec caractères génériques ; et le mode de recherche — 1 du premier au dernier par défaut, -1 du dernier au premier, qui donne la dernière occurrence. Par exemple, en comptabilité, =RECHERCHEX(F2; Comptes[Numéro]; Comptes[Libellé]; "Compte inconnu") enrichit ma liste d’écritures avec le libellé et marque les comptes absents, sans SIERREUR. Les apports face à RECHERCHEV : recherche à gauche possible, plus de numéro de colonne qui casse à l’insertion, gestion intégrée des absents, exact par défaut — l’inverse de RECHERCHEV — et la dernière occurrence en mode -1. En conclusion, je bascule systématiquement sur RECHERCHEX quand la version le permet, avec une réserve à toujours signaler : elle n’existe que sur 365 et 2021 ; sur un poste en 2016, l’alternative reste INDEX+EQUIV — je ne retombe pas sur RECHERCHEV.',
    followUp: 'Ton fichier RECHERCHEX doit partir à un client équipé d’Excel 2016 — que fais-tu avant l’envoi ?',
    grading: [
      'Syntaxe exacte : six arguments dans l’ordre, trois obligatoires.',
      'Comportements cités : exacte par défaut, si_non_trouvé, mode -1 dernière occurrence.',
      'Apports vs RECHERCHEV explicités (gauche, index, absents, défaut inversé).',
      'Dépendance de version signalée avec l’alternative INDEX+EQUIV.',
    ],
  },
  {
    id: 'qt-121',
    job: 'controle-gestion',
    category: 'calculs',
    difficulty: 5,
    skill: 'Décomposition d’un écart : volume, prix, mix',
    question: 'Dernier niveau en analyse d’écarts, en multi-produits. Produit A : budget 4 000 unités à 50 €, réalisé 4 500 unités à 52 €. Produit B : budget 6 000 unités à 30 €, réalisé 6 500 unités à 28 €. Tu me décomposes l’écart de chiffre d’affaires en volume, prix et mix ?',
    expectedAnswer:
      'Chiffre d’affaires budgété = 4 000 × 50 + 6 000 × 30 = 200 000 + 180 000 = 380 000 €. Réalisé = 4 500 × 52 + 6 500 × 28 = 234 000 + 182 000 = 416 000 €. Écart total = +36 000 €, favorable. Décomposition en trois natures : 1) écart sur volume = (11 000 − 10 000) × prix moyen budgété (380 000 / 10 000 = 38 €) = +38 000 €, favorable ; 2) écart sur prix, produit par produit au volume réalisé : A : 4 500 × (52 − 50) = +9 000 €, B : 6 500 × (28 − 30) = −13 000 €, soit −4 000 € défavorable au total — B a cassé ses prix ; 3) écart sur mix = chiffre d’affaires réel valorisé aux prix budgétés (4 500 × 50 + 6 500 × 30 = 420 000 €) − volume réel × prix moyen budgété (11 000 × 38 = 418 000 €) = +2 000 €, favorable : le panier réel contient proportionnellement plus de A, le produit au prix élevé. Bouclage : +38 000 − 4 000 + 2 000 = +36 000 €. Lecture : le volume et le mix portent la performance, mais le prix est défavorable — il faut interroger le commercial sur les remises accordées sur B. Précision de convention : la décomposition dépend de l’ordre d’imputation retenu (volume au prix moyen budgété, prix au volume réalisé) ; l’essentiel est de garder une convention homogène et de vérifier que la somme boucle sur l’écart total.',
    reasoning:
      'Niveau avancé : le mix n’existe qu’en multi-produits et sa formule — chiffre d’affaires réel à prix budgétés moins volume réel au prix moyen budgété — est la moins intuitive. Le recruteur vérifie la cohérence des conventions d’imputation et le bouclage final. Le signe de l’écart de prix, mélange de deux produits (A favorable, B défavorable), et la lecture du mix — déformation du panier vers le produit cher — séparent les candidats qui récitent de ceux qui maîtrisent. La conclusion opérationnelle (remises sur B à interroger) finalise la réponse.',
    commonErrors: [
      'Calculer un écart de mix sans repasser par le prix moyen budgété : le mix mesure la composition du panier, pas une simple variation de chiffre d’affaires.',
      'Calculer l’écart de prix au volume budgété alors que l’écart de volume est déjà valorisé au prix moyen budgété : les conventions mélangées empêchent le bouclage.',
      'Oublier la vérification finale : +38 000 − 4 000 + 2 000 doit redonner exactement +36 000 €.',
      'Présenter l’écart total favorable sans signaler que le prix est défavorable : la lecture par nature est toute l’information.',
    ],
    oralShort:
      'Chiffre d’affaires : 380 000 au budget, 416 000 au réel, plus 36 000 favorable. Décomposition : volume, plus 38 000 — mille unités de plus au prix moyen budgété de 38 euros ; prix, moins 4 000 — A a monté ses prix, B les a cassés ; mix, plus 2 000 — le panier s’est déplacé vers le produit cher. Contrôle : 38 000 moins 4 000 plus 2 000, on retombe sur 36 000.',
    oralLong:
      'Par définition, l’analyse par nature décompose un écart global en trois effets : le volume vendu, le prix pratiqué et le mix — la composition du panier. L’objectif est d’attribuer l’écart à des leviers distincts pour savoir qui agit sur quoi. Concrètement : chiffre d’affaires budgété = 4 000 × 50 + 6 000 × 30 = 380 000 € ; réalisé = 4 500 × 52 + 6 500 × 28 = 416 000 € ; écart total +36 000 € favorable. Puis trois sous-écarts : l’écart sur volume — la différence de volume total, 1 000 unités, valorisée au prix moyen budgété de 380 000 / 10 000 = 38 €, soit +38 000 € ; l’écart sur prix, calculé produit par produit au volume réel — A : 4 500 × (52 − 50) = +9 000 €, B : 6 500 × (28 − 30) = −13 000 €, total −4 000 € défavorable ; l’écart sur mix — le chiffre d’affaires réel valorisé aux prix budgétés, 4 500 × 50 + 6 500 × 30 = 420 000 €, comparé au volume réel valorisé au prix moyen budgété, 11 000 × 38 = 418 000 €, soit +2 000 € : le panier réel contient plus de A, le produit au prix élevé. Et je boucle : +38 000 − 4 000 + 2 000 = +36 000 €. Par exemple, mon commentaire en comité : « le chiffre d’affaires dépasse le budget de 36 000 €, porté par le volume et un mix enrichi en A ; mais le prix est défavorable de 4 000 — B concède des remises, je propose un point avec le commercial sur la politique tarifaire de B ». En conclusion, la décomposition volume / prix / mix n’a de valeur que si les conventions d’imputation sont homogènes et si la somme boucle — et c’est la lecture par nature qui déclenche l’action, pas l’écart global.',
    followUp: 'Le mix te semble favorable, mais on te dit que A est vendu à perte au-delà d’un certain volume. Ça change quoi dans ta lecture ?',
    grading: [
      'Écart total juste : +36 000 € (416 000 − 380 000), qualifié favorable.',
      'Écarts de volume (+38 000 €) et de prix (−4 000 €, détail A/B) justes.',
      'Écart de mix calculé correctement (+2 000 €) via le prix moyen budgété.',
      'Bouclage vérifié et lecture par nature (remises sur B, mix enrichi en A).',
    ],
  },
  {
    id: 'qt-122',
    job: 'controle-gestion',
    category: 'procedures',
    difficulty: 2,
    skill: 'Cycle mensuel de suivi budgétaire',
    question: 'Décris-moi un mois type de contrôleur de gestion : de la collecte des données à la réunion de gestion, ton suivi budgétaire mensuel se déroule comment ?',
    expectedAnswer:
      'Un rythme en quatre temps, calé sur un calendrier J+x connu de tous. 1) La collecte et la fiabilisation (J+1 à J+3 environ) : extraction de l’ERP et des sources opérationnelles, contrôles de complétude, rapprochement avec la comptabilité — sans ce rapprochement, le mois n’est pas discutable. 2) La construction (J+4 à J+6) : actualisation de la base de reporting, calcul des écarts réalisé − budget par ligne et par responsable de centre, production du tableau de bord et des analyses demandées — marge, trésorerie, points de vigilance identifiés le mois précédent. 3) Le dialogue (J+7 à J+9) : entretiens avec les responsables de centres sur leurs écarts significatifs avant toute restitution collective — on ne découvre pas un écart en réunion ; collecte des explications et des actions, vérification de la cohérence des explications avec les données. 4) La restitution et la décision (J+10 à J+12) : comité mensuel ou CODIR, présentation par exception, validation des actions correctives, mise à jour du suivi d’actions et de la prévision d’année. Puis l’inter-mois : préparation du budget ou des forecast, améliorations des outils, sujets ad hoc. Points de vigilance : le calendrier dépend de la vitesse de clôture comptable — le contrôleur ne peut pas rendre un mois avant que la comptabilité n’ait clôturé ; et la valeur du cycle tient à la constance — même calendrier, même maquette, pour que les écarts se lisent en tendance.',
    reasoning:
      'Vérifie la vision process du candidat : le suivi budgétaire n’est pas un fichier mais un cycle avec des acteurs et un calendrier. Les discriminants : le rapprochement préalable avec la comptabilité, le dialogue individuel avant la réunion collective — on ne découvre pas un écart en comité —, et la conscience que le calendrier du contrôleur dépend de la clôture comptable. Le candidat qui décrit un travail solitaire de production de tableaux n’a pas compris la dimension de dialogue de gestion.',
    commonErrors: [
      'Décrire un travail purement productif (extraire, mettre en forme, envoyer) sans phase de dialogue avec les responsables de centres.',
      'Rendre le reporting sans rapprochement préalable avec la comptabilité : les chiffres sont contestables en réunion.',
      'Ignorer la dépendance au calendrier de clôture comptable : le J+x du contrôleur suit celui de la comptabilité.',
      'Changer de maquette ou de calendrier chaque mois : la lecture en tendance devient impossible.',
    ],
    oralShort:
      'Un mois en quatre temps, sur un calendrier J+x connu de tous. Collecte et fiabilisation : extraction, contrôles, rapprochement avec la comptabilité — sans ça, rien n’est discutable. Construction : base actualisée, écarts par ligne et par responsable, tableau de bord. Dialogue : entretiens avec les responsables avant la réunion — on ne découvre pas un écart en comité. Restitution : comité mensuel par exception, actions validées, prévision mise à jour.',
    oralLong:
      'Par définition, le suivi budgétaire mensuel est un cycle répété : collecter, fiabiliser, analyser, dialoguer, décider. L’objectif est que chaque responsable et la direction disposent, à date fixe, d’un mois fermé, fiable et commenté. Concrètement, quatre temps sur un calendrier J+x : la collecte-fiabilisation — extractions de l’ERP et des sources opérationnelles, contrôles de complétude, et surtout rapprochement avec la comptabilité : mon réalisé doit coller à la balance, sinon je suis contestable en réunion ; la construction — base de reporting actualisée, écarts réalisé moins budget par ligne et par responsable de centre, tableau de bord et analyses ; le dialogue — j’appelle chaque responsable dont un écart significatif apparaît avant toute réunion collective : je collecte l’explication et l’action, et je vérifie la cohérence de l’explication avec les données ; la restitution — comité mensuel par exception, validation des actions correctives, mise à jour du suivi d’actions et de la prévision d’année. Par exemple, sur mon stage fictif, le cycle tenait en dix jours ouvrés : J+3 clôture comptable, J+6 reporting fiabilisé, J+8 entretiens, J+10 comité — et les deux semaines restantes servaient au forecast et aux améliorations d’outils. En conclusion, un suivi budgétaire est un processus d’entreprise, pas une production personnelle : calendrier stable, maquette stable, dialogue avant restitution — et le J+x du contrôleur reste tributaire du J+x de la comptabilité, ce qu’il vaut mieux avoir annoncé d’avance.',
    followUp: 'Le responsable commercial refuse tes entretiens individuels et veut passer directement en comité. Tu réagis comment ?',
    grading: [
      'Cycle décrit de bout en bout avec un calendrier J+x et des acteurs identifiés.',
      'Rapprochement avec la comptabilité présenté comme préalable à toute restitution.',
      'Dialogue individuel avec les responsables avant la réunion collective.',
      'Conscience des dépendances : clôture comptable, constance de la maquette, lecture en tendance.',
    ],
  },
  {
    id: 'qt-123',
    job: 'controle-gestion',
    category: 'procedures',
    difficulty: 3,
    skill: 'Report d’activité',
    question: 'On me parle de reporting, de tableau de bord, de report d’activité… Le report d’activité, c’est quoi exactement, tu y mets quoi dedans, et à qui tu l’adresses ?',
    expectedAnswer:
      'Le report d’activité est le document périodique qui rend compte de la performance d’une entité ou d’un périmètre : il combine le réalisé de la période — activité opérationnelle et résultats financiers —, les écarts aux références (budget, N-1, objectifs), l’explication des faits marquants et les perspectives — forecast ou actions engagées. Contenu type : une synthèse en une page (message clé, trois à cinq faits marquants chiffrés) ; la performance de la période en volume et en valeur, mois et cumul ; l’analyse des écarts principaux avec causes et qualification exceptionnel/récurrent ; les actions correctives en cours avec responsables et échéances ; la prévision actualisée et les points de vigilance ; en annexe, les tableaux détaillés. Destinataires : la direction du périmètre et sa hiérarchie. Il se distingue du reporting financier comptable par son orientation gestion et explication plutôt que constat comptable, et du tableau de bord par sa périodicité plus espacée et son format narratif plus développé. Fréquence usuelle mensuelle, mais cela dépend de l’organisation — certaines directions demandent un report trimestriel consolidé. Le piège : le catalogue de chiffres sans message — un report d’activité doit répondre aux questions « que s’est-il passé, pourquoi, qu’est-ce qu’on fait ».',
    reasoning:
      'Question de vocabulaire de gestion souvent floue chez les juniors, qui confondent report d’activité, reporting et tableau de bord. Le recruteur attend la structure narrative (faits, causes, actions, perspectives) et la distinction avec les deux autres livrables. Le discriminant de maturité : la page de synthèse avec un message clé et la qualification des écarts exceptionnel/récurrent. Un candidat qui décrit un empilement de tableaux sans narratif n’a jamais écrit de report lu par une direction.',
    commonErrors: [
      'Confondre report d’activité, reporting mensuel et tableau de bord : trois livrables, trois périodicités, trois formats.',
      'Empiler des tableaux sans page de synthèse ni message clé : personne ne lit un report sans hiérarchie.',
      'Décrire les écarts sans les qualifier (exceptionnel vs récurrent) ni les relier aux actions.',
      'Oublier les perspectives : un report d’activité sans prévision ni points de vigilance est un constat, pas un outil de pilotage.',
    ],
    oralShort:
      'Le report d’activité, c’est le document qui rend compte de la performance d’un périmètre : le réalisé de la période — opérationnel et financier —, les écarts au budget et à N-1, l’explication des faits marquants, les actions engagées et les perspectives. Une page de synthèse avec un message clé, puis le détail. C’est plus narratif et moins fréquent qu’un tableau de bord, plus orienté gestion qu’un reporting comptable.',
    oralLong:
      'Par définition, le report d’activité est le compte rendu périodique de la performance d’une entité : il ne se contente pas de diffuser des chiffres, il explique et il oriente. L’objectif est de donner à la direction une image fidèle de ce qui s’est passé, pourquoi, et de ce qui va se passer. Concrètement, le contenu suit un fil narratif : une synthèse en une page — le message clé du mois et trois à cinq faits marquants chiffrés ; la performance de la période en volume et en valeur, mois et cumul ; l’analyse des écarts aux références — budget, N-1 — avec causes, en qualifiant l’exceptionnel et le récurrent ; les actions correctives en cours avec responsables et échéances ; la prévision actualisée et les points de vigilance ; les tableaux détaillés en annexe. Par exemple, sur mon stage fictif, le report d’activité mensuel du directeur d’usine s’ouvrait sur une phrase : « mois à 96 % du budget volume, dégradé par deux arrêts machine non planifiés — plan de maintenance renforcé validé, impact chiffré sur le trimestre » — puis le détail appuyait chaque affirmation. En conclusion : le report d’activité se distingue du tableau de bord par son format narratif et sa périodicité plus espacée, du reporting comptable par son orientation gestion — et sa qualité se juge au message : faits, causes, actions, perspectives ; un report sans message clé n’est qu’un annuaire de chiffres.',
    followUp: 'Ta synthèse du mois tient en trois faits marquants — lequel tu mets en premier : l’écart le plus gros, ou le plus structurant pour l’année ?',
    grading: [
      'Définition orientée compte rendu de performance : réalisé, écarts, explications, perspectives.',
      'Structure du contenu décrite (synthèse, performance, écarts qualifiés, actions, prévision, annexes).',
      'Distinction claire avec le tableau de bord et le reporting comptable.',
      'Exigence de message clé et de narratif plutôt que catalogue de chiffres.',
    ],
  },
  {
    id: 'qt-124',
    job: 'controle-gestion',
    category: 'definitions',
    difficulty: 3,
    skill: 'Indicateurs pertinents vs indicateurs vanity',
    question: 'On me propose des tableaux de bord remplis d’indicateurs : nombre de visites du site, nombre de clients, chiffre d’affaires brut… Comment tu fais la différence entre un indicateur qui sert vraiment et un indicateur qui flatte — ce qu’on appelle un vanity metric ?',
    expectedAnswer:
      'Un indicateur pertinent remplit trois conditions : aligné sur un objectif — il mesure ce que l’entreprise cherche réellement à atteindre ; actionnable — sa variation peut être pilotée par un responsable identifié ; et interprétable — comparé à une référence et mis en contexte. Un vanity metric flatte sans éclairer : il monte presque toujours (cumuls, volumes bruts), ne désigne personne responsable de sa variation, et ne déclenche aucune décision. Exemples de passage du vanity au pertinent : le nombre de visites du site devient taux de conversion et coût d’acquisition ; le nombre de clients devient marge par client et taux d’attrition ; le chiffre d’affaires brut devient marge sur coûts variables — un chiffre d’affaires en hausse à marge dégradée est une fausse bonne nouvelle. Test pratique : « si cet indicateur varie de 10 %, est-ce que quelqu’un change une décision ? » Si la réponse est non, il sort du tableau de bord. Causes du vanity : indicateurs faciles à produire plutôt qu’utiles, volonté de raconter une belle histoire, habitude — un indicateur anciennement pertinent que personne n’a jamais retiré. Attention à l’inverse : un vanity metric peut conserver un intérêt exploratoire ou de communication externe — la règle proposée est une pratique de pilotage, pas un dogme, et la sélection finale appartient à l’entreprise et à ses objectifs.',
    reasoning:
      'Question qui teste le sens critique du contrôleur face à la dérive « mesurer tout ce qui est mesurable ». Le cœur attendu : les trois critères (alignement, actionnabilité, interprétabilité) et le test décisionnel. Les exemples de conversion vanity vers pertinent (visites vers taux de conversion, clients vers marge et attrition) sont le discriminant de vécu. La nuance finale — un vanity metric peut rester utile en communication — évite le dogmatisme, ce que le recruteur apprécie chez un contrôleur junior lucide.',
    commonErrors: [
      'Confondre indicateur facile à produire et indicateur utile : la disponibilité de la donnée ne suffit pas.',
      'Garder des indicateurs cumulés ou bruts qui montent mécaniquement et flattent la lecture.',
      'Présenter le chiffre d’affaires comme indicateur final sans le relier à la marge : un chiffre d’affaires à marge dégradée est une fausse bonne nouvelle.',
      'Transformer la chasse au vanity en dogme : un indicateur de communication peut garder un intérêt non décisionnel.',
    ],
    oralShort:
      'Trois conditions : aligné sur un objectif, actionnable par un responsable, interprétable avec une référence. Le vanity metric, lui, monte presque toujours, ne désigne personne et ne déclenche rien. Mon test : si cet indicateur varie, est-ce que quelqu’un change une décision ? Non : il sort. Les visites deviennent taux de conversion, les clients deviennent marge par client et attrition.',
    oralLong:
      'Par définition, un vanity metric est un indicateur flatteur mais stérile : il fait plaisir à regarder et ne pilote rien. L’objectif du contrôleur est de sélectionner des indicateurs qui éclairent des décisions. Concrètement, trois conditions font un indicateur pertinent : l’alignement — il mesure un objectif réel de l’entreprise, pas une sous-activité facile à compter ; l’actionnabilité — sa variation est pilotée par un responsable identifié, sinon elle ne déclenche rien ; l’interprétabilité — il est comparé à une référence, budget ou N-1, et mis en contexte. Mon test pratique : si cet indicateur varie de dix pour cent demain, est-ce que quelqu’un change une décision ? Par exemple : le nombre de visites du site ne dit rien — il devient utile en taux de conversion et en coût d’acquisition ; le nombre de clients devient marge par client et taux d’attrition, parce qu’un portefeuille qui grossit en perdant de la marge se dégrade ; le chiffre d’affaires brut devient marge sur coûts variables. Sur mon stage fictif, nous avons retiré d’un tableau de bord commercial trois indicateurs cumulés que personne ne commentait — remplacés par le taux de marge par segment, et la réunion a changé de contenu. En conclusion : pertinence égale objectif plus responsable plus référence ; le vanity metric ne sert ni l’un ni l’autre — avec une nuance : la sélection finale dépend des objectifs de l’entreprise, et un indicateur de communication garde parfois sa place hors du pilotage ; c’est un choix de gestion, pas un dogme.',
    followUp: 'Ton directeur marketing défend son nombre d’abonnés à la newsletter — comment tu lui démontres que c’est un vanity metric sans le frustrer ?',
    grading: [
      'Trois critères de pertinence cités : alignement, actionnabilité, interprétabilité/référence.',
      'Test décisionnel formulé (« est-ce que quelqu’un change une décision ? »).',
      'Exemples de conversion vanity vers pertinent (visites, clients, chiffre d’affaires).',
      'Nuance apportée : vanity contextuel, intérêt de communication possible, choix final de l’entreprise.',
    ],
  },
  {
    id: 'qt-125',
    job: 'controle-gestion',
    category: 'communication-client',
    difficulty: 4,
    skill: 'Annoncer un écart défavorable à un opérationnel',
    question: 'Ton reporting montre un écart défavorable de 40 000 € sur les charges du responsable logistique — son premier réflexe va être de se sentir accusé. Comment tu lui présentes ça ?',
    expectedAnswer:
      'Principe de départ : l’écart est un fait de gestion, pas un reproche — mon rôle est de comprendre, pas de juger. Préparation : avant l’entretien, fiabiliser le chiffre (données validées, périmètre fermé, erreurs d’imputation éliminées — rien de pire que d’annoncer un écart qui vient d’une erreur de saisie) et le décomposer par nature pour arriver avec des pistes, pas un chiffre brut. Conduite de l’entretien : demander un rendez-vous dédié avant le comité — jamais d’annonce surprise en réunion ; présenter le fait neutrement : l’écart, son montant, sa qualification ; laisser l’opérationnel expliquer les causes — il connaît le terrain, et une partie de l’écart échappe souvent à son contrôle ; distinguer ensemble le contrôlable et le non contrôlable ; construire l’action à deux — le plan d’action a beaucoup plus de chances d’être tenu s’il vient de celui qui l’exécutera ; convenir de ce qui sera dit en comité — pas d’embuscade : l’opérationnel arrive en réunion déjà au courant, avec ses explications et son plan. Ce qui tue le dialogue : arriver avec un chiffre faux, publier sans prévenir, imposer une action, ou enfouir l’écart pour préserver la relation — le contrôleur qui n’alerte pas trahit sa fonction. Le fond : le contrôleur est un partenaire qui aide à piloter, pas un policier qui dénonce.',
    reasoning:
      'Éprouve la posture relationnelle du contrôleur, souvent déterminante en entretien pour les postes de contrôle de gestion. Le recruteur traque trois défauts : l’annonce publique sans préparation (l’embuscade en comité), le chiffre non fiabilisé (une erreur d’imputation découverte pendant l’entretien discrédite le contrôleur pour des mois), et l’excès inverse — enfouir l’écart pour être aimé. Les marqueurs positifs : rendez-vous dédié, décomposition préparée, distinction contrôlable/non contrôlable, action co-construite et alignement sur ce qui sera dit en comité.',
    commonErrors: [
      'Annoncer l’écart en comité sans rendez-vous préalable : l’opérationnel se sent en embuscade et se ferme pour les mois suivants.',
      'Arriver avec un chiffre non fiabilisé : une erreur d’imputation découverte pendant l’entretien détruit la crédibilité du contrôleur.',
      'Raisonner en charges globales sans distinguer ce que l’opérationnel contrôle réellement.',
      'Éviter le sujet pour préserver la relation : le contrôleur qui n’alerte pas trahit sa fonction, et l’écart s’aggrave.',
    ],
    oralShort:
      'Je demande un rendez-vous avant le comité — jamais d’annonce surprise. J’arrive avec un chiffre fiabilisé et décomposé. Je présente le fait neutrement : 40 000 d’écart défavorable, voilà les natures. Je laisse le terrain expliquer les causes, on distingue ce qu’il contrôle de ce qu’il ne contrôle pas, et on construit le plan d’action ensemble. Et on convient de ce qui sera dit en comité.',
    oralLong:
      'Par définition, le dialogue de gestion sur un écart défavorable est un entretien de travail, pas une confrontation : l’écart est un fait chiffré, pas un jugement sur une personne. L’objectif est double : comprendre les causes réelles et repartir avec un plan d’action que l’opérationnel s’approprie. Concrètement, quatre temps. Avant : je fiabilise — données validées, périmètre fermé, erreurs d’imputation éliminées — et je décompose l’écart par nature pour arriver avec des pistes, pas un chiffre brut. Ensuite je demande un rendez-vous dédié, avant le comité : annoncer un écart défavorable en réunion sans prévenir est une embuscade, et elle coûte la coopération des mois suivants. Pendant : je présente le fait neutrement — l’écart, son montant, sa qualification — puis je laisse le responsable expliquer : il connaît le terrain, et une partie de l’écart lui échappe souvent ; on distingue ensemble le contrôlable et le non contrôlable, parce que juger un manager sur ce qu’il ne pilote pas est une faute de gestion. On construit l’action à deux : le plan sera tenu s’il vient de celui qui l’exécute. Enfin on aligne ce qui sera dit en comité — l’opérationnel y arrive au courant, avec ses explications et son plan. Par exemple, sur mon stage fictif, un écart de transport de 38 000 € s’est révélé moitié non contrôlable — hausse du tarif du transporteur — et moitié pilotable : tournées mal optimisées ; le plan d’action ne portait que sur la seconde moitié, et il a été tenu parce que le logisticien l’avait proposé lui-même. En conclusion : chiffre sûr, rendez-vous préparé, causes écoutées, action partagée — le contrôleur qui accuse devient un adversaire, celui qui enfouit devient inutile ; celui qui aide à corriger devient un partenaire.',
    followUp: 'En comité, le responsable logistique minimise l’écart et rend responsable la comptabilité. Tu réagis comment, en direct ?',
    grading: [
      'Rendez-vous dédié avant toute restitution collective (jamais d’annonce surprise).',
      'Chiffre fiabilisé et décomposé avant l’entretien, erreurs d’imputation éliminées.',
      'Distinction coûts contrôlables / non contrôlables menée avec l’opérationnel.',
      'Plan d’action co-construit et alignement sur le discours en comité.',
    ],
  },
  {
    id: 'qt-126',
    job: 'controle-gestion',
    category: 'procedures',
    difficulty: 3,
    skill: 'Mise en œuvre des prévisions glissantes',
    question: 'Ta direction veut passer d’un budget annuel à des prévisions glissantes — un rolling forecast. Concrètement, tu le mets en place comment, et quels sont les pièges à éviter ?',
    expectedAnswer:
      'Principe : à chaque fin de mois (ou de trimestre), je prolonge l’horizon de prévision pour qu’il reste constant — par exemple toujours douze mois glissants : réalisé janvier à juillet plus prévision août à juillet suivant. Le pilotage se fait sur la trajectoire plutôt que sur le budget figé. Mise en œuvre : 1) choisir l’horizon (12 mois pour l’exploitation, 18 à 24 si les cycles d’investissement ou commerciaux le justifient — l’horizon correspond au temps nécessaire pour agir sur les leviers) et la fréquence (mensuelle ou trimestrielle selon le coût de production accepté) ; 2) construire sur des drivers — les charges variables sont recalculées à partir des volumes prévus, pas saisies ligne à ligne : c’est ce qui rend le rolling soutenable ; 3) définir le processus : qui fournit les hypothèses opérationnelles (commerciaux, RH, achats), qui consolide, quelle date de clôture ; 4) assumer le double banc de pilotage pendant la transition : le budget reste la référence d’engagement et d’objectifs, le rolling devient la référence de pilotage — sans cette clarification, les équipes ne savent plus sur quel chiffre elles sont jugées ; 5) discipliner les hypothèses : datées, sourcées, versionnées, car un rolling change tous les mois — sans traçabilité, plus personne ne sait pourquoi la prévision a bougé. Pièges : transformer le rolling en re-négociation mensuelle des objectifs ; charge de production excessive qui tue la fréquence ; comparer un rolling à un budget sans rappeler leurs statuts différents. Le choix lui-même dépend de la volatilité du secteur et de la maturité du système d’information — ce n’est pas une évidence universelle.',
    reasoning:
      'Le recruteur vérifie que le candidat sait passer du concept à la machine : horizon, fréquence, drivers, processus, double banc budget/rolling. Les discriminants : la construction par drivers (sinon le rolling est insoutenable), la clarification du rôle du budget pendant la transition, et la discipline de versionnage des hypothèses. La lucidité finale — coût administratif, dépendance à la volatilité et au SI — signale le candidat qui ne vend pas la mode managériale comme une évidence.',
    commonErrors: [
      'Construire le rolling par saisie ligne à ligne au lieu de drivers : la charge de production tue le dispositif en trois mois.',
      'Ne pas clarifier le double banc : budget d’engagement et rolling de pilotage confondus, les équipes ne savent plus sur quoi elles sont jugées.',
      'Laisser le rolling devenir une re-négociation mensuelle des objectifs : le dispositif perd sa crédibilité.',
      'Ne pas versionner les hypothèses : la trajectoire change chaque mois sans qu’on sache pourquoi.',
    ],
    oralShort:
      'Le rolling, c’est un horizon de prévision constant — douze mois glissants, réalimenté chaque mois. Je le mets en place par drivers : les charges recalculées des volumes, pas ressaisies. Je définis qui fournit les hypothèses et une date de clôture. Et j’assume le double banc : le budget reste la référence d’engagement, le rolling devient celle du pilotage. Pièges : la re-négociation mensuelle et la charge de production.',
    oralLong:
      'Par définition, le rolling forecast maintient un horizon de prévision constant : à chaque clôture mensuelle, je prolonge d’un mois — le pilotage se fait sur une trajectoire toujours vivante, plus sur un budget figé. L’objectif est l’anticipation continue : voir venir le résultat de l’année, et au-delà, pour agir avant la clôture. Concrètement, la mise en œuvre suit cinq étapes : choisir l’horizon — douze mois suffisent à l’exploitation, dix-huit à vingt-quatre si les cycles commerciaux ou d’investissement le justifient — et la fréquence, mensuelle ou trimestrielle selon le coût de production accepté ; construire sur des drivers : charges variables recalculées des volumes prévus, hypothèses de prix sourcées — c’est la condition de soutenabilité, ressaisir cent lignes chaque mois tue le dispositif ; définir le processus : fournisseurs d’hypothèses identifiés — commerciaux, RH, achats —, consolideur, date de clôture du rolling ; assumer le double banc pendant la transition : le budget reste la référence d’engagement et d’objectifs, le rolling devient la référence de pilotage, et cette clarification doit être explicite ; enfin discipliner les hypothèses : datées, sourcées, versionnées — un rolling change tous les mois, sans traçabilité personne ne sait pourquoi. Par exemple, sur mon stage fictif, le rolling mensuel sur douze mois a révélé dès mars que le point mort serait franchi en novembre : la direction a décalé un recrutement, et le point mort est repassé positif — c’est exactement ce qu’un budget figé ne montre pas. En conclusion : horizon choisi sur les cycles, drivers obligatoires, double banc clarifié, hypothèses versionnées — et je reste lucide : le rolling a un coût administratif, il ne se justifie que si la volatilité du secteur et la maturité du SI le rendent rentable ; ce n’est pas une mode à importer aveuglément.',
    followUp: 'Six mois après le lancement, la direction compare encore le réalisé au budget et ignore le rolling. Tu fais quoi ?',
    grading: [
      'Principe exact : horizon constant réalimenté à chaque clôture (12 mois glissants par exemple).',
      'Construction par drivers citée comme condition de soutenabilité.',
      'Double banc clarifié : budget = engagement, rolling = pilotage.',
      'Pièges et lucidité : re-négociation mensuelle, charge de production, dépendance au contexte.',
    ],
  },
  {
    id: 'qt-127',
    job: 'controle-gestion',
    category: 'organisation',
    difficulty: 4,
    skill: 'Réconciliation comptabilité / données de gestion',
    question: 'Ton résultat de gestion et ton résultat comptable ne tombent pas juste : il reste 120 000 € d’écart entre les deux. D’où ça peut venir, et comment tu organisation la réconciliation ?',
    expectedAnswer:
      'Des écarts entre comptabilité sociale et données de gestion sont normaux : ce sont des retraitements, pas des erreurs — à condition d’être identifiés et documentés. Origines usuelles : le périmètre (entités ou périmètres différents : la comptabilité consolide des entités hors périmètre de gestion, ou inversement) ; les référentiels (en groupe, la gestion raisonne souvent en normes groupe proches d’IFRS alors que la comptabilité sociale suit le PCG : locations, amortissements, provisions retraitées) ; les éléments de gestion non comptables (loyers de crédit-bail retraités, coût du capital, rémunérations fictives de dirigeants) ; les éléments comptables non pilotables (amortissements d’actifs, produits exceptionnels) ; et enfin le cut-off et les erreurs (imputations erronées, périodes décalées) — ces derniers sont les seuls véritables écarts à corriger. Organisation de la réconciliation : un tableau de passage documenté, ligne à ligne, du résultat comptable au résultat de gestion — chaque retraitement identifié, chiffré, avec sa justification et son propriétaire ; une réconciliation à chaque clôture, avant toute diffusion du reporting de gestion — jamais après la réunion ; un rapprochement des soldes intermédiaires (chiffre d’affaires, masse salariale par nature) et pas seulement du résultat global — un écart global nul peut cacher deux écarts opposés ; le suivi des retraitements récurrents dans un référentiel stable d’un mois sur l’autre ; et une gouvernance claire : la comptabilité produit le socle, le contrôle de gestion chiffre et documente les retraitements, les deux valident ensemble. Le 120 000 € doit donc se décomposer : si tout s’explique par des retraitements identifiés, aucun problème ; le reliquat inexpliqué, lui, est une anomalie à investiguer.',
    reasoning:
      'Question technique de haut niveau qui distingue les candidats qui ont vu un vrai cycle de clôture. Le réflexe clé : l’écart entre comptabilité et gestion est normal s’il est documenté — anormal s’il est inexpliqué. Le recruteur attend les deux familles de causes (retraitements vs erreurs), le tableau de passage ligne à ligne, la discipline « réconcilier avant diffuser » et le piège de l’écart global nul qui cache deux écarts opposés. La mention du référentiel groupe IFRS-like face au PCG, présentée comme dépendante du contexte, est un plus de maturité.',
    commonErrors: [
      'Traiter tout écart comptabilité/gestion comme une erreur : la plupart sont des retraitements documentés, pas des anomalies.',
      'Réconcilier uniquement le résultat global : un solde nul peut cacher deux écarts opposés sur le chiffre d’affaires et les charges.',
      'Construire la réconciliation après la diffusion du reporting : les chiffres déjà présentés sont contestés.',
      'Reconstituer les retraitements de mémoire chaque mois au lieu de tenir un tableau de passage stable et versionné.',
    ],
    oralShort:
      'Un écart comptabilité-gestion, c’est normal s’il est documenté. Causes : périmètres différents, référentiels différents — PCG côté comptabilité, normes groupe côté gestion —, éléments non comptables comme les loyers retraités, ou véritables erreurs d’imputation. J’organise un tableau de passage ligne à ligne, réconcilié à chaque clôture avant diffusion, avec le chiffre d’affaires et la masse salariale rapprochés aussi, pas seulement le résultat.',
    oralLong:
      'Par définition, la réconciliation comptabilité-gestion rapproche deux lectures différentes de la même activité : la comptabilité sociale, contrainte par son référentiel, et le pilotage interne, libre de ses conventions. L’objectif n’est pas de faire tomber les deux résultats au centime, mais d’expliquer chaque différence. Concrètement, j’organise la chasse à l’écart en deux familles. Les retraitements — différences normales et documentées : périmètres distincts entre comptabilité et gestion ; référentiels différents, en groupe la gestion raisonne souvent en normes groupe proches d’IFRS pendant que la société tient son PCG — locations, provisions, amortissements ; éléments de gestion non comptables — loyers de crédit-bail retraités, coût du capital ; éléments comptables non pilotables — produits exceptionnels. Et les vraies anomalies : erreurs d’imputation, cut-off, doublons — les seules à corriger. Sur le 120 000 € de l’énoncé, je décompose ligne à ligne dans un tableau de passage : chaque retraitement identifié, chiffré, justifié, avec son propriétaire ; le reliquat inexpliqué est la seule vraie alerte. Organisation : réconciliation à chaque clôture avant diffusion — jamais après la réunion ; rapprochement des soldes intermédiaires — chiffre d’affaires, masse salariale — et pas seulement du résultat, parce qu’un écart global nul peut cacher deux écarts opposés ; référentiel des retraitements stable et versionné, validé à deux voix par la comptabilité et le contrôle de gestion. Par exemple, sur mon stage fictif, un écart récurrent de 45 000 € s’est expliqué en trois lignes : loyers de crédit-bail retraités 30 000, provision pour litige exclue de la gestion 12 000, reliquat d’imputation 3 000 corrigé. En conclusion : écart expliqué égale retraitement documenté, écart inexpliqué égale anomalie ; et la discipline qui compte est la plus simple — réconcilier avant de diffuser, toujours.',
    followUp: 'La direction te demande de supprimer les retraitements pour « un seul chiffre ». Tu lui réponds quoi ?',
    grading: [
      'Distinction retraitement documenté vs erreur à corriger, appliquée au 120 000 €.',
      'Causes citées : périmètre, référentiel PCG vs normes groupe, éléments non comptables, cut-off.',
      'Tableau de passage ligne à ligne, réconciliation à chaque clôture avant diffusion.',
      'Rapprochement des soldes intermédiaires, pas seulement du résultat global.',
    ],
  },
  {
    id: 'qt-128',
    job: 'controle-gestion',
    category: 'cas-pratiques',
    difficulty: 3,
    skill: 'Dispositif d’alerte du tableau de bord',
    question: 'Petit cas : mon tableau de bord a douze indicateurs, et le DAF me dit « mets des seuils d’alerte partout ». Tu me conseilles quoi — sur les seuils, sur qui reçoit l’alerte, et sur ce qui se passe après ?',
    expectedAnswer:
      'Un dispositif d’alerte se pense comme un système, pas comme une mise en forme. 1) Trier : tous les indicateurs ne méritent pas une alerte — seuls ceux liés à un risque identifié et à un levier d’action : la trésorerie disponible, le carnet de commandes en semaines de production, la marge du mois, le taux de service. Un indicateur descriptif sans action associée produit du bruit. 2) Poser des seuils doubles — en valeur (montant plancher de trésorerie) et en évolution (variation anormale vs budget ou vs N-1) — et des seuils gradués : vigilance puis alerte critique, parce qu’un seul niveau binaire génère soit l’indifférence soit la panique. 3) Définir le destinataire et la réponse attendue : une alerte sans propriétaire et sans délai de réaction est un voyant sans conducteur — la trésorerie alerte le trésorier sous 24 h avec proposition d’action, la marge alerte le contrôleur et le responsable du périmètre avec analyse à J+3. 4) Prévoir le traitement : registre des alertes levées, cause identifiée, action décidée, statut suivi — l’alerte qui se lève trois mois de suite sans action dénonce un problème de gouvernance, pas de seuil. 5) Éviter la fatigue d’alerte : seuils recalibrés périodiquement sur l’historique, alertes rares et significatives — une alerte hebdomadaire devient un fond sonore qu’on ne lit plus. Distinguer ce dispositif du seuil de commentaire des écarts du reporting : ici on parle de déclencheurs opérationnels en temps quasi réel, pas de materialité d’analyse mensuelle. Le calibrage exact — seuils, destinataires, délais — appartient à l’entreprise et à sa tolérance au risque : je fournis la méthode, la direction tranche.',
    reasoning:
      'Le cas teste le passage du seuil unique et magique au système d’alerte complet : sélection des indicateurs alertables, double seuil gradué, propriétaire et délai de réaction, traitement et registre, recalibrage anti-fatigue. Le recruteur guette le candidat qui répond « je mets 10 % partout » sans se demander qui fait quoi après. La distinction finale avec le seuil de commentaire d’écarts du reporting montre la précision conceptuelle, et le renvoi du calibrage à la direction évite d’ériger une méthode en norme.',
    commonErrors: [
      'Poser le même pourcentage sur les douze indicateurs sans hiérarchie : la trésorerie et la marge ne s’alertent pas comme une statistique descriptive.',
      'Mettre des seuils sans destinataire ni délai de réaction : un voyant sans conducteur ne pilote rien.',
      'Négliger la fatigue d’alerte : une alerte fréquente devient un fond sonore que personne ne lit.',
      'Confondre seuil d’alerte opérationnel et seuil de commentaire des écarts du reporting mensuel.',
    ],
    oralShort:
      'Je trie d’abord : seuls les indicateurs liés à un risque et à un levier méritent une alerte. Ensuite des seuils doubles — montant et évolution —, gradués : vigilance, puis critique. Puis je définis le destinataire et la réponse attendue, avec délai. Et un registre : chaque alerte a une cause, une action, un statut. Enfin je recalibre périodiquement, parce qu’une alerte fréquente ne se lit plus.',
    oralLong:
      'Par définition, une alerte est un signal qui déclenche une réaction — si rien ne réagit derrière, ce n’est qu’une couleur. L’objectif du dispositif est de faire remonter vite les signaux actionnables sans noyer les lecteurs. Concrètement, sur le cas, je réponds au DAF en cinq points. D’abord trier : sur douze indicateurs, quatre à six au plus méritent une alerte — ceux liés à un risque identifié et à un levier : trésorerie, marge du mois, carnet de commandes, taux de service ; un indicateur descriptif sans action associée produit du bruit. Ensuite calibrer : des seuils doubles — en valeur et en évolution — et gradués : un niveau de vigilance, un niveau critique, parce qu’un seuil binaire génère soit l’indifférence soit la panique. Puis assigner : chaque alerte a un destinataire nommé, un délai de réaction et une réponse attendue — trésorerie : trésorier sous 24 heures avec proposition ; marge : contrôleur et responsable du périmètre avec analyse à J+3. Prévoir le traitement : un registre des alertes — cause, action, statut — parce qu’une alerte qui se lève trois mois de suite sans action dénonce un problème de gouvernance, pas de calibrage. Enfin recalibrer périodiquement sur l’historique pour éviter la fatigue d’alerte : une alerte hebdomadaire devient un fond sonore. Par exemple, sur mon stage fictif, le seuil de trésorerie était un plancher à quinze jours de charges fixes, avec alerte e-mail au trésorier et remontée au DAF sous le plancher critique — deux niveaux, deux destinataires, deux délais. En conclusion : trier, calibrer double et gradué, assigner, traiter, recalibrer — en signalant au DAF que ce dispositif est distinct du seuil de commentaire des écarts du reporting, et que le calibrage final dépend de la tolérance au risque de l’entreprise : je fournis la méthode, il tranche.',
    followUp: 'Trois mois plus tard, la moitié des alertes se lèvent chaque semaine et personne ne réagit. Tu diagnostiques quoi ?',
    grading: [
      'Sélection des indicateurs alertables (risque + levier) plutôt qu’alerte sur les douze.',
      'Seuils doubles et gradués (valeur + évolution, vigilance + critique).',
      'Destinataire, délai de réaction et registre de traitement des alertes définis.',
      'Anti-fatigue (recalibrage) et distinction avec le seuil de commentaire des écarts.',
    ],
  },
  {
    id: 'qt-129',
    job: 'controle-gestion',
    category: 'definitions',
    difficulty: 2,
    skill: 'Coûts contrôlables et responsabilité',
    question: 'Coûts contrôlables, coûts non contrôlables — c’est quoi la différence, et pourquoi c’est important quand tu analyses les écarts d’un responsable ?',
    expectedAnswer:
      'Un coût est contrôlable par un responsable si ce dernier a, sur la période, l’autorité ou une influence significative sur son niveau : le responsable de production contrôle la quantité de matière consommée, les heures de son équipe ; le responsable commercial contrôle le volume vendu et, dans les limites de la politique de prix, le prix. Un coût non contrôlable lui est imposé de l’extérieur ou par d’autres : prix d’achat de la matière négocié par les achats, loyer négocié par la direction, charges de services supports réparties par clés d’allocation. Importance dans l’analyse des écarts : on ne juge un responsable que sur les coûts qu’il contrôle — présenter à un manager des écarts qu’il ne peut pas corriger détruit le dialogue de gestion et rend le reporting injuste et contesté. Conséquences pratiques : le reporting de centre distingue les écarts contrôlables, commentés avec leur propriétaire, et les éléments non contrôlables, suivis globalement — un dérapage des prix d’achat est un sujet achats, pas un reproche à la production ; l’analyse des écarts gagne à décomposer un écart global en composantes contrôlable et non contrôlable ; et la conception des centres de responsabilité en découle — centre de coûts, centre de profit, chaque responsable étant jugé sur son périmètre d’action. Limite : le contrôlable est un continuum, pas un binaire — influence partielle, effets croisés, délai d’action ; la frontière dépend de l’organisation et doit être documentée, pas subie.',
    reasoning:
      'Vérifie la dimension responsabilisation du contrôle de gestion, souvent absente des réponses purement calculatoires. Le cœur attendu : la définition par l’autorité ou l’influence du responsable sur la période, et le principe — ne juger que sur le contrôlable. Le candidat mature distingue le continuum (influence partielle) du binaire et signale que la frontière est un choix d’organisation à documenter. L’exemple type — quantité consommée contrôlée par la production, prix d’achat imposé — doit apparaître, car il prépare la décomposition des écarts par responsabilité.',
    commonErrors: [
      'Définir le contrôlable par la nature de la charge (variable égale contrôlable) : le lien n’est pas automatique — un prix d’achat variable échappe au responsable de production.',
      'Juger un responsable sur un compte entièrement réparti ou imposé : le reporting devient injuste et le dialogue s’arrête.',
      'Traiter le contrôlable comme un binaire : la plupart des coûts relèvent d’une influence partielle, à documenter.',
      'Oublier la période : un coût figé par un contrat annuel est non contrôlable à court terme, renégociable à l’échéance.',
    ],
    oralShort:
      'Un coût est contrôlable par un responsable s’il a l’autorité ou une influence réelle sur son niveau, sur la période. Le responsable de production contrôle la quantité de matière, pas le prix d’achat. Conséquence : je ne juge un manager que sur ce qu’il contrôle — sinon le reporting est injuste et le dialogue s’arrête. Et le contrôlable est un continuum, pas un binaire.',
    oralLong:
      'Par définition, le caractère contrôlable d’un coût se juge par rapport à un responsable et à une période : contrôlable si le manager a l’autorité ou une influence significative sur son niveau. L’objectif est la justice du pilotage : un système qui juge sur l’incontrôlable perd sa légitimité et son efficacité. Concrètement, prenons un atelier : le responsable contrôle la quantité de matière consommée — rendements, rebuts —, les heures de son équipe, la cadence ; il ne contrôle ni le prix d’achat de la matière, négocié par les achats, ni le loyer, ni la répartition des charges de la direction. Donc son reporting de centre présente les écarts contrôlables qu’il commente et sur lesquels il propose d’agir, et les éléments non contrôlables suivis globalement : un dérapage du prix d’achat remonte comme un sujet achats, pas comme un reproche à la production. Par exemple, sur mon stage fictif, un écart de charges de 60 000 € sur un atelier se décomposait en 12 000 contrôlables — rebuts en hausse — et 48 000 de hausse du prix d’achat : la réunion avec le chef d’atelier n’a porté que sur les 12 000, et le sujet prix est parti en comité achats ; le dialogue est resté constructif parce que le chiffre était juste dans son périmètre. En conclusion : ne juger que sur le contrôlable, décomposer les écarts en composantes contrôlable et non contrôlable, et documenter la frontière — qui est un choix d’organisation — parce que le contrôlable est un continuum : un prix contractuel est figé à court terme et renégociable à l’échéance.',
    followUp: 'Le responsable d’atelier te dit que la hausse des rebuts vient d’une matière de qualité dégradée achetée moins cher. Ton analyse de contrôlable, tu la révises ?',
    grading: [
      'Définition exacte : autorité ou influence du responsable, sur une période donnée.',
      'Principe d’équité : ne juger que sur le contrôlable, conséquence sur le dialogue de gestion.',
      'Exemple parlant : quantité contrôlée par la production, prix d’achat imposé.',
      'Nuance : continuum, frontière documentée, dépendance à l’organisation et au délai.',
    ],
  },
  {
    id: 'qt-130',
    job: 'controle-gestion',
    category: 'organisation',
    difficulty: 3,
    skill: 'Page 1 du tableau de bord mensuel',
    question: 'Ton tableau de bord mensuel fait douze pages, et je n’ai que trois minutes. Qu’est-ce que tu me mets en page 1 — et pourquoi ?',
    expectedAnswer:
      'La page 1 est la page de décision, pas la page d’accueil : elle doit permettre au lecteur pressé de savoir en trois minutes si la trajectoire est bonne, ce qui a dévié, et ce qu’on lui demande. Contenu : 1) l’en-tête de contexte — entité, période, date de clôture, statut de fiabilisation : un chiffre lu sans son périmètre est un chiffre mal interprété ; 2) les indicateurs clés — quatre à sept maximum — en valeur et en comparaison (budget, N-1), avec statut visuel sobre : la marge, le chiffre d’affaires, la trésorerie ou le résultat, et les deux ou trois indicateurs opérationnels structurants du métier ; 3) les écarts majeurs — le top trois ou cinq, montant et qualification, chacun avec une ligne d’explication et le renvoi vers la page de détail ; 4) les points d’attention et alertes — trésorerie, engagements significatifs, événements attendus ; 5) les décisions attendues ou actions en cours — responsables et échéances. Le reste du classeur suit une hiérarchie de zoom : pages d’analyse par domaine, puis annexes de détail. Anti-patterns : la page 1 sommaire (un index ne dit rien), le graphique décoratif (de jolies courbes sans références), le zapping (une page 1 différente chaque mois — plus rien n’est comparable), et la page 1 exhaustive (la synthèse noyée sous les chiffres). Test de qualité : un lecteur extérieur doit pouvoir reconstituer le mois et les actions sans poser une question — sinon la page 1 n’a pas rempli son rôle.',
    reasoning:
      'Éprouve le sens de la hiérarchisation de l’information : ici on juge la capacité à sacrifier. Le recruteur attend la page 1 comme page de décision (contexte, peu d’indicateurs comparés, top écarts expliqués, décisions attendues), la hiérarchie de zoom vers analyses et annexes, et les anti-patterns — sommaire, décoratif, zapping, exhaustivité. Le test final — un lecteur extérieur reconstitue le mois sans poser une question — est le marqueur de maturité le plus fort.',
    commonErrors: [
      'Faire de la page 1 un sommaire ou un rappel de méthodologie : trois minutes de lecture y laissent le lecteur sans information.',
      'Placer un graphique décoratif sans référence comparée : joli et muet.',
      'Changer la structure de la page 1 chaque mois : la comparabilité mentale disparaît.',
      'Empiler plus de dix indicateurs en page 1 : la hiérarchie s’inverse, l’essentiel se noie dans l’accessoire.',
    ],
    oralShort:
      'La page 1, c’est la page de décision. L’en-tête de contexte — entité, période, fiabilisation. Quatre à sept indicateurs clés, en valeur et comparés au budget et à N-1. Le top trois des écarts, chacun avec son explication. Les points d’attention — trésorerie, engagements. Et les décisions attendues avec responsables. Le reste en zoom : analyses, puis annexes.',
    oralLong:
      'Par définition, la page 1 d’un tableau de bord mensuel est une page de décision : elle doit dire en trois minutes où en est la trajectoire, ce qui a dévié, et ce qu’on attend du lecteur. L’objectif est de respecter le temps réel du dirigeant — le détail existe, mais il se mérite. Concrètement, je construis la page en cinq blocs : l’en-tête de contexte — entité, période, date de clôture, statut de fiabilisation : un chiffre sans périmètre est mal interprété ; les indicateurs clés — quatre à sept, jamais davantage — en valeur et comparés au budget et à N-1, avec un statut visuel sobre : marge, chiffre d’affaires, résultat ou trésorerie, plus les deux ou trois indicateurs opérationnels structurants du métier ; le top des écarts — trois à cinq, montant et qualification, chacun avec une ligne d’explication et le renvoi vers la page de détail ; les points d’attention — trésorerie, engagements significatifs, événements attendus ; les décisions attendues et actions en cours — responsables et échéances. Derrière, une hiérarchie de zoom : les pages d’analyse par domaine, puis les annexes de détail. Les anti-patterns que je traque : la page 1 sommaire — un index n’informe pas ; le graphique décoratif — des courbes sans référence ne disent rien ; le zapping — une page 1 qui change chaque mois tue la comparaison mentale ; et l’exhaustivité — plus de dix indicateurs en page 1 inversent la hiérarchie. Par exemple, sur mon stage fictif, la page 1 du directeur industriel tenait en six indicateurs et trois écarts commentés : il la lisait avant la réunion et arrivait avec ses questions — c’est exactement le niveau de service attendu. En conclusion, une page 1 réussie permet à un lecteur extérieur de reconstituer le mois sans poser une question — sinon elle n’a pas rempli son rôle.',
    followUp: 'Ton N+1 veut ajouter en page 1 les effectifs par service, l’ensemble des projets et le plan de trésorerie hebdomadaire. Tu défends quoi ?',
    grading: [
      'Page 1 définie comme page de décision (trajectoire, écarts, demandes).',
      'Contenu structuré : contexte, 4-7 indicateurs comparés, top écarts expliqués, points d’attention, décisions.',
      'Hiérarchie de zoom vers analyses et annexes.',
      'Anti-patterns cités : sommaire, décoratif, zapping, exhaustivité.',
    ],
  },
  {
    id: 'qt-131',
    job: 'controle-gestion',
    category: 'calculs',
    difficulty: 4,
    skill: 'Analyse de marge par produit',
    question: 'Deux produits. Produit A : prix de vente 120 €, coût variable 80 €, 5 000 unités vendues. Produit B : prix de vente 60 €, coût variable 45 €, 12 000 unités. Charges fixes communes : 300 000 €. On me dit : « pousse B, c’est notre meilleur produit ». Tu analyses quoi, et tu réponds quoi ?',
    expectedAnswer:
      'Calculs : A — marge sur coûts variables unitaire 120 − 80 = 40 €, volume 5 000, chiffre d’affaires 600 000 €, MCV 200 000 €, taux de MCV 33,3 %. B — MCV unitaire 60 − 45 = 15 €, volume 12 000, chiffre d’affaires 720 000 €, MCV 180 000 €, taux 25 %. MCV totale 380 000 €, charges fixes 300 000 €, résultat 80 000 €. La réponse au « meilleur produit » : B a le plus gros chiffre d’affaires — 720 000 contre 600 000 — mais A rapporte plus de marge absolue — 200 000 contre 180 000 — et surtout beaucoup plus par unité et par euro vendu : 40 € par unité contre 15, 33,3 % contre 25 %. Pousser B dilue la marge : chaque euro de chiffre d’affaires rapporte 25 centimes en B contre 33 en A. Si l’objectif est le résultat, on pousse A — ou on renégocie le coût variable ou le prix de B. Deux nuances : 1) la question change avec la ressource contrainte : si les deux produits passent sur la même machine et que A consomme 2 heures par unité contre 1 heure pour B, la marge par heure de ressource donne A : 40 / 2 = 20 €/h, B : 15 / 1 = 15 €/h — A reste prioritaire, mais l’écart se resserre ; la bonne unité de décision est la marge par unité de ressource rare, pas la marge unitaire ; 2) les charges fixes communes ne doivent pas être réparties arbitrairement entre A et B pour conclure à un « produit déficitaire » : la répartition est conventionnelle, et une décision d’arrêt se raisonne sur les charges fixes évitables et la MCV perdue. Donc : je pousse A en volume, j’interroge le rôle de B — produit d’appel, effet de gamme ? — et je chiffre l’impact d’un mix déplacé vers B avant de conclure.',
    reasoning:
      'Le piège de l’énoncé : assimiler meilleur produit au plus gros chiffre d’affaires. Le candidat doit dérouler les trois niveaux : marge absolue, taux de marge, puis marge par unité de ressource contrainte — le vrai critère de décision quand la capacité est limitée. Les chiffres sont simples mais le classement s’inverse entre chiffre d’affaires et marge, ce qui révèle les automatismes. La nuance sur la non-répartition arbitraire des charges fixes et la question du rôle stratégique de B (produit d’appel) distinguent les réponses complètes.',
    commonErrors: [
      'Répondre « oui, pousse B » sur le chiffre d’affaires : B rapporte moins de marge que A en absolu et en taux.',
      'Répartir les 300 000 € de charges fixes entre A et B pour désigner un produit déficitaire : la répartition est arbitraire et la décision d’arrêt se raisonne sur les charges fixes évitables.',
      'Comparer des marges unitaires sans poser la question de la ressource contrainte : 40 € contre 15 € ne suffit pas si les consommations de ressource diffèrent.',
      'Ignorer le rôle stratégique possible de B (produit d’appel, effet de gamme) et conclure au seul vu des marges.',
    ],
    oralShort:
      'A : 40 euros de marge unitaire, 200 000 de MCV, taux 33,3 %. B : 15 euros de marge unitaire, 180 000 de MCV, taux 25 %. B a le plus gros chiffre d’affaires, A rapporte plus. Pousser B dilue la marge. Et si la machine est la ressource contrainte : A 20 euros de l’heure, B 15 — A reste devant, mais c’est le bon critère. Je pousse A, et je demande pourquoi on veut pousser B.',
    oralLong:
      'Par définition, l’analyse de marge par produit compare les contributions — les marges sur coûts variables — et non les chiffres d’affaires. L’objectif est d’identifier les produits qui font le résultat, et de décider où porter l’effort commercial. Concrètement : A — marge unitaire 120 − 80 = 40 €, 5 000 unités, chiffre d’affaires 600 000 €, MCV 200 000 €, taux 33,3 % ; B — marge unitaire 60 − 45 = 15 €, 12 000 unités, chiffre d’affaires 720 000 €, MCV 180 000 €, taux 25 %. Total : 380 000 € de MCV, 300 000 € de charges fixes, 80 000 € de résultat. Donc au « meilleur produit » je réponds : B fait le plus gros chiffre d’affaires — 720 000 contre 600 000 — mais A rapporte plus de marge en absolu, plus par unité — 40 € contre 15 — et plus par euro vendu — 33,3 % contre 25 %. Pousser B dilue la marge : chaque euro de chiffre d’affaires en B rapporte 25 centimes, 33 en A. Je pousse A, sauf si B joue un rôle stratégique — produit d’appel, effet de gamme — auquel cas le mix se pilote en connaissance de cause, avec l’impact chiffré. Deux nuances importantes : d’abord la ressource contrainte — si A et B passent sur la même machine, 2 heures par unité pour A et 1 heure pour B, la marge par heure donne A 20 € et B 15 € : A reste prioritaire, mais le vrai critère de décision est la marge par unité de ressource rare, pas la marge unitaire. Ensuite les charges fixes communes : je ne les répartis pas arbitrairement entre A et B pour désigner un produit déficitaire — la répartition est une convention ; une décision d’arrêt se raisonne sur les charges fixes évitables et la MCV perdue. En conclusion : 80 000 € de résultat porté structurellement par A ; je pousse A en volume, j’interroge le rôle de B, et je chiffre tout scénario de mix avant de conclure — c’est ça, l’analyse de marge par produit.',
    followUp: 'On te réplique : « B remplit la machine aux heures creuses, sinon elle tourne à vide ». Ça change ton arbitrage ?',
    grading: [
      'Trois calculs justes : MCV A 200 000 €, MCV B 180 000 €, résultat 80 000 €.',
      'Inversion chiffre d’affaires/marge identifiée : B plus gros chiffre d’affaires, A meilleure contribution et meilleur taux.',
      'Critère de la ressource contrainte cité (marge par heure : 20 € vs 15 €).',
      'Refus de répartir arbitrairement les fixes / question du rôle stratégique de B.',
    ],
  },
  {
    id: 'qt-132',
    job: 'controle-gestion',
    category: 'limites',
    difficulty: 4,
    skill: 'Budget fixe vs budget flexible',
    question: 'Ton budget était calé sur 10 000 unités, le réalisé est à 12 000 — et le responsable production affiche 200 000 € d’écart défavorable sur ses charges. Il crie à l’injustice. Il a raison ? Où sont les limites du budget fixe, et tu proposes quoi ?',
    expectedAnswer:
      'Il a partiellement raison, et c’est une limite structurelle du budget fixe : un budget construit sur 10 000 unités fige des charges — matières, énergie, une partie des charges variables d’atelier — dimensionnées pour ce niveau ; à 12 000 unités, ces charges montent mécaniquement, et l’écart constaté mélange effet d’activité et performance. Juger un responsable sur un écart global contre un budget d’activité différent, c’est le noter sur ce qu’il n’a pas choisi — le niveau d’activité — plutôt que sur ce qu’il pilote — sa façon de consommer les ressources. Trois réponses possibles : 1) le budget flexible : recalculer les charges à l’activité réelle — charges variables au volume réel valorisées au standard, charges fixes au budget — et mesurer l’écart entre ce budget ajusté et le réel : l’activité s’efface, reste la performance ; 2) la décomposition de l’écart : écart d’activité et écart de performance — le responsable est commenté sur le second ; 3) la re-prévision documentée en cours d’année, quand l’écart d’activité devient tel que le budget perd son rôle de repère — à distinguer du budget révisé, qui est une re-négociation formelle de la référence. Limites de ces solutions elles-mêmes : le budget flexible suppose des standards fiables — si le coût standard est faux, l’analyse est fausse ; il a un coût administratif ; et l’activité n’est pas toujours le seul driver — mix, saisonnalité. Nuance de gouvernance : les 200 000 € restent un fait — l’entreprise a dépensé plus que budgété, cash compris — l’analyse flexible explique, elle n’efface pas la contrainte financière. Le choix entre budget fixe, flexible ou re-prévision dépend de la volatilité de l’activité et du coût de gestion accepté : c’est un arbitrage d’entreprise, pas une règle.',
    reasoning:
      'Le cas justice/injustice force le candidat à arbitrer : l’écart global contre budget fixe mélange activité subie et performance pilotée. Le recruteur attend la distinction écart d’activité / écart de performance, le budget flexible comme outil, la re-prévision documentée, et les limites des remèdes (standards faux, coût administratif). La nuance finale — l’analyse flexible ne supprime pas la réalité cash de l’écart — évite le piège de transformer l’outil d’analyse en machine à absoudre.',
    commonErrors: [
      'Conclure « le responsable a tort, 200 000 € c’est 200 000 € » : l’écart global contre budget fixe mélange activité subie et performance pilotée.',
      'Présenter le budget flexible comme la solution universelle sans conditions : il exige des standards fiables et un coût administratif.',
      'Confondre budget flexible (recalcul à l’activité réelle, outil d’analyse) et budget révisé (re-négociation formelle de la référence).',
      'Utiliser l’analyse flexible pour effacer la contrainte financière : l’entreprise a bien dépensé le cash, l’analyse explique, elle n’annule pas.',
    ],
    oralShort:
      'Il a partiellement raison : un budget fixe calé sur 10 000 unités mélange effet d’activité et performance quand on en produit 12 000. Je recalcule un budget flexible à l’activité réelle — variables au volume réel au standard, fixes au budget — et je sépare l’écart d’activité de l’écart de performance : il est commenté sur le second. Mais les 200 000 restent un fait de cash, et le flexible exige des standards fiables.',
    oralLong:
      'Par définition, un budget fixe est dimensionné pour un niveau d’activité prévu — et cette hypothèse devient une limite dès que l’activité réelle s’en écarte. L’objectif de ma réponse est de séparer ce que le responsable a subi — l’activité — de ce qu’il a piloté — sa performance. Concrètement : à 10 000 unités budgétées et 12 000 réalisées, les charges variables de l’atelier montent mécaniquement ; les 200 000 € d’écart global mélangent donc un effet d’activité — le sur-volume consomme plus de ressources — et un effet de performance — la façon de consommer. Juger le responsable sur le global, c’est le noter sur un niveau d’activité qu’il n’a pas choisi. Trois remèdes : le budget flexible — je recalcule les charges à l’activité réelle, variables au volume constaté valorisées au standard, fixes au budget, et je compare ce budget ajusté au réalisé : l’activité s’efface et reste la performance ; la décomposition de l’écart — écart d’activité, écart de performance, le responsable est commenté sur le second ; ou la re-prévision documentée quand l’écart d’activité rend le budget illisible — à distinguer du budget révisé, qui est une re-négociation formelle de la référence. Par exemple, sur mon stage fictif, un écart de 200 000 € sur un atelier s’est recomposé en 160 000 d’activité et 40 000 de performance — le vrai sujet de gestion, quatre fois plus petit que le chiffre initialement contesté. En conclusion : le responsable a raison sur le principe et tort de crier à l’injustice absolue — les 200 000 € restent un fait de cash pour l’entreprise, l’analyse flexible explique sans effacer ; et le recours au flexible, à la décomposition ou à la re-prévision dépend de la volatilité de l’activité et du coût administratif accepté : c’est un arbitrage de gestion, pas une règle universelle.',
    followUp: 'Le flexible t’amène à comparer le réalisé à un budget recalculé — le directeur commercial y voit un budget qu’on réécrit après la partie. Tu lui expliques quoi ?',
    grading: [
      'Limite du budget fixe identifiée : mélange effet d’activité et performance dès que l’activité dérive.',
      'Budget flexible défini précisément (variables au volume réel au standard, fixes au budget).',
      'Décomposition écart d’activité / écart de performance et principe de commentaire sur la performance.',
      'Nuances : cash réel non effacé, standards fiables requis, arbitrage selon contexte.',
    ],
  },
  {
    id: 'qt-133',
    job: 'audit-interne',
    category: 'definitions',
    difficulty: 1,
    skill: 'Définitions : audit interne, audit externe, contrôle interne',
    question: 'Pour commencer par le début : c’est quoi l’audit interne ? Et surtout, tu me le distingues bien de l’audit externe et du contrôle interne — je veux les trois différences nettes.',
    expectedAnswer:
      'L’audit interne est une fonction d’évaluation indépendante au service de l’organisation : elle évalue — sur mandat de la direction ou de la gouvernance — les processus, les risques et le dispositif de contrôle interne, et formule des recommandations d’amélioration ; dans beaucoup d’organisations sa mission couvre aussi du conseil. Distinctions : 1) audit interne vs audit externe : l’auditeur externe — le commissaire aux comptes — certifie les comptes, dans un cadre légal et normé, et s’adresse aux actionnaires et aux tiers ; l’auditeur interne est mandaté par l’entreprise, son périmètre couvre processus et opérations, pas seulement les états financiers, et son travail se traduit par des rapports internes et un suivi d’actions, pas par une opinion publique. Un même cycle — achats, ventes — peut être audité par les deux, mais avec des objectifs différents : fiabilité des comptes d’un côté, efficacité du dispositif et maîtrise des risques de l’autre. 2) audit interne vs contrôle interne : le contrôle interne est l’ensemble des dispositifs que l’organisation met en place et fait vivre au quotidien — contrôles dans les processus, séparations de fonctions, procédures ; l’audit interne ne fait pas partie du dispositif évalué : il l’évalue périodiquement et rend compte — il est le juge du système, pas un organe du système. Image utile : le contrôle interne est l’équipement de la maison, l’audit interne est l’expert qui vient inspecter l’équipement. Périmètre et rattachement varient selon les organisations — comité d’audit, direction générale — et selon les référentiels adoptés : c’est contextuel, chaque entreprise définit sa charte d’audit.',
    reasoning:
      'Question d’échauffement discriminante : la confusion audit interne / audit externe / contrôle interne est le filtre classique des entretiens juniors. Le recruteur veut les deux distinctions — objet (comptes certifiés vs processus évalués) et nature (dispositif vs évaluateur du dispositif) — et le signalement que charte et rattachement sont contextuels. Le candidat qui présente l’audit interne comme « contrôle des comptes en interne » ou comme un organe exécutant des contrôles montre qu’il n’a pas compris la place de la fonction.',
    commonErrors: [
      'Confondre audit interne et audit externe : l’un évalue les processus sur mandat interne, l’autre certifie les comptes dans un cadre légal.',
      'Croire que l’audit interne fait partie du contrôle interne : il l’évalue, il ne l’exécute pas.',
      'Présenter l’audit interne comme un organe de surveillance des salariés : c’est une fonction d’évaluation au service de l’organisation, pas une police des personnes.',
      'Énoncer une définition unique comme universelle : la mission exacte dépend de la charte d’audit de chaque organisation.',
    ],
    oralShort:
      'L’audit interne, c’est la fonction qui évalue, sur mandat interne, les processus, les risques et le dispositif de contrôle interne, et qui recommande des améliorations. L’audit externe certifie les comptes, cadre légal, opinion publique. Le contrôle interne, c’est le dispositif que l’organisation fait vivre au quotidien — l’audit interne l’inspecte, il n’en fait pas partie.',
    oralLong:
      'Par définition, l’audit interne est une fonction d’évaluation indépendante et objective : elle apprécie les processus, les risques et le dispositif de contrôle interne d’une organisation, et lui propose des améliorations. L’objectif : aider l’organisation à maîtriser ses risques et à atteindre ses objectifs — assurance pour la gouvernance, conseil pour les opérationnels. Concrètement, trois notions à distinguer proprement. L’audit interne face à l’audit externe : le commissaire aux comptes certifie les états financiers, dans un cadre légal et normé, avec une opinion publique destinée aux actionnaires et aux tiers ; l’auditeur interne est mandaté par l’entreprise, son périmètre va bien au-delà des comptes — processus opérationnels, conformité, systèmes d’information — et sa production est un rapport interne suivi d’actions. Un même cycle, les achats par exemple, peut être travaillé par les deux, mais l’externe cherche si les comptes sont sincères, l’interne si le processus maîtrise ses risques. L’audit interne face au contrôle interne : le contrôle interne, c’est l’ensemble des dispositifs que l’entreprise a mis en place et qu’elle fait tourner au quotidien — séparations de fonctions, validations, rapprochements ; l’audit interne n’est pas un rouage de ce dispositif : il vient l’évaluer périodiquement et rendre compte — l’inspecteur de l’équipement, pas l’équipement. Par exemple, sur mon stage fictif d’audit interne, une mission sur le cycle clients a évalué les contrôles d’ouverture de compte, de recouvrement et de provision : ces contrôles existaient — c’est le contrôle interne ; notre travail était de tester leur conception et leur fonctionnement, pas de les exécuter. En conclusion : l’externe certifie, l’interne évalue, le contrôle interne exécute — et la mission exacte de l’audit interne dépend de la charte de chaque organisation : rattachement et périmètre sont contextuels, pas universels.',
    followUp: 'Ton directeur te dit : « pas besoin d’auditeur externe, on a des auditeurs internes ». Qu’est-ce que tu lui réponds ?',
    grading: [
      'Audit interne défini comme fonction d’évaluation indépendante, mandat interne, périmètre processus et risques.',
      'Distinction nette avec l’audit externe : certification légale des comptes, opinion publique, destinataires différents.',
      'Distinction nette avec le contrôle interne : dispositif exécuté vs évaluateur périodique du dispositif.',
      'Caractère contextuel signalé (charte, rattachement, référentiels adoptés).',
    ],
  },
  {
    id: 'qt-134',
    job: 'audit-interne',
    category: 'risques-controles',
    difficulty: 3,
    skill: 'Construction d’une cartographie des risques',
    question: 'On te demande de construire la cartographie des risques du cycle achats. Tu fais quoi, étape par étape — et comment tu évites qu’elle devienne une liste morte dans un tiroir ?',
    expectedAnswer:
      'Démarche en sept étapes : 1) définir le périmètre et les objectifs du processus — qu’est-ce que le cycle achats doit garantir : exhaustivité et exactitude des commandes, sécurité des paiements, conformité — parce qu’un risque se définit par rapport à un objectif ; 2) identifier les risques : ateliers avec les opérationnels (acheteurs, comptables fournisseurs, demandeurs), entretiens individuels, revue des incidents passés — réclamations, fraudes, pertes —, et connaissance des risques types du cycle (commande non conforme au besoin, fournisseur fictif, double paiement, conflit d’intérêts) ; 3) formuler chaque risque en événement : cause + événement + conséquence — pas « risque fournisseur » mais « un fournisseur fictif est créé et payé, entraînant une perte financière » ; une formulation vague rend la cartographie inutilisable ; 4) évaluer la criticité : probabilité × impact sur des échelles qualitatives simples (1 à 4), validées avec les opérationnels pour l’appropriation ; 5) positionner sur la matrice et identifier les risques majeurs ; 6) recenser les contrôles existants par risque et évaluer la couverture : criticité résiduelle = ce qui reste après contrôles — c’est là que la cartographie devient un outil de pilotage ; 7) faire valider par les propriétaires du processus et planifier : les risques résiduels élevés alimentent le plan d’audit pluriannuel ou le plan d’actions. Pour éviter la liste morte : la cartographie est un document vivant — revue annuelle ou à chaque changement de processus, intégrée au comité des risques le cas échéant ; chaque risque majeur a un propriétaire nommé ; et elle sert à quelque chose de visible : planification des missions, décisions de renforcement de contrôles. Les échelles et le format dépendent des pratiques de l’entreprise — il n’existe pas de grille universelle, et les référentiels usuels de la profession servent de cadre d’inspiration, pas de moule obligatoire.',
    reasoning:
      'Vérifie la capacité méthodologique : la cartographie est l’outil le plus demandé et le plus mal exécuté. Les discriminants : la définition du risque par rapport aux objectifs du processus, la formulation cause-événement-conséquence (le test des formulations vagues), la criticité résiduelle après contrôles — et pas seulement brute —, et les parades contre la liste morte (propriétaires, revue, usage visible). Le candidat qui saute l’étape objectifs produit un inventaire sans lien avec le pilotage.',
    commonErrors: [
      'Lister des risques vagues (« risque informatique », « risque humain ») sans cause, événement ni conséquence : inexploitable pour choisir des contrôles.',
      'Évaluer une criticité brute sans recenser les contrôles existants : la cartographie ne mesure alors aucun résiduel et ne permet aucune priorisation.',
      'Construire la cartographie seul dans son coin : sans les opérationnels, ni l’exhaustivité ni l’appropriation ne suivent.',
      'La laisser immuable : sans revue périodique ni propriétaires, elle devient la liste morte du tiroir.',
    ],
    oralShort:
      'Sept étapes : définir les objectifs du processus — un risque se définit par rapport à un objectif ; identifier avec les opérationnels et l’historique des incidents ; formuler chaque risque cause, événement, conséquence — pas « risque fournisseur » ; évaluer probabilité fois impact ; mapper ; recenser les contrôles existants et dériver le résiduel ; faire valider et planifier. Et un document vivant : propriétaires, revue annuelle, usage dans le plan d’audit.',
    oralLong:
      'Par définition, une cartographie des risques est l’inventaire structuré des menaces qui pèsent sur les objectifs d’un processus, évaluées et hiérarchisées. L’objectif est de décider où concentrer les contrôles et les missions d’audit — donc elle part des objectifs, pas d’une liste générique. Concrètement, sur le cycle achats, je déroule sept étapes : définir le périmètre et les objectifs — exhaustivité des commandes, sécurité des paiements, conformité — parce qu’un risque n’existe que par rapport à un objectif ; identifier les risques, en croisant trois sources : ateliers et entretiens avec acheteurs, comptables fournisseurs et demandeurs ; incidents passés — doubles paiements, litiges, fraudes ; et les risques types connus du cycle ; formuler chaque risque en cause-événement-conséquence : pas « risque fournisseur », mais « un fournisseur fictif est créé puis payé : perte financière et fraude » ; évaluer la criticité, probabilité fois impact sur des échelles qualitatives simples, validées avec les opérationnels ; positionner sur la matrice ; recenser les contrôles existants risque par risque et évaluer la criticité résiduelle — c’est elle qui pilote ; enfin faire valider par le propriétaire du processus et traduire en plan : les résiduels majeurs alimentent le plan d’audit ou un plan de renforcement. Contre la liste morte : chaque risque majeur a un propriétaire nommé ; la cartographie est revue annuellement et à chaque évolution du processus ; et son usage est visible — planification des missions, comité des risques. Par exemple, sur mon stage fictif, la cartographie achats a fait émerger un résiduel élevé sur les modifications de coordonnées bancaires fournisseurs : deux missions d’audit en trois ans, un contrôle de rappel renforcé, et le risque est repassé en zone moyenne. En conclusion : objectifs, formulation précise, résiduel après contrôles, propriétaires et revue — une cartographie ne vaut que par l’usage qui en est fait ; les échelles et formats restent des choix internes, pas une grille universelle.',
    followUp: 'Tes opérationnels te sortent quarante risques tous notés criticité maximale. Comment tu fais redescendre la mayonnaise ?',
    grading: [
      'Risques définis par rapport aux objectifs du processus (étape objectifs explicitée).',
      'Formulation cause-événement-conséquence exigée, avec exemple concret (fournisseur fictif).',
      'Criticité résiduelle après recensement des contrôles, et traduction en plan d’audit ou d’actions.',
      'Parades anti « liste morte » : propriétaires, revue périodique, usage visible — caractère contextuel des échelles.',
    ],
  },
  {
    id: 'qt-135',
    job: 'audit-interne',
    category: 'procedures',
    difficulty: 3,
    skill: 'Rédaction d’un constat d’audit',
    question: 'Pendant ta mission, tu découvres que des rapprochements bancaires ne sont pas faits depuis trois mois. Rédige-moi ça : qu’est-ce qu’un constat d’audit bien documenté, tu y mets quoi ?',
    expectedAnswer:
      'Un constat bien documenté suit la structure critère, constat, cause, conséquence, recommandation — parfois résumée en cinq C. Sur le cas : Critère — la référence attendue : la procédure de trésorerie interne exige un rapprochement bancaire mensuel validé par le responsable comptable (je cite le document et sa version — un critère interne ; s’il n’existe pas de procédure écrite, je m’appuie sur une bonne pratique usuelle et je le signale, car le critère change alors de nature). Constat — le fait observé, daté, chiffré et prouvé : « les rapprochements des mois de X, Y et Z ne sont pas produits ; vérifié par absence de documents et confirmation du comptable le [date] ; échantillon : les trois comptes bancaires de l’entité » ; le constat est factuel — je décris ce que j’ai vu, rien d’autre. Cause — l’origine racine : départ du comptable traitant les rapprochements non remplacé, tâche reportée sans réaffectation formelle — à distinguer d’une cause symptomatique (« manque de temps »). Conséquence — l’impact : anomalies et éventuelles fraudes ou pertes non détectées pendant trois mois, soldes non fiabilisés pour la clôture, prélèvements erronés détectés tardivement — chiffré si possible, qualifié sinon. Recommandation — l’action sur la cause : réaffecter formellement la tâche et rattraper les trois mois avec revue du responsable — pas seulement « faire les rapprochements », qui traite le symptôme. Qualités transverses : chaque élément est sourcé dans les papiers de travail — le constat doit être reconstituable par un tiers ; le constat est validé avec l’audité avant le rapport final — pour l’exactitude factuelle, pas pour le diluer ; la rédaction reste impersonnelle — on évalue des processus, pas des personnes. La structure exacte et le niveau de détail dépendent du format de rapport de chaque direction d’audit — le fond, lui, est invariant.',
    reasoning:
      'Le cas concret (rapprochements en retard) oblige à incarner la structure cinq C. Le recruteur traque deux défauts : le constat sans critère — un fait sans référence attendue ne prouve aucune faiblesse — et la recommandation symptôme (« faites les rapprochements ») qui ignore la cause (réaffectation). Les marqueurs de rigueur : constat daté-chiffré-échantillonné, sourçage aux papiers de travail, validation avec l’audité, impersonnalité. La mention du caractère contextuel du format de rapport évite le dogmatisme.',
    commonErrors: [
      'Écrire un constat sans critère : un fait observé sans référence attendue ne démontre aucune faiblesse.',
      'Formuler une recommandation symptôme — « faire les rapprochements » — au lieu de traiter la cause (réaffectation de la tâche, replacement).',
      'Émettre des jugements de personne (« le comptable est négligent ») : le constat évalue un processus, pas un individu.',
      'Omettre la source et la date : un constat non reconstituable par un tiers ne résiste pas à la contestation.',
    ],
    oralShort:
      'Structure en cinq temps : critère — la procédure interne exige un rapprochement mensuel validé ; constat — fait observé, daté, échantillonné : trois mois non produits, vérifiés le telle date ; cause — le comptable parti n’a pas été remplacé, tâche non réaffectée ; conséquence — anomalies non détectées, soldes non fiabilisés ; recommandation — réaffecter et rattraper avec revue. Le tout sourcé et validé avec l’audité.',
    oralLong:
      'Par définition, un constat d’audit est l’unité de base du rapport : une faiblesse prouvée, expliquée et actionnable. L’objectif est qu’un lecteur qui n’était pas sur le terrain comprenne le problème, son origine, son impact — et que l’audité ne puisse pas contester les faits. Concrètement, la structure canonique s’applique au cas. Le critère : la référence attendue — la procédure de trésorerie interne exige un rapprochement bancaire mensuel validé par le responsable comptable ; je cite le document et sa version ; s’il n’existe pas de procédure écrite, je m’appuie sur une bonne pratique usuelle et je le signale, car le critère change alors de nature. Le constat : le fait — les rapprochements des trois derniers mois ne sont pas produits, vérifié par l’absence de documents et confirmation du service à date, sur les trois comptes bancaires de l’entité ; rien que ce que j’ai observé. La cause : l’origine racine — le comptable en charge est parti et la tâche n’a pas été formellement réaffectée ; « manque de temps » serait un symptôme, pas une cause. La conséquence : les anomalies, erreurs de prélèvement ou fraudes éventuelles restent indétectables pendant trois mois, et la fiabilité des soldes de clôture est affectée. La recommandation : elle traite la cause — réaffectation formelle de la tâche, rattrapage des trois mois avec revue du responsable. Deux exigences transverses : chaque élément renvoie à un papier de travail — le constat doit être reconstituable par un tiers — et le constat est validé en réunion avec l’audité avant le rapport, pour l’exactitude des faits, sans dilution du propos. En conclusion : critère, constat, cause, conséquence, recommandation — daté, chiffré, sourcé, impersonnel ; le format exact dépend de chaque direction d’audit, le fond, lui, ne varie pas.',
    followUp: 'L’audité conteste : « c’est une période de forte activité, votre critère est théorique ». Tu lui réponds quoi ?',
    grading: [
      'Structure cinq C complète appliquée au cas (critère, constat, cause, conséquence, recommandation).',
      'Constat factuel : daté, chiffré, échantillonné, sourcé dans les papiers de travail.',
      'Recommandation qui traite la cause (réaffectation, rattrapage) et non le symptôme.',
      'Validation avec l’audité et impersonnalité du propos ; caractère contextuel du format signalé.',
    ],
  },
  {
    id: 'qt-136',
    job: 'audit-interne',
    category: 'definitions',
    difficulty: 2,
    skill: 'Analyse cause / conséquence',
    question: 'Dans un constat d’audit, la cause et la conséquence — c’est quoi la différence, et pourquoi c’est fondamental de ne pas les mélanger ?',
    expectedAnswer:
      'La conséquence est l’impact de la faiblesse : ce que le risque peut coûter ou dégrader — pertes financières, comptes erronés, fraude non détectée, non-conformité sanctionnable. La cause est l’origine du problème : pourquoi la faiblesse existe — tâche non réaffectée, procédure muette sur un cas, paramétrage système erroné, contrôle non prévu. Les deux vivent à des endroits différents de la chaîne : la conséquence se situe en aval (ce qui arrive si rien ne change), la cause en amont (ce qui a produit l’écart entre le critère et le constat). Pourquoi ne pas les mélanger : parce que la recommandation s’attache à la cause, pas à la conséquence. Traiter la conséquence — par exemple détecter plus vite les anomalies — laisse le problème se reproduire ; traiter la cause — réaffecter la tâche, corriger le paramétrage — supprime la faiblesse à la racine. Une analyse qui confond les deux produit des recommandations décalées : former le personnel alors que le problème est un paramétrage, ajouter un contrôle alors que le problème est une séparation de fonctions absente. Outil usuel pour remonter à la cause racine : la série des pourquoi — demander successivement pourquoi jusqu’à atteindre une cause sur laquelle on peut agir ; c’est une pratique répandue, pas une méthode obligatoire, et dans les organisations complexes plusieurs causes se combinent — une faiblesse peut avoir deux origines distinctes, ce qui appelle deux recommandations. Test simple en rédaction : la cause répond à « pourquoi le constat existe-t-il ? », la conséquence répond à « que se passe-t-il si on ne fait rien ? ».',
    reasoning:
      'Vérifie la discipline analytique derrière la rédaction des constats. Le recruteur attend les deux définitions positionnées correctement sur la chaîne amont/aval, et le lien décisif : la recommandation vise la cause — d’où l’erreur structurelle des recommandations décalées (former, sensibiliser) quand la cause est organisationnelle ou technique. Les marqueurs de finesse : l’outil des pourquoi présenté comme pratique usuelle, et la possibilité de causes multiples combinées.',
    commonErrors: [
      'Remonter la conséquence dans la cause : « la cause est la perte financière » — non, la perte est l’impact, la cause est en amont.',
      'Formuler des recommandations qui traitent la conséquence (détecter plus vite) sans supprimer la cause : le problème se reproduit.',
      'S’arrêter à la première réponse (« manque de temps ») sans chercher la cause racine actionnable.',
      'Présenter la série des pourquoi comme une méthode obligatoire : c’est une pratique usuelle, et plusieurs causes peuvent se combiner.',
    ],
    oralShort:
      'La conséquence, c’est l’aval : ce que ça coûte ou dégrade si on ne fait rien. La cause, c’est l’amont : pourquoi l’écart entre le critère et le constat existe. Le lien fondamental : la recommandation s’attaque à la cause — traiter la conséquence laisse le problème se reproduire. Test : « pourquoi ça existe ? » = cause ; « que se passe-t-il si rien ne change ? » = conséquence.',
    oralLong:
      'Par définition, dans un constat d’audit, la cause et la conséquence se positionnent aux deux bouts de la chaîne de la faiblesse. L’objectif de leur distinction est simple : sans elle, la recommandation vise le mauvais endroit. Concrètement : la conséquence décrit l’aval — l’impact si rien ne change : pertes, comptes erronés, fraude indétectée, non-conformité ; elle nourrit l’évaluation du risque et donc la priorisation du constat. La cause décrit l’amont — l’origine de l’écart entre ce qui devrait être et ce qui est : tâche non réaffectée après un départ, procédure muette sur un cas de figure, paramétrage erroné, contrôle non prévu. Le lien décisif : la recommandation s’attache à la cause. Si je ne traite que la conséquence — par exemple détecter plus vite les anomalies — la faiblesse se reproduit chaque mois ; si je traite la cause — réaffecter la tâche, corriger le paramétrage — la faiblesse disparaît. Une confusion entre les deux produit les recommandations décalées qu’on voit trop souvent : former le personnel alors que le problème est technique, ajouter un contrôle supplémentaire alors que le problème est une séparation de fonctions absente. Pour remonter à la cause racine, l’outil usuel est la série des pourquoi — je demande pourquoi jusqu’à atteindre une cause sur laquelle on peut agir : les rapprochements ne sont pas faits, pourquoi ? personne en charge, pourquoi ? départ non remplacé, pourquoi ? pas de mécanisme de suppléance — voilà la cause racine : l’absence de mécanisme de remplacement. Par exemple, sur mon stage fictif, un constat de doubles paiements avait pour première cause apparente un défaut de vigilance et pour cause racine l’absence de contrôle de doublon dans l’outil : la recommandation a été un paramétrage, pas un rappel à l’ordre. En conclusion : la cause répond à « pourquoi ça existe », la conséquence à « que se passe-t-il si on ne fait rien » — et la recommandation vise toujours la cause, en acceptant qu’il puisse y en avoir plusieurs combinées.',
    followUp: 'Ton constat a trois causes possibles et tu n’arrives pas à trancher. Tu présentes quoi dans le rapport ?',
    grading: [
      'Deux définitions exactes et positionnées : conséquence en aval (impact), cause en amont (origine).',
      'Lien fondamental énoncé : la recommandation s’attaque à la cause, pas à la conséquence.',
      'Exemple de recommandation décalée cité (former/sensibiliser quand la cause est technique ou organisationnelle).',
      'Série des pourquoi présentée comme pratique usuelle ; causes multiples possibles.',
    ],
  },
  {
    id: 'qt-137',
    job: 'audit-interne',
    category: 'justification',
    difficulty: 3,
    skill: 'Formulation et proportionnement des recommandations',
    question: 'Sur un risque de doublon de paiement faible mais réel, ton coéquipier propose de refondre tout le processus fournisseur. Tu en penses quoi — c’est quoi une recommandation proportionnée ?',
    expectedAnswer:
      'Une recommandation proportionnée couvre la cause, réduit le risque à un niveau acceptable, et reste dimensionnée au risque résiduel et à la capacité de l’organisation — le remède ne doit pas coûter plus cher, en argent, en charge ou en risque de disruption, que la maladie. Sur le cas : avant de refondre le processus, arbitrer la gamme des réponses possibles : un contrôle automatisé de détection de doublon dans l’outil comptable, un paramétrage de blocage des IBAN en double, une revue mensuelle des paiements par fournisseur — la refonte complète se justifie seulement si l’évaluation du processus révèle d’autres faiblesses structurelles sur le même périmètre. Critères de proportionnalité : 1) l’adéquation à la cause — la recommandation traite l’origine identifiée, pas autre chose ; 2) le rapport effort / bénéfice : coût de mise en œuvre, charge permanente, délai — comparés à l’impact du risque (fréquence × perte unitaire) ; 3) la capacité réelle de l’audité : effectifs, budget, projets en cours — une recommandation infaisable est une recommandation morte, et c’est à l’auditeur d’en tenir compte, en le documentant ; 4) la subsidiarité : renforcer un contrôle existant avant d’en créer un nouveau, automatiser avant d’ajouter du manuel. Méthode pour y arriver : discuter la recommandation avec l’audité avant de la finaliser — co-construction des modalités, pas du principe : le risque et la cause ne se négocient pas, les moyens se discutent. Formulation : actionnable — qui fait quoi, pas « renforcer le contrôle des doublons » tout seul ; les verbes vagues (améliorer, sensibiliser, renforcer) sont le signe de recommandations non pensées. Le calibrage exact dépend de la maturité de l’organisation et de sa tolérance au risque — une direction peut accepter un résiduel qu’une autre refuse ; l’auditeur propose, la direction assume son choix par écrit le cas échéant.',
    reasoning:
      'Le cas testé (refonte totale pour un risque mineur) éprouve le sens du rapport risque/coût, rare chez les juniors enthousiastes. Le recruteur attend : la définition (couvrir la cause à un coût proportionné au résiduel), les critères (adéquation, effort/bénéfice, capacité, subsidiarité), la co-construction avec l’audité sur les moyens, et la formulation actionnable — les verbes vagues comme symptôme. La nuance finale — l’auditeur propose, la direction assume — clôt proprement la question des responsabilités.',
    commonErrors: [
      'Recommander la solution maximale par principe : une refonte disproportionnée à un risque mineur ne sera jamais mise en œuvre — recommandation morte.',
      'Formuler des recommandations vagues (« renforcer », « améliorer », « sensibiliser ») : ni actionnables ni vérifiables au suivi.',
      'Ignorer la capacité réelle de l’audité (effectifs, budget, projets) : la proportionnalité se juge aussi côté ressources.',
      'Négocier le risque lui-même avec l’audité : le risque et la cause ne se discutent pas, les moyens de le traiter, oui.',
    ],
    oralShort:
      'Une recommandation proportionnée couvre la cause, réduit le résiduel à un niveau acceptable, et reste dimensionnée à la capacité de l’organisation — le remède ne doit pas coûter plus cher que la maladie. Sur le cas : contrôle automatisé de doublon, paramétrage IBAN, revue mensuelle — pas une refonte. Et je co-construis les modalités avec l’audité : le risque ne se négocie pas, les moyens se discutent.',
    oralLong:
      'Par définition, une recommandation d’audit est proportionnée quand le remède est dimensionné au mal : elle couvre la cause, ramène le risque résiduel à un niveau acceptable, et son coût — argent, charge, disruption — reste inférieur au bénéfice attendu. L’objectif est d’obtenir une action réellement mise en œuvre : une recommandation disproportionnée ne sera jamais appliquée, et le risque restera entier. Concrètement, sur le cas du doublon de paiement : avant de répondre refonte, j’arbitre la gamme des réponses — un contrôle automatisé de détection de doublon, un paramétrage bloquant les IBAN en double, une revue mensuelle des paiements ; la refonte ne se justifie que si l’évaluation du processus montre d’autres faiblesses structurelles. Quatre critères me guident : l’adéquation à la cause — la recommandation traite l’origine constatée ; le rapport effort/bénéfice — fréquence et perte unitaire du risque comparées au coût de mise en œuvre et à la charge permanente ; la capacité de l’audité — effectifs, budget, projets en cours : une action infaisable est une action morte, et c’est à moi d’en tenir compte en le documentant ; la subsidiarité — renforcer l’existant avant de créer, automatiser avant d’ajouter du manuel. Méthode : je discute la recommandation avec l’audité avant de la finaliser — le principe et le risque ne se négocient pas, les modalités se construisent ensemble, et une recommandation co-construite a deux fois plus de chances d’être tenue. En formulation, j’exige l’actionnable : qui fait quoi — « paramétrer un blocage des IBAN en double dans l’outil comptable », pas « renforcer le contrôle des doublons » ; les verbes vagues sont le symptôme de recommandations non pensées. Par exemple, sur mon stage fictif, une recommandation de refonte du circuit de notes de frais a été ramenée à un contrôle par échantillon au-delà d’un seuil : coût marginal, risque résiduel accepté, action tenue en trois mois. En conclusion : couvrir la cause, proportionner au résiduel, co-construire les moyens, formuler l’action — et le niveau de risque acceptable appartient à la direction : l’auditeur propose, la direction assume son choix par écrit.',
    followUp: 'La direction refuse ta recommandation au motif que le coût dépasse le risque. Que peux-tu faire, en tant qu’auditeur interne ?',
    grading: [
      'Définition : couvrir la cause à un coût dimensionné au risque résiduel (remède inférieur à la maladie).',
      'Arbitrage du cas : gamme de solutions graduée avant la refonte (paramétrage, contrôle automatisé, revue).',
      'Critères cités : adéquation, effort/bénéfice, capacité de l’audité, subsidiarité.',
      'Co-construction des moyens, formulation actionnable, et responsabilité finale de la direction assumée.',
    ],
  },
  {
    id: 'qt-138',
    job: 'audit-interne',
    category: 'procedures',
    difficulty: 2,
    skill: 'Plan d’action : responsable, délai',
    question: 'Le rapport d’audit est diffusé, les recommandations sont acceptées. Après ? C’est quoi un plan d’action correct — tu y mets quoi exactement ?',
    expectedAnswer:
      'Le plan d’action transforme chaque recommandation en engagement managérial traçable. Contenu minimal par action : 1) un responsable unique nommé — une personne avec son nom, pas un service ni un « comité » : quand tout le monde est responsable, personne ne l’est ; le responsable peut déléguer l’exécution mais conserve la responsabilité de la livraison ; 2) une échéance datée — une date précise, pas « sous trois mois » ni « quand les ressources seront disponibles » : une échéance floue est une échéance reportée ; 3) la description de l’action — suffisamment concrète pour être vérifiable a posteriori : « paramétrer le blocage des IBAN en double » se vérifie, « améliorer la sécurité des paiements » non ; 4) le cas échéant, les ressources et prérequis — budget, intervention SI, formation — parce qu’une action non dotée est une action lente ; 5) un statut et une date de mise à jour — en cours, réalisé avec preuve, en retard, abandonné. Validation : le plan est validé par le responsable du périmètre audité — idéalement avec sa hiérarchie — et non par l’audit, qui formule mais n’engage pas : la force du plan vient de ce que la direction s’y engage. Structure possible : distinguer les actions correctives immédiates — rapides, symptômes compris — des actions structurelles — plus longues, avec jalons intermédiaires : un jalon sur une action à six mois évite de découvrir le retard au bout de six mois. Délai de constitution : la convention usuelle veut que le plan revienne quelques semaines après la diffusion du rapport — le délai exact dépend des pratiques de l’organisation. Et point de gouvernance : le plan d’action ne ferme pas la mission — il l’ouvre sur le suivi, avec relances périodiques et reporting au comité d’audit le cas échéant.',
    reasoning:
      'Question de maturité opérationnelle : le plan d’action est là où l’audit produit ou échoue. Le recruteur attend les trois attributs non négociables — responsable nommé (une personne), échéance datée, action vérifiable — plus les raffinements : validation par le management audité et non par l’audit, séparation immédiat/structurel avec jalons, statuts. Le fil conducteur : l’audit formule, la direction s’engage — c’est ce qui distingue un plan d’action d’une liste de vœux.',
    commonErrors: [
      'Nommer un service ou un comité comme responsable : sans personne identifiée, l’action n’a pas de propriétaire et dérive.',
      'Écrire « sous trois mois » ou « à moyen terme » au lieu d’une date : l’échéance floue se transforme en report permanent.',
      'Formuler des actions invérifiables (« améliorer », « renforcer ») : le suivi ne peut pas conclure à la réalisation.',
      'Croire que le plan d’action est validé par l’audit : l’audit formule et suit, l’engagement appartient au management audité.',
    ],
    oralShort:
      'Chaque action a un responsable nommé — une personne, pas un service —, une échéance datée — pas « sous trois mois » —, et une description vérifiable. Le plan est validé par le management audité, pas par l’audit : c’est lui qui s’engage. Je distingue les actions immédiates des structurelles avec jalons, et je mets des statuts à jour — parce que le plan ouvre le suivi, il ne ferme pas la mission.',
    oralLong:
      'Par définition, le plan d’action est la traduction managériale des recommandations : des engagements attribués, datés et vérifiables. L’objectif est simple : que le rapport ne reste pas un document, mais devienne des changements effectifs. Concrètement, chaque action comporte cinq attributs : un responsable unique nommé — une personne, jamais un service ni un comité : quand tout le monde est responsable, personne ne l’est ; le responsable peut déléguer l’exécution, il conserve la responsabilité de la livraison ; une échéance datée — une date précise, car « sous trois mois » est un report déguisé ; une description vérifiable — « paramétrer le blocage des IBAN en double » se contrôle a posteriori, « améliorer la sécurité des paiements » non ; les ressources et prérequis le cas échéant — budget, intervention SI, formation : une action non dotée est une action lente ; un statut et une date de mise à jour — en cours, réalisé avec preuve, en retard, abandonné. Le plan est validé par le responsable du périmètre audité et sa hiérarchie, pas par l’audit : l’audit formule et suit, l’engagement appartient au management — c’est ce qui donne au plan sa force. Sur la structure, je distingue les actions correctives immédiates, rapides, des actions structurelles, longues, avec jalons intermédiaires : découvrir au bout de six mois qu’une action n’a pas démarré est une perte de temps que deux jalons auraient évitée. Par exemple, sur mon stage fictif, le plan d’action d’une mission fournisseur comptait onze actions : quatre immédiates soldées en deux mois, six structurelles à jalons, une refusée et documentée comme risque accepté par la direction — et chaque ligne avait un nom, une date, un statut revu au comité trimestriel. En conclusion : un nom, une date, une action vérifiable, des statuts — validé par le management, jalonné pour le long : le plan d’action n’est pas la fin de la mission, c’est le début du suivi.',
    followUp: 'Une action est en retard de deux mois, le responsable invoque une priorité opérationnelle. À partir de quand tu escalades, et vers qui ?',
    grading: [
      'Trois attributs non négociables : responsable personnel nommé, échéance datée, action vérifiable.',
      'Validation par le management audité (l’audit formule et suit, n’engage pas).',
      'Structure immédiat / structurel avec jalons intermédiaires.',
      'Statuts et date de mise à jour ; plan qui ouvre la phase de suivi.',
    ],
  },
  {
    id: 'qt-139',
    job: 'audit-interne',
    category: 'relances',
    difficulty: 4,
    skill: 'Suivi des recommandations et vérification d’efficacité',
    question: 'Six mois après ta mission, la moitié des recommandations sont marquées « soldées » par les audités. Sur quoi tu vérifies, et c’est quoi la différence entre mise en œuvre et efficacité ?',
    expectedAnswer:
      'Deux vérifications distinctes. 1) La réalité de la mise en œuvre : une recommandation « soldée » se prouve, elle ne se déclare pas — je demande les preuves : capture du paramétrage pour une action système, procédure publiée et datée pour une action documentaire, échantillon de transactions contrôlées pour un contrôle manuel ; les statuts déclaratifs sans pièce sont des intentions. Le suivi s’appuie sur un registre : chaque recommandation avec statut (en cours, réalisé, en retard, abandonné avec justification), échéance, responsable, preuve exigible — et une périodicité de relance définie, avec escalade progressive : relance du responsable, puis de sa hiérarchie, puis comité d’audit ou direction en cas de blocage persistant ; les recommandations en retard répété et les refus assumés sont reportés avec la position écrite de la direction — un refus documenté est un risque accepté, ce qui est une décision de gouvernance, pas un échec d’audit. 2) L’efficacité : une action mise en œuvre n’est pas automatiquement efficace — le contrôle paramétré tourne-t-il vraiment, détecte-t-il ce qu’il doit détecter, le risque résiduel a-t-il baissé ? La vérification d’efficacité se fait après un délai suffisant d’exploitation — usuellement lors d’une mission de suivi dédiée ou du prochain cycle d’audit du périmètre — par re-test : rejouer le contrôle sur un échantillon, mesurer le taux d’anomalies résiduel, comparer à la situation constatée initialement. Une action « faite » mais inefficace se détecte là : procédure publiée jamais appliquée, contrôle automatisé jamais exécuté, formation sans effet. En synthèse : mise en œuvre = l’action existe ; efficacité = le risque a baissé ; la première se prouve par pièces, la seconde par re-test différé. Les modalités — périodicité, formats de registre, seuils de report — dépendent des pratiques de chaque direction d’audit et de son comité.',
    reasoning:
      'Question de niveau avancé sur le cycle complet : la moitié des recommandations soldées est le scénario classique du suivi déclaratif. Le recruteur attend l’exigence de preuve (le statut se prouve par pièces), l’escalade progressive avec le cas du refus documenté (risque accepté = décision de gouvernance), et surtout la distinction mise en œuvre / efficacité avec la notion de re-test différé. Le candidat qui confond « l’action est faite » et « le risque a baissé » n’a pas compris la finalité de l’audit.',
    commonErrors: [
      'Accepter les statuts déclaratifs sans pièces : « soldé » sans preuve est une intention, pas un fait.',
      'Confondre mise en œuvre et efficacité : une action réalisée peut laisser le risque inchangé (contrôle paramétré mais jamais exécuté).',
      'Vérifier l’efficacité immédiatement après la mise en œuvre : il faut un délai d’exploitation suffisant pour que le re-test soit significatif.',
      'Traiter le refus d’une recommandation comme un échec d’audit : un refus documenté et assumé par la direction est un risque accepté — décision de gouvernance à tracer.',
    ],
    oralShort:
      'D’abord la réalité : « soldée » se prouve — capture du paramétrage, procédure datée, échantillon contrôlé. Registre, statuts, relances, escalade si blocage — et un refus assumé se documente comme risque accepté. Ensuite l’efficacité, distincte de la mise en œuvre : re-test après un délai d’exploitation — rejouer le contrôle, mesurer le résiduel. Mise en œuvre : l’action existe. Efficacité : le risque a baissé.',
    oralLong:
      'Par définition, le suivi des recommandations comporte deux vérifications de nature différente : que les actions soient réellement mises en œuvre, et qu’elles soient efficaces. L’objectif est de fermer la boucle de la mission — un audit dont les constats persistent est un audit inutile. Concrètement, première vérification : la réalité de la mise en œuvre. Une recommandation soldée se prouve : je demande les pièces — capture du paramétrage pour une action système, procédure publiée et datée, échantillon de transactions visées pour un contrôle manuel ; le statut déclaratif sans preuve ne vaut pas soldé. Le registre de suivi porte chaque recommandation avec son statut — en cours, réalisé, en retard, abandonné avec justification —, son responsable, son échéance et la preuve exigible ; les relances suivent une escalade progressive : responsable, hiérarchie, puis comité d’audit en cas de blocage persistant ; et un refus assumé se documente comme risque accepté par la direction — c’est une décision de gouvernance à tracer, pas une faute de l’auditeur. Seconde vérification, distincte : l’efficacité. Une action réalisée n’est pas automatiquement efficace — le contrôle paramétré peut ne jamais s’exécuter, la procédure publiée ne jamais être appliquée, la formation ne rien changer. La vérification d’efficacité se fait après un délai suffisant d’exploitation, lors d’une mission de suivi dédiée ou du prochain cycle sur le périmètre : je rejoue le contrôle sur un échantillon, je mesure le taux d’anomalies résiduel, je compare à la situation initiale — c’est la seule façon de savoir si le risque a réellement baissé. Par exemple, sur mon stage fictif, une recommandation de contrôle de doublon IBAN était soldée avec capture d’écran — mais le re-test a montré que le contrôle ne tournait que sur un des trois modules de paiement : mi-réalisée donc mi-efficace, corrigée au cycle suivant. En conclusion : mise en œuvre — l’action existe, prouvée par pièces ; efficacité — le risque a baissé, prouvée par re-test différé ; et entre les deux, un registre vivant, des relances, une escalade — avec des modalités qui restent propres à chaque direction d’audit.',
    followUp: 'Le re-test montre que l’action a été déférée : le contrôle tournait, il a été désactivé six mois plus tard par une mise à jour système. Tu en fais quoi ?',
    grading: [
      'Exigence de preuve : statut soldé prouvé par pièces (paramétrage, procédure datée, échantillon).',
      'Distinction explicite mise en œuvre / efficacité, avec re-test après délai d’exploitation.',
      'Escalade progressive et traitement du refus assumé comme risque accepté documenté.',
      'Registre de suivi structuré (statuts, responsable, échéance, preuve exigible).',
    ],
  },
  {
    id: 'qt-140',
    job: 'audit-interne',
    category: 'procedures',
    difficulty: 4,
    skill: 'Hiérarchie des preuves : observé, déduit, à vérifier',
    question: 'Pendant tes travaux, l’audité t’affirme que les contrôles sont bien faits, et un registre Excel daté semble le confirmer — mais tu n’as rien vu toi-même. Observé, déduit, à vérifier : tu me définis les trois, et tu m’expliques ce que tu en fais ?',
    expectedAnswer:
      'Trois statuts de l’information en audit, hiérarchisés par la force de la preuve. Observé : ce que l’auditeur a constaté lui-même, directement et de manière vérifiable — il a rejoué le contrôle sur un échantillon, vu l’écran du paramétrage, obtenu le document original signé ; c’est la preuve la plus forte, elle se documente dans les papiers de travail avec sa source et sa date. Déduit : une conclusion que l’auditeur infère à partir d’observations — corrélation de faits, raisonnement ; exemple : les rapprochements sont produits chaque mois (copies datées observées) et les écritures de régularisation qui en découlent apparaissent toutes dans le journal (échantillon observé), donc je déduis que le rapprochement est traité, pas seulement produit ; le déduit est acceptable à condition d’être étayé par des observations suffisantes et de rester présenté comme une inférence. À vérifier : toute information reçue mais non prouvée — affirmations de l’audité, rumeurs, indices, anomalies suspectées ; par statut, ce n’est pas une preuve : tant qu’elle n’a pas été transformée en observé — par test, document, rejeu — ou écartée, elle ne peut figurer dans aucun constat. Traitement pratique : classer chaque information dès la collecte ; les à vérifier alimentent le programme de travail — je prévois les tests qui les transformeront ; les déduits sont tracés avec leurs prémisses ; les constats finaux ne s’appuient que sur de l’observé et du déduit étayé — jamais sur une affirmation non testée, même sincère et même répétée. Sur le cas de l’énoncé : l’affirmation de l’audité et le registre Excel sont du à vérifier ; je transforme en observé en rejouant un échantillon de contrôles, en vérifiant qui alimente le registre et avec quels droits, et en recoupant le registre avec des pièces sources ; si le rejeu confirme, la solidité du contrôle sera constatée sur mes tests, pas sur le registre — car un registre peut être alimenté manuellement a posteriori. Ce classement est une discipline de travail usuelle des auditeurs ; sa formalisation exacte dépend des pratiques de chaque équipe.',
    reasoning:
      'Question de rigueur probatoire rarement maîtrisée par les juniors, qui montent des constats sur des affirmations d’audités. Le recruteur attend la hiérarchie (l’observé domine, l’affirmation n’est rien), la transformation du à vérifier en observé par test, rejeu et recoupement, et le statut du déduit — acceptable si étayé. Le cas du registre Excel est le vrai discriminateur : une trace fournie peut être incomplète ou fabriquée, seul le rejeu indépendant fait foi. La règle finale — les constats ne s’appuient que sur de l’observé et du déduit étayé — structure toute la réponse.',
    commonErrors: [
      'Monter un constat sur l’affirmation d’un audité, même sincère et répétée : une affirmation non testée n’est pas une preuve.',
      'Prendre un document fourni (registre Excel) pour de l’observé : il devient preuve seulement après recoupement et rejeu indépendant.',
      'Présenter une déduction comme un fait sans en exposer les prémisses observées.',
      'Laisser des informations « à vérifier » sans les inscrire au programme de travail : elles s’évaporent en fin de mission.',
    ],
    oralShort:
      'Observé : ce que j’ai vu et prouvé moi-même — rejeu, document original, écran. Déduit : une inférence à partir d’observations, acceptable si étayée et présentée comme telle. À vérifier : toute information reçue non prouvée — affirmations, registre fourni ; ce n’est pas une preuve tant que je ne l’ai pas transformée en observé par test ou recoupement. Un constat ne s’appuie jamais sur du à vérifier.',
    oralLong:
      'Par définition, ces trois statuts hiérarchisent l’information par sa force probante. L’objectif est qu’aucun constat ne repose sur du non prouvé. Concrètement : l’observé, c’est ce que l’auditeur constate lui-même — il rejoue le contrôle sur un échantillon, il visionne le paramétrage, il obtient le document original : preuve maximale, sourcée et datée dans les papiers de travail. Le déduit, c’est une conclusion inférée d’observations : les rapprochements sont produits chaque mois — copies datées observées —, les écritures correspondantes apparaissent au journal — échantillon observé —, je déduis que le rapprochement est traité et pas seulement produit ; le déduit est recevable à condition d’exposer ses prémisses et de rester une inférence. Le à vérifier, c’est l’information reçue non prouvée : l’affirmation de l’audité, le registre Excel qu’il me tend, une anomalie suspectée — par statut, rien de tout cela n’est une preuve. Le traitement : je classe chaque information dès la collecte ; le à vérifier alimente le programme de travail — quels tests le transformeront en observé ; le déduit est tracé avec ses prémisses ; et mes constats ne s’appuient que sur de l’observé et du déduit étayé. Sur le cas : l’affirmation et le registre sont du à vérifier — je rejoue un échantillon de contrôles, je vérifie qui alimente le registre et avec quels droits, je recoupe le registre avec des pièces sources ; si le rejeu confirme, la solidité du contrôle sera constatée sur mes tests, pas sur le registre — parce qu’un registre Excel peut être alimenté manuellement après coup. Par exemple, sur mon stage fictif, un registre de revue des prix d’achat, très propre, s’est révélé renseigné d’un bloc la veille de notre visite : c’est le rejeu — trois fournisseurs tirés au sort, aucun document de revue à l’appui — qui a produit le constat. En conclusion : observé prouvé, déduit étayé, à vérifier transformé ou écarté — la hiérarchie des preuves est la colonne vertébrale de la mission ; sa formalisation exacte reste une affaire d’équipe.',
    followUp: 'Ton rejeu confirme les contrôles sur ton échantillon de vingt-cinq, mais le registre reste douteux. Tu conclus quoi, et avec quel niveau de certitude ?',
    grading: [
      'Trois statuts définis et hiérarchisés (observé = preuve directe ; déduit = inférence étayée ; à vérifier = non prouvé).',
      'Transformation du à vérifier en observé : rejeu, recoupement, vérification des sources et habilitations.',
      'Règle énoncée : les constats ne s’appuient que sur de l’observé et du déduit étayé.',
      'Cas du registre fourni traité comme preuve faible jusqu’au rejeu indépendant.',
    ],
  },
  {
    id: 'qt-141',
    job: 'audit-interne',
    category: 'limites',
    difficulty: 4,
    skill: 'Indépendance de l’audit interne et ses limites',
    question: 'L’indépendance de l’audit interne — on la brandit tout le temps. Concrètement ça veut dire quoi, comment tu la protèges, et surtout : quelles sont ses limites ?',
    expectedAnswer:
      'Deux composants distincts. L’indépendance organisationnelle : la fonction est placée pour ne pas être influencée par ceux qu’elle audite — rattachement usuel au comité d’audit ou à la direction générale, jamais à un opérationnel dont elle évalue les processus ; budget, plan d’audit et nominations protégés de l’arbitrage des audités ; accès direct à l’information et aux personnes. L’objectivité individuelle : l’auditeur n’a pas d’intérêt personnel dans le périmètre — il n’a pas conçu le processus qu’il audite, pas d’enjeu de carrière chez l’audité, rotation des périmètres ; elle se démontre par des travaux revus par un supérieur et des conclusions étayées. Protection au quotidien : refuser un mandat où je serais juge et partie — et le dire ; déclarer tout lien avec le périmètre avant la mission ; faire valider les constats sur les faits ; conserver la trace des pressions éventuelles ; tout ce qui se dit en réunion se retrouve dans les papiers de travail. Les limites, réelles : 1) l’auto-révision — petite équipe, l’auditeur audite des processus qu’il a conseillés ou construits : parade partielle par la rotation et la revue par les pairs, mais le risque ne s’élimine pas ; 2) la pression budgétaire et de planning — la fonction interne dépend des moyens que la direction lui alloue : celle qui fixe le budget peut être celle qu’on audite ; 3) l’accès — l’indépendance de droit ne garantit pas l’accès effectif à toutes les informations, surtout face à une direction réticente ; 4) le contournement par la direction — si les plus hauts responsables passent outre les contrôles, l’audit interne lui-même peut être contourné ou muselé ; c’est pourquoi le rattachement au comité d’audit est le rempart le plus solide, là où il existe — ce qui dépend de la gouvernance, notamment pour les sociétés cotées en France ; ailleurs, le rattachement à la direction générale reste le compromis usuel. L’indépendance ne veut pas dire l’isolement : coopérer avec les audités, écouter leurs explications, co-construire les recommandations ne compromet pas l’indépendance — compromettre les faits ou les conclusions, si.',
    reasoning:
      'Question double : le candidat doit savoir définir (organisationnelle vs individuelle), protéger (déclarations, revue, trace écrite) et surtout lucidement énoncer les limites — l’examinateur attend la maturité, pas la profession de foi. Les limites attendues : auto-révision en petite équipe, dépendance budgétaire, accès, contournement par la direction — avec le rattachement comité d’audit comme rempart contextuel. La nuance finale indépendance distincte de l’isolement évite la caricature du pôle adverse et clôt sur la coopération.',
    commonErrors: [
      'Réduire l’indépendance à une position dans l’organigramme : l’objectivité individuelle compte autant que le rattachement.',
      'Croire l’indépendance absolue : auto-révision, dépendance budgétaire et contournement par la direction sont des limites réelles et permanentes.',
      'Confondre indépendance et isolement : coopérer avec l’audité, écouter et co-construire n’altère pas l’indépendance — altérer les faits, si.',
      'Présenter le rattachement au comité d’audit comme universel : il dépend de la gouvernance, notamment cotée en France, et le rattachement direction générale reste un compromis usuel ailleurs.',
    ],
    oralShort:
      'Deux volets : l’organisationnel — rattachement protégé, comité d’audit ou direction générale, jamais à un audité — et l’individuel — pas d’intérêt dans le périmètre, rotation, revue des travaux. Je protège par la déclaration des liens, la trace écrite, le refus des missions juge et partie. Limites réelles : auto-révision en petite équipe, budget, accès, contournement par la direction. Et indépendance ne veut pas dire isolement.',
    oralLong:
      'Par définition, l’indépendance de l’audit interne a deux volets : une indépendance organisationnelle — la fonction est placée pour ne pas dépendre de ceux qu’elle évalue — et une objectivité individuelle — l’auditeur n’a pas d’intérêt personnel dans le périmètre. L’objectif est la crédibilité des conclusions : un audit influencé ne vaut rien. Concrètement, je la protège au quotidien : rattachement protégé — comité d’audit ou direction générale selon la gouvernance, jamais à un opérationnel audité ; budget et plan d’audit soustraits à l’arbitrage des audités ; déclaration de tout lien avec le périmètre avant mission ; refus assumé des situations de juge et partie ; revue des travaux par un supérieur ; et tout se trace par écrit — les pressions comme les décisions. Les limites, elles, sont réelles : l’auto-révision d’abord — dans une petite équipe, l’auditeur finit par auditer des processus qu’il a conseillés ou construits ; la rotation et la revue par les pairs atténuent, n’éliminent pas ; la dépendance budgétaire ensuite — la fonction vit des moyens que lui alloue la direction, qui peut être concernée par les constats ; l’accès ensuite — l’indépendance de droit ne garantit pas l’accès effectif à toutes les informations ; et le contournement par la direction — un dirigeant qui passe outre les contrôles peut aussi chercher à museler l’audit interne : c’est le risque le plus dur, et la raison d’être du rattachement comité d’audit là où il existe — ce qui dépend de la gouvernance : usuel pour les sociétés cotées en France, ailleurs le rattachement direction générale reste le compromis courant. Par exemple, sur mon stage fictif, l’équipe refusait d’intervenir en conseil sur les processus qu’elle serait amenée à auditer dans les deux ans — règle interne de prévention de l’auto-révision, tracée dans la charte. En conclusion : indépendance protégée par la gouvernance et la discipline personnelle, limites assumées et nommées — et une distinction finale : l’indépendance n’est pas l’isolement ; coopérer avec les audités et co-construire les recommandations ne compromet rien, tant que les faits et les conclusions restent intacts.',
    followUp: 'Ton responsable d’audit te confie la mission d’un processus que toi-même tu as aidé à concevoir deux ans plus tôt, faute de personnel. Tu fais quoi ?',
    grading: [
      'Deux volets distingués : organisationnel (rattachement, budget, plan) et individuel (objectivité, rotation, revue).',
      'Pratiques de protection citées : déclaration des liens, refus juge et partie, traçabilité écrite.',
      'Limites réelles énoncées : auto-révision, dépendance budgétaire, accès, contournement par la direction.',
      'Nuances : rattachement contextuel (comité d’audit vs direction générale) et indépendance distincte de l’isolement.',
    ],
  },
  {
    id: 'qt-142',
    job: 'audit-interne',
    category: 'procedures',
    difficulty: 5,
    skill: 'Déroulé complet d’une mission d’audit interne',
    question: 'Dernière question, et elle est large : raconte-moi une mission d’audit interne de bout en bout — de la demande initiale jusqu’au suivi des recommandations, avec ce que tu produis à chaque étape.',
    expectedAnswer:
      'Déroulé en phases, avec un livrable chacune. 1) Le cadrage : la mission vient du plan d’audit annuel ou d’une demande ponctuelle — je précise l’objectif, le périmètre, la période couverte, les interlocuteurs, les critères d’évaluation (procédures internes, référentiels, bonnes pratiques usuelles) ; livrable : la lettre de mission ou note de cadrage validée par la direction d’audit — sans objectifs clairs, la mission dérive. 2) La prise de connaissance : documentation du processus (narratif, schéma), entretiens d’ouverture avec les opérationnels, revue des incidents et indicateurs ; livrable : le mémorandum de compréhension du processus, validé par l’audité — il fixe la vision partagée de ce qui devrait être. 3) L’analyse des risques de la mission : à partir de la compréhension du processus, j’identifie les points où les objectifs du processus peuvent être mis en échec — c’est là que porteront les tests ; livrable : la grille des risques de la mission, hiérarchisés. 4) Le programme de travail : pour chaque risque retenu, les tests à mener, les échantillons, les preuves attendues ; livrable : le programme validé — il engage la collecte. 5) Le terrain : exécution des tests, collecte et classement des preuves (observé, déduit, à vérifier), papiers de travail référencés, points provisoires discutés au fil de l’eau avec l’audité — pas de découverte surprise en clôture ; livrable : les dossiers de travail, matière première des constats. 6) La restitution : réunion de clôture — constats présentés un par un, faits, causes, conséquences ; l’audité valide l’exactitude factuelle et réagit sur les recommandations ; livrable : le projet de rapport. 7) Le rapport final : synthèse pour la direction, avis sur le dispositif, constats structurés, recommandations, plan d’action convenu avec responsables et échéances ; c’est le produit qui engage le suivi. 8) Le suivi : registre de recommandations, preuves de mise en œuvre, re-test d’efficacité différé, reporting au comité d’audit. Transversal à toutes les phases : la relation avec l’audité — annoncer, écouter, valider les faits, co-construire — et la discipline documentaire : chaque affirmation du rapport doit pouvoir être reconstituée à partir des papiers de travail. Les intitulés et formats varient selon les directions d’audit — la logique des étapes, elle, se retrouve partout.',
    reasoning:
      'La question de synthèse terminale : le candidat doit enchaîner les phases avec leurs livrables — c’est le test de la vision globale, et l’oubli d’une phase (le plus souvent l’analyse des risques de la mission, ou la validation intermédiaire des constats) révèle une compréhension livresque. Les discriminants : le lien chaque phase vers livrable, la discussion des constats au fil de l’eau plutôt qu’en clôture surprise, la discipline des papiers de travail, et la reconnaissance que les formats varient alors que la logique est constante.',
    commonErrors: [
      'Sauter l’analyse des risques de la mission : les tests deviennent un inventaire sans priorité, la mission s’essouffle en dispersion.',
      'Découvrir les constats à l’audité en réunion de clôture sans validation intermédiaire : les faits se contestent, le rapport prend du retard.',
      'Décrire les phases sans jamais nommer les livrables : une mission sans documents ne se contrôle ni ne se suit.',
      'Terminer la mission au rapport : sans suivi des recommandations et re-test d’efficacité, la boucle n’est pas fermée.',
    ],
    oralShort:
      'Huit phases, chacune avec son livrable : cadrage — lettre de mission ; prise de connaissance — mémorandum validé ; analyse des risques — la grille qui cible les tests ; programme de travail ; terrain — papiers de travail et points discutés au fil de l’eau ; restitution — réunion de clôture et projet de rapport ; rapport final avec plan d’action ; puis le suivi — preuves et re-test d’efficacité. Transversal : la relation audité et la discipline documentaire.',
    oralLong:
      'Par définition, une mission d’audit interne est un processus structuré qui va d’un mandat à une boucle fermée d’amélioration. L’objectif : évaluer un périmètre contre des critères, en apporter la preuve, et déclencher des actions tenues. Concrètement, huit phases avec chacune un livrable. Le cadrage : objectifs, périmètre, période, interlocuteurs, critères d’évaluation — lettre de mission validée ; sans objectifs nets, la mission dérive. La prise de connaissance : narratif et schéma du processus, entretiens d’ouverture, incidents passés — mémorandum de compréhension validé par l’audité : il fixe ce qui devrait être. L’analyse des risques de la mission : où les objectifs du processus peuvent-ils être mis en échec — grille hiérarchisée : c’est elle qui cible les tests, et sauter cette phase transforme la mission en inventaire. Le programme de travail : pour chaque risque retenu, les tests, les échantillons, les preuves attendues. Le terrain : exécution, collecte classée — observé, déduit, à vérifier —, papiers de travail référencés, et points provisoires discutés au fil de l’eau : jamais de découverte surprise en clôture. La restitution : réunion de clôture, constats présentés avec faits, causes, conséquences ; l’audité valide l’exactitude factuelle et réagit sur les recommandations — projet de rapport. Le rapport final : synthèse pour la direction, avis sur le dispositif, constats, recommandations, plan d’action avec responsables et échéances. Enfin le suivi : registre, preuves de mise en œuvre, re-test d’efficacité après exploitation, reporting au comité. Par exemple, sur mon stage fictif, la mission fournisseurs a tenu huit semaines : deux de cadrage et prise de connaissance, une d’analyse des risques — six risques retenus sur dix-sept identifiés —, trois de terrain, une de restitution, une de rapport — et le suivi a couru sur l’année suivante. En conclusion : huit phases, huit livrables, une relation d’audité travaillée du début à la fin, et une discipline de documentation qui permet à un tiers de tout reconstituer — les intitulés changent d’une direction d’audit à l’autre, la logique ne change pas.',
    followUp: 'Ta direction te demande de compresser la mission : sauter la prise de connaissance, la cartographie suffit. Qu’est-ce que tu acceptes de sacrifier, et jamais ?',
    grading: [
      'Déroulé complet en phases avec le livrable de chacune (lettre, mémorandum, grille, programme, papiers, rapport, suivi).',
      'Analyse des risques de la mission présente comme phase de ciblage des tests.',
      'Validation des constats au fil de l’eau, réunion de clôture sans surprise.',
      'Boucle fermée : suivi des recommandations et re-test d’efficacité ; reconnaissance que les formats varient.',
    ],
  },
  {
    id: 'qt-143',
    job: 'controle-interne',
    category: 'definitions',
    difficulty: 1,
    skill: 'Définition et objectifs du contrôle interne',
    question: 'Comme tu postules sur du contrôle interne : définis-moi le contrôle interne avec tes mots, ses objectifs, et dis-moi à qui il appartient dans l’entreprise.',
    expectedAnswer:
      'Le contrôle interne est l’ensemble des dispositifs — organisation, procédures, contrôles dans les processus, systèmes d’information, comportements — mis en place par la direction et le personnel pour maîtriser les risques de l’entreprise : c’est un processus permanent, pas un état ni un département. Objectifs usuels, souvent regroupés en grandes familles : fiabilité de l’information (comptable et de gestion), protection du patrimoine (actifs, données), conformité aux lois et règlements, et efficacité des opérations — chaque entreprise hiérarchise ces objectifs selon ses risques. À qui il appartient : à la direction d’abord — c’est elle qui conçoit le dispositif, l’impose et en répond ; à tous les collaborateurs ensuite, parce que la plupart des contrôles sont exécutés par les opérationnels dans leurs processus — un comptable qui rapproche, un manager qui valide : le contrôle interne est distribué dans les métiers. Ce qu’il n’est pas : le département qui porte son nom — une fonction contrôle interne anime, documente, évalue, mais n’exécute qu’une fraction des contrôles ; ni l’audit interne, qui évalue périodiquement le dispositif sans en faire partie. En France, pour les sociétés cotées, le dispositif fait l’objet d’exigences de description et de reporting — cadre légal et recommandations du régulateur — et des référentiels de place servent de grille d’analyse ; pour les autres structures, le dispositif relève d’un choix de gouvernance proportionné aux risques : le périmètre exact varie donc avec le contexte, seul le principe — un dispositif maîtrisé par la direction — est constant.',
    reasoning:
      'Échauffement qui trie les candidats : trois confusions classiques y sont attendues — contrôle interne égal service, égal audit interne, égal optionnel. Le recruteur veut le processus permanent, les familles d’objectifs, et surtout l’appropriation : la direction en répond, les opérationnels l’exécutent, la fonction l’anime. Le signalement du cadre contextuel (exigences françaises pour les cotées, choix proportionné ailleurs) montre la culture générale attendue d’un candidat contrôle interne.',
    commonErrors: [
      'Réduire le contrôle interne au service qui en porte le nom : la fonction anime et évalue, la plupart des contrôles sont exécutés par les opérationnels.',
      'Le confondre avec l’audit interne : l’un est le dispositif évalué, l’autre l’évaluateur périodique.',
      'Le présenter comme un état à atteindre : c’est un processus permanent qui vit avec les risques et les processus.',
      'Ériger en universelles des exigences qui ne concernent que certaines structures (sociétés cotées en France) sans signaler le contexte.',
    ],
    oralShort:
      'Le contrôle interne, c’est l’ensemble des dispositifs mis en place par la direction et vécus par tous — organisation, procédures, contrôles dans les processus — pour maîtriser les risques. Objectifs : fiabilité de l’information, protection du patrimoine, conformité, efficacité des opérations. Il appartient à la direction et se vit dans les métiers ; la fonction contrôle interne l’anime, l’audit interne l’évalue.',
    oralLong:
      'Par définition, le contrôle interne est l’ensemble des mesures — organisationnelles, humaines, informatiques — qu’une direction met en place, et que le personnel applique au quotidien, pour maîtriser les risques de l’organisation. L’objectif : que l’entreprise atteigne ses objectifs sans surprises majeures. Concrètement, quatre familles d’objectifs structurent le dispositif : la fiabilité de l’information — comptable d’abord, mais aussi de gestion ; la protection du patrimoine — actifs physiques, financiers, données ; la conformité aux lois et règlements ; et l’efficacité des opérations — des processus qui atteignent leurs résultats sans gaspillage. Sur l’appropriation : le contrôle interne appartient à la direction — c’est elle qui le conçoit, l’impose et en répond devant les organes de gouvernance — et il se vit dans les métiers : la majorité des contrôles sont exécutés par des opérationnels dans leurs processus — le comptable qui rapproche, le manager qui valide, le préparateur qui contrôle avant envoi. Ce qu’il n’est pas : un service — la fonction contrôle interne anime, documente et évalue le dispositif, elle n’en exécute qu’une fraction ; et il n’est pas l’audit interne, qui vient l’évaluer périodiquement sans en faire partie. Par exemple, sur mon stage fictif, un contrôle aussi banal que la validation des commandes au-delà d’un seuil était exécuté par les acheteurs, tracé dans l’outil, supervisé par le responsable achats, évalué une fois par an : dispositif distribué, propriété managériale. En conclusion : un processus permanent, quatre familles d’objectifs, une propriété managériale et une exécution distribuée — avec un cadre qui varie : en France, les sociétés cotées ont des exigences de description et de reporting du dispositif, les autres structures dimensionnent selon leurs risques ; le principe est constant, le périmètre est contextuel.',
    followUp: 'Ton PDG te dit : « le contrôle interne, c’est ton truc, débrouille-toi ». Tu lui réponds quoi ?',
    grading: [
      'Définition : ensemble de dispositifs portés par la direction, processus permanent, pas un service ni un état.',
      'Familles d’objectifs citées : fiabilité, protection du patrimoine, conformité, efficacité.',
      'Appropriation claire : la direction en répond, les opérationnels l’exécutent, la fonction l’anime.',
      'Distinction avec l’audit interne et cadre contextuel (cotées en France vs autres structures) signalés.',
    ],
  },
  {
    id: 'qt-144',
    job: 'controle-interne',
    category: 'definitions',
    difficulty: 2,
    skill: 'Contrôles préventifs et détectifs',
    question: 'Contrôles préventifs, contrôles détectifs — donne-moi la différence avec des exemples concrets, et dis-moi pourquoi un dispositif a besoin des deux.',
    expectedAnswer:
      'La différence tient au moment d’exécution par rapport à l’événement. Contrôle préventif : il agit avant, pour que l’erreur ou la fraude ne se produise pas — exemples : validation à double signature au-delà d’un seuil, blocage systématique d’une commande fournisseur sans bon de commande, habilitations d’accès paramétrées par rôle, écran de saisie qui refuse les données incohérentes. Contrôle détectif : il agit après, pour identifier ce qui s’est déjà produit — exemples : rapprochement bancaire mensuel, revue des écarts entre inventaire théorique et physique, revue périodique des comptes utilisateurs, contrôle a posteriori des prix facturés par un superviseur. Pourquoi les deux : le préventif est la première ligne — il évite le coût de l’erreur — mais aucun dispositif préventif n’est parfait : contrôles contournés, exceptions, erreurs de paramétrage, collusion ; le détectif est le filet qui attrape ce qui a passé la première ligne — à condition d’avoir une fréquence compatible avec le risque : un contrôle détectif mensuel laisse passer trente jours d’anomalies. Dimensionnement : plus le risque est élevé et plus la détection doit être fréquente ; à l’inverse, tout préventif a un coût de friction — un dispositif entièrement bloquant paralyse l’opérationnel. On entend parfois une troisième famille, les contrôles correctifs — ils corrigent après détection, par exemple la reprise d’une écriture erronée : terminologie usuelle, la répartition exacte varie selon les référentiels internes. Bon réflexe de conception : raisonner par risque et associer une barrière préventive et un filet détectif sur les risques significatifs — la commande bloquée sans bon de commande (préventif) et la revue mensuelle des paiements sans bon de commande rattaché (détectif) protègent le même risque par les deux bouts.',
    reasoning:
      'Question de base du contrôle interne dont la qualité se juge aux exemples. Le recruteur veut la distinction temporelle (avant/après l’événement), des exemples de chaque famille — et l’argument de complémentarité : le préventif jamais parfait, le détectif conditionné par sa fréquence. Les marqueurs de maturité : la notion de coût de friction du préventif, l’appariement préventif et détectif sur un même risque, et le signalement que la taxonomie complète (correctifs) varie selon les pratiques internes.',
    commonErrors: [
      'Donner la définition sans exemples concrets : la typologie ne vaut rien si elle ne s’incarne pas dans des contrôles réels.',
      'Croire qu’un bon préventif dispense du détectif : contournements, exceptions et erreurs de paramétrage passent toujours.',
      'Ignorer la fréquence du détectif : un contrôle mensuel laisse un mois d’anomalies courir — à dimensionner selon le risque.',
      'Présenter la taxonomie comme fixe : la famille des correctifs et les intitulés varient selon les référentiels internes.',
    ],
    oralShort:
      'Préventif : avant l’événement, il empêche — double signature, blocage sans bon de commande, habilitations. Détectif : après, il identifie — rapprochement bancaire, revue d’écarts, revue des comptes. Les deux, parce qu’aucun préventif n’est parfait et que le détectif est le filet — à condition que sa fréquence soit dimensionnée au risque. Sur un risque significatif, j’apparie les deux.',
    oralLong:
      'Par définition, la distinction préventif/détectif est temporelle : le contrôle préventif agit avant l’événement, le détectif après. L’objectif d’un dispositif équilibré est d’éviter le maximum d’anomalies tout en attrapant celles qui passent. Concrètement, le préventif empêche : la double signature au-delà d’un seuil, le blocage d’une commande fournisseur sans bon de commande, les habilitations d’accès paramétrées par rôle, un écran de saisie qui refuse les données incohérentes. Le détectif identifie après coup : le rapprochement bancaire mensuel, la revue des écarts entre stocks théoriques et physiques, la revue périodique des comptes utilisateurs, le contrôle a posteriori des prix facturés. Pourquoi les deux : aucune barrière préventive n’est parfaite — elle est contournée, mal paramétrée, prise en défaut par la collusion, ou contournée pour gérer des exceptions légitimes ; le détectif est le filet qui attrape ce qui a passé la première ligne, et sa fréquence doit être cohérente avec le risque : détecter mensuellement, c’est accepter trente jours d’anomalies. Il y a aussi une économie du dispositif : le préventif a un coût de friction — tout bloquer paralyse l’opérationnel — et le détectif a un coût de relecture ; on dimensionne selon la criticité. Le bon réflexe de conception : sur un même risque significatif, appairer une barrière et un filet — la commande bloquée sans bon de commande côté préventif, la revue mensuelle des paiements sans bon de commande rattaché côté détectif. On entend parfois une troisième famille, les correctifs, qui réparent après détection — reprise d’écriture, régularisation : terminologie usuelle, la répartition exacte varie selon les référentiels internes. En conclusion : préventif avant, détectif après, correctif éventuellement — et un dispositif sérieux ne choisit pas entre la barrière et le filet, il superpose.',
    followUp: 'Ton DAF veut tout passer en bloquant — aucune transaction sans validation. Quels effets de bord tu lui signales ?',
    grading: [
      'Distinction temporelle nette : avant l’événement (préventif) / après (détectif).',
      'Exemples concrets des deux familles (double signature, blocages, rapprochement, revues).',
      'Argument de complémentarité : préventif imparfait, détectif conditionné par sa fréquence.',
      'Maturité : coût de friction, appariement par risque, taxonomie variable (correctifs) signalée.',
    ],
  },
  {
    id: 'qt-145',
    job: 'controle-interne',
    category: 'procedures',
    difficulty: 5,
    skill: 'Séparation des fonctions en environnement restreint',
    question: 'Le principe de séparation des fonctions, je connais : demander, approuver, enregistrer, détenir. Mais dans une équipe de quatre personnes sur tout le cycle achats-fournisseurs, c’est impossible. Tu fais quoi ?',
    expectedAnswer:
      'D’abord rappeler le principe et sa raison d’être : séparer les fonctions incompatibles — initier/demander, approuver, enregistrer, détenir l’actif, contrôler — pour qu’aucune personne ne puisse, seule, mener une opération de bout en bout et la dissimuler ; le risque visé est l’erreur non détectée et la fraude individuelle. En équipe restreinte, la séparation complète est impossible : on passe d’un modèle de conception par séparation à un modèle de contrôles compensatoires. Boîte à outils : 1) la supervision directe du dirigeant — en petite structure, il a la capacité de revoir personnellement les opérations sensibles : validation des fournisseurs nouveaux, revue mensuelle des paiements au-delà d’un seuil ; cette revue doit être documentée (paraphe, écran daté), sinon elle n’existe pas pour un évaluateur ; 2) les rapprochements systématiques — bancaire mensuel fait par quelqu’un d’autre que le payeur, revue des relevés par le dirigeant : la détection remplace la prévention manquante ; 3) les contrôles système — blocages paramétrés, journal des accès non modifiable, alertes automatiques : l’outil applique des séparations que l’effectif ne peut pas tenir ; 4) les seuils — double signature au-delà d’un montant : le risque élevé est couvert même si le flux courant reste fluide ; 5) la rotation et l’absence organisée — congés obligatoires, suppléance : une personne absente révèle les anomalies qu’elle dissimulait, usage classique de la lutte contre la fraude ; 6) la revue périodique des habilitations et du référentiel fournisseurs. Et deux exigences de gouvernance : documenter les risques résiduels acceptés — une petite équipe ne peut pas tout couvrir, ce choix doit être écrit et assumé par la direction, pas subi ; et la proportionnalité — le dispositif se dimensionne au volume et à la criticité : quatre personnes sur un flux de cent factures par mois n’ont pas besoin d’un dispositif industriel. La réponse complète : garder les séparations possibles sur les points les plus risqués, compenser le reste, documenter l’acceptation.',
    reasoning:
      'Question réaliste de haut niveau : la théorie de la séparation rencontre l’effectif réel. Le recruteur attend : le rappel de la logique (aucune personne seule de bout en bout), le passage aux contrôles compensatoires — supervision documentée, rapprochements, contrôles système, seuils, rotation et congés — et surtout l’exigence de gouvernance : le résiduel accepté doit être documenté et assumé. Le candidat qui répond « on embauche » ou « on fait avec » sans architecture montre son incapacité à dimensionner un dispositif.',
    commonErrors: [
      'Répondre qu’il faut embaucher : la question porte sur l’arbitrage, pas sur l’effectif — la direction a déjà choisi la taille de son équipe.',
      'Compenser par des contrôles oraux non tracés : une supervision non documentée n’existe pas au moment de l’évaluation ou de l’incident.',
      'Appliquer uniformément le principe et paralyser le flux : la séparation se concentre sur les fonctions les plus risquées, pas partout.',
      'Oublier la gouvernance du résiduel : ce que l’équipe ne peut pas couvrir doit être documenté comme risque accepté par la direction.',
    ],
    oralShort:
      'Je garde les séparations possibles sur les points les plus risqués, et je compense le reste : supervision documentée du dirigeant sur les opérations sensibles, rapprochements systématiques faits par un tiers, contrôles système — blocages, journal d’accès —, seuils de double signature, congés obligatoires avec suppléance. Et je documente le résiduel accepté : en petite équipe, on ne couvre pas tout, ça s’assume par écrit.',
    oralLong:
      'Par définition, la séparation des fonctions vise à ce qu’aucune personne ne puisse conduire une opération de bout en bout et la dissimuler : demander, approuver, enregistrer, détenir — et contrôler. L’objectif est de prévenir l’erreur non détectée et la fraude solitaire. En équipe de quatre, la séparation complète est impossible : je passe d’une conception par séparation à une conception par compensations, en six leviers. La supervision directe du dirigeant : en petite structure, il peut revoir personnellement les points sensibles — fournisseurs nouveaux, paiements au-delà d’un seuil — à condition de documenter chaque revue, sinon elle n’existe pas aux yeux d’un évaluateur. Les rapprochements systématiques : bancaire mensuel produit par quelqu’un d’autre que celui qui paie, relevés revus par le dirigeant — la détection remplace la prévention absente. Les contrôles système : blocages paramétrés, journal d’accès non modifiable, alertes automatiques — l’outil tient des séparations que l’effectif ne tient pas. Les seuils : double validation au-delà d’un montant — le risque élevé est couvert même si le flux courant reste fluide. La rotation et l’absence organisée : congés obligatoires, suppléance — une personne absente révèle ce qu’elle dissimulait, pratique classique. Et la revue périodique des habilitations et du référentiel fournisseurs. Deux exigences de gouvernance complètent : le risque résiduel accepté — ce que l’effectif ne peut pas couvrir — est documenté et assumé par la direction, pas subi ; et la proportionnalité guide tout : cent factures par mois n’appellent pas un dispositif industriel. Par exemple, sur mon stage fictif, une entité de cinq personnes tenait le cycle par trois mesures : revue mensuelle documentée des paiements par le directeur, rapprochement bancaire confié à l’assistante comptable, blocage des modifications d’IBAN sans contre-validation — résiduel documenté sur le reste. En conclusion : séparer ce qui est séparable sur les points critiques, compenser le reste par supervision tracée, détection, système, seuils et rotation, et assumer l’acceptation par écrit — c’est le dispositif honnête d’une petite équipe.',
    followUp: 'Le dirigeant qui devait superviser n’a pas revu les paiements depuis trois mois — personne ne lui a rien dit. Où est la vraie faiblesse ?',
    grading: [
      'Rappel du principe et du risque visé (aucune personne seule de bout en bout, fraude solitaire/erreur non détectée).',
      'Leviers de compensation cités : supervision documentée, rapprochements, contrôles système, seuils, rotation/congés.',
      'Priorisation des séparations sur les points les plus risqués plutôt qu’uniformisation.',
      'Gouvernance du résiduel : documenté et assumé par la direction ; proportionnalité au volume.',
    ],
  },
  {
    id: 'qt-146',
    job: 'controle-interne',
    category: 'procedures',
    difficulty: 3,
    skill: 'Délégations de pouvoirs et de signature',
    question: 'Délégation de pouvoirs, délégation de signature — pour beaucoup de monde c’est pareil. Explique-moi la différence, et ce qu’une matrice de délégations bien faite doit contenir.',
    expectedAnswer:
      'Deux natures différentes, souvent confondues. La délégation de pouvoirs transfère une compétence juridique : le délégué agit au nom et pour le compte de la société, engage sa responsabilité propre, et la délégation doit respecter les règles du droit des sociétés — en France, elle suppose une compétence appartenant au délégant (souvent le représentant légal), un objet déterminé, et des conditions de forme selon les cas ; elle répond à des besoins précis : répartition de la capacité d’engagement dans un groupe multi-entités, absorption de la charge du dirigeant. La délégation de signature est administrative et matérielle : le délégué signe physiquement au nom du délégant, ce qui allège la charge matérielle du dirigeant, mais la responsabilité reste au délégant — signer à la place n’est pas engager à sa place. Deuxième distinction utile : aucune des deux n’est une délégation de responsabilité — le dirigeant reste comptable de l’organisation qu’il met en place. Contenu d’une matrice de délégations bien faite : 1) par type d’opération (achats, ventes, engagements financiers, RH, juridique, banque), le ou les niveaux d’habilitation avec des seuils chiffrés — un même type d’opération peut avoir plusieurs niveaux ; 2) des personnes nommées — jamais « le service achats », mais des individus, avec leurs suppléants ; 3) les modalités : signature seule ou double au-delà d’un seuil, cumuls interdits — par exemple le demandeur d’un achat ne peut pas l’approuver ; 4) la date d’entrée en vigueur et la durée — les délégations se revoient : départ, mutation, réorganisation ; 5) l’interdiction de sub-délégation sans accord écrit. Qualités de gestion : cohérence avec les habilitations du SI — les seuils dans l’ERP doivent refléter la matrice, sinon l’une des deux sources ment ; revue périodique formelle (annuelle par exemple — pratique usuelle) ; communication aux intéressés et formation minimale. Le régime juridique exact dépend du pays et de la forme sociale — mes précisions juridiques valent pour le contexte français et restent à valider par un juriste : c’est un point de contexte à signaler, pas une règle que je décrète.',
    reasoning:
      'Question technique au carrefour du juridique et du contrôle interne. Le recruteur attend la distinction de fond — transfert de compétence engageant vs signature matérielle — et le contenu opérationnel de la matrice : types d’opérations, seuils chiffrés, personnes nommées avec suppléance, cumuls interdits, dates de validité, interdiction de sub-délégation. Les marqueurs de maturité : la cohérence matrice/habilitations SI et le renvoi final au contexte juridique avec prudence — le contrôle interne cadre, le juriste valide.',
    commonErrors: [
      'Confondre les deux régimes : la délégation de pouvoirs engage le délégué, la délégation de signature reste sous la responsabilité du délégant.',
      'Rédiger une matrice par services au lieu de personnes nommées : une habilitation sans individu identifié ne se contrôle pas.',
      'Oublier la cohérence avec les habilitations du SI : une matrice et un ERP aux seuils différents, l’une des deux sources est fausse.',
      'Présenter les règles juridiques comme universelles : le régime dépend de la forme sociale et du pays — à valider par un juriste.',
    ],
    oralShort:
      'La délégation de pouvoirs transfère une compétence juridique : le délégué engage la société et sa propre responsabilité. La délégation de signature est matérielle : on signe au nom du délégant, la responsabilité reste au délégant. La matrice : types d’opérations, seuils chiffrés, personnes nommées avec suppléants, cumuls interdits, dates de validité, interdiction de sub-délégation — cohérente avec les habilitations SI.',
    oralLong:
      'Par définition, les deux délégations n’ont pas la même nature : l’une transfère une compétence, l’autre un geste. L’objectif est de permettre à l’entreprise de fonctionner — un dirigeant ne peut pas tout signer — sans perdre la maîtrise de qui engage quoi. Concrètement, la délégation de pouvoirs transfère une compétence juridique : le délégué agit au nom de la société, engage celle-ci et engage sa propre responsabilité ; elle obéit au droit des sociétés — compétence appartenant au délégant, objet déterminé, conditions de forme selon les cas ; elle sert à répartir la capacité d’engagement, typiquement dans les groupes multi-entités. La délégation de signature, elle, est administrative : le délégué signe matériellement au nom du délégant — la société est engagée, mais la responsabilité de l’organisation reste au délégant ; signer à la place n’est pas engager à sa place. Et ni l’une ni l’autre ne délègue la responsabilité finale du dirigeant. Une matrice de délégations bien faite contient : par type d’opération — achats, ventes, engagements financiers, banque, RH — des niveaux d’habilitation avec seuils chiffrés ; des personnes nommées, jamais des services, avec suppléants ; les modalités — signature seule ou double au-delà d’un seuil, cumuls interdits : le demandeur d’un achat ne peut pas l’approuver ; la date d’entrée en vigueur et la durée, avec revue aux départs et réorganisations ; l’interdiction de sub-délégation sans accord écrit. Et une exigence de cohérence souvent négligée : les habilitations du système d’information doivent refléter la matrice — des seuils ERP différents des seuils délégués créent une fiction de contrôle. Par exemple, sur mon stage fictif, l’audit des délégations a révélé douze signatures actives pour des collaborateurs partis depuis plus d’un an : revue annuelle instituée, rapprochement matrice-habilitations systématique. En conclusion : compétence juridique d’un côté, geste matériel de l’autre, une matrice à personnes nommées, seuils, suppléance et revue — et sur le régime juridique exact, je reste prudent : il dépend de la forme sociale et du pays ; je cadre le contrôle interne, le juriste valide le droit.',
    followUp: 'Un directeur signe des contrats au nom de la société sans aucune délégation depuis deux ans. Quels risques, et comment tu traites le dossier ?',
    grading: [
      'Distinction de fond : transfert de compétence juridique (responsabilité du délégué) vs signature matérielle (responsabilité du délégant).',
      'Matrice détaillée : types d’opérations, seuils chiffrés, personnes nommées, suppléance, cumuls interdits, validité.',
      'Exigence de cohérence avec les habilitations SI et de revue périodique.',
      'Prudence juridique signalée : régime dépendant de la forme sociale et du pays, validation par un juriste.',
    ],
  },
  {
    id: 'qt-147',
    job: 'controle-interne',
    category: 'risques-controles',
    difficulty: 3,
    skill: 'Contrôles manuels vs automatisés',
    question: 'De plus en plus de contrôles passent dans les systèmes : bloquages automatiques, rapprochements automatiques… Contrôles manuels, contrôles automatisés — quelle différence, quels avantages et quels risques de chaque ?',
    expectedAnswer:
      'Contrôle manuel : son exécution dépend d’une personne — revue et visa, rapprochement fait à la main, contrôle physique ; qualités : souple, adapté aux cas d’espèce et au jugement (une transaction atypique se discute), souvent simple à mettre en place ; faiblesses : variable dans le temps — fatigue, absences, turnover, charge —, et sa preuve d’exécution doit être construite (paraphe, écran, registre), sinon le contrôle existe mais ne se démontre pas. Contrôle automatisé : une règle système l’exécute — blocage d’une commande sans bon de commande, rapprochement automatique de comptes, contrôle de complétude d’une interface ; qualités : homogène et répétitif — même traitement chaque fois —, traçable par construction (journal, log), rapide à grande échelle, insensible aux distractions ; faiblesses : il ne vaut que ce que vaut son paramétrage — une règle fausse s’applique à toutes les transactions, en silence et à grande échelle : l’erreur manuelle est ponctuelle, l’erreur automatisée est systémique ; il dépend des contrôles ITGC — accès, gestion des changements, exploitation : si n’importe qui peut modifier la règle ou désactiver le blocage, le contrôle automatisé est une fiction ; et il gère mal l’exception légitime — il faut prévoir le circuit de contournement encadré, sinon les utilisateurs inventent des contournements non encadrés. Arbitrage de conception : automatiser les contrôles répétitifs à forte volumétrie et à règle stable ; garder l’humain là où le jugement compte — transactions atypiques, signaux faibles, contexte ; et pour un contrôle automatisé, la fiabilité se prouve côté ITGC — c’est le point que les juniors oublient : on ne teste pas qu’une règle tourne, on teste aussi qui peut la changer. La répartition cible dépend du SI, du volume et de la maturité : c’est un arbitrage d’entreprise, pas une course à l’automatisation systématique.',
    reasoning:
      'Vérifie la lucidité face à la mode de l’automatisation. Le cœur attendu : les profils de risque inversés — le manuel est variable mais l’erreur est ponctuelle ; l’automatisé est constant mais l’erreur est systémique et silencieuse. La dépendance aux contrôles ITGC (qui peut changer la règle ?) est le discriminant de maturité, avec la gestion des exceptions légitimes et l’arbitrage final proportionné. Le candidat qui vend l’automatisation sans conditions échoue sur la question.',
    commonErrors: [
      'Croire l’automatisé plus fiable par nature : une règle mal conçue s’applique à tout, en silence — l’erreur devient systémique.',
      'Tester un contrôle automatisé sans vérifier les contrôles ITGC : si la règle est modifiable par quiconque, le contrôle est une fiction.',
      'Supprimer les contrôles manuels au motif qu’ils sont variables : le jugement humain reste irremplaçable sur les cas atypiques.',
      'Ne pas prévoir de circuit d’exception encadré : les utilisateurs contournent le blocage par des voies non maîtrisées.',
    ],
    oralShort:
      'Manuel : dépend d’une personne — souple, mais variable, et sa preuve d’exécution se construit. Automatisé : une règle système — homogène, traçable, mais il ne vaut que son paramétrage, et il dépend des contrôles IT : qui peut modifier la règle ? L’erreur manuelle est ponctuelle, l’erreur automatisée est systémique. J’automatise le répétitif, je garde l’humain pour le jugement.',
    oralLong:
      'Par définition, la différence tient à l’exécutant : une personne pour le contrôle manuel, une règle système pour l’automatisé. L’objectif du choix est de maximiser la fiabilité au coût juste. Concrètement, les deux profils s’opposent point par point. Le manuel est souple — il discute la transaction atypique, applique le jugement — mais variable : fatigue, absence, turnover, charge ; et sa preuve d’exécution doit être construite — paraphe, registre, écran daté — car un contrôle non démontrable n’existe pas pour un évaluateur. L’automatisé est homogène — même traitement chaque fois — traçable par construction, insensible à la distraction, rapide à grande échelle ; mais il ne vaut que ce que vaut son paramétrage : l’erreur manuelle est ponctuelle, l’erreur automatisée est systémique et silencieuse — une règle fausse s’applique à toutes les transactions ; il dépend des contrôles ITGC — accès, changements, exploitation : si la règle est modifiable par quiconque ou désactivable discrètement, le contrôle est une fiction ; et il gère mal l’exception légitime : sans circuit de contournement encadré, les utilisateurs inventent des palliatifs non maîtrisés — paiement par virement manuel pour contourner un blocage, par exemple. Mon arbitrage de conception : automatiser le répétitif, à forte volumétrie et règle stable ; garder l’humain là où le jugement compte — transactions atypiques, signaux faibles ; et pour chaque contrôle automatisé, prouver la fiabilité côté ITGC : on ne teste pas seulement que la règle tourne, on teste qui peut la changer. Par exemple, sur mon stage fictif, un blocage de commande sans bon de commande a été audité : la règle tournait, mais un profil administratif pouvait la désactiver sans trace — le contrôle n’était fiable qu’en apparence. En conclusion : le manuel variable mais ponctuel, l’automatisé constant mais systémique — la répartition cible dépend du SI, du volume et de la maturité de l’entreprise : c’est un arbitrage, pas une course à l’automatisation.',
    followUp: 'Ton contrôle automatique rejette chaque mois les mêmes quarante transactions légitimes, et les utilisateurs les corrigent à la main. C’est un bon contrôle, ça ?',
    grading: [
      'Différence définie par l’exécutant, avec qualités et faiblesses croisées des deux familles.',
      'Profils de risque opposés : erreur ponctuelle (manuel) vs erreur systémique silencieuse (automatisé).',
      'Dépendance aux contrôles ITGC explicitée (qui peut modifier ou désactiver la règle ?).',
      'Arbitrage de conception proportionné : automatiser le répétitif, garder le jugement humain, encadrer les exceptions.',
    ],
  },
  {
    id: 'qt-148',
    job: 'controle-interne',
    category: 'procedures',
    difficulty: 3,
    skill: 'Documentation d’un processus : narratif et flowchart',
    question: 'On te demande de documenter un processus — par exemple le cycle de la paie. Narratif, diagramme de flux… tu utilises quoi, tu y mets quoi, et à quoi ça sert vraiment ?',
    expectedAnswer:
      'Deux formats complémentaires, jamais exclusifs. Le narratif : un texte structuré qui décrit le processus pas à pas — déclencheur de départ, acteurs et rôles, séquence des étapes, documents et systèmes à chaque étape, points de contrôle (nature : préventif ou détectif, manuel ou automatisé, exécutant), exceptions et traitements ; il porte le détail, les règles, les cas particuliers. Le diagramme de flux (flowchart) : la représentation graphique avec des conventions usuelles — rectangle pour une étape, losange pour une décision, flèches pour le sens, symboles distincts pour documents et systèmes ; il porte la vision d’ensemble et fait voir ce que le texte cache : boucles, étapes sans responsable, décisions à issues non couvertes, trajets à risque sans contrôle. À quoi ça sert : support des tests — on teste le contrôle là où la carte le montre ; détection des faiblesses de conception — en traçant le flux, les séparations de fonctions manquantes sautent aux yeux ; formation et passation — un narratif bien fait réduit le coût de rotation ; base de la cartographie des risques — on identifie les risques aux points où le flux se dégrade ; communication avec l’auditeur — le document de référence qui évite de redécrire le processus à chaque mission. Méthode de production : partir de l’existant — observer, interviewer, pas décrire ce qui devrait être ; décrire le réel, puis signaler à part les écarts aux procédures officielles ; faire valider par le propriétaire du processus — une carte non validée est une carte contestable ; dater et versionner — un processus vit, sa documentation doit porter sa date et son propriétaire ; et maintenir : revue à chaque évolution significative, sinon la documentation devient un mensonge historique. Le niveau de détail et les conventions de symboles dépendent des pratiques internes — certaines entreprises imposent une charte, d’autres restent libres : c’est contextuel.',
    reasoning:
      'Vérifie la maîtrise d’un livrable fondamental du contrôle interne. Le recruteur attend : les deux formats avec leurs rôles distincts — le narratif porte le détail, le schéma fait apparaître les faiblesses de conception —, le contenu minimal (acteurs, étapes, contrôles qualifiés, exceptions), et les usages : tests, formation, passation, cartographie. Les marqueurs de maturité : décrire le réel plutôt que le théorique, validation par le propriétaire, datation et maintenance — une documentation non maintenue est un actif qui devient un mensonge.',
    commonErrors: [
      'Documenter le processus théorique (la procédure officielle) au lieu du réel observé : la carte ne correspond alors pas au terrain qu’on veut maîtriser.',
      'Choisir un seul format : sans schéma, les faiblesses de conception restent invisibles ; sans narratif, les règles et exceptions se perdent.',
      'Oublier de qualifier les contrôles dans la documentation (préventif/détectif, manuel/automatisé, qui exécute) : les tests ultérieurs n’ont plus de base.',
      'Ne ni dater ni faire valider : une documentation non maintenue et non possédée devient rapidement une fiction.',
    ],
    oralShort:
      'Deux formats complémentaires : le narratif — acteurs, étapes, documents, contrôles qualifiés, exceptions — et le diagramme de flux, qui fait voir les boucles, les responsabilités manquantes, les contrôles absents. Je documente le réel, pas le théorique, je fais valider par le propriétaire, je date et je maintiens. Ça sert aux tests, à la passation, à la cartographie des risques.',
    oralLong:
      'Par définition, documenter un processus, c’est produire la carte de référence d’un fonctionnement — pour le maîtriser, le tester et le transmettre. L’objectif est qu’un tiers comprenne le processus sans l’avoir vécu. Concrètement, j’utilise deux formats complémentaires. Le narratif décrit pas à pas : le déclencheur de départ, les acteurs et leurs rôles, la séquence des étapes, les documents et systèmes mobilisés à chaque étape, les points de contrôle — en qualifiant chacun : préventif ou détectif, manuel ou automatisé, qui exécute — et les exceptions avec leur traitement. Le diagramme de flux représente le même processus en conventions usuelles : rectangle pour une étape, losange pour une décision, flèches pour le sens, symboles distincts pour documents et systèmes ; il porte la vision d’ensemble et révèle ce que le texte cache : boucles, étapes sans responsable, décisions dont une issue n’est pas traitée, trajets à risque sans contrôle. Sur la paie, par exemple, le schéma fait immédiatement voir si la variable de paie est saisie, validée et payée par des personnes différentes — la séparation de fonctions se lit sur la carte plus vite que dans le texte. À quoi ça sert : support des tests d’audit et de contrôle ; détection des faiblesses de conception ; formation et passation — réduire le coût de la rotation ; base de la cartographie des risques ; et communication — le document de référence partagé. Ma méthode : décrire le réel observé — interview, suivi de pièces —, et signaler à part les écarts aux procédures officielles ; faire valider par le propriétaire du processus, car une carte non validée est contestable ; dater, versionner, maintenir à chaque évolution — une documentation non maintenue devient un mensonge historique. En conclusion : narratif pour le fond, schéma pour la forme, réel plutôt que théorique, propriétaire et date — le niveau de détail et les symboles exacts relèvent des pratiques internes, l’exigence de fond, elle, ne varie pas.',
    followUp: 'Le narratif paie fait douze pages et personne ne le lit. Comment tu le rends utilisable sans perdre le fond ?',
    grading: [
      'Deux formats complémentaires avec rôles distincts (narratif = détail/règles ; schéma = vision et faiblesses de conception).',
      'Contenu minimal décrit : acteurs, étapes, documents, contrôles qualifiés, exceptions.',
      'Usages cités : tests, conception, formation/passation, cartographie, communication.',
      'Méthode : réel observé, validation par le propriétaire, datation et maintenance ; conventions contextuelles.',
    ],
  },
  {
    id: 'qt-149',
    job: 'controle-interne',
    category: 'risques-controles',
    difficulty: 4,
    skill: 'Contrôle interne et prévention de la fraude',
    question: 'Mon banquier me dit que son contrôle interne l’a protégé de toute fraude depuis dix ans, et mon auditeur interne me dit l’inverse — que le contrôle interne n’élimine jamais le risque. Qui a raison, et comment le contrôle interne se positionne sur la fraude ?',
    expectedAnswer:
      'L’auditeur a raison, et le banquier a eu de la chance — ou un dispositif efficace, ce qui n’est pas la même chose qu’une garantie. Le cadre usuel de lecture est le triangle de la fraude — pression, opportunité, rationalisation : modèle pédagogique répandu, pas une loi ; le contrôle interne agit surtout sur l’opportunité : séparation des fonctions, contrôles, habilitations, supervision réduisent la capacité d’agir seul et augmentent la probabilité de détection — c’est son levier principal. Sur les deux autres sommets, il agit indirectement : la rationalisation est attaquée par le ton donné par la direction — exigence d’exemplarité, message clair que la fraude est recherchée et sanctionnée ; la pression lui échappe largement — difficultés financières personnelles, objectifs intenables relèvent du management au quotidien, pas des procédures. Limites structurelles face à la fraude : 1) la collusion — deux personnes qui coopèrent contournent la séparation des fonctions, qui postule l’isolement de l’acteur ; 2) le contournement par la direction — un dirigeant qui passe outre les contrôles dispose du pouvoir de neutraliser le dispositif ; c’est pourquoi l’audit interne et le comité existent, et pourquoi les dispositifs incluent des mécanismes de remontée — canaux d’alerte interne ; 3) le coût — le contrôle interne proportionné laisse des résiduels acceptés, et la fraude peut tomber dedans ; 4) le temps — les dispositifs vieillissent, les fraudeurs étudient les contrôles et s’adaptent. Apports concrets du contrôle interne à la détection : revues analytiques qui font ressortir les anomalies, contrôles détectifs fréquents, rotation et congés obligatoires, revue des écritures manuelles et des comptes dormants, procédure d’alerte protégée. En France, au-delà d’une certaine taille et sous conditions, les entreprises sont soumises à des obligations de dispositif anti-corruption — cartographie des risques, évaluation des tiers, alerte — cadre légal contextuel à connaître, dont le périmètre exact relève du juriste. En synthèse : le contrôle interne rend la fraude plus difficile, plus détectable et plus coûteuse pour le fraudeur — il ne la rend pas impossible ; le jour de l’incident, la question sera moins « pourquoi le contrôle a-t-il failli » que « le dispositif était-il proportionné au risque et correctement vécu ».',
    reasoning:
      'La question oppose croyance et lucidité : le candidat doit trancher pour l’auditeur sans ridiculiser le dispositif. Le recruteur attend : le triangle comme grille pédagogique (pas une loi), le levier principal — l’opportunité —, les limites structurelles — collusion, contournement par la direction, coût, usure — et les apports concrets de détection. La référence contextuelle au cadre anti-corruption français (taille et conditions) et la conclusion proportionnalité/incident montrent la culture et l’honnêteté du candidat.',
    commonErrors: [
      'Promettre la prévention totale : dix ans sans fraude prouvent au mieux une combinaison dispositif et chance — pas une garantie.',
      'Réduire l’action du contrôle interne à la seule opportunité : le ton de la direction attaque la rationalisation, la détection change le calcul du fraudeur.',
      'Ignorer la collusion et le contournement par la direction : les deux principaux modes de défaillance face à la fraude.',
      'Présenter le triangle de la fraude comme une vérité scientifique : c’est un modèle pédagogique usuel, utile mais simplificateur.',
    ],
    oralShort:
      'L’auditeur a raison. Le contrôle interne agit surtout sur l’opportunité — séparation des fonctions, habilitations, détection — il rend la fraude plus difficile et plus détectable, pas impossible. Limites : la collusion contourne la séparation, un dirigeant peut passer outre, et le dispositif reste proportionné au coût. Le triangle — pression, opportunité, rationalisation — est une grille, pas une loi.',
    oralLong:
      'Par définition, le contrôle interne face à la fraude fournit une assurance raisonnable, jamais une garantie : l’auditeur de l’énoncé a raison. L’objectif est de rendre la fraude plus difficile, plus vite détectée et plus risquée pour celui qui la tente. Concrètement, la grille de lecture usuelle est le triangle — pression, opportunité, rationalisation : un modèle pédagogique répandu, pas une loi. Le contrôle interne agit principalement sur l’opportunité : séparation des fonctions, habilitations, contrôles bloquants et détectifs, supervision — l’acteur seul ne peut plus conduire et dissimuler ; la probabilité de détection change le calcul du fraudeur. Sur la rationalisation, il agit via le ton de la direction : exigence d’exemplarité, message que la fraude est recherchée et sanctionnée, canal d’alerte protégé. Sur la pression, il est impuissant : difficultés personnelles et objectifs intenables relèvent du management au quotidien. Les limites structurelles : la collusion — deux personnes qui coopèrent neutralisent la séparation des fonctions, qui postule l’acteur isolé ; le contournement par la direction — le dirigeant qui passe outre les contrôles peut neutraliser le dispositif, d’où l’audit interne, le comité et les mécanismes de remontée d’alerte ; le coût — un dispositif proportionné accepte des résiduels ; l’usure — les fraudeurs étudient les contrôles et s’adaptent. Les apports de détection à renforcer : revues analytiques, fréquence des contrôles détectifs, rotation et congés obligatoires, revue des écritures manuelles et des comptes dormants, alerte interne protégée. En France, sous conditions de taille et d’activité, un cadre légal anti-corruption impose cartographie des risques, évaluation des tiers et dispositif d’alerte — périmètre exact à faire valider par le juriste, c’est un point de contexte. Par exemple, sur mon stage fictif, la revue trimestrielle des fournisseurs créés sans bon de commande est née d’un constat de fraude modeste : contrôle détectif ajouté, non parce qu’il empêche toute fraude, mais parce qu’il en augmente le coût de dissimulation. En conclusion : plus difficile, plus détectable, plus chère — pas impossible ; et le jour de l’incident, la vraie question est la proportionnalité et la vitalité du dispositif, pas l’absence de fraude comme preuve.',
    followUp: 'Une fraude de 200 000 € éclate malgré un dispositif solide. La direction veut des explications et un coupable. Tu réponds comment sur le rôle du contrôle interne ?',
    grading: [
      'Position claire : assurance raisonnable, pas garantie — l’auditeur a raison sans que le dispositif soit inutile.',
      'Triangle présenté comme grille pédagogique ; levier principal = opportunité, plus action indirecte sur la rationalisation (ton de la direction).',
      'Limites structurelles citées : collusion, contournement par la direction, proportionnalité/coût, usure.',
      'Apports de détection concrets et cadre anti-corruption français signalé comme contextuel.',
    ],
  },
  {
    id: 'qt-150',
    job: 'controle-interne',
    category: 'anomalies',
    difficulty: 4,
    skill: 'Tests de conception et d’efficacité opérationnelle',
    question: 'Tu testes un contrôle : la documentation existe, le contrôle paraît bien conçu. Maintenant tu tires vingt-cinq transactions au hasard et tu trouves trois exceptions. Explique-moi la différence entre test de conception et test d’efficacité opérationnelle — et ce que tu fais de tes trois exceptions.',
    expectedAnswer:
      'Deux tests distincts et séquentiels. Test de conception : vérifier que le contrôle, tel que décrit, atténue réellement le risque qu’il vise — que l’architecture est bonne : qui exécute, à quel moment, avec quelle information, le risque visé est-il couvert, y a-t-il contradiction avec une autre règle ; méthodes : lecture de la documentation, entretien avec l’exécutant, walkthrough — suivre une transaction de bout en bout. Il répond à la question : « le contrôle est-il bien pensé ? » Un contrôle mal conçu n’a pas besoin d’être testé plus avant : on passe directement à la recommandation de refonte. Test d’efficacité opérationnelle : vérifier que le contrôle fonctionne comme conçu, de manière continue et homogène sur la période — il répond à « le contrôle vit-il vraiment ? » ; méthodes : échantillon de transactions, rejeu du contrôle, examen des preuves d’exécution, revue du paramétrage pour les contrôles automatisés. La séquence est logique : inutile de tester l’efficacité d’un contrôle dont la conception est mauvaise. Sur les trois exceptions d’un échantillon de vingt-cinq : 1) qualifier : exception réelle — le contrôle n’a pas fonctionné — ou exception apparente — preuve manquante mais contrôle effectivement fait ; la distinction est majeure, une preuve manquante est une faiblesse de documentation, pas d’exécution ; 2) analyser la nature : systémique — même cause chaque fois : un type de transaction hors périmètre du contrôle, une étape oubliée chaque fin de mois — ou ponctuelle : absence isolée, surcharge ponctuelle ; 3) si nécessaire, étendre l’échantillon : trois exceptions sur vingt-cinq laissent une forte incertitude sur le taux réel ; l’extension précise la mesure ; 4) conclure sur la déficience : significative ou non, en croisant l’impact potentiel des exceptions (montants, risques) et leur fréquence ; une déficience significative change la conclusion du rapport et appelle une action prioritaire ; 5) retester après remédiation. Le calibrage des échantillons et les seuils de déficience significative dépendent des pratiques de l’organisation et du référentiel suivi — je présente la démarche, l’entreprise fixe les barres.',
    reasoning:
      'Question de méthodologie de test, au cœur du contrôle interne et de l’audit. Le recruteur attend : la distinction conceptuelle (bien pensé / fonctionne réellement), la séquence — conception avant efficacité —, et le traitement rigoureux des exceptions : qualifier (exception réelle vs preuve manquante), analyser (systémique vs ponctuelle), étendre l’échantillon, conclure en déficience significative ou non. La nuance preuve manquante distincte de contrôle non fait est le vrai discriminant d’expérience, avec le caractère contextuel des seuils.',
    commonErrors: [
      'Tester l’efficacité d’un contrôle mal conçu : gaspillage de travaux — la conception se valide d’abord, par documentation et walkthrough.',
      'Traiter toute exception comme une défaillance du contrôle : une preuve d’exécution manquante est une faiblesse de documentation, distincte d’une absence d’exécution.',
      'Conclure sur un échantillon entaché d’exceptions sans l’étendre ni analyser la nature (systémique ou ponctuelle).',
      'Énoncer un seuil unique de déficience significative comme universel : les barres dépendent des pratiques et du référentiel de l’organisation.',
    ],
    oralShort:
      'Test de conception : le contrôle est-il bien pensé pour le risque visé — documentation, entretien, walkthrough. Test d’efficacité opérationnelle : fonctionne-t-il réellement, en continu — échantillon, rejeu, preuves. Sur mes trois exceptions : je qualifie — réelle ou preuve manquante —, j’analyse — systémique ou ponctuelle —, j’étends l’échantillon, et je conclus en déficience significative ou non.',
    oralLong:
      'Par définition, deux tests répondent à deux questions différentes : le contrôle est-il bien pensé, et fonctionne-t-il vraiment. L’objectif est de ne pas engager des travaux lourds sur un contrôle mal architecturé. Concrètement, le test de conception vérifie l’adéquation du contrôle au risque : qui exécute, à quel moment, avec quelle information, le risque visé est-il couvert, y a-t-il contradiction avec une autre règle ; les méthodes sont la lecture de la documentation, l’entretien avec l’exécutant et le walkthrough — suivre une transaction de bout en bout. Le test d’efficacité opérationnelle vérifie que le contrôle fonctionne comme conçu, de manière continue sur la période : échantillon de transactions, rejeu du contrôle, examen des preuves d’exécution, revue du paramétrage pour un contrôle automatisé. La séquence est logique : si la conception est mauvaise, l’efficacité n’a pas de sens — on passe directement à la recommandation de refonte. Sur les trois exceptions d’un échantillon de vingt-cinq, je déroule cinq étapes : qualifier — exception réelle, le contrôle n’a pas fonctionné, ou exception apparente, la preuve manque mais le contrôle a été fait : la distinction est majeure, une preuve manquante est une faiblesse de documentation, pas d’exécution ; analyser la nature — systémique, même cause à chaque fois : un type de transaction hors périmètre, une étape sautée en fin de mois chargé — ou ponctuelle, absence isolée ; étendre l’échantillon si nécessaire — trois exceptions sur vingt-cinq laissent une forte incertitude sur le taux réel, l’extension précise la mesure ; conclure sur la déficience — significative ou non, en croisant l’impact potentiel et la fréquence, une déficience significative change la conclusion du rapport et appelle une action prioritaire ; retester après remédiation. Par exemple, sur mon stage fictif, trois exceptions de visa sur vingt-cinq se sont révélées être les trois mêmes jours de fin de mois : cause systémique — surcharge — devenue recommandation de réorganisation, pas trois fautes individuelles. En conclusion : conception d’abord, efficacité ensuite ; exceptions qualifiées, analysées, échantillon étendu, conclusion calibrée — et les seuils exacts restent ceux de l’organisation, pas les miens.',
    followUp: 'Les trois exceptions portent sur les trois plus gros montants de l’échantillon. Ça change quoi dans ta conclusion ?',
    grading: [
      'Distinction conceptuelle nette : conception (bien pensé pour le risque) vs efficacité opérationnelle (fonctionne en continu).',
      'Séquence logique énoncée : conception validée avant tout test d’efficacité.',
      'Traitement des exceptions : qualification (réelle vs preuve manquante), nature (systémique vs ponctuelle), extension d’échantillon.',
      'Conclusion calibrée en déficience significative ou non ; caractère contextuel des seuils signalé.',
    ],
  },
  {
    id: 'qt-151',
    job: 'controle-interne',
    category: 'procedures',
    difficulty: 3,
    skill: 'Indicateurs de pilotage du contrôle interne',
    question: 'Le dispositif de contrôle interne, lui-même, est-ce qu’on le pilote ? Quels indicateurs tu mets en place pour savoir si ton contrôle interne fonctionne — et attention aux pièges de lecture ?',
    expectedAnswer:
      'Oui — un dispositif qui n’est pas mesuré se dégrade en silence. Familles d’indicateurs usuels : 1) couverture et fraîcheur : part des processus critiques documentés et revus à jour, ancienneté des documentations, taux de réalisation du programme de contrôles prévus — un programme réalisé à 60 % est un dispositif à trous ; 2) exécution des contrôles : taux de complétude des contrôles périodiques (rapprochements produits dans les délais), délai moyen de production — un rapprochement bancaire qui passe de 5 jours à 25 jours de délai se dégrade avant de disparaître ; 3) résultats des contrôles : nombre ou taux d’anomalies détectées par contrôle, taux d’exceptions des échantillons, nombre d’incidents (erreurs, pertes, fraudes) remontés ; 4) remédiation : taux de fermeture des actions correctives dans les délais, ancienneté des déficiences ouvertes, actions en retard répété ; 5) environnement : taux de complétude des revues d’habilitations, ancienneté des délégations non revues, résultats d’enquêtes de culture de contrôle le cas échéant. Les pièges de lecture, au moins quatre : 1) la hausse des incidents détectés n’est pas une dégradation — c’est souvent le signe que la détection fonctionne ; l’inverse — zéro incident — mérite l’enquête plutôt que la satisfaction ; 2) le taux d’anomalies dépend de la sensibilité du contrôle : un contrôle renforcé détecte plus, sans que le processus ait empiré ; 3) les indicateurs de volume (nombre de contrôles faits) mesurent l’activité, pas l’efficacité — mieux vaut peu de contrôles bien placés que beaucoup mal placés ; 4) un indicateur devient un objectif — d’où la règle de ne jamais juger une équipe sur un seul chiffre et de lire les indicateurs en panel et en tendance. Gouvernance : reporting périodique au comité (audit ou risques selon la structure), cible et seuil par indicateur, et revue annuelle du panel lui-même — un indicateur que personne ne commente depuis un an se retire ou se justifie. La sélection exacte dépend des risques de l’entreprise : c’est un choix interne, pas un standard universel.',
    reasoning:
      'Retourne la question du pilotage vers le dispositif lui-même — un angle que beaucoup de candidats n’ont jamais considéré. Le recruteur attend les familles d’indicateurs (couverture, exécution, résultats, remédiation, environnement) et surtout les pièges de lecture : la hausse des détections comme bonne nouvelle, la sensibilité du contrôle, la confusion activité/efficacité, la performativité des indicateurs. La gouvernance — panel, comité, revue annuelle du panel — et le caractère contextuel de la sélection clôt la réponse de manière mature.',
    commonErrors: [
      'Interpréter la hausse des incidents détectés comme une dégradation : c’est le plus souvent la preuve que la détection fonctionne.',
      'Confondre indicateurs d’activité (nombre de contrôles exécutés) et indicateurs d’efficacité (anomalies, remédiation, délais).',
      'Juger sur un indicateur unique : un panel en tendance protège des effets de bord et de la manipulation inconsciente.',
      'Laisser le panel immuable : un indicateur que plus personne ne commente doit être retiré ou justifié.',
    ],
    oralShort:
      'Oui, on le pilote : couverture et fraîcheur des processus documentés, complétude des contrôles périodiques et leurs délais, taux d’anomalies et d’exceptions, remédiation dans les délais, revue des habilitations. Pièges : plus d’incidents détectés = souvent une meilleure détection ; zéro incident mérite enquête ; et les volumes ne mesurent pas l’efficacité — je lis en panel et en tendance, devant le comité.',
    oralLong:
      'Par définition, piloter le contrôle interne, c’est mesurer le dispositif qui mesure tout le reste — sans quoi il se dégrade en silence. L’objectif est de détecter l’érosion avant l’incident. Concrètement, cinq familles d’indicateurs. La couverture et la fraîcheur : part des processus critiques documentés et revus, ancienneté des documentations, taux de réalisation du programme de contrôles — un programme réalisé à 60 % est un dispositif à trous. L’exécution : complétude des contrôles périodiques dans leurs délais — rapprochements produits, revues faites — et délai moyen : un rapprochement bancaire qui passe de cinq à vingt-cinq jours de délai se dégrade avant de disparaître. Les résultats : nombre et taux d’anomalies détectées par contrôle, taux d’exceptions dans les échantillons, incidents remontés — erreurs, pertes, fraudes. La remédiation : taux de fermeture des actions correctives dans les délais, ancienneté des déficiences ouvertes. L’environnement : complétude des revues d’habilitations, ancienneté des délégations non revues, et, le cas échéant, des mesures de culture de contrôle. Les pièges de lecture sont au moins quatre : la hausse des incidents détectés n’est pas une dégradation — elle signale le plus souvent que la détection fonctionne, et zéro incident mérite l’enquête plutôt que la satisfaction ; le taux d’anomalies dépend de la sensibilité du contrôle — un contrôle renforcé détecte plus sans que le processus ait empiré ; les indicateurs de volume mesurent l’activité, pas l’efficacité — mieux vaut peu de contrôles bien placés que beaucoup mal placés ; et tout indicateur devient un objectif — d’où la lecture en panel et en tendance, jamais sur un chiffre unique. Gouvernance : reporting périodique au comité, cible et seuil par indicateur, revue annuelle du panel — un indicateur que personne ne commente depuis un an se retire ou se justifie. Par exemple, sur mon stage fictif, le délai moyen des rapprochements bancaires était suivi en tendance : trois mois de dérive avaient précédé l’arrêt complet du rapprochement d’une entité — l’indicateur avait vu venir l’incident. En conclusion : couverture, exécution, résultats, remédiation, environnement — lus en panel, en tendance, avec leurs pièges en tête ; et le panel exact reste un choix interne guidé par les risques de l’entreprise, pas un standard universel.',
    followUp: 'Tes indicateurs sont tous au vert depuis six mois et une fraude vient d’éclater chez un concurrent. Que vaut ton panel, et que lui ajoutes-tu ?',
    grading: [
      'Familles d’indicateurs citées : couverture/fraîcheur, exécution/délais, résultats/anomalies, remédiation, environnement.',
      'Pièges de lecture énoncés : hausse des détections = bonne nouvelle possible, sensibilité du contrôle, activité différente de efficacité.',
      'Lecture en panel et en tendance, jamais un chiffre unique (indicateur devenant objectif).',
      'Gouvernance : comité, cibles et seuils, revue annuelle du panel ; sélection contextuelle.',
    ],
  },
  {
    id: 'qt-152',
    job: 'controle-interne',
    category: 'pieges',
    difficulty: 3,
    skill: 'Limites du contrôle interne',
    question: 'Question piège pour finir : avec un contrôle interne irréprochable, une entreprise est-elle protégée — zéro fraude, zéro erreur, zéro perte ? Tu me réponds quoi, et avec quel niveau de certitude ?',
    expectedAnswer:
      'Non — et la question est piège parce qu’elle demande de dire non à une évidence apparemment séduisante. Le contrôle interne fournit une assurance raisonnable, pas une assurance absolue : il réduit la probabilité et l’impact des événements défavorables à un niveau jugé acceptable par rapport au coût des contrôles — c’est un arbitrage économique, pas un bouclier. Limites structurelles, au moins six : 1) l’erreur humaine — jugement, fatigue, distraction : même un contrôle exécuté correctement repose sur des personnes qui se trompent parfois ; 2) la collusion — deux personnes ou plus qui coopèrent contournent la séparation des fonctions, qui postule l’acteur isolé ; 3) le contournement par la direction — un dirigeant qui décide de passer outre neutralise le dispositif, et c’est historiquement la source des plus grandes défaillances ; 4) le coût — des contrôles proportionnés laissent des risques résiduels acceptés : un risque de perdre 500 € sur une erreur de facturation ne justifie pas un contrôle à 5 000 € ; 5) l’obsolescence — l’entreprise, les processus, les systèmes et les menaces changent plus vite que la documentation et les contrôles : un dispositif non revu devient décoratif ; 6) le jugement — la conception même du dispositif repose sur des choix humains : les risques mal identifiés à la conception ne sont couverts par aucun contrôle. Conséquence pratique sur le niveau de certitude : je peux dire « le dispositif réduit significativement la probabilité d’incident et en accélère la détection » avec un bon niveau de confiance ; je ne peux jamais dire « il exclut tout incident » — et toute direction qui l’affirme prépare une mauvaise surprise, et une question embarrassante le jour de l’incident : « vous nous aviez dit que c’était couvert ». La bonne formulation pour la direction : le dispositif couvre les risques identifiés à proportion de leur criticité, accepte formellement certains résiduels, et s’améliore en continu — c’est un processus, pas un produit fini. C’est précisément pour ces limites que l’audit interne existe — réévaluer périodiquement le dispositif — et que la gouvernance — comités, remontées d’alerte — traite le cas du contournement par la direction.',
    reasoning:
      'Le piège final classique : le recruteur propose le contrôle interne comme bouclier total. Le candidat doit refuser net le « zéro » — assurance raisonnable, pas absolue — puis démontrer en listant les limites structurelles : erreur humaine, collusion, contournement par la direction, proportionnalité économique, obsolescence, jugement de conception. Les marqueurs de force : la reformulation honnête du niveau de certitude, la phrase sur la promesse excessive qui se paie le jour de l’incident, et la boucle vers l’audit interne et la gouvernance comme réponses aux limites.',
    commonErrors: [
      'Accepter le « zéro » : promettre l’impossible prépare une défaillance de crédibilité le jour de l’incident.',
      'Invoquer seulement le coût comme limite : l’erreur humaine, la collusion et le contournement par la direction sont structurels, pas économiques.',
      'Présenter l’assurance raisonnable comme un concept flou : c’est un arbitrage explicite entre coût des contrôles et résiduel accepté.',
      'Oublier la boucle : les limites du contrôle interne justifient précisément l’audit interne et la gouvernance — dire non sans proposer la parade est une réponse incomplète.',
    ],
    oralShort:
      'Non. Le contrôle interne donne une assurance raisonnable, pas absolue : six limites au moins — erreur humaine, collusion, contournement par la direction, proportionnalité au coût, obsolescence, et jugement de conception. Je peux certifier que le dispositif réduit la probabilité et accélère la détection ; jamais qu’il exclut l’incident. Et c’est pour ça que l’audit interne existe.',
    oralLong:
      'Par définition — et c’est le cœur de ma réponse — le contrôle interne fournit une assurance raisonnable, jamais absolue : il réduit la probabilité et l’impact des événements défavorables jusqu’au niveau que l’entreprise juge acceptable au regard du coût des contrôles. L’objectif de ma réponse est de dire non au « zéro » sans dévaloriser le dispositif. Concrètement, six limites structurelles. L’erreur humaine : jugement, fatigue, distraction — même bien conçu et bien exécuté, un contrôle repose sur des personnes qui se trompent. La collusion : deux personnes qui coopèrent contournent la séparation des fonctions, conçue contre l’acteur isolé. Le contournement par la direction : un dirigeant qui décide de passer outre neutralise le dispositif — et historiquement, les plus grandes défaillances viennent de là. Le coût : des contrôles proportionnés acceptent des résiduels — un risque de 500 € ne justifie pas un contrôle à 5 000 €. L’obsolescence : processus, systèmes et menaces changent plus vite que les contrôles — un dispositif non revu devient décoratif. Et le jugement de conception : les risques mal identifiés au départ ne sont couverts par aucun contrôle. Sur le niveau de certitude demandé : je peux affirmer, avec confiance, que le dispositif réduit significativement la probabilité d’incident et en accélère la détection ; je ne peux jamais affirmer qu’il les exclut. Et une direction qui promet le zéro prépare deux problèmes : l’incident, et la question qui suivra — « vous nous aviez dit que c’était couvert ». La formulation honnête : le dispositif couvre les risques identifiés à proportion de leur criticité, accepte formellement certains résiduels, et s’améliore en continu. Par exemple, sur mon stage fictif, une fiche de poste disait « aucun paiement non autorisé ne peut survenir » : reformulée en « tout paiement non autorisé est bloqué ou détecté sous 48 heures » — même ambition, mais vérifiable et honnête. En conclusion : non au zéro, oui à l’assurance raisonnable assumée — et précisément parce que ces limites existent, l’audit interne réévalue périodiquement le dispositif et la gouvernance traite le contournement par la direction : les limites du contrôle interne sont la raison d’être de ses contre-pouvoirs.',
    followUp: 'Ta direction répond : « d’accord, mais alors à quoi sert-il, ton dispositif, si ça peut quand même casser ? » Tu lui réponds quoi ?',
    grading: [
      'Refus net du « zéro » : assurance raisonnable, arbitrage coût/résiduel, pas un bouclier.',
      'Au moins quatre limites structurelles citées (erreur humaine, collusion, contournement par la direction, coût, obsolescence, jugement).',
      'Niveau de certitude honnête formulé : réduction de probabilité et détection accélérée, jamais exclusion.',
      'Boucle vers l’audit interne et la gouvernance comme réponses aux limites ; reformulation vérifiable proposée.',
    ],
  },
]
