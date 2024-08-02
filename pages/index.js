import MeetupList from "../components/meetup/MeetupList"

const DUMMY_MEETUPS = [
    {
        id: "M1",
        title: "Become a Pro in Frontend",
        image: "https://fred.dev/content/uploads/Meetup-Logo-1300x730-1.png",
        address: "HCL Technologies Lanka, 00200 Glennie St, Colombo 00200",
        description: "Master the Art of Frontend Development! Join us for a hands-on meetup to elevate your skills and become a pro."
    },
    {
        id: "M2",
        title: "Berlin Meetup",
        image: "https://cdn.prod.website-files.com/5e9aa66fd3886aa2b4ec01ca/6482ef561f4ec6248ab0fac9_meetup%20berlin%20(1).png",
        address: "Berlin, Germany",
        description: "Join Us for a Berlin Get-Together! Connect with like-minded individuals, enjoy engaging conversations, and expand your network in a relaxed and friendly atmosphere."
    }
]

export default function Page(props) {
    return(
        <MeetupList meetups={props.meetups} />
    )
}

// page pre-rendering with data via static site generation (SSG)
export const getStaticProps = async() => {
    return{
        props: {
            meetups: DUMMY_MEETUPS
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
 */
