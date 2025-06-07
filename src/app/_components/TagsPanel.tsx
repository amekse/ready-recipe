import { useQuery } from "@tanstack/react-query"

export async function getStaticProps() {
    const {} = useQuery
    return { props: { tags } }
}

export default function TagsPanel({tags}:{tags: string[]}) {
    return (
        <div>
            Show me:  
        </div>
    )
}