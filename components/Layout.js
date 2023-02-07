import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "./Card/card";
import Nav from "@/components/Nav/Nav";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Home() {
  const [panier, setPanier] = useState([]);

  const products = [
    {
      id: 1,
      name: "Objet 1",
      price: 29.99,
      quantity: 5,
      image: "https://picsum.photos/200",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      subDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Objet 2",
      price: 39.99,
      quantity: 5,
      image: "https://picsum.photos/200",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      subDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      name: "Objet 3",
      price: 49.99,
      quantity: 5,
      image: "https://picsum.photos/200",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      subDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      name: "Objet 4",
      price: 59.99,
      quantity: 5,
      image: "https://picsum.photos/200",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
    {
      id: 5,
      name: "Objet 5",
      price: 69.99,
      quantity: 5,
      image: "https://picsum.photos/200",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
    {
      id: 6,
      name: "Objet 6",
      price: 69.99,
      quantity: 5,
      image: "https://picsum.photos/200",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
  ];

  const addToCart = (product, quantity = 1) => {
    let cart = Cookies.get("cart");
    if (!cart) {
      cart = [];
    } else {
      cart = JSON.parse(cart);
    }

    const itemIndex = cart.findIndex((item) => item.id === product.id);
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      img: product.img,
    });

    Cookies.set("cart", JSON.stringify(cart));
  };

  useEffect(() => {
    console.log(panier);
    console.log(Cookies.get("cart"));
  }),
    [panier];

  return (
    <div className={styles.container}>
      <Head>
        <title>CyberShopify</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
        />
      </Head>

      <Nav />

      <main className={styles.main}>
        <h2>Nos produits</h2>
        <div className={styles.products}>
          {products.map((card) => (
            <div
              onClick={() => addToCart(card)}
              key={products.id}
              className={styles.products}
            >
              <Card
                img={card.image}
                name={card.name}
                price={card.price}
                description={card.description}
                subDescription={card.subDescription}
                id={card.id}
                btn={
                  <div
                    className={styles.button}
                    onClick={() =>
                      setPanier([
                        ...panier,
                        {
                          id: card.id,
                          price: card.price,
                        },
                      ])
                    }
                  >
                    Acheter
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
