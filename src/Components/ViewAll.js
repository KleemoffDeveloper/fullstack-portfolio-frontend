import CharacterPreview from './CharacterPreview'
import './ViewAll.css'

export default function ViewAll({characterList, setPage, setCharacter}) {
    return (
        <div className="view-all">
            <h1>All Spider Characters</h1>
            {
                characterList.map(character => <CharacterPreview character={character} setPage={setPage} setCharacter={setCharacter}/>)
            }
        </div>
    )
}