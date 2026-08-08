import type { Metadata } from "next";
import Cart from "../../Cart";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "Review your selected AVIMA seating products and send a direct enquiry to our team for a personalized quote.",
};

export default function Page() {
  return <Cart />;
}
