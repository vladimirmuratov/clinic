import {Box, Text} from "@chakra-ui/react";
import {BaseTitlePage} from "../components/base/BaseTitlePage";
import {BaseBtnBack} from "../components/base/BaseBtnBack";

export const ContactsPage = () => {
    return (
        <Box width="100%" display="flex" flexDirection="column" gap="1rem" px="1rem">
            <BaseBtnBack/>
            <BaseTitlePage title="Контакты"/>
            <Text><b>Адрес:</b> xxx</Text>
            <Text><b>Телефон:</b> xxx</Text>
            <Text><b>Email:</b> xxx</Text>
        </Box>
    )
}
