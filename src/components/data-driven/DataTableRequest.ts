import { DocumentNode, TypedDocumentNode } from '@apollo/client'

export interface DataTableRequest {
    graphQuery: DocumentNode | TypedDocumentNode
}
