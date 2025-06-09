import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      alias: "/home",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    /*    {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFoundView.vue')
        }, */
    {
      path: "/Question",
      name: "Question",
      component: () => import("../views/quiz/Question.vue"),
      meta: { hideFooter: true, navbarId: "nav2" },
    },
    {
      path: "/IntroQuiz",
      name: "IntroQuiz",
      component: () => import("../views/quiz/IntroQuiz.vue"),
    },
    {
      path: "/Connexion",
      name: "Connexion",
      component: () => import("../views/formulaire/Connexion.vue"),
      meta: { hideFooter: true },
    },
    {
      path: "/Inscription",
      name: "Inscription",
      component: () => import("../views/formulaire/Inscription.vue"),
      meta: { hideFooter: true },
    },
    {
      path: "/CreationQuestion",
      name: "CreationQuestion",
      component: () => import("../views/formulaire/CreationQuestion.vue"),
    },
    {
      path: "/Prompt",
      name: "Prompt",
      component: () => import("../views/formulaire/Prompt.vue"),
      meta: { hideFooter: true, navbarId: "nav2" },
    },
    {
      path: "/CreationResultat",
      name: "CreationResultat",
      component: () => import("../views/formulaire/CreationResultat.vue"),
    },
    {
      path: "/CompteUtil",
      name: "CompteUtil",
      component: () => import("../views/compte/CompteUtil.vue"),
    },
  ],
});

export default router;
