import createCounter from "@stores/counter";

export default function Count() {
  const { count } = createCounter();

  console.log("Count initiated");
  return <div class="w-4 text-center">{count()}</div>;
}
