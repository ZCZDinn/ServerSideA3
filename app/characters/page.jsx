import Link from "next/link";

async function getCharacters() {
  const res = await fetch("https://rickandmortyapi.com/api/character");

  if (!res.ok) {
    throw new Error("Failed to fetch characters");
  }

  return res.json();
}

export default async function CharactersPage() {
  const data = await getCharacters();
  const characters = data.results;

  return (
    <>
      <h1>Characters</h1>

      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Link href={`/characters/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}