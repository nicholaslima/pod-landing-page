import { Box, Flex, Image } from "@chakra-ui/react";

export function BackHomePage() {
  return (
    <Box
      bgImage="images/image-host.jpg"
      bgSize="cover"
      maxHeight={["180px", "280px", "380px", "480px", "580px", "100%"]}
      h="100vh"
      w="69%"
      float="right"
      zIndex="20"
      mt="-30px"
    >
      <Image
        position="relative"
        w="20%"
        top="92%"
        float="right"
        src="images/bg-pattern-dots.svg"
        alt="logo"
      />
    </Box>
  );
}
