import { gql } from '@apollo/client'


export const GET_REACTIONS_USERS = gql`query ReactionsUsersFirstNames {
  tgReactions(aggregations: {
    peer: {
      user: {
        username: CONCAT}},
         emoticon: CONCAT}
  ) {
    message {
      id
      stamp
      chat {
        title
      }
    }
  }
}
`

export const _nodeToReactionUser = (node: any): string => {
  return node.peer.user.firstName
} 
