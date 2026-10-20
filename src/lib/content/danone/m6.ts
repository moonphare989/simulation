// =====================================================================
// Fiche 3 — Centrale Danone · Mission 6
// Création de trois tableaux de bord Excel de suivi d’activité
// =====================================================================
import type { Mission } from '@/lib/types'
import { DANONE_REFERENCE, FICHE3_DISCLAIMER, danoneBase } from './_commun'

export const danoneM6: Mission = {
  ...danoneBase(6),
  id: 'danone-m6',
  title: 'Création de trois tableaux de bord Excel de suivi d’activité',
  summary:
    'Construire trois tableaux de bord Excel de suivi d’activité — factures et délais de traitement, comptes clients/fournisseurs, anomalies et contrôles à réaliser : partir de l’usage, nettoyer et structurer les données, mettre la bonne formule au bon endroit (SOMME.SI/SOMME.SI.ENS, NB.SI/NB.SI.ENS, SI, RECHERCHEX et alternatives anciennes), croiser par tableau croisé dynamique, contrôler l’exactitude par recoupements et documenter les hypothèses. Scénario fictif à visée pédagogique.',
  referenceData: [
    FICHE3_DISCLAIMER,
    ...DANONE_REFERENCE,
    'Mission 6 : contribution à la création de trois tableaux de bord Excel de suivi d’activité (factures et délais de traitement, comptes clients/fournisseurs, anomalies et contrôles à réaliser), avec nettoyage et structuration des données, formules de calcul, contrôles de cohérence et documentation des hypothèses.',
  ],
  comprehension: {
    intro:
      'Un tableau de bord n’est pas une feuille qui déborde de chiffres : c’est une page qui répond à une question de gestion — combien de temps prend la saisie d’une facture, qui doit quoi depuis combien de temps, où en sont les anomalies du mois. Dans ce scénario fictif, la contribution porte sur trois tableaux de bord Excel construits pour le service comptabilité de la centrale laitière : suivi des factures et de leurs délais de traitement, suivi des comptes clients et fournisseurs (soldes, ancienneté, concentration), et pilotage des anomalies et contrôles à réaliser. Trois chantiers, une même discipline. D’abord l’usage : qui lit le tableau, quelle décision il doit éclairer, à quelle fréquence — faute de quoi l’on produit de la décoration. Ensuite les données : nettoyées et structurées (une information par colonne, dates réellement en dates, montants en nombres, doublons traqués), parce qu’aucune formule ne rattrape une source sale. Puis les formules : SOMME.SI et SOMME.SI.ENS totalisent sous critères, NB.SI et NB.SI.ENS comptent, SI décide, RECHERCHEX retrouve — et les alternatives anciennes (RECHERCHEV habillée de SIERREUR, INDEX+EQUIV) restent indispensables dès que le fichier voyage entre versions d’Excel ; le tableau croisé dynamique, lui, croise et explore sans écrire une seule formule. Enfin — c’est le cœur du métier — l’exactitude : un total ne se lit pas, il se recoupe (somme croisée, formule de contrôle, rapprochement de deux listes par RECHERCHEX et ESTNA), les hypothèses se documentent (note de méthode : périmètre, extraction, conventions) et le résultat se fait relire par un tiers avant diffusion. Un tableau de bord faux est pire que l’absence de tableau de bord : il donne à la décision l’apparence de la preuve.',
    definitions: [
      { term: 'Tableau de bord de suivi d’activité', definition: 'Page de synthèse destinée à éclairer une décision récurrente (traiter les retards de saisie, lancer les relances clients, prioriser les anomalies) : quelques indicateurs définis, une lecture immédiate, un destinataire et une fréquence de mise à jour identifiés. Il se distingue du rapport exhaustif par ce qu’il écarte autant que par ce qu’il montre.' },
      { term: 'Nettoyage et structuration des données', definition: 'Mise en état de la source avant tout calcul : suppression des lignes vides et des totaux insérés, formats normalisés (dates en dates, montants en nombres, libellés homogènes — « achat » et non « Achat »/« achats »), doublons traqués, tableau plat à une information par colonne. Une formule exacte sur une source sale produit un résultat faux avec assurance.' },
      { term: 'Filtres et tris', definition: 'Outils d’exploration d’Excel : le filtre n’affiche que les lignes répondant aux critères (criticité « haute » et statut « ouverte »), le tri réordonne (délais décroissants, soldes décroissants). Ils accélèrent la revue manuelle — mais ne modifient pas les données et ne remplacent pas les compteurs du tableau de bord.' },
      { term: 'SOMME.SI / SOMME.SI.ENS', definition: 'Totalisation sous critères. SOMME.SI(plage; critère; plage_somme) prend un critère ; SOMME.SI.ENS(plage_somme; plage1; critère1; …) en accepte plusieurs, y compris deux bornes sur une même colonne (">=01/09/2024" et "<01/10/2024"). Exemple : total des créances clients dont l’ancienneté dépasse 60 jours. Attention : l’ordre des arguments diffère entre les deux fonctions.' },
      { term: 'NB.SI / NB.SI.ENS', definition: 'Comptage sous critères, même logique : NB.SI compte sur un critère (nombre de pièces « achat »), NB.SI.ENS sur plusieurs (anomalies « haute » ET « ouvertes »). Réflexe de fiabilité : confronter le comptage à la volumétrie attendue (30 pièces, 24 anomalies) — un chiffre isolé ne se contrôle pas, un chiffre réconcilié oui.' },
      { term: 'SI', definition: 'Le test logique à deux branches : =SI(condition; valeur_si_vrai; valeur_si_faux), par exemple =SI(F2>5;"hors délai";"dans les délais"). La condition s’écrit sur le seuil exact — « dépasse 5 jours » se traduit par > 5, pas >= 5 — et la branche « sinon » ne s’omet jamais si le tableau doit rester lisible.' },
      { term: 'RECHERCHEX', definition: 'La recherche moderne (Excel 365, Microsoft 365) : =RECHERCHEX(valeur_cherchée; plage_recherche; plage_renvoi; si_non_trouvé) cherche par défaut de façon exacte, fonctionne dans les deux sens et renvoie un message au lieu de #N/A grâce à l’argument si_non_trouvé. C’est le réflexe pour retrouver le RIB d’un fournisseur à partir de son code.' },
      { term: 'Alternatives anciennes : RECHERCHEV, INDEX+EQUIV, SIERREUR', definition: 'Les équivalents des versions antérieures : =SIERREUR(RECHERCHEV(valeur; table; n°_colonne; FAUX);"non trouvé") — recherche exacte obligatoire (FAUX), colonne comptée depuis la première colonne de la plage, recherche vers la droite uniquement ; INDEX+EQUIV lève ces deux limites. Indispensables dès que le fichier circule vers un Excel sans RECHERCHEX (#NOM?).' },
      { term: 'Recherche de doublons (NB.SI > 1 + mise en forme conditionnelle)', definition: 'La formule =NB.SI($A$2:$A$151;A2)>1, posée en règle de mise en forme conditionnelle, colore chaque ligne dont le numéro apparaît plus d’une fois dans la plage verrouillée. Sans le verrouillage ($), la plage glisse avec la ligne copiée et le premier exemplaire échappe au marquage — l’erreur classique.' },
      { term: 'Tableau croisé dynamique (TCD)', definition: 'Synthèse croisée sans formule : glisser les champs (type, semaine, responsable) en lignes et colonnes, compter ou totaliser en valeurs, actualiser à chaque mise à jour. Outil d’exploration et de contre-vérification des ordres de grandeur — le tableau de bord final garde, lui, ses indicateurs choisis et documentés.' },
      { term: 'Contrôle de cohérence (formule de contrôle, somme croisée)', definition: 'Preuve chiffrée que le tableau se recoupe : la formule de contrôle compare la valeur affichée à un recalcul indépendant (écart attendu : 0) ; la somme croisée vérifie que le total général égale la somme des sous-totaux (achats + ventes + frais généraux). Sans ces contrôles, l’exactitude n’est qu’une impression — la relecture « à l’œil » n’est pas un contrôle.' },
      { term: 'Rapprochement de deux listes (RECHERCHEX + ESTNA)', definition: 'Comparer journal et tableau de bord, balance et feuille de calcul : =SI(ESTNA(RECHERCHEX(A2;liste_B;liste_B));"écart";"ok") signale les éléments de A absents de B (écriture concurrente : =SI(NB.SI(liste_B;A2)=0;"écart";"ok")). Un vrai rapprochement s’effectue dans les deux sens : absent de B, absent de A.' },
      { term: 'Graphique pertinent', definition: 'Le graphique qui sert un message : courbe pour une évolution (délai moyen mensuel avec seuil cible), barres triées pour une comparaison (encours par client), camembert limité aux répartitions simples (cinq parts au plus). Les effets 3D déforment la perception des proportions : un graphique qui déforme ne décore pas, il ment.' },
      { term: 'Documentation des hypothèses et exactitude des résultats', definition: 'La note de méthode accompagne le tableau de bord : périmètre (extrait de 30 pièces sur environ 150, ou exhaustivité), source et date d’extraction, conventions (jours calendaires, seuil de 60 jours), exclusions, mode de calcul de chaque indicateur. Elle conditionne l’exactitude interprétée : un résultat exact lu hors de son périmètre reste une erreur d’interprétation.' },
    ],
    keyPoints: [
      'Un tableau de bord répond d’abord à une question de gestion : destinataire, décision éclairée, fréquence — avant tout fichier.',
      'La fiabilité se joue en amont : données nettoyées et structurées, une information par colonne, classeur en couches (données / calculs / restitution).',
      'La bonne formule au bon endroit : SOMME.SI.ENS totalise, NB.SI.ENS compte, SI décide, RECHERCHEX retrouve.',
      'RECHERCHEX accepte un argument si_non_trouvé ; sur versions anciennes, RECHERCHEV s’habille de SIERREUR (ou INDEX+EQUIV).',
      'Doublons : =NB.SI($A$2:$A$151;A2)>1 en mise en forme conditionnelle, plage verrouillée — sinon le premier exemplaire échappe au marquage.',
      'Le tableau croisé dynamique croise volumes et montants par dimensions sans une seule formule — et offre un second chemin de contrôle.',
      'Un total exact n’est pas un total recoupé : formule de contrôle (écart attendu 0) et somme croisée (sous-totaux = total général).',
      'Rapprocher deux listes : RECHERCHEX + ESTNA (ou NB.SI = 0), dans les deux sens — les trous ne se voient jamais dans les totaux proches.',
      'Un graphique pertinent porte un message : ligne = évolution, barres = comparaison, camembert = répartition simple ; jamais de 3D.',
      'Les hypothèses se documentent (note de méthode : périmètre, extraction, conventions) et le tableau de bord se fait relire par un tiers avant diffusion.',
    ],
  },
  objectives: {
    why:
      'Environ 150 factures par mois, 45 comptes tiers à lettrer, des anomalies à suivre jusqu’à résolution : la direction ne lira jamais les journaux — elle lira une page. Les trois tableaux de bord construits dans cette mission transforment des données tenues en comptabilité en instruments de pilotage : délais de traitement, risques de recouvrement, avancement des contrôles. La discipline exigée est la même qu’en comptabilité : des données propres, des calculs justes, des résultats recoupés et des hypothèses documentées — car un tableau de bord faux, diffusé avec l’autorité du chiffre, est plus dangereux que l’absence de tableau de bord.',
    infoSought: [
      'La volumétrie et les délais : combien de pièces, traitées en combien de jours, lesquelles dépassent le seuil interne.',
      'La répartition par type (achats, ventes, frais généraux) et son poids en euros.',
      'Les soldes des tiers : créances clients, dettes fournisseurs, ancienneté et encours dépassant 60 jours.',
      'La concentration : quelle part des créances tient sur les premiers clients.',
      'L’état des anomalies : criticité, statut, responsable, échéance — et le taux de résolution.',
      'Les récurrences par cycle : où les anomalies se concentrent-elles, mois après mois.',
      'L’exactitude : totaux recoupés par somme croisée, recalcul indépendant et rapprochement des listes.',
      'Le contexte de lecture : périmètre, date d’extraction, conventions — tout ce qui conditionne l’interprétation.',
    ],
    risksCovered: [
      'Tableau de bord faux : formule erronée, plage incomplète, critère mal écrit — avec l’apparence de l’exactitude.',
      'Données sales : doublons, formats hétérogènes, totaux insérés — qui contaminent tous les indicateurs en aval.',
      'Indicateurs non pertinents : de la décoration chiffrée qui noie la décision au lieu de l’éclairer.',
      'Absence de documentation : un périmètre non précisé (extrait pris pour l’exhaustif) induit le lecteur en erreur.',
      'Recherches non sécurisées : #N/A non gérés qui polluent restitution, rapprochements et contrôles.',
      'Graphiques trompeurs : effets 3D et camemberts surchargés qui déforment la perception.',
      'Incompatibilité de version : formules modernes illisibles chez un destinataire resté sur un Excel ancien.',
      'Aucune relecture : le concepteur ne voit jamais ses propres erreurs de saisie et de plage.',
      'Tableau de bord non tenu : une fréquence de mise à jour non respectée décrédibilise définitivement l’outil.',
    ],
  },
  preparation: {
    documents: [
      'Les exports sources du mois : journal de suivi des saisies (n°, dates, type, montant), balance auxiliaire clients/fournisseurs, table de suivi des anomalies.',
      'Le référentiel tiers : codes, raisons sociales, contacts, RIB — la base des recherches RECHERCHEX.',
      'L’historique des mois précédents : sans tendance, aucun indicateur ne se commente.',
      'La liste des destinataires et la décision que chaque indicateur doit éclairer.',
      'Les conventions et seuils internes : délai cible de saisie, encours à plus de 60 jours, échelles de criticité des anomalies.',
      'La version d’Excel des destinataires (RECHERCHEX disponible, ou alternatives RECHERCHEV/INDEX+EQUIV à prévoir).',
      'Le paramétrage régional des postes : séparateur d’arguments (« ; » en français), formats de dates.',
      'Un gabarit de tableau de bord déjà validé, s’il existe, et la charte de lecture (unités, couleurs d’alerte).',
      'Les procédures de contrôle existantes : qui recoupe, qui relit, qui signe la diffusion.',
      'La nomenclature de versionnage et d’archivage des fichiers (TdB_2024-09_v2.xlsx…).',
    ],
    questionsToAsk: [
      'Qui lira ce tableau de bord, et quelle décision chaque indicateur doit-il éclairer ?',
      'À quelle fréquence sera-t-il mis à jour, et par qui ?',
      'Le périmètre est-il l’exhaustivité du mois ou un extrait — et comment le documenter ?',
      'Quels seuils et conventions internes retenir : délai cible de saisie, encours à 60 jours, criticités ?',
      'Les données sources sont-elles déjà nettoyées, ou le nettoyage est-il à ma charge ?',
      'Quelle version d’Excel utilisent les destinataires : RECHERCHEX ou alternatives anciennes ?',
      'Qui relit et valide avant diffusion — et que fait-on d’un écart constaté en contrôle ?',
    ],
    precautions: [
      'Tester chaque formule sur un cas connu (une facture, un compte, une anomalie) avant de l’étendre à tout le tableau.',
      'Recouper systématiquement les totaux avec une source indépendante : balance, journal, ou une seconde méthode de calcul.',
      'Verrouiller les plages ($) dès qu’une formule doit se recopier : le déverrouillage est la première cause de résultats faux.',
      'Ne jamais diffuser sans note de méthode (périmètre, extraction, hypothèses) ni sans relecture par un tiers.',
      'Se méfier des plages élargies « au cas où » et des lignes filtrées : la formule voit toujours plus que l’écran n’affiche.',
    ],
  },
  method: [
    { title: 'Partir de l’usage, pas du fichier', description: 'Définir destinataire, décision éclairée et fréquence : la direction veut-elle les retards de saisie, les encours clients, l’avancement des anomalies ? Trois questions distinctes = trois tableaux de bord, pas une feuille unique de quarante colonnes.', why: 'Un tableau de bord sans usage défini devient une accumulation de chiffres que personne ne lit : la sélection des indicateurs commence par la sélection des questions.' },
    { title: 'Recenser et extraire les données sources', description: 'Identifier les sources (journal de saisie, balance auxiliaire, suivi des anomalies, référentiel tiers), extraire avec leur date et leur périmètre, et tracer chaque extraction.', why: 'La date et le périmètre d’extraction conditionnent l’interprétation : un total sans source datée n’est pas défendable.' },
    { title: 'Nettoyer et structurer', description: 'Supprimer lignes vides et totaux insérés, normaliser formats et libellés, traquer les doublons (=NB.SI($A$2:$A$151;A2)>1 en mise en forme conditionnelle), poser le tableau plat : une ligne par entité, une information par colonne.', why: 'Aucune formule ne rattrape une source sale : le nettoyage est ce qui rend les calculs crédibles.' },
    { title: 'Organiser le classeur en couches', description: 'Séparer les feuilles : données brutes, calculs intermédiaires (délais, comptages, statuts calculés), tableau de bord de restitution — avec plages nommées ou tableaux structurés pour que les formules survivent aux ajouts de lignes.', why: 'La séparation permet de mettre la donnée à jour sans toucher au tableau de bord, et de contrôler sans fouiller la présentation.' },
    { title: 'Choisir les indicateurs', description: 'Retenir peu d’indicateurs, chacun défini (formule, seuil, unité) et relié à une décision : délai moyen et part hors délai ; soldes, ancienneté et concentration ; taux de résolution et anomalies en retard.', why: 'Mieux vaut cinq indicateurs lus que cinquante ignorés : la pertinence se joue au tri.' },
    { title: 'Écrire les formules d’agrégation', description: 'SOMME.SI et SOMME.SI.ENS pour totaliser sous critères, NB.SI et NB.SI.ENS pour compter — plages verrouillées, chaque formule testée sur un cas connu avant extension.', why: 'Totaliser et compter sont les deux gestes du tableau de bord : les confondre fausse tous les indicateurs d’un coup.' },
    { title: 'Écrire les tests et les recherches', description: 'SI pour les statuts calculés (« hors délai » au-delà du seuil), RECHERCHEX avec argument si_non_trouvé pour les données de référentiel (RIB d’un fournisseur à partir de son code).', why: 'Les recherches non sécurisées produisent des #N/A qui polluent la restitution et rompent les rapprochements.' },
    { title: 'Prévoir les alternatives de compatibilité', description: 'Selon la version d’Excel des destinataires : RECHERCHEV + SIERREUR ou INDEX+EQUIV à la place de RECHERCHEX, syntaxes testées sur la version cible avant diffusion.', why: 'Un fichier impeccable chez soi qui affiche #NOM? chez le lecteur est un tableau de bord mort.' },
    { title: 'Croiser avec le tableau croisé dynamique', description: 'Construire les TCD de contrôle : volumes par type et par semaine, anomalies par cycle et par responsable — puis confronter leurs totaux à ceux des formules.', why: 'Le TCD offre un second chemin de calcul : quand deux méthodes différentes donnent le même total, le résultat commence à être exact.' },
    { title: 'Rapprocher les listes entre elles', description: 'Confronter journal et tableau de bord, balance et feuille de calcul : =SI(ESTNA(RECHERCHEX(A2;liste_B;liste_B));"écart";"ok") ligne à ligne, dans les deux sens.', why: 'Les écarts d’exhaustivité — une ligne absente, une ligne en trop — ne se voient jamais dans des totaux proches : seulement ligne à ligne.' },
    { title: 'Construire les contrôles de cohérence', description: 'Formules de contrôle (écart attendu : 0 entre valeur affichée et recalcul indépendant), somme croisée (total général = somme des sous-totaux), alertes visibles plutôt que dissimulées dans le fichier diffusé.', why: 'L’exactitude ne s’affirme pas, elle se démontre — et la démonstration doit voyager avec le tableau de bord.' },
    { title: 'Choisir le graphique pertinent', description: 'Un graphique = un message : courbe du délai moyen mensuel avec seuil cible, barres triées des encours par client, part de résolution par criticité. Bannir camemberts surchargés et effets 3D.', why: 'Le graphique est l’argument visuel du tableau de bord : s’il déforme (3D) ou noie (quinze parts), il détourne au lieu de convaincre.' },
    { title: 'Documenter hypothèses et méthode', description: 'Rédiger la note de méthode : périmètre (extrait ou exhaustif), source et date d’extraction, conventions (jours calendaires, seuil de 60 jours), exclusions, mode de calcul de chaque indicateur.', why: 'L’hypothèse documentée protège le lecteur — et l’auteur — contre l’interprétation hors périmètre.' },
    { title: 'Faire relire, diffuser et tenir', description: 'Revue par un tiers sur la base des contrôles chiffrés, diffusion datée et versionnée, mise à jour tenue à la fréquence annoncée, suivi de la tendance mois après mois.', why: 'Un tableau de bord se crédibilise par sa régularité : la tendance n’existe qu’à condition de vivre.' },
  ],
  exercises: [
    // ================ EXERCICE 1 ================
    {
      id: 'danone-m6-ex1',
      title: 'La bonne formule au bon endroit',
      cycle: 'Transversal',
      context:
        'Dix situations de construction, dix formules à choisir. Le classeur « Suivi activité » sert de référentiel commun : les questions y renvoient. Chaque option inclut des erreurs typiques — arguments inversés, références non verrouillées, bornes de seuil, plages trompeuses. Excel en français, séparateur d’arguments « ; ».',
      risks: ['Formule inadaptée', 'Références non verrouillées', 'Erreurs non gérées (#N/A)'],
      documents: [
        {
          kind: 'text',
          name: 'Structure du classeur « Suivi activité » (fictif)',
          content:
            'Classeur « Suivi activité » — septembre 2024 (structure fictive).\n\nFeuille « Données » (une ligne par pièce, lignes 2 à 151) :\n  A : n° de pièce ; B : tiers (fournisseur ou client) ; C : date de réception ; D : type (achat, vente, frais généraux) ; E : montant en euros ; F : délai de saisie en jours.\n\nFeuille « Référentiel tiers » (lignes 2 à 50) :\n  A : code tiers ; B : raison sociale ; C : contact ; D : RIB.\n\nFeuille « Anomalies » (lignes 2 à 25) :\n  A : référence ; B : cycle ; C : criticité (haute, moyenne, basse) ; D : responsable ; E : statut (ouverte, en cours, résolue) ; F : délai restant en jours.\n\nFeuille « TdB » : tableau de bord de synthèse.\n\nExcel en français : séparateur d’arguments « ; », critères entre guillemets.',
          note: 'Document fictif. La cellule H2 de la feuille « Référentiel tiers » reçoit le code tiers saisi par l’utilisateur pour les recherches.',
        },
      ],
      questions: [
        {
          id: 'danone-m6-ex1-q1',
          question:
            'Quelle formule utiliser pour compter le nombre de factures du fournisseur « Transports Ravel » reçues en mars 2024 (tiers en colonne B, dates de réception en colonne C) ?',
          type: 'mcq',
          options: [
            '=NB.SI($B$2:$B$151;"Transports Ravel")',
            '=NB.SI.ENS($B$2:$B$151;"Transports Ravel";$C$2:$C$151;">=01/03/2024";$C$2:$C$151;"<01/04/2024")',
            '=SOMME.SI.ENS($E$2:$E$151;$B$2:$B$151;"Transports Ravel")',
            '=NB.SI.ENS($B$2:$B$151;"Transports Ravel";$C$2:$C$151;"mars")',
          ],
          expected: '1',
          explanation:
            'Compter selon plusieurs critères relève de NB.SI.ENS : le tiers, puis deux bornes sur la même colonne de dates (>=01/03/2024 et <01/04/2024) — ce cumul de critères sur une même plage est autorisé. NB.SI ne prend qu’un critère (il compterait le fournisseur sur tous les mois) ; SOMME.SI.ENS totaliserait des montants, pas des pièces ; et « mars » n’est pas un critère de date reconnu — on encadre toujours par des bornes.',
        },
        {
          id: 'danone-m6-ex1-q2',
          question:
            'Quelle formule totalise les montants (colonne E) supérieurs à 5 000,00 € ?',
          type: 'mcq',
          options: [
            '=SOMME.SI($E$2:$E$151;">5000")',
            '=NB.SI($E$2:$E$151;">5000")',
            '=SOMME($E$2:$E$151;">5000")',
            '=SOMME.SI($E$2:$E$151;">5 000,00 €")',
          ],
          expected: '0',
          explanation:
            'Un seul critère : SOMME.SI suffit — =SOMME.SI($E$2:$E$151;">5000") totalise les montants au-delà du seuil. NB.SI compterait les pièces au lieu de les additionner ; SOMME n’accepte pas de critère (deux arguments seulement) ; et un critère rédigé « >5 000,00 € » — espace, virgule, symbole euro — n’est pas interprété comme un nombre : le critère s’écrit dans la syntaxe nue « >5000 ».',
        },
        {
          id: 'danone-m6-ex1-q3',
          question:
            'Pour renvoyer le RIB du fournisseur dont le code est saisi en H2 (code en colonne A, RIB en colonne D du Référentiel tiers) — avec un message si le code est absent ?',
          type: 'mcq',
          options: [
            '=RECHERCHEX($H$2;$A$2:$A$50;$D$2:$D$50)',
            '=RECHERCHEX($H$2;$D$2:$D$50;$A$2:$A$50;"RIB non trouvé")',
            '=RECHERCHEX($H$2;$A$2:$A$50;$D$2:$D$50;"RIB non trouvé")',
            '=RECHERCHEV($H$2;$A$2:$D$50;4;FAUX)',
          ],
          expected: '2',
          explanation:
            'RECHERCHEX(valeur cherchée ; plage de recherche ; plage de renvoi ; si_non_trouvé) : recherche exacte par défaut, colonne de renvoi libre, et surtout l’argument si_non_trouvé qui remplace le #N/A par le message demandé. La première option omet cet argument (#N/A si absent) ; la deuxième inverse les plages (elle chercherait le code parmi les RIB et renverrait… le code) ; RECHERCHEV($H$2;$A$2:$D$50;4;FAUX) fonctionnerait si le code existe, mais renverrait #N/A sans message s’il est absent.',
        },
        {
          id: 'danone-m6-ex1-q4',
          question:
            'Quelle règle de mise en forme conditionnelle colore les n° de pièce (colonne A) présents en doublon ?',
          type: 'mcq',
          options: [
            '=NB.SI($A$2:$A$151;A2)>1',
            '=NB.SI(A2:$A$151;A2)>1',
            '=SI(A2=A1;"doublon";"")',
            '=NB(A2)>1',
          ],
          expected: '0',
          explanation:
            'La règle =NB.SI($A$2:$A$151;A2)>1 compte, pour chaque ligne, les occurrences de son numéro dans toute la plage — verrouillée en $ pour rester fixe quand la règle s’applique ligne après ligne. La version déverrouillée (A2:$A$151) fait glisser la plage : chaque ligne ne voit plus que celles d’en dessous, et le premier exemplaire d’un doublon n’est jamais marqué. La comparaison à la seule ligne précédente (SI(A2=A1;…)) ne détecte que les doublons adjacents ; NB compte des nombres, il ne compare rien.',
        },
        {
          id: 'danone-m6-ex1-q5',
          question:
            'Même besoin que la question sur le RIB (question 3), mais le fichier sera ouvert sur Excel 2016, où RECHERCHEX n’existe pas : quelle formule ?',
          type: 'mcq',
          options: [
            '=SIERREUR(RECHERCHEV($H$2;$A$2:$D$50;4;VRAI);"RIB non trouvé")',
            '=SIERREUR(RECHERCHEV($H$2;$A$2:$D$50;4;FAUX);"RIB non trouvé")',
            '=SIERREUR(RECHERCHEV($H$2;$D$2:$D$50;4;FAUX);"RIB non trouvé")',
            '=SIERREUR(RECHERCHEX($H$2;$A$2:$A$50;$D$2:$D$50);"RIB non trouvé")',
          ],
          expected: '1',
          explanation:
            'Sur Excel 2016 : =SIERREUR(RECHERCHEV($H$2;$A$2:$D$50;4;FAUX);"RIB non trouvé") — la valeur cherchée doit se trouver en première colonne de la plage, la colonne de renvoi se compte depuis cette première colonne (4e colonne = D = RIB), FAUX impose la recherche exacte, et SIERREUR transforme le #N/A en message. Le VRAI (recherche approximative) est une faute : il peut renvoyer le RIB d’un code voisin ; la troisième option cherche dans une plage où le code n’est pas en première colonne ; la quatrième utilise RECHERCHEX, absent d’Excel 2016 (#NOM?). L’alternative souple : INDEX+EQUIV.',
        },
        {
          id: 'danone-m6-ex1-q6',
          question:
            'Quelle formule totalise les montants des pièces de type « achat » (type en colonne D, montant en colonne E) ?',
          type: 'mcq',
          options: [
            '=NB.SI($D$2:$D$151;"achat")',
            '=SOMME.SI($E$2:$E$151;$D$2:$D$151;"achat")',
            '=SOMME.SI.ENS($D$2:$D$151;"achat";$E$2:$E$151)',
            '=SOMME.SI($D$2:$D$151;"achat";$E$2:$E$151)',
          ],
          expected: '3',
          explanation:
            'SOMME.SI(plage_de_critère ; critère ; plage_à_totaliser) : =SOMME.SI($D$2:$D$151;"achat";$E$2:$E$151) — le critère porte sur le type, la somme sur les montants. NB.SI compterait les lignes ; la deuxième option inverse les arguments ; la troisième confond les syntaxes : dans SOMME.SI.ENS, la plage à totaliser vient en premier (=SOMME.SI.ENS($E$2:$E$151;$D$2:$D$151;"achat") serait correcte). L’ordre des arguments est l’erreur de saisie la plus fréquente sur ces deux fonctions.',
        },
        {
          id: 'danone-m6-ex1-q7',
          question:
            'Quelle formule compte les anomalies de criticité « haute » encore « ouvertes » (criticité en colonne C, statut en colonne E, délai restant en colonne F de la feuille « Anomalies ») ?',
          type: 'mcq',
          options: [
            '=NB.SI($C$2:$C$25;"haute")',
            '=SOMME.SI.ENS($F$2:$F$25;$C$2:$C$25;"haute";$E$2:$E$25;"ouverte")',
            '=NB.SI.ENS($C$2:$C$25;"haute";$E$2:$E$25;"ouverte")',
            '=NB.SI.ENS($C$2:$C$25;"haute";$E$2:$E$25;"ouverte";$F$2:$F$25;"<0")',
          ],
          expected: '2',
          explanation:
            'Deux critères sur deux colonnes : NB.SI.ENS(criticité="haute" ; statut="ouverte"). NB.SI ne prend qu’un critère et compterait toutes les hautes, résolues comprises ; SOMME.SI.ENS additionnerait les délais restants au lieu de compter ; la dernière option ajoute une borne (délai < 0, c’est-à-dire « en retard ») que la question ne demande pas — elle ne compterait que les hautes ouvertes déjà en retard. Chaque critère ajouté doit correspondre à une intention, jamais à une prudence automatique.',
        },
        {
          id: 'danone-m6-ex1-q8',
          question:
            'Quelle formule affiche « hors délai » quand le délai de saisie (colonne F) dépasse 5 jours, et « dans les délais » sinon ?',
          type: 'mcq',
          options: [
            '=SI(F2>5;"dans les délais";"hors délai")',
            '=SI(F2>=5;"hors délai";"dans les délais")',
            '=SI(F2>5;"hors délai";"dans les délais")',
            '=SI(F2>5;"hors délai")',
          ],
          expected: '2',
          explanation:
            '=SI(F2>5;"hors délai";"dans les délais") : la condition respecte le seuil strict — « dépasse 5 jours » exclut le 5e jour, donc > 5 et non >= 5. La première option inverse les deux branches (elle affiche « dans les délais » pour ce qui est hors délai) ; la dernière omet l’argument FAUX : pour une pièce dans les délais, la cellule afficherait FAUX — illisible. Le choix du comparateur (> ou >=) doit toujours refléter la règle de gestion, pas l’habitude.',
        },
        {
          id: 'danone-m6-ex1-q9',
          question:
            'Pour repérer les n° de pièce de la feuille « Données » absents de la feuille « TdB » (colonne A des deux feuilles), en affichant « écart » : quelle formule de rapprochement ?',
          type: 'mcq',
          options: [
            '=SI(NB.SI(TdB!$A$2:$A$30;A2)>0;"écart";"ok")',
            '=SI(ESTNA(RECHERCHEX(A2;TdB!$A$2:$A$30;TdB!$A$2:$A$30));"écart";"ok")',
            '=SI(RECHERCHEX(A2;TdB!$A$2:$A$30;TdB!$A$2:$A$30)="";"écart";"ok")',
            '=SI(A2<>TdB!A2;"écart";"ok")',
          ],
          expected: '1',
          explanation:
            'Le rapprochement type : =SI(ESTNA(RECHERCHEX(A2;TdB!$A$2:$A$30;TdB!$A$2:$A$30));"écart";"ok") — RECHERCHEX échoue (#N/A) précisément quand la valeur est absente, et ESTNA intercepte ce cas sans s’intéresser aux autres erreurs. La première option a la logique inversée (> 0 signifie présent : la bonne écriture serait = 0) ; la troisième renvoie #N/A non géré dès la première valeur absente ; la dernière compare des positions (ligne 2 contre ligne 2), ce n’est pas un rapprochement. L’écriture concurrente acceptable : =SI(NB.SI(TdB!$A$2:$A$30;A2)=0;"écart";"ok").',
        },
        {
          id: 'danone-m6-ex1-q10',
          question:
            'Quelle formule compte les factures de plus de 5 000,00 € du fournisseur « Transports Ravel » (tiers en colonne B, montant en colonne E) ?',
          type: 'mcq',
          options: [
            '=SOMME.SI.ENS($E$2:$E$151;$B$2:$B$151;"Transports Ravel";$E$2:$E$151;">5000")',
            '=NB.SI($B$2:$B$151;"Transports Ravel")',
            '=NB.SI.ENS($B$2:$B$151;"Transports Ravel";$E$2:$E$151;">5000")',
            '=NB.SI.ENS($B$2:$B$151;"Transports Ravel";$E$2:$E$151;">5000";$E$2:$E$151;"<10000")',
          ],
          expected: '2',
          explanation:
            'Compter sous deux critères (tiers et seuil de montant) : =NB.SI.ENS($B$2:$B$151;"Transports Ravel";$E$2:$E$151;">5000") — la même colonne E sert de plage de critère, ce qui est parfaitement licite. SOMME.SI.ENS avec les mêmes arguments totaliserait les montants (ce n’est pas la question) ; NB.SI ne verrait que le fournisseur, sans le seuil ; la dernière option ajoute une borne haute (<10000) jamais demandée. Remarque : la colonne de critère et la colonne « comptée » se confondent ici — NB.SI.ENS compte les lignes qui satisfont tous les critères.',
        },
      ],
      solutionSummary:
        'Les couples à connaître par cœur : NB.SI.ENS compte, SOMME.SI.ENS totalise — tous deux acceptent plusieurs critères, y compris deux bornes sur une même colonne de dates ; SI décide (attention au comparateur exact : « dépasse 5 » s’écrit > 5) ; RECHERCHEX retrouve avec un argument si_non_trouvé, RECHERCHEV + SIERREUR (ou INDEX+EQUIV) tient le même rôle sur les versions anciennes ; les doublons se marquent par =NB.SI($A$2:$A$151;A2)>1 en mise en forme conditionnelle, plage verrouillée ; le rapprochement de deux listes repose sur RECHERCHEX + ESTNA (ou NB.SI = 0). Les erreurs types repérées dans les options : arguments inversés (l’ordre SOMME.SI/SOMME.SI.ENS diffère), références non verrouillées qui font glisser les plages, critères de date « en toutes lettres », seuils >= au lieu de >, plages trompeuses (recherche sur la mauvaise colonne).',
      interviewTips: [
        'Annoncez la fonction ET l’ordre de ses arguments : « NB.SI.ENS, plage de somme… pardon, plage de critère d’abord » — c’est là que se joue la crédibilité technique.',
        'Sur RECHERCHEX, citez d’emblée l’argument si_non_trouvé : la moitié des erreurs de recherche en tableur vient du #N/A non géré.',
      ],
    },
    // ================ EXERCICE 2 ================
    {
      id: 'danone-m6-ex2',
      title: 'Tableau de bord 1 — factures et délais de traitement',
      cycle: 'Saisie',
      context:
        'Premier tableau de bord : suivi des factures et de leurs délais de traitement. L’extrait pédagogique couvre 30 pièces du mois de septembre 2024 (le mois complet en compte environ 150 — cf. référence de la fiche) ; le périmètre « extrait » sera à documenter dans la note de méthode. Dans le classeur, la feuille « Saisies » porte : A n° de pièce, B date de réception, C date de saisie, D type, E montant ; le délai de saisie se calcule en colonne F par =C2-B2 (en jours). Toutes les données sont fictives.',
      risks: ['Indicateur faux', 'Moyenne écrasant les cas individuels', 'Périmètre non documenté'],
      documents: [
        {
          kind: 'table',
          name: 'Journal de suivi des saisies — 30 pièces de septembre 2024 (fictif)',
          columns: ['N° pièce', 'Date réception', 'Date saisie', 'Type', 'Montant (€)'],
          rows: [
            ['FA-2024-1401', '02/09/2024', '04/09/2024', 'achat', 12480],
            ['FA-2024-1402', '02/09/2024', '03/09/2024', 'achat', 3480],
            ['FV-2024-0921', '03/09/2024', '06/09/2024', 'vente', 18240],
            ['FA-2024-1403', '04/09/2024', '10/09/2024', 'achat', 8760],
            ['NF-2024-0142', '04/09/2024', '06/09/2024', 'frais généraux', 640],
            ['FA-2024-1404', '05/09/2024', '09/09/2024', 'achat', 5320],
            ['FV-2024-0922', '06/09/2024', '07/09/2024', 'vente', 9450],
            ['FA-2024-1405', '06/09/2024', '14/09/2024', 'achat', 4630],
            ['FA-2024-1406', '09/09/2024', '12/09/2024', 'achat', 2180],
            ['NF-2024-0143', '10/09/2024', '15/09/2024', 'frais généraux', 1240],
            ['FV-2024-0923', '10/09/2024', '12/09/2024', 'vente', 7370],
            ['FA-2024-1407', '11/09/2024', '18/09/2024', 'achat', 6120],
            ['FA-2024-1408', '12/09/2024', '13/09/2024', 'achat', 890.4],
            ['NF-2024-0144', '12/09/2024', '16/09/2024', 'frais généraux', 460.8],
            ['FA-2024-1409', '13/09/2024', '22/09/2024', 'achat', 15780],
            ['FV-2024-0924', '16/09/2024', '18/09/2024', 'vente', 5690],
            ['FA-2024-1410', '16/09/2024', '19/09/2024', 'achat', 3440],
            ['FA-2024-1411', '17/09/2024', '23/09/2024', 'achat', 2940],
            ['FV-2024-0925', '18/09/2024', '19/09/2024', 'vente', 4930],
            ['NF-2024-0145', '19/09/2024', '24/09/2024', 'frais généraux', 756],
            ['FA-2024-1412', '20/09/2024', '04/10/2024', 'achat', 9820],
            ['FA-2024-1413', '23/09/2024', '25/09/2024', 'achat', 1560],
            ['FV-2024-0926', '23/09/2024', '27/09/2024', 'vente', 5210],
            ['FA-2024-1414', '24/09/2024', '25/09/2024', 'achat', 4310],
            ['FA-2024-1415', '25/09/2024', '28/09/2024', 'achat', 2640],
            ['NF-2024-0146', '26/09/2024', '04/10/2024', 'frais généraux', 2150],
            ['FV-2024-0927', '26/09/2024', '28/09/2024', 'vente', 3890],
            ['FA-2024-1416', '27/09/2024', '03/10/2024', 'achat', 6480],
            ['FA-2024-1417', '27/09/2024', '01/10/2024', 'achat', 1180],
            ['FV-2024-0928', '30/09/2024', '01/10/2024', 'vente', 3470],
          ],
          note: 'Document fictif. Pour les factures de vente (FV), la « réception » est la date d’émission à traiter ; pour les achats (FA) et frais généraux (NF), la date d’arrivée de la pièce. Délai de saisie = date de saisie − date de réception, en jours calendaires (ex. FA-2024-1401 : 04/09 − 02/09 = 2 jours).',
        },
      ],
      questions: [
        {
          id: 'danone-m6-ex2-q1',
          question:
            'Quel est le délai moyen de saisie sur cet extrait (en jours, arrondi à une décimale) ?',
          type: 'numeric',
          expected: 4,
          explanation:
            'La colonne F (délai = date de saisie − date de réception) totalise 120 jours sur les 30 pièces : =MOYENNE(F2:F31) = 120 ÷ 30 = 4,0 jours de délai moyen. Contrôle de cohérence immédiat : =SOMME(F2:F31)/NB(F2:F31) doit coïncider — deux formules, un même résultat, un indicateur qui commence à être exact.',
        },
        {
          id: 'danone-m6-ex2-q2',
          question:
            'Combien de pièces ont été saisies avec un délai strictement supérieur à 5 jours ?',
          type: 'numeric',
          expected: 8,
          explanation:
            '=NB.SI(F2:F31;">5") → 8 pièces : FA-2024-1403 (6 j), FA-2024-1405 (8 j), FA-2024-1407 (7 j), FA-2024-1409 (9 j), FA-2024-1411 (6 j), FA-2024-1412 (14 j), NF-2024-0146 (8 j) et FA-2024-1416 (6 j) — soit 8 pièces sur 30, 26,7 %. La FA-2024-1412, perdue 14 jours, mérite un traitement individuel : la moyenne (4,0 jours) ne la révèle pas, seul le comptage des hors délai la signale.',
        },
        {
          id: 'danone-m6-ex2-q3',
          question:
            'Quelle formule compte les pièces saisies avec un délai supérieur à 5 jours (délai en colonne F) ?',
          type: 'mcq',
          options: [
            '=NB.SI($F$2:$F$31;">5")',
            '=NB.SI($F$2:$F$31;">=5")',
            '=SOMME.SI($F$2:$F$31;">5")',
            '=NB.SI($F$2:$F$31;">5";$E$2:$E$31)',
          ],
          expected: '0',
          explanation:
            'Un critère, un comptage : =NB.SI($F$2:$F$31;">5"). La version >= 5 inclurait les délais de 5 jours — or la règle dit « plus de 5 jours », le seuil est strict ; SOMME.SI totaliserait les délais (des jours, pas des pièces) ; et NB.SI n’accepte pas de troisième argument : la syntaxe à quatre paramètres est invalide (c’est SOMME.SI qui prend une plage de somme).',
        },
        {
          id: 'danone-m6-ex2-q4',
          question:
            'Quelle formule totalise les montants des factures de vente (type en colonne D, montant en colonne E) ?',
          type: 'mcq',
          options: [
            '=NB.SI($D$2:$D$31;"vente")',
            '=SOMME.SI($D$2:$D$31;"vente";$E$2:$E$31)',
            '=SOMME.SI($E$2:$E$31;"vente";$D$2:$D$31)',
            '=SOMME.SI.ENS($D$2:$D$31;"vente";$E$2:$E$31)',
          ],
          expected: '1',
          explanation:
            '=SOMME.SI($D$2:$D$31;"vente";$E$2:$E$31) → 58 250,00 € sur les 8 factures de vente. La même formule par type donne : achats 92 010,40 € (17 pièces), ventes 58 250,00 € (8), frais généraux 5 246,80 € (5) — et la somme croisée de contrôle : 92 010,40 + 58 250,00 + 5 246,80 = 155 507,20 €, qui doit égaler le total général de la colonne E. NB.SI compterait les lignes ; la troisième option inverse plage de critère et plage à totaliser ; la dernière confond les syntaxes (dans SOMME.SI.ENS, la plage à totaliser vient en premier).',
        },
        {
          id: 'danone-m6-ex2-q5',
          question:
            'Quels indicateurs retenez-vous pour ce tableau de bord « factures et délais », et pourquoi ?',
          type: 'open',
          keywords: ['délai moyen', 'hors délai', 'volumétrie', 'type', 'montant', 'tendance', 'charge'],
          explanation:
            'Un bon tableau de bord factures combine peu d’indicateurs, tous reliés à une action : le délai moyen de saisie (4,0 jours ici — à comparer au seuil interne, s’il existe) ; la part des pièces hors délai (8 sur 30 à plus de 5 jours, soit 26,7 %) — plus parlante que la moyenne, qui écrase la FA-2024-1412 perdue 14 jours ; la volumétrie par type (17 achats, 8 ventes, 5 frais généraux) et les montants associés (92 010,40 € / 58 250,00 € / 5 246,80 €) pour situer les enjeux en euros ; la charge de réception par jour ou semaine (pics à traiter) ; et la tendance d’un mois sur l’autre — un indicateur sans historique ne se commente pas. Chacun se calcule par une formule simple (MOYENNE, NB.SI, SOMME.SI) et se recoupe par une seconde méthode.',
        },
      ],
      solutionSummary:
        'Sur l’extrait de 30 pièces : délai moyen de saisie 4,0 jours (somme des délais 120 ÷ 30) ; 8 pièces saisies à plus de 5 jours (26,7 %), dont la FA-2024-1412 perdue 14 jours — la moyenne ne la révèle pas, seul le comptage la signale. Totaux par type : achats 92 010,40 € (17 pièces), ventes 58 250,00 € (8), frais généraux 5 246,80 € (5) — total général 155 507,20 €, que la somme croisée par type doit retrouver. Les formules utiles : MOYENNE pour le délai, NB.SI (">5") pour les hors délai, SOMME.SI par type ; et la note de méthode rappelle que l’extrait (30 pièces sur environ 150) ne représente pas le mois complet.',
      interviewTips: [
        'Citez le triptyque « je calcule, je recoupe, je commente » : un chiffre sans lecture ne pilote rien, un chiffre non recoupé ne prouve rien.',
        'La FA-2024-1412 (14 jours) est votre anecdote : un tableau de bord sert aussi à repérer les cas individuels, pas seulement des moyennes.',
      ],
    },
    // ================ EXERCICE 3 ================
    {
      id: 'danone-m6-ex3',
      title: 'Tableau de bord 2 — comptes clients et fournisseurs',
      cycle: 'Clients / Fournisseurs',
      context:
        'Deuxième tableau de bord : comptes clients et fournisseurs. La balance auxiliaire simplifiée au 30/09/2024 liste 25 comptes de tiers (15 clients, 10 fournisseurs) avec solde, ancienneté du solde et signalement « encours supérieur à 60 jours ». Dans le classeur, la feuille « Tiers » porte : A compte, B type, C solde, D ancienneté, E encours. Toutes les données sont fictives.',
      risks: ['Concentration non lue', 'Ancienneté ignorée', 'Créances douteuses non identifiées'],
      documents: [
        {
          kind: 'table',
          name: 'Balance auxiliaire simplifiée — 25 comptes de tiers au 30/09/2024 (fictif)',
          columns: ['Compte', 'Type', 'Solde (€)', 'Ancienneté (jours)', 'Encours > 60 j'],
          rows: [
            ['411VER Hypermarché Verdier', 'client', 18240, 72, 'oui'],
            ['411ROU Boulangerie Rousseau', 'client', 15780, 85, 'oui'],
            ['411LEM Supérette Lemoine', 'client', 9450, 45, 'non'],
            ['411ODE Crèmerie Odéon', 'client', 7370, 68, 'oui'],
            ['411BIA Épicerie Bianchi', 'client', 5690, 30, 'non'],
            ['411GIR Restaurant Girafe', 'client', 5210, 40, 'non'],
            ['411HAL Café des Halles', 'client', 4930, 55, 'non'],
            ['411MOL Crèmerie Mollet', 'client', 4310, 22, 'non'],
            ['411SAB Supermarché Sablon', 'client', 3890, 61, 'oui'],
            ['411TRE Traiteur Trémail', 'client', 3440, 15, 'non'],
            ['411PIS Pizzeria Pisan', 'client', 2640, 38, 'non'],
            ['411BEL Bistro Belleville', 'client', 2180, 9, 'non'],
            ['411COL Collège Victor-Hugo', 'client', 1690, 74, 'oui'],
            ['411CAN Cantine Scolaire Nord', 'client', 1100, 27, 'non'],
            ['411HOT Hôtel des Lacs', 'client', 1020, 50, 'non'],
            ['401ELE Éleclairs Énergie', 'fournisseur', 12480, 77, 'oui'],
            ['401FRO Froid & Maintenance', 'fournisseur', 8760, 68, 'oui'],
            ['401TRA Transports Ravel', 'fournisseur', 6120, 25, 'non'],
            ['401EMB Emballages du Rhône', 'fournisseur', 5320, 33, 'non'],
            ['401LOC Locabox Plastiques', 'fournisseur', 4630, 41, 'non'],
            ['401IMP Imprimerie du Val', 'fournisseur', 3480, 12, 'non'],
            ['401AST Astral Nettoyage', 'fournisseur', 2940, 8, 'non'],
            ['401PAP Papier & Logistique', 'fournisseur', 2180, 19, 'non'],
            ['401BUR Bureau Vert', 'fournisseur', 1560, 5, 'non'],
            ['401SEC Sécuritest Contrôles', 'fournisseur', 990, 63, 'oui'],
          ],
          note: 'Document fictif. Ancienneté = âge du solde au 30/09/2024 ; « Encours > 60 j » = oui lorsque l’ancienneté dépasse 60 jours. Créances clients : soldes débiteurs ; dettes fournisseurs : soldes créditeurs, présentés en valeurs positives.',
        },
      ],
      questions: [
        {
          id: 'danone-m6-ex3-q1',
          question: 'Quel est le total des créances clients (en €) ?',
          type: 'numeric',
          expected: 86940,
          explanation:
            '=SOMME.SI(B2:B26;"client";C2:C26) → 86 940,00 € sur les 15 clients. Contrôle croisé : total des tiers 135 400,00 € − dettes fournisseurs 48 460,00 € = 86 940,00 € — deux chemins de calcul, un même total : c’est la somme croisée.',
        },
        {
          id: 'danone-m6-ex3-q2',
          question: 'Quel est le total des dettes fournisseurs (en €) ?',
          type: 'numeric',
          expected: 48460,
          explanation:
            '=SOMME.SI(B2:B26;"fournisseur";C2:C26) → 48 460,00 € sur les 10 fournisseurs, avec Éleclairs Énergie (12 480,00 €, 77 jours) et Froid & Maintenance (8 760,00 €, 68 jours) en tête — les deux plus gros retards de paiement fournisseur de l’extrait.',
        },
        {
          id: 'danone-m6-ex3-q3',
          question:
            'Quelle part du total des créances clients représentent les trois premiers clients (en %) ?',
          type: 'numeric',
          expected: 50,
          explanation:
            'Hypermarché Verdier 18 240,00 + Boulangerie Rousseau 15 780,00 + Supérette Lemoine 9 450,00 = 43 470,00 € sur 86 940,00 € de créances : 43 470,00 ÷ 86 940,00 = 50,0 %. La moitié des créances tient sur trois clients : c’est le point marquant du tableau de bord — un indicateur de concentration à suivre chaque mois.',
        },
        {
          id: 'danone-m6-ex3-q4',
          question:
            'Quelle formule totalise les créances clients dont l’ancienneté dépasse 60 jours (type en B, solde en C, ancienneté en D) ?',
          type: 'mcq',
          options: [
            '=SOMME.SI.ENS($C$2:$C$26;$B$2:$B$26;"client";$D$2:$D$26;">60")',
            '=SOMME.SI($B$2:$B$26;"client";$C$2:$C$26)',
            '=NB.SI.ENS($B$2:$B$26;"client";$D$2:$D$26;">60")',
            '=SOMME.SI.ENS($C$2:$C$26;$D$2:$D$26;">60")',
          ],
          expected: '0',
          explanation:
            'Deux critères, une totalisation : =SOMME.SI.ENS($C$2:$C$26;$B$2:$B$26;"client";$D$2:$D$26;">60") → 46 970,00 € (Hypermarché Verdier 18 240,00 + Boulangerie Rousseau 15 780,00 + Crèmerie Odéon 7 370,00 + Supermarché Sablon 3 890,00 + Collège Victor-Hugo 1 690,00 — 5 clients). SOMME.SI à un critère totaliserait tous les clients (86 940,00 €) ; NB.SI.ENS compterait 5 comptes au lieu de totaliser ; et la dernière formule, qui omet le critère de type, totaliserait aussi les fournisseurs de plus de 60 jours (22 230,00 €) et donnerait 69 200,00 € — un total juste en apparence, faux en périmètre.',
        },
        {
          id: 'danone-m6-ex3-q5',
          question:
            'Que révèle ce tableau de bord sur les risques de recouvrement, et quelles suites recommanderiez-vous ?',
          type: 'open',
          keywords: ['concentration', 'ancienneté', 'encours', 'relance', 'recouvrement', 'dépréciation'],
          explanation:
            'Trois lectures successives. (1) La concentration : 50,0 % des créances sur trois clients (43 470,00 €) — la défaillance d’un seul gros débiteur dégraderait fortement le poste ; à suivre en tendance et, le cas échéant, à couvrir (assurance-crédit, encadrement des encours par client). (2) L’ancienneté : 46 970,00 € de créances de plus de 60 jours, soit 54,0 % du total — dont Boulangerie Rousseau (85 jours, 15 780,00 €) et Hypermarché Verdier (72 jours, 18 240,00 €) : relances graduées à lancer, échéanciers à convenir, et au-delà du délai de la politique interne, passage en créances douteuses et dépréciation à envisager (les moins-values probables se provisionnent, elles ne s’oublient pas). (3) Côté fournisseurs, 22 230,00 € de dettes de plus de 60 jours (Éleclairs Énergie, Froid & Maintenance, Sécuritest Contrôles) : risque de dégradation de la relation et des conditions commerciales. La suite : un tableau de relances daté (qui, quoi, depuis quand), la balance âgée mensualisée pour suivre l’évolution des tranches d’ancienneté, et un seuil d’alerte sur la concentration.',
        },
      ],
      solutionSummary:
        'Créances clients : 86 940,00 € (15 comptes) ; dettes fournisseurs : 48 460,00 € (10) ; total des tiers : 135 400,00 € — chaque total se recoupe par la somme croisée (135 400,00 − 48 460,00 = 86 940,00). Top 3 clients : 43 470,00 €, soit 50,0 % des créances — concentration élevée, à suivre en tendance. Encours de plus de 60 jours : 8 comptes — côté clients, 46 970,00 € (54,0 % des créances : relances graduées, créances douteuses et dépréciation au-delà de la politique interne) ; côté fournisseurs, 22 230,00 € (relations à surveiller). Le tableau de bord utile croise soldes (SOMME.SI par type), ancienneté (SOMME.SI.ENS ">60") et concentration : c’est une balance âgée qui pilote le recouvrement, pas une liste de comptes.',
      interviewTips: [
        'Traduisez chaque chiffre en action : 85 jours d’ancienneté = une relance à lancer, pas une statistique à commenter.',
        'Le mot « concentration » (top 3 = 50,0 %) montre que vous lisez un portefeuille de créances, pas une liste de comptes.',
      ],
    },
    // ================ EXERCICE 4 ================
    {
      id: 'danone-m6-ex4',
      title: 'Tableau de bord 3 — anomalies et contrôles à réaliser',
      cycle: 'Anomalies',
      context:
        'Troisième tableau de bord : anomalies et contrôles à réaliser. Le suivi de septembre 2024 recense 24 anomalies issues des contrôles du mois (rapprochements, lettrage, procédures), avec cycle, criticité, responsable, statut et délai restant avant échéance de traitement. Dans le classeur, la feuille « Anomalies » porte : A référence, B cycle, C criticité, D responsable, E statut, F délai restant. Toutes les données sont fictives.',
      risks: ['Priorisation absente', 'Anomalies en retard invisibles', 'Taux sans dénominateur précis'],
      documents: [
        {
          kind: 'table',
          name: 'Suivi des anomalies — 24 lignes de septembre 2024 (fictif)',
          columns: ['Réf', 'Cycle', 'Criticité', 'Responsable', 'Statut', 'Délai restant (j)'],
          rows: [
            ['AN-2024-101', 'Achats', 'haute', 'A. Ndiaye', 'ouverte', -5],
            ['AN-2024-104', 'Ventes', 'haute', 'S. Farine', 'ouverte', 3],
            ['AN-2024-112', 'Trésorerie', 'haute', 'M. Lenoir', 'ouverte', -12],
            ['AN-2024-108', 'Achats', 'haute', 'A. Ndiaye', 'en cours', 7],
            ['AN-2024-119', 'Paie', 'haute', 'C. Bertin', 'en cours', 2],
            ['AN-2024-096', 'Stocks', 'haute', 'L. Berthier', 'résolue', 0],
            ['AN-2024-098', 'Ventes', 'moyenne', 'S. Farine', 'ouverte', 15],
            ['AN-2024-103', 'Achats', 'moyenne', 'A. Ndiaye', 'ouverte', -2],
            ['AN-2024-117', 'Transversal', 'moyenne', 'C. Bertin', 'ouverte', 21],
            ['AN-2024-099', 'Trésorerie', 'moyenne', 'M. Lenoir', 'en cours', 9],
            ['AN-2024-106', 'Stocks', 'moyenne', 'L. Berthier', 'en cours', -4],
            ['AN-2024-110', 'Ventes', 'moyenne', 'S. Farine', 'en cours', 12],
            ['AN-2024-115', 'Paie', 'moyenne', 'C. Bertin', 'en cours', 5],
            ['AN-2024-093', 'Achats', 'moyenne', 'A. Ndiaye', 'résolue', 0],
            ['AN-2024-100', 'Transversal', 'moyenne', 'S. Farine', 'résolue', 0],
            ['AN-2024-121', 'Trésorerie', 'moyenne', 'M. Lenoir', 'résolue', 0],
            ['AN-2024-123', 'Stocks', 'moyenne', 'L. Berthier', 'résolue', 0],
            ['AN-2024-095', 'Ventes', 'basse', 'S. Farine', 'ouverte', 30],
            ['AN-2024-107', 'Paie', 'basse', 'C. Bertin', 'en cours', 18],
            ['AN-2024-113', 'Transversal', 'basse', 'C. Bertin', 'en cours', 25],
            ['AN-2024-091', 'Achats', 'basse', 'A. Ndiaye', 'résolue', 0],
            ['AN-2024-102', 'Trésorerie', 'basse', 'M. Lenoir', 'résolue', 0],
            ['AN-2024-105', 'Stocks', 'basse', 'L. Berthier', 'résolue', 0],
            ['AN-2024-116', 'Ventes', 'basse', 'S. Farine', 'résolue', 0],
          ],
          note: 'Document fictif. Délai restant : jours avant l’échéance interne de traitement ; négatif = échéance dépassée ; 0 pour les anomalies résolues. Responsables fictifs : A. Ndiaye (achats), S. Farine (ventes/clients), M. Lenoir (trésorerie), C. Bertin (paie/transversal), L. Berthier (stocks/logistique).',
        },
      ],
      questions: [
        {
          id: 'danone-m6-ex4-q1',
          question: 'Quel est le taux de résolution des anomalies (en %) ?',
          type: 'numeric',
          expected: 37.5,
          explanation:
            '9 anomalies résolues sur 24 recensées : 9 ÷ 24 = 37,5 %. Le reste se répartit en 7 ouvertes (29,2 %) et 8 en cours (33,3 %). La note de méthode doit préciser le dénominateur — « résolues / recensées du mois » — car « taux de résolution » peut aussi désigner résolues / clôturées : un chiffre sans définition se lit de travers.',
        },
        {
          id: 'danone-m6-ex4-q2',
          question: 'Combien d’anomalies de criticité haute sont encore ouvertes ?',
          type: 'numeric',
          expected: 3,
          explanation:
            '=NB.SI.ENS(C2:C25;"haute";E2:E25;"ouverte") → 3 : AN-2024-101 (Achats, −5 jours), AN-2024-104 (Ventes, +3 jours) et AN-2024-112 (Trésorerie, −12 jours) — dont deux déjà en retard. Sur les 6 anomalies de criticité haute, 1 est résolue et 2 en cours : les trois ouvertes sont la priorité n° 1 du tableau de bord.',
        },
        {
          id: 'danone-m6-ex4-q3',
          question:
            'Combien d’anomalies non résolues ont dépassé leur échéance (délai restant négatif) ?',
          type: 'numeric',
          expected: 4,
          explanation:
            'Quatre : AN-2024-112 (−12 jours, haute, ouverte), AN-2024-101 (−5 jours, haute, ouverte), AN-2024-106 (−4 jours, moyenne, en cours) et AN-2024-103 (−2 jours, moyenne, ouverte). Un délai restant négatif doit sauter aux yeux — mise en forme conditionnelle sur la colonne F (< 0) ou filtre dédié : c’est lui qui déclenche l’escalade, pas le statut « ouverte » seul.',
        },
        {
          id: 'danone-m6-ex4-q4',
          question:
            'Quelle formule compte les anomalies de criticité haute encore ouvertes (criticité en C, statut en E, délai en F) ?',
          type: 'mcq',
          options: [
            '=NB.SI($C$2:$C$25;"haute")',
            '=SOMME.SI.ENS($F$2:$F$25;$C$2:$C$25;"haute";$E$2:$E$25;"ouverte")',
            '=NB.SI.ENS($C$2:$C$25;"haute";$E$2:$E$25;"ouverte")',
            '=NB.SI.ENS($C$2:$C$25;"haute";$E$2:$E$25;"ouverte";$F$2:$F$25;"<0")',
          ],
          expected: '2',
          explanation:
            '=NB.SI.ENS($C$2:$C$25;"haute";$E$2:$E$25;"ouverte") → 3. NB.SI seul compterait les 6 anomalies « haute », résolue comprise ; SOMME.SI.ENS additionnerait les délais restants des hautes ouvertes (−5 + 3 − 12 = −14), un total sans signification de comptage ; la dernière option ajoute « délai < 0 » — elle ne compterait que les 2 hautes ouvertes en retard. Compter, totaliser, restreindre : trois intentions différentes, trois formules différentes.',
        },
        {
          id: 'danone-m6-ex4-q5',
          question:
            'Comment piloteriez-vous le traitement de ces anomalies à partir de ce tableau de bord ?',
          type: 'open',
          keywords: ['criticité', 'retard', 'responsable', 'échéance', 'suivi', 'priorité'],
          explanation:
            'Le pilotage se fait par vagues. (1) Priorité aux trois hautes ouvertes — dont deux en retard (AN-2024-112 à −12 jours, AN-2024-101 à −5 jours) — avec responsable nommé et échéance resserrée. (2) Revue hebdomadaire des statuts : le taux de résolution (37,5 %) se suit en tendance, pas en valeur isolée. (3) Alerte systématique sur les délais négatifs (MEFC « < 0 » ou filtre) : quatre anomalies ont déjà dépassé leur échéance, dont deux de criticité haute. (4) Analyse des récurrences par cycle : achats 5 et ventes 5 anomalies sur 24, trésorerie 4, stocks 4, paie 3, transversal 3 — si un cycle revient chaque mois, le problème est de process, plus que d’exécution : c’est une remontée de faille de procédure, pas une liste de tickets. (5) Clôture documentée : une anomalie ne passe « résolue » qu’avec la preuve de la correction — comme un verdict de contrôle. Le tableau de bord devient alors un outil de comité : une page, des propriétaires, des échéances, une tendance.',
        },
      ],
      solutionSummary:
        '24 anomalies : 9 résolues (37,5 %), 8 en cours (33,3 %), 7 ouvertes (29,2 %). Criticité : 6 hautes dont 3 encore ouvertes — dont 2 en retard (−12 et −5 jours) — 11 moyennes, 7 basses. Quatre anomalies au total ont dépassé leur échéance : elles doivent sauter aux yeux (MEFC sur délai < 0). Le tableau de bord pilote par criticité, responsable et échéance ; le taux de résolution se suit en tendance, avec son dénominateur documenté ; les récurrences par cycle (achats 5, ventes 5, trésorerie 4, stocks 4) orientent vers des correctifs de process. NB.SI.ENS alimente les compteurs, SOMME.SI.ENS les montants, la MEFC les alertes.',
      interviewTips: [
        'Un taux sans dénominateur précis est un piège d’entretien : dites « 9 résolues sur 24 recensées ce mois-ci ».',
        'Les anomalies « en retard » valent plus que les « ouvertes » : montrez que vous hiérarchisez par criticité ET par échéance.',
      ],
    },
    // ================ EXERCICE 5 ================
    {
      id: 'danone-m6-ex5',
      title: 'Contrôler l’exactitude d’un tableau de bord',
      cycle: 'Contrôles',
      context:
        'Dernier réflexe, le plus important : avant de diffuser un tableau de bord, on le contrôle. Un collègue vous remet le tableau de bord de septembre ; vous recalculez chaque indicateur de façon indépendante (à partir des données sources et de la balance auxiliaire) et vous confrontez les valeurs affichées aux valeurs recalculées. Toutes les données sont fictives.',
      risks: ['Exactitude non recoupée', 'Erreur propagée aux ratios', 'Diffusion sans relecture'],
      documents: [
        {
          kind: 'text',
          name: 'Note de transmission — tableau de bord de septembre (fictif)',
          content:
            'De : C. Bertin\nÀ : Stagiaire comptabilité\nObjet : tableau de bord de septembre — relecture avant lundi\n\nBonjour,\n\nVoici le tableau de bord de septembre. J’ai vérifié le total clients « à l’œil » la semaine dernière, il m’a semblé correct. Peux-tu le relire avant la réunion de lundi ? Si tout va bien, on le diffuse tel quel.\n\nCordialement,\nC. Bertin',
          note: 'Document fictif. Une relecture « à l’œil » n’est pas un contrôle : seul un recalcul indépendant en est un.',
        },
        {
          kind: 'table',
          name: 'Contrôles d’exactitude — valeur affichée contre recalcul indépendant (fictif)',
          columns: ['Indicateur', 'Valeur affichée (TdB)', 'Recalcul indépendant', 'Écart'],
          rows: [
            ['Nombre de pièces suivies (extrait)', '30', '30', '0'],
            ['Délai moyen de saisie (jours)', '4,0', '4,0', '0,0'],
            ['Pièces saisies à plus de 5 jours', '8', '8', '0'],
            ['Total créances clients (€)', '84 940,00', '86 940,00', '− 2 000,00'],
            ['Part du top 3 clients (%)', '48,8 %', '50,0 %', '− 1,2 pt'],
            ['Taux de résolution des anomalies', '37,5 %', '37,5 %', '0,0'],
          ],
          note: 'Document fictif. Recalcul indépendant : données sources du classeur et balance auxiliaire. L’écart sur le total des créances se propage à la part du top 3 (48,8 % contre 50,0 %) : une erreur de source contamine tous les indicateurs qui en dépendent.',
        },
        {
          kind: 'table',
          name: 'Recoupement ligne à ligne — extraits du rapprochement (fictif)',
          columns: ['Compte', 'Solde balance (€)', 'Solde feuille TdB (€)', 'Écart (€)'],
          rows: [
            ['411VER Hypermarché Verdier', '18 240,00', '18 240,00', '0,00'],
            ['411LEM Supérette Lemoine', '9 450,00', '7 450,00', '2 000,00'],
            ['411ROU Boulangerie Rousseau', '15 780,00', '15 780,00', '0,00'],
          ],
          note: 'Document fictif. Extrait du rapprochement des 25 comptes (=RECHERCHEX + ESTNA) : un seul écart sur les 25 lignes.',
        },
      ],
      questions: [
        {
          id: 'danone-m6-ex5-q1',
          question:
            'Décrivez votre démarche complète pour contrôler l’exactitude de ce tableau de bord avant diffusion.',
          type: 'open',
          keywords: ['recoupement', 'formule de contrôle', 'somme croisée', 'hypothèse documentée', 'note de méthode', 'revue par un tiers'],
          explanation:
            'Six réflexes, dans l’ordre. (1) Le recoupement : recalculer chaque indicateur de façon indépendante — données sources, balance auxiliaire — au lieu de relire les cellules : la relecture « à l’œil » de C. Bertin n’a détecté aucun des écarts. (2) La formule de contrôle : des cellules dédiées qui comparent la valeur affichée au recalcul et affichent l’écart — tout écart ≠ 0 est une alerte, pas une impression. (3) La somme croisée : total général = somme des sous-totaux (par exemple 92 010,40 + 58 250,00 + 5 246,80 = 155 507,20 € pour les factures ; 135 400,00 − 48 460,00 = 86 940,00 € pour les tiers). (4) L’hypothèse documentée : périmètre (extrait de 30 pièces sur environ 150), date et source d’extraction, conventions (jours calendaires, seuil de 60 jours) — toutes notées noir sur blanc. (5) La note de méthode : une page qui dit ce que chaque chiffre contient et comment il est calculé — elle accompagne le fichier diffusé. (6) La revue par un tiers : C. Bertin relit, mais sur la base des contrôles chiffrés — et l’écart trouvé remonte à la ligne fautive (411LEM : 7 450,00 € saisis au lieu de 9 450,00 €), jamais à un ajustement manuel du total. On corrige la source, on recalcule les indicateurs dépendants, on rediffuse après re-vérification.',
        },
        {
          id: 'danone-m6-ex5-q2',
          question:
            'Quel est le montant de l’écart sur le total des créances clients (en €, valeur absolue) ?',
          type: 'numeric',
          expected: 2000,
          explanation:
            'Valeur affichée 84 940,00 € contre recalcul indépendant 86 940,00 € : écart de − 2 000,00 €, soit 2 000,00 € en valeur absolue. Le recoupement ligne à ligne l’attribue au compte 411LEM Supérette Lemoine : 9 450,00 € en balance, 7 450,00 € dans la feuille du tableau de bord — une transposition de chiffres (9 ↔ 7). L’écart se propage : la part du top 3 affichée (48,8 %) est fausse (50,0 % réels), parce qu’elle dépend du même solde erroné.',
        },
        {
          id: 'danone-m6-ex5-q3',
          question: 'Quelle est la cause de l’écart constaté sur les créances clients ?',
          type: 'mcq',
          options: [
            'La ligne du client Supérette Lemoine porte 7 450,00 € dans la feuille du tableau de bord contre 9 450,00 € en balance (transposition de chiffres)',
            'La balance auxiliaire est erronée : c’est elle qu’il faut corriger',
            'Le calcul du top 3 clients est faux : la formule de la part est à revoir',
            'Une ligne client a été oubliée dans la plage de la formule de total',
          ],
          expected: '0',
          explanation:
            'Le rapprochement ligne à ligne (=RECHERCHEX + ESTNA sur les 25 comptes) ne montre qu’un seul écart : 411LEM, 7 450,00 € saisis au lieu de 9 450,00 € — une inversion 9 ↔ 7, l’erreur de saisie la plus banale et la plus difficile à voir « à l’œil ». La balance est la référence du recoupement : on ne corrige pas une balance pour faire taire un écart ; la part du top 3 (48,8 % contre 50,0 %) est une conséquence de l’erreur, pas sa cause ; et aucune ligne ne manque — le rapprochement montre 25 comptes présents sur 25, avec un seul écart de valeur. La correction se fait à la source, puis les indicateurs dépendants se recalculent.',
        },
        {
          id: 'danone-m6-ex5-q4',
          question: 'Avant de diffuser un tableau de bord, quelle est la meilleure pratique ?',
          type: 'mcq',
          options: [
            'Recouper chaque total avec un calcul indépendant et documenter les contrôles réalisés',
            'Saisir les totaux « en dur » une fois vérifiés, pour éviter les erreurs de formule',
            'Supprimer les formules de contrôle de la version diffusée pour alléger le fichier',
            'Faire confiance aux formules : si Excel ne renvoie pas d’erreur, le résultat est exact',
          ],
          expected: '0',
          explanation:
            'Recouper et documenter : chaque total confronté à un calcul indépendant, chaque écart tracé, les contrôles visibles dans le fichier diffusé — c’est eux qui prouvent l’exactitude au lecteur. Les trois leurres : les totaux « en dur » figent des valeurs qui deviennent fausses dès que la donnée change (et suppriment la piste du calcul) ; retirer les formules de contrôle de la version diffusée, c’est retirer les preuves ; et l’absence d’erreur Excel (#N/A, #REF!) ne prouve rien — une plage incomplète, un critère erroné ou une saisie fausse (411LEM…) ne génèrent aucune erreur : le résultat est faux et propre à la fois.',
        },
        {
          id: 'danone-m6-ex5-q5',
          question: 'Quels sont les réflexes de fiabilité d’un tableau de bord ?',
          type: 'multi',
          options: [
            'Vérifier que les plages des formules couvrent toutes les lignes de données (ni ligne oubliée, ni ligne parasite)',
            'Documenter les hypothèses : périmètre, date et source d’extraction, exclusions, conventions',
            'Contrôler les totaux par une somme croisée (une seconde méthode, une autre décomposition)',
            'Faire relire le tableau de bord par un tiers avant diffusion',
            'Saisir les totaux à la main après vérification, pour les figer',
            'Élargir les plages très au-delà des données « au cas où »',
            'Archiver la note de méthode à part, sans la joindre au tableau de bord diffusé',
          ],
          expected: ['0', '1', '2', '3'],
          explanation:
            'Les quatre bons réflexes : plages exactes (couvrant toutes les lignes, sans excès), hypothèses documentées (le lecteur sait ce qu’il lit), sommes croisées (le total se démontre par un second chemin) et relecture par un tiers (le concepteur ne voit jamais ses propres erreurs — C. Bertin en est la preuve vivante). Les trois réflexes fautifs : figer des totaux à la main (la prochaine mise à jour sera fausse, et la traçabilité disparaît), élargir les plages « au cas où » (tôt ou tard une ligne parasite s’y glisse : une note, un total intermédiaire), et dissocier la note de méthode du fichier diffusé (l’hypothèse doit suivre le chiffre jusqu’à son lecteur — une note archivée n’informe personne).',
        },
      ],
      solutionSummary:
        'Le contrôle révèle un écart de 2 000,00 € sur les créances clients (84 940,00 € affichés contre 86 940,00 € recalculés), propagé à la part du top 3 (48,8 % affichés contre 50,0 % réels) : cause isolée par rapprochement ligne à ligne — le solde de la Supérette Lemoine saisi 7 450,00 € au lieu de 9 450,00 € (transposition 9 ↔ 7). On corrige la source, jamais le total à la main, on recalcule les indicateurs dépendants et on rediffuse après re-vérification. Les six réflexes : recoupement (recalcul indépendant), formule de contrôle (écart attendu 0), somme croisée (sous-totaux = total général), hypothèse documentée (périmètre, extraction, conventions), note de méthode jointe au fichier, revue par un tiers. La relecture « à l’œil » n’est pas un contrôle : elle n’a rien vu.',
      interviewTips: [
        'La phrase à placer : « je ne crois pas un total que je n’ai pas recoupé » — elle résume la mission entière.',
        'Racontez la propagation (2 000,00 € → 48,8 % contre 50,0 %) : une erreur qui contamine les ratios est plus parlante que l’écart brut.',
      ],
    },
  ],
  interviewQuestions: [
    { question: 'Pourquoi construire des tableaux de bord Excel alors que l’ERP et la comptabilité produisent déjà des états ?', expected: 'Parce que les états standard répondent rarement à la question précise du destinataire : croiser sur une page délais de saisie, ancienneté des tiers et suivi des anomalies, actualisable et documentée. Excel comble l’écart entre les exports bruts et le pilotage — à condition que les données soient structurées, les formules justes et les résultats recoupés : un tableau de bord faux est pire que pas de tableau de bord du tout.', hint: 'Répondez « usage d’abord » : un tableau de bord existe pour une décision, pas pour embellir des données.' },
    { question: 'Quelle formule utiliseriez-vous pour compter les factures d’un fournisseur donné sur le mois de mars ?', expected: 'NB.SI.ENS : =NB.SI.ENS(plage_tiers;"fournisseur";plage_dates;">=01/03/2024";plage_dates;"<01/04/2024") — plusieurs critères, y compris deux bornes sur la même colonne de dates. Avec un seul critère, NB.SI suffit ; SOMME.SI.ENS, lui, totaliserait les montants. L’erreur classique : écrire « mars » comme critère de date — Excel ne l’interprète pas.', hint: 'Deux critères = NB.SI.ENS ; annoncez l’ordre des arguments sans détour.' },
    { question: 'Quelle différence faites-vous entre SOMME.SI et SOMME.SI.ENS — et quand utiliser l’un ou l’autre ?', expected: 'SOMME.SI totalise selon un critère (plage ; critère ; plage_somme) ; SOMME.SI.ENS selon plusieurs (plage_somme ; plage1 ; critère1 ; …) et accepte les bornes cumulées sur une même colonne. SOMME.SI.ENS couvre tous les cas, SOMME.SI reste la forme la plus directe à un critère. Piège : l’ordre des arguments diffère — la plage à totaliser n’est pas à la même place.', hint: 'La question cache un test : l’ordre des arguments. Citez-le.' },
    { question: 'Comment retrouver le RIB d’un fournisseur à partir de son code avec RECHERCHEX — et que faisiez-vous avant ?', expected: '=RECHERCHEX(code; plage_codes; plage_RIB;"non trouvé") : recherche exacte par défaut, colonne de renvoi libre, message si absence grâce à l’argument si_non_trouvé. Avant : RECHERCHEV(code; table; n°_colonne; FAUX) enveloppé dans SIERREUR pour éviter le #N/A — ou INDEX+EQUIV quand la colonne de renvoi précède la colonne de recherche, ce que RECHERCHEV ne sait pas faire.', hint: 'Citez l’argument si_non_trouvé : il distingue celui qui connaît RECHERCHEX de celui qui en a entendu parler.' },
    { question: 'Comment détectez-vous les doublons dans une liste de numéros de factures ?', expected: 'Une mise en forme conditionnelle avec =NB.SI($A$2:$A$151;A2)>1 : chaque ligne dont le numéro apparaît plus d’une fois dans la plage se colore, puis tri ou filtre sur les lignes colorées pour traitement. Le même NB.SI posé en colonne de contrôle donne le comptage exploitable. Point technique à citer : la plage doit être verrouillée ($), sinon elle glisse avec la recopie et le premier exemplaire n’est jamais marqué.', hint: 'Le verrouillage de la plage est le détail qui prouve la pratique réelle.' },
    { question: 'Quel outil utilisez-vous pour connaître la répartition des factures par type et par semaine, sans écrire une seule formule ?', expected: 'Le tableau croisé dynamique : type en colonnes, semaines en lignes (ou l’inverse), comptage ou somme des montants en valeurs, actualisation à chaque mise à jour. Il explore, vérifie les ordres de grandeur et fournit un second chemin de calcul — sans remplacer les indicateurs finaux du tableau de bord, qui restent choisis, définis et documentés.', hint: 'TCD = exploration et contre-vérification ; tableau de bord = pilotage : ne confondez pas les deux.' },
    { question: 'Comment vous assurez-vous qu’un tableau de bord est exact avant de le diffuser ?', expected: 'Par recoupements : recalcul indépendant de chaque indicateur à partir des sources, formules de contrôle qui affichent les écarts (attendus à 0), somme croisée (total général = somme des sous-totaux), rapprochement ligne à ligne avec la balance si un écart apparaît — puis revue par un tiers et note de méthode jointe au fichier. Un total n’est jamais « exact » dans l’absolu : il est recoupé, ou il ne l’est pas.', hint: 'La phrase attendue : « je ne crois pas un total que je n’ai pas recoupé ».' },
    { question: 'Un lecteur signale que votre total clients diffère de la balance : quelle est votre réaction ?', expected: 'Le remercier (la revue par un tiers fonctionne), reproduire l’écart, remonter à la ligne fautive par rapprochement ligne à ligne (RECHERCHEX + ESTNA ou NB.SI), corriger la donnée source — jamais le total à la main —, recalculer tous les indicateurs dépendants (parts, ratios), documenter l’incident dans la note de méthode et rediffuser après re-vérification. L’erreur propagée (le ratio qui dépend du solde faux) se corrige en même temps que la source.', hint: 'Corriger un total à la main est la faute éliminatoire : elle masque l’erreur au lieu de la résoudre.' },
    { question: 'Comment gérez-vous les hypothèses et le périmètre d’un tableau de bord ?', expected: 'Tout se documente dans la note de méthode : périmètre (exhaustif ou extrait — par exemple 30 pièces sur 150, ce n’est pas le mois complet), source et date d’extraction, conventions (jours calendaires, seuil de 60 jours, criticités), exclusions et seuils d’alerte. Une hypothèse non documentée devient une surinterprétation : le lecteur croit lire le mois complet alors que l’extrait ne le représente pas.', hint: 'L’écart le plus dangereux est invisible : entre ce que le lecteur croit lire et ce que le chiffre contient.' },
    { question: 'Quel graphique choisiriez-vous pour suivre les délais de traitement, et pourquoi ?', expected: 'Une courbe du délai moyen mensuel avec une ligne de seuil cible : elle montre la tendance et les dépassements dans le temps ; éventuellement des barres pour les hors délai par type. L’histogramme compare des catégories, le camembert se limite aux répartitions simples (cinq parts au plus) et la 3D déforme les proportions. Règle générale : un graphique = un message — sinon c’est de la décoration.', hint: 'Justifiez toujours le type de graphique par le message, jamais par l’esthétique.' },
  ],
  followUps: [
    { question: 'Le nouveau logiciel de saisie change le format des exports : que devient votre tableau de bord ?', expected: 'La structure en couches l’a protégé : les feuilles de données se reconstituent depuis les nouveaux exports (manuellement ou via Power Query), et les formules du tableau de bord pointent sur des plages nommées ou des tableaux structurés, donc survivent au changement de source. J’en profite pour ajouter des contrôles de structure : présence des colonnes attendues, volumétrie plausible, alerte si la source change de forme — un tableau de bord doit savoir dire « quelque chose a bougé ».' },
    { question: 'On vous demande une mise à jour mensuelle sans intervention manuelle : comment procédez-vous ?', expected: 'Transformer les plages de données en tableaux structurés (extension automatique des formules), nommer les plages, et basculer l’extraction-nettoyage sur Power Query : importation transformée et actualisable en un clic. Les TCD s’actualisent dans la même opération ; un bouton peut enchaîner actualisation et export. Ce qui reste manuel, volontairement : la relecture des contrôles d’exactitude et la mise à jour de la note de méthode (périmètre, hypothèses) — l’automatisation ne dispense jamais de vérifier.' },
    { question: 'Le responsable veut le taux de résolution des anomalies par cycle ET par responsable : quel outil ?', expected: 'Le tableau croisé dynamique : responsable et cycle en lignes (ou l’un en lignes, l’autre en colonnes), statut en colonnes, comptage en valeurs — le taux se calcule par champ calculé ou par formule posée à côté du TCD. Alternative tout-formules : une matrice de NB.SI.ENS. Dans les deux cas, je livre la matrice avec une lecture : les cellules vides (aucune anomalie) et les taux bas appellent un commentaire, pas seulement un chiffre.' },
    { question: 'Votre tableau de bord et la balance diffèrent de 2 000,00 € : quelle est votre démarche exacte ?', expected: 'Reproduire l’écart d’abord (un écart non reproduit ne se corrige pas), puis rapprocher ligne à ligne (RECHERCHEX + ESTNA ou NB.SI) pour isoler la ou les lignes fautives, identifier la cause (saisie transposée, plage incomplète, doublon), corriger la source — jamais le total à la main —, recalculer tous les indicateurs dépendants (parts, ratios : une erreur de source se propage), documenter l’incident dans la note de méthode et faire relire avant rediffusion.' },
    { question: 'On vous demande un camembert 3D « qui claque » pour la direction : que répondez-vous ?', expected: 'Que le graphique sert un message : la 3D déforme la perception des proportions, le camembert devient illisible au-delà de cinq parts, et « qui claque » n’est pas un objectif de gestion. Je propose l’alternative lisible — barres triées, courbe avec seuil — et si l’esthétique compte vraiment, je l’obtiens par la sobriété (titres clairs, unités, palette sobre) et non par les effets. Un tableau de bord reste un outil de décision, pas une vitrine.' },
    { question: 'Le fichier devient lent et personne n’ose plus le modifier : comment le remettez-vous en état ?', expected: 'Diagnostic d’abord : plages surdimensionnées (des SOMME sur des milliers de lignes « au cas où »), formules volatiles recopiées, feuilles dupliquées, TCD jamais actualisés. Puis remise en état : tableaux structurés aux dimensions exactes, TCD pour les synthèses lourdes, allègement des mises en forme, découpage données / calculs / restitution. Enfin la partie la plus négligée : documentation et versionnage, pour que le prochain mainteneur n’ait pas à redécouvrir le fichier — et contrôles d’exactitude conservés, toujours.' },
  ],
  evaluation: {
    criteria: [
      { label: 'Choix des formules', description: 'Met la bonne formule au bon endroit : NB.SI.ENS pour compter, SOMME.SI.ENS pour totaliser, SI pour décider, RECHERCHEX pour retrouver — syntaxe, ordre des arguments et références exacts.' },
      { label: 'Structuration des données', description: 'Nettoie et structure les sources (une information par colonne, formats normalisés, doublons traqués) et organise le classeur en couches : données, calculs, tableau de bord.' },
      { label: 'Pertinence des indicateurs', description: 'Retient peu d’indicateurs, chacun défini et relié à une décision, avec les seuils et conventions internes explicites (délai cible, encours à 60 jours, criticités).' },
      { label: 'Exactitude vérifiée', description: 'Recoupe chaque total par un calcul indépendant, utilise formules de contrôle et sommes croisées, et remonte à la ligne fautive par rapprochement en cas d’écart.' },
      { label: 'Documentation', description: 'Rédige et joint la note de méthode : périmètre, source et date d’extraction, hypothèses, exclusions — et fait relire par un tiers avant diffusion.' },
      { label: 'Restitution', description: 'Choisit le graphique pertinent (un message par graphique), met en évidence retards et dépassements, et tient le tableau de bord à jour en tendance.' },
    ],
  },
}
