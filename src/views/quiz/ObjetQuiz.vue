<script>
import { ref } from 'vue'

export const tabQuiz = Array(30);

export const Quiz = ref([
    {
    question : {
            id: 1 ,
            texte : "As-tu déjà fais les yeux doux à un.e inconnu.e pendant un rencart avec chéri.e?",
            repondu : false
        },
    reponses :  [
            {
                id: 1,
                texte : 'Jamais de la vie !',
                select: false
            },
            {
                id: 2,
                texte : 'J’avoue le.a serveur.euse la dernière fois...',
                select: false
            },
            {
                id: 3,
                texte : "C'est un kink avec ma moitié, nous jugez pas",
                select: false
            },
            {
                id: 4,
                texte : "Mattez juste un cul qui passe c'est pas faire les yeux doux?",
                select: false
            }
        ]
    },
    {
    question : {
            id: 2 ,
            texte : " rencart avec chéri.e?",
            repondu : false
        },
    reponses :  [
            {
                id: 1,
                texte : 'Jamais de la vie !',
                select: false
            },
            {
                id: 2,
                texte : 'J’avoue le.a serveur.euse la dernière fois...',
                select: false
            },
            {
                id: 3,
                texte : "C'est un kink avec ma moitié, nous jugez pas",
                select: false
            }
        ]
        // est-ce qu'on fait une méthode à réponses pour reset les bool 
        // de toutes ? 
    },
    {
    question : {
            id: 3 ,
            texte : "Blkajhakh rencart avec chéri.e?",
            repondu : false
        },
    reponses :  [
            {
                id: 1,
                texte : 'Jamais de la vie !',
                select: false
            },
            {
                id: 2,
                texte : 'J’avoue le.a serveur.euse la dernière fois...',
                select: false
            }
        ]
    },
    {
    question : {
            id: 4 ,
            texte : " rencart avec chéri.e?",
            repondu : false
        },
    reponses :  [
            {
                id: 1,
                texte : 'Jamais de la vie !',
                select: false
            },
            {
                id: 2,
                texte : 'J’avoue le.a serveur.euse la dernière fois...',
                select: false
            },
            {
                id: 3,
                texte : "C'est un kink avec ma moitié, nous jugez pas",
                select: false
            },
            {
                id: 4,
                texte : "Bkhvahvykjhv avec ma moitié, nous jugez pas",
                select: false
            }
        ]
    },
]);














export const tableauQuiz = [
    //(objetQuestion) 
    {
        question : "As-tu déjà fais les yeux doux à un.e inconnu.e pendant un rencart avec chéri.e?",
        réponses : [
            "Jamais de la vie !",
            "J’avoue le.a serveur.euse la dernière fois...",
            "C'est un kink avec ma moitié, nous jugez pas",
            "Mattez juste un cul qui passe c'est pas faire les yeux doux?"
        ],
    },
    {
        question : "Question 2 ?",
        réponses : [
            //objetRéponses1 
            {
                texteRéponse : "Oui je m'appelle ***",
            },
            // objetRéponses2
            {
                texteRéponse : "Non tout vas bien pour moi",
            },
        ],
    }
]
</script>