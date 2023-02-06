import React, {useState} from 'react'
import styles from '../../styles/Home.module.css'

const Card = ({name, price, description, subDescription, img, btn}) => {

    return (
        <div className={styles.products}>
            <div className={styles.product}>
                <img className={styles.img} src={img}></img>
                <h2 className={styles.h2Text}>{name}</h2>
                <span className={styles.underline}></span>
                <p className={styles.text}>{description}</p>
                <p className={styles.subtitles}>{subDescription}</p>
                <h3 className={styles.text}>Prix : {price} €</h3>
                {btn}
            </div>
        </div>
    );
};

export default Card;