import {
    Flex,
    FlexProps,
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
    Table,
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
import { DataTableRow } from './DataTableRow'

export interface DataTableProps extends FlexProps {
    className?: string
    columns: DataTableColumn[]
    data: DataTableRow[]
}

export const DataTable: React.FC<DataTableProps> = (props) => {

    return (
        <Flex {...purifyProps(props, ['columns', 'data'])}>
            <TableContainer flex='1'>
                <Table size='sm'>
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
                        {props.data.map((row, rowIndex) => {
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
            <Slider
                aria-label='slider-ex-3'
                defaultValue={30}
                orientation='vertical'
                minH='32'
            >
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
            </Slider>

        </Flex>
    )
}