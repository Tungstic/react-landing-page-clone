import styles from './App.module.scss';
import { ReactComponent as Logo } from './images/logo.svg';

export default function App() {
  return (
    <>
      <header className={styles.logoAndNavBar}>
        <a href="/#">
          <Logo />
        </a>
        <nav className={`${styles.navigationBar} ${styles.mainText}`}>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Reviews</li>
            <li>Log In</li>
            <li>Get Started</li>
          </ul>
        </nav>
      </header>
      <main>
        <div className={styles.heroSection}>
          <h1 className={styles.headingFont}>
            Cut back on your drinking with no pressure to quit.
            <p className={styles.mainText}>
              146 million U.S. adults drink alcohol, and 47% want to cut back.
              If you're one of them, we have the tools to help, and we'll never
              judge you.
            </p>
          </h1>

          <img
            src="https://www.sunnyside.co/img/sunnyside/home_hero.webp"
            alt="smiling girl with a phone"
          />
        </div>
      </main>
      <footer>footer with underfooter for copyright</footer>
    </>
  );
}
