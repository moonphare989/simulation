// =====================================================================
// AuditLab — Notes de référence : sources institutionnelles françaises,
// marocaines et internationales à citer en entretien PFE.
// Règle d'honnêteté :
//  • chaque note porte dans `verification` le statut réel de la source
//    (référence stable avec numéro / institution, ou point révisable) ;
//  • aucune URL précise n'est inventée : seules les racines de domaines
//    institutionnels dont l'existence est certaine figurent
//    (legifrance.gouv.fr, anc.fr, cncc.fr, ifrs.org, ifac.org,
//    cnil.fr, amf-france.org) ; partout ailleurs, l'institution et la
//    voie d'accès (recherche sur le site) sont indiquées ;
//  • tous les montants, taux et seuils susceptibles d'être révisés par
//    décret sont signalés comme « à vérifier dans le texte en vigueur ».
//  Aucune source fabriquée : vérifié conception 2025 — reconfirmer
//  avant usage.
// =====================================================================

export interface ReferenceNote {
  id: string
  title: string
  domain: string
  summary: string
  referentiel: string
  authority: string
  obligatory: 'obligatoire' | 'bonne pratique' | 'pédagogique'
  verification: string
}

export const referenceNotes: ReferenceNote[] = [
  // -----------------------------------------------------------------
  // Audit & commissariat aux comptes
  // -----------------------------------------------------------------
  {
    id: 'ref-audit-01',
    title: 'Commissaire aux comptes — code de commerce, L. 821-1 et suivants',
    domain: 'Audit & commissariat aux comptes',
    summary:
      'Base légale du commissariat aux comptes français : désignation obligatoire selon la forme sociale et les seuils, inscription sur la liste officielle, mission légale de certification des comptes annuels et consolidés, signalement des irrégularités et révélation des faits délictueux. Articles structurants à connaître de nom : L. 821-1 (institution du CAC), L. 822-11 (durée du mandat et rotation), L. 823-9 (mission), L. 823-12 (révélation des faits délictueux).',
    referentiel: 'Code de commerce (France)',
    authority: 'Légifrance — accès : legifrance.gouv.fr (recherche « code de commerce L821 »)',
    obligatory: 'obligatoire',
    verification:
      'Référence stable vérifiable (numéros d\u2019articles du code de commerce / Légifrance) — à reconfirmer dans le texte en vigueur avant l\u2019entretien. Vérifié conception 2025 — reconfirmer avant usage.',
  },
  {
    id: 'ref-audit-02',
    title: 'H3C — Haut conseil du commissariat aux comptes',
    domain: 'Audit & commissariat aux comptes',
    summary:
      'Autorité de régulation de la profession de commissaire aux comptes (créée par ordonnance n° 2016-1635 du 1er décembre 2016) : police de la profession (inscription, contrôle des dossiers, sanctions), suivi de l\u2019indépendance et élaboration des normes d\u2019exercice professionnel avant homologation par arrêté du ministre de la Justice. En entretien : citer le H3C comme régulateur, distinct de la CNCC (organisme professionnel).',
    referentiel: 'Régulation de l\u2019audit légal (France)',
    authority: 'H3C — site officiel à rechercher (« Haut conseil du commissariat aux comptes ») ; textes sur legifrance.gouv.fr',
    obligatory: 'obligatoire',
    verification:
      'Point dépendant d\u2019un texte révisable — vérifier la version en vigueur (l\u2019organisation de la régulation de la profession a connu des réformes récentes, la répartition des pouvoirs et l\u2019intitulé des organismes doivent être reconfirmés). Vérifié conception 2025 — reconfirmer avant usage.',
  },
  {
    id: 'ref-audit-03',
    title: 'NEP — normes d\u2019exercice professionnel (homologation par arrêté)',
    domain: 'Audit & commissariat aux comptes',
    summary:
      'Les normes d\u2019exercice professionnel applicables au CAC sont homologuées par arrêtés du ministre de la Justice (publiés au Journal officiel, puis consolidés) ; la CNCC publie la version consolidée et des guides d\u2019application. Numéros utiles : NEP 200 (acceptation), 315 (compréhension de l\u2019entité), 320 (seuil de signification), 330 (réponses aux risques), 500 (éléments probants), 505 (confirmations externes), 530 (échantillonnage), 540 (estimations), 700 (rapport).',
    referentiel: 'NEP (France)',
    authority: 'Arrêtés d\u2019homologation + CNCC — accès : cncc.fr (rubrique normes / textes) et legifrance.gouv.fr (arrêtés)',
    obligatory: 'obligatoire',
    verification:
      'Référence stable vérifiable (institution CNCC / arrêtés d\u2019homologation au JO) — à reconfirmer dans le texte en vigueur avant l\u2019entretien : consulter la version consolidée des NEP plutôt que les arrêtés d\u2019origine. Vérifié conception 2025 — reconfirmer avant usage.',
  },
  {
    id: 'ref-audit-04',
    title: 'CNCC — Compagnie nationale des commissaires aux comptes',
    domain: 'Audit & commissariat aux comptes',
    summary:
      'Organisme professionnel fédérant les CAC : publication des normes consolidées, guides méthodologiques, études sectorielles et réponse aux questions d\u2019actualité (dépôt des comptes, événements postérieurs à la clôture, audit des groupes). Source de « bonnes pratiques » citables en entretien pour montrer une culture professionnelle, en plus des textes normatifs.',
    referentiel: 'Audit légal (France)',
    authority: 'CNCC — accès : cncc.fr (publications et guides professionnels)',
    obligatory: 'bonne pratique',
    verification:
      'Référence stable vérifiable (institution CNCC) — à reconfirmer dans le texte en vigueur avant l\u2019entretien (les guides sont actualisés régulièrement). Vérifié conception 2025 — reconfirmer avant usage.',
  },
  {
    id: 'ref-audit-05',
    title: 'Code de déontologie des commissaires aux comptes',
    domain: 'Audit & commissariat aux comptes',
    summary:
      'Recodifié par décret (notamment décret n° 2020-292 du 21 mars 2020 portant code de déontologie des commissaires aux comptes) : principes d\u2019indépendance, d\u2019intégrité et d\u2019objectivité, incompatibilités (conseil, tenue de comptabilité, mandats), honoraires, publicité encadrée. À citer sur toute question « indépendance / conflit d\u2019intérêts », avec le H3C comme contrôleur.',
    referentiel: 'Déontologie (France)',
    authority: 'Décret codifié — accès : legifrance.gouv.fr (recherche « code de déontologie commissaires aux comptes »)',
    obligatory: 'obligatoire',
    verification:
      'Référence stable vérifiable (numéro de décret / Légifrance) — à reconfirmer dans le texte en vigueur avant l\u2019entretien (le code a été recodifié et peut évoluer). Vérifié conception 2025 — reconfirmer avant usage.',
  },
  {
    id: 'ref-audit-06',
    title: 'Rotation et indépendance du CAC — code de commerce, L. 822-11 et suivants',
    domain: 'Audit & commissariat aux comptes',
    summary:
      'Encadrement légal de la durée des mandats et de la rotation des commissaires (six exercices selon les catégories d\u2019entités, avec renouvellement encadré et rotation du signataire dans les groupes), complété par les règles d\u2019incompatibilités du code de déontologie. Question d\u2019entretien fréquente : « pourquoi 6 ans ? comment préserve-t-on l\u2019indépendance perçue ? ».',
    referentiel: 'Code de commerce (France)',
    authority: 'Légifrance — accès : legifrance.gouv.fr (articles L. 822-11 s. du code de commerce)',
    obligatory: 'obligatoire',
    verification:
      'Point dépendant d\u2019un texte révisable — vérifier la version en vigueur (les règles de durée et de rotation ont été modifiées par des lois successives, dont la loi PACTE). Vérifié conception 2025 — reconfirmer avant usage.',
  },
  {
    id: 'ref-audit-07',
    title: 'ISA / IAASB — normes internationales d\u2019audit (IFAC)',
    domain: 'Audit & commissariat aux comptes',
    summary:
      'Normes internationales d\u2019audit (ISA) émises par l\u2019IAASB, comité dépendant de l\u2019IFAC : cadre mondial de l\u2019audit d\u2019états financiers, source d\u2019inspiration directe des NEP françaises. La famille ISAE (dont ISAE 3000) couvre les autres missions d\u2019assurance (revue limitée, attestation). En France, la mission légale suit les NEP : citer ISA comme référence internationale, pas comme texte applicable.',
    referentiel: 'ISA (international)',
    authority: 'IFAC / IAASB — accès : ifac.org (rubrique IAASB) et iaasb.org',
    obligatory: 'bonne pratique',
    verification:
      'Référence stable vérifiable (institution IFAC/IAASB, domaines racine) — à reconfirmer dans le texte en vigueur avant l\u2019entretien (les ISA sont révisées périodiquement). Vérifié conception 2025 — reconfirmer avant usage.',
  },

  // -----------------------------------------------------------------
  // Comptabilité & normalisation
  // -----------------------------------------------------------------
  {
    id: 'ref-compta-01',
    title: 'PCG — règlement ANC n° 2014-03 (PCG 2014 et modifications)',
    domain: 'Comptabilité & normalisation',
    summary:
      'Le plan comptable général est fixé par règlement de l\u2019Autorité des normes comptables (règlement ANC n° 2014-03 du 5 juin 2014, dit « PCG 2014 », modifié par des règlements ultérieurs) : plan de comptes, documents de synthèse, principes comptables, comptes de régularisation. En entretien : citer l\u2019ANC comme source, et le règlement par son numéro, en précisant qu\u2019il faut toujours consulter la version consolidée en vigueur.',
    referentiel: 'PCG (France)',
    authority: 'ANC — accès : anc.fr (règlements, textes consolidés) ; arrêtés d\u2019approbation sur legifrance.gouv.fr',
    obligatory: 'obligatoire',
    verification:
      'Référence stable vérifiable (n° de règlement ANC 2014-03 / institution ANC) — à reconfirmer dans le texte en vigueur avant l\u2019entretien (règlements modificatifs successifs). Vérifié conception 2025 — reconfirmer avant usage.',
  },
  {
    id: 'ref-compta-02',
    title: 'Obligation comptable du commerçant — code de commerce, L. 123-12 / L. 123-13',
    domain: 'Comptabilité & normalisation',
    summary:
      'Toute personne physique ou morale ayant la qualité de commerçant doit tenir une comptabilité : enregistrement chronologique des mouvements affectant son patrimoine, livre-journal, grand livre, inventaire périodique et documents de synthèse. Articles fondateurs à citer de mémoire, complétés par les règles de forme du PCG.',
    referentiel: 'Code de commerce (France)',
    authority: 'Légifrance — accès : legifrance.gouv.fr (articles L. 123-12 et s. du code de commerce)',
    obligatory: 'obligatoire',
    verification:
      'Référence stable vérifiable (numéros d\u2019articles du code de commerce / Légifrance) — à reconfirmer dans le texte en vigueur avant l\u2019entretien. Vérifié conception 2025 — reconfirmer avant usage.',
  },
  {
    id: 'ref-compta-03',
    title: 'Conservation des documents comptables 10 ans — code de commerce, L. 123-22',
    domain: 'Comptabilité & normalisation',
    summary:
      'Les documents comptables et les pièces justificatives sont conservés dix ans. Le même article encadre la valeur probante des documents établis sur support informatique et la capacité de restituer les données (piste d\u2019audit). À articuler avec la règle fiscale de conservation (LPF, six ans) : le délai commercial de dix ans est le plus exigeant pour la comptabilité.',
    referentiel: 'Code de commerce (France)',
    authority: 'Légifrance — accès : legifrance.gouv.fr (article L. 123-22 du code de commerce)',
    obligatory: 'obligatoire',
    verification:
      'Référence stable vérifiable (numéro d\u2019article / Légifrance) — à reconfirmer dans le texte en vigueur avant l\u2019entretien. Vérifié conception 2025 — reconfirmer avant usage.',
  },
  {
    id: 'ref-compta-04',
    title: 'IFRS Foundation / IASB — normes comptables internationales',
    domain: 'Comptabilité & normalisation',
    summary:
      'L\u2019IASB, organe de l\u2019IFRS Foundation, émet les normes IAS/IFRS et le cadre conceptuel : information utile à la décision économique, primauté de la substance sur la forme, juste valeur étendue, résultat global. Le site de l\u2019IFRS Foundation publie les normes, les profils par juridiction (jurisdiction profiles) et les analyses techniques — source primaire à citer avant tout manuel.',
    referentiel: 'IFRS (international)',
    authority: 'IFRS Foundation / IASB — accès : ifrs.org (normes, cadre conceptuel, profils par juridiction)',
    obligatory: 'bonne pratique',
    verification:
      'Référence stable vérifiable (institution IFRS Foundation / domaine racine ifrs.org) — à reconfirmer dans le texte en vigueur avant l\u2019entretien (les normes et le cadre évoluent). Vérifié conception 2025 — reconfirmer avant usage.',
  },
  {
    id: 'ref-compta-05',
    title: 'Périmètre IFRS en Europe — règlement (CE) n° 1606/2002',
    domain: 'Comptabilité & normalisation',
    summary:
      'Le règlement (CE) n° 1606/2002 impose les normes internationales (telles qu\u2019adoptées par l\u2019Union européenne) aux comptes consolidés des sociétés cotées : les IFRS ne sont PAS obligatoires pour toutes les sociétés — les comptes individuels français restent au PCG et des options existent pour certains comptes consolidés de non-cotées. Point d\u2019honnêteté technique à maîtriser en entretien : dire précisément quel périmètre est concerné.',
    referentiel: 'Droit européen / IFRS',
    authority: 'EUR-Lex — accès : recherche « règlement 1606/2002 » sur le portail de l\u2019Union européenne ; complément : ifrs.org (profils par juridiction)',
    obligatory: 'obligatoire',
    verification:
      'Référence stable vérifiable (numéro de règlement européen / EUR-Lex) — à reconfirmer dans le texte en vigueur avant l\u2019entretien (textes consolidés et amendements à vérifier). Vérifié conception 2025 — reconfirmer avant usage.',
  },
  {
    id: 'ref-compta-06',
    title: 'Comptes consolidés — code de commerce, L. 233-1 et suivants',
    domain: 'Comptabilité & normalisation',
    summary:
      'Obligation d\u2019établir des comptes consolidés pour les sociétés contrôlant d\u2019autres sociétés (définitions du contrôle et exemptions selon les seuils), base légale de la consolidation française, articulée avec les règlements comptables de consolidation et, pour les cotées, avec les IFRS. Citer l\u2019article d\u2019ouverture du dispositif suffit en entretien : L. 233-1 et suivants.',
    referentiel: 'Code de commerce (France)',
    authority: 'Légifrance — accès : legifrance.gouv.fr (articles L. 233-1 et s. du code de commerce)',
    obligatory: 'obligatoire',
    verification:
      'Référence stable vérifiable (numéros d\u2019articles / Légifrance) — à reconfirmer dans le texte en vigueur avant l\u2019entretien (seuils et définitions susceptibles d\u2019évoluer). Vérifié conception 2025 — reconfirmer avant usage.',
  },

  // -----------------------------------------------------------------
  // Fiscalité & TVA
  // -----------------------------------------------------------------
  {
    id: 'ref-fiscal-01',
    title: 'Conservation des pièces fiscales — LPF, article L. 102 B',
    domain: 'Fiscalité & TVA',
    summary:
      'Le livre des procédures fiscales impose la conservation des documents comptables exigés à toute vérification pendant six ans (et autorise leur conservation sur support informatique, sous conditions de restitution et de piste d\u2019audit). Articulation à connaître : six ans au fiscal, dix ans au commercial — c\u2019est le délai le plus long qui prime pour l\u2019archivage comptable.',
    referentiel: 'Fiscalité (France)',
    authority: 'Légifrance — accès : legifrance.gouv.fr (article L. 102 B du LPF)',
    obligatory: 'obligatoire',
    verification:
      'Référence stable vérifiable (numéro d\u2019article LPF / Légifrance) — à reconfirmer dans le texte en vigueur avant l\u2019entretien (les durées de conservation relèvent d\u2019un texte révisable). Vérifié conception 2025 — reconfirmer avant usage.',
  },
  {
    id: 'ref-fiscal-02',
    title: 'TVA française — code général des impôts',
    domain: 'Fiscalité & TVA',
    summary:
      'Le CGI encadre l\u2019assujettissement, l\u2019exigibilité (livraison des biens ; encaissement des prestations de services, option possible pour le débit), les conditions de déductibilité (facture conforme, affectation à l\u2019exploitation, exclusion express), les taux et les déclarations. Ne jamais réciter de taux en entretien sans préciser « sous réserve du texte en vigueur » : citer le CGI comme source et le mécanisme plutôt que le chiffre isolé.',
    referentiel: 'Fiscalité (France)',
    authority: 'Légifrance — accès : legifrance.gouv.fr (code général des impôts, TVA) ; doctrine sur impots.gouv.fr',
    obligatory: 'obligatoire',
    verification:
      'Point dépendant d\u2019un texte révisable — vérifier la version en vigueur (taux, régimes d\u2019exigibilité et obligations déclaratives évoluent chaque année via la loi de finances). Vérifié conception 2025 — reconfirmer avant usage.',
  },
  {
    id: 'ref-fiscal-03',
    title: 'TVA marocaine — code général des impôts (Maroc)',
    domain: 'Fiscalité & TVA',
    summary:
      'La TVA marocaine relève du code général des impôts : taux standard de 20 % et taux réduits (14 %, 10 %, 7 %) selon les biens et services, régimes des débits (facturation) ou des encaissements selon la nature des opérations et les options, déclarations mensuelles ou trimestrielles selon le seuil de chiffre d\u2019affaires. Pour un entretien France/Maroc : souligner les différences de structure des taux et d\u2019exigibilité, sans réciter les montants.',
    referentiel: 'Fiscalité (Maroc)',
    authority: 'Direction générale des impôts (Maroc) — portail officiel à rechercher (« DGI Maroc ») ; texte : code général des impôts marocain',
    obligatory: 'obligatoire',
    verification:
      'Point dépendant d\u2019un texte révisable — vérifier la version en vigueur (taux, seuils de déclaration et régimes d\u2019exigibilité fixés par les lois de finances marocaines successives). Vérifié conception 2025 — reconfirmer avant usage.',
  },

  // -----------------------------------------------------------------
  // Maroc — CGNC
  // -----------------------------------------------------------------
  {
    id: 'ref-maroc-01',
    title: 'CGNC et loi n° 9-88 — obligations comptables des commerçants (Maroc)',
    domain: 'Maroc — CGNC',
    summary:
      'La loi n° 9-88 du 30 décembre 1992 relative aux obligations comptables des commerçants institue le Code général de normalisation comptable : tenue en partie double, journal, grand livre, balance, inventaire périodique et états de synthèse ; plan comptable marocain en huit classes (classe 5 : trésorerie ; classe 8 : comptes de résultats). Référence structurante pour tout entretien portant sur le référentiel marocain.',
    referentiel: 'CGNC (Maroc)',
    authority: 'Loi 9-88 + CGNC — textes accessibles via le Conseil national de la comptabilité (Maroc) / portails officiels à rechercher ; vérifier la version consolidée',
    obligatory: 'obligatoire',
    verification:
      'Référence stable vérifiable (numéro et date de la loi 9-88 / institution) — à reconfirmer dans le texte en vigueur avant l\u2019entretien (le dispositif comptable marocain connaît des chantiers de réforme, vérifier la version consolidée du CGNC). Vérifié conception 2025 — reconfirmer avant usage.',
  },
  {
    id: 'ref-maroc-02',
    title: 'États de synthèse marocains — BL, CPC, ESG, TF, ETIC',
    domain: 'Maroc — CGNC',
    summary:
      'Le CGNC prévoit cinq états de synthèse en tronc commun : bilan (BL), compte de produits et charges (CPC), état des soldes de gestion (ESG — marge brute, valeur ajoutée, excédent brut d\u2019exploitation, résultats courant et non courant), tableau de financement (TF) et état des informations complémentaires (ETIC). Savoir énumérer ces cinq états et les différencier du trio français (bilan, compte de résultat, annexe) est un différenciateur en entretien.',
    referentiel: 'CGNC (Maroc)',
    authority: 'CGNC (Maroc) — accessible via le Conseil national de la comptabilité (Maroc) / portails officiels à rechercher',
    obligatory: 'obligatoire',
    verification:
      'Référence stable vérifiable (contenu du CGNC / institution) — à reconfirmer dans le texte en vigueur avant l\u2019entretien (la nomenclature des états relève d\u2019un référentiel susceptible d\u2019évoluer). Vérifié conception 2025 — reconfirmer avant usage.',
  },
  {
    id: 'ref-maroc-03',
    title: 'Ordre des experts-comptables (Maroc) — profession comptable',
    domain: 'Maroc — CGNC',
    summary:
      'La profession comptable marocaine (experts-comptables, comptables agréés) est organisée par la loi 15-89 et dotée d\u2019un ordre professionnel : normes professionnelles, missions légales (commissariat aux comptes séparé de l\u2019expertise comptable), éthique et formation continue. Citer l\u2019Ordre comme interlocuteur institutionnel, aux côtés du Conseil national de la comptabilité pour la normalisation.',
    referentiel: 'Profession comptable (Maroc)',
    authority: 'Ordre des experts-comptables (Maroc) — site institutionnel à rechercher (« Ordre des experts comptables Maroc »)',
    obligatory: 'bonne pratique',
    verification:
      'Référence stable vérifiable (institution ordinale marocaine / loi 15-89) — à reconfirmer dans le texte en vigueur avant l\u2019entretien (organisation et intitulés à revérifier sur place). Vérifié conception 2025 — reconfirmer avant usage.',
  },

  // -----------------------------------------------------------------
  // Réglementation du stage
  // -----------------------------------------------------------------
  {
    id: 'ref-stage-01',
    title: 'Stage en France — code de l\u2019éducation (convention, durée, gratification)',
    domain: 'Réglementation du stage',
    summary:
      'Le code de l\u2019éducation encadre le stage en milieu professionnel : convention tripartite écrite (organisme d\u2019accueil / établissement / stagiaire) obligatoire, gratification minimale obligatoire dès que la durée du stage dépasse deux mois (montant horaire fixé par décret, indexé sur le SMIC — renvoyer à la réglementation en vigueur), durée maximale de six mois par année d\u2019enseignement, rapport de stage, tuteur et encadrement, présence d\u2019un enseignant référent. Pour l\u2019entretien PFE : connaître le mécanisme, pas le centime.',
    referentiel: 'Code de l\u2019éducation (France)',
    authority: 'Légifrance — accès : legifrance.gouv.fr (code de l\u2019éducation, dispositions relatives aux stages) ; décret de gratification à rechercher sur le même site',
    obligatory: 'obligatoire',
    verification:
      'Point dépendant d\u2019un texte révisable — vérifier la version en vigueur (le taux de gratification horaire est fixé par décret, indexé sur le SMIC et révisé ; la durée maximale de six mois et le seuil de deux mois relèvent du texte consolidé). Vérifié conception 2025 — reconfirmer avant usage.',
  },
  {
    id: 'ref-stage-02',
    title: 'Gratification de stage — minimum légal indexé sur le SMIC',
    domain: 'Réglementation du stage',
    summary:
      'La gratification minimale horaire est fixée par décret et indexée sur le SMIC horaire (historiquement dans la zone de 15 % du SMIC horaire — ne pas réciter le chiffre sans vérification) ; elle est due pour chaque heure de présence effective au-delà du seuil de durée (deux mois), avec exonérations sociales dans la limite du minimum légal. En entretien : citer le mécanisme « décret + indexation SMIC » et renvoyer au texte en vigueur plutôt qu\u2019à un montant figé.',
    referentiel: 'Code de l\u2019éducation + décret (France)',
    authority: 'Légifrance — accès : legifrance.gouv.fr (décret en vigueur sur la gratification des stages)',
    obligatory: 'obligatoire',
    verification:
      'Point dépendant d\u2019un texte révisable — vérifier la version en vigueur (taux horaire révisé par décret à chaque évolution significative du SMIC ; montant exact à ne citer qu\u2019après relecture du décret). Vérifié conception 2025 — reconfirmer avant usage.',
  },

  // -----------------------------------------------------------------
  // Données & déontologie
  // -----------------------------------------------------------------
  {
    id: 'ref-data-01',
    title: 'CNIL / RGPD — données personnelles du stagiaire et de l\u2019audité',
    domain: 'Données & déontologie',
    summary:
      'Le RGPD et la loi informatique et libertés encadrent le traitement des données personnelles traitées en stage ou en audit (paie, identités des salariés, données clients) : base légale, minimisation, durée de conservation, sécurité, sous-traitance. Un stagiaire en audit manipule des données confidentielles : parler RGPD/CNIL en entretien montre une maturité conforme, sans juridisme excessif.',
    referentiel: 'RGPD / loi informatique et libertés',
    authority: 'CNIL — accès : cnil.fr (textes et fiches pratiques RGPD)',
    obligatory: 'obligatoire',
    verification:
      'Référence stable vérifiable (institution CNIL / domaine racine cnil.fr) — à reconfirmer dans le texte en vigueur avant l\u2019entretien (RGPD et loi applicables dans leur version consolidée). Vérifié conception 2025 — reconfirmer avant usage.',
  },
  {
    id: 'ref-data-02',
    title: 'Secret professionnel du commissaire aux comptes',
    domain: 'Données & déontologie',
    summary:
      'Le CAC est soumis au secret professionnel (code de commerce, articles relatifs à la profession, et code pénal pour la sanction) pour les informations recueillies dans sa mission, tempéré par les obligations légales de révélation des faits délictueux et de signalement des irrégularités. En stage d\u2019audit, la confidentialité contractuelle et déontologique s\u2019applique de la même façon : à assumer explicitement en entretien.',
    referentiel: 'Code de commerce / code pénal (France)',
    authority: 'Légifrance — accès : legifrance.gouv.fr (dispositions sur le secret professionnel du CAC et art. 226-13 du code pénal)',
    obligatory: 'obligatoire',
    verification:
      'Référence stable vérifiable (codes / Légifrance) — à reconfirmer dans le texte en vigueur avant l\u2019entretien (numéros d\u2019articles exacts à revérifier, notamment la numérotation côté code de commerce). Vérifié conception 2025 — reconfirmer avant usage.',
  },

  // -----------------------------------------------------------------
  // Sociétés cotées & marchés
  // -----------------------------------------------------------------
  {
    id: 'ref-marche-01',
    title: 'AMF — Autorité des marchés financiers (sociétés cotées)',
    domain: 'Sociétés cotées & marchés',
    summary:
      'L\u2019AMF régule les marchés financiers français : règlement général applicable aux émetteurs, information financière périodique et permanente, contrôle des comptes publiés, référentiel de contrôle interne attendu des sociétés cotées, sanctions. Pour un entretien mentionnant les sociétés cotées : citer l\u2019AMF comme régulateur de l\u2019information financière, en regard du H3C pour la mission légale d\u2019audit.',
    referentiel: 'Régulation des marchés (France)',
    authority: 'AMF — accès : amf-france.org (règlement général, instructions, guides de l\u2019information financière)',
    obligatory: 'obligatoire',
    verification:
      'Référence stable vérifiable (institution AMF / domaine racine amf-france.org) — à reconfirmer dans le texte en vigueur avant l\u2019entretien (règlement général révisé régulièrement). Vérifié conception 2025 — reconfirmer avant usage.',
  },

  // -----------------------------------------------------------------
  // Pédagogie & méthode
  // -----------------------------------------------------------------
  {
    id: 'ref-pedago-01',
    title: 'Sources de préparation PFE — hiérarchie des sources',
    domain: 'Pédagogie & méthode',
    summary:
      'Ordre de fiabilité à annoncer en entretien : 1) textes officiels (Légifrance, ANC, arrêtés NEP, loi 9-88/CGNC, règlement européen IFRS), 2) publications des institutions et des compagnies (CNCC, AMF, IFRS Foundation, IFAC), 3) manuels et mémentos professionnels, 4) blogs et forums — jamais citables seuls. Citer une source par son institution et son numéro, puis proposer de vérifier la version en vigueur : c\u2019est exactement ce qu\u2019attend un recruteur rigoureux.',
    referentiel: 'Méthode',
    authority: 'Accès : legifrance.gouv.fr, anc.fr, cncc.fr, ifrs.org, ifac.org (racines institutionnelles certaines)',
    obligatory: 'pédagogique',
    verification:
      'Référence stable vérifiable (institution / domaine racine) — à reconfirmer dans le texte en vigueur avant l\u2019entretien (la hiérarchie des sources est une méthode, les textes eux-mêmes évoluent). Vérifié conception 2025 — reconfirmer avant usage.',
  },
  {
    id: 'ref-pedago-02',
    title: 'Annoncer honnêtement ses références en entretien',
    domain: 'Pédagogie & méthode',
    summary:
      'Formulation type : « C\u2019est prévu par le code de commerce, article L. 821-1 et suivants — je vous donne le principe et je reconfirmerais la rédaction exacte dans le texte en vigueur. » Dire les limites de sa mémoire (numéros d\u2019articles, taux, seuils) et la méthode de vérification associée vaut mieux qu\u2019une fausse précision : en audit comme en comptabilité, l\u2019exactitude prouvée prime sur la récitation. À l\u2019inverse, ne jamais inventer de numéro, de taux ou d\u2019URL.',
    referentiel: 'Méthode',
    authority: 'Bonne pratique professionnelle — aucune source unique ; confronter chaque citation à legifrance.gouv.fr / anc.fr / cncc.fr / ifrs.org selon le sujet',
    obligatory: 'pédagogique',
    verification:
      'Point dépendant d\u2019un texte révisable — vérifier la version en vigueur (les exemples d\u2019articles cités en formation doivent être reconfirmés avant chaque entretien). Vérifié conception 2025 — reconfirmer avant usage.',
  },
]
