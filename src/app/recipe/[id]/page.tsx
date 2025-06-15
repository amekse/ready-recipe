'use client'

import { use } from "react";
import styles from "../../page.module.css";
import ReactQueryProvider from "@/_components/ReactQueryProvider";
import { useQuery } from "@tanstack/react-query";

function WrappedRecipe({ id }: { id: string }) {
    const { data, isLoading, error } = useQuery({
        queryKey: ['recipe-details', id],
        queryFn: () => fetch(`https://dummyjson.com/recipes/${id}`).then(res => res.json())
    })

    if (isLoading) {
        return (
            <div className={styles.page}>
                <span>Loading...</span>
            </div>
        )
    }

    if (error) {
        return (
            <div className={styles.page}>
                <span>Sorry, couldn't get the recipe. Please try again later.</span>
            </div>
        )
    }

    return (
        <div className={styles.page}>
            <span>{JSON.stringify(data)}</span>
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