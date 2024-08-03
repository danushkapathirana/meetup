import { MongoClient, ObjectId } from "mongodb"

import MeetupDetails from "../../components/meetup/MeetupDetails"

export default function MeetupDetailsPage(props) {
    return(
        <MeetupDetails
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
        />
    )
}

export const getStaticProps = async(context) => {
    const meetupId = context.params.meetupId

    console.log(meetupId)

    const client = await MongoClient.connect(process.env.URL)
    const database = client.db()
    const collection = database.collection("meetups")

    // validate ObjectId format
    if(!/^[0-9a-fA-F]{24}$/.test(meetupId)) {
        return{
            notFound: true
        }
    }
    const selectedMeetup = await collection.findOne({_id: new ObjectId(meetupId)})

    return{
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                image: selectedMeetup.image,
                address: selectedMeetup.address,
                description: selectedMeetup.description
            }
        }
    }
}

export const getStaticPaths = async() => {
    const client = await MongoClient.connect(process.env.URL)
    const database = client.db()
    const collection = database.collection("meetups")
    const meetupIds = await collection.find({}, {_id: 1}).toArray()
    client.close()

    return{
        paths: meetupIds.map((meetupId) => (
            {
                params: {
                    meetupId: meetupId._id.toString()
                }
            }
        )),
        fallback: "blocking",
    }
}


/**
 * note
 * 
 * Dynamic Routes with SSG
 * 
 * - if a page has dynamic routes and uses getStaticProps(),
 *   it needs to define a list of paths to be statically generated at build time
 * 
 * getStaticPaths(), specifies which dynamic routes should be pre-rendered at build time
 * 
 * fallback: true | false | "blocking"
 */
