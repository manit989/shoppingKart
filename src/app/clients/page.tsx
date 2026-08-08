import type { Metadata } from "next";
import Clients from "../../Clients";

export const metadata: Metadata = {
  title: "Our Clients & Partners",
  description: "Trusted by leading universities, schools, and institutions across India. See the clients who rely on AVIMA Seating for their furniture needs.",
};

export default function Page() {
  return <Clients />;
}
