import {
  Box,
  Button,
  Drawer,
  Field,
  Flex,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useCart } from "./cart-context";
import { useColorModeValue } from "./ui/color-mode";

export default function CartDrawer() {
  const { cart, isCartOpen, closeCart, updateQuantity, removeFromCart } = useCart();
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", notes: "" });

  const cardBg = useColorModeValue("#FFF9F3", "#221610");
  const borderColor = useColorModeValue("brown.200", "brown.700");
  const mutedColor = useColorModeValue("brown.700", "brown.300");
  const headingColor = useColorModeValue("brown.950", "#FFF7ED");

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Drawer.Root open={isCartOpen} onOpenChange={e => (e.open ? undefined : closeCart())} placement="end">
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content maxW="480px" bg={cardBg}>
          <Drawer.Header borderBottomWidth="1px" borderColor={borderColor}>
            <Drawer.Title>
              <Heading as="h2" size="md" color={headingColor}>
                Your cart ({totalItems})
              </Heading>
            </Drawer.Title>
            <Drawer.CloseTrigger onClick={closeCart} />
          </Drawer.Header>

          <Drawer.Body p={5}>
            {cart.length === 0 ? (
              <Stack gap={4}>
                <Text color={mutedColor}>Your cart is empty. Add a few pieces to start planning.</Text>
                <Button variant="outline" onClick={closeCart}>
                  Continue shopping
                </Button>
              </Stack>
            ) : (
              <Stack gap={4}>
                {cart.map(item => (
                  <Box key={item.product.id} borderWidth="1px" borderColor={borderColor} borderRadius="lg" p={4}>
                    <Flex justify="space-between" gap={3}>
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

                    <Flex justify="space-between" align="center" mt={4}>
                      <HStack>
                        <Button size="sm" variant="outline" onClick={() => updateQuantity(item.product.id, -1)}>
                          <FiMinus />
                        </Button>
                        <Text minW="2ch" textAlign="center">
                          {item.quantity}
                        </Text>
                        <Button size="sm" variant="outline" onClick={() => updateQuantity(item.product.id, 1)}>
                          <FiPlus />
                        </Button>
                      </HStack>
                    </Flex>
                  </Box>
                ))}

                <Box borderTopWidth="1px" borderColor={borderColor} pt={4}>
                  {!showEnquiryForm ? (
                    <Button colorPalette="brown" w="full" onClick={() => setShowEnquiryForm(true)}>
                      Send enquiry
                    </Button>
                  ) : (
                    <Stack gap={3}>
                      <Field.Root>
                        <Field.Label>Name</Field.Label>
                        <Input
                          value={formData.name}
                          onChange={event => setFormData({ ...formData, name: event.target.value })}
                          placeholder="Your name"
                        />
                      </Field.Root>
                      <Field.Root>
                        <Field.Label>Email</Field.Label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={event => setFormData({ ...formData, email: event.target.value })}
                          placeholder="you@example.com"
                        />
                      </Field.Root>
                      <Field.Root>
                        <Field.Label>Phone</Field.Label>
                        <Input
                          value={formData.phone}
                          onChange={event => setFormData({ ...formData, phone: event.target.value })}
                          placeholder="Phone number"
                        />
                      </Field.Root>
                      <Field.Root>
                        <Field.Label>Notes</Field.Label>
                        <Textarea
                          value={formData.notes}
                          onChange={event => setFormData({ ...formData, notes: event.target.value })}
                          placeholder="Tell us about your preferred finish or delivery timeline"
                        />
                      </Field.Root>
                      <Button colorPalette="brown" onClick={() => setShowEnquiryForm(false)}>
                        Submit enquiry
                      </Button>
                    </Stack>
                  )}
                </Box>
              </Stack>
            )}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
}
