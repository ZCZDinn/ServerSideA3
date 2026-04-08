import { connectToDB } from "../../api/db";
export async function POST(request) {
    const {db} = await connectToDB();
    const newCharacter = await request.json();

    const result = await db.collection("characters").insertOne(newCharacter);
    return new Response(
        "Character added successfully with id " + result.insertedId,
        {
            status: 201,
        }
    )
}