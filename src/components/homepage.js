import React from "react"

const HeadingTextStyling = {
  fontFamily: `Source Code Pro`,
  fontStyle: `normal`,
  fontWeight: `bold`,
  fontSize: `42px`,
  lineHeight: `90%`,

  /* or 41px */
  letterSpacing: `-0.06em`,

  color: `#FCFC09`,
}

const ParagraphTextStyling = {
  fontFamily: `Ubuntu Mono`,
  fontStyle: `normal`,
  fontWeight: `bold`,
  fontSize: `25px`,
  lineHeight: `28px`,

  color: `#FFFFFF`
}

const HomePage = () => (
    <div style={{
        padding: `0 1em 0 1em`,
        borderBottom: `1px solid #FCFC09`
    }}>
        <h1 style={HeadingTextStyling}>A Software Developer, a Designer, and an Artist</h1>
        <p style={ParagraphTextStyling}>
        My name is Mac, 
        a Software Engineer. 
        <br/><br/>
        I have recently graduated with a Bachelor of Science at the University of Western Australia.
        </p>
        <p style={ParagraphTextStyling}>
            <span style={{color: `#FCFC09`}}>Major and Minor:</span>
            <br/>
            Computer Science and Data Science
        </p>
    </div>
)

export default HomePage


