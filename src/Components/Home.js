import { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
  const [characterList, setCharacterList] = useState([]);
  return (
    <div id="Home">
      <div id="Welcome-Message">
        <h1>
          Welcome to the <span className="Main-Title">Spider-Verse</span>.
        </h1>
        <p>View or create new Spider People!</p>
      </div>
      <ul id="Home-Display">
        {characterList.length > 0 ? (
          characterList.map((character) => <div></div>)
        ) : (
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
