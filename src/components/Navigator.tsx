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
import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Logo } from '../Logo'

export interface NavigatorProps {
    className?: string
    outletSpace?: number
}

export const Navigator: React.FC<NavigatorProps> = ({ className, outletSpace }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<HTMLButtonElement>(null)

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
                            <Link to='/'>
                                <Button>
                                    <Logo boxSize="26px" />
                                </Button>
                            </Link>

                            <Link to='/reactions'>
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
                                    <Link to='/' onClick={onClose}>
                                        <HStack>
                                            <Logo boxSize="26px" />
                                            <Text>Прототип аналитики канала</Text>
                                        </HStack>
                                    </Link>
                                </DrawerHeader>

                                <DrawerBody>
                                    <Link to='/reactions'>
                                        <Button onClick={onClose}>Реакции</Button>
                                    </Link>
                                </DrawerBody>

                                <DrawerFooter />
                            </DrawerContent>
                        </Drawer>
                    </Hide>
                </Flex>
            </chakra.header>
            <Box m={outletSpace}>
                <Outlet />
            </Box>
        </div>
    )
}