"use client";

import NextLink from "next/link";
import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Header from "./Header";
import { useColorModeValue } from "./ui/color-mode";
import Loader from "./Loader";

export default function Layout({ children }: { children: React.ReactNode }) {
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
      <Loader />
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
        {children}
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
              <Image
                src="/assets/logo.jpg"
                alt="Avima Seating Logo"
                h="50px"
                w="auto"
                mb={4}
              />
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
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/about" },
                  { label: "Products", href: "/product" },
                  { label: "Cart", href: "/cart" },
                  { label: "Customers", href: "/clients" },
                  { label: "Career", href: "/career" },
                  { label: "Contact Us", href: "/contact" },
                ].map((link) => (
                  <NextLink key={link.label} href={link.href} style={{ textDecoration: "none" }}>
                    <Box
                      as="span"
                      className="animated-link"
                      color={bodyColor}
                      _hover={{ color: linkHoverColor }}
                      transition="color 0.25s ease"
                    >
                      {link.label}
                    </Box>
                  </NextLink>
                ))}
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

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918920022074?text=Hello%20AVIMA%20Seating%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          zIndex: 998,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "64px",
          height: "64px",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4), 0 2px 8px rgba(0,0,0,0.15)",
          transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          textDecoration: "none",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="white"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </Box>
  );
}
