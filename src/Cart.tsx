import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router";
import { useCart } from "./components/cart-context";
import { useColorModeValue } from "./components/ui/color-mode";

const formatCurrency = (value: number) => `₹${value.toLocaleString("en-IN")}`;

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", notes: "" });

  const pageBg = useColorModeValue("#FFF7F0", "#1B120E");
  const cardBg = useColorModeValue("#FFFDF9", "#241812");
  const borderColor = useColorModeValue("brown.200", "brown.700");
  const mutedColor = useColorModeValue("brown.700", "brown.300");
  const headingColor = useColorModeValue("brown.950", "#FFF7ED");
  const panelBg = useColorModeValue("#F8EBDD", "#332017");

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <Box minH="100vh" bg={pageBg} px={{ base: 4, md: 8, lg: 12 }} py={{ base: 8, md: 12 }}>
      <Breadcrumb mb={4} color={mutedColor}>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/product">
            Products
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Cart</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Flex direction={{ base: "column", lg: "row" }} gap={8} align="start">
        <Box flex="1" w="full" bg={cardBg} borderWidth="1px" borderColor={borderColor}>
          <Box p={6} pb={0}>
            <Badge colorPalette="brown" mb={3}>
              Cart overview
            </Badge>
            <Heading as="h1" size="2xl" color={headingColor} mb={3}>
              Your furniture cart
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
                { value: formatCurrency(subtotal), label: "Subtotal" },
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
                    <Text fontWeight="bold" color={headingColor}>
                      {formatCurrency(item.product.price * item.quantity)}
                    </Text>
                  </Flex>
                </Box>
              ))}

              <Box borderTopWidth="1px" borderColor={borderColor} />

              <Box pt={4}>
                <Flex justify="space-between" align="center" mb={3}>
                  <Text fontWeight="semibold" color={headingColor}>
                    Subtotal
                  </Text>
                  <Text fontWeight="bold" color={headingColor}>
                    {formatCurrency(subtotal)}
                  </Text>
                </Flex>

                {!showEnquiryForm ? (
                  <Button colorPalette="brown" w="full" onClick={() => setShowEnquiryForm(true)}>
                    Send enquiry
                  </Button>
                ) : (
                  <Stack gap={3}>
                    <Text fontSize="sm" color={mutedColor}>
                      Share your details and we’ll follow up with availability and a quote.
                    </Text>
                    <List spacing={2} color={mutedColor} fontSize="sm">
                      <ListItem>Custom delivery timeline</ListItem>
                      <ListItem>Finishing and material guidance</ListItem>
                      <ListItem>Project-style purchase support</ListItem>
                    </List>
                    <Box>
                      <Text fontSize="sm" mb={1} color={headingColor}>
                        Name
                      </Text>
                      <Input
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
                        value={formData.phone}
                        onChange={event => setFormData({ ...formData, phone: event.target.value })}
                        placeholder="Phone number"
                      />
                    </Box>
                    <Box>
                      <Text fontSize="sm" mb={1} color={headingColor}>
                        Notes
                      </Text>
                      <Textarea
                        value={formData.notes}
                        onChange={event => setFormData({ ...formData, notes: event.target.value })}
                        placeholder="Tell us about your preferred finish or delivery timeline"
                      />
                    </Box>
                    <Button colorPalette="brown">Submit enquiry</Button>
                  </Stack>
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
