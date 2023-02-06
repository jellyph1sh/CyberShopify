import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Card from './Card/card'

const products = [
  {id:1 , name: 'Objet 1', price: 29.99, quantity:5, image: "https://picsum.photos/200/300", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. " ,subDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",link:"https://google.com" },
  {id:2 ,  name: 'Objet 2', price: 39.99,quantity:5, image: 'https://picsum.photos/200/300' , description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. hgbgb", subDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",link:"https://google.com"},
  {id:3 ,  name: 'Objet 3', price: 49.99,quantity:5, image: 'https://picsum.photos/200/300' , description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",subDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit." ,link:"https://google.com"},
  {id:4 ,  name: 'Objet 4', price: 59.99,quantity:5, image: 'https://picsum.photos/200/300' , description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. " ,link:"https://google.com"},
  {id:5 ,  name: 'Objet 5', price: 69.99,quantity:5, image: 'https://picsum.photos/200/300', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "  ,link:"https://google.com"}
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
            {products.map((card) => (
              <div key={products.id} className={styles.products} onClick={() => console.log([card.id,card.name,card.price,card.quantity])}>
                <Card
                  img={card.image}
                  name={card.name}
                  price={card.price}
                  description={card.description}
                  subDescription={card.subDescription}
                  link={card.link}
                />  
              </div>   
            ))}
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Site de vente</p>
      </footer> */}
    </div>
  )
}
