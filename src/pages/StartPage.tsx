import { Stack, Text, Heading } from '@chakra-ui/react'
import React from 'react'

export interface StartPageProps {
    className?: string
}

export const StartPage: React.FC<StartPageProps> = ({ className = '' }) => (
    <div className={className}>
        <Stack spacing={3} width='50%'>
            <Heading fontSize='md'>Прототип аналитики канала.</Heading>
            <Text fontSize='md'>Для перехода на dashboard, используйте кнопку с названием или пункт бургер меню на мобильных устройствах.</Text>
        </Stack>
    </div>
)