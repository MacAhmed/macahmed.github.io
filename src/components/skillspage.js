import React from "react"

const HeadingTextStyling = {
  fontFamily: `Source Code Pro`,
  fontStyle: `normal`,
  fontWeight: `bold`,
  fontSize: `42px`,
  lineHeight: `90%`,

  /* or 41px */

  color: `#FCFC09`,
  margin: `0px`,
  marginLeft: `16px`
}

const ParagraphTextStyling = {
  fontFamily: `Ubuntu Mono`,
  fontStyle: `normal`,
  fontWeight: `bold`,
  fontSize: `30px`,
  lineHeight: `32px`,
  margin: 0,

  color: `#FFFFFF`
}

const SubHeadingTextStyling = {
    fontFamily: `Source Code Pro`,
    fontStyle: `normal`,
    fontWeight: `bold`,
    fontSize: `32px`,
    lineHeight: `100%`,
    
    /* or 22px */
    
    color: `#FCFC09`,
    textTransform: `uppercase`,
    margin: 0
}

const Skills = () => (
    <div style={{
        paddingTop: `20px`, 
        borderBottom: `1px solid #FCFC09`
    }}>
        <h1 style={HeadingTextStyling}>Skills:</h1>
        <div style={{
            padding: `16px`,
            marginTop: `16px`,
            backgroundColor: `#063DC6`
        }}>
            <h2 style={SubHeadingTextStyling}>Languages I Know:</h2>
        </div>
        <div style={{padding: `16px`}}>
            <p style={ParagraphTextStyling}>
                Java, Python, Javascript, MySQL, C, HTML, CSS, MATLAB, Perl, .Net, C
            </p>
        </div>
        <div style={{
            padding: `16px`,
            backgroundColor: `#063DC6`
        }}>
            <h2 style={SubHeadingTextStyling}>FRAMEWORKS, LIBRARIES and OTHERS:</h2>
        </div>
        <div style={{padding: `16px`}}>
            <p style={ParagraphTextStyling}>
                jQuery, NodeJS, ExpressJS, MongoDB, Angular, VueJS, React, Laravel, WordPress, Spark, Git, Linux, LeafletJS, Hadoop, Spring Boot
            </p>
        </div>
    </div>
)

export default Skills


