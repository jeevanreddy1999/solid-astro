import createCounter from "@stores/counter";

export default function Count() {
  const { count } = createCounter();

  return <div class="w-4 text-center">{count()}</div>;
}
