import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Hide,
    Box,
    Text,
    chakra,
    useDisclosure,
    Flex,
    HStack,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import React, { useEffect } from 'react'    
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Logo } from '../Logo'

export interface NavigatorProps {
    className?: string
    outletSpace?: number
}

export const Navigator: React.FC<NavigatorProps> = ({ className, outletSpace }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<HTMLButtonElement>(null)
    const { state } = useLocation()

    useEffect(() => {
        document.title = state?.title || 'Общая ниформация'
    })

    return (

        <div className={className}>
            <chakra.header>
                <Flex
                    w="100%"
                    align="center"
                    justify="space-between"
                >
                    <Hide below='md'>
                        <HStack as="nav" spacing="5">
                            <Link to='/' state={{ title: 'Общая информация' }}>
                                <Button>
                                    <Logo />
                                </Button>
                            </Link>

                            <Link to='/reactions' state={{ title: 'Реакции' }}>
                                <Button>Реакции</Button>
                            </Link>
                        </HStack>
                    </Hide>
                    <Hide above='md'>
                        <Button ref={btnRef} onClick={onOpen}>
                            <HamburgerIcon boxSize="26px" />
                        </Button>
                        <Drawer
                            isOpen={isOpen}
                            placement='left'
                            onClose={onClose}
                            finalFocusRef={btnRef}
                        >
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerCloseButton />
                                <DrawerHeader>
                                    <Link to='/' onClick={onClose} state={{ title: 'Общая информация' }}>
                                        <HStack>
                                            <Logo />
                                            <Text>Прототип аналитики канала</Text>
                                        </HStack>
                                    </Link>
                                </DrawerHeader>

                                <DrawerBody>
                                    <Link to='/reactions' state={{ title: 'Реакции' }}>
                                        <Button onClick={onClose}>Реакции</Button>
                                    </Link>
                                </DrawerBody>

                                <DrawerFooter />
                            </DrawerContent>
                        </Drawer>
                    </Hide>

                    <HStack flex='1' justifyContent='center' pr='24px'>
                        <Text>{state?.title || 'Общая ниформация'}</Text>
                    </HStack>
                </Flex>
            </chakra.header>
            <Box m={outletSpace}>
                <Outlet />
            </Box>
        </div>
    )
}