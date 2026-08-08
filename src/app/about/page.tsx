import type { Metadata } from "next";
import About from "../../About";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about AVIMA Seating's legacy since 1985. We combine traditional craftsmanship with modern technology to design furniture around people.",
};

export default function Page() {
  return <About />;
}
