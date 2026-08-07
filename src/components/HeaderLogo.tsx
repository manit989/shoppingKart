import { Box } from "@chakra-ui/react";
import { Link } from "react-router";

export default function HeaderLogo() {
  return (
    <Link to="/">
      <Box
        as="img"
        src="/assets/logo.jpg"
        alt="Avima Seating Logo"
        h={{ base: "40px", md: "48px" }}
        w="auto"
        transition="transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
        _hover={{ transform: "scale(1.08)" }}
      />
    </Link>
  );
}
