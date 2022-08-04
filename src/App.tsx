import React from "react";
import "bulma/css/bulma.css";

import "./App.css";

function App() {
  return (
    <div className="App color-nav">
      <nav
        className="navbar color-nav"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://cdn-icons-png.flaticon.com/512/2256/2256980.png" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item color-item is-size-2">Dashboard</a>
          </div>
        </div>
      </nav>

      <>
      <div className="mt-6 ml-5 mr-5 notification is-fff">
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-12">
              <div className="tile is-parent is-vertical is-full ">
              <iframe className="is-full" src="https://app.powerbi.com/view?r=eyJrIjoiZjQxNzM2ZWItMmI1OC00OGUyLWIwYWQtNGMwNDkyOTdiZDAyIiwidCI6IjVmNTNiNGNlLTYzZDQtNGVlOC04OGQyLTIyZjBiMmQ0YjI3YSIsImMiOjR9" title="description"></iframe>

            </div>
          </div>
        </div>
      </div>
    </>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Campeonato de soccer</strong> by{" "}
            <a href="https://jgthms.com">Wilmer Gomez</a>. The source code is
            licensed
            <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
            The website content is licensed .
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
