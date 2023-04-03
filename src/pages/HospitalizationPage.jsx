import {BaseBtnBack} from "../components/base/BaseBtnBack.jsx";
import {BaseTitlePage} from "../components/base/BaseTitlePage.jsx";
import {Box, Grid, Heading, Text} from "@chakra-ui/react";
import {collaborationOptions} from "../config/collaborationOptions.js";
import {Link} from "react-router-dom";

export const HospitalizationPage = () => {
    return (
        <Box px="1rem">
            <BaseBtnBack/>
            <BaseTitlePage title="Госпитализация"/>
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
            <Box mb="2" mt="40">
                <Heading size="md" mb="2">Мы сотрудничаем:</Heading>
                <Grid gridTemplateColumns={{base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)', lg: 'repeat(10, 1fr)'}} gap="2">
                    {collaborationOptions.length
                        ? collaborationOptions.map(({id, label, path}) => (
                            <Link key={id} to={path} target="_blank" rel="noopener noreferrer">
                                <Box
                                    border="1px solid black"
                                    borderRadius="5px"
                                    textAlign="center"
                                    paddingY="1"
                                >
                                    {label}
                                </Box>
                            </Link>
                        ))
                        : ''
                    }
                </Grid>
            </Box>
        </Box>
    )
}
