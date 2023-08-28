import { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
  const [characterList, setCharacterList] = useState([]);
  useEffect(() => {
    fetch("https://spiderverse-api.onrender.com/characters")
      .then((response) => response.json())
      .then((data) => setCharacterList(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div id="Home">
      <div id="Welcome-Message">
        <h1>
          Welcome to the <span className="Main-Title">Spider-Verse</span>.
        </h1>
        <p>View or create new Spider People!</p>
      </div>
      <ul id="Home-Display">
        {characterList.length > 0 ? <div className="preview-grid">{characterList.map((character) => <div className="character-preview" style={{backgroundImage:`url(${character.images[0]})`}}>{/*<img src={character.images[0]}/>*/}<p className="name">{character.name}</p></div>)}</div> : (
          <div id="Home-Loading">
            <img
              className="rotate"
              src={require("./Icons/loading-svgrepo-com.png")}
            />
            <p>Loading Spider People...</p>
          </div>
        )}
      </ul>
    </div>
  );
}
