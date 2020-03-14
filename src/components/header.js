import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header style={{
    paddingTop: `1rem`,
    paddingBottom: `1rem`,
    color: `#6c71c4`
  }}>
      <p>
        <Link className="navigation" to="/">{siteTitle}</Link>
      </p>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
