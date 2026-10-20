// =====================================================================
// AuditLab — Banque de questions : COMPTABILITÉ, RÉVISION, TRÉSORERIE
// 75 questions — IDs qc-001 à qc-075
// Répartition : comptabilite 40 · revision 15 · tresorerie 20
// Rédaction responsable comptable / trésorier senior — recruteur PFE France.
// =====================================================================

import type { BankQuestion } from '@/lib/types'

export const comptaTresorerieQuestions: BankQuestion[] = [
  {
    id: 'qc-001',
    job: 'comptabilite',
    category: 'definitions',
    difficulty: 1,
    skill: 'Mécanique débit/crédit',
    question: 'Débit, crédit : c’est quoi concrètement ? Explique-moi avec un exemple simple.',
    expectedAnswer:
      'Le débit et le crédit sont les deux colonnes de tout compte comptable : débit à gauche, crédit à droite. Ce que ça représente dépend de la classe du compte : pour les comptes d’actif et de charges, une somme au débit augmente le solde ; pour les comptes de passif et de produits, c’est le crédit qui augmente le solde. La logique d’ensemble est la partie double : chaque opération est enregistrée au moins deux fois, pour un montant total identique au débit et au crédit. Exemple fictif : achat de marchandises 100 € HT payé par banque (TVA 20 %) → débit du compte de charges pour 100, débit de la TVA déductible pour 20, crédit de la banque pour 120.',
    reasoning:
      'Question d’échauffement qui élimine les candidats qui ont appris par cœur sans comprendre. Le piège est de croire que débit = sortie d’argent et crédit = entrée : c’est faux, tout dépend de la nature du compte. Il faut vérifier que le candidat relie la mécanique aux classes du plan de comptes et à la partie double, sinon il sera incapable de lire une écriture complexe plus tard. La logique vaut pour le PCG français comme pour le CGNC marocain.',
    commonErrors: [
      'Croire que le débit est toujours une dépense et le crédit une recette.',
      'Expliquer les deux colonnes sans parler de la nature du compte (actif/passif, charges/produits).',
      'Oublier la partie double : un débit quelque part = un crédit ailleurs, à montant égal.',
      'Donner un exemple sans TVA alors que la facture d’achat la contient.',
    ],
    oralShort:
      'Débit et crédit sont les deux colonnes de chaque compte : à gauche le débit, à droite le crédit. Sur un compte d’actif ou de charges, le débit augmente le solde ; sur un compte de passif ou de produits, c’est le crédit qui l’augmente. Et chaque écriture respecte la partie double : total des débits égal au total des crédits, comme un achat de 100 HT qui débite la charge et la TVA, et crédite la banque de 120.',
    oralLong:
      'Par définition, le débit et le crédit sont les deux zones d’inscription de tout compte comptable : le débit est la colonne de gauche, le crédit celle de droite. L’objectif de cette mécanique est de traduire chaque opération de l’entreprise de façon équilibrée : c’est le principe de la partie double, un total de débits toujours égal au total des crédits. Pour lire correctement un compte, la démarche est simple : on regarde d’abord sa classe. Un compte d’actif ou une charge augmente au débit et diminue au crédit ; un compte de passif ou un produit fait l’inverse — il augmente au crédit. Concrètement, si j’achète des marchandises 100 euros HT payées par banque, avec une TVA à 20 %, je débite le compte d’achat pour 100, je débite la TVA déductible pour 20, et je crédite la banque pour 120 : l’écriture est équilibrée et l’opération est traduite fidèlement. En conclusion, débit et crédit ne veulent pas dire recette ni dépense : c’est la nature du compte qui donne le sens, et la partie double qui garantit la cohérence — logique identique au PCG français et au CGNC marocain.',
    followUp: 'Alors pourquoi un compte client diminue-t-il au crédit, alors que l’argent rentre ?',
    grading: [
      'Colonnes débit/crédit associées à la nature du compte (actif/charges vs passif/produits).',
      'Partie double explicitée : égalité débits/crédits.',
      'Exemple chiffré correct, TVA mentionnée.',
      'Absence de l’idée fausse « débit = dépense ».',
    ],
  },
  {
    id: 'qc-002',
    job: 'comptabilite',
    category: 'definitions',
    difficulty: 1,
    skill: 'Journaux comptables',
    question: 'Un journal comptable, c’est quoi ? Et pourquoi une entreprise utilise plusieurs journaux ?',
    expectedAnswer:
      'Le journal est le recueil chronologique des écritures comptables : chaque opération y est enregistrée dans l’ordre où elle survient, avec sa date, ses comptes, son libellé et son montant. C’est une pièce de la piste d’audit exigée par la réglementation. On le découpe en journaux divisionnaires — achats, ventes, banque, caisse, opérations diverses (OD), paie — pour trois raisons : organiser le volume, séparer les flux par source et par équipe, et faciliter les contrôles et les déclarations (notamment la TVA). Le découpage exact est un choix d’organisation interne : une TPE peut tenir un journal unique, un groupe peut avoir des dizaines de journaux par entité et par flux.',
    reasoning:
      'Le recruteur vérifie que le candidat a travaillé dans un environnement réel de saisie et ne confond pas journal, grand livre et balance. L’important est la chronologie (valeur légale) et la justification pratique des journaux divisionnaires. Il faut signaler que le nombre de journaux n’est pas une règle comptable mais une organisation adaptée à la taille et aux flux de l’entreprise — distinction entre exigence réglementaire et pratique interne.',
    commonErrors: [
      'Confondre journal, grand livre et balance.',
      'Présenter la liste des journaux divisionnaires comme une obligation légale.',
      'Oublier la dimension chronologique et la piste d’audit du journal.',
      'Ignorer que la comptabilité informatisée remplace le journal papier par des validations tracées.',
    ],
    oralShort:
      'Le journal, c’est le livre où toutes les écritures sont enregistrées chronologiquement : date, comptes, libellés, montants. On le découpe en journaux spécialisés — achats, ventes, banque, caisse, OD, paie — parce que les flux viennent de sources différentes, traités par des équipes différentes, et que ça facilite les contrôles et la TVA. Le nombre de journaux reste un choix d’organisation : une TPE peut n’en avoir qu’un.',
    oralLong:
      'Par définition, le journal comptable est le recueil chronologique de toutes les écritures de l’entreprise : chaque opération y figure avec sa date, ses comptes, son libellé et son montant. Son objectif est double — traduire les opérations dans l’ordre où elles surviennent et constituer une trace opposable, un maillon de la piste d’audit. En pratique, on éclate ce journal en journaux divisionnaires : achats pour les factures fournisseurs, ventes pour les clients, banque et caisse pour les règlements, opérations diverses pour la paie et les régularisations. La démarche est guidée par l’organisation : chaque journal est alimenté par une source homogène, souvent saisie par une équipe distincte, ce qui permet les contrôles par cycle, le lettrage et la déclaration de TVA. Par exemple, sur mon stage fictif en cabinet, le journal des achats était contrôlé en priorité sur les doublons de numéros de facture. En conclusion, le journal est la mémoire chronologique de la comptabilité, et son découpage est un choix d’organisation interne adapté à la taille de l’entreprise — pas une règle figée du PCG.',
    followUp: 'Dans ton ERP, c’est quoi concrètement la différence entre une écriture validée et une écriture brouillon dans le journal ?',
    grading: [
      'Définition chronologique du journal avec la piste d’audit.',
      'Exemples de journaux divisionnaires pertinents.',
      'Justification pratique du découpage (sources, contrôles, TVA).',
      'Dimension organisation signalée, pas normative.',
    ],
  },
  {
    id: 'qc-003',
    job: 'comptabilite',
    category: 'definitions',
    difficulty: 1,
    skill: 'TVA collectée et déductible',
    question: 'TVA collectée, TVA déductible : c’est quoi la différence ?',
    expectedAnswer:
      'La TVA collectée est la taxe facturée aux clients sur les ventes : l’entreprise ne la garde pas, elle la reverse à l’État — c’est une dette envers le Trésor, enregistrée au crédit des comptes 4457. La TVA déductible est celle payée sur les achats nécessaires à l’exploitation : c’est une créance sur l’État, en comptes 4456. En fin de période, la TVA à payer est la différence : collectée moins déductible (cas général d’un assujettissement total). Taux français actuels : 20 % normal, 10 % intermédiaire, 5,5 % réduit, 2,1 % presse ; au Maroc, le CGNC côtoie des taux de 20, 14, 10 et 7 % — les taux dépendent donc du référentiel pays. La TVA n’est ni une charge ni un produit : elle transite par des comptes de tiers.',
    reasoning:
      'Question fondamentale qui conditionne la compréhension de la déclaration CA3 et des comptes 445. Le recruteur attend la vision « collecteur intermédiaire » : l’entreprise n’avance que le différentiel et le consommateur final supporte la taxe. Les taux doivent être cités prudemment — ils sont propres à chaque pays — et le candidat qui confond TVA déductible et crédit de TVA montre qu’il n’a jamais préparé de déclaration.',
    commonErrors: [
      'Enregistrer la TVA collectée en produit ou la déductible en charge.',
      'Confondre crédit de TVA (excédent déductible reportable) et TVA déductible.',
      'Citer les taux français comme s’ils étaient universels (au Maroc : 20/14/10/7 %).',
      'Oublier que la TVA à payer se déclare sur périodicité mensuelle ou trimestrielle selon le régime.',
    ],
    oralShort:
      'La TVA collectée, c’est la taxe que je facture aux clients : une dette envers l’État, au crédit du 4457. La TVA déductible, c’est celle payée sur mes achats professionnels : une créance sur l’État, au 4456. La différence, je la reverse — c’est la TVA à payer de la déclaration. Ce n’est ni une charge ni un produit pour l’entreprise, et les taux dépendent du pays : en France 20, 10, 5,5 %, au Maroc 20, 14, 10, 7 %.',
    oralLong:
      'Par définition, l’entreprise assujettie joue le rôle de collecteur pour le compte de l’État : elle encaisse la TVA sur ses ventes — la TVA collectée — et elle paie de la TVA sur ses achats — la TVA déductible. L’objectif de la mécanique est simple : seule la différence transite réellement au Trésor, le consommateur final supporte la taxe. Au niveau comptable, la démarche suit cette logique : la TVA collectée est une dette envers l’État au crédit des comptes 4457, la déductible est une créance au débit des 4456, et la déclaration périodique — CA3 mensuelle en France, ou trimestrielle sous conditions — solde le compte 44551. Concrètement, si je collecte 22 750 euros et que je déduis 13 100, je reverse 9 650 : aucun de ces montants ne touche mon compte de résultat. Par exemple, sur une note de frais de restauration dite « de representation », la TVA n’est déductible qu’en partie selon les règles fiscales — la déductibilité a ses limites. En conclusion, TVA collectée = dette, TVA déductible = créance, le solde se reverse, et les taux comme les règles de déductibilité dépendent du référentiel du pays — 20/10/5,5 % en France, 20/14/10/7 % au Maroc.',
    followUp: 'Que se passe-t-il si sur un mois ma TVA déductible dépasse ma TVA collectée ?',
    grading: [
      'Vision « collecteur » : dette vs créance sur l’État.',
      'Comptes 4457 / 4456 cités, neutralité sur le résultat.',
      'Taux cités avec prudence selon le pays (France vs Maroc).',
      'Notion de TVA à payer et de déclaration périodique.',
    ],
  },
  {
    id: 'qc-004',
    job: 'comptabilite',
    category: 'definitions',
    difficulty: 1,
    skill: 'Lettrage des comptes tiers',
    question: 'On me parle de lettrage des comptes clients. C’est quoi ?',
    expectedAnswer:
      'Le lettrage consiste à rapprocher, à l’intérieur d’un compte de tiers, chaque facture avec le ou les règlements qui la soldent, pour apparier les montants : une facture de 1 200 et un règlement de 1 200 se « lettrent » ensemble et sortent du solde restant dû. Le solde non lettré représente ce qui reste dû ou inexpliqué. C’est l’outil de base du suivi clients : détection des impayés, fiabilisation du solde avant clôture, base des relances et des dépréciations de créances. Les vieux éléments non lettrés cachent souvent un avoir non saisi, un doublon de facture ou une erreur d’imputation. La même technique s’applique aux comptes fournisseurs.',
    reasoning:
      'Terme de métier à connaître absolument pour travailler en service comptable ou en révision. Le recruteur veut vérifier que le candidat voit le lettrage comme un contrôle de fond du solde, pas une opération esthétique. La distinction utile : le lettrage est une méthode de contrôle et de suivi interne, pas une obligation comptable à proprement parler — mais sans lettrage, le solde d’un compte 411 est invérifiable.',
    commonErrors: [
      'Définir le lettrage comme un contrôle bancaire (confusion avec le rapprochement 512).',
      'Croire que le solde lettré et le solde comptable peuvent diverger.',
      'Oublier les règlements partiels et les écarts (escompte, avoir, centimes) qui empêchent le lettrage simple.',
      'Ignorer l’usage du lettrage côté fournisseurs.',
    ],
    oralShort:
      'Le lettrage, c’est l’appariement, dans un compte client, de chaque facture avec le règlement qui la solde. Ce qui reste non lettré, c’est ce qui reste dû — ou ce qui est inexpliqué. C’est la base du suivi des impayés, des relances et des dépréciations, et à la clôture, un solde non lettré est un solde qu’on ne sait pas justifier. Ça marche pareil côté fournisseurs.',
    oralLong:
      'Par définition, le lettrage est l’opération qui consiste à relier, dans un compte de tiers comme le 411, chaque facture émise avec le ou les règlements reçus qui la couvrent. L’objectif est de transformer un solde brut en solde justifié : une fois les couples facture-règlement rattachés, ce qui subsiste représente soit de vraies créances en attente, soit des anomalies à traiter. La démarche concrète : on rapproche par client, par montant et par date — les ERP modernes font du lettrage assisté automatique — et on traite avant tout les écarts : règlement partiel, escompte pris, avoir en transit, différence de change ou simple écart de centimes. Par exemple, un vieux non-lettré de 8 mois révèle souvent un avoir jamais comptabilisé ou une facture saisie deux fois : le lettrage est un détecteur d’anomalies autant qu’un outil de suivi. En conclusion, le lettrage fiabilise les comptes de tiers — c’est la première chose que fait un comptable avant la relance, et la première chose que regarde un réviseur sur le 411.',
    followUp: 'Un client règle 1 197 sur une facture de 1 200 : tu lettres comment ?',
    grading: [
      'Appariement facture/règlement dans le compte de tiers.',
      'Lecture du solde non lettré (dû + inexpliqué).',
      'Usages cités : relances, dépréciations, fiabilité de clôture.',
      'Gestion des écarts de règlement évoquée.',
    ],
  },
  {
    id: 'qc-005',
    job: 'comptabilite',
    category: 'definitions',
    difficulty: 1,
    skill: 'Plan comptable',
    question: 'Le plan comptable général, tu connais ? Comment il est structuré ?',
    expectedAnswer:
      'Le PCG français est la référence qui structure la liste des comptes : les classes 1 à 5 forment les comptes de bilan — 1 capitaux propres et ressources durables, 2 immobilisations, 3 stocks, 4 tiers, 5 comptes financiers —, la classe 6 regroupe les charges, la classe 7 les produits, la classe 8 les comptes spéciaux. Chaque compte se subdivise : 411 pour les clients, 4117 pour les clients étrangers par exemple. Deux précisions utiles : chaque entreprise construit son propre plan de comptes, cohérent avec le PCG, avec plus ou moins de subdivisions analytiques ; et le Maroc a son propre référentiel, le CGNC, avec des classes de même esprit mais une numérotation et des états de synthèse différents — le PCG s’impose en France, pas ailleurs.',
    reasoning:
      'Vérifie la culture comptaire générale du candidat. Le recruteur veut une réponse fluide sur les classes 1 à 8 sans liste récitée inutile, avec l’idée que le plan de comptes de l’entité est un prolongement interne du PCG. Signal important : ne pas présenter le PCG comme universel — un candidat formé au CGNC doit nommer le CGNC, et inversement. La confusion des deux plans est un défaut rédhibitoire en cabinet international.',
    commonErrors: [
      'Réciter les classes sans savoir dire laquelle appartient au bilan ou au résultat.',
      'Croire que le PCG français s’applique au Maroc (le référentiel marocain est le CGNC).',
      'Confondre plan comptable général et plan de comptes de l’entreprise.',
      'Oublier que la classe 8 française regroupe des comptes spéciaux et non des résultats (nuance avec le CGNC).',
    ],
    oralShort:
      'Le PCG, c’est la référence française de la liste des comptes : classes 1 à 5 pour le bilan — capitaux, immobilisations, stocks, tiers, financier —, classe 6 pour les charges, classe 7 pour les produits, classe 8 pour les comptes spéciaux. Chaque compte se subdivise, et chaque entreprise construit son propre plan de comptes à partir de cette trame. Et attention : au Maroc, c’est le CGNC, même esprit mais référentiel distinct.',
    oralLong:
      'Par définition, le plan comptable général est le référentiel français qui fixe la nomenclature des comptes et les règles d’enregistrement. Son objectif est l’harmonisation : deux comptables de deux entreprises différentes doivent pouvoir se comprendre. Sa structure suit la logique des états financiers : les classes 1 à 5 construisent le bilan — 1 financement durable, 2 actif immobilisé, 3 stocks, 4 tiers, 5 comptes de trésorerie et financiers —, la classe 6 collecte les charges, la classe 7 les produits, et la classe 8 héberge des comptes spéciaux. La démarche en pratique : chaque entreprise décline le PCG en plan de comptes interne, avec des subdivisions adaptées à son activité et à son analyse de coûts. Par exemple, une entreprise industrielle détaillera le 615 en centres d’entretien par atelier. En conclusion, le PCG est une trame commune, prolongée par un plan interne propre à chaque entité — et c’est un référentiel national : au Maroc, c’est le CGNC qui joue ce rôle, avec des classes de même logique mais une numérotation et des états de synthèse différents.',
    followUp: 'C’est quoi la différence entre un compte général et un compte auxiliaire dans ton ERP ?',
    grading: [
      'Classes 1-5 bilan / 6-7 résultat / 8 spéciaux, sans récitation par cœur inutile.',
      'Notion de plan de comptes propre à l’entité.',
      'Dépendance référentielle signalée (PCG France vs CGNC Maroc).',
      'Exemple de subdivision (411, 4117…).',
    ],
  },
  {
    id: 'qc-006',
    job: 'comptabilite',
    category: 'definitions',
    difficulty: 1,
    skill: 'Soldes des comptes tiers',
    question: 'Un client qui a un solde créditeur, un fournisseur débiteur : c’est bizarre, non ? Ça veut dire quoi ?',
    expectedAnswer:
      'Sur un compte client (411), le solde attendu est débiteur : le client nous doit. Un solde créditeur signifie que, au total, le client nous a versé plus qu’il ne devait — typiquement un acompte reçu sur une commande non livrée, un double règlement, un avoir reçu non imputé ou une erreur d’imputation. Sur un compte fournisseur (401), c’est le miroir : le solde attendu est créditeur (on lui doit), un solde débiteur signale une avance versée ou un trop-payé. Ce ne sont pas des soldes « interdits », mais des soldes à analyser : à la clôture, on ne compense pas mécaniquement — on présente les avances reçues au passif et les avances versées à l’actif, selon leur nature réelle.',
    reasoning:
      'Le candidat doit raisonner en termes de sens de compte et pas seulement de convention. Le recruteur teste la capacité à interpréter un solde, compétence de base du contrôle des comptes tiers. La nuance importante : un solde inversé n’est pas forcément une erreur (acompte légitime), mais c’est toujours un point à documenter — et la présentation au bilan sans compensation abusive relève de la règle comptable, pas de la convenance.',
    commonErrors: [
      'Dire qu’un solde créditeur client est « impossible » ou « anormal » par principe.',
      'Compenser automatiquement les soldes inversés au lieu de les analyser.',
      'Confondre acompte (avance légitime) et erreur d’imputation.',
      'Oublier la reclassification au bilan (avances reçues au passif, versées à l’actif).',
    ],
    oralShort:
      'Sur un compte client, le solde normal est débiteur : il nous doit. Créditeur, ça veut dire qu’il a payé plus qu’il ne devait — acompte sur commande, double règlement, avoir non imputé ou erreur. Fournisseur, c’est le miroir : débiteur = avance versée. Un solde inversé n’est pas interdit, mais il s’analyse et se reclasse au bilan selon sa nature — sans compensation automatique.',
    oralLong:
      'Par définition, le sens d’un compte de tiers indique qui doit qui : un compte client est débiteur quand le client nous doit de l’argent, un compte fournisseur est créditeur quand on lui doit. L’objectif de la lecture des soldes inversés est de détecter ce qui sort de la norme. La démarche d’analyse est toujours la même : remonter le détail du compte, identifier l’opération qui a inversé le sens, qualifier la cause. Concrètement, un client créditeur cache souvent un acompte reçu sur une commande pas encore livrée, un double encaissement, un avoir reçu non imputé sur la facture, ou un règlement d’un autre client affecté ici par erreur. Par exemple, sur mon stage fictif, un 411 créditeur de 22 000 s’est révélé être un double règlement à rembourser. En conclusion, un solde inversé n’est ni impossible ni forcément fautif, mais à la clôture il s’analyse et se présente au bilan selon sa vraie nature — avances reçues au passif, avances versées à l’actif — sans compensation injustifiée entre client et fournisseur.',
    followUp: 'Et si le solde créditeur d’un client reste là depuis huit mois, tu fais quoi ?',
    grading: [
      'Sens normal des comptes 411/401 correctement posé.',
      'Causes plausibles citées (acompte, double règlement, avoir, erreur).',
      'Idée d’analyse avant correction, pas de correction automatique.',
      'Présentation au bilan sans compensation mécanique.',
    ],
  },
  {
    id: 'qc-007',
    job: 'comptabilite',
    category: 'procedures',
    difficulty: 2,
    skill: 'Traitement des factures fournisseurs',
    question: 'Une facture d’achat arrive : de sa réception à son imputation, déroule-moi ce que tu fais.',
    expectedAnswer:
      'Étapes : contrôle de forme (numéro, date, mentions légales, SIREN, cohérence du calcul HT/TVA/TTC) ; rapprochement du bon de commande et du bon de réception — la règle des trois documents : commande, réception, facture doivent concorder en fournisseur, nature et montant ; détection de doublon (numéro de facture déjà saisie) ; imputation au bon compte du plan interne, avec analytique le cas échéant ; comptabilisation dans le journal des achats avec échéance et conditions de règlement ; archivage de la pièce. Ce qui relève de la règle de contrôle interne : séparation entre celui qui commande, celui qui réceptionne et celui qui comptabilise. Ce qui relève de la politique interne : workflow de validation et seuils de montant — variables selon l’entreprise.',
    reasoning:
      'Le recruteur veut voir si le candidat a vraiment saisi des factures, et s’il distingue l’essentiel — le contrôle de doublon et le rapprochement trois documents — de l’accessoire. La question piège implicite : payer une facture sans bon de réception, risque classique de fraude interne et de charge à tort. La séparation règle de contrôle / politique d’entreprise doit être nette pour montrer la maturité.',
    commonErrors: [
      'Sauter le rapprochement commande/réception/facture et imputer direct.',
      'Oublier le contrôle de doublon sur le numéro de facture.',
      'Confondre date de facture et date de règlement / échéance.',
      'Présenter le workflow de validation interne comme une obligation légale.',
    ],
    oralShort:
      'D’abord le contrôle de forme : numéro, date, mentions, calcul HT-TVA-TTC. Ensuite le rapprochement des trois documents : commande, bon de réception, facture — tout doit concorder. Je vérifie l’absence de doublon sur le numéro de facture, puis j’impute au bon compte avec l’analytique, je saisis dans le journal des achats avec l’échéance, et j’archive. La règle d’or du contrôle interne : celui qui commande n’est pas celui qui saisit.',
    oralLong:
      'Par définition, le traitement d’une facture fournisseur est un enchaînement de contrôles avant toute imputation : c’est la porte d’entrée des charges de l’entreprise. L’objectif est triple : n’enregistrer que des charges réelles, au bon montant, une seule fois. La démarche suit des étapes précises : contrôle de forme d’abord — numéro, date, mentions légales, taux de TVA appliqué, cohérence HT/TVA/TTC ; rapprochement ensuite avec le bon de commande et le bon de réception, la fameuse règle des trois documents ; contrôle de doublon sur le numéro de facture, source classique de double comptabilisation ; puis imputation au compte du plan interne avec la dimension analytique, saisie dans le journal des achats, échéance et conditions de règlement, archivage. Par exemple, une facture sans bon de réception ne se paie pas : elle part en validation auprès du demandeur — c’est la politique interne qui fixe les seuils et le workflow. En conclusion, une facture bien traitée, c’est une charge justifiée, unique et correctement imputée — et derrière, la règle de contrôle interne impose que celui qui commande, celui qui réceptionne et celui qui comptabilise soient des personnes différentes.',
    followUp: 'Le montant de la facture ne correspond pas au bon de commande : tu fais quoi ?',
    grading: [
      'Contrôles séquentiels cohérents (forme, rapprochement, doublon, imputation).',
      'Règle des trois documents nommée.',
      'Échéance et archivage non oubliés.',
      'Distinction règle de contrôle interne / politique de validation interne.',
    ],
  },
  {
    id: 'qc-008',
    job: 'comptabilite',
    category: 'organisation',
    difficulty: 2,
    skill: 'Organisation des journaux divisionnaires',
    question: 'Pourquoi on sépare journal d’achats, journal de ventes, journal de banque et journal des OD ? Ça change quoi ?',
    expectedAnswer:
      'La séparation en journaux divisionnaires répond à des besoins pratiques et de contrôle : chaque journal regroupe un flux homogène alimenté par une source unique — factures fournisseurs, factures clients, relevés bancaires — souvent traité par une équipe distincte ; cela facilite les contrôles ciblés (anti-doublon sur les achats, cut-off sur les ventes), le lettrage, la déclaration de TVA par nature de taxe, et la répartition de la charge de travail en équipe. Les OD concentrent les écritures qui ne viennent d’aucun flux externe : paie, régularisations, provisions — elles sont contrôlées différemment car saisies manuellement. C’est une organisation, pas une obligation de forme : une petite structure peut tenir un journal unique, avec des contrôles compensatoires.',
    reasoning:
      'Question d’organisation pour vérifier la compréhension de la mécanique d’un service comptable. Le point attendu : les journaux reflètent les flux et les équipes, et les OD, saisies à la main, concentrent le risque d’erreur et de manipulation — d’où un contrôle renforcé. Le candidat doit éviter d’en faire une règle universelle : la séparation s’adapte à la taille de l’entreprise.',
    commonErrors: [
      'Justifier la séparation uniquement par le volume, sans parler de contrôle.',
      'Ignorer que les OD, saisies manuellement, sont le journal le plus sensible.',
      'Présenter le découpage en journaux comme une exigence légale.',
      'Oublier le lien avec la déclaration de TVA et le lettrage.',
    ],
    oralShort:
      'Chaque journal regroupe un flux homogène, avec sa source et souvent son équipe : factures fournisseurs, factures clients, relevés bancaires. Ça facilite les contrôles ciblés — anti-doublon achats, cut-off ventes —, le lettrage et la TVA. Les OD, c’est différent : écritures manuelles, paie et régularisations, donc le journal le plus contrôlé. Et c’est un choix d’organisation : une TPE peut n’avoir qu’un journal.',
    oralLong:
      'Par définition, les journaux divisionnaires découpent la saisie par nature de flux, pour des raisons d’organisation et de contrôle. L’objectif est de rendre chaque flux vérifiable indépendamment. La logique : le journal des achats est alimenté par les factures fournisseurs, celui des ventes par la facturation, le journal de banque par les relevés — chaque source est homogène, souvent portée par une équipe différente, et se prête à des contrôles dédiés : détection de doublons sur les achats, contrôle du cut-off sur les ventes, rapprochement sur la banque. Les opérations diverses jouent un rôle à part : elles regroupent tout ce qui ne vient pas d’un document externe — paie, provisions, régularisations de fin d’exercice — et comme elles sont saisies manuellement, elles concentrent le risque d’erreur et de manipulation, donc un contrôle renforcé. Par exemple, sur mon stage fictif, la revue hebdomadaire portait d’abord sur les OD du mois. En conclusion, la séparation des journaux reflète la séparation des flux et des responsabilités — c’est un choix d’organisation adapté à la taille de la structure, pas une règle comptable figée.',
    followUp: 'Quel journal contrôlerais-tu en premier en arrivant dans une nouvelle équipe, et pourquoi ?',
    grading: [
      'Flux homogènes / sources / équipes : logique de séparation comprise.',
      'Rôle et sensibilité spécifiques des OD (saisie manuelle).',
      'Lien avec contrôles ciblés et TVA.',
      'Caractère organisationnel, non normatif, signalé.',
    ],
  },
  {
    id: 'qc-009',
    job: 'comptabilite',
    category: 'pieges',
    difficulty: 2,
    skill: 'Exigibilité de la TVA',
    question: 'La TVA sur une prestation de services, elle devient exigible quand ? Et sur une vente de biens ?',
    expectedAnswer:
      'Pour les ventes de biens, le fait générateur est la livraison : la TVA est exigible à la livraison ou à la facturation, même si le client n’a pas payé. Pour les prestations de services, la TVA est exigible sur les encaissements : à chaque paiement reçu, au prorata s’il est partiel — sauf si l’entreprise a opté pour le régime des débits, qui replace l’exigibilité à la facturation sous conditions. En comptabilité, cette TVA « sur encaissement » se suit via un compte de régularisation (type 4458) ou un tableau de suivi du logiciel, pour ne déclarer que la TVA des encaissements réalisés. Nuance de référentiel : au Maroc, la TVA est aussi sur l’encaissement par défaut avec une option pour les débits — mais taux et modalités locales. C’est une règle fiscale, pas une convention interne.',
    reasoning:
      'Piège classique : les candidats généralisent l’exigibilité à la facturation. Le recruteur teste la connaissance fine de la règle française et ses conséquences pratiques sur la déclaration et sur la trésorerie. Le cas de l’encaissement partiel est le vrai test de profondeur, ainsi que l’existence de l’option pour les débits. La mention du CGNC marocain distingue les bons profils internationaux.',
    commonErrors: [
      'Dire que la TVA est toujours exigible à la facturation.',
      'Oublier la règle au prorata des encaissements partiels.',
      'Ignorer l’option pour les débits et ses conditions.',
      'Appliquer les règles françaises à un contexte marocain sans vérifier le référentiel.',
    ],
    oralShort:
      'Sur les biens, la TVA est exigible à la livraison, même impayée. Sur les services, elle n’est exigible qu’au fur et à mesure des encaissements — au prorata s’ils sont partiels — sauf option pour les débits. D’où le suivi comptable de la TVA sur encaissements via le 4458 ou le logiciel, pour ne déclarer que ce qui est réellement encaissé.',
    oralLong:
      'Par définition, l’exigibilité de la TVA désigne le moment où la taxe doit être reversée à l’État, indépendamment de la comptabilisation de la facture. L’objectif de la règle est d’aligner le versement de la taxe sur l’encaissement du prix, pour éviter de faire porter la TVA au prestataire avant d’avoir été payé. La démarche de distinction est la suivante : pour les livraisons de biens, le fait générateur est la livraison — la TVA est due sur la déclaration du mois de la facture, payé ou non ; pour les prestations de services, la TVA suit les encaissements, au prorata pour les paiements partiels, sauf option pour les débits qui la replace à la facturation. Concrètement, une prestation facturée 12 000 euros TTC en mars mais encaissée pour moitié en mars : la moitié de la TVA part sur la déclaration de mars, le reste le mois de l’encaissement final. Par exemple, sur mon stage fictif, le tableau de suivi des encaissements par facture était la pièce maîtresse de la déclaration. En conclusion : biens à la livraison, services aux encaissements, option débits possible — et au Maroc, même philosophie mais règles et taux locaux, donc toujours vérifier le référentiel du pays.',
    followUp: 'Ton client règle un acompte de 30 % sur une prestation de service : quelle TVA tu déclares ce mois-ci ?',
    grading: [
      'Biens = livraison, services = encaissement, distinction nette.',
      'Règle du prorata sur encaissements partiels.',
      'Option pour les débits mentionnée.',
      'Conséquence pratique : suivi TVA sur encaissements (4458 ou tableau).',
    ],
  },
  {
    id: 'qc-010',
    job: 'comptabilite',
    category: 'procedures',
    difficulty: 2,
    skill: 'Lettrage et traitement des non-lettrés',
    question: 'Concrètement, comment tu lettres un compte client ? Et si une facture ne se lettre pas, tu fais quoi ?',
    expectedAnswer:
      'Méthode : tri du compte par client auxiliaire et par date, rapprochement des règlements aux factures en montant et en cohérence de date — lettrage assisté par l’ERP sur les montants exacts —, traitement préalable des écarts : escompte pris, avoir attendu, différence de change, arrondis, avant de letter manuellement avec justification. Pour une facture non lettée, la démarche dépend de la cause : aucun règlement reçu → c’est un impayé, on alimente le suivi des relances ; un règlement reçu mais pour un montant différent → chercher l’avoir, l’escompte ou l’erreur d’imputation ; un règlement reçu sur un autre compte client → réimputation. Avant clôture, les vieux non-lettrés sont analysés un par un : ils cachent souvent un avoir non saisi ou un doublon de facture.',
    reasoning:
      'Le recruteur veut la mécanique concrète, pas la définition du lettrage. Le vrai sujet est la gestion des exceptions : c’est là que se joue la qualité du comptable. L’automatisation par l’ERP règle les montants exacts ; la valeur ajoutée humaine porte sur les écarts et les vieux non-lettrés, zone favorite des anomalies en révision. Le réflexe « analyser avant de forcer le lettrage » est un marqueur de rigueur.',
    commonErrors: [
      'Forcer le lettrage avec un écart de centimes sans justification.',
      'Laisser traîner les non-lettrés sans analyse jusqu’à la clôture.',
      'Confondre impayé (pas de règlement) et écart de règlement (règlement différent).',
      'Oublier de réimputer les règlements reçus sur le mauvais compte client.',
    ],
    oralShort:
      'Je trie le compte par client et par date, et je rapproche chaque règlement d’une facture — le lettrage assisté de l’ERP traite les montants exacts. Avant tout, je traite les écarts : escompte, avoir attendu, centimes. Si une facture ne se lettre pas : pas de règlement reçu, c’est un impayé qui part en relance ; règlement différent, je cherche l’avoir ou l’erreur d’imputation. Et avant clôture, les vieux non-lettrés sont analysés un par un.',
    oralLong:
      'Par définition, letter un compte client, c’est apparier chaque facture avec son règlement pour isoler le solde restant dû. L’objectif est de savoir, à tout moment, qui doit quoi et pourquoi. La démarche concrète : je travaille client par client, auxiliaire par auxiliaire ; le lettrage assisté de l’ERP propose les appariements sur montants exacts ; tout ce qui ne matche pas, je l’analyse avant de toucher au lettrage — escompte pris par le client, avoir en cours, écart de change, simple différence de centimes. Par exemple, un règlement inférieur de 3 % à la facture évoque un escompte à comptabiliser, pas un lettrage forcé. Pour une facture qui ne se lettre pas, deux familles : soit aucun règlement n’est arrivé — c’est un impayé, il rejoint le tableau de relance ; soit un règlement est là mais différent — et je recherche l’avoir non saisi, la remise commerciale ou l’imputation sur un autre client. En conclusion, le lettrage automatique traite le standard, mais la valeur du comptable se joue sur les exceptions — et les vieux non-lettrés, c’est le premier endroit où un réviseur cherche les anomalies.',
    followUp: 'Comment tu distingues un vrai impayé d’une facture que le client conteste ?',
    grading: [
      'Mécanique : tri, appariement, lettrage assisté, écarts traités avant lettrage.',
      'Arbre de décision clair sur les non-lettrés (impayé vs écart vs mauvais compte).',
      'Réflexe d’analyse des vieux non-lettrés avant clôture.',
      'Aucun lettrage forcé sans justification.',
    ],
  },
  {
    id: 'qc-011',
    job: 'comptabilite',
    category: 'definitions',
    difficulty: 2,
    skill: 'Rapprochement bancaire',
    question: 'Le rapprochement bancaire, c’est quoi et à quoi ça sert ?',
    expectedAnswer:
      'C’est la comparaison méthodique du compte 512 tenu par la comptabilité avec le relevé envoyé par la banque, compte par compte bancaire. Les écarts trouvés sont de deux natures : des opérations enregistrées d’un seul côté — chèques émis non débités, remises en banque non créditées, prélèvements et frais bancaires à comptabiliser — et, plus rares, des erreurs à corriger. Il sert à fiabiliser le solde de trésorerie à la clôture, à détecter les oublis de saisie et les anomalies, voire la fraude. Aboutissement : un état de rapprochement qui part du solde du relevé et aboutit au solde comptable rapproché, ces deux soldes étant égaux une fois les écarts expliqués. Périodicité : au minimum aux arrêtés comptables ; en pratique souvent mensuelle — c’est une politique interne.',
    reasoning:
      'Question-jauge du métier : tout comptable a fait des rapprochements. Le recruteur écoute la structure de la réponse : deux sources, deux types d’écarts, un document final dont les deux soldes convergent. La confusion fréquente est de croire que le rapprochement modifie le solde de la banque — non, il explique et corrige la comptabilité. Le lien avec la détection de fraude valorise la réponse.',
    commonErrors: [
      'Croire que le rapprochement change le solde bancaire côté banque.',
      'Oublier la catégorie des opérations à comptabiliser (frais, prélèvements, agios).',
      'Ne pas savoir aboutir à l’égalité des deux soldes rapprochés.',
      'Présenter la périodicité mensuelle comme une obligation alors que c’est une pratique interne.',
    ],
    oralShort:
      'C’est la comparaison du compte 512 de la comptabilité avec le relevé de la banque, pour expliquer chaque écart : chèques émis non débités, remises non créditées, frais ou prélèvements à saisir, erreurs éventuelles. On aboutit à un état de rapprochement où le solde du relevé et le solde comptable rapproché coïncident. Ça fiabilise la trésorerie de clôture et ça détecte les oublis de saisie — voire la fraude.',
    oralLong:
      'Par définition, le rapprochement bancaire met en regard deux descriptions du même compte : celle de la comptabilité, dans le 512, et celle de la banque, dans le relevé. L’objectif est d’expliquer tout écart et d’aboutir à un solde unique et fiable. La démarche : je pointe ligne à ligne les opérations communes des deux côtés ; ce qui reste se classe en deux familles — opérations comptabilisées mais pas encore visibles en banque, comme un chèque émis non débité ou une remise de chèques non créditée, et opérations visibles en banque mais pas encore comptabilisées, comme des frais, des agios ou un prélèvement — celles-là donnent lieu à écriture. Le document final part du solde du relevé, intègre ces éléments, et doit aboutir au solde comptable rapproché : les deux soldes coïncident, sinon le rapprochement n’est pas terminé. Par exemple, sur mon stage fictif, c’est un vieux chèque jamais présenté, à annuler, qui fermait le dossier. En conclusion : le rapprochement ne corrige pas la banque, il corrige et justifie la comptabilité — pratique mensuelle en général, systématique à chaque arrêté.',
    followUp: 'Un chèque émis il y a dix mois n’a jamais été débité : quel traitement ?',
    grading: [
      'Deux sources comparées, objectif clair.',
      'Les deux familles d’écarts bien distinguées (transit vs à comptabiliser).',
      'Aboutissement : égalité des soldes rapprochés.',
      'Rôle de détection (oublis, anomalies, fraude).',
    ],
  },
  {
    id: 'qc-012',
    job: 'comptabilite',
    category: 'procedures',
    difficulty: 2,
    skill: 'Clôture mensuelle',
    question: 'Déroule-moi ta clôture mensuelle de A à Z.',
    expectedAnswer:
      'Séquencement type : verrouiller la saisie de la période (cut-off : dernières factures, dernier relevé bancaire) ; saisir les pièces en instance ; traiter les comptes tiers — lettrage, analyse des non-lettrés et des comptes d’attente ; établir les rapprochements bancaires ; passer les écritures de régularisation nécessaires (FNP du mois, factures à établir, intérêts courus selon politique) ; contrôler la balance — équilibre, comptes anormaux, suspens ; établir les déclarations du mois (TVA notamment) ; produire le reporting interne ; verrouiller définitivement la période dans l’ERP. Ce qui est une obligation : la déclaration de TVA, l’exactitude des comptes. Ce qui relève de la politique interne : le calendrier de clôture — J+5, J+10 —, la profondeur des analyses, le format du reporting. Le séquencement s’adapte à la taille de l’équipe.',
    reasoning:
      'Le recruteur veut un process structuré et réaliste, signe d’une vraie expérience mensuelle. Les marqueurs de crédibilité : le cut-off d’abord, le lettrage avant les relances, la balance contrôlée avant le reporting, le verrouillage de période. La distinction obligations vs politique interne de clôture est le point de maturité attendu — beaucoup de candidats récitent un process comme s’il était universel.',
    commonErrors: [
      'Commencer par le reporting sans contrôler la balance et les tiers.',
      'Oublier le cut-off et laisser des factures du mois passer au suivant.',
      'Présenter le calendrier J+x comme une règle comptable universelle.',
      'Ne pas verrouiller la période dans l’ERP et laisser la saisie remonter le passé.',
    ],
    oralShort:
      'Je verrouille d’abord le cut-off : dernières factures, dernier relevé. Je saisis les pièces en instance, je lettre et j’analyse les comptes tiers, je fais les rapprochements bancaires, je passe les régularisations du mois. Ensuite je contrôle la balance — équilibre, comptes d’attente, suspens —, j’établis la déclaration de TVA, je produis le reporting, et je verrouille la période. La TVA et l’exactitude sont des obligations ; le calendrier J+5 ou J+10, c’est la politique interne.',
    oralLong:
      'Par définition, la clôture mensuelle est l’enchaînement de travaux qui fige des comptes fiables pour la période. L’objectif est double : des comptes justes et un rythme soutenable pour l’équipe. Ma démarche suit un ordre précis. Un : le cut-off — je définis la dernière pièce admise, dernier relevé bancaire, dernières factures, et je bloque la remontée des périodes antérieures dans l’ERP. Deux : je solde la saisie en instance. Trois : les comptes tiers — lettrage systématique, analyse des non-lettrés, arbitrage des comptes d’attente. Quatre : les rapprochements bancaires. Cinq : les écritures de régularisation du mois — FNP, factures à établir, intérêts courus — selon la politique retenue. Six : le contrôle de la balance, équilibre et revue des soldes anormaux. Sept : les obligations déclaratives, TVA en tête. Huit : le reporting interne, puis le verrouillage définitif de la période. Par exemple, sur mon stage fictif, la clôture était en J+5 avec une revue de balance partagée en équipe le J+3. En conclusion : l’ossature est universelle — cut-off, tiers, banque, régularisations, balance, déclarations — mais le calendrier et la profondeur sont une politique interne adaptée à la taille de l’entreprise.',
    followUp: 'Si la direction te demande de passer de J+8 à J+4, tu changes quoi en premier ?',
    grading: [
      'Séquencement logique : cut-off → saisie → tiers → banque → régularisations → balance → TVA → reporting → verrouillage.',
      'Lettrage et rapprochement positionnés avant le reporting.',
      'Verrouillage de période dans l’ERP mentionné.',
      'Distinction obligations / politique interne de clôture.',
    ],
  },
  {
    id: 'qc-013',
    job: 'comptabilite',
    category: 'pieges',
    difficulty: 2,
    skill: 'Comptes d’attente et transitoires',
    question: 'Les comptes d’attente, le 47 : tu en fais quoi ? C’est grave d’en avoir plein ?',
    expectedAnswer:
      'Le compte 47 regroupe les comptes d’attente et de transit : on y parque temporairement une opération dont l’imputation définitive n’est pas encore déterminable — virement entre deux comptes de l’entreprise, prélèvement bancaire à identifier, régularisation en attente de pièce. Utilité réelle de soupape technique. Le danger vient de l’usage prolongé : un 47 qui grossit devient un fourre-tout qui masque des anomalies — écritures non justifiées, doublons, imputations erronées, voire manipulations. Bonnes pratiques : un solde idéalement nul hors périodes de pointe, une revue systématique à chaque clôture avec justification documentée de chaque ligne, une purge avant l’arrêté annuel. Pour un réviseur, un solde 47 élevé en fin d’exercice est un signal d’alarme immédiat.',
    reasoning:
      'Question typique de responsable comptable qui veut mesurer la rigueur du candidat. Le 47 n’est pas interdit — c’est son vieillissement qui l’est devenu en pratique. Le recruteur attend la nuance : outil de transit légitime vs indicateur de comptabilité mal tenue. La mention du regard du réviseur montre l’expérience de l’autre côté du bureau.',
    commonErrors: [
      'Diaboliser le 47 : « il ne faut jamais l’utiliser ».',
      'Au contraire, le présenter comme un compte normal de fonctionnement permanent.',
      'Oublier la revue systématique en clôture et la purge annuelle.',
      'Ignorer le transit inter-comptes, usage légitime le plus fréquent.',
    ],
    oralShort:
      'Le 47, c’est la soupape : j’y mets en transit ce que je ne sais pas encore imputer — virement entre comptes, prélèvement à identifier. Légitime ponctuellement, dangereux durablement : un 47 qui grossit devient un fourre-tout qui masque anomalies et doublons. Chez nous : solde idéalement nul, revue à chaque clôture, justification ligne à ligne, purge avant l’arrêté. Et pour un réviseur, un gros 47 en fin d’exercice, c’est un signal d’alarme.',
    oralLong:
      'Par définition, le compte 47 est le compte d’attente et de transit : il reçoit temporairement les opérations dont l’imputation définitive n’est pas encore connue. L’objectif est technique : ne pas bloquer la saisie d’un flux — virement entre deux comptes de l’entreprise dont l’un des côtés n’est pas encore justifié, prélèvement bancaire dont l’auteur reste à identifier. La démarche saine est encadrée : chaque ligne du 47 a une justification, une date de naissance et un plan de sortie ; la revue en est systématique à chaque clôture, et la purge est totale avant l’arrêté annuel. Par exemple, sur mon stage fictif, le 471 « transit inter-comptes » se soldait chaque fin de semaine, et le 472 était arbitré en réunion hebdo avec les pièces manquantes listées. Le danger est là : un compte d’attente qui vieillit devient un fourre-tout — écritures non justifiées, doublons, imputations erronées, voire manipulation discrète. En conclusion : le 47 est un outil de transit légitime mais strictement temporaire — solde nul en régime normal, et pour un réviseur, un solde élevé en fin d’exercice est un signal d’alarme qui oriente les tests.',
    followUp: 'Quelle catégorie d’opérations atterrit le plus souvent dans ton 47, et comment tu l’évites ?',
    grading: [
      'Définition et usages légitimes du 47 (transit, identification).',
      'Risque de fourre-tout explicité (anomalies, doublons, manipulation).',
      'Pratiques d’encadrement : justification, revue de clôture, purge annuelle.',
      'Regard du réviseur / signal d’alarme évoqué.',
    ],
  },
  {
    id: 'qc-014',
    job: 'comptabilite',
    category: 'definitions',
    difficulty: 2,
    skill: 'Charges constatées d’avance',
    question: 'Charges constatées d’avance : c’est quoi ? Donne-moi un exemple chiffré.',
    expectedAnswer:
      'Une CCA est une charge comptabilisée au cours de l’exercice mais qui se rattache à l’exercice suivant — application du principe de rattachement des charges à la période concernée. Exemple fictif : une prime d’assurance annuelle de 12 000 € payée le 1er octobre pour douze mois : l’exercice qui s’arrête au 31/12 n’en consomme que trois mois, soit 3 000 €. Au 31/12, on passe l’écriture : débit du compte 486 pour 9 000, crédit du compte de charges pour 9 000 — le solde de charges ne conserve que les 3 000 consommés. Le 486 figure à l’actif circulant. À l’ouverture de l’exercice suivant, extourne : la charge réapparaît pour sa part consommée sur le nouvel exercice. Même logique de comptes de régularisation au CGNC marocain.',
    reasoning:
      'Question de base du cut-off comptable. Le recruteur vérifie le réflexe d’indépendance des exercices et le sens de l’écriture — débit 486, crédit charge — souvent inversé par les candidats. L’exemple chiffré doit être juste : 3 000 consommés, 9 000 en CCA, total 12 000. La mention de l’extourne et du CGNC complète le tableau référentiel.',
    commonErrors: [
      'Inverser le sens de l’écriture (créditer le 486).',
      'Comptabiliser la CCA en produit au lieu de réduire la charge.',
      'Oublier l’extourne à l’ouverture de l’exercice suivant.',
      'Confondre CCA et FNP — l’une est déjà payée/enregistrée, l’autre pas du tout comptabilisée.',
    ],
    oralShort:
      'Une charge constatée d’avance, c’est une charge déjà comptabilisée mais qui appartient à l’exercice suivant. Exemple : assurance annuelle de 12 000 payée le 1er octobre — trois mois seulement dans l’exercice. Au 31/12, je débite le 486 et je crédite la charge pour 9 000, et la charge nette conserve les 3 000 consommés. Extourne à l’ouverture suivante. C’est le principe d’indépendance des exercices.',
    oralLong:
      'Par définition, une charge constatée d’avance est une charge enregistrée dans l’exercice en cours alors qu’elle profite à l’exercice suivant — elle est d’avance. L’objectif est le rattachement des charges à la bonne période : le principe d’indépendance des exercices impose que chaque exercice supporte ses propres charges, ni plus ni moins. La démarche au 31/12 : pour chaque contrat payé d’avance, je détermine la part consommée et la part à reporter. Concrètement, une assurance annuelle de 12 000 euros payée le 1er octobre : trois mois consommés jusqu’au 31/12, donc 3 000 restent en charge ; les 9 000 restants basculent par l’écriture débit 486, crédit compte de charges — le 486 venant à l’actif circulant du bilan. À l’ouverture de l’exercice suivant, l’extourne réintègre la charge pour qu’elle se consomme au fil des mois. Par exemple, loyers payés d’avance, abonnements logiciels, primes d’assurance : les trois sources les plus fréquentes de CCA. En conclusion, la CCA corrige le calendrier sans toucher à la réalité du paiement — et le CGNC marocain suit exactement la même logique de comptes de régularisation.',
    followUp: 'Et si je te dis : la même assurance, mais payée d’avance sur un exercice qui s’arrête le 30 juin ?',
    grading: [
      'Définition exacte et principe d’indépendance des exercices.',
      'Exemple chiffré juste (3 000 consommés / 9 000 en CCA).',
      'Sens de l’écriture : débit 486, crédit charges.',
      'Extourne et présentation à l’actif circulant mentionnées.',
    ],
  },
  {
    id: 'qc-015',
    job: 'comptabilite',
    category: 'definitions',
    difficulty: 2,
    skill: 'Factures non parvenues',
    question: 'Factures non parvenues : c’est quoi et comment tu les traites ?',
    expectedAnswer:
      'Une FNP correspond à des biens reçus ou des services rendus avant la clôture, dont la facture n’est pas encore parvenue ni comptabilisée. Le principe de séparation des exercices impose d’enregistrer la charge de l’exercice qui la consomme : au 31/12, on passe débit du compte de charges pour le montant estimé — avec la TVA déductible sur factures non parvenues si l’entreprise l’applique — et crédit du compte 408 « Fournisseurs, factures non parvenues ». Sources de recensement : bons de réception non facturés, contrats en cours, échéanciers, appels de fonds de travaux. Selon la méthode de l’entreprise, extourne à l’ouverture ou maintien en l’état jusqu’à réception de la facture — cohérence à tenir. Oublier les FNP sous-évalue les charges et déséquilibre le cut-off avec les stocks.',
    reasoning:
      'Deuxième pilier du cut-off avec la CCA. Le recruteur veut le réflexe : ce qui est reçu avant la clôture doit peser sur l’exercice, facture ou pas. Le compte 408 au passif et la TVA sur FNP sont les marqueurs techniques. La question de l’extourne est un distinguo de pratique d’entreprise — les deux méthodes existent, l’important est la cohérence.',
    commonErrors: [
      'Attendre la facture de janvier pour comptabiliser la charge de décembre.',
      'Inverser le sens : créditer la charge et débiter le 408.',
      'Oublier la TVA déductible sur factures non parvenues là où la méthode l’applique.',
      'Ignorer les sources de recensement (réceptions, contrats) et évaluer « au doigt mouillé » sans documentation.',
    ],
    oralShort:
      'Une facture non parvenue, c’est un bien ou un service reçu avant la clôture, dont la facture n’est pas arrivée. La charge appartient pourtant à l’exercice : au 31/12, je débite la charge et je crédite le 408, avec la TVA déductible sur FNP si la méthode l’applique. Je recense les FNP par les bons de réception non facturés et les contrats en cours. Ensuite, extourne ou maintien selon la méthode de l’entreprise — mais cohérence.',
    oralLong:
      'Par définition, une facture non parvenue est une charge dont le fait générateur — la livraison ou la prestation — est intervenu avant la clôture, mais dont la facture n’a pas encore été reçue. L’objectif est la séparation des exercices : l’exercice doit porter toutes les charges qu’il a consommées, même non facturées. La démarche : je recense les sources — bons de réception de décembre sans facture, contrats de prestation en cours, situation de travaux — j’évalue le montant de façon documentée, et au 31/12 je passe l’écriture : débit du compte de charges, TVA déductible sur factures non parvenues le cas échéant, crédit du 408, au passif circulant. Par exemple, un trimestre de nettoyage facturé en janvier pour des prestations de novembre-décembre : les deux tiers partent en FNP au 31/12. Deux pratiques coexistent ensuite : l’extourne au 1er janvier puis comptabilisation normale de la facture, ou le décalage direct à réception — l’entreprise choisit et reste cohérente. En conclusion, les FNP ferment le trou du cut-off : sans elles, les charges de l’exercice sont sous-évaluées et le lien avec les stocks se fausse.',
    followUp: 'Et si, en février, la facture arrive avec un montant très différent de ton estimation ?',
    grading: [
      'Définition centrée sur le fait générateur antérieur à la clôture.',
      'Écriture correcte : charge au débit, 408 au crédit, TVA évoquée.',
      'Sources de recensement citées (réceptions, contrats).',
      'Conscience de l’enjeu de cut-off et de la cohérence de méthode.',
    ],
  },
  {
    id: 'qc-016',
    job: 'comptabilite',
    category: 'definitions',
    difficulty: 2,
    skill: 'Produits constatés d’avance',
    question: 'Produits constatés d’avance : c’est quoi ? Encore un exemple chiffré, s’il te plaît.',
    expectedAnswer:
      'Un PCA est un produit déjà enregistré — et souvent déjà encaissé — mais qui se rattache à l’exercice suivant. Miroir exact de la CCA côté produits. Exemple fictif : un abonnement annuel de 24 000 € facturé et encaissé le 1er novembre : l’exercice qui finit au 31/12 n’en consomme que deux mois, soit 4 000 €. Écriture au 31/12 : débit du compte de produits pour 20 000, crédit du 487 pour 20 000 ; le 487 reste au passif circulant jusqu’à l’ouverture suivante, où l’extourne réintègre le produit au fil de la consommation. Cas typiques : loyers d’avance, abonnements, contrats de maintenance facturés d’avance, cotisations encaissées pour l’exercice suivant.',
    reasoning:
      'Complète le triptyque CCA/PCA pour vérifier que le candidat tient les deux miroirs sans les confondre. Le sens de l’écriture est le grand discriminateur : débiter un produit surprend toujours les débutants. L’exemple chiffré (2 mois consommés, 10 mois en PCA) doit être juste. La question de présentation au passif circulant et l’extourne ferment la réponse attendue.',
    commonErrors: [
      'Créditer le 487 au lieu de le débiter… et surtout inverser toute l’écriture.',
      'Confondre PCA et produit à recevoir : l’un est encaissé d’avance, l’autre est un droit non encore comptabilisé.',
      'Oublier l’extourne à l’ouverture.',
      'Laisser le produit en totalité sur l’exercice de l’encaissement.',
    ],
    oralShort:
      'Un produit constaté d’avance, c’est un produit enregistré — souvent encaissé — mais qui appartient à l’exercice suivant. Exemple : abonnement annuel de 24 000 encaissé le 1er novembre : deux mois dans l’exercice, 4 000. Au 31/12, je débite le produit de 20 000 et je crédite le 487, au passif circulant. Extourne à l’ouverture suivante. C’est le miroir exact des charges constatées d’avance.',
    oralLong:
      'Par définition, un produit constaté d’avance est un produit déjà comptabilisé, généralement encaissé, dont la réalisation s’étale sur l’exercice suivant. L’objectif est toujours le rattachement à la bonne période : l’exercice ne retiendra que la part qu’il a effectivement acquise. La démarche au 31/12 est le miroir de la CCA : pour chaque encaissement d’avance, je détermine la part acquise et la part d’avance. Concrètement, un abonnement annuel de 24 000 euros facturé et encaissé le 1er novembre : l’exercice n’en consomme que novembre et décembre, soit 4 000 ; les 20 000 restants quittent les produits par l’écriture débit compte de produits, crédit 487 — et oui, on débite un produit, c’est le point qui surprend tout le monde. Le 487 siège au passif circulant : en substance, une dette envers le client. À l’ouverture suivante, l’extourne remet le produit en place pour consommation progressive. Par exemple, les loyers d’avance d’un bailleur ou les contrats de maintenance facturés le 1er janvier sont les PCA les plus courants. En conclusion : encaissé n’est pas acquis — le PCA sépare le calendrier de l’encaissement du calendrier du produit.',
    followUp: 'Pourquoi dit-on que le 487 représente, en creux, une dette envers le client ?',
    grading: [
      'Définition miroir de la CCA, centrée sur l’acquisition du produit.',
      'Exemple chiffré juste (4 000 acquis / 20 000 en PCA).',
      'Sens de l’écriture assumé : débit du produit, crédit 487.',
      'Passif circulant et extourne mentionnés.',
    ],
  },
  {
    id: 'qc-017',
    job: 'comptabilite',
    category: 'procedures',
    difficulty: 2,
    skill: 'Traitement des avoirs fournisseurs',
    question: 'Ton fournisseur t’envoie un avoir deux mois après la facture : tu fais quoi ?',
    expectedAnswer:
      'D’abord contrôler avant de saisir : motif de l’avoir — retour de marchandises, erreur de facturation, rabais ou geste commercial —, rattachement à la facture d’origine (numéro, date, montants), cohérence du calcul et du taux de TVA, et réalité du retour physique le cas échéant (bon de retour). Ensuite comptabiliser : l’avoir fournisseurs inverse la facture — débit du 401 pour le TTC, crédit du compte de charges pour le HT et de la TVA déductible. La TVA s’ajuste sur la déclaration du mois de réception de l’avoir. Enfin suivre : un avoir attendu non reçu se suit dans un compte d’avoirs à recevoir ; un avoir à imputer se lettrera contre la facture d’origine ou viendra réduire un règlement futur. Double distinction : le traitement comptable est une règle ; le suivi des avoirs attendus est une politique interne de relance.',
    reasoning:
      'Le recruteur veut le réflexe de contrôle — un avoir justifié comme une facture — et l’écriture inversée correcte. Les vrais pièges en entreprise : les avoirs non contrôlés qui baissent les charges à tort, les avoirs attendus jamais réclamés, et l’impact TVA du mois. La mention du lettrage avoir/facture d’origine montre la pratique du terrain.',
    commonErrors: [
      'Saisir l’avoir sans vérifier le motif ni le rattachement à la facture d’origine.',
      'Comptabiliser l’avoir en produit (7xx) au lieu de réduire la charge (6xx).',
      'Oublier l’impact TVA sur la déclaration du mois de réception.',
      'Ignorer le suivi des avoirs attendus et ne jamais les réclamer.',
    ],
    oralShort:
      'Avant de saisir, je contrôle : motif, rattachement à la facture d’origine, calcul et TVA, bon de retour s’il y a eu retour physique. Ensuite l’écriture inverse la facture : débit 401 pour le TTC, crédit de la charge et de la TVA déductible. La TVA s’ajuste sur la déclaration du mois. Et je suis les avoirs attendus non reçus — c’est de l’argent qui dort.',
    oralLong:
      'Par définition, un avoir fournisseur est une facture négative : il vient réduire une dette déjà comptabilisée. L’objectif du traitement est double — corriger la charge au bon montant et sécuriser la créance de restitution ou d’imputation. Ma démarche suit trois temps. Le contrôle d’abord : quel est le motif — retour, erreur, geste commercial —, l’avoir se réfère-t-il à la bonne facture, les montants et le taux de TVA sont-ils cohérents, et le retour physique est-il appuyé par un bon de retour. La comptabilisation ensuite : elle inverse strictement la facture — débit du 401 pour le TTC, crédit du compte de charges pour le HT et de la TVA déductible — avec un impact sur la déclaration de TVA du mois de réception. Le suivi enfin : l’avoir se lettrera contre la facture d’origine, viendra réduire le prochain règlement, ou donnera lieu à remboursement ; et côté politique interne, les avoirs attendus et non reçus se relancent comme des créances. Par exemple, un retour de marchandises non conforme en octobre, avoir reçu en décembre : la charge de l’exercice doit bien être réduite. En conclusion : un avoir se contrôle comme une facture, s’enregistre comme son inverse — et sa trace se retrouve dans le lettrage et la TVA.',
    followUp: 'L’avour, pardon, l’avoir porte sur une facture de l’exercice précédent déjà soldée : ça change quoi ?',
    grading: [
      'Contrôles préalables : motif, rattachement, calcul, bon de retour.',
      'Écriture exacte : débit 401 TTC / crédit charge HT + TVA.',
      'Impact TVA du mois de réception mentionné.',
      'Lettrage avec la facture d’origine et suivi des avoirs attendus.',
    ],
  },
  {
    id: 'qc-018',
    job: 'comptabilite',
    category: 'calculs',
    difficulty: 3,
    skill: 'Amortissement linéaire et dégressif',
    question: 'Machine acquise 24 000 € HT, durée d’utilisation 5 ans. Amortissement linéaire, amortissement dégressif : calcule et compare.',
    expectedAnswer:
      'Linéaire : 24 000 / 5 = 4 800 € par an, soit un taux de 20 %. Dégressif (durée au moins 3 ans, usage fiscal français ; coefficient 1,75 pour 5-6 ans) : taux dégressif = 20 % × 1,75 = 35 % ; année 1 : 24 000 × 35 % = 8 400 ; année 2 : base restante 15 600 × 35 % = 5 460 ; puis bascule au linéaire sur la durée restante quand le taux linéaire devient supérieur — ici en année 4, deux années restantes, 50 % contre 35 % — pour aboutir à 24 000 amortis au total. Le dégressif accélère la déduction fiscale les premières années ; comptablement, le PCG conduit à un plan comptable linéaire sur la durée d’utilité, l’écart avec le fiscal passant par l’amortissement dérogatoire (comptes 145/687/787). Le dégressif calcule son prorata depuis le premier jour du mois d’acquisition.',
    reasoning:
      'Question calculatoire pivot : elle exige à la fois la maîtrise des deux modes et la distinction comptable/fiscal. Les chiffres de contrôle : 4 800 linéaire ; 8 400 puis 5 460 en dégressif ; total amorti 24 000 dans les deux cas. Le candidat fort signale que la base du dégressif est la valeur nette comptable, que la bascule vers le linéaire est automatique, et que l’amortissement dérogatoire n’est pas une règle comptable mais le traitement de l’écart fiscal.',
    commonErrors: [
      'Appliquer le taux dégressif sur le coût d’origine tous les ans au lieu de la VNC.',
      'Oublier la bascule vers le linéaire en fin de plan.',
      'Confondre le dégressif fiscal avec une méthode comptable de durée d’utilité.',
      'Se tromper de coefficient selon la durée (1,25 / 1,75 / 2,25 selon les tranches).',
    ],
    oralShort:
      'Linéaire : 24 000 sur 5 ans, 4 800 par an, taux de 20 %. Dégressif : coefficient 1,75 pour 5 ans, donc 35 % — 8 400 la première année, puis 35 % de la valeur nette, soit 5 460 la deuxième, avec bascule au linéaire quand il devient supérieur. Au total, 24 000 amortis dans les deux cas : le dégressif décale la charge vers les premières années — c’est un avantage fiscal, l’écart passant en amortissement dérogatoire.',
    oralLong:
      'Par définition, l’amortissement constate la consommation des avantages économiques d’une immobilisation. L’objectif des deux modes diffère : le linéaire reflète une consommation régulière ; le dégressif est un incitant fiscal qui accélère la charge des premières années. La démarche : en linéaire, 24 000 divisés par 5, soit 4 800 par an, taux de 20 %. En dégressif, applicable au-delà de 2 ans et avec un coefficient de 1,75 pour une durée de 5 ou 6 ans : le taux passe à 35 %, appliqué non plus au coût d’origine mais à la valeur nette comptale en début d’exercice — 8 400 la première année, 5 460 la deuxième sur une base de 15 600 — jusqu’à ce que le taux linéaire recalculé sur la durée restante le dépasse : ici en année 4, 50 % contre 35 %, on bascule. Le prorata du dégressif court du premier jour du mois d’acquisition. Par exemple, cette machine de 24 000 : le total amorti reste 24 000, seule la répartition temporelle change — et l’impact fiscal se matérialise par un écart entre le plan comptable et le plan fiscal, traité en amortissement dérogatoire. En conclusion : linéaire pour l’image comptable, dégressif pour la fiscalité, l’écart tracé au 145 — deux logiques, un même total.',
    followUp: 'Pourquoi le PCG impose-t-il de repasser par un amortissement dérogatoire au lieu d’amortir directement en dégressif ?',
    grading: [
      'Linéaire exact : 4 800/an, 20 %.',
      'Dégressif exact : 35 % sur VNC — 8 400 puis 5 460 — bascule linéaire citée.',
      'Égalité des totaux (24 000) et idée de décalage temporel.',
      'Distinction comptable/fiscal avec amortissement dérogatoire.',
    ],
  },
  {
    id: 'qc-019',
    job: 'comptabilite',
    category: 'cas-pratiques',
    difficulty: 3,
    skill: 'Variation de stocks',
    question: 'Stock initial 150 000, stock final 180 000. Passe-moi l’écriture de variation et explique ce qu’elle veut dire.',
    expectedAnswer:
      'La variation de stocks est la différence entre le stock final et le stock initial : 180 000 − 150 000 = +30 000. L’écriture d’inventaire constate le stock final et annule le stock initial au niveau du compte de variation : débit du compte de stock (classe 3) pour 180 000, crédit du compte de variation de stocks (603 en pratique) pour 180 000 ; et simultanément débit du 603 pour 150 000, crédit du compte de stock initial pour 150 000 — en ERP, souvent synthétisé en une seule écriture nette. Effet net : le compte de variation ressort créditeur de 30 000, ce qui diminue les charges de l’exercice : on a stocké, donc on a consommé moins qu’on n’a acheté. À l’inverse, un destockage augmente les charges. La variation alimente le coût d’achat des marchandises vendues et donc la marge. L’inventaire physique annuel est une obligation (France comme Maroc) ; la méthode de valorisation — CMUP ou FIFO — est un choix cohérent dans le temps.',
    reasoning:
      'Le sens de l’écriture et l’interprétation économique sont les deux enjeux. Beaucoup de candidats savent que variation = SF − SI mais inversent le sens comptable : un stockage crédite le compte de variation et réduit les charges. Le lien avec la marge et l’obligation d’inventaire physique complète la réponse attendue. Les chiffres : +30 000 créditeur.',
    commonErrors: [
      'Inverser l’interprétation : croire qu’un stockage augmente les charges.',
      'Écriture passée directement en charges sans passer par le compte de variation.',
      'Oublier l’annulation du stock initial.',
      'Ignorer l’obligation d’inventaire physique annuel et la cohérence CMUP/FIFO.',
    ],
    oralShort:
      'Variation = stock final moins stock initial : 180 000 moins 150 000, plus 30 000. L’écriture d’inventaire débite le compte de stock pour le final, crédite le compte de variation, et annule l’initial. Effet net : le compte de variation est créditeur de 30 000 — les charges baissent d’autant : on a stocké, donc consommé moins qu’acheté. Et cette variation alimente directement le coût d’achat des marchandises vendues, donc la marge.',
    oralLong:
      'Par définition, la variation de stocks mesure l’écart entre ce que l’entreprise possède en fin d’exercice et ce qu’elle possédait au début : 180 000 moins 150 000, soit plus 30 000. L’objectif est de rattacher les achats à la consommation réelle : acheter n’est pas consommer. La démarche comptable : à la clôture, l’inventaire physique — obligatoire, en France comme au Maroc — fixe le stock final valorisé en CMUP ou FIFO selon la méthode retenue ; l’écriture d’inventaire constate ce stock final au débit du compte de classe 3, annule le stock initial, et la différence transite par le compte de variation de stocks. Concrètement ici : le compte de variation ressort créditeur de 30 000. Interprétation : un solde créditeur diminue les charges de l’exercice — l’entreprise a stocké, elle a consommé moins qu’elle n’a acheté ; un destockage produirait l’effet inverse. Par exemple, cette variation de 30 000 vient réduire le coût d’achat des marchandises vendues et améliore d’autant la marge commerciale de l’exercice. En conclusion : la variation de stocks est le pont entre les achats et la consommation — une écriture technique avec un sens économique direct sur le résultat.',
    followUp: 'Si le stock final avait été inférieur au stock initial, quel effet sur le résultat ?',
    grading: [
      'Calcul exact : +30 000 (SF − SI).',
      'Écriture d’inventaire avec compte de variation et annulation du SI.',
      'Interprétation : solde créditeur = charges réduites (stockage).',
      'Lien avec le coût d’achat des marchandises vendues et obligation d’inventaire physique.',
    ],
  },
  {
    id: 'qc-020',
    job: 'comptabilite',
    category: 'pieges',
    difficulty: 3,
    skill: 'Régularisations de produits en fin d’exercice',
    question: 'Produits non encore facturés, produits constatés d’avance, produits à recevoir : tu m’embrouilles. Clarifie-moi ça.',
    expectedAnswer:
      'Le critère unique : à la clôture, le produit est-il déjà acquis ? Si oui et qu’il n’est pas facturé — prestation faite, livraison réalisée — c’est un produit non encore facturé, dit factures à établir : on le constate en débitant le 418 et en créditant le compte de produits, avec la TVA correspondante suivie en régularisation. Si le produit est acquis mais non encore couru à la clôture — typiquement des intérêts courus entre la dernière échéance et le 31/12 — ce sont des produits à recevoir, constatés via les comptes de régularisation (type 418 pour la créance). Si en revanche le produit est enregistré ou encaissé mais que la performance est à venir : produit constaté d’avance, 487 au passif — on retire du résultat ce qui n’est pas encore acquis. Réflexe : acquis → produit à constater ; non acquis mais déjà enregistré → PCA. Miroir exact des FNP et CCA côté charges.',
    reasoning:
      'Question de tri conceptuel, redoutable même pour des candidats confirmés. Le recruteur veut un critère de décision unique — le caractère acquis — appliqué sans confusion. Les marqueurs de maîtrise : le 418 pour le non-facturé, le 487 pour l’avance, la TVA suivie à part, et la conscience que les intitulés varient selon les plans de comptes et les référentiels. Un candidat qui « recolle » des définitions sans critère s’emmêle — c’est exactement le but de la question.',
    commonErrors: [
      'Confondre PNEF (acquis non facturé) et PCA (enregistré non acquis).',
      'Comptabiliser les produits d’avance en produits à recevoir.',
      'Oublier la TVA sur factures à établir, à suivre en régularisation.',
      'Croire que ces intitulés sont universels : ils varient selon le plan de comptes et le référentiel.',
    ],
    oralShort:
      'Un seul critère : le produit est-il déjà acquis à la clôture ? Acquis mais pas facturé — prestation faite : produit non encore facturé, 418 au débit, produit au crédit, TVA en régularisation. Acquis et couru mais non exigible — intérêts courus : produit à recevoir. Enregistré ou encaissé mais performance à venir : produit constaté d’avance, 487 au passif. C’est le miroir exact de FNP et CCA côté charges.',
    oralLong:
      'Par définition, ces trois notions traitent du même problème — le calendrier des produits — mais dans des sens opposés. L’objectif : ni produire trop tôt, ni trop tard. Mon critère de tri est unique : à la clôture, la performance est-elle acquise ? Premier cas : elle est acquise et pas facturée — le chantier est livré, la prestation terminée : produit non encore facturé, factures à établir ; je débite le 418, je crédite le produit, et la TVA se suit en régularisation jusqu’à la facture réelle. Deuxième cas : le droit est né mais l’exigibilité est à venir — intérêts courus entre la dernière échéance et le 31/12 : produits à recevoir, constatés comme créances de régularisation. Troisième cas, le miroir inversé : le client a payé, la facture existe, mais la performance est à venir — abonnement encaissé pour l’an prochain : produit constaté d’avance, débit du produit, crédit du 487 au passif. Par exemple, un contrat de maintenance facturé d’avance au 1er janvier produit un PCA, tandis qu’un chantier achevé au 28/12 mais facturé au 3/01 produit un produit non encore facturé. En conclusion : acquis non facturé → 418 ; couru non exigible → produits à recevoir ; enregistré non acquis → 487 — et les intitulés exacts dépendent du plan de comptes et du référentiel, la logique, elle, ne change pas.',
    followUp: 'Un chantier terminé le 28/12, facturé le 5/01 : où passe le produit, exercice N ou N+1 ?',
    grading: [
      'Critère unique clairement énoncé (caractère acquis de la performance).',
      'Trois notions correctement positionnées (418, produits à recevoir, 487).',
      'TVA sur factures à établier suivie en régularisation.',
      'Miroir avec FNP/CCA signalé, intitulés non présentés comme universels.',
    ],
  },
  {
    id: 'qc-021',
    job: 'comptabilite',
    category: 'calculs',
    difficulty: 3,
    skill: 'Dépréciation des créances',
    question: 'Créance client de 18 000 € TTC, client en difficulté, perte probable estimée à 40 %. Quels chiffres, quelle écriture ?',
    expectedAnswer:
      'La dépréciation se calcule sur le montant HT : 18 000 / 1,20 = 15 000 HT, TVA 3 000. Perte probable de 40 % : dépréciation de 15 000 × 40 % = 6 000. Écriture au 31/12 : débit du 6817, crédit du 491 pour 6 000. La créance reste entière au 411 : une dépréciation est une perte probable, réversible — si le client paie, la dépréciation se reprend (7817/491). Si la créance devient définitivement irrécouvrable, autre traitement : débit du 654 pour 15 000 et de la TVA collectée 3 000, crédit du 411 pour 18 000 — la TVA n’est remise en cause qu’à l’irrécouvrabilité définitive. La perte probable estimée repose sur des éléments documentés : ancienneté, situation du client, assurances-crédit, procédures collectives.',
    reasoning:
      'Trois pièges concentrés : la base de calcul est HT et non TTC ; la dépréciation est réversible, la perte irrécouvrable ne l’est pas ; la TVA ne s’annule qu’en cas d’irrécouvrabilité définitive. Les chiffres de contrôle : 15 000 HT, 6 000 de dépréciation, 3 000 de TVA. Un candidat qui déprécie sur le TTC ou qui passe directement le 654 sans analyse montre qu’il n’a jamais clôturé un compte client.',
    commonErrors: [
      'Calculer la dépréciation sur le montant TTC au lieu du HT.',
      'Passer directement la créance en perte irrécouvrable sans avoir estimé le caractère probable.',
      'Annuler la TVA en même temps que la dépréciation alors que la créance n’est que douteuse.',
      'Oublier la reprise possible de la dépréciation (7817/491) en cas d’encaissement.',
    ],
    oralShort:
      'Base HT : 18 000 TTC, c’est 15 000 HT et 3 000 de TVA. À 40 % de perte probable, la dépréciation est de 6 000 : débit 6817, crédit 491. La créance reste au 411 — c’est une perte probable et réversible, reprise au 7817 si le client paie. Si elle devient définitivement irrécouvrable : 654 pour 15 000, TVA 3 000, et le 411 est soldé pour 18 000.',
    oralLong:
      'Par définition, la dépréciation des créances constate une perte de valeur probable — pas certaine — sur une créance dont le recouvrement devient douteux. L’objectif est de donner une image fidèle : l’actif ne doit pas rester pour un montant dont une partie ne reviendra sans doute pas. La démarche suit trois étapes. Un : qualifier la créance — client en procédure, impayé ancien, assurance-crédit alertée — et documenter l’estimation. Deux : calculer sur la base HT : 18 000 TTC correspondent à 15 000 HT ; à 40 % de perte probable, la dépréciation est de 6 000. Trois : l’écriture — débit 6817, crédit 491 — la créance restant intégralement au 411. Deux conséquences à connaître : si le client paie finalement, la dépréciation se reprend au 7817 ; si la créance devient définitivement irrécouvrable, on solde le 411 par le 654 pour le HT et la TVA collectée pour 3 000 — la taxe ne se remise en cause qu’à ce moment-là. Par exemple, sur mon stage fictif, chaque créance douteuse avait sa fiche d’estimation argumentée, exigée par le réviseur. En conclusion : base HT, caractère probable et réversible, TVA seulement à l’irrécouvrabilité définitive — trois règles qui résument tout.',
    followUp: 'L’année suivante, le client paie intégralement : quelles écritures ?',
    grading: [
      'Base de calcul HT identifiée (15 000 HT / 3 000 TVA).',
      'Montant exact : 6 000 ; écriture 6817/491.',
      'Caractère probable/réversible distinct de la perte irrécouvrable (654).',
      'TVA traitée seulement à l’irrécouvrabilité.',
    ],
  },
  {
    id: 'qc-022',
    job: 'comptabilite',
    category: 'pieges',
    difficulty: 3,
    skill: 'TVA sur encaissements partiels',
    question: 'Un client règle une facture de prestation de services partiellement : qu’est-ce que ça change pour la TVA ?',
    expectedAnswer:
      'Pour une prestation de services, la TVA est exigible sur les encaissements : un règlement partiel ne déclenche la TVA qu’au prorata de ce qui est réellement encaissé. Facture de 12 000 TTC (TVA 2 000) réglée à 50 % : seule la moitié de la TVA, 1 000, est déclarée sur la période de l’encaissement ; le solde suivra le mois du paiement final. En comptabilité, cette ventilation se suit via le compte de TVA à régulariser (type 4458) ou le suivi par facture de l’outil. Si l’entreprise a opté pour les débits, la TVA a été exigée à la facturation et l’encaissement partiel n’a plus d’effet. Pour une vente de biens, aucune incidence : l’exigibilité est déjà intervenue à la livraison. Et un acompte sur service encaissé déclenche déjà sa TVA.',
    reasoning:
      'Le prorata sur encaissement partiel est le point technique que peu de candidats maîtrisent. Chiffres de contrôle : 12 000 TTC, TVA 2 000, encaissement 50 % → 1 000 déclarés. Le recruteur attend aussi la conscience des exceptions — option débits, biens, acomptes — sinon la réponse est faussement générale. Le compte 4458 ou l’équivalent logiciel atteste de la pratique réelle.',
    commonErrors: [
      'Déclarer toute la TVA à la facturation pour une prestation de services.',
      'Ne pas proratiser sur un encaissement partiel.',
      'Oublier qu’un acompte sur service déclenche déjà la TVA à son encaissement.',
      'Appliquer la règle des services à une vente de biens.',
    ],
    oralShort:
      'Sur une prestation de services, la TVA suit les encaissements : un règlement de 50 % ne déclenche que la moitié de la TVA — sur 12 000 TTC avec 2 000 de TVA, je déclare 1 000 ce mois-là, le reste au paiement final. Sauf si l’entreprise a opté pour les débits : là, tout est exigé à la facturation. Et pour les biens, aucune incidence — l’exigibilité est déjà tombée à la livraison.',
    oralLong:
      'Par définition, pour les prestations de services, l’exigibilité de la TVA suit l’encaissement du prix : l’entreprise ne reverse que la taxe correspondant à l’argent réellement reçu. L’objectif est de protection de trésorerie : ne pas faire porter la TVA au prestataire impayé. La démarche comptable : chaque encaissement se ventile entre le principal et la TVA ; sur une facture de 12 000 TTC — dont 2 000 de TVA — un règlement de 6 000 ne déclenche que 1 000 de TVA déclarée sur la période ; le reliquat suivra l’encaissement final. Concrètement, cette ventilation passe par le compte de TVA à régulariser, type 4458, ou par le suivi de TVA sur encaissements intégré à l’outil — c’est ce tableau qui alimente la déclaration. Trois exceptions à connaître : l’option pour les débits rend toute la TVA exigible à la facturation ; les ventes de biens sont déjà exigibles à la livraison, l’encaissement partiel n’a plus d’effet ; et un acompte sur service, lui, déclenche sa TVA dès l’encaissement. Par exemple, sur mon stage fictif, le suivi des encaissements par facture était réconcilié avec la déclaration chaque mois. En conclusion : services = TVA au prorata des encaissements, sous réserve de l’option débits — un point à vérifier pour chaque entreprise.',
    followUp: 'Comment ton logiciel sait-il quelle part de l’encaissement porte sur la TVA quand le client règle 6 000 sur 12 000 ?',
    grading: [
      'Règle d’exigibilité services/encaissements rappelée.',
      'Prorata correct : 50 % encaissé → moitié de la TVA (1 000 sur 2 000).',
      'Exceptions citées : option débits, biens, acomptes.',
      'Traduction comptable : 4458 ou suivi de TVA sur encaissements.',
    ],
  },
  {
    id: 'qc-023',
    job: 'comptabilite',
    category: 'cas-pratiques',
    difficulty: 3,
    skill: 'Écriture d’avoir client',
    question: 'Retour de marchandises par un client sur une facture de 6 000 € HT, TVA 20 %. Passe-moi l’écriture d’avoir.',
    expectedAnswer:
      'L’avoir client est le strict inverse de la facture de vente : débit du compte de ventes (701 par exemple) pour 6 000, débit de la TVA collectée (44571) pour 1 200, crédit du compte client (411) pour 7 200. La créance du client diminue donc de 7 200 TTC. Points d’attention : l’avoir se lettrera contre la facture d’origine ; la TVA collectée diminue d’autant sur la déclaration du mois de l’avoir ; si le client avait déjà payé la facture, l’avoir devient une dette à rembourser ou une imputation sur les prochaines factures — avec un suivi dédié ; les marchandises retournées réintègrent le stock à leur valeur d’origine, avec dépréciation éventuelle si elles sont invendables en l’état.',
    reasoning:
      'Vérifie l’automatisme de l’écriture inversée — débiter un produit et la TVA collectée, créditer le client — et la vision complète : lettrage, impact TVA, devenir du retour physique. Le chiffre de contrôle : 7 200 TTC. Un candidat qui passe l’avoir en charge ou qui oublie la TVA n’a jamais saisi d’avoir réel.',
    commonErrors: [
      'Comptabiliser l’avoir en charge (6xx) au lieu de réduire les ventes.',
      'Oublier la TVA collectée au débit (1 200).',
      'Omettre le lettrage avec la facture d’origine.',
      'Ignorer le retour physique des marchandises en stock et sa valorisation.',
    ],
    oralShort:
      'L’avoir inverse la facture : débit des ventes 6 000, débit de la TVA collectée 1 200, crédit du client 7 200. La créance baisse d’autant, l’avoir se lettrera contre la facture d’origine, et la TVA du mois diminue de 1 200. Si la facture était déjà payée, l’avoir devient à rembourser ou à imputer. Et les marchandises retournées réintègrent le stock, avec dépréciation si invendables.',
    oralLong:
      'Par définition, un avoir client annule tout ou partie d’une vente déjà facturée — ici un retour de marchandises. L’objectif est de réduire la créance et le produit d’orige au niveau réel. L’écriture est le strict miroir de la facture de vente : débit du compte de ventes pour 6 000, débit de la TVA collectée pour 1 200, crédit du compte client pour 7 200 — et c’est bien la TVA collectée qu’on débite, puisqu’on rend la taxe au client. Trois prolongements de terrain : le lettrage, qui apparie l’avoir à la facture d’origine pour que le solde du client soit juste ; la déclaration de TVA, qui intègre la baisse de collecte du mois de l’avoir ; et le devenir du règlement — si le client avait déjà payé, l’avoir se rembourse ou s’impute sur la prochaine facture, ce qui se suit comme une vraie dette envers le client. Sans oublier la marchandise elle-même : le retour réintègre le stock à sa valeur d’achat, avec une dépréciation à constater si elle est invendable en l’état. Par exemple, un retour de 6 000 sur une facture de 24 000 : le client ne devra plus que 18 000, et le stock remonte de 6 000. En conclusion : écrire l’inverse, letter contre l’origine, ajuster la TVA, gérer le retour physique — l’avoir est complet quand les quatre sont faits.',
    followUp: 'Le client avait déjà payé la facture complète : quelle est la suite pour les 7 200 ?',
    grading: [
      'Écriture exacte : débit 70x 6 000, débit 44571 1 200, crédit 411 7 200.',
      'Lettrage avec la facture d’origine évoqué.',
      'Impact TVA sur la déclaration du mois.',
      'Devenir du retour physique en stock (et dépréciation éventuelle).',
    ],
  },
  {
    id: 'qc-024',
    job: 'comptabilite',
    category: 'cas-pratiques',
    difficulty: 3,
    skill: 'Rapprochement bancaire et chèques non débités',
    question: 'Fin de mois : un chèque émis le 28 n’est toujours pas débité au 31. Comment il apparaît dans mes comptes et dans mon rapprochement ?',
    expectedAnswer:
      'Côté comptabilité, le chèque est déjà enregistré : le compte 512 a été crédité dès l’émission. Côté banque, il n’est pas encore débité du relevé au 31. Dans l’état de rapprochement, ce chèque figure comme un écart de transit : partant du solde du relevé au 31/12, on retranche les chèques émis non débités pour aboutir au solde comptable rapproché — les deux soldes coïncident une fois tous les écarts listés. Point essentiel : aucune écriture corrective à passer, ce n’est pas une erreur mais un simple décalage de timing. En revanche, un chèque ancien jamais présenté — plus d’un an par exemple — se traite : vérification auprès du bénéficiaire, éventuelle annulation et re-crédit du 512, car un chèque a une prescription. Ces chèques non débités constituent une « dette flottante » qui surestime la trésorerie disponible apparente côté banque.',
    reasoning:
      'La question piège implicite : beaucoup de débutants veulent passer une écriture pour « corriger » le chèque non débité — il n’y a rien à corriger. Le recruteur attend la mécanique : écart de transit qui réduit le solde du relevé pour aboutir au solde rapproché. Le cas limite du chèque périmé et la notion de dette flottante font la différence entre un exécutant et quelqu’un qui comprend la substance.',
    commonErrors: [
      'Passer une écriture pour « annuler » le chèque en fin de mois alors qu’il n’est qu’en transit.',
      'Ajouter le chèque au solde du relevé au lieu de le retrancher.',
      'Ne jamais revoir les chèques anciens non présentés (périmés).',
      'Confondre solde bancaire du relevé et solde comptable rapproché.',
    ],
    oralShort:
      'Côté compta, le chèque est déjà enregistré — le 512 est crédité depuis l’émission. Côté banque, pas encore débité. Dans le rapprochement, c’est un écart de transit : je le retranche du solde du relevé pour aboutir au solde comptable rapproché. Aucune écriture à passer, c’est un décalage de timing. Seul cas de traitement : le vieux chèque jamais présenté, à annuler après vérification.',
    oralLong:
      'Par définition, un chèque émis non débité est une opération comptabilisée par l’entreprise mais pas encore exécutée par la banque : elle vit dans l’écart entre les deux visions du même compte. L’objectif du rapprochement est justement d’expliquer cet écart, pas de le corriger. La démarche : le 31/12, je dresse l’état de rapprochement ; partant du solde du relevé bancaire, je liste les chèques émis non débités — dont celui du 28 — et je les retranche ; j’ajoute à l’inverse les remises non créditée ; je comptabilise les frais et prélèvements non saisis ; le total doit aboutir au solde du 512 : les deux soldes rapprochés coïncident, le rapprochement est bouclé. Aucune écriture ne touche le chèque du 28 : il est correctement enregistré, la banque est simplement en retard. Deux prolongements : la dette flottante — ces chèques font que le solde du relevé surestime la trésorerie réellement disponible, car ils partiront en débit ; et le chèque périmé — jamais présenté après une longue période, il se vérifie auprès du bénéficiaire puis s’annule par re-crédit du 512. En conclusion : transit, pas erreur — on explique, on ne corrige pas, sauf prescription.',
    followUp: 'Pourquoi le solde du relevé bancaire du 31/12 n’est-il pas le bon indicateur de trésorerie disponible ?',
    grading: [
      'Chèque déjà comptabilisé, écart purement de transit.',
      'Mécanique correcte : retrancher du solde du relevé pour aboutir au rapproché.',
      'Aucune écriture corrective à passer.',
      'Cas du chèque périmé / dette flottante évoqué.',
    ],
  },
  {
    id: 'qc-025',
    job: 'comptabilite',
    category: 'definitions',
    difficulty: 3,
    skill: 'Extourne et contre-passation',
    question: 'Extourne, contre-passation : c’est quoi la différence ? Tu utilises l’une ou l’autre quand ?',
    expectedAnswer:
      'L’extourne est l’annulation, à l’ouverture de l’exercice suivant, d’écritures de régularisation dont l’effet ne doit pas se prolonger — CCA, PCA, FNP selon la méthode : on repasse l’écriture strictement inverse pour que la charge ou le produit se reconstitue au fil de la nouvelle période. La contre-passation est la correction manuelle d’une écriture erronée : on repasse l’écriture initiale en sens inverse, à l’identique, pour la neutraliser — puis on enregistre l’écriture correcte. L’extourne est un mécanisme prévu et systématique ; la contre-passation est un acte de correction exceptionnel, réservé aux erreurs récentes et simples. Pour une erreur ancienne ou lourde, on préfère une écriture de régularisation ciblée qui rétablit le solde sans effacer l’historique. Dans tous les cas : jamais de suppression pure d’une écriture validée — la piste d’audit exige la trace des deux écritures.',
    reasoning:
      'Question de vocabulaire technique où se jouent la précision et l’éthique de trace. Le recruteur veut : extourne = mécanisme de régularisation périodique ; contre-passation = correction d’erreur par inversion ; et surtout le principe de ne jamais effacer une écriture validée. La nuance « erreur ancienne → écriture de régularisation plutôt que contre-passation » distingue les praticiens.',
    commonErrors: [
      'Employer les deux termes comme synonymes.',
      'Croire que l’extourne corrige des erreurs.',
      'Supprimer une écriture validée au lieu de la contre-passer.',
      'Contre-passer une erreur d’un exercice antérieur clôturé sans évaluer l’incidence sur les comptes publiés.',
    ],
    oralShort:
      'L’extourne, c’est l’annulation systématique, à l’ouverture de l’exercice suivant, des écritures de régularisation — CCA, PCA, FNP selon la méthode. La contre-passation, c’est la correction d’une erreur : on repasse l’écriture fausse strictement à l’envers, puis on saisit la bonne. L’extourne est prévue, la contre-passation est exceptionnelle. Et on ne supprime jamais une écriture validée : la trace reste.',
    oralLong:
      'Par définition, ces deux opérations consistent toutes deux à repasser une écriture en sens inverse — mais leur raison d’être diffère radicalement. L’extourne est un mécanisme prévu par la comptabilité d’engagement : les écritures de régularisation de fin d’exercice — CCA, PCA, et FNP selon la méthode retenue — n’ont de sens que pour la clôture ; à l’ouverture de l’exercice suivant, on les annule pour que charges et produits se reconstituent au fil de la consommation réelle. La contre-passation, elle, est un acte de correction : face à une écriture erronée, on repasse exactement la même écriture en sens inverse, puis on enregistre l’écriture correcte. L’objectif est de laisser une trace double : l’erreur et sa correction restent visibles. La règle de choix : extourne pour le mécanisme périodique ; contre-passation pour une erreur récente et simple ; pour une erreur ancienne, significative ou affectant un exercice clôturé, une écriture de régularisation ciblée est préférable, car elle rétablit le solde sans maquiller l’historique — et l’incidence sur les comptes déjà publiés s’évalue au cas par cas. Par exemple, sur mon stage fictif, les extournes étaient générées automatiquement à l’ouverture, et toute contre-passation exigeait une note d’explication au responsable. En conclusion : même geste technique, deux natures différentes — un mécanisme prévu et une correction exceptionnelle — et dans les deux cas, rien ne s’efface.',
    followUp: 'On découvre en mars une facture de fournisseur imputée sur le mauvais compte en janvier : quelle correction ?',
    grading: [
      'Extourne = mécanisme périodique de régularisations, contre-passation = correction d’erreur.',
      'Principe de traçabilité : jamais de suppression d’écriture validée.',
      'Critère de choix selon l’ancienneté/significativité de l’erreur.',
      'Vision piste d’audit de la correction.',
    ],
  },
  {
    id: 'qc-026',
    job: 'comptabilite',
    category: 'risques-controles',
    difficulty: 3,
    skill: 'Cut-off des achats',
    question: 'Cut-off des achats en fin d’exercice : quels risques, et quels contrôles tu mets en place ?',
    expectedAnswer:
      'Risques : rattacher une charge au mauvais exercice — marchandise reçue le 30/12 mais facturée en janvier sans FNP : charges de N sous-évaluées et stock de N surévalué si la réception n’est pas comptée ; à l’inverse, des FNP enregistrées à tort pour des livraisons de janvier gonflent les charges de N. Conséquences : résultat faussé, TVA décalée, stocks et charges incohérents entre eux. Contrôles : rapprocher les derniers bons de réception de décembre avec les factures correspondantes — toute réception non facturée devient FNP ; examiner les premières réceptions de janvier pour vérifier qu’elles n’auraient pas dû être de décembre ; comparer les volumes d’achats décembre/janvier aux années précédentes ; recouper avec la période d’inventaire physique des stocks ; vérifier les avoirs reçus en janvier portant sur décembre. Le cut-off est un principe comptable ; sa déclinaison en procédure de contrôle est une méthode ; le calendrier exact dépend de l’entreprise.',
    reasoning:
      'Le cut-off est LE risque classique de fin d’exercice en comptabilité et en audit. Le recruteur veut la paire risque/contrôle cohérente : réceptions non facturées → FNP ; cohérence stock/charges ; revue des réceptions de janvier. La conscience que stocks et achats doivent raconter la même histoire — cohérence inter-cycles — est le marqueur de niveau.',
    commonErrors: [
      'Contrôler les factures de décembre sans regarder les réceptions de janvier.',
      'Oublier le lien avec l’inventaire physique des stocks.',
      'Croire que le cut-off ne concerne que la comptabilité, sans impact TVA.',
      'Traiter le cut-off comme une pure procédure interne sans le relier au principe de séparation des exercices.',
    ],
    oralShort:
      'Le risque : couper les charges au mauvais endroit — réception du 30/12 facturée en janvier sans FNP, c’est une charge de N sous-évaluée et un stock faux. Mes contrôles : rapprocher les dernières réceptions de décembre avec les factures, toute réception non facturée devient FNP ; examiner les premières réceptions de janvier — auraient-elles dû être de décembre ? ; comparer les volumes à l’an dernier ; recouper avec l’inventaire physique. Stocks et achats doivent raconter la même histoire.',
    oralLong:
      'Par définition, le cut-off des achats vise à ce que chaque charge pèse sur l’exercice qui l’a consommée — matérialisé par le rattachement entre la réception et la facture. L’objectif est la cohérence du résultat et des stocks. Les risques sont symétriques : une réception de décembre facturée en janvier et non traitée en FNP sous-évalue les charges de N — et surévalue le résultat ; pire, si la marchandise reçue a été comptée à l’inventaire, le stock est juste mais la charge manquante crée un écart incohérent ; à l’inverse, des FNP passées pour des livraisons de janvier gonflent artificiellement les charges de N, window dressing inversé. Ma démarche de contrôle suit quatre axes : le rapprochement des derniers bons de réception de décembre avec les factures — toute réception non facturée devient FNP documentée ; la revue des premières réceptions de janvier pour détecter ce qui aurait dû être de décembre ; la comparaison des volumes d’achats de décembre et janvier avec les exercices antérieurs pour repérer des bascules anormales ; et la cohérence avec la date de l’inventaire physique des stocks — stock et achats doivent s’articuler. Par exemple, sur mon stage fictif, une livraison du 31/12 comptée en stock mais facturée le 3/01 a été reclassée en FNP, sinon la marge était dopée. En conclusion : le cut-off est un principe — séparation des exercices — dont la déclinaison en contrôles est une méthode, à calibrer selon la taille de l’entreprise.',
    followUp: 'Et pour le cut-off des ventes, quels contrôles spécifiques tu ajoutes ?',
    grading: [
      'Risques identifiés dans les deux sens (charge manquante vs FNP indues).',
      'Contrôles concrets : réceptions de décembre ET de janvier.',
      'Cohérence stock/achats et inventaire physique intégrée.',
      'Distinction principe comptable / méthode de contrôle.',
    ],
  },
  {
    id: 'qc-027',
    job: 'comptabilite',
    category: 'justificatifs',
    difficulty: 3,
    skill: 'Pièces justificatives et conservation',
    question: 'Quelles pièces justificatives tu exiges avant de comptabiliser, et combien de temps on les garde ?',
    expectedAnswer:
      'Pour une charge : la facture avec ses mentions obligatoires — et en pratique le trio bon de commande, bon de réception, facture. Pour un règlement : la preuve de paiement — relevé bancaire, avis de virement, bordereau de remise de chèques. Pour les notes de frais : justificatifs au nom de l’entreprise, note signée, selon la politique interne. Pour les écritures manuelles (OD) : une pièce interne qui documente le calcul ou la décision — situation de travaux, échéancier d’emprunt, tableau de dépréciation. Conservation : en France, les documents comptables se conservent dix ans (code de commerce), les documents fiscaux au minimum six ans ; au Maroc, la loi comptable impose également dix ans. La numérisation est admise sous conditions de fiabilité et d’intégrité, l’original papier pouvant alors être détruit — selon les règles propres à chaque pays.',
    reasoning:
      'Vérifie la culture documentaire du comptable : sans pièce, pas d’écriture — et la durée de conservation est un réflexe de responsable. Les chiffres à retenir : dix ans comptable France, six ans fiscal, dix ans au Maroc. La nuance sur l’OD — pièce interne obligatoire — est le marqueur d’expérience : c’est le point de contrôle préféré des auditeurs sur les écritures manuelles.',
    commonErrors: [
      'Comptabiliser sur simple mail ou accord oral sans pièce.',
      'Passer des OD sans document interne de calcul ou de décision.',
      'Ignorer les durées de conservation (10 ans comptable France, 6 ans fiscal, 10 ans Maroc).',
      'Croire que la numérisation supprime toute exigence de fiabilité et de traçabilité.',
    ],
    oralShort:
      'Une facture, c’est le trio commande, réception, facture ; un règlement, c’est la preuve de paiement ; une OD, c’est une pièce interne qui justifie le calcul. Durées : dix ans pour les documents comptables en France, six ans au minimum côté fiscal, dix ans au Maroc. Et la numérisation est admise, à condition d’être fiable et intègre. Sans pièce, pas d’écriture — point final.',
    oralLong:
      'Par définition, la pièce justificative est le fondement de chaque écriture : elle prouve la réalité, le montant et l’imputation de l’opération. L’objectif est double — opposabilité en cas de contrôle et piste d’audit exploitable par le réviseur. Ma démarche par famille : pour une charge, la facture conforme avec ses mentions, rapprochée du bon de commande et du bon de réception ; pour un règlement, la preuve de paiement — relevé, avis de virement, bordereau de chèques ; pour une note de frais, le justificatif au nom de l’entreprise et la note signée, dans le cadre de la politique interne ; et pour une écriture manuelle en OD, une pièce interne : tableau de calcul de dépréciation, échéancier, situation de travaux — c’est la pièce que l’auditeur demande en premier. La conservation suit des règles précises : dix ans pour les documents comptables en France, six ans minimum au plan fiscal, dix ans aussi au Maroc — les durées varient par pays, donc on les vérifie. Par exemple, sur mon stage fictif, aucune OD n’était validée sans sa pièce interne numérisée et indexée. En conclusion : pas d’écriture sans pièce, chaque type d’écriture a sa pièce, et la durée de conservation est une règle de référentiel, pas une convenance.',
    followUp: 'Un contrôleur fiscal te demande une facture de trois ans : où la trouves-tu, sous quel délai ?',
    grading: [
      'Familles de pièces par type d’écriture, y compris la pièce interne des OD.',
      'Trio commande/réception/facture cité pour les charges.',
      'Durées de conservation exactes selon le référentiel (10 ans France et Maroc, 6 ans fiscal).',
      'Numérisation admise sous conditions.',
    ],
  },
  {
    id: 'qc-028',
    job: 'comptabilite',
    category: 'justification',
    difficulty: 3,
    skill: 'Neutralité de la TVA sur le résultat',
    question: 'Pourquoi la TVA n’apparaît ni en charges ni en produits ? Justifie-moi ça.',
    expectedAnswer:
      'Parce que l’entreprise n’est pas le redevable réel de la taxe : elle joue un rôle de collecteur intermédiaire. La TVA collectée sur les ventes est une dette envers l’État, au crédit des comptes 4457 ; la TVA déductible sur les achats est une créance sur l’État, au débit des 4456. Le solde — la TVA à payer ou le crédit de TVA reportable — transite par les comptes de tiers, sans jamais toucher le compte de résultat. C’est le consommateur final qui supporte la taxe, via les prix TTC. Exceptions qui créent une vraie charge : la TVA non récupérable sur certaines dépenses — véhicules de tourisme, dépenses de nature mixte selon les règles fiscales, dépenses non engagées pour les besoins de l’exploitation — devient alors partie du coût ; de même, les pénalités et majorations de retard ne sont pas déductibles. D’où l’intérêt d’un suivi rigoureux des comptes 445.',
    reasoning:
      'Question de fond qui teste la compréhension de la mécanique plutôt que la récitation des comptes. Le raisonnement attendu : position de collecteur → comptes de tiers → neutralité. Les exceptions — TVA non déductible devenue charge, sanctions — font la différence entre un candidat qui a compris et un candidat qui récite. La justification économique (consommateur final) conclut.',
    commonErrors: [
      'Enregistrer la TVA collectée en produit et la déductible en charge.',
      'Ignorer que la TVA non récupérable devient une charge réelle (véhicules de tourisme, dépenses privatives).',
      'Confondre neutralité comptable et neutralité de trésorerie — la TVA occupe la trésorerie.',
      'Oublier que pénalités et majorations ne sont pas déductibles.',
    ],
    oralShort:
      'L’entreprise est collecteur, pas redevable final : la TVA collectée est une dette envers l’État au 4457, la déductible une créance au 4456, et le solde transite par les comptes de tiers sans toucher le résultat. C’est le consommateur final qui la supporte. Exception : la TVA non récupérable — véhicules de tourisme, dépenses privatives — devient une vraie charge. Et attention, neutre comptablement, mais pas pour la trésorerie.',
    oralLong:
      'Par définition, la TVA est une taxe sur la consommation supportée par le consommateur final : l’entreprise assujettie n’en est que le percepteur délégué. L’objectif de la mécanique comptable est de traduire cette position d’intermédiaire : la taxe collectée sur les ventes ne m’appartient pas — elle est due à l’État, au crédit des comptes 4457 ; la taxe payée sur mes achats professionnels me sera restituée par déduction — une créance, au débit des 4456. Le solde des deux, TVA à payer ou crédit reportable, vit dans les comptes de tiers : jamais un euro de TVA « normale » ne traverse le compte de résultat. Concrètement, quand je vends 100 plus 20 de TVA et que j’achète 60 plus 12, mon résultat est 40, et les 8 de différence de TVA partent à l’État : neutre. Les exceptions à connaître : la TVA non récupérable — véhicule de tourisme, dépenses non nécessaires à l’exploitation, dépenses mixtes selon les règles fiscales — s’intègre au coût, donc devient charge ; et les pénalités de retard, non déductibles. Par exemple, sur mon stage fictif, la revue des comptes 445 incluait un test des TVA non déductibles passées à tort en déduction. En conclusion : collecteur, donc comptes de tiers, donc neutralité sur le résultat — sauf TVA définitivement non récupérable, qui est une charge comme une autre.',
    followUp: 'Alors pourquoi la trésorerie se sent quand même concernée par la TVA ?',
    grading: [
      'Position de collecteur et logique créance/dette sur l’État.',
      'Comptes 4456/4457 et transit par les tiers, sans résultat.',
      'Exceptions citées : TVA non récupérable, dépenses privatives, pénalités.',
      'Distinction neutralité comptable / impact de trésorerie.',
    ],
  },
  {
    id: 'qc-029',
    job: 'comptabilite',
    category: 'pieges',
    difficulty: 4,
    skill: 'Opérations en devises et écarts de conversion',
    question: 'Tu dois enregistrer une facture fournisseur en dollars, hors Union européenne. Comment tu gères les cours ? Et si elle n’est pas réglée à la clôture ?',
    expectedAnswer:
      'À l’enregistrement, la facture est convertie au cours du jour de l’opération — le taux en vigueur à la date de la facture/livraison — pour fixer le montant historique en euros dans les comptes. Au règlement, l’écart entre le cours du jour du paiement et le cours historique produit un gain de change (766) ou une perte de change (666) constaté en résultat. À la clôture, les créances et dettes en devises non réglées sont réévaluées au cours de clôture : la différence s’inscrit en écart de conversion — actif (476) pour une perte latente, passif (477) pour un gain latent. Application du principe de prudence : la perte latente justifie une provision pour perte de change, le gain latent, lui, ne se comptabilise pas en produit. Les avances versées restent au cours historique. Signal référentiel : en IFRS (IAS 21), les gains latents sont comptabilisés — logique différente du PCG.',
    reasoning:
      'Question technique complète : cours historique, gain/perte réalisé au règlement, réévaluation de clôture avec 476/477, prudence française (provision sur perte latente, pas de produit sur gain latent). Le candidat doit articulate les trois moments sans les confondre. La comparaison IFRS finale montre la conscience que la règle de prudence est une spécificité PCG et non une loi universelle.',
    commonErrors: [
      'Utiliser le cours de clôture dès l’enregistrement initial.',
      'Comptabiliser le gain latent de change en produit — interdit en PCG au titre de la prudence.',
      'Oublier la provision sur perte latente.',
      'Confondre écart de conversion (latent, bilan) et gain/perte de change (réalisé, résultat).',
    ],
    oralShort:
      'J’enregistre au cours du jour de la facture — c’est le coût historique. Au règlement, l’écart avec le cours du paiement donne un gain ou une perte de change en résultat, 766 ou 666. À la clôture, les dettes non réglées sont réévaluées au cours de fin d’exercice : écart de conversion au 476 ou 477. Prudence PCG : provision sur la perte latente, mais jamais de produit sur le gain latent. En IFRS, c’est différent — les gains latents passent en résultat.',
    oralLong:
      'Par définition, une facture en devise crée une dette dont le montant en euros doit être fixé une fois pour toutes : au cours du jour de l’opération. L’objectif est la fixité du coût historique. Trois moments structurent ensuite le traitement. Premier moment, l’enregistrement : conversion au cours du jour, TVA et imputation sur cette base. Deuxième moment, le règlement : le cours a bougé ; la différence entre le cours du paiement et le cours historique produit un résultat de change réalisé — gain au 766 ou perte au 666 — et la dette est soldée pour son montant initial. Troisième moment, la clôture : les dettes et créances en devises encore ouvertes sont réévaluées au cours de clôture ; l’écart, qualifié de latent, transite par les comptes d’écart de conversion — 476 à l’actif pour une perte latente, 477 au passif pour un gain latent. Le principe de prudence du PCG arbitre alors : la perte latente se provisionne, le gain latent ne produit pas de produit. Par exemple, une dette de 100 000 dollars enregistrée à un cours qui s’est dégradé de 5 % à la clôture : 476 pour la perte latente et provision équivalente. En conclusion : historique à l’entrée, réalisé au règlement, latent et prudent à la clôture — et en IFRS, le gain latent, lui, se constate : le référentiel change la règle.',
    followUp: 'Pourquoi le PCG refuse-t-il de comptabiliser le gain latent alors que la dette a bel et bien diminué ?',
    grading: [
      'Cours du jour de l’opération à l’enregistrement (coût historique).',
      'Gain/perte réalisé au règlement (766/666).',
      'Réévaluation de clôture : 476/477, perte latente provisionnée, gain latent non comptabilisé.',
      'Signal référentiel IFRS (IAS 21) sur les gains latents.',
    ],
  },
  {
    id: 'qc-030',
    job: 'comptabilite',
    category: 'calculs',
    difficulty: 4,
    skill: 'Déclaration de TVA à taux multiples',
    question: 'Ventes du mois : 100 000 € HT à 20 % et 50 000 € HT à 5,5 %. Achats : 60 000 € HT à 20 % et 20 000 € HT à 5,5 %. TVA à payer ?',
    expectedAnswer:
      'TVA collectée : 100 000 × 20 % = 20 000, plus 50 000 × 5,5 % = 2 750, soit 22 750. TVA déductible : 60 000 × 20 % = 12 000, plus 20 000 × 5,5 % = 1 100, soit 13 100. TVA à payer : 22 750 − 13 100 = 9 650. Remarques de rigueur : chaque taux se suit dans sa propre ligne de déclaration — pas de compensation de masse entre un taux de collecte et un taux de déduction autre que le mécanisme général du solde ; si le solde était négatif, ce serait un crédit de TVA reportable ou restituable selon les conditions ; et l’exercice suppose un assujettissement total — un assujettissement partiel imposerait un prorata de déduction. Les bases doivent être justifiées HT, la TVA sur acquisitions intracommunautaires et autoliquidations n’interviennent pas dans cet exemple simplifié.',
    reasoning:
      'Calcul volontairement simple sur les taux mais exigeant sur la méthode : séparer les taux ligne à ligne, sommer collecte et déduction, soustraire. Chiffres de contrôle : 22 750, 13 100, 9 650. Le candidat qui mélange les taux (par exemple 5,5 % sur les achats à 20 %) sort faux. Les remarques sur crédit de TVA et prorata montrent la conscience des cas généraux.',
    commonErrors: [
      'Appliquer un taux moyen unique aux ventes ou aux achats.',
      'Inverser les taux entre achats et ventes.',
      'Oublier de convertir en TVA à payer le cas d’un solde négatif (crédit de TVA).',
      'Ignorer que l’exercice suppose un assujettissement total (sinon prorata).',
    ],
    oralShort:
      'Collecte : 100 000 à 20 %, ça fait 20 000 ; 50 000 à 5,5 %, ça fait 2 750 — total 22 750. Déduction : 12 000 sur les achats à 20 %, 1 100 sur ceux à 5,5 % — total 13 100. TVA à payer : 9 650. Chaque taux se déclare sur sa ligne, et si le solde était négatif, ce serait un crédit de TVA reportable.',
    oralLong:
      'Par définition, la TVA à payer d’une période est la différence entre la taxe collectée et la taxe déductible — calculée ligne de taux par ligne de taux. L’objectif de la déclaration est de ventiler les bases par taux : 20 %, 5,5 %, mais aussi 10 % ou 2,1 % selon les opérations. La démarche ici : côté collecte, 100 000 euros HT à 20 % donnent 20 000, et 50 000 euros HT à 5,5 % donnent 2 750 — soit 22 750 collectés ; côté déduction, 60 000 à 20 % donnent 12 000 et 20 000 à 5,5 % donnent 1 100 — soit 13 100 déductibles. Le solde à reporter : 22 750 moins 13 100, soit 9 650 à payer. Trois garde-fous de rigueur : les bases se justifient HT, pièce par pièce ; si le solde était négatif, il deviendrait un crédit de TVA, reportable sur les périodes suivantes ou restituable selon les conditions ; et l’hypothèse implicite est celle d’un assujettissement total — une activité partiellement exonérée imposerait un prorata de déduction. Par exemple, sur mon stage fictif, la revue de la déclaration revenait à réconcilier chaque ligne de taux avec le grand livre des comptes 445. En conclusion : 22 750, 13 100, 9 650 — un calcul simple, à condition de respecter la ventilation par taux.',
    followUp: 'Le mois suivant, la déductible dépasse la collectée : comment ça se traite ?',
    grading: [
      'Collecte exacte : 22 750 (20 000 + 2 750).',
      'Déduction exacte : 13 100 (12 000 + 1 100).',
      'TVA à payer : 9 650.',
      'Conscience des cas généraux : crédit de TVA, assujettissement partiel.',
    ],
  },
  {
    id: 'qc-031',
    job: 'comptabilite',
    category: 'cas-pratiques',
    difficulty: 4,
    skill: 'Correction d’une omission sur exercice clôturé',
    question: 'En N+1, tu découvres une facture de 8 000 € HT de décembre N — travaux reçus et achevés en N — jamais comptabilisée. Tu passes quoi ?',
    expectedAnswer:
      'Deux analyses successives. Comptable : la charge appartient à N ; l’omission a sous-évalué les charges de N. Selon sa significativité, le PCG conduit soit à corriger dans les capitaux propres — compte de report à nouveau — si l’erreur est significative sur les comptes publiés, soit, si elle est non significative, à l’enregistrer directement en charges de N+1, avec la justification écrite du choix. Fiscale : la déduction de la charge se prend à raison de la facture — sur le résultat de N si les comptes N ne sont pas encore déposés et font l’objet d’une correction, sinon la règle du rattachement de la pièce impose une vigilance : les modalités dépendent du statut de la déclaration. écriture type en correction sur capitaux propres : débit du report à nouveau pour 8 000, crédit du 401 ; TVA déductible selon la date de réception de la facture. En révision, l’auditeur évalue l’incidence sur les comparatifs et sur son opinion. La délimitation significatif/non significatif est un jugement, documenté.',
    reasoning:
      'Cas d’erreur sur exercice clôturé, à double lecture comptable et fiscale. Le candidat doit éviter deux extrêmes : tout passer en N+1 sans analyse (lissage de fait), ou rouvrir mécaniquement tous les exercices. La clé : la notion de significativité conditionne le traitement — correction en capitaux propres vs charge de l’exercice courant — et le choix se documente. La dimension fiscale (rattachement de la pièce) doit rester prudente car elle dépend du stade de dépôt des comptes et de la déclaration.',
    commonErrors: [
      'Passer la charge en N+1 sans aucune analyse préalable de la significativité.',
      'Corriger le résultat N alors que les comptes sont déjà publiés sans mesurer les conséquences.',
      'Oublier de qualifier la TVA déductible selon la date de réception de la facture.',
      'Ne documenter ni l’analyse ni la décision de traitement.',
    ],
    oralShort:
      'D’abord, je qualifie : charge de N omise, donc erreur sur exercice clôturé. Si elle est significative, le PCG conduit à corriger dans les capitaux propres — débit du report à nouveau, crédit du 401 — pour 8 000. Si elle est non significative, je peux l’enregistrer en charges de N+1, avec l’analyse écrite qui le justifie. La TVA suit la date de réception de la facture. Et le choix se documente toujours.',
    oralLong:
      'Par définition, une facture de décembre N non comptabilisée est une omission sur exercice clôturé : la charge appartient à N, mais les comptes de N sont arrêtés. L’objectif de la correction est double — rétablir la juste valeur et préserver la comparabilité des états financiers. Ma démarche en deux temps. Le premier temps, l’analyse : je mesure la significativité de l’erreur — 8 000 euros comparés au résultat, aux capitaux propres, aux seuils de l’entité — et je vérifie le contexte : comptes de N déjà publiés ? déclaration déjà déposée ? Le second temps, le traitement : si l’erreur est significative, la correction s’inscrit dans les capitaux propres au compte de report à nouveau — débit du 119 pour 8 000, crédit du 401 — sans retoucher le résultat de N+1 ; si elle est non significative, l’enregistrement en charges de N+1 est admissible, à condition de documenter pourquoi. Sur le plan fiscal, la déduction suit la facture : si les comptes et la déclaration de N sont encore modifiables, la charge retourne sur N ; sinon, vigilance sur le rattachement. En révision, l’auditeur évalue l’incidence sur les comparatifs et, le cas échéant, sur son opinion. Par exemple, sur mon stage fictif, une erreur similaire avait été traitée en report à nouveau avec une note d’analyse signée du responsable. En conclusion : qualifier, mesurer la significativité, choisir entre capitaux propres et charge courante, documenter — et laisser le fisc trancher la modalité selon le stade des dépôts.',
    followUp: 'Même erreur, mais découverte après le dépôt des comptes et de la déclaration N : ça change quoi ?',
    grading: [
      'Qualification correcte : charge de N omise, erreur sur exercice clôturé.',
      'Notion de significativité comme critère de traitement.',
      'Correction en capitaux propres (report à nouveau) vs charge N+1.',
      'Dimension TVA/fiscale et documentation de la décision.',
    ],
  },
  {
    id: 'qc-032',
    job: 'comptabilite',
    category: 'procedures',
    difficulty: 4,
    skill: 'Travaux d’inventaire annuels',
    question: 'Clôture annuelle : les grandes familles de travaux d’inventaire. Listes-les et donne l’essentiel de chacune.',
    expectedAnswer:
      'Neuf familles. Stocks : inventaire physique obligatoire, valorisation CMUP/FIFO, dépréciation des articles obsolètes ou à valeur nette de réalisation inférieure. Immobilisations : état des biens, inventaire physique, plan d’amortissement, dépréciations et cessions de l’exercice. Créances : lettrage, analyse des douteuses, dépréciations, circularisations éventuelles. Dettes : cut-off, factures non parvenues, acomptes reçus. Trésorerie : rapprochements bancaires de clôture, suspens purgés, rapprochement des emprunts et de la caisse. Régularisations : CCA, PCA, FNP, produits non encore facturés, intérêts courus et produits à recevoir. Provisions pour risques et charges : litiges, garanties, taxes en suspens. Social et fiscal : provisions de congés payés, participation, contrôle des comptes 445 et régularisations. Enfin, bouclage : contrôle de la balance définitive, écritures de liaison, annexe et liasse. Ce qui est obligatoire — inventaire physique, image fidèle — et ce qui relève de la politique interne — calendrier, profondeur des analyses — doivent rester distingués.',
    reasoning:
      'Question panoramique de fin d’exercice. Le recruteur attend une structuration par cycle, signe d’une clôture réellement vécue, et non une liste désordonnée. Les marqueurs de niveau : inventaire physique obligatoire, provisions de congés payés, écritures de liaison, annexe. La distinction obligations vs politique interne de clôture est le point de maturité valorisé.',
    commonErrors: [
      'Citer les cycles en vrac sans logique de dépendance (cut-off avant dépréciations, etc.).',
      'Oublier les provisions sociales, notamment les congés payés.',
      'Ignorer l’annexe et les écritures de liaison dans le bouclage.',
      'Presentar le calendrier et la profondeur des travaux comme des obligations universelles.',
    ],
    oralShort:
      'Je structure par cycles : stocks — inventaire physique obligatoire, valorisation, dépréciation ; immobilisations — plans d’amortissement, cessions ; créances — lettrage, dépréciations ; dettes — cut-off et FNP ; trésorerie — rapprochements de clôture ; régularisations — CCA, PCA, FNEF, intérêts courus ; provisions pour risques — litiges, garanties ; social et fiscal — congés payés, comptes 445 ; puis le bouclage : balance définitive, écritures de liaison, annexe. L’obligatoire, c’est l’inventaire et l’image fidèle ; le calendrier, c’est la politique interne.',
    oralLong:
      'Par définition, les travaux d’inventaire sont l’ensemble des diligences qui transforment une comptabilité courante en comptes annuels fidèles. L’objectif : rattacher chaque élément à l’exercice, mesurer les valeurs, provisionner les incertitudes. Ma structuration en neuf familles. Les stocks d’abord : inventaire physique — obligation —, valorisation en CMUP ou FIFO, dépréciation des invendables. Les immobilisations : état des acquisitions et cessions, plans d’amortissement revus, dépréciations si perte de valeur. Les créances : lettrage complet, analyse des douteuses, dépréciations documentées. Les dettes : cut-off des factures, FNP, acomptes reçus reclassés. La trésorerie : rapprochements bancaires arrêtés au 31/12, suspens purgés, caisse comptée, emprunts rapprochés des tableaux d’amortissement. Les régularisations : CCA, PCA, produits non encore facturés, intérêts courus. Les provisions pour risques : litiges avec avis, garanties données, contentieux fiscal. Le social et le fiscal : provision de congés payés, contrôle des comptes 445, régularisations d’impôts. Enfin le bouclage : balance définitive verrouillée, écritures de liaison, annexe cohérente avec les comptes. Par exemple, sur mon stage fictif, la feuille de route d’inventaire imposait l’ordre : cut-off avant dépréciations, dépréciations avant écritures de liaison. En conclusion : neuf familles, un fil conducteur — rattachement, valorisation, incertitude — et une distinction constante entre obligations et politique interne.',
    followUp: 'Sur quelle famille une erreur a le plus d’impact sur le résultat, et pourquoi ?',
    grading: [
      'Structuration par cycles, ordonnée et exhaustive.',
      'Marqueurs de clôture réelle : inventaire physique, congés payés, écritures de liaison, annexe.',
      'Régularisations et provisions correctement rattachées à leur cycle.',
      'Distinction obligations / politique interne maintenue.',
    ],
  },
  {
    id: 'qc-033',
    job: 'comptabilite',
    category: 'risques-controles',
    difficulty: 4,
    skill: 'Risques et contrôles sur la TVA',
    question: 'Sur la TVA, quels risques classiques tu surveilles, et quels contrôles tu mets en place ?',
    expectedAnswer:
      'Risques : erreurs de taux — paramétrage produit fausse toute une série de factures ; TVA déduite à tort sur dépenses non déductibles — véhicules de tourisme, dépenses privatives, notes de frais mixtes ; mauvais suivi de la TVA sur encaissements pour les services — encaissements partiels mal ventilés ; doublons de factures déduites deux fois ; avoirs omis qui laissent la collecte trop haute ; déclarations tardives générant pénalités et intérêts de retard ; régimes particuliers mal traités — autoliquidation, acquisitions intracommunautaires, opérations assimilées ; et la fraude externe, factures fictives ou mécanismes de carrousel — notion à connaître. Contrôles : revue du paramétrage des taux par article et par service ; réconciliation mensuelle des comptes 445 avec la déclaration ; justification des bases HT par facture sur échantillon ; contrôle du tableau des encaissements pour les services ; rapprochement entre avoirs reçus et déduction ; suivi des échéances de dépôt avec alerte ; piste d’audit fiable — et la facturation électronique qui se généralise en France renforce la fiabilité des flux.',
    reasoning:
      'Levée complète du cycle TVA : le recruteur veut une paire risques/contrôles équilibrée et concrète. Les marqueurs d’expérience : la réconciliation comptes 445/déclaration, le paramétrage des taux, le tableau des encaissements, les pénalités de retard. La fraude de type carrousel n’est citée que comme notion de vigilance — un comptable d’entreprise n’est pas aux frontières. La mention de la facturation électronique montre l’actualité du référentiel.',
    commonErrors: [
      'Réduire les risques TVA aux seules erreurs de calcul.',
      'Oublier la réconciliation entre comptes 445 et déclaration.',
      'Ignorer les règles de déductibilité spécifiques (véhicules de tourisme, dépenses mixtes).',
      'Présenter la facturation électronique comme déjà généralisée sans nuance de calendrier.',
    ],
    oralShort:
      'Côté risques : erreurs de taux au paramétrage, TVA déduite à tort — véhicules de tourisme, dépenses privatives —, mauvais suivi des encaissements pour les services, doublons, avoirs omis, déclarations tardives. Côté contrôles : réconciliation mensuelle des 445 avec la déclaration, revue du paramétrage des taux, justification des bases par échantillon, tableau des encaissements, alertes sur les échéances de dépôt. Et la facturation électronique renforce la piste d’audit.',
    oralLong:
      'Par définition, le cycle TVA concentre des risques fiscaux et financiers : les erreurs se paient en régularisations, pénalités et intérêts de retard. L’objectif des contrôles est de sécuriser trois chaînons : le paramétrage, la déduction, la déclaration. Les risques que je surveille : d’abord les erreurs de taux — un article mal paramétré fausse toutes ses factures ; ensuite la déductibilité — véhicule de tourisme, dépenses privatives, notes de frais à usage mixte selon les règles fiscales ; le suivi des encaissements pour les prestations de services, avec la ventilation des paiements partiels ; les doublons de factures et les avoirs omis ; les régimes particuliers — autoliquidation, opérations intracommunautaires ; et, en vigilance externe, les factures fictives et les mécanismes de type carrousel. Mes contrôles en miroir : revue du paramétrage des taux par famille de produits ; réconciliation mensuelle entre les comptes 445 et la déclaration — le contrôle reine ; justification des bases HT facture par facture sur échantillon ; contrôle du tableau des encaissements pour les services ; suivi des avoirs attendus ; et un calendrier de dépôt avec alertes — la régularité évite les pénalités. Par exemple, sur mon stage fictif, la réconciliation 445/déclaration était un point d’arrêt mensuel signé. En conclusion : paramétrage, déduction, déclaration — trois chaînons, une réconciliation mensuelle comme colonne vertébrale, et une piste d’audit renforcée par la facturation électronique à mesure de son déploiement.',
    followUp: 'Contrôle fiscal : TVA déduite deux fois sur la même facture — quels sont les enjeux ?',
    grading: [
      'Risques structurés : taux, déductibilité, encaissements, doublons, retard, fraude externe.',
      'Contrôles en miroir, avec la réconciliation 445/déclaration comme pivot.',
      'Règles de déductibilité spécifiques citées correctement.',
      'Pénalités/retard et piste d’audit (facturation électronique) mentionnés.',
    ],
  },
  {
    id: 'qc-034',
    job: 'comptabilite',
    category: 'cas-pratiques',
    difficulty: 4,
    skill: 'Immobilisation ou charge',
    question: 'Une machine de 4 800 € HT, livrée et mise en service : immobilisation ou charge ? Comment tu décides ?',
    expectedAnswer:
      'La décision comptable ne dépend pas d’un seuil : le PCG actuel n’impose plus de seuil d’immobilisation. Les critères : le bien est identifiable, contrôlé par l’entité, et procure des avantages économiques sur plusieurs exercices — durée d’usage supérieure à un an. Si ces critères sont remplis, c’est une immobilisation amortissable sur sa durée d’utilité ; sinon, une charge de l’exercice. En pratique : la fiscalité offre une tolérance pour les biens de faible valeur — matériel et logiciels neufs dont la valeur unitaire n’excède pas 500 € HT — déductibles immédiatement ; et chaque entreprise définit une politique interne de seuil matériel — par exemple 800 € ou 1 000 € — documentée et cohérente. Distinction clé : règle comptable par critères, tolérance fiscale de 500 €, politique interne de seuil — trois niveaux à ne pas confondre. Une immobilisation de 4 800 € remplit a priori les critères : à l’actif, amortie sur sa durée d’utilité, avec sa fiche d’immobilisation et son numéro d’inventaire.',
    reasoning:
      'Question-frontière charge/immo, piège favori des recruteurs car la réponse « seuil 500 € » est à la fois incomplète et fausse en apparence. Le candidat doit articuler les trois niveaux : critères PCG (aucun seuil), tolérance fiscale 500 € HT biens de faible valeur, politique interne de seuil matériel. La conclusion sur le cas — 4 800 € à l’actif — doit être nette.',
    commonErrors: [
      'Répondre « seuil de 500 € » comme règle comptable générale.',
      'Ignorer la tolérance fiscale des biens de faible valeur et ses conditions (biens neufs, valeur unitaire).',
      'Passer en charge sans politique interne documentée.',
      'Oublier la fiche d’immobilisation et le suivi par numéro d’inventaire.',
    ],
    oralShort:
      'Le PCG actuel n’impose plus de seuil : les critères, c’est bien identifiable, contrôlé, avantages économiques sur plusieurs exercices. 4 800 € en machine : critères remplis, donc actif et amortissement sur la durée d’utilité. Côté fiscal, tolérance pour les biens de faible valeur jusqu’à 500 € HT neufs, déductibles immédiatement. Et l’entreprise peut se fixer une politique interne de seuil — documentée. Trois niveaux : comptable, fiscal, interne.',
    oralLong:
      'Par définition, le passage en immobilisation dépend de critères de fond, pas d’un montant magique : le bien doit être identifiable, contrôlé par l’entité, et consommé sur plusieurs exercices. L’objectif est l’image fidèle : matcher la charge avec les avantages futurs. La démarche sur cette machine de 4 800 euros HT livrée et mise en service : durée d’usage attendue supérieure à un an, usage professionnel, contrôle exclusif — les critères sont remplis, donc immobilisation, avec fiche d’immobilisation, numéro d’inventaire, et plan d’amortissement sur la durée d’utilité. Mais trois niveaux coexistent et il ne faut pas les confondre : le niveau comptable — le PCG actuel n’impose aucun seuil, tout est affaire de critères ; le niveau fiscal — une tolérance permet de déduire immédiatement les biens de faible valeur neufs jusqu’à 500 euros HT, matériel et logiciels ; et le niveau interne — la plupart des entreprises se fixent une politique de seuil matériel, documentée et appliquée avec cohérence, pour éviter de multiplier les fiches d’immobilisation. Par exemple, une entreprise qui immobilise au-delà de 1 000 € doit traiter identiquement les dossiers comparables. En conclusion : 4 800 euros en machine → actif amortissable ; en dessous des seuils internes ou de la tolérance 500 €, charge possible — mais toujours par règle articulée, jamais par habitude.',
    followUp: 'Et pour 400 € de matériel informatique, la réponse change-t-elle ? Selon quel niveau de règle ?',
    grading: [
      'Critères d’immobilisation (identifiable, contrôle, avantages pluriannuels) sans seuil comptable.',
      'Tolérance fiscale 500 € HT biens de faible valeur citée avec ses conditions.',
      'Politique interne de seuil matériel, documentée et cohérente.',
      'Conclusion nette sur le cas : immobilisation à 4 800 €.',
    ],
  },
  {
    id: 'qc-035',
    job: 'comptabilite',
    category: 'anomalies',
    difficulty: 4,
    skill: 'Diagnostic d’un compte client créditeur ancien',
    question: 'En revue de balance, un compte client est créditeur de 22 000 € et n’a pas bougé depuis huit mois. Tu diagnostiques quoi ?',
    expectedAnswer:
      'Hypothèses par ordre de vraisemblance : un double règlement — le client a payé deux fois la même facture, souvent par virement puis par prélèvement ; un avoir reçu non imputé sur la facture correspondante, qui traîne sans lettrage ; une erreur d’imputation — le règlement d’un autre client affecté sur ce compte ; un acompte sur une commande jamais livrée ou annulée sans restitution ; plus rarement, un remboursement trop versé. Démarche : dérouler le détail du compte auxiliaire, identifier l’opération qui a inversé le solde et sa date ; rapprocher avec le lettrage et les relevés du client ; contacter le service commercial puis le client — une circularisation peut confirmer son solde à lui ; corriger selon la cause — remboursement du double règlement, imputation de l’avoir, réimputation du règlement au bon client, reclassification en acompte reçu au passif le cas échéant. Un crédit ancien non traité expose à une réclamation du client et fausse la présentation du poste clients au bilan.',
    reasoning:
      'Prolonge la question de définition de niveau 1 en cas de diagnostic réel avec montant et ancienneté. Le recruteur attend un arbre de causes plausible et une démarche ordonnée — détail du compte, identification de l’opération, contact, correction, reclassification. Le point de fond : ne jamais laisser un crédit client ancien dormir, c’est une dette qui doit apparaître au passif ou être remboursée.',
    commonErrors: [
      'Laisser le solde en l’état parce que « ça se compensera » avec d’autres clients.',
      'Corriger sans avoir identifié l’opération d’origine.',
      'Oublier la reclassification en avances reçues au passif.',
      'Ignorer le risque de réclamation et l’image du poste clients au bilan.',
    ],
    oralShort:
      'Un crédit client de 22 000 qui dort depuis huit mois, je suspcte en priorité : double règlement, avoir reçu non imputé, erreur d’imputation — règlement d’un autre client — ou acompte sur commande jamais livrée. Je déroule le détail du compte, j’identifie l’opération qui a inversé le solde, je rapproche du lettrage, je contacte le client. Puis correction : remboursement, imputation ou reclassification en avance reçue. Un crédit ancien, c’est une dette cachée à l’actif.',
    oralLong:
      'Par définition, un compte client créditeur signifie que, toutes opérations confondues, le client nous a versé plus qu’il ne devait — l’entreprise a une dette envers lui. L’objectif du diagnostic est d’identifier la cause avant toute correction. Mes hypothèses par ordre de fréquence : un double règlement — deux moyens de paiement partis pour la même facture ; un avoir reçu non imputé — il existe mais n’a jamais été lettré contre la facture ; une erreur d’imputation — le virement d’un autre client crédité ici ; un acompte sur une commande jamais livrée ou annulée, jamais restitué. La démarche suit un ordre strict : dérouler l’auxiliaire du compte ligne par ligne, repérer l’opération qui a inversé le sens et sa date ; confronter au lettrage et aux avis de virement ; contacter le commercial puis le client — sa propre comptabilité a peut-être un écart miroir ; enfin corriger selon la cause : remboursement du trop-perçu, lettrage de l’avoir, réimputation au bon client, ou reclassification en avances reçues au passif. Par exemple, sur mon stage fictif, un 411 créditeur de 22 000 datait d’un double prélèvement remboursé au client après confirmation écrite. En conclusion : identifier, confirmer, corriger, reclasser — et surtout ne jamais laisser dormir : au bilan, ce crédit est une dette mal placée, et pour le client, une créance oubliée.',
    followUp: 'Le client confirme qu’il a bien payé deux fois : quelle écriture de correction ?',
    grading: [
      'Hypothèses hiérarchisées plausibles (double règlement, avoir, imputation, acompte).',
      'Démarche ordonnée : détail du compte → opération d’origine → contact/circularisation.',
      'Corrections adaptées à chaque cause, reclassification au passif.',
      'Vision bilan et risque de réclamation.',
    ],
  },
  {
    id: 'qc-036',
    job: 'comptabilite',
    category: 'pieges',
    difficulty: 4,
    skill: 'Révision du plan d’amortissement',
    question: 'On te dit : « on utilise la machine deux fois moins que prévu ». Qu’est-ce que ça change sur l’amortissement ?',
    expectedAnswer:
      'Deux mécanismes différents selon la nature du problème. Si c’est un changement d’utilisation — le rythme de consommation des avantages économiques est différent de ce qui était prévu — le plan d’amortissement se révise de façon prospective : nouvelle base amortissable (valeur nette comptable diminuée de la valeur résiduelle), nouveau rythme, sans retraiter le passé — c’est un changement d’estimation, pas une erreur. Si en plus la valeur du bien elle-même s’est dégradée — valeur actuelle inférieure à la valeur nette comptable — une dépréciation se constate : dotation exceptionnelle immédiate, réversible ensuite si la valeur remonte, et le plan d’amortissement se reconstruit sur la valeur dépréciée. La distinction clé : révision du plan = étalement prospectif de la consommation réelle ; dépréciation = reconnaissance immédiate d’une perte de valeur. Ne jamais régulariser le passé comme si c’était une erreur. Signal IFRS : utisation et valeur résiduelle réexaminées chaque année (IAS 16/36), logique voisine mais calendrier et modalités propres.',
    reasoning:
      'Question qui croise deux notions souvent confondues : changement d’estimation (prospective) et dépréciation (perte de valeur immédiate et réversible). Le mot « deux fois moins » peut déclencher l’un, l’autre ou les deux. Le candidat doit poser la question de fond : est-ce le rythme qui change ou la valeur qui tombe ? La référence IFRS finale signale la conscience référentielle sans excès.',
    commonErrors: [
      'Traiter le changement d’utilisation comme une erreur et contre-passer les amortissements passés.',
      'Confondre révision du plan (prospective) et dépréciation (immédiate, réversible).',
      'Oublier que la dépréciation se reprend si la valeur remonte — contrairement à l’amortissement.',
      'Reconstruire le plan sur la valeur d’origine au lieu de la valeur nette comptable.',
    ],
    oralShort:
      'Je distingue deux cas. Si c’est le rythme d’utilisation qui change : révision prospective du plan — nouvelle base sur la valeur nette comptable, nouvel étalement, sans retoucher le passé. C’est un changement d’estimation. Si la valeur du bien elle-même s’est dégradée : dépréciation — dotation immédiate de l’écart entre valeur nette comptable et valeur actuelle, réversible ensuite, et plan reconstruit sur la valeur dépréciée. Deux mécanismes, jamais une régularisation du passé.',
    oralLong:
      'Par définition, l’amortissement suit un plan fondé sur des estimations : rythme de consommation des avantages et valeur résiduelle. Quand la réalité diverge, deux mécanismes s’offrent — et le diagnostic précède le traitement. Premier cas : seul le rythme change — la machine tourne deux fois moins, mais sa valeur de revente ou d’usage demeure. C’est un changement d’estimation : le plan se révise de façon prospective, sur la valeur nette comptable, avec un nouvel étalement conforme à la consommation réelle — le passé n’est pas retraité, ce n’est pas une erreur. Second cas : la valeur du bien elle-même s’effondre — marché de l’occasion en chute, obsolescence technique. Là, une dépréciation se constate immédiatement : la valeur nette comptable est ramenée à la valeur actuelle par une dotation exceptionnelle ; si la valeur remonte plus tard, la dépréciation se reprend — c’est sa différence fondamentale avec l’amortissement — et le nouveau plan d’amortissement se construit sur la valeur dépréciée. Souvent, les deux se combinent : dépréciation d’abord, plan révisé ensuite. Par exemple, sur mon stage fictif, une ligne de production réduite de moitié avait donné une dépréciation de 30 000 puis un plan révisé sur sept ans au lieu de quatre. En conclusion : rythme → révision prospective ; valeur → dépréciation immédiate et réversible ; jamais de régularisation rétroactive — et en IFRS, ce double examen est annuel.',
    followUp: 'Pourquoi la dépréciation est-elle réversible alors que l’amortissement ne l’est jamais ?',
    grading: [
      'Distinction nette changement d’estimation / dépréciation.',
      'Révision prospective : base = valeur nette comptable, passé non retraité.',
      'Dépréciation : dotation immédiate, réversible, plan reconstruit.',
      'Signal IFRS (réexamen annuel) sans le présenter comme règle PCG.',
    ],
  },
  {
    id: 'qc-037',
    job: 'comptabilite',
    category: 'organisation',
    difficulty: 4,
    skill: 'Organisation et séparation des tâches comptables',
    question: 'Tu arrives comme responsable comptable dans une équipe de quatre : comment tu organises la répartition des tâches ?',
    expectedAnswer:
      'Principes d’abord : séparation des fonctions incompatibles — celui qui initie une dépense n’enregistre pas et ne paie pas ; celui qui saisit n’est pas celui qui valide ; les règlements exigent une double intervention au-dessus des seuils. Répartition par cycle dans une équipe de quatre : un poste fournisseurs — saisie, lettrage, rapprochements des comptes 401 ; un poste clients — facturation, encaissements, relances coordonnées avec le commercial ; un poste trésorerie et banque — paiements, rapprochements bancaires, déclarations TVA dans la limite des seuils de signature ; un poste immobilisations, paie et écritures diverses, avec le responsable en validation. Facteurs d’organisation : vacations et remplacements croisés documentés, procédures écrites, calendrier de clôture partagé, revue hebdomadaire de la balance en équipe, profils d’accès ERP alignés sur les responsabilités. Si la taille impose des cumuls de fonctions — fréquent en petite structure — le responsable compense par une supervision renforcée : revue systématique des écritures manuelles, rapprochements contrôlés par quelqu’un d’autre que leur producteur. L’organisation est une politique interne guidée par des principes de contrôle interne.',
    reasoning:
      'Question de management comptable : le recruteur veut des principes de séparation des tâches déclinés de façon réaliste pour quatre personnes, pas une théorie générique. Les marqueurs : cumul initiateur/enregistreur/payeur interdit, revue des OD, rapprochements revus par un tiers, compensation par supervision quand la taille ne permet pas la séparation parfaite — cette nuance distingue quelqu’un qui a géré une petite équipe.',
    commonErrors: [
      'Répartir par volume de travail sans aucun principe de séparation des tâches.',
      'Laisser la même personne saisir, valider et payer les fournisseurs.',
      'Ignorer les vacations et la documentation des procédures.',
      'Croire que la séparation parfaite est possible partout : en petite équipe, on compense par la supervision.',
    ],
    oralShort:
      'D’abord les principes : celui qui initie n’enregistre pas et ne paie pas ; celui qui saisit ne valide pas ; double signature au-dessus des seuils. Avec quatre personnes : un poste fournisseurs, un poste clients, un poste trésorerie et TVA, un poste immobilisations, paie et OD, avec moi en validation. Vacations croisées, procédures écrites, revue de balance hebdo, profils ERP alignés. Et si un cumul est inévitable en petite structure, je compense par une supervision renforcée des OD et des rapprochements.',
    oralLong:
      'Par définition, la répartition des tâches comptables applique des principes de contrôle interne à une réalité d’effectif — ici, quatre personnes. L’objectif est qu’aucune personne ne contrôle pas seule une transaction de bout en bout : initier, enregistrer, valider, régler sont des fonctions séparées. Ma construction : un poste fournisseurs — saisie, lettrage, contrôle des comptes 401 ; un poste clients — facturation, encaissements, relances en coordination avec le commercial ; un poste trésorerie — paiements selon la matrice de signatures, rapprochements bancaires, préparation de la TVA ; un poste immobilisations, paie et écritures diverses ; et moi en surcouche : validation des OD, revue de balance, contrôle des rapprochements produits par d’autres. Autour de ça : vacations documentées — chacun doit pouvoir remplacer un collègue deux semaines ; procédures écrites à jour ; calendrier de clôture partagé avec des jalons ; profils d’accès ERP calés sur les responsabilités réelles. Et l’honnêteté de la petite structure : certains cumuls sont inévitables — je le sais, donc je compense par une supervision renforcée : revue systématique des écritures manuelles, rapprochement bancaire revu par quelqu’un d’autre que son producteur, revue croisée des comptes d’attente. Par exemple, sur mon stage fictif, le trésorier ne pouvait pas créer de fournisseur dans l’ERP — la création et le paiement étaient séparés. En conclusion : des principes de séparation, déclinés de façon réaliste, compensés par la supervision là où la taille impose des compromis — c’est du contrôle interne appliqué, pas du manuel.',
    followUp: 'Un de tes quatre part en congé parental six mois : tu réorganises comment ?',
    grading: [
      'Principes de séparation des fonctions posés d’abord (initier/saisir/valider/payer).',
      'Répartition réaliste par cycle pour quatre personnes.',
      'Dispositifs annexes : vacations, procédures, profils ERP, revue de balance.',
      'Conscience des compromis en petite structure et supervision compensatoire.',
    ],
  },
  {
    id: 'qc-038',
    job: 'comptabilite',
    category: 'calculs',
    difficulty: 5,
    skill: 'Cession d’immobilisation amortissable',
    question: 'Machine acquise 100 000 € HT le 01/01/N-4, amortie linéairement sur 5 ans. Cédée le 30/06/N pour 45 000 € HT. Écritures et résultat de cession ?',
    expectedAnswer:
      'Trois écritures. Un, la dotation complémentaire jusqu’à la date de sortie : 100 000 × 20 % × 6/12 = 10 000 — débit 6811, crédit 2815. Deux, la cession : encaissement TTC = 45 000 × 1,20 = 54 000 — débit 512 (ou 462 en attendant le règlement), crédit 775 pour 45 000 et 44571 pour 9 000. Trois, la sortie de l’actif : cumul des amortissements au 30/06/N = 80 000 (quatre années pleines N-4 à N-1) + 10 000 = 90 000 ; valeur nette comptable = 100 000 − 90 000 = 10 000 — débit 2815 pour 90 000 et 675 pour 10 000, crédit du compte d’immobilisation pour 100 000. Résultat de cession : produit de cession 45 000 (775) moins valeur comptable 10 000 (675) = plus-value de 35 000. Garde-fous : le calcul de la dotation se fait au prorata jusqu’à la date de sortie ; la TVA sur cession d’une immobilisation amortissable se calcule sur le prix total ; le résultat de cession se lit entre le 775 et le 675, pas dans le produit d’encaissement.',
    reasoning:
      'Synthèse calculatoire la plus technique du domaine : elle enchaîne dotation complémentaire, écriture de cession avec TVA, sortie d’actif et plus-value. Chiffres de contrôle : 10 000 de dotation, 90 000 de cumul, VNC 10 000, TTC 54 000, TVA 9 000, plus-value 35 000. Les erreurs classiques : oublier la dotation de l’année de cession, calculer la TVA sur la VNC, ou présenter le TTC comme produit de cession. Vérifiée au calcul près.',
    commonErrors: [
      'Oublier la dotation complémentaire de l’année de sortie (10 000).',
      'Calculer la TVA sur la VNC au lieu du prix de cession.',
      'Créditer le 775 pour le TTC (54 000) au lieu du HT (45 000).',
      'Omettre l’écriture de sortie du bilan (2815/675 contre l’immobilisation).',
    ],
    oralShort:
      'Trois écritures. Dotation complémentaire d’abord : 100 000 à 20 % sur six mois, 10 000 — 6811/2815. La cession ensuite : 54 000 TTC encaissés — débit 512, crédit 775 pour 45 000 et 44571 pour 9 000. La sortie d’actif enfin : cumul 90 000 — quatre années pleines plus la dotation de N — VNC 10 000 : débit 2815 pour 90 000, débit 675 pour 10 000, crédit du compte machine 100 000. Plus-value : 45 000 moins 10 000, soit 35 000.',
    oralLong:
      'Par définition, céder une immobilisation amortissable déclenche trois écritures indissociables : achever l’amortissement, constater le produit, sortir le bien du bilan. L’objectif est de mesurer un résultat de cession exact : prix de cession HT contre valeur nette comptable. La démarche pas à pas. Première écriture, la dotation complémentaire : la machine a couru six mois en N, donc 100 000 fois 20 % fois 6/12, soit 10 000 — débit 6811, crédit 2815. À ce stade, le cumul atteint 90 000 : quatre années pleines de N-4 à N-1 à 20 000, plus les 10 000 de N. Deuxième écriture, la cession : le prix de 45 000 euros HT donne 54 000 TTC — débit 512 pour 54 000, crédit 775 pour 45 000 et 44571 pour 9 000 ; la TVA se calcule sur le prix total d’une immobilisation amortissable. Troisième écriture, la sortie du bilan : débit 2815 pour 90 000, débit 675 pour la VNC de 10 000 — 100 000 moins 90 000 — crédit du compte d’immobilisation pour 100 000. Le résultat de cession se lit entre le 775 et le 675 : 45 000 moins 10 000, soit une plus-value de 35 000. Par exemple, sur mon stage fictif, l’oubli de la dotation complémentaire était l’erreur la plus fréquente des juniors sur ce schéma. En conclusion : 10 000, 90 000, 10 000 de VNC, 54 000 TTC, 35 000 de plus-value — cinq chiffres, trois écritures, un résultat.',
    followUp: 'Si la cession avait eu lieu le 31/03 au lieu du 30/06, quels montants changent ?',
    grading: [
      'Dotation complémentaire exacte : 10 000 (prorata 6/12).',
      'Écriture de cession exacte : 512 54 000 / 775 45 000 + 44571 9 000.',
      'Sortie d’actif : 2815 90 000 + 675 10 000 / machine 100 000.',
      'Plus-value correcte : 35 000, lue entre 775 et 675.',
    ],
  },
  {
    id: 'qc-039',
    job: 'comptabilite',
    category: 'anomalies',
    difficulty: 5,
    skill: 'Synthèse de régularisations de clôture',
    question: 'Clôture N : stock final compté à 400 000 dont 90 000 d’articles sans rotation depuis quatorze mois ; factures non parvenues non enregistrées pour 60 000 ; prime d’assurance annuelle de 12 000 payée le 1er octobre. Traite les trois et donne l’effet net sur le résultat.',
    expectedAnswer:
      'Premier point, le stock obsolète : la valeur nette de réalisation des articles dormants est estimée — disons 30 000 — d’où une dépréciation de 90 000 − 30 000 = 60 000 : débit 6817, crédit 39x ; le stock reste compté mais déprécié. Deuxième point, les FNP : charges de 60 000 à enregistrer — débit 6xx (TVA sur FNP selon la méthode), crédit 408. Troisième point, l’assurance payée d’avance : trois mois consommés sur l’exercice (octobre à décembre) = 3 000 ; charges constatées d’avance de 9 000 — débit 486, crédit 6xx. Effet net sur le résultat : −60 000 (dépréciation stock) − 60 000 (FNP) + 9 000 (CCA qui réduit les charges) = −111 000. Les trois traitements relèvent de trois principes différents : dépréciation pour perte de valeur probable, rattachement pour la charge non facturée, indépendance des exercices pour l’avance. Chaque estimation — valeur de réalisation, montant des FNP — doit être documentée pour résister à la révision.',
    reasoning:
      'Cas de synthèse D5 : trois anomalies de natures différentes dans un même énoncé, avec un effet net à calculer. Chiffres de contrôle : 60 000 + 60 000 − 9 000 = −111 000. Le candidat doit montrer qu’il ne confond pas les trois principes — dépréciation, rattachement, indépendance des exercices — et que l’estimation (valeur nette de réalisation) est une hypothèse documentée, pas un chiffre d’autorité.',
    commonErrors: [
      'Traiter les 90 000 d’articles dormants en dépréciation sèche sans estimation de valeur nette de réalisation.',
      'Oublier les FNP alors que les charges ont été consommées.',
      'Passer la totalité de la prime d’assurance en charges (12 000) sans CCA.',
      'Additionner les effets sans distinguer leur signe (−60 000, −60 000, +9 000).',
    ],
    oralShort:
      'Stock : 90 000 d’articles dormants, valeur de réalisation estimée 30 000 — dépréciation de 60 000, 6817/39x. FNP : 60 000 de charges à rattacher, 6xx/408. Assurance : trois mois consommés, 3 000 en charges, CCA de 9 000 au 486. Effet net sur le résultat : moins 60 000, moins 60 000, plus 9 000 — moins 111 000. Trois principes différents : dépréciation, rattachement, indépendance des exercices.',
    oralLong:
      'Par définition, ces trois points de clôture relèvent de trois principes distincts — et c’est le premier réflexe à poser. L’objectif : un résultat N fidèle. Premier point, le stock : les 90 000 d’articles sans rotation depuis quatorze mois ne valent plus leur coût d’entrée ; j’estime leur valeur nette de réalisation — ici 30 000, par référence aux prix de solde atteignables — et je constate une dépréciation de 60 000 : débit 6817, crédit 39x. Le stock reste à 400 000 au compte, diminé de sa dépréciation au bilan. Deuxième point, les FNP : des prestations consommées avant la clôture mais non facturées, 60 000 — la charge appartient à N : débit 6xx, crédit 408, avec la TVA sur FNP selon la méthode de l’entreprise. Troisième point, la prime d’assurance payée le 1er octobre : douze mois payés, trois consommés — 3 000 restent en charges de N, et 9 000 passent en charges constatées d’avance : débit 486, crédit 6xx. L’effet net sur le résultat s’établit ainsi : moins 60 000 de dépréciation, moins 60 000 de charges supplémentaires, plus 9 000 de charges retirées — soit moins 111 000. Par exemple, chaque estimation — valeur de réalisation, montant des FNP — devait être appuyée d’un document : grilles de solde, contrats, bons de réception, sinon le réviseur la rejette. En conclusion : trois principes, trois écritures, un effet net de −111 000 — la clôture est un exercice de jugement documenté autant que de calcul.',
    followUp: 'Si le réviseur estime la valeur de réalisation des articles dormants à 20 000 au lieu de 30 000, quel effet ?',
    grading: [
      'Dépréciation de stock calculée sur une valeur de réalisation estimée (60 000).',
      'FNP enregistrées : 60 000 en charges.',
      'CCA exacte : 3 000 consommés / 9 000 reportés.',
      'Effet net exact : −111 000, avec les signes bien posés.',
    ],
  },
  {
    id: 'qc-040',
    job: 'comptabilite',
    category: 'cas-pratiques',
    difficulty: 5,
    skill: 'Diagnostic d’une balance déséquilibrée',
    question: 'La balance de clôture ne s’équilibre pas : écart de 1 273,60 €. Démarche pour retrouver l’erreur ?',
    expectedAnswer:
      'Étape un, situer l’écart : vérifier l’équilibre de chaque journal (totaux débits/crédits) et le report vers la balance — l’écart naît-il d’un journal, du report, ou de la balance elle-même ? Étape deux, interroger la divisibilité : un écart divisible par deux évoque une écriture passée d’un seul côté ou un sens inversé — montant compté une fois en moins d’un côté ; divisible par neuf, une erreur de transcription ou de chiffres inversés — 1 273,60 n’est divisible ni par 2 ni par 9 de façon probante, donc on cherche plutôt un montant exact. Étape trois, la traque : rechercher la valeur 1 273,60 en débit et en crédit dans les journaux de la période — un écart pur signale souvent un montant saisi d’un seul côté ; si rien, chercher les combinaisons simples (deux écritures dont la différence fait l’écart). Étape quatre, le bornage temporel : éditer des balances progressives par quinzaine ou par journée et repérer la première date où l’écart apparaît, puis passer les écritures de cette fenêtre au crible. Étape cinq, les causes périphériques : écritures brouillon non validées, escomptes automatiques, arrondis de TVA multi-taux, ventilation analytique non équilibrée. La démarche est méthodique et outillée — requêtes dans l’ERP — jamais aléatoire.',
    reasoning:
      'Cas vécu de fin de mois. Le recruteur veut une méthode — situer, diviser, chercher, borner, élargir — plutôt qu’un ressassage de cause unique. Les astuces de divisibilité (par 2, par 9) sont des accélérateurs connus des praticiens, à présenter comme indices et non comme lois. L’usage des balances progressives et des requêtes ERP signale l’expérience réelle.',
    commonErrors: [
      'Relire toutes les écritures du mois une par une sans stratégie de bornage.',
      'Forcer l’équilibre de la balance par une écriture d’ajustement non justifiée.',
      'Ignorer les indices de divisibilité (écart /2, /9) comme accélérateurs.',
      'Oublier les causes logicielles : écritures non validées, arrondis automatiques, ventilation analytique.',
    ],
    oralShort:
      'Je commence par situer : chaque journal est-il équilibré ? Le report vers la balance est-il juste ? Ensuite j’interroge l’écart : divisible par deux — écriture passée d’un seul côté ou sens inversé ; divisible par neuf — chiffres inversés. Ici, je traque le montant exact 1 273,60 dans les journaux. Sinon, bornage : balances progressives par quinzaine pour trouver la première date d’apparition. Et causes périphériques : écritures non validées, arrondis de TVA. Jamais d’écriture de forçage.',
    oralLong:
      'Par définition, une balance déséquilibrée signifie que le principe de partie double s’est cassé quelque part entre les journaux et la balance. L’objectif est de retrouver l’erreur le plus vite possible, avec une méthode — pas en relisant tout. Ma démarche en cinq étapes. Étape un, situer : je contrôle l’équilibre débits/crédits de chaque journal pris isolément, puis le report vers la balance — l’écart appartient-il à la saisie ou à l’agrégation ? Étape deux, interroger la forme de l’écart : divisible par deux, il évoque un montant compté d’un seul côté ou un sens inversé ; divisible par neuf, une transcription erronée ou des chiffres inversés — ce sont des indices d’accélération, pas des lois. Ici, 1 273,60 ne présente ni profil : je passe à la traque directe. Étape trois, la traque : requête dans l’ERP sur la valeur exacte, en débit et en crédit — un écart pur correspond souvent à un montant saisi d’un seul côté ; sinon je cherche les couples d’écritures dont la différence reproduit l’écart. Étape quatre, le bornage : j’édite des balances progressives — par quinzaine, voire par journée en fin de mois — et je repère la première fenêtre où l’écart naît : je réduis le champ de relecture à cette fenêtre. Étape cinq, les causes périphériques : écritures restées en brouillon, escomptes calculés automatiquement, arrondis de TVA multi-taux, ventilations analytiques déséquilibrées. Par exemple, sur mon stage fictif, un écart récurrent de centimes venait d’un paramétrage d’arrondi sur les factures à 5,5 %. En conclusion : situer, interroger, traquer, borner, élargir — et jamais d’écriture de forçage : une balance équilibrée par artifice est une anomalie de plus.',
    followUp: 'L’écart est divisible par neuf : qu’est-ce que ça te suggère en priorité ?',
    grading: [
      'Démarche structurée : situer (journaux vs balance), puis descendre.',
      'Indices de divisibilité (/2, /9) présentés comme accélérateurs.',
      'Outils réels : requêtes ERP, balances progressives, bornage temporel.',
      'Refus explicite de l’écriture de forçage non justifiée.',
    ],
  },
  {
    id: 'qc-041',
    job: 'revision',
    category: 'definitions',
    difficulty: 1,
    skill: 'Balance des comptes',
    question: 'La balance des comptes, c’est quoi et à quoi elle sert ?',
    expectedAnswer:
      'La balance est le tableau récapitulatif de tous les comptes de l’exercice : pour chaque compte, le total des débits, le total des crédits et le solde — balance dite « à quatre colonnes » — ou seulement les soldes — balance à deux colonnes, ou balances migrées au crédit/débit. Elle sert à vérifier l’équilibre de la partie double : total des débits égal au total des crédits ; à préparer les états financiers — les comptes de classes 6 et 7 alimentent le compte de résultat, les classes 1 à 5 le bilan ; et à contrôler : repérage des comptes anormaux, base de la revue analytique. Limite essentielle : une balance équilibrée ne prouve pas que les comptes sont justes — des erreurs s’annulent sans casser l’équilibre.',
    reasoning:
      'Question d’entrée en révision : le candidat doit situer la balance dans la chaîne journal → grand livre → balance → états financiers. Le piège classique — croire que l’équilibre prouve l’exactitude — doit être désamorcé dès le niveau 1, car c’est le fondement de toute la démarche de révision : la cohérence arithmétique n’est qu’un prérequis.',
    commonErrors: [
      'Croire que l’équilibre de la balance garantit l’exactitude des comptes.',
      'Confondre balance et grand livre.',
      'Oublier son rôle de préparation des états financiers.',
      'Ignorer les balances intermédiaires et progressives utilisées en cours d’exercice.',
    ],
    oralShort:
      'La balance, c’est le tableau de tous les comptes : totaux débits, totaux crédits, soldes. Trois usages : vérifier l’équilibre de la partie double, préparer le compte de résultat et le bilan, et contrôler — comptes anormaux, revue analytique. Mais une balance équilibrée ne prouve pas que les comptes sont justes : des erreurs s’annulent sans casser l’équilibre.',
    oralLong:
      'Par définition, la balance des comptes récapitule, compte par compte, les mouvements de l’exercice : cumul des débits, cumul des crédits, et solde — débiteur ou créditeur. L’objectif est triple : s’assurer de la cohérence arithmétique — le total des débits égale le total des crédits, un reflet de la partie double ; préparer les états financiers — les comptes de gestion alimentent le résultat, les comptes de bilan se retrouvent au bilan ; et servir d’outil de contrôle — un compte au solde ou au sens inhabituel attire l’œil du réviseur. La démarche du réviseur commence d’ailleurs souvent par elle : il part de la balance, descend au grand livre pour un compte suspect, puis aux pièces. Par exemple, un compte de charges dont le solde double sans explication devient un point de revue analytique. La limite fondamentale : l’équilibre ne prouve rien sur l’exactitude — une omission complète ou un doublon symétrique laisse la balance droite. En conclusion : la balance est la photographie synthétique qui met en évidence l’équilibre — prérequis indispensable, point de départ des travaux, mais jamais une preuve de justesse.',
    followUp: 'Quelles erreurs peuvent exister alors que la balance reste parfaitement équilibrée ?',
    grading: [
      'Définition complète : totaux, soldes, par compte.',
      'Trois usages : équilibre, états financiers, contrôle.',
      'Chaîne journal → grand livre → balance située.',
      'Limite explicitée : équilibre n’est pas exactitude.',
    ],
  },
  {
    id: 'qc-042',
    job: 'revision',
    category: 'definitions',
    difficulty: 2,
    skill: 'Grand livre et balance',
    question: 'La différence entre le grand livre et la balance, et à quoi sert chacun ?',
    expectedAnswer:
      'Le grand livre est l’ensemble des comptes individuels, avec le détail de toutes les écritures qui les ont mouvementés : pour un compte donné, chaque ligne avec sa date, son libellé, son journal d’origine et son montant. La balance est la synthèse : un compte, une ligne, avec cumuls et soldes. Le grand livre sert à retracer l’historique d’un compte — remonter une écriture, un justificatif, un renvoi ; la balance sert à la vue d’ensemble et aux contrôles de cohérence. Le réviseur navigue entre les deux : balance pour repérer, grand livre pour comprendre, pièces pour prouver. Les deux sont extraits du même ERP — ce sont deux lectures de la même base.',
    reasoning:
      'Vérifie la maîtrise de la chaîne comptable sous l’angle de la révision. Le candidat doit expliquer les deux niveaux de lecture — détail et synthèse — et surtout le usage croisé par le réviseur : la balance comme radar, le grand livre comme loupe. La confusion des deux révèle un candidat qui n’a travaillé que sur papier ou pas du tout.',
    commonErrors: [
      'Présenter le grand livre comme un récapitulatif de soldes.',
      'Oublier que le grand livre conserve la trace du journal d’origine de chaque écriture.',
      'Ne pas relier les deux outils à la démarche du réviseur.',
      'Ignorer les grand livres auxiliaires (clients/fournisseurs) et leur réconciliation avec les comptes généraux.',
    ],
    oralShort:
      'Le grand livre, c’est le détail : chaque compte avec toutes ses écritures, dates, libellés, montants. La balance, c’est la synthèse : un compte, une ligne, cumuls et soldes. Le grand livre sert à retracer l’historique d’un compte, la balance à avoir la vue d’ensemble. En révision, je pars de la balance pour repérer, je descends au grand livre pour comprendre, puis aux pièces pour prouver.',
    oralLong:
      'Par définition, le grand livre et la balance sont deux lectures de la même comptabilité : le détail et la synthèse. L’objectif de chacun diffère. Le grand livre rassemble tous les comptes individualisés, avec l’intégralité des écritures qui les concernent : pour chaque ligne, la date, le libellé, le montant, et le journal d’origine — c’est la mémoire fine. La balance condense : un compte, une ligne, avec les cumuls de débits et de crédits et le solde — c’est la vue d’ensemble. La démarche du réviseur articule les deux : je pars de la balance — je repère les comptes au mouvement ou au solde inhabituel ; je descends au grand livre — je comprends la composition du compte, quelles écritures expliquent la variation ; je termine sur les pièces — je prouve. Par exemple, un compte 613 stable trois ans qui double : la balance donne l’alerte, le grand livre montre que la moitié vient d’un seul fournisseur nouveau, la pièce — le contrat — explique l’indexation ou révèle l’anomalie. En conclusion : balance pour repérer, grand livre pour comprendre, pièces pour prouver — trois niveaux de zoom d’un même travail.',
    followUp: 'Comment tu réconcilies le grand livre auxiliaire clients avec le compte général 411 ?',
    grading: [
      'Grand livre = détail des écritures par compte ; balance = synthèse.',
      'Usages différenciés : trace historique vs vue d’ensemble.',
      'Démarche du réviseur : balance → grand livre → pièces.',
      'Notion d’auxiliaires et de réconciliation évoquée.',
    ],
  },
  {
    id: 'qc-043',
    job: 'revision',
    category: 'procedures',
    difficulty: 2,
    skill: 'Programme de travail',
    question: 'C’est quoi un programme de travail en révision, et comment tu l’utilises ?',
    expectedAnswer:
      'Le programme de travail est la liste structurée des diligences à réaliser sur un cycle ou un compte : objectifs du contrôle, travaux précis, seuils et échantillons, renvois vers les feuilles de travail, budget de temps. Il découle de la prise de connaissance du client et de l’évaluation des risques — plus le risque estimé est élevé, plus les diligences sont étendues. Il se construit à partir des programmes standardisés de la méthodo du cabinet, adaptés au contexte. Utilisation : on suit les étapes une à une, on documente sur les feuilles de travail référencées, on trace l’avancement et le temps passé, et le senior revue les feuilles — le programme devient la preuve de l’exhaustivité des travaux. Le contenu dépend de la méthodologie du cabinet ; les normes d’exercice professionnel fixent le cadre, pas la mise en forme.',
    reasoning:
      'Vérifie la compréhension de la machinerie de mission. Le point important : le programme n’est pas un formulaire administratif mais la traduction des risques en travaux — l’adaptation au client est la valeur ajoutée. Les marqueurs de terrain : renvois, budget/temps, revue par le senior, programmes standards du cabinet adaptés. La distinction normes/méthodologie interne clôt la réponse.',
    commonErrors: [
      'Traiter le programme comme une checklist administrative figée, identique pour tous les clients.',
      'Oublier le lien direct avec l’évaluation des risques.',
      'Ne pas documenter l’avancement ni les renvois vers les feuilles de travail.',
      'Confondre les normes professionnelles et la méthodologie propre au cabinet.',
    ],
    oralShort:
      'Le programme de travail, c’est la traduction des risques en diligences : objectifs, travaux précis, seuils, échantillons, renvois vers les feuilles, budget de temps. Il part des programmes standards du cabinet, adaptés au client selon les risques identifiés. En mission, je le suis pas à pas, je documente chaque feuille, je trace l’avancement — et le senior le revue. Les normes fixent le cadre, la méthodo du cabinet fixe la forme.',
    oralLong:
      'Par définition, le programme de travail est le plan de mission décliné cycle par cycle : la liste ordonnée des contrôles à effectuer pour couvrir les risques identifiés. L’objectif est l’exhaustivité maîtrisée : que rien d’important ne soit oublié, dans un budget de temps réaliste. La démarche : après la prise de connaissance et l’évaluation des risques, on adapte le programme standard du cabinet — on renforce les cycles à risque, on allège ceux déjà couverts par des contrôles fiables ; chaque diligence renvoie vers une feuille de travail indexée ; l’avancement et le temps se tracent ; en fin de mission, la revue hiérarchique s’appuie sur le programme pour vérifier que tout est couvert et documenté. Par exemple, sur un cycle fournisseurs jugé risqué, le programme passe d’un sondage simple à un test d’exhaustivité des charges complété d’un cut-off renforcé. Ce qu’il faut bien distinguer : les normes d’exercice professionnel fixent le cadre des diligences ; la méthodologie du cabinet — ses programmes, ses index, ses marque de vérification — fixe la mise en forme, et elle varie d’un cabinet à l’autre. En conclusion : le programme est le pont entre le risque et la preuve — le suivre, le documenter, le faire revuer, c’est la colonne vertébrale de la mission.',
    followUp: 'Si tu identifies en cours de mission un risque non prévu au programme, tu fais quoi ?',
    grading: [
      'Définition : traduction des risques en diligences documentées.',
      'Adaptation au client, programmes standards ≠ checklist figée.',
      'Usage réel : renvois, avancement, budget, revue du senior.',
      'Distinction normes professionnelles / méthodologie cabinet.',
    ],
  },
  {
    id: 'qc-044',
    job: 'revision',
    category: 'justificatifs',
    difficulty: 2,
    skill: 'Sélection d’échantillons',
    question: 'Sur un test de détail, comment tu choisis les factures que tu vérifies ?',
    expectedAnswer:
      'La sélection dépend de l’objectif du test et du risque, jamais d’un chiffre unique. Méthode usuelle : traiter de façon exhaustive les éléments à fort montant et à risque — au-dessus d’un seuil calculé en fonction du seuil de signification — ; sonder le résiduel par tirage aléatoire ou sondage monétaire, qui privilégie les gros montants avec une probabilité proportionnelle ; et cibler des éléments spécifiques à risque : transactions inhabituelles, parties liées, opérations autour de la clôture pour le cut-off, fournisseurs nouveaux, écritures manuelles d’OD. Le tout documenté : méthode, population, taille, résultat. Aucune règle universelle sur la taille d’échantillon : elle découle du risque estimé et de la méthodologie du cabinet. En pratique, les outils de mission automatisent la sélection — le réviseur reste juge de la population testée.',
    reasoning:
      'Vérifie la compréhension du sondage en révision : exhaustive au-dessus du seuil + aléatoire/monétaire sur le résiduel + ciblé sur le risque. Le piège : réciter un pourcentage ou un nombre de pièces magique. La mention des éléments spécifiques — cut-off, OD, parties liées — signale la vraie pratique. La documentation de la sélection clôt.',
    commonErrors: [
      'Citer un nombre de pièces fixes valable pour tout test.',
      'Sélectionner les factures les plus faciles à obtenir plutôt que représentatives.',
      'Oublier les éléments spécifiques à risque (cut-off, OD, parties liées).',
      'Ne pas documenter la méthode de sélection retenue.',
    ],
    oralShort:
      'Trois strates : l’exhaustif au-dessus d’un seuil calé sur la significativité ; le sondage sur le résiduel — aléatoire ou monétaire, ce qui favorise les gros montants ; et le ciblé risque : opérations autour de la clôture, écritures manuelles, parties liées, fournisseurs nouveaux. La taille d’échantillon découle du risque, pas d’un chiffre magique — et la sélection se documente.',
    oralLong:
      'Par définition, un test de détail vise à collecter des éléments probants sur des opérations précises : la sélection conditionne la valeur de la preuve. L’objectif est de maximiser la couverture du risque pour un coût raisonnable. La démarche usuelle en trois strates. Première strate : l’exhaustif sur les éléments significatifs — tout ce qui dépasse un seuil calculé à partir du seuil de signification est testé une à une. Deuxième strate : le sondage sur le résiduel — tirage aléatoire pour la représentativité, ou sondage monétaire où la probabilité de tirage est proportionnelle au montant ; les outils de mission automatisent ce tirage. Troisième strate : le ciblé risque — je force l’inclusion des transactions inhabituelles, des opérations autour de la clôture pour le cut-off, des écritures manuelles d’OD, des parties liées, des fournisseurs apparus en cours d’exercice. Par exemple, sur un compte de 400 factures dont 12 dépassent le seuil : les 12 en exhaustif, 25 tirées au sondage monétaire, plus toutes les factures des 10 derniers jours de décembre. Aucune règle universelle sur la taille — elle dépend du risque estimé et de la méthodologie du cabinet. En conclusion : exhaustif au-dessus du seuil, sondé en dessous, ciblé sur le risque, documenté partout.',
    followUp: 'Ton échantillon de 25 factures contient une erreur: comment tu détermines s’il faut étendre les tests ?',
    grading: [
      'Trois strates : exhaustif/seuil, sondage aléatoire ou monétaire, ciblé risque.',
      'Seuil fonction du seuil de signification, pas d’un montant magique.',
      'Éléments spécifiques cités : cut-off, OD, parties liées.',
      'Documentation de la méthode et de la population.',
    ],
  },
  {
    id: 'qc-045',
    job: 'revision',
    category: 'definitions',
    difficulty: 2,
    skill: 'Revue analytique',
    question: 'La revue analytique, c’est quoi ? Donne-moi des exemples concrets de ce que tu contrôles.',
    expectedAnswer:
      'La revue analytique est l’examen des cohérences et des évolutions entre des données comptables et des données attendues, pour identifier ce qui détonne. Outils : ratios et soldes intermédiaires, comparaison aux exercices précédents et aux budgets, corrélations physiques-comptables. Exemples concrets : marge commerciale mensuelle contre historique — un mois qui détonne oriente les tests ; charges variables rapportées au chiffre d’affaires — transport, sous-traitance, commissions ; provision de congés payés rapportée aux effectifs et au rythme des congés ; TVA collectée contre chiffre d’affaires TTC ; rotation des stocks ; masse salariale contre effectifs moyens ; loyers contre surfaces occupées. Une variation inhabituelle ne conclut pas : elle génère des hypothèses qui doivent être confirmées par des éléments probants — explication du client corroborée par pièces ou sondage ciblé.',
    reasoning:
      'Question de culture de révision : le candidat doit définir la revue analytique comme générateur d’hypothèses, pas comme preuve. Les exemples concrets — et non théoriques — font la valeur de la réponse : marge mensuelle, charges variables/CA, congés payés/effectifs, TVA/CA. La boucle « variation → hypothèse → corroboration » est le cœur attendu.',
    commonErrors: [
      'Présenter la revue analytique comme une preuve en soi, sans corroboration.',
      'Se limiter à des définitions sans exemples opérationnels.',
      'Comparer les montants en absolu sans ratio ni tendance.',
      'Accepter l’explication orale du client sans pièce.',
    ],
    oralShort:
      'La revue analytique, c’est l’examen des cohérences : ratios, tendances, corrélations, comparé à l’historique et au budget. Concrètement : marge mensuelle contre historique, charges variables rapportées au CA, provision de congés contre effectifs, TVA collectée contre CA TTC, rotation des stocks. Une variation inhabituelle ne conclut pas : elle génère une hypothèse à corroborer par pièces ou sondage.',
    oralLong:
      'Par définition, la revue analytique consiste à évaluer des informations financières en étudiant leurs cohérences plausibles entre elles : ratios, tendances, corrélations avec des données non comptables. L’objectif : identifier les zones inhabituelles pour orienter les tests de détail — c’est un radar, pas une preuve. Ma panoplie concrète : la marge commerciale mois par mois contre l’historique et le budget — un creux ou un pic devient une question ; les charges variables — transport, sous-traitance, commissions — rapportées au chiffre d’affaires, qui doivent rester dans un couloir ; la provision de congés payés confrontée aux effectifs et aux droits acquis ; la TVA collectée contre le chiffre d’affaires TTC par taux ; la rotation des stocks par famille ; la masse salariale contre les effectifs moyens et les hausses de salaires. La démarche est une boucle : j’observe une variation inhabituelle, je formule des hypothèses — effet prix, mix, erreur d’imputation, événement exceptionnel — je demande l’explication du client, et je la corrobore : pièce, contrat, ou sondage ciblé sur les montants qui expliquent l’écart. Par exemple, des frais de sous-traitance qui doublent à production constante : hypothèses externalisation, tarifs, erreur — jusqu’à preuve. En conclusion : la revue analytique transforme des chiffres en questions — c’est la boussole des tests de détail, jamais leur remplaçant.',
    followUp: 'Ton ratio transport/CA dérive de trois points : quelles hypothèses tu testes en premier ?',
    grading: [
      'Définition : cohérences, ratios, tendances — radar orientant les tests.',
      'Exemples concrets et variés (marge, charges/CA, congés, TVA, rotation).',
      'Boucle hypothèse → corroboration par éléments probants.',
      'Statut clair : indicateur, pas preuve isolée.',
    ],
  },
  {
    id: 'qc-046',
    job: 'revision',
    category: 'procedures',
    difficulty: 3,
    skill: 'Test de détail sur un compte de charges',
    question: 'Tu révises le compte 613 « Locations ». Déroule ta démarche complète.',
    expectedAnswer:
      'D’abord cadrer : feuille de travail rapprochée de la balance — solde d’ouverture, mouvements, solde de clôture ; liste des contrats de location actifs. Ensuite contrôler : exhaustivité — tous les contrats sont-ils comptabilisés, y compris les locations verbales ou les avenants ; réalité et exactitude — contrats, factures, preuves de paiement sur échantillon ; cohérence analytique — loyer mensuel × 12 à comparer au solde, indexation vérifiée au contrat ; cut-off — loyers payés d’avance en CCA, loyers dus non payés en charges à payer ; imputation — attention au crédit-bail : en comptes sociaux français, les loyers de crédit-bail restent en charges (compte dédié) alors qu’en IFRS 16 le contrat se capitalise en droit d’utilisation — signaler le référentiel ; TVA et occurrences — loyers et charges refacturées. Documenter la conclusion : compte justifié, écart éventuel, incidence. La feuille synthétise : source, travaux, conclusion, renvois.',
    reasoning:
      'Cas d’espèce type de l’entretien technique de révision : le candidat doit dérouler la logique — cadrer, contrôler, conclure — sur un compte précis. Les marqueurs de maîtrise : la feuille de travail rapprochée de la balance, le contrôle analytique loyer × 12, le cut-off, et surtout le distinguo crédit-bail PCG/IFRS 16 qui teste la conscience référentielle. La documentation de la conclusion est le minimum attendu de tout junior.',
    commonErrors: [
      'Se lancer dans le détail des factures sans cadrer le solde avec la balance.',
      'Oublier le contrôle de cohérence simple : loyer mensuel × 12.',
      'Passer à côté du cut-off (CCA et loyers dus).',
      'Confondre le traitement du crédit-bail en comptes sociaux PCG et en IFRS 16.',
    ],
    oralShort:
      'Je cadre : feuille de travail rapprochée de la balance — solde d’ouverture, mouvements, solde final — et liste des contrats. Je contrôle : exhaustivité des contrats, échantillon de factures et preuves de paiement, cohérence loyer × 12 contre le solde, indexations, cut-off — loyers d’avance en CCA, loyers dus en charges à payer. J’attire l’œil sur le crédit-bail : charges en comptes sociaux PCG, capitalisation en IFRS 16. Et je documente la conclusion.',
    oralLong:
      'Par définition, réviser le compte 613, c’est collecter des éléments probants suffisants sur l’exactitude, l’exhaustivité et le rattachement des charges de location. L’objectif : conclure sur la justification du solde. Ma démarche en trois blocs. Le cadrage d’abord : feuille de travail qui rapproche le solde d’ouverture, les mouvements et le solde de clôture de la balance — la base est saine ; inventaire des contrats de location en cours, y compris les petits contrats oraux. Les contrôles ensuite : sur échantillon — contrats, factures, preuves de paiement, en vérifiant l’imputation ; en analytique — le loyer mensuel multiplié par douze, corrigé des indexations et des entrées-sorties de contrats, doit rejoindre le solde : tout écart s’explique ; en cut-off — un loyer payé le 1er décembre pour le trimestre suivant part en CCA, un loyer de décembre payable en janvier reste en charges avec la charge à payer correspondante. Point de vigilance référentielle : le crédit-bail — en comptes sociaux français, les loyers demeurent en charges ; en IFRS 16, le contrat se capitalise en actif droit d’utilisation : selon le référentiel du dossier, le traitement change du tout au tout. La conclusion enfin : documentée sur la feuille — compte justifié, ou écart chiffré avec incidence. Par exemple, sur mon stage fictif, un loyer indexé non revalorisé avait été repéré par la simple multiplication loyer × 12. En conclusion : cadrer, contrôler sous trois angles — détail, analytique, cut-off —, conclure en documentant.',
    followUp: 'Le locataire sort en mars mais continue de payer un loyer après : qu’est-ce que ça t’évoque ?',
    grading: [
      'Cadrage : feuille de travail rapprochée de la balance, inventaire des contrats.',
      'Trois angles de contrôle : échantillon pièces, analytique loyer × 12, cut-off.',
      'Vigilance crédit-bail avec signal référentiel PCG/IFRS 16.',
      'Conclusion documentée avec renvois.',
    ],
  },
  {
    id: 'qc-047',
    job: 'revision',
    category: 'anomalies',
    difficulty: 3,
    skill: 'Traitement d’une variation inhabituelle',
    question: 'En revue analytique, les frais de sous-traitance ont doublé alors que la production est stable. Tu fais quoi ?',
    expectedAnswer:
      'D’abord valider les données : recalculer le ratio, vérifier le périmètre — nouvelle entité consolidée, retraitement, changement de comptabilité analytique — et l’imputation : des travaux immobilisables passés en charges, ou l’inverse, modifient la donnée brute. Ensuite formuler les hypothèses : externalisation d’un atelier internalisé, hausse tarifaire du sous-traitant, reprise de retouches qualité, erreur d’imputation, doublons, voire manipulation. Puis corroborer : explication du client par écrit, mais surtout pièces — nouveaux contrats de sous-traitance, factures des plus gros montants, bons de livraison comparés aux volumes produits, évolution des effectifs internes de l’atelier concerné. Enfin conclure : explication corroborée → la revue analytique est documentée et close ; explication non corroborée → extension des tests, remontée au senior, anomalie potentielle à chiffrer. Jamais d’acceptation d’une explication orale seule.',
    reasoning:
      'Scénario réaliste de revue analytique avec vraie variation. Le recruteur veut la démarche complète : vérifier la donnée avant de l’interpréter, hypothèses multiples, corroboration par pièces — pas la première explication venue. La distinction entre expliquer et prouver est le cœur de la question ; l’escalade au senior et la documentation ferment la réponse.',
    commonErrors: [
      'Accepter la première explication orale du client sans pièce.',
      'Interpréter sans avoir vérifié le périmètre et l’imputation des données.',
      'Sauter l’étape hypothèses et tester au hasard.',
      'Ne pas documenter la conclusion de la revue analytique.',
    ],
    oralShort:
      'Je vérifie d’abord la donnée : périmètre, recalcul, imputation — des travaux immobilisables passés en charges faussent le ratio. Ensuite les hypothèses : externalisation, hausse tarifaire, retouches qualité, erreur, doublon. Puis je corrobore : nouveaux contrats, factures des plus gros montants, volumes produits, effectifs internes. Si l’explication tient avec pièces, je documente et je clos ; sinon, j’étends les tests et je remonte au senior.',
    oralLong:
      'Par définition, une variation inhabituelle en revue analytique est un signal, pas une conclusion : elle déclenche une démarche d’investigation. L’objectif : obtenir une explication corroborée par des éléments probants, ou qualifier une anomalie. Ma démarche en quatre temps. Temps un, valider la donnée : je recalcule le ratio, je vérifie le périmètre — consolidation, changement de découpage analytique — et l’imputation : des travaux qui auraient dû être immobilisés mais passés en 6xx gonflent la charge sans raison économique. Temps deux, formuler les hypothèses : externalisation d’un atelier, hausse tarifaire du sous-traitant, reprise de retouches qualité sur une série, erreur d’imputation, doublons de factures, jusqu’à la manipulation — je reste factuel. Temps trois, corroborer : l’explication du client se collecte par écrit, mais elle ne suffit pas ; je demande les nouveaux contrats de sous-traitance, je teste en détail les factures les plus significatives, je compare les volumes livrés par les sous-traitants à la production, je regarde l’évolution des effectifs internes — une externalisation réelle se voit dans les deux compteurs : charges externes en hausse, masse salariale interne en baisse. Temps quatre, conclure : explication corroborée → revue documentée, close ; non corroborée → extension des tests, remontée au senior, anomalie potentielle à chiffrer contre le seuil. Par exemple, sur mon stage fictif, un doublement apparent venait simplement d’un atelier passé en sous-traitance avec baisse équivalente de la masse salariale — les deux pièces ont clos le point en une heure. En conclusion : valider, hypothesiser, corroborer, conclure — l’explication n’a de valeur que prouvée.',
    followUp: 'Le client te dit « c’est une commande exceptionnelle » mais ne retrouve pas le contrat : quelle suite ?',
    grading: [
      'Validation de la donnée avant interprétation (périmètre, imputation).',
      'Hypothèses multiples, y compris immobilisable et doublon.',
      'Corroboration par pièces, jamais explication orale seule.',
      'Issue documentée : close ou escaladée, avec extension des tests.',
    ],
  },
  {
    id: 'qc-048',
    job: 'revision',
    category: 'referentiels',
    difficulty: 3,
    skill: 'CGNC marocain et PCG français',
    question: 'Tu as appris la comptabilité au Maroc, tu postules en France : qu’est-ce qui change concrètement entre le CGNC et le PCG ?',
    expectedAnswer:
      'Les socles sont communs : partie double, classes de comptes de même esprit — 1 à 5 pour le bilan, 6 et 7 charges-produits —, séparation des exercices, prudence, obligations d’inventaire. Les différences concrètes : les états de synthèse — le Maroc édite un CPC, un ESG détaillant les soldes intermédiaires de gestion normalisés, un tableau de financement et une ETIC ; la France un compte de résultat, une annexe et la liasse fiscale, le tableau de flux restant surtout un outil de gestion en comptes sociaux ; la numérotation, proche mais distincte — notamment la classe 8, résultats au Maroc, comptes spéciaux en France ; la fiscalité intégrée au référentiel marocain dès la comptabilisation, alors qu’en France la liasse opère les retraitements après comptabilité ; la TVA — taux 20/14/10/7 % au Maroc contre 20/10/5,5/2,1 % en France, TVA marocaine sur l’encaissement par défaut ; les amortissements dégressifs aux coefficients différents ; et le cadre légal — code de commerce français, loi comptable marocaine. Posture attendue : dire ce qu’on maîtrise déjà, ce qu’on vérifie en arrivant — plan de comptes de l’entité, pratiques de clôture — et éviter d’appliquer mécaniquement les réflexes d’un référentiel à l’autre.',
    reasoning:
      'Question d’adaptabilité pour profils formés au CGNC — fréquents en cabinet international. Le recruteur veut : une reconnaissance des socles communs, une liste de différences concrètes et vérifiables — états de synthèse, classe 8, TVA, fiscalité intégrée — et une posture d’humilité méthodique : le réflexe marocain ne s’applique pas mécaniquement en France. Un candidat qui répond « c’est pareil » ou qui détaille sans nuance des règles approximatives perd la crédibilité.',
    commonErrors: [
      'Dire « c’est exactement pareil » en négligeant les différences d’états de synthèse.',
      'Appliquer les taux de TVA marocains en France ou inversement.',
      'Confondre le CPC marocain et le compte de résultat français sans noter l’ESG et l’ETIC.',
      'Ignorer que la fiscalité marocaine s’intègre plus directement à la comptabilisation.',
    ],
    oralShort:
      'Le socle est commun : partie double, classes 1 à 7 de même esprit, séparation des exercices, prudence. Les différences concrètes : les états — au Maroc, CPC, ESG, tableau de financement, ETIC ; en France, compte de résultat, annexe, liasse fiscale ; la classe 8, résultats au Maroc, comptes spéciaux en France ; la TVA — 20/14/10/7 % là-bas, 20/10/5,5/2,1 % ici, encaissement par défaut au Maroc ; et la fiscalité intégrée plus tôt dans la comptabilité marocaine. Ma posture : je garde les réflexes de fond, je re-vérifie la forme.',
    oralLong:
      'Par définition, le CGNC marocain et le PCG français sont deux référentiels nationaux distincts, issus de traditions voisines. L’objectif de la question : mesurer ma capacité d’adaptation, pas ma mémoire. Le socle d’abord, parce qu’il est réel : partie double, plan en classes — 1 à 5 au bilan, 6 et 7 au résultat —, rattachement des charges et produits à l’exercice, prudence, inventaire physique obligatoire. Les différences concrètes ensuite, celles que je vérifie en arrivant : les états de synthèse — le Maroc produit un CPC, un ESG qui détaille les soldes intermédiaires normalisés, un tableau de financement et une ETIC ; la France produit un compte de résultat et une annexe, avec la liasse fiscale et ses retraitements — la fiscalité marocaine s’intègre plus en amont dans les écritures ; la classe 8 — comptes de résultats au Maroc, comptes spéciaux en France ; la TVA — taux de 20, 14, 10 et 7 % au Maroc, avec l’exigibilité sur l’encaissement par défaut, contre 20, 10, 5,5 et 2,1 % en France avec l’option débits ; les coefficients de l’amortissement dégressif, propres à chaque législation. Ma posture de candidat : j’annonce ce que je maîtrise d’emblée — la mécanique, les principes — et ce que je re-vérifie systématiquement en arrivant dans une entité française : le plan de comptes interne, les pratiques de clôture, les échéances déclaratives. Par exemple, sur mon stage fictif en cabinet international, la première semaine consistait à relire la liasse d’une société française en regard du CPC marocain pour caler les correspondances. En conclusion : mêmes principes, formes différentes — la compétence n’est pas de tout connaître, mais de savoir exactement ce qu’il faut re-vérifier.',
    followUp: 'Un dossier marocain à réviser avec un outil calé sur le PCG : sur quoi tu fais attention en premier ?',
    grading: [
      'Socles communs reconnus sans nivellement (partie double, classes, principes).',
      'Différences concrètes et vérifiables : états de synthèse, classe 8, TVA, fiscalité intégrée.',
      'Posture méthodique : re-vérifier la forme, garder les réflexes de fond.',
      'Aucune application mécanique d’un référentiel à l’autre.',
    ],
  },
  {
    id: 'qc-049',
    job: 'revision',
    category: 'calculs',
    difficulty: 3,
    skill: 'Contrôle de la marge commerciale',
    question: 'Ventes de marchandises 1 500 000, achats de marchandises 900 000, stock initial 120 000, stock final 150 000. Calcule la marge commerciale et son taux, et dis-moi ce que tu en déduis.',
    expectedAnswer:
      'Coût d’achat des marchandises vendues = achats + stock initial − stock final = 900 000 + 120 000 − 150 000 = 870 000. Marge commerciale = ventes − coût d’achat des marchandises vendues = 1 500 000 − 870 000 = 630 000. Taux de marge sur ventes — dit taux de marque — = 630 000 / 1 500 000 = 42 %. Attention au vocabulaire : le taux de marge rapporte la marge au coût d’achat des marchandises vendues — ici 630 000 / 870 000 ≈ 72,4 % — dire « marge à 42 % » sans préciser la base est ambigu. Démarche de révision : comparer le taux de marque à l’exercice précédent et au budget ; une dérive — disons de 38 à 42 % — déclenche les hypothèses : mix produits, prix de vente, remises comptabilisées en avoirs, erreurs de stock, achats non comptabilisés. Chaque hypothèse se corrobore par pièces — grilles tarifaires, bons de retour, inventaire.',
    reasoning:
      'Petit calcul à double détente : le chiffre est simple (870 000, 630 000, 42 %) mais le vocabulaire piège — taux de marge vs taux de marque. Le candidat doit poser la formule du coût d’achat des marchandises vendues sans erreur de signe sur les stocks. La seconde moitié de la réponse — interprétation en révision avec hypothèses corroborées — fait passer le point technique en compétence de réviseur.',
    commonErrors: [
      'Soustraire le stock initial au lieu de l’ajouter dans le coût d’achat des marchandises vendues.',
      'Confondre taux de marge (sur coût) et taux de marque (sur ventes) sans préciser la base.',
      'Annoncer un jugement de performance sans comparaison à l’historique ou au budget.',
      'Oublier que le stock final intègre la variation de stocks du compte de résultat.',
    ],
    oralShort:
      'Coût d’achat des marchandises vendues : 900 000 plus 120 000 moins 150 000 — 870 000. Marge : 1 500 000 moins 870 000 — 630 000. Taux de marque sur ventes : 42 %. En révision, je compare à l’an dernier et au budget : une dérive de quatre points appelle des hypothèses — mix, prix, remises, stock — et des pièces pour corroborer.',
    oralLong:
      'Par définition, la marge commerciale mesure l’écart entre les ventes de marchandises et leur coût d’achat — un soldé de gestion au cœur de la revue analytique du cycle ventes-achats-stocks. L’objectif du calcul : obtenir un indicateur comparable dans le temps pour détecter les évolutions inhabituelles. La démarche est séquentielle. Premier pas, le coût d’achat des marchandises vendues : achats de l’exercice, augmentés du stock initial qui a été vendu, diminués du stock final qui ne l’a pas été : 900 000 plus 120 000 moins 150 000, soit 870 000. Deuxième pas, la marge : ventes moins ce coût — 1 500 000 moins 870 000, soit 630 000. Troisième pas, le taux : rapporté aux ventes — c’est le taux de marque — 630 000 divisés par 1 500 000, 42 % ; rapporté au coût d’achat, ce serait le taux de marge, environ 72,4 % — je précise toujours la base, c’est la source de malentendus numérotés un en entretien. Ensuite seulement l’interprétation de réviseur : 42 % n’a de sens que comparé — à l’exercice précédent, au budget, au secteur. Une progression de 38 à 42 % devient une question : mix produits plus rentables, hausses de prix réussies, remises en baisse — ou stock final surévalué, achats manquants, avoirs non saisis. Chaque hypothèse se confirme par pièces : grilles de prix, inventaire physique, journal des avoirs. En conclusion : 870 000, 630 000, 42 % — un calcul simple, un vocabulaire précis, et une lecture qui ne vaut que comparée et corroborée.',
    followUp: 'Le taux de marque passe de 38 à 42 % sans changement de politique de prix : tes hypothèses ?',
    grading: [
      'Coût d’achat des marchandises vendues exact : 870 000 (signes des stocks corrects).',
      'Marge exacte : 630 000 ; taux de marque 42 %.',
      'Vocabulaire maîtrisé : marge vs marque, base précisée.',
      'Interprétation de révision : comparaison, hypothèses, corroboration.',
    ],
  },
  {
    id: 'qc-050',
    job: 'revision',
    category: 'risques-controles',
    difficulty: 4,
    skill: 'Contrôles de cohérence avant publication des comptes',
    question: 'Avant la publication des comptes annuels, tes derniers contrôles de cohérence, ce sont quoi ?',
    expectedAnswer:
      'Les contrôles de bouclage : la balance définitive est équilibrée, verrouillée, et chaque compte a été revu — notamment les comptes d’attente soldés ; la liasse ou les états financiers se rapprochent ligne à ligne de la balance — chaque montant publié retrouve son compte ; les articulations se vérifient : le tableau des immobilisations et des amortissements concorde avec les dotations du compte de résultat ; la variation des capitaux propres s’explique par le résultat et les mouvements propres — affectation, distributions, apports ; l’annexe est cohérente avec les comptes — méthodes, effectifs, échéances, engagements hors bilan ; les contrôles croisés de vraisemblance : TVA contre chiffre d’affaires, masse salariale contre effectifs et DSN, impôt contre résultat comptable après retraitements ; la revue des événements postérieurs à la clôture jusqu’à la signature ; et l’explication documentée de toute variation inhabituelle repérée en revue analytique. En contexte de commissariat, ces diligences s’inscrivent dans les normes d’exercice professionnel — en entreprise, elles constituent le contrôle qualité interne de l’arrêté.',
    reasoning:
      'Question de bouclage qui distingue celui qui a déjà signé des comptes de celui qui n’a fait que saisir. Les attendus : rapprochement liasse/balance, articulations (tableau des amortissements vs dotations), explication de la variation des capitaux propres, cohérence annexe, événements postérieurs. Les contrôles croisés de vraisemblance — TVA/CA, paie/effectifs — ajoutent le vernis de praticien. La distinction commissariat/entreprise sur la source normative est valorisée.',
    commonErrors: [
      'Confondre publication et simple arrêté de balance sans rapprochement ligne à ligne.',
      'Oublier la conciliation entre tableau des amortissements et dotations du résultat.',
      'Ne pas expliquer la variation des capitaux propres hors résultat.',
      'Ignorer la revue des événements postérieurs à la clôture.',
    ],
    oralShort:
      'Mes contrôles de bouclage : balance définitive équilibrée et verrouillée, comptes d’attente soldés ; rapprochement ligne à ligne entre la liasse et la balance ; articulations — tableau des amortissements contre dotations, variation des capitaux propres expliquée par le résultat et les mouvements propres ; cohérence de l’annexe ; contrôles croisés TVA/CA, paie/effectifs ; et revue des événements postérieurs jusqu’à la signature.',
    oralLong:
      'Par définition, les contrôles de cohérence pré-publication vérifient que l’ensemble des états financiers raconte la même histoire que la comptabilité, sans décalage. L’objectif : éliminer les incohérences de construction avant la diffusion aux tiers. Ma liste de bouclage, dans l’ordre. Un : la balance définitive — équilibrée, verrouillée, tous les comptes revus, les comptes d’attente soldés et justifiés. Deux : le rapprochement liasse/balance — chaque ligne publiée retrouve son compte et son montant ; c’est un contrôle mécanique mais il piège les recopies manuelles. Trois : les articulations — le tableau des immobilisations et des amortissements doit concorder avec les dotations du compte de résultat ; la variation des capitaux propres s’explique intégralement par le résultat, les affectations, les distributions et les apports ; le résultat fiscal part du résultat comptable avec des retraitements tracés. Quatre : la cohérence de l’annexe — méthodes comptables effectivement appliquées, effectif, échéances des créances et dettes, engagements hors bilan. Cinq : les contrôles croisés de vraisemblance — TVA collectée contre chiffre d’affaires TTC, masse salariale contre effectifs et déclarations sociales, impôt contre résultat. Six : la revue des événements postérieurs — tout ce qui est survenu entre la clôture et la signature et qui affecte l’appréciation des comptes. En commissariat, ces diligences s’inscrivent dans les normes d’exercice professionnel ; en entreprise, elles constituent le contrôle qualité de l’arrêté. Par exemple, sur mon stage fictif, un tableau d’amortissement non mis à jour d’une cession faisait apparaître 12 000 de dotations fantômes — repéré précisément par l’articulation. En conclusion : équilibre, rapprochement, articulation, cohérence, vraisemblance, événements — six familles, une seule idée : les comptes publiés doivent être exacts et cohérents entre eux.',
    followUp: 'Quels événements postérieurs à la clôture t’obligeraient à ajuster les comptes avant signature ?',
    grading: [
      'Rapprochement mécanique liasse/balance ligne à ligne.',
      'Articulations : amortissements/dotations, variation des capitaux propres expliquée.',
      'Cohérence annexe et contrôles croisés de vraisemblance.',
      'Revue des événements postérieurs jusqu’à la signature.',
    ],
  },
  {
    id: 'qc-051',
    job: 'revision',
    category: 'referentiels',
    difficulty: 4,
    skill: 'IFRS et comptes sociaux français',
    question: 'Un client applique les IFRS : les principales différences de traitement que tu dois avoir en tête par rapport aux comptes sociaux français ?',
    expectedAnswer:
      'Cadre d’abord : les IFRS sont un référentiel d’objectifs pour les états financiers destinés aux investisseurs, sans plan de comptes imposé ; en Europe, elles sont obligatoires pour les comptes consolidés des sociétés cotées, pas pour les comptes sociaux français — qui restent au PCG. Différences phares à connaître : IFRS 16 sur les contrats de location — capitalisation en droit d’utilisation et dette de loyers, contre charges de loyers en comptes sociaux français ; IAS 16 sur les immobilisations — approche par composants, valeur résiduelle significative, réexamen annuel de la durée et du mode, option de réévaluation ; IAS 36 — dépréciation fondée sur la valeur recouvrable, flux de trésorerie actualisés, test annuel du goodwill ; IFRS 9 — instruments financiers en juste valeur, pertes de crédit attendues, contre la logique de coût historique et de dépréciation constatée du PCG ; IAS 37 — provisions pour obligations probables, sans équivalent des provisions réglementées françaises ; IAS 8 — corrections d’erreurs rétrospectives systématiques. Le message juste : je ne prétends pas tout maîtriser, je connais les grandes logiques et je vérifie le référentiel applicable dossier par dossier.',
    reasoning:
      'Question référentielle de niveau 4 : personne n’attend d’un alternant une encyclopédie IFRS, mais une carte mentale correcte. Les attendus : cadre d’application (consolidé coté vs comptes sociaux PCG), deux ou trois différences expliquées avec leur norme — IFRS 16 et IAS 16 sont les plus parlantes —, et l’honnêteté méthodique finale. Le candidat qui détaille sans borne ou qui confond PCG et IFRS sur le crédit-bail est immédiatement repéré.',
    commonErrors: [
      'Croire que les IFRS s’appliquent à tous les comptes sociaux français.',
      'Confondre IFRS 16 et le traitement du crédit-bail en comptes sociaux PCG.',
      'Présenter les IFRS comme un plan comptable imposé.',
      'Réciter des normes sans expliquer la différence de logique (juste valeur, substance, rétrospectif).',
    ],
    oralShort:
      'Les IFRS, c’est un référentiel d’objectifs pour les investisseurs, obligatoire en Europe pour les comptes consolidés des cotés — les comptes sociaux restent au PCG. Les différences clés : IFRS 16 capitalise les locations en droit d’utilisation, là où les comptes sociaux laissent les loyers en charges ; IAS 16 impose l’approche par composants et le réexamen annuel ; IAS 36 raisonne en valeur recouvrable actualisée ; IFRS 9 en juste valeur et pertes attendues ; IAS 8 corrige les erreurs rétrospectivement. Je connais les logiques, je vérifie le référentiel par dossier.',
    oralLong:
      'Par définition, les IFRS sont un ensemble de normes comptables internationales orientées vers l’information des investisseurs : elles privilégient la substance économique et la juste valeur sur la forme juridique et le coût historique. L’objectif de ma réponse : donner une carte mentale correcte, pas une encyclopédie. Le cadre d’abord : en Europe, les IFRS sont obligatoires pour les comptes consolidés des sociétés cotées ; les comptes sociaux français demeurent au PCG — un même groupe peut donc tenir deux comptabilités de logique différente, avec des passerelles de consolidation. Les différences structurantes ensuite. IFRS 16, la plus visible : tout contrat de location identifiable se capitalise — actif droit d’utilisation, dette de loyers — alors qu’en comptes sociaux français, loyers et crédit-bail restent en charges : l’EBITDA IFRS et le résultat social ne se lisent pas pareil. IAS 16 : approche par composants — chaque élément significatif amorti sur sa propre durée —, valeur résiduelle significative, réexamen annuel de la durée et du mode, option de réévaluation. IAS 36 : dépréciation fondée sur la valeur recouvrable — le plus élevé du prix de vente net et de la valeur d’usage en flux actualisés — avec test annuel du goodwill. IFRS 9 : instruments financiers à la juste valeur et pertes de crédit attendues, contre le coût historique et la dépréciation constatée du PCG. IAS 37 : provisions limitées aux obligations probables et estimables — rien d’équivalent aux provisions réglementées françaises. IAS 8 : corrections d’erreurs rétrospectives systématiques. Ma posture : je connais ces logiques, je sais où vérifier, et je n’improvise jamais un traitement IFRS sans texte. Par exemple, sur mon stage fictif, la passerelle crédit-bail entre comptes sociaux et consolidation IFRS représentait l’écart de retraitement le plus important du groupe. En conclusion : cadre d’application, deux ou trois normes expliquées de fond, et la rigueur de vérifier le référentiel applicable avant tout traitement.',
    followUp: 'Pourquoi le même groupe peut-il afficher un endettement différent en IFRS et en comptes sociaux ?',
    grading: [
      'Cadre d’application correct : consolidé coté vs comptes sociaux PCG.',
      'Deux-trois différences expliquées avec leurs normes (IFRS 16, IAS 16/36, IFRS 9…).',
      'Logique de fond saisie : substance, juste valeur, rétrospectif.',
      'Posture honnête : connaître les axes, vérifier par dossier.',
    ],
  },
  {
    id: 'qc-052',
    job: 'revision',
    category: 'organisation',
    difficulty: 4,
    skill: 'Feuilles de travail et documentation',
    question: 'Tes papiers de travail en mission de révision : ce qu’ils contiennent, et pourquoi c’est si important ?',
    expectedAnswer:
      'Contenu type d’une feuille de travail : en-tête — client, exercice, cycle, index de classement ; traçabilité — préparée par/date, revue par/date ; source des données — balance, grand livre, pièces, avec renvois bidirectionnels vers les autres feuilles ; travaux réalisés — programme ou extrait, avec marques de vérification légendées ; faits relevés — exceptions, écarts, points en suspens ; conclusion — claire, datée, signée. Importance : les papiers prouvent le travail accompli — support de la revue hiérarchique, mémoire pour l’exercice suivant, opposables en cas de contrôle qualité ou de mise en cause ; ils conditionnent la qualité de l’opinion. Règles de bonnes pratiques : conclure chaque feuille — une feuille sans conclusion est une feuille inutile —, tracer la source de chaque chiffre, documenter au moment du travail, jamais après coup de mémoire. En France, les normes professionnelles encadrent la documentation ; chaque méthodologie de cabinet y ajoute ses formats.',
    reasoning:
      'Question d’hygiène professionnelle qui sépare les juniors encadrés des juniors autonomes. Les attendus : structure de feuille (en-tête, préparé/revu, renvois, conclusion), les trois raisons d’être — revue, mémoire, preuve opposable — et les bonnes pratiques (conclure, tracer, documenter à chaud). La référence aux normes professionnelles françaises avec la nuance « méthodo cabinet » clôt sans dogmatisme.',
    commonErrors: [
      'Produire des feuilles sans conclusion ni source des chiffres.',
      'Documenter après coup, de mémoire, une fois la mission finie.',
      'Confondre volume de papier et qualité de la preuve.',
      'Ignorer la fonction de revue hiérarchique et d’opposabilité des papiers.',
    ],
    oralShort:
      'Une bonne feuille de travail, c’est : en-tête client-exercice-cycle, index, préparé par et revu par avec dates, source de chaque chiffre, renvois vers les autres feuilles, travaux avec marques de vérification légendées, et une conclusion claire. Pourquoi c’est vital : ça prouve le travail, ça permet la revue du senior, ça sert de mémoire l’an prochain, et c’est opposable en contrôle qualité. Une feuille sans conclusion est une feuille inutile.',
    oralLong:
      'Par définition, les papiers de travail sont la matérialisation des diligences du réviseur : la preuve que les travaux prévus ont été effectués et comment ils ont conclu. L’objectif est triple : permettre la revue — le senior refait le chemin sans être présent ; assurer la continuité — l’équipe de l’exercice suivant comprend ce qui a été fait et ce qui reste ouvert ; et opposer le travail — en contrôle qualité ou en cas de mise en cause, les papiers défendent l’auditeur. Le contenu suit une structure stable : en-tête avec client, exercice, cycle et index ; zone préparé par/revu par avec dates ; source explicite de chaque chiffre — balance, grand livre, pièce — avec renvois bidirectionnels, la croix de renvoi qui relie la feuille amont et la feuille aval ; description des travaux avec marques de vérification légendées — le fameux tick mark expliqué une fois pour toutes ; exceptions et points en suspens ; conclusion datée et signée. Les règles de bonnes pratiques que je tiens de mes encadrants : conclure chaque feuille — une feuille sans conclusion n’a aucune valeur ; documenter au moment du travail, jamais de mémoire après la sortie ; tracer plutôt que photographier — un tableau de chiffres sans source ne prouve rien. En France, les normes professionnelles encadrent l’exigence de documentation ; chaque cabinet ajoute ses formats et ses index. Par exemple, sur mon stage fictif, le senior refusait toute feuille dont la conclusion manquait, même juste. En conclusion : source, travaux, conclusion, renvois, dates — cinq éléments, une finalité : le papier doit parler tout seul.',
    followUp: 'Le senior relit ta feuille et ne comprend pas d’où sort un chiffre : qu’est-ce que ça t’apprends ?',
    grading: [
      'Structure de feuille complète : en-tête, préparé/revu, renvois, conclusion.',
      'Trois fonctions : revue hiérarchique, mémoire, preuve opposable.',
      'Bonnes pratiques : conclure, tracer la source, documenter à chaud.',
      'Encadrement normatif évoqué avec nuance méthodo cabinet.',
    ],
  },
  {
    id: 'qc-053',
    job: 'revision',
    category: 'justificatifs',
    difficulty: 4,
    skill: 'Pièce justificative manquante',
    question: 'En test de détail, le client ne retrouve pas la pièce justificative d’une facture de 18 000 €. Quelle suite tu donnes ?',
    expectedAnswer:
      'Progression en trois niveaux. Niveau un, la recherche : relance du service demandeur, archives internes, demande de duplicata au fournisseur — c’est lui qui a la facture d’origine ; dans les faits, un fournisseur sérieux renvoie un duplicata sous quinzaine. Niveau deux, les éléments probants alternatifs : preuve du paiement — relevé bancaire, avis de virement, rapprochement avec le compte du fournisseur ; bon de commande et bon de réception — la règle des trois documents reconstituée en partie ; circularisation directe du fournisseur — confirmation du solde ou de la facture ; recoupement analytique — cohérence de la dépense avec les volumes d’activité. Niveau trois, l’évaluation : si aucun élément ne vient corroborer la réalité de la charge, l’écriture est réputée non justifiée — l’écart se documente, se compare au seuil de signification, et remonte au senior ; l’incidence sur l’opinion appartient au signataire, pas au junior. Point de contrôle interne séparé : la disparition de pièces est en soi une faiblesse à signaler, distincte de l’anomalie comptable.',
    reasoning:
      'Situation vécue hebdomadairement en mission. Le recruteur veut la hiérarchie des recours — rechercher, corroborer autrement, escalader — et surtout deux distinctions : pièce manquante ≠ charge fictive (les éléments alternatifs prouvent), et faiblesse de contrôle interne ≠ anomalie comptable. La réserve d’opinion relève du signataire : un junior qui l’annonce seul sort de son rôle.',
    commonErrors: [
      'Conclure immédiatement à une charge fictive parce que la pièce manque.',
      'Oublier la demande de duplicata au fournisseur — le réflexe le plus simple.',
      'Se contenter d’une explication orale du client.',
      'Annoncer soi-même une réserve d’opinion alors que la décision revient au signataire.',
    ],
    oralShort:
      'D’abord chercher : relances internes, archives, duplicata auprès du fournisseur. Ensuite corroborer autrement : preuve de paiement sur relevé, bon de commande et de réception, circularisation du fournisseur, recoupement analytique. Si rien ne confirme la charge : écart documenté, comparé au seuil, remonté au senior — l’incidence sur l’opinion, c’est le signataire qui la décide. Et la disparition de pièces reste une faiblesse de contrôle interne à signaler.',
    oralLong:
      'Par définition, une pièce justificative manquante n’invalidé pas d’office la comptabilisation : elle déclenche une démarche d’éléments probants alternatifs. L’objectif : obtenir une assurance suffisante sur la réalité de la charge, par un autre chemin. Ma progression en trois niveaux. Niveau un, la recherche active : je relance le service demandeur — souvent la pièce est classée ailleurs ; je fais fouiller les archives numériques et papier ; et je demande un duplicata au fournisseur, qui conserve ses propres factures — c’est le réflexe le plus rentable. Niveau deux, la corroboration alternative : la preuve de paiement — relevé bancaire, avis de virement — montre que l’argent est bien sorti vers ce fournisseur ; le bon de commande et le bon de réception reconstituent la réalité de l’opération ; la circularisation directe du fournisseur confirme la facture ou le solde ; le recoupement analytique — cohérence de la dépense avec l’activité — complète le faisceau. Niveau trois, l’évaluation : si, malgré tout, aucun élément ne corrobore la charge, l’écriture est non justifiée — je documente l’écart, je le compare au seuil de signification en l’agrégeant aux autres anomalies relevées, et je remonte au senior : l’incidence sur l’opinion — réserve, refus — appartient au signataire de la mission, pas au membre de l’équipe. Et un point distinct : la disparition de pièces chez le client est une faiblesse de contrôle interne à signaler dans le rapport de contrôle interne, indépendamment de l’anomalie comptable elle-même. Par exemple, sur mon stage fictif, une facture introuvable s’était avérée payée et confirmée par circularisation — la charge était réelle, la faiblesse documentaire restait à signaler. En conclusion : chercher, corroborer autrement, escalader — et toujours séparer la réalité comptable de la qualité du contrôle interne.',
    followUp: 'Le fournisseur confirme la facture par écrit mais le paiement ne se retrouve pas sur les relevés : quelle conclusion ?',
    grading: [
      'Hiérarchie des recours : recherche, duplicata, éléments alternatifs.',
      'Corroboration alternative concrète : paiement, BC/BL, circularisation.',
      'Escalade au senior ; décision d’opinion réservée au signataire.',
      'Faiblesse de contrôle interne signalée séparément.',
    ],
  },
  {
    id: 'qc-054',
    job: 'revision',
    category: 'cas-pratiques',
    difficulty: 5,
    skill: 'Confirmations externes clients',
    question: 'Circularisation clients : sur 12 confirmations envoyées, 6 reviennent avec des écarts, 4 ne répondent pas, 2 sont d’accord. Face aux non-réponses et aux écarts, tu fais quoi ?',
    expectedAnswer:
      'Pour les 2 accords : soldes confirmés, feuilles closes avec la confirmation archivée. Pour les 6 écarts : chaque écart s’analyse et se rapproche — nature des différences : cut-off — facture fin décembre comptabilisée d’un seul côté ; avoir émis non comptabilisé chez nous ou envoyé non reçu ; règlement en transit à la clôture ; litige sur une facture contestée ; erreur d’imputation chez le client ou chez nous. La démarche : reconstituer le solde rapproché client par client — solde comptable, plus ou moins les éléments expliquant la différence — jusqu’à ce que les deux visions coïncident ; tout écart résiduel inexpliqué s’additionne aux anomalies. Pour les 4 non-réponses : relances — second envoi, appel ; à défaut, procédures alternatives : examen des encaissements postérieurs — un règlement de janvier qui solde la créance au 31/12 est un élément probant solide —, lettrage des règlements, bons de livraison et transport, contrats et courriers. Documenter une matrice de confirmation : envoyées, revenues, écarts expliqués, procédures alternatives conclues, anomalies résiduelles — à sommer contre le seuil de signification et remonter au senior. Les non-réponses ne s’ignorent jamais : sans réponse ni alternative, le solde reste non confirmé.',
    reasoning:
      'Cas complet de circularisation, très réaliste. Le recruteur veut : le traitement différencié des trois populations — confirmations, écarts, non-réponses —, l’analyse des écarts par nature avec solde rapproché reconstitué, et les procédures alternatives sur les non-réponses, avec l’encaissement postérieur en tête. La matrice de suivi et l’agrégation des écarts résiduels contre le seuil font la synthèse de niveau 5.',
    commonErrors: [
      'Ignorer les non-réponses en se disant que « pas de nouvelle, bonne nouvelle ».',
      'Accepter un écart sans le rapprocher poste par poste.',
      'Oublier les encaissements postérieurs comme procédure alternative.',
      'Ne pas agréger les écarts résiduels inexpliqués contre le seuil de signification.',
    ],
    oralShort:
      'Les 2 accords, je clos avec la confirmation archivée. Les 6 écarts : j’analyse la nature — cut-off, avoir en transit, règlement en cours de route, litige, erreur — et je reconstitue le solde rapproché client par client jusqu’à coïncidence ; le résidu inexpliqué s’additionne aux anomalies. Les 4 non-réponses : relances, puis procédures alternatives — encaissements postérieurs en priorité, lettrage, bons de livraison. Le tout dans une matrice, sommé contre le seuil, remonté au senior.',
    oralLong:
      'Par définition, la circularisation demande au client de l’entreprise — le tiers — de confirmer directement au réviseur le solde qu’il pense devoir : c’est l’élément probant externe le plus solide sur les créances. L’objectif de ma démarche : maximiser les confirmations obtenues et transformer les non-réponses en preuves alternatives. Trois populations, trois traitements. Les deux réponses sans commentaire : confirmations pures — je clos les feuilles avec l’original archivé et les renvois. Les six réponses avec écarts : chaque différence s’analyse et se rapproche par nature — un cut-off de fin d’exercice : la facture du 30/12 comptabilisée chez nous, reçue et comptée en janvier chez le client ; un avoir émis non parvenu ou non comptabilisé ; un règlement parti de chez lui le 30/12 non reçu au 31/12 ; un litige sur une facture contestée ; une erreur d’imputation — chez lui ou chez nous. Pour chacun, je reconstruis le solde rapproché : solde comptable, corrigé des éléments expliqués, jusqu’à retrouver le chiffre confirmé ; ce qui reste inexpliqué s’additionne aux anomalies de la mission. Les quatre non-réponses : relances d’abord — second envoi, appel au service comptable du tiers ; à défaut, procédures alternatives : l’examen des encaissements postérieurs — un virement de janvier qui solde exactement la créance au 31/12 prouve fortement le solde —, le lettrage des règlements récents, les bons de livraison et de transport, les contrats et courriers commerciaux. Le tout se consolide dans une matrice de confirmation : douze lignes, statut, écart expliqué ou non, alternative conclue, anomalies résiduelles — qui se somment contre le seuil de signification et se remontent au senior. Par exemple, sur mon stage fictif, trois écarts sur six venaient du même avoir de décembre jamais reçu par le client — un seul document manquant expliquait la moitié des réponses avec écart. En conclusion : confirmer ce qui répond, rapprocher ce qui diffère, prouver autrement ce qui se tait — et agréger le résidu.',
    followUp: 'Un client confirme un solde inférieur de 25 000 et refuse de détailler : quelle est la suite ?',
    grading: [
      'Traitement différencié des trois populations (accords/écarts/non-réponses).',
      'Analyse des écarts par nature avec solde rapproché reconstitué.',
      'Procédures alternatives sur les non-réponses, encaissements postérieurs en tête.',
      'Matrice de suivi, agrégation contre le seuil, escalade au senior.',
    ],
  },
  {
    id: 'qc-055',
    job: 'revision',
    category: 'pieges',
    difficulty: 5,
    skill: 'Limites probatoires de la balance',
    question: 'Ta balance est équilibrée, débits égaux crédits. Est-ce que ça prouve que tes comptes sont justes ?',
    expectedAnswer:
      'Non. L’équilibre ne prouve que la cohérence arithmétique de la partie double. Toute une famille d’erreurs laisse la balance droite : l’omission complète d’une opération — ni débit ni crédit, rien n’apparaît ; la contre-passation — débit et crédit inversés, l’équilibre subsiste ; le doublon d’écriture — deux fois la même opération, deux fois équilibrée ; l’erreur d’imputation — mauvais compte des deux côtés ; l’erreur de montant identique au débit et au crédit ; et l’opération fictive — parfaitement équilibrée mais sans réalité. D’où la nécessaire panoplie du réviseur : rapprochements de tiers — fournisseurs, banque, paie —, confirmations externes, justificatifs sur échantillon, revue analytique des variations, contrôles de cut-off. L’équilibre de la balance est un prérequis, pas une conclusion : il autorise à commencer les travaux, jamais à les remplacer.',
    reasoning:
      'Question piège par excellence, posée pour voir si le candidat a compris la nature de la preuve comptable. La réponse attendue énumère les erreurs invisibles — omission, contre-passation, doublon, mauvaise imputation, montant symétrique, fictif — et enchaîne sur les procédures qui détectent ce que la balance ne voit pas. Un candidat qui répond « oui, prouvé » sort immédiatement ; un candidat qui répond « non » sans列举 les erreurs ni les contrôles compense à moitié.',
    commonErrors: [
      'Répondre oui : confondre équilibre arithmétique et exactitude.',
      'Citer une seule catégorie d’erreurs invisibles au lieu de la famille complète.',
      'Oublier les procédures qui détectent ces erreurs (tiers, confirmations, pièces, analytique).',
      'Croire qu’une opération fictive bien saisie casserait la balance.',
    ],
    oralShort:
      'Non. L’équilibre prouve seulement la cohérence arithmétique. Une omission complète, une contre-passation, un doublon, une erreur d’imputation ou une opération fictive — tout ça laisse la balance droite. C’est pour ça que la révision existe : rapprochements de tiers, confirmations externes, pièces sur échantillon, revue analytique. La balance équilibrée autorise à commencer les travaux, jamais à les remplacer.',
    oralLong:
      'Par définition, l’équilibre d’une balance constate que le total des débits égale le total des crédits — une propriété arithmétique de la partie double. L’objectif de la question : mesurer si je confonds cohérence et exactitude. La réponse est non, et voici pourquoi. Une famille entière d’erreurs est invisible pour la balance. L’omission complète : une facture jamais saisie n’apparaît nulle part — aucun débit, aucun crédit, équilibre intact. La contre-passation : une écriture passée à l’envers — le client débité au lieu d’être crédité — reste parfaitement équilibrée, seule l’analyse du sens des comptes la révèle. Le doublon : la même facture saisie deux fois, deux écritures équilibrées. L’erreur d’imputation : une charge immobilisée ou une immobilisation passée en charge — mauvais compte des deux côtés, balance droite. L’erreur de montant symétrique : 1 200 débité et crédité au lieu de 2 100. Et le cas limite : l’opération fictive — une écriture sans réalité économique, saisie proprement, passe tous les tests arithmétiques. C’est précisément parce que la balance est aveugle à ces erreurs que la révision s’organise autrement : rapprochements avec les tiers — relevés bancaires, états fournisseurs, déclarations de paie —, confirmations externes directes, examen des justificatifs sur échantillon, revue analytique des variations, contrôles de cut-off. L’équilibre reste indispensable — une balance déséquilibrée signale au moins une erreur — mais il est un prérequis, pas une conclusion. En conclusion : la balance équilibrée dit que la mécanique tourne rond ; elle ne dit rien de la réalité des opérations — c’est tout le métier du réviseur de combler cet écart.',
    followUp: 'Parmi toutes ces erreurs invisibles, laquelle te semble la plus dangereuse et pourquoi ?',
    grading: [
      'Réponse non, sans hésitation, avec la raison (cohérence arithmétique ≠ exactitude).',
      'Au moins quatre catégories d’erreurs invisibles citées (omission, contre-passation, doublon, imputation, fictif).',
      'Procédures de détection correspondantes exposées.',
      'Statut de l’équilibre clarifié : prérequis, pas preuve.',
    ],
  },
  {
    id: 'qc-056',
    job: 'tresorerie',
    category: 'definitions',
    difficulty: 1,
    skill: 'Position de trésorerie',
    question: 'La position de trésorerie d’une société, c’est quoi exactement ?',
    expectedAnswer:
      'C’est l’ensemble des disponibilités immédiates et de court terme de l’entreprise à un instant donné : les soldes bancaires à vue, la caisse, et les placements très liquides immédiatement mobilisables — SICAV monétaire, comptes à terme arrivant à échéance — selon la politique de placement. La position nette retranche les découverts bancaires et crédits de caisse : actif de trésorerie moins passif de trésorerie. À ne pas confondre avec le résultat — une société bénéficiaire peut être illiquide, et inversement — ni avec le cash-flow, qui est un flux de période alors que la position est un stock à une date. En comptabilité française, cela vit dans les comptes 51 ; en trésorerie de groupe, on raisonne en position consolidée multi-banques et multi-devises, valorisée au jour le jour.',
    reasoning:
      'Question d’entrée en trésorerie : vérifier que le candidat distingue stock et flux, position et résultat. La position nette — actif moins passif de trésorerie — est le cœur de la définition. Les confusions bénéfice/trésorerie sont le marqueur d’un candidat sans expérience du poste ; la nuance sur les placements selon la politique interne montre le pragmatisme.',
    commonErrors: [
      'Confondre position de trésorerie et résultat de l’exercice.',
      'Oublier de retrancher les découverts bancaires.',
      'Confondre stock (position à une date) et flux (cash-flow de période).',
      'Inclure des placements à terme longs non mobilisables immédiatement.',
    ],
    oralShort:
      'La position de trésorerie, c’est le stock de disponibilités à un instant T : soldes bancaires à vue, caisse, placements monétaires mobilisables selon la politique interne. La position nette, c’est tout ça moins les découverts et crédits de caisse. Attention : c’est un stock à une date, pas un flux comme le cash-flow, et ça n’a rien à voir avec le résultat — on peut être bénéficiaire et illiquide.',
    oralLong:
      'Par définition, la position de trésorerie mesure ce dont l’entreprise dispose immédiatement pour payer : c’est un stock, évalué à une date précise. L’objectif : connaître sa capacité de règlement du jour et des jours qui viennent. La composition : les soldes bancaires à vue — multi-banques en général —, la caisse, et les placements très liquides — monétaire, dépôts à vue — dans la limite fixée par la politique de placement de l’entreprise ; la position nette retranche les découverts et les crédits de caisse : c’est elle qui pilote. Trois confusions à éviter, elles résument la question : la position n’est pas le résultat — une société peut afficher des bénéfices et être incapable de payer ses fournisseurs, l’inverse existe aussi ; la position n’est pas le cash-flow — le cash-flow est un flux de période, la position est un solde à une date ; et tout placement n’en fait pas partie — un compte à terme de six mois n’est pas une disponibilité immédiate. En comptabilité, ces éléments vivent dans les comptes 51 ; en trésorerie de groupe, on consolide les positions multi-banques et multi-devises au jour le jour. Par exemple, sur mon stage fictif, la position du matin agrégeait quatorze comptes en trois devises avant 9 h 30. En conclusion : disponibilités moins découverts, à une date donnée — le pouls quotidien de l’entreprise, indépendant de son résultat.',
    followUp: 'Pourquoi une société peut-elle être bénéficiaire et ne pas pouvoir payer ses fournisseurs ?',
    grading: [
      'Composition correcte : à vue, caisse, placements liquides selon politique.',
      'Position nette : actif moins passif de trésorerie.',
      'Distinctions stock/flux et position/résultat claires.',
      'Vision multi-banques/multi-devises du quotidien évoquée.',
    ],
  },
  {
    id: 'qc-057',
    job: 'tresorerie',
    category: 'procedures',
    difficulty: 2,
    skill: 'Rapprochement de trésorerie',
    question: 'Ton rapprochement bancaire en trésorerie, il diffère de celui de la compta comment ?',
    expectedAnswer:
      'Même donnée source — le compte 512 et le relevé bancaire — mais objectifs et rythmes différents. Le rapprochement comptable est mensuel, par compte, orienté exactitude des comptes : il identifie les écritures manquantes — frais, prélèvements — et les écarts de transit, et débouche sur des écritures correctives et un solde rapproché pour la clôture. Le rapprochement de trésorerie est quotidien ou hebdomadaire, sur l’ensemble des comptes, orienté pilotage : il confronte les flux attendus aux flux réels en valeur et en date, suit les opérations en suspens et en transit — virements émis non débités, encaissements attendus non crédités, transferts entre comptes — et alimente la position du jour et la prévision. L’un fiabilise les comptes, l’autre fiabilise la vision du cash. Les deux se réconcilient : le suspens du trésorier devient l’écart de transit du comptable. Périodicité et profondeur relèvent de la politique interne, calée sur la taille et les flux.',
    reasoning:
      'Question de positionnement entre compta et trésorerie : le candidat doit montrer qu’il comprend que le même support sert deux finalités — preuve comptable versus pilotage de liquidité. Les marqueurs : la fréquence, la couverture multi-comptes, le suivi des suspens, l’articulation entre les deux rapprochements. La réponse qui décrit un seul rapprochement « qui fait tout » trahit l’absence de pratique terrain.',
    commonErrors: [
      'Décrire un seul rapprochement unique sans distinguer les finalités.',
      'Croire que le rapprochement de trésorerie débouche sur des écritures comptables systématiques.',
      'Oublier le suivi des suspens et opérations en transit, cœur du rapprochement trésorerie.',
      'Confondre date d’opération et date de valeur dans l’analyse des écarts.',
    ],
    oralShort:
      'Même source — le 512 et le relevé — mais deux finalités. Le rapprochement comptable, mensuel par compte, fiabilise les comptes : écritures manquantes, écarts de transit, solde rapproché de clôture. Le rapprochement de trésorerie, quotidien ou hebdo, fiabilise le pilotage : flux attendus contre flux réels, suspens et opérations en transit, alimentation de la position et de la prévision. Le suspens du trésorier devient l’écart de transit du comptable.',
    oralLong:
      'Par définition, les deux rapprochements partent du même couple — le compte 512 et le relevé bancaire — mais ne répondent pas à la même question. L’objectif du rapprochement comptable : l’exactitude des comptes, pour la clôture ; l’objectif du rapprochement de trésorerie : la maîtrise du cash, pour le pilotage quotidien. La démarche comptable est périodique et corrective : je pointe les deux visions du compte, j’identifie ce qui manque côté comptabilité — frais, prélèvements, agios — je passe les écritures, et j’aboutis au solde rapproché. La démarche trésorerie est continue et prédictive : chaque matin ou chaque semaine, je confronte ce qui devait arriver — virements attendus, prélèvements programmés, transferts inter-comptes — avec ce qui est réellement arrivé, en date de valeur ; ce qui n’est pas arrivé part en suspens avec un âge et une cause ; tout cela alimente la position consolidée et fiabilise la prévision glissante. Entre les deux, une articulation naturelle : le suspens suivi par le trésorier se retrouve comme écart de transit dans le rapprochement du comptable — d’où l’intérêt d’une réconciliation régulière entre les deux vues. Par exemple, sur mon stage fictif, un virement émis en suspens depuis dix jours avait été repéré côté trésorerie bien que la compta n’ait aucun écart — l’argent était bloqué entre deux comptes du groupe. En conclusion : mêmes données, deux métiers — preuve comptable d’un côté, pilotage de la liquidité de l’autre ; la fréquence exacte relève de la politique interne.',
    followUp: 'Qu’est-ce qu’une opération en suspens de plus de quinze jours t’évoque, et quelle action tu engages ?',
    grading: [
      'Deux finalités distinctes : exactitude comptable vs pilotage du cash.',
      'Rythmes différents : mensuel par compte vs quotidien/hebdo multi-comptes.',
      'Suspens et opérations en transit au cœur du rapprochement trésorerie.',
      'Articulation entre les deux vues (suspens → écart de transit).',
    ],
  },
  {
    id: 'qc-058',
    job: 'tresorerie',
    category: 'definitions',
    difficulty: 2,
    skill: 'Prévision de trésorerie à échéance',
    question: 'Une prévision de trésorerie à échéance, c’est quoi ? À quoi elle sert, concrètement ?',
    expectedAnswer:
      'C’est la projection chiffrée et datée des encaissements et décaissements attendus sur un horizon court — semaine par semaine, typiquement six à treize semaines, parfois au jour le jour en tension. Structure : solde initial de départ ; encaissements prévisionnels — factures clients arrivées à échéance, pondérées par leur comportement de paiement réel, encaissements attendus et acomptes ; décaissements engagés et prévisibles — fournisseurs à leurs échéances, salaires, charges sociales, TVA, impôts, échéances d’emprunts, loyers ; solde projeté en fin de chaque période. Utilités : anticiper les tensions avant qu’elles arrivent — le point bas, sa date, son montant —, décider des actions — placements, mobilisation de créances, échelonnement —, évaluer le besoin de ligne de crédit, dialoguer avec les banques. Elle se distingue du budget de trésorerie annuel mensuel par son horizon court et sa mise à jour glissante — chaque semaine, la réalité de la semaine écoulée remplace la prévision et recalibre le modèle.',
    reasoning:
      'Vérifie la compréhension de l’outil central du trésorier. Les marqueurs attendus : structure en trois blocs — solde initial, encaissements, décaissements —, pondération par le comportement réel de paiement des clients, notion de point bas, mise à jour glissante. La distinction budget annuel/prévision glissante montre la pratique ; la finalité décisionnaire — et pas seulement descriptive — fait la différence.',
    commonErrors: [
      'Prévoir les encaissements au taux théorique de 100 % à date d’échéance, sans décalage réel.',
      'Oublier les décaissements fixes et datés : paie, TVA, charges, échéances d’emprunt.',
      'Confondre budget annuel mensuel et prévision glissante à court terme.',
      'Ne jamais recalibrer le modèle sur le réalisé.',
    ],
    oralShort:
      'C’est la projection datée des encaissements et décaissements sur six à treize semaines : solde initial, encaissements pondérés par le comportement réel des clients, décaissements engagés — fournisseurs, paie, TVA, échéances — et solde projeté chaque semaine. Ça sert à anticiper le point bas — sa date, son montant — et à décider : placements, mobilisations, échelonnements, dialogue banques. Mise à jour glissante chaque semaine : le réel recalibre le modèle.',
    oralLong:
      'Par définition, la prévision de trésorerie à échéance est la projection datée des flux de l’entreprise sur un horizon court — l’usage type est la fenêtre de six à treize semaines, hebdomadaire, parfois quotidienne en période tendue. L’objectif : voir venir le point bas avant qu’il arrive, et garder une capacité d’action. La structure est un tableau à trois blocs. Bloc un, le solde initial consolidé du jour du lancement. Bloc deux, les encaissements : factures clients arrivées à échéance dans la fenêtre — mais pondérées par le comportement réel : si le client paie en moyenne à 45 jours alors qu’on facture à 30, la prévision doit le refléter ; acomptes attendus, subventions, remboursements de crédits de TVA. Bloc trois, les décaissements : fournisseurs à leurs échéances contractuelles, salaires et charges aux dates fixes, TVA et impôts à leurs échéances déclaratives, annuités d’emprunt, loyers. Chaque semaine se solde par un solde projeté — le point bas de la fenêtre est la donnée clé : sa date, son montant, sa profondeur. La prévision vit parce qu’elle est glissante : chaque lundi, le réalisé remplace le prévu, et l’écart constaté recalibre le modèle — c’est ce qui la distingue du budget annuel mensuel, figé en début d’exercice. Par exemple, sur mon stage fictif, la prévision avait révélé un creux de −60 000 en semaine 32, lissé par l’avance d’une échéance fournisseur et la mobilisation de créances. En conclusion : trois blocs, une fenêtre courte, une mise à jour hebdomadaire — un outil de décision, pas une photographie.',
    followUp: 'Ton point bas prévisionnel tombe à −60 000 dans trois semaines : quelles actions concrètes tu envisages ?',
    grading: [
      'Structure : solde initial + encaissements + décaissements + soldes projetés.',
      'Pondération par le comportement réel de paiement des clients.',
      'Horizon court glissant, distinct du budget annuel.',
      'Finalité décisionnaire : point bas, actions, dialogue bancaire.',
    ],
  },
  {
    id: 'qc-059',
    job: 'tresorerie',
    category: 'procedures',
    difficulty: 2,
    skill: 'Contrôle des paiements avant exécution',
    question: 'Avant qu’un paiement parte de l’entreprise, quels contrôles tu exiges ?',
    expectedAnswer:
      'Quatre familles de contrôles. Un, le fond : justificatif complet — facture validée, rapprochée du bon de commande et du bon de réception — et dette réellement exigible, à son échéance. Deux, l’autorisation : validation par une personne habilitée selon la matrice de signatures et les seuils — le montant détermine le nombre de signatures ; l’initiateur du paiement n’est jamais le seul valideur. Trois, le bénéficiaire : vérification des coordonnées bancaires contre le fichier fournisseurs de référence ; tout changement d’IBAN fait l’objet d’une vérification par un canal séparé — appel sur un numéro historiquement connu, jamais sur les coordonnées portées par la demande douteuse. Quatre, la traçabilité : journal des paiements, double validation dans l’outil bancaire, journal des rejets et des annulations. Ces règles de séparation des tâches relèvent du contrôle interne ; les seuils et la matrice relèvent de la politique interne de l’entreprise — à adapter à sa taille, mais jamais à sacrifier.',
    reasoning:
      'Question de sécurité opérationnelle, cœur du métier de trésorier. Le recruteur veut les quatre familles — fond, autorisation, bénéficiaire, traçabilité — avec la séparation initiateur/valideur. Le contrôle du changement d’IBAN par canal séparé est LE marqueur d’actualité : la fraude au faux fournisseur exploite précisément son absence. La distinction contrôle interne/politique interne des seuils clôt avec nuance.',
    commonErrors: [
      'Payer sur simple facture sans rapprochement commande/réception.',
      'Laisser la même personne initier et valider le paiement.',
      'Vérifier un changement d’IBAN en rappelant le numéro figurant sur la demande suspecte.',
      'Confondre les seuils de signature — politique interne — avec des règles de contrôle universelles.',
    ],
    oralShort:
      'Quatre contrôles. Le fond : facture validée, rapprochée commande et réception, dette exigible. L’autorisation : valideur habilité selon la matrice et les seuils — jamais l’initiateur seul. Le bénéficiaire : IBAN contre le fichier fournisseurs, tout changement vérifié par canal séparé — appel sur un numéro connu, jamais celui du mail douteux. Et la traçabilité : journal des paiements, double validation, suivi des rejets.',
    oralLong:
      'Par définition, le contrôle des paiements est la dernière barrière avant la sortie définitive du cash — une fois parti, un virement est quasi irrécupérable. L’objectif : ne payer que des dettes réelles, au bon bénéficiaire, avec des preuves. Ma méthode en quatre familles. Famille un, le fond : la facture est validée par le demandeur, rapprochée du bon de commande et du bon de réception, et la dette est à son échéance — payer trop tôt, c’est financer le fournisseur gratuitement. Famille deux, l’autorisation : la matrice de signatures fixe qui valide quoi selon les montants ; le principe intangible : celui qui initie n’est jamais le seul à valider — au-dessus des seuils, deux signatures. Famille trois, le bénéficiaire : les coordonnées bancaires se vérifient contre le fichier fournisseurs de référence, et tout changement d’IBAN se confirme par un canal séparé — appel au numéro historiquement connu du fournisseur, jamais celui qui figure dans le mail ou la factrice de la demande : c’est par ce chemin que passe la majorité des fraudes au faux fournisseur. Famille quatre, la traçabilité : journal des paiements émis, rejets et annulations suivis, double validation dans l’outil bancaire, rapprochement systématique du débit sur le relevé. Ce qui est du contrôle interne — séparation des tâches, vérification du bénéficiaire — ne se négocie pas ; ce qui est de la politique interne — seuils, nombre de signatures — s’adapte à la taille de l’entreprise, à condition de rester cohérent. Par exemple, sur mon stage fictif, tout changement de coordonnées bancaires exigeait un call-back documenté dans l’outil — sans exception, même pour la direction. En conclusion : fond, autorisation, bénéficiaire, traçabilité — quatre familles, une même idée : le paiement est une décision contrôlée, pas un réflexe.',
    followUp: 'Un mail du PDG te demande un virement urgent et confidentiel vers un nouveau compte : quelle est ta réaction ?',
    grading: [
      'Quatre familles complètes : fond, autorisation, bénéficiaire, traçabilité.',
      'Séparation initiateur/valideur et matrice de signatures.',
      'Vérification des changements d’IBAN par canal séparé (call-back).',
      'Distinction contrôle interne / politique de seuils.',
    ],
  },
  {
    id: 'qc-060',
    job: 'tresorerie',
    category: 'anomalies',
    difficulty: 2,
    skill: 'Gestion des suspens bancaires',
    question: 'Un virement émis apparaît en suspens depuis trois semaines. C’est quoi ton réflexe ?',
    expectedAnswer:
      'Un suspens, c’est une opération initiée qui n’est pas encore réglée — pas débitée, pas créditée en face, ou pas réconciliée. Trois semaines, c’est trop vieux pour être un simple décalage : mon réflexe est une démarche d’investigation en quatre temps. Un, qualifier : le virement est-il réellement parti de la banque ? Vérifier le débit éventuel, le statut dans l’outil bancaire. Deux, chercher la cause la plus fréquente : le virement inter-comptes en transit — l’argent est entre deux comptes du groupe, un côté a bougé, pas l’autre ; le rejet pour coordonnées erronées — IBAN invalide, libellé bloqué ; l’annulation mal traitée ; ou plus rarement une fraude. Trois, relancer : la banque pour le sort du virement, le service émetteur pour la finalité de l’opération. Quatre, corriger : écriture d’attente justifiée et datée, régularisation, et le suspens entre dans le tableau de suivi avec son âge et sa cause. Un suspens qui vieillit dégrade la fiabilité de la position et peut masquer une fraude : les suspens ont un âge maximal — typiquement quelques semaines — au-delà duquel l’escalade est systématique.',
    reasoning:
      'Le suspens ancien est l’anomalie quotidienne du trésorier. Le recruteur veut : la définition, la hiérarchie des causes — transit inter-comptes en tête, rejet, annulation, fraude —, la démarche en quatre temps, et surtout le principe qu’un suspens vieillissant n’est jamais neutre : il pollue la position et peut cacher un problème. La notion d’âge maximal avec escalade est le marqueur de maturité.',
    commonErrors: [
      'Laisser vieillir le suspens sans tableau de suivi ni âge.',
      'Confondre suspens normal — transit d’un jour ou deux — et suspens anormalement ancien.',
      'Passer une écriture de régularisation sans avoir identifié la cause.',
      'Ignorer le scénario frauduleux derrière un suspens qui s’éternise.',
    ],
    oralShort:
      'Trois semaines, c’est plus du transit normal. Je qualifie : le virement est-il parti ? débité ? rejeté ? Je cherche la cause la plus fréquente : virement inter-comptes en transit, rejet pour IBAN erroné, annulation mal traitée — et j’écarte la fraude. Je relance la banque et le service émetteur. Puis je corrige avec une écriture justifiée et datée, et le suspens part au tableau de suivi avec son âge. Un suspens qui vieillit, ce n’est jamais neutre.',
    oralLong:
      'Par définition, une opération en suspens est initiée mais non réglée : elle est sortie d’un côté et pas arrivée de l’autre, ou elle n’est pas réconciliée entre ce qui était attendu et ce qui est advenu. L’objectif de mon réflexe : rendre la position fiable — un suspens, c’est du cash dont on ne sait pas où il est. Ma démarche en quatre temps. Temps un, qualifier : le virement est-il réellement exécuté côté banque ? Je vérifie le relevé, le statut dans l’outil : un virement rejeté peut rester en suspens côté logicielle alors que la banque l’a refusé. Temps deux, hiérarchiser les causes : la plus fréquente est le transit inter-comptes — l’argent voyage entre deux comptes du groupe, un côté a bougé, l’autre pas encore ; viennent le rejet pour coordonnées bancaires erronées — IBAN invalide, libellé de virement non conforme ; l’annulation demandée mais mal traitée ; et le scénario à ne jamais écarter : la fraude — un virement bloqué peut être le signe d’une alerte bancaire. Temps trois, relancer : la banque sur le sort de l’opération, l’émetteur interne sur sa finalité — pourquoi ce virement, vers qui, sur quel dossier ? Temps quatre, corriger : écriture d’attente justifiée, datée, rattachée à la cause, et inscription au tableau des suspens avec son âge. Au-delà d’un âge maximal — quelques semaines selon la politique — l’escalade vers le responsable est systématique. Par exemple, sur mon stage fictif, un suspens de trois semaines s’était avéré être un rejet silencieux pour IBAN erroné — corrigé en 24 heures une fois identifié. En conclusion : qualifier, hiérarchiser, relancer, corriger — et jamais laisser vieillir : un suspens ancien dégrade la position et peut cacher bien pire.',
    followUp: 'Ton tableau de suspens montre un montant global qui double en un mois : qu’est-ce que ça t’inspire ?',
    grading: [
      'Définition du suspens et distinction transit normal/ancien.',
      'Hiérarchie des causes : inter-comptes, rejet, annulation, fraude.',
      'Démarche complète avec correction justifiée et datée.',
      'Âge maximal, tableau de suivi et escalade systématique.',
    ],
  },
  {
    id: 'qc-061',
    job: 'tresorerie',
    category: 'organisation',
    difficulty: 2,
    skill: 'Tableau de bord hebdomadaire de trésorerie',
    question: 'Ton tableau de bord hebdomadaire de trésorerie : qu’est-ce que tu y mets ?',
    expectedAnswer:
      'Un format tenu et court, actualisé à date fixe. Contenu type : la position consolidée du jour — par banque et par devise, avec le net global et l’utilisation des lignes ; la prévision glissante sur quatre à huit semaines — encaissements, décaissements, solde projeté, avec le point bas daté et chiffré ; les échéances obligatoires de la semaine — paie, TVA, charges sociales, annuités d’emprunt — pour vérifier leur couverture ; l’encours de découourt et les lignes autorisées : utilisé, disponible, échéances de renouvellement ; le suivi des suspens et opérations en transit avec leur vieillissement ; le top des impayés clients et les actions de relance en cours ; et l’écart prévision/réalisé de la semaine écoulée — c’est lui qui fiabilise le modèle. Forme : une page, diffusée à date fixe à la direction financière, avec les décisions proposées — placements, mobilisations, échelonnements. Le périmètre exact — devises, entités — dépend de la taille et de la structure.',
    reasoning:
      'Question d’organisation qui teste le sens des priorités du trésorier. Le tableau attendu n’est pas exhaustif mais hiérarchisé : position, prévision avec point bas, échéances obligatoires, lignes, suspens, impayés, écart prévu/réalisé. Les marqueurs de praticien : la date fixe de production, l’écrit prévision/réalisé, les décisions proposées plutôt qu’un simple constat. La dépendance à la taille de l’entreprise est la nuance finale.',
    commonErrors: [
      'Empiler des données sans hiérarchie ni décision proposée.',
      'Ne pas suivre l’écart prévision/réalisé — le modèle ne se fiabilise jamais.',
      'Oublier les échéances obligatoires de la semaine et leur couverture.',
      'Produire le tableau de façon irrégulière, seulement quand ça va mal.',
    ],
    oralShort:
      'Une page, à date fixe : la position consolidée du jour par banque et devise ; la prévision glissante à quatre-huit semaines avec le point bas daté et chiffré ; les échéances obligatoires de la semaine — paie, TVA, charges — et leur couverture ; l’utilisation des lignes et du découvert ; les suspens avec leur âge ; le top des impayés et les relances en cours ; et l’écart prévu/réalisé de la semaine passée, qui fiabilise le modèle. Avec les décisions proposées.',
    oralLong:
      'Par définition, le tableau de bord de trésorerie est l’outil de pilotage hebdomadaire qui condense l’essentiel du cash en une page. L’objectif : donner à la direction financière une vision exacte, prospective et actionnable — pas une compilation. Ma construction suit l’ordre des priorités du métier. Premier bloc, la position : consolidée du jour, déclinée par banque et par devise, avec le net global — c’est la photo. Deuxième bloc, la prévision glissante sur quatre à huit semaines : encaissements, décaissements, solde projeté par semaine, et surtout le point bas — sa date et son montant : c’est la question que tout le monde pose en premier. Troisième bloc, les échéances obligatoires de la semaine : paie, TVA, charges sociales, annuités d’emprunt — je vérifie leur couverture par la position et les encaissements attendus. Quatrième bloc, les lignes : encours de découvert utilisé, disponible, échéances de renouvellement — une ligne qui arrive à terme non renouvelée est une bombe à retardement. Cinquième bloc, les suspens avec leur vieillissement, et le top des impayés clients avec les relances en cours. Dernier point, le plus important pour fiabiliser : l’écart prévu/réalisé de la semaine écoulée — où la prévision s’est-elle trompée, sur quels clients, quels décaissements — c’est cette boucle qui améliore le modèle semaine après semaine. Le tout, diffusé à date fixe, avec les décisions proposées : placer le surplus, mobiliser des créances, échelonner un paiement. Par exemple, sur mon stage fictif, le tableau partait chaque lundi 10 h — et sa régularité était sa première qualité. En conclusion : photo, projection, obligations, lignes, anomalies, boucle d’apprentissage — une page, une heure de production, zéro surprise.',
    followUp: 'La direction ne lit pas ton tableau et te demande juste « on est bien ? » : tu réponds quoi, sur quelle base ?',
    grading: [
      'Structure hiérarchisée : position, prévision/point bas, échéances, lignes.',
      'Suspens, impayés et relances intégrés.',
      'Boucle prévu/réalisé présente — fiabilisation du modèle.',
      'Régularité de production et décisions proposées.',
    ],
  },
  {
    id: 'qc-062',
    job: 'tresorerie',
    category: 'calculs',
    difficulty: 3,
    skill: 'Calcul du BFR',
    question: 'Stock 180 000, créances clients 420 000, dettes fournisseurs 310 000. BFR ? Et tu en déduis quoi ?',
    expectedAnswer:
      'BFR = stocks + créances clients − dettes fournisseurs = 180 000 + 420 000 − 310 000 = 290 000. Interprétation : 290 000 euros sont immobilisés en permanence dans le cycle d’exploitation — financés par des ressources stables, sinon par du court terme, ce qui est fragile. En jours de chiffre d’affaires, le BFR se compare au secteur et à l’historique : sa dérive alerte plus tôt que son niveau. Un BFR peut être négatif — grande distribution, business prépayé : le cycle finance l’entreprise. Le BFR varie aussi avec la saisonnalité : c’est un stock structurel auquel s’ajoutent des pointes. Leviers d’action : côté actif — réduire le stock, raccourcir le DSO ; côté passif — allonger le DPO dans la limite des relations fournisseurs. Le calcul exact des composantes — TTC pour les tiers, inclusion de la TVA ou non, autres créances et dettes — dépend de la convention d’analyse retenue : la cohérence dans le temps prime.',
    reasoning:
      'Le calcul de base du métier : 290 000, vérifié. Au-delà du chiffre, le recruteur attend l’interprétation — immobilisation dans le cycle, adossement au FR, sensibilité saisonnière — et les leviers. La nuance sur les conventions de calcul (TTC, périmètre) montre la rigueur : un BFR n’a de sens que dans une convention stable.',
    commonErrors: [
      'Additionner créances et fournisseurs au lieu de soustraire les dettes.',
      'Interpréter le BFR en absolu sans le rapporter au CA ou à l’historique.',
      'Ignorer la composante saisonnière du BFR.',
      'Changer de convention de calcul (HT/TTC, périmètre) d’une période à l’autre.',
    ],
    oralShort:
      'BFR = stock plus créances clients moins dettes fournisseurs : 180 plus 420 moins 310 — 290 000. Ça veut dire que 290 000 euros sont coincés en permanence dans le cycle d’exploitation, à couvrir par le fonds de roulement. Je le suis en jours de CA et en tendance, avec sa pointe saisonnière. Leviers : moins de stock, DSO plus court, DPO raisonnablement plus long.',
    oralLong:
      'Par définition, le besoin en fonds de roulement mesure l’argent immobilisé par le décalage du cycle d’exploitation : on paie fournisseurs, on stocke, on vend, on encaisse — entre les deux, il faut financer. L’objectif du calcul : quantifier ce besoin structurel pour l’adosser aux bonnes ressources. La démarche : j’additionne les emplois cycliques — le stock, 180 000, et les créances clients, 420 000 — et je retranche les ressources cycliques — les dettes fournisseurs, 310 000. Résultat : 290 000 euros de BFR. Interprétation en trois temps. D’abord, c’est un besoin structurel : ces 290 000 manquent en permanence ; s’ils ne sont pas couverts par le fonds de roulement, ils le sont par du court terme — fragile, renouvelable, dépendant des banques. Ensuite, le niveau absolu ne parle pas seul : je rapporte le BFR au chiffre d’affaires en jours de CA, je le compare au secteur et à l’exercice précédent — une dérive de dix jours sur un gros CA, c’est une alerte. Enfin, le BFR n’est pas figé : saisonnalité, croissance — le fameux BFR de croissance : plus on vend, plus on immobilise avant d’encaisser. Les leviers : réduire le stock, raccourcir le DSO par le recouvrement, allonger prudemment le DPO. Et une réserve de rigueur : la convention de calcul — TTC ou HT, périmètre des créances et dettes — doit rester stable d’une période à l’autre, sinon les comparaisons n’ont plus de sens. Par exemple, sur mon stage fictif, un BFR apparemment stable cachait un stock en hausse compensé par des fournisseurs étirés — deux dérives qui s’annulaient en apparence. En conclusion : 290 000, interprétés en jours, en tendance et en couverture — un chiffre qui ne vit que comparé.',
    followUp: 'Le chiffre d’affaires augmente de 20 %, BFR constant en jours : de combien le besoin absolu augmente-t-il ?',
    grading: [
      'Calcul exact : 290 000 (180 + 420 − 310).',
      'Interprétation : besoin structurel, adossement au FR.',
      'Lecture relative : jours de CA, tendance, saisonnalité.',
      'Conscience des conventions de calcul (TTC/HT, périmètre stable).',
    ],
  },
  {
    id: 'qc-063',
    job: 'tresorerie',
    category: 'calculs',
    difficulty: 3,
    skill: 'Calcul et interprétation du DSO et du DPO',
    question: 'CA TTC annuel 3 650 000, créances clients TTC 400 000. Achats TTC 1 240 000, dettes fournisseurs TTC 310 000. DSO, DPO ? Et l’interprétation ?',
    expectedAnswer:
      'DSO = créances clients TTC / CA TTC × 365 = 400 000 / 3 650 000 × 365 = 40 jours. DPO = dettes fournisseurs TTC / achats TTC × 360 = 310 000 / 1 240 000 × 360 = 90 jours. Interprétation : les clients paient en moyenne à 40 jours, l’entreprise paie ses fournisseurs à 90 jours : l’écart de 50 jours finance le poste clients et une partie du stock — une position de crédit fournisseur confortable, à la condition que les fournisseurs l’acceptent sans dégrader la relation ni les prix. Réserves de rigueur : les conventions varient — 365 ou 360 jours, base CA TTC ou HT, achats ou coût d’achat des marchandises vendues, périodes ou annualisation — je précise toujours la mienne et je m’y tiens ; un DSO agrégé peut masquer des réalités très différentes par client, d’où l’analyse par client et par ancienneté ; escomptes, acomptes et affacturage modifient la lecture — un DSO apparent bas peut couter cher en remises. Ces indicateurs se lisent en tendance et à périmètre constant.',
    reasoning:
      'Deux calculs simples et vérifiés — 40 et 90 jours — suivis de l’interprétation croisée : l’écart DPO-DSO finance le cycle. Le recruteur veut aussi les réserves méthodologiques : conventions 360/365, base TTC, lecture par client, effets cachés de l’escompte et de l’affacturage. Le candidat qui donne juste deux chiffres sans lecture ni réserves reste en surface.',
    commonErrors: [
      'Calculer le DSO sur des montants HT contre du TTC — incohérence de base.',
      'Interpréter le DPO de 90 jours comme une performance sans évaluer le risque relationnel.',
      'Oublier que DSO et DPO agrégés masquent la dispersion par client/fournisseur.',
      'Changer de convention (360/365, achats/coût d’achat) sans le signaler.',
    ],
    oralShort:
      'DSO : 400 000 sur 3 650 000 multiplié par 365 — 40 jours. DPO : 310 000 sur 1 240 000 multiplié par 360 — 90 jours. Lecture : les clients paient à 40 jours, on paie les fournisseurs à 90 — l’écart de 50 jours finance le poste clients et une partie du stock, à condition que les fournisseurs l’acceptent. Je précise toujours mes conventions — 365 pour le DSO, 360 pour le DPO — et je lis tout ça par client et en tendance.',
    oralLong:
      'Par définition, le DSO — days sales outstanding — mesure le délai moyen de paiement des clients, et le DPO — days payables outstanding — celui des fournisseurs. L’objectif : quantifier le décalage de part et d’autre du cycle d’exploitation, pour comprendre qui finance qui. La démarche de calcul, avec mes conventions annoncées : DSO égal créances clients TTC divisées par CA TTC, multiplié par 365 — 400 000 sur 3 650 000 fois 365 : 40 jours ; DPO égal dettes fournisseurs TTC divisées par achats TTC, multiplié par 360 — 310 000 sur 1 240 000 fois 360 : 90 jours. L’interprétation se fait en croisant les deux : les clients règlent à 40 jours, l’entreprise paie à 90 — l’écart de 50 jours constitue un crédit fournisseur qui finance le poste clients et une partie du stock : c’est une position confortable, mais pas gratuite : un DPO de 90 jours obtenu en retardant systématiquement se paie en relation commerciale, en prix, voire en rupture de fourniture — et pour un fournisseur critique, c’est un risque d’arrêt de production supérieur au gain de trésorerie. Trois réserves de rigueur : les conventions varient — 365 ou 360, base TTC ou HT, achats bruts ou coût d’achat des marchandises vendues — je précise les miennes et je m’y tiens dans le temps ; un DSO de 40 jours en moyenne peut cacher des clients à 10 et d’autres à 90 — d’où la ventilation par client et l’ancienneté des créances ; et un DSO artificiellement bas obtenu par escomptes coûteux ou affacturage déplace le problème au lieu de le résoudre. Par exemple, sur mon stage fictif, un DSO global de 40 jours recouvrait un client public à 75 jours et une moitié de clients à 30. En conclusion : 40 jours clients, 90 jours fournisseurs — un écart de 50 jours qui finance le cycle, à lire ventilé, en tendance, et avec ses conventions affichées.',
    followUp: 'Ton DPO passe de 60 à 90 jours en six mois : quels risques tu évalues avant de t’en réjouir ?',
    grading: [
      'DSO exact : 40 jours (400 000/3 650 000 × 365).',
      'DPO exact : 90 jours (310 000/1 240 000 × 360).',
      'Interprétation croisée : écart DPO-DSO et financement du cycle.',
      'Réserves de méthode : conventions, ventilation par client, effets escompte/affacturage.',
    ],
  },
  {
    id: 'qc-064',
    job: 'tresorerie',
    category: 'calculs',
    difficulty: 4,
    skill: 'Chaîne FR / BFR / TN',
    question: 'Ressources stables 1 200 000, actif immobilisé net 950 000, BFR 290 000. FR, TN ? Et l’analyse structurelle ?',
    expectedAnswer:
      'Fonds de roulement = ressources stables − actif immobilisé net = 1 200 000 − 950 000 = 250 000. Trésorerie nette = FR − BFR = 250 000 − 290 000 = −40 000 : trésorerie nette négative, un découvert net de 40 000. Analyse : le FR de 250 000 ne couvre pas le BFR de 290 000 — le cycle d’exploitation consomme 40 000 de plus que les ressources stables n’en libèrent : l’écart est financé par du court terme — découverts — structurellement fragile : renouvellement des lignes dépendant des banques, sensibilité aux taux courts. Leviers : augmenter le FR — capitaux propres, emprunt long terme — ou réduire le BFR — stock, DSO, DPO. Réserves de méthode : l’analyse classique procède à des retraitements — crédit-bail reintegrated, actif fictif éliminé, valeur brute de l’actif immobilisé — qui changent les chiffres ; l’important est la cohérence de la convention et la lecture pluriannuelle : un TN négatif ponctuel de fin de mois diffère d’un TN négatif structurel.',
    reasoning:
      'La chaîne complète FR/BFR/TN avec des chiffres cohérents entre questions — BFR 290 000 repris. Chiffres vérifiés : 250 000 et −40 000. Le candidat doit dérouler la logique structurelle : FR insuffisant → financement court terme du cycle → fragilité. Les retraitements d’analyse (crédit-bail, brut/net) sont la réserve de niveau 4 attendue, avec la distinction ponctuel/structurel.',
    commonErrors: [
      'Calculer TN = BFR − FR au lieu de FR − BFR (signe inversé).',
      'Confondre trésorerie nette et solde bancaire du jour.',
      'Interpréter le TN négatif sans chercher la cause (FR court ou BFR long).',
      'Ignorer les retraitements classiques (crédit-bail, actif brut) qui modifieraient l’analyse.',
    ],
    oralShort:
      'FR = ressources stables moins actif immobilisé : 1 200 000 moins 950 000, 250 000. TN = FR moins BFR : 250 000 moins 290 000, moins 40 000. Trésorerie nette négative : le fonds de roulement ne couvre pas le besoin en fonds de roulement — 40 000 du cycle sont financés par du court terme, donc par les banques. Leviers : renforcer le FR ou réduire le BFR. Et je regarde si c’est structurel ou conjoncturel.',
    oralLong:
      'Par définition, l’analyse fonctionnelle relie trois soldes : le fonds de roulement mesure l’excédent de ressources stables après financement des immobilisations ; le BFR mesure le besoin du cycle d’exploitation ; la trésorerie nette en est la résultante — FR moins BFR, qui doit rejoindre la différence entre trésorerie active et passive. L’objectif : diagnostiquer la structure de financement, pas seulement le solde du jour. Le calcul ici : FR égal 1 200 000 de ressources stables moins 950 000 d’actif immobilisé net — 250 000 ; BFR 290 000 ; TN égal 250 000 moins 290 000 — moins 40 000. L’analyse structurelle : les ressources durables libèrent 250 000 pour le cycle, mais le cycle en consomme 290 000 : 40 000 sont financés en permanence par du court terme — découvert. C’est le cœur du diagnostic : une trésorerie négative adossée à un FR insuffisant est structurellement fragile — elle dépend du renouvellement des lignes, des taux courts, du goodwill de la banque ; à l’inverse, un TN négatif ponctuel en fin de mois avec un FR solide est un simple accident de calendrier. Les leviers sont des deux côtés du signe égal : augmenter le FR — augmentation de capital, emprunt long terme, cession d’actifs non stratégiques — ou réduire le BFR — dés stockage, recouvrement, allongement mesuré du DPO. Dernière réserve de méthode : l’analyse fine procède à des retraitements — crédit-bail réintégré dans les emplois et ressources stables, actif immobilisé pris en brut, actifs fictifs éliminés — qui modifient les soldes ; je précise ma convention et je la maintiens. Par exemple, sur mon stage fictif, le TN négatif redevenait positif après réintégration d’un crédit-bail — le diagnostic changeait de nature. En conclusion : FR 250 000, BFR 290 000, TN moins 40 000 — un cycle qui déborde les ressources stables ; la réponse est structurelle ou ne sera pas.',
    followUp: 'Sans augmenter les ressources stables, quelles actions réduisent le BFR de 40 000 ?',
    grading: [
      'FR exact : 250 000 (ressources stables − actif immobilisé).',
      'TN exact : −40 000 (FR − BFR, signe correct).',
      'Diagnostic structurel : cycle financé en court terme, fragilité.',
      'Leviers des deux côtés + retraitements/lecture pluriannuelle évoqués.',
    ],
  },
  {
    id: 'qc-065',
    job: 'tresorerie',
    category: 'calculs',
    difficulty: 3,
    skill: 'Prévision de trésorerie à un mois',
    question: 'Position au 1er du mois : 25 000. Encaissements prévus du mois : 180 000. Décaissements prévus : 210 000. Solde fin de mois ? Et tu fais quoi avec ce chiffre ?',
    expectedAnswer:
      'Solde projeté fin de mois = 25 000 + 180 000 − 210 000 = −5 000. Première réaction : ne pas s’arrêter au solde final — examiner le profil intra-mensuel : encaissements et décaissements ne sont pas uniformes ; le point bas réel du mois peut être bien plus profond que −5 000 — par exemple si la paie et la TVA tombent en début de mois et les encaissements en fin. Deuxième réflexe : qualifier la tension — ponctuelle et saisonnière, ou structurelle ? Une tension identique trois mois de suite n’est plus un accident. Troisième temps, les actions hiérarchisées : avancer des encaissements — relances ciblées, escompte si le taux est inférieur au coût de l’argent ; décaler ou échelonner les paiements négociables — jamais les salaires ni les obligations fiscales ; mobiliser la ligne de court terme — découvert autorisé, mobilisation de créances ; et le cas échéant acter une action structurelle si le phénomène se répète — BFR, fonds de roulement. Enfin, documenter : prévision tracée, hypothèses datées, écart prévu/réalisé à suivre le mois suivant — c’est ce qui fiabilise l’exercice.',
    reasoning:
      'Calcul trivial — −5 000, vérifié — mais question de fond : que fait-on du chiffre ? Le recruteur attend le passage du solde final au profil intra-mensuel (le tunnel), la qualification ponctuel/structurel, et les actions hiérarchisées avec leurs garde-fous — on ne décale pas la paie. La boucle prévu/réalisé clôt. C’est la différence entre calculer et piloter.',
    commonErrors: [
      'S’arrêter au solde de fin de mois sans examiner le point bas intra-mensuel.',
      'Décaler indifféremment tous les paiements — les salaires et obligations fiscales ne se négocient pas.',
      'Traiter une tension répétée comme une série d’accidents sans action structurelle.',
      'Ne pas documenter les hypothèses ni suivre l’écart prévu/réalisé.',
    ],
    oralShort:
      'Solde projeté : 25 000 plus 180 000 moins 210 000 — moins 5 000. Mais le solde final ne suffit pas : je regarde le profil du mois — si la paie et la TVA tombent début de mois et les encaissements en fin, le point bas réel est bien plus profond. Ensuite je qualifie : ponctuel ou structurel ? Puis les actions : relances ciblées, escompte rentable, échelonnement des paiements négociables, ligne de court terme. Et je documente pour suivre le prévu/réalisé.',
    oralLong:
      'Par définition, une prévision mensuelle articule trois chiffres : la position de départ, les encaissements attendus, les décaissements engagés. L’objectif : anticiper le solde de fin de période et surtout les tensions du chemin. Le calcul : 25 000 plus 180 000 de rentrées moins 210 000 de sorties — un solde projeté de moins 5 000 euros en fin de mois. Mais c’est là que commence le vrai travail. Premier réflexe, le profil intra-mensuel : le tunnel — si les décaissements massifs tombent en début de mois — paie le 28 précédent? peu importe : disons charges le 5, TVA le 20 — et les encaissements se concentrent en fin de mois, le point bas réel peut descendre bien plus bas que moins 5 000 : la profondeur du creux importe plus que le solde final. Deuxième réflexe, la qualification : cette tension est-elle ponctuelle — saisonnalité, calendrier exceptionnel — ou structurelle ? Le même moins 5 000 trois mois de suite n’est plus un accident, c’est un déficit de calibrage. Troisième temps, les actions par ordre de préférence : avancer les encaissements — relances ciblées sur les clients dont les factures tombent dans le mois, escompte si son coût est inférieur au coût de financement ; décaler les paiements négociables — fournisseurs avec qui on a un rapport solide, jamais les salaires ni les obligations fiscales, qui ne se discutent pas ; mobiliser le court terme — découvert autorisé si la marge existe, mobilisation de créances ; et si le phénomène se répète, acter l’action structurelle : réduction du BFR, renforcement du FR. Enfin, la discipline : hypothèses documentées, écart prévu/réalisé suivi le mois suivant — la prévision est un muscle qui se renforce en s’étirant. Par exemple, sur mon stage fictif, le point bas réel du mois était de moins 38 000 alors que le solde final n’était que de moins 5 000 : la ligne de découvert avait été calibrée sur le creux, pas sur la fin. En conclusion : moins 5 000 en fin de mois, un point bas à examiner, une tension à qualifier, des actions à hiérarchiser — le chiffre n’est que le début de la décision.',
    followUp: 'Le point bas intra-mensuel ressort à −38 000 plutôt que −5 000 : quelle différence de gestion ça implique ?',
    grading: [
      'Calcul exact : −5 000.',
      'Passage obligé au profil intra-mensuel (point bas/tunnel).',
      'Qualification ponctuel/structurel et actions hiérarchisées avec garde-fous.',
      'Documentation et boucle prévu/réalisé.',
    ],
  },
  {
    id: 'qc-066',
    job: 'tresorerie',
    category: 'definitions',
    difficulty: 3,
    skill: 'Indicateurs de liquidité',
    question: 'Les ratios de liquidité : lesquels tu utilises, comment tu les lis, et quelles sont leurs limites ?',
    expectedAnswer:
      'Trois ratios classiques. Liquidité générale = actif circulant — stocks, créances, disponibilités — divisé par dettes à court terme : avec 640 000 d’actif circulant dont 180 000 de stocks et 40 000 de disponibilités pour 400 000 de dettes CT, ça donne 1,6 : 1,6 € d’actif court terme pour 1 € de dette court terme ; un rapport supérieur à 1 est le repère usuel — un repère, pas une norme. Liquidité réduite = actif circulant moins stocks, divisé par dettes CT : 460 000 / 400 000 = 1,15 — elle ôte le stock, dont la conversion en cash est incertaine. Liquidité immédiate = disponibilités divisées par dettes CT : 40 000 / 400 000 = 0,10 — très faible en général, l’entreprise ne détient qu’une faible part en cash immédiat, ce qui est normal si les flux sont pilotés. Limites : ces ratios sont des photos statiques au bilan — ils ignorent le calendrier des flux, donc le tunnel de trésorerie ; le stock est valorisé au bilan, pas à sa valeur de réalisation ; les créances douteuses s’y trouvent encore ; et un ratio élevé peut signaler une sur-liquidité improductive. Ils se lisent en tendance, en comparaison sectorielle et toujours avec la prévision de trésorerie.',
    reasoning:
      'Trois formules et trois chiffres simples — 1,6 ; 1,15 ; 0,10 — vérifiés. Le cœur de la question est dans les limites : photo statique contre calendrier des flux, qualité du stock et des créances, sur-liquidité possible. Le candidat qui donne les formules sans limites récite ; celui qui ajoute le lien avec la prévision glissante comprend.',
    commonErrors: [
      'Présenter le seuil de 1 comme une norme universelle.',
      'Oublier que le stock valorisé au bilan n’est pas du cash garanti.',
      'Lire les ratios en photo unique, sans tendance ni secteur.',
      'Interpréter un ratio élevé comme toujours bon — sur-liquidité improductive.',
    ],
    oralShort:
      'Trois ratios : générale — actif circulant sur dettes court terme, ici 1,6 ; réduite — sans les stocks, 1,15 ; immédiate — disponibilités seules, 0,10. Au-dessus de 1, c’est le repère usuel, pas une norme. Limites : c’est une photo statique — rien sur le calendrier des flux, donc le tunnel ; le stock et les créances douteuses s’y cachent ; et trop de liquidité, c’est de l’argent improductif. Ça se lit en tendance, avec la prévision.',
    oralLong:
      'Par définition, les ratios de liquidité confrontent les actifs court terme aux dettes court terme : ils mesurent la capacité théorique de l’entreprise à faire face à ses échéances immédiates. L’objectif : compléter l’analyse structurelle FR/BFR/TN par une lecture de couverture. Les trois étages. La liquidité générale — actif circulant complet, stocks compris, divisé par dettes court terme : 640 000 sur 400 000, 1,6 ; au-dessus de 1, en théorie l’actif court terme couvre la dette court terme — repère usuel, pas norme gravée : un 1,1 sur un cycle très rapide peut être plus sain qu’un 1,8 avec un stock qui dort. La liquidité réduite — on ôte les stocks, dont la conversion en cash est la plus incertaine : 460 000 sur 400 000, 1,15. La liquidité immédiate — les disponibilités seules : 40 000 sur 400 000, 0,10 : faible en apparence, normal en réalité — une entreprise pilotée ne thésaurise pas, elle garde le juste niveau de cash et des lignes en réserve. Les limites, qui sont le cœur du sujet : ces ratios sont des photos au bilan — elles ignorent le calendrier : une entreprise à 1,6 peut crever à −50 000 le 15 du mois si ses encaissements arrivent le 30 ; le stock y figure au bilan, pas à sa valeur nette de réalisation ; les créances douteuses n’en ont pas été ôtées ; et un ratio élevé peut signer une sur-liquidité improductive — du cash qui dort au lieu de servir. Ils se lisent donc en tendance, en comparaison sectorielle, et toujours en regard de la prévision glissante — le ratio pose la question, la prévision y répond. Par exemple, sur mon stage fictif, un client au ratio de 1,9 a fait défaut sur sa paie : ses encaissements étaient tous concentrés après le 25. En conclusion : 1,6, 1,15, 0,10 — trois photos utiles, un seul film qui compte : le calendrier des flux.',
    followUp: 'Deux entreprises au même ratio de liquidité générale : qu’est-ce qui peut les rendre radicalement différentes ?',
    grading: [
      'Trois ratios correctement définis, chiffres exacts (1,6 / 1,15 / 0,10).',
      'Repère >1 présenté comme usage, pas comme norme.',
      'Limites de fond : statique, calendrier des flux, qualité stocks/créances.',
      'Lecture en tendance + lien avec la prévision glissante.',
    ],
  },
  {
    id: 'qc-067',
    job: 'tresorerie',
    category: 'pieges',
    difficulty: 3,
    skill: 'Lecture critique du DSO',
    question: 'Ton DSO est passé de 55 à 40 jours. Bonne nouvelle, non ?',
    expectedAnswer:
      'Pas nécessairement — un DSO en baisse mérite un examen avant toute celebration. Causes possibles d’une baisse réelle et saine : campagnes de relance efficaces, encadrement des conditions de vente, résolution de litiges anciens. Mais la baisse peut être artefactuelle : chute du chiffre d’affaires — dénominateur qui se réduit, le DSO baisse mécaniquement alors que les créances restent ; ventes en fin de période anormalement faibles ; multiplication des acomptes, qui fait encaisser avant facturation ; affacturage ou cession Dailly, qui sort les créances du bilan — la performance de paiement client se voit dégradée chez le factor, pas dans le ratio ; escomptes accordés pour accélérer — un coût déguisé ; ou dégradation du portefeuille — on a soldé les bons payeurs et il ne reste que des créances récentes. Démarche de lecture : ventiler par client et par ancienneté, suivre simultanément le CA, les acomptes et le recours à l’affacturage, et chiffrer le coût des moyens utilisés. L’indicateur est un point de départ d’analyse, jamais une conclusion.',
    reasoning:
      'Question piège à rebours : le candidat tenté de valider la « bonne nouvelle » sans analyse sort du sujet. Les causes artefactuelles — chute de CA, acomptes, affacturage, escompte coûteux — constituent le cœur attendu, avec la démarche de vérification : ventilation, lecture croisée avec le CA et les dispositifs de mobilisation. Le réflexe final — un ratio se diagnostique, il ne se célèbre pas — est la signature du trésorier.',
    commonErrors: [
      'Valider la baisse sans vérifier l’évolution simultanée du chiffre d’affaires.',
      'Ignorer que l’affacturage ou la cession Dailly sortent les créances du périmètre.',
      'Confondre encaissement accéléré par acomptes et amélioration du recouvrement.',
      'Ne pas chiffrer le coût des escomptes accordés pour obtenir la baisse.',
    ],
    oralShort:
      'Pas forcément. La baisse peut venir d’un vrai progrès du recouvrement — mais aussi d’une chute du CA, ce qui fait baisser le ratio mécaniquement ; d’acomptes multipliés ; d’affacturage ou de Dailly qui sortent les créances du bilan ; ou d’escomptes coûteux. Avant de conclure, je ventile par client et par ancienneté, je regarde le CA en parallèle, et je chiffrre le coût des moyens utilisés. Un indicateur se diagnostique, il ne se célèbre pas.',
    oralLong:
      'Par définition, le DSO rapporte les créances clients au chiffre d’affaires : c’est un ratio, donc toute variation du dénominateur ou du périmètre le déplace sans que le recouvrement change. L’objectif de mon examen : distingiger l’amélioration réelle de l’artefact comptable. Les hypothèses saines d’abord : relances structurées, conditions de paiement mieux encadrées, litiges anciens résolus, plans de restructuration des encours. Les hypothèses artefactuelles ensuite, au moins cinq. La chute du CA : même créances, dénominateur réduit — le DSO baisse alors que rien ne s’est amélioré ; c’est le piège le plus fréquent en fin d’exercice déprimé. Le profil des ventes : des ventes anormalement faibles en fin de période réduisent le poids des créances récentes. Les acomptes : encaisser avant de facturer fait tomber le solde clients sans améliorer le comportement de paiement. L’affacturage et la cession Dailly : les créances cédées sortent du bilan — le DSO affiché s’améliore pendant que la réalité des paiements clients, elle, se voit chez le factor. L’escompte : accélérer en payant la jonchée d’une remise, c’est acheter la baisse du ratio. Ma démarche : ventiler le poste clients par client et par ancienneté — un vieillissement en hausse avec un DSO en baisse est un signal contradictoire majeur ; suivre simultanément le CA et le recours aux dispositifs de mobilisation ; et chiffrer le coût des moyens employés. Par exemple, sur mon stage fictif, un DSO passé de 55 à 40 jours venait pour moitié d’une cession Dailly de 400 000 — la « performance » était un financement déguisé. En conclusion : le DSO est un thermomètre, pas un verdict — sa baisse s’explique avant de se féliciter.',
    followUp: 'Même question pour le DPO qui monte de 60 à 85 jours : quels vérifications tu fais ?',
    grading: [
      'Refus du verdict immédiat : le ratio se diagnostique.',
      'Causes artefactuelles citées : chute de CA, acomptes, affacturage/Dailly, escompte.',
      'Démarche : ventilation par client/ancienneté, lecture croisée avec le CA.',
      'Chiffrage du coût des moyens d’accélération.',
    ],
  },
  {
    id: 'qc-068',
    job: 'tresorerie',
    category: 'risques-controles',
    difficulty: 4,
    skill: 'Fraude au changement de coordonnées bancaires',
    question: 'On te signale qu’un fournisseur habituel a annoncé son changement d’IBAN par simple mail. Quels risques, quels contrôles ?',
    expectedAnswer:
      'C’est le scénario type de la fraude au faux fournisseur — compromission de la messagerie du fournisseur ou de la vôtre, usurpation d’identité, redirection des paiements vers un compte contrôlé par les fraudeurs. Les contrôles : ne jamais utiliser les coordonnées transmises par le mail ni par la facture jointe — la fraude consiste précisément à contrôler le canal qui porte la demande ; vérifier par un canal séparé et historique : appel au numéro déjà connu du fournisseur, issu du fichier fournisseurs validé, pas celui du mail ; double validation interne de tout changement de coordonnées par deux personnes ; bloquer les paiements en attente vers ce fournisseur le temps de la vérification ; vérifier la cohérence de la demande auprès du contact habituel — commercial, comptable ; a posteriori, auditer les derniers paiements partis vers ce fournisseur et les rejets éventuels ; alerter la direction, la sécurité informatique et, le cas échéant, l’assurance cyber et le fournisseur lui-même. La procédure de changement de coordonnées bancaires formalisée et systématique est le seul remède durable — la vigilance ponctuelle ne suffit pas.',
    reasoning:
      'Scénario de fraude le plus répandu sur les paiements. Le recruteur veut : la reconnaissance immédiate du schéma, le principe du canal séparé — l’erreur fatale étant de rappeler le numéro du mail frauduleux —, le gel des paiements, la double validation, et la dimension post-incident (audit des paiements récents, alerte, assurance). La conclusion sur la procédure formalisée montre le réflexe de contrôle interne plutôt que la prudence individuelle.',
    commonErrors: [
      'Vérifier le changement d’IBAN en rappelant le numéro figurant dans le mail suspect.',
      'Traiter la demande comme une opération de routine de mise à jour du fichier fournisseurs.',
      'Ne pas geler les paiements en cours pendant la vérification.',
      'Oublier l’audit des paiements déjà partis vers le compte modifié.',
    ],
    oralShort:
      'C’est le scénario type de la fraude au faux fournisseur. Je n’utilise jamais les coordonnées du mail : je vérifie par un canal séparé — appel au numéro historique du fichier fournisseurs. Double validation interne du changement, gel des paiements en attente, contact du commercial habituel. Puis audit des derniers paiements partis, alerte direction et sécurité informatique. Et surtout : une procédure formalisée de changement de coordonnées, sinon la vigilance individuelle ne tiendra pas.',
    oralLong:
      'Par définition, la fraude au faux fournisseur exploite un canal de communication compromis : les fraudeurs interceptent ou imitent la messagerie d’un fournisseur connu, annoncent un changement de banque, et détournent les paiements suivants vers un compte qu’ils contrôlent — avec des factures vraies, des montants cohérents, un ton familier. L’objectif de mes contrôles : rendre le canal porteur de la demande inapte à la valider. Ma démarche en cinq temps. Temps un, le doute méthodique : tout changement de coordonnées bancaires annoncé par mail est suspect par principe — même authentique. Temps deux, la vérification par canal séparé : j’appelle le fournisseur au numéro historiquement connu, celui du fichier fournisseurs validé — jamais celui du mail, jamais celui de la pièce jointe : c’est le point de bascule de toute la fraude. Temps trois, le gel : les paiements en attente vers ce fournisseur sont suspendus jusqu’à confirmation ; un retard de 48 heures coûte moins qu’un virement perdu. Temps quatre, la double validation interne : le changement, une fois confirmé, est saisi et validé par deux personnes distinctes, avec trace. Temps cinq, l’après : audit des derniers paiements partis vers l’ancien comme le prétendu nouveau compte — une fraude détectée a souvent déjà frappé ; alerte à la direction, à la sécurité informatique, à l’assurance cyber le cas échéant, et information du fournisseur compromis. Au-delà du cas : la seule défense durable est une procédure formalisée — changement de coordonnées uniquement sur confirmation écrite et orale croisée, fichier fournisseurs verrouillé, droits d’accès restreints. Par exemple, sur mon stage fictif, un changement d’IBAN annoncé par mail avait été repéré parce que le mail partait d’une adresse à une lettre près — mais c’est le call-back qui a prouvé la fraude, pas l’œil. En conclusion : canal séparé, gel, double validation, audit, alerte — et une procédure qui ne fait confiance à aucun canal unique.',
    followUp: 'Le paiement est déjà parti vers le compte frauduleux depuis 48 heures : quelles sont tes actions immédiates ?',
    grading: [
      'Reconnaissance immédiate du scénario de fraude au faux fournisseur.',
      'Vérification par canal séparé avec le numéro historique — pas celui du mail.',
      'Gel des paiements et double validation interne du changement.',
      'Post-incident : audit des paiements, alertes, et procédure formalisée durable.',
    ],
  },
  {
    id: 'qc-069',
    job: 'tresorerie',
    category: 'anomalies',
    difficulty: 4,
    skill: 'Flux bancaire inhabituel détecté',
    question: 'En établissant la position du matin, tu vois un virement sortant de 76 000 vers un compte inconnu, passé hier soir. Ta réaction ?',
    expectedAnswer:
      'Réaction en urgence, dans l’ordre. Un, vérifier l’origine : qui a initié ce virement — quel profil, quelle validation, quel justificatif dans l’ERP et l’outil bancaire ; un virement du soir vers un compte inconnu cumule les signaux d’alerte. Deux, qualifier : erreur — mauvais bénéficiaire, mauvais montant, doublon — ou fraude : les deux se traitent différemment mais immédiatement. Trois, agir côté banque sans délai : demander le rappel du virement — possible si non encore exécuté ou si le compte destinataire est dans la même banque ; au-delà, opposition, et dépôt de plainte si fraude confirmée ; le facteur temps domine tout : chaque heure réduit la récupération. Quatre, alerter : responsable hiérarchique, direction, sécurité informatique — une fraude au paiement s’accompagne souvent d’une compromission des accès ; geler les validations en cours et faire changer les mots de passe et jetons. Cinq, tracer : conserver toutes les preuves — logs, mails, écrans —, reconstituer la chronologie, informer l’assurance cyber dans les délais de la police. Ne jamais « attendre de voir » ni tenter de régler l’incident en interne sans banque : le virement parti ne revient pas par politesse.',
    reasoning:
      'Scénario aigu de fraude/erreur détectée au matin. Le recruteur veut : la chronologie correcte — vérifier l’origine, qualifier, agir banque en urgence (rappel/opposition), alerter, tracer — avec la conscience que le facteur temps est le seul level réel de récupération. La distinction erreur/fraude et l’assurance cyber avec ses délais sont les marqueurs de niveau. Le refus de l’attentisme conclut.',
    commonErrors: [
      'Attendre la fin de journée ou le retour du collègue concerné avant d’agir.',
      'Tenter de résoudre en interne sans mobiliser la banque immédiatement.',
      'Ne pas geler les autres paiements et accès pendant l’investigation.',
      'Oublier la déclaration à l’assurance cyber et ses délais contractuels.',
    ],
    oralShort:
      'J’agis immédiatement. Je vérifie l’origine : qui a initié, qui a validé, quel justificatif. Je qualifie : erreur ou fraude. Je contacte la banque dans la foulée — rappel de virement, opposition ; si la fraude est confirmée, dépôt de plainte. J’alerte direction et sécurité informatique, je gèle les validations en cours, je fais changer les accès. Et je trace tout — logs, mails — avec la déclaration à l’assurance cyber dans ses délais. Le facteur temps commande tout.',
    oralLong:
      'Par définition, un virement sortant vers un compte inconnu, initié en soirée, est un incident de paiement jusqu’à preuve du contraire : le réflexe est l’urgence organisée, pas l’enquête lente. L’objectif : maximiser la chance de récupération et contenir le périmètre. Ma chronologie en cinq temps. Temps un, l’origine : dans l’ERP et l’outil bancaire, j’identifie qui a initié le virement, qui l’a validé, à quelle heure, avec quel justificatif ; l’absence de justificatif, un montant rond, un bénéficiaire jamais vu, une exécution tardive : autant de signaux qui orientent vers la fraude, mais je ne conclus pas avant les faits. Temps deux, la qualification : erreur — mauvais IBAN sélectionné, doublon, montant saisi — ou fraude — usurpation, complicité interne ; le traitement converge de toute façon vers l’urgence bancaire. Temps trois, la banque, sans attendre : demande de rappel du virement — efficace s’il n’est pas encore exécuté ou compte à compte dans la même banque — ; opposition, puis, fraude confirmée, dépôt de plainte : chaque heure compte, la traçabilité des fonds se dégrade vite. Temps quatre, l’alerte et le confinement : responsable, direction, sécurité informatique — une fraude au paiement vient presque toujours avec une compromission des accès : mots de passe, jetons, règles de messagerie à vérifier et changer ; je gèle les validations de paiements en cours pour éviter un deuxième départ. Temps cinq, la trace : je conserve tout — logs, mails, écrans, enregistrements d’appels —, je reconstitue la chronologie par écrit horodaté, et je déclare à l’assurance cyber dans les délais de la police : beaucoup de couvertures exigent une déclaration rapide, la manquer peut coûter la garantie. Par exemple, sur mon stage fictif, un virement de fin de journée s’était révélé être un doublon de facture — rappelé dans l’heure, sans perte ; mais la procédure suivie fut exactement la même que pour une fraude. En conclusion : vérifier, qualifier, rappeler, alerter, tracer — dans cet ordre, en heures, jamais en jours ; un virement parti ne revient pas par politesse.',
    followUp: 'La banque annonce que le virement est déjà exécuté vers une banque étrangère : quelles sont les suites ?',
    grading: [
      'Chronologie correcte : origine → qualification → banque en urgence → alerte → traçabilité.',
      'Actions bancaires précises : rappel, opposition, plainte.',
      'Confondre non : gel des validations, changement des accès, sécurité informatique.',
      'Traçabilité et assurance cyber avec ses délais contractuels.',
    ],
  },
  {
    id: 'qc-070',
    job: 'tresorerie',
    category: 'justification',
    difficulty: 4,
    skill: 'Politique de paiement et BFR',
    question: 'Un acheteur s’agace : la facture est validée depuis trois jours, pourquoi tu ne la paies pas immédiatement ? Justifie ta politique.',
    expectedAnswer:
      'La justification tient en quatre arguments. Un, la mécanique du BFR : payer à l’échéance plutôt qu’à réception, c’est conserver une ressource gratuite — le crédit fournisseur finance le poste clients et le stock ; payer en avance, c’et renoncer à ce financement sans contrepartie. Deux, le coût de l’argent : payer plus tôt n’a de sens que contre un escompte dont le taux annualisé dépasse le coût de financement de l’entreprise — le calcul se fait, pas l’intuition. Trois, l’organisation des paiements : les cycles de paiement groupés — dates fixes, échéanciers — mutualisent le contrôle anti-fraude et la charge de travail ; payer à la demande, c’est multiplier les paiements urgents, chaque paiement urgent étant un point de fragilité du contrôle. Quatre, la discipline de contrôle : les trois jours d’écart servent aux vérifications — rapprochement commande/réception, bénéficiaire, changements d’IBAN ; la validated comptable n’est pas le feu vert du trésorier. Exceptions assumées et formalisées : fournisseur critique, escompte rentable, pénalités de retard, négociation de fin d’année — traitées par une procédure d’exception validée, pas par le forcing. Cette politique est interne : ses seuils et calendriers se définissent par entreprise, la logique reste.',
    reasoning:
      'Question de posture : le trésorier doit savoir défendre sa politique face à l’opérationnel sans être ni rigide ni complaisant. Les quatre arguments attendus : BFR et ressource gratuite, escompte calculé, mutualisation du contrôle, discipline anti-fraude. La procédure d’exception formalisée — plutôt que la souplesse au cas par cas — est le marqueur de maturité : elle évite que l’exception devienne la règle.',
    commonErrors: [
      'Répondre « c’est la règle » sans justification économique.',
      'Payer immédiatement pour éviter le conflit et détruire la discipline.',
      'Accorder l’escompte par intuition sans annualiser son coût.',
      'Laisser les exceptions se multiplier sans procédure formalisée.',
    ],
    oralShort:
      'Je justifie par l’économie et par le contrôle. Payer à l’échéance, c’est garder une ressource gratuite qui finance notre cycle. Payer plus tôt ne se fait que contre un escompte dont le taux annuel dépasse notre coût de financement — ça se calcule. Les cycles de paiement groupés mutualisent les contrôles anti-fraude. Et les trois jours servent aux vérifications. Les exceptions existent — fournisseur critique, pénalités — mais par procédure validée, pas par forcing.',
    oralLong:
      'Par définition, la politique de paiement arbitre entre trois intérêts : la trésorerie, la relation fournisseur et la sécurité — l’acheteur voit la relation, le trésorier porte les deux autres. L’objectif de ma justification : montrer que la règle n’est pas bureaucratique mais économique. Premier argument, le BFR : chaque jour de crédit fournisseur finance le cycle — clients, stock ; payer à réception, c’est offrir à nos fournisseurs un financement gratuit alors qu’ils nous en accordent un par contrat. Deuxième argument, le calcul : payer en avance ne se conçoit que contre un escompte — et l’escompte se juge annualisé : 2 % pour 20 jours d’avance représente un coût de financement implicite d’environ 36 % l’an pour le fournisseur — et un rendement équivalent pour nous si notre coût d’argent est inférieur : c’est un arbitrage chiffré, pas un réflexe de complaisance. Troisième argument, l’organisation : les paiements groupés à dates fixes — le 10 et le 25, par exemple — concentrent les contrôles, l’usage des outils bancaires, la charge de l’équipe ; le paiement à la demande disperse tout ça et crée un couloir d’exceptions où la fraude prospère. Quatrième argument, le contrôle lui-même : la validation comptable — rapprochement commande, réception, facture — n’est pas le feu vert du paiement ; mes trois jours de délai portent la vérification du bénéficiaire, des changements d’IBAN, des doublons ; c’est là que la fraude au faux fournisseur se joue. Les exceptions, assumées : fournisseur critique dont l’arrêt bloque la production, escompte rentable, pénalités de retard contractuelles, geste de fin d’année négocié — elles passent par une procédure d’exception, validée par le responsable, documentées : l’exception encadrée protège la règle, l’exception sauvage la détruit. Par exemple, sur mon stage fictif, l’acheteur d’un composant unique obtenait ses paiements accélérés — par exception validée, jamais par l’habitude. En conclusion : ressource gratuite, escompte calculé, contrôles mutualisés, vérifications bénéficiaire — quatre raisons économiques et de sécurité, une procédure d’exception pour les cas réels.',
    followUp: 'Le fournisseur propose 2 % d’escompte pour paiement à 10 jours au lieu de 45 : comment tu décides ?',
    grading: [
      'Argument BFR : crédit fournisseur = ressource gratuite, paiement anticipé = renoncement.',
      'Escompte arbitré par calcul annualisé contre coût de financement.',
      'Mutualisation des contrôles et discipline anti-fraude des cycles de paiement.',
      'Exceptions formalisées, pas de complaisance au cas par cas.',
    ],
  },
  {
    id: 'qc-071',
    job: 'tresorerie',
    category: 'relances',
    difficulty: 4,
    skill: 'Processus de relance clients',
    question: 'Ton process de relance clients, de la douceur à la fermeté : déroule-le moi.',
    expectedAnswer:
      'Avant toute relance, deux précautions : vérifier que la facture est juste — litige qualité, avoir non émis, erreur de facturation : relancer une facture contestée abîme la relation et ne règle rien ; et identifier le bon interlocuteur — le comptable chez le client, le commercial chez nous, selon la politique de l’entreprise. Puis l’escalade graduée : J+3 à J+10 après échéance, rappel convivial — mail ou appel, on évoque un oubli possible ; J+10 à J+20, relance écrite ferme avec rappel des conditions et du solde exact ; J+20 à J+30, relance recommandée, arrêt des livraisons ou des nouvelles commandes — coordonné avec le commercial, jamais subi par lui ; simultanément, escalade à la direction commerciale puis à la direction générale pour les comptes stratégiques ; au-delà, la voie contentieuse : mise en demeure par avocat, injonction de payer, puis assignation — décision au cas par cas : coût de la procédure contre montant, valeur de la relation, solvabilité du client. Le tout outillé : tableau d’ancienneté, promesses de paiement tracées et suivies — une promesse non tenue relance le processus à l’étape supérieure.',
    reasoning:
      'Le recruteur veut un process réaliste et gradué, avec les deux précautions initiales — facture juste, bon interlocuteur — qui manquent chez les candidats sans expérience : relancer une facture litigieuse est la faute classique. L’escalade datée, l’arrêt de livraisons coordonné avec le commercial, l’arbitrage contentieux (coût vs montant vs relation) et le suivi des promesses constituent la réponse complète.',
    commonErrors: [
      'Relancer une facture en litige sans avoir traité le différend commercial.',
      'Laisser le commercial apprendre l’arrêt des livraisons sans coordination.',
      'Passer au contentieux par principe sans arbitrer coût/montant/relation.',
      'Ne pas tracer les promesses de paiement et leurs manquements.',
    ],
    oralShort:
      'Avant de relancer, je vérifie que la facture est juste — pas de litige, pas d’avoir manquant — et j’identifie le bon interlocuteur. Puis l’escalade : J+3, rappel convivial ; J+10, relance ferme avec le solde exact ; J+20, recommandée et arrêt des livraisons, coordonné avec le commercial ; en parallèle, escalade direction. Au-delà, mise en demeure et contentieux — arbitré coût contre montant et relation. Le tout dans un tableau d’ancienneté avec les promesses tracées.',
    oralLong:
      'Par définition, la relance client est un processus de recouvrement gradué dont l’objectif est d’encaisser sans casser la relation commerciale — l’un ne va pas sans l’autre. Ma méthode commence avant la relance elle-même. Précaution un : la facture est-elle juste et incontestée — qualité livrée, quantités, avoir à émettre, erreur de saisie ? Relancer une facture contestée, c’est envoyer le message que nous n’écoutons pas nos clients, et le différend commercial qui s’installe coûte plus que le délai de paiement. Précaution deux : le bon interlocuteur — chez le client, son service comptable ; chez nous, selon la politique, le commercial d’abord pour le lien, le comptable ensuite pour la fermeté : les deux doivent jouer ensemble. Puis l’escalade, avec des jalons datés. À J+3-J+10 après l’échéance : rappel convivial, mail ou appel — on évoque l’oubli, on redonne les références et le IBAN. À J+10-J+20 : relance écrite ferme — solde exact, conditions contractuelles rappelées, date de règlement demandée. À J+20-J+30 : recommandé, et leviers commerciaux : arrêt des livraisons ou blocage des nouvelles commandes — toujours coordonné avec le commercial, jamais subi par lui ; en parallèle, escalade interne : directeur commercial puis direction générale pour les comptes stratégiques — un appel de DG à DG débloque des situations que dix mails n’ont pas touchées. Au-delà : la voie contentieuse — mise en demeure, injonction de payer, assignation — sur arbitrage : coût de la procédure, montant en jeu, valeur de la relation, solvabilité apparente du débiteur ; on ne poursuit pas un client en procédure collective pour 3 000 euros, on poursuit pour 80 000 ce qui doit l’être. L’outillage tient le processus : tableau d’ancienneté par facture, promesses de paiement enregistrées avec leur date — une promesse non tenue fait passer à l’étape suivante sans discussion. Par exemple, sur mon stage fictif, 60 % des impayés se réglaient au premier appel — les 40 % restants justifiaient seuls l’escalade. En conclusion : facture juste, interlocuteur juste, escalade datée, coordination commerciale, contentieux arbitré — et tout tracé.',
    followUp: 'Un client stratégique en retard de 60 jours menace de se tourner vers un concurrent si on bloque ses commandes : tu gères comment ?',
    grading: [
      'Précautions initiales : facture incontestée, bon interlocuteur.',
      'Escalade graduée et datée avec jalons réalistes.',
      'Coordination commerciale sur les leviers (arrêt de livraisons, escalade DG).',
      'Arbitrage contentieux : coût/montant/relation/solvabilité, promesses tracées.',
    ],
  },
  {
    id: 'qc-072',
    job: 'tresorerie',
    category: 'cas-pratiques',
    difficulty: 5,
    skill: 'Analyse d’un écart prévision/réalisé',
    question: 'Ta prévision à six semaines annonçait −15 000 en semaine 5 ; le réalisé est −62 000. Démarche d’analyse et suites ?',
    expectedAnswer:
      'Écart de 47 000 à décomposer, pas à commenter globalement. Démarche en quatre temps. Un, décomposer ligne à ligne par nature : écart d’encaissements — quel client, quel montant, quelle cause : retard, litige naissant, rejet bancaire, insolvabilité ? — et écart de décaissements — paiement urgent, double règlement, prélèvement exceptionnel, fraude à éliminer. Deux, vérifier la qualité de la mesure : solde initial exact ? suspens correctement traités ? virement inter-comptes compté une fois ou deux ? une erreur de position fausse tout l’agrégat. Trois, qualifier chaque cause : ponctuelle — un client majeur en retard de quelques jours — ou récurrente — le comportement de paiement du client dévie durablement de l’hypothèse du modèle ; structurelle — le modèle lui-même est mal calibré sur une catégorie de flux. Quatre, corriger et agir : recaler le modèle — hypothèses de comportement client par client, dates de valeur, saisonnalité — ; actions immédiates si la trajectoire reste négative : relances ciblées sur les encaissements manquants, mobilisation de créances, ligne court terme, priorisation des paiements ; et documentation : l’analyse de l’écart rejoint la revue hebdo — c’est la boucle prévu/réalisé qui fiabilise la prévision semaine après semaine. Un écart de 47 000 sur un flux hebdomadaire de 200 000 n’est pas un bruit : c’est une information.',
    reasoning:
      'Cas D5 de pilotage : l’écart 47 000 — vérifié — doit être décomposé par nature (encaissements/décaissements), la qualité de la mesure contrôlée (position initiale, suspens, doublons inter-comptes), chaque cause qualifiée ponctuelle/récurrente/structurelle, et le modèle recalibré. Le candidat faible commente l’écart ; le candidat fort le décompose et transforme l’incident en amélioration du modèle. La boucle prévu/réalisé est le fil rouge.',
    commonErrors: [
      'Commenter l’écart globalement sans le décomposer par nature et par client.',
      'Sauter la vérification de la mesure : position initiale, suspens, doublons inter-comptes.',
      'Ne pas distinguer causes ponctuelles et dérive structurelle du modèle.',
      'Oublier les actions immédiates en se contentant de recaler la prévision.',
    ],
    oralShort:
      'Un écart de 47 000 ne se commente pas, il se décompose. Je rapproche prévu et réalisé ligne à ligne : côté encaissements, quel client a manqué, pourquoi — retard, litige, rejet ; côté décaissements, quel paiement a dépassé — urgence, double règlement, fraude à écarter. Je vérifie aussi la mesure : position initiale, suspens, virements inter-comptes comptés deux fois. Puis je qualifie chaque cause — ponctuelle ou structurelle — je recale le modèle, et j’agis si la trajectoire reste mauvaise : relances, mobilisations, ligne court terme.',
    oralLong:
      'Par définition, l’écart prévision/réalisé est la donnée la plus riche du pilotage de trésorerie : il dit où le modèle se trompe, donc où l’entreprise vit quelque chose. L’objectif de l’analyse : transformer un incident en information calibrée. Ma démarche en quatre temps. Temps un, la décomposition : je rapproche ligne à ligne la prévision et le réalisé de la semaine 5. Côté encaissements : quels clients manquent à l’appel, pour quels montants — un client majeur à 35 000 en retard de quatre jours, un autre à 12 000 dont la banque a rejeté le prélèvement ? Côté décaissements : quelles sorties n’étaient pas prévues — un paiement urgent déclenché par un service, un double règlement d’une facture, un prélèvement exceptionnel ? Et j’écarte méthodiquement le scénario fraude : un décaissement inexpliqué de ce montant se vérifie comme tel. Temps deux, la qualité de la mesure : le solde initial de la semaine était-il exact — un suspens mal purgé la veille fausse toute la chaîne ; les virements inter-comptes ont-ils été comptés une seule fois — la double comptabilisation d’un transfert de 20 000 crée un écart fantôme ; les dates de valeur ont-elles été respectées ? Temps trois, la qualification : chaque cause est ponctuelle — un retard isolé, un paiement urgent — ou récurrente — le client paie désormais à 60 jours contre 35 dans le modèle — ou structurelle — le modèle ignore une catégorie de flux, par exemple les notes de frais. Temps quatre, la correction et l’action : je recale le modèle là où la cause est récurrente ou structurelle — hypothèses de comportement par client, dates de valeur, saisonnalité — ; et si la trajectoire des semaines suivantes reste dégradée, j’agis : relances ciblées sur les encaissements manquants, mobilisation de créances, activation de la ligne court terme, priorisation des paiements. Le tout documenté dans la revue hebdo : c’est cette boucle prévu/réalisé, itérée chaque semaine, qui transforme la prévision en outil fiable. Par exemple, sur mon stage fictif, un écart récurrent de 15 000 venait d’un client public dont le cycle de paiement réel était de 75 jours contre 45 supposés — corrigé une fois pour toutes dans le modèle. En conclusion : décomposer, vérifier la mesure, qualifier, recaler et agir — un écart de 47 000 n’est pas un bruit de fond, c’est le système qui parle.',
    followUp: 'L’écart vient d’un seul client qui représente 30 % de tes encaissements : ça change quoi à ton analyse ?',
    grading: [
      'Décomposition ligne à ligne : écart encaissements vs décaissements, par client.',
      'Vérification de la mesure : position initiale, suspens, doublons inter-comptes.',
      'Qualification ponctuel/récurrent/structurel et recalibrage du modèle.',
      'Actions immédiates + boucle prévu/réalisé documentée.',
    ],
  },
  {
    id: 'qc-073',
    job: 'tresorerie',
    category: 'pieges',
    difficulty: 5,
    skill: 'Limites du solde bancaire quotidien',
    question: 'Ton solde bancaire est positif chaque soir. Ta trésorerie est donc saine, non ?',
    expectedAnswer:
      'Non — le solde de fin de journée est un indicateur myope. Ce qu’il cache : le tunnel intra-journalier et intra-semaine — des décaissements concentrés en début de semaine peuvent creuser le compte à −80 000 le mardi avant de remonter le jeudi ; les chèques émis non débités — une dette flottante qui partira en débit ; les virements émis en suspens et les remises non créditée ; les dates de valeur — débit comptable et débit en valeur divergent, et les jours de valeur coûtent ; les positions par compte — un compte excédentaire pendant qu’un autre est à découvert, avec des frais d’escompte de position ; les engagements donnés — paiements programmés de demain, chèques remis ; et les dettes échues non payées : un solde positif obtenu en ne payant pas ses fournisseurs n’est pas de la santé, c’est du retard qui s’accumule — et à l’inverse, un solde positif élevé peut signaler une sur-liquidité improductive, du cash mal rémunéré. La vraie santé de trésorerie se juge sur l’ensemble : trésorerie nette cohérente avec la structure FR/BFR, prévision fiable avec boucle prévu/réalisé, suspens purgés, dettes réglées à l’échéance, lignes dimensionnées sur le point bas — pas sur la photo du soir.',
    reasoning:
      'Question piège de niveau élevé : le solde quotidien positif rassure à tort. Le candidat doit énumérer les angles morts — tunnel, dette flottante, suspens, dates de valeur, positions par compte, engagements, dettes échues — et retourner le piège : un solde positif peut même signaler une sur-liquidité. La conclusion multi-critères — TN, prévision, suspens, échéances, lignes — définit la santé réelle. C’est la synthèse de tout le bloc trésorerie.',
    commonErrors: [
      'Confondre solde bancaire du soir et santé de trésorerie.',
      'Ignorer le tunnel intra-semaine et la dette flottante des chèques émis.',
      'Ne pas voir qu’un solde positif peut venir de dettes échues non payées.',
      'Oublier qu’un excès de cash non rémunéré est aussi un signal d’inefficacité.',
    ],
    oralShort:
      'Non. Le solde du soir cache le tunnel de la semaine — un creux à −80 000 le mardi ; les chèques émis non débités — dette flottante ; les suspens ; les dates de valeur ; un compte à découvert pendant qu’un autre est excédentaire ; les engagements de demain ; et les dettes échues non payées — un solde positif obtenu en retardant les paiements, c’est du retard, pas de la santé. Et un cash excessif mal rémunéré, c’est de l’inefficité. La santé se juge sur la TN, la prévision, les suspens et les échéances.',
    oralLong:
      'Par définition, le solde bancaire de fin de journée est une photographie instantanée d’un compte à un instant — la santé de trésorerie est un film économique. L’objectif de la question : vérifier que je ne pilote pas au compteur du soir. Ce que le solde positif cache, angle par angle. Le tunnel : les flux d’une semaine ne sont pas uniformes — paie le 28, TVA le 20, encaissements concentrés en fin de semaine : le compte peut descendre à −80 000 dans la semaine et finir positif le vendredi : le solde du soir est le meilleur des cas, pas la réalité vécue. La dette flottante : les chèques émis non présentés partiront en débit — le solde affiché surestime le disponible de tout ce passif latent. Les suspens : des virements émis non réglés, des remises non créditées, du cash en transit dont on ne sait où il est. Les dates de valeur : le débit comptable et le débit en valeur divergent de un à trois jours — et les jours de valeur ont un coût, surtout en découvert. Les positions par compte : en multi-banques, un compte excédentaire peut coexister avec un autre à découvert générateur d’agios — la position consolidée seule parle. Les engagements donnés : les paiements programmés de demain, les chèques remis à l’encaissement — le solde d’aujourd’hui ne dit rien de demain. Et le cas le plus grave : les dettes échues non payées — un solde positif obtenu en retardant fournisseurs, fisicité, sociales n’est pas de la santé : c’est de la tension déguisée, qui se paiera en pénalités, en relation, parfois en procédure. Symétriquement, l’excès : un solde durablement élevé et mal rémunéré est de la sur-liquidité — de l’argent improductif. La santé réelle se juge donc sur un faisceau : trésorerie nette cohérente avec la structure FR/BFR, prévision fiable avec sa boucle prévu/réalisé, suspens purgés et âgés, échéances réglées à leurs dates, lignes dimensionnées sur le point bas réel. Par exemple, sur mon stage fictif, une entreprise au solde positif chaque soir a déposé le bilan trois mois plus tard : ses chèques émis non débités et son impayé URSSAF racontaient une autre histoire. En conclusion : le solde du soir est un instrument, pas un diagnostic — la santé de trésorerie se mesure en film, en structure et en discipline, jamais en photo.',
    followUp: 'Quels trois indicateurs complémentaires tu associes au solde quotidien pour un vrai diagnostic ?',
    grading: [
      'Réponse non argumentée : le solde du soir est myope.',
      'Angles morts énumérés : tunnel, dette flottante, suspens, dates de valeur, positions par compte.',
      'Double retournement : dettes échues non payées et sur-liquidité.',
      'Diagnostic multi-critères : TN, prévision, suspens, échéances, lignes.',
    ],
  },
  {
    id: 'qc-074',
    job: 'tresorerie',
    category: 'limites',
    difficulty: 5,
    skill: 'Limites du rôle face à une pression de paiement',
    question: 'Un directeur veut payer aujourd’hui une facture de 45 000 sans la procédure complète — pas de bon de réception à l’appui —, « c’est urgent ». Où sont tes limites ?',
    expectedAnswer:
      'Les limites se posent sur trois plans. Le plan du rôle : la trésorerie exécute des paiements validés — elle n’est pas un guichet ; écarter les contrôles n’est pas de son ressort, même sur injonction verbale d’un opérationnel. Le plan de l’exception légitime : une urgence réelle — fournisseur critique, pénalité de rupture, juridiction — se traite par la procédure d’exception : validation écrite explicite d’un habilité — DG ou DAF selon la matrice —, paiement tracé comme exception, dossier complété a posteriori dans un délai fixé, par exemple le BL sous cinq jours. Ce qui ne se négocie jamais : payer sur simple pression orale, fabriquer ou arranger des pièces, contourner la matrice de signatures, se rendre complice d’un contournement répété — en jeu : la responsabilité personnelle du trésorier et la qualification de complicité si les faits sont répréhensibles. Le plan du refus : un refus fondé s’exprime par écrit, avec l’alternative — la voie rapide conforme ; face à l’insistance, l’escalade hiérarchique est un devoir, pas une délation : le N+1 ou le DG arbitre. Tout se trace : mails, validations, exceptions — la trace protège l’entreprise et le trésorier.',
    reasoning:
      'Question d’éthique opérationnelle, redoutable car la tentation de céder à la hiérarchie est réelle. Le candidat doit articuler : l’exception existe mais formalisée — validation écrite d’un habilité, dossier a posteriori, traçabilité ; les limites absolues — jamais de pièce fabriquée, jamais de contournement complice ; le refus écrit avec alternative et l’escalade comme devoir. La dimension de responsabilité personnelle du trésorier clôt la réponse avec gravité.',
    commonErrors: [
      'Céder à la pression hiérarchique et payer sans formalisation aucune.',
      'Refuser sèchement sans proposer la voie rapide conforme.',
      'Accepter que l’exception devienne la règle sans escalade.',
      'Accepter de « compléter » soi-même les pièces manquantes pour débloquer le paiement.',
    ],
    oralShort:
      'Mes limites : je n’écarts pas les contrôles sur injonction verbale — ce n’est pas mon ressort. Une urgence réelle se traite par la procédure d’exception : validation écrite d’un habilité selon la matrice, paiement tracé comme exception, dossier complété sous cinq jours. Ce qui ne se négocie jamais : payer sur pression orale, fabriquer des pièces, contourner la matrice. Refus écrit, avec l’alternative conforme, et escalade au N+1 si l’insistance persiste. Tout se trace.',
    oralLong:
      'Par définition, le trésorier est l’exécutant contrôlé des paiements de l’entreprise : son rôle est de payer vite et bien les paiements légitimes, et de protéger l’entreprise — et lui-même — sur tout le reste. L’objectif de la question : situer mes limites entre rigidité bureaucratique et complaisance dangereuse. Premier plan, le rôle : l’urgence d’un opérationnel ne modifie pas mes obligations de contrôle ; décider d’écarter la procédure n’appartient ni à lui ni à moi — la demande remonte à ceux qui ont l’autorité de déroger. Deuxième plan, l’exception légitime : une urgence réelle existe — fournisseur unique qui menace d’arrêter les livraisons, pénalité contractuelle majeure, exigence judiciaire. Elle se traite par la procédure d’exception : validation écrite et explicite d’un habilité — DG ou DAF selon la matrice — qui assume la dérogation ; paiement exécuté, tracé comme exception avec sa justification ; dossier complété a posteriori dans un délai contracté — par exemple le bon de réception produit sous cinq jours ; et l’exception comptée : une exception qui se répète chaque mois n’est plus une exception, c’est un contournement, et ce constat remonte. Troisième plan, les limites absolues : payer sur simple pression orale — non ; créer, arranger ou compléter soi-même les pièces manquantes — non : c’est le délit de faux et la complicité ; contourner la matrice de signatures — non ; se rendre complice, par lassitude ou loyauté mal placée, d’un contournement répété — non : ma responsabilité personnelle est engagée, et en cas de fraude ou de détournement, l’exécutant complice répond comme l’instigateur. Le refus se fait proprement : par écrit, argumenté, avec l’alternative — la voie rapide conforme prend souvent moins de deux heures — ; face à l’insistance, l’escalade au N+1 ou au DG est un devoir professionnel, pas une délation : c’est l’entreprise qui arbitre, pas la peur. Et tout se trace : mails, validations, refus, exceptions — la trace protège tout le monde, y compris celui qui a demandé l’exception de bonne foi. Par exemple, sur mon stage fictif, une demande similaire s’était réglée en une heure : BL numérisé par le magasin, validation DAF par mail, paiement le jour même — l’urgence était réelle, la forme fut tenue. En conclusion : exception formalisée oui, contournement non, refus écrit avec alternative, escalade comme devoir — la limite du trésorier n’est pas son confort, c’est la loi et la traçabilité.',
    followUp: 'La même demande d’exception revient tous les mois du même directeur : quelle est ta démarche ?',
    grading: [
      'Position de rôle claire : la trésorerie n’écarte pas les contrôles sur injonction.',
      'Exception formalisée : validation écrite d’un habilité, dossier a posteriori, délai.',
      'Limites absolues : pas de pièce fabriquée, pas de complicité, responsabilité personnelle.',
      'Refus écrit avec alternative, escalade hiérarchique et traçabilité systématique.',
    ],
  },
  {
    id: 'qc-075',
    job: 'tresorerie',
    category: 'communication-client',
    difficulty: 5,
    skill: 'Annonce d’une tension de trésorerie',
    question: 'Ta prévision montre une tension sérieuse dans trois semaines. À qui tu en parles, quand, et comment ?',
    expectedAnswer:
      'À qui, dans l’ordre : d’abord son N+ — DAF ou directeur — avec un dossier factuel, pas une alerte approximative ; c’est lui qui décide de l’escalade. Puis, sur validation, la banque — proactivement : une banque prévenue avec un plan vaut mieux qu’une banque qui découvre un dépassement ; le dialogue se prépare : causes, calendrier, scénarios d’action, tableaux de bord. En parallèle, coordonner les internes selon la discrétion voulue : achats pour négocier des échelonnements fournisseurs, commercial pour activer les relances et promesses de paiement — sans alerter toute l’entreprise : la confidentialité protège la relation fournisseurs et le climat. Quand : dès que la prévision franchit le seuil d’alerte de la politique interne — par exemple TN projetée négative au-delà de X jours — pas le jour du point bas : trois semaines, c’est le dernier moment utile, car les options — négociations, mobilisations, ligne — demandent toutes des délais. Comment : factuel et orienté solutions — chiffres, dates, causes, scénarios chiffrés, décision demandée ; ni panique ni minimisation : la première coûte la crédibilité, la seconde coûte le temps. La communication de trésorerie est un outil de pilotage : bien faite, elle transforme une tension en gestion ; mal faite, en crise.',
    reasoning:
      'Question de communication professionnelle, la plus transversale du bloc. Le recruteur veut : la hiérarchie des destinataires — N+ d’abord, banque sur validation, internes coordonnés —, le timing lié au seuil d’alerte et aux délais d’action, la posture factuelle orientée solutions, et la confidentialité. Les marqueurs de niveau : la banque prévenue proactivement vaut mieux que découvrante, et le dossier préparé avec scénarios. C’est la question qui teste la maturité au-delà de la technique.',
    commonErrors: [
      'Garder la tension pour soi en espérant qu’elle se résorbe.',
      'Alerter toute l’entreprise et semer le doute auprès des équipes.',
      'Prévenir la banque le jour du point bas, sans plan ni dossier.',
      'Présenter le problème sans scénarios d’action ni décision demandée.',
    ],
    oralShort:
      'D’abord mon N+, avec un dossier factuel : point bas daté, montant, causes, scénarios chiffrés, décision demandée. Puis la banque sur validation — proactivement, avec un plan : une banque prévenue vaut mieux qu’une banque qui découvre. En parallèle, achats et commercial coordonnés pour échelonnements et relances, en restant confidentiel. Trois semaines, c’est le dernier moment utile : les options prennent toutes du temps. Posture : factuel, orienté solutions, ni panique ni minimisation.',
    oralLong:
      'Par définition, annoncer une tension de trésorerie est un acte de pilotage : l’information circule assez tôt pour agir, assez précisément pour décider, et assez confidentiellement pour ne pas créer la crise qu’on veut éviter. L’objectif : transformer une alerte prévisionnelle en plan d’action assumé. À qui, dans l’ordre. D’abord mon N+ — directeur financier ou directeur : avec un dossier, pas une inquiétude — le point bas daté et chiffré, les causes identifiées, l’évolution de la prévision sur quatre semaines, et surtout des scénarios chiffrés avec la décision que je demande : activer la ligne, mobiliser des créances, échelonner. C’est lui qui arbitre et qui autorise l’escalade. Ensuite la banque, sur validation et si la tension justifie : proactivement, jamais au moment du dépassement — une banque prévenue avec un plan reste partenaire ; une banque qui découvre un dépassement devient contrôleur : le dialogue se prépare — causes datées, calendrier de résorption, tableaux de bord, engagements mesurables. En parallèle, les relais internes, dosés : les achats pour négocier des échelonnements fournisseurs en silence, le commercial pour activer relances et promesses de paiement — sans alerter l’entreprise entière : la rumeur de trésorerie fragilise les fournisseurs et le climat plus qu’elle n’aide. Quand : dès le franchissement du seuil d’alerte de la politique interne — trésorerie projetée négative au-delà d’un nombre de jours fixé — et là, trois semaines avant le point bas, c’est le dernier moment utile : négocier un échelonnement mobilise une à deux semaines, mettre en place une mobilisation de créances aussi, une ligne nouvelle davantage. Comment : factuel et orienté action — je présente le problème avec ses chiffres, mais je présente surtout les options avec leurs conséquences et je demande une décision ; ni panique — elle coûte la crédibilité et l’attention exagérée — ni minimisation — elle coûte le temps des options. Et je formalise : compte rendu écrit de chaque échange, engagements suivis dans le tableau hebdo — la communication de trésorerie se trace comme les paiements. Par exemple, sur mon stage fictif, une tension annoncée trois semaines à l’avance avec plan avait été digérée par un échelonnement fournisseur et une avance de facturation : zéro incident bancaire, zéro rumeur. En conclusion : à son N+ avec un dossier, à la banque avec un plan, aux opérationnels avec des consignes — tôt, factuel, confidentiel et orienté décision : c’est la différence entre une tension gérée et une crise subie.',
    followUp: 'Ton N+ te demande de ne rien dire à la banque « pour l’instant » : tu lui objectes quoi ?',
    grading: [
      'Hiérarchie des destinataires : N+ avec dossier, banque sur validation, internes coordonnés.',
      'Timing : seuil d’alerte de la politique interne, délais réels des options.',
      'Posture : factuel, scénarios chiffrés, décision demandée — ni panique ni minimisation.',
      'Confidentialité et formalisation des échanges.',
    ],
  },
]
