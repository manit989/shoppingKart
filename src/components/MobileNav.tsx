"use client";

import { Box, Flex, VStack, HStack, Icon, Text } from "@chakra-ui/react";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useColorModeValue } from "./ui/color-mode";
import { useState } from "react";
import { catalogSections } from "../data/catalog";
import { motion, AnimatePresence } from "motion/react";

const MotionBox = motion.create(Box);

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [productsExpanded, setProductsExpanded] = useState(false);
  const pathname = usePathname();

  const panelBg = useColorModeValue(
    "rgba(250, 251, 255, 0.98)",
    "rgba(10, 14, 26, 0.98)"
  );
  const overlayBg = "rgba(0, 0, 0, 0.5)";
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

  return (
    <Box display={{ base: "block", md: "none" }}>
      {/* Hamburger Button */}
      <Box
        as="button"
        onClick={() => setIsOpen(!isOpen)}
        p={2}
        borderRadius="lg"
        color={textColor}
        transition="all 0.2s ease"
        _hover={{ bg: hoverBg }}
        aria-label="Toggle menu"
      >
        <Icon as={isOpen ? FiX : FiMenu} boxSize={6} />
      </Box>

      {/* Overlay + Side Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <MotionBox
              position="fixed"
              top="0"
              left="0"
              right="0"
              bottom="0"
              bg={overlayBg}
              zIndex={1000}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
            />

            {/* Side Panel */}
            <MotionBox
              position="fixed"
              top="0"
              right="0"
              bottom="0"
              w="280px"
              maxW="80vw"
              bg={panelBg}
              backdropFilter="blur(20px)"
              zIndex={1001}
              boxShadow="-10px 0 40px rgba(0, 0, 0, 0.15)"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              overflowY="auto"
            >
              {/* Panel Header */}
              <Flex
                align="center"
                justify="space-between"
                px={5}
                py={4}
                borderBottomWidth="1px"
                borderColor={borderColor}
              >
                <Text
                  fontSize="sm"
                  fontWeight="700"
                  letterSpacing="0.12em"
                  textTransform="uppercase"
                  color={activeColor}
                >
                  Menu
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
                {navLinks.slice(0, 2).map((link) => {
                  const isActive = pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      <Box
                        px={5}
                        py={3.5}
                        fontSize="sm"
                        fontWeight="600"
                        letterSpacing="0.04em"
                        color={isActive ? activeColor : textColor}
                        bg={isActive ? hoverBg : "transparent"}
                        borderLeftWidth={isActive ? "3px" : "3px"}
                        borderLeftColor={isActive ? activeColor : "transparent"}
                        transition="all 0.2s ease"
                        _hover={{ bg: hoverBg, color: activeColor }}
                      >
                        {link.name}
                      </Box>
                    </Link>
                  );
                })}

                {/* Products Accordion */}
                <Box>
                  <Box
                    as="button"
                    w="100%"
                    px={5}
                    py={3.5}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    fontSize="sm"
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
                  <AnimatePresence>
                    {productsExpanded && (
                      <MotionBox
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        overflow="hidden"
                        bg={subItemBg}
                      >
                        <Link
                          href="/product"
                          style={{ textDecoration: "none" }}
                          onClick={closeMenu}
                        >
                          <Box
                            px={8}
                            py={2.5}
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
                              px={8}
                              py={2.5}
                              fontSize="sm"
                              fontWeight="500"
                              color={mutedColor}
                              _hover={{ bg: hoverBg, color: textColor, pl: "36px" }}
                              transition="all 0.15s ease"
                            >
                              {section.title}
                            </Box>
                          </Link>
                        ))}
                      </MotionBox>
                    )}
                  </AnimatePresence>
                </Box>

                {/* Remaining Links */}
                {navLinks.slice(2).map((link) => {
                  const isActive = pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      style={{ textDecoration: "none" }}
                      onClick={closeMenu}
                    >
                      <Box
                        px={5}
                        py={3.5}
                        fontSize="sm"
                        fontWeight="600"
                        letterSpacing="0.04em"
                        color={isActive ? activeColor : textColor}
                        bg={isActive ? hoverBg : "transparent"}
                        borderLeftWidth={isActive ? "3px" : "3px"}
                        borderLeftColor={isActive ? activeColor : "transparent"}
                        transition="all 0.2s ease"
                        _hover={{ bg: hoverBg, color: activeColor }}
                      >
                        {link.name}
                      </Box>
                    </Link>
                  );
                })}
              </VStack>
            </MotionBox>
          </>
        )}
      </AnimatePresence>
    </Box>
  );
}
