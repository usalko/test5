import {
    Button, Flex,
    FlexProps, Table,
    TableContainer,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { purifyProps } from '../../utils/purify-props'
import { DataTableColumn } from './DataTableColumn'
import { DataTablePageCursor, pageCursor } from './DataTablePageCursor'
import { DataTableRequest } from './DataTableRequest'
import { DataTableRow } from './DataTableRow'
import { DataTableSlider as DataTablePageSlider } from './DataTablePageSlider'

export interface DataTableProps extends FlexProps {
    className?: string
    columns: DataTableColumn[]
    data: DataTableRow[] | DataTableRequest
    pageSize?: number
}

export const DataTable: React.FC<DataTableProps> = (props) => {

    const [{ pageData, hasNextPage, hasPrevPage, pageSize, pageIndex, totalCount },
        setCursor] = useState<DataTablePageCursor>(pageCursor(props.data, props.pageSize))

    return (
        <Flex {...purifyProps(props, ['columns', 'data', 'pageSize'])}>
            <TableContainer flex='1'>
                <Table size='sm' w='100%'>
                    <Thead>
                        <Tr>
                            {props.columns.map((column, index) => {
                                return (
                                    <Th key={index}>{column.title}</Th>
                                )
                            })}
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td colSpan={props.columns.length} p={0} border={0}>
                                <Button h={4} w='100%' visibility={hasPrevPage ? 'visible' : 'hidden'}
                                    onClick={async () => setCursor((cursor) => { return { ...cursor.prevPage(cursor) } })}>
                                    Предыдущая страница</Button></Td>
                        </Tr>
                        {pageData.map((row, rowIndex) => {
                            return (
                                <Tr key={rowIndex}>
                                    {row.values.map((value, columnIndex) => {
                                        return (
                                            <Td key={columnIndex}>{value}</Td>
                                        )
                                    })}
                                </Tr>
                            )
                        })}
                        {pageData.length < pageSize ? [...Array(pageSize - pageData.length)].map((_, rowIndex) => {
                            return (
                                <Tr key={rowIndex}>
                                    {props.columns.map((_, columnIndex) => {
                                        return (
                                            <Td key={columnIndex} >&nbsp;</Td>
                                        )
                                    })}
                                </Tr>
                            )
                        }) : ''}
                        <Tr>
                            <Td colSpan={props.columns.length} p={0} border={0}>
                                <Button h={4} w='100%' visibility={hasNextPage ? 'visible' : 'hidden'}
                                    onClick={async () => setCursor((cursor) => { return { ...cursor.nextPage(cursor) } })}>
                                    Следующая страница</Button></Td>
                        </Tr>
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            {props.columns.map((column, index) => {
                                return (
                                    <Th key={index}>{column.title}</Th>
                                )
                            })}
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
            <DataTablePageSlider
                orientation='vertical'
                minH='32'
                h='auto'
                isReversed={true}
                max={totalCount}
                step={pageSize}
                min={0}
                value={(pageIndex + 1) * pageSize}
            />
        </Flex>
    )
}