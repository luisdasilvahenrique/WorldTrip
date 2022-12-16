import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import { RiArrowLeftSLine } from 'react-icons/ri';

export default function () {

  const { asPath } = useRouter();
  const IsNotHomePage = asPath !== "/";

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
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignSelf="start"
      >

    { IsNotHomePage && (
      <Link href="/">
        <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf="start"/>
      </Link>
    )}

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
