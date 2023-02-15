import {Box, Grid, GridItem} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import cardInfo from "../cardsOptions.js";
import {BaseCard} from "../components/base/BaseCard.jsx";

export const MainPage = () => {
    const navigate = useNavigate()

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
                            <BaseCard navigate={navigate} {...item}/>
                        </GridItem>
                    ))
                    : null
                }
            </Grid>
        </Box>
    )
}
