import { Box, Flex, Image } from "@chakra-ui/react";
import type { NextPage } from "next";
import { BackHomePage } from "../components/BackHomePage";

const Home: NextPage = () => {
  return (
    <Box w="100%" mx="auto" mt="105px" h="100vh">
      <Image zIndex="0" src="images/logo.svg" ml="170px" alt="logo" />
      <BackHomePage />
    </Box>
  );
};

export default Home;
