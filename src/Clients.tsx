"use client";

import {
  Box,
  Container,
  Heading,
  Image,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useColorModeValue } from "./components/ui/color-mode";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import "./index.css";

const MotionBox = motion.create(Box);

const clients = [
  { name: "GD Goenka University", logo: "/assets/customers/GdGoenka.jpeg" },
  { name: "Adarsh World School", logo: "/assets/customers/adarshSchool.png" },
  { name: "Amity University", logo: "/assets/customers/amity.jpg" },
  { name: "Indian Railways", logo: "/assets/customers/IndianRailways.png" },
  { name: "Jal Shakti Department", logo: "/assets/customers/JalShakti.jpg" },
  { name: "Pusa Institute Delhi", logo: "/assets/customers/PusaDelhi.jpeg" },
  { name: "UP Police", logo: "/assets/customers/UpPolice.jpg" },
];

export default function Clients() {
  const pageBg = useColorModeValue("#FAFBFF", "#0A0E1A");
  const panelText = useColorModeValue("#1A1D2E", "#F0F1F5");
  const bodyText = useColorModeValue("#5A5E72", "#9CA3AF");
  const cardBg = useColorModeValue(
    "rgba(255, 255, 255, 0.9)",
    "rgba(15, 20, 40, 0.7)",
  );
  const borderColor = useColorModeValue(
    "rgba(108, 92, 231, 0.12)",
    "rgba(167, 139, 250, 0.15)",
  );
  const accentColor = useColorModeValue("#6C5CE7", "#A78BFA");
  const mintAccent = useColorModeValue("#00B894", "#34D399");

  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <Box bg={pageBg} minH="100vh">
      
      {/* Hero Section */}
      <Box
        pt={{ base: 16, md: 24 }}
        pb={{ base: 12, md: 18 }}
        textAlign="center"
        position="relative"
        overflow="hidden"
      >
        {/* Decorative orbs */}
        <Box
          className="orb orb-primary"
          w="350px"
          h="350px"
          top="-80px"
          left="-60px"
        />
        <Box
          className="orb orb-secondary"
          w="250px"
          h="250px"
          bottom="-40px"
          right="-30px"
        />

        <Container maxW="4xl" position="relative">
          <Stack gap={4} align="center">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Text
                fontFamily="'Inter', sans-serif"
                fontSize="sm"
                fontWeight="700"
                letterSpacing="0.18em"
                textTransform="uppercase"
                color={mintAccent}
              >
                Our Partners
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <Heading
                as="h1"
                fontFamily="'Playfair Display', serif"
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight="500"
                color={panelText}
                lineHeight="1.15"
              >
                Clients we are proud of
              </Heading>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <Text
                fontFamily="'Inter', sans-serif"
                fontSize={{ base: "md", md: "lg" }}
                color={bodyText}
                maxW="2xl"
                lineHeight="relaxed"
              >
                Trusted by leading universities, schools, and institutions
                across India to deliver smart, comfortable office and campus
                furniture solutions.
              </Text>
            </MotionBox>
          </Stack>
        </Container>
      </Box>

      {/* Clients Grid */}
      <Box px={{ base: 4, md: 8, lg: 12 }} py={{ base: 10, md: 16 }}>
        <Container maxW="5xl" px={0}>
          <Flex
            ref={gridRef}
            wrap="wrap"
            justify="center"
            gap={8}
          >
            {clients.map((client, i) => (
              <MotionBox
                key={client.name}
                w={{ base: "100%", sm: "calc(50% - 1rem)", md: "calc(33.333% - 1.33rem)" }}
                bg={cardBg}
                borderWidth="1px"
                borderColor={borderColor}
                borderRadius="2xl"
                overflow="hidden"
                className="glow-card glass-panel"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={
                  isGridInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : {}
                }
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  boxShadow:
                    "0 24px 48px rgba(108,92,231,0.15), 0 0 0 1px rgba(108,92,231,0.25)",
                }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={8}
                  minH="200px"
                  bg="rgba(108, 92, 231, 0.02)"
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    maxH="120px"
                    maxW="200px"
                    objectFit="contain"
                    transition="transform 0.3s ease"
                    _hover={{ transform: "scale(1.05)" }}
                  />
                </Box>
                <Box
                  px={5}
                  pb={5}
                  pt={0}
                  textAlign="center"
                  borderTopWidth="1px"
                  borderColor={borderColor}
                >
                  <Text
                    fontFamily="'Inter', sans-serif"
                    fontSize="sm"
                    fontWeight="600"
                    color={panelText}
                    pt={4}
                    letterSpacing="0.02em"
                  >
                    {client.name}
                  </Text>
                </Box>
              </MotionBox>
            ))}
          </Flex>
        </Container>
      </Box>

      {/* Trust Banner */}
      <Box
        px={{ base: 4, md: 8, lg: 12 }}
        pb={{ base: 12, md: 18 }}
        textAlign="center"
      >
        <Container maxW="3xl" px={0}>
          <MotionBox
            bg={cardBg}
            borderWidth="1px"
            borderColor={borderColor}
            borderRadius="2xl"
            p={{ base: 6, md: 10 }}
            className="glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <Text
              fontFamily="'Playfair Display', serif"
              fontSize={{ base: "lg", md: "xl" }}
              fontStyle="italic"
              color={panelText}
              lineHeight="1.6"
            >
              "We partner with institutions that share our commitment to
              quality, comfort, and functional design."
            </Text>
            <Text
              fontFamily="'Inter', sans-serif"
              fontSize="sm"
              fontWeight="600"
              color={accentColor}
              mt={4}
              textTransform="uppercase"
              letterSpacing="0.12em"
            >
              — AVIMA Seating Team
            </Text>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
}
