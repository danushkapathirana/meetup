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

export default function Page() {
    return(
        <MeetupList meetups={DUMMY_MEETUPS} />
    )
}
