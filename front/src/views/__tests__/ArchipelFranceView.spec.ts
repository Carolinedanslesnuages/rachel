import { mount, type VueWrapper } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import VueDsfr from '@gouvminint/vue-dsfr'
import ArchipelFranceView from '@/views/ArchipelFranceView.vue'
import { violationsAccessibilite } from '@/__tests__/accessibilite'
import { SOURCES } from '@/data/catalogueIndicateurs'

describe('ArchipelFranceView', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    setActivePinia(createPinia())
    wrapper = mount(ArchipelFranceView, { global: { plugins: [VueDsfr] }, attachTo: document.body })
  })
  afterEach(() => wrapper.unmount())

  const boutonDuTerritoire = (nom: string) =>
    wrapper.findAll('button').find((bouton) => bouton.text() === `Consulter la fiche : ${nom}`)!

  it('a un seul titre de niveau 1 et annonce que les données sont simulées', () => {
    expect(wrapper.findAll('h1')).toHaveLength(1)
    expect(wrapper.text()).toContain('toutes les valeurs affichées sont simulées')
  })

  it('montre les indicateurs clés de l’Hexagone et de chaque territoire d’outre-mer', () => {
    const tableau = wrapper.find('table')
    expect(tableau.find('caption').text()).toBe('Indicateurs clés par territoire')
    expect(tableau.findAll('th[scope="col"]').length).toBeGreaterThanOrEqual(5)
    for (const nom of ['France hexagonale', 'Guadeloupe', 'Martinique', 'Guyane', 'La Réunion', 'Mayotte']) {
      expect(tableau.text()).toContain(nom)
    }
  })

  it('propose une fiche par territoire, avec un bouton explicite', () => {
    expect(boutonDuTerritoire('Guyane')).toBeTruthy()
    expect(wrapper.findAll('button')).toHaveLength(8)
  })

  it('ouvre la fiche du territoire avec les indicateurs de chaque source', async () => {
    await boutonDuTerritoire('Mayotte').trigger('click')
    const fenetre = document.body.querySelector('dialog')!
    expect(fenetre.textContent).toContain('Fiche : Mayotte')
    for (const source of SOURCES) {
      expect(fenetre.textContent).toContain(source.titre)
      for (const indicateur of source.indicateurs) expect(fenetre.textContent).toContain(indicateur.libelle)
    }
    expect(fenetre.textContent).toContain('Indicateur indirect')
  })

  it('ferme la fiche avec le bouton de fermeture', async () => {
    await boutonDuTerritoire('Guyane').trigger('click')
    const fermeture = document.body.querySelector<HTMLButtonElement>('dialog button.fr-btn--close')!
    fermeture.click()
    await vi.waitFor(() => expect(document.body.querySelector('dialog')).toBeNull())
  })

  it('est accessible, page seule puis fiche ouverte', async () => {
    expect(await violationsAccessibilite(wrapper.element)).toEqual([])
    await boutonDuTerritoire('Guadeloupe').trigger('click')
    expect(await violationsAccessibilite(document.body)).toEqual([])
  })
})
