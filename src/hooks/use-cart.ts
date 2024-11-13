import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { IProduct } from '@/types/product'

// Define a type for a cart item
export type CartItem = {
  product: IProduct
}

// Define the cart state type
type CartState = {
  items: CartItem[]
  addItem: (product: IProduct) => void
  removeItem: (productId: string) => void
  clearCart: () => void
}

// Create the Zustand store for cart management
export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      // Add an item to the cart
      addItem: (product) => {
        set((state) => {
          const isProductInCart = state.items.some(
            (item) => item.product._id === product._id
          )
          if (!isProductInCart) {
            return { items: [...state.items, { product }] }
          }
          return state // Avoids adding duplicates
        })
      },

      // Remove an item from the cart by its product ID
      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter(
            (item) => item.product._id !== productId
          ),
        }))
      },

      // Clear all items from the cart
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage', // Unique key for the cart storage
      storage: createJSONStorage(() => localStorage),
      // Optional: versioning can help with backward compatibility in the future
      version: 1,
    }
  )
)
