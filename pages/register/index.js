import React from 'react';
import Nav from "@/components/Nav/Nav";
import styles from "@/pages/register/register.module.css";



const Index = () => {
    return (
        <div className={styles.container}>
            <Nav/>
            <form className={styles.form} method="post">
                <div class="form-example">
                    <label className={styles.label} name="name" id="name">Entrer votre nom: </label>
                    <input type="text" name="name" />
                </div>
                <div class="form-example">
                    <label className={styles.label} name="tel" id="tel">Entrer votre numéro de téléphone: </label>
                    <input type="tel" name="phone"  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                </div>
                <div class="form-example">
                    <label className={styles.label} name="email" id="email">Entrer votre email: </label>
                    <input type="email" name="email" />
                </div>
                <div class="form-example">
                    <label className={styles.label} name="password" id="password">Entrer un mot de passe: </label>
                    <input type="password" name="password" />
                </div>
                <div class="form-example">
                    <button className={styles.button} type="submit" value="Register">Valider</button>
                </div>
                </form>
        </div>
    )
}
  
export default Index