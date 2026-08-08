import type { Metadata } from "next";
import Contact from "../../Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with AVIMA Seating. Headquartered in Lucknow with branches across India, we are here to help you create your ideal workspace.",
};

export default function Page() {
  return <Contact />;
}
