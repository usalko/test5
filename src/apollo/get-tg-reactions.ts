import { gql } from '@apollo/client';


/**
 * There is the example for filters
 *   filters: {
 *     date: {gte: "2023-01-01T17:28:43.229Z"},
 *     And: {
 *       date: {lte: "2023-02-05T17:30:09.629Z"},
 *       And: {
 *         garage: {number: {startsWith: "45"}},
 *         And: {
 *           garage: { park: {title: {startsWith: "Парк 1"}}}
 *         }
 *       }
 *     }
 *   }
 */

export const GET_REACTIONS = gql`query ReactionsWithCursorPagination ($cursor: String!, $pageSize: Int!, $filters: TransactionFilters!, $order: TransactionOrder!) {
    transactionsRelayConnection(
    after: $cursor
    first: $pageSize
    filters: $filters
    order: $order
  ) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    totalCount
    edges {
      node {
        id
        date
        cardNumber
        ticketType
        paymentFact
        routeCode
        garage {
          number
        }
        flightNumber
        validatorNumber
        validatorType
      }
    }
  }
}
`

// /**
//  * Convert result item (node) to Transaction
//  * 
//  * @param node 
//  * @returns Transaction
//  */
// export const _nodeToTransaction = (node: any) => ({
//   date: node.date,
//   cardNumber: node.cardNumber,
//   ticketType: node.ticketType,
//   paymentFact: node.paymentFact,
//   routeCode: node.routeCode,
//   garageNumber: node.garage?.number,
//   flightNumber: node.flightNumber,
//   validatorNumber: node.validatorNumber,
//   validatorType: node.validatorType
// } as Reaction)
