<script setup lang="ts">
import { DsfrTable } from '@gouvminint/vue-dsfr'
import { SOURCES } from '@/data/catalogueIndicateurs'
import { PERIODE_SIMULEE, type Territoire } from '@/data/territoiresSimules'
import { periode, valeurAvecUnite } from '@/lib/format'

const props = defineProps<{ territoire: Territoire }>()

const entetes = ['Indicateur', 'Valeur simulée', 'Nature de la donnée']

const tableauxParSource = SOURCES.map((source) => ({
  source,
  lignes: source.indicateurs.map((indicateur) => [
    indicateur.libelle,
    valeurAvecUnite(props.territoire.valeurs[indicateur.identifiant] ?? 0, indicateur.unite),
    indicateur.indirect ? 'Indicateur indirect (donnée privée remplacée par un proxy public)' : 'Mesure publique',
  ]),
}))
</script>

<template>
  <div>
    <p>{{ territoire.categorie }} — valeurs simulées pour {{ periode(PERIODE_SIMULEE) }}.</p>
    <section v-for="tableau in tableauxParSource" :key="tableau.source.identifiant" class="fr-mb-4w">
      <h3 class="fr-h5">{{ tableau.source.titre }}</h3>
      <p class="fr-text--sm">Sources visées : {{ tableau.source.fournisseurs }}.</p>
      <DsfrTable
        :title="`${tableau.source.titre} — ${territoire.nom}`"
        no-caption
        :headers="entetes"
        :rows="tableau.lignes"
      />
    </section>
  </div>
</template>
