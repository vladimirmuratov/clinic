import {Box, Heading, Text} from "@chakra-ui/react";

export const ContactsPage = () => {
    return (
        <Box width="100%" display="flex" flexDirection="column" gap="1rem" px="1rem">
            <Heading mt="1rem">Контакты</Heading>
            <Text><b>Адрес:</b> xxx</Text>
            <Text><b>Телефон:</b> xxx</Text>
            <Text><b>Email:</b> xxx</Text>
        </Box>
    )
}
