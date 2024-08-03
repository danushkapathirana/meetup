import { useRouter } from "next/router"

import Card from "../UI/Card"

import classes from "./MeetupItem.module.css"

export default function MeetupItem(props) {
    const router = useRouter()

    const showDetailsHandler = () => {
        router.push("/" + props.id)
    }

    return(
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} />
                </div>

                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                </div>

                <div className={classes.actions}>
                    <button onClick={showDetailsHandler}>Show Details</button>
                </div>
            </Card>
        </li>
    )
}


/**
 * note
 * 
 * programmatic navigation refers to the ability to navigate between pages
 * using JavaScript instead traditional anchor tags or links
 * 
 * router.push(): navigates to a new URL, pushing a new entry onto the
 * browser's history stack
 */
