import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Card from './Card/card'
import Nav from "@/components/Nav/Nav";
import React, {useEffect, useState} from "react";

export default function Layout() {
    console.log("test");
    const [panier, setPanier] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => {
            return res.json();
        })
        .then(res => {
            setProducts(res);
        })
    }), [panier];

    return (

        <div className={styles.container}>
            <Head>
                <title>CyberShopify</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"/>
            </Head>

            <Nav/>

            <main className={styles.main}>
                <h2>Our products : </h2>
                <div className={styles.products}>
                    {products.map((card) => (
                        <div key={card.id_product} className={styles.products}>
                            <Card
                                name={card.name}
                                price={card.price}
                                description={card.description}
                                id={card.id_product}
                                btn={<div className={styles.button} onClick={() => setPanier(
                                    [...panier,
                                        {
                                            id: card.id,
                                            price: card.price
                                        }]
                                )}>
                                    Buy
                                </div>}
                            />
                        </div>
                    ))}
                </div>
            </main>

            {/* <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Site de vente</p>
      </footer> */}
        </div>
    )
}