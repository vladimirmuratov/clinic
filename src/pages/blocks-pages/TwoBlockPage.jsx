import {Box, Text} from "@chakra-ui/react";
import {BaseTitlePage} from "../../components/base/BaseTitlePage.jsx";
import {BaseBtnBack} from "../../components/base/BaseBtnBack";

export const TwoBlockPage = () => {
    return (
        <Box px="1rem" flexGrow="1">
            <BaseBtnBack/>
            <BaseTitlePage title="Услуга 2"/>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi consequatur dolor doloremque ea
                eaque neque non, sunt tenetur totam.
            </Text>
        </Box>
    )
}
