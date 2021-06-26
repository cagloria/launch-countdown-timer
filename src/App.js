import facebook from "./assets/icon-facebook.svg";
import pinterest from "./assets/icon-pinterest.svg";
import instagram from "./assets/icon-instagram.svg";

function App() {
    return (
        <>
            <main>
                <h1>We're launching soon</h1>

                <div>
                    <div>
                        <div>08</div>
                        <p>Days</p>
                    </div>
                    <div>
                        <div>23</div>
                        <p>Hours</p>
                    </div>
                    <div>
                        <div>55</div>
                        <p>Minutes</p>
                    </div>
                    <div>
                        <div>41</div>
                        <p>Seconds</p>
                    </div>
                </div>
            </main>
            <footer>
                <a href="#">
                    <img src={facebook} alt="Facebook" />
                </a>
                <a href="#">
                    <img src={pinterest} alt="Pinterest" />
                </a>
                <a href="#">
                    <img src={instagram} alt="Instagram" />
                </a>
                <p>
                    Challenge by{" "}
                    <a
                        href="https://www.frontendmentor.io?ref=challenge"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Frontend Mentor
                    </a>
                    . Coded by{" "}
                    <a href="https://github.com/cagloria">C.A. Gloria</a>.
                </p>
            </footer>
        </>
    );
}

export default App;
