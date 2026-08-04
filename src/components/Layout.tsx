import { Outlet } from "react-router";
import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Header from "./Header";
import { useColorModeValue } from "./ui/color-mode";

export default function Layout() {
  const bannerBg = useColorModeValue(
    "linear-gradient(90deg, #6C5CE7 0%, #A78BFA 50%, #00B894 100%)",
    "linear-gradient(90deg, #6C5CE7 0%, #A78BFA 50%, #34D399 100%)",
  );
  const pageBg = useColorModeValue("#FAFBFF", "#0A0E1A");
  const headingColor = useColorModeValue("#1A1D2E", "#F0F1F5");
  const bodyColor = useColorModeValue("#5A5E72", "#9CA3AF");
  const accentColor = useColorModeValue("#6C5CE7", "#A78BFA");
  const linkHoverColor = useColorModeValue("#6C5CE7", "#A78BFA");
  const footerBorderColor = useColorModeValue(
    "rgba(108, 92, 231, 0.1)",
    "rgba(167, 139, 250, 0.1)",
  );

  return (
    <Box bg={pageBg} minH="100vh">
      <Flex
        as="section"
        px={{ base: 4, md: 6 }}
        py={2}
        justify="center"
        bgGradient={bannerBg}
        color="white"
      >
        <HStack gap={3} flexWrap="wrap" justify="center">
          <Text
            fontSize="sm"
            fontWeight="700"
            letterSpacing="0.12em"
            textTransform="uppercase"
          >
            AVIMA Seating
          </Text>
          <Text fontSize="sm" opacity={0.9}>
            Smart office furniture solutions for seating, storage, and
            workstations.
          </Text>
        </HStack>
      </Flex>

      <Header />

      <Box as="main" py={{ base: 0, md: 2 }}>
        <Outlet />
      </Box>

      <Box
        as="footer"
        px={{ base: 4, md: 8, lg: 12 }}
        py={{ base: 10, md: 14 }}
        borderTopWidth="1px"
        borderColor={footerBorderColor}
      >
        <Container maxW="7xl" px={0}>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            <Box>
              <Text
                fontFamily="'Playfair Display', serif"
                fontSize="2xl"
                fontStyle="italic"
                color={headingColor}
                mb={3}
              >
                AVIMA
              </Text>
              <Text color={bodyColor} maxW="sm">
                Smart office furniture solutions designed for calm, practical,
                and long-lasting workspaces.
              </Text>
            </Box>

            <Box>
              <Text
                fontSize="sm"
                fontWeight="700"
                letterSpacing="0.14em"
                textTransform="uppercase"
                color={accentColor}
                mb={3}
              >
                Explore
              </Text>
              <HStack gap={4} flexWrap="wrap">
                <Link
                  href="/"
                  className="animated-link"
                  color={bodyColor}
                  _hover={{ color: linkHoverColor }}
                  transition="color 0.25s ease"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="animated-link"
                  color={bodyColor}
                  _hover={{ color: linkHoverColor }}
                  transition="color 0.25s ease"
                >
                  About
                </Link>
                <Link
                  href="/product"
                  className="animated-link"
                  color={bodyColor}
                  _hover={{ color: linkHoverColor }}
                  transition="color 0.25s ease"
                >
                  Products
                </Link>
                <Link
                  href="/clients"
                  className="animated-link"
                  color={bodyColor}
                  _hover={{ color: linkHoverColor }}
                  transition="color 0.25s ease"
                >
                  Clients
                </Link>
                <Link
                  href="/cart"
                  className="animated-link"
                  color={bodyColor}
                  _hover={{ color: linkHoverColor }}
                  transition="color 0.25s ease"
                >
                  Cart
                </Link>
              </HStack>
            </Box>

            <Box>
              <Text
                fontSize="sm"
                fontWeight="700"
                letterSpacing="0.14em"
                textTransform="uppercase"
                color={accentColor}
                mb={3}
              >
                Services
              </Text>
              <Text color={bodyColor}>Interior guidance</Text>
              <Text color={bodyColor}>Enquiry handling</Text>
              <Text color={bodyColor}>Delivery coordination</Text>
            </Box>
          </SimpleGrid>

          <Box
            mt={10}
            pt={6}
            borderTopWidth="1px"
            borderColor={footerBorderColor}
            textAlign="center"
          >
            <Text fontSize="sm" color={bodyColor} opacity={0.7}>
              © {new Date().getFullYear()} AVIMA Seating. Designed for modern
              workspaces.
            </Text>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
