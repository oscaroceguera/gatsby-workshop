import React from 'react'

export default ({data}) => {
  console.log('data', data)
  return (
    <div>
      <h1>My wordpress blog</h1>
      <h4>Posts</h4>
      {data.allWordpressPost.edges.map(({node}) => (
        <div>
          <p>{node.title}</p>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </div>
  )
}

export const PageQuery = graphql`
  query MyFiles {
    allWordpressPost(sort: {fields: [date]}) {
      edges {
        node {
          title
          excerpt
          slug
        } 
      }
    }
  }
`
