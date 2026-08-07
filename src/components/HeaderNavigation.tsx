import { HStack, Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router";
import MegaMenu from "./MegaMenu";
import { useColorModeValue } from "./ui/color-mode";

export default function HeaderNavigation() {
  const location = useLocation();
  const textColor = useColorModeValue("#5A5E72", "#9CA3AF");
  const activeColor = useColorModeValue("#6C5CE7", "#A78BFA");
  const hoverColor = useColorModeValue("#1A1D2E", "#F0F1F5");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Clients", path: "/clients" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <HStack gap={{ base: 4, lg: 8 }} display={{ base: "none", md: "flex" }}>
      {navLinks.map((link) => {
        const isActive = location.pathname === link.path;
        return (
          <ChakraLink
            key={link.name}
            as={RouterLink}
            to={link.path}
            fontSize="sm"
            fontWeight="600"
            color={isActive ? activeColor : textColor}
            letterSpacing="0.05em"
            textTransform="uppercase"
            position="relative"
            transition="color 0.2s ease"
            _hover={{ color: hoverColor, textDecoration: "none" }}
            _after={{
              content: '""',
              position: "absolute",
              width: isActive ? "100%" : "0%",
              height: "2px",
              bottom: "-4px",
              left: "0",
              bg: activeColor,
              transition: "width 0.3s ease",
            }}
            sx={{
              "&:hover::after": {
                width: "100%",
                bg: isActive ? activeColor : hoverColor,
              }
            }}
          >
            {link.name}
          </ChakraLink>
        );
      })}
      
      {/* Mega Menu for Products */}
      <MegaMenu />
    </HStack>
  );
}
