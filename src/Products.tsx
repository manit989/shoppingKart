import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FiShoppingBag } from "react-icons/fi";
import { useCart } from "./components/cart-context";
import { useColorModeValue } from "./components/ui/color-mode";
import { catalogProducts, catalogSections, catalogTags } from "./data/catalog";

const formatCurrency = (value: number) => `₹${value.toLocaleString("en-IN")}`;

export default function Products() {
  const { addToCart } = useCart();

  const pageBg = useColorModeValue("#FFF7F0", "#1B120E");
  const cardBg = useColorModeValue("#FFFDF9", "#241812");
  const borderColor = useColorModeValue("brown.200", "brown.700");
  const mutedColor = useColorModeValue("brown.700", "brown.300");
  const headingColor = useColorModeValue("brown.950", "#FFF7ED");
  const panelBg = useColorModeValue("#F8EBDD", "#332017");

  return (
    <Box minH="100vh" bg={pageBg} px={{ base: 4, md: 8, lg: 12 }} py={{ base: 8, md: 12 }}>
      <Box mb={8}>
        <Badge colorPalette="brown" mb={3}>
          Collection overview
        </Badge>
        <Heading as="h1" size="2xl" color={headingColor} mb={3}>
          Browse by room and function
        </Heading>
        <Text color={mutedColor} maxW="3xl">
          Scroll through the categories, compare pieces in a more visual format, and build a cart that maps to a real furnishing project.
        </Text>

        <Wrap mt={5} gap={3}>
          {catalogTags.map(tag => (
            <WrapItem key={tag}>
              <Badge colorPalette="brown" variant="subtle" px={3} py={1}>
                {tag}
              </Badge>
            </WrapItem>
          ))}
        </Wrap>
      </Box>

      <Box mb={5}>
        <Heading as="h2" size="lg" color={headingColor}>
          Shop by collection
        </Heading>
      </Box>

      <Stack gap={8}>
        {catalogSections.map(section => (
          <Box key={section.id} id={section.id} scrollMarginTop="90px">
            <Flex justify="space-between" align="end" mb={4} gap={4} wrap="wrap">
              <Box>
                <Heading as="h3" size="lg" color={headingColor}>
                  {section.title}
                </Heading>
                <Text color={mutedColor}>{section.description}</Text>
              </Box>
              <Badge colorPalette="brown" variant="solid">
                Curated set
              </Badge>
            </Flex>
            <Box borderTopWidth="1px" borderColor={borderColor} mb={4} />
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
                .filter(product => product.sectionId === section.id)
                .map(product => (
                  <Box
                    key={product.id}
                    borderWidth="1px"
                    borderColor={borderColor}
                    overflow="hidden"
                    bg={cardBg}
                    boxShadow="sm"
                    transition="transform 0.2s ease"
                    _hover={{ transform: "translateY(-4px)", boxShadow: "md" }}
                  >
                    <AspectRatio ratio={4 / 3} bg={panelBg}>
                      <img
                        src={product.image}
                        alt={product.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </AspectRatio>

                    <Box p={5}>
                      <Badge colorPalette="brown" mb={2}>
                        {product.category}
                      </Badge>
                      <Heading as="h4" size="md" mb={2} color={headingColor}>
                        {product.title}
                      </Heading>
                      <Text fontSize="sm" color={mutedColor} mb={4}>
                        {product.description}
                      </Text>
                      <Flex justify="space-between" align="center">
                        <Text fontWeight="bold" fontSize="lg" color={headingColor}>
                          {formatCurrency(product.price)}
                        </Text>
                        <Button size="sm" colorPalette="brown" onClick={() => addToCart(product)}>
                          <FiShoppingBag style={{ marginRight: "6px" }} />
                          Add
                        </Button>
                      </Flex>
                    </Box>
                  </Box>
                ))}
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
