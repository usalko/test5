import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'
import Chart from 'react-apexcharts'
import { purifyProps } from '../../utils/purify-props'

export interface PieChartProps extends BoxProps {
    className?: string
    options?: any
    series: any[]
}

export const PieChart: React.FC<PieChartProps> = (props) => {

    // TODO: extract from props
    const width = '100%'

    return (
        <Box {...purifyProps(props, ['options', 'series'])} >
            <Chart options={props.options} series={props.series} type="pie" width={width} />
        </Box>
    )
}