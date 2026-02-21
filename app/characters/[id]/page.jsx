import Character from "../../../components/Character.jsx";


export default async function CharacterDetail(props) {
  const { id } = await props.params; // e.g. /characters/2 => id === "2"
  console.log(id);

  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch character");
  }

  const character = await res.json();

  return (
    <>
      <Character
        name={character.name}
        species={character.species}
        image={character.image}
      />
    </>
  );
}