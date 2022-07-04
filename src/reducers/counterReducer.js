// ini hanyalah initial value, jadi tidak apa dibuat const
export const counterInitialValue = 1;

export const counterReducer = (counter, action) => {
  // asumsi: action memiliki tipeAksi sebagai kondisi
  // tipeAksi memiliki string sebagai berikut:
  // "increment" untuk menambahkan counter (+1)
  // "decrement" untuk mengurangi counter (-1)
  // "incrementSpec" untuk menambahkan counter sejumlah "amount" (+ amount)
  // "decrementSpec" untuk mengurangi counter sejumlah "amount" (- amount)
  // "reset" untuk membuat counter jadi 0

  if (action.tipeAksi === "increment") {
    return counter + 1;
  } else if (action.tipeAksi === "decrement") {
    return counter - 1;
  } else if (action.tipeAksi === "incrementSpec") {
    return counter + action.amount;
  } else if (action.tipeAksi === "decrementSpec") {
    return counter - action.amount;
  } else if (action.tipeAksi === "reset") {
    return 0;
  }
};
