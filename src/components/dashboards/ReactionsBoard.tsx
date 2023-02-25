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
                            labels: ['\u{1F600}', '\u{1F603}', '\u{1F604}', '\u{1F601}', '\u{1F606}'],
                            legend: {
                                fontSize: '32px'
                            },
                        }}
                            series={[44, 55, 13, 43, 22]} width='100%' />
                    </VStack>
                    <VStack flex={{ base: 1, lg: 2, xl: 2, '2xl': 2 }} alignContent='left' pb={2}>
                        <Text w='100%' align='left'>По времени</Text>
                        <Spacer />
                        <BarChart options={{
                            chart: {
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
                                categories: ['2023-02-23T00:00', '2023-02-23T01:00', '2023-02-23T02:00', '2023-02-23T03:00', '2023-02-23T04:00',
                                    '2023-02-23T05:00', '2023-02-23T06:00', '2023-02-23T07:00', '2023-02-23T08:00', '2023-02-23T09:00',
                                    '2023-02-23T10:00', '2023-02-23T11:00', '2023-02-23T12:00', '2023-02-23T13:00', '2023-02-23T14:00',
                                    '2023-02-23T15:00', '2023-02-23T16:00', '2023-02-23T17:00', '2023-02-23T18:00', '2023-02-23T19:00',
                                    '2023-02-23T20:00', '2023-02-23T21:00', '2023-02-23T22:00', '2023-02-23T23:00', '2023-02-24T00:00'],
                                labels: {
                                    formatter: function (val: any) {
                                        return `${(new Date(val)).getHours()}`.padStart(2, '0')
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
                                        return val + 'ч'
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
                            name: '\u{1F600}',
                            data: [0, 0, 0, 0, 0,
                                0, 0, 3, 0, 0,
                                0, 2, 0, 0, 0,
                                0, 0, 0, 1, 0,
                                0, 0, 8, 0, 0]
                        }, {
                            name: '\u{1F603}',
                            data: [0, 0, 0, 0, 0,
                                0, 0, 2, 0, 0,
                                0, 1, 0, 0, 0,
                                0, 0, 1, 0, 0,
                                0, 0, 0, 3, 0]
                        }, {
                            name: '\u{1F604}',
                            data: [0, 0, 1, 0, 0,
                                0, 0, 2, 0, 0,
                                0, 3, 0, 0, 0,
                                0, 0, 0, 5, 0,
                                0, 0, 1, 0, 0]
                        }, {
                            name: '\u{1F601}',
                            data: [1, 0, 0, 0, 0,
                                0, 0, 0, 0, 0,
                                0, 0, 0, 1, 0,
                                0, 0, 0, 0, 0,
                                0, 0, 0, 0, 1]
                        }, {
                            name: '\u{1F606}',
                            data: [0, 0, 0, 0, 0,
                                0, 3, 0, 0, 0,
                                0, 0, 0, 4, 0,
                                0, 2, 0, 0, 0,
                                0, 0, 0, 1, 0]
                        }]} width='100%' />
                    </VStack>
                </Flex>
                <VStack w='100%' >
                    <Text w='100%' alignContent='left'>Статистика</Text>
                    <Spacer />
                    <DataTable w='100%' columns={[
                        { title: 'ID сообщения' },
                        { title: '@Валера' },
                        { title: '@Юра' },
                        { title: '@Глеб' },
                    ]} data={[
                        { values: ['123476538624', '\u{1F606}', '', ''] },
                        { values: ['249762969696', '', '\u{1F601}', '\u{1F600}'] },
                        { values: ['659296476966', '', '\u{1F604}', ''] },
                        { values: ['834656245969', '\u{1F603}', '', ''] },
                        { values: ['873469629369', '\u{1F604}', '', '\u{1F606}'] },
                        { values: ['349879837498', '', '', '\u{1F601}'] },
                        { values: ['084375084357', '\u{1F601}', '', '\u{1F604}'] },
                        { values: ['094590845305', '\u{1F600}', '\u{1F604}', ''] },
                        { values: ['234098092845', '', '', '\u{1F601}'] },
                        { values: ['049394038555', '', '\u{1F606}', '\u{1F600}'] },
                        { values: ['968002808085', '\u{1F604}', '\u{1F600}', ''] },
                        { values: ['108458839050', '', '\u{1F601}', ''] },
                    ]} />
                </VStack>
            </VStack>
        </div>
    )
}