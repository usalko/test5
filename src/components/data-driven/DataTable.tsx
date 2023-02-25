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
import React from 'react'
import { purifyProps } from '../../utils/purify-props'
import { DataTableColumn } from './DataTableColumn'
import { pageCursor } from './DataTablePageCursor'
import { DataTableRequest } from './DataTableRequest'
import { DataTableRow } from './DataTableRow'
import { DataTableSlider } from './DataTableSlider'

export interface DataTableProps extends FlexProps {
    className?: string
    columns: DataTableColumn[]
    data: DataTableRow[] | DataTableRequest
    pageSize?: number
}

export const DataTable: React.FC<DataTableProps> = (props) => {

    const cursor = pageCursor(props.data, props.pageSize)

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
                        {cursor.hasPrevPage ? (<Tr>
                            <Td colSpan={props.columns.length}><Button h={4} w='100%'>Предыдущая страница</Button></Td>
                        </Tr>) : ''}
                        {cursor.pageData.map((row, rowIndex) => {
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
                        {cursor.hasNextPage ? (<Tr>
                            <Td colSpan={props.columns.length}><Button h={4} w='100%'>Следующая страница</Button></Td>
                        </Tr>) : ''}
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
            <DataTableSlider defaultValue={30}
                orientation='vertical'
                minH='32'
                h='auto'
            />
        </Flex>
    )
}