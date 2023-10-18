import Count from "./Count";
import Button from "./ui/Button";
import createCounter from "@stores/counter";

import { Plus, Minus } from "lucide-solid";

export default function Counter() {
  const { increment, decrement } = createCounter();

  return (
    <div class="flex items-center gap-4">
      <Button variant="destructive" onClick={decrement}>
        <Minus />
      </Button>
      <Count />
      <Button onClick={increment}>
        <Plus />
      </Button>
    </div>
  );
}
