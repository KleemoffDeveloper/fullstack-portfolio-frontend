export default function CharacterPreview({character, setPage, setCharacter}) {
  return (
    <div
      className="character-preview"
      style={{ backgroundImage: `url(${character.images[0]})` }}
      onClick={() => {setPage('Character View'); setCharacter(character)}}
    >
      <p className="name">{character.name}</p>
    </div>
  );
}
