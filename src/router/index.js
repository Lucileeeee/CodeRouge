import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            alias: "/home",
            name: "Home",
            component: () => import("../views/Home.vue")
        },
     /*    {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFoundView.vue')
        }, */
        {
            path: '/Question',
            name: 'Question',
            component: () => import('../views/quiz/Question.vue')
        },
        {
            path: '/IntroQuiz',
            name: 'IntroQuiz',
            component: () => import('../views/quiz/IntroQuiz.vue')
        },
        {
            path: '/Connexion',
            name: 'Connexion',
            component: () => import('../views/formulaire/Connexion.vue')
        },
        {
            path: '/Inscription',
            name: 'Inscription',
            component: () => import('../views/formulaire/Inscription.vue')
        },
        {
            path: '/Inscription',
            name: 'Inscription',
            component: () => import('../views/formulaire/Inscription.vue')
        },
        {
            path: '/CreationQuestion',
            name: 'CreationQuestion',
            component: () => import('../views/formulaire/CreationQuestion.vue')
        },
        {
            path: '/CreationResultat',
            name: 'CreationResultat',
            component: () => import('../views/formulaire/CreationResultat.vue')
        },
    ]
});

export default router;