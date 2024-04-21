import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartId: 0,
    cartItems: [],
    total: 0,
  },
  reducers: {
    updateCartId: (state, action) => {
      state.cartId = action.payload;
    },
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        // Ürün zaten sepette varsa miktarını verilen miktar kadar artır veya varsayılan olarak 1 ekle
        state.cartItems[itemIndex].quantity += action.payload.quantity || 1;
      } else {
        // Yeni ürünse, payload'dan gelen verilerle eklemek
        state.cartItems.push({
          ...action.payload,
          quantity: action.payload.quantity || 1, // Eğer miktar belirtilmemişse 1 olarak ayarla
        });
      }
    },
    updateCartTotal: (state, action) => {
      state.total += action.payload.price * (action.payload.quantity || 1); // Eğer miktar belirtilmemişse 1 olarak hesapla
    },
    removeFromCart: (state, action) => {
      const itemToRemove = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (!itemToRemove) return; // Ürün bulunamazsa çık

      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.total -= itemToRemove.price * itemToRemove.quantity; // Ürün çıkarıldıktan sonra toplam fiyatı güncelle
    },
  },
});

export const { updateCartId, addToCart, updateCartTotal, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
