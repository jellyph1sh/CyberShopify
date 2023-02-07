import React from 'react';
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const Nav = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link className={styles.headerLogo} href={'/'}>
                    <img src="/logo.png"/>
                    <h1>CYBER SHOPIFY</h1>
                </Link>
                <nav className={styles.navbar}>
                    <ul>
                        <Link className={styles.navbarLi} href="/">Accueil</Link>
                        <Link className={styles.navbarLi} href="/contact">Contact</Link>
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