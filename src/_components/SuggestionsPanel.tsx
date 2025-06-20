'use client'

import { useQuery } from "@tanstack/react-query"
import SuggestionsPanelSkeleton from "./loaders/SuggestionsPanelSkeleton"
import ReactQueryProvider from "./ReactQueryProvider"
import { TSuggestion } from "@/common.types"
import Link from "next/link"
import styles from "./components.module.css";
import { useState } from "react"
import { getSuggestionsEndpoint } from "@/_lib/Endpoints"
import { suggestionsFinalPageLimit, suggestionsPaginationCount, suggestionsStartPageLimit } from "@/_lib/Constants"

function WrappedSuggestionsPanel() {
    const { isLoading, error, data } = useQuery({
        queryKey: ['suggestion-panel-recipes'],
        queryFn: () => fetch(getSuggestionsEndpoint(12)).then(res => res.json()),
        staleTime: 3600 * 1000,
    })

    const [pageSkip, setPageSkip] = useState(0);

    const onClickChevronNext = () => {
        if (pageSkip === suggestionsFinalPageLimit) return;
        setPageSkip(pageSkip + suggestionsPaginationCount);
    }

    const onClickChevronPrev = () => {
        if (pageSkip === suggestionsStartPageLimit) return;
        setPageSkip(pageSkip - suggestionsPaginationCount);
    }

    const showPagedList = () => data?.recipes.slice(pageSkip, pageSkip + suggestionsPaginationCount);

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
                showPagedList().map((suggestion:TSuggestion) =>
                <Link className={styles.suggestionCard} key={suggestion.id} href={`/recipe/${suggestion.id}`}>
                    {suggestion.name}
                </Link>)
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