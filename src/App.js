import logo from "./logo.svg";
import "./App.css";
import Board from "./Components/Board";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Market app</title>
        <meta name="description" content="Helmet application" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Board />
    </>
  );
}

export default App;
