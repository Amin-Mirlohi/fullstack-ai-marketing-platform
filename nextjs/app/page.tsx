import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <div className="bg-red-500 text-white">Hello project</div>;
      <Button variant={"secondary"}>Click me</Button>
      <div className="bg-slate-900">Buy!!</div>
    </div>
  );
}
