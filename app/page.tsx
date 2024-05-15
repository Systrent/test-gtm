import { TestingButton } from "./components/TestingButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 relative bg-white">
      <h1 className="text-5xl font-bold text-black">Test for Faable</h1>
      <TestingButton />
    </main>
  );
}
