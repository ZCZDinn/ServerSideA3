export default function Character( {characterData} ) {
    return (
        <>
            <h2>{characterData.name}</h2>
            <p>{characterData.species}</p>
            <img src={characterData.image}></img>
        </>
    )
}