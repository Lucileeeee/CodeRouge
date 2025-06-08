<script>
import { ref } from "vue";
import yeuxDoux from "@/assets/images_DallE/yeux_doux.jpeg";
import mami_metro from "@/assets/images_DallE/mami_metro.jpeg";
import clope from "@/assets/images_DallE/clope.jpeg";

// todo ajouter image avec alt à question
export const quiz = ref([
  {
    question:
      "As-tu déjà fais les yeux doux à un.e inconnu.e pendant un rencart avec chéri.e?",
    image: [yeuxDoux, "prompt_image_dalle"],
    reponses: [
      "Jamais de la vie !",
      "J’avoue le.a serveur.euse la dernière fois...",
      "C'est un kink avec ma moitié, nous jugez pas",
      "Mattez juste un cul qui passe c'est pas faire les yeux doux?",
    ],
  },
  {
    question: "Ta réaction quand une petite vieille entre dans le métro?",
    image: [mami_metro, "prompt_image_dalle"],
    reponses: [
      "Trop occupé à finir Instagram, je l'ai même pas vu",
      "Je l'ai vu, mais je m'en fou",
      "Je me lève, normal",
    ],
  },
  {
    question: "Tu jette tes mégots dans la rue?",
    image: [clope, "prompt_image_dalle"],
    reponses: [
      "J'avoue si y a pas de poubelle",
      "Je n'ai jamais fumé, mère me l'a formellement interdit",
      /*   "C'est la rue à mon père", */
    ],
  },
]);
</script>
