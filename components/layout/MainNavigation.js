import classes from "./MainNavigation.module.css"

export default function MainNavigation() {
    return(
        <header className={classes.header}>
            <div className={classes.logo}>Meetups</div>

            <nav>
                <ul>
                    <li>
                        <link to="/">All Meetups</link>
                    </li>
                    <li>
                        <link to="/new-meetup">New Meetup</link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
