import MeetupDetails from "../../components/meetup/MeetupDetails"

export default function MeetupDetailsPage() {
    return(
        <MeetupDetails />
    )
}

export const getStaticProps = async(context) => {
    const meetupId = context.params.meetupId

    console.log(meetupId)

    return{
        props: {
            meetupData: {
                id: "",
                title: "",
                image: "",
                address: "",
                description: ""
            }
        }
    }
}

export const getStaticPaths = async() => {
    return{
        paths: [
            // one version of object that URL might be
            {
                params: {
                    meetupId: "M1"
                }
            }
        ],
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
