import React, { useState, useEffect } from "react";
import styles from "@/pages/commande/commande.module.css";
import Nav from "@/components/Nav/Nav";
import Cookies from "js-cookie";

const Index = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = Cookies.get("cart");
    if (cart) {
      setCartItems(JSON.parse(cart));
    }
  }, []);

  const products = [
    {
      id: 1,
      name: "Objet 1",
      price: 29.99,
      quantity: 5,
      image: "https://picsum.photos/200/300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      subDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Objet 2",
      price: 39.99,
      quantity: 5,
      image: "https://picsum.photos/200/300",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. hgbgb",
      subDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      name: "Objet 3",
      price: 49.99,
      quantity: 5,
      image: "https://picsum.photos/200/300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      subDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      name: "Objet 4",
      price: 59.99,
      quantity: 5,
      image: "https://picsum.photos/200/300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
    {
      id: 5,
      name: "Objet 5",
      price: 69.99,
      quantity: 5,
      image: "https://picsum.photos/200/300",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
  ];

  const [state, setState] = useState({
    show: false,
    data: [],
  });

  let total = 0;

  function getTotalPrice(array) {
    array.forEach((element) => {
      total += element.price;
    });

    return total;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Nav />

        <p className={styles.text}>Votre panier :</p>
        <span id={styles.underlineBasket} className={styles.underline}></span>
        {cartItems.map((product) => (
          <div
            key={product.id}
            className={styles.listItem}
            onClick={() =>
              setState({
                show: true,
                name: product.name,
                price: product.price,
                id: product.id,
                img: product.img,
              })
            }
          >
            <img className={styles.imageProduct} src={product.img}></img>
            <h2 className={styles.text}>{product.name}</h2>
            <p className={styles.text}>{product.price} €</p>
          </div>
        ))}

        {state.show === true && (
          <div className={styles.backgroundModalProduct}>
            <div
              className={styles.btnClose}
              onClick={() =>
                setState({
                  show: false,
                  name: "",
                  price: "",
                  id: "",
                })
              }
            >
              X
            </div>
            <div className={styles.modalProduct}>
              <h2 className={styles.text}>{state.name}</h2>
              <p className={styles.text}>{state.price} €</p>
              <p className={styles.text}>{state.id}</p>
              <div className={styles.btnModal}>
                <button
                  onClick={() =>
                    setState({
                      show: false,
                      name: "",
                      price: "",
                      id: "",
                    })
                  }
                >
                  Accepter
                </button>
                <button
                  onClick={() =>
                    setState({
                      show: false,
                      name: "",
                      price: "",
                      id: "",
                    })
                  }
                >
                  Refuser
                </button>
              </div>
            </div>
          </div>
        )}
        <div></div>
      </div>
      <div className={styles.totalContainer}>
        <h1 className={styles.text}>Commande :</h1>
        <span id={styles.underlineCommande} className={styles.underline}></span>
        <div className={styles.displayTotal}>
          <p className={styles.text}> Nombre de produits : {cartItems.length}</p>
          <span
            id={styles.underlineSeparate}
            className={styles.underline}
          ></span>
          <p className={styles.text}> Total prix : {getTotalPrice(cartItems).toFixed(2)} €</p>
        </div>
        <button className={styles.button}>Paiement</button>
      </div>
    </div>
  );
};

export default Index;
