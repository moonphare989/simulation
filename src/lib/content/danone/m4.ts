// =====================================================================
// Fiche 3 — Centrale Danone · Mission 4
// Lettrage et apurement des comptes tiers (45 comptes, 5 incohérences)
// =====================================================================
import type { Mission } from '@/lib/types'
import { DANONE_REFERENCE, FICHE3_DISCLAIMER, danoneBase } from './_commun'

export const danoneM4: Mission = {
  ...danoneBase(4),
  id: 'danone-m4',
  title: 'Lettrage et apurement des comptes tiers',
  summary:
    'Lettrer et apurer 45 comptes tiers de la balance auxiliaire au 30/09/2024 : trier les comptes par statut, ancienneté et sens du solde, éditer les grands livres auxiliaires, découvrir cinq incohérences (règlement en double imputé sur deux factures, avoir non imputé, écart de règlement de 0,35 €, lettrage croisé, règlement lettré sur le mauvais compte auxiliaire) et documenter les régularisations. Scénario fictif à visée pédagogique.',
  referenceData: [
    FICHE3_DISCLAIMER,
    ...DANONE_REFERENCE,
    'Mission 4 : lettrage et apurement de 45 comptes tiers ; cinq incohérences identifiées, corrigées et documentées dans le scénario pédagogique (règlement en double, avoir non imputé, écart de règlement de 0,35 €, lettrage croisé, règlement lettré sur le mauvais compte auxiliaire).',
  ],
  comprehension: {
    intro:
      'Un solde de compte tiers n’a de valeur que s’il est expliqué. Le lettrage est l’opération qui rattache chaque règlement à la facture — ou aux factures — qu’il solde, à l’intérieur du compte auxiliaire du tiers (comptes CL-xx pour les clients, FO-xx pour les fournisseurs de ce scénario) : chaque groupe reçoit un marqueur commun, la « lettre », et une écriture lettrée devient une écriture expliquée. L’apurement va plus loin : ramener le compte à une situation intégralement justifiée — lettrage complet, écarts soldés par écriture dédiée, avoirs imputés, règlements non affectés identifiés, soldes résiduels datés et motivés. Pourquoi cet effort ? Parce qu’un compte non lettré est une question sans réponse : le solde peut mêler créance réelle, reliquat de règlement partiel, avoir oublié, écart d’escompte ou de change, ou règlement affecté au mauvais compte. Les signaux se lisent sur la balance auxiliaire vieillie : un solde dans le sens inversé de la nature du compte (fournisseur débiteur : on lui a trop payé ; client créditeur : il a payé d’avance ou un avoir dépasse le dû), une ancienneté qui s’allonge, un écart résiduel — même de 0,35 € — qui dort. Et lorsque le solde « tombe juste », rien n’est encore prouvé : le contrôle se fait lettre par lettre — équilibre, sens opposés, chronologie plausible, concordance avec les libellés des règlements. Dans ce scénario fictif, quarante-cinq comptes tiers sont à trier et cinq incohérences attendent d’être découvertes, corrigées et documentées. Réflexe de base : on ne délettre et ne re-lettre que de façon tracée, on ne modifie jamais une écriture lettrée en place, et chaque régularisation laisse un dossier complet — constat, écriture, justificatif, validation, lettrage correctif, date. Référentiel : plan comptable général français (PCG, comptes 411000 Clients et 401000 Fournisseurs et leurs auxiliaires) ; TVA de référence 20 % et 5,5 % pour les denrées alimentaires ; montants en euros, deux décimales au plus.',
    definitions: [
      { term: 'Compte auxiliaire', definition: 'Subdivision du compte général 411000 Clients ou 401000 Fournisseurs ouverte au nom de chaque tiers (ici CL-xx pour les clients, FO-xx pour les fournisseurs). Le lettrage se pratique à l’intérieur d’un compte auxiliaire : c’est là que les factures et les règlements d’un même tiers se rencontrent et s’apparient.' },
      { term: 'Lettrage', definition: 'Rattachement de chaque règlement à la ou aux factures qu’il solde, par un marqueur commun (la lettre) posé sur les écritures appariées. Une écriture lettrée est une écriture expliquée : le lettrage transforme un solde brut en solde justifié, ligne par ligne.' },
      { term: 'Apurement', definition: 'Démarche qui ramène un compte tiers à une situation intégralement justifiée : lettrage complet, traitement des résidus (écarts, avoirs non imputés, règlements non affectés) et motivation des soldes restants. Apurer ne signifie pas seulement « solder à zéro » : un compte peut être apuré avec un solde, pour autant que chaque euro restant soit identifié et daté.' },
      { term: 'Règlement partiel', definition: 'Paiement d’une fraction d’une facture. Le lettrage partiel associe le règlement à la facture en laissant un reliquat : ce reliquat se suit jusqu’à son règlement, sa compensation par un avoir ou sa régularisation — il ne disparaît jamais seul.' },
      { term: 'Écart de règlement', definition: 'Différence résiduelle entre le montant réglé et le montant dû : escompte pris ou accordé, écart de change, frais bancaires retenus, erreur de saisie. Même minime (0,35 €), il bloque l’apurement : il se chiffre, s’explique par une cause et se solde par une écriture dédiée (765/758 côté dettes, 665/668 côté créances selon le cas).' },
      { term: 'Avoir non imputé', definition: 'Avoir émis ou reçu qui n’est rattaché à aucune facture — parfois non comptabilisé du tout. Signature typique : un solde résiduel exactement égal au montant de l’avoir, avec un client qui a réglé « le net » et un compte qui affiche pourtant un reste à payer.' },
      { term: 'Règlement non affecté', definition: 'Encaissement ou décaissement sans facture identifiée : acompte, avance, libellé bancaire muet, ou virement saisi sur le mauvais compte. Il dort en non-lettré (ou en compte d’attente) jusqu’à son affectation — courte, datée et justifiée.' },
      { term: 'Paiement en double', definition: 'Même règlement exécuté ou enregistré deux fois : double ordre de virement exécuté par la banque, ou double saisie d’un même bordereau. Il crée un trop-payé récupérable — ou un faux lettrage s’il est apparié à des factures qu’il ne concernait pas.' },
      { term: 'Solde débiteur fournisseur / créditeur client', definition: 'Solde dans le sens inversé de la nature du compte : le fournisseur nous doit (trop-payé, avoir à recevoir, facture annulée après paiement) ; le client dispose d’un crédit (acompte, trop-perçu, avoir supérieur au solde). Signal d’alerte systématique à analyser — pas forcément une erreur, mais jamais une situation à laisser dormir.' },
      { term: 'Ancienneté', definition: 'Âge de l’écriture non soldée la plus ancienne d’un compte, exprimé en mois révolus. Elle pilote les relances, la balance vieillie et les dépréciations : une créance ancienne non lettrée est une créance dont on ignore même si elle existe encore — c’est-à-dire une créance douteuse en sursis.' },
      { term: 'Lettrage automatique vs manuel', definition: 'L’automatique apparie par des règles (référence de facture, montant, date) et absorbe le volume courant ; le manuel tranche les cas d’espèce — règlements partiels, écarts, libellés muets, comptes homonymes. Le logiciel équilibre, il n’explique pas : toute proposition automatique se contrôle avant validation, et le paramétrage (clés, tolérances) est lui-même un objet d’audit.' },
      { term: 'Délettrage et lettrage correctif', definition: 'Annulation tracée d’un lettrage erroné, puis re-lettrage conforme à la réalité documentaire (avis de virement, références factures). On ne modifie jamais une écriture lettrée en place : la correction passe par le délettrage, éventuellement une écriture, puis le lettrage nouveau — chaque étape restant visible pour l’auditeur.' },
      { term: 'Balance auxiliaire vieillie', definition: 'État des comptes tiers par soldes, statuts de lettrage et tranches d’ancienneté. C’est l’outil de pilotage de l’apurement : qui relancer, quoi justifier, quoi provisionner — et le point de départ de l’atelier de tri de cette mission.' },
    ],
    keyPoints: [
      'Lettrer, c’est prouver le rattachement : un solde sans lettrage est une question sans réponse.',
      'Un compte non lettré ne cache pas forcément une anomalie — mais il empêche de savoir s’il en cache une : voilà le problème.',
      'L’ancienneté transforme le non-lettré en risque : créance irrécouvrable, dette oubliée, dépréciation manquante.',
      'Un solde dans le sens inversé (fournisseur débiteur, client créditeur) est un signal d’alerte systématique — à justifier, jamais à ignorer.',
      'Un écart même de 0,35 € bloque l’apurement : il se chiffre, s’explique et se solde par écriture dédiée.',
      'Un compte soldé peut cacher un mauvais lettrage : l’équilibre du solde ne prouve jamais la justesse de l’affectation.',
      'Le lettrage automatique équilibre, le lettrage manuel explique : contrôler les propositions du logiciel avant validation.',
      'On ne modifie jamais une écriture lettrée en place : délettrage tracé, écriture si besoin, re-lettrage documenté.',
      'Chaque régularisation se documente comme un dossier autonome : constat, écriture, justificatif, validation, lettrage correctif, date.',
      'La balance auxiliaire vieillie est l’outil de pilotage : comptes × ancienneté × statut — le tri précède toujours l’examen détaillé.',
    ],
  },
  objectives: {
    why:
      'Les comptes tiers alimentent directement le bilan : créances clients, dettes fournisseurs, dépréciations, TVA. Un lettrage défaillant contamine tout — soldes faux, relances à tort, provisions manquées, écritures non justifiées en audit. Cette mission construit le réflexe « identifier avant de régulariser, prouver avant de conclure » sur la matière première réelle du comptable : la balance auxiliaire et ses grands livres.',
    infoSought: [
      'Le rattachement de chaque règlement à la ou aux factures qu’il solde — et inversement.',
      'La justification de chaque solde résiduel : créance réelle, reliquat de règlement partiel, avoir non imputé, écart de règlement.',
      'L’ancienneté des écritures non soldées, compte par compte.',
      'Les soldes dans le sens inversé de la nature du compte et leurs causes (trop-payé, acompte, avoir supérieur au dû).',
      'Les règlements non affectés : acomptes reçus, libellés muets, virements saisis sur le mauvais auxiliaire.',
      'Les lettrages erronés : lettres déséquilibrées, règlements lettrés entre eux, affectations contraires aux libellés.',
      'L’impact des corrections : écritures de régularisation, incidence TVA, dépréciations de créances.',
      'Les preuves disponibles : relevés de compte des tiers, avis de virement, relevés bancaires, confirmations directes.',
    ],
    risksCovered: [
      'Soldes de tiers faux (créances ou dettes sur-évaluées) faute de lettrage à jour.',
      'Créances anciennes non identifiées — dépréciations manquantes à la clôture.',
      'Double paiement non détecté : trésorerie sortie en pure perte jusqu’au recouvrement.',
      'Avoirs non imputés : produits et TVA faux, créance résiduelle fictive relancée à tort.',
      'Règlements non affectés dormant sur des comptes ou en comptes d’attente sans suivi.',
      'Relances et mises en cause envoyées pour des factures déjà réglées : risque relationnel et contentieux.',
      'Comptes « apurés » cachant des affectations erronées (règlement sur le mauvais compte auxiliaire).',
      'Décisions de clôture prises sur des soldes non justifiés — fragilisées en audit et en reporting.',
    ],
  },
  preparation: {
    documents: [
      'La balance auxiliaire clients et fournisseurs au 30/09/2024 : comptes, soldes, statuts, ancienneté.',
      'Les grands livres auxiliaires détaillés des comptes à traiter (mouvements, libellés, lettres).',
      'Les relevés de compte reçus des fournisseurs et émis vers les clients.',
      'Les avis de virement et les libellés bancaires (références des règlements).',
      'Le dossier des avoirs émis et reçus, avec leurs factures de rattachement.',
      'Les contrats et conditions de règlement : délais, escomptes éventuels, modes de paiement.',
      'La convention interne des statuts et seuils : lettré / partiellement lettré / non lettré / apuré, ancienneté cible.',
      'Le paramétrage du lettrage automatique du logiciel : clés de rapprochement, tolérances de montant.',
      'L’échéancier de règlement fournisseurs et le plan de trésorerie du mois.',
      'Le tableau de suivi des écarts et régularisations en cours (fil des corrections précédentes).',
    ],
    questionsToAsk: [
      'Quelle convention de statut et quels seuils d’ancienneté appliquer pour le tri des 45 comptes ?',
      'Le lettrage automatique utilise quelles clés (référence facture, montant, date) et avec quelles tolérances ?',
      'Qui valide les délettrages et lettrages correctifs — et sous quelle forme ?',
      'Existe-t-il des comptes d’attente (471) et quelle durée de séjour y est tolérée ?',
      'Quels relevés de compte tiers pouvons-nous obtenir rapidement pour confirmer les soldes ?',
      'Quelles conditions d’escompte existent aux contrats, et y a-t-il des règlements en devises (écarts de change possibles) ?',
      'Où tracer les régularisations pour qu’elles soient exploitables en clôture et par l’auditeur ?',
    ],
    precautions: [
      'Ne jamais modifier une écriture lettrée en place : délettrage tracé, correction, re-lettrage.',
      'Ne pas préjuger de la cause d’un solde inversé : vérifier avant de régulariser (trop-payé réel, avoir attendu, acompte légitime).',
      'Un solde nul n’est pas une preuve : contrôler les lettres elles-mêmes — équilibre, sens opposés, chronologie.',
      'Chiffrer chaque écart et chaque anomalie avant de décider de son traitement et de sa priorité.',
      'Rapprocher avec une source indépendante (relevé de compte, banque, confirmation du tiers) avant de conclure.',
    ],
  },
  method: [
    { title: 'Extraire et fiabiliser la balance auxiliaire', description: 'Éditer la balance auxiliaire clients et fournisseurs au 30/09/2024 avec soldes, dates de dernière écriture et statuts de lettrage ; contrôler son articulation avec les comptes généraux 411000 et 401000.', why: 'Un tri sur une balance fausse oriente tout le travail en aval : la fiabilité de l’extrait est la première matière probante.' },
    { title: 'Vieillir les comptes', description: 'Calculer l’ancienneté en mois révolus depuis la dernière écriture de chaque compte, et construire la balance vieillie (tranches d’ancienneté × statut de lettrage).', why: 'L’ancienneté est le principal facteur de risque : elle transforme un « non lettré courant » en créance douteuse ou dette oubliée.' },
    { title: 'Fixer la convention de tri', description: 'Formaliser avec le responsable les critères d’alerte : solde dans le sens inversé de la nature, écriture non soldée de plus de six mois, écart résiduel non expliqué.', why: 'Sans convention explicite, le tri dépend de l’humeur du jour ; avec elle, il est reproductible et défendable en clôture.' },
    { title: 'Prioriser les comptes à examiner', description: 'Croiser montant, ancienneté et sens du solde pour classer les comptes : les sens inversés et les anciens > 12 mois d’abord, puis les écarts résiduels et les montants significatifs.', why: 'L’apurement se fait sous contrainte de temps : la priorisation rationnelle évite de polir des comptes sains pendant que les risques dorment.' },
    { title: 'Éditer les grands livres auxiliaires', description: 'Sortir le détail des mouvements des comptes prioritaires : dates, pièces, libellés, débit, crédit, lettres posées.', why: 'La balance dit « qui » ; seul le grand livre dit « pourquoi » : les incohérences vivent dans le détail des lettres.' },
    { title: 'Contrôler l’équilibre et le solde de chaque compte', description: 'Vérifier totaux débit/crédit et solde reporté ; recycler immédiatement toute divergence d’extraction.', why: 'Un solde mal édité produit de fausses incohérences — et de fausses régularisations.' },
    { title: 'Auditer les lettres une à une', description: 'Pour chaque lettre : écritures de sens opposés ? équilibre du groupe ? chronologie plausible ? concordance avec les libellés des règlements ? Présence d’au moins une facture dans le groupe ?', why: 'Les configurations impossibles (règlements lettrés entre eux, lettre à une seule ligne, lettre contredisant le libellé) se révèlent ici — même sur un compte soldé.' },
    { title: 'Analyser les soldes inversés', description: 'Fournisseur débiteur : trop-payé, double paiement, avoir à recevoir, facture annulée après règlement. Client créditeur : acompte, trop-perçu, avoir supérieur au solde — vérifier avant de régulariser.', why: 'Un sens inversé est une alerte, pas un diagnostic : la cause détermine la correction (imputation, remboursement, écriture d’avoir).' },
    { title: 'Traiter les écarts résiduels', description: 'Isoler les reliquats non soldés (0,35 € comme 1 477,00 €), rechercher la cause — escompte, écart de change, frais, erreur — et préparer l’écriture de solder (765/758 côté dettes, 665/668 côté créances selon le cas).', why: 'L’écart non soldé bloque le lettrage et s’accumule s’il est systémique : il se traite, jamais il ne s’ignore.' },
    { title: 'Rapprocher avec les tiers', description: 'Demander les relevés de compte fournisseurs, relire les avis de virement clients, confronter les positions réciproques ; confirmer directement en cas de désaccord persistant.', why: 'La source externe tranche ce que le grand livre seul ne peut pas prouver — notamment les doubles règlements et les affectations contestées.' },
    { title: 'Délettrer et re-lettrer les affectations erronées', description: 'Annuler de façon tracée les lettres fautives, puis re-lettrer conformément aux références des règlements (avis de virement, échéancier, décisions client).', why: 'Le lettrage correctif rétablit la vérité documentaire sans toucher aux montants — condition pour que relances et litiges s’appuient sur des faits.' },
    { title: 'Enregistrer les écritures de régularisation', description: 'Saisir les corrections nécessaires : avoir oublié (avec TVA), écart de règlement, transfert de règlement entre auxiliaires — libellés explicites référençant les pièces d’origine.', why: 'Certaines incohérences ne se corrigent pas par lettrage seul : l’écriture date, chiffre et rend la correction irréversible et auditable.' },
    { title: 'Documenter chaque incohérence', description: 'Constituer le dossier type : constat (quoi, où, comment découvert, montant), écriture, justificatifs joints, validation du responsable, lettrage correctif, date — plus l’impact TVA éventuel.', why: 'La fiche de référence mentionne cinq incohérences « identifiées, corrigées et documentées » : sans documentation, la correction n’existe pas pour la clôture ni pour l’auditeur.' },
    { title: 'Boucler, suivre et prévenir', description: 'Vérifier l’apurement final compte par compte, tenir le tableau des corrections, alerter sur les causes racines (paramétrage du lettrage automatique, absence de contrôle anti-doublon des virements) et proposer les correctifs de procédure.', why: 'Un apurement qui ne corrige pas les causes racines prépare le désordre du mois suivant : le bouclage inclut la prévention.' },
  ],
  exercises: [
    {
      id: 'danone-m4-ex1',
      title: 'Le principe du lettrage',
      cycle: 'Transversal',
      context:
        'Avant d’ouvrir la balance auxiliaire, le responsable comptable vérifie que les notions sont en place : pourquoi lettre, ce que révèle un compte non lettré, qui lettre et selon quelles règles. Les définitions de l’étape Compréhension servent de référentiel.',
      risks: ['Confusion lettrage / apurement', 'Verdict sans preuve'],
      documents: [],
      questions: [
        {
          id: 'danone-m4-ex1-q1',
          question: 'Pourquoi lettre-t-on les comptes tiers ?',
          type: 'mcq',
          options: [
            'Pour prouver le rattachement de chaque règlement à la facture qu’il solde et fiabiliser le solde de chaque compte auxiliaire, ligne par ligne',
            'Pour accélérer les encaissements des clients',
            'Parce que la TVA ne peut être déclarée sans lettrage préalable',
            'Pour supprimer les comptes inutiles du plan comptable',
          ],
          expected: '0',
          explanation:
            'Le lettrage est une preuve de rattachement : chaque règlement apparié à sa facture, chaque lettre équilibrée. Il ne relance personne (c’est un outil du recouvrement, pas le recouvrement), la TVA se déclare sur les écritures — le lettrage ne conditionne pas la déclaration — et il ne supprime aucun compte. Accessoirement, il fiabilise tout ce qui s’appuie sur les soldes : relances, dépréciations, états de tiers en clôture.',
        },
        {
          id: 'danone-m4-ex1-q2',
          question: 'Que révèle, au minimum, un compte client non lettré depuis plusieurs mois ?',
          type: 'mcq',
          options: [
            'Rien de particulier : c’est une situation courante sans conséquence',
            'Une incertitude : le solde peut mêler créance réelle, règlement non affecté, avoir non imputé ou écart — il faut identifier avant de relancer, provisionner ou régulariser',
            'La preuve d’une fraude du client',
            'Que le client est nécessairement en procédure collective',
          ],
          expected: '1',
          explanation:
            'Le minimum que révèle un non-lettré ancien, c’est l’ignorance : on ne sait pas de quoi le solde est fait. Ce n’est ni la preuve d’une fraude, ni d’une défaillance — mais tant que le compte n’est pas décomposé, la relance peut être indue, la provision mal calibrée et la correction impossible. Le non-lettré n’est pas l’anomalie : il est le masque potentiel de l’anomalie.',
        },
        {
          id: 'danone-m4-ex1-q3',
          question: 'Dans le service, qui lettre — et selon quelles règles ?',
          type: 'mcq',
          options: [
            'L’auditeur externe, lors de ses contrôles annuels',
            'Le comptable en charge des comptes auxiliaires, au fil des règlements, en suivant des critères explicites (référence, montant, date) — avec validation du responsable pour les délettrages et lettrages correctifs',
            'Le commercial, puisqu’il connaît le mieux le client',
            'Personne en particulier : le logiciel lettré seul et sa décision ne se discute pas',
          ],
          expected: '1',
          explanation:
            'Le lettrage est un acte de tenue de comptabilité : il appartient au comptable auxiliaire, au fil des règlements, avec des critères explicites (le libellé du virement, la référence de facture, le montant, la date) — et une escalade au responsable dès que l’affectation devient incertaine (écarts, règlements partiels répétés, comptes homonymes). L’auditeur vérifie le lettrage, il ne le fait pas ; le commercial alimente l’information mais ne marque pas les comptes ; et le lettrage automatique propose — l’humain dispose.',
        },
        {
          id: 'danone-m4-ex1-q4',
          question: 'Expliquez en quoi le lettrage sert à la fois la comptabilité, le recouvrement et l’audit — et ce que l’apurement ajoute au lettrage.',
          type: 'open',
          keywords: ['rattachement', 'solde', 'ancienneté', 'relance', 'provision', 'traçabilité'],
          explanation:
            'Comptabilité : le lettrage prouve le rattachement de chaque règlement à sa facture et transforme un solde brut en solde justifié — les états de tiers (créances, dettes) deviennent défendables. Recouvrement : seul un compte lettré donne une ancienneté fiable par facture, donc des relances justes (ni indues, ni manquées) et des provisions/dépréciations calibrées. Audit : les lettres forment une traçabilité interne du compte, lisible sans reconstituer l’histoire pièce par pièce. L’apurement ajoute l’exigence de résultat : un compte n’est pas « lettré et voilà » — il est apuré quand tout est apparié ET que les résidus (écarts, avoirs, règlements non affectés, soldes inversés) sont traités ou motivés. En bref : le lettrage explique le passé, l’apurement justifie le présent.',
        },
      ],
      solutionSummary:
        'Lettrer = prouver le rattachement règlement ↔ facture à l’intérieur du compte auxiliaire ; le bénéfice déborde le compte lui-même : relances justes, provisions calibrées, traçabilité d’audit. Un compte non lettré ne prouve pas l’anomalie — il empêche de l’exclure. L’apurement est l’exigence de résultat : tout apparié, tout résidu traité ou motivé. Le lettrage relève du comptable auxiliaire avec des critères explicites, le responsable validant les corrections. À l’oral : savoir dire « le lettrage explique le passé, l’apurement justifie le présent » — et donner un exemple de résidu (avoir non imputé, écart de 0,35 €) pour montrer que la notion est vécue.',
      interviewTips: [
        'Annoncez la définition en une phrase avant les exemples : « rattachement tracé de chaque règlement à la facture qu’il solde ».',
        'Citez d’emblée un résidu concret (écart de 0,35 €, avoir non imputé) : le recruteur mesure tout de suite si vous avez réellement fait du lettrage.',
      ],
    },
    {
      id: 'danone-m4-ex2',
      title: 'Atelier : tri des 45 comptes tiers',
      cycle: 'Clients / Fournisseurs',
      context:
        'Le responsable vous remet la balance auxiliaire au 30/09/2024 : 45 comptes tiers, 25 clients (CL-01 à CL-25) et 20 fournisseurs (FO-01 à FO-20). Convention interne de tri, rappelée par le responsable : appellent une analyse prioritaire (1) tout solde dans le sens inversé de la nature du compte, (2) toute écriture non soldée depuis plus de six mois, (3) tout écart résiduel non expliqué. Premier travail : compter, totaliser, repérer — l’examen détaillé des grands livres viendra ensuite. Tous les comptes, soldes et dates sont fictifs.',
      risks: ['Tri non priorisé', 'Anomalie de sens non détectée', 'Créance ancienne ignorée'],
      documents: [
        {
          kind: 'table',
          name: 'Balance auxiliaire vieillie — 45 comptes tiers au 30/09/2024 (fictive)',
          columns: ['Compte', 'Intitulé', 'Nature', 'Solde (€)', 'Dernière écriture', 'Ancienneté (mois)', 'Statut'],
          rows: [
            ['CL-01', 'Supérette Lemoine', 'Client', 2450, '31/08/2024', 1, 'Lettré'],
            ['CL-02', 'Épicerie Bianchi', 'Client', 0, '31/08/2024', 1, 'Apuré'],
            ['CL-03', 'Hypermarché Verdier', 'Client', 5327.4, '31/08/2024', 1, 'Lettré'],
            ['CL-04', 'Crèmerie Odéon', 'Client', 6420, '30/08/2024', 1, 'Partiellement lettré'],
            ['CL-05', 'Café des Halles', 'Client', 0, '31/08/2024', 1, 'Apuré'],
            ['CL-06', 'Boulangerie Rousseau', 'Client', 4065, '31/08/2024', 1, 'Lettré'],
            ['CL-07', 'Restaurant Scolaire Vaugelas', 'Client', 3460, '31/08/2024', 1, 'Partiellement lettré'],
            ['CL-08', 'Traiteur Molière', 'Client', 3762.5, '15/08/2024', 1, 'Lettré'],
            ['CL-09', 'Groupe Scolaire Pasteur', 'Client', 8940, '12/08/2024', 1, 'Lettré'],
            ['CL-10', 'Fromagerie des Lys', 'Client', 0, '31/07/2024', 2, 'Apuré'],
            ['CL-11', 'Supermarché Campani', 'Client', 15480, '30/07/2024', 2, 'Lettré'],
            ['CL-12', 'Épicerie Fine Montorge', 'Client', -412.6, '15/06/2024', 3, 'Non lettré'],
            ['CL-13', 'Brasserie du Quai', 'Client', 7612, '15/07/2024', 2, 'Lettré'],
            ['CL-14', 'Café des Sports', 'Client', 1842.6, '30/06/2024', 3, 'Partiellement lettré'],
            ['CL-15', 'Hôtel des Trois Pigeons', 'Client', 1477, '15/07/2024', 2, 'Partiellement lettré'],
            ['CL-16', 'Grossistes Ravier Grenoble', 'Client', 0, '30/06/2024', 3, 'Apuré'],
            ['CL-17', 'Gastro Distribution', 'Client', 6258, '12/07/2024', 2, 'Non lettré'],
            ['CL-18', 'Gastro Distribution Bourgogne', 'Client', 0, '02/08/2024', 1, 'Apuré'],
            ['CL-19', 'Alimentation Générale Sabatier', 'Client', 2310.4, '30/06/2024', 3, 'Lettré'],
            ['CL-20', 'Supérette du Parc', 'Client', 5604.75, '15/06/2024', 3, 'Lettré'],
            ['CL-21', 'Café de la Poste', 'Client', 4230, '31/05/2024', 4, 'Non lettré'],
            ['CL-22', 'Halles Vaillant', 'Client', 940, '15/05/2023', 16, 'Non lettré'],
            ['CL-23', 'Comité d’Entreprise Ferrand', 'Client', 3120, '30/04/2024', 5, 'Partiellement lettré'],
            ['CL-24', 'Bistro Léon', 'Client', 2735.8, '31/03/2024', 6, 'Non lettré'],
            ['CL-25', 'Auberge du Pont Neuf', 'Client', 8245, '15/12/2023', 9, 'Non lettré'],
            ['FO-01', 'Transports Ravel', 'Fournisseur', 0, '14/08/2024', 1, 'Apuré'],
            ['FO-02', 'Ferme du Colombier', 'Fournisseur', -28340, '30/08/2024', 1, 'Lettré'],
            ['FO-03', 'Emballages Vauclair', 'Fournisseur', -14620, '31/07/2024', 2, 'Lettré'],
            ['FO-04', 'Bureau Vert', 'Fournisseur', -3792.4, '15/08/2024', 1, 'Lettré'],
            ['FO-05', 'Imprimerie du Val', 'Fournisseur', -1497.6, '05/08/2024', 1, 'Lettré'],
            ['FO-06', 'Électricité Roland', 'Fournisseur', -4264, '22/07/2024', 2, 'Lettré'],
            ['FO-07', 'Lavage Industriel Perrin', 'Fournisseur', -2478.2, '30/07/2024', 2, 'Lettré'],
            ['FO-08', 'Honoraires CNC Dijon', 'Fournisseur', -3500, '31/07/2024', 2, 'Lettré'],
            ['FO-09', 'Papier & Logistique', 'Fournisseur', -0.35, '12/08/2024', 1, 'Partiellement lettré'],
            ['FO-10', 'Assurances Mutuelles Centre', 'Fournisseur', -6842, '30/06/2024', 3, 'Lettré'],
            ['FO-11', 'Télécom Bourgogne', 'Fournisseur', -1204.6, '30/06/2024', 3, 'Lettré'],
            ['FO-12', 'Froid & Maintenance', 'Fournisseur', 1488, '12/08/2024', 1, 'Non lettré'],
            ['FO-13', 'Astral Nettoyage', 'Fournisseur', -1836, '09/08/2024', 1, 'Lettré'],
            ['FO-14', 'Locaxis Matériel', 'Fournisseur', -5940, '31/05/2024', 4, 'Lettré'],
            ['FO-15', 'Laboratoires Vétérinaires Saône', 'Fournisseur', -2366.75, '30/04/2024', 5, 'Partiellement lettré'],
            ['FO-16', 'Sécuriprev Formation', 'Fournisseur', -1725, '31/03/2024', 6, 'Lettré'],
            ['FO-17', 'Locabox Plastiques', 'Fournisseur', -2092.6, '20/04/2023', 17, 'Partiellement lettré'],
            ['FO-18', 'Messagerie Express Val de Saône', 'Fournisseur', -1248, '15/08/2023', 13, 'Non lettré'],
            ['FO-19', 'Sécuritest Contrôles', 'Fournisseur', -460.8, '28/04/2023', 17, 'Non lettré'],
            ['FO-20', 'Carburation & Énergie Est', 'Fournisseur', -8905.2, '31/05/2024', 4, 'Lettré'],
          ],
          note:
            'Document fictif. Convention de lecture : solde débiteur en positif, solde créditeur en négatif ; ancienneté en mois révolus depuis la dernière écriture au 30/09/2024 ; statuts — Lettré (règlements rattachés, le solde restant correspond à des factures en cours), Partiellement lettré (reliquats à compléter), Non lettré (aucun rattachement), Apuré (solde nul).',
        },
      ],
      questions: [
        {
          id: 'danone-m4-ex2-q1',
          question: 'Combien de comptes présentent le statut « Non lettré » dans cette balance ?',
          type: 'numeric',
          expected: 9,
          explanation:
            'Neuf comptes : six clients (CL-12, CL-17, CL-21, CL-22, CL-24, CL-25) et trois fournisseurs (FO-12, FO-18, FO-19). Le comptage par statut est le premier geste de l’atelier : il dimensionne le travail d’apurement et se reporte dans le tableau de bord du mois.',
        },
        {
          id: 'danone-m4-ex2-q2',
          question: 'Quel est le total des créances clients — somme des soldes débiteurs des comptes clients ?',
          type: 'numeric',
          expected: 94280.45,
          explanation:
            '19 comptes clients débiteurs : 2 450,00 + 5 327,40 + 6 420,00 + 4 065,00 + 3 460,00 + 3 762,50 + 8 940,00 + 15 480,00 + 7 612,00 + 1 842,60 + 1 477,00 + 6 258,00 + 2 310,40 + 5 604,75 + 4 230,00 + 940,00 + 3 120,00 + 2 735,80 + 8 245,00 = 94 280,45 €. Sont exclus : les cinq comptes apurés à zéro (CL-02, CL-05, CL-10, CL-16, CL-18) et le compte créditeur CL-12 (−412,60 €), qui n’est pas une créance mais un crédit à justifier. Ce total est la ligne « clients » de l’état des tiers en clôture : le lettrage sert précisément à savoir ce qu’il contient.',
        },
        {
          id: 'danone-m4-ex2-q3',
          question: 'Selon la convention interne (sens inversé, écriture non soldée de plus de six mois, écart résiduel non expliqué), quels comptes appellent une analyse prioritaire ?',
          type: 'multi',
          options: [
            'CL-12 Épicerie Fine Montorge — solde créditeur de 412,60 € : un client qui nous a vraisemblablement payé d’avance ou trop',
            'FO-12 Froid & Maintenance — solde débiteur de 1 488,00 € : un fournisseur que nous avons trop payé',
            'CL-22 Halles Vaillant — 940,00 € non lettrés depuis 16 mois',
            'FO-19 Sécuritest Contrôles — 460,80 € non lettrés depuis 17 mois',
            'FO-18 Messagerie Express Val de Saône — 1 248,00 € non lettrés depuis 13 mois',
            'FO-17 Locabox Plastiques — 2 092,60 € partiellement lettrés depuis 17 mois',
            'CL-25 Auberge du Pont Neuf — 8 245,00 € non lettrés depuis 9 mois',
            'FO-09 Papier & Logistique — reliquat de 0,35 € jamais soldé (écart de règlement)',
            'CL-01 Supérette Lemoine — 2 450,00 € lettrés, facture d’août en cours',
            'CL-21 Café de la Poste — 4 230,00 € non lettrés depuis 4 mois',
            'CL-24 Bistro Léon — 2 735,80 € non lettrés depuis 6 mois tout juste',
            'CL-04 Crèmerie Odéon — 6 420,00 € partiellement lettrés, acompte du 30/08 à imputer sur la facture de septembre',
          ],
          expected: ['0', '1', '2', '3', '4', '5', '6', '7'],
          explanation:
            'Huit comptes signalés. Sens inversés : CL-12 (client créditeur — acompte ou trop-perçu à justifier et affecter) et FO-12 (fournisseur débiteur — trop-payé à récupérer ou à imputer ; on apprendra qu’il s’agit du paiement d’une facture annulée par avoir). Ancienneté supérieure à six mois avec écritures non soldées : CL-22 (16 mois), FO-19 (17 mois), FO-18 (13 mois), FO-17 (17 mois) et CL-25 (9 mois — créance ancienne à relancer et à provisionner si besoin). Écart résiduel : FO-09 (0,35 € — un écart de règlement ne se laisse jamais dormir). Non retenus : CL-01 (facture courante lettrée), CL-21 (4 mois : relance courante, pas une incohérence), CL-24 (six mois tout juste : la convention vise strictement plus de six mois — piège du seuil), CL-04 (acompte récent à imputer : situation courante, à traiter au lettrage de septembre). Le tri hiérarchise, il ne juge pas : chaque compte signalé devra être expliqué avant toute correction.',
        },
        {
          id: 'danone-m4-ex2-q4',
          question: 'Le responsable vous demande un plan d’action priorisé sur les huit comptes signalés : dans quel ordre les traitez-vous, et quelle action pour chacun ?',
          type: 'open',
          keywords: ['ancienneté', 'montant', 'relance', 'justification', 'avoir', 'écriture', 'remboursement'],
          explanation:
            'Priorisation rationnelle (risque × montant × récupérabilité). 1. FO-12 Froid & Maintenance (+1 488,00 € débiteur) : argent engagé — vérifier l’origine (trop-payé sur facture annulée par avoir), demander remboursement ou imputation sur la facture de remplacement. 2. CL-25 Auberge du Pont Neuf (8 245,00 €, 9 mois) : plus fort montant ancien — relance écrite immédiate, évaluation de dépréciation si défaut, dossier contentieux le cas échéant. 3. Les anciens de plus de 12 mois — CL-22, FO-17, FO-18, FO-19 : justification documentée (relevés de compte, historique), relance ou régularisation, provision si doute. 4. CL-12 (−412,60 € créditeur) : identifier l’origine du crédit (acompte sur commande de septembre ?) et l’affecter à la facture à venir — un crédit client ne dort pas. 5. FO-09 (0,35 €) : solder par écriture d’écart (escompte obtenu, compte 765, ou différence sur règlement) — peu prioritaire en montant, mais systémique si la cause se répète. Le fil conducteur : chiffrer, justifier, puis corriger — jamais l’inverse. Et noter que le tri ne détecte pas tout : CL-15, CL-07, FO-01 et CL-17/CL-18 paraissent sains ou ordinaires ici — ce sont leurs grands livres (exercice suivant) qui révèlent les incohérences.',
        },
      ],
      solutionSummary:
        'Atelier de tri : 45 comptes dont 9 non lettrés ; créances clients de 94 280,45 € (19 comptes débiteurs) ; huit comptes signalés par la convention interne — deux sens inversés (FO-12 fournisseur débiteur de 1 488,00 € ; CL-12 client créditeur de 412,60 €), quatre écritures non soldées de plus de six mois (CL-22 16 mois, FO-19 17 mois, FO-18 13 mois, FO-17 17 mois, plus CL-25 à 9 mois et 8 245,00 €), un écart résiduel (FO-09, 0,35 €). Pièges du seuil : CL-24 (six mois tout juste) et CL-21 (quatre mois) ne sont pas signalés — relances courantes, pas incohérences. Enseignement capital : l’écran de la balance ne détecte pas tout — CL-15, CL-07, FO-01 et le couple CL-17/CL-18 passent pour sains et seront démasqués au grand livre. Le tri hiérarchise le travail ; l’apurement se joue dans le détail des lettres.',
      interviewTips: [
        'Structurez la priorisation par trois mots : sens (inversé ?), âge (plus de six mois ?), montant (récupérabilité ?).',
        'Soulignez la limite du tri : « la balance dit qui, le grand livre dit pourquoi » — phrase qui marque un vécu réel.',
      ],
    },
    {
      id: 'danone-m4-ex3',
      title: 'Cinq incohérences à découvrir',
      cycle: 'Clients / Fournisseurs',
      context:
        'Le tri a dimensionné le travail ; place à l’examen détaillé. Le responsable vous transmet les grands livres auxiliaires de cinq situations (dont deux comptes liés) repérées entre la balance et le fil des corrections : FO-01, CL-15, FO-09, CL-07, et le couple CL-17/CL-18. Pour chacune : identifier la cause possible, puis décrire les vérifications, la correction envisageable et la preuve qui permettrait de conclure. Tous les mouvements, libellés et lettres sont fictifs.',
      risks: ['Double paiement non détecté', 'Avoir non imputé', 'Écart de règlement ignoré', 'Lettrage croisé', 'Mauvais compte auxiliaire'],
      documents: [
        {
          kind: 'text',
          name: 'Grand livre auxiliaire — FO-01 Transports Ravel (fictif)',
          content:
            'GRAND LIVRE AUXILIAIRE — FOURNISSEUR FO-01 « TRANSPORTS RAVEL » (au 30/09/2024)\n' +
            '--------------------------------------------------------------------------------\n' +
            'Date        Pièce          Libellé                      Débit (€)   Crédit (€)  Lettre\n' +
            '04/07/2024  FA-2024-1182   Transport frigo juin              —        612,40      —\n' +
            '05/08/2024  FA-2024-1298   Transport frigo juillet           —        612,40      —\n' +
            '08/08/2024  RG-2024-0812   Virement « solde juin-juillet »  1 224,80          —      A\n' +
            '09/08/2024  FA-2024-1352   Transport frigo août S1           —        648,00      —\n' +
            '12/08/2024  FA-2024-1361   Messagerie express palette        —        576,80      —\n' +
            '14/08/2024  RG-2024-0827   Virement « solde juin-juillet »  1 224,80          —      B\n' +
            'SOLDE AU 30/09/2024 : 0,00 €\n' +
            'Lettre A : FA-2024-1182 + FA-2024-1298 + RG-2024-0812 → 612,40 + 612,40 = 1 224,80 (soldée).\n' +
            'Lettre B : FA-2024-1352 + FA-2024-1361 + RG-2024-0827 → 648,00 + 576,80 = 1 224,80 (soldée).\n' +
            'Relevé bancaire : un débit de 1 224,80 € le 08/08 ET un autre le 14/08,\n' +
            'même référence d’ordre VIR-88412, même libellé « solde juin-juillet ».\n' +
            'Échéances conventionnelles : factures d’août payables fin septembre.',
          note: 'Document fictif. Le compte est soldé et les deux lettres sont arithmétiquement équilibrées : l’anomalie n’est pas dans le solde.',
        },
        {
          kind: 'text',
          name: 'Grand livre auxiliaire — CL-15 Hôtel des Trois Pigeons (fictif)',
          content:
            'GRAND LIVRE AUXILIAIRE — CLIENT CL-15 « HÔTEL DES TROIS PIGEONS » (au 30/09/2024)\n' +
            '-----------------------------------------------------------------------------------\n' +
            'Date        Pièce          Libellé                       Débit (€)    Crédit (€)  Lettre\n' +
            '28/06/2024  FV-2024-0618   Livraison produits laitiers    21 354,00           —      —\n' +
            '15/07/2024  RG-2024-0715   Virement « solde net après avoir »          19 877,00     A\n' +
            'SOLDE AU 30/09/2024 : 1 477,00 € (débiteur)\n' +
            'Lettre A : FV-2024-0618 + RG-2024-0715 — lettrage partiel : reste à payer 1 477,00.\n' +
            'Dossier facturation : avoir AV-2024-0389 du 30/06/2024 « retour produits »\n' +
            'référençant FV-2024-0618 — HT 1 400,00 €, TVA 5,5 % = 77,00 €, TTC 1 477,00 €.\n' +
            'Aucune écriture d’avoir ne figure au compte client.',
          note: 'Document fictif. Le virement du 15/07 porte le libellé « solde net après avoir » : 21 354,00 − 1 477,00 = 19 877,00 €.',
        },
        {
          kind: 'text',
          name: 'Grand livre auxiliaire — FO-09 Papier & Logistique (fictif)',
          content:
            'GRAND LIVRE AUXILIAIRE — FOURNISSEUR FO-09 « PAPIER & LOGISTIQUE » (au 30/09/2024)\n' +
            '-----------------------------------------------------------------------------------\n' +
            'Date        Pièce          Libellé                      Débit (€)   Crédit (€)  Lettre\n' +
            '08/07/2024  FA-2024-1187   Papier couché A3 — juillet         —       1 068,48      —\n' +
            '12/08/2024  RG-2024-0819   Virement SEPA                 1 068,13          —      A\n' +
            'SOLDE AU 30/09/2024 : 0,35 € (créditeur)\n' +
            'Lettre A : FA-2024-1187 + RG-2024-0819 — lettrage partiel : reliquat 0,35.\n' +
            'Facture : HT 890,40 €, TVA 20 % = 178,08 €, TTC 1 068,48 €.\n' +
            'Bordereau de virement : montant débité 1 068,13 € (référence FA-2024-1187).\n' +
            'Contrat fournisseur : escompte de règlement possible ; aucune note de crédit reçue.',
          note: 'Document fictif. Le reliquat est inférieur au centième du montant : personne ne l’a jamais traité.',
        },
        {
          kind: 'text',
          name: 'Grand livre auxiliaire — CL-07 Restaurant Scolaire Vaugelas (fictif)',
          content:
            'GRAND LIVRE AUXILIAIRE — CLIENT CL-07 « RESTAURANT SCOLAIRE VAUGELAS » (au 30/09/2024)\n' +
            '----------------------------------------------------------------------------------------\n' +
            'Date        Pièce          Libellé                      Débit (€)    Crédit (€)  Lettre\n' +
            '30/05/2024  FV-2024-0552   Livraisons cantine — mai      12 380,00           —      —\n' +
            '28/06/2024  FV-2024-0631   Livraisons cantine — juin      9 460,00           —      A\n' +
            '30/06/2024  RG-2024-0630   Virement « acompte juin »             —        6 000,00    A\n' +
            '31/07/2024  RG-2024-0731   Virement « solde mai »                —        6 380,00    B\n' +
            '30/08/2024  RG-2024-0830   Virement « acompte juin 2 »           —        4 000,00    B\n' +
            '31/08/2024  RG-2024-0841   Virement « reliquat »                 —        2 000,00    C\n' +
            'SOLDE AU 30/09/2024 : 3 460,00 € (débiteur)\n' +
            'Lettre A : FV-2024-0631 + RG-2024-0630 — partielle : reste 3 460,00 sur la facture de juin.\n' +
            'Lettre B : RG-2024-0731 + RG-2024-0830 — deux règlements lettrés ensemble, sans facture.\n' +
            'Lettre C : RG-2024-0841 — un règlement lettré seul.\n' +
            'La facture de mai (FV-2024-0552, 12 380,00 €) n’est lettrée avec aucune écriture.',
          note: 'Document fictif. Le solde global est arithmétiquement correct : 21 840,00 − 18 380,00 = 3 460,00 €. C’est l’affectation qui cloche.',
        },
        {
          kind: 'text',
          name: 'Grands livres auxiliaires — CL-17 / CL-18 Gastro Distribution (fictifs)',
          content:
            'GRANDS LIVRES AUXILIAIRES CLIENTS — CL-17 « GASTRO DISTRIBUTION » (siège)\n' +
            'et CL-18 « GASTRO DISTRIBUTION BOURGOGNE » (agence) — deux entités du même\n' +
            'groupe client, comptes distincts au suffixe près (au 30/09/2024)\n' +
            '--------------------------------------------------------------------------------------\n' +
            'COMPTE CL-17 — GASTRO DISTRIBUTION (siège)\n' +
            'Date        Pièce          Libellé                       Débit (€)    Crédit (€)  Lettre\n' +
            '12/07/2024  FV-2024-0785   Livraison plateaux — siège     6 258,00           —      —\n' +
            'SOLDE AU 30/09/2024 : 6 258,00 € (débiteur) — aucune autre écriture ;\n' +
            'deux lettres de rappel envoyées les 05/09 et 20/09 (montant réclamé : 6 258,00 €).\n' +
            'COMPTE CL-18 — GASTRO DISTRIBUTION BOURGOGNE (agence)\n' +
            'Date        Pièce          Libellé                       Débit (€)    Crédit (€)  Lettre\n' +
            '05/07/2024  FV-2024-0761   Livraison plateaux — agence    4 913,25           —      L\n' +
            '28/07/2024  FV-2024-0802   Livraison fin juillet — agence 1 344,75           —      L\n' +
            '02/08/2024  RG-2024-0802   Virement « réf. FV-2024-0785 »             6 258,00     L\n' +
            'SOLDE AU 30/09/2024 : 0,00 €\n' +
            'Lettre L : FV-2024-0761 + FV-2024-0802 + RG-2024-0802 → 4 913,25 + 1 344,75 = 6 258,00 (soldée).',
          note: 'Document fictif. Le libellé du virement reçu sur CL-18 référence FV-2024-0785… une pièce du compte CL-17.',
        },
      ],
      questions: [
        {
          id: 'danone-m4-ex3-q1',
          question: 'FO-01 Transports Ravel : quelle est la cause la plus probable de la configuration observée ?',
          type: 'mcq',
          options: [
            'Le même virement a été exécuté deux fois par la banque, et la seconde exécution a été lettrée sur les factures d’août pour solder le compte',
            'Le fournisseur a livré deux fois en août et facturé en conséquence',
            'Les factures d’août ont été saisies deux fois',
            'L’entreprise a obtenu un escompte égal au montant des factures d’août',
          ],
          expected: '0',
          explanation:
            'Deux débits bancaires de 1 224,80 € à six jours d’écart, même référence d’ordre VIR-88412, même libellé « solde juin-juillet » : c’est un double règlement — le même ordre de virement exécuté deux fois. La seconde exécution a été lettrée (lettre B) sur les factures d’août, dont le total atteint par coïncidence exacte 648,00 + 576,80 = 1 224,80 : le compte « tombe à zéro » et l’anomalie se cache derrière un solde parfait. Les autres options ne résistent pas : les factures d’août sont distinctes et plausibles (pas de livraison double), leurs numéros sont uniques (pas de saisie en double), et un escompte se comptabilise par écriture, jamais en lettrant des factures. Le compte est soldé, mais la traçabilité est fausse : le décaissement du 14/08 ne correspond à aucune décision de paiement des factures d’août (échéance fin septembre).',
        },
        {
          id: 'danone-m4-ex3-q2',
          question: 'FO-01 : décrivez les vérifications à effectuer, la correction envisageable et la preuve qui permettrait de conclure.',
          type: 'open',
          keywords: ['relevé bancaire', 'double', 'virement', 'fournisseur', 'délettrage', 'imputation', 'remboursement'],
          explanation:
            'Vérifications : rapprocher le journal de banque (confirmer les deux débits de 1 224,80 €, même référence VIR-88412) ; demander le relevé de compte fournisseur — que considère-t-il dû ? Les factures d’août (normal) ou un trop-payé de 1 224,80 ? ; retrouver l’ordre de virement d’origine en trésorerie (qui l’a validé, pourquoi la banque l’a exécuté deux fois). Correction envisageable, deux voies : (a) valider l’imputation du second virement sur les factures d’août — lettrage B conservé — à condition d’un accord écrit du fournisseur et d’une décision de trésorerie documentée (paiement anticipé accepté) ; (b) si l’entreprise veut récupérer les fonds : délettrer B (les factures d’août redeviennent ouvertes, payables fin septembre), demander le remboursement de 1 224,80 € — le compte devient débiteur en attente. Dans les deux cas, traiter la cause racine : contrôle anti-doublon des virements (référence d’ordre unique) — c’est une faille de procédure à remonter. Preuve pour conclure : relevés bancaires des 08/08 et 14/08 + réponse écrite du fournisseur (ou son relevé de compte) + écrit de la trésorerie. Sans preuve externe, on ne choisit pas entre (a) et (b) : on suspend.',
        },
        {
          id: 'danone-m4-ex3-q3',
          question: 'CL-15 Hôtel des Trois Pigeons : d’où provient très probablement le solde résiduel de 1 477,00 € ?',
          type: 'mcq',
          options: [
            'De l’avoir AV-2024-0389, émis mais jamais comptabilisé sur le compte client : le client a réglé le net (19 877,00 €), il reste au compte un « reste à payer » exactement égal au TTC de l’avoir',
            'Le client a payé 1 477,00 € en trop par erreur de virement',
            'La facture FV-2024-0618 a été saisie deux fois',
            'Un escompte de 1 477,00 € a été accordé puis oublié',
          ],
          expected: '0',
          explanation:
            'La signature est caractéristique : résidu = TTC de l’avoir, au centime près (1 477,00 €), et virement libellé « solde net après avoir » (21 354,00 − 1 477,00 = 19 877,00 €). L’avoir AV-2024-0389 a été émis par le service facturation (pièce numérotée, référençant la facture) mais jamais saisi en comptabilité : ni au compte client, ni a fortiori en 701/445710. Le client, lui, a payé le net exact — donc la créance affichée de 1 477,00 € est une créance fictive. Les autres options contredisent les faits : un trop-payé de 1 477,00 rendrait le compte créditeur, une double saisie de facture doublerait le débit (42 708,00), et un escompte se comptabilise en 665, pas en résidu de lettrage. Incidence à ne pas oublier : la TVA collectée de juin est surévaluée de 77,00 € (l’avoir n’a jamais été déduit).',
        },
        {
          id: 'danone-m4-ex3-q4',
          question: 'CL-15 : décrivez les vérifications à effectuer, la correction envisageable et la preuve qui permettrait de conclure.',
          type: 'open',
          keywords: ['avoir', 'dossier', 'virement', 'déclaration', 'TVA', 'lettrage', 'écriture'],
          explanation:
            'Vérifications : confirmer l’émission et l’envoi de l’avoir (dossier facturation : AV-2024-0389, séquentiel, référençant FV-2024-0618) ; vérifier le montant du virement reçu (19 877,00 = 21 354,00 − 1 477,00 : le client a payé le net — et son libellé le dit) ; contrôler la déclaration TVA de juin (l’avoir n’y figure pas : TVA collectée surévaluée de 77,00 €). Correction : enregistrer l’avoir — débit 701000 Ventes de produits finis 1 400,00 € ; débit 445710 TVA collectée 77,00 € ; crédit 411CL-15 1 477,00 € — puis lettrage à trois : FV-2024-0618 + AV-2024-0389 + RG-2024-0715 (21 354,00 − 1 477,00 − 19 877,00 = 0) : le compte passe à zéro et est apuré ; régulariser la TVA sur la déclaration en cours. Preuve pour conclure : la pièce d’avoir numérotée référençant la facture + l’avis de virement de 19 877,00 € + la trace d’envoi de l’avoir au client. La régularisation complète — écrite, validée, lettrée — est l’objet de l’exercice suivant.',
        },
        {
          id: 'danone-m4-ex3-q5',
          question: 'FO-09 Papier & Logistique : quelles sont les causes plausibles de l’écart de 0,35 € ?',
          type: 'mcq',
          options: [
            'Un escompte de règlement déduit au paiement mais non comptabilisé — ou, si le règlement était en devises, un écart de change : dans tous les cas, un écart de règlement à solder par écriture dédiée',
            'Une erreur de taux de TVA sur la facture',
            'Des frais de port facturés deux fois',
            'Une pénalité de retard que le fournisseur a retenue sur le virement',
          ],
          expected: '0',
          explanation:
            'Le virement (1 068,13) est inférieur à la facture (1 068,48) : l’entreprise a payé moins que le dû, en le référençant pourtant à la facture. Causes classiques d’un tel reliquat : escompte pour règlement rapide (souvent non stipulé sur la facture mais prévu au contrat, déduit de facto), écart de change si le règlement était en devises, retenue bancaire, ou simple erreur de saisie du montant. Les autres options tombent sur des contradictions internes : la TVA est exacte (890,40 × 1,20 = 1 068,48), des frais de port doublés auraient AUGMENTÉ la facture, et une pénalité de retard serait facturée en plus — donc un dû supérieur, pas inférieur. Un écart de 0,35 € paraît dérisoire ; il ne l’est pas : il bloque le lettrage, il se multiplie si la cause est systémique (escompte appliqué à chaque commande), et il signale un paramétrage ou un contrat mal intégré.',
        },
        {
          id: 'danone-m4-ex3-q6',
          question: 'FO-09 : quelles vérifications effectuerez-vous pour trancher, quelle correction envisager, et avec quelle preuve ?',
          type: 'open',
          keywords: ['contrat', 'escompte', 'bordereau', 'relevé', 'écriture', 'lettrage'],
          explanation:
            'Vérifications : lire le contrat et ses conditions d’escompte (taux, conditions de délai — le bordereau de virement montre un paiement à 35 jours : sous 30 ?) ; contrôler le bordereau (le montant réellement débité est bien 1 068,13) ; demander le relevé de compte fournisseur : s’il considère le compte soldé, l’écart est un escompte accordé ; s’il réclame 0,35, c’est qu’il n’en a jamais entendu parler — et la différence se traite avec lui ; en cas de règlement en devises, recalculer au cours du jour du règlement. Correction : solder l’écart par écriture dédiée — débit 401FO-09 0,35 € / crédit 765 Escomptes obtenus (ou, pour un règlement en devises, crédit 758 Différences sur règlements en devises) — puis lettrage complémentaire : la facture, le virement et l’écriture d’écart se lettrent ensemble et le compte est apuré. Preuve : le relevé de compte fournisseur soldé + les conditions contractuelles écrites + le bordereau de virement. Et si l’on découvre que l’escompte a été déduit sur d’autres factures : dénombrer, chiffrer le cumul et corriger systématiquement — un centime isolé est une anomalie, des centimes répétés sont une faille.',
        },
        {
          id: 'danone-m4-ex3-q7',
          question: 'CL-07 Restaurant Scolaire Vaugelas : que révèle le détail des lettres A, B et C ?',
          type: 'mcq',
          options: [
            'Un lettrage croisé incohérent : des règlements lettrés entre eux (lettre B) ou isolément (lettre C), alors qu’ils correspondent exactement à la facture de mai restée sans aucune lettre',
            'Le client a payé deux fois la même facture',
            'La facture de juin a été annulée par un avoir',
            'Le solde de 3 460,00 € est faux et devrait être nul',
          ],
          expected: '0',
          explanation:
            'Deux lettres sont structurellement impossibles : la lettre B associe deux règlements (6 380,00 + 4 000,00 = 10 380,00 au crédit) sans aucune facture ; la lettre C isole un règlement (2 000,00) qui n’apparie rien. Une lettre légitime groupe des écritures de sens opposés qui s’équilibrent. Or 6 380,00 + 4 000,00 + 2 000,00 = 12 380,00 : exactement la facture de mai (FV-2024-0552), restée non lettrée alors qu’elle est la plus ancienne. C’est le lettrage croisé typique des règlements partiels répétés mal affectés : le comptable (ou l’automatique mal paramétré) a apparié « au global », sans suivre les libellés des avis de virement (« solde mai », « acompte juin »). Le solde global, lui, est correct (21 840,00 − 18 380,00 = 3 460,00) : pas de double paiement, pas d’avoir — mais l’affectation fausse détruit la traçabilité par facture, donc les relances ciblées, les pénalités de retard et toute défense en litige.',
        },
        {
          id: 'danone-m4-ex3-q8',
          question: 'CL-07 : décrivez la correction à mettre en œuvre, les vérifications préalables et la preuve à conserver.',
          type: 'open',
          keywords: ['délettrage', 'lettrage', 'avis de virement', 'libellé', 'facture', 'reliquat'],
          explanation:
            'Vérifications préalables : relire les avis de virement (les libellés « solde mai », « acompte juin » existent et tranchent) ; vérifier la chronologie (la facture de mai, la plus ancienne, ne peut rester ouverte pendant que des règlements s’apparient entre eux) ; confirmer l’échéancier du client s’il subsiste un doute sur l’affectation des acomptes. Correction : délettrer les lettres B et C, puis re-lettrer — lettre unique soldante : FV-2024-0552 + RG-2024-0731 + RG-2024-0830 + RG-2024-0841 (12 380,00 = 12 380,00) ; et FV-2024-0631 + RG-2024-0630 en lettrage partiel, laissant le reliquat réel de 3 460,00 € à recouvrer. Aucune écriture nouvelle : le solde est inchangé, seule l’affectation se corrige — c’est la spécificité du lettrage correctif. Preuve : les avis de virement conservés (libellés), l’historique avant/après du lettrage (le délettrage doit rester tracé dans le logiciel ou le dossier) et, si demande, la confirmation du client sur son échéancier. Prévention : paramétrer le lettrage automatique sur la référence facture des libellés plutôt que sur le montant seul — et contrôler par sondage les propositions du logiciel.',
        },
        {
          id: 'danone-m4-ex3-q9',
          question: 'Que s’est-il très probablement produit entre CL-17 et CL-18 ?',
          type: 'mcq',
          options: [
            'Le virement reçu pour la facture FV-2024-0785 (compte CL-17) a été saisi sur le compte voisin CL-18 (suffixe différent), puis lettré avec les factures de l’agence — la coïncidence 4 913,25 + 1 344,75 = 6 258,00 ayant masqué l’erreur',
            'Le client a réglé deux fois la même livraison',
            'La facture FV-2024-0785 a été annulée par un avoir',
            'Les deux comptes doivent être fusionnés car le client est unique',
          ],
          expected: '0',
          explanation:
            'Le libellé du virement du 02/08 (« réf. FV-2024-0785 ») désigne la facture du compte CL-17 — aucune pièce du compte CL-18 ne porte ce numéro. Le règlement a donc été saisi sur le mauvais compte auxiliaire (deux intitulés quasi identiques, suffixe « Bourgogne » en plus), puis le lettrage l’a apparié aux factures ouvertes de l’agence, dont le total égale par coïncidence le montant du virement (4 913,25 + 1 344,75 = 6 258,00) : le compte CL-18 « tombe à zéro », lettré et apuré en apparence — l’anomalie se cache derrière un solde parfait. Conséquences symétriques : deux relances envoyées pour une facture déjà réglée (risque relationnel réel avec un bon client) et deux factures réellement dues (celles de l’agence) qui dorment en « soldées ». La fusion des comptes n’est pas la réponse : deux entités distinctes du groupe client, deux comptes légitimes — le problème est la saisie et le nommage, pas l’existence des comptes.',
        },
        {
          id: 'danone-m4-ex3-q10',
          question: 'CL-17 / CL-18 : décrivez les vérifications, la correction envisageable et la preuve qui permettrait de conclure.',
          type: 'open',
          keywords: ['avis de virement', 'banque', 'délettrage', 'auxiliaire', 'relance', 'imputation'],
          explanation:
            'Vérifications : l’avis de virement (référence FV-2024-0785 : une pièce du compte CL-17, reçu et encaissé une seule fois — le relevé bancaire ne montre qu’un crédit de 6 258,00 €) ; la confirmation écrite du client (à quelle entité destinait-il ce paiement ?) ; l’historique des commandes et livraisons par entité (les factures de l’agence correspondent à des livraisons réelles de l’agence). Correction : délettrer la lettre L sur CL-18 ; enregistrer le transfert du règlement entre auxiliaires — débit 411CL-18 6 258,00 € / crédit 411CL-17 6 258,00 € (éventuellement via un compte de passage 471 si la correction s’étale sur deux journées) ; lettrer sur CL-17 le virement avec FV-2024-0785 : compte apuré, relances à stopper (et à présent excusées auprès du client) ; les factures de CL-18 (4 913,25 + 1 344,75) redeviennent dues et suivent l’échéancier. Observation précieuse pour l’entretien : le total clients est inchangé (6 258,00 € débiteurs avant et après) — seule l’affectation change ; mais c’est elle qui pilote relances et litiges. Preuve : le libellé du virement + la réponse du client + la traçabilité du délettrage et du re-lettrage. Prévention : rendre la référence facture obligatoire dans les libellés et alerter quand un règlement référence une pièce d’un autre compte auxiliaire.',
        },
      ],
      solutionSummary:
        'Les cinq incohérences de la fiche, découvertes dans les grands livres : (1) FO-01 — double exécution du même virement (1 224,80 €, référence VIR-88412), la seconde lettrée sur les factures d’août (648,00 + 576,80) : compte soldé mais décaissement indû dans son principe, à régulariser avec le fournisseur ; (2) CL-15 — avoir AV-2024-0389 (TTC 1 477,00 €, TVA 5,5 %) émis mais jamais comptabilisé, le client ayant payé le net : créance résiduelle fictive et TVA surévaluée de 77,00 € ; (3) FO-09 — écart de règlement de 0,35 € (escompte probable non comptabilisé) jamais soldé ; (4) CL-07 — lettrage croisé : trois règlements (6 380,00 + 4 000,00 + 2 000,00 = 12 380,00) lettrés entre eux ou isolément au lieu de solder la facture de mai, avec deux lettres structurellement impossibles ; (5) CL-17/CL-18 — virement de 6 258,00 € référençant FV-2024-0785 mais saisi sur le compte à suffixe et lettré sur les factures de l’agence (coïncidence arithmétique parfaite) : relances envoyées à tort, créances réelles masquées. Fils conducteurs : le solde équilibré ne prouve rien, une lettre doit grouper des sens opposés qui s’équilibrent, et chaque correction passe par le délettrage tracé avant toute écriture.',
      interviewTips: [
        'Retenez la maxime de l’exercice : « le solde dit combien, le lettrage dit pourquoi » — deux comptes soldés ici cachent des anomalies opposées.',
        'Pour chaque incohérence, entraînez-vous à la raconter en trois temps : le symptôme vu au grand livre, la preuve qui tranche, la correction tracée.',
      ],
    },
    {
      id: 'danone-m4-ex4',
      title: 'La régularisation documentée',
      cycle: 'Clients / Fournisseurs',
      context:
        'Cinq incohérences identifiées : reste à les corriger de façon défendable. Le responsable comptable veut un modèle écrit — chaque régularisation doit laisser une trace exploitable en clôture et en audit, même par quelqu’un qui n’a pas fait le travail. Vous rédigez la régularisation type sur le premier cas corrigé : l’avoir non comptabilisé de CL-15 Hôtel des Trois Pigeons. Rappel des faits : facture FV-2024-0618 du 28/06/2024 (21 354,00 € TTC), avoir AV-2024-0389 du 30/06/2024 émis mais non saisi (HT 1 400,00 €, TVA 5,5 % = 77,00 €, TTC 1 477,00 €), virement du client le 15/07/2024 pour le net (19 877,00 €), solde résiduel de 1 477,00 € découvert le 30/09/2024 lors de l’atelier. Scénario fictif.',
      risks: ['Écriture non justifiée', 'Correction non validée', 'Lettrage non rectifié'],
      documents: [],
      questions: [
        {
          id: 'danone-m4-ex4-q1',
          question: 'Rédigez le canevas de la note de régularisation type : rubriques indispensables (constat, écriture, justificatif, validation, lettrage correctif, date) et contenu de chacune sur le cas CL-15.',
          type: 'open',
          keywords: ['constat', 'écriture', 'justificatif', 'validation', 'lettrage', 'correctif', 'date'],
          explanation:
            'Modèle de note (canevas réutilisable pour les cinq incohérences). 1. Constat : quoi — avoir AV-2024-0389 (retour produits, TTC 1 477,00 €) émis le 30/06/2024 et non comptabilisé ; où — compte client CL-15 Hôtel des Trois Pigeons ; comment découvert — atelier d’apurement du 30/09/2024, résidu égal au TTC de l’avoir et virement libellé « solde net après avoir » ; conséquences — créance surévaluée de 1 477,00 €, TVA collectée surévaluée de 77,00 € sur juin. 2. Écriture : débit 701000 1 400,00 € ; débit 445710 77,00 € ; crédit 411CL-15 1 477,00 € — journal des ventes, libellé explicite « Avoir AV-2024-0389 / facture FV-2024-0618 — saisie omise », référence de la pièce jointe. 3. Justificatif : copie de l’avoir, avis de virement de 19 877,00 €, détail du calcul du net. 4. Validation : visa du responsable comptable avant saisie (l’omission était une erreur, la correction est un acte contrôlé). 5. Lettrage correctif : délettrage éventuel de la lettre A partielle, puis lettrage à trois — FV-2024-0618 + AV-2024-0389 + RG-2024-0715 → solde 0,00 €, compte apuré. 6. Date : écriture datée du jour de la découverte (30/09/2024), rattachée à la pièce d’origine du 30/06/2024, incidence TVA (77,00 €) régularisée sur la déclaration en cours. Post-scriptum de rigueur : la note finit par la cause racine (transfert facturation → comptabilité sans double contrôle) et la prévention proposée.',
        },
        {
          id: 'danone-m4-ex4-q2',
          question: 'Quelle est l’écriture de régularisation correcte pour l’avoir non comptabilisé de CL-15 ?',
          type: 'mcq',
          options: [
            'Débit 701000 Ventes de produits finis 1 400,00 € ; débit 445710 TVA collectée 77,00 € ; crédit 411CL-15 Hôtel des Trois Pigeons 1 477,00 €',
            'Crédit 701000 Ventes de produits finis 1 400,00 € ; crédit 445710 TVA collectée 77,00 € ; débit 411CL-15 Hôtel des Trois Pigeons 1 477,00 €',
            'Débit 601000 Achats de matières premières 1 400,00 € ; débit 445660 TVA déductible 77,00 € ; crédit 401FO 1 477,00 €',
            'Débit 411CL-15 Hôtel des Trois Pigeons 1 477,00 € ; crédit 512000 Banque 1 477,00 €',
          ],
          expected: '0',
          explanation:
            'Un avoir client se comptabilise en sens inverse de la facture d’origine : le produit est débité (la vente se réduit de 1 400,00 € HT), la TVA collectée est débitée (elle quitte la dette fiscale de 77,00 €) et la créance client est créditée (le client nous doit 1 477,00 € de moins). L’option 2 refait une facture ; l’option 3 traite le client comme un fournisseur (601/445660/401) ; l’option 4 rembourse le client par banque — or il a déjà payé le net : il ne s’agit pas de lui rendre de l’argent mais de réduire la créance résiduelle fictive. Après saisie : lettrage à trois (facture + avoir + virement), solde nul, compte apuré — et 77,00 € de TVA à régulariser sur la déclaration en cours.',
        },
        {
          id: 'danone-m4-ex4-q3',
          question: 'Quel est le montant de l’écriture au compte client 411CL-15 (crédit porté au compte auxiliaire) ?',
          type: 'numeric',
          expected: 1477,
          explanation:
            'L’avoir porte au crédit du compte client son TTC : 1 400,00 + 77,00 = 1 477,00 €. Contrôle de cohérence avec le lettrage à trois qui suit : 21 354,00 (facture) − 1 477,00 (avoir) − 19 877,00 (virement) = 0,00 € — le compte est apuré au centime près, ce qui est aussi la preuve arithmétique que le montant de l’écriture est le bon.',
        },
      ],
      solutionSummary:
        'La régularisation type tient en six rubriques : constat (quoi, où, comment découvert, conséquences chiffrées), écriture (comptes, sens, montants, libellé référencé), justificatif (pièces jointes), validation (visa du responsable avant saisie), lettrage correctif (délettrage éventuel puis lettrage à trois : facture + avoir + virement) et date (jour de la découverte, rattachement à la pièce d’origine, incidence TVA). Sur le cas CL-15 : débit 701000 1 400,00 € / débit 445710 77,00 € / crédit 411CL-15 1 477,00 €, TVA 5,5 % (denrées alimentaires), puis apurement au centime (21 354,00 − 1 477,00 − 19 877,00 = 0,00). Une correction non documentée, non validée ou non datée reste une anomalie de contrôle interne — c’est la documentation qui transforme l’erreur corrigée en apprentissage organisé, et la même trame s’applique aux quatre autres incohérences de la mission.',
      interviewTips: [
        'Présentez la régularisation comme un dossier autonome : « quelqu’un qui n’a pas fait le travail doit pouvoir la comprendre et la valider ».',
        'La date et la validation font partie de la correction, pas des annexes : une écriture juste mais non validée reste une anomalie.',
      ],
    },
  ],
  interviewQuestions: [
    { question: 'C’est quoi exactement le lettrage, en une phrase ?', expected: 'Le rattachement tracé de chaque règlement à la facture — ou aux factures — qu’il solde, à l’intérieur du compte auxiliaire du tiers, par un marqueur commun. But : transformer un solde brut en solde justifié, ligne par ligne.', hint: 'Commencez par la définition une phrase, puis l’exemple.' },
    { question: 'Quelle différence faites-vous entre lettrage et apurement ?', expected: 'Le lettrage est la technique d’appariement (règlement ↔ facture). L’apurement est l’exigence de résultat : tout apparié ET tous les résidus traités ou motivés — écarts soldés, avoirs imputés, règlements non affectés identifiés. Un compte peut être lettré partiellement sans être apuré ; apuré, il est défendable en clôture.' },
    { question: 'Que faites-vous devant un fournisseur débiteur ?', expected: 'Je ne préjuge pas : un sens inversé est une alerte, pas un diagnostic. Causes possibles : trop-payé, double paiement, avoir à recevoir, facture annulée après règlement. Je vérifie (relevé de compte fournisseur, banque, dossier), puis je corrige : imputation sur factures à venir, demande de remboursement, ou compensation avec l’avoir attendu — et je fais durer le suivi jusqu’à résolution.' },
    { question: 'Un client créditeur, c’est normal ?', expected: 'Ce n’est pas anormal en soi — acompte sur commande, avance, trop-perçu, avoir supérieur au solde — mais c’est à justifier et à affecter rapidement : un crédit client qui dort est une dette mal identifiée et un litige en réserve. Je remonte à l’origine (avis de virement, commande) et j’affecte ou je régularise.', hint: 'Distinguez « normal » et « à laisser dormir ».' },
    { question: 'Comment traitez-vous un écart de règlement de quelques centimes ?', expected: 'Je le chiffre, je cherche sa cause (escompte contractuel non comptabilisé, écart de change, frais bancaires, erreur), je le solde par écriture dédiée — 765/758 côté dettes, 665/668 côté créances selon le cas — puis lettrage complémentaire. Jamais je ne le laisse bloquer le lettrage ; jamais je ne le compense sans le documenter. Et je vérifie s’il est systémique : des centimes répétés, c’est une faille de paramétrage.' },
    { question: 'Lettrage automatique ou manuel — que défendez-vous ?', expected: 'Les deux, à leur place : l’automatique (clés référence/montant/date) absorbe le volume courant ; le manuel tranche les cas d’espèce — règlements partiels, écarts, libellés muets, comptes homonymes. Le logiciel équilibre, il n’explique pas : je contrôle les propositions avant validation, et le paramétrage lui-même se révise (une clé « montant seul » fabrique des lettrages croisés).' },
    { question: 'Pourquoi un compte soldé peut-il être mal lettré ?', expected: 'Parce que l’équilibre du solde ne prouve pas la justesse de l’affectation : un règlement imputé sur les mauvaises factures, des règlements lettrés entre eux, ou une compensation d’erreurs symétriques laissent le compte à zéro avec une traçabilité fausse. Le contrôle se fait lettre par lettre — équilibre, sens opposés, chronologie, concordance avec les libellés — pas au solde global.' },
    { question: 'Quel est le lien entre ancienneté et dépréciation ?', expected: 'La balance auxiliaire vieillie alimente les dépréciations de créances : plus une créance est ancienne, plus le risque d’irrécouvrabilité monte, et la provision suit la politique interne par tranches. Mais l’ancienneté n’est fiable que si le lettrage l’est : un compte non lettré peut cacher une créance déjà payée comme une créance perdue — le lettrage conditionne la qualité de la provision.' },
    { question: 'Que documentez-vous quand vous corrigez un lettrage ?', expected: 'Le délettrage et le re-lettrage tracés (jamais de modification en place), l’écriture éventuelle avec libellé référencé, le motif, les pièces justificatives, le visa du responsable et les dates. L’objectif : un auditeur — ou un collègue — doit reconstituer la correction sans moi. La correction d’une anomalie est elle-même une opération auditable.' },
    { question: 'En audit, comment vérifiez-vous le lettrage d’un compte tiers ?', expected: 'Sur un échantillon orienté risque (anciens, sens inversés, montants significatifs) : revue des lettres (équilibre, sens, chronologie), rapprochement avec les relevés de compte du tiers ou confirmations directes, et contrôle de cut-off des règlements en fin de période. Je cherche les soldes « trop parfaits » autant que les soldes brouillons : les deux peuvent cacher des affectations fausses.' },
  ],
  followUps: [
    { question: 'Le client CL-22 (940,00 € non lettrés depuis 16 mois) est injoignable : quelle suite ?', expected: 'Relances formelles datées (courrier simple, recommandé), escalade au responsable puis au plateau contentieux ; évaluation de la dépréciation selon la politique interne (tranches d’ancienneté) et, au terme, traitement de créance irrécouvrable documenté. Chaque étape reste tracée : une créance ancienne se pilote, elle ne s’abandonne pas — et le lettrage, en cours de route, sert à prouver ce qui reste réellement dû.' },
    { question: 'Le fournisseur FO-12 refuse de rembourser le trop-payé de 1 488,00 € : que faites-vous ?', expected: 'D’abord vérifier qu’il n’existe pas de factures à venir sur lesquelles imputer (solution la plus propre), sinon négocier un avoir, puis le cas échéant mise en demeure et provision pour risque ; escalade à la direction avec le dossier complet. Le compte reste débiteur, daté et tracé : un trop-payé non restitué est une créance comme une autre — elle se suit, elle ne s’efface pas.' },
    { question: 'Vous constatez que le lettrage automatique multiplie les lettrages croisés : réaction ?', expected: 'Quantifier d’abord (échantillon de comptes, taux d’affectations erronées), corriger les cas (délettrage/re-lettrage documentés), reparamétrer la clé de rapprochement (référence facture prioritaire sur le montant), instaurer un contrôle par sondage mensuel des propositions — et remonter la faille de procédure à la direction avec responsable et délai : c’est exactement le type de signal que la fiche demande de documenter.' },
    { question: 'La direction veut tout apurer en trois jours avant la clôture : vous exécutez ?', expected: 'Je priorise, je n’accélère pas au détriment de la preuve : sens inversés et anciens > 12 mois d’abord, montants significatifs ensuite. Ce qui ne peut être traité à temps reste ouvert AVEC justification datée et plan de résolution — apurer ne veut pas dire masquer. Un compte soldé à tort pour respecter un délai fabrique l’anomalie de l’exercice suivant.' },
    { question: 'Un écart de 0,35 € sur soixante comptes : vous passez soixante écritures ?', expected: 'D’abord analyser : si la cause est unique et systémique (escompte déduit à chaque règlement sans écriture), une écriture groupée justifiée par note de calcul + correction du paramétrage est plus saine que soixante saisies manuelles. Si les causes sont dispersées, je traite avec un seuil de tolérance POSÉ PAR ÉCRIT avec le responsable — jamais un seuil implicite. Dans tous les cas, la cause racine est corrigée : le symptôme ne doit pas revenir.' },
    { question: 'Un virement de 6 258,00 € arrive d’un client inconnu, sans libellé exploitable : que faites-vous ?', expected: 'Il ne va pas « quelque part » au hasard : compte d’attente (471) daté et tracé, puis recherche active de l’origine — avis de virement bancaire (donneur d’ordre), service commercial (commande en cours ?), rapprochement avec les factures récentes et les comptes homonymes. Affectation rapide au bon auxiliaire puis lettrage ; si l’origine reste obscure, confirmation directe du donneur d’ordre. L’attente doit être courte : un compte 471 qui vieillit est un règlement non affecté de plus.' },
  ],
  evaluation: {
    criteria: [
      { label: 'Vocabulaire du lettrage', description: 'Distingue sans les confondre lettrage, apurement, règlement partiel, écart de règlement, avoir non imputé, règlement non affecté, délettrage.' },
      { label: 'Lecture de balance vieillie', description: 'Trie les 45 comptes par statut, ancienneté et sens du solde, et priorise selon une convention explicite plutôt qu’à l’intuition.' },
      { label: 'Revue de grand livre auxiliaire', description: 'Contrôle les lettres une à une : équilibre du groupe, sens opposés, présence d’une facture, chronologie, concordance avec les libellés des règlements.' },
      { label: 'Diagnostic des incohérences', description: 'Identifie les cinq familles : double règlement, avoir non imputé, écart non soldé, lettrage croisé, règlement sur le mauvais compte auxiliaire — et chiffre chacune.' },
      { label: 'Correction documentée', description: 'Rédige la régularisation complète : constat, écriture (sens et comptes exacts, TVA à 5,5 % / 20 %), justificatif, validation, lettrage correctif, date.' },
      { label: 'Contrôle par la preuve', description: 'Recherche la source qui tranche (relevé de compte, banque, confirmation du tiers) avant de conclure, et remonte les causes racines plutôt que de traiter les symptômes.' },
    ],
  },
}
