//#1 Thư viện dùng sẵn
import { createStore } from "https://cdn.skypack.dev/redux";

//#2 Tự build thư viện Redux
// function createStore(reducer) {
//   let state = reducer(undefined, []);
//   const subscribers = []
//   return {
//     getState() {
//       return state;
//     },
//     dispatch(action) {
//       state = reducer(state, action);
//       subscribers.forEach(subscriber => subscriber())
//     },
//     subscribe(subscriber) {
//       subscribers.push(subscriber)
//     },
//   };
// }

//Apply to app
const initialState = 0;
//reducer
function bankReducer(state = initialState, action) {
  switch (action.type) {
    case "DEPOSIT":
      return state + action.payload;
    case "WITHDRAW":
      return state - action.payload;
    default:
      return state;
  }
}

//store
const store = createStore(bankReducer);

//actions: đóng vai trò tạo ra object truyền dữ liệu đi bằng dispatch
function actionDeposit(payload) {
  return {
    type: "DEPOSIT",
    payload,
  };
}
function actionWithdraw(payload) {
  return {
    type: "WITHDRAW",
    payload,
  };
}

// Events DOM
const deposit = document.querySelector(".deposit");
const withdraw = document.querySelector(".withdraw");

//Event handler
deposit.onclick = () => {
  store.dispatch(actionDeposit(10));
};
withdraw.onclick = () => {
  store.dispatch(actionWithdraw(10));
};

//subscribe
store.subscribe(() => {
  render();
});

//-------------------------------------------------------------------------------------------------------
console.log(store);
// dispatch: bắn đi 1 action, getState: trả lại state hiện tại, subscribe: thông báo lại 1 callback => render components

function render() {
  const output = document.querySelector(".output");
  output.innerHTML = store.getState();
}
render();
