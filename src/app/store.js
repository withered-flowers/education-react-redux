// Dengan menggunakan redux toolkit kita akan import configureStore
// configureStore ini adalah createStore pada redux ditambahkan dengan middleware Thunk
// (Thunk akan dipelajari pada pembahasan selanjutnya)
import { configureStore } from "@reduxjs/toolkit";

// import seluruh reducer yang akan kita gunakan di sini
// import { initialValue, rootReducer } from "../reducers/rootReducer";

// import slice yang baru saja dibuat
import counterSlice from "../features/counter/sliceCounter.js";

// di sini kita akan membuat store-nya
export const store = configureStore({
  // --- CARA 1: Dengan cara redux ---
  // Di sini karena kita hanya ingin menggunakan satu reducer saja, maka kita
  // lemparkan rootReducer saja, apabila ingin banyak, bisa menggunakan object
  // dan secara otomatis akan digabungkan !
  // reducer: rootReducer,
  // Anggap ini ini adalah initial state dari seluruh reducer yang ada
  // preloadedState: initialValue,

  // --- CARA 2: Dengan cara redux-toolkit ---
  // Kita gunakan import slice yang dibuat
  reducer: {
    counterRTK: counterSlice,
  },
});
