'use client'

import { useQuery } from "@tanstack/react-query"
import SuggestionsPanelSkeleton from "./loaders/SuggestionsPanelSkeleton"
import ReactQueryProvider from "./ReactQueryProvider"
import { TSuggestion } from "@/common.types"
import Link from "next/link"
import styles from "./components.module.css";
import { useState } from "react"

function WrappedSuggestionsPanel() {
    const { isLoading, error, data } = useQuery({
        queryKey: ['suggestion-panel-recipes'],
        queryFn: () => fetch(`https://dummyjson.com/recipes?limit=12&select=name,image`).then(res => res.json()),
        staleTime: 3600 * 1000,
    })

    const [pageSkip, setPageSkip] = useState(0);

    const onClickChevronNext = () => {
        if (pageSkip === 8) return;
        setPageSkip(pageSkip + 4);
    }

    const onClickChevronPrev = () => {
        if (pageSkip === 0) return;
        setPageSkip(pageSkip - 4);
    }

    if (isLoading) {
        return <SuggestionsPanelSkeleton />
    }

    if (error) {
        return <div>Something went wrong!</div>
    }

    return (
        <div className={styles.suggestionsPanel}>
            <button className={styles.suggestionsPanelChevrons} onClick={onClickChevronPrev} disabled={pageSkip === 0}>&#11207;</button>
            {
                data?.recipes.slice(pageSkip, pageSkip+4).map((suggestion:TSuggestion) =>
                <div key={suggestion.id} className={styles.suggestionCard}>
                    <Link href={`/recipe/${suggestion.id}`}>{suggestion.name}</Link>
                </div>)
            }
            <button className={styles.suggestionsPanelChevrons} onClick={onClickChevronNext} disabled={pageSkip === 8}>&#11208;</button>
        </div>
    )
}

export default function SuggestionsPanel() {
    return (
        <ReactQueryProvider>
            <WrappedSuggestionsPanel />
        </ReactQueryProvider>
    )
}