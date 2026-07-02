import {
  Accordion,
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";
import { FaHammer, FaLeaf, FaTruck } from "react-icons/fa6";
import { useColorModeValue } from "./components/ui/color-mode";
import "./index.css";

export function App() {
  const pageBg = useColorModeValue("brown.50", "#1B120E");
  const panelBg = useColorModeValue(
    "rgba(255, 248, 240, 0.9)",
    "rgba(43, 28, 20, 0.88)",
  );
  const panelText = useColorModeValue("brown.950", "#FFF7ED");
  const bodyText = useColorModeValue("brown.700", "brown.200");
  const softPanelBg = useColorModeValue(
    "rgba(255, 250, 244, 0.75)",
    "rgba(54, 35, 25, 0.9)",
  );
  const overlay = useColorModeValue(
    "linear-gradient(90deg, rgba(255,244,230,0.68) 0%, rgba(255,244,230,0.28) 55%, rgba(255,244,230,0.08) 100%)",
    "linear-gradient(90deg, rgba(31,20,14,0.78) 0%, rgba(31,20,14,0.5) 55%, rgba(31,20,14,0.28) 100%)",
  );
  const buttonBg = useColorModeValue("brown.700", "#F7E4D0");
  const buttonText = useColorModeValue("#FFFDF8", "#2B1A12");
  const buttonHoverBg = useColorModeValue("brown.800", "#EBC9AD");

  const trustStats = [
    { value: "250+", label: "Pieces curated" },
    { value: "4.9/5", label: "Average review score" },
    { value: "48h", label: "Fast enquiry response" },
    { value: "1,200+", label: "Rooms styled" },
  ];

  const serviceHighlights = [
    {
      icon: FaLeaf,
      title: "Natural materials",
      text: "Warm woods, textured fabrics, and soft finishes that age well.",
    },
    {
      icon: FaHammer,
      title: "Craft-first details",
      text: "Simple silhouettes with thoughtful proportions and joinery.",
    },
    {
      icon: FaTruck,
      title: "Easy delivery",
      text: "A smooth order experience from enquiry to final placement.",
    },
  ];

  const processSteps = [
    {
      title: "Browse the collections",
      text: "Explore chairs, tables, storage, and bedroom pieces by section.",
    },
    {
      title: "Add what fits your room",
      text: "Create a cart that reflects your dimensions, budget, and style.",
    },
    {
      title: "Send an enquiry",
      text: "Share your details and we’ll follow up with a tailored quote.",
    },
  ];

  return (
    <Box bg={pageBg} minH="100vh">
      <Flex
        minH={{ base: "90vh", md: "115vh" }}
        direction="column"
        bgImage={`${overlay}, url('https://assets.architecturaldigest.in/photos/66b05d51630eef2f7d472bed/16:9/w_1920,c_limit/3-AD-Ashna.jpg')`}
        bgSize="cover, cover"
        bgRepeat="no-repeat"
        bgPos={{ base: "center", md: "center right" }}
        alignItems="stretch"
        justifyContent="flex-start"
        overflow="hidden"
        p={{ base: 4, md: 0 }}
      >
        <Grid
          templateColumns={{ base: "1fr", lg: "1.2fr 0.8fr" }}
          w="full"
          minH={{ base: "90vh", md: "115vh" }}
        >
          <GridItem
            display="flex"
            alignItems="stretch"
            minH={{ base: "65vh", lg: "115vh" }}
          >
            <Flex
              direction="column"
              justifyContent="center"
              w="full"
              h="full"
              bg={panelBg}
              backdropFilter={{ base: "blur(12px)", md: "none" }}
              py={{ base: 8, md: 0 }}
              px={{ base: 6, md: 16, xl: 24 }}
              boxShadow="20px 20px 50px rgba(0,0,0,0.2)"
              borderWidth={{ base: "1px", md: "0" }}
              borderColor="whiteAlpha.300"
              animation="fadeRise 0.85s ease both"
            >
              <Stack gap={6}>
                <Wrap>
                  <WrapItem>
                    <Badge colorPalette="brown" variant="subtle" px={3} py={1}>
                      Curated production-ready spaces
                    </Badge>
                  </WrapItem>
                  <WrapItem>
                    <Badge colorPalette="orange" variant="subtle" px={3} py={1}>
                      Mid-century collection
                    </Badge>
                  </WrapItem>
                </Wrap>

                <Box>
                  <Heading
                    as="h1"
                    fontFamily="'Playfair Display', serif"
                    fontSize={{ base: "4xl", md: "5xl", xl: "6xl" }}
                    fontWeight="500"
                    color={panelText}
                    lineHeight="1.05"
                    mb="6"
                    textTransform="uppercase"
                  >
                    Mid-Century <br />
                    Modern <br />
                    Collection
                  </Heading>

                  <Text
                    fontFamily="'Inter', sans-serif"
                    fontSize={{ base: "md", md: "lg", xl: "xl" }}
                    color={bodyText}
                    mb="8"
                    lineHeight="relaxed"
                    maxW="md"
                  >
                    Discover timeless designs for modern living. Elevate your
                    space with our curated selection of premium furniture and
                    tailored service.
                  </Text>

                  <Button
                    asChild
                    size="lg"
                    w={{ base: "full", md: "auto" }}
                    bg={buttonBg}
                    color={buttonText}
                    _hover={{
                      bg: buttonHoverBg,
                      transform: "translateY(-2px)",
                    }}
                    transition="transform 0.25s ease, background-color 0.25s ease"
                    variant="solid"
                    fontFamily="'Inter', sans-serif"
                    fontWeight="500"
                    letterSpacing="wider"
                    textTransform="uppercase"
                    borderRadius="sm"
                    px="8"
                  >
                    <RouterLink to="/product">
                      Explore the Collection
                    </RouterLink>
                  </Button>
                </Box>

                <SimpleGrid columns={{ base: 2, md: 4 }} gap={4} pt={4}>
                  {trustStats.map((stat) => (
                    <Box
                      key={stat.label}
                      borderWidth="1px"
                      borderColor="brown.200"
                      p={4}
                      bg={softPanelBg}
                    >
                      <Heading
                        as="h3"
                        size="lg"
                        color={panelText}
                        lineHeight="1"
                      >
                        {stat.value}
                      </Heading>
                      <Text color={bodyText} fontSize="sm" mt={1}>
                        {stat.label}
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </Stack>
            </Flex>
          </GridItem>

          <GridItem display={{ base: "none", lg: "block" }} minH="115vh">
            <Flex h="full" direction="column" justify="space-between" p={8}>
              <Box
                bg={softPanelBg}
                borderWidth="1px"
                borderColor="brown.200"
                p={6}
              >
                <Text
                  fontSize="sm"
                  textTransform="uppercase"
                  letterSpacing="0.14em"
                  color={bodyText}
                  mb={4}
                >
                  Interior palette
                </Text>
                <SimpleGrid columns={2} gap={3}>
                  {[
                    "Walnut",
                    "Cognac",
                    "Linen",
                    "Bone",
                    "Aged Brass",
                    "Clay",
                  ].map((color) => (
                    <Box
                      key={color}
                      borderWidth="1px"
                      borderColor="brown.200"
                      p={3}
                    >
                      <Text color={panelText} fontWeight="600">
                        {color}
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>

      <Box px={{ base: 4, md: 8, lg: 12 }} py={{ base: 10, md: 16 }}>
        <Box maxW="4xl" mb={8}>
          <Text
            fontFamily="'Inter', sans-serif"
            fontSize="sm"
            fontWeight="700"
            letterSpacing="0.18em"
            textTransform="uppercase"
            color={bodyText}
            mb={3}
          >
            About us
          </Text>
          <Heading as="h2" size="xl" color={panelText} mb={3}>
            Designed to feel warm, calm, and lived in.
          </Heading>
          <Text color={bodyText} fontSize={{ base: "md", md: "lg" }} maxW="3xl">
            Furniture Shop is a small home-ware studio focused on furniture that
            balances comfort, durability, and a quiet mid-century look. Every
            piece is selected to make your home feel more intentional without
            feeling stiff.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          {serviceHighlights.map((item) => (
            <Box
              key={item.title}
              bg={panelBg}
              borderWidth="1px"
              borderColor="brown.200"
              p={6}
              transition="transform 0.25s ease, box-shadow 0.25s ease"
              _hover={{ transform: "translateY(-6px)", boxShadow: "lg" }}
            >
              <Stack gap={3}>
                <Box color={bodyText} fontSize="2xl">
                  <item.icon />
                </Box>
                <Heading as="h3" size="md" color={panelText}>
                  {item.title}
                </Heading>
                <Text color={bodyText}>{item.text}</Text>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Box px={{ base: 4, md: 8, lg: 12 }} pb={{ base: 10, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          <Box bg={softPanelBg} borderWidth="1px" borderColor="brown.200" p={6}>
            <Text
              fontFamily="'Inter', sans-serif"
              fontSize="sm"
              fontWeight="700"
              letterSpacing="0.18em"
              textTransform="uppercase"
              color={bodyText}
              mb={3}
            >
              How it works
            </Text>
            <Stack gap={4}>
              {processSteps.map((step, index) => (
                <Box key={step.title}>
                  <Text color={bodyText} fontSize="sm" fontWeight="700" mb={1}>
                    0{index + 1}
                  </Text>
                  <Heading as="h3" size="md" color={panelText} mb={1}>
                    {step.title}
                  </Heading>
                  <Text color={bodyText}>{step.text}</Text>
                </Box>
              ))}
            </Stack>
          </Box>

          <Box bg={softPanelBg} borderWidth="1px" borderColor="brown.200" p={6}>
            <Text
              fontFamily="'Inter', sans-serif"
              fontSize="sm"
              fontWeight="700"
              letterSpacing="0.18em"
              textTransform="uppercase"
              color={bodyText}
              mb={3}
            >
              Why customers stay
            </Text>
            <Stack gap={4}>
              {trustStats.map((stat) => (
                <Box key={stat.label}>
                  <Heading as="h3" size="2xl" color={panelText} lineHeight="1">
                    {stat.value}
                  </Heading>
                  <Text color={bodyText}>{stat.label}</Text>
                </Box>
              ))}
            </Stack>
          </Box>
        </SimpleGrid>
      </Box>

      <Box px={{ base: 4, md: 8, lg: 12 }} pb={{ base: 12, md: 18 }}>
        <Accordion.Root collapsible defaultValue={[] as string[]}>
          <Accordion.Item value="faq-1">
            <Accordion.ItemTrigger>
              <Heading as="h3" size="md" color={panelText}>
                What happens after I send an enquiry?
              </Heading>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>
                We confirm stock, estimate delivery, and return with a tailored
                quote for your selected furniture.
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
          <Accordion.Item value="faq-2">
            <Accordion.ItemTrigger>
              <Heading as="h3" size="md" color={panelText}>
                Can I mix collections in one order?
              </Heading>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>
                Yes. The cart is designed for mixed rooms, so you can combine
                seating, tables, storage, and bedroom pieces.
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>

        <Box
          bg={panelBg}
          borderWidth="1px"
          borderColor="brown.200"
          p={{ base: 6, md: 8 }}
          mt={8}
          transition="transform 0.25s ease, box-shadow 0.25s ease"
          _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
        >
          <Text
            fontFamily="'Inter', sans-serif"
            fontSize="sm"
            fontWeight="700"
            letterSpacing="0.18em"
            textTransform="uppercase"
            color={bodyText}
            mb={3}
          >
            Customer note
          </Text>
          <Heading as="h3" size="lg" color={panelText} mb={3} maxW="3xl">
            "The catalogue feels curated, the enquiry flow is simple, and the
            pieces fit right into a modern home."
          </Heading>
          <Text color={bodyText}>- Maya R., Interior project lead</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
