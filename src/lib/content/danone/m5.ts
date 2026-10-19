// =====================================================================
// Fiche 3 — Centrale Danone · Mission 5
// Remontée de failles de procédure à la direction (2 failles signalées)
// =====================================================================
import type { Mission } from '@/lib/types'
import { DANONE_REFERENCE, FICHE3_DISCLAIMER, danoneBase } from './_commun'

export const danoneM5: Mission = {
  ...danoneBase(5),
  id: 'danone-m5',
  title: 'Remontée de failles de procédure à la direction',
  summary:
    'Identifier, documenter et remonter à la direction deux failles de procédure constatées sur les cycles achats : séparation des tâches et validation a priori des demandes d’achat, puis traçabilité du rapprochement commande / facture / archive. Pour chacune : cause première, risque, incidence chiffrée, recommandation proportionnée, responsable, délai et contrôle de suivi — puis mesure de l’efficacité de la remédiation. Scénario fictif à visée pédagogique.',
  referenceData: [
    FICHE3_DISCLAIMER,
    ...DANONE_REFERENCE,
    'Mission 5 : deux failles de procédure signalées à la direction, avec recommandations, responsable et suivi — faille 1 : validation des demandes d’achat (séparation des tâches, validation a priori) ; faille 2 : traçabilité et rapprochement documentaire (numérotation, factures, archives).',
  ],
  comprehension: {
    intro:
      'Détecter une anomalie est un réflexe ; la transformer en remontée utile à la direction est une compétence. Une faille de procédure n’est pas une erreur de plus : c’est une déviance durable qui prive un contrôle de son efficacité — la même personne qui émet et valide une dépense, un rapprochement documentaire qui ne se fait qu’à moitié, une numérotation dont personne ne peut prouver l’exhaustivité. La remontée suit une discipline en quatre temps : établir le fait (période, échantillon, chiffres, références des pièces), qualifier la faille (cause première, risque encouru, conséquences constatées — trois notions à ne jamais confondre), la situer (ponctuelle ou récurrente, quel périmètre, quelle incidence), puis la traiter (recommandation proportionnée, responsable d’action, délai, contrôle de suivi, et mesure de l’efficacité de la remédiation). La règle d’or tient en une phrase : on remonte des faits observables, jamais des jugements — « 6 demandes sur 12 validées par leur demandeur » se défend, « le service est négligent » se conteste. Dans ce scénario fictif, deux failles ont été signalées à la direction de la centrale laitière en septembre 2024 : la validation des demandes d’achat d’une part, la traçabilité du rapprochement commande / facture / archive d’autre part. Réflexe de base : avant d’écrire la première ligne de la note de remontée, vérifier que chaque affirmation tient sur un élément probant — sinon, elle n’est pas prête à être écrite.',
    definitions: [
      { term: 'Faiblesse de contrôle interne (faille de procédure)', definition: 'Défaut d’un dispositif de contrôle qui le prive de son efficacité : règle ambiguë, contrôle non prévu, séparation des tâches absente. Elle se démontre par des faits répétés et datés, jamais par une impression. C’est l’objet de la remontée : corriger le dispositif, pas seulement l’incident.' },
      { term: 'Cause / risque / conséquence', definition: 'Triptyque à distinguer absolument. La cause explique pourquoi la faille existe (texte ambigu, paramétrage logiciel, habitude tolérée) ; le risque est ce qui peut arriver tant qu’elle existe (dépense non contrôlée, piste d’audit non démontrable) ; la conséquence est ce qui est déjà arrivé et se chiffre (6 demandes non validées conformément pour 7 615,00 €, 4 commandes sans facture pour 4 038,40 €). Confondre les trois produit des recommandations qui traitent le mauvais étage du problème.' },
      { term: 'Élément probant', definition: 'Information suffisamment fiable pour étayer une affirmation : document daté et référencé (journal des demandes d’achat, note de service, échange d’emails), chiffre recalculable, réponse écrite. En remontée de faille, chaque phrase de la note doit reposer sur un élément probant — ce qui n’en relève pas appartient à l’interprétation, qui ne se remonte pas.' },
      { term: 'Faiblesse ponctuelle vs récurrente', definition: 'La faiblesse ponctuelle survient une fois, dans des circonstances particulières (absence unique, urgence réelle), et se corrige par l’incident. La faiblesse récurrente revient : même schéma, même circuit, marqueurs d’habitude (« comme la dernière fois », « on garde ce circuit »). C’est la récurrence — établie par des occurrences datées — qui transforme l’incident en faille et justifie l’escalade à la direction.' },
      { term: 'Observation objective', definition: 'Formulation d’un fait observable et vérifiable : périmètre (« sur un échantillon de 12 demandes d’achat »), période (« en juillet 2024 »), chiffres (« 7 615,00 € ») et références (« DA-2024-111 »). Elle ne porte ni jugement de valeur (« négligent »), ni intention supposée (« délibérément »), ni généralisation (« personne ne contrôle rien »). L’interprétation, elle, appartient au lecteur de la note — pas à son rédacteur.' },
      { term: 'Incidence (d’une faille)', definition: 'Mesure chiffrée de ce que la faille a déjà affecté : montants des opérations concernées, nombre de dossiers, proportion de l’échantillon. L’incidence se calcule sur le périmètre contrôlé (par exemple 7 615,00 € sur 12 demandes, soit 50 % de l’échantillon) et s’estime prudemment sur la population — sans jamais inventer le chiffre manquant : une incidence estimée se dit estimée.' },
      { term: 'Recommandation proportionnée', definition: 'Action proposée qui traite la cause de la faille à un coût et une complexité raisonnables : réécrire un article de note de service plutôt que réorganiser un service, paramétrer une numérotation plutôt que changer de logiciel. Une recommandation disproportionnée ne sera jamais mise en œuvre — et la faille survivra à la remontée qui l’a inventée.' },
      { term: 'Plan d’action', definition: 'Traduction opérationnelle de la recommandation : action précise, responsable désigné, délai daté, mesures transitoires et rattrapage des dossiers existants. Sans responsable ni délai, le plan d’action n’est qu’un vœu pieux : c’est lui, au contraire, qui donne à la direction quelque chose à suivre.' },
      { term: 'Responsable d’action', definition: 'Personne nommée — pas un service vague — chargée de mettre en œuvre l’action et d’en répondre à l’échéance. Nuance : le responsable de la faille n’est pas toujours le responsable de l’action ; réécrire une note de service relève de son émetteur, même si la dérive venait des utilisateurs.' },
      { term: 'Contrôle de suivi', definition: 'Vérification programmée après mise en œuvre de l’action : qui contrôle, quoi (indicateur précis), quand, devant quelle instance. Exemple : « chaque mois, sur un échantillon de 15 demandes d’achat, zéro auto-validation et 100 % de validations a priori ». Sans contrôle de suivi, personne ne saura jamais si la faille a été corrigée.' },
      { term: 'Efficacité de la remédiation', definition: 'Constat, mesuré sur l’indicateur du contrôle de suivi, que la faille a réellement disparu — et non que l’action a été « faite ». Une remédiation inefficace se documente exactement comme la faille : constat chiffré, analyse de l’échec, nouvelle boucle de recommandation avec échéance rapprochée.' },
      { term: 'Séparation des tâches', definition: 'Principe de contrôle interne : exprimer le besoin, valider la dépense, détenir les biens et régler relèvent de personnes différentes. Celui qui émet une demande d’achat ne la valide pas lui-même ; celui qui valide ne détient ni les biens ni les paiements. La même personne aux deux postes prive le contrôle de tout contre-pouvoir : le contrôle devient une formalité.' },
      { term: 'Validation a priori / validation a posteriori', definition: 'La validation a priori précède l’engagement : la dépense est approuvée avant que le bien soit commandé ou la prestation réalisée. La validation a posteriori arrive après coup : elle enregistre un fait accompli au lieu de l’autoriser — contrôle désarmé, admissible seulement comme régularisation exceptionnelle documentée, jamais comme circuit courant.' },
      { term: 'Rapprochement documentaire (traçabilité)', definition: 'Capacité à relier chaque opération à ses pièces dans les deux sens : commande ↔ réception ↔ facture ↔ écriture ↔ archive. Une numérotation discontinue, une facture sans commande ou un dossier sans lien d’archive rompent la chaîne : l’exhaustivité et la réalité des opérations ne sont plus démontrables — seulement affirmées.' },
    ],
    keyPoints: [
      'Une faille de procédure se démontre par des faits répétés et datés, jamais par une impression.',
      'Cause, risque, conséquence : trois plans à distinguer — la cause explique, le risque menace, la conséquence est déjà constatée et se chiffre.',
      'Ponctuelle ou récurrente : la récurrence transforme l’incident en faille — c’est elle qui justifie la remontée.',
      'Le périmètre précède la conclusion : combien d’opérations, quels services, quelle période, quel montant.',
      'L’incidence se calcule sur l’échantillon contrôlé et s’estime à part sur la population — en disant la différence.',
      'Une observation objective décrit un fait observable : périmètre, période, chiffres, références des pièces.',
      'Aucun qualificatif d’intention (« négligent », « délibérément », « forcément ») sans élément probant : l’intention ne s’observe pas.',
      'Présenter le risque sans exagération : le scénario majoré se signale comme tel, sinon il décrédibilise la remontée.',
      'Une recommandation est proportionnée : elle traite la cause au coût raisonnable, sans réorganiser l’entreprise.',
      'Un plan d’action sans responsable ni délai n’est qu’un vœu ; sans contrôle de suivi, on ne saura jamais s’il a fonctionné.',
    ],
  },
  objectives: {
    why:
      'Un contrôle qui ne remonte rien ne protège rien : la faille détectée puis gardée par-devers soi revient au moment le plus défavorable — clôture, audit, incident. Cette mission installe la chaîne complète de la remontée : du fait constaté à la mesure de la remédiation, en passant par la recommandation que la direction peut réellement mettre en œuvre. C’est aussi un exercice de crédibilité : une remontée factuelle, chiffrée et proportionnelle fait avancer ; une remontée interprétative ou alarmiste se referme sur son auteur.',
    infoSought: [
      'Les faits : quelles opérations, quels services, quelle période, quelle fréquence d’apparition.',
      'La cause première de chaque faille (texte ambigu, paramétrage logiciel, habitude tolérée).',
      'Le risque encouru tant que la faille subsiste (dépense non contrôlée, piste d’audit non démontrable).',
      'Les conséquences déjà constatées, chiffrées sur le périmètre contrôlé.',
      'Les éléments probants réunis et ceux qui restent à obtenir (journaux, documents, écrits).',
      'La nature de la faiblesse : ponctuelle ou récurrente — et le périmètre exact de l’incidence.',
      'Les recommandations possibles, hiérarchisées par proportionnalité (coût, délai, efficacité attendue).',
      'Pour chaque recommandation : le responsable d’action, le délai et le contrôle de suivi proposé.',
      'Après mise en œuvre : les indicateurs qui démontreront l’efficacité de la remédiation.',
    ],
    risksCovered: [
      'Anomalies récurrentes traitées en incidents isolés : la faille reste invisible et persiste.',
      'Confusion cause / risque / conséquence : la recommandation traite le mauvais étage du problème.',
      'Remontée non étayée : impression sans élément probant, contestée puis classée sans suite.',
      'Formulations interprétatives (jugements d’intention) dégradant les relations et la crédibilité du contrôle.',
      'Exagération des conséquences (« forcément des détournements ») : la direction cible le mauvais problème.',
      'Recommandation disproportionnée : jamais mise en œuvre, faille intacte, remontée discréditée.',
      'Plan d’action sans responsable ni délai : rien n’est suivi, rien n’est tenu.',
      'Absence de contrôle de suivi : la remédiation n’est jamais vérifiée, la faille renaît au premier relâchement.',
      'Ruptures de traçabilité non quantifiées (numérotation, factures sans commande, archives sans lien) : l’exhaustivité demeure indémontrable.',
    ],
  },
  preparation: {
    documents: [
      'La cartographie du processus concerné : qui demande, qui valide, qui reçoit, qui comptabilise, qui archive.',
      'Le texte officiel opposable : procédure PROC-Achat v3.1, note de service NS-2024-012 (et leurs versions antérieures).',
      'Les journaux du périmètre : demandes d’achat, commandes, factures fournisseurs, bons de réception.',
      'Les écrits informant la pratique réelle : emails, notes internes, consignes orales confirmées par écrit.',
      'Le tableau de suivi des anomalies des mois précédents (récurrences déjà constatées).',
      'La matrice des habilitations et les délégations en vigueur — ou la preuve documentée de leur absence.',
      'L’extrait d’archivage électronique du mois : répertoires, liens existants, dossiers absents.',
      'Un modèle de note de remontée : constat, cause, risque, incidence, recommandation, plan d’action, suivi.',
      'Le calendrier des instances de restitution : revue mensuelle, comité de direction, comité contrôle interne.',
      'Les contacts utiles : responsable du processus, émetteur du texte officiel, direction — et le parrain de la remontée.',
    ],
    questionsToAsk: [
      'Quel est le processus officiel attendu, et où est-il documenté (procédure, note de service) ?',
      'Depuis quand la pratique observée existe-t-elle : un mois, trois mois, depuis toujours ?',
      'La pratique constatée touche-t-elle un seul service ou plusieurs périmètres de la centrale ?',
      'Existe-t-il un signalement antérieur sur le même sujet — et quelle suite a-t-il reçue ?',
      'Quels éléments probants puis-je réunir sans alerter prématurément les personnes concernées ?',
      'Qui est le destinataire adapté de la remontée : responsable de processus, direction, comité dédié ?',
      'Quel délai de remédiation est réaliste, et à quelle échéance mesurera-t-on l’efficacité ?',
    ],
    precautions: [
      'Ne qualifier une faille qu’après avoir relu le texte officiel : une pratique n’est déviante que par rapport à une règle identifiable.',
      'Réunir les éléments probants avant d’en parler : dates, références, montants, échantillon — la remontée se prépare comme un dossier.',
      'Relire chaque formulation en chassant jugements d’intention, généralisations et adverbes d’emphase (« forcément », « personne »).',
      'Chiffrer ce qui est chiffrable sur le périmètre contrôlé, estimer à part ce qui ne l’est pas — et marquer la différence.',
      'Informer le responsable du processus avant la direction, sauf risque avéré : la remontée gagne à être portée, pas subie.',
      'Prévoir le suivi dès la remontée : une recommandation sans indicateur de vérification est vouée à rester une intention.',
    ],
  },
  method: [
    { title: 'Identifier le signal', description: 'Repérer l’anomalie qui se répète ou l’indice qui cloche : même demandeur et valideur, validations intervenant après la prestation, numéros de commande absents, pièces sans rattachement.', why: 'Toute faille commence par un signal mineur : c’est son traitement discipliné qui décide si elle deviendra une remontée ou une anecdote.' },
    { title: 'Opposer la pratique au texte officiel', description: 'Relire la procédure et la note de service applicables, article par article, et situer l’écart : qu’exige le texte, que fait la pratique ?', why: 'Une pratique n’est une faille que par rapport à une règle : sans texte opposable, il n’y a qu’une préférence personnelle.' },
    { title: 'Distinguer cause, risque et conséquence', description: 'Formuler séparément : pourquoi la faille existe (cause), ce qui peut arriver tant qu’elle existe (risque), ce qui est déjà arrivé et se chiffre (conséquence).', why: 'Le triptyche structure la remontée : la recommandation vise la cause, l’argumentation pèse le risque, l’incidence chiffrée atteste les conséquences.' },
    { title: 'Réunir les éléments probants', description: 'Collecter journaux, documents datés et référencés, écrits (emails), chiffres recalculables ; identifier ce qui manque et l’obtenir par écrit.', why: 'Chaque affirmation de la note doit reposer sur une preuve consultable : une remontée contestable sur la forme perd d’avance sur le fond.' },
    { title: 'Évaluer le périmètre', description: 'Délimiter l’incidence : combien d’opérations, quels services, quelle période, quels montants — sur l’échantillon contrôlé d’abord, puis, prudemment, sur la population.', why: 'Une faille sans périmètre se réduit à une impression ; avec périmètre, elle devient un objet de décision chiffrée.' },
    { title: 'Qualifier la récurrence', description: 'Compter les occurrences datées et repérer les marqueurs d’habitude (« comme la dernière fois », « on garde ce circuit ») : la faiblesse est-elle ponctuelle ou récurrente ?', why: 'La récurrence seule justifie l’escalade : elle montre que le contrôle ne tient pas par construction, et non par accident.' },
    { title: 'Chiffrer l’incidence', description: 'Additionner les montants concernés, calculer la proportion de l’échantillon (par exemple 6/12, soit 50 %), distinguer calcul contrôlé et estimation.', why: 'Le chiffre donne à la direction l’ordre de grandeur de la décision : corriger maintenant, ou accepter un risque documenté.' },
    { title: 'Formuler l’observation objective', description: 'Rédiger le constat en faits observables : « sur la période X, sur un échantillon de N opérations, il a été observé que…, exemples… » — sans adjectif, sans intention, sans généralisation.', why: 'Une formulation factuelle est incontestable et protège son auteur ; une formulation interprétative transforme un dossier technique en conflit de personnes.' },
    { title: 'Présenter le risque sans exagération', description: 'Décrire le scénario réaliste chiffré sur données, puis le scénario majoré en le signalant comme tel ; bannir « forcément » et « tout le monde ».', why: 'L’exagération décrédibilise la remontée et oriente la direction vers le mauvais problème : le réalisme pesé convainc mieux que l’alarme.' },
    { title: 'Recommander une action proportionnée', description: 'Traiter la cause au coût raisonnable : réécrire l’article ambigu, paramétrer la numérotation, imposer le rattachement avant paiement — plutôt que réorganiser l’entreprise.', why: 'Une recommandation applicable sera mise en œuvre ; une recommandation spectaculaire sera applaudie, puis classée.' },
    { title: 'Définir responsable et délai', description: 'Nommer le responsable d’action (une personne, pas un service), fixer une échéance datée et réaliste, prévoir les mesures transitoires et le rattrapage des dossiers existants.', why: 'Le plan d’action est le seul livrable opérationnel de la remontée : sans nom ni date, il ne se suit pas.' },
    { title: 'Proposer le contrôle de suivi', description: 'Définir l’indicateur vérifiable, l’échantillon de recontrôle, la fréquence et l’instance de restitution (revue mensuelle, comité).', why: 'Le suivi transforme la correction en preuve d’efficacité : sans lui, la faille se referme en silence jusqu’à la rechute.' },
    { title: 'Rédiger la note de remontée', description: 'Assembler : constat factuel, cause, risque, incidence chiffrée, recommandations hiérarchisées, plan d’action, suivi — puis relire en chassant tout jugement d’intention.', why: 'La note est le visage du contrôle interne : factuelle, courte et décisionnable, elle fait avancer la direction en une seule lecture.' },
    { title: 'Mesurer l’efficacité de la remédiation', description: 'Recontrôler à l’échéance sur les indicateurs définis ; si la faille persiste, documenter l’échec, analyser sa cause et engager une nouvelle boucle — jusqu’à efficacité démontrée.', why: 'Une remédiation non mesurée n’est qu’une intention exécutée : seule la mesure referme la faille, et seule la rechute documentée rouvre le dossier.' },
  ],
  exercises: [
    {
      id: 'danone-m5-ex1',
      title: 'Faille 1 — validation des opérations',
      cycle: 'Achats',
      context:
        'Premier volet de la revue de septembre : le circuit de validation des demandes d’achat (DA). Vous disposez de la note de service en vigueur, d’échanges d’emails du mois de juillet et d’un échantillon de 12 demandes d’achat extraites du journal. La faille n’est pas annoncée : c’est le rapprochement des trois documents qui doit la révéler. Personnes, montants et sociétés fictifs.',
      risks: ['Dépense engagée sans contrôle indépendant', 'Validation a posteriori banalisée', 'Remontée non étayée'],
      documents: [
        {
          kind: 'text',
          name: 'Note de service NS-2024-012 — validation des demandes d’achat (fictive)',
          content:
            'NOTE DE SERVICE NS-2024-012\n' +
            'Date : 01/07/2024 — Émetteur : Centrale Danone — Direction des opérations\n' +
            'Objet : validation des demandes d’achat\n' +
            '\n' +
            '1. Toute demande d’achat (DA) est validée avant engagement par le responsable du service demandeur ou par le responsable achats.\n' +
            '2. En cas d’absence ou d’indisponibilité de ces derniers, il convient de ne pas retarder les opérations : la validation interviendra dans les meilleurs délais.\n' +
            '3. La matrice des habilitations de validation sera publiée ultérieurement par la direction.\n' +
            '\n' +
            'Pour application immédiate.',
          note: 'Document fictif à visée pédagogique. Note telle qu’affichée au mur du service achats en juillet 2024.',
        },
        {
          kind: 'text',
          name: 'Échanges d’emails sur les validations — juillet 2024 (fictifs)',
          content:
            'ÉCHANGES D’EMAILS — validation des demandes d’achat (extrait de juillet 2024)\n' +
            '\n' +
            '—— Email 1 ——\n' +
            'De : A. Ndiaye (responsable achats) — À : équipe achats et services demandeurs\n' +
            'Date : 11/07/2024 08:30 — Objet : semaine chargée\n' +
            '« Je serai difficilement joignable cette semaine (inventaire du site de Lyon). Débrouillez-vous pour les validations courantes : la direction ne veut pas d’un goulet d’étranglement au mois de juillet. »\n' +
            '\n' +
            '—— Email 2 ——\n' +
            'De : S. Garnier (commercial grands comptes) — À : Service comptabilité\n' +
            'Date : 19/07/2024 09:12 — Objet : DA-2024-111 matériel informatique\n' +
            '« Impossible de joindre A. Ndiaye ce matin. Pour ne pas bloquer la livraison du portable, j’ai validé la DA moi-même, comme la semaine dernière. Merci d’avancer. »\n' +
            '\n' +
            '—— Email 3 ——\n' +
            'De : Service comptabilité — À : S. Garnier\n' +
            'Date : 19/07/2024 10:05 — Objet : RE: DA-2024-111 matériel informatique\n' +
            '« C’est enregistré. Pensez à la faire viser par A. Ndiaye dès que possible, pour la forme. »\n' +
            '\n' +
            '—— Email 4 ——\n' +
            'De : L. Berthier (responsable logistique) — À : Service comptabilité\n' +
            'Date : 24/07/2024 16:40 — Objet : DA-2024-109 nettoyage des vitrines\n' +
            '« Pour info, la prestation a eu lieu hier. La DA vient d’être validée par A. Ndiaye ce matin. On garde ce circuit pour les urgences ? »',
          note: 'Document fictif à visée pédagogique. Extrait des échanges du mois ; les visas tardifs évoqués n’ont pas été retrouvés aux dossiers concernés.',
        },
        {
          kind: 'table',
          name: 'Échantillon de 12 demandes d’achat — juillet 2024 (fictif)',
          columns: ['N° DA', 'Date', 'Objet', 'Montant (€ HT)', 'Demandeur', 'Valideur', 'Délai (j)', 'Validation'],
          rows: [
            ['DA-2024-102', '01/07/2024', 'Cartons d’emballage', 860, 'L. Berthier', 'A. Ndiaye', 2, 'A priori'],
            ['DA-2024-103', '03/07/2024', 'Analyses laboratoire (contrôle qualité)', 725, 'J. Moreau', 'A. Ndiaye', 1, 'A priori'],
            ['DA-2024-104', '05/07/2024', 'Fournitures de bureau', 185, 'S. Garnier', 'S. Garnier', 0, 'A priori'],
            ['DA-2024-105', '08/07/2024', 'Maintenance préventive des chambres froides', 2480, 'J. Moreau', 'A. Ndiaye', 6, 'A posteriori'],
            ['DA-2024-106', '10/07/2024', 'Location d’un diable de manutention', 320, 'L. Berthier', 'A. Ndiaye', 3, 'A priori'],
            ['DA-2024-107', '12/07/2024', 'Nettoyage exceptionnel de la réserve', 540, 'L. Berthier', 'L. Berthier', 0, 'A priori'],
            ['DA-2024-108', '14/07/2024', 'Étiquettes adhésives', 410, 'S. Garnier', 'S. Garnier', 0, 'A priori'],
            ['DA-2024-109', '15/07/2024', 'Nettoyage des vitrines (prestation)', 2150, 'S. Garnier', 'A. Ndiaye', 9, 'A posteriori'],
            ['DA-2024-110', '17/07/2024', 'Réparation du chariot élévateur', 1120, 'L. Berthier', 'A. Ndiaye', 2, 'A priori'],
            ['DA-2024-111', '19/07/2024', 'Matériel informatique (portable)', 1850, 'S. Garnier', 'S. Garnier', 0, 'A priori'],
            ['DA-2024-112', '22/07/2024', 'Transport express', 240, 'J. Moreau', 'A. Ndiaye', 1, 'A priori'],
            ['DA-2024-113', '26/07/2024', 'Équipement de réserve (étagères)', 980, 'L. Berthier', 'A. Ndiaye', 3, 'A priori'],
          ],
          note: 'Document fictif. Extrait du journal des demandes d’achat. « A priori » : validation avant engagement de la dépense ; « A posteriori » : validation après réception de la marchandise ou réalisation de la prestation. « Délai (j) » : jours entre la demande et sa validation.',
        },
      ],
      questions: [
        {
          id: 'danone-m5-ex1-q1',
          question: 'Rapprochez la note de service, les emails et l’échantillon : que constatez-vous ? Décrivez précisément la (ou les) dérive(s) de procédure que les documents révèlent, avec leurs marqueurs.',
          type: 'open',
          keywords: ['séparation des tâches', 'validation a priori', 'récurrence', 'périmètre', 'incidence', 'éléments probants'],
          explanation:
            'Deux dérivés se croisent et se renforcent. (1) Séparation des tâches rompue : 4 demandes sur 12 sont validées par leur propre demandeur (DA-2024-104, -107, -108, -111 — S. Garnier trois fois, L. Berthier une fois), pour 185,00 + 540,00 + 410,00 + 1 850,00 = 2 985,00 €. (2) Validation a priori non garantie : 2 demandes sur 12 sont validées après la réalisation (DA-2024-105, maintenance intervenue avant la validation ; DA-2024-109, prestation du 23/07 validée le 24/07), pour 2 480,00 + 2 150,00 = 4 630,00 €. Au total, 6 demandes sur 12 — 50 % de l’échantillon, incidence de 7 615,00 € — échappent au contrôle attendu. La récurrence est attestée par les marqueurs d’habitude des emails (« comme la semaine dernière », « on garde ce circuit ») et par la note NS-2024-012, dont l’article 2 n’impose ni valideur distinct du demandeur, ni validation avant engagement, et dont la matrice des habilitations (article 3) n’a jamais été publiée. Les éléments probants : journal des DA, note de service, emails, absence des visas tardifs aux dossiers. Le périmètre reste à étendre : l’échantillon de 12 invite à contrôler les autres DA du mois avant de chiffrer l’incidence sur la population.',
        },
        {
          id: 'danone-m5-ex1-q2',
          question: 'Faille 1 — quelle est la cause première, telle que les documents la révèlent ?',
          type: 'mcq',
          options: [
            'La note de service NS-2024-012 : son article 2 n’impose ni valideur distinct du demandeur ni validation avant engagement, et la matrice des habilitations annoncée n’a pas été publiée',
            'L’incompétence du service comptabilité, qui enregistre tout sans jamais contrôler',
            'Une panne du logiciel de gestion des demandes d’achat survenue en juillet',
            'La fraude avérée de S. Garnier, qui détournerait les montants auto-validés',
          ],
          expected: '0',
          explanation:
            'La cause est textuelle et organisationnelle : l’article 2 de la note de service organise officiellement le contournement (« ne pas retarder les opérations », « validation dans les meilleurs délais ») sans jamais exiger un valideur distinct ni une validation avant engagement ; l’article 3 renvoie à une matrice des habilitations jamais publiée. Les trois autres options relèvent de l’interprétation non fondée : aucun document ne met en cause la comptabilité, aucune panne n’est évoquée, et aucune preuve d’intention ni de détournement n’existe — seuls des faits d’auto-validation sont constatés. Une cause mal identifiée produirait une recommandation qui traite le mauvais étage du problème.',
        },
        {
          id: 'danone-m5-ex1-q3',
          question: 'Faille 1 — quel est le risque principal créé par cette faille ?',
          type: 'mcq',
          options: [
            'Des dépenses peuvent être engagées sans contrôle indépendant : erreur non détectée, dépense indu, voire facture fictive payable sans contradiction',
            'La TVA déductible de la centrale sera automatiquement recalculée par l’administration fiscale',
            'Les clients de la centrale seront livrés en retard faute de validations suffisantes',
            'Le stock de la centrale sera physiquement compté deux fois lors du prochain inventaire',
          ],
          expected: '0',
          explanation:
            'Le risque est celui de tout contrôle désarmé : quand l’émetteur valide sa propre dépense, personne ne confronte le besoin à l’intérêt de l’entreprise — une erreur, une dépense indu ou une facture fictive traversera le circuit sans contradiction. Les autres options sont des leurres : un risque fiscal TVA ne suit pas automatiquement la faille ; la faille accélère plutôt les opérations au lieu de les retarder ; et l’inventaire physique n’a aucun lien avec la validation des DA. Distinguer le risque (ce qui peut arriver) de la conséquence (ce qui est déjà arrivé) est précisément l’objet de la question suivante.',
        },
        {
          id: 'danone-m5-ex1-q4',
          question: 'Faille 1 — quelle est la conséquence déjà constatée, chiffrable sur l’échantillon ?',
          type: 'mcq',
          options: [
            '6 demandes d’achat sur 12 (50 % de l’échantillon), pour 7 615,00 € HT, ont été engagées sans validation conforme : 4 auto-validations (2 985,00 €) et 2 validations a posteriori (4 630,00 €)',
            'La centrale a perdu 100 000,00 € sur l’exercice à cause de la faille',
            'Tous les achats de juillet sont frauduleux',
            'Aucune conséquence n’est chiffrable avant que la direction n’ait statué sur la faille',
          ],
          expected: '0',
          explanation:
            'La conséquence se calcule sur le périmètre contrôlé : 4 auto-validations (185,00 + 540,00 + 410,00 + 1 850,00 = 2 985,00 €) et 2 validations a posteriori (2 480,00 + 2 150,00 = 4 630,00 €), soit 6 demandes sur 12 pour 7 615,00 € HT. Les autres options illustrent les trois erreurs types : exagération (100 000,00 € inventés — c’est une estimation non fondée, pas un constat), généralisation (« tous les achats » : 6 DA sur 12 sont concernées, pas la totalité) et refus de chiffrer (le périmètre contrôlé, lui, se chiffre toujours). Le chiffrage reste prudent : 7 615,00 € est l’incidence sur l’échantillon, pas sur le mois entier.',
        },
        {
          id: 'danone-m5-ex1-q5',
          question: 'Quel est le montant total HT des demandes d’achat concernées par la faille sur l’échantillon (auto-validations + validations a posteriori) ?',
          type: 'numeric',
          expected: 7615,
          explanation:
            'Auto-validations : 185,00 + 540,00 + 410,00 + 1 850,00 = 2 985,00 €. Validations a posteriori : 2 480,00 + 2 150,00 = 4 630,00 €. Total : 2 985,00 + 4 630,00 = 7 615,00 € HT — l’incidence de la faille sur l’échantillon de 12 demandes, à distinguer de toute extrapolation au mois complet, qui resterait une estimation à documenter comme telle.',
        },
        {
          id: 'danone-m5-ex1-q6',
          question: 'Quelles demandes d’achat de l’échantillon illustrent la faille ?',
          type: 'multi',
          options: [
            'DA-2024-104 — 185,00 € — S. Garnier demandeur et valideur',
            'DA-2024-105 — 2 480,00 € — validation a posteriori (délai 6 jours)',
            'DA-2024-106 — 320,00 € — validée a priori par A. Ndiaye (délai 3 jours)',
            'DA-2024-107 — 540,00 € — L. Berthier demandeur et valideur',
            'DA-2024-108 — 410,00 € — S. Garnier demandeur et valideur',
            'DA-2024-109 — 2 150,00 € — validation a posteriori (délai 9 jours)',
            'DA-2024-110 — 1 120,00 € — validée a priori par A. Ndiaye (délai 2 jours)',
            'DA-2024-111 — 1 850,00 € — S. Garnier demandeur et valideur',
          ],
          expected: ['0', '1', '3', '4', '5', '7'],
          explanation:
            'Six lignes cumulent les deux dérivés. Auto-validation (demandeur = valideur) : DA-2024-104 (185,00 €), DA-2024-107 (540,00 €), DA-2024-108 (410,00 €) et DA-2024-111 (1 850,00 €) — la DA-2024-111 est celle de l’email 2 (« j’ai validé la DA moi-même »), la DA-2024-108 celle du « comme la semaine dernière ». Validation a posteriori : DA-2024-105 (2 480,00 €) et DA-2024-109 (2 150,00 €) — la DA-2024-109 est celle de l’email 4 (prestation du 23/07, validation du 24/07, délai 9 jours). Les DA-2024-106 et DA-2024-110 suivent le circuit attendu : valideur distinct, validation a priori, délai court.',
        },
        {
          id: 'danone-m5-ex1-q7',
          question: 'Formulez la recommandation que vous remonteriez à la direction pour la faille 1 : action proposée, responsable, délai et contrôle de suivi.',
          type: 'open',
          keywords: ['séparation', 'validation', 'a priori', 'responsable', 'délai', 'suivi'],
          explanation:
            'Recommandation (proportionnée à la cause, textuelle) : réécrire la note NS-2024-012 — (1) le valideur est obligatoirement une personne distincte du demandeur et habilitée par la matrice des habilitations (matrice à publier enfin) ; (2) la validation est a priori : aucune dépense ne s’engage sans DA validée ; (3) en cas d’indisponibilité du valideur, un suppléant désigné valide — jamais le demandeur ; (4) les urgences réelles passent par une régularisation exceptionnelle documentée, pas par un circuit coutumier. Rattrapage : obtenir un visa a posteriori explicite pour les 4 DA auto-validées (2 985,00 €) et documenter les 2 validations tardives (4 630,00 €). Responsable : la direction des opérations (émettrice de la note), avec le responsable achats pour la matrice. Délai : note révisée diffusée sous 30 jours (par exemple au 31/10/2024), matrice publiée sous 60 jours. Contrôle de suivi : chaque mois, sur un échantillon d’au moins 15 DA, deux indicateurs — zéro auto-validation, 100 % de validations a priori — restitués à la revue mensuelle ; l’efficacité de la remédiation sera démontrée après trois mois consécutifs au vert.',
        },
      ],
      solutionSummary:
        'La faille 1 n’est pas un incident isolé : c’est une faiblesse récurrente de séparation des tâches doublée d’une validation a priori non garantie. Les indices : 4 DA sur 12 validées par leur demandeur (2 985,00 € : DA-2024-104, -107, -108, -111), 2 validées après réalisation (4 630,00 € : DA-2024-105, -109), soit 6 DA sur 12 pour 7 615,00 € HT — 50 % de l’échantillon. La cause est le texte lui-même : l’article 2 de la note NS-2024-012 organise le contournement, l’article 3 promet une matrice jamais publiée ; les emails attestent la récurrence (« comme la semaine dernière », « on garde ce circuit »). La remontée qualifie la faiblesse de récurrente, chiffre l’incidence sur le périmètre contrôlé, propose une recommandation proportionnée (réécriture de la note, suppléant désigné, rattrapage des 6 dossiers) avec responsable (direction des opérations), délai (30/60 jours) et contrôle de suivi mensuel sur échantillon (zéro auto-validation, 100 % a priori).',
      interviewTips: [
        'Annoncez le chiffre avant le qualificatif : « 6 demandes sur 12, 7 615,00 € » passe avant toute appréciation — la précision fait la crédibilité.',
        'Distinguez toujours le fait (auto-validation constatée) de l’intention (fraude supposée) : la remontée n’a de valeur que factuelle.',
      ],
    },
    {
      id: 'danone-m5-ex2',
      title: 'Faille 2 — traçabilité et rapprochement documentaire',
      cycle: 'Achats / Archivage',
      context:
        'Deuxième volet de la revue : le rapprochement documentaire des commandes d’août. La procédure officielle existe (PROC-Achat v3.1) ; le journal des commandes, lui, raconte une autre histoire — numérotation discontinue, factures manquantes ou sans commande, archives sans lien. Là encore, la faille se découvre par indices. Montants et sociétés fictifs.',
      risks: ['Exhaustivité indémontrable', 'Facture payable sans rattachement', 'Piste d’audit rompue'],
      documents: [
        {
          kind: 'table',
          name: 'Journal des commandes d’août 2024 — rapprochement factures et archives (fictif)',
          columns: ['N° commande', 'Date', 'Fournisseur', 'Montant (€ HT)', 'Facture rattachée', 'BR / BL au dossier', 'Lien archive'],
          rows: [
            ['COM-2024-0601', '01/08/2024', 'Cartonnages Rhône', 500, 'FA-2024-1401', 'BR-2024-0501', 'Oui'],
            ['COM-2024-0602', '02/08/2024', 'AgriLog Emballages', 1680, 'FA-2024-1405', 'BR-2024-0503', 'Oui'],
            ['COM-2024-0603', '05/08/2024', 'Transports Ravel', 612.4, '—', 'BR-2024-0507', 'Oui'],
            ['COM-2024-0604', '06/08/2024', 'Imprimerie du Val', 1248, 'FA-2024-1410', 'BR-2024-0510', 'Non'],
            ['COM-2024-0606', '09/08/2024', 'Froid & Maintenance', 1240, 'FA-2024-1412', 'BR-2024-0514', 'Oui'],
            ['COM-2024-0607', '12/08/2024', 'Astral Nettoyage', 1530, '—', 'BR-2024-0518', 'Non'],
            ['COM-2024-0608', '13/08/2024', 'Locabox Plastiques', 2092.6, 'FA-2024-1419', 'BR-2024-0521', 'Oui'],
            ['COM-2024-0609', '14/08/2024', 'Bureau Vert', 756, '—', 'BR-2024-0524', 'Oui'],
            ['COM-2024-0610', '16/08/2024', 'Sécuritest Contrôles', 460.8, 'FA-2024-1423', 'BR-2024-0527', 'Oui'],
            ['COM-2024-0612', '19/08/2024', 'Froid & Maintenance', 980, 'FA-2024-1428', 'BR-2024-0531', 'Oui'],
            ['COM-2024-0613', '21/08/2024', 'Cartonnages Rhône', 840, 'FA-2024-1431', 'BR-2024-0533', 'Non'],
            ['COM-2024-0614', '22/08/2024', 'Papier & Logistique', 890.4, 'FA-2024-1434', 'BR-2024-0536', 'Oui'],
            ['COM-2024-0615', '26/08/2024', 'TechniFroid Services', 1140, '—', 'BR-2024-0540', 'Oui'],
            ['COM-2024-0617', '28/08/2024', 'AgriLog Emballages', 1260, 'FA-2024-1441', 'BR-2024-0544', 'Oui'],
            ['COM-2024-0618', '30/08/2024', 'Imprimerie du Val', 460, 'FA-2024-1444', 'BR-2024-0547', 'Non'],
          ],
          note: 'Document fictif. Journal des commandes du mois : 15 lignes, du n° COM-2024-0601 au n° COM-2024-0618. « Lien archive » : le dossier est retrouvable depuis le numéro de commande dans l’archivage électronique.',
        },
        {
          kind: 'text',
          name: 'PROC-Achat v3.1 — extraits officiels et pratiques observées (fictifs)',
          content:
            'PROCÉDURE PROC-ACHAT v3.1 (extraits)\n' +
            '§2. Numérotation : « les commandes sont numérotées de façon séquentielle et continue ; toute commande annulée demeure au journal avec le statut Annulée. »\n' +
            '§5. Rattachement : « chaque facture fournisseur est rattachée à sa commande et à son bon de réception (rapprochement à trois voies) avant comptabilisation et avant paiement. »\n' +
            '§8. Archivage : « chaque dossier (commande, réception, facture) est archivé électroniquement et relié par le numéro de commande ; le répertoire mensuel fait foi. »\n' +
            '\n' +
            'PRATIQUES OBSERVÉES (notes de travail, septembre 2024)\n' +
            '— Les numéros sautent lorsqu’un brouillon de commande est abandonné : le logiciel n’historise pas les brouillons annulés, le numéro disparaît du journal.\n' +
            '— Les achats dits « urgents » sont parfois engagés par téléphone puis réglés sur facture seule : la commande est reconstruite après coup, quand elle l’est.\n' +
            '— L’archivage électronique se fait par glisser-déposer dans des répertoires mensuels : le lien depuis le numéro de commande n’est pas systématique.\n' +
            '— Au rapprochement du journal des factures fournisseurs d’août : deux factures ne référencent aucune commande — FA-2024-1415 (Papier & Logistique, 245,00 € HT) et FA-2024-1438 (Bureau Vert, 312,00 € HT).',
          note: 'Document fictif à visée pédagogique. Les extraits officiels (§2, §5, §8) sont opposés aux pratiques réellement observées.',
        },
      ],
      questions: [
        {
          id: 'danone-m5-ex2-q1',
          question: 'Rapprochez le journal des commandes, la procédure PROC-Achat v3.1 et les pratiques observées : quelles failles de traçabilité constatez-vous ?',
          type: 'open',
          keywords: ['rapprochement', 'numérotation', 'rupture', 'sans facture', 'sans commande', 'archive', 'traçabilité'],
          explanation:
            'Trois symptômes convergents contredisent les articles §2, §5 et §8. (1) Numérotation discontinue : 3 numéros manquent dans la séquence (COM-2024-0605, -0611, -0616) alors que §2 exige une séquence continue et la conservation des commandes annulées — l’exhaustivité des commandes du mois n’est plus démontrable. (2) Rapprochement incomplet : 4 commandes sur 15 sont sans facture rattachée (COM-2024-0603 : 612,40 € ; COM-2024-0607 : 1 530,00 € ; COM-2024-0609 : 756,00 € ; COM-2024-0615 : 1 140,00 € — total 4 038,40 €), et 2 factures du journal fournisseurs ne référencent aucune commande (FA-2024-1415 : 245,00 € ; FA-2024-1438 : 312,00 € — total 557,00 €) alors que §5 exige le rapprochement à trois voies avant comptabilisation et paiement. (3) Archivage non relié : 4 dossiers sans lien archive (COM-2024-0604, -0607, -0613, -0618) contre §8. Ensemble, ces ruptures cassent la piste d’audit dans les deux sens : la faille se qualifie de faiblesse de traçabilité et de rapprochement documentaire, récurrente (pratiques notées comme habituelles : « parfois », « n’est pas systématique »), d’incidence 4 038,40 € + 557,00 € = 4 595,40 € sur le périmètre contrôlé.',
        },
        {
          id: 'danone-m5-ex2-q2',
          question: 'Sur l’échantillon de 15 commandes d’août, combien de commandes sont sans facture rattachée ?',
          type: 'numeric',
          expected: 4,
          explanation:
            '4 commandes sont sans facture rattachée : COM-2024-0603 (Transports Ravel, 612,40 €), COM-2024-0607 (Astral Nettoyage, 1 530,00 €), COM-2024-0609 (Bureau Vert, 756,00 €) et COM-2024-0615 (TechniFroid Services, 1 140,00 €) — soit 612,40 + 1 530,00 + 756,00 + 1 140,00 = 4 038,40 € HT. Les biens et services ont été reçus (bons de réception présents), mais la facture n’est pas au dossier : risque de dette non comptabilisée ou de facture égarée, et rupture directe du rapprochement à trois voies exigé par §5.',
        },
        {
          id: 'danone-m5-ex2-q3',
          question: 'Combien de numéros de commande manquent dans la séquence du journal (ruptures de numérotation) ?',
          type: 'numeric',
          expected: 3,
          explanation:
            'De COM-2024-0601 à COM-2024-0618, 18 numéros sont attendus ; le journal n’en compte que 15. Manquent : COM-2024-0605, COM-2024-0611 et COM-2024-0616. La procédure §2 impose une numérotation séquentielle continue et la conservation au journal des commandes annulées ; or le logiciel n’historise pas les brouillons abandonnés. Ces ruptures rendent l’exhaustivité des commandes indémontrable : impossible de prouver qu’aucune commande n’a disparu — c’est précisément ce que la traçabilité devait garantir.',
        },
        {
          id: 'danone-m5-ex2-q4',
          question: 'Faille 2 — comment la qualifier avec précision ?',
          type: 'mcq',
          options: [
            'Une faille de traçabilité et de rapprochement documentaire : le lien commande ↔ facture ↔ archive n’est ni systématique ni démontrable',
            'Une faille de séparation des tâches : le demandeur valide ses propres demandes d’achat',
            'Une erreur de saisie comptable ponctuelle : les montants du journal sont faux',
            'Une fraude avérée du fournisseur Bureau Vert',
          ],
          expected: '0',
          explanation:
            'La qualification suit les faits : numérotation discontinue (§2 enfreint), factures et commandes non rapprochées dans les deux sens (§5 enfreint), archives sans lien (§8 enfreint) — la piste d’audit est rompue aux trois maillons, donc la faille est de traçabilité et de rapprochement documentaire. L’option 1 décrit la faille 1 de l’exercice précédent, absente des documents ici. Aucun écart de montant n’est constaté (le journal est arithmétiquement exact), et aucune preuve de fraude n’existe : une facture sans commande peut être une urgence mal documentée — la qualifier de fraude serait un jugement d’intention indéfendable.',
        },
        {
          id: 'danone-m5-ex2-q5',
          question: 'Quels constats, issus de l’échantillon d’août et des notes de travail, relèvent de la faille de traçabilité ?',
          type: 'multi',
          options: [
            '4 commandes sur 15 sont sans facture rattachée (4 038,40 € HT)',
            '2 factures du journal fournisseurs (FA-2024-1415 et FA-2024-1438, 557,00 € HT) ne référencent aucune commande',
            '3 numéros de commande (COM-2024-0605, -0611, -0616) n’apparaissent pas au journal',
            '4 dossiers ne comportent pas de lien d’archive électronique (COM-2024-0604, -0607, -0613, -0618)',
            'Le montant moyen des commandes de l’échantillon dépasse 1 000,00 € HT',
            'Le journal compte exactement 15 commandes au mois d’août',
          ],
          expected: ['0', '1', '2', '3'],
          explanation:
            'Les quatre premiers constats sont les symptômes de la faille : commandes sans facture (4 038,40 €), factures sans commande (557,00 €), ruptures de numérotation (0605, 0611, 0616), archives sans lien (0604, 0607, 0613, 0618) — respectivement les articles §5 et §8, §5, §2 et §8 de la procédure. Les deux derniers sont exacts mais indifférents : le montant moyen (15 690,20 € / 15 ≈ 1 046,01 €) et le nombre de lignes décrivent l’échantillon sans rien dire de la traçabilité. Le réflexe à garder : un constat exact n’est pas un constat pertinent — la remontée ne retient que ce qui contredit la règle.',
        },
        {
          id: 'danone-m5-ex2-q6',
          question: 'Formulez la recommandation remontée pour la faille 2 : action, responsable, délai et contrôle de suivi.',
          type: 'open',
          keywords: ['rapprochement', 'numérotation', 'archivage', 'responsable', 'délai', 'suivi'],
          explanation:
            'Recommandations (une par maillon rompu, toutes proportionnées). (1) Numérotation : paramétrer le logiciel pour historiser les brouillons annulés au journal avec statut « Annulée » (conforme §2) — responsable : responsable applicatif achats avec le responsable achats ; délai 60 jours. (2) Rattachement : instruction immédiate — aucune facture n’est mise en paiement sans commande rattachée ; les achats urgents passent par une régularisation documentée (commande rétroactive visée par le responsable achats), jamais par la facture seule ; procédure révisée sous 30 jours — responsable : responsable achats, avec blocage au bon à payer par la comptabilité. (3) Archivage : lien obligatoire depuis le numéro de commande pour 100 % des dossiers du mois — responsable : comptabilité (archivage) ; délai 30 jours. (4) Rattrapage : obtenir les 4 factures manquantes (4 038,40 €), rattacher les 2 factures sans commande (557,00 €) à des commandes rétroactives ou les qualifier, relier les 4 archives manquantes. Contrôle de suivi : rapprochement mensuel commandes ↔ factures ↔ archives avec trois indicateurs — zéro rupture de numérotation non documentée, zéro facture sans commande, 100 % de liens d’archive — restitués à la revue mensuelle ; efficacité de la remédiation démontrée après trois mois consécutifs au vert.',
        },
      ],
      solutionSummary:
        'La faille 2 est une faiblesse récurrente de traçabilité et de rapprochement documentaire, démontrée par trois symptômes chiffrés sur août 2024 : 4 commandes sans facture rattachée (4 038,40 € HT : COM-2024-0603, -0607, -0609, -0615), 2 factures sans commande (557,00 € HT : FA-2024-1415, FA-2024-1438) et 3 ruptures de numérotation (COM-2024-0605, -0611, -0616), plus 4 archives sans lien (COM-2024-0604, -0607, -0613, -0618). Les causes : un logiciel qui n’historise pas les brouillons annulés (§2), la pratique des achats urgents sur facture seule (§5) et un archivage manuel sans lien systématique (§8). Incidence sur le périmètre contrôlé : 4 595,40 €. Remédiation proportionnée maillon par maillon (paramétrage, instruction de blocage au paiement, lien d’archive obligatoire, rattrapage des 10 dossiers), avec responsables nommés, délais de 30 à 60 jours et contrôle de suivi mensuel sur trois indicateurs.',
      interviewTips: [
        'Les trois chiffres-clés à énoncer dans l’ordre : 4 commandes sans facture, 2 factures sans commande, 3 ruptures de numérotation — la précision fait la crédibilité.',
        'Ne dites pas « le journal est faux » : dites « l’exhaustivité des commandes n’est pas démontrable » — le vocabulaire exact ferme la contestation.',
      ],
    },
    {
      id: 'danone-m5-ex3',
      title: 'Formuler une observation objective',
      cycle: 'Transversal',
      context:
        'La note de remontée de septembre 2024 est prête, les chiffres sont là — reste la formulation. Huit rédactions candidates du même constat : quatre décrivent des faits observables, quatre portent des jugements. À vous de trier, de justifier le tri, puis de réécrire. Énoncés fictifs.',
      risks: ['Jugement d’intention', 'Généralisation', 'Remontée contestée'],
      documents: [
        {
          kind: 'text',
          name: 'Huit formulations candidates pour la note de remontée (fictives)',
          content:
            'F1 — « Sur l’échantillon de 12 demandes d’achat de juillet 2024, 6 ont été validées par le demandeur lui-même ou après réalisation de la prestation, pour un montant total de 7 615,00 €. »\n' +
            'F2 — « Le service achats est négligent : personne ne contrôle rien dans cette société. »\n' +
            'F3 — « Sur 15 commandes d’août 2024, 4 ne comportent pas de facture rattachée au dossier au 30/09/2024, pour 4 038,40 € HT. »\n' +
            'F4 — « S. Garnier contourne délibérément les procédures à des fins personnelles. »\n' +
            'F5 — « La direction ne s’intéresse pas au contrôle interne. »\n' +
            'F6 — « La note de service NS-2024-012 (article 2) n’impose ni valideur distinct du demandeur ni validation avant engagement ; la matrice des habilitations annoncée à l’article 3 n’a pas été publiée au 30/09/2024. »\n' +
            'F7 — « Il y a forcément eu des détournements que personne n’a voulu voir. »\n' +
            'F8 — « Trois numéros de commande (COM-2024-0605, COM-2024-0611 et COM-2024-0616) n’apparaissent pas dans le journal des commandes d’août 2024. »',
          note: 'Document fictif à visée pédagogique. Chaque formulation prétend décrire le même travail de revue des failles 1 et 2.',
        },
      ],
      questions: [
        {
          id: 'danone-m5-ex3-q1',
          question: 'Quelle formulation constitue une observation objective ?',
          type: 'mcq',
          options: [
            'F2 — « Le service achats est négligent : personne ne contrôle rien dans cette société. »',
            'F4 — « S. Garnier contourne délibérément les procédures à des fins personnelles. »',
            'F6 — « La note de service NS-2024-012 (article 2) n’impose ni valideur distinct du demandeur ni validation avant engagement ; la matrice annoncée n’a pas été publiée au 30/09/2024. »',
            'F7 — « Il y a forcément eu des détournements que personne n’a voulu voir. »',
          ],
          expected: '2',
          explanation:
            'F6 est une observation objective : elle décrit un fait vérifiable (le contenu d’un texte daté et son état de publication à une date donnée), sans adjectif d’appréciation ni intention supposée — n’importe qui peut la contrôler en relisant la note. F2 porte un jugement de valeur et généralise ; F4 suppose une intention (« délibérément », « à des fins personnelles ») qu’aucun élément probant n’étaye ; F7 spécule (« forcément ») sur des faits non observés. La différence n’est pas de nuance : elle est de nature — seuls les faits observables survivent à la contestation.',
        },
        {
          id: 'danone-m5-ex3-q2',
          question: 'Parmi les huit formulations, sélectionnez celles qui constituent des observations objectives (fait observable, vérifiable, périmètre et période précisés).',
          type: 'multi',
          options: [
            'F1 — 6 demandes sur 12 de juillet 2024 validées par le demandeur ou a posteriori, 7 615,00 €',
            'F2 — le service achats est négligent, personne ne contrôle rien',
            'F3 — 4 commandes d’août 2024 sans facture rattachée au 30/09/2024, 4 038,40 € HT',
            'F4 — S. Garnier contourne délibérément les procédures à des fins personnelles',
            'F5 — la direction ne s’intéresse pas au contrôle interne',
            'F6 — la note NS-2024-012 n’impose ni valideur distinct ni validation avant engagement ; matrice non publiée au 30/09/2024',
            'F7 — il y a forcément eu des détournements que personne n’a voulu voir',
            'F8 — trois numéros de commande absents du journal d’août 2024 (COM-2024-0605, -0611, -0616)',
          ],
          expected: ['0', '2', '5', '7'],
          explanation:
            'Quatre formulations objectives : F1 (périmètre « 12 demandes », période « juillet 2024 », chiffre « 7 615,00 € »), F3 (périmètre « 15 commandes », date d’arrêté « au 30/09/2024 », chiffre « 4 038,40 € »), F6 (fait textuel vérifiable, date d’arrêté) et F8 (écart de numérotation vérifiable ligne à ligne). Quatre formulations interprétatives : F2 (jugement de valeur + généralisation « personne », « rien »), F4 (intention supposée), F5 (intention prêtée à la direction, invérifiable), F7 (spéculation « forcément » sur des faits non observés). Le critère de tri tient en un test : peut-on vérifier l’énoncé en consultant une pièce, sans interpréter ? Si oui, il est objectif.',
        },
        {
          id: 'danone-m5-ex3-q3',
          question: 'Pourquoi F2 (« Le service achats est négligent : personne ne contrôle rien dans cette société ») n’est-elle pas défendable dans une note de remontée ?',
          type: 'mcq',
          options: [
            'Elle porte un jugement de valeur (« négligent ») et généralise (« personne », « rien ») au lieu de décrire des faits observés sur un périmètre défini',
            'Elle est trop courte : la direction exige au minimum une page par constat',
            'Elle nomme un service interne, ce qu’une note de remontée interdit formellement',
            'Elle devrait être rédigée au conditionnel pour être recevable',
          ],
          expected: '0',
          explanation:
            'Le vice de F2 est double : un jugement de valeur (« négligent » — une appréciation, pas un fait) et deux généralisations (« personne », « rien » — l’échantillon montrait 6 DA non conformes sur 12, pas l’absence totale de contrôle ; les 6 autres DA étaient validées conformément). Les autres options sont des leurres : la longueur n’a rien à voir, une note peut — et doit — nommer les services concernés, et le conditionnel n’est pas une exigence de forme (c’est le conditionnel des corrections hypothétiques, pas celui des constats). La version défendable de F2 sera réécrite en fait observable à la question 5.',
        },
        {
          id: 'danone-m5-ex3-q4',
          question: 'Que manque-t-il à F4 (« S. Garnier contourne délibérément les procédures à des fins personnelles ») pour être défendable en l’état ?',
          type: 'mcq',
          options: [
            'Des éléments probants : un fait observé (par exemple « 4 demandes validées par leur propre demandeur ») et non une intention supposée',
            'Une proposition de sanction disciplinaire à l’encontre de S. Garnier',
            'Une provision comptable couvrant le risque de détournement',
            'La mention « confidentiel » et l’accord préalable des ressources humaines',
          ],
          expected: '0',
          explanation:
            'F4 affirme une intention (« délibérément », « à des fins personnelles ») — or l’intention ne s’observe pas : elle se déduit d’une enquête, pas d’un journal de demandes d’achat. Ce que les pièces attestent est plus modeste et plus solide : 4 DA validées par leur demandeur, dont 3 par S. Garnier, dans un contexte où la note de service tolérait la dérive (la cause identifiée à la faille 1). Les autres options aggravent le problème au lieu de le résoudre : proposer une sanction, provisionner ou qualifier de confidentiel reviendrait à donner un statut officiel à une affirmation non prouvée. La règle : on remonte des faits ; l’appréciation des responsabilités appartient à la direction.',
        },
        {
          id: 'danone-m5-ex3-q5',
          question: 'Réécrivez F2 (« Le service achats est négligent : personne ne contrôle rien dans cette société ») en une observation objective.',
          type: 'open',
          keywords: ['observé', 'constaté', 'sur la période', 'échantillon', 'exemples'],
          explanation:
            'Modèle de réécriture : « Sur la période de juillet 2024, il a été observé, sur un échantillon de 12 demandes d’achat, que 6 validations ne répondaient pas au circuit attendu : 4 demandes validées par leur propre demandeur et 2 validées après réalisation de la prestation, pour une incidence de 7 615,00 € HT. Exemples : DA-2024-104 (185,00 €), DA-2024-111 (1 850,00 €), DA-2024-109 (2 150,00 €). » Les ingrédients obligatoires : ce qui a été observé ou constaté (un fait, pas une qualité), sur quelle période, sur quel échantillon (le périmètre), avec des exemples référencés et chiffrés. Ce qui a disparu : l’adjectif « négligent », les généralisations « personne » et « rien », et toute visée de personnes — le lecteur de la note conclura lui-même, sur des faits qui ne se contestent pas.',
        },
      ],
      solutionSummary:
        'Quatre formulations objectives (F1, F3, F6, F8) : chacune décrit un fait observable — périmètre et période explicites, chiffres, références de pièces, date d’arrêté — vérifiable par n’importe quel lecteur. Quatre formulations interprétatives (F2, F4, F5, F7) : jugement de valeur et généralisation (F2), intention supposée (F4), intention prêtée à la direction (F5), spéculation « forcément » (F7). La réécriture de F2 montre la mécanique : remplacer l’appréciation par l’observation datée, chiffrée et exemplifiée — « il a été observé, sur la période, sur un échantillon, exemples à l’appui ». En entretien, la formule à retenir : je décris ce que j’ai observé, sur quel périmètre, avec quels exemples ; l’interprétation appartient au lecteur.',
      interviewTips: [
        'La formule passe-partout : « Sur [période], sur [échantillon], il a été observé que [fait chiffré] — exemples [références] ».',
        'Bannissez « négligent », « délibérément », « forcément » : chaque adjectif d’intention est une porte ouverte à la contestation.',
      ],
    },
  ],
  interviewQuestions: [
    { question: 'Qu’est-ce qu’une faille de procédure, et comment la distinguez-vous d’une simple erreur ?', expected: 'Une déviance durable du processus officiel qui prive un contrôle de son efficacité. L’erreur est ponctuelle et se corrige par l’incident ; la faille est récurrente ou structurelle (texte ambigu, contrôle inexistant) et appelle une remédiation de processus. Le critère : la récurrence d’un même schéma, établie par des occurrences datées.', hint: 'Récurrence + règle enfreinte = faille ; incident isolé = erreur.' },
    { question: 'Comment structurez-vous une remontée de faille à la direction ?', expected: 'Constat factuel (période, échantillon, chiffres, références), cause première identifiée, risque encouru, conséquences chiffrées, recommandations hiérarchisées et proportionnées, puis plan d’action avec responsable nommé, délai daté et contrôle de suivi — enfin mesure de l’efficacité de la remédiation après mise en œuvre.' },
    { question: 'Quelle différence faites-vous entre cause, risque et conséquence ?', expected: 'La cause explique pourquoi la faille existe (note de service ambiguë, logiciel qui n’historise pas les brouillons) ; le risque est ce qui peut arriver tant qu’elle subsiste (dépense non contrôlée, exhaustivité indémontrable) ; la conséquence est déjà constatée et se chiffre (6 DA non conformes pour 7 615,00 €, 4 commandes sans facture pour 4 038,40 €). La recommandation vise la cause, jamais la conséquence.' },
    { question: 'Comment vérifiez-vous qu’une faiblesse est récurrente et non ponctuelle ?', expected: 'En croisant trois axes : le temps (plusieurs occurrences sur plusieurs semaines ou mois), le périmètre (plusieurs demandeurs ou circuits) et la nature (même schéma de dérive). J’appuie chaque occurrence sur une référence datée, et je relève les marqueurs d’habitude dans les écrits (« comme la dernière fois », « on garde ce circuit »).' },
    { question: 'Que mettez-vous dans une observation objective ?', expected: 'Un fait observable et vérifiable : périmètre (« sur un échantillon de 12 demandes »), période (« juillet 2024 »), chiffres (« 7 615,00 € »), références des pièces (« DA-2024-111 ») — et rien d’autre : ni adjectif d’appréciation, ni intention supposée, ni généralisation. Le test : n’importe qui peut vérifier l’énoncé en consultant la pièce.' },
    { question: 'La faille que vous remontez peut passer pour le fait d’une personne : comment restez-vous factuel ?', expected: 'Je décris l’acte et la règle, jamais l’intention : « 4 demandes validées par leur propre demandeur » est un fait ; « il contourne délibérément » est une interprétation. Je cite des références, pas des adjectifs. Si un comportement doit être signalé, c’est au responsable avec les preuves — la remontée décrit le dispositif défaillant, qui a permis la dérive autant que la dérive elle-même.' },
    { question: 'Le responsable du processus conteste votre constat : quelle est votre conduite ?', expected: 'Revenir aux éléments probants : la règle écrite d’un côté, les faits référencés de l’autre. Si le désaccord porte sur l’interprétation, je documente sa position et la mienne ; s’il persiste, j’escalade par la voie prévue (responsable hiérarchique, comité) avec le dossier complet. Une remontée bien étayée ne craint pas la contradiction : c’est même elle qui la légitime.' },
    { question: 'Que vaut une recommandation sans responsable ni délai ?', expected: 'Rien d’opérationnel : un vœu. Chaque recommandation porte un responsable d’action nommé (une personne, pas un service), une échéance datée et réaliste, et un contrôle de suivi défini — qui vérifie quoi, quand, sur quel indicateur. Sans cela, la direction « prend note » et la faille survit à la réunion.' },
    { question: 'Comment mesurez-vous l’efficacité d’une remédiation ?', expected: 'Par le contrôle de suivi, à l’échéance convenue, sur des indicateurs précis : zéro auto-validation et 100 % de validations a priori sur un échantillon mensuel de demandes d’achat ; zéro facture sans commande et 100 % de liens d’archive sur le rapprochement mensuel. L’action « faite » ne suffit pas : c’est la disparition constatée de la faille qui referme le dossier — sinon, nouvelle boucle documentée.' },
    { question: 'Deux failles simultanées : laquelle remontez-vous en premier ?', expected: 'Je remonte les deux dans la même note, hiérarchisées : d’abord celle dont le risque est le plus élevé (dépenses sans contrôle indépendant, incidence 7 615,00 € sur l’échantillon) ou dont la remédiation est la plus rapide (instruction de blocage immédiate). Prioriser, ce n’est pas trier ce qui mérite d’exister — c’est ordonner ce qui doit être décidé en premier.' },
  ],
  followUps: [
    { question: 'Le responsable désigné pour l’action ne fait rien au bout du délai : que faites-vous ?', expected: 'Relance écrite datée, puis escalade au sponsor de la remontée (direction) avec l’historique ; au besoin, révision du plan — le responsable, le périmètre ou la solution était peut-être mal calibré. Le suivi reste documenté : une action en retard est un fait, pas un motif de silence.' },
    { question: 'On vous reproche de « monter des dossiers contre les collègues » : que répondez-vous ?', expected: 'Le dossier décrit des faits et une règle, pas des personnes : je le montre — références, dates, montants, aucun adjectif. La remontée est un service rendu à l’organisation (elle corrige le dispositif qui a permis la dérive), pas une dénonciation. Si le malaise persiste, j’en parle au responsable hiérarchique — mais je ne retire pas des faits vérifiables.' },
    { question: 'La faille vient du texte lui-même (note de service ambiguë) : sur quoi porte la recommandation ?', expected: 'Sur la cause : réécrire l’article fautif — valideur distinct du demandeur, validation a priori obligatoire, suppléant désigné en cas d’indisponibilité, matrice des habilitations publiée. Avec une mesure transitoire en attendant (blocage comptable des DA non conformes, régularisation documentée des dossiers en instance). On ne recommande pas de « faire attention » : on recommande un texte qui ne laisse plus la place à la dérive.' },
    { question: 'Le coût de la correction vous paraît supérieur à l’incidence constatée : que faites-vous ?', expected: 'Je hiérarchise : d’abord les mesures à faible coût et fort effet (instruction de blocage, article réécrit), puis les chantiers lourds. Si un risque résiduel est accepté par la direction, il est documenté comme tel — un risque accepté en connaissance de cause est du management ; un risque invisible est une faille de plus.' },
    { question: 'Comment présentez-vous le risque sans alarmer à l’excès ?', expected: 'Je décris le scénario réaliste chiffré sur les données (6 DA sur 12, 7 615,00 €), puis le scénario majoré en le signalant comme tel (« si la pratique s’étendait à tout le mois… »). Jamais de « forcément », jamais de généralisation : l’exagération décrédibilise la remontée et détourne l’attention du vrai problème.' },
    { question: 'Votre contrôle de suivi montre que la faille persiste après la remédiation : quel est votre constat ?', expected: 'Ce n’est pas un échec personnel, c’est une donnée : la remédiation n’a pas été efficace. Je le documente comme la faille initiale (constat chiffré sur le même indicateur), j’analyse pourquoi l’action a échoué (mesure inadaptée, responsable sans moyens, contournement nouveau) et j’engage une nouvelle boucle : recommandation ajustée, échéance rapprochée, escalade si besoin. La seule faute serait de déclarer le dossier clos sans preuve.' },
  ],
  evaluation: {
    criteria: [
      { label: 'Détection et qualification', description: 'Repère les signaux, oppose la pratique au texte officiel et distingue erreur isolée, faiblesse ponctuelle et faille récurrente sur éléments probants.' },
      { label: 'Triptyque cause / risque / conséquence', description: 'Identifie la cause première, formule le risque encouru et chiffre les conséquences constatées — sans jamais les confondre.' },
      { label: 'Périmètre et incidence', description: 'Évalue l’étendue de la faille (opérations, services, période) et chiffre l’incidence sur l’échantillon contrôlé, en distinguant calcul et estimation.' },
      { label: 'Observation objective', description: 'Rédige des faits observables — période, échantillon, chiffres, références — sans jugement d’intention, généralisation ni exagération.' },
      { label: 'Recommandation proportionnée', description: 'Propose des actions qui traitent la cause à un coût et délai réalistes, avec mesures transitoires et rattrapage des dossiers existants.' },
      { label: 'Plan d’action et suivi de remédiation', description: 'Nomme un responsable d’action, fixe une échéance, définit le contrôle de suivi (indicateur, fréquence, instance) et mesure l’efficacité après mise en œuvre.' },
    ],
  },
}
