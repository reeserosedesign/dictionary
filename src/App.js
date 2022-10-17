import "./App.css";
import Search from "./Search.js";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="container">
      <h1>dictionary</h1>
      <Search />
      <Dictionary />
      <footer>
        <a
          href="https://github.com/reeserosedesign/dictionary"
          target="_blank"
          rel="noreferrer"
        >
          Open Source Code
        </a>{" "}
        by{" "}
        <a
          href="https://www.reeserosedesign.com"
          target="_blank"
          rel="noreferrer"
        >
          Reese Rose
        </a>
      </footer>
    </div>
  );
}
