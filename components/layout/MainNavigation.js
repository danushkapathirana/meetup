import Link from "next/link"

import classes from "./MainNavigation.module.css"

export default function MainNavigation() {
    return(
        <header className={classes.header}>
            <div className={classes.logo}>Meetups</div>

            <nav>
                <ul>
                    <li>
                        <Link href="/">All Meetups</Link> {/**<Link> component prevents send new requests to reload the full-page */}
                    </li>
                    <li>
                        <Link href="/new-meetup">New Meetup</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
