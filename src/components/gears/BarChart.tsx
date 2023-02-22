import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'
import Chart from 'react-apexcharts'
import { purifyProps } from '../../utils/purify-props'

export interface BarChartProps extends BoxProps {
    className?: string
    options?: any
    series: any[]
}

export const BarChart: React.FC<BarChartProps> = (props) => {

    // TODO: extract from props
    const width = '100%'

    return (
        <Box {...purifyProps(props, ['options', 'series'])} >
            <Chart options={props.options} series={props.series} type="bar" width={width} />
        </Box>
    )
}