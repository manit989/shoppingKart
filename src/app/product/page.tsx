import type { Metadata } from "next";
import Products from "../../Products";

export const metadata: Metadata = {
  title: "Our Products & Collections",
  description: "Browse AVIMA's complete catalog of ergonomic office chairs, workstations, and smart seating solutions designed for modern workspaces.",
};

export default function Page() {
  return <Products />;
}
