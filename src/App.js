import styles from './App.module.scss';
import { ReactComponent as Logo } from './images/logo.svg';

export default function App() {
  return (
    <>
      <header className={`${styles.logoAndNavBar} ${styles.sectionColorOne}`}>
        <a href="/#">
          <Logo />
        </a>
        <nav className={`${styles.navigationBar} ${styles.mainText}`}>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Reviews</li>
            <li>Log In</li>
            <li className={styles.blueButton}>Get Started</li>
          </ul>
        </nav>
      </header>
      <main>
        <div className={`${styles.heroSection} ${styles.sectionColorOne}`}>
          <div className={styles.container}>
            <h1>Cut back on your drinking with no pressure to quit.</h1>
            <p>
              146 million U.S. adults drink alcohol, and 47% want to cut back.
              If you're one of them, we have the tools to help, and we'll never
              judge you.
            </p>
            <button className={styles.blueButton}>Take the 3 Min Quiz</button>
            <div>Start for free, cancel anytime</div>
          </div>
          <img
            src="https://www.sunnyside.co/img/sunnyside/home_hero.webp"
            alt="smiling woman with a phone"
          />
        </div>

        <div className={styles.secondSection}>
          <h2>Small changes, big impact</h2>
          <p>
            Sunnyside provides a simple but structured approach to help you
            drink more mindfully. You'll feel the difference.
          </p>
          <div>Grid of divs with svg, heading and text</div>
        </div>
      </main>
      <footer>footer with underfooter for copyright</footer>
    </>
  );
}
