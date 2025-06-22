import { getRecipeOfDay } from "@/_lib/Endpoints";
import styles from "./components.module.css";
import RecipeOfDayLinkButton from "./RecipeOfDayLinkButton";

export default async function RecipeOfDay() {
    const data = await fetch(getRecipeOfDay(), { next: { revalidate: 86400 } }).then(res => res.json());

    return (
        <div className={styles.containerRow} style={{ backgroundColor: 'var(--card-bg)', borderRadius: '12px', alignItems: 'center' }}>
            <div className={styles.containerColumn}>
                <h2>{data.name}</h2>
                <span>&#9731; <strong>Difficulty:</strong> {data.difficulty} &bull; &#9969; <strong>Cuisine:</strong> {data.cuisine} &bull; &#9734; <strong>Rating:</strong> {data.rating}</span>
                <span>&#9202; <strong>Prep:</strong> {data.prepTimeMinutes} mins &bull; &#9201; <strong>Cook:</strong> {data.cookTimeMinutes} mins &bull; &#9684; <strong>Serving:</strong> {data.servings}</span>
            </div>
            <div className={styles.recipeOfDayRightContainer}>
                <img className={styles.recipeImage} src={data.image} alt=""/>
                <RecipeOfDayLinkButton id={data.id} />
            </div>
        </div>
    )
}