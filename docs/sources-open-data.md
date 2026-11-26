# Observatoire — architecture des écrans et sources de données

Réalisé hors story, en mode libre. Les valeurs de la maquette sont **simulées** ; les sources ci-dessous sont des pistes à **faire confirmer par un développeur** (conditions d’accès, quotas, jeux de données exacts) avant tout branchement.

## Architecture des écrans
1. **Archipel France** (page d’accueil) : un tableau des indicateurs clés pour l’Hexagone et chaque territoire d’outre-mer.
2. **Fiche territoriale** (fenêtre ouverte depuis la vue globale) : tous les indicateurs, regroupés par source.

Territoires de la maquette : France hexagonale, Guadeloupe, Martinique, Guyane, La Réunion, Mayotte, Polynésie française, Nouvelle-Calédonie.

## Sources gratuites utilisables
| Famille | Source | Accès | Indicateurs possibles |
|---|---|---|---|
| Satellites | Copernicus Data Space (Sentinel-2, Sentinel-3) | compte gratuit, API de catalogue | végétation, surfaces bâties |
| Satellites | Copernicus Marine Service | compte gratuit | température de la mer |
| Météo | Météo-France (portail des API) et data.gouv.fr | clé gratuite / sans clé | température, pluie, vent |
| Eau | Hub’Eau | sans clé | niveaux et qualité des cours d’eau |
| Océans | Shom (marées, niveaux d’eau) | données ouvertes partielles | niveau de la mer |
| Énergie | RTE (éCO2mix) et Open Data Réseaux Énergies | compte gratuit / sans clé | puissance installée, production, part renouvelable |
| Énergie outre-mer | EDF SEI (portails de données ouvertes par territoire) | sans clé, à confirmer | bilan électrique des îles |
| Sites industriels | Géorisques (installations classées) | sans clé | sites classés |
| Économie | Insee (API, répertoire Sirene) | clé gratuite | chômage, revenus, créations d’entreprises |
| Économie | Prix des carburants (data.economie.gouv.fr) | sans clé | prix du gazole |

## Indicateurs indirects (proxys) pour les données privées
- **Activité industrielle** : lumières nocturnes vues du ciel, nombre de sites classés, consommation électrique publiée.
- **Activité économique** : créations d’entreprises, trafic des ports et aéroports, prix du carburant.
- Dans la maquette, ces indicateurs sont signalés « Indicateur indirect » dans les fiches.
