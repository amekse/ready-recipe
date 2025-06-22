'use client'

import { useRouter } from "next/navigation";
import styles from "./components.module.css";

export default function RecipeOfDayLinkButton({id}:{id: string}) {
    const router = useRouter();

    const handleRecipeOfDayClick = () => {
        router.push(`/recipe/${id}`);
    }
    return <button onClick={handleRecipeOfDayClick} className={styles.recipeOfDayRightContainerButton}>&#128279;</button>;
}