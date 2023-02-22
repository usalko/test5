import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'


export interface ReactionsBoardProps {
    className?: string
}

export const ReactionsBoard: React.FC<ReactionsBoardProps> = ({ className = '' }) => {

    return (
        <div className={className}>
            <VStack>
                <Flex w='100%' flexDirection={{ base: 'column', md: 'row', lg: 'row', xl: 'row', '2xl': 'row' }}>
                    <Box flex='1' alignContent='left'>
                        <Text>Chart 1</Text>
                    </Box>
                    <Box flex='1' alignContent='left'>
                        <Text>Chart 2</Text>
                    </Box>
                </Flex>
                <Flex w='100%'>
                    <Box flex='1' alignContent='left'>
                        <Text>Table</Text>
                    </Box>
                </Flex>
            </VStack>
        </div>
    )
}