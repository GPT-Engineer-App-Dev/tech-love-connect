import { Box, Button, Container, Flex, Heading, Icon, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FaCode, FaHeart, FaMobile, FaQuoteLeft, FaRocket } from "react-icons/fa";

const Feature = ({ title, text, icon }) => (
  <Box textAlign="center" px={4} py={8}>
    <Icon as={icon} boxSize={12} color="teal.500" mb={4} />
    <Heading as="h3" size="md" fontWeight="bold" mb={2}>
      {title}
    </Heading>
    <Text>{text}</Text>
  </Box>
);

const Testimonial = ({ name, quote, image }) => (
  <Box p={6} bgColor="gray.50" rounded="lg">
    <Icon as={FaQuoteLeft} boxSize={8} color="teal.500" mb={4} />
    <Text fontSize="lg" mb={4}>
      {quote}
    </Text>
    <Flex align="center">
      <Image src={image} w={16} h={16} rounded="full" mr={4} />
      <Box>
        <Text fontWeight="bold">{name}</Text>
        <Text fontSize="sm" color="gray.500">
          Happy TechMate User
        </Text>
      </Box>
    </Flex>
  </Box>
);

const Index = () => (
  <Box>
    {/* Hero */}
    <Box bgGradient="linear(to-br, teal.400, purple.500)" py={32} textAlign="center" color="white">
      <Container maxW="container.lg">
        <Heading as="h1" size="3xl" mb={4}>
          Find Your Perfect Code-Mate
        </Heading>
        <Text fontSize="xl" mb={8}>
          The dating app for tech-minded singles
        </Text>
        <Button size="lg" colorScheme="white" fontWeight="bold" rounded="full" px={8}>
          Download TechMate
        </Button>
      </Container>
    </Box>

    {/* Features */}
    <Box py={20}>
      <Container maxW="container.lg">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={16}>
          <Feature title="Geeky Icebreakers" text="Bond over shared tech interests from the start" icon={FaRocket} />
          <Feature title="Algorithm Magic" text="Our smart matching finds your ideal partner" icon={FaCode} />
          <Feature title="Secure Chats" text="Encrypted messaging keeps your convos private" icon={FaMobile} />
        </SimpleGrid>
      </Container>
    </Box>

    {/* Testimonials */}
    <Box py={20} bgColor="gray.50">
      <Container maxW="container.lg">
        <Heading textAlign="center" mb={12}>
          Happy Code Couples
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          <Testimonial name="Cody S." quote="I found my programming soulmate on TechMate! We're inseparable." image="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEyNjIxMTI2fDA&ixlib=rb-4.0.3&q=80&w=1080" />
          <Testimonial name="Tina R." quote="TechMate matched me with my dream developer. We code all day!" image="https://images.unsplash.com/photo-1687462970787-61d953508926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTI2MjExMjl8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        </SimpleGrid>
      </Container>
    </Box>

    {/* CTA */}
    <Box py={20} textAlign="center">
      <Container maxW="container.lg">
        <Stack spacing={8} align="center">
          <Icon as={FaHeart} boxSize={16} color="red.500" />
          <Heading as="h2" size="2xl">
            Ready to Meet Your Match?
          </Heading>
          <Text fontSize="xl">Join the most engaging dating app for tech bros and broettes.</Text>
          <Button size="lg" colorScheme="teal" rounded="full" px={8}>
            Get TechMate Now
          </Button>
        </Stack>
      </Container>
    </Box>
  </Box>
);

export default Index;
