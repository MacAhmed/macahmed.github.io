import React from "react"
import { Link } from "gatsby"
import Button from "./button"
import layoutStyles from "./layout.module.css"

export default ({children}) => (
    <div className={layoutStyles.mainContainer}>
        <header className={layoutStyles.navbar}>
            <Link to="/" className={layoutStyles.heading}>
                <h3 className={layoutStyles.heading} >m . Ahmed</h3>
            </Link>
            <nav>
                <ul className={layoutStyles.navigationList}>
                    <li className={layoutStyles.navigationListItem}><Button id="experience" to="/about/">EXPERIENCE</Button></li>
                    <li className={layoutStyles.navigationListItem}><Button id="projects" to="/projects/">PROJECTS</Button></li>
                    <li className={layoutStyles.navigationListItem}><Button id="contact" to="/contact/">CONTACT</Button></li>
                </ul>
            </nav>
        </header>
        <main>
            {children}
        </main>
    </div>
)