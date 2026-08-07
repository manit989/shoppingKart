import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { useColorModeValue } from "./ui/color-mode";

const MotionBox = motion.create(Box);
const MotionFlex = motion.create(Flex);
const MotionText = motion.create(Text);

/* ── Custom SVG: Boy sitting on office chair ─── */
function BoySittingOnChair({ color }: { color: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 260"
      width="160"
      height="200"
      fill="none"
    >
      {/* Head */}
      <circle cx="100" cy="42" r="22" fill={color} opacity="0.9" />

      {/* Hair (short) */}
      <path
        d="M78 38 C78 22, 122 22, 122 38"
        fill={color}
        opacity="0.7"
      />

      {/* Neck */}
      <rect x="94" y="62" width="12" height="14" rx="4" fill={color} opacity="0.85" />

      {/* Body / torso - seated posture, slightly reclined */}
      <path
        d="M74 76 L126 76 L122 140 L78 140 Z"
        fill={color}
        opacity="0.85"
        rx="6"
      />

      {/* Left arm resting on armrest */}
      <path
        d="M74 86 L54 100 L50 124 L58 126 L62 106 L74 96"
        fill={color}
        opacity="0.75"
        strokeLinejoin="round"
      />

      {/* Right arm resting on armrest */}
      <path
        d="M126 86 L146 100 L150 124 L142 126 L138 106 L126 96"
        fill={color}
        opacity="0.75"
        strokeLinejoin="round"
      />

      {/* Left leg - bent at knee (sitting) */}
      <path
        d="M82 138 L72 178 L68 210 L78 212 L84 180 L90 142"
        fill={color}
        opacity="0.8"
      />

      {/* Right leg - bent at knee (sitting) */}
      <path
        d="M118 138 L128 178 L132 210 L122 212 L116 180 L110 142"
        fill={color}
        opacity="0.8"
      />

      {/* Left shoe */}
      <ellipse cx="72" cy="214" rx="12" ry="6" fill={color} opacity="0.9" />

      {/* Right shoe */}
      <ellipse cx="128" cy="214" rx="12" ry="6" fill={color} opacity="0.9" />

      {/* ── Office Chair ──────── */}

      {/* Chair back */}
      <path
        d="M56 60 C56 45, 144 45, 144 60 L144 130 C144 135, 56 135, 56 130 Z"
        fill={color}
        opacity="0.15"
        stroke={color}
        strokeWidth="2"
        strokeOpacity="0.3"
      />

      {/* Chair seat */}
      <rect
        x="50" y="130" width="100" height="14" rx="7"
        fill={color}
        opacity="0.25"
        stroke={color}
        strokeWidth="1.5"
        strokeOpacity="0.3"
      />

      {/* Left armrest */}
      <rect
        x="46" y="100" width="8" height="34" rx="4"
        fill={color}
        opacity="0.2"
        stroke={color}
        strokeWidth="1"
        strokeOpacity="0.3"
      />

      {/* Right armrest */}
      <rect
        x="146" y="100" width="8" height="34" rx="4"
        fill={color}
        opacity="0.2"
        stroke={color}
        strokeWidth="1"
        strokeOpacity="0.3"
      />

      {/* Chair stem */}
      <rect
        x="96" y="144" width="8" height="30" rx="3"
        fill={color}
        opacity="0.25"
      />

      {/* Chair base - star shape */}
      <line x1="100" y1="174" x2="56" y2="190" stroke={color} strokeWidth="4" strokeLinecap="round" opacity="0.3" />
      <line x1="100" y1="174" x2="144" y2="190" stroke={color} strokeWidth="4" strokeLinecap="round" opacity="0.3" />
      <line x1="100" y1="174" x2="100" y2="194" stroke={color} strokeWidth="4" strokeLinecap="round" opacity="0.3" />
      <line x1="100" y1="174" x2="70" y2="186" stroke={color} strokeWidth="4" strokeLinecap="round" opacity="0.3" />
      <line x1="100" y1="174" x2="130" y2="186" stroke={color} strokeWidth="4" strokeLinecap="round" opacity="0.3" />

      {/* Chair wheels */}
      <circle cx="56" cy="192" r="5" fill={color} opacity="0.3" />
      <circle cx="144" cy="192" r="5" fill={color} opacity="0.3" />
      <circle cx="100" cy="196" r="5" fill={color} opacity="0.3" />
      <circle cx="70" cy="188" r="5" fill={color} opacity="0.3" />
      <circle cx="130" cy="188" r="5" fill={color} opacity="0.3" />
    </svg>
  );
}

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);
  const [showBrand, setShowBrand] = useState(false);

  const bg = useColorModeValue("#FAFBFF", "#0A0E1A");
  const accentColor = useColorModeValue("#6C5CE7", "#A78BFA");
  const textColor = useColorModeValue("#1A1D2E", "#F0F1F5");
  const subtleColor = useColorModeValue("#5A5E72", "#9CA3AF");

  useEffect(() => {
    // Show brand text after the boy animation plays
    const brandTimer = setTimeout(() => {
      setShowBrand(true);
    }, 800);

    // Hide the entire loader
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);

    return () => {
      clearTimeout(brandTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionFlex
          position="fixed"
          top="0"
          left="0"
          w="100vw"
          h="100vh"
          bg={bg}
          zIndex="9999"
          justify="center"
          align="center"
          flexDirection="column"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <VStack gap={4}>
            {/* Boy sitting on chair - gentle floating animation */}
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 0.5 },
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <BoySittingOnChair color={accentColor} />
            </MotionBox>

            {/* AVIMA brand pop-up */}
            <AnimatePresence>
              {showBrand && (
                <MotionBox
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  textAlign="center"
                >
                  <MotionText
                    fontFamily="'Playfair Display', serif"
                    fontSize={{ base: "3xl", md: "4xl" }}
                    fontWeight="700"
                    color={textColor}
                    letterSpacing="0.15em"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                  >
                    AVIMA
                  </MotionText>

                  <MotionText
                    fontFamily="'Inter', sans-serif"
                    fontSize={{ base: "sm", md: "md" }}
                    fontWeight="500"
                    color={subtleColor}
                    letterSpacing="0.3em"
                    textTransform="uppercase"
                    mt={1}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.4 }}
                  >
                    Seating
                  </MotionText>

                  {/* Animated underline */}
                  <MotionBox
                    h="2px"
                    bg={accentColor}
                    borderRadius="full"
                    mt={3}
                    mx="auto"
                    initial={{ width: 0 }}
                    animate={{ width: "80px" }}
                    transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                  />
                </MotionBox>
              )}
            </AnimatePresence>

            {/* Loading dots */}
            <Flex gap={2} justify="center" mt={2}>
              {[0, 1, 2].map((i) => (
                <MotionBox
                  key={i}
                  w="8px"
                  h="8px"
                  bg={accentColor}
                  borderRadius="full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              ))}
            </Flex>
          </VStack>
        </MotionFlex>
      )}
    </AnimatePresence>
  );
}
