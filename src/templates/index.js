// import React from "react"
import React, { Component } from 'react'

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogList from '../components/BlogList'
// import AllCategroy from '../components/AllCategory'

// import '../components/rootStyle.scss'

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//     <h1>Hi people</h1>
//     <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
//       <h3 className="uk-card-title">Default</h3>
//       <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//   </div>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

class MainIndexPage extends Component {
  // state = { ready: false };
  // componentDidMount = () => {
  //   console.log("hellow component");
  //   if (typeof window !== 'undefined') {
  //     const uikit = require('uikit');
  //     console.log(uikit);
  //     const icons = require('uikit/dist/js/uikit-icons.min');
  //     console.log(icons);
  //     uikit.use(icons);
  //     this.setState({ ready: true });
  //   }
  // };
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        {/* <AllCategroy data={this.props.data.allWordpressCategory}/> */}
        <BlogList pageContext={this.props.pageContext}/>
        {/* <Link to="/page-2/">Go to page 2</Link> */}
      </Layout>
    )
  }
}
export default MainIndexPage;

// export default IndexPage
export const postsQuery3 = graphql`
    query postsQuery3{
        allWordpressPost{
            edges{
                node{
                    id
                    title
                    excerpt
                    slug
                    date(formatString: "MMMM DD, YYYY")
                    categories{
                        id
                        name
                        slug
                        link
                    }
                }
            }
        }
        allWordpressCategory{
          edges{
            node{
              id
              wordpress_id
              slug
              name
              count
            }
          }
        }
    }
`