import { useState } from "react";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router";
import { useCart } from "./components/cart-context";
import { useColorModeValue } from "./components/ui/color-mode";
import { motion } from "motion/react";
import SEO from "./components/SEO";

const MotionBox = motion.create(Box);

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

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

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const buildCartSummary = () =>
    cart
      .map(
        (item) =>
          `${item.quantity} x ${item.product.title} (${item.product.category})`,
      )
      .join("\n");

  const handleEnquirySubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "Hello AVIMA Seating,",
      "I would like to enquire about the following cart items:",
      buildCartSummary() || "No items selected",
      "",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/918920022074?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Box
      minH="100vh"
      bg={pageBg}
      px={{ base: 4, md: 8, lg: 12 }}
      py={{ base: 8, md: 12 }}
    >
      <SEO 
        title="Your Cart" 
        description="Review your selected AVIMA seating products and send a direct enquiry to our team for a personalized quote."
      />
      <MotionBox
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Flex mb={4} gap={3} wrap="wrap" color={mutedColor} fontSize="sm">
          <Box as={Link} to="/" className="animated-link">
            Home
          </Box>
          <Box as="span">/</Box>
          <Box as={Link} to="/product" className="animated-link">
            Products
          </Box>
          <Box as="span">/</Box>
          <Box as="span" color={headingColor} fontWeight="700">
            Cart
          </Box>
        </Flex>
      </MotionBox>

      <Flex direction={{ base: "column", lg: "row" }} gap={8} align="start">
        <MotionBox
          flex="1"
          w="full"
          bg={cardBg}
          borderWidth="1px"
          borderColor={borderColor}
          borderRadius="2xl"
          className="glass-panel"
          overflow="hidden"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Box p={6} pb={0}>
            <Badge
              bg="rgba(108, 92, 231, 0.1)"
              color={accentColor}
              borderRadius="full"
              px={3}
              py={1}
              mb={3}
            >
              Cart overview
            </Badge>
            <Heading as="h1" size="2xl" color={headingColor} mb={3}>
              Your AVIMA cart
            </Heading>
            <Text
              color={mutedColor}
              fontSize={{ base: "md", md: "lg" }}
              maxW="2xl"
            >
              Review the pieces you've selected, adjust quantities, and send an
              enquiry when you're ready.
            </Text>
          </Box>

          <Box p={6}>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={4} mt={2}>
              {[
                { value: totalItems, label: "Items" },
                { value: cart.length, label: "Unique products" },
                { value: "Ready", label: "Enquiry status" },
              ].map((item, i) => (
                <MotionBox
                  key={item.label}
                  bg={panelBg}
                  borderWidth="1px"
                  borderColor={borderColor}
                  p={5}
                  borderRadius="xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <Text fontSize="sm" color={mutedColor} mb={1}>
                    {item.label}
                  </Text>
                  <Heading as="h2" size="lg" color={headingColor}>
                    {item.value}
                  </Heading>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Box>
        </MotionBox>

        <MotionBox
          flex="1.2"
          w="full"
          bg={cardBg}
          borderWidth="1px"
          borderColor={borderColor}
          borderRadius="2xl"
          className="glass-panel"
          overflow="hidden"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box p={{ base: 4, md: 6 }}>
            {cart.length === 0 ? (
              <Stack gap={4}>
                <Text color={mutedColor}>
                  Your cart is empty. Add pieces from the collection first.
                </Text>
                <Button
                  asChild
                  bg={buttonBg}
                  color="white"
                  _hover={{ opacity: 0.9 }}
                  borderRadius="xl"
                  alignSelf="start"
                >
                  <Link to="/product">Browse products</Link>
                </Button>
              </Stack>
            ) : (
              <Stack gap={4}>
                {cart.map((item, i) => (
                  <MotionBox
                    key={item.product.id}
                    borderWidth="1px"
                    borderColor={borderColor}
                    borderRadius="xl"
                    p={4}
                    bg={panelBg}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                  >
                    <Flex justify="space-between" gap={3} align="start">
                      <Box>
                        <Text fontWeight="semibold" color={headingColor}>
                          {item.product.title}
                        </Text>
                        <Text fontSize="sm" color={mutedColor}>
                          {item.product.category}
                        </Text>
                      </Box>
                      <Button
                        size="sm"
                        variant="ghost"
                        color="red.400"
                        _hover={{ bg: "rgba(239,68,68,0.1)" }}
                        borderRadius="lg"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <FiTrash2 />
                      </Button>
                    </Flex>

                    <Flex
                      justify="space-between"
                      align="center"
                      mt={4}
                      gap={4}
                    >
                      <HStack>
                        <Button
                          size="sm"
                          variant="outline"
                          borderColor={borderColor}
                          borderRadius="lg"
                          _hover={{ bg: panelBg }}
                          onClick={() =>
                            updateQuantity(item.product.id, -1)
                          }
                        >
                          <FiMinus />
                        </Button>
                        <Text
                          minW="2ch"
                          textAlign="center"
                          color={headingColor}
                          fontWeight="600"
                        >
                          {item.quantity}
                        </Text>
                        <Button
                          size="sm"
                          variant="outline"
                          borderColor={borderColor}
                          borderRadius="lg"
                          _hover={{ bg: panelBg }}
                          onClick={() =>
                            updateQuantity(item.product.id, 1)
                          }
                        >
                          <FiPlus />
                        </Button>
                      </HStack>
                    </Flex>
                  </MotionBox>
                ))}

                <Box borderTopWidth="1px" borderColor={borderColor} />

                <Box pt={4}>
                  {!showEnquiryForm ? (
                    <Button
                      bg={buttonBg}
                      color="white"
                      _hover={{ opacity: 0.9, transform: "translateY(-1px)" }}
                      borderRadius="xl"
                      transition="all 0.25s ease"
                      w="full"
                      onClick={() => setShowEnquiryForm(true)}
                    >
                      Send enquiry
                    </Button>
                  ) : (
                    <MotionBox
                      as="form"
                      onSubmit={handleEnquirySubmit}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.4 }}
                    >
                      <Stack gap={3}>
                        <Text fontSize="sm" color={mutedColor}>
                          Share your details and we'll open WhatsApp with
                          your cart enquiry.
                        </Text>
                        <Box>
                          <Text
                            fontSize="sm"
                            mb={1}
                            color={headingColor}
                          >
                            Name
                          </Text>
                          <Input
                            required
                            value={formData.name}
                            onChange={(event) =>
                              setFormData({
                                ...formData,
                                name: event.target.value,
                              })
                            }
                            placeholder="Your name"
                            borderRadius="lg"
                            borderColor={borderColor}
                            _focus={{
                              borderColor: accentColor,
                              boxShadow: `0 0 0 1px ${accentColor}`,
                            }}
                          />
                        </Box>
                        <Box>
                          <Text
                            fontSize="sm"
                            mb={1}
                            color={headingColor}
                          >
                            Email
                          </Text>
                          <Input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(event) =>
                              setFormData({
                                ...formData,
                                email: event.target.value,
                              })
                            }
                            placeholder="you@example.com"
                            borderRadius="lg"
                            borderColor={borderColor}
                            _focus={{
                              borderColor: accentColor,
                              boxShadow: `0 0 0 1px ${accentColor}`,
                            }}
                          />
                        </Box>
                        <Box>
                          <Text
                            fontSize="sm"
                            mb={1}
                            color={headingColor}
                          >
                            Phone
                          </Text>
                          <Input
                            required
                            type="tel"
                            inputMode="tel"
                            value={formData.phone}
                            onChange={(event) =>
                              setFormData({
                                ...formData,
                                phone: event.target.value,
                              })
                            }
                            placeholder="Phone number"
                            borderRadius="lg"
                            borderColor={borderColor}
                            _focus={{
                              borderColor: accentColor,
                              boxShadow: `0 0 0 1px ${accentColor}`,
                            }}
                          />
                        </Box>
                        <Textarea
                          value={buildCartSummary()}
                          readOnly
                          minH="140px"
                          placeholder="Cart summary will appear here"
                          borderRadius="lg"
                          borderColor={borderColor}
                        />
                        <Button
                          bg={mintAccent}
                          color="white"
                          _hover={{
                            opacity: 0.9,
                            transform: "translateY(-1px)",
                          }}
                          borderRadius="xl"
                          transition="all 0.25s ease"
                          type="submit"
                          isDisabled={cart.length === 0}
                        >
                          Submit enquiry on WhatsApp
                        </Button>
                      </Stack>
                    </MotionBox>
                  )}
                </Box>
              </Stack>
            )}
          </Box>
        </MotionBox>
      </Flex>
    </Box>
  );
}
