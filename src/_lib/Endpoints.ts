function getSuggestionsEndpoint(limit: number) {
    return `https://dummyjson.com/recipes?limit=${limit}&select=name,image`;
}

function getTagsEndpoint() {
    return 'https://dummyjson.com/recipes/tags';
}

function getRecipeEndpoint(id: string) {
    return `https://dummyjson.com/recipes/${id}`;
}

export {
    getSuggestionsEndpoint,
    getTagsEndpoint,
    getRecipeEndpoint
}