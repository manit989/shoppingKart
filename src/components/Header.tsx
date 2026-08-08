"use client";

import { Container, Flex } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "motion/react";
import { useColorModeValue } from "@/components/ui/color-mode";

import HeaderLogo from "./HeaderLogo";
import HeaderNavigation from "./HeaderNavigation";
import HeaderActions from "./HeaderActions";

const MotionFlex = motion.create(Flex);

export default function Header() {
  const { scrollY } = useScroll();

  // As the user scrolls down, increase the backdrop blur and background opacity
  const headerBg = useColorModeValue(
    "rgba(250, 251, 255, 0.7)",
    "rgba(10, 14, 26, 0.7)",
  );
  
  const borderColor = useColorModeValue(
    "rgba(108, 92, 231, 0.12)",
    "rgba(167, 139, 250, 0.15)",
  );

  const shadow = useTransform(
    scrollY,
    [0, 50],
    ["none", "0 10px 40px rgba(0,0,0,0.08)"]
  );

  const py = useTransform(
    scrollY,
    [0, 50],
    ["16px", "10px"]
  );

  return (
    <MotionFlex
      as="header"
      position="sticky"
      top="0"
      zIndex="999"
      bg={headerBg}
      backdropFilter="blur(16px)"
      borderBottomWidth="1px"
      borderColor={borderColor}
      style={{ boxShadow: shadow, paddingTop: py, paddingBottom: py, transition: "background-color 0.3s ease" }}
    >
      <Container maxW="7xl" px={{ base: 4, md: 8, lg: 12 }}>
        <Flex alignItems="center" justifyContent="space-between">
          
          {/* Logo Section */}
          <HeaderLogo />

          {/* Navigation Section */}
          <HeaderNavigation />

          {/* Actions Section (Cart, Theme Toggle) */}
          <HeaderActions />
          
        </Flex>
      </Container>
    </MotionFlex>
  );
}
