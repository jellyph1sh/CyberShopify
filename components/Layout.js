import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Product from './Card/card'

const products = [
  {  name: 'Objet 1', price: 29.99, image: "https://picsum.photos/200/300", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. " ,subDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",link:"https://google.com" },
  {  name: 'Objet 2', price: 39.99, image: 'https://picsum.photos/200/300' , description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. hgbgb", subDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",link:"https://google.com"},
  {  name: 'Objet 3', price: 49.99, image: 'https://picsum.photos/200/300' , description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",subDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit." ,link:"https://google.com"},
  {  name: 'Objet 4', price: 59.99, image: 'https://picsum.photos/200/300' , description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. " ,link:"https://google.com"},
  {  name: 'Objet 5', price: 69.99, image: 'https://picsum.photos/200/300', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "  ,link:"https://google.com"}
]

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Site de vente</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" />
      </Head>

      {/* <header className={styles.header}>
        <h1>Site de vente</h1>
        <nav className={styles.navbar}>
          <Link href="#">Accueil</Link>
          <Link href="#">Produits</Link>
          <Link href="#">Contact</Link>
        </nav>
      </header> */}

      <main className={styles.main}>
        <h2>Nos produits</h2>
        <div className={styles.products}>
            {products.map((product) => (
              <Product
                img={product.image}
                name={product.name}
                price={product.price}
                description={product.description}
                subDescription={product.subDescription}
                link={product.link}
              />
            ))}
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Site de vente</p>
      </footer> */}
    </div>
  )
}
