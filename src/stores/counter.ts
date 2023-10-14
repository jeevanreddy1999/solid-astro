import { createSignal } from "solid-js";

const [count, setCount] = createSignal(0);

const increment = () => setCount((c) => c + 1);
const decrement = () => setCount((c) => c - 1);

const createCounter = () => ({ count, setCount, increment, decrement });

export default createCounter;
