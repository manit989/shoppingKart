"use client";

import {
  Accordion,
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { clients } from "./data/clients";
import NextLink from "next/link";
import { FaHammer, FaLeaf, FaTruck } from "react-icons/fa6";
import { useColorModeValue } from "./components/ui/color-mode";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Carousel from "./components/Carousel";
import "./index.css";

/* ── Motion-enhanced Chakra primitives ─────────── */
const MotionBox = motion.create(Box);
const MotionFlex = motion.create(Flex);
const MotionHeading = motion.create(Heading);
const MotionText = motion.create(Text);

/* ── Animated counter hook ─────────────────────── */
function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Heading as="h3" size="lg" lineHeight="1">
        {value}
      </Heading>
      <Text fontSize="sm" mt={1} opacity={0.7}>
        {label}
      </Text>
    </MotionBox>
  );
}

/* ── Staggered section wrapper ────────────────── */
function AnimatedSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </MotionBox>
  );
}

export function App() {
  const pageBg = useColorModeValue("#FAFBFF", "#0A0E1A");
  const panelBg = useColorModeValue(
    "rgba(255, 255, 255, 0.85)",
    "rgba(15, 20, 40, 0.85)",
  );
  const panelText = useColorModeValue("#1A1D2E", "#F0F1F5");
  const bodyText = useColorModeValue("#5A5E72", "#9CA3AF");
  const softPanelBg = useColorModeValue(
    "rgba(108, 92, 231, 0.04)",
    "rgba(167, 139, 250, 0.06)",
  );
  const overlay = useColorModeValue(
    "linear-gradient(90deg, rgba(250,251,255,0.82) 0%, rgba(250,251,255,0.45) 55%, rgba(250,251,255,0.12) 100%)",
    "linear-gradient(90deg, rgba(10,14,26,0.88) 0%, rgba(10,14,26,0.55) 55%, rgba(10,14,26,0.22) 100%)",
  );
  const buttonBg = useColorModeValue("#6C5CE7", "#A78BFA");
  const buttonText = useColorModeValue("#FFFFFF", "#0A0E1A");
  const buttonHoverBg = useColorModeValue("#5A4BD6", "#9171E8");
  const borderColor = useColorModeValue(
    "rgba(108, 92, 231, 0.12)",
    "rgba(167, 139, 250, 0.15)",
  );
  const accentColor = useColorModeValue("#00B894", "#34D399");
  const cardBg = useColorModeValue(
    "rgba(255, 255, 255, 0.9)",
    "rgba(15, 20, 40, 0.7)",
  );

  const trustStats = [
    { value: "4.0+/5", label: "Average review score" },
    { value: "6h", label: "Fast enquiry response" },
    { value: "1000+", label: "Offices styled" },
  ];

  const serviceHighlights = [
    {
      icon: FaLeaf,
      title: "Natural materials",
      text: "Warm woods, textured fabrics, and soft finishes that age well.",
    },
    {
      icon: FaHammer,
      title: "Craft-first details",
      text: "Simple silhouettes with thoughtful proportions and joinery.",
    },
    {
      icon: FaTruck,
      title: "Fastest delivery",
      text: "A smooth order experience from enquiry to final placement.",
    },
  ];

  const processSteps = [
    {
      title: "Browse the collections",
      text: "Explore chairs, tables, and storage pieces by section.",
    },
    {
      title: "Add what fits your room",
      text: "Create a cart that reflects your dimensions, budget, and style.",
    },
    {
      title: "Send an enquiry",
      text: "Share your details and we'll follow up with a tailored response.",
    },
  ];

  return (
    <Box bg={pageBg} minH="100vh">

      {/* ── Hero Section ────────────────────────── */}
      <Flex
        minH={{ base: "90vh", md: "115vh" }}
        direction="column"
        bgImage={`${overlay}, url('https://www.mindspace.me/wp-content/uploads/2025/07/new-york-brooklyn-coworking-space-.jpg')`}
        bgSize="cover, cover"
        bgRepeat="no-repeat"
        bgPos={{ base: "center", md: "center right" }}
        alignItems="stretch"
        justifyContent="flex-start"
        overflow="hidden"
        p={{ base: 4, md: 0 }}
        position="relative"
      >
        {/* Decorative floating orbs */}
        <Box
          className="orb orb-primary"
          w="400px"
          h="400px"
          top="-100px"
          right="-100px"
        />
        <Box
          className="orb orb-secondary"
          w="300px"
          h="300px"
          bottom="10%"
          left="-80px"
        />

        <Grid
          templateColumns={{ base: "1fr", lg: "1.2fr 0.8fr" }}
          w="full"
          minH={{ base: "90vh", md: "115vh" }}
        >
          <GridItem
            display="flex"
            alignItems="stretch"
            minH={{ base: "65vh", lg: "115vh" }}
          >
            <Flex
              direction="column"
              justifyContent="center"
              w="full"
              h="full"
              bg={panelBg}
              className="glass-panel"
              py={{ base: 8, md: 0 }}
              px={{ base: 6, md: 16, xl: 24 }}
              boxShadow="20px 20px 50px rgba(0,0,0,0.12)"
              borderWidth={{ base: "1px", md: "0" }}
              borderColor={borderColor}
            >
              <Stack gap={6}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Wrap>
                    <WrapItem>
                      <Badge
                        bg="rgba(108, 92, 231, 0.1)"
                        color="#6C5CE7"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontWeight="600"
                      >
                        AVIMA seating
                      </Badge>
                    </WrapItem>
                    <WrapItem>
                      <Badge
                        bg="rgba(0, 184, 148, 0.1)"
                        color={accentColor}
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontWeight="600"
                      >
                        Smart furniture solutions
                      </Badge>
                    </WrapItem>
                  </Wrap>
                </MotionBox>

                <Box>
                  <MotionHeading
                    as="h1"
                    fontFamily="'Playfair Display', serif"
                    fontSize={{ base: "4xl", md: "5xl", xl: "6xl" }}
                    fontWeight="500"
                    color={panelText}
                    lineHeight="1.05"
                    mb="6"
                    textTransform="uppercase"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    AVIMA <br />
                    Seating <br />
                    Furniture
                  </MotionHeading>

                  <MotionText
                    fontFamily="'Inter', sans-serif"
                    fontSize={{ base: "md", md: "lg", xl: "xl" }}
                    color={bodyText}
                    mb="8"
                    lineHeight="relaxed"
                    maxW="md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    Discover seating and workplace furniture built for modern
                    offices, collaborative areas, and focused work.
                  </MotionText>

                  <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <NextLink href="/product">
                      <Button
                        size="lg"
                        w={{ base: "full", md: "auto" }}
                        bg={buttonBg}
                        color={buttonText}
                        _hover={{
                          bg: buttonHoverBg,
                          transform: "translateY(-2px)",
                        }}
                        transition="transform 0.25s ease, background-color 0.25s ease"
                        variant="solid"
                        fontFamily="'Inter', sans-serif"
                        fontWeight="500"
                        letterSpacing="wider"
                        textTransform="uppercase"
                        borderRadius="xl"
                        px="8"
                        className="cta-glow"
                      >
                        Explore the Collection
                      </Button>
                    </NextLink>
                  </MotionBox>
                </Box>

                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <SimpleGrid columns={{ base: 2, md: 4 }} gap={4} pt={4}>
                    {trustStats.map((stat, i) => (
                      <MotionBox
                        key={stat.label}
                        borderWidth="1px"
                        borderColor={borderColor}
                        p={4}
                        bg={softPanelBg}
                        borderRadius="xl"
                        className="glass-panel"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                        color={panelText}
                      >
                        <AnimatedStat
                          value={stat.value}
                          label={stat.label}
                        />
                      </MotionBox>
                    ))}
                  </SimpleGrid>
                </MotionBox>
              </Stack>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>

      {/* ── Carousel Section ──────────────────────── */}
      <Carousel />

      {/* ── About Section ───────────────────────── */}
      <Box px={{ base: 4, md: 8, lg: 12 }} py={{ base: 10, md: 16 }}>
        <AnimatedSection>
          <Box maxW="4xl" mb={8}>
            <Text
              fontFamily="'Inter', sans-serif"
              fontSize="sm"
              fontWeight="700"
              letterSpacing="0.18em"
              textTransform="uppercase"
              color={accentColor}
              mb={3}
            >
              About AVIMA
            </Text>
            <Heading as="h2" size="xl" color={panelText} mb={3}>
              Designed to make workspaces feel relaxing, focused, and comfortable.
            </Heading>
            <Text
              color={bodyText}
              fontSize={{ base: "md", md: "lg" }}
              maxW="3xl"
            >
              Avima Seating is a furniture brand built on a legacy of craftsmanship, innovation and trust,
              with roots in furniture making dating back to 1985.
              Founded with the vision of creating furniture that is not only functional and affordable but also comfortable,
              reliable and designed around the needs of people,
              we are committed to redefining the way people experience furniture.
            </Text>
          </Box>
        </AnimatedSection>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          {serviceHighlights.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.12}>
              <Box
                bg={cardBg}
                borderWidth="1px"
                borderColor={borderColor}
                p={6}
                borderRadius="2xl"
                className="glow-card glass-panel"
                transition="transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s ease"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow:
                    "0 20px 40px rgba(108,92,231,0.1), 0 0 0 1px rgba(108,92,231,0.2)",
                }}
              >
                <Stack gap={3}>
                  <Box
                    color={buttonBg}
                    fontSize="2xl"
                    w="48px"
                    h="48px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="xl"
                    bg="rgba(108, 92, 231, 0.1)"
                  >
                    <item.icon />
                  </Box>
                  <Heading as="h3" size="md" color={panelText}>
                    {item.title}
                  </Heading>
                  <Text color={bodyText}>{item.text}</Text>
                </Stack>
              </Box>
            </AnimatedSection>
          ))}
        </SimpleGrid>
      </Box>

      {/* ── Process & Stats Section ──────────────── */}
      <Box px={{ base: 4, md: 8, lg: 12 }} pb={{ base: 10, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          <AnimatedSection>
            <Box
              bg={cardBg}
              borderWidth="1px"
              borderColor={borderColor}
              p={6}
              borderRadius="2xl"
              className="glass-panel"
              h="full"
            >
              <Text
                fontFamily="'Inter', sans-serif"
                fontSize="sm"
                fontWeight="700"
                letterSpacing="0.18em"
                textTransform="uppercase"
                color={accentColor}
                mb={3}
              >
                How it works
              </Text>
              <Stack gap={4}>
                {processSteps.map((step, index) => (
                  <AnimatedSection key={step.title} delay={0.1 * index}>
                    <Box>
                      <Text
                        color={buttonBg}
                        fontSize="sm"
                        fontWeight="700"
                        mb={1}
                      >
                        0{index + 1}
                      </Text>
                      <Heading as="h3" size="md" color={panelText} mb={1}>
                        {step.title}
                      </Heading>
                      <Text color={bodyText}>{step.text}</Text>
                    </Box>
                  </AnimatedSection>
                ))}
              </Stack>
            </Box>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <Box
              bg={cardBg}
              borderWidth="1px"
              borderColor={borderColor}
              p={6}
              borderRadius="2xl"
              className="glass-panel"
              h="full"
            >
              <Text
                fontFamily="'Inter', sans-serif"
                fontSize="sm"
                fontWeight="700"
                letterSpacing="0.18em"
                textTransform="uppercase"
                color={accentColor}
                mb={3}
              >
                Why customers stay
              </Text>
              <Stack gap={4}>
                {trustStats.map((stat) => (
                  <Box key={stat.label}>
                    <Heading
                      as="h3"
                      size="2xl"
                      color={panelText}
                      lineHeight="1"
                    >
                      {stat.value}
                    </Heading>
                    <Text color={bodyText}>{stat.label}</Text>
                  </Box>
                ))}
              </Stack>
            </Box>
          </AnimatedSection>
        </SimpleGrid>
      </Box>

      {/* ── FAQ & CTA Section ────────────────────── */}
      <Box px={{ base: 4, md: 8, lg: 12 }} pb={{ base: 12, md: 18 }}>
        <AnimatedSection>
          <Box mb={8} textAlign="center">
            <Badge
              bg="rgba(108, 92, 231, 0.1)"
              color={accentColor}
              borderRadius="full"
              px={3}
              py={1}
              mb={3}
            >
              FAQs
            </Badge>
            <Heading as="h2" size="xl" color={panelText} mb={4}>
              Frequently Asked Questions
            </Heading>
          </Box>
          <Accordion.Root collapsible defaultValue={[] as string[]}>
            <Accordion.Item value="faq-1">
              <Accordion.ItemTrigger>
                <Heading as="h3" size="md" color={panelText}>
                  What happens after I send an enquiry?
                </Heading>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody>
                  We confirm stock, estimate delivery, and return with a
                  tailored follow-up for your selected furniture.
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
            <Accordion.Item value="faq-2">
              <Accordion.ItemTrigger>
                <Heading as="h3" size="md" color={panelText}>
                  Can I mix collections in one order?
                </Heading>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody>
                  Yes. The cart is designed for mixed rooms, so you can combine
                  seating, tables, and storage pieces.
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          </Accordion.Root>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          {/* Moving Clients Banner */}
          <Box
            py={10}
            mb={8}
            borderTopWidth="1px"
            borderBottomWidth="1px"
            borderColor={borderColor}
            bg="rgba(108, 92, 231, 0.02)"
          >
            <div className="marquee-container">
              <div className="marquee-content">
                {[...clients, ...clients].map((client, i) => (
                  <Box
                    key={`${client.name}-${i}`}
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    mx={{ base: 6, md: 10 }}
                    w="160px"
                    h="100px"
                  >
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      maxH="70px"
                      maxW="140px"
                      objectFit="contain"
                      style={{
                        filter: "grayscale(100%) opacity(0.6)",
                        transition: "all 0.3s ease",
                        cursor: "pointer"
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.filter = "grayscale(0%) opacity(1)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.filter = "grayscale(100%) opacity(0.6)";
                      }}
                    />
                  </Box>
                ))}
              </div>
            </div>
          </Box>

          <Box
            bg={cardBg}
            borderWidth="1px"
            borderColor={borderColor}
            p={{ base: 6, md: 8 }}
            mt={8}
            borderRadius="2xl"
            className="glow-card glass-panel"
            transition="transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s ease"
            _hover={{
              transform: "translateY(-4px)",
              boxShadow:
                "0 20px 40px rgba(108,92,231,0.1), 0 0 0 1px rgba(108,92,231,0.15)",
            }}
          >
            <Text
              fontFamily="'Inter', sans-serif"
              fontSize="sm"
              fontWeight="700"
              letterSpacing="0.18em"
              textTransform="uppercase"
              color={accentColor}
              mb={3}
            >
              Customer note
            </Text>
            <Heading as="h3" size="lg" color={panelText} mb={3} maxW="3xl">
              "The catalogue feels curated, the enquiry flow is simple, and the
              pieces fit right into a modern office."
            </Heading>
          </Box>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Box
            bg={softPanelBg}
            borderWidth="1px"
            borderColor={borderColor}
            p={{ base: 6, md: 8 }}
            mt={6}
            textAlign="center"
            borderRadius="2xl"
            className="glass-panel"
          >
            <Text
              fontFamily="'Inter', sans-serif"
              fontSize="sm"
              fontWeight="700"
              letterSpacing="0.18em"
              textTransform="uppercase"
              color={accentColor}
              mb={3}
            >
              Trusted by leading institutions
            </Text>
            <Heading as="h3" size="md" color={panelText} mb={5}>
              See the clients who rely on AVIMA Seating
            </Heading>
            <Button
              asChild
              size="lg"
              bg={buttonBg}
              color={buttonText}
              _hover={{
                bg: buttonHoverBg,
                transform: "translateY(-2px)",
              }}
              transition="transform 0.25s ease, background-color 0.25s ease"
              variant="solid"
              fontFamily="'Inter', sans-serif"
              fontWeight="500"
              letterSpacing="wider"
              textTransform="uppercase"
              borderRadius="xl"
              px="8"
            >
              <NextLink href="/clients">
                View Our Customers
              </NextLink>
            </Button>
          </Box>
        </AnimatedSection>
      </Box>
    </Box>
  );
}

export default App;
