import React from "react";
import Card from "../components/cards"

export default function Index() {
  return (
    <main className="w-screen h-screen bg-zinc-900 overflow-hidden">
      <div className="flex flex-row items-center justify-center h-full gap-4 m-4">
        <Card title="Welcome to Wisercash" description="Wisercash is a financial services company that provides financial solutions to consumers." />
        <Card title="Our Vision" description="Our vision is to be the leading provider of financial solutions." />
        <Card title="Our Mission" description="Our mission is to provide financial solutions to consumers." />
      </div>
    </main>
  );
}
