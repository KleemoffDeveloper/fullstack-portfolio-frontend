import './CharacterView.css'

export default function CharacterView({character}) {
    return (
        <div className="character-view">
            <div className='banner'>
                <h1>{character.name}</h1>
                <img src={character.images[0]}/>
                <p>Age: {character.age}</p>
                <p>First Appearance: {character.first_appearance}</p>
                <p>{character.description}</p>
            </div>
        </div>
    )
}