import CharacterPreview from "./CharacterPreview";
import "./Home.css";

export default function Home({characterList, setPage, setCharacter}) {
  return (
    <div id="Home">
      <div id="Welcome-Message">
        <h1>
          Welcome to the <span className="Main-Title">Spider-Verse</span>.
        </h1>
        <p>View or create new Spider People!</p>
      </div>
      <ul id="Home-Display">
        {characterList.length > 0 ? <div className="preview-grid">{characterList.filter((c,i)=>i<6).map((character) => <CharacterPreview character={character} setPage={setPage} setCharacter={setCharacter}/>)}</div> : (
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
