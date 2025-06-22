import { getTagsEndpoint } from "@/_lib/Endpoints";
import styles from "./components.module.css";

export default async function TagsPanel() {
    const res = await fetch(getTagsEndpoint(), { next: { revalidate: 86400 } });
    const tags = await res.json();

    return (
        <div className={styles.tagsPanel}>
            <span style={{ fontSize: '14px' }}>Show me:</span> {tags.map((tag:string) => <button className={styles.tagsPanelButton} key={tag}>{tag}</button>)}
        </div>
    )
}