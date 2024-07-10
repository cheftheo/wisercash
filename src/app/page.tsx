import React from 'react';
import { UpperCard, TransactionCard } from '../components/cards';

import { mockUserData, mockTransactions } from './config';

export default function Index() {
  return (
    <main className="w-screen h-screen bg-zinc-900 overflow-hidden">
      <div className="mt-12 flex flex-col justify-center text-center">
        <section className="flex flex-row items-center justify-center h-full gap-4 m-4 align-top">
          <UpperCard
            title="Total balance"
            description={`${mockUserData.balance} ${mockUserData.currency}`}
          />
          <UpperCard
            title={`Welcome back, ${mockUserData.name}`}
            description="Wisercash is welcoming you! How is your day?"
          />
          <UpperCard
            title="Moneyflow (last 30 days)"
            description="+414151 USD"
          />
        </section>

        <section className="flex flex-col items-right justify-right h-full gap-4 m-4">
          {/* <h1 className="text-3xl font-bold text-amber-50">Recent transactions</h1> */}

          {Object.keys(mockTransactions).map((key) => {
            return (
              <TransactionCard
                title={key}
                description={`${
                  mockTransactions[key as keyof typeof mockTransactions][0]
                } ${mockTransactions[key as keyof typeof mockTransactions][1]}`}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}
