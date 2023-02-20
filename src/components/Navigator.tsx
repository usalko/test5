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
    chakra,
    useDisclosure,
    Link,
    Flex,
    HStack,
} from '@chakra-ui/react'
import { ExternalLinkIcon, HamburgerIcon } from '@chakra-ui/icons'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Logo } from '../Logo'

export interface NavigatorProps {
    className?: string
}

export const Navigator: React.FC<NavigatorProps> = ({ className = '' }) => {

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
                            <Button ref={btnRef} onClick={onOpen}>
                                <Logo boxSize="26px" />
                            </Button>

                            <Link key="reactions">
                                <Button variant="nav"> Reactions </Button>
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
                                <DrawerHeader>Прототип</DrawerHeader>

                                <DrawerBody>
                                    <Link href='/reactions' isExternal>
                                        Реакции <ExternalLinkIcon mx='2px' />
                                    </Link>
                                </DrawerBody>

                                <DrawerFooter />
                            </DrawerContent>
                        </Drawer>
                    </Hide>
                </Flex>
            </chakra.header>
            <Outlet />
        </div>
    )
}