/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { rhythm, scale } from "../utils/typography"

import Header from "./header"
// import Menu from "./Menu"
import Footer from './Footer'
import "./layout.css"
import './rootStyle.scss'

const Layout = ({ children, data }) => (
  
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        allWordpressWpApiMenusMenusItems(filter: {
                  slug: {
                      eq: "main-menu"
                  }
          }){
          edges{
              node{
                  id
                  name
                  items {
                      wordpress_id
                      order
                      wordpress_parent
                      title
                      url          
                  }
              }
          }
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />

        {/* <FirstPost data={data.wordpressPost}/> */}
        {/* <AllCategroy data={data.allWordpressCategory} /> */}
        {/* <Menu menu={data}/> */}
        
        <main>{children}</main>
        <Footer/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

