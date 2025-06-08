import dynamic from "next/dynamic";
import TagsPanel from "../_components/TagsPanel";
import styles from "./page.module.css";
import { Suspense } from "react";
import SuggestionsPanelSkeleton from "../_components/skeletons/SuggestionsPanelSkeleton";

const SuggestionsPanel = dynamic(() => import ('../_components/SuggestionsPanel'));

export default function Home({tags}:{tags:string[]}) {
  return (
    <div className={styles.page}>
      <TagsPanel />
      <Suspense fallback={<SuggestionsPanelSkeleton />}>
        <SuggestionsPanel />
      </Suspense>
    </div>
  );
}
