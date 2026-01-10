import fire from "./assets/fire.gif";
import scrimblo from "./assets/scrimblo.png";
import skeleton from "./assets/skeleton-dance.gif";
import explorer from "./assets/internet-explorer-1996.gif";
import antiai from "./assets/antiai_button.png";
import palestine from "./assets/palestine.gif";
import hell from "./assets/hell.gif";
import saul from "./assets/bettercallsaul.png";
import sevenup from "./assets/7-up.gif";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="title-bar">
          <span>
            <img src={fire} className="fire" alt="fire-banner1" />
            <img src={fire} className="fire" alt="fire-banner2" />
            <img src={fire} className="fire" alt="fire-banner3" />
            <img src={fire} className="fire" alt="fire-banner4" />
          </span>
          <h1 className="title">pyrosawyer's website!!</h1>
        </div>
        <div className="content-container">
          <div id="navcolumn" className="content-box">
            <h2>Navigation</h2>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div id="content" className="content-box">
            <span
              style={{ display: "flex", flexDirection: "row", height: "33vh" }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img src={scrimblo} className="scrimblo" alt="scrimblo"></img>
                <p
                  style={{
                    position: "relative",
                    bottom: "3.5rem",
                    left: "2rem",
                  }}
                >
                  <i>scrimblo, site mascot</i>
                </p>
              </div>
              <p>
                welcome to my website(my own piece of the pie, one might say..)!
                this is pretty much the dumping ground for anything
                productive/creative i am doing or might do in the near future.
                <br />
                <br />
                P.S. ignore the skeletons
              </p>
            </span>
          </div>
          <div id="socials" className="content-box">
            <h4 className="divider-subtitle">links!</h4>
            <ul style={{ listStyleType: "none", paddingRight: "5vh" }}>
              <li>
                <pre>
                  github: <a href="https://github.com/pizzalawl">pizzalawl</a>
                </pre>
              </li>
              <li>
                <pre>discord: pyrosawyer</pre>
              </li>
              <li>
                <pre>
                  email: <a href="mailto:pizzalawls@gmail.com">mailme</a>
                </pre>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer">
          <p>Copyright © 2026 pyrosawyer - All rights reserved.</p>
          <span>
            <img src={explorer} alt="internet-explorer-1996" />
            <img src={antiai} alt="antiai" />
            <img src={palestine} alt="palestine" />
            <img src={hell} alt="hell" />
            <img src={saul} alt="saul" />
          </span>
        </div>
      </div>
      <img src={skeleton} className="skeleton1" alt="skelly1" />
      <img src={skeleton} className="skeleton2" alt="skelly2" />
    </>
  );
}

export default App;
