import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout.js'
import React from "react";

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <Layout/>
            </main>
        </>
    )
}
