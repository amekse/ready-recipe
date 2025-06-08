import dynamic from "next/dynamic";
import styles from "./page.module.css";
import { Suspense } from "react";
import SuggestionsPanel from "@/_components/SuggestionsPanel";
import TagsPanelSekelton from "@/_components/loaders/TagsPanelSkeleton";

const TagsPanel = dynamic(() => import('../_components/TagsPanel'));

export default function Home() {
  return (
    <div className={styles.page}>
      <Suspense fallback={<TagsPanelSekelton />}>
        <TagsPanel />
      </Suspense>
      <SuggestionsPanel />
    </div>
  );
}
