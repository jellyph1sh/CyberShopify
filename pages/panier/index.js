import React, { useState, useEffect } from "react";
import styles from "@/pages/commande/commande.module.css";
import Nav from "@/components/Nav/Nav";
import Cookies from "js-cookie";

const Index = () => {
    const [cartItems, setCartItems] = useState(() => {
        const cartFromCookie = Cookies.get("cart");
        return cartFromCookie ? JSON.parse(cartFromCookie) : [];
      });
    
      useEffect(() => {
        Cookies.set("cart", JSON.stringify(cartItems));
      }, [cartItems]);

      const removeFromCart = (itemKey) => {
        setCartItems(cartItems.filter((item) => item.key !== itemKey));
        console.log(cartItems)
      };

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

        <p className={styles.text}>Your shopping cart :</p>
        <span id={styles.underlineBasket} className={styles.underline}></span>
        {cartItems.map((product, index) => (
          <div
            key={index}
            className={styles.listItem}
            onClick={() =>
              setState({
                show: true,
                name: product.name,
                id: product.id,
                price: product.price,
                key: product.key
              })
            }
          >
            <img className={styles.imageProduct} src={"https://picsum.photos/200"}></img>
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
                  show: false
                })
              }
            >
              X
            </div>
            <div className={styles.modalProduct}>
              <h2 className={styles.text}> Supprimer {state.name} ?</h2>
              <p className={styles.text}>{state.price} €</p>
              <div className={styles.btnModal}>
                <button
                  onClick={() =>
                    setState({
                      show: false
                    },
                    removeFromCart(state.key))
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
        <h1 className={styles.text}>Purchase :</h1>
        <span id={styles.underlineCommande} className={styles.underline}></span>
        <div className={styles.displayTotal}>
          <p className={styles.text}> Number of products : {cartItems.length}</p>
          <span
            id={styles.underlineSeparate}
            className={styles.underline}
          ></span>
          <p className={styles.text}> Total price : {getTotalPrice(cartItems).toFixed(2)} €</p>
        </div>
        <button className={styles.button}>Payment</button>
      </div>
    </div>
  );
};

export default Index;
