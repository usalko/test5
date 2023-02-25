import { gql } from '@apollo/client';


export const GET_REACTIONS_USERS = gql`query ReactionsUsersFirstNames {
  tgReactions {
    peer {
      user {
        firstName
      }
    }
  }
}
`

export const _nodeToReactionUser = (node: any): string => {
  return node.peer.user.firstName
} 
