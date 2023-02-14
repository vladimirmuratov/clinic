import {Box} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";

export const HeaderLinksBlock = ({links}) => {
    const activeStyles = {
        color: "#bdbdbd",
        textDecoration: "underline"
    }

    const getActiveClasses = (isActive) => isActive ? activeStyles : undefined

    return (
        <Box
            display={{base: 'none', md: 'flex'}}
            gap="1rem"
            fontSize="1.2rem"
            fontWeight="semibold"
            letterSpacing={1.2}
        >
            {links.length
                ? links.map(({id, label, path}) => (
                    <NavLink key={id} to={path}
                             style={({isActive}) => getActiveClasses(isActive)}>{label}</NavLink>
                ))
                : null
            }
        </Box>
    )
}
