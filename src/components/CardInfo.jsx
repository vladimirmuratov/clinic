import {Card, CardBody, CardHeader, Heading, Text} from '@chakra-ui/react';

export const CardInfo = ({id, title, text}) => {
    return (
        <Card
            h={{
                base: "200px",
                md: "235px",
                lg: "275px"
            }}
            w={{
                base: "315px",
                md: "360px",
                lg: "325px"
            }}
            backgroundImage={`url(./images/pic${id}.jpg)`}
            backgroundSize="cover"
        >
            <CardHeader>
                <Heading size={{base: "lg", md: "xl"}} textTransform="capitalize">{title}</Heading>
            </CardHeader>
            <CardBody fontSize={{md: "1.1rem"}}>
                <Text>{text}</Text>
            </CardBody>
        </Card>
    )
}
