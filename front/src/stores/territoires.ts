import { acceptHMRUpdate, defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { TERRITOIRES, type Territoire } from '@/data/territoiresSimules'

/** Les territoires et la fiche ouverte, partagés entre la vue globale et la fenêtre de fiche. */
export const useTerritoiresStore = defineStore('territoires', () => {
  const territoires = ref<Territoire[]>(TERRITOIRES)
  const identifiantOuvert = ref<string | null>(null)

  const ficheOuverte = computed(
    () => territoires.value.find((territoire) => territoire.identifiant === identifiantOuvert.value) ?? null,
  )

  function ouvrirFiche(identifiant: string): void {
    identifiantOuvert.value = identifiant
  }

  function fermerFiche(): void {
    identifiantOuvert.value = null
  }

  return { territoires, ficheOuverte, ouvrirFiche, fermerFiche }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useTerritoiresStore, import.meta.hot))
