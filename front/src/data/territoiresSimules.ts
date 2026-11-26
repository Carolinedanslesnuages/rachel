/** Valeurs entièrement simulées (aucune donnée réelle) pour la maquette. Période : octobre 2026. */
export interface Territoire {
  identifiant: string
  nom: string
  categorie: 'Hexagone' | 'Département et région d’outre-mer' | 'Collectivité d’outre-mer'
  valeurs: Record<string, number>
}

export const PERIODE_SIMULEE = '2026-10'

export const TERRITOIRES: Territoire[] = [
  {
    identifiant: 'hexagone',
    nom: 'France hexagonale',
    categorie: 'Hexagone',
    valeurs: {
      couvertureForestiere: 31, temperatureMer: 17.4, indiceVegetation: 58, surfaceUrbanisee: 31200,
      temperatureAir: 12.6, pluviometrie: 84, niveauMer: 4, ventMaximal: 96,
      puissanceInstallee: 148000, partRenouvelable: 27, sitesClasses: 500, lumieresNocturnes: 46,
      tauxChomage: 7.3, creationsEntreprises: 92000, revenuMedian: 23400, prixCarburant: 1.74,
    },
  },
  {
    identifiant: 'guadeloupe',
    nom: 'Guadeloupe',
    categorie: 'Département et région d’outre-mer',
    valeurs: {
      couvertureForestiere: 39, temperatureMer: 28.9, indiceVegetation: 74, surfaceUrbanisee: 190,
      temperatureAir: 27.1, pluviometrie: 245, niveauMer: 7, ventMaximal: 88,
      puissanceInstallee: 640, partRenouvelable: 19, sitesClasses: 38, lumieresNocturnes: 41,
      tauxChomage: 17.2, creationsEntreprises: 640, revenuMedian: 16200, prixCarburant: 1.62,
    },
  },
  {
    identifiant: 'martinique',
    nom: 'Martinique',
    categorie: 'Département et région d’outre-mer',
    valeurs: {
      couvertureForestiere: 45, temperatureMer: 28.7, indiceVegetation: 77, surfaceUrbanisee: 150,
      temperatureAir: 26.8, pluviometrie: 230, niveauMer: 6, ventMaximal: 82,
      puissanceInstallee: 560, partRenouvelable: 11, sitesClasses: 31, lumieresNocturnes: 44,
      tauxChomage: 12.9, creationsEntreprises: 590, revenuMedian: 17400, prixCarburant: 1.61,
    },
  },
  {
    identifiant: 'guyane',
    nom: 'Guyane',
    categorie: 'Département et région d’outre-mer',
    valeurs: {
      couvertureForestiere: 96, temperatureMer: 27.8, indiceVegetation: 91, surfaceUrbanisee: 120,
      temperatureAir: 27.4, pluviometrie: 120, niveauMer: 5, ventMaximal: 54,
      puissanceInstallee: 330, partRenouvelable: 63, sitesClasses: 17, lumieresNocturnes: 12,
      tauxChomage: 15.4, creationsEntreprises: 760, revenuMedian: 12100, prixCarburant: 1.68,
    },
  },
  {
    identifiant: 'la-reunion',
    nom: 'La Réunion',
    categorie: 'Département et région d’outre-mer',
    valeurs: {
      couvertureForestiere: 35, temperatureMer: 24.6, indiceVegetation: 66, surfaceUrbanisee: 260,
      temperatureAir: 22.3, pluviometrie: 60, niveauMer: 3, ventMaximal: 110,
      puissanceInstallee: 850, partRenouvelable: 35, sitesClasses: 54, lumieresNocturnes: 48,
      tauxChomage: 17.9, creationsEntreprises: 1400, revenuMedian: 14700, prixCarburant: 1.59,
    },
  },
  {
    identifiant: 'mayotte',
    nom: 'Mayotte',
    categorie: 'Département et région d’outre-mer',
    valeurs: {
      couvertureForestiere: 14, temperatureMer: 27.3, indiceVegetation: 61, surfaceUrbanisee: 52,
      temperatureAir: 26.2, pluviometrie: 95, niveauMer: 4, ventMaximal: 74,
      puissanceInstallee: 125, partRenouvelable: 6, sitesClasses: 6, lumieresNocturnes: 29,
      tauxChomage: 34.0, creationsEntreprises: 310, revenuMedian: 4300, prixCarburant: 1.55,
    },
  },
  {
    identifiant: 'polynesie-francaise',
    nom: 'Polynésie française',
    categorie: 'Collectivité d’outre-mer',
    valeurs: {
      couvertureForestiere: 28, temperatureMer: 27.1, indiceVegetation: 69, surfaceUrbanisee: 85,
      temperatureAir: 26.9, pluviometrie: 150, niveauMer: 5, ventMaximal: 70,
      puissanceInstallee: 280, partRenouvelable: 33, sitesClasses: 9, lumieresNocturnes: 22,
      tauxChomage: 11.8, creationsEntreprises: 280, revenuMedian: 19800, prixCarburant: 1.9,
    },
  },
  {
    identifiant: 'nouvelle-caledonie',
    nom: 'Nouvelle-Calédonie',
    categorie: 'Collectivité d’outre-mer',
    valeurs: {
      couvertureForestiere: 40, temperatureMer: 25.2, indiceVegetation: 63, surfaceUrbanisee: 110,
      temperatureAir: 23.4, pluviometrie: 70, niveauMer: 4, ventMaximal: 92,
      puissanceInstallee: 540, partRenouvelable: 21, sitesClasses: 42, lumieresNocturnes: 27,
      tauxChomage: 10.6, creationsEntreprises: 350, revenuMedian: 21500, prixCarburant: 1.83,
    },
  },
]
