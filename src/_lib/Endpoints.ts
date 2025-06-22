function getSuggestionsEndpoint(limit: number) {
    const randomSkip = Math.floor(Math.random() * 10) + 1;
    return `https://dummyjson.com/recipes?limit=${limit}&skip=${randomSkip}&select=name,image,prepTimeMinutes,cookTimeMinutes,cuisine,difficulty`;
}

function getTagsEndpoint() {
    return 'https://dummyjson.com/recipes/tags';
}

function getRecipeEndpoint(id: string) {
    return `https://dummyjson.com/recipes/${id}`;
}

function getSearchSuggestionEndpoint(search:string) {
    return `https://dummyjson.com/recipes/search?q=${search}&select=name&limit=5`;
}

function getDailyId(): number {
  const now = new Date();
  const epochDay = Math.floor(now.getTime() / (1000 * 60 * 60 * 24)); // days since epoch
  return (epochDay % 20) + 1;
}

function getRecipeOfDay() {
    return `https://dummyjson.com/recipes/${getDailyId()}`;
}

export {
    getSuggestionsEndpoint,
    getTagsEndpoint,
    getRecipeEndpoint,
    getSearchSuggestionEndpoint,
    getRecipeOfDay
}