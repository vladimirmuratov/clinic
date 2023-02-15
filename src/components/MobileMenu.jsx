import {
    Divider,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay
} from "@chakra-ui/react";
import {linksOptions} from "../linksOptions.js";
import cardsOptions from "../cardsOptions.js";
import {BaseNavLink} from "./base/BaseNavLink.jsx";

export const MobileMenu = ({isOpen, onClose, placement = 'right'}) => {

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
                <DrawerBody
                    display="flex"
                    flexDirection="column"
                    gap="0.5rem"
                >
                    <BaseNavLink linksOptions={linksOptions} onClose={onClose}/>
                    <Divider/>
                    <BaseNavLink linksOptions={cardsOptions} onClose={onClose}/>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}
