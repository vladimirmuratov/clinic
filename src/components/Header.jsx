import {Box, IconButton} from "@chakra-ui/react";
import {Link, NavLink} from "react-router-dom";
import {HamburgerIcon} from "@chakra-ui/icons";
import {linksOptions} from "../linksOptions.js";

export const Header = ({onOpen}) => {
    const activeStyles = {
        color: "#bdbdbd",
        textDecoration: "underline"
    }

    const getActiveClasses = (isActive) => isActive ? activeStyles : undefined

    return (
        <Box
            position="sticky"
            top="0"
            zIndex="1"
            padding="0.5rem 1rem"
            backgroundColor="rgba(157, 148, 209, 1)"
            boxShadow="base"
            bgGradient="linear(to-r, blue.600, blue.300)"
            color='white'
        >
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Link to="/" style={{fontSize: "1.5rem", fontWeight: "bold"}}>Logo</Link>
                <Box
                    display={{base: 'none', md: 'flex'}}
                    gap="1rem"
                    fontSize="1.2rem"
                    fontWeight="semibold"
                    letterSpacing={1.2}
                >
                    {linksOptions.length
                        ? linksOptions.map(({id, label, path}) => (
                            <NavLink key={id} to={path}
                                     style={({isActive}) => getActiveClasses(isActive)}>{label}</NavLink>
                        ))
                        : null
                    }
                </Box>
                <IconButton
                    onClick={onOpen}
                    aria-label="mobile-menu"
                    icon={<HamburgerIcon/>}
                    backgroundColor="inherit"
                    visibility={{base: "visible", md: "hidden"}}
                />
            </Box>
        </Box>

    )
}
