import React from "react"
import { Link } from "gatsby"
import Button from "./button"
import navbarStyles from "./navbar.module.css"
let classNames = require('classnames');

let isOpen = "false";

export default props => (
    <header className={navbarStyles.navbar}>
        <Link to="/" className={navbarStyles.heading}>
            <h3 className={navbarStyles.heading} >m . Ahmed</h3>
        </Link>
        <div id="myNav" className={navbarStyles.overlay}>
            <label className={classNames(navbarStyles.navHamburgerIcon, navbarStyles.menu)}>
                <input onClick={openNavigation} type="checkbox"></input>
                <div></div>
                <div></div>
                <div></div>
            </label>

            <div className={navbarStyles.overlay_content}>
                <ul>
                    <li className={navbarStyles.navigationListItem}><Button to="/about/">PROJECTS</Button></li>
                    <li className={navbarStyles.navigationListItem}><Button to="/experience/">EXPERIENCE</Button></li>
                    <li className={navbarStyles.navigationListItem}><Button to="/contact/">CONTACT</Button></li>
                </ul>
            </div>
        </div>
    </header>
)