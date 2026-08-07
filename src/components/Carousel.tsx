import { useState, useEffect } from "react";
import { Box, Flex, IconButton, Text, HStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "motion/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useColorModeValue } from "./ui/color-mode";

const images = [
  "/assets/carousel/1.jpg",
  "/assets/carousel/2.jpg",
  "/assets/carousel/3.png",
  "/assets/carousel/4.jpg",
  "/assets/carousel/5.jpg",
  "/assets/carousel/6.jpg",
  "/assets/carousel/7.png",
  "/assets/carousel/8.png",
];

const MotionBox = motion.create(Box);

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const cardBg = useColorModeValue(
    "rgba(255, 255, 255, 0.9)",
    "rgba(15, 20, 40, 0.7)"
  );
  const borderColor = useColorModeValue(
    "rgba(108, 92, 231, 0.12)",
    "rgba(167, 139, 250, 0.15)"
  );
  const accentColor = useColorModeValue("#6C5CE7", "#A78BFA");
  const textColor = useColorModeValue("#1A1D2E", "#F0F1F5");
  const mutedColor = useColorModeValue("#5A5E72", "#9CA3AF");

  // Auto play
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1 === images.length ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
  };

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <Box w="full" px={{ base: 4, md: 8, lg: 12 }} py={10}>
      <Box textAlign="center" mb={8}>
        <Text
          fontFamily="'Inter', sans-serif"
          fontSize="sm"
          fontWeight="700"
          letterSpacing="0.18em"
          textTransform="uppercase"
          color={accentColor}
          mb={2}
        >
          Gallery
        </Text>
        <Text fontSize="3xl" fontWeight="600" color={textColor}>
          Discover Our Collections
        </Text>
      </Box>

      <Box
        position="relative"
        maxW="5xl"
        mx="auto"
        h={{ base: "300px", md: "500px", lg: "600px" }}
        borderRadius="2xl"
        overflow="hidden"
        bg={cardBg}
        borderWidth="1px"
        borderColor={borderColor}
        className="glass-panel glow-card"
        boxShadow="xl"
      >
        <AnimatePresence initial={false} custom={direction}>
          <MotionBox
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial={direction === 1 ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
            position="absolute"
            top="0"
            left="0"
            w="full"
            h="full"
            bgImage={`url(${images[currentIndex]})`}
            bgSize="cover"
            bgPosition="center"
          />
        </AnimatePresence>

        {/* Navigation Buttons */}
        <Flex
          position="absolute"
          top="50%"
          left="0"
          right="0"
          justify="space-between"
          px={4}
          transform="translateY(-50%)"
          zIndex={2}
          pointerEvents="none"
        >
          <IconButton
            aria-label="Previous image"
            bg="rgba(0,0,0,0.4)"
            color="white"
            _hover={{ bg: "rgba(0,0,0,0.6)", transform: "scale(1.1)" }}
            _active={{ bg: "rgba(0,0,0,0.8)" }}
            backdropFilter="blur(8px)"
            borderRadius="full"
            w="48px"
            h="48px"
            pointerEvents="auto"
            onClick={handlePrev}
          >
            <FiChevronLeft size="24px" />
          </IconButton>

          <IconButton
            aria-label="Next image"
            bg="rgba(0,0,0,0.4)"
            color="white"
            _hover={{ bg: "rgba(0,0,0,0.6)", transform: "scale(1.1)" }}
            _active={{ bg: "rgba(0,0,0,0.8)" }}
            backdropFilter="blur(8px)"
            borderRadius="full"
            w="48px"
            h="48px"
            pointerEvents="auto"
            onClick={handleNext}
          >
            <FiChevronRight size="24px" />
          </IconButton>
        </Flex>

        {/* Dots */}
        <HStack
          position="absolute"
          bottom={6}
          left="50%"
          transform="translateX(-50%)"
          gap={3}
          zIndex={2}
        >
          {images.map((_, idx) => (
            <Box
              key={idx}
              w={currentIndex === idx ? "24px" : "8px"}
              h="8px"
              borderRadius="full"
              bg={currentIndex === idx ? "white" : "rgba(255,255,255,0.4)"}
              transition="all 0.3s ease"
              cursor="pointer"
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              boxShadow="0 2px 4px rgba(0,0,0,0.2)"
            />
          ))}
        </HStack>
      </Box>
    </Box>
  );
}
