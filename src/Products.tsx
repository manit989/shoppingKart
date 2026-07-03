import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Wrap,
  WrapItem,
  Text,
} from "@chakra-ui/react";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router";
import { useColorModeValue } from "./components/ui/color-mode";
import { useCart } from "./components/cart-context";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  sectionId: string;
};

const furnitureProducts: Product[] = [
  {
    id: 1,
    title: "Luna Lounge Chair",
    price: 18999,
    description:
      "A sculpted lounge chair with soft upholstery for relaxed evenings.",
    category: "Chair",
    sectionId: "chairs",
    image:
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Harbor Accent Chair",
    price: 12999,
    description:
      "Minimal silhouette and textured fabric for a polished reading corner.",
    category: "Chair",
    sectionId: "chairs",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 9,
    title: "Moss Reading Chair",
    price: 15999,
    description:
      "A cozy chair with deep cushions for slow mornings and late reading.",
    category: "Chair",
    sectionId: "chairs",
    image:
      "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 10,
    title: "Pine Lounge Seat",
    price: 17499,
    description:
      "A soft upholstered seat with a compact footprint for smaller spaces.",
    category: "Chair",
    sectionId: "chairs",
    image:
      "https://images.unsplash.com/photo-1573866926486-3ea788a1b0a8?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 17,
    title: "Alder Armchair",
    price: 13999,
    description:
      "An armchair with tailored stitching and a low, relaxed profile.",
    category: "Chair",
    sectionId: "chairs",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 18,
    title: "Willow Occasional Chair",
    price: 14999,
    description:
      "A versatile occasional chair for reading corners and side seating.",
    category: "Chair",
    sectionId: "chairs",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Oak Dining Table",
    price: 34999,
    description:
      "Solid oak table designed for intimate dinners and weekend hosting.",
    category: "Table",
    sectionId: "tables",
    image:
      "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Ridge Console Table",
    price: 21999,
    description: "A slim console that adds storage and style to any entryway.",
    category: "Table",
    sectionId: "tables",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 11,
    title: "Haven Coffee Table",
    price: 14999,
    description:
      "A low profile coffee table with rounded edges and warm wood grain.",
    category: "Table",
    sectionId: "tables",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 12,
    title: "Elm Work Desk",
    price: 26999,
    description:
      "A clean desk with room for focused work and everyday essentials.",
    category: "Table",
    sectionId: "tables",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 19,
    title: "Mina Side Table",
    price: 9999,
    description:
      "A compact side table that slots neatly beside sofas and beds.",
    category: "Table",
    sectionId: "tables",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 20,
    title: "Ash Center Table",
    price: 18999,
    description:
      "A grounded center table designed for lounging and conversation.",
    category: "Table",
    sectionId: "tables",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Cove Storage Cabinet",
    price: 28999,
    description:
      "Clean-lined storage with hidden compartments for modern living spaces.",
    category: "Storage",
    sectionId: "storage",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "Marlow Sideboard",
    price: 39999,
    description:
      "Warm wood finish and soft-close drawers for a refined statement piece.",
    category: "Storage",
    sectionId: "storage",
    image:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 13,
    title: "Drift Tall Cabinet",
    price: 31999,
    description:
      "Tall vertical storage for books, ceramics, and collected objects.",
    category: "Storage",
    sectionId: "storage",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 21,
    title: "Moss Bookcase",
    price: 17999,
    description:
      "Open shelving that balances display storage with a light visual footprint.",
    category: "Storage",
    sectionId: "storage",
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 22,
    title: "Cedar Low Cabinet",
    price: 25999,
    description: "A low cabinet with warm wood tones and easy-access storage.",
    category: "Storage",
    sectionId: "storage",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    title: "Velora Bed Frame",
    price: 45999,
    description: "An elevated platform bed with a plush upholstered headboard.",
    category: "Bed",
    sectionId: "beds",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    title: "Atelier Bed Set",
    price: 52999,
    description:
      "Sculptural bed set paired with tonal linens for a calming retreat.",
    category: "Bed",
    sectionId: "beds",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 15,
    title: "Sable Platform Bed",
    price: 48999,
    description:
      "A minimal platform bed that brings quiet structure to the bedroom.",
    category: "Bed",
    sectionId: "beds",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 16,
    title: "Cloud Bedside Set",
    price: 22999,
    description:
      "Matching bedside tables with soft corners and integrated drawers.",
    category: "Bed",
    sectionId: "beds",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 23,
    title: "Aurora Upholstered Bed",
    price: 56999,
    description:
      "A generous upholstered bed with a tall headboard and soft lines.",
    category: "Bed",
    sectionId: "beds",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 24,
    title: "Pine Nightstand Pair",
    price: 19999,
    description: "A matching bedside pair for a coordinated bedroom setup.",
    category: "Bed",
    sectionId: "beds",
    image:
      "https://images.unsplash.com/photo-1560185008-b033106af2fc?auto=format&fit=crop&w=900&q=80",
  },
];

const sectionConfig = [
  {
    id: "chairs",
    title: "Chairs",
    description: "Comfort-first seating for modern interiors.",
  },
  {
    id: "tables",
    title: "Tables",
    description: "Statement pieces for dining, work, and display.",
  },
  {
    id: "storage",
    title: "Storage",
    description: "Smart organisation with sculptural silhouettes.",
  },
  {
    id: "beds",
    title: "Beds",
    description: "Restful foundations with premium finishes.",
  },
];

const formatCurrency = (value: number) => `₹${value.toLocaleString("en-IN")}`;

export default function Products() {
  const { addToCart } = useCart();

  const pageBg = useColorModeValue("#FFF7F0", "#1B120E");
  const cardBg = useColorModeValue("#FFFDF9", "#241812");
  const borderColor = useColorModeValue("brown.200", "brown.700");
  const mutedColor = useColorModeValue("brown.700", "brown.300");
  const headingColor = useColorModeValue("brown.950", "#FFF7ED");
  const panelBg = useColorModeValue("#F8EBDD", "#332017");
  const categoryTags = ["Chairs", "Tables", "Storage", "Beds"];

  return (
    <Box
      minH="100vh"
      bg={pageBg}
      px={{ base: 4, md: 8, lg: 12 }}
      py={{ base: 8, md: 12 }}
    >
      <Box mb={8}>
        <Badge colorPalette="brown" mb={3}>
          Collection overview
        </Badge>
        <Heading as="h1" size="2xl" color={headingColor} mb={3}>
          Browse by room and function
        </Heading>
        <Text color={mutedColor} maxW="3xl">
          Scroll through the categories, compare pieces in a more visual format,
          and build a cart that maps to a real furnishing project.
        </Text>

        <Wrap mt={5} gap={3}>
          {categoryTags.map((tag) => (
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
        {sectionConfig.map((section) => (
          <Box key={section.id} id={section.id} scrollMarginTop="90px">
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
              {furnitureProducts
                .filter((product) => product.sectionId === section.id)
                .map((product) => (
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
                    <Box p={0}>
                      <AspectRatio ratio={4 / 3} bg={panelBg}>
                        <img
                          src={product.image}
                          alt={product.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
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
                          <Text
                            fontWeight="bold"
                            fontSize="lg"
                            color={headingColor}
                          >
                            {formatCurrency(product.price)}
                          </Text>
                          <Button
                            size="sm"
                            colorPalette="brown"
                            onClick={() => addToCart(product)}
                          >
                            <FiShoppingBag style={{ marginRight: "6px" }} />
                            Add
                          </Button>
                        </Flex>
                      </Box>
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
