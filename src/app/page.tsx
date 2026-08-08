import type { Metadata } from "next";
import { App } from "../App";

export const metadata: Metadata = {
  title: "Smart Office Furniture Solutions",
  description: "AVIMA Seating provides smart, comfortable, and durable office furniture solutions. Explore our legacy of craftsmanship and modern ergonomic seating.",
};

export default function Page() {
  return <App />;
}
