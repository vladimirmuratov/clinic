import {Box} from "@chakra-ui/react";
import {BaseNavLink} from "./base/BaseNavLink";

export const HeaderLinksBlock = ({links}) => {
    const activeStyles = {
        color: "#bdbdbd",
        textDecoration: "underline"
    }

    return (
        <Box
            display={{base: 'none', md: 'flex'}}
            gap="1rem"
            fontSize="1.2rem"
            fontWeight="semibold"
            letterSpacing={1.2}
        >
            <BaseNavLink linksOptions={links} activeStyles={activeStyles}/>
        </Box>
    )
}
