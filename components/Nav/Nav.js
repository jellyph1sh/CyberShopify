import React from 'react';
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const Nav = () => {
    return (
        <div className={styles.container}>
            <head>
                <title>Site de vente</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" />
                <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap" rel="stylesheet"></link>
            </head>
            <header className={styles.header}>
                <h1>CYBER SHOPIFY</h1>
                <div className="image">
                    <img className={styles.headerLogo} src="https://zupimages.net/up/23/06/yj4l.png"/>
                </div>
                <nav className={styles.navbar}>
                    <ul>
                        <Link className={styles.navbarLi} href="/">Accueil</Link>
                        <Link className={styles.navbarLi} href="">Contact</Link>
                        {/* <Link className={styles.navbarLi} href="/commande">Commande</Link> */}
                        <Link className={styles.navbarLi} href="/login">Login</Link>
                        <Link className={styles.navbarLi} href="/register">Register</Link>
                        <Link className={styles.navbarLi} href="/panier">
                            <img src={"/paniers.png"} width="25px" height="25px"/>
                        </Link>
                    </ul>
                </nav>
            </header>
            <footer className={styles.footer}>
                <p>&copy; {new Date().getFullYear()} CYBER SHOPIFY</p>
            </footer>
      </div>
    );
};

export default Nav