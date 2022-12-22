import { proxy } from "valtio";
/* Valito state */

const store = proxy({ colors: "hello colors" });

export default store;
