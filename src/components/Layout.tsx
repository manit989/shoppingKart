import { Outlet } from "react-router";
import { Box, Container, Flex, HStack, Link, SimpleGrid, Text } from "@chakra-ui/react";
import Header from "./Header";

export default function Layout() {
  return (
    <Box bgGradient="linear(to-b, brown.50, brown.100)">
      <Flex
        as="section"
        px={{ base: 4, md: 6 }}
        py={2}
        justify="center"
        bg="#3A2419"
        color="#FFF7ED"
      >
        <HStack gap={3} flexWrap="wrap" justify="center">
          <Text fontSize="sm" fontWeight="700" letterSpacing="0.12em" textTransform="uppercase">
            White glove delivery
          </Text>
          <Text fontSize="sm" opacity={0.9}>
            Free enquiry support, tailored room planning, and premium assembly options.
          </Text>
        </HStack>
      </Flex>

      <Header />

      <Box as="main" py={{ base: 0, md: 2 }}>
        <Outlet />
      </Box>

      <Box as="footer" px={{ base: 4, md: 8, lg: 12 }} py={{ base: 10, md: 14 }}>
        <Container maxW="7xl" px={0}>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            <Box>
              <Text
                fontFamily="'Playfair Display', serif"
                fontSize="2xl"
                fontStyle="italic"
                color="#2B1A12"
                mb={3}
              >
                Furniture Shop
              </Text>
              <Text color="brown.800" maxW="sm">
                Curated furniture and interior pieces designed for calm, practical, and long-lasting homes.
              </Text>
            </Box>

            <Box>
              <Text fontSize="sm" fontWeight="700" letterSpacing="0.14em" textTransform="uppercase" color="brown.700" mb={3}>
                Explore
              </Text>
              <HStack gap={4} flexWrap="wrap">
                <Link href="/">Home</Link>
                <Link href="/product">Products</Link>
                <Link href="/cart">Cart</Link>
              </HStack>
            </Box>

            <Box>
              <Text fontSize="sm" fontWeight="700" letterSpacing="0.14em" textTransform="uppercase" color="brown.700" mb={3}>
                Services
              </Text>
              <Text color="brown.800">Interior guidance</Text>
              <Text color="brown.800">Enquiry handling</Text>
              <Text color="brown.800">Delivery coordination</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
