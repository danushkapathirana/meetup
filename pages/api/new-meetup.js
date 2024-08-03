import { MongoClient } from "mongodb"

const createNewMeetup = async(req, res) => {
    if(req.method === "POST") {
        const{ title, image, address, description } = req.body

        const client = await MongoClient.connect(process.env.URL)
        const database = client.db()
        const collection = database.collection("meetups")

        await collection.insertOne({
            title: title,
            image: image,
            address: address,
            description: description
        })

        client.close()
        res.status(201).json({message: "Meetup addition successful."})
    }
}

export default createNewMeetup
