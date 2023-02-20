import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Text,
    Input,
    useDisclosure,
    Link,
} from '@chakra-ui/react'
import { ExternalLinkIcon, HamburgerIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

export interface NavigatorProps {
    className?: string
}

export const Navigator: React.FC<NavigatorProps> = ({ className = '' }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<HTMLButtonElement>(null)

    return (

        <div className={className}>

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
        </div>
    )
}