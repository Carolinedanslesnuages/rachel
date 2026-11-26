# Réalisé hors story, en mode libre

Demande #1 — Observatoire national Économie, Énergie & Écosystèmes (Hexagone + outre-mer).

## Critères et tests qui les prouvent
| Critère | Test |
|---|---|
| Vue globale « Archipel France » avec tous les indicateurs clés | `ArchipelFranceView.spec.ts` : « montre les indicateurs clés… » |
| Une fiche par territoire (Hexagone + 7 outre-mer), ouverte en fenêtre | « propose une fiche par territoire… », « ouvre la fiche… » |
| Fiche : tous les indicateurs, regroupés par source (satellite, météo, énergie, économie) | « ouvre la fiche… » (chaque source et chaque indicateur) |
| Données simulées par source, indicateurs indirects signalés | `territoires.spec.ts` (4 sources, valeur pour chaque indicateur et territoire, proxys) |
| Fermeture de la fiche | « ferme la fiche avec le bouton de fermeture » |
| Données partagées entre vue et fiche (Pinia) | `territoires.spec.ts` : ouverture/fermeture de fiche |
| Accessibilité automatique (page et fiche ouverte) | « est accessible, page seule puis fiche ouverte » |

## Accessibilité — à vérifier par un humain
- Focus : retour sur le bouton d’origine à la fermeture, piège de focus dans la fenêtre, fermeture avec la touche Échap.
- Lecture du tableau de la vue globale et des tableaux de fiche avec un lecteur d’écran.
- Affichage à 320 px et zoom 200 % du tableau de la vue globale (5 colonnes).
- Contrastes (non mesurables en test automatique).

## Périmètre
- Vue `ArchipelFranceView`, composant `FicheDromCom`, store `territoires`, données simulées `data/`, aide `valeurAvecUnite`, route d’accueil et titre de page.
- Note `docs/sources-open-data.md` : écrans, API ouvertes, indicateurs indirects (à confirmer par un développeur).
- Aucun changement d’API ni de base de données (pas de migration).
- L’ancien tableau de bord reste dans le code mais n’est plus la page d’accueil.
- Pas encore ajouté à la liste `pages:` du contrôle d’accessibilité en CI (dossier `.github/` réservé aux développeurs).

## Résultat des contrôles
- Front : oxlint, eslint, types, 17 tests et compilation : tout passe.
- API (non modifiée) : lint, tests, tests e2e et compilation : tout passe.
