import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <h1>Maktoom Ahmed</h1>
    <p>Software Developer</p>
    <hr></hr>
    <p>My name is Maktoom (you may call me Mac), and I am a Software Developer.
    </p>
    <br />
    <h2>Studies</h2>
    <ul>
      <li>
         <p>
          <span style={{
            color: `#859900`,
          }}>
            Graduated 2019
          </span>
          <br />
          <span style={{
            fontSize: `1.1rem`,
          }}>
            Bachelor of Science - Computer Science and Data Science
          </span>
          <br />
          University of Western Australia
         </p>
      </li>
      <li>
         <p>
         <span style={{
            color: `#859900`,
          }}>
            Currently Studying
          </span>
          <br />
          <span style={{
            fontSize: `1.1rem`,
          }}>
            Master of Information Technology
          </span>
          <br />
          University of Western Australia
         </p>
      </li>
    </ul>
    <h2>Skills</h2>
    <ul>
      <li>
         <p>
          <span style={{
            color: `#859900`,
          }}>
            LANGUAGES I KNOW:
          </span>
          <br />
          <span style={{
            fontSize: `1.1rem`,
          }}>
            Java, Python, Javascript, MySQL, C, HTML, CSS, MATLAB, Perl, .Net, C
          </span>
         </p>
      </li>
      <li>
         <p>
         <span style={{
            color: `#859900`,
          }}>
            FRAMEWORKS, LIBRARIES and OTHERS:
          </span>
          <br />
          <span style={{
            fontSize: `1.1rem`,
          }}>
            jQuery, NodeJS, ExpressJS, MongoDB, Angular, VueJS, React, Laravel, WordPress, Spark, Git, Linux, LeafletJS, Hadoop, Spring Boot
          </span>
         </p>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
