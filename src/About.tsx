import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiDownload } from "react-icons/fi";
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

  return (
    <Box
      minH="100vh"
      bg={pageBg}
      px={{ base: 4, md: 8, lg: 12 }}
      py={{ base: 8, md: 12 }}
    >
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
            About AVIMA
          </Badge>
          <Heading as="h1" size="2xl" color={headingColor} mb={4}>
            Discover Our Story
          </Heading>
          <Text color={mutedColor} maxW="3xl" mx="auto" fontSize="lg">
            AVIMA Seating provides smart office furniture solutions that prioritize
            comfort, sustainability, and elegant design. Explore our digital brochure
            below to see how we bring tranquility and productivity to your workspaces.
          </Text>
        </Box>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Stack gap={8} maxW="6xl" mx="auto">
          {/* PDF Viewer Section */}
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

          {/* Download Brochure Section */}
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
                as="a"
                href="/brochure.pdf"
                download="brochure.pdf"
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
                <FiDownload style={{ marginRight: "12px", fontSize: "1.2em" }} />
                Download Full Brochure
              </Button>
            </MotionBox>
          </VStack>
        </Stack>
      </AnimatedSection>
    </Box>
  );
}
