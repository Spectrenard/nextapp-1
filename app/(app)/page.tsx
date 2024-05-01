import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Link href="/buttons">
        <Button variant="secondary">See al buttons</Button>
      </Link>
      This is a marketing page
    </div>
  );
}
