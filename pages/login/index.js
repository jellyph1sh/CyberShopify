import React from 'react';
import Nav from "@/components/Nav/Nav";
import styles from "@/pages/login/login.module.css";

const Index = () => {
    return (
        <div className={styles.container}>
            <Nav/>
            <form className={styles.form} action="" method="get" class="form-example">
                <div class="containerColumn" id="containerColGap">
                <div className={styles.title} >Login</div>
                    <div class="form-example">
                        <label className={styles.label} for="name">Adresse e-mail * </label>
                        <input className={styles.input} type="text" placeholder="saisissez votre e-mail" name="name" required/>
                    </div>
                    <div class="form-example">
                        <label className={styles.label} for="email">Mot de passe * </label>
                        <input className={styles.input} type="password" placeholder="saisissez votre mot de passe" name="password" required/>
                    </div>
                    <div class="form-example">
                        <button className={styles.btn} type="submit" value="Subscribe!">Valider</button>
                    </div>
                </div>
                </form>
        </div>
    )
}

export default Index