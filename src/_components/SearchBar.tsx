'use client'

import { useQuery } from "@tanstack/react-query";
import styles from "./components.module.css";
import { ChangeEvent, useState } from "react";
import ReactQueryProvider from "./ReactQueryProvider";
import { getSearchSuggestionEndpoint } from "@/_lib/Endpoints";
import { useRouter } from "next/navigation";

function SearchBarWrapped() {
    const [searchInput, setSearchInput] = useState<string>('');
    const router = useRouter();

    const { data, isLoading, error } = useQuery({
        queryKey: ['search-suggestions', searchInput],
        queryFn: () => fetch(getSearchSuggestionEndpoint(searchInput)).then(res => res.json()),
        enabled: !!searchInput.trim()
    })

    const handleSearchInput = (event:ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    }

    const suggestionItemRadiusSelect = (index:number, limit:number) => {
        if (limit === 1) return '12px';
        else if (index === 0) return '12px 12px 4px 4px';
        else if (index === limit-1) return '4px 4px 12px 12px';
    }

    const handleSuggestionClick = (id:string) => {
        router.push(`/recipe/${id}`);
        setSearchInput('');
    }

    return (
        <div className={styles.headSearchContainer}>
            <input type="text" placeholder='Search recipe' className={styles.headSearch} value={searchInput} onChange={handleSearchInput} />
            <div className={styles.searchSuggestionsContainer}>
                {
                    isLoading && <span style={{ fontSize: '12px', margin: '4px' }}>Loading...</span>
                }
                {
                    error || (!data && !!searchInput.trim() && !isLoading) && <span style={{ fontSize: '12px', margin: '4px' }}>Nothing found...</span>
                }
                {
                    data?.recipes.map((recipe: {id: string, name: string}, index:number) => 
                        <button key={recipe.id} onClick={_ => handleSuggestionClick(recipe.id)} className={styles.searchSuggestionItem} style={{ borderRadius: suggestionItemRadiusSelect(index, data?.recipes.length) }}>{recipe.name}</button>
                    )
                }
            </div>
        </div>
    )
}

export default function SearchBar() {
    return (
        <ReactQueryProvider>
            <SearchBarWrapped />
        </ReactQueryProvider>
    )
}