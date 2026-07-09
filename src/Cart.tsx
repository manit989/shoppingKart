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

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const pageBg = useColorModeValue("#FFF7F0", "#1B120E");
  const cardBg = useColorModeValue("#FFFDF9", "#241812");
  const borderColor = useColorModeValue("brown.200", "brown.700");
  const mutedColor = useColorModeValue("brown.700", "brown.300");
  const headingColor = useColorModeValue("brown.950", "#FFF7ED");
  const panelBg = useColorModeValue("#F8EBDD", "#332017");

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const buildCartSummary = () =>
    cart
      .map(item => `${item.quantity} x ${item.product.title} (${item.product.category})`)
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

    const whatsappUrl = `https://wa.me/91820022074?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Box minH="100vh" bg={pageBg} px={{ base: 4, md: 8, lg: 12 }} py={{ base: 8, md: 12 }}>
      <Flex mb={4} gap={3} wrap="wrap" color={mutedColor} fontSize="sm">
        <Box as={Link} to="/">
          Home
        </Box>
        <Box as="span">/</Box>
        <Box as={Link} to="/product">
          Products
        </Box>
        <Box as="span">/</Box>
        <Box as="span" color={headingColor} fontWeight="700">
          Cart
        </Box>
      </Flex>

      <Flex direction={{ base: "column", lg: "row" }} gap={8} align="start">
        <Box flex="1" w="full" bg={cardBg} borderWidth="1px" borderColor={borderColor}>
          <Box p={6} pb={0}>
            <Badge colorPalette="brown" mb={3}>
              Cart overview
            </Badge>
            <Heading as="h1" size="2xl" color={headingColor} mb={3}>
              Your AVIMA cart
            </Heading>
            <Text color={mutedColor} fontSize={{ base: "md", md: "lg" }} maxW="2xl">
              Review the pieces you’ve selected, adjust quantities, and send an enquiry when you’re ready.
            </Text>
          </Box>

          <Box p={6}>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={4} mt={2}>
              {[
                { value: totalItems, label: "Items" },
                { value: cart.length, label: "Unique products" },
                { value: "Ready", label: "Enquiry status" },
              ].map(item => (
                <Box key={item.label} bg={panelBg} borderWidth="1px" borderColor={borderColor} p={5}>
                  <Text fontSize="sm" color={mutedColor} mb={1}>
                    {item.label}
                  </Text>
                  <Heading as="h2" size="lg" color={headingColor}>
                    {item.value}
                  </Heading>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Box>

        <Box flex="1.2" w="full" bg={cardBg} borderWidth="1px" borderColor={borderColor}>
          <Box p={{ base: 4, md: 6 }}>
          {cart.length === 0 ? (
            <Stack gap={4}>
              <Text color={mutedColor}>Your cart is empty. Add pieces from the collection first.</Text>
              <Button asChild colorPalette="brown" alignSelf="start">
                <Link to="/product">Browse products</Link>
              </Button>
            </Stack>
          ) : (
            <Stack gap={4}>
              {cart.map(item => (
                <Box key={item.product.id} borderWidth="1px" borderColor={borderColor} borderRadius="none" p={4} bg={panelBg}>
                  <Flex justify="space-between" gap={3} align="start">
                    <Box>
                      <Text fontWeight="semibold" color={headingColor}>
                        {item.product.title}
                      </Text>
                      <Text fontSize="sm" color={mutedColor}>
                        {item.product.category}
                      </Text>
                    </Box>
                    <Button size="sm" variant="ghost" onClick={() => removeFromCart(item.product.id)}>
                      <FiTrash2 />
                    </Button>
                  </Flex>

                  <Flex justify="space-between" align="center" mt={4} gap={4}>
                    <HStack>
                      <Button size="sm" variant="outline" onClick={() => updateQuantity(item.product.id, -1)}>
                        <FiMinus />
                      </Button>
                      <Text minW="2ch" textAlign="center" color={headingColor}>
                        {item.quantity}
                      </Text>
                      <Button size="sm" variant="outline" onClick={() => updateQuantity(item.product.id, 1)}>
                        <FiPlus />
                      </Button>
                    </HStack>
                  </Flex>
                </Box>
              ))}

              <Box borderTopWidth="1px" borderColor={borderColor} />

              <Box pt={4}>
                {!showEnquiryForm ? (
                  <Button colorPalette="brown" w="full" onClick={() => setShowEnquiryForm(true)}>
                    Send enquiry
                  </Button>
                ) : (
                  <Box as="form" onSubmit={handleEnquirySubmit}>
                    <Stack gap={3}>
                      <Text fontSize="sm" color={mutedColor}>
                        Share your details and we’ll open WhatsApp with your cart enquiry.
                      </Text>
                      <Box>
                        <Text fontSize="sm" mb={1} color={headingColor}>
                          Name
                        </Text>
                        <Input
                          required
                          value={formData.name}
                          onChange={event => setFormData({ ...formData, name: event.target.value })}
                          placeholder="Your name"
                        />
                      </Box>
                      <Box>
                        <Text fontSize="sm" mb={1} color={headingColor}>
                          Email
                        </Text>
                        <Input
                          required
                          type="email"
                          value={formData.email}
                          onChange={event => setFormData({ ...formData, email: event.target.value })}
                          placeholder="you@example.com"
                        />
                      </Box>
                      <Box>
                        <Text fontSize="sm" mb={1} color={headingColor}>
                          Phone
                        </Text>
                        <Input
                          required
                          type="tel"
                          inputMode="tel"
                          value={formData.phone}
                          onChange={event => setFormData({ ...formData, phone: event.target.value })}
                          placeholder="Phone number"
                        />
                      </Box>
                      <Textarea
                        value={buildCartSummary()}
                        readOnly
                        minH="140px"
                        placeholder="Cart summary will appear here"
                      />
                      <Button colorPalette="brown" type="submit" isDisabled={cart.length === 0}>
                        Submit enquiry on WhatsApp
                      </Button>
                    </Stack>
                  </Box>
                )}
              </Box>
            </Stack>
          )}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
