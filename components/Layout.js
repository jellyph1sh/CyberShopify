import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: '/product1.jpg' },
  { id: 2, name: 'Product 2', price: 39.99, image: '/product2.jpg' },
  { id: 3, name: 'Product 3', price: 49.99, image: '/product3.jpg' },
  { id: 4, name: 'Product 4', price: 59.99, image: '/product4.jpg' },
  { id: 5, name: 'Product 5', price: 69.99, image: '/product5.jpg' }
]

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Site de vente</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" />
      </Head>

      <header className={styles.header}>
        <h1>Site de vente</h1>
        <nav className={styles.navbar}>
          <Link href="#">Accueil</Link>
          <Link href="#">Produits</Link>
          <Link href="#">Contact</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <h2>Nos produits</h2>
        <div className={styles.products}>
          {products.map(product => (
            <div key={product.id} className={styles.product}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.price} €</p>
              <button>Ajouter au panier</button>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Site de vente</p>
      </footer>
    </div>
  )
}
