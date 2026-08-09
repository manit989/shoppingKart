"use client";

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
import { FiPhone, FiMail, FiGlobe, FiMapPin, FiStar, FiFacebook, FiInstagram, FiExternalLink } from "react-icons/fi";
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useColorModeValue } from "./components/ui/color-mode";
import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";

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
  const [showMap, setShowMap] = useState(false);

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
      details: [
        { text: "+91 89200 22074", link: "tel:+918920022074" },
        { text: "+91 99999 28595", link: "tel:+919999928595" },
        { text: "+91 99998 08454", link: "https://wa.me/919999808454", icon: FaWhatsapp }
      ],
    },
    {
      icon: FiMail,
      title: "Email Us",
      details: [
        { text: "avimaseating@gmail.com", link: "mailto:avimaseating@gmail.com" },
        { text: "sales@avima.co.in", link: "mailto:sales@avima.co.in" }
      ],
    },
    {
      icon: FiGlobe,
      title: "Visit Website",
      details: [{ text: "www.avimaseating.co.in", link: "https://www.avimaseating.co.in" }],
    },
    {
      icon: FiFacebook,
      title: "Social Media",
      details: [
        { text: "Facebook", link: "https://www.facebook.com/avimaseating/", icon: FaFacebook },
        { text: "Instagram", link: "https://www.instagram.com/avimaseating/", icon: FaInstagram },
        { text: "LinkedIn", link: "https://www.linkedin.com/company/avima-seating/?viewAsMember=true", icon: FaLinkedin }
      ],
    },
    {
      icon: FiMapPin,
      title: "Our Branches",
      details: [
        { text: "Gorakhpur" },
        { text: "Gonda" },
        { text: "Noida" },
        { text: "Delhi" },
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
        {/* Address Card with Map */}
        <AnimatedSection>
          <Box
            bg={cardBg}
            borderWidth="1px"
            borderColor={borderColor}
            borderRadius="2xl"
            overflow="hidden"
            className="glass-panel glow-card"
            transition="transform 0.3s ease, box-shadow 0.3s ease"
          >
            <Flex
              p={6}
              alignItems="flex-start"
              gap={5}
              justify="space-between"
              wrap="wrap"
            >
              <HStack alignItems="flex-start" gap={5}>
                <Box
                  p={4}
                  bg="rgba(108, 92, 231, 0.1)"
                  color={accentColor}
                  borderRadius="xl"
                >
                  <Icon as={FiMapPin} fontSize="2xl" />
                </Box>
                <Box>
                  <Heading as="h3" size="md" color={headingColor} mb={2}>
                    Headquarter - Lucknow
                  </Heading>
                  <Text color={mutedColor} fontSize="md" maxW="lg">
                    Plot No. 217, Ramji Nagar, Near Naira Petrol Pump, Asti Road,
                    Bakshi Ka Talab, Lucknow, Uttar Pradesh, 226201
                  </Text>
                </Box>
              </HStack>

              <HStack gap={3} mt={{ base: 2, md: 0 }}>
                <Box
                  as="button"
                  onClick={() => setShowMap(!showMap)}
                  display="flex"
                  alignItems="center"
                  gap={2}
                  bg={showMap ? accentColor : "rgba(108, 92, 231, 0.1)"}
                  color={showMap ? "white" : accentColor}
                  px={4}
                  py={2}
                  borderRadius="xl"
                  fontWeight="600"
                  fontSize="sm"
                  cursor="pointer"
                  transition="all 0.25s ease"
                  _hover={{
                    bg: accentColor,
                    color: "white",
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 20px rgba(108, 92, 231, 0.25)",
                  }}
                >
                  <FiMapPin />
                  {showMap ? "Hide Map" : "View on Map"}
                </Box>
                <a
                  href="https://www.google.com/maps/place/Avima+Seating/@26.959326,80.930468,14z/data=!4m6!3m5!1s0x399957ce67d42935:0xe71f6ddf1f0599b4!8m2!3d26.9575396!4d80.9138187!16s%2Fg%2F11nqxl6f80?hl=en&entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                    bg="rgba(108, 92, 231, 0.1)"
                    color={accentColor}
                    px={4}
                    py={2}
                    borderRadius="xl"
                    fontWeight="600"
                    fontSize="sm"
                    cursor="pointer"
                    transition="all 0.25s ease"
                    _hover={{
                      bg: accentColor,
                      color: "white",
                      transform: "translateY(-2px)",
                      boxShadow: "0 6px 20px rgba(108, 92, 231, 0.25)",
                    }}
                  >
                    <FiExternalLink />
                    Open in Google Maps
                  </Box>
                </a>
              </HStack>
            </Flex>

            {/* Embedded Google Map */}
            <AnimatePresence>
              {showMap && (
                <MotionBox
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "400px", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  overflow="hidden"
                  borderTopWidth="1px"
                  borderColor={borderColor}
                >
                  <Box w="100%" h="400px" position="relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.24!2d80.9138187!3d26.9575396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957ce67d42935%3A0xe71f6ddf1f0599b4!2sAvima%20Seating!5e0!3m2!1sen!2sin!4v1707920392817!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </Box>
                </MotionBox>
              )}
            </AnimatePresence>
          </Box>
        </AnimatedSection>

        {/* Other Contact Cards */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} alignItems="stretch">
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
                h="100%"
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
                    <Box key={i} mt={1}>
                      {"link" in detail && detail.link ? (
                        <a href={detail.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                          <HStack color={accentColor} _hover={{ textDecoration: "underline" }} fontSize="md" display="inline-flex" alignItems="flex-start" gap={2}>
                            {"icon" in detail && detail.icon && <Icon as={detail.icon as any} mt={1} />}
                            <Box>{detail.text}</Box>
                          </HStack>
                        </a>
                      ) : (
                        <HStack color={mutedColor} fontSize="md" alignItems="flex-start" gap={2}>
                          {"icon" in detail && detail.icon && <Icon as={detail.icon as any} mt={1} />}
                          <Text>{detail.text}</Text>
                        </HStack>
                      )}
                    </Box>
                  ))}
                </Box>
              </Flex>
            </AnimatedSection>
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
