import type { Metadata } from "next";
import Career from "../../Career";

export const metadata: Metadata = {
  title: "Careers - Join Our Team",
  description: "Join the AVIMA Seating team. We are always looking for talented individuals to help us craft the future of comfortable, smart office furniture.",
};

export default function Page() {
  return <Career />;
}
