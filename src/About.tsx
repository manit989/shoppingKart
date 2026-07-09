import { Box } from "@chakra-ui/react";

export default function About() {
  return (
    <Box minH="100vh" bg="#1B120E" px={{ base: 0, md: 0 }} py={{ base: 0, md: 0 }}>
      <Box
        as="iframe"
        src="/avima-brochure.pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=0"
        title="AVIMA Seating Smart Office Solutions brochure"
        width="100%"
        height="calc(100vh - 88px)"
        border="0"
        display="block"
      />
    </Box>
  );
}