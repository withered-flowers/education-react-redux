// Dengan menggunakan redux toolkit kita akan import configureStore
// configureStore ini adalah createStore pada redux ditambahkan dengan middleware Thunk
// (Thunk akan dipelajari pada pembahasan selanjutnya)
import { configureStore } from "@reduxjs/toolkit";

// import seluruh reducer yang akan kita gunakan di sini
import { initialValue, rootReducer } from "../reducers/rootReducer";

// di sini kita akan membuat store-nya
export const store = configureStore({
  // Di sini karena kita hanya ingin menggunakan satu reducer saja, maka kita
  // lemparkan rootReducer saja, apabila ingin banyak, bisa menggunakan object
  // dan secara otomatis akan digabungkan !
  reducer: rootReducer,
  // Anggap ini ini adalah initial state dari seluruh reducer yang ada
  preloadedState: initialValue,
});
