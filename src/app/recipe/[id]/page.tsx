'use client'

import { use } from "react";
import styles from "../../page.module.css";
import ReactQueryProvider from "@/_components/ReactQueryProvider";
import { useQuery } from "@tanstack/react-query";
import { getRecipeEndpoint } from "@/_lib/Endpoints";
import { TRecipe } from "@/common.types";

function WrappedRecipe({ id }: { id: string }) {
    const { data, isLoading, error } = useQuery<TRecipe>({
        queryKey: ['recipe-details', id],
        queryFn: () => fetch(getRecipeEndpoint(id)).then(res => res.json() as Promise<TRecipe>)
    })

    if (isLoading) {
        return (
            <div className={styles.page}>
                <span>Loading...</span>
            </div>
        )
    }

    if (error || !data) {
        return (
            <div className={styles.page}>
                <span>Sorry, couldn&apos;t get the recipe. Please try again later.</span>
            </div>
        )
    }

    return (
        <div className={styles.page}>
            <div className={styles.containerColumn} style={{ backgroundColor: 'transparent' }}>
                <div className={styles.containerColumn} style={{ backgroundColor: 'var(--card-bg)', borderRadius: '12px' }}>
                    <div className={styles.containerRow} style={{ alignItems: 'center' }}>
                        <h2>{data.name}</h2>
                        <img className={styles.recipeImage} src={data.image} alt=""/>
                    </div>
                    <div className={styles.containerRow}>
                        <span>&#9731; <strong>Difficulty:</strong> {data.difficulty} &bull; &#9969; <strong>Cuisine:</strong> {data.cuisine}</span>
                        <span>&#9734; <strong>Rating:</strong> {data.rating}</span>
                    </div>
                    <div className={styles.containerRow}>
                        <span>&#9202; <strong>Prep:</strong> {data.prepTimeMinutes} &bull; &#9201; <strong>Cook:</strong> {data.cookTimeMinutes}</span>
                        <span>&#9684; <strong>Serving:</strong> {data.servings}</span>
                    </div>
                </div>
                <div className={styles.containerRow}>
                    <div className={styles.containerColumn}>
                        <span>&#10003; <strong>Ingredients:</strong></span>
                        {
                            data.ingredients.map((ingredient, index) => <span key={ingredient}>{index+1}. {ingredient}</span>)
                        }
                    </div>
                    <div className={styles.containerColumn}>
                        <span>&#9776; <strong>Instructions:</strong></span>
                        {
                            data.instructions.map((step, index) => <span key={step}>{index+1}. {step}</span>)
                        }
                    </div>
                </div>
                <div className={styles.recipeTags}>
                    <span>&#x1F3F7; <strong>Tags:</strong></span>
                    {
                        data.tags.map(tag => <span key={tag}>{tag}</span>)
                    }
                </div>
                <div className={styles.recipeTags}>
                    <span>&#9832; <strong>Meal type:</strong></span>
                    {
                        data.mealType.map(typeTag => <span key={typeTag}>{typeTag}</span>)
                    }
                </div>
            </div>
        </div>
    )
}

export default function Recipe({params}: {params: Promise<{id:string}>}) {
    const resolvedParams = use(params);
    const { id } = resolvedParams;

    return (
        <ReactQueryProvider>
            <WrappedRecipe id={id} />
        </ReactQueryProvider>
    )
}