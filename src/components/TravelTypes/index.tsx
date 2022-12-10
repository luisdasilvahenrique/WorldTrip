import { Grid, GridItem } from "@chakra-ui/react";
import Type from "./Type";

export default function TravelTypes(){

    return(
        <Grid 
            templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
            w="100%"
            justifyContent="space-between"
            alignItems="center"
            mt={["10","12"]}
            mx="auto"
            maxW="1160px"
            gap={["1","5"]}
        >
            <GridItem>
                <Type text="vida noturna" icons="cocktail"/>
            </GridItem>
            <GridItem>
                <Type text="praia" icons="surf"/>
            </GridItem>
            <GridItem>
                <Type text="moderno" icons="building"/>
            </GridItem>
            <GridItem>
                <Type text="clássico" icons="museum"/>
            </GridItem>
            <GridItem colSpan={[2, 2, 2, 1]}>
                <Type text="e mais" icons="earth"/>
            </GridItem>
        </Grid>
    );
}