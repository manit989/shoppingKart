import {
  Badge,
  Box,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
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

export default function Career() {
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

  return (
    <Box
      minH="100vh"
      bg={pageBg}
      px={{ base: 4, md: 8, lg: 12 }}
      py={{ base: 8, md: 12 }}
    >
      <SEO 
        title="Careers - Join Our Team" 
        description="Join the AVIMA Seating team. We are always looking for talented individuals to help us craft the future of comfortable, smart office furniture."
      />
      <AnimatedSection>
        <Box mb={10} textAlign="center">
          <Badge
            bg="rgba(108, 92, 231, 0.1)"
            color={accentColor}
            borderRadius="full"
            px={3}
            py={1}
            mb={3}
          >
            Careers
          </Badge>
          <Heading as="h1" size="2xl" color={headingColor} mb={4}>
            Join Our Team
          </Heading>
          <Text color={mutedColor} maxW="3xl" mx="auto" fontSize="lg">
            We're always looking for talented individuals to grow with us.
            Fill out the form below with your basic requirements and we'll get
            back to you.
          </Text>
        </Box>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <VStack gap={0} maxW="4xl" mx="auto">
          <Box
            bg={cardBg}
            borderWidth="1px"
            borderColor={borderColor}
            borderRadius="2xl"
            overflow="hidden"
            className="glass-panel glow-card"
            w="full"
            transition="transform 0.3s ease, box-shadow 0.3s ease"
            _hover={{
              boxShadow: "0 10px 40px rgba(108, 92, 231, 0.12)",
            }}
          >
            {/* Form header bar */}
            <Box
              px={6}
              py={4}
              borderBottomWidth="1px"
              borderColor={borderColor}
            >
              <Heading as="h3" size="md" color={headingColor}>
                Basic Requirement Form
              </Heading>
              <Text color={mutedColor} fontSize="sm" mt={1}>
                Please fill in your details below, your responses are
                confidential.
              </Text>
            </Box>

            {/* Embedded Google Form iframe */}
            <Box
              position="relative"
              w="full"
              minH={{ base: "600px", md: "800px" }}
              bg="white"
            >
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfeupWe0KH2bF2q_1x_zoFnaE60tRrJOKZrP5hKiCQdexwQlA/viewform?embedded=true"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                title="Career Requirements Form"
                loading="lazy"
              >
                Loading…
              </iframe>
            </Box>
          </Box>
        </VStack>
      </AnimatedSection>
    </Box>
  );
}
