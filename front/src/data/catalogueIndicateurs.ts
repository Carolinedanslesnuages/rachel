/** Les quatre familles de sources de l’observatoire et leurs indicateurs (maquette). */
export type IdentifiantSource = 'satellite' | 'meteo' | 'industrie' | 'economie'

export interface DefinitionIndicateur {
  identifiant: string
  libelle: string
  unite: string
  /** Vrai quand la donnée réelle est privée : on la remplace par un indicateur indirect public. */
  indirect: boolean
}

export interface SourceDonnees {
  identifiant: IdentifiantSource
  titre: string
  fournisseurs: string
  indicateurs: DefinitionIndicateur[]
}

export const SOURCES: SourceDonnees[] = [
  {
    identifiant: 'satellite',
    titre: 'Images satellites',
    fournisseurs: 'Copernicus (Sentinel, service Marine, service Terres)',
    indicateurs: [
      { identifiant: 'couvertureForestiere', libelle: 'Couverture forestière', unite: '%', indirect: false },
      { identifiant: 'temperatureMer', libelle: 'Température de la mer en surface', unite: '°C', indirect: false },
      { identifiant: 'indiceVegetation', libelle: 'Indice de végétation (de 0 à 100)', unite: '', indirect: false },
      { identifiant: 'surfaceUrbanisee', libelle: 'Surface urbanisée', unite: 'km²', indirect: false },
    ],
  },
  {
    identifiant: 'meteo',
    titre: 'Mesures météo, eau et océans',
    fournisseurs: 'Météo-France, data.gouv.fr, Hub’Eau, Shom',
    indicateurs: [
      { identifiant: 'temperatureAir', libelle: 'Température moyenne de l’air', unite: '°C', indirect: false },
      { identifiant: 'pluviometrie', libelle: 'Pluie cumulée sur le mois', unite: 'mm', indirect: false },
      { identifiant: 'niveauMer', libelle: 'Écart du niveau de la mer à sa moyenne', unite: 'cm', indirect: false },
      { identifiant: 'ventMaximal', libelle: 'Rafale de vent maximale', unite: 'km/h', indirect: false },
    ],
  },
  {
    identifiant: 'industrie',
    titre: 'Énergie et sites industriels',
    fournisseurs: 'RTE, EDF SEI (données ouvertes), sites classés, indicateurs indirects publics',
    indicateurs: [
      { identifiant: 'puissanceInstallee', libelle: 'Puissance électrique installée', unite: 'MW', indirect: false },
      { identifiant: 'partRenouvelable', libelle: 'Part d’électricité renouvelable', unite: '%', indirect: false },
      { identifiant: 'sitesClasses', libelle: 'Sites industriels classés', unite: 'sites', indirect: true },
      { identifiant: 'lumieresNocturnes', libelle: 'Lumières nocturnes vues du ciel (de 0 à 100)', unite: '', indirect: true },
    ],
  },
  {
    identifiant: 'economie',
    titre: 'Indicateurs économiques locaux',
    fournisseurs: 'Insee, données économiques publiques',
    indicateurs: [
      { identifiant: 'tauxChomage', libelle: 'Taux de chômage', unite: '%', indirect: false },
      { identifiant: 'creationsEntreprises', libelle: 'Créations d’entreprises sur le mois', unite: 'entreprises', indirect: false },
      { identifiant: 'revenuMedian', libelle: 'Revenu médian par an', unite: '€', indirect: false },
      { identifiant: 'prixCarburant', libelle: 'Prix moyen du litre de gazole', unite: '€', indirect: true },
    ],
  },
]

/** Indicateurs repris dans le tableau de la vue globale. */
export const INDICATEURS_VUE_GLOBALE = ['tauxChomage', 'partRenouvelable', 'temperatureMer', 'pluviometrie']

export function trouverDefinition(identifiant: string): DefinitionIndicateur {
  for (const source of SOURCES) {
    const definition = source.indicateurs.find((candidate) => candidate.identifiant === identifiant)
    if (definition) return definition
  }
  throw new Error(`Indicateur inconnu : ${identifiant}`)
}
