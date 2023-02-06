import React from 'react';
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const Nav = () => {
    return (
        <header className={styles.header}>
            <h1>CyberShopify</h1>
            <nav className={styles.navbar}>
                <Link href="/">Accueil</Link>
                <Link href="/commande">Commande</Link>
                <Link href="/panier">
                    <img src={"/paniers.png"} width="25px" height="25px"/>
                </Link>
            </nav>
        </header>
    );
};

export default Nav;