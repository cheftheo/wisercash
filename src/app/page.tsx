import React from "react";
import Card from "../components/cards"

export default function Index() {
  return (
    <main className="w-screen h-screen bg-zinc-900">
      <div className="flex flex-row items-center justify-center h-full">
        <Card title="Welcome to Wisercash" description="Wisercash is a financial services company that provides financial solutions to consumers." />
      </div>
    </main>
  );
}
