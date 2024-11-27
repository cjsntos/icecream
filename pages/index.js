
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ice Cream Store</title>
        <meta name="description" content="Delicious Ice Creams" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Our Ice Cream Store!</h1>
        <p className={styles.description}>Explore our delicious flavors below:</p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <img src="/images/chocolate.jpg" alt="Chocolate" />
            <h2>Chocolate</h2>
          </div>
          <div className={styles.card}>
            <img src="/images/baunilha.jpg" alt="Baunilha" />
            <h2>Baunilha</h2>
          </div>
          <div className={styles.card}>
            <img src="/images/morango.jpg" alt="Morango" />
            <h2>Morango</h2>
          </div>
          <div className={styles.card}>
            <img src="/images/limao.jpg" alt="Limão" />
            <h2>Limão</h2>
          </div>
          <div className={styles.card}>
            <img src="/images/menta-choco.jpg" alt="Menta com Chocolate" />
            <h2>Menta com Chocolate</h2>
          </div>
          <div className={styles.card}>
            <img src="/images/caramelo.jpg" alt="Caramelo" />
            <h2>Caramelo</h2>
          </div>
        </div>
      </main>
    </div>
  );
}
