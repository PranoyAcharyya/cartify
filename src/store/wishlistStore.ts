import { create } from "zustand";
import { Product } from "@/typescript/interfaces";

interface WishlistState {
  items: Product[];
  toggleWishlist: (product: Product) => void;
}

export const useWishlistStore = create<WishlistState>((set, get) => ({
  items: [],

  toggleWishlist: (product) => {
    const exists = get().items.find((i) => i.id === product.id);

    if (exists) {
      set({
        items: get().items.filter((i) => i.id !== product.id),
      });
    } else {
      set({
        items: [...get().items, product],
      });
    }
  },
}));