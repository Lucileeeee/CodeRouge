<script>
import { ref } from "vue";

// todo ajouter image avec alt à question
export const quiz = ref([
  {
    question:
      "As-tu déjà fais les yeux doux à un.e inconnu.e pendant un rencart avec chéri.e?",
    image: ["url_chemin/backend", "prompt_image_dalle"],
    reponses: [
      "Jamais de la vie !",
      "J’avoue le.a serveur.euse la dernière fois...",
      "C'est un kink avec ma moitié, nous jugez pas",
      "Mattez juste un cul qui passe c'est pas faire les yeux doux?",
    ],
  },
  {
    question: "Ta réaction quand une petite vieille entre dans le métro?",
    reponses: [
      "Trop occupé à finir Instagram, je l'ai même pas vu",
      "Je l'ai vu, mais je m'en fou",
      "Je me lève, normal",
    ],
  },
  {
    question: "Tu jette tes mégots dans la rue?",
    reponses: [
      "J'avoue si y a pas de poubelle",
      "Je n'ai jamais fumé",
      "C'est la rue à mon père",
    ],
  },
]);
</script>
