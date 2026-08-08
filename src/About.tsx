"use client";

import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { FiDownload, FiCheckCircle, FiHeart, FiShield, FiStar, FiUsers, FiAward, FiClock, FiThumbsUp, FiFacebook, FiInstagram } from "react-icons/fi";
import { useColorModeValue } from "./components/ui/color-mode";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const MotionBox = motion.create(Box);

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
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </MotionBox>
  );
}

export default function About() {
  const pageBg = useColorModeValue("#FAFBFF", "#0A0E1A");
  const cardBg = useColorModeValue(
    "rgba(255, 255, 255, 0.9)",
    "rgba(15, 20, 40, 0.7)",
  );
  const borderColor = useColorModeValue(
    "rgba(108, 92, 231, 0.12)",
    "rgba(167, 139, 250, 0.15)",
  );
  const mutedColor = useColorModeValue("#5A5E72", "#9CA3AF");
  const headingColor = useColorModeValue("#1A1D2E", "#F0F1F5");
  const accentColor = useColorModeValue("#6C5CE7", "#A78BFA");
  const buttonBg = useColorModeValue("#6C5CE7", "#A78BFA");

  const values = [
    { text: "Customer care", icon: FiHeart },
    { text: "After-sales service", icon: FiCheckCircle },
    { text: "Product reliability", icon: FiShield },
    { text: "Transparent dealings", icon: FiUsers },
    { text: "Integrity and customer ethics", icon: FiStar },
    { text: "Timely support", icon: FiClock },
    { text: "Long-term customer relationships", icon: FiThumbsUp },
  ];

  const promises = [
    { title: "Legacy in Craftsmanship.", icon: FiAward },
    { title: "Innovation in Design.", icon: FiStar },
    { title: "Comfort in Every Seat.", icon: FiHeart },
    { title: "Integrity in Every Deal.", icon: FiShield },
    { title: "Care Beyond the Sale.", icon: FiCheckCircle },
  ];

  return (
    <Box
      minH="100vh"
      bg={pageBg}
      px={{ base: 4, md: 8, lg: 12 }}
      py={{ base: 8, md: 16 }}
    >
      
      <AnimatedSection>
        <Box mb={16} textAlign="center">
          <Badge
            bg="rgba(108, 92, 231, 0.1)"
            color={accentColor}
            borderRadius="full"
            px={3}
            py={1}
            mb={4}
          >
            About Us
          </Badge>
          <Heading as="h1" size={{ base: "xl", md: "2xl" }} color={headingColor} mb={6} maxW="4xl" mx="auto" lineHeight="1.2">
            Crafting Furniture with Legacy, Innovation & Care
          </Heading>
          <Text color={mutedColor} maxW="4xl" mx="auto" fontSize="lg" lineHeight="relaxed">
            Avima Seating is a furniture brand built on a legacy of craftsmanship, innovation and trust, with roots in furniture making dating back to 1985. Founded with the vision of creating furniture that is not only functional and affordable but also comfortable, reliable and designed around the needs of people, we are committed to redefining the way people experience furniture.
          </Text>
          <Text color={mutedColor} maxW="4xl" mx="auto" fontSize="lg" lineHeight="relaxed" mt={4}>
            Our journey is driven by a women-led vision and strengthened by the expertise of DCE/DTU alumni, along with a dedicated advisory team comprising professors, industry experts and experienced professionals. This unique combination of academic knowledge, industry experience and traditional craftsmanship allows us to develop furniture solutions that bring together the best of tradition and modern technology.
          </Text>
        </Box>
      </AnimatedSection>

      <Stack gap={16} maxW="6xl" mx="auto">
        
        {/* Core Philosophy Grid */}
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
          <AnimatedSection delay={0.1}>
            <Box
              bg={cardBg}
              p={8}
              borderRadius="2xl"
              borderWidth="1px"
              borderColor={borderColor}
              className="glass-panel"
              h="full"
            >
              <Heading as="h3" size="lg" color={headingColor} mb={4}>
                Furniture Designed Around People
              </Heading>
              <Text color={mutedColor} fontSize="md" mb={4} lineHeight="relaxed">
                Today, prolonged sitting and sedentary lifestyles have made comfort, posture and ergonomics more important than ever. At Avima Seating, we understand that furniture is not merely about appearance—it directly influences the way people sit, work, study and live.
              </Text>
              <Text color={mutedColor} fontSize="md" lineHeight="relaxed">
                Our approach focuses on developing furniture with attention to ergonomics, posture, comfort and long-term usability, particularly for environments such as schools, offices, institutions and other spaces where people spend extended periods sitting.
              </Text>
            </Box>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Box
              bg={cardBg}
              p={8}
              borderRadius="2xl"
              borderWidth="1px"
              borderColor={borderColor}
              className="glass-panel"
              h="full"
            >
              <Heading as="h3" size="lg" color={headingColor} mb={4}>
                Tradition Meets Modern Technology
              </Heading>
              <Text color={mutedColor} fontSize="md" mb={6} lineHeight="relaxed">
                With decades of experience in furniture making, we combine the craftsmanship and knowledge of traditional furniture manufacturing with modern design techniques, technology, materials and manufacturing practices.
              </Text>
              <Text color={headingColor} fontWeight="600" mb={3}>
                This enables us to create furniture that is:
              </Text>
              <HStack wrap="wrap" gap={3}>
                {["Affordable", "Reliable", "Comfortable", "Durable", "Functional"].map((item) => (
                  <Badge key={item} bg="rgba(108, 92, 231, 0.1)" color={accentColor} px={3} py={1} borderRadius="full" fontSize="sm">
                    {item}
                  </Badge>
                ))}
              </HStack>
            </Box>
          </AnimatedSection>
        </SimpleGrid>

        {/* More Than a Manufacturer */}
        <AnimatedSection delay={0.3}>
          <Box
            bgImage={`linear-gradient(to bottom right, rgba(108, 92, 231, 0.05), rgba(167, 139, 250, 0.05))` }
            p={{ base: 8, md: 12 }}
            borderRadius="3xl"
            borderWidth="1px"
            borderColor={borderColor}
          >
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={10} alignItems="center">
              <Box>
                <Heading as="h3" size="xl" color={headingColor} mb={5}>
                  More Than a Furniture Manufacturer
                </Heading>
                <Text color={mutedColor} fontSize="lg" mb={6} lineHeight="relaxed">
                  At Avima Seating, we believe that manufacturing is only one part of our responsibility. Our relationship with the customer continues beyond the sale.
                </Text>
                <Text color={headingColor} fontSize="lg" fontWeight="600" mb={4}>
                  We place strong emphasis on:
                </Text>
                <VStack align="start" gap={3}>
                  {values.map((item, i) => (
                    <HStack key={i} gap={3}>
                      <Icon as={item.icon} color={accentColor} boxSize={5} />
                      <Text color={mutedColor} fontSize="md" fontWeight="500">{item.text}</Text>
                    </HStack>
                  ))}
                </VStack>
                <Text color={headingColor} fontSize="lg" fontWeight="600" mt={6} fontStyle="italic">
                  "Our objective is simple: to earn trust through every product we manufacture and every customer we serve."
                </Text>
              </Box>
              <Box>
                <Box
                  bg={cardBg}
                  p={8}
                  borderRadius="2xl"
                  borderWidth="1px"
                  borderColor={borderColor}
                  className="glass-panel glow-card"
                >
                  <Heading as="h4" size="md" color={accentColor} mb={3} textTransform="uppercase" letterSpacing="wider">
                    Manufacturing Your Dream Furniture
                  </Heading>
                  <Text color={mutedColor} fontSize="md" mb={4} lineHeight="relaxed">
                    Every customer has a different requirement, environment and vision. Whether it is a modern classroom, a comfortable office, an institutional space or a customized furniture requirement, we work to transform ideas into practical furniture solutions.
                  </Text>
                  <Text color={mutedColor} fontSize="md" fontWeight="500" lineHeight="relaxed">
                    We don't just manufacture furniture. We manufacture your dream furniture—designed with experience, engineered with knowledge and built with care.
                  </Text>
                </Box>
              </Box>
            </SimpleGrid>
          </Box>
        </AnimatedSection>

        {/* Vision & Promise */}
        <AnimatedSection delay={0.4}>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
            <Box
              p={8}
              borderRadius="2xl"
              borderWidth="1px"
              borderColor={borderColor}
              bg="rgba(108, 92, 231, 0.03)"
            >
              <Flex align="center" mb={4} gap={3}>
                <Box p={3} bg="rgba(108, 92, 231, 0.1)" borderRadius="lg" color={accentColor}>
                  <Icon as={FiStar} boxSize={6} />
                </Box>
                <Heading as="h3" size="lg" color={headingColor}>
                  Our Vision
                </Heading>
              </Flex>
              <Text color={mutedColor} fontSize="lg" lineHeight="relaxed">
                To become a trusted name in furniture manufacturing by creating products that combine comfort, ergonomics, innovation, affordability and timeless craftsmanship, while continuously improving the way people interact with their furniture.
              </Text>
            </Box>

            <Box
              p={8}
              borderRadius="2xl"
              borderWidth="1px"
              borderColor={borderColor}
              bg="rgba(108, 92, 231, 0.03)"
            >
              <Flex align="center" mb={6} gap={3}>
                <Box p={3} bg="rgba(108, 92, 231, 0.1)" borderRadius="lg" color={accentColor}>
                  <Icon as={FiAward} boxSize={6} />
                </Box>
                <Heading as="h3" size="lg" color={headingColor}>
                  Our Promise
                </Heading>
              </Flex>
              <VStack align="start" gap={4}>
                {promises.map((item, i) => (
                  <HStack key={i} gap={3}>
                    <Icon as={item.icon} color={accentColor} boxSize={5} />
                    <Text color={headingColor} fontSize="md" fontWeight="600">{item.title}</Text>
                  </HStack>
                ))}
              </VStack>
            </Box>
          </SimpleGrid>
          <Box textAlign="center" mt={12}>
            <Heading as="h2" size={{ base: "xl", md: "2xl" }} color={accentColor} fontStyle="italic" fontFamily="'Playfair Display', serif" lineHeight="1.3">
              Avima Seating — Manufacturing Your Dream Furniture
            </Heading>
            <HStack justify="center" gap={8} mt={8}>
              <a href="https://www.facebook.com/avimaseating/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', transition: 'all 0.2s', color: mutedColor }}>
                <Box _hover={{ color: accentColor, transform: "scale(1.1)" }}>
                  <Icon as={FiFacebook} boxSize={8} />
                </Box>
              </a>
              <a href="https://www.instagram.com/avimaseating/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', transition: 'all 0.2s', color: mutedColor }}>
                <Box _hover={{ color: accentColor, transform: "scale(1.1)" }}>
                  <Icon as={FiInstagram} boxSize={8} />
                </Box>
              </a>
            </HStack>
          </Box>
        </AnimatedSection>

        <Box borderTopWidth="1px" borderColor={borderColor} />

        {/* Digital Brochure Section */}
        <AnimatedSection delay={0.5}>
          <Box textAlign="center" mb={8}>
            <Heading as="h2" size="xl" color={headingColor} mb={4}>
              Explore Our Collections
            </Heading>
            <Text color={mutedColor} maxW="2xl" mx="auto" fontSize="lg">
              View our comprehensive digital brochure to discover our complete range of seating and smart office solutions.
            </Text>
          </Box>
          <Box
            borderWidth="1px"
            borderColor={borderColor}
            borderRadius="2xl"
            overflow="hidden"
            bg={cardBg}
            className="glass-panel glow-card"
            boxShadow="xl"
          >
            <Box bg="rgba(0,0,0,0.05)" p={3} borderBottomWidth="1px" borderColor={borderColor}>
              <Flex justify="space-between" align="center">
                <Text fontWeight="600" color={headingColor} fontSize="sm">
                  AVIMA Seating Smart Office Solutions
                </Text>
              </Flex>
            </Box>
            <Box h={{ base: "60vh", md: "80vh" }} w="full">
              <iframe
                src="/avima-brochure.pdf"
                width="100%"
                height="100%"
                style={{ border: "none" }}
                title="AVIMA Brochure Viewer"
              />
            </Box>
          </Box>

          <VStack gap={4} py={8}>
            <Heading as="h3" size="md" color={headingColor}>
              Want to view our comprehensive catalog offline?
            </Heading>
            <Text color={mutedColor} textAlign="center" maxW="2xl">
              Download our full, high-resolution brochure to explore the complete range of AVIMA seating collections, technical specifications, and room concepts in detail.
            </Text>
            
            <MotionBox
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="xl"
                bg={buttonBg}
                color="white"
                px={8}
                py={6}
                borderRadius="xl"
                fontSize="lg"
                fontWeight="600"
                boxShadow="lg"
                _hover={{
                  bg: useColorModeValue("#5A4BD6", "#9171E8"),
                }}
              >
                <a href="/brochure.pdf" download="brochure.pdf">
                  <FiDownload style={{ marginRight: "12px", fontSize: "1.2em" }} />
                  Download Catalog
                </a>
              </Button>
            </MotionBox>
          </VStack>
        </AnimatedSection>
      </Stack>
    </Box>
  );
}
