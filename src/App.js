import styles from './App.module.scss';
import { ReactComponent as GridPicOne } from './images/grid1.svg';
import { ReactComponent as GridPicTwo } from './images/grid2.svg';
import { ReactComponent as GridPicThree } from './images/grid3.svg';
import { ReactComponent as GridPicFour } from './images/grid4.svg';
import { ReactComponent as GridPicFive } from './images/grid5.svg';
import { ReactComponent as GridPicSix } from './images/grid6.svg';
import { ReactComponent as Logo } from './images/logo.svg';

export default function App() {
  return (
    <>
      <header className={`${styles.logoAndNavBar} ${styles.sectionColorOne}`}>
        <a href="/#">
          <Logo />
        </a>
        <nav className={styles.navigationBar}>
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

        <div className={`${styles.secondSection} ${styles.container}`}>
          <h2>Small changes, big impact</h2>
          <p>
            Sunnyside provides a simple but structured approach to help you
            drink more mindfully. You'll feel the difference.
          </p>
          <div className={styles.gridOfSix}>
            <div>
              <GridPicOne />
              <h3>More Energy</h3>
              <p>Greet the day with increased energy and focus.</p>
            </div>
            <div>
              <GridPicTwo />
              <h3>Improved Wellness</h3>
              <p>Feel your best, inside and out.</p>
            </div>
            <div>
              <GridPicThree />
              <h3>Better Sleep</h3>
              <p>Enjoy more restful sleep and brighter mornings.</p>
            </div>
            <div>
              <GridPicFour />
              <h3>Healthier Diet</h3>
              <p>Cut the empty sugar from those extra drinks.</p>
            </div>
            <div>
              <GridPicFive />
              <h3>Save Money</h3>
              <p>Spend less on drinks while still enjoying yourself</p>
            </div>
            <div>
              <GridPicSix />
              <h3>Have More Fun</h3>
              <p>Make the drinks you have more enjoyable.</p>
            </div>
          </div>
        </div>
        <div className={styles.sectionColorOne}>DESIGNED TO FIT YOUR LIFE</div>
        <div
          className={`${styles.thirdSection} ${styles.container} ${styles.sectionColorOne}`}
        >
          <div>
            <div>
              <h4>Create an intention for your week ahead</h4>
              <p>
                We'll recommend targets for you each week, which you can
                customize to fit your schedule and preferences.
              </p>
            </div>
            <div>
              <h4>Track each drink, it's as easy as sending a text.</h4>
              <p>
                An emoji (or a number) is all it takes. We come to you, making
                it super easy to stay on plan and reach your goals.
              </p>
            </div>
            <div>
              <h4>
                Celebrate your achievements and gain relevant insights over
                time.
              </h4>
              <p>
                Visualize the progress you're making: money saved, empty
                calories reduced, dry days added, and drinks cut.
              </p>
            </div>
          </div>
          <img
            src="https://www.sunnyside.co/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimg%2Fsunnyside%2Fdrink_tracking.6b0fb47635263c381f46a9625783012b.png&w=1080&q=75"
            alt="drink tracking visual"
            width={300}
            height={500}
          />
        </div>

        <div
          className={`${styles.fourthSection} ${styles.containerSectionFour}`}
        >
          <div>
            <h2>How it Works</h2>
            <p>
              We believe there's power in finding balance. Sunnyside helps you
              ease into mindful drinking at your own pace.
            </p>
          </div>
          <div className={styles.fourthSectionUnder}>
            <img
              src="https://www.sunnyside.co/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimg%2Fsunnyside%2Fhow_it_works_group_1.5637cdd0c60da0d7a119425a2e3e7e1f.png&w=1080&q=75"
              alt="how it works"
              width={500}
              height={500}
            />
            <div>
              <h3>
                01.
                <br />
                Take the quiz.
              </h3>
              <p>
                Tell us a little bit about yourself and your goals so we can
                personalize your experience. This is a judgement-free zone.
              </p>
              <button className={styles.blueButton}>Take the 3 Min Quiz</button>
            </div>
          </div>
          <div className={styles.fourthSectionUnder}>
            <div>
              <h3>
                02.
                <br />
                Follow your personalized plan.
              </h3>
              <p>
                Based on your starting point, we'll make recommendations and
                text you reminders to help you meet your goals.
              </p>
              <button className={styles.blueButton}>Take the 3 Min Quiz</button>
            </div>
            <img
              src="https://www.sunnyside.co/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimg%2Fsunnyside%2Fhow_it_works_group_2.7bdb52c3827fc1914d44903b747d02b6.png&w=1080&q=75"
              alt="how it works 2"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.fourthSectionUnder}>
            <img
              src="https://www.sunnyside.co/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimg%2Fsunnyside%2Fhow_it_works_group_3.69337f6e6fa3a26fbed42de00a31b4b3.png&w=1080&q=75"
              alt="how it works 3"
              width={500}
              height={500}
            />
            <div>
              <h3>
                03.
                <br />
                Stick with it long term.
              </h3>
              <p>
                Think lifestyle change, not a fad diet. We'll work together to
                develop new daily routines, so you maintain your new habits for
                life.
              </p>
              <button className={styles.blueButton}>Take the 3 Min Quiz</button>
            </div>
          </div>
        </div>
      </main>
      <footer>footer with underfooter for copyright</footer>
    </>
  );
}
