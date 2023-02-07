import Nav from "../../components/Nav/Nav.js"
import styles from "@/pages/contact/contact.module.css";



const Index = () => {
    return (
        
        <div className={styles.globalContainer}>
           <Nav/>
            <h1 className={styles.title}>Where can you contact us?</h1>
            <span className={styles.underline}></span>
            <div className={styles.content}>
                <div className={styles.contact} >
                    <p id="bold" className={styles.text}>PHONE NUMBER :</p>
                    <p className={styles.text}>00.00.00.00.00</p>
                </div>
                <div  className={styles.contact}>
                    <p id="bold" className={styles.text}>EMAIL :</p>
                    <p className={styles.text}>cybershop@gmail.com</p>
                </div>
                <div className={styles.contact}>
                    <p id="bold" className={styles.text}>INSTAGRAM :</p>
                    <p className={styles.text}>cybershop_</p>
                </div>
            </div>
        </div>
    )
}

export default Index