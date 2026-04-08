import Link from "next/link";

export default async function Games() {

    const response = await fetch(`${process.env.BACKEND_URL}/api/games`);
    const data = await response.json()
    console.log(data)
    
    return (
        <>
        <h2>Games</h2>
        <ul>
            { data.map((game) => {   
                return <li key={game.id}><Link href={"/games/" + game.id} >{game.title}</Link></li>
            })}
        </ul>
        </>
    )
}