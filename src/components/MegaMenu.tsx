import { Button, Menu, Box } from "@chakra-ui/react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router";
import { catalogSections } from "../data/catalog";

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <Menu.Root open={isOpen} positioning={{ placement: "bottom-start", gutter: 4 }}>
        <Menu.Trigger asChild>
          <Button
            bg="#4B2E22"
            color="#FFF7ED"
            _hover={{ bg: "#5B3728" }}
            _active={{ bg: "#3E261B" }}
            borderWidth="1px"
            borderColor="brown.700"
            borderRadius="full"
          >
            Products <FaAngleDown />
          </Button>
        </Menu.Trigger>

        <Menu.Positioner>
          <Menu.Content>
            {catalogSections.map(section => (
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
