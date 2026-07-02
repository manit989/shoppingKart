import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type CartProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  sectionId: string;
};

export type CartItem = {
  product: CartProduct;
  quantity: number;
};

type CartContextValue = {
  cart: CartItem[];
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addToCart: (product: CartProduct) => void;
  updateQuantity: (productId: number, delta: number) => void;
  removeFromCart: (productId: number) => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: CartProduct) => {
    setCart(previous => {
      const existing = previous.find(item => item.product.id === product.id);

      if (existing) {
        return previous.map(item =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...previous, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: number, delta: number) => {
    setCart(previous =>
      previous
        .map(item =>
          item.product.id === productId ? { ...item, quantity: item.quantity + delta } : item,
        )
        .filter(item => item.quantity > 0),
    );
  };

  const removeFromCart = (productId: number) => {
    setCart(previous => previous.filter(item => item.product.id !== productId));
  };

  const value = useMemo(
    () => ({
      cart,
      isCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      toggleCart: () => setIsCartOpen(previous => !previous),
      addToCart,
      updateQuantity,
      removeFromCart,
    }),
    [cart, isCartOpen],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }

  return context;
}
