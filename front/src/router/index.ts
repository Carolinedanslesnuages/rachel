import { createRouter, createWebHistory } from 'vue-router'
import ArchipelFranceView from '../views/ArchipelFranceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/', name: 'tableau-de-bord', component: ArchipelFranceView }],
})

// Titre de page qui dit où l'on est (RGAA 8.6).
router.afterEach(() => {
  document.title = 'Archipel France, observatoire national — RACHEL'
})

export default router
