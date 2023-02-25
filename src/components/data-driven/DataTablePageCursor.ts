import { DataTableRequest } from "./DataTableRequest"
import { DataTableRow } from "./DataTableRow"

export interface DataTablePageCursor {
    pageSize: number
    pageIndex: number
    hasNextPage: boolean
    hasPrevPage: boolean
    pageCount: number
    pageData: DataTableRow[]
    nextPage: (cursor: DataTablePageCursor) => DataTablePageCursor
    prevPage: (cursor: DataTablePageCursor) => DataTablePageCursor
}

export const pageCursor = (dataSource: DataTableRow[] | DataTableRequest, pageSize: number = 10) => {
    if ('length' in Object.keys(dataSource)) {
        return pageCursorFromRows(dataSource as DataTableRow[], pageSize)
    }
    return pageCursorFromRequest(dataSource as DataTableRequest, pageSize)
}

export const pageCursorFromRows = (rows: DataTableRow[], pageSize: number): DataTablePageCursor => {
    return {
        pageSize,
        pageIndex: 0,
        hasNextPage: rows.length > pageSize,
        hasPrevPage: false,
        pageCount: Math.ceil(rows.length / pageSize),
        pageData: rows.slice(0, Math.min(pageSize, rows.length)),
        nextPage: (cursor: DataTablePageCursor): DataTablePageCursor => {
            const hasNextPage = (cursor.pageIndex + 1) * pageSize < rows.length
            return {
                ...cursor,
                pageIndex: hasNextPage ? cursor.pageIndex + 1: cursor.pageIndex,
                hasPrevPage: rows.length > pageSize,
                hasNextPage,
                pageData: hasNextPage ? rows.slice(cursor.pageIndex * pageSize, Math.min((cursor.pageIndex + 1) * pageSize, rows.length)): cursor.pageData,
            }
        },
        prevPage: (cursor: DataTablePageCursor): DataTablePageCursor => {
            const hasPrevPage = (cursor.pageIndex - 1) * pageSize > 0
            return {...cursor,
                pageIndex: hasPrevPage ? cursor.pageIndex - 1: cursor.pageIndex,
                hasPrevPage,
                hasNextPage: rows.length > pageSize,
                pageData: hasPrevPage ? rows.slice((cursor.pageIndex - 1) * pageSize, pageSize): cursor.pageData,
            }
        }
    }
}

export const pageCursorFromRequest = (request: DataTableRequest, pageSize: number): DataTablePageCursor => {
    return {
        pageSize,
        pageIndex: 0,
        hasNextPage: false,
        hasPrevPage: false,
        pageCount: 1,
        pageData: [],
        nextPage: (cursor: DataTablePageCursor): DataTablePageCursor => {
            return cursor
        },
        prevPage: (cursor: DataTablePageCursor): DataTablePageCursor => {
            return cursor
        }
    }
}