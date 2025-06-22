import RecipeOfDay from "@/_components/RecipeOfDay";
import styles from "./page.module.css";
import SuggestionsPanel from "@/_components/SuggestionsPanel";

export default function Home() {
  return (
    <div className={styles.page}>
      <RecipeOfDay />
      <SuggestionsPanel />
    </div>
  );
}
