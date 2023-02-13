import {Box, List, ListItem} from "@chakra-ui/react";
import {Link} from "react-router-dom";

export const Sidebar = ({links = []}) => {
    return (
        <Box
            backgroundColor="rgba(62, 99, 64, 0.3)"
            width="150px"
            pt="1rem"
            display={{base: 'none', md: 'flex'}}
            justifyContent="center"
        >
            <List>
                {links.length
                    ? links.map(({label, path}) => (
                        <ListItem key={label}>
                            <Link to={path}>{label}</Link>
                        </ListItem>
                    ))
                    : null
                }
            </List>
        </Box>
    )
}
