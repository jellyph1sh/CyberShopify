import React from 'react';
import Nav from "@/components/Nav/Nav";
import styles from "@/pages/login/login.module.css";

const Index = () => {
    return (
        <div className={styles.container}>
            <Nav/>
            <form className={styles.form} action="" method="get" class="form-example">
                <div class="form-example">
                    <label className={styles.label} for="name">Entrer votre identifiant: </label>
                    <input type="text" name="name" />
                </div>
                <div class="form-example">
                    <label className={styles.label} for="email">Entrer votre mot de passe: </label>
                    <input type="password" name="password" />
                </div>
                <div class="form-example">
                    <button className={styles.button} type="submit" value="Subscribe!">Valider</button>
                </div>
                </form>
        </div>
    )
}

export default Index