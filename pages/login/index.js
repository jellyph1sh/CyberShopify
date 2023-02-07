import React, { useState } from 'react';
import { useRouter } from "next/router";
import Nav from "@/components/Nav/Nav";
import styles from "@/pages/login/login.module.css";

const Index = () => {
    const router = useRouter();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost:5000/api/login', {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                mail: email,
                password
            })
        })

        const data = await res.json();
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);

        router.push('/')
    }

    return (
        <div className={styles.container}>
            <Nav/>
            <form onSubmit={(e) => handleLogin(e)} className={styles.form} action="" method="get" class="form-example">
                <div className="containerColumn" id="containerColGap">
                <div className={styles.title} >Login</div>
                    <div className="form-example">
                        <label className={styles.label} for="name">Adresse e-mail * </label>
                        <input className={styles.input} type="text" placeholder="saisissez votre e-mail" name="name" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-example">
                        <label className={styles.label} for="email">Mot de passe * </label>
                        <input className={styles.input} type="password" placeholder="saisissez votre mot de passe" name="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="form-example">
                        <button className={styles.btn} type="submit" value="Subscribe!">Valider</button>
                    </div>
                </div>
                </form>
        </div>
    )
}

export default Index