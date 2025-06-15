import { getTagsEndpoint } from "@/_lib/Endpoints";

export default async function TagsPanel() {
    const res = await fetch(getTagsEndpoint(), { next: { revalidate: 86400 } });
    const tags = await res.json();

    return (
        <div>
            Show me:  {tags.map((tag:string) => <button key={tag}>{tag}</button>)}
        </div>
    )
}