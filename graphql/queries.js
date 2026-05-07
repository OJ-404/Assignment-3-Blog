import gql from 'graphql-tag'

export const allBlogsQuery = gql`
query allBlogsQuery{
  blogs {
    documentId
    title
    slug
    description
    body
    date
  }
}`

export const singleBlogQuery = gql`
query singleBlogQuery($documentId: ID!){
  blog(documentId: $documentId) {
    documentId
    title
    date
    body
    description
    slug
  }
}`