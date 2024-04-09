import { Box, Heading, Text, Button, Image, Stack, useColorModeValue } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.800")}>
      <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }} py={20}>
        <Stack direction={{ base: "column", lg: "row" }} spacing={12} align="center">
          <Box flex={1}>
            <Heading as="h1" size="3xl" fontWeight="extrabold" mb={6}>
              Find Your{" "}
              <Text as="span" color="teal.500">
                Code
              </Text>
              -Mate 💻❤️
            </Heading>
            <Text fontSize="xl" mb={8}>
              TechMate is the dating app designed exclusively for tech bros. We use advanced algorithms to match you with other like-minded coders looking for love. Whether you're into JavaScript or Java, find your perfect programming partner on TechMate.
            </Text>
            <Button size="lg" colorScheme="teal" fontWeight="bold" px={8}>
              Download the App
            </Button>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYXRpbmclMjBhcHAlMjB0ZWNoJTIwaWxsdXN0cmF0aW9ufGVufDB8fHx8MTcxMjYyMDUxOHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Dating app illustration" rounded="lg" shadow="2xl" />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Index;
