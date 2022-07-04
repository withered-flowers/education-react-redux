// Apakah isi dari CounterReduxReducer ini???
// Mirip dengan CounterReducer !

// ini hanyalah initial value, jadi tidak apa dibuat const
// Ceritanya sekarang data awalnya ingin kita ubah berubah object
export const initialValue = { user: "Whoever", counter: 10000 };

export const rootReducer = (state, action) => {
  // asumsi: action memiliki tipeAksi sebagai kondisi
  // tipeAksi memiliki string sebagai berikut:
  // "increment" untuk menambahkan counter (+1)
  // "decrement" untuk mengurangi counter (-1)
  // "incrementSpec" untuk menambahkan counter sejumlah "amount" (+ amount)
  // "decrementSpec" untuk mengurangi counter sejumlah "amount" (- amount)
  // "reset" untuk membuat counter jadi 0

  // Karena sekarang ini kita sudah menggunakan object, ada yang harus dimodifikasi dari kodenya
  // yang kita buat

  if (action.tipeAksi === "increment") {
    // return counter + 1;
    return { ...state, counter: state.counter + 1 };
  } else if (action.tipeAksi === "decrement") {
    // return counter - 1;
    return { ...state, counter: state.counter + 1 };
  } else if (action.tipeAksi === "incrementSpec") {
    // return counter + action.amount;
    return { ...state, counter: state.counter + action.amount };
  } else if (action.tipeAksi === "decrementSpec") {
    return { ...state, counter: state.counter - action.amount };
  } else if (action.tipeAksi === "reset") {
    return { ...state, counter: 0 };
  }
};
