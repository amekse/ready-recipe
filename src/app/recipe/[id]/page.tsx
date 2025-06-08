'use client'

import { useRouter } from "next/router"
import { use } from "react";
import styles from "../../page.module.css";

export default function Recipe({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const { id } = resolvedParams;

    return (
        <div className={styles.page}>
            <span>Recipe {id}</span>
        </div>
    )
}