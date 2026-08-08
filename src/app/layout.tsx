import type { Metadata } from "next";
import { Provider } from "../components/ui/provider";
import { CartProvider } from "../components/cart-context";
import Layout from "../components/Layout";
import "../index.css";

export const metadata: Metadata = {
  title: {
    template: "%s | AVIMA Seating",
    default: "Smart Office Furniture Solutions | AVIMA Seating",
  },
  description: "AVIMA Seating provides smart, comfortable, and durable office furniture solutions. Explore our legacy of craftsmanship and modern ergonomic seating.",
  keywords: "office furniture, ergonomic seating, workstations, AVIMA seating, smart office solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <CartProvider>
            <Layout>{children}</Layout>
          </CartProvider>
        </Provider>
      </body>
    </html>
  );
}
