import Link from "next/link";
import styles from "./components.module.css";

export default function CommonFooter() {
    return (
        <div className={styles.footer}>
            <Link href={'/privacy-policy'}>Privacy Policy</Link>
            <span>|</span>
            <Link href={'/about'} prefetch={true}>About</Link>
            <span>|</span>
            <Link href={'/contact-us'}>Contact Us</Link>
        </div>
    )
}