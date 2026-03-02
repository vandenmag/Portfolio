---
layout : page
title : "Projet Call center service analysis"
permalink : /projet_call_center
---


# Tableaux de bord : <br> Activités, revenus et performance des équipes d'un service de centre d'appels

<div class="note">
  Projet individuel académique
</div>

## Contexte 
Mettre en place un tableau de bord pour une entreprise qui propose des services externalisés de centre d'appels (facturation aux clients de services d'appel qui comprennent l'assistance technique, la facturation et les ventes).

<!--
:incoming_envelope: &#9654; scan :page_facing_up: &#9654; import :open_file_folder: &#9654; indexation :desktop_computer: &#9654; traitement business :briefcase: &#9654; export pour archivage :file_cabinet:
-->

### Stack
csv -xlsx <br>
Power Query-Power BI <br>

<div class="toggle-block">
<button class="accordion">:file_cabinet: Données</button>
<div class="panel">
<br>  
<p>(données réelles anonymisées)</p>
<ul>
<li>Appels (131 821 entrées au total, 7 variables- 4 fichiers sources)</li>
<br> 
<figure>
<p align="center" width="100%">
  <img src="assets/P3_donnees_brutes_calls.png" alt="Aperçu données brutes calls P3" style="width:50%">
  <figcaption><h6 align="center">Aperçu des données brutes Appels</h6></figcaption>
  </p>
</figure>
<br>   
<li>Taxes d&#39;appel (selon l'année - 1 fichier source)</li>
<br>
<figure>
<p align="center" width="100%">
  <img src="assets/P3_donnees_brutes_call-charges.png" alt="Aperçu données brutes call charges P3" style="width:70%">
  <figcaption><h6 align="center">Aperçu des données brutes Taxes d&#39;appel</h6></figcaption>
  </p>
</figure>
<br>   
<li>Types d&#39;appels (1 onglet source)</li>
<br> 
<figure>
<p align="center" width="100%">
  <img src="assets/P3_donnees_brutes_call-types.png" alt="Aperçu données brutes Types d'appel P3" style="width:50%">
  <figcaption><h6 align="center">Aperçu des données brutes Types d&#39;appel</h6></figcaption>
  </p>
</figure>
<br>   
<li>Employés (64 entrées, 1 onglet source)</li>
<br> 
<figure>
<p align="center" width="100%">
  <img src="assets/P3_donnees_brutes_employees.png" alt="Aperçu données brutes employés P3" style="width:50%">
  <figcaption><h6 align="center">Aperçu des données brutes Employés</h6></figcaption>
  </p>
</figure>
<br>   

</ul>

<!--
<p>qu&#39;il faut :</p>
<ul>
<li>identifier</li>
<li>formater</li>
<li>contrôler</li>
<li>organiser dans un modèle de données </li>
<li>faire fonctionner</li>
<li>documenter</li>
<li>maintenir</li>
</ul>



Source - https://stackoverflow.com/a
Posted by bim, modified by community. See post 'Timeline' for change history
Retrieved 2025-12-19, License - CC BY-SA 4.0


<figure>
<p align="center" width="100%">
  <img src="assets/P1_data_model.png" alt="Version de travail Modèle de données P1" style="width:80%">
  <figcaption><h6 align="center">Version de travail du modèle de données</h6></figcaption>
  </p>
</figure>
</div>
</div>
-->

<div class="toggle-block">
<button class="accordion">📊Axes d'analyse et principaux KPI mis en place</button>
<div class="panel">

<h4 id="liste"></h4>
<ul>
<li>Vision globale du service client et évolution sur la période étudiée (2018-2021)
  <br>&#9654 Scores SLA, volumes et durées d'appels selon les types d'appels et les bureaux de traitement</li> <br>
<li>Analyse des revenus 
  <br>&#9654 Valeurs, moyennes et progressions par bureau, par type d'appel, par manager</li> <br>
<li>Analyse des performances managers et équipes 
  <br>&#9654 Nombre d'appels reçus, décrochés, durées d'appel et d'attente moyennes, score SLA par ville, manager, employé</li> <br>
</ul>
<br>

</div>

<div class="toggle-block">
<button class="accordion">:hammer_and_wrench: Traitement des données</button>
<div class="panel">

