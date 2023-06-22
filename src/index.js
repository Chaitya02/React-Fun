import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Header() {
  return (
      <header>
          <nav className="nav">
              <img src="react-logo.png" alt="react-logo" className="nav-logo" />
              <ul className="nav-items">
                  <li>Pricing</li>
                  <li>About</li>
                  <li>Contact</li>
              </ul>
          </nav>
      </header>
  )
}

function Footer() {
  return (
      <footer>
          <small>© 2023 Development. All rights reserved.</small>
      </footer>
  )
}

function MainContent() {
  return (
      <div className="content">
          <h1>Reasons I'm excited to learn <span>React</span></h1>
          <ol>
              <li>It's a popular library, so I'll be 
              able to fit in with the cool kids!</li>
              <li>I'm more likely to get a job as a developer
              if I know React</li>
          </ol>
      </div>
  )
}

function Page() {
  return (
      <div>
          <Header />
          <MainContent />
          <Footer />
      </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
