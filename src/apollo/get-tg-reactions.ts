import { gql } from '@apollo/client';


export const GET_REACTIONS = gql`query ReactionsWithCursorPagination {
  tgReactionsRelayConnection {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    edges {
      node {
        id
        message {
          id
        }
        peer {
          user {
            firstName
          }
        }
        emoticon
      }
    }
    totalCount
  }
}
`
