import React, { Component } from 'react'
import Layout from "../layouts"

class BlogPage extends Component {
    
  render() {
  	console.log(this.props.active);
    return (
        <Layout pageContext={this.props.pageContext}>
        	<h1>Blog Page - Index</h1>
        </Layout>
    )
  }
}

export default BlogPage