<h4 id="liste-traitements-init">Traitements et ajouts initiaux</h4>
<ul>
<li>Import dans Power Query</li>
<li>Gestion des formats (Dates, Décimaux)</li>
<li>Merge des fichiers de données Appels des 4 années</li>
<li>Création colonnes State et City (séparation depuis la colonne Site qui est ensuite supprimée</li>
<li>Création colonne SLA Compliance (booléen, conditionnel)</li>
<li>Création colonne Call Revenue (selon type d'appel et année)</li>
</ul>
<h4 id="liste-traitements-modele">Modèlisation</h4>
<figure>
<p align="center" width="100%">
<img src="assets/P3_StarModel.png" alt="Modèle en étoile" style="width:80%">
<figcaption><h6 align="center">Modèle en étoile</h6></figcaption>
</p>
</figure>
<ul>
<li>Table des faits : appels (Call center Calls)</li>
<li>Tables de dimensions : employés (Employees), types et taxes d'appels (Call Types and Charges)</li>
<li>Table Calendrier (Calendar)</li>
<li>Table des mesures (mesures DAX)- Mesure table</li>
<figure>
<p align="center" width="100%">
<img src="assets/P3_PQ_call_revenueDax.png" alt="Exemple de mesure DAX" style="width:80%">
<figcaption><h6 align="center">Exemple mesure DAX Call Revenue</h6></figcaption>
</p>
</figure>
</ul>

<br>

</div>

<div class="toggle-block">
<button class="accordion">:dart: Rapports et principaux insights</button>
<div class="panel">
<br>
<h4 id="liste-traitements-modele">Vision globale du service</h4>


<ul>
<li>Période globale
<figure>
<p align="center" width="100%">
<img src="assets/P3_RPT_customer_service_all.png" alt="Vision globale du service" style="width:80%">
<figcaption><h6 align="center">Aperçu du rapport</h6></figcaption>
</p>
</figure>
  <ul>
  <li>Jacksonville est en tête du classement en nombre d'appels (47k) mais le taux de qualité est légèrement meilleur à Aurora sur l'ensemble de la période (88,38% dans le SLA, légèment supérieur à la moyenne globale de 88,17%)</li>
  <li>Les appels au support technique représentent au global environ la moitié du volume d'appels</li>
  <li>Entre 2020 et 2021, la durée moyenne des appels a augmenté (de 746s en 2018 à 767s en 2021) mais leur nombre a diminué (de 33 057 à 32 846).</li>
  <li>Le taux d'appels non décrochés est très faible (0,07%) pour un temps d'attente moyen de 27s.</li>
  <li>Plus de 87% des appels durent plus de 3min.</li>
  </ul>
</li>
<li>Exemple de filtre : En 2020 pour la ville d'Aurora
<figure>
<p align="center" width="100%">
<img src="assets/P3_RPT_customer_service_aurora2020.png" alt="Vision globale du service filtre Aurora 2020" style="width:80%">
<figcaption><h6 align="center">Aperçu du rapport filtré</h6></figcaption>
</p>
</figure>
</li>
</ul>
<br>
<h4 id="liste-traitements-modele">Analyse des revenus générés</h4>


<ul>
<li>Toutes villes ensembles
<figure>
<p align="center" width="100%">
<img src="assets/P3_RPT_revenue_analysis_all.png" alt="Revenus générés global" style="width:80%">
<figcaption><h6 align="center">Aperçu du rapport</h6></figcaption>
</p>
</figure>
  <ul>
  <li>xxx</li>
  <li>xxx</li>
  <li>xxx</li>
  <li>xxx</li>
  <li>xxx</li>
  </ul>
</li>
<li>Exemple de filtre : En 2020 pour Jacksonville et le manager Ducharme
<figure>
<p align="center" width="100%">
<img src="assets/P3_RPT_revenue_analysis_Jacksonville_Ducharme.png" alt="Aperçu du rapport filtré" style="width:80%">
<figcaption><h6 align="center">Aperçu du rapport filtré</h6></figcaption>
</p>
</figure>
</li>
</ul>
<br>
<h4 id="liste-traitements-modele">Analyse des performances managers et équipes</h4>


<ul>
<li>Toutes villes ensembles
<figure>
<p align="center" width="100%">
<img src="assets/P3_RPT_staff-perf_analysis_all.png" alt="Performance équipes global" style="width:80%">
<figcaption><h6 align="center">Aperçu du rapport</h6></figcaption>
</p>
</figure>
  <ul>
  <li>xxx</li>
  <li>xxx</li>
  <li>xxx</li>
  <li>xxx</li>
  <li>xxx</li>
  </ul>
</li>
<li>Exemple de filtre : En 2021 pour Jacksonville et le manager Ducharme
<figure>
<p align="center" width="100%">
<img src="assets/P3_RPT_staff-perf_analysis_jacksonville_ducharme_2021.png" alt="Aperçu du rapport filtré" style="width:80%">
<figcaption><h6 align="center">Aperçu du rapport filtré</h6></figcaption>
</p>
</figure>
</li>
</ul>
</div>
</div>



















