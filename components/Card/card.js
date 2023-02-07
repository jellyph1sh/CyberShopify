import styles from '../../styles/Home.module.css'

const Card = ({name, price, description, img, btn}) => {

    return (
        <div className={styles.product}>
            <img className={styles.img} src="https://picsum.photos/id/237/200/300"></img>
            <div className={styles.content}>
                <p className={styles.h2Text}>{name}</p>
                <span className={styles.underline}></span>
                <p className={styles.text}>{description}</p>
                {/* <p className={styles.subtitles}>{subDescription}</p> */}
                <p className={styles.text}>Price : {price} €</p>
                {btn}
            </div>
        </div>
    );
};

export default Card;