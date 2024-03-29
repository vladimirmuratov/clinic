import {Box, Text} from "@chakra-ui/react";
import {BaseTitlePage} from "../components/base/BaseTitlePage";
import {BaseBtnBack} from "../components/base/BaseBtnBack";

export const AboutPage = () => {
    return (
        <Box px="1rem">
            <BaseBtnBack/>
            <BaseTitlePage title="О компании"/>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores cumque explicabo fugiat
                incidunt, libero maiores, nesciunt nihil obcaecati possimus, provident repellendus suscipit. Alias culpa
                impedit officia recusandae voluptas? A ab est, ipsa molestiae quis repudiandae voluptates! Deserunt
                dolores, fugit minima quis sequi tenetur totam? Accusamus accusantium assumenda ducimus sit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores cumque explicabo fugiat
                incidunt, libero maiores, nesciunt nihil obcaecati possimus, provident repellendus suscipit. Alias culpa
                impedit officia recusandae voluptas? A ab est, ipsa molestiae quis repudiandae voluptates! Deserunt
                dolores, fugit minima quis sequi tenetur totam? Accusamus accusantium assumenda ducimus sit.
            </Text>
        </Box>
    )
}
