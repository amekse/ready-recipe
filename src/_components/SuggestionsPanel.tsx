'use client'

import { useQuery } from "@tanstack/react-query"
import SuggestionsPanelSkeleton from "./loaders/SuggestionsPanelSkeleton"
import ReactQueryProvider from "./ReactQueryProvider"
import { TSuggestion } from "@/common.types"
import Link from "next/link"

function WrappedSuggestionsPanel() {
    const { isLoading, error, data } = useQuery({
        queryKey: ['suggestion-panel-recipes'],
        queryFn: () => fetch('https://dummyjson.com/recipes?limit=10&skip=6&select=name,image').then(res => res.json()),
        staleTime: 3600 * 1000,
    })

    if (isLoading) {
        return <SuggestionsPanelSkeleton />
    }

    if (error) {
        return <div>Something went wrong!</div>
    }

    return (
        <div>
            {
                data?.recipes.map((suggestion:TSuggestion) =>
                <div key={suggestion.id}>
                    <Link href={`/recipe/${suggestion.id}`}>{suggestion.name}</Link>
                </div>)
            }
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