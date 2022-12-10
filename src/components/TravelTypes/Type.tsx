import { Flex, Icon, Image, Img, Text, useBreakpointValue } from "@chakra-ui/react";

interface TypesProps {
    icons: string;
    text: string;
}

export default function Type({icons, text}: TypesProps){
    const isMobile = useBreakpointValue({
        base: false,
        sm: true
    });

    return(
        <Flex
        direction={["row", "column"]}
        align="center"
        justify="center"
        >
            {isMobile ? <Image src={`/assets/${icons}.svg`} w="85px" h="85x" fontSize="4xl" mr="2"/> : <Text><Img src="/assets/ellipse.svg"/></Text> }
            <Text fontWeight="600" color="gray.700" fontSize={["md", "xl", "2xl"]} ml="1">{text}</Text>
            
        </Flex>
    );
}