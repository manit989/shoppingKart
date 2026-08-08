import {
  Badge,
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FiPhone, FiMail, FiGlobe, FiMapPin, FiStar } from "react-icons/fi";
import { useColorModeValue } from "./components/ui/color-mode";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import SEO from "./components/SEO";

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

export default function Contact() {
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

  const contactMethods = [
    {
      icon: FiPhone,
      title: "Contact Us",
      details: ["+91 89200 22074", "+91 99999 28595"],
    },
    {
      icon: FiMail,
      title: "Email Us",
      details: ["avimaseating@gmail.com", "sales@avima.co.in"],
    },
    {
      icon: FiGlobe,
      title: "Visit Website",
      details: ["www.avimaseating.co.in"],
    },
    {
      icon: FiMapPin,
      title: "Headquarter - Lucknow",
      details: [
        "Plot No. 217, Ramji Nagar",
        "Near Naira Petrol Pump, Asti Road",
        "Bakshi Ka Talab, Lucknow",
        "Uttar Pradesh, 226201",
      ],
    },
    {
      icon: FiMapPin,
      title: "Our Branches",
      details: [
        "Gorakhpur",
        "Gonda",
        "Noida",
        "Delhi",
      ],
    },
  ];

  return (
    <Box
      minH="100vh"
      bg={pageBg}
      px={{ base: 4, md: 8, lg: 12 }}
      py={{ base: 8, md: 12 }}
    >
      <SEO 
        title="Contact Us" 
        description="Get in touch with AVIMA Seating. Headquartered in Lucknow with branches across India, we are here to help you create your ideal workspace."
      />
      <AnimatedSection>
        <Box mb={12} textAlign="center">
          <Badge
            bg="rgba(108, 92, 231, 0.1)"
            color={accentColor}
            borderRadius="full"
            px={3}
            py={1}
            mb={3}
          >
            Get In Touch
          </Badge>
          <Heading as="h1" size="2xl" color={headingColor} mb={4}>
            Contact Us
          </Heading>
          <Text color={mutedColor} maxW="3xl" mx="auto" fontSize="lg">
            We are here to help you create your ideal workspace. Reach out to us
            for inquiries, custom orders, or any assistance you may need.
          </Text>
        </Box>
      </AnimatedSection>

      <Stack gap={10} maxW="7xl" mx="auto">
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} alignItems="stretch">
          {/* Contact Info Cards */}
          <VStack gap={4} align="stretch">
            {contactMethods.map((method, index) => (
              <AnimatedSection key={method.title} delay={index * 0.1}>
                <Flex
                  bg={cardBg}
                  borderWidth="1px"
                  borderColor={borderColor}
                  p={6}
                  borderRadius="2xl"
                  className="glass-panel glow-card"
                  alignItems="flex-start"
                  gap={5}
                  transition="transform 0.3s ease, box-shadow 0.3s ease"
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "0 10px 30px rgba(108, 92, 231, 0.1)",
                  }}
                >
                  <Box
                    p={4}
                    bg="rgba(108, 92, 231, 0.1)"
                    color={accentColor}
                    borderRadius="xl"
                  >
                    <Icon as={method.icon} fontSize="2xl" />
                  </Box>
                  <Box>
                    <Heading as="h3" size="md" color={headingColor} mb={2}>
                      {method.title}
                    </Heading>
                    {method.details.map((detail, i) => (
                      <Text key={i} color={mutedColor} fontSize="md">
                        {detail}
                      </Text>
                    ))}
                  </Box>
                </Flex>
              </AnimatedSection>
            ))}
          </VStack>

          {/* Map and Reviews Section */}
          <VStack gap={6} align="stretch">
            <AnimatedSection delay={0.2}>
              <Box
                bg={cardBg}
                borderWidth="1px"
                borderColor={borderColor}
                borderRadius="2xl"
                overflow="hidden"
                className="glass-panel"
                h="full"
                display="flex"
                flexDirection="column"
              >
                <Box p={6} borderBottomWidth="1px" borderColor={borderColor}>
                  <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
                    <Box>
                      <Heading as="h3" size="md" color={headingColor} mb={1}>
                        Avima Seating
                      </Heading>
                      <Text color={mutedColor} fontSize="sm">
                        Furniture maker in Lucknow
                      </Text>
                    </Box>
                    <HStack
                      bg="rgba(255, 184, 0, 0.1)"
                      px={3}
                      py={2}
                      borderRadius="lg"
                    >
                      <Text fontWeight="bold" color="#FFB800" fontSize="lg">
                        5.0
                      </Text>
                      <HStack gap={1} color="#FFB800">
                        <FiStar fill="currentColor" />
                        <FiStar fill="currentColor" />
                        <FiStar fill="currentColor" />
                        <FiStar fill="currentColor" />
                        <FiStar fill="currentColor" />
                      </HStack>
                      <Text color={mutedColor} fontSize="sm" ml={1}>
                        (5 Reviews)
                      </Text>
                    </HStack>
                  </Flex>
                </Box>
                <Box flex="1" minH="300px" bg="gray.100" position="relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14224.960251390494!2d80.9304677271911!3d26.959325985023916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999590059e7ad37%3A0xc3cf333ed87b2803!2sAvima%20Seating!5e0!3m2!1sen!2sin!4v1707920392817!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Box>
              </Box>
            </AnimatedSection>
          </VStack>
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
