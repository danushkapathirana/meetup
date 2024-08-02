import NewMeetupForm from "../../components/meetup/NewMeetupForm"

export default function NewMeetupPage() {
    const addMeetupHandler = (enteredMeetupData) => {}

    return(
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    )
}
