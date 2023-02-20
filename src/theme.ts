import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        brand: {

        }
    },
    components: {
        Button: {
            baseStyle: {
                rounded: 'none'
            }
        },
        Input: {
            sizes: {
                lg: {
                    field: {
                        borderRadius: 'none',
                    },
                },
                md: {
                    field: {
                        borderRadius: 'none',
                    },
                },
            },
        },
    }
})