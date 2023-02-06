import React, {useState} from 'react';
import styles from "@/pages/commande/commande.module.css";
import Nav from "@/components/Nav/Nav";

const Index = () => {

    const products = [
        {id: 1, name: 'Product 1', price: 29.99},
        {id: 2, name: 'Product 2', price: 39.99},
        {id: 3, name: 'Product 3', price: 49.99},
        {id: 4, name: 'Product 4', price: 59.99},
        {id: 5, name: 'Product 5', price: 69.99}
    ]

    const [state, setState] = useState({
        show: false,
        data: []
    })

    return (
        <div className={styles.content}>
            <Nav/>
            {products.map(product => (
                <div key={product.id} className={styles.listItem} onClick={() => setState({
                    show: true,
                    name: product.name,
                    price: product.price,
                    id: product.id,
                })}>
                    <h2>{product.name}</h2>
                    <p>{product.price} €</p>
                </div>
            ))}

            {state.show === true &&
                <div className={styles.backgroundModalProduct}>
                    <div className={styles.btnClose} onClick={() => setState({
                        show: false,
                        name: "",
                        price: "",
                        id: "",
                    })}>X</div>
                    <div className={styles.modalProduct}>
                        <h2>{state.name}</h2>
                        <p>{state.price} €</p>
                        <p>{state.id}</p>
                        <div className={styles.btnModal}>
                            <button onClick={() => setState({
                                show: false,
                                name: "",
                                price: "",
                                id: "",
                            })}>Accept</button>
                            <button onClick={() => setState({
                                show: false,
                                name: "",
                                price: "",
                                id: "",
                            })}>Refuse</button>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default Index;