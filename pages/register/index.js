import React from 'react';
import Nav from "@/components/Nav/Nav";
import styles from "@/pages/register/register.module.css";

const Index = () => {
    return (
        <div className={styles.container}>
            <Nav/>
            <form className={styles.form} action="" method="get" class="form-example">
            <div className={styles.title} >Register</div>
                <div class="form-example">
                    <label className={styles.label} for="name">Nom et prénom * </label>
                    <input className={styles.input} type="text" placeholder="saisissez votre nom" name="name" required />
                </div>
                <div class="form-example">
                    <label className={styles.label} for="tel">Numéro de téléphone *</label>
                    <input className={styles.input} type="tel" placeholder="saisissez votre numéro de telephone" name="phone"  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                </div>
                <div class="form-example">
                    <label className={styles.label} for="email">Adresse e-mail * </label>
                    <input className={styles.input} type="email" placeholder="saisissez votre e-mail" name="email" required/>
                </div>
                <div class="form-example">
                    <label className={styles.label} for="mdp">Mot de passe * </label>
                    <input className={styles.input} type="password" placeholder="saisissez votre password" name="password" required/>
                </div>
            
                <div class="form-example">
                    <button className={styles.btn} type="submit" value="Subscribe!">Valider</button>
                </div>
                </form>
        </div>
    )
}

export default Index