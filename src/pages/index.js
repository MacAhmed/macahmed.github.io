import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomePage from "../components/homepage"
import Skills from "../components/skillspage"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePage/>
    <Skills/>
  </Layout>
)

export default IndexPage
