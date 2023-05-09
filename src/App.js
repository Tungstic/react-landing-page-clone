import styles from './App.module.scss';
import { ReactComponent as Logo } from './images/logo.svg';

export default function App() {
  return (
    <>
      <header>
        <a href="/#">
          <Logo />
        </a>
        heading here
      </header>
      <main>9 sections</main>
      <footer>footer with underfooter for copyright</footer>
    </>
  );
}
