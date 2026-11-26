import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useTerritoiresStore } from '@/stores/territoires'
import { SOURCES } from '@/data/catalogueIndicateurs'

describe('store des territoires', () => {
  beforeEach(() => setActivePinia(createPinia()))

  it('liste l’Hexagone et les territoires d’outre-mer', () => {
    const magasin = useTerritoiresStore()
    const noms = magasin.territoires.map((territoire) => territoire.nom)
    expect(noms).toContain('France hexagonale')
    expect(noms).toEqual(expect.arrayContaining(['Guadeloupe', 'Martinique', 'Guyane', 'La Réunion', 'Mayotte']))
  })

  it('ouvre puis ferme la fiche d’un territoire', () => {
    const magasin = useTerritoiresStore()
    expect(magasin.ficheOuverte).toBeNull()
    magasin.ouvrirFiche('guyane')
    expect(magasin.ficheOuverte?.nom).toBe('Guyane')
    magasin.fermerFiche()
    expect(magasin.ficheOuverte).toBeNull()
  })

  it('fournit une valeur simulée pour chaque indicateur de chaque source, sur chaque territoire', () => {
    const magasin = useTerritoiresStore()
    for (const territoire of magasin.territoires) {
      for (const source of SOURCES) {
        for (const indicateur of source.indicateurs) {
          expect(territoire.valeurs[indicateur.identifiant], `${territoire.nom} / ${indicateur.identifiant}`).toBeTypeOf('number')
        }
      }
    }
  })

  it('couvre les quatre sources demandées, avec des indicateurs indirects pour les données industrielles privées', () => {
    expect(SOURCES.map((source) => source.identifiant)).toEqual(['satellite', 'meteo', 'industrie', 'economie'])
    const industrie = SOURCES.find((source) => source.identifiant === 'industrie')
    expect(industrie?.indicateurs.some((indicateur) => indicateur.indirect)).toBe(true)
  })
})
