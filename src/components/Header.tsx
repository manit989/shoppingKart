import { Flex, Heading, HStack, Button, Box } from "@chakra-ui/react";
import MegaMenu from "./MegaMenu";
import { IoMdCart } from "react-icons/io";
import { GiOfficeChair } from "react-icons/gi";
import { Link } from "react-router";
import { ColorModeButton } from "@/components/ui/color-mode";
import { useColorModeValue } from "@/components/ui/color-mode";

export default function Header() {
  const headerBg = useColorModeValue(
    "rgba(250, 251, 255, 0.82)",
    "rgba(10, 14, 26, 0.88)",
  );
  const borderColor = useColorModeValue(
    "rgba(108, 92, 231, 0.12)",
    "rgba(167, 139, 250, 0.15)",
  );
  const textColor = useColorModeValue("#1A1D2E", "#F0F1F5");
  const accentColor = useColorModeValue("#6C5CE7", "#A78BFA");
  const btnBg = useColorModeValue(
    "rgba(108, 92, 231, 0.1)",
    "rgba(167, 139, 250, 0.12)",
  );
  const btnHoverBg = useColorModeValue(
    "rgba(108, 92, 231, 0.18)",
    "rgba(167, 139, 250, 0.22)",
  );

  return (
    <Flex
      as="header"
      position="sticky"
      top="0"
      zIndex="999"
      bg={headerBg}
      className="glass-panel"
      py="3"
      px={{ base: 3, md: 5 }}
      borderBottomWidth="1px"
      borderColor={borderColor}
      boxShadow="0 4px 30px rgba(0,0,0,0.06)"
      alignItems="center"
      justifyContent="space-between"
      gap={{ base: 2, md: 4 }}
    >
      <Heading
        size={{ base: "lg", md: "xl" }}
        whiteSpace="nowrap"
        fontFamily="'Playfair Display', serif"
        fontStyle="italic"
        color={textColor}
        letterSpacing="0.02em"
      >
        <Link to="/">
          <HStack gap={2} align="center">
            <Box
              as="span"
              color={accentColor}
              display="inline-flex"
              transition="transform 0.3s ease"
              _hover={{ transform: "rotate(-10deg) scale(1.1)" }}
            >
              <GiOfficeChair />
            </Box>
            <Box as="span">AVIMA Seating</Box>
          </HStack>
        </Link>
      </Heading>

      <HStack gap={{ base: 2, md: 4 }}>
        <MegaMenu />
      </HStack>

      <HStack gap={{ base: 2, md: 4 }}>
        <Button
          asChild
          bg={btnBg}
          color={textColor}
          _hover={{ bg: btnHoverBg, transform: "translateY(-1px)" }}
          _active={{ bg: btnHoverBg }}
          borderWidth="1px"
          borderColor={borderColor}
          borderRadius="xl"
          px={{ base: 3, md: 4 }}
          transition="all 0.25s ease"
        >
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
          bg={btnBg}
          color={textColor}
          _hover={{ bg: btnHoverBg }}
          _active={{ bg: btnHoverBg }}
          borderWidth="1px"
          borderColor={borderColor}
          borderRadius="xl"
        />
      </HStack>
    </Flex>
  );
}
