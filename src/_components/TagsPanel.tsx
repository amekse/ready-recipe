export default async function TagsPanel() {
    const res = await fetch('https://dummyjson.com/recipes/tags', { next: { revalidate: 86400 } });
    const tags = await res.json();

    return (
        <div>
            Show me:  {tags.map((tag:string) => <button key={tag}>{tag}</button>)}
        </div>
    )
}