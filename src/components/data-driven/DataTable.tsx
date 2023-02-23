import { Table, TableContainer, TableContainerProps, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { purifyProps } from '../../utils/purify-props'
import { DataTableColumn } from './DataTableColumn'
import { DataTableRow } from './DataTableRow'

export interface DataTableProps extends TableContainerProps {
    className?: string
    columns: DataTableColumn[]
    data: DataTableRow[]
}

export const DataTable: React.FC<DataTableProps> = (props) => {

    return (
        <TableContainer {...purifyProps(props, ['columns', 'data'])}>
            <Table size='sm'>
                <Thead>
                    <Tr>
                        {props.columns.map((column, index) => {
                            return (
                                <Th>{column.title}</Th>
                            )
                        })}
                    </Tr>
                </Thead>
                <Tbody>
                    {props.data.map((row, rowIndex) => {
                        return (
                            <Tr>
                                {row.values.map((value, columnIndex) => {
                                    return (
                                        <Td>{value}</Td>
                                    )
                                })}
                            </Tr>
                        )
                    })}
                </Tbody>
                <Tfoot>
                    <Tr>
                        {props.columns.map((column, index) => {
                            return (
                                <Th>{column.title}</Th>
                            )
                        })}
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>)
}