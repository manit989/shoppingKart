import { HStack, Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router";
import MegaMenu from "./MegaMenu";
import { useColorModeValue } from "./ui/color-mode";

export default function HeaderNavigation() {
  const location = useLocation();
  const textColor = useColorModeValue("#5A5E72", "#9CA3AF");
  const activeColor = useColorModeValue("#6C5CE7", "#A78BFA");
  const hoverColor = useColorModeValue("#1A1D2E", "#F0F1F5");

  // Links BEFORE the Products mega-menu
  const preProductLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  // Links AFTER the Products mega-menu
  const postProductLinks = [
    { name: "Cart", path: "/cart" },
    { name: "Customers", path: "/clients" },
    { name: "Career", path: "/career" },
    { name: "Contact Us", path: "/contact" },
  ];

  const renderLink = (link: { name: string; path: string }) => {
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
  };

  return (
    <HStack gap={{ base: 4, lg: 8 }} display={{ base: "none", md: "flex" }}>
      {preProductLinks.map(renderLink)}

      {/* Mega Menu for Products */}
      <MegaMenu />

      {postProductLinks.map(renderLink)}
    </HStack>
  );
}
