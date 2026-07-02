import { Flex, Heading, HStack, Button, Box } from "@chakra-ui/react";
import MegaMenu from "./MegaMenu";
import { IoMdCart } from "react-icons/io";
import { FaCouch } from "react-icons/fa6";
import { Link } from "react-router";
import { ColorModeButton } from "@/components/ui/color-mode";

export default function Header() {
  return (
    <Flex
      as="header"
      position="sticky"
      top="0"
      zIndex="999"
      bg="#2B1A12"
      py="4"
      px={{ base: 3, md: 5 }}
      borderWidth="1px"
      borderColor="brown.800"
      boxShadow="lg"
      alignItems="center"
      justifyContent="space-between"
      gap={{ base: 2, md: 4 }}
    >
      <Heading
        size={{ base: "lg", md: "xl" }}
        whiteSpace="nowrap"
        fontFamily="'Playfair Display', serif"
        fontStyle="italic"
        color="#FFF7ED"
        letterSpacing="0.02em"
      >
        <Link to="/">
          <HStack gap={2} align="center">
            <Box as="span" color="brown.200" display="inline-flex">
              <FaCouch />
            </Box>
            <Box as="span">Furniture Shop</Box>
          </HStack>
        </Link>
      </Heading>

      <HStack gap={{ base: 2, md: 4 }}>
        <MegaMenu />
      </HStack>

      <HStack gap={{ base: 2, md: 4 }}>
        <Button asChild bg="#4B2E22" color="#FFF7ED" _hover={{ bg: "#5B3728" }} _active={{ bg: "#3E261B" }} borderWidth="1px" borderColor="brown.700" borderRadius="md" px={{ base: 3, md: 4 }}>
          <Link to="/cart">
          <Box
            as="span"
            display={{ base: "none", md: "inline" }}
            mr="2"
            fontSize="lg"
            fontWeight="700"
          >
            Cart
          </Box>

          <IoMdCart size="20px" />
          </Link>
        </Button>

        <ColorModeButton
          variant="solid"
          bg="#F7E4D0"
          color="#2B1A12"
          _hover={{ bg: "#EBC9AD" }}
          _active={{ bg: "#D8B08C" }}
          borderWidth="1px"
          borderColor="#D6B38F"
        />
      </HStack>
    </Flex>
  );
}
