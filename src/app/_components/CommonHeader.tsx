'use client'

import styles from './components.module.css';

export default function CommonHeader() {
    return (
        <div className={styles.header}>
            <span>Ready Recipe</span>
            <div>Search Bar</div>
            <button>Theme</button>
        </div>
    )
}