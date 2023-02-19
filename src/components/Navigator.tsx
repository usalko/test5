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
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

export interface NavigatorProps {
    className?: string
}

export const Navigator: React.FC<NavigatorProps> = ({ className = '' }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (

        <div className={className}>

            <Outlet />

            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
            >

                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder='Type here...' />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}