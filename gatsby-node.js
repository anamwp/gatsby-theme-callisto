const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);
const createPaginatedPages = require('gatsby-paginate');

  const pageQuery = `
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            status
            template
          }
        }
      }
    }
  `

  const postQuery = `
    {
      allWordpressPost{
        edges {
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
            featured_media{
              localFile{
                  childImageSharp{
                      original {
                          width
                          height
                          src
                      }
                  }
              }
            }
          }
        }
      }
    }
  `
  const catQuery = `
  {
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
  

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;


  return new Promise((resolve, reject) => {
    graphql(pageQuery)

      // .then(result => {
      //   if(result.errors) {
      //     console.log(result.errors);
      //     reject(result.errors);
      //   }

      //   const pageTemplate = path.resolve("./src/templates/page.js");
      //   const pagesTemplate = path.resolve("./src/templates/pages.js");

      //   createPage({
      //       path: `pages/`,
      //       component: slash(pageTemplate)
      //   });

      //   _.each(result.data.allWordpressPage.edges, edge => {
      //       createPage({
      //           path: `/${edge.node.slug}/`,
      //           component: slash(pageTemplate),
      //           context: {
      //               id: edge.node.id,
      //           },
      //       });
      //   });
        
      // })

      .then(() => {
        graphql(postQuery)
        .then(result => {

          if(result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }

          const postTemplate = path.resolve("./src/templates/post.js");
          const postsTemplate = path.resolve("./src/templates/posts.js");

          // createPage({
          //     path: `posts/`,
          //     component: slash(postsTemplate)
          // });

          createPaginatedPages({
            edges: result.data.allWordpressPost.edges,
            createPage: createPage,
            pageTemplate: './src/templates/posts.js',
            pageLength: 3,
            pathPrefix: 'posts',
          });

          createPaginatedPages({
            edges: result.data.allWordpressPost.edges,
            createPage: createPage,
            pageTemplate: './src/templates/index.js',
            pageLength: 50,
            pathPrefix: '',
            context:{}
          });

          _.each(result.data.allWordpressPost.edges, edge => {
              createPage({
                  path: `/post/${edge.node.slug}/`,
                  component: slash(postTemplate),
                  context: {
                      id: edge.node.id,
                      featuredImage: edge.node.featured_media
                  },
              });
          });
          resolve();
          

        });

      })
      .then(() =>{
        graphql(catQuery)
        .then( result => {

          if(result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }
          const categoryTemplate = path.resolve("./src/templates/categories.js");
          const singleCategory = path.resolve("./src/templates/category.js");
          createPage({
              path: `categories/`,
              component: slash(categoryTemplate)
          });
          _.each(result.data.allWordpressCategory.edges, edge => {
            createPage({
                path: `/categories/${edge.node.slug}/`,
                component: slash(singleCategory),
                context: {
                    id: edge.node.id,
                    slug: edge.node.slug,
                    name: edge.node.name,
                },
            });
        });
        resolve();

        })
      })

  });

};
