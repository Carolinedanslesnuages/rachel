<script setup lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { DsfrAlert, DsfrButton, DsfrModal, DsfrTable } from '@gouvminint/vue-dsfr'
import FicheDromCom from '@/components/FicheDromCom.vue'
import { INDICATEURS_VUE_GLOBALE, trouverDefinition } from '@/data/catalogueIndicateurs'
import { PERIODE_SIMULEE } from '@/data/territoiresSimules'
import { periode, valeurAvecUnite } from '@/lib/format'
import { useTerritoiresStore } from '@/stores/territoires'

const magasin = useTerritoiresStore()
const { territoires, ficheOuverte } = storeToRefs(magasin)

/** Bouton qui a ouvert la fiche : le focus lui est rendu à la fermeture. */
const boutonOrigine = ref<HTMLElement | undefined>(undefined)

const definitionsVueGlobale = INDICATEURS_VUE_GLOBALE.map(trouverDefinition)
const entetes = ['Territoire', ...definitionsVueGlobale.map((definition) => `${definition.libelle} (${definition.unite})`)]
const lignes = computed(() =>
  territoires.value.map((territoire) => [
    territoire.nom,
    ...INDICATEURS_VUE_GLOBALE.map((identifiant) =>
      valeurAvecUnite(territoire.valeurs[identifiant] ?? 0, '').trim(),
    ),
  ]),
)

function ouvrirFiche(identifiant: string, evenement: Event): void {
  boutonOrigine.value = evenement.currentTarget as HTMLElement
  magasin.ouvrirFiche(identifiant)
}
</script>

<template>
  <h1>Archipel France — Observatoire national</h1>
  <DsfrAlert
    type="info"
    small
    description="Maquette : toutes les valeurs affichées sont simulées. Aucune donnée réelle n’est utilisée."
  />
  <p class="fr-mt-3w">
    Vue d’ensemble de l’Hexagone et de l’outre-mer pour {{ periode(PERIODE_SIMULEE) }}. Choisissez un territoire
    pour ouvrir sa fiche avec tous les indicateurs.
  </p>

  <DsfrTable title="Indicateurs clés par territoire" :headers="entetes" :rows="lignes" />

  <h2 class="fr-h4 fr-mt-4w">Fiches territoriales</h2>
  <ul class="fr-grid-row fr-grid-row--gutters territoires">
    <li v-for="territoire in territoires" :key="territoire.identifiant" class="fr-col-12 fr-col-md-6 fr-col-lg-4">
      <DsfrButton
        secondary
        :label="`Consulter la fiche : ${territoire.nom}`"
        @click="ouvrirFiche(territoire.identifiant, $event)"
      />
    </li>
  </ul>

  <DsfrModal
    v-if="ficheOuverte"
    :opened="true"
    :title="`Fiche : ${ficheOuverte.nom}`"
    title-tag="h2"
    size="lg"
    :origin="boutonOrigine"
    @close="magasin.fermerFiche()"
  >
    <FicheDromCom :territoire="ficheOuverte" />
  </DsfrModal>
</template>

<style scoped>
.territoires {
  list-style: none;
  padding: 0;
}
</style>
