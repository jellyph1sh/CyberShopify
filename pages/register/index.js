import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Nav from "@/components/Nav/Nav";
import styles from "@/pages/register/register.module.css";

const Index = () => {
    const router = useRouter();

    const [name, setName] = useState('');
    const [phaisan, setPhaisan] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                phaisan,
                mail,
                password
            })
        });

        const data = await res.json();

        router.push('/login');//redirection après connexion.
    }

    return (
        <div className={styles.container}>
            <Nav/>
            <form onSubmit={(e) => handleRegister(e)} className={styles.form} action="" method="get" class="form-example">
                <div className={styles.title} >Register</div>
                <div class="form-example">
                    <label className={styles.label} for="name">Prenom* </label>
                    <input className={styles.input} type="text" placeholder="saisissez votre nom" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div class="form-example">
                    <label className={styles.label} for="phaisan">Nom*</label>
                    <input className={styles.input} type="text" placeholder="Nom" name="phaisan" required value={phaisan} onChange={(e) => setPhaisan(e.target.value)}/>
                </div>
                <div class="form-example">
                    <label className={styles.label} for="email">Adresse e-mail*</label>
                    <input className={styles.input} type="email" placeholder="saisissez votre e-mail" name="email" required value={mail} onChange={(e) => setMail(e.target.value)}/>
                </div>
                <div class="form-example">
                    <label className={styles.label} for="mdp">Mot de passe*</label>
                    <input className={styles.input} type="password" placeholder="saisissez votre password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
            
                <div class="form-example">
                    <button className={styles.btn} type="submit" value="Subscribe!">Valider</button>
                </div>
            </form>
        </div>
    )
}

export default Index