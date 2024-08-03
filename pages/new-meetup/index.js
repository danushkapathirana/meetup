import { useRouter } from "next/router"

import NewMeetupForm from "../../components/meetup/NewMeetupForm"

export default function NewMeetupPage() {
    const router = useRouter()
    
    const addMeetupHandler = async(enteredMeetupData) => {
        const response = await fetch("/api/new-meetup", {
            method: "POST",
            body: JSON.stringify(enteredMeetupData),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const enteredData = await response.json()
        console.log(enteredData)
        router.push("/")
    }

    return(
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    )
}
