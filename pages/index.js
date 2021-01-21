import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>KornDog - Beograd</title>

        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2250%22 fill=%22%23d04702%22></rect><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2280%22>🌭</text></svg>"
        />
      </Head>

      <div className={styles.whiteground}>
        <main className={styles.main}>
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
              src="https://res.cloudinary.com/dgsozud9i/image/upload/v1611248087/kd1_ibbwfy.png"
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
            href="https://api.whatsapp.com/send/?phone=381644754594&text=Svaka+Cast&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whatsapp
          </a>
        </p>
        <a href="#" target="_blank" rel="noopener noreferrer">
          © 2021 KornDog
        </a>
      </footer>
    </div>
  );
}
