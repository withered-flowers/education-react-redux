// Kita akan import untuk pembuatan slicenya
import { createSlice } from "@reduxjs/toolkit";

// di sini kita akan set initial state
// karena data kita sebelumnya ada 2 (user dan counter)
// maka kita akan menggunakan Object
const initialStateForCounter = { user: "Whoever", counter: 10000 };

// di sinilah kita akan membuat slice-nya
const counterRTKSlice = createSlice({
  // pertama tama kita akan berikan nama untuk slicenya terlebih dahulu
  // ini akan digunakan untuk penamaan dalam internal redux toolkit
  // hati hati dalam penulisan namanya
  name: "counterRTK",
  // di sini kita akan menuliskan apakah initial state yang ada di dalam slice ini
  initialState: initialStateForCounter,
  // selanjutnya kita akan menuliskan fungsi reducernya
  // ada reducer apa sajakah di sini?
  reducers: {
    // Masih ingat aksi kita sebelumnya ada apa saja?
    // increment, decrement, reset, incrementSpec, dan decrementSpec
    // kita akan membuatnya di sini !

    // untuk setiap fungsi reducer yang ada di dalam reducers ini
    // bisa menerima minimal 1 parameter, maksimal 2 parameter
    // parameter 1 adalah "state" yang berubah
    // parameter 2 adalah "action" (optional) yang bisa menerima data tambahan (payload)-nya

    // untuk increment ini kita hanya butuh "state" aja
    increment(state) {
      // ingat, kalau di dalam reducer,
      // state itu sifatnya sudah "immutable"
      // jadi setiap kali kita menggunakan reducer
      // maka harus return data baru

      // TAPI itu kalau kita menggunakan reducer !

      // di dalam redux-toolkit, di balik layarnya, semua state sudah
      // dibungkus dengan sebuah package yang bernama "immer"

      // sehingga kita bisa menuliskan state SEOLAH-OLAH seperti mutable !
      state.counter += 1;
    },
    // mari kita buat untuk decrement di sini
    decrement(state) {
      // sama dengan di atas
      state.counter -= 1;
    },
    // mari kita buat untuk reset di sini
    reset(state) {
      // Ingat, di sini walaupun immutable tapi karena menggunakan "immer"
      // seolah olah jadi mutable !
      state.counter = 0;
    },
    // mari kita buat untuk incrementSpec di sini
    incrementSpec(state, action) {
      // nah ini ada sedikit perbedaan dengan redux
      // kalau pada redux, action memiliki payloadnya itu bebas penamaannya apa saja
      // (pada sebelumnya kita menggunakan namanya adalah "amount")
      // Pada redux toolkit, action memiliki payloadnya dengan nama "payload" saja
      // (Bila payload ada banyak, bentuknya boleh object)
      state.counter += action.payload;
    },
    // mari kita buat untuk decrementSpec di sini
    decrementSpec(state, action) {
      // sama dengan di atas
      state.counter -= action.payload;
    },
  },
});

// --- ACTION ---
// Actionnya ini terbuat secara otomatis
// dan dapat digunakan di tempat lain
export const { increment, decrement, reset, incrementSpec, decrementSpec } =
  counterRTKSlice.actions;

// --- SELECTOR ---
// Selectornya dapat dibuat di sini
// agar lebih terlihat rapih
// dan kode menjadi lebih re-usable

// Perhatikan di sini kita menggunakan nama "counterRTK" yah,
// ini didefinisikan dari src/app/store.js
export const selectUser = (state) => state.counterRTK.user;
export const selectCounter = (state) => state.counterRTK.counter;

// --- REDUCER ---
// terakhir, kita akan export default si reducernya
export default counterRTKSlice.reducer;
