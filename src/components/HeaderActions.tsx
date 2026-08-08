"use client";

import { HStack, Button, Box } from "@chakra-ui/react";
import { IoMdCart } from "react-icons/io";
import Link from "next/link";
import { ColorModeButton } from "@/components/ui/color-mode";
import { useColorModeValue } from "@/components/ui/color-mode";
import { useCart } from "./cart-context";

export default function HeaderActions() {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const textColor = useColorModeValue("#1A1D2E", "#F0F1F5");
  const borderColor = useColorModeValue(
    "rgba(108, 92, 231, 0.12)",
    "rgba(167, 139, 250, 0.15)",
  );
  const btnBg = useColorModeValue(
    "rgba(108, 92, 231, 0.05)",
    "rgba(167, 139, 250, 0.08)",
  );
  const btnHoverBg = useColorModeValue(
    "rgba(108, 92, 231, 0.15)",
    "rgba(167, 139, 250, 0.2)",
  );
  const badgeBg = useColorModeValue("#6C5CE7", "#A78BFA");
  const badgeBorderColor = useColorModeValue("white", "#0A0E1A");

  return (
    <HStack gap={{ base: 2, md: 4 }}>
      <Link href="/cart">
        <Button
          bg={btnBg}
          color={textColor}
          _hover={{ bg: btnHoverBg, transform: "translateY(-2px)" }}
          _active={{ bg: btnHoverBg, transform: "translateY(0)" }}
          borderWidth="1px"
          borderColor={borderColor}
          borderRadius="xl"
          px={{ base: 3, md: 5 }}
          py={{ base: 4, md: 5 }}
          transition="all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          position="relative"
        >
          <Box
            as="span"
            display={{ base: "none", md: "inline" }}
            mr="2"
            fontSize="sm"
            fontWeight="700"
            textTransform="uppercase"
            letterSpacing="0.05em"
          >
            Cart
          </Box>
          <IoMdCart size="22px" />
          
          {/* Cart Badge */}
          {cartItemCount > 0 && (
            <Box
              position="absolute"
              top="-8px"
              right="-8px"
              bg={badgeBg}
              color="white"
              fontSize="xs"
              fontWeight="bold"
              minW="22px"
              h="22px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="full"
              boxShadow="0 2px 10px rgba(108, 92, 231, 0.4)"
              border="2px solid"
              borderColor={badgeBorderColor}
            >
              {cartItemCount}
            </Box>
          )}
        </Button>
      </Link>

      <ColorModeButton
        variant="ghost"
        bg="transparent"
        color={textColor}
        _hover={{ bg: btnHoverBg, transform: "rotate(15deg)" }}
        _active={{ bg: btnHoverBg }}
        borderRadius="xl"
        w="44px"
        h="44px"
        transition="all 0.3s ease"
      />
    </HStack>
  );
}
