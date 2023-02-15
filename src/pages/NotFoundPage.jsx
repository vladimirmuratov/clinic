import {Box, Text} from "@chakra-ui/react";
import {BaseTitlePage} from "../components/base/BaseTitlePage";
import {Link} from "react-router-dom";

export const NotFoundPage = () => {
    return (
        <Box
            mt="3rem"
            w="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <BaseTitlePage title="404 Not Found Page"/>
            <Text>Return to <Link to="/" style={{color: "blue", textDecoration: "underline"}}>Main Page</Link></Text>
        </Box>
    )
}
