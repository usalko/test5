import { Box, Flex, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { DataTable } from '../data-driven/DataTable'
import { BarChart } from '../gears/BarChart'
import { PieChart } from '../gears/PieChart'


export interface ReactionsBoardProps {
    className?: string
}

export const ReactionsBoard: React.FC<ReactionsBoardProps> = ({ className = '' }) => {

    return (
        <div className={className}>
            <VStack>
                <Flex w='100%' flexDirection={{ base: 'column', md: 'row', lg: 'row', xl: 'row', '2xl': 'row' }}>
                    <VStack flex='1' alignContent='left' pb={2}>
                        <Text w='100%' align='left'>Всего за месяц</Text>
                        <Spacer />
                        <PieChart options={{
                            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                            responsive: [{
                                breakpoint: 480,
                                options: {
                                    legend: {
                                        position: 'bottom'
                                    }
                                }
                            }]
                        }}
                            series={[44, 55, 13, 43, 22]} width='100%' />
                    </VStack>
                    <VStack flex='1' alignContent='left' pb={2}>
                        <Text w='100%' align='left'>По времени</Text>
                        <Spacer />
                        <BarChart options={{
                            chart: {
                                type: 'bar',
                                height: 350,
                                stacked: true,
                            },
                            plotOptions: {
                                bar: {
                                    horizontal: false,
                                    dataLabels: {
                                        total: {
                                            enabled: true,
                                            offsetX: 0,
                                            style: {
                                                fontSize: '13px',
                                                fontWeight: 900
                                            }
                                        }
                                    }
                                },
                            },
                            stroke: {
                                width: 1,
                                colors: ['#fff']
                            },
                            xaxis: {
                                categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
                                labels: {
                                    formatter: function (val: any) {
                                        return val + "K"
                                    }
                                }
                            },
                            yaxis: {
                                title: {
                                    text: undefined
                                },
                            },
                            tooltip: {
                                y: {
                                    formatter: function (val: any) {
                                        return val + "K"
                                    }
                                }
                            },
                            fill: {
                                opacity: 1
                            },
                            legend: {
                                position: 'top',
                                horizontalAlign: 'left',
                                offsetX: 40
                            }
                        }} series={[{
                            name: 'Marine Sprite',
                            data: [44, 55, 41, 37, 22, 43, 21]
                        }, {
                            name: 'Striking Calf',
                            data: [53, 32, 33, 52, 13, 43, 32]
                        }, {
                            name: 'Tank Picture',
                            data: [12, 17, 11, 9, 15, 11, 20]
                        }, {
                            name: 'Bucket Slope',
                            data: [9, 7, 5, 8, 6, 9, 4]
                        }, {
                            name: 'Reborn Kid',
                            data: [25, 12, 19, 32, 25, 24, 10]
                        }]} width='100%' />
                    </VStack>
                </Flex>
                <Flex w='100%'>
                    <VStack flex='1'>
                        <Text w='100%' alignContent='left'>Статистика</Text>
                        <Spacer />
                        <DataTable w='100%' />
                    </VStack>
                </Flex>
            </VStack>
        </div>
    )
}