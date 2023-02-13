import {Box, Grid, GridItem} from "@chakra-ui/react";
import cardInfo from "../card-info.js";
import {CardInfo} from "../components/CardInfo.jsx";

export const MainPage = () => {
    return (
        <Box py="5px">
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(3, 1fr)',
                }}
                gap={{base: "5px", md: "0.5rem"}}
            >
                {cardInfo.length
                    ? cardInfo.map((item) => (
                        <GridItem key={item.id}>
                            <CardInfo {...item}/>
                        </GridItem>
                    ))
                    : null
                }
            </Grid>
        </Box>
    )
}
