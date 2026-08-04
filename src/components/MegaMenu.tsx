import { Button, Menu, Box } from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router";
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

  return (
    <Box
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Menu.Root
        open={isOpen}
        positioning={{ placement: "bottom-start", gutter: 4 }}
      >
        <Menu.Trigger asChild>
          <Button
            bg={btnBg}
            color={textColor}
            _hover={{ bg: btnHoverBg, transform: "translateY(-1px)" }}
            _active={{ bg: btnHoverBg }}
            borderWidth="1px"
            borderColor={borderColor}
            borderRadius="full"
            transition="all 0.25s ease"
          >
            Products <FaAngleDown />
          </Button>
        </Menu.Trigger>

        <Menu.Positioner>
          <Menu.Content>
            {catalogSections.map((section) => (
              <Menu.Item asChild key={section.id} value={section.id}>
                <Link to={`/product#${section.id}`}>{section.title}</Link>
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </Box>
  );
}
