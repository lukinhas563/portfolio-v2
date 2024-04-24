import Card from "../card/Card";

export default function Section() {
  return (
    <section className="flex flex-row items-center gap-10 | h-96">
      <Card
        title="API TYPESCRIPT"
        content="Lorem ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren"
        onClick={() => console.log("oi")}
      />
    </section>
  );
}
