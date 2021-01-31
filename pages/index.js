import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const year = new Date().getFullYear();

// if (screen.width <= 860) {
//   document.querySelector('.burger').setAttribute('display', 'unset');
// }

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>KornDog - Beograd</title>
      </Head>

      <div className={styles.whiteground}>
        <main className={styles.main}>
          <div className={styles.burger}>Radi</div>
          <nav className={styles.topnav}>
            <div>
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/menu">
                <a>Menu</a>
              </Link>
            </div>

            <div>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
              <Link href="/about">
                <a>About</a>
              </Link>
            </div>
          </nav>
          <div className={styles.logo}>
            <img
              src="https://res.cloudinary.com/dgsozud9i/image/upload/v1611591271/kd1_f1ve4g.png"
              alt="Logo"
              width="165"
              height="165"
            />
          </div>

          <h1 className={styles.title}>Nešto što još niste probali kod Nas!</h1>
          <div className={styles.virsla}>
            <img
              src="https://res.cloudinary.com/dgsozud9i/image/upload/v1611259325/giphy_sl6ky6.gif"
              alt="Picture of hot dog"
              width="250"
              height="250"
            />
          </div>
          <p className={styles.description}>USKORO 🔥</p>
        </main>
      </div>

      <footer className={styles.footer}>
        <nav className={styles.footnav}>
          <Link href="/menu">
            <a>Menu</a>
          </Link>
          {'•'}
          <Link href="/contact">
            <a> Contact</a>
          </Link>
          {'•'}
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>
        <p>How Can We Help You? </p>
        <p>(+381) 064 - 2852 - 961</p>
        <div className={styles.test}>
          <a href="mailto:">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
          </a>
          <a href="https://www.instagram.com/korndogbg/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="3" />
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
          </a>
        </div>
        <p>
          <a
            href="https://api.whatsapp.com/send/?phone=381642852961&text=Pozdrav+sa+sajta.&app_absent=0&lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whatsapp
          </a>
        </p>
        <a href="#" target="_blank" rel="noopener noreferrer">
          ©{year} KornDog
        </a>
      </footer>
    </div>
  );
}
