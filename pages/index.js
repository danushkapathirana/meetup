import { MongoClient } from "mongodb"
import { Fragment } from "react"
import Head from "next/head"

import MeetupList from "../components/meetup/MeetupList"

export default function Page(props) {
    return(
        <Fragment>
            <Head>
                <title>Meetups</title>
                <meta name="description" content="Browse a huge list of highly active meetups."></meta>
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    )
}

export const getStaticProps = async() => {
    /**
     * - in this code we avoid using "fetch" to
     *   retrieve data from our own API endpoint
     *   because this code runs on the server
     */
    const client = await MongoClient.connect(process.env.URL)
    const database = client.db()
    const collection = database.collection("meetups")
    const meetups = await collection.find().toArray()
    client.close()

    return{
        props: {
            meetups: meetups.map((meetup) => (
                {
                    id: meetup._id.toString(),
                    title: meetup.title,
                    image: meetup.image,
                    address: meetup.address,
                    description: meetup.description
                }
            ))
        },
        revalidate: 10
    }
}


/**
 * note
 * 
 * Static Site Generation (SSG)
 * 
 * what is SSG? pre-renders the page at build time
 * 
 * what is pre-rendering? generates HTML at build time or request time
 * 
 * getStaticProps(),
 * - fetch data before the page is built and passes it as props
 *   to the component. it runs at build time on the server and never on the client
 * 
 * - since it runs on the server, use it to securely access server side resources
 *   (like a file system or a database)
 * 
 * what happens when more meetups are added after the build is completed? (hint: outdated data)
 * 
 * revalidate option regenerates the page after 10 seconds on the server if there's a request
 * this helps keep the page updated without rebuilding (ISR: Incremental Static Regeneration)
 * 
 * 
 * Server Side Rendering (SSR)
 * 
 * what is SSR? generates HTML page for every incoming requests on the fly after the deployment on the server
 * 
 * getServerSideProps(), this function does not run at build time but on the server after deployment
 * 
 * - use this to access complete request and response object,
 *   or if the content changes very frequently
 */
