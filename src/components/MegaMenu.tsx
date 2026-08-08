"use client";

import { Button, Menu, Box, VStack, Text } from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";
import { catalogSections } from "../data/catalog";
import { useColorModeValue } from "../components/ui/color-mode";

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const btnBg = useColorModeValue(
    "rgba(108, 92, 231, 0.1)",
    "rgba(167, 139, 250, 0.12)",
  );
  const btnHoverBg = useColorModeValue(
    "rgba(108, 92, 231, 0.18)",
    "rgba(167, 139, 250, 0.22)",
  );
  const textColor = useColorModeValue("#1A1D2E", "#F0F1F5");
  const borderColor = useColorModeValue(
    "rgba(108, 92, 231, 0.12)",
    "rgba(167, 139, 250, 0.15)",
  );
  const menuBg = useColorModeValue(
    "rgba(255, 255, 255, 0.95)",
    "rgba(15, 20, 40, 0.95)",
  );
  const itemHoverBg = useColorModeValue(
    "rgba(108, 92, 231, 0.08)",
    "rgba(167, 139, 250, 0.12)",
  );
  const itemColor = useColorModeValue("#3A3D4E", "#D1D5DB");

  return (
    <Box
      position="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Button
        bg={btnBg}
        color={textColor}
        _hover={{ bg: btnHoverBg, transform: "translateY(-1px)" }}
        _active={{ bg: btnHoverBg }}
        borderWidth="1px"
        borderColor={borderColor}
        borderRadius="full"
        transition="all 0.25s ease"
        onClick={() => setIsOpen(!isOpen)}
      >
        Products <FaAngleDown style={{ marginLeft: "4px" }} />
      </Button>

      {isOpen && (
        <Box
          position="absolute"
          top="100%"
          left="0"
          mt="4px"
          bg={menuBg}
          borderWidth="1px"
          borderColor={borderColor}
          borderRadius="xl"
          boxShadow="0 10px 40px rgba(0,0,0,0.12)"
          backdropFilter="blur(16px)"
          py={2}
          minW="220px"
          zIndex={1000}
        >
          <VStack align="stretch" gap={0}>
            {catalogSections.map((section) => (
              <Link
                key={section.id}
                href={`/product#${section.id}`}
                style={{ textDecoration: "none" }}
                onClick={() => setIsOpen(false)}
              >
                <Box
                  px={4}
                  py={2.5}
                  color={itemColor}
                  fontSize="sm"
                  fontWeight="500"
                  transition="all 0.15s ease"
                  _hover={{
                    bg: itemHoverBg,
                    color: textColor,
                    pl: "20px",
                  }}
                >
                  {section.title}
                </Box>
              </Link>
            ))}
          </VStack>
        </Box>
      )}
    </Box>
  );
}
