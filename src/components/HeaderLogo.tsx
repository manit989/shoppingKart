"use client";

import { Box, Image } from "@chakra-ui/react";
import Link from "next/link";

export default function HeaderLogo() {
  return (
    <Link href="/">
      <Image
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
