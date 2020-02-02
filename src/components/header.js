import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#FCFC09`,
      marginBottom: `1em`,
      height: `49px`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `0 0 0 1em`,
        height: `100vh`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            fontFamily: `Source Code Pro`,
            fontStyle: `normal`,
            fontWeight: `bold`,
            fontSize: `48px`,
            lineHeight: `60px`,
            
            color: `#063DC6`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
