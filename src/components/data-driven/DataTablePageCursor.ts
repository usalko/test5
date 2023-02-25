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
    // More granularity to the displaying information
    totalCount: number
}

export const pageCursor = (dataSource: DataTableRow[] | DataTableRequest, pageSize: number = 10): DataTablePageCursor => {
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
            const nextPageIndex = cursor.pageIndex + 1
            return {
                ...cursor,
                pageIndex: nextPageIndex < cursor.pageCount ? nextPageIndex : cursor.pageIndex,
                hasPrevPage: rows.length > pageSize,
                hasNextPage: (nextPageIndex + 1) * pageSize < rows.length,
                pageData: nextPageIndex < cursor.pageCount ?
                    rows.slice(nextPageIndex * pageSize, Math.min((nextPageIndex + 1) * pageSize, rows.length)) :
                    cursor.pageData,
            }
        },
        prevPage: (cursor: DataTablePageCursor): DataTablePageCursor => {
            const prevPageIndex = cursor.pageIndex - 1
            return {
                ...cursor,
                pageIndex: cursor.pageIndex > 0 ? prevPageIndex : cursor.pageIndex,
                hasPrevPage: prevPageIndex * pageSize > 0,
                hasNextPage: rows.length > pageSize,
                pageData: prevPageIndex >= 0 ?
                    rows.slice(prevPageIndex * pageSize, pageSize) :
                    cursor.pageData,
            }
        },
        totalCount: rows.length
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
        },
        totalCount: 0
    }
}