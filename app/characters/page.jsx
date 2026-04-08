import Link from "next/link";

export default async function Characters() {

    const response = await fetch(`${process.env.BACKEND_URL}/api/characters`);
    if (!response.ok) {
        throw new Error("Failed to fetch character");
    }
    const data = await response.json()
    console.log(data)
    
    return (
        <>
        <h2>Characters</h2>
        <ul>
            { data.map((character) => {   
                return <li key={character.id}><Link href={"/characters/" + character.id} >{character.name}</Link></li>
            })}
        </ul>
        </>
    )
}