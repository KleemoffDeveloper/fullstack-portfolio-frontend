import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { useState, useEffect } from "react";
import ViewAll from "./Components/ViewAll";
import CreateForm from "./Components/CreateForm";
import CharacterView from "./Components/CharacterView";

function App() {
  const [characterList, setCharacterList] = useState([]);
  useEffect(() => {
    fetch("https://spiderverse-api.onrender.com/characters")
      .then((response) => response.json())
      .then((data) => setCharacterList(data))
      .catch((error) => console.log(error));
  }, []);
  const [page, setPage] = useState("");
  const [character, setCharacter] = useState({});
  return (
    <div className="App">
      <Navbar setPage={setPage} />
      {!page ? (
        <Home characterList={characterList} setPage={setPage} setCharacter={setCharacter}/>
      ) : page === "View All" ? (
        <ViewAll characterList={characterList} setPage={setPage} setCharacter={setCharacter}/>
      ) : page === "Create Form" ? (
        <CreateForm />
      ) : page === "Character View" ? (
        <CharacterView character={character}/>
      ) : null}
      <Footer />
    </div>
  );
}

export default App;
