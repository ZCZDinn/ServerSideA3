import Character from "../../../components/Character";

async function getCharacterData(id) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/characters/${id}`);
    const data = await response.json();
    return data;
}

export default async function CharacterDetail( props ) {
    const {id} = await props.params;

    const data = await getCharacterData(id);
    return (
        <Character characterData={data}/>
    )
}