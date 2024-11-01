import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.layout}>
            <div className={styles.gridContainer}>
                <Link
                    href={{
                        pathname: "/detail",
                        query: {
                            name: "test",
                        },
                    }}
                    className={styles.card}
                >
                    <p>sdhsjhds</p>
                    <p>test</p>
                </Link>
                <div className={styles.card}>
                    <p>test 2</p>
                </div>
                <div className={styles.card}>
                    <p>test 3</p>
                </div>
                <div className={styles.card}>
                    <p>test 4</p>
                </div>
                <div className={styles.card}>
                    <p>test 4</p>
                </div>
                <div className={styles.card}>
                    <p>test 4</p>
                </div>
                <div className={styles.card}>
                    <p>test 4</p>
                </div>
                <div className={styles.card}>
                    <p>test</p>
                </div>
                <div className={styles.card}>
                    <p>test 2</p>
                </div>
                <div className={styles.card}>
                    <p>test 3</p>
                </div>
                <div className={styles.card}>
                    <p>test 4</p>
                </div>
                <div className={styles.card}>
                    <p>test 4</p>
                </div>
                <div className={styles.card}>
                    <p>test 4</p>
                </div>
                <div className={styles.card}>
                    <p>test 4</p>
                </div>
            </div>

            <p>test</p>
        </div>
    );
}
