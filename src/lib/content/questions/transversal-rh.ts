// =====================================================================
// AuditLab — Banque de questions : TRANSVERSAL RH / SOFT SKILLS
// 45 questions — IDs qt-001 à qt-045
// Rédaction recruteur RH senior PFE finance/audit — formulations naturelles à l’oral.
// Règle d’honnêteté absolue : aucune expérience vécue n’est inventée.
// Les questions comportementales (qt-026 à qt-045) entraînent la méthode STAR
// avec une illustration PÉDAGOGIQUE clairement signalée et une variante honnête
// « si vous n’avez pas vécu ce cas : dites-le et raisonnez à voix haute ».
// =====================================================================

import type { BankQuestion } from '@/lib/types'

export const transversalRhQuestions: BankQuestion[] = [
  {
    id: 'qt-001',
    job: 'general',
    category: 'rh',
    difficulty: 2,
    skill: 'Cohérence du parcours et du projet de stage',
    question: 'Parlez-moi de vous : votre parcours, et dites-moi en quoi ce stage de fin d’études est cohérent avec ce que vous avez fait jusqu’ici.',
    expectedAnswer:
      'Réponse attendue en 60 à 90 secondes, en trois blocs : (1) qui je suis en une phrase — formation actuelle, spécialisation, année ; (2) deux ou trois éléments significatifs et RÉELS du parcours — projets académiques marquants, cours de spécialisation, engagements associatifs ou expériences professionnelles s’il y en a, en ne retenant que ce qui sert la démonstration ; (3) le pont explicite vers ce stage : la cohérence se démontre, elle ne se déclare pas — « mon orientation vers l’audit et mon projet X m’ont conduit(e) au métier de Y ; ce PFE de six mois en est la mise en pratique directe ». Le recruteur a le CV sous les yeux : il attend le fil narratif, pas la chronologie exhaustive. Si une partie du parcours est atypique : l’assumer en une phrase, sans justification défensive, et montrer ce que cette singularité apporte au poste. Règle d’honnêteté : ne jamais gonfler une expérience — chaque élément cité doit pouvoir être détaillé à la relance.',
    reasoning:
      'Question d’ouverture quasi systématique en entretien RH. Le recruteur évalue trois choses en une seule réponse : la capacité de synthèse (structurer une pensée sans réciter), la connaissance de soi (identifier ce qui compte vraiment dans son parcours) et la cohérence du projet (le stage est-il un choix construit ou une candidature envoyée partout ?). Un récit bien « ponté » vers le poste signale un candidat préparé ; une récitation chronologique signale une préparation superficielle.',
    commonErrors: [
      'Réciter le CV ligne par ligne et dépasser deux minutes.',
      'Commencer par la vie privée sans aucun lien avec le poste.',
      'Ne pas construire le pont final entre le parcours et CE stage précis.',
      'Citer des expériences gonflées ou empruntées : elles s’effondrent à la première relance.',
    ],
    oralShort:
      'Je suis en [votre année et votre formation], spécialisé(e) en [audit / comptabilité / finance]. Deux éléments comptent dans mon parcours : [projet ou expérience réelle 1] et [projet réel 2], qui m’ont tous les deux orienté(e) vers les métiers du chiffre vérifié. Ce stage est la suite logique : il me met au contact du métier que je vise, sur une durée qui permet de vivre un cycle complet. C’est un choix, pas une candidature par défaut.',
    oralLong:
      'Je structurerais ma réponse en trois temps. D’abord, le cadrage : ma formation actuelle et ma spécialisation, en une phrase — le recruteur a déjà le CV sous les yeux, il n’a pas besoin de la liste des matières. Ensuite, le parcours significatif : je retiens uniquement deux ou trois éléments réels qui construisent ma démonstration — par exemple un projet d’analyse, une spécialisation choisie, un engagement associatif — en précisant à chaque fois ce que j’y ai fait moi-même. Enfin, le pont : j’explique explicitement pourquoi ce stage de fin d’études prolonge ce parcours — la spécialisation suivie, le métier visé, la durée de six mois qui permet de voir un cycle complet, clôtures ou missions entières. Si mon parcours comporte une singularité — une réorientation, une année particulière — je l’assume en une phrase et je montre ce qu’elle m’apporte pour ce poste, sans me justifier pendant trois minutes. Et je garde une règle absolue : je ne cite que des éléments réels, vérifiables à la relance — une expérience gonflée se retourne toujours contre le candidat, parce que le recruteur creuse. En conclusion : une minute, trois blocs, un pont clair vers le poste.',
    followUp: 'Et si je vous dis que votre parcours est un peu atypique pour ce métier, vous me répondez quoi ?',
    grading: [
      'Trois blocs identifiables : cadrage, parcours significatif, pont vers le stage.',
      'Durée tenue (60-90 secondes), pas de récitation du CV.',
      'Uniquement des éléments réels, détaillables à la relance.',
      'Cohérence démontrée entre le parcours et le poste visé.',
    ],
  },
  {
    id: 'qt-002',
    job: 'general',
    category: 'rh',
    difficulty: 1,
    skill: 'Motivation pour un PFE de six mois',
    question: 'Pourquoi un stage de fin d’études de six mois, plutôt qu’une alternance ou un premier emploi ?',
    expectedAnswer:
      'Un PFE de six mois se justifie par trois arguments concrets : (1) l’immersion complète — six mois, c’est le temps de voir un cycle entier : une clôture mensuelle répétée, voire un bout de clôture annuelle, des missions menées du début à la fin, la relation avec les équipes ; (2) la logique du cursus — le stage s’inscrit dans la dernière année, il valide la mise en pratique avant l’entrée dans la vie active et nourrit souvent le mémoire ; (3) le choix assumé — l’alternance était une option, mais le candidat privilégie une immersion continue dans une seule structure pour progresser vite sur les fondamentaux du métier. Mention bonus appréciée des recruteurs français : six mois, c’est aussi la durée maximale légale d’un stage par année d’enseignement — le candidat montre qu’il connaît le cadre. La réponse doit sonner comme une décision réfléchiée, pas comme un arrangement de confort.',
    reasoning:
      'Le recruteur veut distinguer la vraie motivation du choix par défaut. Beaucoup de candidats répondent « parce que c’est obligatoire dans ma formation » — réponse morte. Un candidat qui explique ce que six mois permettent qu’un stage de deux mois ne permet pas, et qui assume la comparaison avec l’alternance, démontre une réflexion sur son propre mode d’apprentissage. C’est aussi un test d’engagement : six mois, c’est long pour les deux parties.',
    commonErrors: [
      'Répondre « parce que ma formation l’exige » sans ajouter de raison personnelle.',
      'Dévaloriser l’alternance ou l’emploi pour se valoriser (« l’alternance, c’est pour ceux qui… »).',
      'Laisser croire qu’on accepterait n’importe quelle durée faute de mieux.',
      'Oublier que le stage doit aussi servir l’entreprise : parler uniquement de ce qu’on va y apprendre.',
    ],
    oralShort:
      'Six mois, c’est la durée qu’il faut pour voir un cycle complet : plusieurs clôtures mensuelles, des dossiers menés du début à la fin, et le rythme réel du métier. C’est cohérent avec ma dernière année : le PFE valide la mise en pratique et nourrit mon mémoire. J’ai aussi comparé avec l’alternance — je préfère une immersion continue dans une seule équipe pour monter vite sur les fondamentaux.',
    oralLong:
      'Trois raisons, dans l’ordre. D’abord, la durée elle-même : sur deux mois, on découvre ; sur six mois, on devient opérationnel(le). J’assisterai à plusieurs clôtures mensuelles, je verrai un dossier naître, se documenter et se conclure — c’est ça, la vraie mise en pratique. Ensuite, la logique de cursus : le PFE arrive en dernière année, il prolonge directement les enseignements [citez les vôtres : audit, comptabilité approfondie, trésorerie] et il alimentera mon mémoire sur [votre sujet réel]. Enfin, c’est un choix assumé : j’ai envisagé l’alternance, mais je voulais une immersion continue dans une seule structure, avec un tuteur qui me délègue progressivement de vraies responsabilités — l’alternance aurait fragmenté mon temps. Et je sais que six mois, c’est aussi la durée maximale d’un stage par année d’enseignement en France : ce n’est pas un hasard, c’est le cadre pensé pour ce type d’immersion. En conclusion : ce n’est pas un stage par défaut, c’est le format que j’ai choisi pour apprendre le métier correctement.',
    followUp: 'Et si au bout de deux mois vous vous rendez compte que le métier ne vous plaît pas, vous en faites quoi ?',
    grading: [
      'Argument de l’immersion complète (cycles, clôtures, missions entières).',
      'Choix assumé face à l’alternance, sans dévaloriser les autres voies.',
      'Lien explicite avec le cursus et le mémoire.',
      'Vision gagnant-gagnant : ce que le stage apporte aussi à l’entreprise.',
    ],
  },
  {
    id: 'qt-003',
    job: 'general',
    category: 'rh',
    difficulty: 1,
    skill: 'Motivation pour audit / comptabilité / trésorerie',
    question: 'Pourquoi l’audit, la comptabilité ou la trésorerie ? Il y a des dizaines de métiers du chiffre, qu’est-ce qui vous attire là-dedans ?',
    expectedAnswer:
      'La réponse doit partir d’un déclic concret — un cours, un projet, une rencontre — puis dérouler la logique : ce que ces métiers ont en commun (la précision, la preuve, le fait qu’un chiffre doit être justifié avant d’être cru) et ce qui attire le candidat dans la ou les familles visées : l’audit pour la variété des dossiers et l’esprit critique ; la comptabilité pour la rigueur et la cohérence d’ensemble que donnent les comptes bien tenus ; la trésorerie pour le rythme quotidien et le concret des flux. Le candidat doit aussi assumer ce qui l’intéresse MOINS : dire « je vise plutôt l’audit mais la comptabilité m’y prépare » est plus crédible que tout embrasser. Interdit : « j’aime les chiffres » seul, sans exemple — c’est la réponse de 90 % des candidats et elle ne veut rien dire.',
    reasoning:
      'Question de tri rapide. Le recruteur vérifie que le métier visé est un choix informé et non une appellation de plaque. Ceux qui disent « j’aime les chiffres » sans préciser ce qu’ils aiment — la vérification, le recoupement, le fait de clore un compte — révèlent qu’ils ne savent pas encore ce qu’on y fait. La nuance entre les trois familles de postes montre le sérieux de l’exploration métier, même pour un stage.',
    commonErrors: [
      '« J’aime les chiffres » comme unique argument.',
      'Embrasser les trois métiers sans hiérarchie, pour ne pas se fermer de porte.',
      'Décrire le métier de façon caricaturale (l’audit = « chercher qui triche »).',
      'Citer des avantages de structure (horaires, prestige) plutôt que le contenu du travail.',
    ],
    oralShort:
      'Ce qui m’attire, c’est qu’un chiffre doit être justifié avant d’être cru. Le déclic, c’est [votre exemple réel : un cours, un projet, un cas]. J’y ai découvert que j’aimais vérifier, recouper, expliquer. C’est pour ça que je vise [audit / la comptabilité / la trésorerie] : [variété des dossiers et esprit critique / rigueur et cohérence des comptes / rythme concret des flux]. Ce n’est pas les chiffres en soi, c’est la preuve.',
    oralLong:
      'Je partirais d’un déclic, parce que le recruteur cherche un point de départ réel, pas une déclaration. Le mien : [votre exemple authentique — un contrôle de gestion découvert en cours, un rapprochement bancaire qui « tombait juste », une étude de cas d’audit]. Ensuite, j’expliquerais ce qui me retient : dans ces métiers, un chiffre n’a de valeur que s’il est justifié — pièce, recoupement, rattachement. Ça correspond à ma façon de travailler : je n’aime pas affirmer sans vérifier. Puis je précise ma hiérarchie, honnêtement : je vise plutôt [métier principal], parce que [raison précise : on y voit beaucoup de situations différentes / on comprend toute la mécanique des comptes / chaque journée engage des flux réels] ; et je sais que [les deux autres] partagent les mêmes fondamentaux, c’est pour ça que ce stage m’intéresse quel que soit le cycle qu’on m’y confiera. En conclusion, ma motivation tient en une idée simple : j’aime le travail bien prouvé, et ces métiers en vivent.',
    followUp: 'Et ce qui vous plaît le moins dans ces métiers, c’est quoi ?',
    grading: [
      'Déclic concret et réel cité comme point de départ.',
      'Contenu du travail décrit précisément (vérification, preuve, flux), pas le prestige.',
      'Hiérarchie assumée entre les familles de métiers.',
      'Aucune réponse générique « j’aime les chiffres » sans exemple.',
    ],
  },
  {
    id: 'qt-004',
    job: 'general',
    category: 'rh',
    difficulty: 2,
    skill: 'Motivation pour la structure (pourquoi nous)',
    question: 'Et pourquoi nous, précisément ? Vous avez regardé ce qu’on fait ici, ou vous avez postulé un peu partout ?',
    expectedAnswer:
      'La réponse repose sur des faits vérifiables sur la structure : sa taille et ce qu’elle implique (cabinet régional = missions variées et contact direct avec le dirigeant ; grand groupe = spécialisation et process structurés ; équipe trésorerie centrale = volumes et outils), son secteur, son positionnement. Puis le miroir personnel : ce que ce contexte spécifique m’apporte pour apprendre — et ce que je peux y apporter. Format attendu : deux ou trois raisons précises reliées à des éléments concrets (site, entretien préalable, offre de stage détaillée), jamais le flatterie générique (« votre entreprise a une excellente réputation »). Honnêteté assumée : si le candidat postule largement, le dire sans honte — « j’ai ciblé des structures qui partagent ces trois critères, vous les remplissez pour ces raisons » — est plus crédible qu’un mensonge de candidature exclusive.',
    reasoning:
      'Le recruteur sépare les candidatures ciblées du mailing de masse. La question piège n’est pas « connaissez-vous l’entreprise » mais « savez-vous pourquoi ce contexte vous convient ». Un cabinet et un service trésorerie de groupe n’offrent pas la même expérience de stage : le candidat qui l’a compris — et qui sait dire pourquoi l’un lui convient mieux — démontre une exploration métier mûre. Le mensonge d’exclusivité se retourne vite : les recruteurs savent que les PFE postulent large.',
    commonErrors: [
      'Flatterie générique (« votre structure a une excellente réputation ») applicable à n’importe qui.',
      'Répéter mot pour mot la page « à propos » du site web sans aucune recontextualisation.',
      'Mentir sur l’exclusivité de la candidature.',
      'Ne citer que des avantages pour soi (proximité, gratification) sans aucune raison métier.',
    ],
    oralShort:
      'Trois raisons précises : d’abord [fait concret : la taille de l’équipe, le type de missions décrit dans l’offre], ce qui veut dire pour moi [bénéfice d’apprentissage]. Ensuite [second fait : le secteur, les outils cités]. Enfin, la façon dont vous décrivez l’encadrement des stagiaires correspond à ce que je cherche : des responsabilités progressives avec un tuteur accessible. J’ai postulé ailleurs, mais sur des critères cohérents — vous les remplissez particulièrement bien.',
    oralLong:
      'Je construirais la réponse sur des faits, pas sur des compliments. Premier fait : [élément concret repris de l’offre ou du site — taille de la structure, marché couvert, organisation des équipes]. Ce que ça change pour moi : dans une équipe de cette taille, un stagiaire voit [missions variées / plusieurs cycles / les décideurs en direct], ce qui est exactement le mode d’apprentissage que je cherche. Deuxième fait : [secteur, outils, périodicité du travail]. Troisième élément, le miroir : ce que je peux apporter — [fiabilité sur les tâches répétitives / disponibilité sur les clôtures / maîtrise d’Excel travaillée en amont]. Et j’assume la réalité du marché : j’ai postulé à d’autres structures, avec des critères précis — type de missions, encadrement, durée — et la vôtre répond à ces critères de façon particulièrement nette pour [raison]. Un recruteur préfère une candidature honnête et argumentée à une exclusivité de façade. En conclusion : trois raisons vérifiables, un bénéfice d’apprentissage, une contribution possible — et zéro flatterie.',
    followUp: 'Si un plus grand cabinet vous proposait la même chose demain, vous prendriez quoi ?',
    grading: [
      'Deux ou trois raisons appuyées sur des faits vérifiables de la structure.',
      'Lien explicite entre le contexte de la structure et le mode d’apprentissage visé.',
      'Contribution possible du stagiaire mentionnée.',
      'Candidature large assumée honnêtement, sans mensonge d’exclusivité.',
    ],
  },
  {
    id: 'qt-005',
    job: 'general',
    category: 'rh',
    difficulty: 2,
    skill: 'Points forts argumentés',
    question: 'Donnez-moi vos trois principales qualités pour ce poste — et pour chacune, un exemple concret qui la montre.',
    expectedAnswer:
      'Trois qualités choisies parce qu’elles sont UTILES au poste visé, pas parce qu’elles flattent : rigueur et fiabilité (le socle : rendre ce qui est demandé, exact, dans les délais), curiosité technique (poser les questions au bon moment, vouloir comprendre le pourquoi des traitements), endurance au rythme (tenir les périodes de charge). Chaque qualité doit être illustrée par un exemple RÉEL et vérifiable — projet, cours, engagement — avec un fait précis et si possible mesurable. La règle : une qualité sans preuve n’est qu’un adjectif. Les qualités les plus crédibles pour un PFE finance sont les plus modestes : « fiable » vaut mieux que « leader charismatique » pour un poste où l’on débute. Préparer les exemples à l’avance et les connaître à la relance.',
    reasoning:
      'Le recruteur teste la capacité à s’auto-évaluer honnêtement — et la cohérence entre les qualités revendiquées et le poste. Le piège inversé de la question sur les défauts : ici, beaucoup de candidats survendent des qualités héroïques sans exemple. La relance « un exemple concret » élimine immédiatement ceux qui récitent une liste préparée sans substance. Trois qualités reliées au poste + trois preuves courtes = réponse solide.',
    commonErrors: [
      'Lâcher une liste d’adjectifs sans aucun exemple.',
      'Choisir des qualités hors sujet (charisme, esprit de conquête) pour un poste de rigueur.',
      'Citer plus de trois qualités : la liste devient un catalogue invérifiable.',
      'Utiliser des exemples invérifiables ou empruntés, qui s’effondrent à la relance.',
    ],
    oralShort:
      'D’abord, la fiabilité : sur [votre exemple réel — un projet rendu en trois temps], j’ai livré chaque étape à la date convenue, sans qu’on ait à me relancer. Ensuite, la curiosité technique : dans [cours ou projet réel], j’ai creusé [point précis] jusqu’à comprendre le mécanisme complet. Enfin, l’endurance : j’ai tenu [période de charge réelle — week-ends de concours, double deadline] en gardant un travail propre. Trois qualités, trois preuves.',
    oralLong:
      'Je choisissais mes trois qualités selon un seul critère : est-ce que le poste en a besoin ? Premier point, la fiabilité — en audit comme en comptabilité ou trésorerie, la base, c’est que ce que je rends soit juste et livré à l’heure. La preuve : [exemple réel, daté, avec un fait précis : « sur un projet rendu en trois étapes, les trois sont parties à date fixe, la dernière sans relecture nécessaire »]. Deuxième point, la curiosité technique — je n’aime pas appliquer un traitement sans comprendre le pourquoi. La preuve : [exemple réel : reprise d’un point de cours jusqu’au mécanisme complet, question posée puis documentée]. Troisième point, l’endurance — les périodes de clôture chargent l’équipe, je dois tenir le rythme sans baisser la qualité. La preuve : [période réelle de charge : semaines d’examens cumulées à un engagement, tenue d’un planning écrit]. Un point de méthode important : je reste dans le vérifiable — chaque exemple doit résister à la relance du recruteur, sinon la qualité devient un mensonge. En conclusion : rigueur, curiosité, endurance — trois besoins du poste, trois preuves courtes et réelles.',
    followUp: 'Et laquelle de ces trois qualités vous fera le plus défaut au début, ici ?',
    grading: [
      'Exactement trois qualités, toutes utiles au poste visé.',
      'Une preuve concrète et réelle par qualité, résistante à la relance.',
      'Choix de qualités crédibles pour un débutant (fiabilité plutôt que charisme).',
      'Auto-évaluation honnête, sans survente.',
    ],
  },
  {
    id: 'qt-006',
    job: 'general',
    category: 'pieges',
    difficulty: 3,
    skill: 'Points faibles assumés',
    question: 'Et vos points faibles ? Dites-moi quelque chose de vrai — qu’est-ce qui pourrait vous faire rater vos premières semaines ici ?',
    expectedAnswer:
      'Le format attendu : une faiblesse réelle, non rédhibitoire pour un stagiaire, présentée en quatre temps — la faiblesse nommée simplement, le contexte où elle se voit, ce que je fais concrètement pour la corriger, le premier progrès observable. Exemples de faiblesses acceptables pour un débutant : la lenteur au démarrage sur une tâche nouvelle (compensée par une méthode d’apprentissage), la difficulté à interrompre quelqu’un pour poser une question (compensée par des points hebdomadaires préparés), le manque de recul après plusieurs heures sur le même dossier (compensé par des pauses de vérification programmées). Les pièges à éviter absolument : le faux défaut arrogant (« je suis trop perfectionniste » sans en montrer le coût), la faiblesse cardinale du métier (« je suis peu rigoureux » en audit — disqualifiant), et la faiblesse déguisée en blague (« mon défaut, c’est le chocolat »). Le recruteur n’achète pas la faiblesse, il achète la lucidité et la démarche de progrès.',
    reasoning:
      'Question piège classique, moins par sadisme que par efficacité : le recruteur teste la lucidité et l’honnêteté du candidat sur lui-même. Quelqu’un qui prétend n’avoir que des défauts avantageux mentira aussi sur ses erreurs de travail. La seconde couche du test : la faiblesse citée doit être compatible avec le poste — un candidat qui annonce une faiblesse cardinale du métier (rigueur, fiabilité) s’auto-élimine sans que le recruteur ait à le faire.',
    commonErrors: [
      'Le faux défaut vaniteux (« perfectionniste », « trop exigeant envers moi-même ») sans coût réel.',
      'Citer une compétence cardinale du métier (rigueur, ponctualité) comme faiblesse.',
      'La faiblesse-fuite (« je n’en vois pas vraiment ») : manque de lucidité assumée.',
      'S’étendre longuement : la faiblesse doit occuper une minute, pas le quart de l’entretien.',
    ],
    oralShort:
      'Un point réel : quand je découvre une tâche nouvelle, je suis lent(e) au démarrage — je veux comprendre le mécanisme avant d’aller vite. Ce que je fais : je me donne un temps de découverte borné, je note ce que j’apprends pour la fois suivante. Sur [exemple réel : un logiciel de cours], la première prise en main m’a pris deux heures ; sur la deuxième utilisation, j’étais au même niveau que les autres. C’est un coût d’entrée assumé, pas un plafond.',
    oralLong:
      'Je respecte la règle du jeu : une vraie faiblesse, courte, avec sa parade. La mienne : au démarrage d’une tâche inconnue, je suis plus lent(e) que la moyenne — je cherche à comprendre le mécanisme avant d’accélérer. Concrètement, ça s’est vu sur [exemple réel : découverte d’un logiciel en cours, premier dossier d’un nouveau module] : la première fois, j’ai pris du retard sur mes camarades ; la deuxième fois, non. Ce que j’en fais : je borne ma phase de découverte — je m’autorise un temps fixe pour explorer, je note ce qui servira à la prochaine occurrence, et je demande un exemple de « résultat correct » pour calibrer. C’est aussi ce qui me rend fiable ensuite : ce que j’ai compris, je le reproduis sans erreur. Un second point, pour être honnête jusqu’au bout : j’hésite parfois à interrompre un tuteur occupé — j’y travaille en préparant mes questions par écrit et en les regroupant pour un point unique plutôt que dix interruptions. Ce que je ne ferais pas : vous vendre un défaut avantageux — vous l’avez déjà entendu mille fois, et ça ne dit rien de ma capacité à progresser. En conclusion : une faiblesse réelle, un coût connu, une méthode de compensation, un progrès déjà observable.',
    followUp: 'Et si votre lenteur de démarrage vous fait rater une échéance de clôture, vous en faites quoi ?',
    grading: [
      'Faiblesse réelle et nommée simplement, compatible avec le poste.',
      'Coût de la faiblesse montré honnêtement (pas un défaut avantageux).',
      'Méthode de compensation concrète + premier progrès observable.',
      'Aucune faiblesse cardinale du métier citée, aucune blague défensive.',
    ],
  },
  {
    id: 'qt-007',
    job: 'general',
    category: 'rh',
    difficulty: 1,
    skill: 'Gestion du stress',
    question: 'Comment gérez-vous le stress ? Parce qu’ici, en période de clôture, la pression est réelle.',
    expectedAnswer:
      'Distinguer deux choses : la pression ponctuelle (un pic de charge, une échéance) et le stress chronique. Le recruteur attend des mécanismes concrets et sains, pas des déclarations d’invincibilité : avant le pic, préparer (planifier, anticiper les blocages) ; pendant, réduire le stress par l’action (liste courte, une tâche à la fois, demander de l’aide tôt plutôt que ruminer) ; après, récupérer (couper, sommeil, sport). Mentionner honnêtement ses signaux personnels d’alerte (irritabilité, précipitation, erreurs de saisie qui augmentent) et ce qu’on fait quand ils apparaissent — c’est la marque d’un candidat qui se connaît. Interdit : dire « je ne stresse jamais » (mensonge ou inconscience, les deux inquiétantes) ou décrire des rituels d’évitement.',
    reasoning:
      'Question santé-travail déguisée en question soft skill. Le recruteur vérifie que le candidat a déjà connu une situation de pression et qu’il a des outils — car en clôture, un stagiaire qui panique coûte du temps à toute l’équipe. Ceux qui répondent « le stress, ça ne me touche pas » signalent soit un mensonge, soit une absence de vécu des pics de charge. Ceux qui décrivent un mécanisme simple et réel (agir par petites étapes, demander tôt) rassurent.',
    commonErrors: [
      'Affirmer « je ne stresse jamais » : invérifiable et inquiétant.',
      'Confondre gestion du stress et déni (« je fais comme si de rien n’était »).',
      'Décrire des mécanismes purement personnels sans lien avec le travail (méditation trois heures par jour).',
      'Raconter une crise de stress sans en tirer aucune méthode.',
    ],
    oralShort:
      'Je ne prétends pas être insensible au stress — je le gère par l’action. Quand la charge monte, je passe en mode liste courte : je note tout, je prends une tâche à la fois, et si je bloque plus de trente minutes, je le dis au lieu de ruminer. Après le pic, je coupe réellement — sommeil et sport. Mon signal d’alerte à moi, c’est [votre signal réel : précipitation, irritabilité], et quand il apparaît, je ralentis et je re-vérifie.',
    oralLong:
      'Je partirais du principe que le stress n’est pas à nier mais à canaliser. Avant un pic, je prépare : j’anticipe les livrables, je liste les points qui peuvent bloquer, je demande les attentes précises — la majorité du stress que j’ai connu venait du flou, pas de la charge. Pendant, je réduis par l’action : je découpe en tâches courtes, j’en exécute une seule à la fois, et je signale tôt les difficultés — un blocage annoncé lundi vaut mieux qu’un livrable manquant vendredi. Concrètement, sur [votre exemple réel : semaine d’examens cumulés, événement à organiser], cette méthode m’a permis de tenir la charge sans dégrader la qualité. Après le pic, je récupère pour de vrai : découper complètement, dormir, bouger — sinon le stress s’accumule d’une clôture sur l’autre. Et je connais mes signaux : quand je commence à me précipiter et que mes erreurs de saisie augmentent, c’est que je dois ralentir et re-vérifier plutôt qu’accélérer. Ce que je ne dirais pas : « je ne stresse jamais » — personne n’y croit, et ça ferait de moi quelqu’un qui ne se connaît pas. En conclusion : préparer avant, agir pendant, récupérer après, et connaître ses signaux.',
    followUp: 'La dernière fois que vous avez été vraiment sous pression, c’était quand, et vous avez fait quoi exactement ?',
    grading: [
      'Stress reconnu comme réel, aucun déni héroïque.',
      'Mécanismes concrets avant / pendant / après le pic.',
      'Signaux personnels d’alerte connus et surveillés.',
      'Exemple réel de situation de pression cité (ou variante honnête).',
    ],
  },
  {
    id: 'qt-008',
    job: 'general',
    category: 'organisation',
    difficulty: 2,
    skill: 'Gestion des délais multiples',
    question: 'Vous avez trois dossiers à rendre le même jour, et des imprévus qui tombent en pleine journée : comment vous vous organisez ?',
    expectedAnswer:
      'Une méthode en quatre gestes : (1) lister tout ce qui est attendu avec ses échéances réelles — en vérifiant lesquelles sont dures (échéance légale, engagement client) et lesquelles sont souples ; (2) estimer la durée de chaque tâche et repérer celles qui durent plus longtemps qu’elles n’en ont l’air ; (3) ordonner par échéance et par dépendance (ce qui bloque les autres d’abord), en bloquant des créneaux réalistes plutôt qu’une journée idéale ; (4) prévenir tôt les personnes concernées dès qu’un délai devient incertain. Sur les imprévus : les accueillir en évaluant leur urgence réelle (« pour quand, exactement ? ») et en disant ce qu’on décale, plutôt que d’empiler en silence. La règle d’or du recruteur : un retard annoncé n’est pas un retard, c’est une information ; un retard subi est une faute.',
    reasoning:
      'Le recruteur teste l’organisation réelle du candidat — la comptabilité et la trésorerie vivent au rythme d’échéances multiples (déclarations, clôtures, paiements). Les candidats qui « gèrent au feeling » explosent en période de clôture. Le marqueur de maturité : accepter de dire ce qu’on ne tiendra pas, au lieu de tout promettre et de décevoir. La relance sur les imprévus vérifie si la méthode survit au contact du réel.',
    commonErrors: [
      'Répondre « je gère par priorité » sans définir comment on établit une priorité.',
      'Promettre tous les délais sans jamais signaler un risque de glissement.',
      'Négliger les tâches courtes (mails, validations) qui s’empilent et explosent le planning.',
      'Décrire un planning parfait sans rien prévoir pour les imprévus.',
    ],
    oralShort:
      'D’abord, je liste tout avec ses échéances, en séparant ce qui est dur — échéance légale, engagement pris — de ce qui est négociable. Ensuite j’estime les durées et je bloque des créneaux réalistes, tâches bloquantes en premier. Et dès qu’un délai devient incertain, je préviens la personne concernée : un retard annoncé, ce n’est pas un retard, c’est une information. Les imprévus, je les accueille en demandant toujours : pour quand, exactement ?',
    oralLong:
      'Ma méthode tient en quatre gestes. Un, la liste : tout ce qui est attendu, avec l’échéance réelle de chaque point — et je vérifie lesquelles sont dures : une déclaration, un engagement client, une clôture ; et lesquelles sont souples : un dossier qu’on peut rendre le lendemain si c’est annoncé. Deux, l’estimation : je note la durée probable de chaque tâche, en me méfiant de celles qui paraissent courtes — c’est toujours là que le planning ment. Trois, l’ordonnancement : par échéance et par dépendance — ce qui bloque le travail des autres passe avant ce qui ne bloque que moi ; et je bloque des créneaux réalistes, pas une journée idéale où tout se déroulerait sans incident. Quatre, le suivi : dès qu’un délai devient incertain, je préviens la personne concernée avec un nouveau point de rendez-vous — un retard annoncé n’est pas un retard, c’est une information ; un retard découvert par le destinataire, c’est une faute. Pour les imprévus en pleine journée, j’applique la même logique : je demande toujours « pour quand, exactement ? », je sécurise ce que j’étais en train de faire, et je dis explicitement ce qui glisse. Ce que j’évite : dire oui à tout — c’est la façon la plus rapide de ne rien tenir. En conclusion : lister, estimer, ordonner, prévenir — et traiter l’imprévu par l’information, pas par le silence.',
    followUp: 'Donnez-moi un exemple : la dernière fois que vous avez rendu quelque chose en retard, qu’est-ce qui s’est passé ?',
    grading: [
      'Méthode explicite : liste, échéances dures/souples, estimation, ordonnancement.',
      'Signalement précoce des délais à risque (retard annoncé ≠ retard subi).',
      'Traitement des imprévus par l’évaluation de l’urgence réelle.',
      'Exemple réel cité ou variante honnête assumée.',
    ],
  },
  {
    id: 'qt-009',
    job: 'general',
    category: 'rh',
    difficulty: 1,
    skill: 'Travail en équipe',
    question: 'Vous allez travailler dans une équipe où vous serez le plus jeune et le moins expérimenté : comment vous vous voyez dedans ?',
    expectedAnswer:
      'Le recruteur attend une position claire : apprendre en rendant service. Concrètement : occuper sa place — faire correctement ce qui est confié avant de viser plus ; rendre sa part prévisible pour les autres (informer, respecter les engagements) parce qu’une équipe fonctionne sur la confiance de petits points ; poser des questions au bon moment (groupées, après avoir cherché) ; accepter la hiérarchie naturelle de l’expérience sans servilité ni familiarité. Le candidat doit montrer qu’il sait ce qu’une équipe attend d’un débutant : fiabilité et discrétion d’abord, initiative ensuite. Interdit : se projeter déjà en chef (« j’aime diriger ») ou se décrire en spectateur passif qui attend les instructions.',
    reasoning:
      'Question de positionnement. En audit et en comptabilité, le stagiaire est intégré à des équipes seniors qui n’ont pas toujours le temps de le former : le recruteur vérifie que le candidat comprend la logique d’équipe — sa fiabilité allège le travail des autres, ses erreurs l’alourdit. Le juste positionnement (humble sans être effacé, actif sans envahir) est un prédicteur d’intégration réussie.',
    commonErrors: [
      'Se projeter en leader d’emblée (« j’aime prendre les décisions ») pour un poste de débutant.',
      'L’inverse : se décrire en exécutant passif qui attend le soir pour partir.',
      'Parler d’équipe uniquement en termes de convivialité (ambiance, afterworks) et jamais de fiabilité.',
      'Ignorer la dimension hiérarchique et les codes de politesse professionnelle.',
    ],
    oralShort:
      'Je me vois comme celui qui rend service de façon fiable : ma part de travail, je la fais bien et je la tiens, parce que c’est ça qui allège le travail des autres. Je pose mes questions groupées, après avoir cherché par moi-même. Je reste à ma place — débutant — tout en montrant que je peux prendre de l’initiative quand c’est attendu. L’ambiance compte, mais c’est la fiabilité qui fait qu’une équipe vous accepte.',
    oralLong:
      'Je partirais de ce qu’une équipe attend réellement d’un débutant — pas l’inverse. Elle attend quelqu’un de fiable : ce qui m’est confié est rendu correct et à l’heure, sinon je préviens ; quelqu’un de prévisible : mon tuteur sait où j’en suis sans devoir me chercher ; quelqu’un qui ne consomme pas tout le temps des autres : mes questions sont groupées, préparées, et posées après que j’ai cherché. À partir de là, ma place : occuper correctement les tâches confiées avant d’en viser de plus larges, observer les codes de l’équipe — qui valide quoi, comment se parle-t-on, quand peut-on interrompre quelqu’un — et me rendre utile sur les pics de charge, y compris sur des tâches modestes : c’est là qu’on apprend la mécanique réelle du métier. Ce que je ne ferais pas : me présenter en futur chef — j’ai tout à apprendre du travail bien fait par les seniors — ni en spectateur : une équipe n’a pas besoin d’un observateur, elle a besoin d’une paire de mains fiables. Sur [votre exemple réel : projet de groupe, association], c’est déjà ce positionnement qui a le mieux marché pour moi. En conclusion : fiable, prévisible, discret sur les débuts, actif sur les pics — et curieux en permanence.',
    followUp: 'Et si l’équipe vous confie des tâches sans aucun intérêt pendant des semaines, vous en parlez à qui ?',
    grading: [
      'Positionnement de débutant clair : servir avant de diriger.',
      'Fiabilité et prévisibilité présentées comme base de la confiance d’équipe.',
      'Questions posées au bon moment (chercher d’abord, groupées ensuite).',
      'Ni ambition prématurée, ni passivité de spectateur.',
    ],
  },
  {
    id: 'qt-010',
    job: 'general',
    category: 'rh',
    difficulty: 2,
    skill: 'Autonomie',
    question: 'Ici, on ne vous tiendra pas par la main tous les jours : vous êtes à l’aise tout(e) seul(e) ? Et concrètement, vous faites quoi pour ne pas rester bloqué ?',
    expectedAnswer:
      'L’autonomie attendue n’est pas l’isolement : c’est savoir avancer seul ET savoir quand et comment demander. La règle pratique du « temps borné » rassure tout recruteur : je cherche par moi-même un temps défini (quinze à trente minutes selon l’enjeu), puis je viens avec un point précis et formaté — « j’ai fait ceci, j’ai essayé cela, je bloque sur ce point précis, voici ce que j’envisage ». Ce format respecte le temps du tuteur et prouve la recherche personnelle. Autres marqueurs d’autonomie : reformuler la consigne avant de démarrer (éviter de partir dans la mauvaise direction), garder une trace de ce qui est fait (un débutant autonome documente son avancement), et signaler les blocages tôt. Interdit : les deux extrêmes — rester bloqué une demi-journée par orgueil, ou demander avant d’avoir cherché.',
    reasoning:
      'Le recruteur cherche à prédire le coût d’encadrement du stagiaire : un stagiaire autonome démultiplie l’équipe, un stagiaire qui pose des questions non préparées la saigne. La question piège « vous êtes à l’aise seul ? » pousse à un oui vaniteux ; la bonne réponse décrit le mécanisme de l’autonomie encadrée — c’est ce mécanisme, pas l’affirmation, qui convainc.',
    commonErrors: [
      'Répondre « oui, très autonome » sans décrire le moindre mécanisme.',
      'Confondre autonomie et isolement : ne jamais demander, et rester bloqué des heures.',
      'Demander immédiatement sans avoir cherché : consommateur du temps du tuteur.',
      'Partir sur une mauvaise interprétation sans reformuler la consigne au départ.',
    ],
    oralShort:
      'Oui, à condition de cadrer la consigne au départ : je reformule ce qu’on attend de moi avant de démarrer. Ensuite, la règle que je m’applique : je cherche par moi-même un temps borné — quinze, trente minutes selon l’enjeu. Si je bloque encore, je viens avec un point formaté : ce que j’ai fait, ce que j’ai tenté, où je bloque, et ce que j’envisage. Ça respecte le temps du tuteur et ça prouve que j’ai cherché.',
    oralLong:
      'Je distinguerais deux choses : l’autonomie n’est pas l’isolement — être autonome, c’est avancer seul sans se retrouver seul. Ma méthode tient en trois temps. Avant : reformuler la consigne — « si j’ai bien compris, vous attendez ceci, dans ce format, pour cette échéance » — parce que la plus grande perte de temps d’un débutant, c’est de partir dans la bonne énergie sur la mauvaise direction. Pendant : la règle du temps borné. Sur un blocage, je cherche par moi-même quinze à trente minutes selon l’enjeu — documentation à portée de main, test alternatif, relecture du contexte. Si je bloque toujours, je viens avec un point formaté : voici ce que j’ai fait, voici ce que j’ai tenté, voici où je bloque précisément, et voici ce que je propose. Ce format a deux vertus : il respecte le temps du tuteur, et il montre que j’ai travaillé la question avant de la déléguer. En parallèle, je documente mon avancement — liste de ce qui est fait, en cours, à valider — pour que n’importe qui reprenne mon dossier sans m’appeler. Ce que j’évite : les deux excès symétriques — rester bloqué une demi-journée par orgueil, ou demander avant même d’avoir essayé : le premier coûte de la matière, le second coûte de la confiance. En conclusion : reformuler, chercher borné, demander formaté, documenter.',
    followUp: 'Et si votre tuteur est absent trois jours au milieu d’une tâche non finie, vous faites quoi ?',
    grading: [
      'Autonomie définie comme avancer seul + demander au bon moment, pas comme isolement.',
      'Règle du temps borné avant de solliciter (15-30 min selon enjeu).',
      'Question formatée : fait / tenté / blocage précis / proposition.',
      'Reformulation de la consigne et documentation de l’avancement.',
    ],
  },
  {
    id: 'qt-011',
    job: 'general',
    category: 'rh',
    difficulty: 1,
    skill: 'Capacité d’apprentissage',
    question: 'Apprendre, ça va être votre quotidien ici : nouveaux logiciels, nouvelles règles, nouveaux dossiers. Comment vous apprenez, concrètement ?',
    expectedAnswer:
      'Décrire sa méthode d’apprentissage en geste concrets, pas en déclaration : (1) partir d’un exemple de résultat correct — voir ce à quoi ça doit ressembler avant de comprendre le mécanisme ; (2) faire tôt et petit — tester sur un cas simple ou un jeu de données réduit, se tromper vite, corriger ; (3) prendre des notes opérationnelles (procédures à trous personnels, pas des cours théoriques) pour ne redemander qu’une fois ; (4) ancrer par la répétition espacée et l’application réelle. Le recruteur attend aussi le réalisme : tout le monde n’apprend pas à la même vitesse, et le candidat doit citer une chose RÉELLE qu’il a apprise récemment et comment — c’est la preuve que la méthode n’est pas théorique.',
    reasoning:
      'Sur un stage de six mois, la capacité d’apprentissage vaut plus que le savoir initial : le contenu spécifique (logiciels du cabinet, organisation des dossiers) s’apprend sur place. Le recruteur vérifie que le candidat a conscience d’apprendre activement — c’est une habitude, pas un don. La demande d’un exemple réel d’apprentissage récent élimine les réponses théoriques : celui qui n’a rien appris de nouveau ces six derniers mois ne s’est pas posé la question.',
    commonErrors: [
      'Répondre « j’apprends vite » sans aucun mécanisme décrit.',
      'Décrire un apprentissage passif : lire, écouter, noter — sans test ni application.',
      'Ne citer aucun exemple réel d’apprentissage récent.',
      'Ignorer la documentation personnelle et refaire les mêmes questions au tuteur.',
    ],
    oralShort:
      'Concrètement, je pars d’un exemple de résultat correct — je regarde à quoi ça doit ressembler avant d’apprendre le mécanisme. Ensuite je fais vite et petit : je teste sur un cas simple, je me trompe, je corrige. Je prends des notes opérationnelles — des procédures à trous — pour ne redemander qu’une fois. Dernière chose apprise pour de vrai : [votre exemple réel — un logiciel, une méthode], en trois sessions d’utilisation.',
    oralLong:
      'Ma méthode tient en quatre gestes, et je l’illustrerais par un apprentissage réel. Un : partir d’un exemple de résultat correct. Avant de comprendre un mécanisme, je regarde ce à quoi il doit aboutir — un rapprochement fini, une note de synthèse propre — parce que ça oriente tout ce que j’apprends ensuite. Deux : faire tôt et petit. Dès que j’ai le minimum, je passe à un cas simple ou un petit jeu de données : je préfère me tromper vite sur un exemple sans enjeu que comprendre parfaitement la théorie sans savoir appliquer. Trois : noter pour ne redemander qu’une fois. Je tiens des procédures à trous personnelles — étapes, raccourcis, pièges rencontrés — qui font que la deuxième occurrence est déjà autonome. Quatre : ancrer par l’usage répété : ce que je n’utilise pas trois fois, je le perds, donc je cherche les occasions de réutiliser. La preuve la plus récente que ça marche : [votre exemple réel — un logiciel statistique pris en main en trois sessions, une norme comptable creusée pour un projet, un outil de suivi appris pour une association]. Ce que j’ajoute pour ce stage : je ne pars pas de zéro sur les fondamentaux — comptabilité, Excel — donc le temps d’apprentissage portera sur vos outils et vos dossiers, pas sur la base. En conclusion : exemple d’abord, test petit, notes opérationnelles, répétition.',
    followUp: 'Et quand vous apprenez quelque chose qui contredit ce qu’on vous avait appris en cours, vous gérez comment ?',
    grading: [
      'Méthode décrite par gestes concrets (exemple, test petit, notes, répétition).',
      'Exemple réel d’apprentissage récent cité, vérifiable.',
      'Apprentissage actif : tester et se tromper, pas seulement lire.',
      'Notion de notes opérationnelles pour autonomiser la deuxième occurrence.',
    ],
  },
  {
    id: 'qt-012',
    job: 'general',
    category: 'rh',
    difficulty: 5,
    skill: 'Convention de stage et gratification (cadre français)',
    question: 'Vous êtes au courant du cadre d’un stage de fin d’études en France ? Parlez-moi de la convention de stage et de la gratification minimale.',
    expectedAnswer:
      'Le cadre français du stage repose sur le code de l’éducation. Trois piliers à restituer : (1) La convention de stage est obligatoire et tripartite — établissement d’enseignement, entreprise, stagiaire — signée avant le début du stage ; elle précise les missions, la durée, les modalités d’encadrement, la gratification et la protection sociale. Sans convention signée, le risque est la requalification du stage en relation de travail. (2) La durée : un stage ne peut excéder six mois par année d’enseignement (sauf exceptions pédagogiques) ; un PFE de six mois se situe exactement au plafond légal, et des plafonds de présence quotidienne et hebdomadaire s’appliquent. (3) La gratification : elle devient obligatoire dès que la durée du stage dépasse deux mois, consécutifs ou non, au cours d’une même année d’enseignement ; elle est versée chaque mois, sur la base d’un taux horaire minimal fixé par décret — taux révisé au rythme des revalorisations du SMIC — et des accords de branche ou d’entreprise peuvent prévoir un montant supérieur ; la gratification bénéficie en outre d’un régime social favorable dans certaines limites. ATTENTION : ne jamais réciter un montant précis appris par cœur — le taux évolue avec les revalorisations. Le bon réflexe en entretien : citer la règle, indiquer que le montant dépend du décret et des accords en vigueur, puis demander à l’employeur quel montant il applique.',
    reasoning:
      'Question de maturité contractuelle, redoutable car elle combine plusieurs règles qui se mordent la queue : seuil de durée, taux réglementaire révisable, hiérarchie décret/branche, plafond de six mois. Le candidat moyen confond stage et emploi, cite un montant appris qui n’est plus à jour, ou ignore le seuil des deux mois. Un stagiaire qui connaît le cadre planifie mieux (budget, logement, six mois d’engagement) et inspire confiance sur sa fiabilité contractuelle — en miroir, il saura un jour respecter les cadres légaux de son métier.',
    commonErrors: [
      'Réciter un montant précis appris par cœur comme s’il était gravé : les taux sont révisés.',
      'Ignorer le seuil des deux mois au-delà duquel la gratification est obligatoire.',
      'Oublier la convention tripartite ou croire qu’un simple « contrat » entreprise-étudiant suffit.',
      'Ignorer que des accords de branche ou d’entreprise peuvent prévoir un montant supérieur.',
    ],
    oralShort:
      'Un PFE de six mois en France repose sur une convention tripartite — école, entreprise, stagiaire — signée avant le début du stage. Six mois, c’est d’ailleurs la durée maximale d’un stage par année d’enseignement. Au-delà de deux mois de stage sur une même année, une gratification mensuelle devient obligatoire, sur la base d’un taux horaire minimal fixé par décret, révisé en même temps que le SMIC ; des accords de branche peuvent prévoir davantage. Je préfère donc vous demander le montant que vous appliquez, plutôt que d’annoncer un chiffre qui évolue.',
    oralLong:
      'Je structurerais la réponse en trois piliers. Premier pilier, la convention : en France, un stage intégré à un cursus pédagogique repose sur une convention tripartite entre l’établissement d’enseignement, l’entreprise et le stagiaire, signée avant la première journée ; elle décrit les missions confiées, la durée, l’encadrement, la gratification et la couverture en cas d’accident. Son absence est un vrai sujet : sans convention, le stage s’expose à une requalification en relation de travail. Deuxième pilier, la durée : la loi plafonne un stage à six mois par année d’enseignement, exceptions pédagogiques mises à part — notre PFE de six mois se tient donc exactement au plafond — et des plafonds de présence quotidienne et hebdomadaire encadrent le rythme. Troisième pilier, la gratification : dès que le stage dépasse deux mois, consécutifs ou non, au cours d’une même année d’enseignement, une gratification versée mensuellement s’impose, calculée sur un taux horaire minimal fixé par décret ; ce taux est révisé au rythme des revalorisations du SMIC, et les accords de branche ou d’entreprise peuvent prévoir un niveau supérieur — ce qui est le cas dans plusieurs professions. Sur le montant lui-même, je fais attention : je connais la règle, mais je ne réciterai pas un chiffre précis de mémoire, parce qu’il évolue — le réflexe juste en entretien est de vous demander quel taux vous appliquez. En conclusion : convention signée avant d’entrer, six mois au plafond, gratification obligatoire au-delà de deux mois sur un taux réglementaire révisable, et brancher plus favorable si accord — et je vérifie toujours les chiffres en vigueur au moment de signer.',
    followUp: 'Et si la durée du stage devait dépasser six mois pour un projet, que se passerait-il ?',
    grading: [
      'Convention tripartite citée avec ses trois acteurs et son caractère préalable.',
      'Durée maximale de six mois par année d’enseignement connue.',
      'Gratification : seuil des deux mois, versement mensuel, taux fixé par décret révisé.',
      'Aucun montant précis affirmé comme certain — renvoi au décret/branche en vigueur et question posée à l’employeur.',
    ],
  },
  {
    id: 'qt-013',
    job: 'general',
    category: 'relances',
    difficulty: 4,
    skill: 'Prétentions de gratification',
    question: 'Sur la gratification, justement : vous attendez quel montant ? Et si je vous dis qu’on a un budget serré, vous seriez prêt(e) à accepter un peu moins ?',
    expectedAnswer:
      'La gratification d’un stage ne se négocie pas comme un salaire : quand elle est obligatoire (stage de plus de deux mois), son minimum est un plancher réglementaire, pas un point de départ à la baisse. La réponse attendue en trois temps : (1) rappeler calmement le cadre — taux horaire minimal fixé par décret, révisé avec le SMIC, accords de branche ou d’entreprise éventuellement plus favorables — sans réciter de montant précis qui risque d’être périmé ; (2) retourner la question avec naturel : « quel montant appliquez-vous sur vos stages ? » ; (3) face à la proposition d’un montant inférieur au minimum : ne pas accepter sur l’instant, signaler avec tact que le minimum s’applique de plein droit au-delà de deux mois et proposer de vérifier ensemble le taux en vigueur. Message final : la vraie « négociation » d’un PFE porte sur les missions, l’encadrement et la suite éventuelle — pas sur quelques dizaines d’euros. Une entreprise qui demande en entretien de descendre sous le plancher envoie un signal d’alerte sur ses pratiques.',
    reasoning:
      'Relance typique après la question sur le cadre du stage : le recruteur teste si le candidat se laisse déstabiliser par l’argument du « budget serré ». Beaucoup de jeunes candidats acceptent par peur de perdre l’offre — et s’en mordent les doigts. Le recruteur raisonnable respecte un candidat qui connaît le plancher sans agressivité ; un recruteur qui insiste pour descendre sous le minimum révèle un problème de conformité que le stagiaire paiera autrement (heures, missions non encadrées).',
    commonErrors: [
      'Annoncer un montant précis appris par cœur, au risque d’être périmé ou hors cadre.',
      'Accepter en dessous du minimum légal pour ne pas perdre l’offre.',
      'Répondre « le montant ne compte pas pour moi » : les études et le logement ont un coût, le recruteur le sait.',
      'Transformer l’échange en bras de fer : ton ferme mais courtois requis.',
    ],
    oralShort:
      'Je ne vous annoncerai pas de chiffre de mémoire — le taux horaire est fixé par décret et il évolue avec le SMIC. Ce que je peux vous dire : au-delà de deux mois de stage, la gratification est obligatoire sur ce minimum, et votre branche peut prévoir davantage. Quel montant appliquez-vous sur vos stages ? Et si le budget est serré, c’est sur les missions et l’encadrement que je préfère discuter — c’est ce qui compte vraiment pour un PFE de six mois.',
    oralLong:
      'Je prendrais cette question calmement, parce qu’elle est un test de lucidité, pas de cupidité. Premier temps : le cadre. La gratification d’un stage de plus de deux mois est obligatoire — ce n’est pas une générosité d’employeur, c’est le code de l’éducation ; elle se calcule sur un taux horaire minimal fixé par décret, révisé au rythme des revalorisations du SMIC, et des accords de branche ou d’entreprise peuvent prévoir un montant supérieur. C’est précisément parce que ce taux évolue que je ne vous citerai pas de chiffre de mémoire — le réflexe professionnel, c’est de vous demander celui que vous appliquez. Deuxième temps, la proposition « un peu moins » : si l’on parle d’un montant inférieur au minimum réglementaire, je ne l’accepterai pas — pas par principe de rigidité, mais parce que ce plancher s’applique de plein droit, et qu’une entreprise sérieuse ne demande pas de le franchir. Si votre contrainte est réelle, je propose qu’on vérifie ensemble le taux en vigueur au moment de la signature. Troisième temps, la mise en perspective : pour un stage de fin d’études, ce qui se négocie vraiment — parce que ça change six mois de vie et le reste du parcours — c’est le contenu des missions, la qualité de l’encadrement et l’issue éventuelle. Je préfère investir notre temps de discussion là-dessus. En conclusion : le cadre réglementaire comme référence, votre montant appliqué comme donnée d’entrée, aucun passage sous le plancher, et l’essentiel de la négociation recentré sur le poste.',
    followUp: 'Et si on vous propose une gratification conforme mais des missions moins riches que prévu, vous signez quand même ?',
    grading: [
      'Cadre réglementaire rappelé sans montant périmé récité.',
      'Question retournée naturellement : « quel montant appliquez-vous ? ».',
      'Refus ferme et courtois de descendre sous le minimum obligatoire.',
      'Négociation recentrée sur les missions et l’encadrement.',
    ],
  },
  {
    id: 'qt-014',
    job: 'general',
    category: 'rh',
    difficulty: 1,
    skill: 'Disponibilité et contraintes',
    question: 'Vous seriez disponible à partir de quand ? Vous avez des contraintes — cours, mémoire, soutenance, déplacements ?',
    expectedAnswer:
      'Réponse précise et honnête : date de début réaliste (dès la fin des cours, en citant la vraie date), contraintes listées sans en rajouter ni en cacher : jours restants en école, dates de soutenance, éventuelles contraintes personnelles qui impactent le planning (logement à trouver, transport). Le recruteur veut caler un planning d’équipe : toute contrainte cachée explose au premier mois. Deux ajouts appréciés : proposer une confirmation rapide (« je peux vous confirmer sous 48 heures ») et signaler sa flexibilité réelle sur les périodes fortes (clôtures). Ne jamais gonfler sa disponibilité pour faire plaisir : un « je peux commencer demain » suivi de trois semaines de reports détruit la confiance.',
    reasoning:
      'Question logistique en apparence, test de fiabilité en réalité. Le recruteur compare ce qui sera dit ici avec ce qui se passera réellement : le candidat qui annonce des contraintes claires est celui qui annoncera aussi les retards. Inversement, celui qui cache une soutenance pour « ne pas faire d’histoires » reproduira ce schéma en période de clôture. La précision des dates est aussi un marqueur d’organisation.',
    commonErrors: [
      'Répondre « dès que vous voulez » sans vérifier ses propres échéances scolaires.',
      'Cacher des contraintes réelles (soutenance, cours résiduels) par peur de perdre l’offre.',
      'Donner un flou volontaire (« début d’année, je pense ») au lieu de dates.',
      'Oublier les contraintes matérielles qui conditionnent la mobilité (logement, transport).',
    ],
    oralShort:
      'Je peux commencer à partir du [votre date réelle], dès la fin de mes cours. Deux contraintes à connaître : [vos contraintes réelles — soutenance le X, jour(s) en école le Y]. Aucune ne devrait peser sur le planning d’équipe, je les ai déjà calées. Sur la mobilité, c’est réglé : [logement/transport]. Je peux vous confirmer ma réponse sous 48 heures — et sur les périodes de clôture, je suis pleinement disponible.',
    oralLong:
      'Je répondrais avec des dates, pas avec des intentions. Début possible : [date réelle], à la fin effective de mes cours — pas une date optimiste que je devrai déplacer ensuite. Contraintes réelles, listées maintenant plutôt qu’au moment où elles tomberont : ma soutenance est prévue le [date], et il me reste [nombre] journée(s) en établissement le [jour] — j’en ai déjà parlé avec mon école, ces absences sont posées et connues. Côté matériel : [logement trouvé / recherche ciblée sur la zone / transport maîtrisé]. J’ajoute deux choses qui comptent pour votre planning : d’abord, je peux vous confirmer ma décision sous 48 heures — je sais ce que valent six mois pour une équipe, une réponse qui traîne bloque tout le monde ; ensuite, sur les périodes fortes, clôtures ou pics de charge, ma disponibilité est complète : les contraintes que je viens de citer sont connues bien avant. Ce que je ne ferais pas : dire « je commence quand vous voulez » pour faire plaisir puis reporter trois fois — une disponibilité annoncée fausse, c’est la première preuve d’irrespect du planning des autres. En conclusion : une date nette, des contraintes posées, une confirmation rapide, une flexibilité réelle sur les pics.',
    followUp: 'Et si on vous demandait de commencer deux semaines plus tôt que prévu, ce serait possible ?',
    grading: [
      'Date de début précise et réaliste, vérifiée côté école.',
      'Contraintes listées honnêtement dès l’entretien (soutenance, jours en école).',
      'Confirmation rapide promise (délai annoncé).',
      'Flexibilité réelle sur les périodes fortes, sans promesse irréaliste.',
    ],
  },
  {
    id: 'qt-015',
    job: 'general',
    category: 'rh',
    difficulty: 2,
    skill: 'Projet professionnel',
    question: 'Où vous vous voyez dans cinq ans ? Quel est votre projet professionnel, honnêtement ?',
    expectedAnswer:
      'Un cap, pas un plan verrouillé. La bonne réponse donne une direction crédible et cohérente avec le stage (contrôleur de comptes en cabinet puis spécialisation ; comptable qui vise la maîtrise des clôtures et l’encadrement ; analyste trésorerie orienté gestion des risques ou financement), une ou deux étapes logiques (PFE → première expérience → certification éventuelle type DCG/DSCA ou CCA selon le parcours), et une pointe de lucidité assumée : « je sais que cinq ans, ça bouge — mais c’est cette direction-là qui motive mes choix de stage aujourd’hui ». Le recruteur vérifie que le stage s’inscrit dans un projet, pas dans un accident de candidature. Interdit : « cadre dirigeant » (vide), « votre poste » (flagorneur), et surtout « je ne sais pas du tout » (signale un stage subi plutôt que choisi).',
    reasoning:
      'Le recruteur évalue la stabilité probable : un projet cohérent avec le poste prédit un stagiaire investi, qui transformera le stage en accélérateur ; un projet sans rapport signale qu’il faut tout réapprendre et qu’il partira vite. La nuance attendue est le réalisme : cinq ans en assurance financière, c’est rarement gravé — mais la direction doit être nette. Le « je ne sais pas » est éliminatoire dans l’esprit du recruteur sans être dit comme tel.',
    commonErrors: [
      '« Cadre dirigeant » ou « directeur financier » sans aucune étape intermédiaire.',
      '« Votre poste » : flatterie repérable et peu crédible pour un débutant.',
      '« Je ne sais pas du tout » : le stage devient une case vide du parcours.',
      'Un projet incohérent avec le poste visé (contrôle de gestion clinique pour un stage d’audit).',
    ],
    oralShort:
      'Dans cinq ans, je me vois [métier cible crédible] avec [étape de certification ou d’expérience]. Le chemin que je vise : ce PFE pour maîtriser les fondamentaux, une première expérience confirmée dans le même métier, puis [spécialisation / certification]. Je sais que cinq ans, ça bouge — mais c’est bien cette direction qui motive mon choix de stage aujourd’hui : c’est elle qui rend ce stage utile, pas seulement obligatoire.',
    oralLong:
      'Je répondrais par une direction, des étapes, et une dose d’honnêteté. La direction : [métier cible — par exemple : auditeur confirmé en cabinet, comptable expérimenté sur les clôtures et le contrôle des comptes, analyste trésorerie orienté pilotage des flux]. Les étapes qui y mènent : ce PFE d’abord, pour acquérir les fondamentaux du métier en conditions réelles ; ensuite une première expérience confirmée dans la même famille de poste ; à terme, selon le parcours, une certification [DCG, DSCA, selon votre réalité] ou une spécialisation [selon votre projet réel]. L’honnêteté, maintenant : je sais qu’à cinq ans, les trajectoires bougent — un métier découvert pendant le stage peut déplacer la cible. Mais une chose ne bougera pas : je veux un métier où l’on vérifie et où l’on justifie, et c’est exactement ce que ce stage travaille. C’est pour ça que la cohérence compte autant pour moi que pour vous : un stage aligné sur mon projet, c’est six mois d’investissement réel, pas une ligne de CV. En conclusion : une direction nette, deux étapes datées, et la lucidité que le chemin s’ajustera — mais pas le cap.',
    followUp: 'Et si à la fin du stage on vous proposait un poste ici, mais dans un autre service que celui visé ?',
    grading: [
      'Direction crédible et cohérente avec le poste visé.',
      'Étapes intermédiaires concrètes (première expérience, certification).',
      'Lucidité assumée sur l’incertitude à cinq ans, sans « je ne sais pas ».',
      'Lien explicite : le stage comme accélérateur du projet, pas une obligation.',
    ],
  },
  {
    id: 'qt-016',
    job: 'general',
    category: 'pieges',
    difficulty: 4,
    skill: 'Différenciation (pourquoi vous et pas un autre)',
    question: 'Convainquez-moi : pourquoi vous, et pas un autre candidat qui aura le même diplôme et les mêmes cours que vous ?',
    expectedAnswer:
      'La réponse ne dit jamais « je suis le meilleur » ni ne dévalorise les autres candidats. Elle construit une combinaison singulière : ce que le poste exige réellement (fiabilité sur les tâches répétitives, vitesse d’apprentissage, tenue en période de charge) + mes éléments concrets et vérifiables qui y répondent (une preuve courte par argument, réelle) + ce que je m’engage à apporter dès les premières semaines (disponibilité sur les clôtures, montée en autonomie rapide, transparence sur les difficultés). Format : trois arguments maximum, chacun prouvé. La différenciation d’un débutant ne vient presque jamais du savoir — tout le monde a suivi les mêmes cours — mais du comportement de travail : ponctualité réelle, manière de demander de l’aide, façon de rendre compte. Le piège : réciter « motivé, sérieux, curieux » sans preuve — ce sont les adjectifs de tous les CV.',
    reasoning:
      'Piège classique de fin d’entretien : la question pousse soit à la survente (« je suis le meilleur »), soit à la comparaison avec les autres candidats — les deux disqualifiants. Le recruteur veut voir si le candidat sait ce qui le rend différent dans les faits, et s’il a compris que pour un stage, la différenciation est comportementale et pas technique. Ceux qui n’ont que des adjectifs révèlent qu’ils n’ont pas analysé le poste.',
    commonErrors: [
      'Dévaloriser les autres candidats (« ils sont moins sérieux que moi ») — toujours disqualifiant.',
      'Réciter « motivé, sérieux, dynamique » sans une seule preuve vérifiable.',
      'Se comparer sur le savoir (notes, classement) : tous les finalistes ont le même socle.',
      'Promettre l’impossible (« je maîtrise déjà tout ») : le premier jour révélera le contraire.',
    ],
    oralShort:
      'Je ne vous dirai pas que je suis meilleur que les autres — je ne les connais pas. Ce que je peux vous dire : ce poste exige fiabilité, vitesse d’apprentissage et tenue en période de charge. Sur la fiabilité, [preuve réelle courte]. Sur l’apprentissage, [preuve réelle courte]. Et je m’engage sur un point concret dès le premier mois : [engagement réaliste — transparence sur les difficultés, disponibilité sur les clôtures]. Voilà ce que je peux garantir.',
    oralLong:
      'Je commencerai par poser la règle : je ne connais pas les autres candidats, et les juger serait à la fois prétentieux et inutile. Ce que je peux faire, c’est vous montrer ce que JE garantis. Le poste, tel que je l’ai compris, exige trois choses d’un stagiaire : être fiable sur les tâches confiées, apprendre vite, et tenir la charge des clôtures. Premièrement, la fiabilité : [preuve réelle et datée — un livrable tenu en trois étapes, une fonction tenue dans une association : citez la vôtre]. Deuxièmement, la vitesse d’apprentissage : [preuve réelle — un outil ou une méthode pris en main en quelques sessions et réutilisé ensuite]. Troisièmement, la tenue en charge : [preuve réelle — une période où vous avez cumulé les échéances sans rien lâcher]. Et j’ajoute un engagement de début de stage, vérifiable dès le premier mois : [engagement réaliste — par exemple : « vous saurez toujours où j’en suis, y compris quand ça bloque ; je préfère une difficulté annoncée à une surprise »]. Ce que je ne ferai pas : vous promettre que je sais déjà tout — le premier dossier s’en chargera. La différence que je peux vous garantir, elle est dans la manière de travailler, pas dans le diplôme — le diplôme, mes concurrents l’auront aussi. En conclusion : trois exigences du poste, trois preuves réelles, un engagement vérifiable dès le premier mois.',
    followUp: 'Et votre plus grande zone de fragilité si on vous compare à un candidat qui a déjà fait un stage en cabinet, c’est quoi ?',
    grading: [
      'Aucune comparaison dévalorisante avec les autres candidats.',
      'Différenciation construite sur le comportement de travail, pas sur le savoir.',
      'Maximum trois arguments, chacun appuyé sur une preuve réelle courte.',
      'Engagement concret et vérifiable proposé pour le premier mois.',
    ],
  },
  {
    id: 'qt-017',
    job: 'general',
    category: 'rh',
    difficulty: 3,
    skill: 'Adhésion au travail répétitif',
    question: 'Soyons directs : une partie du travail ici, c’est répétitif — saisie, vérifications, contrôles qui se ressemblent. Vous allez en faire quoi ?',
    expectedAnswer:
      'La réponse honnête et mature : oui, le répétitif est réel et il est le socle du métier — la rigueur se construit dans la répétition, et un contrôle bien fait mille fois, c’est ça qui fiabilise les comptes. Puis montrer comment on garde qualité et motivation : comprendre le pourquoi de chaque tâche (chaque ligne vérifiée alimente la piste d’audit ou la fiabilité du rapprochement), se fixer des micro-objectifs de qualité (zéro erreur sur le lot du matin), améliorer son propre geste — raccourcis, modèles, check-lists personnels — sans jamais modifier le processus sans accord, et demander à intervalles réguliers un débriefing qualité avec le tuteur. Ce qui disqualifie : promettre qu’on ne fera jamais de tâche répétitive, ou avouer qu’on les fera mal (« je ferai avec le sourire en attendant mieux »).',
    reasoning:
      'Le recruteur protège son équipe : un stagiaire qui méprise les tâches répétitives les bâclera — or en comptabilité et audit, la valeur naît précisément du contrôle répété sans baisse de vigilance. La question teste le réalisme du candidat : ceux qui n’attendent que des missions « stratégiques » quittent le poste en dépression dès la deuxième semaine de saisie. La bonne réponse assume le répétitif et montre des mécanismes pour tenir la qualité.',
    commonErrors: [
      'Répondre « aucune tâche ne me déplaît » sans montrer le moindre mécanisme de qualité.',
      'Fuir la question en renvoyant sur la variété des missions du cabinet.',
      'Avouer une forme de mépris (« avec mon master, pas pour faire de la saisie »).',
      'Promettre d’améliorer les processus dès l’arrivée sans mandat : hors de son périmètre de stagiaire.',
    ],
    oralShort:
      'Je le dis tel quel : oui, une partie du travail sera répétitive, et c’est normal — la fiabilité des comptes, ça se construit par des contrôles répétés sans baisse de vigilance. Pour tenir la qualité, je me fixe des micro-objectifs — zéro erreur sur le lot du matin —, j’améliore mon propre geste avec des check-lists et raccourcis, et je demande un débriefing régulier avec mon tuteur. Et je garde le pourquoi en tête : chaque ligne vérifiée rend les comptes un peu plus fiables.',
    oralLong:
      'D’abord, j’assume la réalité : oui, une partie du travail sera répétitive, et je ne vais pas faire semblant de m’en offusquer — c’est même un socle du métier : la fiabilité d’une clôture ou d’une piste d’audit, c’est la même vigilance appliquée mille fois sans s’endormir. Ensuite, je décris comment je tiens la qualité sur du répétitif. Un : garder le pourquoi — chaque ligne vérifiée, chaque rapprochement refait, ça alimente la fiabilité d’un ensemble plus grand ; quand je sais à quoi sert la tâche, je ne la bâcle pas. Deux : des micro-objectifs de qualité — par lot, par demi-journée : « ce lot sort sans erreur » ; c’est concret, mesurable, et ça maintient l’attention. Trois : améliorer mon propre geste, dans mon périmètre — check-list personnelle, raccourcis clavier, modèle de fichier — mais jamais toucher au processus d’équipe sans accord : ce n’est pas au stagiaire de réorganiser le circuit de validation. Quatre : un débriefing qualité à intervalles réguliers avec mon tuteur : savoir si mon taux d’erreur baisse, c’est la seule preuve que je progresse. Et si un jour la répétition devient vraiment un poids, j’en parle — je ne laisse pas la qualité glisser en silence. En conclusion : le répétitif est assumé, la qualité est pilotée par micro-objectifs et débriefing, et l’amélioration reste à ma main dans mon périmètre.',
    followUp: 'Et si après six semaines de saisie vous n’avez toujours rien vu d’autre, vous en parlez à qui, et comment ?',
    grading: [
      'Réalisme assumé : le répétitif est présenté comme socle du métier, pas nié.',
      'Mécanismes de qualité concrets (micro-objectifs, check-lists, débriefing tuteur).',
      'Pourquoi des tâches rappelé (fiabilité des comptes, piste d’audit).',
      'Aucune promesse de refonte des processus hors du périmètre du stagiaire.',
    ],
  },
  {
    id: 'qt-018',
    job: 'general',
    category: 'organisation',
    difficulty: 3,
    skill: 'Gestion de la charge en période de clôture',
    question: 'En période de clôture, la charge monte fortement ici : comment vous gérez ça, concrètement ?',
    expectedAnswer:
      'Une réponse en trois temps — avant, pendant, après. Avant : demander le calendrier de clôture dès l’arrivée (dates butoirs, jalons internes, rôles), anticiper ce qui peut l’être (modèles, jeux d’essai, procédures lues) et signaler ses propres contraintes connues. Pendant : prioriser par échéance dure, protéger des créneaux de concentration sans messages, garder la règle du blocage annoncé — prévenir tôt dès qu’un point risque de glisser ; accepter la fatigue en la gérant (pauses courtes, pas d’héroïsme qui dégrade la précision — en clôture, une erreur coûte plus cher que dix minutes de pause). Après : capitaliser — noter ce qui a pris du temps, les irritants, pour que la clôture suivante parte mieux. Un candidat mature peut aussi poser la question en retour : quelles sont réellement les attentes pendant ces périodes (rythme, heures, weekend) — c’est le moment de les cadrer, pas après la signature.',
    reasoning:
      'La clôture est le moment où un comptable ou un auditeur se révèle : le volume monte, les délais sont durs, la fatigue arrive. Le recruteur veut savoir si le candidat a un modèle — anticiper, prioriser, signaler, récupérer — ou s’il découvrira la charge en la subissant. Le marqueur différenciant : la conscience qu’en clôture, la précision prime la vitesse — celui qui accélère en sacrifiant la véracité des chiffres coûte cher à l’équipe.',
    commonErrors: [
      'Répondre « je travaillerai plus » sans aucune méthode derrière.',
      'Ignorer la fatigue et ses effets sur le taux d’erreur en fin de journée.',
      'Subir la charge sans jamais signaler un glissement de délai.',
      'Poser la question des heures et des weekends après la signature plutôt que pendant l’entretien.',
    ],
    oralShort:
      'Avant la clôture, je demande le calendrier et j’anticipe ce qui peut l’être : modèles, procédures, contraintes. Pendant, je priorise par échéance dure, je protège des créneaux de concentration, et je préviens tôt dès qu’un point risque de glisser. Et je gère la fatigue : en clôture, une erreur coûte plus cher que dix minutes de pause. Après, je note ce qui a pris du temps pour la clôture suivante. J’en profite aussi pour cadrer avec vous les attentes réelles sur ces périodes.',
    oralLong:
      'Je décrirais un cycle en trois temps. Avant la clôture : je demande le calendrier dès mon arrivée — dates de remise, jalons internes, qui fait quoi — et j’anticipe tout ce qui peut l’être : je lis les procédures de clôture, je prépare mes modèles de travail, je repère les points qui m’étaient déjà problématiques. Je signale aussi mes contraintes connues à ce moment-là, pas au milieu du rush. Pendant : je priorise par échéance dure — ce qui bloque la remise passe avant ce qui peut attendre 48 heures ; je protège des créneaux de concentration sans interruption pour les traitements longs ; et j’applique la règle du glissement annoncé : dès qu’un point risque de dériver, je le dis avec un nouveau point de rendez-vous — pendant une clôture, une surprise de dernière heure est ce qui coûte le plus cher à l’équipe. Sur la fatigue : je ne joue pas les héros — en fin de journée de clôture, le taux d’erreur monte ; je préfère dix minutes de pause et une re-vérification plutôt qu’un lot rendu vite et faux. Après : je capitalise — une note courte sur ce qui a pris du temps et pourquoi, pour que la clôture suivante parte plus vite. Et j’ajoute une question que je me permets de vous poser dès maintenant : quelles sont les attentes réelles pendant vos périodes de clôture — rythme, horaires ? Je préfère les cadrer maintenant, honnêtement, que de les découvrir en janvier. En conclusion : anticiper, prioriser, signaler, récupérer, capitaliser.',
    followUp: 'Et si votre tuteur vous demande de rester tard la veille d’une remise alors que vous aviez un engagement personnel, vous faites quoi ?',
    grading: [
      'Cycle avant/pendant/après décrit avec des actions concrètes.',
      'Règle du glissement annoncé pendant la charge (aucune surprise de dernière heure).',
      'Gestion de la fatigue orientée précision (pause vs erreur).',
      'Attentes de clôture cadrées pendant l’entretien, pas après la signature.',
    ],
  },
  {
    id: 'qt-019',
    job: 'general',
    category: 'rh',
    difficulty: 2,
    skill: 'Première impression en entreprise',
    question: 'Vous souvenez-vous de la première fois que vous avez mis les pieds dans une entreprise ? Qu’est-ce qui vous a surpris, concrètement ?',
    expectedAnswer:
      'Si le candidat a déjà vécu un stage, un emploi saisonnier ou même un jour d’observation : une observation précise de l’écart entre les cours et le réel — la lenteur des validations (une dépense traverse quatre personnes avant d’être payée), la place de la documentation (« ici, ce qui n’est pas écrit n’existe pas »), l’importance du relationnel et des codes, le temps réel des choses (une « simple » facture peut prendre une matinée). Une surprise citée avec un détail concret vaut mieux que trois généralités. Si le candidat n’a JAMAIS travaillé en entreprise : le dire franchement — « je n’ai pas encore vécu ça de l’intérieur » — puis raisonner à partir de ce qu’il a observé à côté (forums entreprises, visites, cabinets rencontrés, entretiens) et de ce qu’il s’attend à découvrir. Règle absolue : ne jamais emprunter l’anecdote d’un camarade — les détails inventés s’effondrent dès la première relance.',
    reasoning:
      'Question de lucidité et d’observation. Le recruteur veut distinguer ceux qui ont déjà transposé leur regard d’étudiant en regard professionnel — même brièvement — de ceux qui arrivent avec des représentations scolaires. Elle sert aussi de filet à mensonges : les candidats qui inventent une expérience décivent des surprises génériques ( « c’était très bien ») sans aucun détail vécu. La variante honnête « pas encore vécu » est parfaitement admissible et bien reçue.',
    commonErrors: [
      'Répondre « tout m’a semblé normal » : aucune observation, donc aucune curiosité.',
      'Emprunter l’anecdote d’un camarade : les détails s’effondrent à la relance.',
      'Répondre en généralités (« le monde de l’entreprise est intéressant ») sans un détail concret.',
      'Transformer la réponse en critique de l’entreprise où l’on a été accueilli.',
    ],
    oralShort:
      'Ce qui m’a surpris, [si vécu : dans mon expérience réelle], c’est la place de la documentation : ici, ce qui n’est pas écrit n’existe pas — une dépense traverse quatre validations avant d’être payée, et c’est le tracé écrit qui protège tout le monde. Et le temps réel des choses : une « simple » facture peut prendre une matinée. [Si non vécu : je ne l’ai pas encore vécu de l’intérieur — c’est justement ce que je veux vérifier dans ce stage : l’écart entre ce que j’imagine et le réel.]',
    oralLong:
      'Je prendrais cette question au sérieux, parce qu’elle teste mon regard. Si j’ai déjà mis les pieds dans une entreprise — stage, emploi saisonnier, jour d’observation — je cite UNE surprise précise plutôt qu’un panorama. Exemple de ce qui surprend le plus souvent, et que je vous laisse vérifier dans mon cas précis : la place de la documentation — en cours, on calcule ; en entreprise, on trace : ce qui n’est pas écrit n’existe pas, et une dépense traverse plusieurs validations avant d’être payée ; ou encore le temps réel : une « simple » facture peut prendre une matinée entre réception, contrôle, imputation et validation ; ou les codes — à qui peut-on poser une question, à quel moment, comment. Ce que je décrirais vraiment, c’est [votre surprise réelle, avec son détail : citez-la]. Si je n’ai pas encore travaillé en entreprise, je le dis tel quel : je n’ai pas encore vécu ça de l’intérieur — je m’appuie alors sur ce que j’ai vu à côté [forum, visite, entretien] et j’assume mon attente principale : mesurer l’écart entre ce que j’imagine du métier et sa réalité — c’est une des raisons pour lesquelles je voulais un stage de six mois plutôt qu’un contact court. Ce que je ne ferais jamais : emprunter l’anecdote d’un camarade — à la première relance, les détails manquent et tout s’écroule. En conclusion : une surprise précise et vécue, ou l’aveu franc de ne pas encore l’avoir vécue, avec ce que je compte y observer.',
    followUp: 'Et cette surprise-là, elle a changé quoi dans votre façon de préparer ce stage ?',
    grading: [
      'Une seule surprise précise avec détail concret, pas un panorama de généralités.',
      'Regard orienté professionnel (documentation, délais, codes) et non scolaire.',
      'Variante honnête « pas encore vécu » correctement menée si nécessaire.',
      'Aucune anecdote empruntée ou inventée.',
    ],
  },
  {
    id: 'qt-020',
    job: 'general',
    category: 'relances',
    difficulty: 3,
    skill: 'Questions à poser au recruteur',
    question: 'Bon, vous avez des questions à me poser ? C’est le moment.',
    expectedAnswer:
      'Ne JAMAIS répondre « non, vous avez tout dit » : c’est le signal le plus négatif de tout l’entretien — désintérêt ou passivité. Préparer deux à trois questions vivantes, dont au moins une sur le poste lui-même. Panoplie de bonnes questions, par famille — Le poste et les attentes : « Comment se répartit le travail entre le tuteur et le stagiaire au quotidien ? », « Quelles seront mes premières tâches concrètes les deux premières semaines ? », « Comment jugez-vous qu’un stage de six mois est réussi de votre côté ? ». — L’équipe et l’encadrement : « Avec combien de personnes vais-je travailler directement ? », « Qui évalue mon travail, et à quel rythme ? ». — Le contexte métier : « Comment l’équipe vit-elle les périodes de clôture ? », « Sur quels logiciels vais-je travailler — puis-je me familiariser avec certains en amont ? ». — La suite : « Que deviennent généralement vos stagiaires après leur PFE ? ». Clôturer par une question de process : « Quelle est la prochaine étape, et selon quel calendrier ? ». À éviter absolument : la gratification en première question (attendre que le sujet soit ouvert par le recruteur), les congés et horaires avant toute promesse d’embauche, les questions dont la réponse est sur le site web de l’entreprise, et le silence. Les questions posées sont elles-mêmes évaluées : elles montrent ce que le candidat juge important.',
    reasoning:
      'Dernier piège de l’entretien, inversé : après une heure de questions subies, le recruteur transfère la responsabilité au candidat. « Non, aucune question » conclut l’entretien sur une image de consommateur passif. Les questions choisies révèlent la hiérarchie des priorités du candidat : poser d’abord sur les congés annonce un rapport au travail ; poser sur les attentes et l’encadrement annonce un investissement. Une bonne dernière question laisse une impression finale positive — l’effet de récence joue à plein.',
    commonErrors: [
      '« Non, vous avez tout dit » : signal de désintérêt — l’erreur la plus coûteuse de tout l’entretien.',
      'Poser la question de la gratification en premier : mauvaise hiérarchie des priorités.',
      'Poser une question dont la réponse figure sur le site web : préparation insuffisante.',
      'Enchaîner cinq questions préparées d’affilée sans écouter les réponses : la liste devient un interrogatoire inversé.',
    ],
    oralShort:
      'Oui, trois. D’abord, sur le poste : quelles seraient mes premières tâches concrètes les deux premières semaines ? Ensuite, sur l’encadrement : qui évalue le travail du stagiaire, et à quel rythme ? Et comment jugez-vous, de votre côté, qu’un stage de six mois est réussi ? J’ajoute une dernière question de process : quelle est la prochaine étape, et selon quel calendrier ?',
    oralLong:
      'Je prendrais ce moment au sérieux — les questions posées sont évaluées autant que les réponses données. Ma sélection, trois questions vivantes, une par étage. Sur le poste, d’abord : « Quelles seront mes premières tâches concrètes les deux premières semaines ? » — cette question montre que je veux démarrer utile, pas attendre qu’on m’occupe ; et la réponse me dit si le démarrage est organisé ou improvisé. Sur l’encadrement, ensuite : « Qui évalue le travail du stagiaire, et à quel rythme ? » — parce que pour progresser en six mois, j’ai besoin de retours réguliers, y compris négatifs. Sur le contexte, encore : « Comment l’équipe vit-elle les périodes de clôture ? » — pour entendre la réalité du rythme, pas la version brodée. Et selon vos réponses, je peux ajuster : si vous me parlez des logiciels utilisés, je demanderai si je peux me familiariser en amont avec certains d’entre eux. Je termine toujours par une question de process : « Quelle est la prochaine étape, et selon quel calendrier ? » — elle signale que je gère aussi ma candidature comme un professionnel. Ce que j’évite soigneusement : la gratification en première question — le sujet s’ouvre naturellement quand le cadre du stage est abordé ; les questions de congés avant toute promesse ; et tout ce dont la réponse est déjà sur votre site web. Et si vraiment tout a été traité, je le dis honnêtement : « vous avez couvert les points que j’avais notés — puis-je vous demander, du coup, ce qui différencie, selon vous, un bon stagiaire d’un très bon ? ». En conclusion : trois questions préparées, une par étage — poste, encadrement, contexte — plus une clôture de process.',
    followUp: 'Et qu’est-ce que vous, vous aimeriez trouver dans un tuteur — on vous l’a déjà demandé, mais soyez précis ?',
    grading: [
      'Au moins une question sur le poste et les attentes concrètes du démarrage.',
      'Aucune question dont la réponse est en ligne ou purement logistique en ouverture.',
      'Question de process posée en clôture (prochaine étape, calendrier).',
      'Deux à quatre questions maximum, énoncées avec écoute des réponses.',
    ],
  },
  {
    id: 'qt-021',
    job: 'general',
    category: 'rh',
    difficulty: 2,
    skill: 'Attentes vis-à-vis du maître de stage',
    question: 'Qu’attendez-vous de votre maître de stage ? Parce qu’ici, certains sont très présents, d’autres pas du tout.',
    expectedAnswer:
      'Des attentes réalistes et formulées en comportements, pas en sentiments : une disponibilité régulière et courte (un point hebdomadaire structuré vaut mieux qu’un tuteur omniprésent), des retours directs y compris négatifs (une erreur corrigée tôt fait gagner des semaines), l’explication du pourquoi des tâches (comprendre la finalité d’un contrôle, pas seulement le geste), et une délégation progressive avec droit à l’erreur encadré. Le candidat doit aussi montrer son adaptation : le tuteur a son propre métier à faire — je m’adapte à son style de présence, je viens avec des questions préparées et groupées plutôt que d’attendre qu’il devine mes besoins. Ce qui disqualifie : demander un professeur particulier permanent (irréaliste), ou dire « aucun besoin d’encadrement » (signale un candidat qui ne progressera pas).',
    reasoning:
      'Le recruteur sait par expérience que la qualité d’un stage dépend à moitié du binôme tuteur-stagiaire : il cherche un candidat qui saura tirer parti de N’IMPORTE QUEL style de tuteur. Les attentes irréalistes (tuteur disponible à volonté) prédisent une déception rapide ; l’absence totale d’attentes prédit un stagiaire passif. La bonne réponse formule des besoins précis ET un plan B d’auto-encadrement.',
    commonErrors: [
      'Attendre un tuteur disponible à la demande, comme un professeur particulier.',
      'L’inverse : « je n’ai besoin de personne » — aucun retour, aucune progression.',
      'Formuler des attentes émotionnelles (« quelqu’un de bienveillant ») sans comportement concret.',
      'Oublier que le tuteur a sa propre charge de travail : attentes non ajustées au réel.',
    ],
    oralShort:
      'Quatre attentes précises : un point hebdomadaire structuré, même court ; des retours directs, y compris négatifs — une erreur corrigée tôt fait gagner des semaines ; le pourquoi des tâches, pas seulement le geste ; et une délégation progressive avec droit à l’erreur encadré. Et je m’adapte au style du tuteur : questions préparées et groupées, jamais de demande permanente. S’il est peu présent, j’organise moi-même mon suivi — l’encadrement, c’est aussi ce que je viens chercher.',
    oralLong:
      'Je formulerai des attentes en comportements observables, parce que « un bon tuteur » ne veut rien dire sans précision. Quatre besoins précis. Un : une disponibilité régulière et courte — un point hebdomadaire de vingt minutes, structuré, vaut infiniment mieux qu’un tuteur omniprésent : ce qui compte, c’est la régularité, pas la quantité. Deux : des retours directs, y compris quand ils sont négatifs — la phrase qui me fait le plus progresser, c’est « ce n’est pas bon, et voici pourquoi » ; une erreur corrigée à la deuxième semaine fait gagner un mois. Trois : le pourquoi des tâches — je ne demande pas qu’on me réexplique le geste chaque fois, mais qu’on m’explique une fois la finalité : pourquoi ce contrôle, pourquoi ce rattachement. Quatre : une délégation progressive — des tâches de plus en plus larges, avec un droit à l’erreur encadré : c’est ce qui transforme six mois en vraie expérience plutôt qu’en observation. Et j’ajoute la symétrie, parce que votre question le sous-entend : le tuteur a son métier à faire. Je m’adapte à son style — s’il est très présent, j’en profite ; s’il est débordé, je groupe mes questions par écrit, je viens avec des points précis, et je proposerai moi-même le rythme de mes points hebdomadaires. L’encadrement ne doit pas être un service subi des deux côtés : c’est un accord de travail. En conclusion : régularité, franchise, finalité, délégation — et de mon côté, préparation et adaptation.',
    followUp: 'Et si après un mois vous réalisez que le courant ne passe pas avec votre tuteur, vous en faites quoi ?',
    grading: [
      'Attentes formulées en comportements concrets (point hebdomadaire, retours directs, pourquoi, délégation).',
      'Adaptation au style du tuteur annoncée (questions groupées, auto-organisation).',
      'Aucune demande de disponibilité permanente, aucun « aucun besoin ».',
      'Vision symétrique de la relation d’encadrement (accord de travail, pas service subi).',
    ],
  },
  {
    id: 'qt-022',
    job: 'general',
    category: 'rh',
    difficulty: 3,
    skill: 'Réaction à la critique',
    question: 'Si je vous dis que votre travail est mauvais — alors que vous y avez passé deux jours — vous réagissez comment ?',
    expectedAnswer:
      'Séparer l’ego du livrable. La séquence attendue : écouter sans interrompre ni se justifier immédiatement ; reformuler pour identifier le critère précis (mauvais sur quoi : le fond, la forme, la méthode, le délai ?) ; demander un exemple concret de ce qui serait bon ; repartir avec un plan correctif court et un point de contrôle ; capitaliser (noter le critère pour ne plus le rater). Le recruteur cherche la capacité à convertir une critique en information : en stage, un retour rugueux à J+2 vaut mieux qu’une erreur découverte en clôture — la critique rapide est un accélérateur d’apprentissage. Ce qui disqualifie : la justification défensive immédiate (« oui mais c’est parce que… »), la contrition excessive (« oui, je suis vraiment nul »), et la critique intériorisée qui ressort en rancune silencieuse.',
    reasoning:
      'Question stress simulé : le recruteur déclenche volontairement l’association « travail rejeté = personne rejetée » pour observer la réaction de défense. Les profils qui se justifient avant d’avoir compris ralentissent toute l’équipe ; ceux qui sur-admettent manquent de confiance ; ceux qui convertissent la critique en critère d’amélioration deviennent rapidement fiables. La qualité du premier réflexe — écouter, clarifier, corriger — est un prédicteur direct du comportement en mission.',
    commonErrors: [
      'Se justifier immédiatement avant même d’avoir compris le critère du recruteur.',
      'Prendre la critique pour une attaque personnelle et répondre sur le ton de la défense.',
      'Sur-admettre (« oui, je suis nul ») : absence de confiance, inconfort pour l’équipe.',
      'Intérioriser la critique et la ressortir en rancune passive les jours suivants.',
    ],
    oralShort:
      'D’abord, j’écoute sans me justifier — la justification avant la compréhension, c’est le meilleur moyen de rater l’information. Ensuite je clarifie : mauvais sur quoi, exactement — le fond, la forme, la méthode ? Et je demande un exemple de ce qui serait bon. Je repars avec un plan correctif court et un point de contrôle. En stage, une critique à J+2 vaut mieux qu’une erreur découverte en clôture : je la traite comme une information, pas comme un jugement.',
    oralLong:
      'Je décrirais ma séquence, parce que la question teste un réflexe plus qu’une opinion. Premier réflexe : écouter jusqu’au bout, sans couper, sans me justifier — les deux jours passés sur le travail me donnent envie de défendre, je le sais ; mais se justifier avant d’avoir compris le critère, c’est la façon la plus rapide de rater l’information. Deuxième temps : clarifier. « Mauvais » est un verdict, pas un critère — je demande : mauvais sur quoi ? Le fond — les chiffres sont faux ? La forme — c’est illisible pour le destinataire ? La méthode — j’ai refait ce qui existait déjà ? Le délai ? Troisième temps : repartir avec du concret — un exemple de ce qui serait bon, si possible, et un plan correctif court : ce que je reprends, dans quel ordre, pour quand. Et je propose un point de contrôle rapide pour valider la correction avant de repartir deux jours dans l’autre sens. Dernier temps : capitaliser — je note le critère manqué, parce qu’une même remarque deux fois, c’est moi qui ai un problème d’apprentissage. Je veux aussi assumer quelque chose honnêtement : la critique rugueuse, ça pique — je ne vais pas prétendre le contraire. Mais en stage, un retour dur à J+2 m’évite une erreur devant le client ou en clôture : c’est littéralement un service. Ce que je ne ferais pas : sur-admettre (« je suis vraiment nul ») — ça n’aide personne — ni enfouir la remarque et la ressortir en rancune : le travail revient toujours, la rancune pourrit l’équipe. En conclusion : écouter, clarifier le critère, corriger vite avec contrôle, capitaliser — et prendre la critique comme une information, jamais comme un jugement de personne.',
    followUp: 'Et si la critique est fausse — le travail était bon, le recruteur s’est trompé — vous défendez votre position comment ?',
    grading: [
      'Écoute complète avant toute justification.',
      'Clarification du critère précis (fond, forme, méthode, délai) demandée.',
      'Plan correctif court + point de contrôle proposé.',
      'Critique traitée comme information accélérant l’apprentissage, pas comme jugement.',
    ],
  },
  {
    id: 'qt-023',
    job: 'general',
    category: 'rh',
    difficulty: 2,
    skill: 'Gestion des priorités changeantes',
    question: 'Vous êtes plongé(e) dans un dossier depuis deux heures, et un senior arrive en urgence avec tout autre chose : vous faites quoi ?',
    expectedAnswer:
      'Pas de réponse unique — une mini-méthode en quatre gestes : (1) évaluer l’urgence réelle en demandant « pour quand, exactement ? » — beaucoup d’urgences annoncées sont des priorités mal calibrées ; (2) sécuriser le travail en cours : sauvegarder, noter en une ligne où j’en suis pour pouvoir y revenir sans tout relire ; (3) arbitrer en disant ce que je tiens et ce que je lâche — « je peux livrer X à 17 heures, mais Y glisse à demain matin : ça vous convient ? » — l’arbitrage annoncé protège les deux demandeurs ; (4) prévenir tôt toute personne impactée par le glissement. L’erreur fatale : dire oui à tout et ne rien livrer, ou refuser l’urgence sans comprendre l’enjeu. La compétence réelle évaluée : gérer DEUX engagements concurrents par la transparence, pas par le silence.',
    reasoning:
      'En cabinet comme en comptabilité, les priorités changent plusieurs fois par jour — le stagiaire est le maillon auquel on délègue l’urgence du moment. Le recruteur veut voir si le candidat a un réflexe de sécurisation et d’annonce (ce qui glisse est dit), ou s’il sombre dans le oui-à-tout. Ceux qui répondent « je fais ce qu’on me dit, dans l’ordre » n’ont jamais géré deux promesses concurrentes : ils découvriront le problème en faisant échouer les deux.',
    commonErrors: [
      'Dire oui à tout et ne tenir ni l’urgence ni le dossier initial.',
      'Refuser l’urgence sans chercher à comprendre son enjeu réel.',
      'Laisser le dossier en cours en plan sans noter où l’on s’est arrêté.',
      'Faire glisser un délai en silence : le destinataire découvre l’absence du livrable.',
    ],
    oralShort:
      'D’abord je demande : pour quand, exactement ? — certaines urgences annoncées sont mal calibrées. Ensuite je sécurise mon dossier en cours : sauvegarde, et une ligne sur où j’en suis. Puis j’arbitre en le disant : « je peux livrer X ce soir, mais Y glisse à demain — ça vous va ? ». Et je préviens tôt la personne impactée par le glissement. Deux engagements concurrents, ça se gère par la transparence, pas par le silence.',
    oralLong:
      'Je décrirais quatre gestes, parce que la question est une situation, pas une opinion. Premier geste : calibrer l’urgence. La première chose que je demande au senior, c’est « pour quand, exactement ? » — parce qu’il y a deux sortes d’urgences : celle qui est due à 16 heures, et celle qui est due « quand vous pouvez » ; les traiter pareil, c’est se tromper sur les deux. Deuxième geste : sécuriser le travail en cours. Avant de basculer, je sauvegarde et j’écris une ligne d’état — où j’en suis, ce qui reste, quel est le prochain pas — pour pouvoir revenir au dossier dans trois heures sans tout relire. Cinq minutes qui font gagner une heure. Troisième geste : arbitrer en le disant. Je ne dis pas seulement « oui » à l’urgence : je dis ce que je tiens et ce que je lâche — « je peux livrer X à 17 heures, mais Y glisse à demain matin : ça vous convient ? ». Cette phrase protège les deux demandeurs : le senior sait ce qu’il obtient, et celui qui attendait Y n’est pas surpris. Quatrième geste : prévenir tôt. Si Y glisse, la personne qui attend Y l’apprend de moi maintenant, pas au moment de l’absence du livrable. Ce que j’évite absolument : le oui-à-tout — c’est la façon la plus rapide de rater les deux engagements — et le refus sec de l’urgence sans comprendre l’enjeu : parfois l’urgence est réelle, et c’est la relation de confiance qui se joue. En conclusion : calibrer, sécuriser, arbitrer en le disant, prévenir — la transparence comme méthode de gestion de deux priorités concurrentes.',
    followUp: 'Et si le senior vous demande de lâcher les deux dossiers pour un troisième, là, tout de suite ?',
    grading: [
      'Calibrage de l’urgence réelle (« pour quand, exactement ? »).',
      'Sécurisation du travail en cours (sauvegarde + ligne d’état).',
      'Arbitrage explicité : ce qui est tenu, ce qui glisse, accordé avec le demandeur.',
      'Prévention précoce de la personne impactée par le glissement.',
    ],
  },
  {
    id: 'qt-024',
    job: 'general',
    category: 'pieges',
    difficulty: 3,
    skill: 'Autres process de recrutement en cours',
    question: 'Vous passez d’autres entretiens en ce moment ? Vous êtes attendu(e) ailleurs ?',
    expectedAnswer:
      'L’honnêteté est la seule stratégie viable — les recruteurs du même bassin se parlent, et le mensonge d’exclusivité se retourne toujours. Si oui : assumer sans détailler les noms ni jouer la surenchère — « j’avance sur d’autres processus, je ne vais pas vous faire croire le contraire ; mais votre poste est particulièrement aligné avec mon projet, pour [raison précise] ». L’objectif : signaler une désirabilité réelle sans faire de chantage. Si non : ne pas donner une image d’indésirable — « j’ai démarré mes recherches récemment et je cible peu de structures, très précisément, selon [critères] » : la sélectivité assumée vaut mieux que l’aveu d’un mailing massif sans réponse. Dans les deux cas, la question en retour est légitime : « de votre côté, où en êtes-vous du process, et quand prévoyez-vous de décider ? » — elle recentre l’échange sur un calendrier partagé.',
    reasoning:
      'Piège à double détente : le recruteur teste à la fois l’honnêteté (mentir sur des entretiens parallèles est le mensonge le plus souvent découvert) et le rapport de force (le candidat qui brandit ses autres offres fait du chantage ; celui qui n’a rien semble indésirable). La bonne réponse tient les deux : vérité factuelle, position sans rapport de force, recentrage sur le calendrier commun.',
    commonErrors: [
      'Mentir (« non, vous êtes les seuls ») : les recruteurs du même secteur se parlent.',
      'Brandir les autres offres comme un levier de pression : chantage mal perçu.',
      'Répondre « non, personne ne m’a répondu » : image d’indésirable auto-infligée.',
      'Détailler les noms des entreprises et l’état exact de chaque process : inutile et indiscret.',
    ],
    oralShort:
      'Oui, j’avance sur d’autres processus — je ne vais pas vous faire croire le contraire, ce serait vous manquer de respect. Mais votre poste est particulièrement aligné avec mon projet, pour [raison précise]. Si vous me proposez, vous aurez ma réponse dans les 48 heures. Et de votre côté, où en êtes-vous du process, et quand prévoyez-vous de décider ? J’aimerais qu’on garde un calendrier commun.',
    oralLong:
      'Je traiterai cette question comme une question d’honnêteté, pas de stratégie — parce qu’elle est les deux. D’abord le fait : [réponse réelle — oui, j’avance sur d’autres processus / j’ai démarré mes recherches récemment]. Si je suis en cours ailleurs : je le dis sans détour, sans citer les noms — ce n’est ni discret ni utile — et surtout sans m’en servir comme d’un levier. Ce qui intéresse un recruteur, ce n’est pas de savoir que je suis convoité, c’est de savoir si je suis sincère sur SON poste : j’enchaîne donc immédiatement sur la raison pour laquelle ce stage est aligné — [raison précise : le type de missions, la durée, l’encadrement décrits correspondent à mon projet]. Et j’ajoute mon engagement de calendrier : si vous me faites une proposition, vous aurez ma réponse sous 48 heures — je sais ce que coûte un process qui traîne pour une équipe. Si au contraire je n’ai pas d’autre entretien : je le dis aussi, mais je le cadre correctement — « j’ai démarré mes recherches il y a peu, et je cible volontairement peu de structures, selon des critères précis » — la sélectivité assumée est une information, l’aveu d’un mailing sans réponse en est une autre. Dans tous les cas, je termine par la question symétrique, légitime : « de votre côté, où en êtes-vous, et quand prévoyez-vous de décider ? » — elle replace l’échange sur un calendrier partagé plutôt que sur un rapport de force. En conclusion : le fait vrai, la raison de l’alignement, mon engagement de délai, et la question du calendrier commun.',
    followUp: 'Et si on vous fait une proposition avant les autres, vous annulez vos autres entretiens ?',
    grading: [
      'Vérité factuelle assumée, aucun mensonge d’exclusivité.',
      'Aucun chantage ni surenchère sur les autres offres.',
      'Raison de l’alignement avec CE poste explicitée immédiatement.',
      'Engagement de délai de réponse annoncé + question du calendrier du recruteur.',
    ],
  },
  {
    id: 'qt-025',
    job: 'general',
    category: 'rh',
    difficulty: 2,
    skill: 'Représentation du quotidien du poste',
    question: 'Décrivez-moi ce que vous imaginez d’une journée type ici, dans ce poste. Allez-y, décrivez-la moi.',
    expectedAnswer:
      'Le recruteur veut détecter les représentations irréalistes avant qu’elles deviennent des déceptions de stage. La bonne réponse décrit un mélange crédible : une majorité de tâches techniques (traiter des pièces, contrôler, rapprocher, préparer des feuilles de travail) entrecoupées de points courts avec le tuteur ou l’équipe, des imprévus qui tombent, et une part administrative inévitable — en s’appuyant sur ce qui est décrit dans l’offre de stage et sur le métier visé. Deux caricatures à éviter : la journée 100% technique et passionnante (mission-cinéma : réunions clients, décisions stratégiques dès le matin), et la journée photocopies (autodévalorisation inverse). Bonus apprécié : conclure par l’honnêteté — « je me doute que je me trompe sur certains points ; c’est justement une des questions que je vous poserai : quel est le vrai ratio entre tâches techniques et temps d’équipe ? ».',
    reasoning:
      'Cette question fonctionne comme un détecteur de déceptions futures : un stagiaire qui imagine un quotidien faux vivra ses premières semaines comme une trahison et décrochera. Le recruteur vérifie que le candidat a construit une représentation à partir de l’offre, du métier réel et non d’une image de série. La capacité à décrire PUIS à vérifier (« corrigez-moi ») signale une lucidité rare chez les débutants.',
    commonErrors: [
      'Décrire une journée de film : réunions stratégiques, décisions dès le café.',
      'L’inverse : une journée de photocopies et de café, autodévalorisante.',
      'Réciter l’offre de stage mot pour mot sans aucune projection personnelle.',
      'Décrire la journée sans jamais proposer de vérifier son hypothèse auprès du recruteur.',
    ],
    oralShort:
      'D’après l’offre et ce que je connais du métier, j’imagine : une majorité de temps technique — traiter des pièces, contrôler, rapprocher, préparer des feuilles de travail — des points courts avec mon tuteur, et des imprévus qui tombent en cours de journée. Une part administrative aussi, je suppose. Je me doute que je me trompe sur certains points — c’est justement une question que je vous poserai : quel est le vrai partage entre tâches techniques et temps d’équipe ?',
    oralLong:
      'Je partirais de ce que je sais — l’offre de stage, le métier visé — et j’assumerai la part d’hypothèse, parce qu’une journée type se vérifie, elle ne se devine pas. Ma représentation, en trois blocs. Le socle : de la tâche technique, en majorité — traiter des pièces, contrôler des rapprochements, préparer des feuilles de travail, saisir ou re-vérifier des écritures selon le poste ; du travail concentré, à mon poste, avec un objectif de production clair pour la journée. Les respirations : des points courts avec le tuteur ou l’équipe — quinze minutes pour cadrer, valider, corriger — et, selon le métier, des échanges utiles : un client contacté, un fournisseur relancé, un collègue d’un autre service sollicité. La texture réelle : des imprévus — une pièce manquante, une urgence qui tombe, un fichier à reprendre — et une part administrative inévitable : classer, nommer, archiver. Ce que j’imagine aussi, honnêtement : des journées inégales — une clôture mensuelle ne ressemble pas à une semaine creuse, et c’est normal. Et je termine comme je crois qu’il faut terminer : en demandant la correction — « je me doute que je me trompe sur certains points : quel est, selon vous, le vrai partage entre tâches techniques et temps d’équipe sur une journée de stagiaire ici ? ». Cette question vaut plus que toutes mes hypothèses. En conclusion : un quotidien décrit à partir de l’offre, avec sa part d’incertitude assumée — et la vérification demandée au recruteur, qui transforme l’exercice en échange.',
    followUp: 'Et dans votre description, qu’est-ce qui vous attire le moins, soyez honnête ?',
    grading: [
      'Journée décrite à partir de l’offre et du métier réel, pas d’une image de série.',
      'Majorité de tâches techniques assumée, respirations d’équipe décrites.',
      'Imprévus et part administrative intégrés sans drame.',
      'Représentation soumise à vérification auprès du recruteur (« corrigez-moi »).',
    ],
  },
  {
    id: 'qt-026',
    job: 'general',
    category: 'rh',
    difficulty: 1,
    skill: 'Comportemental — travail en équipe (STAR)',
    question: 'Racontez-moi une situation où vous avez travaillé en équipe sur un projet. Quel était votre rôle, exactement ?',
    expectedAnswer:
      'Question comportementale : ne jamais répondre dans l’abstrait. Structurer en STAR — Situation (le cadre, une à deux phrases : quel projet, combien de personnes, quelle échéance), Tâche (ce qui était attendu de MOI précisément), Action (ce que j’ai fait, à la première personne, étape par étape — c’est le cœur, la moitié du temps de réponse), Résultat (l’effet obtenu, si possible mesurable, et ce que j’en retiens). À titre d’illustration pédagogique — exemple générique, à NE JAMAIS réciter tel quel et à remplacer par une situation RÉELLE du parcours : un dossier universitaire à quatre, trois semaines pour le rendre ; ma part était l’analyse chiffrée et la consolidation des contributions ; j’ai posé un plan de travail partagé daté dès le premier jour, un point de dix minutes chaque semaine, et j’ai relancé la personne en retard trois jours avant l’échéance plutôt que la veille ; le dossier est parti à l’heure et la note a reflété la qualité de la partie commune. Règle d’honnêteté absolue : si la seule situation réelle est minuscule (un devoir à deux, une commission d’association), elle vaut mieux qu’une anecdote spectaculaire inventée — le recruteur écoute la structure et la précision, pas le caractère héroïque. Et si vraiment aucune situation d’équipe ne vient : le dire — « je n’ai pas encore rencontré ce cas en entreprise, mais voici comment je raisonnerais… » — puis dérouler le raisonnement à voix haute.',
    reasoning:
      'Le recruteur écoute trois choses : le « je » (ce que le candidat a fait lui-même, noyé dans un « on » collectif = signal d’effacement), la gestion d’un aléa d’équipe (retard, désaccord — sans aléa, l’exemple est trop lisse pour être vrai), et la précision des détails (une anecdote fabriquée s’effondre à la première relance « et le membre en retard, il a réagi comment ? »). La méthode STAR est attendue implicitement : ceux qui racontent en vrac révèlent leur désorganisation même dans la narration.',
    commonErrors: [
      'Dire « on a fait » du début à la fin sans jamais préciser SA part personnelle.',
      'Choisir une anecdote sans aucun aléa : trop lisse pour être crue.',
      'Réciter une anecdote préparée avec un ton monotone et aucun détail vivant.',
      'Inventer une expérience : les détails s’effondrent à la première relance du recruteur.',
    ],
    oralShort:
      '[Prenez une situation RÉELLE vécue, même modeste, et déroulez-la ainsi :] Sur [votre projet réel], nous étions [nombre] pour [livrable + échéance]. Ma part : [votre contribution précise]. J’ai [action 1 — ex. : plan de travail partagé dès le premier jour] et [action 2 — ex. : point hebdomadaire de dix minutes, relance à J-3 du membre en retard]. Résultat : [effet réel — ex. : dossier rendu à l’heure, note reflétant la partie commune]. Ce que j’en retiens : rendre sa part prévisible, c’est ça qui fait marcher une équipe.',
    oralLong:
      'Je structurerais ma réponse en STAR, parce que c’est ce qu’écoute un recruteur : Situation, Tâche, Action, Résultat. Situation — une à deux phrases : [votre situation réelle : le projet, la taille de l’équipe, l’échéance]. Tâche — ce qui était attendu de moi, précisément : [votre part]. Action — le cœur, à la première personne, étape par étape : [ce que vous avez réellement fait — par exemple : découpage du travail en contributions datées, point hebdomadaire court, relance anticipée du membre en retard, relecture croisée des parties avant assemblage]. Résultat — l’effet et l’apprentissage : [effet réel et, si possible, mesurable ; ce que vous en retenez]. À titre d’illustration pédagogique — et je le présente comme tel, c’est un exemple d’entraînement, pas une anecdote à réciter — on peut imaginer : un dossier à quatre sur trois semaines ; ma part : l’analyse chiffrée et la consolidation ; mes actions : plan daté dès le premier jour, point de dix minutes chaque semaine, relance à J-3 de la personne en retard ; résultat : rendu à l’heure, et la cohérence de l’ensemble a été remarquée. Si vous n’avez pas vécu de situation d’équipe digne de ce nom, ne fabriquez rien : dites-le — « je n’ai pas encore rencontré ce cas en entreprise — mes travaux de groupe sont plus modestes : voici le plus significatif… » ou, à défaut : « voici comment je raisonnerais dans une équipe, et ce que je chercherais à garantir : ma part prévisible, mes engagements tenus, mes blocages annoncés ». Un recruteur préfère un raisonnement honnête à une anecdote brillante mais creuse — la première relance suffit à faire s’écrouler la seconde. En conclusion : une situation réelle (même modeste), structurée STAR, des actions à la première personne, un résultat et un apprentissage — jamais une histoire inventée.',
    followUp: 'Et le membre du groupe qui était en retard — il a réagi comment, exactement, quand vous l’avez relancé ?',
    grading: [
      'Structure STAR identifiable (situation, tâche, actions personnelles, résultat).',
      'Actions décrites à la première personne — le « je » domine le « on ».',
      'Un aléa d’équipe géré apparaît dans le récit (relance, désaccord, retard).',
      'Situation réelle et vérifiable, ou variante honnête « pas encore vécu » assumée.',
    ],
  },
  {
    id: 'qt-027',
    job: 'general',
    category: 'rh',
    difficulty: 1,
    skill: 'Comportemental — apprentissage rapide (STAR)',
    question: 'Racontez-moi une situation où vous avez dû apprendre quelque chose de nouveau rapidement. Vous vous êtes pris comment ?',
    expectedAnswer:
      'Structurer en STAR, en gardant le cœur sur les ACTIONS d’apprentissage. À titre d’illustration pédagogique — exemple générique à remplacer par une situation RÉELLE : un logiciel de statistiques jamais vu, à maîtriser pour un projet à rendre en trois semaines ; mes actions : identifier ce que je savais déjà transférer (les concepts, pas l’outil), suivre deux tutoriels ciblés sur les fonctions nécessaires — pas la totalité du manuel —, tester immédiatement sur un petit jeu de données fictives, garder des notes d’utilisation, demander un point de dix minutes à un camarade qui maîtrisait l’outil quand j’ai bloqué ; résultat : projet rendu dans les temps, et l’outil réutilisé sans aide au semestre suivant. Ce que le recruteur écoute : la capacité à découper un apprentissage (qu’est-ce que je sais déjà / qu’est-ce qui manque / où est la ressource la plus rapide), et l’audace de demander de l’aide au bon moment plutôt que de bloquer seul. Variante honnête si aucune situation ne vient : « je n’ai pas encore rencontré ce cas sous cette forme, mais voici comment je raisonnerais… » puis dérouler le découpage à voix haute — l’important est de montrer la MÉTHODE d’apprentissage, pas la prouesse.',
    reasoning:
      'Le recruteur transpose directement : un stagiaire qui a su apprendre vite un outil inconnu apprendra vite les outils du cabinet. La question départage ceux qui décrivent un apprentissage piloté (cibler, tester petit, demander à bon escient) de ceux qui racontent un déclic magique (« ça a cliqué »). Les détails concrets — tutoriels ciblés, jeu de données d’essai, notes réutilisées — crédibilisent le récit ; leur absence le rend suspect.',
    commonErrors: [
      'Raconter sans actions : « j’ai appris l’outil, et voilà » — aucune méthode visible.',
      'Décrire un apprentissage exhaustif (tout le manuel) au lieu d’un apprentissage ciblé.',
      'Oublier de mentionner la demande d’aide au bon moment : signal d’orgueil.',
      'Emprunter un exemple de camarade : à la relance, les détails techniques manquent.',
    ],
    oralShort:
      '[Sur une situation RÉELLE :] J’ai découvert [outil/matière réelle] alors que [contrainte de temps réelle]. Mon découpage : ce que je savais déjà transférer, ce qui manquait vraiment, la ressource la plus rapide pour ça. J’ai testé tout de suite sur un petit cas — je me trompe vite, je corrige — et j’ai demandé un point de dix minutes à [personne réelle] quand j’ai bloqué. Résultat : [effet réel], et je l’ai réutilisé sans aide ensuite. C’est ma façon d’apprendre : cibler, tester petit, demander au bon moment.',
    oralLong:
      'Je raconterais une situation réelle en STAR — et si je n’en ai pas sous cette forme exacte, je le dirai et raisonnerai à voix haute, parce que c’est la méthode qui intéresse le recruteur, pas l’exploit. Situation : [votre cas réel — un outil, un langage, une matière rencontrés sous contrainte de temps]. Tâche : atteindre un niveau suffisant pour [livrable réel] d’ici [délai réel]. Action — le cœur, étape par étape : d’abord le découpage, ce que je savais déjà transférer — les concepts restent, seul l’outil change ; ensuite le ciblage : identifier les fonctions réellement nécessaires, environ quatre ou cinq, et n’apprendre qu’elles — pas le manuel complet ; puis le test immédiat sur un petit jeu de données ou un mini-cas : je préfère me tromper sur un exemple sans enjeu que comprendre parfaitement en théorie ; ensuite les notes d’utilisation — mes procédures à trous, pour que la deuxième utilisation soit autonome ; et enfin la demande d’aide au bon moment : un point de dix minutes avec [personne réelle qui maîtrisait], préparé par écrit, quand j’ai bloqué sur un point précis — pas avant d’avoir cherché, pas après avoir perdu une journée. Résultat : [effet réel — projet rendu dans les temps, outil réutilisé sans assistance au semestre suivant]. À titre d’illustration pédagogique — exemple d’entraînement, à ne pas réciter — on peut imaginer un logiciel de statistiques pris en main en trois semaines de cette façon. Si vous n’avez rien de comparable : « je n’ai pas encore rencontré ce cas en entreprise, mais voici comment je raisonnerais… » puis déroulez le découpage : savoir transférable, cible d’apprentissage, ressource la plus rapide, test petit, aide à bon escient. En conclusion : STAR avec le poids sur les actions, une méthode visible — cibler, tester, noter, demander — et jamais d’anecdote inventée.',
    followUp: 'Et la fois suivante, quand vous avez réutilisé l’outil — il vous restait quoi à apprendre ?',
    grading: [
      'Structure STAR avec le poids sur les actions d’apprentissage.',
      'Apprentissage ciblé décrit (fonctions nécessaires, pas le manuel complet).',
      'Test sur petit cas + notes pour la réutilisation.',
      'Demande d’aide au bon moment, préparée, après recherche personnelle.',
      'Situation réelle ou variante honnête « pas encore rencontré » assumée.',
    ],
  },
  {
    id: 'qt-028',
    job: 'general',
    category: 'organisation',
    difficulty: 1,
    skill: 'Comportemental — échéances multiples (STAR)',
    question: 'Racontez-moi une situation où vous aviez plusieurs choses à rendre en même temps. Comment vous vous en êtes sorti(e) ?',
    expectedAnswer:
      'Structurer en STAR, avec le cœur sur les actions d’ordonnancement. À titre d’illustration pédagogique — exemple générique à remplacer par une situation RÉELLE : une semaine avec deux examens, un dossier à rendre le vendredi et un engagement associatif le samedi ; mes actions : tout poser sur une feuille unique avec les vraies échéances, estimer les durées, repérer le goulot (le dossier exigeait un document d’un tiers — demande partie le lundi, pas le jeudi), construire le planning à rebours depuis chaque échéance, bloquer les créneaux de travail profond, et demander dès le mardi un décalage de 48 heures sur un point non critique — demandé à l’avance, pas la veille ; résultat : tout rendu, le décalage accordé sans problème parce qu’il avait été demandé tôt. Ce que le recruteur écoute : la preuve d’un SYSTEME (liste, estimation, priorisation, anticipation) et non d’un sauvetage héroïque de dernière minute — le candidat qui a « réussi à tout faire en une nuit » a surtout mal organisé. Variante honnête si aucune situation : raisonner à voix haute — « je n’ai pas encore rencontré ce cas en entreprise, mais voici comment je raisonnerais… ».',
    reasoning:
      'La question transpose directement la vie d’un stagiaire en clôture : plusieurs livrables, des dépendances, des tiers à relancer. Le recruteur veut distinguer l’organisation anticipatrice (système, goulot identifié, décalage demandé tôt) du management de crise permanent (nuit blanche, adrénaline, survie). Le détail du goulot — la tâche qui dépend d’un tiers — est le marqueur différenciant : seuls ceux qui ont vraiment géré des échéances multiples le citent spontanément.',
    commonErrors: [
      'Raconter un sauvetage de dernière minute comme un exploit : c’est un aveu de désorganisation.',
      'Décrire une liste de priorités sans estimation des durées ni dépendances.',
      'Oublier le goulot — la tâche qui dépend d’un tiers et qu’il faut lancer en premier.',
      'Demander un décalage la veille au lieu de l’anticiper : mauvaise foi organisationnelle.',
    ],
    oralShort:
      '[Sur une situation RÉELLE :] J’avais [livrables réels] sur la même semaine. Mes actions : une feuille unique avec les vraies échéances, une estimation des durées, et le repérage du goulot — [la tâche qui dépendait d’un tiers, lancée en premier]. Planning à rebours depuis chaque échéance, créneaux de travail profonds bloqués. Et un décalage demandé dès le mardi sur un point non critique — accordé sans problème parce que demandé tôt. Résultat : tout rendu. C’est un système, pas un sauvetage.',
    oralLong:
      'Je raconterais une situation réelle en STAR. Situation : [votre cas réel — par exemple deux examens, un dossier, un engagement, la même semaine]. Tâche : tenir les trois sans dégrader la qualité. Action — le cœur : première action, tout poser sur une feuille unique — échéances réelles, en distinguant les dures des négociables ; deuxième action, estimer les durées de chaque tâche, en majorant les tâches que je ne maîtrise pas totalement ; troisième action, repérer le goulot : [dans votre cas réel, la tâche qui dépendait d’un tiers — un document, une validation] — c’est elle qui est partie en premier, parce qu’une attente de tiers ne se compresse pas ; quatrième action, construire le planning à rebours depuis chaque échéance — en partant de la date de rendu, pas de l’envie de commencer — et bloquer les créneaux de travail profond ; cinquième action, demander dès le mardi un décalage de 48 heures sur le point le moins critique — demandé à l’avance, avec une nouvelle date ferme : c’est accepté sans difficulté, là où la même demande faite la veille aurait été un problème. Résultat : tout rendu, sans nuit blanche — et un apprentissage : le retard demande tôt vaut mieux que le retard subi tard. À titre d’illustration pédagogique — exemple d’entraînement, à ne pas réciter — on peut imaginer le schéma ci-dessus. Si vous n’avez pas encore rencontré ce cas en entreprise : « je n’ai pas encore rencontré ce cas en entreprise, mais voici comment je raisonnerais… » — puis déroulez le système : liste, estimation, goulot d’abord, planning à rebours, décalages demandés tôt. En conclusion : STAR orienté actions, un système d’organisation visible, et jamais l’éloge du sauvetage de dernière minute — un sauvetage, c’est presque toujours une organisation qui a échoué.',
    followUp: 'Et le décalage que vous avez demandé — vous l’aviez annoncé en avance à tous ceux qui dépendaient de vous ?',
    grading: [
      'Structure STAR avec actions d’ordonnancement détaillées.',
      'Goulot (tâche dépendant d’un tiers) identifié et lancé en premier.',
      'Planning à rebours + créneaux de travail profond bloqués.',
      'Aucune glorification du sauvetage de dernière minute.',
      'Situation réelle ou variante honnête « pas encore rencontré » assumée.',
    ],
  },
  {
    id: 'qt-029',
    job: 'general',
    category: 'relances',
    difficulty: 3,
    skill: 'Comportemental — désaccord avec un pair (STAR)',
    question: 'Racontez-moi une situation où vous n’étiez pas d’accord avec un coéquipier sur la façon de faire. Qu’est-ce que vous avez fait ?',
    expectedAnswer:
      'Structurer en STAR, avec le cœur sur la gestion du désaccord. À titre d’illustration pédagogique — exemple générique à remplacer par une situation RÉELLE : dans un travail de groupe, désaccord sur la méthode d’analyse — deux ratios contradictoires pour mesurer la même chose ; mes actions : écouter d’abord la logique de l’autre jusqu’à pouvoir la reformuler, proposer de tester les deux méthodes sur un échantillon commun plutôt que de débattre en théorie, trancher sur les résultats et un critère objectif accepté par tous (le plus robuste sur données réelles), et garder intacte la relation de travail — le désaccord portait sur la méthode, jamais sur la personne. Résultat : méthode retenue par le groupe entier, coéquipier avec qui j’ai retravaillé ensuite sans aucune friction. Ce que le recruteur écoute : le candidat cherche le fait ou le critère commun, pas la victoire ; il sait séparer le fond de la relation. Variante honnête si aucun vrai désaccord : « je n’ai pas encore rencontré de vrai désaccord professionnel — voici comment je raisonnerais… » : identifier la nature exacte du désaccord (objectif ? méthode ? données ? préférence ?), proposer un test factuel plutôt qu’un rapport de force, et si le désaccord persiste sur un enjeu réel, solliciter l’arbitrage du responsable plutôt que de laisser le conflit pourrir.',
    reasoning:
      'Relance comportementale redoutée : elle cherche le candidat qui transforme un désaccord en information (test, critère, arbitrage) plutôt qu’en affrontement. Les réponses disqualifiantes : esquiver (« je n’ai jamais de désaccord » — mensonge ou effacement), ou raconter une victoire humiliante sur l’autre. Le détail qui crédibilise : la reformulation de la position adverse avant la contre-proposition — preuve d’écoute réelle. En audit et en comptabilité, l’équipe prime : un désaccord mal géré casse la dynamique de mission.',
    commonErrors: [
      'Esquiver : « je n’ai jamais de désaccord avec personne » — invérifiable et signale l’effacement.',
      'Raconter une victoire où l’autre a été humilié ou contourné : signal d’orgueil.',
      'Débattre en théorie sans jamais proposer de test ou de critère commun.',
      'Laisser le désaccord s’envenimer en silence jusqu’à la fin du projet.',
    ],
    oralShort:
      '[Sur une situation RÉELLE :] Sur [votre projet réel], [nom anonymisé : un coéquipier] et moi avons divergé sur [sujet précis]. J’ai d’abord reformulé sa logique jusqu’à ce qu’il la valide. Puis j’ai proposé de tester nos deux approches sur [un cas concret] au lieu de débattre en théorie. Le résultat a tranché — [issue réelle], et on a gardé un critère objectif pour la suite. Le désaccord portait sur la méthode, pas sur la personne : on a retravaillé ensemble ensuite sans friction.',
    oralLong:
      'Je raconterais une situation réelle en STAR, en gardant le poids sur la conduite du désaccord. Situation : [votre cas réel — le projet, la personne, le point précis de désaccord]. Tâche : aboutir à un livrable commun de qualité sans dégrader la relation. Action — le cœur : première action, écouter et reformuler : j’ai repris la logique de mon coéquipier jusqu’à ce qu’il me dise « oui, c’est exactement ça » — tant que je n’y suis pas arrivé, je n’avais pas le droit de réfuter, parce que je n’avais pas compris ; deuxième action, déplacer le débat du goût vers le fait : proposer de tester les deux approches sur un échantillon ou un cas concret, avec un critère de choix accepté par les deux parties AVANT de voir les résultats — c’est ce préaccord qui évite que le perdant conteste le verdict ; troisième action, assumer la décision ensemble : la méthode retenue l’a été au vu des résultats, et je l’ai soutenue comme la nôtre — pas comme ma victoire ; quatrième action, réparer la relation explicitement : un mot direct — « notre désaccord a amélioré le dossier, je suis content qu’on l’ait eu » — parce qu’un désaccord bien mené renforce une équipe quand il est nommé. Résultat : [votre résultat réel — livrable, qualité, relation de travail poursuivie]. À titre d’illustration pédagogique — exemple d’entraînement à ne pas réciter — on peut imaginer un désaccord sur deux ratios contradictoires, tranché par un test sur données réelles. Si vous n’avez pas encore rencontré de vrai désaccord : dites-le — « je n’ai pas encore rencontré ce cas en entreprise, mais voici comment je raisonnerais… » : d’abord qualifier le désaccord (objectif, méthode, données, simple préférence — tous ne se traitent pas pareil), ensuite proposer un test factuel avec critère accepté d’avance, et si l’enjeu est réel et le désaccord persiste, porter le point à l’arbitrage du responsable — l’objectif n’est pas d’avoir raison, c’est que le travail soit juste. En conclusion : reformuler, tester, trancher ensemble, réparer la relation — et le fait avant la victoire.',
    followUp: 'Et si votre coéquipier avait refusé le test et campé sur sa position, vous auriez fait quoi ?',
    grading: [
      'Reformulation de la position adverse avant toute réfutation.',
      'Proposition de test factuel avec critère accepté AVANT les résultats.',
      'Aucune narration de victoire humiliante sur l’autre.',
      'Relation de travail explicitement préservée à la fin du récit.',
      'Situation réelle ou variante honnête « pas encore rencontré » avec raisonnement déroulé.',
    ],
  },
  {
    id: 'qt-030',
    job: 'general',
    category: 'pieges',
    difficulty: 2,
    skill: 'Comportemental — échec assumé (STAR)',
    question: 'Racontez-moi un échec. Un vrai. Qu’est-ce qui s’est passé, et qu’est-ce que vous en avez tiré ?',
    expectedAnswer:
      'Question piège : le recruteur veut un échec DONT LE CANDIDAT ÉTAIT ACTEUR, avec cause racine assumée — pas un échec subi (« le prof était injuste »), pas un échec collectif dilué (« on n’a pas réussi à cause du groupe »), et surtout pas un succès déguisé (« mon échec, c’est d’avoir visé trop haut »). Structurer en STAR inversé : Situation (le contexte et l’enjeu), Action (mes décisions et leurs défaillances — assumées à la première personne), Résultat (l’échec, nommé tel quel), et APPRENTISSAGE (le changement de comportement observable depuis — un échec sans changement n’est qu’un accident). À titre d’illustration pédagogique — exemple générique à remplacer par un échec RÉEL : un contrôle raté par révisions commencées trop tard ; cause racine : pas le manque de temps, mais l’absence de plan de révision daté ; changement observable depuis : planning de révision écrit dès la première semaine de cours, avec revue hebdomadaire ; preuve : résultats redressés au semestre suivant. Si le candidat n’a pas d’échec marquant : l’admettre — « je n’ai pas encore connu d’échec majeur ; les revers que j’ai connus sont modestes — en voici un, et voici comment je raisonnerais face à un échec plus lourd » — puis traiter ce revers mineur avec la même rigueur. Ce qui disqualifie : « je ne vois pas d’échec » (lucidité nulle ou inquiétante) et l’échec pathos (« ça m’a détruit, mais j’ai rebondi ») raconté en mode dramatique.',
    reasoning:
      'Le piège fonctionne par contraste avec la question sur les qualités : après avoir survendu ses forces, le candidat doit maintenant exposer une faiblesse réelle. Le recruteur teste la lucidité (assumer sa part causale), l’honnêteté (nommer l’échec sans le maquiller) et la capacité de rebond (un changement observable, pas une résolution morale). Les échecs déguisés en réussites sont le signal le plus disqualifiant — ils annoncent quelqu’un qui maquillera aussi ses erreurs de travail.',
    commonErrors: [
      'L’échec-succès déguisé : « mon défaut, c’est d’être trop ambitieux ».',
      'L’échec délégué : « le groupe n’a pas suivi mon plan » — aucune part personnelle assumée.',
      'L’absence d’échec revendiquée : lucidité nulle, ou candidat qui ne se met jamais en risque.',
      'L’échec dramatisé en mode pathos, sans cause racine ni changement observable.',
    ],
    oralShort:
      '[Sur un échec RÉEL :] J’ai raté [votre échec réel — un contrôle, un projet, une sélection]. Ma part, assumée : [votre cause racine réelle — ex. : révisions lancées trop tard, sous-estimation d’un livrable]. Depuis, le changement est observable : [votre changement concret — ex. : plan de révision écrit dès la première semaine, revue hebdomadaire], et la preuve : [résultat réel du redressement]. Je ne vous raconterai pas un échec flatteur : celui-ci m’a coûté quelque chose, c’est pour ça qu’il m’a formé.',
    oralLong:
      'Je raconterais un échec réel, court, assumé — structure STAR adaptée, en quatre temps. Situation : [votre échec réel — le contexte, l’enjeu, la date]. Action — ma part, à la première personne : [vos décisions défaillantes réelles : travail lancé trop tard, sous-estimation de la charge, absence de vérification, mauvaise répartition — nommez ce qui dépendait de vous]. Résultat : l’échec, nommé sans euphémisme : [le résultat réel — note, sélection manquée, livrable rendu en retard]. Apprentissage — le plus important : la cause racine identifiée — pas la cause de surface (« manqué de temps ») mais la cause réelle (« pas de plan daté, donc démarrage tardif ») — et le changement observable depuis : [votre changement concret], avec preuve : [le résultat réel du redressement au semestre ou au projet suivant]. À titre d’illustration pédagogique — exemple d’entraînement à ne pas réciter — on peut imaginer : contrôle raté, cause racine = absence de plan de révision daté, changement = planning écrit dès la première semaine, preuve = moyenne redressée. Si je n’ai pas d’échec marquant, je le dis : « je n’ai pas encore connu d’échec majeur — les revers que j’ai connus sont modestes ; en voici un, traité sérieusement… » — un revers mineur analysé honnêtement vaut mieux qu’un échec spectaculaire inventé, parce que le recruteur évalue la démarche de lucidité, pas la taille du drame. Ce que je ne ferais surtout pas : vous raconter un échec flatteur — « trop ambitieux, trop exigeant » — c’est le mensonge le plus repérable de l’entretien, et il annonce quelqu’un qui maquillera ses erreurs de dossier de la même façon. En conclusion : un échec réel, ma part assumée, une cause racine, un changement observable — et si tout va vraiment trop bien depuis toujours : l’aveu honnête et un revers mineur traité avec la même rigueur.',
    followUp: 'Et cette cause racine, vous l’avez identifiée tout(e) seul(e), ou quelqu’un vous l’a signalée ?',
    grading: [
      'Échec réel, dont le candidat était acteur, nommé sans euphémisme.',
      'Part personnelle assumée à la première personne (aucun échec délégué au groupe).',
      'Cause racine distinguée de la cause de surface.',
      'Changement de comportement observable depuis, avec preuve.',
      'Aucun échec-succès déguisé, aucun pathos dramatique.',
    ],
  },
  {
    id: 'qt-031',
    job: 'audit-externe',
    category: 'rh',
    difficulty: 1,
    skill: 'Comportemental — attention au détail (STAR)',
    question: 'Racontez-moi une situation où votre attention au détail a compté : un écart, une incohérence, quelque chose que vous avez repéré et que d’autres n’avaient pas vu.',
    expectedAnswer:
      'Structurer en STAR, avec le cœur sur CE QUE J’AI VU et COMMENT je l’ai traité. À titre d’illustration pédagogique — exemple générique à remplacer par une situation RÉELLE : en relisant un rapport de projet avant remise, un chiffre du résumé ne collait pas avec le tableau détaillé — écart d’un facteur dix entre deux endroits qui devaient dire la même chose ; mes actions : vérifier lequel des deux chiffres était juste en remontant au calcul d’origine, corriger la mauvaise occurrence, chercher si l’erreur s’était propagée ailleurs (elle apparaissait aussi dans une note de bas de page), prévenir le groupe avant la remise plutôt que corriger en silence ; résultat : erreur corrigée avant remise, et réflexe retenu — deux endroits qui doivent dire la même chose se vérifient l’un contre l’autre. Ce que le recruteur audit écoute : un réflexe de recoupement, pas un don mystérieux ; l’attention au détail se démontre par une méthode (comparer les sources, recompter, remonter à l’origine), pas par une qualité innée. Variante honnête si l’exemple professionnel manque : « je n’ai pas encore travaillé sur des dossiers d’audit — voici ce que je fais naturellement, sur des travaux scolaires : recouper ce qui doit être identique, et voici comment je raisonnerais sur un dossier… ».',
    reasoning:
      'Question d’adéquation métier : l’audit externe vit d’anomalies repérées dans la masse. Le recruteur veut la preuve d’un réflexe de recoupement — l’erreur détectée par comparaison de deux sources qui devaient concorder — bien plus qu’une anecdote de chance. Le marqueur différenciant : le candidat a-t-il vérifié l’impact de l’erreur ailleurs (propagation) et prévenu son équipe ? Un détail repéré mais traité en solo reste un demi-réflexe d’auditeur.',
    commonErrors: [
      'Présenter l’attention au détail comme un don inné au lieu d’une méthode de recoupement.',
      'Choisir un exemple où l’erreur a été corrigée en silence, sans prévenir l’équipe.',
      'Oublier de vérifier si l’erreur s’était propagée ailleurs dans le document.',
      'Inventer une détection spectaculaire : les détails invérifiables s’effondrent à la relance.',
    ],
    oralShort:
      '[Sur une situation RÉELLE :] En relisant [votre livrable réel], j’ai repéré [votre écart réel — deux endroits qui devaient dire la même chose et divergeaient]. Mes actions : remonter au calcul d’origine pour identifier le chiffre juste, corriger l’occurrence fausse, chercher si l’erreur s’était propagée ailleurs, et prévenir [les personnes concernées] avant la remise. Résultat : [effet réel]. Le réflexe que j’en garde : deux endroits qui doivent concorder se vérifient l’un contre l’autre.',
    oralLong:
      'Je raconterais une situation réelle en STAR — et si mon expérience est scolaire ou associative, je le dis tel quel, parce que le réflexe compte plus que le décor. Situation : [votre cas réel — le livrable, le contexte, la deadline]. Tâche : garantir l’exactitude du document avant remise. Action — le cœur : ce que j’ai vu : [l’écart réel — précisément : deux valeurs qui devaient concorder et divergeaient, un total qui ne tombait pas, un libellé incohérent avec le chiffre] ; ce que j’en ai fait : d’abord qualifier — laquelle des deux occurrences est fausse ? — en remontant au calcul ou au document d’origine ; ensuite corriger l’occurrence fausse ; ensuite — et c’est le geste qui distingue — chercher la propagation : si l’erreur s’est glissée à un endroit, elle a pu se copier ailleurs : notes, annexes, totaux intermédiaires ; enfin prévenir : les personnes concernées ont su AVANT la remise, pas après — une correction silencieuse laisse les autres croire à un document sain dans leur version antérieure. Résultat : [effet réel — erreur corrigée avant remise, conséquence évitée]. Apprentissage : le réflexe de recoupement — tout ce qui doit concorder se vérifie par comparaison : total et somme des lignes, résumé et détail, chiffre et libellé. À titre d’illustration pédagogique — exemple d’entraînement à ne pas réciter — on peut imaginer : un résumé qui affiche dix fois le montant du tableau détaillé, erreur remontée au calcul d’origine, propagation trouvée dans une note de bas de page, groupe prévenu avant remise. Si vous n’avez pas encore vécu ce cas : « je n’ai pas encore rencontré ce cas en entreprise, mais voici comment je raisonnerais sur un dossier d’audit : croiser chaque montant avec sa source, comparer ce qui doit concorder, et remonter systématiquement à la pièce d’origine quand ça diverge ». En conclusion : ce que j’ai vu, comment je l’ai qualifié, la propagation vérifiée, l’équipe prévenue — une méthode de recoupement, pas un coup de chance.',
    followUp: 'Et comment vous expliquez que les autres n’aient pas vu cet écart avant vous ?',
    grading: [
      'Structure STAR avec le poids sur ce qui a été vu et comment.',
      'Réflexe de recoupement décrit (comparer ce qui doit concorder, remonter à l’origine).',
      'Propagation de l’erreur vérifiée, équipe prévenue avant remise.',
      'Situation réelle (même scolaire) ou variante honnête avec raisonnement déroulé.',
    ],
  },
  {
    id: 'qt-032',
    job: 'audit-externe',
    category: 'communication-client',
    difficulty: 2,
    skill: 'Comportemental — pédagogie technique (STAR)',
    question: 'Racontez-moi une fois où vous avez expliqué quelque chose de technique à quelqu’un qui ne l’était pas. Vous vous êtes pris comment ?',
    expectedAnswer:
      'Structurer en STAR, avec le cœur sur l’ADAPTATION au destinataire — la question est un prédicteur direct des relations clients en mission. À titre d’illustration pédagogique — exemple générique à remplacer par une situation RÉELLE : présenter le budget prévisionnel d’une association à des membres non financiers ; mes actions : demander d’abord à quoi servait l’information pour eux (décider d’une cotisation, comprendre un dérapage), construire l’explication à partir de LÀ — partir du besoin, pas du plan comptable —, remplacer le jargon par des images concrètes (« provisions = pare-chocs pour les mauvaises surprises »), vérifier la compréhension par une question ouverte et non par « c’est clair ? », et laisser un support d’une page avec les trois chiffres qui comptent ; résultat : décision votée sans faux débat, et deux membres qui m’ont sollicité ensuite pour d’autres sujets. Ce que le recruteur écoute : le candidat part du besoin de l’autre (pas de son propre savoir), traduit sans condescendance, et VÉRIFIE qu’il a été compris. Variante honnête si aucun exemple : « je n’ai pas encore eu d’interlocuteur client — voici comment je raisonnerais… » : besoin d’abord, vocabulaire du destinataire, exemple concret, vérification.',
    reasoning:
      'En audit externe, l’auditeur explique des points techniques à des comptables, des dirigeants, des non-financiers : la capacité à descendre du jargon sans humilier l’autre est cardinale. Le recruteur écoute le point de départ de l’explication : ceux qui partent de leur savoir (« j’ai déroulé la méthode ») échouent ; ceux qui partent du besoin de l’interlocuteur réussissent. Le second marqueur : la vérification de compréhension par question ouverte — « c’est clair ? » fait répondre oui poliment, « si vous deviez le réexpliquer, vous partiriez de quoi ? » révèle les vrais trous.',
    commonErrors: [
      'Partir de son propre savoir (dérouler la méthode) au lieu du besoin de l’interlocuteur.',
      'Vérifier la compréhension par « c’est clair ? » — la question fermée qui fait dire oui poliment.',
      'Jargon assumé (« ils n’avaient qu’à suivre ») : condescendance disqualifiante en milieu client.',
      'Oublier de laisser un support simple (une page, trois chiffres) après l’explication.',
    ],
    oralShort:
      '[Sur une situation RÉELLE :] J’ai expliqué [sujet technique réel] à [destinataire réel non technique]. Mon point de départ : à quoi ça allait lui servir — je suis parti(e) de son besoin, pas de ma méthode. J’ai traduit le jargon en images concrètes, avec un exemple chiffré simple. Et j’ai vérifié autrement que par « c’est clair ? » : [votre question ouverte réelle]. Résultat : [effet réel — décision prise, question relancée, usage ultérieur]. Expliquer, c’est partir de l’autre.',
    oralLong:
      'Je raconterais une situation réelle en STAR. Situation : [votre cas réel — le sujet technique, le destinataire, le contexte]. Tâche : rendre le sujet utilisable par quelqu’un qui n’a pas mon vocabulaire. Action — le cœur, dans l’ordre : première action, cadrer le besoin : je commence par demander à quoi servira l’information pour l’autre — décider, comprendre, arbitrer — parce que la même notion s’explique différemment selon l’usage ; deuxième action, choisir le point d’entrée : je pars d’une situation familière pour l’interlocuteur, pas de la définition ; troisièmement, traduire : chaque terme technique remplacé par une image concrète — provisions = pare-chocs pour mauvaises surprises, écart = écart en caisse en fin de journée — en gardant les chiffres exacts sous la main pour qui veut monter d’un cran ; quatrièmement, vérifier autrement : jamais « c’est clair ? » — la question fermée produit un oui de politesse — mais une question ouverte : « si vous deviez le réexpliquer à votre tour, vous partiriez de quoi ? » ou un mini-cas à trancher ; cinquièmement, laisser un support : une page, trois chiffres, une conclusion — l’explication orale s’évapore, le support reste. Résultat : [effet réel]. À titre d’illustration pédagogique — exemple d’entraînement à ne pas réciter — on peut imaginer le budget d’une association présenté à des membres non financiers, décision votée sans faux débat. Si vous n’avez pas encore eu d’interlocuteur de ce type : dites-le — « je n’ai pas encore rencontré ce cas en entreprise, mais voici comment je raisonnerais… » — besoin d’abord, vocabulaire du destinataire, exemple concret, vérification ouverte. En conclusion : partir de l’autre, traduire sans condescendance, vérifier par une question qui travaille, laisser une trace — parce qu’en mission, un point mal expliqué à un client revient en anomalie mal comprise.',
    followUp: 'Et la personne, après votre explication — elle a refait quoi de l’information ?',
    grading: [
      'Point de départ : le besoin du destinataire, pas le propre savoir du candidat.',
      'Traduction du jargon par images/exemples concrets, sans condescendance.',
      'Vérification de compréhension par question ouverte (pas de « c’est clair ? »).',
      'Support simple laissé en fin d’explication.',
      'Situation réelle ou variante honnête « pas encore rencontré » assumée.',
    ],
  },
  {
    id: 'qt-033',
    job: 'audit-externe',
    category: 'rh',
    difficulty: 4,
    skill: 'Comportemental — annoncer sa propre erreur (STAR)',
    question: 'Racontez-moi une situation où vous vous êtes rendu compte d’une erreur dans votre travail APRÈS l’avoir rendu. Vous avez fait quoi ?',
    expectedAnswer:
      'Question comportementale à haut enjeu : elle prédit le comportement du futur auditeur face à ses propres anomalies. Le réflexe attendu, en STAR : signaler vite, soi-même, avec le périmètre exact. À titre d’illustration pédagogique — exemple générique à remplacer par une situation RÉELLE : une erreur de calcul découverte après l’envoi d’un devoir ; mes actions : la qualifier d’abord (ce qui est faux, et surtout ce qui est FAUX PAR CONTAMINATION — les résultats dérivés), prévenir le destinataire dans l’heure avec trois éléments — l’objet exact de l’erreur, le périmètre touché, la correction proposée avec délai —, corriger, puis chercher la cause racine (relecture non ciblée : je relisais « en général » au lieu de vérifier les reports de chiffres), et installer un geste anti-récidive (re-vérification systématique des montants reportés) ; résultat : correction acceptée sans incident, confiance maintenue, méthode conservée depuis. Ce que le recruteur écoute : le candidat est-il allé voir LUI-MÊME, ou a-t-il attendu que l’erreur soit découverte ? En audit, l’erreur cachée qui ressort en clôture coûte dix fois plus que l’erreur déclarée à temps. Variante honnête si aucun exemple : « je n’ai pas encore rencontré ce cas en entreprise — voici comment je raisonnerais… » : qualifier, prévenir avec périmètre et correction, corriger, analyser la cause.',
    reasoning:
      'La loyauté sur ses propres erreurs est la qualité la plus scrutée chez un débutant en audit : le cabinet peut former la technique, pas l’honnêteté. Le recruteur construit la question sur le moment le plus inconfortable — l’erreur est déjà partie, personne ne l’a vue, le silence est tentant. Les candidats qui racontent qu’ils ont corrigé « avant que personne ne remarque » révèlent exactement le réflexe inverse de celui attendu. Le périmètre de contamination — vérifier ce que l’erreur a infecté en aval — est le marqueur des profils rigoureux.',
    commonErrors: [
      'Raconter que l’erreur a été corrigée « avant que personne ne la voie » : exactement le mauvais réflexe.',
      'Annoncer l’erreur sans périmètre : le destinataire doit chercher lui-même ce qui est touché.',
      'S’étendre sur les circonstances atténuantes (« j’étais fatigué, j’avais trois dossiers ») : excuses avant faits.',
      'Aucune cause racine ni geste anti-récidive : l’erreur reste un accident sans apprentissage.',
    ],
    oralShort:
      '[Sur une situation RÉELLE :] Après avoir rendu [livrable réel], j’ai découvert [erreur réelle précise]. Je suis allé(e) le dire moi-même, dans l’heure, avec trois éléments : ce qui était faux, ce que l’erreur touchait par contamination, et la correction avec délai. Ensuite, cause racine — [votre cause réelle] — et un geste anti-récidive : [votre geste concret]. Résultat : correction acceptée, confiance maintenue. Une erreur déclarée à temps coûte dix fois moins qu’une erreur découverte en clôture.',
    oralLong:
      'Je raconterais une situation réelle en STAR — c’est une question où l’honnêteté du récit compte plus que sa taille. Situation : [votre cas réel — le livrable rendu, le moment de la découverte]. Tâche : traiter une erreur déjà partie, sans la cacher. Action — le cœur, dans l’ordre chronologique : première action, qualifier AVANT d’alerter : préciser ce qui est faux — et surtout identifier la contamination : quels résultats dérivés, quels totaux, quelles conclusions reposaient sur ce chiffre — pour pouvoir annoncer un périmètre exact, pas une inquiétude vague ; deuxième action, prévenir soi-même et vite : le destinataire apprend l’erreur de moi, dans l’heure, avec trois éléments : l’objet exact de l’erreur, le périmètre touché, la correction proposée avec un délai — et sans catalogue d’excuses : la fatigue n’intéresse personne, la correction intéresse tout le monde ; troisième action, corriger et re-vérifier : la correction recontrôlée comme si c’était un nouveau livrable — la moitié des erreurs de correction sont des erreurs nouvelles ; quatrième action, la cause racine : [votre cause réelle — par exemple : relecture non ciblée, report de chiffre non re-vérifié] et le geste anti-récidive : [votre geste concret — par exemple : re-vérification systématique des montants reportés, check-list de fin de livrable]. Résultat : [effet réel — correction acceptée, relation intacte, méthode conservée]. À titre d’illustration pédagogique — exemple d’entraînement à ne pas réciter — on peut imaginer une erreur de calcul signalée dans l’heure avec périmètre et correction, cause racine traitée par un geste conservé depuis. Si vous n’avez jamais vécu ce cas : « je n’ai pas encore rencontré ce cas en entreprise, mais voici comment je raisonnerais… » — qualifier, prévenir avec le périmètre, corriger, remonter la cause — et je l’assume : en audit, je préfère une erreur déclarée à une erreur propre, parce que la deuxième finit toujours par sortir, et jamais au bon moment. En conclusion : qualifier, prévenir soi-même avec périmètre et correction, re-vérifier la correction, traiter la cause racine.',
    followUp: 'Et quand vous avez annoncé l’erreur, la personne vous a fait remarquer quoi, exactement ?',
    grading: [
      'Le candidat signale lui-même, rapidement, sans attendre la découverte par autrui.',
      'Périmètre de contamination identifié avant l’annonce (ce que l’erreur touche en aval).',
      'Annonce structurée : objet + périmètre + correction avec délai, sans excuses préalables.',
      'Cause racine traitée et geste anti-récidive installé.',
      'Situation réelle ou variante honnête « pas encore rencontré » assumée.',
    ],
  },
  {
    id: 'qt-034',
    job: 'audit-externe',
    category: 'rh',
    difficulty: 5,
    skill: 'Comportemental — désaccord avec un plus expérimenté (STAR)',
    question: 'Racontez-moi une situation où vous n’avez pas été d’accord avec quelqu’un de plus expérimenté que vous. Comment vous avez géré ça ?',
    expectedAnswer:
      'La situation comportementale la plus délicate pour un débutant destiné à l’audit : l’esprit critique face à l’expérience, sans insolence ni capitulation. Structurer en STAR. À titre d’illustration pédagogique — exemple générique à remplacer par une situation RÉELLE : un enseignant affirmait en cours un point de méthode contredit par le manuel de référence ; mes actions : vérifier d’abord QUE J’AVAIS RAISON — source primaire retrouvée, passage exact identifié —, choisir le moment et le format (en privé après le cours, pas en public), présenter le fait sourcé sans triomphalisme (« j’ai retrouvé ceci, page X — pouvez-vous m’aider à réconcilier les deux ? »), laisser à l’autre une porte de sortie honorable, et accepter d’avoir tort si l’expérience apporte un élément que la source ne couvre pas ; résultat : le point a été précisé pour toute la classe, sans aucun rapport de force. Ce que le recruteur écoute : la vérification préalable (le candidat ne conteste pas sur impression), le choix du cadre (privé, sourcé, non public), et la capacité à perdre l’argument proprement si les faits ne le suivent pas. Variante honnête : « je n’ai pas encore rencontré de désaccord formel avec un supérieur — voici comment je raisonnerais… » : vérifier ma source, choisir le privé, présenter le fait, accepter la décision finale de l’expérimenté tout en documentant ma réserve si l’enjeu la justifie.',
    reasoning:
      'L’indépendance d’esprit est le cœur déontologique de l’audit : un assistant qui n’ose jamais contredire un senior laissera passer des anomalies ; un assistant qui contredit mal détruit la relation de mission. Le recruteur cherche le point d’équilibre — contester le fait, pas la personne ; en privé, avec une source ; et se plier à la décision finale documentée. Les récits où le candidat « avait raison devant toute la classe » signalent le goût du rapport de force ; ceux où il n’a « jamais osé rien dire » signalent la capitulation : les deux extrêmes inquiètent.',
    commonErrors: [
      'Contester publiquement ou sur une impression non vérifiée : double faute de méthode.',
      'Raconter une victoire spectaculaire sur l’expérimenté : goût du rapport de force.',
      'L’inverse : n’avoir jamais osé exprimer aucun désaccord : capitulation systématique.',
      'Confondre la règle générale (l’expérience décide) et l’exception (l’intégrité des chiffres, qui se discute avec preuve).',
    ],
    oralShort:
      '[Sur une situation RÉELLE :] [Personne plus expérimentée réelle] défendait [position réelle] ; je pensais le contraire sur [point précis]. Avant d’en parler : j’ai vérifié que j’avais raison — [votre source réelle]. Puis j’ai choisi le privé, et présenté le fait sourcé sous forme de question : « pouvez-vous m’aider à réconcilier ça ? ». Résultat : [issue réelle — point précisé, ou j’ai eu tort et je l’ai admis]. Ma règle : contester le fait avec preuve, en privé, jamais la personne ; et savoir perdre l’argument proprement.',
    oralLong:
      'Je raconterais une situation réelle en STAR — et je la choisirai modeste, parce que la question porte sur la méthode, pas sur l’héroïsme. Situation : [votre cas réel — la personne expérimentée, le point de désaccord]. Tâche : exprimer un désaccord légitime sans casser la relation ni capituler sans raison. Action — le cœur, chronologique : première action, la vérification préalable : je ne conteste JAMAIS sur impression — je suis remonté(e) à la source primaire et j’ai retrouvé [votre élément précis — le passage, la règle, le calcul] ; tant que je n’ai pas ça, mon doute est une question, pas une contestation ; deuxième action, le choix du cadre : en privé, après le cours ou en rendez-vous, jamais devant témoins — un désaccord public humilie et ferme la discussion ; troisième action, la forme : le fait sourcé présenté comme une question de réconciliation — « j’ai retrouvé ceci, page tant ; pouvez-vous m’aider à réconcilier les deux ? » — la source parle, pas mon orgueil, et l’expérimenté garde une porte de sortie honorable ; quatrième action, l’issue acceptée : si l’expérience apporte un élément que ma source ne couvre pas, je reconnais que j’avais tort — et je le reconnais proprement ; si le point est confirmé, il est précisé sans triomphalisme de ma part ; et si l’enjeu était grave et restait tranché contre les faits — ce qui ne m’est pas arrivé — je saurais documenter ma réserve et l’escalader au bon niveau, calmement. Résultat : [issue réelle]. À titre d’illustration pédagogique — exemple d’entraînement à ne pas réciter — on peut imaginer un point de méthode contredit par le manuel, reconcilié en privé. Si vous n’avez pas encore vécu ce cas : « je n’ai pas encore rencontré ce cas en entreprise, mais voici comment je raisonnerais… » — vérifier ma source, choisir le privé, présenter le fait, respecter la décision finale tout en documentant ma réserve si l’enjeu la justifie. En conclusion : contester le fait, jamais la personne ; en privé, avec preuve ; savoir perdre proprement — et savoir escalader calmement quand l’intégrité d’un chiffre est en jeu.',
    followUp: 'Et si l’expérimenté avait maintenu sa position malgré votre preuve, vous auriez fait quoi ?',
    grading: [
      'Vérification préalable : contestation appuyée sur une source, pas sur une impression.',
      'Choix du cadre : en privé, forme interrogative, porte de sortie laissée à l’autre.',
      'Aucune narration de victoire humiliante, aucune capitulation systématique.',
      'Issue acceptée proprement, y compris avoir eu tort.',
      'Situation réelle ou variante honnête « pas encore rencontré » avec raisonnement déroulé.',
    ],
  },
  {
    id: 'qt-035',
    job: 'audit-externe',
    category: 'relances',
    difficulty: 3,
    skill: 'Comportemental — doute sur un résultat (STAR)',
    question: 'Racontez-moi une situation où un résultat vous a semblé faux — ou trop beau pour être vrai. Qu’est-ce que vous avez fait ?',
    expectedAnswer:
      'Le scepticisme professionnel en situation : structurer en STAR, cœur sur la transformation du doute en vérification. À titre d’illustration pédagogique — exemple générique à remplacer par une situation RÉELLE : un total qui « tombait rond » — exactement le chiffre attendu — m’a gênée ; mes actions : recalculer indépendamment (refaire le calcul sans regarder l’ancien), recouper par une autre voie (une autre source qui devait converger), remonter à la composition du chiffre (le décomposer ligne par ligne — une ligne s’avérait comptée deux fois), et documenter l’écart et sa cause ; résultat : erreur détectée avant usage, et réflexe fixé — un chiffre trop juste déclenche une vérification, pas une satisfaction. Ce que le recruteur écoute : le doute n’est jamais resté un sentiment — il est devenu recalcul, recoupement, décomposition ; et le candidat a Documenté ce qu’il a trouvé. Variante honnête : « je n’ai pas encore rencontré ce cas sur un dossier — voici comment je raisonnerais : recalculer, recouper par une source indépendante, décomposer, et jamais laisser un chiffre que je ne peux pas m’expliquer ».',
    reasoning:
      'Question signature du métier d’auditeur : le scepticisme professionnel est la posture déontologique du commissaire aux comptes. Le recruteur transpose : ce stagiaire qui a appris à se méfier des résultats trop beaux est celui qui détectera l’anomalie dans la balance. Les récits médiocres : le doute dissipé par hasard ou par l’autorité d’un tiers (« j’ai demandé au prof, il a dit que c’était bon ») — l’autorité n’est pas un élément probant. Le marqueur supérieur : la décomposition du chiffre suspect, qui est la technique même de l’audit de détail.',
    commonErrors: [
      'Laisser le doute en sentiment : « ça me semblait bizarre » sans action de vérification.',
      'Faire valider le chiffre par l’autorité d’un tiers sans recalcul ni recoupement.',
      'Recalculer en regardant l’ancien résultat : le biais de confirmation contamine la vérification.',
      'Ne pas documenter l’écart trouvé et sa cause : la découverte sans trace se perd.',
    ],
    oralShort:
      '[Sur une situation RÉELLE :] [Résultat réel] m’a semblé trop juste — c’était exactement le chiffre attendu. Mes actions : recalculer indépendamment, sans regarder l’ancien résultat ; recouper par [source convergente réelle] ; décomposer le chiffre ligne par ligne. [Ce que vous avez trouvé réellement]. Résultat : [effet réel]. Le réflexe que j’en garde : un chiffre trop beau déclenche une vérification, jamais une satisfaction — et je ne laisse jamais un chiffre que je ne peux pas m’expliquer.',
    oralLong:
      'Je raconterais une situation réelle en STAR. Situation : [votre cas réel — le résultat, le contexte, ce qui vous a rendu(e) méfiant(e)]. Tâche : trancher entre un doute fondé et une coïncidence, avant que le chiffre soit utilisé. Action — le cœur : première action, formaliser le doute : je note ce qui me chiffonne — trop rond, trop conforme à l’attendu, variance aberrante — parce qu’un doute formulé devient vérifiable ; deuxième action, recalculer indépendamment : je refais le calcul de zéro, sans l’ancien résultat sous les yeux — sinon je reproduis son biais ; troisième action, recouper par une autre voie : une source indépendante qui devait converger vers le même chiffre — un autre document, un total de contrôle, une somme de sous-totaux ; quatrième action, décomposer : remonter la composition du chiffre, ligne par ligne — c’est presque toujours là que l’anomalie se cache : une ligne doublée, un périmètre décalé, une période à cheval ; cinquième action, documenter : l’écart trouvé, sa cause, sa correction — une découverte sans trace n’existe pas pour l’équipe. Résultat : [effet réel — anomalie corrigée avant usage, réflexe installé]. À titre d’illustration pédagogique — exemple d’entraînement à ne pas réciter — on peut imaginer un total miraculeusement exact dont la décomposition révèle une ligne comptée deux fois. Si vous n’avez pas encore rencontré ce cas : « je n’ai pas encore rencontré ce cas en entreprise, mais voici comment je raisonnerais… » : douter, recalculer sans regarder, recouper autrement, décomposer, documenter. En conclusion : le doute n’est pas un défaut en audit, c’est un outil — à condition qu’il se convertisse immédiatement en vérifications ; un chiffre que je ne peux pas m’expliquer est un chiffre que je n’ai pas fini de travailler.',
    followUp: 'Et combien de temps vous êtes-vous donné avant d’abandonner la vérification ?',
    grading: [
      'Doute formalisé puis converti en actions de vérification (jamais laissé en sentiment).',
      'Recalcul indépendant sans l’ancien résultat sous les yeux.',
      'Recoupement par source indépendante + décomposition ligne à ligne.',
      'Découverte documentée (écart, cause, correction).',
      'Situation réelle ou variante honnête « pas encore rencontré » avec réflexes déroulés.',
    ],
  },
  {
    id: 'qt-036',
    job: 'comptabilite',
    category: 'rh',
    difficulty: 1,
    skill: 'Comportemental — constance sur tâche répétitive (STAR)',
    question: 'Racontez-moi une situation où vous avez dû faire un travail long et répétitif en restant précis jusqu’au bout. Vous avez fait comment ?',
    expectedAnswer:
      'Structurer en STAR, cœur sur la STRATÉGIE anti-erreur sur la durée. À titre d’illustration pédagogique — exemple générique à remplacer par une situation RÉELLE : vérifier et saisir un jeu de deux cents lignes de données pour un projet ; mes actions : rythmer le travail par blocs bornés (45 minutes, pause courte), vérifier par échantillon en fin de lot (recompte intégral de dix lignes prises au hasard — tout faux aléatoire se révèle), garder un total de contrôle (la somme des montants saisis devait égaler la somme du document source), traiter les doutes en marge plutôt qu’au fil de l’eau (une note à côté, résolue en bloc à la fin), et ne jamais « finir en accélérant » — la dernière heure d’une tâche répétitive est celle où le taux d’erreur culmine ; résultat : zéro erreur détectée à la relecture du professeur, méthode réutilisée depuis. Ce que le recruteur écoute : le candidat a une stratégie de constance (blocs, échantillons, total de contrôle) — pas une endurance revendiquée à vide. Variante honnête : « je n’ai pas encore eu de saisie professionnelle longue — voici comment je raisonnerais… ».',
    reasoning:
      'La saisie et la vérification répétées sont le pain quotidien du comptable débutant : la question mesure le risque d’erreur en fin de journée. Le marqueur différenciant : le total de contrôle — la discipline qui consiste à prévoir dès le départ un recoupement global (somme des lignes = somme source) ; seuls les candidats qui ont vraiment fait du travail répétitif précis le citent. La « fin en accélérant » est le piège que le recruteur tend discrètement : beaucoup avouent presser les dernières lignes.',
    commonErrors: [
      'Répondre « je suis patient(e) » sans aucune stratégie anti-erreur.',
      'Accélérer sur la fin du lot : la dernière heure concentre le plus d’erreurs.',
      'Vérifier ligne par ligne au fil de l’eau sans échantillon ni total de contrôle.',
      'Traiter les doutes au fil de l’eau : interruptions multiples qui cassent le rythme.',
    ],
    oralShort:
      '[Sur une situation RÉELLE :] J’ai traité [votre tâche répétitive réelle — volume]. Ma stratégie : blocs de travail bornés avec pauses courtes ; doutes notés en marge et traités en bloc, pas au fil de l’eau ; vérification par échantillon — recompte complet de dix lignes au hasard — et un total de contrôle : [somme qui devait converger]. Et je ne finis jamais en accélérant : c’est la dernière heure qui concentre les erreurs. Résultat : [effet réel — zéro erreur, écart nul].',
    oralLong:
      'Je raconterais une situation réelle en STAR. Situation : [votre cas réel — la tâche, le volume, la contrainte de précision]. Tâche : tenir l’exactitude du début à la fin, sur une tâche où l’ennui est le principal adversaire. Action — le cœur : première action, rythmer : je découpe en blocs bornés — environ 45 minutes — avec des pauses courtes ; l’attention est une ressource qui se consomme, pas un trait de caractère ; deuxième action, isoler les doutes : quand une ligne pose question, je la note en marge et je continue — traiter chaque doute immédiatement casse le rythme et multiplie les reprises ; les doutes sont résolus en bloc à la fin ; troisième action, contrôler par échantillon : en fin de lot, recompte complet de dix lignes prises au hasard — une erreur aléatoire de saisie se révèle presque toujours dans l’échantillon ; quatrième action, le total de contrôle : dès le départ, je prévois un recoupement global — la somme de mes montants doit égaler la somme du document source : c’est le filet qui attrape ce que l’échantillon laisse passer ; cinquième action, interdire l’accélération finale : la tentation de « finir vite » sur les dernières lignes est exactement là où le taux d’erreur culmine — je préfère terminer à l’heure normale et garder la relecture. Résultat : [effet réel]. À titre d’illustration pédagogique — exemple d’entraînement à ne pas réciter — on peut imaginer deux cents lignes vérifiées avec cette méthode et zéro erreur en relecture. Si vous n’avez pas encore eu ce type de tâche : « je n’ai pas encore rencontré ce cas en entreprise, mais voici comment je m’organiserais… » — blocs, doutes en marge, échantillon, total de contrôle. En conclusion : la constance sur du répétitif n’est pas un don, c’est une méthode — rythme, marge, échantillon, total de contrôle, et jamais d’accélération finale.',
    followUp: 'Et sur ces deux cents lignes, combien de doutes vous êtes restés en marge à la fin ?',
    grading: [
      'Stratégie de constance décrite (blocs bornés, pauses, doutes en marge).',
      'Contrôle par échantillon en fin de lot.',
      'Total de contrôle prévu dès le départ (convergence des sommes).',
      'Aucune accélération sur la fin du lot assumée.',
      'Situation réelle ou variante honnête « pas encore rencontré » avec méthode déroulée.',
    ],
  },
  {
    id: 'qt-037',
    job: 'comptabilite',
    category: 'rh',
    difficulty: 3,
    skill: 'Comportemental — erreur repérée chez un autre (STAR)',
    question: 'Racontez-moi une situation où vous avez trouvé une erreur dans le travail de quelqu’un d’autre. Comment vous l’avez gérée ?',
    expectedAnswer:
      'Structurer en STAR, cœur sur la DIPLOMATIE + le fait. À titre d’illustration pédagogique — exemple générique à remplacer par une situation RÉELLE : une discordance repérée dans le tableau d’un coéquipier avant une remise commune ; mes actions : vérifier d’abord que c’était VRAIMENT une erreur — pas une convention ou une source que j’ignorais (remonter à la source de son chiffre), m’adresser directement à lui, en privé, avec le fait et non le jugement (« j’arrive à X, toi à Y — on regarde ensemble ? »), laisser l’autre corriger ou corriger avec lui — jamais corriger à sa place sans le prévenir, parce que son fichier reste son travail —, et ne JAMAIS exposer l’erreur devant le groupe ou le destinataire ; résultat : correction faite avant remise, relation de travail intacte, et l’autre m’a depuis retourné le service. Ce que le recruteur écoute : le candidat a-t-il vérifié avant d’accuser (fausses erreurs = suspicions injustifiées), et a-t-il préservé la face de l’autre — en comptabilité comme en audit, on travaille des années avec les mêmes personnes : la manière de signaler une erreur construit ou détruit la coopération. Variante honnête : « je n’ai pas encore rencontré ce cas en équipe professionnelle — voici comment je raisonnerais… ».',
    reasoning:
      'Question de coopération déguisée en question de rigueur. En cabinet, le stagiaire repérera des erreurs dans le travail de secrétaires, de clients, parfois de seniors : sa valeur dépendra de sa capacité à faire corriger sans humilier. Le récit qui commence par « j’ai vérifié d’abord que c’était une vraie erreur » signale la maturité — la moitié des « erreurs » repérées sont des conventions mal comprises. Le récit où l’erreur est corrigée en silence dans le fichier de l’autre signale au contraire un contournement irrespectueux.',
    commonErrors: [
      'Signaler l’erreur sans avoir vérifié qu’elle en était une (fausse accusation de fait).',
      'Corriger le travail de l’autre sans le prévenir : contournement irrespectueux.',
      'Exposer l’erreur devant le groupe ou le destinataire : humiliation inutile.',
      'Formuler en jugement (« tu t’es trompé ») au lieu d’en fait (« j’arrive à un autre chiffre »).',
    ],
    oralShort:
      '[Sur une situation RÉELLE :] Dans [contexte réel], j’ai repéré [discordance réelle précise]. Avant d’en parler : vérification que c’était une vraie erreur — remontée à la source de son chiffre. Puis je suis allé(e) le voir en privé, avec le fait, pas le jugement : « j’arrive à X, toi à Y — on regarde ensemble ? ». Correction faite [par lui / ensemble], avant la remise. Résultat : erreur corrigée, relation intacte. On travaille des années avec les mêmes personnes : la manière de signaler construit ou détruit la coopération.',
    oralLong:
      'Je raconterais une situation réelle en STAR. Situation : [votre cas réel — l’erreur repérée, le contexte, l’enjeu de délai]. Tâche : faire corriger l’erreur sans dégrader la relation ni prendre le travail de l’autre. Action — le cœur, chronologique : première action, vérifier avant de parler : je remonte à la source de son chiffre — parce que la moitié des « erreurs » que l’on croit voir sont des conventions, des sources ou des périmètres qu’on ne connaît pas : signaler une fausse erreur, c’est accuser à tort ; deuxième action, choisir l’interlocuteur et le cadre : directement la personne concernée — jamais un tiers d’abord —, en privé, jamais devant le groupe ni le destinataire du livrable : une erreur corrigée n’a pas besoin d’audience ; troisième action, formuler en fait, pas en jugement : « j’arrive à X, toi à Y — on regarde ensemble ? » — le chiffre parle, la personne n’est pas attaquée ; quatrième action, laisser la correction au bon niveau : l’autre corrige, ou on corrige ensemble — je ne modifie pas son fichier sans qu’il le sache, parce que son travail reste le sien, et qu’une correction furtive détruit la confiance bien plus que l’erreur elle-même ; cinquième action, capitaliser sans le crier : si la cause de l’erreur est un piège récurrent, je le mentionne comme tel — « on pourrait se faire un point de contrôle commun sur ça » — sans donner de leçon. Résultat : [effet réel — correction, qualité du livrable, relation préservée]. À titre d’illustration pédagogique — exemple d’entraînement à ne pas réciter — on peut imaginer une discordance de tableau réconciliée en privé avant remise. Si vous n’avez pas encore vécu ce cas : « je n’ai pas encore rencontré ce cas en équipe professionnelle, mais voici comment je raisonnerais… » — vérifier, privatiser, formuler en fait sans juger, laisser corriger. En conclusion : vérifier d’abord, en privé ensuite, le fait plutôt que la faute, et la correction qui appartient à son auteur — l’erreur signalée ainsi devient un service, pas une agression.',
    followUp: 'Et si la personne avait nié l’erreur malgré la preuve, vous auriez fait quoi ?',
    grading: [
      'Vérification préalable que l’erreur en était réellement une (source remontée).',
      'Interlocuteur direct et cadre privé, jamais d’exposition devant tiers.',
      'Formulation en fait (chiffre contre chiffre), aucun jugement de personne.',
      'Correction laissée à son auteur ou faite conjointement, aucun contournement furtif.',
      'Situation réelle ou variante honnête « pas encore rencontré » avec raisonnement déroulé.',
    ],
  },
  {
    id: 'qt-038',
    job: 'comptabilite',
    category: 'communication-client',
    difficulty: 2,
    skill: 'Comportemental — relancer sans réponse (STAR)',
    question: 'Racontez-moi une situation où vous attendiez quelque chose de quelqu’un et qu’il ne vous répondait pas. Vous avez fait quoi ?',
    expectedAnswer:
      'Structurer en STAR, cœur sur l’ESCALADE graduée — la relance est un métier en comptabilité (fournisseurs, clients, collègues). À titre d’illustration pédagogique — exemple générique à remplacer par une situation RÉELLE : un coéquipier ne renvoyait pas la partie d’un livrable commun ; mes actions : première relance courte qui ne fait JAMAIS re-chercher l’information — rappel du contexte en deux lignes, pièce jointe ou rappel du lien, échéance explicite (« j’ai besoin de ta partie pour jeudi ») ; en l’absence de réponse, deuxième relance par un autre canal (mail puis passage en personne ou téléphone selon l’urgence), avec montée d’un cran sur la clarté de l’échéance ; si le blocage persiste et que mon délai devient menacé : escalade à bon escient — prévenir le coordinateur ou l’enseignant avec les faits datés (première demande le X, relance le Y), jamais en accusant la personne mais en exposant le risque du livrable ; résultat : partie reçue, livrable rendu, et zéro conflit. Ce que le recruteur écoute : la relance ne fait pas re-chercher (pièce jointe, rappel du contexte), l’échéance est explicite, et l’escalade est factuelle. Variante honnête : « je n’ai pas encore eu de relances professionnelles — voici comment je raisonnerais… ».',
    reasoning:
      'En comptabilité, un fournisseur muet bloque un rapprochement ; en audit, un client muet bloque un cycle : la relance efficace est une compétence cardinale. Le recruteur écoute la maîtrise de l’escalade graduée — canal, ton, contenu — et surtout la courtoisie opérationnelle : la relance qui fait re-chercher l’information (« tu peux me renvoyer ça ? » sans contexte) double la charge de l’autre et allonge le délai. Le candidat qui escalade trop vite (avant deux relances) ou jamais (livrable lâché) échoue des deux côtés.',
    commonErrors: [
      'Relancer sans contexte ni pièce jointe : le destinataire doit re-chercher l’information.',
      'Relancer sans échéance explicite : « quand tu peux » ne produit rien.',
      'Escalader immédiatement au supérieur dès la première absence de réponse.',
      'Laisser filer sans rien dire et rendre un livrable incomplet sans prévenir.',
    ],
    oralShort:
      '[Sur une situation RÉELLE :] J’attendais [livrable/information réelle] de [personne réelle], sans réponse. Première relance : courte, contexte rappelé en deux lignes, [pièce jointe/rappel du lien], et échéance explicite — « pour jeudi ». Pas de réponse : deuxième relance par un autre canal — [passage direct/téléphone]. Toujours rien et mon délai menacé : escalade factuelle au [coordinateur/enseignant réel], avec les dates des deux demandes, sans attaquer la personne. Résultat : [effet réel]. Une relance, c’est du service : elle ne fait jamais re-chercher.',
    oralLong:
      'Je raconterais une situation réelle en STAR. Situation : [votre cas réel — ce qui était attendu, de qui, pour quelle échéance]. Tâche : obtenir le document sans dégrader la relation ni perdre le délai. Action — le cœur, l’escalade graduée : première action, la relance propre : deux lignes qui rappellent le contexte — je ne fais jamais re-chercher l’information à celui que je relance : la pièce est jointe, ou le lien est rappelé — et surtout une échéance explicite : « j’ai besoin de ceci pour jeudi » ; « quand tu peux » ne déclenche rien ; deuxième action, la rotation de canal : si le mail reste sans réponse, je change de canal — un passage direct ou un appel bref — parce qu’un mail noyé n’est pas un refus, c’est souvent un oubli ; troisième action, l’escalade à bon escient : si le blocage persiste et que MON échéance devient menacée, je préviens le coordinateur — avec les faits datés : demande initiale le X, première relance le Y, deuxième relance le Z — et en exposant le risque sur le livrable, pas la personne : « si je n’ai pas la partie vendredi, le dossier glisse » ; quatrième action, le préavis parallèle : pendant ce temps, je préviens aussi le destinataire final du livrable qu’un point peut glisser et pourquoi — le retard annoncé reste une information. Résultat : [effet réel]. À titre d’illustration pédagogique — exemple d’entraînement à ne pas réciter — on peut imaginer la partie d’un coéquipier obtenue à la deuxième relance, livrable rendu à l’heure. Si vous n’avez pas encore eu de relances professionnelles : « je n’ai pas encore rencontré ce cas en entreprise, mais voici comment je raisonnerais… » — contexte complet, échéance explicite, rotation de canal, escalade factuelle. En conclusion : relancer, c’est du service rendu : jamais faire re-chercher, toujours une échéance, changer de canal avant de changer de ton, et escalader avec des faits.',
    followUp: 'Et à la troisième relance sans réponse, vous auriez changé quoi dans votre message ?',
    grading: [
      'Relance qui ne fait jamais re-chercher (contexte, pièce jointe, rappel du lien).',
      'Échéance explicite donnée dès la première relance.',
      'Rotation de canal avant toute montée de ton.',
      'Escalade factuelle et datée au bon niveau, sans attaque de personne.',
      'Situation réelle ou variante honnête « pas encore rencontré » avec escalade déroulée.',
    ],
  },
  {
    id: 'qt-039',
    job: 'comptabilite',
    category: 'rh',
    difficulty: 4,
    skill: 'Comportemental — arbitrage qualité/délai (STAR)',
    question: 'Racontez-moi une situation où vous avez dû choisir entre finir à temps et finir proprement. Vous avez choisi quoi, et pourquoi ?',
    expectedAnswer:
      'La question sonde le rapport du candidat à la qualité en environnement comptable, où l’échéance est dure mais l’erreur coûteuse. Le réflexe attendu — en STAR : jamais laisser une erreur CONNUE, mais savoir livrer un périmètre réduit et le signaler. À titre d’illustration pédagogique — exemple générique à remplacer par une situation RÉELLE : un projet à rendre le vendredi alors que le dernier chapitre exigeait des données non encore disponibles ; mes actions : qualifier ce qui était solide et vérifiable de ce qui ne l’était pas, livrer le dossier avec un périmètre complet sur les parties vérifiées, une annexe explicite listant le point non traité et sa raison (donnée attendue), et une demande de décalage posée AVANT l’échéance pour le seul point bloqué — pas un retard global du dossier ; résultat : dossier rendu à l’heure, point complété trois jours plus tard, note sans pénalité parce que le décalage avait été annoncé et justifié. Ce que le recruteur écoute : le candidat n’a ni bâclé (rendre faux à temps), ni lâché (rendre rien du tout) — il a REDÉCOUPÉ le problème : périmètre livré + point signalé + décalage demandé à l’avance. La règle professionnelle : ce qui est rendu est juste ; ce qui n’est pas juste est annoncé. Variante honnête : « je n’ai pas encore rencontré ce cas en entreprise — voici comment je raisonnerais… ».',
    reasoning:
      'En clôture, la tentation de « finir vite » fabrique des anomalies qui ressortent en révision — et la tentation de « finir parfait » fabrique des retards qui bloquent toute la chaîne. Le recruteur cherche le candidat qui sait découper : livrer le vérifié, signaler le manquant, demander le décalage ciblé à l’avance. Les deux échecs symétriques — le bâclé et le retardataire silencieux — coûtent exactement autant à l’équipe, et les récits qui en font des exploits (« j’ai tout rendu en vitesse », « j’ai tout rendu en retard mais parfait ») sont doublement disqualifiants.',
    commonErrors: [
      'Raconter un rendu bâclé à temps comme un exploit de réactivité.',
      'L’inverse : un retard global pris sans prévenir, présenté comme une exigence de qualité.',
      'Livrer sans jamais signaler ce qui restait non vérifié dans le dossier.',
      'Demander un décalage global du livrable pour un seul point bloqué.',
    ],
    oralShort:
      '[Sur une situation RÉELLE :] J’avais [livrable réel] à rendre [échéance réelle], et [point bloqué réel]. Mon arbitrage : jamais rendre quelque chose de faux — mais ne pas non plus sacrifier tout le dossier. J’ai livré à l’heure les parties vérifiées, avec une annexe explicite : le point non traité et sa raison. Et j’ai demandé AVANT l’échéance un décalage sur ce seul point. Résultat : [effet réel]. Ma règle : ce qui est rendu est juste ; ce qui n’est pas juste est annoncé.',
    oralLong:
      'Je raconterais une situation réelle en STAR. Situation : [votre cas réel — le livrable, l’échéance, le point qui résistait]. Tâche : rendre sans erreur ET sans faire glisser tout le dossier. Action — le cœur, l’arbitrage en trois gestes : premier geste, qualifier : je sépare ce qui est solide et vérifiable de ce qui ne l’est pas — sur quelles parties je peux engager mon nom, et sur lesquelles je ne peux pas ; deuxième geste, livrer le périmètre fiable : le dossier part à l’heure, complet sur les parties vérifiées, avec une annexe explicite — le point non traité, la raison précise [votre raison réelle : donnée manquante, source non répondue, contrôle inachevé], et l’engagement de complément ; troisième geste, demander le décalage ciblé AVANT l’échéance : pas un report du dossier entier pour un seul point — un décalage nommé, justifié, daté, demandé à celui qui en a besoin pour savoir. Ce que je refuse explicitement, des deux côtés : rendre du faux à l’heure — en comptabilité, une erreur rendue est une erreur qui revient en révision — et rendre du parfait en retard silencieux — un retard subi est une faute collective. Résultat : [effet réel]. À titre d’illustration pédagogique — exemple d’entraînement à ne pas réciter — on peut imaginer un projet rendu vendredi avec une annexe, le point bloqué complété le mardi suivant, aucune pénalité parce que le décalage était annoncé et justifié. Si vous n’avez pas encore vécu ce cas : « je n’ai pas encore rencontré ce cas en entreprise, mais voici comment je raisonnerais… » — qualifier, livrer le fiable, signaler le manquant, décaler le point à l’avance. En conclusion : ce qui est rendu est juste, ce qui n’est pas juste est annoncé — la qualité protégée par le découpage, pas par le retard.',
    followUp: 'Et si le destinataire avait refusé le décalage du point restant, vous auriez fait quoi ?',
    grading: [
      'Aucun rendu bâclé présenté comme exploit, aucun retard global silencieux.',
      'Qualification préalable : parties vérifiables séparées du point bloqué.',
      'Périmètre fiable livré à l’heure + annexe explicite du non-traité.',
      'Décalage ciblé demandé à l’avance, pas de report global du livrable.',
      'Situation réelle ou variante honnête « pas encore rencontré » avec arbitrage déroulé.',
    ],
  },
  {
    id: 'qt-040',
    job: 'comptabilite',
    category: 'rh',
    difficulty: 2,
    skill: 'Comportemental — pratique réelle d’Excel (STAR)',
    question: 'Racontez-moi une situation où vous avez vraiment travaillé sur Excel — pas juste ouvert un fichier. Concrètement, vous avez fait quoi ?',
    expectedAnswer:
      'Question de vérification : le recruteur veut coller le CV au réel. Structurer en STAR avec des DÉTAILS TECHNIQUES nommés : à titre d’illustration pédagogique — exemple générique à remplacer par une situation RÉELLE : suivi d’un budget d’association ou d’un projet dans un classeur de quelques onglets ; mes actions : structurer les données en tableau propre (une ligne = une opération, colonnes normalisées : date, catégorie, montant), construire les formules qui allaient bien — SOMME.SI pour ventiler par catégorie, RECHERCHEV pour rapatrier les libellés d’une liste de référence, un tableau croisé dynamique pour la vue par poste —, installer des contrôles de cohérence (total général = somme des sous-totaux, compteur de lignes), et documenter le fichier (onglet mode d’emploi) pour qu’un autre puisse le reprendre ; résultat : suivi tenu à jour en dix minutes par semaine, écart détecté une fois grâce au contrôle de cohérence. Règle d’honnêteté : décrire son VRAI niveau — le premier fichier professionnel révèle la vérité ; ni survendre (« expert Excel »), ni sous-vendre (omettre des compétences réellement pratiquées). Variante honnête : « je n’ai pas encore utilisé Excel en entreprise — voici comment je raisonnerais pour situer mon niveau : mon usage est scolaire et associatif, voici ce que je maîtrise : [liste réelle], et je compte monter sur [fonctions du poste] ».',
    reasoning:
      'En comptabilité, Excel est l’outil quotidien : la question piège n’est pas « connaissez-vous Excel » mais « décrivez ce que vous avez réellement fait ». Le recruteur détecte le survendeur en trois secondes : celui qui ne cite aucune fonction précise, ou qui décrit « des tableaux » sans formule ni contrôle. Les mots-clés crédibles : SOMME.SI/NB.SI, RECHERCHEV ou RECHERCHEX, tableaux croisés dynamiques, mise en forme conditionnelle, contrôles par totaux. La capacité à documenter son fichier pour reprise par autrui est le marqueur du réflexe professionnel.',
    commonErrors: [
      'Se déclarer « expert Excel » sans citer une seule fonction précise.',
      'Décrire « des tableaux bien présentés » : la présentation n’est pas l’usage.',
      'Survendre par stratégie : le premier dossier professionnel révèle le vrai niveau.',
      'Sous-vendre aussi : omettre des fonctions réellement maîtrisées par fausse modestie.',
    ],
    oralShort:
      '[Sur une situation RÉELLE :] Sur [votre projet réel], j’ai construit [votre fichier réel] : une ligne par opération, colonnes normalisées. Les formules que j’ai réellement utilisées : [SOMME.SI pour ventiler par catégorie, RECHERCHEV pour rapatrier les libellés, un tableau croisé dynamique pour la vue d’ensemble]. J’avais un contrôle de cohérence — total général contre somme des sous-totaux. Résultat : [effet réel]. C’est mon niveau réel : solide sur les bases, [fonction à renforcer] à consolider.',
    oralLong:
      'Je raconterais une situation réelle en STAR — et je serai précis(e), parce que c’est une question où le vague se paie comptant. Situation : [votre cas réel — le projet, l’association, le cours, et la donnée à suivre]. Tâche : tenir un suivi fiable et réutilisable par quelqu’un d’autre. Action — le cœur, avec les noms : première action, structurer : une ligne par opération, colonnes normalisées — date, catégorie, libellé, montant — pas de fusion de cellules, pas de sous-totaux intermédiaires qui cassent les tris ; deuxième action, calculer : [vos formules réelles — SOMME.SI pour ventiler par catégorie, NB.SI pour compter, RECHERCHEV ou RECHERCHEX pour rapatrier des libellés d’une liste de référence, un tableau croisé dynamique pour la vue par poste] ; troisième action, contrôler : total général recalculé contre la somme des sous-totaux, compteur de lignes, mise en forme conditionnelle sur les écarts — c’est ce contrôle qui a [votre découverte réelle : détecté un doublon, révélé un écart] ; quatrième action, documenter : un onglet mode d’emploi — deux minutes de lecture pour que n’importe qui reprenne le fichier. Résultat : [effet réel — suivi tenu en dix minutes par semaine, écart détecté et corrigé]. À titre d’illustration pédagogique — exemple d’entraînement à ne pas réciter — on peut imaginer le budget d’une association suivi ainsi pendant un semestre. Et je terminerai par l’honnêteté de niveau, parce qu’elle sert la confiance : « je n’ai pas encore utilisé Excel en entreprise — c’est mon usage réel : scolaire et associatif ; ce que je maîtrise : [liste réelle] ; ce que je compte monter dès l’arrivée : [vos objectifs — par exemple les TCD avancés, les requêtes] ». En conclusion : des fonctions nommées, des contrôles prévus, un fichier documenté — et un niveau déclaré exact, parce que le premier dossier parlera de toute façon.',
    followUp: 'Et votre formule de contrôle — elle a déjà détecté un écart ? Racontez.',
    grading: [
      'Fonctions Excel nommées précisément (SOMME.SI, RECHERCHEV/X, TCD…).',
      'Structuration des données décrite (une ligne par opération, colonnes normalisées).',
      'Contrôle de cohérence installé (totaux, compteurs) — pas seulement du calcul.',
      'Niveau réel déclaré honnêtement : ni survente, ni fausse modestie.',
      'Situation réelle ou variante honnête avec niveau exactement cadré.',
    ],
  },
  {
    id: 'qt-041',
    job: 'tresorerie',
    category: 'rh',
    difficulty: 1,
    skill: 'Comportemental — gestion d’argent/budget (STAR)',
    question: 'Racontez-moi une situation où vous avez géré de l’argent — un budget, une caisse, même petit. Comment vous vous y êtes pris ?',
    expectedAnswer:
      'La trésorerie se prédit sur des montants modestes : le recruteur écoute les GARDE-FOUS, pas les volumes. Structurer en STAR. À titre d’illustration pédagogique — exemple générique à remplacer par une situation RÉELLE : caisse ou budget d’association sur un événement ; mes actions : séparer les rôles (celui qui encaisse n’est pas celui qui valide la dépense — même à trois personnes), exiger un justificatif pour chaque sortie, tenir le suivi écrit au fil de l’eau (pas reconstruit le soir), rapprocher en fin de journée le cash compté du cash théorique et EXPLIQUER chaque écart avant de le solder, provisionner une réserve pour imprévus ; résultat : écart de caisse nul ou expliqué ligne par ligne, et un bilan écrit remis. Ce que le recruteur écoute : le candidat a-t-il instinctivement séparé détenir et décider, exigé les pièces, et rapproché ? Ce sont exactement les garde-fous d’une trésorerie d’entreprise, transposés en miniature. Variante honnête si aucune gestion : « je n’ai jamais géré formellement une trésorerie — voici comment je raisonnerais : tout écrire, garder les pièces, recouper ce qui entre et ce qui sort, et ne jamais laisser un écart inexpliqué ».',
    reasoning:
      'Question d’adéquation trésorerie : le recruteur vérifie si le candidat a déjà mis les pieds dans la gestion réelle d’argent, même minuscule — car les réflexes (justificatifs, séparation, rapprochement) se transfèrent tels quels. La réponse qui décrit une caisse tenue « de tête » ou un budget sans trace écrite inquiète ; celle qui décrit un modeste suivi avec pièces, écrits et rapprochement rassure complètement. Le volume ne compte pas : la méthode compte.',
    commonErrors: [
      'Répondre qu’on n’a jamais géré d’argent en concluant « mais j’ai confiance en moi ».',
      'Décrire une caisse tenue de tête, sans écrit ni justificatif.',
      'Solder un écart de caisse sans l’expliquer (« il manquait cinq euros, tant pis »).',
      'Gonfler un budget fictif d’association en expérience de trésorerie d’entreprise.',
    ],
    oralShort:
      '[Sur une situation RÉELLE :] J’ai géré [caisse/budget réel — montant, événement]. Mes garde-fous : un justificatif pour chaque sortie, un suivi écrit au fil de l’eau — pas reconstruit le soir —, la séparation entre encaisser et valider, et le rapprochement en fin de journée : cash compté contre cash théorique, chaque écart expliqué avant d’être soldé. Résultat : [effet réel — écart nul ou expliqué]. Le volume était modeste, mais ce sont les mêmes garde-fous qu’en entreprise, en miniature.',
    oralLong:
      'Je raconterais une situation réelle en STAR — même modeste, parce que le recruteur écoute les garde-fous, pas les montants. Situation : [votre cas réel — la caisse, le budget, l’événement, le montant]. Tâche : rendre des comptes exacts sur l’argent confié. Action — le cœur : première action, séparer les rôles : celui qui encaisse n’est pas celui qui valide les dépenses — même dans une petite équipe, c’est le premier garde-fou de toute trésorerie ; deuxième action, exiger la pièce : chaque sortie a son justificatif, conservé et rattaché au suivi — ce qui n’est pas justifié n’est pas payé, point final ; troisième action, écrire au fil de l’eau : le suivi est tenu à chaque mouvement, pas reconstruit de mémoire le soir — une caisse reconstruite est une caisse arrangée ; quatrième action, rapprocher : en fin de journée, cash compté contre cash théorique, et chaque écart est EXPLIQUÉ avant d’être soldé — un écart inexpliqué n’est pas une marge d’erreur, c’est un signal ; cinquième action, provisionner : une réserve pour imprévus, décidée à l’avance, pour ne pas improviser sous pression. Résultat : [effet réel — écart nul ou expliqué ligne par ligne, bilan écrit remis]. À titre d’illustration pédagogique — exemple d’entraînement à ne pas réciter — on peut imaginer la caisse d’un événement associatif fermée à l’écart nul avec ces cinq garde-fous. Si vous n’avez jamais géré d’argent : dites-le — « je n’ai pas encore géré formellement une trésorerie, mais voici ce que je ferais par réflexe : tout écrire, garder les pièces, séparer encaisser et décider, recouper en fin de journée, et ne jamais laisser un écart inexpliqué ». En conclusion : séparation des rôles, pièces exigées, écrit au fil de l’eau, rapprochement expliqué, réserve prévue — les garde-fous de la trésorerie d’entreprise, transposés en miniature.',
    followUp: 'Et le moindre écart de caisse que vous ayez connu — il venait d’où ?',
    grading: [
      'Garde-fous décrits : justificatifs exigés, suivi écrit au fil de l’eau.',
      'Séparation encaisser/décider mentionnée, même en petite équipe.',
      'Rapprochement final avec écarts expliqués avant d’être soldés.',
      'Aucun gonflement du volume : modestie assumée, méthode mise en avant.',
      'Situation réelle ou variante honnête « jamais géré » avec réflexes déroulés.',
    ],
  },
  {
    id: 'qt-042',
    job: 'tresorerie',
    category: 'communication-client',
    difficulty: 3,
    skill: 'Comportemental — dire non sans casser la relation (STAR)',
    question: 'Racontez-moi une situation où vous avez dû dire non à une demande, sans casser la relation. Vous avez fait comment ?',
    expectedAnswer:
      'En trésorerie, savoir refuser — un paiement hors procédure, une dépense sans justificatif — en gardant la relation de travail est LE réflexe métier. Structurer en STAR. À titre d’illustration pédagogique — exemple générique à remplacer par une situation RÉELLE : refus d’une dépense hors budget dans une association ; mes actions : refuser la demande, pas la personne — dire clairement non sur le critère (la règle, le budget voté), pas sur l’humeur ; expliquer la règle invoquée et sa raison ; proposer systématiquement l’alternative conforme (la procédure d’exception, le prochain budget, la demande écrite) — un non sans alternative est une porte fermée, un non avec alternative est une redirection ; tenir la position calmement face à l’insistance, sans durcir le ton ; et après le refus, traiter la personne normalement — le non n’est pas personnel, la relation continue ; résultat : demande réorientée vers la procédure d’exception, acceptée, relation intacte. Ce que le recruteur écoute : le non est APPUYÉ SUR UN CRITÈRE (règle, procédure, budget), formulé avec une alternative, et tenu sans agressivité. Variante honnête : « je n’ai pas encore eu à refuser une demande professionnelle — voici comment je raisonnerais… ».',
    reasoning:
      'La trésorerie est le garde-fou de l’entreprise : son quotidien est fait de refus opérationnels — paiements hors délégation, dépenses sans pièce, demandes à traiter « maintenant ». Le recruteur cherche le candidat capable de tenir la règle sans humilier, parce qu’un refus mal fait fabrique des contournements : les gens cherchent ensuite à passer par-dessus. Le non expliqué + alternative + constance sans dureté est la combinaison qui préserve et la règle et la relation. Un candidat qui « n’a jamais dit non » est un candidat qui signera tout.',
    commonErrors: [
      'Refuser sur son humeur (« non, je ne veux pas ») au lieu d’un critère objectif.',
      'Refuser sans alternative : une porte fermée provoque le contournement.',
      'Céder à l’insistance : le non qui devient oui discrédite la règle suivante.',
      'Envenimer après le refus : froid ou rancunier, la relation se casse durablement.',
    ],
    oralShort:
      '[Sur une situation RÉELLE :] On m’a demandé [demande réelle hors cadre]. Mon refus : clair, posé sur le critère — [règle/budget/procédure réel] — pas sur mon humeur. J’ai expliqué la règle et proposé l’alternative conforme : [votre alternative réelle]. Face à l’insistance, j’ai tenu calmement, sans durcir. Et juste après, j’ai traité la personne normalement. Résultat : [issue réelle]. Un non avec alternative, c’est une redirection, pas une porte fermée.',
    oralLong:
      'Je raconterais une situation réelle en STAR. Situation : [votre cas réel — la demande, qui l’a faite, pourquoi elle sortait du cadre]. Tâche : refuser la demande en gardant la relation de travail. Action — le cœur : première action, asseoir le refus sur un critère : je refuse au nom de [la règle, le budget voté, la procédure — votre critère réel], jamais au nom de mon humeur — le critère est discutable en réunion, l’humeur ne l’est pas, et c’est ce qui rend le refus acceptable ; deuxième action, expliquer la règle et sa raison : pourquoi elle existe, ce qu’elle protège — la plupart des demandes hors cadre ignorent la raison de la règle, et l’expliquer désamorce la moitié des tensions ; troisième action, proposer l’alternative conforme : [votre alternative réelle — la procédure d’exception, la demande écrite, le prochain budget] — c’est la clé de tout : un non sans alternative fabrique un contournement, un non avec alternative fabrique une réorientation ; quatrième action, tenir sans durcir : face à l’insistance, je répète le même critère calmement — je ne monte ni le volume ni les enjeux personnels — parce qu’un non qui devient oui sous pression discrédite la prochaine règle ; cinquième action, soigner l’après : dès le refus prononcé, je traite la personne comme avant — le non visait la demande, la relation continue. Résultat : [issue réelle]. À titre d’illustration pédagogique — exemple d’entraînement à ne pas réciter — on peut imaginer une dépense hors budget réorientée vers la procédure d’exception, acceptée, relation intacte. Si vous n’avez pas encore eu à refuser une demande : « je n’ai pas encore rencontré ce cas en entreprise, mais voici comment je raisonnerais… » — critère, raison, alternative, constance calme. En conclusion : refuser la demande et jamais la personne, un critère plutôt qu’une humeur, toujours une alternative, tenir sans durcir — en trésorerie, c’est ce qui fait respecter la règle sans se faire contourner.',
    followUp: 'Et quand la personne est repartie agacée malgré tout — vous avez fait quoi après ?',
    grading: [
      'Refus appuyé sur un critère objectif (règle, procédure, budget), pas sur l’humeur.',
      'Raison de la règle expliquée à l’interlocuteur.',
      'Alternative conforme systématiquement proposée.',
      'Position tenue calmement face à l’insistance, relation préservée après le refus.',
      'Situation réelle ou variante honnête « pas encore rencontré » avec raisonnement déroulé.',
    ],
  },
  {
    id: 'qt-043',
    job: 'tresorerie',
    category: 'rh',
    difficulty: 4,
    skill: 'Comportemental — incohérence entre deux sources (STAR)',
    question: 'Racontez-moi une situation où deux sources d’information se contredisaient — deux chiffres différents pour la même chose. Vous avez fait quoi ?',
    expectedAnswer:
      'Le quotidien de la trésorerie (relevé bancaire contre comptabilité) transposé en situation vécue. Structurer en STAR. À titre d’illustration pédagogique — exemple générique à remplacer par une situation RÉELLE : deux chiffres différents pour un même total — fichier de suivi contre registre ; mes actions : qualifier chaque source avant de les opposer (que mesure exactement chaque chiffre : périmètre, date de clôture, mode de calcul — un « écart » est souvent deux mesures différentes du même mot), chercher la source tierce ou le document original (la pièce maîtresse : le justificatif, le relevé, l’original — c’est lui qui tranche, pas la majorité), reconstituer point par point l’écart s’il persiste (énumérer les éléments d’une liste, comparer les exclusions/inclusions), documenter la cause trouvée et la correction, et le signaler aux deux fournisseurs de données si l’erreur était dans une source ; résultat : écart expliqué et corrigé, et une réconciliation documentée. Ce que le recruteur écoute : le candidat ne tranche pas par autorité ni par préférence — il fait parler la pièce originale et il explique l’écart au lieu de le masquer par une écriture d’équilibrage. Variante honnête : « je n’ai pas encore eu ce cas en entreprise — voici comment je raisonnerais… ».',
    reasoning:
      'Le rapprochement bancaire est l’exercice reine de la trésorerie : deux sources légitimes qui divergent, et l’art de faire converger. Le recruteur veut savoir si le candidat a le réflexe de la qualification des sources (mesurent-elles la même chose ?) et de la pièce originale (le document qui tranche). Le candidat qui « corrige l’écart » d’une écriture d’équilibrage sans explication est exactement celui qui fabrique des comptes flatteurs et des rapprochements faux. La cause documentée vaut plus que la correction elle-même.',
    commonErrors: [
      'Choisir la source préférée (la plus récente, celle du chef) sans qualifier les deux.',
      'Solder l’écart par une écriture d’équilibrage sans cause identifiée.',
      'Ignorer que les deux chiffres peuvent mesurer des choses différentes (périmètre, date).',
      'Ne pas documenter la cause trouvée : l’écart réapparaîtra à la prochaine comparaison.',
    ],
    oralShort:
      '[Sur une situation RÉELLE :] [Source A réelle] et [source B réelle] donnaient deux chiffres pour la même chose. D’abord, qualifier : est-ce que les deux mesurent pareil — même périmètre, même date, même mode de calcul ? Ensuite, chercher la pièce maîtresse : [le document original réel qui tranche]. Puis reconstituer l’écart point par point — [ce que vous avez trouvé réellement]. Résultat : écart expliqué, corrigé, documenté. Je ne solde jamais un écart sans cause : une écriture d’équilibrage sans explication, c’est un mensonge de plus dans les comptes.',
    oralLong:
      'Je raconterais une situation réelle en STAR. Situation : [votre cas réel — les deux sources, les deux chiffres, le contexte]. Tâche : déterminer le chiffre juste et expliquer l’écart, sans en masquer un. Action — le cœur : première action, qualifier avant d’opposer : je demande à chaque source ce qu’elle mesure exactement — périmètre inclus, date de référence, mode de calcul : la moitié des « contradictions » sont deux mesures différentes portant le même nom ; deuxième action, chercher la pièce maîtresse : le document original — relevé, justificatif, facture, enregistrement primaire — c’est lui qui tranche, pas la source la plus autorisée ni la plus récente ; troisième action, reconstituer l’écart : si les deux chiffres persistent, je déroule les composants — lister les éléments de chaque côté, comparer les inclusions et les exclusions : l’écart se localise presque toujours dans un élément compté d’un côté et pas de l’autre ; quatrième action, documenter : la cause de l’écart, la correction retenue, la référence de la pièce — parce qu’un écart expliqué une fois mal documenté redevient un mystère à la période suivante ; cinquième action, signaler : si l’erreur venait d’une source, son fournisseur est prévenu — sinon l’écart reviendra. Résultat : [effet réel]. À titre d’illustration pédagogique — exemple d’entraînement à ne pas réciter — on peut imaginer un fichier de suivi contredit par un registre, réconciliés par le justificatif original. Si vous n’avez pas encore vécu ce cas : « je n’ai pas encore rencontré ce cas en entreprise, mais voici comment je raisonnerais… » — qualifier, pièce maîtresse, reconstitution, documentation. En conclusion : deux chiffres qui divergent, c’est une information, pas un embarras : qualifier les sources, faire parler l’original, expliquer la cause — et jamais compenser ce qu’on n’a pas compris.',
    followUp: 'Et si aucune des deux sources ne s’avérait fiable, vous auriez fait quoi ?',
    grading: [
      'Qualification préalable des deux sources (périmètre, date, mode de calcul).',
      'Recours à la pièce originale pour trancher, pas à l’autorité ou à la préférence.',
      'Reconstitution de l’écart point par point (inclusions/exclusions comparées).',
      'Aucune écriture d’équilibrage sans cause identifiée et documentée.',
      'Situation réelle ou variante honnête « pas encore rencontré » avec raisonnement déroulé.',
    ],
  },
  {
    id: 'qt-044',
    job: 'tresorerie',
    category: 'rh',
    difficulty: 5,
    skill: 'Comportemental — pression vers une action non conforme (STAR)',
    question: 'Racontez-moi une situation où quelqu’un vous a poussé à faire quelque chose qui vous semblait incorrect ou hors règle. Vous avez fait quoi ?',
    expectedAnswer:
      'La question la plus engageante du panel : le recruteur teste la ligne rouge. La réponse attendue — en STAR — suit la logique de conformité : vérifier, formaliser, escalader ; ne jamais exécuter seul une instruction manifestement irrégulière. À titre d’illustration pédagogique — exemple générique à remplacer par une situation RÉELLE et modeste : pression d’un groupe pour « arranger » un résultat de projet (gonfler une mesure, cacher un retard) ; mes actions : refuser calmement en nommant la règle (pas en moralisant), proposer l’alternative honnête — assumer le résultat réel avec un plan d’action plutôt qu’un chiffre arrangé, demander si besoin la confirmation écrite de ce qui était demandé (la traçabilité fait ressortir les demandes irrégulières), et si la pression persistait : en parler au référent — enseignant, responsable, tuteur — avec les faits ; résultat : résultat réel assumé, appréciation constructive, zéro complicité. Ce que le recruteur écoute : le candidat distingue l’erreur de procédure discutable (à qualifier avant de s’alarmer) de l’irrégularité manifeste (à refuser et escalader) ; il ne s’enorgueillit pas d’un héroïsme de résistance, et il ne raconte pas qu’il a « obéi en se disant que ce n’était pas son problème ». Règle absolue : même en stage, « on m’a dit de le faire » ne protège personne. Variante honnête : « je n’ai pas encore été confronté(e) à ça — voici comment je raisonnerais : vérifier que c’est réellement irrégulier et pas une pratique que j’ignore, demander la règle, demander la trace écrite, et si le doute persiste, en parler à mon tuteur ou au référent désigné — jamais rester seul avec le doute ».',
    reasoning:
      'En trésorerie et en audit, le stagiaire est le maillon auquel on peut demander de payer vite sans pièce, d’arranger un rapprochement, de taire une anomalie : le recruteur veut prédire le comportement sous pression. La matrice attendue : qualifier (c’est vraiment irrégulier ?), refuser sur la règle, proposer l’alternative conforme, tracer par écrit, escalader vers le référent. Les deux échecs symétriques : le cynique (« j’exécute, c’est pas ma faute ») et le chevalier qui raconte sa croisade morale avec complaisance. La sobriété factuelle du récit est le vrai signal de maturité.',
    commonErrors: [
      'Raconter qu’on a obéi en se dédouanant (« ce n’était pas ma responsabilité »).',
      'Transformer le récit en croisade morale complaisante : signal d’inadaptation.',
      'Confondre pratique inconnue et irrégularité : s’alarmer sans avoir qualifié.',
      'Ne pas connaître le réflexe d’escalade : rester seul face à la pression.',
    ],
    oralShort:
      '[Sur une situation RÉELLE et modeste :] On m’a demandé de [demande réelle hors règle]. Ma séquence : refuser calmement en nommant la règle — pas en moralisant —, proposer l’alternative honnête : [votre alternative réelle]. Si la pression insistait : demander la confirmation écrite de la demande, et en parler au référent avec les faits. Résultat : [issue réelle]. Ma ligne est simple : même en stage, « on m’a dit de le faire » ne protège personne — je ne reste jamais seul avec un doute de conformité.',
    oralLong:
      'Je raconterais une situation réelle en STAR — sobre, factuelle, sans héroïsme. Situation : [votre cas réel — la demande, qui l’a faite, le contexte]. Tâche : ne pas participer à une irrégularité tout en restant un collaborateur avec qui on peut travailler. Action — le cœur, la séquence de conformité : première action, qualifier : je vérifie d’abord que la demande est réellement irrégulière et pas une pratique que je ne connais pas — je demande la règle, je la vérifie moi-même : s’alarmer à tort détruit la crédibilité des vraies alertes ; deuxième action, refuser sur la règle : je dis non en nommant le critère — la procédure, le cadre — sans leçon de morale : la règle parle, pas ma vertu ; troisième action, proposer l’alternative conforme : [votre alternative réelle — la voie rapide légitime, le résultat réel assumé avec plan d’action] : la plupart des demandes irrégulières cherchent un résultat, pas l’irrégularité — offrir le même résultat par la voie conforme désarme la demande ; quatrième action, tracer : si la demande revient, je demande sa confirmation écrite — sans agressivité, pour clarté : une demande irrégulière se rétracte presque toujours quand elle doit s’écrire ; cinquième action, escalader : si la pression persiste, j’expose les faits au référent — enseignant, tuteur, responsable — datés et sans interprétation : mon rôle est de signaler, le sien est de trancher. Résultat : [issue réelle]. À titre d’illustration pédagogique — exemple d’entraînement à ne pas réciter — on peut imaginer la pression d’un groupe pour gonfler un résultat de projet, désamorcée par l’alternative : le résultat réel accompagné d’un plan d’action. Si vous n’avez jamais vécu ce cas : « je n’ai pas encore été confronté(e) à ça en entreprise, mais voici comment je raisonnerais… » — qualifier, refuser sur la règle, alternative, écrit, référent. En conclusion : vérifier avant de s’alarmer, refuser sans moraliser, toujours offrir la voie conforme, tracer, escalader — et ne jamais rester seul avec un doute de conformité : c’est la seule attitude qui protège l’entreprise et le stagiaire en même temps.',
    followUp: 'Et le rapport avec celui qui a fait la demande après ça — il a été comment ?',
    grading: [
      'Qualification préalable : vérifier que la demande est réellement irrégulière.',
      'Refus appuyé sur la règle, sans leçon de morale ni croisade complaisante.',
      'Alternative conforme systématiquement proposée.',
      'Réflexes de traçabilité (confirmation écrite) et d’escalade (référent) décrits.',
      'Situation réelle ou variante honnête « pas encore confronté » avec séquence déroulée.',
    ],
  },
  {
    id: 'qt-045',
    job: 'tresorerie',
    category: 'organisation',
    difficulty: 4,
    skill: 'Comportemental — imprévu qui chamboule le plan (STAR)',
    question: 'Racontez-moi une situation où tout a changé d’un coup — un imprévu qui a chamboulé votre plan de la journée. Vous avez fait quoi ?',
    expectedAnswer:
      'La trésorerie vit d’imprévus (un décaissement urgent, un prélèvement inattendu) : le recruteur écoute la RE-PLANIFICATION TRANSPARENTE. Structurer en STAR. À titre d’illustration pédagogique — exemple générique à remplacer par une situation RÉELLE : le jour d’un événement, un intervenant annule une heure avant ; mes actions : évaluer l’impact réel avant de réagir (qui est touché, quels délais bougent), re-prioriser par conséquence — ce qui engage des tiers et ne se reprogramme pas passe avant ce qui ne dépend que de moi —, prévenir immédiatement les personnes impactées par les glissements avec les nouveaux horaires, garder une trace (note de suivi : ce qui a glissé, où, pourquoi) pour ne rien perdre, et clore la journée par un point de dix minutes : où en est chaque point déplacé ; résultat : événement tenu avec un programme réorganisé en trente minutes, aucun participant resté sans information. Ce que le recruteur écoute : le candidat re-planifie par CONSÉQUENCE (pas par ordre d’arrivée des demandes), prévient tôt, et trace ce qui glisse — il ne « gère l’adrénaline », il administre le changement de plan. Variante honnête : « je n’ai pas encore connu ça en entreprise — voici comment je raisonnerais… ».',
    reasoning:
      'Le réflexe mesuré ici est la re-planification : beaucoup de candidats racontent leur stress et leur réactivité héroïque ; le recruteur veut la méthode derrière l’agilité. Trois marqueurs : priorisation par conséquence sur les tiers (ce qui engage autrui d’abord), information précoce des impactés (l’imprévu est géré autant par la communication que par l’action), et traçabilité du glissement (rien ne se perd). La question transpose exactement un jour de trésorerie : un virement urgent qui décale tout — et la capacité à garder la vue d’ensemble.',
    commonErrors: [
      'Raconter l’adrénaline et le sauvetage : le stress n’est pas une méthode.',
      'Re-prioriser par ordre d’arrivée des demandes plutôt que par conséquence sur les tiers.',
      'Ne prévenir les impactés qu’après avoir tout réorganisé (ou jamais).',
      'Laisser se perdre les tâches déplacées : aucun suivi écrit, aucune trace du glissement.',
    ],
    oralShort:
      '[Sur une situation RÉELLE :] [Votre imprévu réel] a chamboulé ma journée. Ma séquence : évaluer l’impact réel — qui est touché, quels délais bougent ; re-prioriser par conséquence — ce qui engage des tiers et ne se reprogramme pas passe d’abord ; prévenir tout de suite les impactés avec les nouveaux horaires ; tracer ce qui glisse — une note de suivi ; et clore par un point de dix minutes en fin de journée. Résultat : [effet réel]. Je n’administre pas l’adrénaline — j’administre le changement de plan.',
    oralLong:
      'Je raconterais une situation réelle en STAR. Situation : [votre cas réel — l’imprévu, le plan initial, le moment où tout a basculé]. Tâche : absorber l’imprévu sans laisser filer les engagements déjà pris. Action — le cœur, la re-planification transparente : première action, évaluer avant de réagir : deux minutes pour cartographier l’impact réel — qui est touché, quels délais bougent, quels engagements sont déjà pris — parce que réagir avant d’évaluer déplace le problème au lieu de le résoudre ; deuxième action, re-prioriser par conséquence : ce qui engage des tiers et ne se reprogramme pas — une salle réservée, un intervenant attendu, une échéance légale — passe avant ce qui ne dépend que de moi et peut glisser d’un jour ; troisième action, prévenir tôt : les personnes impactées apprennent les glissements tout de suite, avec les nouveaux horaires — l’imprévu se gère autant par l’information que par l’action, et un impacté prévenu s’adapte, un impacté surpris se fâche ; quatrième action, tracer : une note de suivi — ce qui a glissé, où, pourquoi, nouveau point de rendez-vous — pour qu’aucune tâche déplacée ne se perde dans le remue-ménage ; cinquième action, clore : en fin de journée, un point de dix minutes — où en est chaque élément déplacé, qu’est-ce qui reste ouvert — parce qu’un imprévu mal clôturé en fabrique trois autres le lendemain. Résultat : [effet réel]. À titre d’illustration pédagogique — exemple d’entraînement à ne pas réciter — on peut imaginer un événement maintenu après réorganisation en trente minutes, tous les participants informés. Si vous n’avez pas encore vécu ce cas en entreprise : « je n’ai pas encore rencontré ce cas en entreprise, mais voici comment je raisonnerais… » — évaluer, re-prioriser par conséquence, prévenir tôt, tracer, clôturer. En conclusion : deux minutes d’évaluation, une priorisation par conséquence sur les tiers, une information immédiate, une trace écrite et une clôture — l’imprévu ne se subit pas avec de l’adrénaline, il s’administre avec une méthode.',
    followUp: 'Et la tâche que vous avez faite glisser ce jour-là — elle a été rattrapée quand, au final ?',
    grading: [
      'Évaluation de l’impact réel avant toute réaction (deux minutes de cartographie).',
      'Re-priorisation par conséquence sur les tiers, pas par ordre d’arrivée.',
      'Impactés prévenus tôt avec les nouveaux horaires.',
      'Traçabilité du glissement + clôture en fin de journée.',
      'Situation réelle ou variante honnête « pas encore rencontré » avec séquence déroulée.',
    ],
  },
]
