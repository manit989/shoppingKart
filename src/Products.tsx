"use client";

import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FiMinus, FiPlus, FiShoppingBag } from "react-icons/fi";
import { useCart } from "./components/cart-context";
import { useColorModeValue } from "./components/ui/color-mode";
import { catalogProducts, catalogSections, catalogTags } from "./data/catalog";
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

export default function Products() {
  const { cart, addToCart, updateQuantity } = useCart();

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
  const panelBg = useColorModeValue(
    "rgba(108, 92, 231, 0.04)",
    "rgba(167, 139, 250, 0.06)",
  );
  const accentColor = useColorModeValue("#6C5CE7", "#A78BFA");
  const buttonBg = useColorModeValue("#6C5CE7", "#A78BFA");
  const mintAccent = useColorModeValue("#00B894", "#34D399");

  const getCartQty = (productId: number) => {
    const item = cart.find((i) => i.product.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <Box
      minH="100vh"
      bg={pageBg}
      px={{ base: 4, md: 8, lg: 12 }}
      py={{ base: 8, md: 12 }}
    >
      
      <AnimatedSection>
        <Box mb={8}>
          <Badge
            bg="rgba(108, 92, 231, 0.1)"
            color={accentColor}
            borderRadius="full"
            px={3}
            py={1}
            mb={3}
          >
            AVIMA seating catalogue
          </Badge>
          <Heading as="h1" size="2xl" color={headingColor} mb={3}>
            Browse by category and solution
          </Heading>
          <Text color={mutedColor} maxW="3xl">
            Scroll through the categories, compare pieces in a more visual
            format, and build a selection for a real office furnishing project.
          </Text>

          <Wrap mt={5} gap={3}>
            {catalogTags.map((tag) => (
              <WrapItem key={tag}>
                <Badge
                  bg="rgba(0, 184, 148, 0.08)"
                  color={mintAccent}
                  px={3}
                  py={1}
                  borderRadius="full"
                >
                  {tag}
                </Badge>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <Box mb={5}>
          <Heading as="h2" size="lg" color={headingColor}>
            Shop by collection
          </Heading>
        </Box>
      </AnimatedSection>

      <Stack gap={8}>
        {catalogSections.map((section) => (
          <AnimatedSection key={section.id}>
            <Box id={section.id} scrollMarginTop="90px">
              <Flex
                justify="space-between"
                align="end"
                mb={4}
                gap={4}
                wrap="wrap"
              >
                <Box>
                  <Heading as="h3" size="lg" color={headingColor}>
                    {section.title}
                  </Heading>
                  <Text color={mutedColor}>{section.description}</Text>
                </Box>
                <Badge
                  bg="rgba(108, 92, 231, 0.1)"
                  color={accentColor}
                  borderRadius="full"
                  px={3}
                  py={1}
                >
                  Curated set
                </Badge>
              </Flex>
              <Box
                borderTopWidth="1px"
                borderColor={borderColor}
                mb={4}
              />
              <Box
                display="grid"
                gridAutoFlow="column"
                gridAutoColumns={{ base: "82%", sm: "68%", md: "340px" }}
                gap={6}
                overflowX="auto"
                pb={2}
                pr={2}
              >
                {catalogProducts
                  .filter((product) => product.sectionId === section.id)
                  .map((product, i) => {
                    const qty = getCartQty(product.id);

                    return (
                      <MotionBox
                        key={product.id}
                        borderWidth="1px"
                        borderColor={borderColor}
                        overflow="hidden"
                        bg={cardBg}
                        borderRadius="2xl"
                        className="glow-card glass-panel"
                        transition={{
                          duration: 0.5,
                          delay: i * 0.08,
                          ease: "easeOut",
                        }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-40px" }}
                        whileHover={{
                          y: -6,
                          boxShadow:
                            "0 20px 40px rgba(108,92,231,0.12), 0 0 0 1px rgba(108,92,231,0.2)",
                        }}
                        style={{
                          transition:
                            "box-shadow 0.3s ease, transform 0.3s ease",
                        }}
                      >
                        <AspectRatio ratio={4 / 3} bg={panelBg}>
                          <img
                            src={product.image}
                            alt={product.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </AspectRatio>

                        <Box p={5}>
                          <Badge
                            bg="rgba(0, 184, 148, 0.08)"
                            color={mintAccent}
                            borderRadius="full"
                            px={2}
                            py={0.5}
                            mb={2}
                          >
                            {product.category}
                          </Badge>
                          <Heading
                            as="h4"
                            size="md"
                            mb={2}
                            color={headingColor}
                          >
                            {product.title}
                          </Heading>
                          <Text fontSize="sm" color={mutedColor} mb={4}>
                            {product.description}
                          </Text>
                          <Flex justify="end" align="center">
                            {qty === 0 ? (
                              <Button
                                size="sm"
                                bg={buttonBg}
                                color="white"
                                _hover={{
                                  opacity: 0.9,
                                  transform: "translateY(-1px)",
                                }}
                                borderRadius="xl"
                                transition="all 0.25s ease"
                                onClick={() => addToCart(product)}
                              >
                                <FiShoppingBag
                                  style={{ marginRight: "6px" }}
                                />
                                Add
                              </Button>
                            ) : (
                              <HStack
                                bg={buttonBg}
                                borderRadius="xl"
                                px={1}
                                py={1}
                                gap={0}
                              >
                                <Button
                                  size="xs"
                                  variant="ghost"
                                  color="white"
                                  _hover={{ bg: "rgba(255,255,255,0.15)" }}
                                  minW="28px"
                                  h="28px"
                                  borderRadius="lg"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    updateQuantity(product.id, -1);
                                  }}
                                >
                                  <FiMinus />
                                </Button>
                                <Text
                                  color="white"
                                  fontSize="sm"
                                  fontWeight="600"
                                  minW="28px"
                                  textAlign="center"
                                  userSelect="none"
                                >
                                  {qty}
                                </Text>
                                <Button
                                  size="xs"
                                  variant="ghost"
                                  color="white"
                                  _hover={{ bg: "rgba(255,255,255,0.15)" }}
                                  minW="28px"
                                  h="28px"
                                  borderRadius="lg"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    updateQuantity(product.id, 1);
                                  }}
                                >
                                  <FiPlus />
                                </Button>
                              </HStack>
                            )}
                          </Flex>
                        </Box>
                      </MotionBox>
                    );
                  })}
              </Box>
            </Box>
          </AnimatedSection>
        ))}
      </Stack>
    </Box>
  );
}
