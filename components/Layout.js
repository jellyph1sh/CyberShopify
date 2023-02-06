import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Card from './Card/card'
import Nav from "@/components/Nav/Nav";
import React, {useEffect, useState} from "react";

export default function Home() {

    const products = [
        {
            id: 1,
            name: 'Objet 1',
            price: 29.99,
            quantity: 5,
            image: "https://picsum.photos/200",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            subDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 2,
            name: 'Objet 2',
            price: 39.99,
            quantity: 5,
            image: 'https://picsum.photos/200',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            subDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 3,
            name: 'Objet 3',
            price: 49.99,
            quantity: 5,
            image: 'https://picsum.photos/200',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            subDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 4,
            name: 'Objet 4',
            price: 59.99,
            quantity: 5,
            image: 'https://picsum.photos/200',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
            id: 5,
            name: 'Objet 5',
            price: 69.99,
            quantity: 5,
            image: 'https://picsum.photos/200',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        },
        {
          id: 6,
          name: 'Objet 6',
          price: 69.99,
          quantity: 5,
          image: 'https://picsum.photos/200',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
      }
    ]

    const [panier, setPanier] = useState([])

    useEffect(() => {
        console.log(panier)
    }), [panier]

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
                <h2>Nos produits</h2>
                <div className={styles.products}>
                    {products.map((card) => (
                        <div key={products.id} className={styles.products}>
                            <Card
                                img={card.image}
                                name={card.name}
                                price={card.price}
                                description={card.description}
                                subDescription={card.subDescription}
                                id={card.id}
                                btn={<div className={styles.button} onClick={() => setPanier(
                                    [...panier,
                                        {
                                            id: card.id,
                                            price: card.price
                                        }]
                                )}>
                                    Acheter
                                </div>}
                            />
                        </div>
                    ))}
                </div>
            </main>

            <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Site de vente</p>
      </footer>
        </div>
    )
}
