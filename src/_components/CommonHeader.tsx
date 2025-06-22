'use client'

import styles from './components.module.css';
import SearchBar from './SearchBar';

export default function CommonHeader() {
    return (
        <div className={styles.header}>
            <h2 className={styles.headH2}>Ready Recipe</h2>
            <SearchBar />
        </div>
    )
}