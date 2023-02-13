import {Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import {linksOptions} from "../linksOptions.js";

export const MobileMenu = ({isOpen, onClose, placement = 'right'}) => {
    const activeClasses = (isActive) => {
        return isActive ? {textDecoration: 'underline'} : null
    }

    return (
        <Drawer
            placement={placement}
            onClose={onClose}
            isOpen={isOpen}
        >
            <DrawerOverlay/>
            <DrawerContent>
                <DrawerCloseButton/>
                <DrawerHeader borderBottomWidth='1px'>Menu</DrawerHeader>
                <DrawerBody display="flex" flexDirection="column">
                    {linksOptions.length
                        ? linksOptions.map(({id, label, path}) => (
                            <NavLink style={({isActive}) => activeClasses(isActive)} key={id} to={path} onClick={onClose}>{label}</NavLink>
                        ))
                        : null
                    }
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}
