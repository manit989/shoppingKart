"use client";

import { Box, Flex, VStack, Icon, Text } from "@chakra-ui/react";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useColorModeValue } from "./ui/color-mode";
import { useState, useEffect } from "react";
import { catalogSections } from "../data/catalog";
import { createPortal } from "react-dom";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [productsExpanded, setProductsExpanded] = useState(false);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const pathname = usePathname();

  const panelBg = useColorModeValue(
    "rgba(250, 251, 255, 0.98)",
    "rgba(10, 14, 26, 0.98)"
  );
  const textColor = useColorModeValue("#1A1D2E", "#F0F1F5");
  const mutedColor = useColorModeValue("#5A5E72", "#9CA3AF");
  const activeColor = useColorModeValue("#6C5CE7", "#A78BFA");
  const borderColor = useColorModeValue(
    "rgba(108, 92, 231, 0.12)",
    "rgba(167, 139, 250, 0.15)"
  );
  const hoverBg = useColorModeValue(
    "rgba(108, 92, 231, 0.06)",
    "rgba(167, 139, 250, 0.08)"
  );
  const subItemBg = useColorModeValue(
    "rgba(108, 92, 231, 0.03)",
    "rgba(167, 139, 250, 0.04)"
  );

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Cart", path: "/cart" },
    { name: "Customers", path: "/clients" },
    { name: "Career", path: "/career" },
    { name: "Contact Us", path: "/contact" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
    setProductsExpanded(false);
  };

  const renderLink = (link: { name: string; path: string }) => {
    const isActive = pathname === link.path;
    return (
      <Link
        key={link.name}
        href={link.path}
        style={{ textDecoration: "none" }}
        onClick={closeMenu}
      >
        <Box
          px={6}
          py={4}
          fontSize="md"
          fontWeight="600"
          letterSpacing="0.04em"
          color={isActive ? activeColor : textColor}
          bg={isActive ? hoverBg : "transparent"}
          borderLeftWidth="3px"
          borderLeftColor={isActive ? activeColor : "transparent"}
          transition="all 0.2s ease"
          _hover={{ bg: hoverBg, color: activeColor }}
        >
          {link.name}
        </Box>
      </Link>
    );
  };

  const sidePanel = isOpen && portalRoot
    ? createPortal(
        <>
          {/* Dark Overlay */}
          <Box
            position="fixed"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="rgba(0, 0, 0, 0.5)"
            zIndex={2000}
            onClick={closeMenu}
            style={{
              animation: "fadeIn 0.25s ease forwards",
            }}
          />

          {/* Side Panel */}
          <Box
            position="fixed"
            top="0"
            right="0"
            bottom="0"
            w="300px"
            maxW="85vw"
            bg={panelBg}
            zIndex={2001}
            boxShadow="-10px 0 40px rgba(0, 0, 0, 0.2)"
            overflowY="auto"
            style={{
              animation: "slideInRight 0.3s ease forwards",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {/* Panel Header */}
            <Flex
              align="center"
              justify="space-between"
              px={6}
              py={5}
              borderBottomWidth="1px"
              borderColor={borderColor}
            >
              <Text
                fontSize="sm"
                fontWeight="700"
                letterSpacing="0.14em"
                textTransform="uppercase"
                color={activeColor}
              >
                Navigation
              </Text>
              <Box
                as="button"
                onClick={closeMenu}
                p={2}
                borderRadius="lg"
                color={textColor}
                _hover={{ bg: hoverBg }}
                aria-label="Close menu"
              >
                <Icon as={FiX} boxSize={5} />
              </Box>
            </Flex>

            {/* Nav Links */}
            <VStack align="stretch" gap={0} py={2}>
              {/* Home & About */}
              {navLinks.slice(0, 2).map(renderLink)}

              {/* Products Accordion */}
              <Box>
                <Box
                  as="button"
                  w="100%"
                  px={6}
                  py={4}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  fontSize="md"
                  fontWeight="600"
                  letterSpacing="0.04em"
                  color={pathname === "/product" ? activeColor : textColor}
                  bg={pathname === "/product" ? hoverBg : "transparent"}
                  borderLeftWidth="3px"
                  borderLeftColor={pathname === "/product" ? activeColor : "transparent"}
                  transition="all 0.2s ease"
                  _hover={{ bg: hoverBg, color: activeColor }}
                  onClick={() => setProductsExpanded(!productsExpanded)}
                >
                  <Text>Products</Text>
                  <Icon
                    as={productsExpanded ? FiChevronUp : FiChevronDown}
                    boxSize={4}
                    color={mutedColor}
                  />
                </Box>

                {/* Product Sub-items */}
                {productsExpanded && (
                  <Box bg={subItemBg}>
                    <Link
                      href="/product"
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      <Box
                        px={10}
                        py={3}
                        fontSize="sm"
                        fontWeight="600"
                        color={activeColor}
                        _hover={{ bg: hoverBg }}
                        transition="all 0.15s ease"
                      >
                        All Products
                      </Box>
                    </Link>
                    {catalogSections.map((section) => (
                      <Link
                        key={section.id}
                        href={`/product#${section.id}`}
                        style={{ textDecoration: "none" }}
                        onClick={closeMenu}
                      >
                        <Box
                          px={10}
                          py={3}
                          fontSize="sm"
                          fontWeight="500"
                          color={mutedColor}
                          _hover={{ bg: hoverBg, color: textColor }}
                          transition="all 0.15s ease"
                        >
                          {section.title}
                        </Box>
                      </Link>
                    ))}
                  </Box>
                )}
              </Box>

              {/* Remaining Links */}
              {navLinks.slice(2).map(renderLink)}
            </VStack>
          </Box>
        </>,
        portalRoot
      )
    : null;

  return (
    <Box display={{ base: "block", md: "none" }}>
      {/* Hamburger Button */}
      <Box
        as="button"
        onClick={() => setIsOpen(true)}
        p={2}
        borderRadius="lg"
        color={textColor}
        transition="all 0.2s ease"
        _hover={{ bg: hoverBg }}
        aria-label="Open menu"
      >
        <Icon as={FiMenu} boxSize={6} />
      </Box>

      {sidePanel}
    </Box>
  );
}
