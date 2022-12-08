import { Flex, Grid, Image } from "@chakra-ui/react";

export default function () {
  return (
    <Flex
      bg="white"
      w="100%"
      as="header"
      mx="auto"
      px="1rem"
      h={["50px", "75px", "100px"]}
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1170px"
        alignItems="center"
        templateColumns="repeat(3, 1f)"
        justifyContent="center"
      >
        <Image
          w={["81px", "184px"]}
          src="/Logo.svg"
          alt="Um avião voando sobre o nome da marca worldtrip"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}
