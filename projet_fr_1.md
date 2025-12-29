---
layout : default
title : "Projet Data Monitoring"
permalink : /projet_data_monitoring
---


# Tableaux de bord : <br> Dématérialisation de courrier entrant  - Monitoring des opérations

<div class="note">
  <p class="admonition-title">Note</p>
  Visuels indicatifs de développement, à titre d'illustration.
</div>

## Contexte 
Projet de mise en place d'une solution de dématéralisation de courrier entrant pour un cabinet d'audit et de conseil, puis maintenance de la solution.

### Le process en ultra-bref

:incoming_envelope: > scan :page_facing_up: > import :open_file_folder:> indexation :label: :desktop_computer: > traitement business :gear: :briefcase: > export pour archivage :file_cabinet:

### Stack
Windows server-IIS | SQL Server | MS Azure | O365 <br>
Hyland OnBase - C# et SQL

<div class="toggle-block">
<button class="accordion">🔍Cherchez la data</button>
<div class="panel">
<br>  
<p>La data est partout et capitale dans ce type de projet qui semble centré sur le document mais repose surtout sur une base de données structurée, des workflows bien calibrés, des classes bien organisées :</p>
<ul>
<li>Données métier (décrivant pour un objet courrier le client, la mission, le type de document, d&#39;affranchissement, les destinataires, le courrier en lui-même, etc.)</li>
<li>Données techniques (identifiants de batch, de machines, horadatage, statuts de workflows, de jobs, données de paramétrage, etc.)</li>
<li>Données issues de référentiels (ici utilisateurs, clients, missions)</li>
</ul>
<p>qu&#39;il faut:</p>
<ul>
<li>identifier</li>
<li>formater</li>
<li>contrôler</li>
<li>organiser dans un modèle de données </li>
<li>faire fonctionner</li>
<li>documenter</li>
<li>maintenir</li>
</ul>


<!--
Source - https://stackoverflow.com/a
Posted by bim, modified by community. See post 'Timeline' for change history
Retrieved 2025-12-19, License - CC BY-SA 4.0
-->

<figure>
<p align="center" width="100%">
  <img src="assets/P1_data_model.png" alt="Version de travail Modèle de données P1" style="width:60%">
  <figcaption><h6 align="center">Version de travail du modèle de données</h6></figcaption>
  </p>
</figure>
</div>
</div>
<br>
<div class="toggle-block">
<button class="accordion">📊Focus besoin de monitoring</button>
<div class="panel">

<br>
<p>Au sein de la solution même,</p>
<ul>
<li><p>Mettre à disposition le monitoring de la solution, du point de vue de l&#39;éxécution automatique (imports de documents, workflows de traitements, exports)
mais aussi des actions utlisateurs au sein des workflows fontionnels.</p>
</li>
<li><p>Monitorer la mise à jour automatisée quotidienne des données utiles issues de 3 référentiels client</p>
</li>
<li><p>Notifier les erreurs aux administrateurs pour action corrective </p>
</li>
</ul>
</div>
</div>
<br>
<div class="toggle-block">
<button class="accordion">:hammer_and_wrench: Actions mises en place</button>
<div class="panel">

<h4 id="monitoring-de-la-solution">Monitoring de la solution</h4>
<ul>
<li>Utilisation du module Reporting Dashboards du progiciel utilisé OnBase (Hyland)</li>
<li>Accès via client lourd ou via le client web directement par URL, déjà exploités par les utilisateurs métier pour les workflows fonctionnels comme services et techniques pour les worflows de traitement.</li>
<li>Droits d&#39;accès aux dashboards selon les groupes utilisateurs et rôles associés</li>
</ul>
<h4 id="monitoring-de-la-mise-jour-automatis-e-quotidienne-des-donn-es-utiles-issues-de-3-r-f-rentiels-client">Monitoring de la mise à jour automatisée quotidienne des données utiles issues de 3 référentiels client</h4>
<ul>
<li>Logs spécifiques créés directement via le script d&#39;import en C#.</li>
<li>Ces logs sont ensuite exploités comme des objets de la solution et consultables dans une vue dédiée aux administrateurs.</li>
</ul>
<h4 id="notifications">Notifications</h4>
<ul>
<li>Selon la nature de l&#39;erreur et sa source, un email de notification est envoyé en temps réel avec toutes les informations de tracking et la description de l&#39;erreur au groupe d&#39;utiliateurs administrateurs concernés</li>
</ul>
<br>
<h4 id="liste-des-rapports-dynamiques-mis-en-place">Liste des rapports dynamiques mis en place</h4>
<ul>
<li>Actions stats
Statistiques par action utilisateur une fois le document validé (e.g. : Paper version request, PDF export, etc.), par utilisateur et groupe d&#39;utilisateurs</li>
</ul>
<br>
<figure>
<p align="center" width="100%">
  <img src="assets/P1_action_stats.png" alt="Exemple web Actions stats" style="width:60%">
  <figcaption><h6 align="center">Exemple reporting web 'Action stats'</h6></figcaption>
  </p>
</figure>
<figure>
<p align="center" width="100%">
  <img src="assets/P1_action_stats_parameters.png" alt="Exemple web Actions stats-date picker" style="width:40%">
  <figcaption><h6 align="center">Exemple date picker web 'Action stats'</h6></figcaption>
  </p>
</figure>
<br>
<ul>
<li>Control stats
Statistiques par action utilisateur en phase de contrôle du document (Qualify and Send, or Forward back to mailroom, and reason for forwarding back), by user and user group
Détail raisons de refus/renvoi du document après numérisation</li>
</ul>
<p align="center" width="100%">
  <img src="assets/P1_back2mr.png" alt="Exemple Nombre de renvois par motif de refus" style="width:60%">
  <figcaption><h6 align="center">Exemple Nombre de renvois par motif de refus</h6></figcaption>
  </p>
</figure>

<ul>
<li><strong>Import stats - month details</strong> : 
Imports de documents par Service et par mois (importés via scanners tiers)</li>
<li><strong>Indexing stats - month details</strong> : 
Indexation des documents par service, par mois et temps moyen d&#39;indexation</li>
<li><strong>Mailroom global stats - day</strong> : 
Documents importés et indexés par batch et par jour (enveloppes exclues)</li>
<li><strong>Mailroom global stats - month</strong> : 
Documents importés et indexés par batch et par mois (enveloppes exclues)</li>
<li><strong>User activity</strong> :
Connexions par utilisateur et groupe d&#39;utilisateurs par jour</li>
<li><strong>Disk Group report</strong> : 
Espace disque utilisé par chaque service/type sur le srveur de fichiers (NAS).</li>
<li><strong>TAX-PAS push AR auto</strong> : 
Nombre et ID des documents AR exportés automatiquement en PDF </li>
<li><strong>PDF auto Email stats</strong> : 
Nombre et statut des emails en envoi automatique avec PDF attaché (seulement pour les services éligibles)</li>
<li><strong>License usage monitoring</strong> : 
License pic usage monitoring- par année, mois, jour, utilisateurs uniques</li>
</ul>
</div>
</div>
<br>
<div class="toggle-block">
<button class="accordion">:dart: Exemples d'améliorations identifiées grâce à ces rapports, et de résolutions d'incidents auxquelles ils ont contribué</button>
<div class="panel">
<br>
<ul>
<li>Ajustement de la résolution des scanners pour équilibrer volumes de fichiers et confort d&#39;exploitation du document numérisé par l&#39;utilisateur</li>
<li>Ajustement des volumes de licenses et prévisions d&#39;accroissement au fil du déploiement</li>
<li>Identification, analyse et résolution d&#39;une sauvergarde tierce de DB qui interrompait certains jobs</li>
<li><p>Réactivité et reprise en cas d&#39;incident réseau quand les envois auto d&#39;emails ou les dépôts de pdf par la solution étaient affectés</p>
<p>Etc. etc.</p>
</li>
</ul>
</div>
</div>




















