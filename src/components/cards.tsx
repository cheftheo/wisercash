import React from 'react';

export const UpperCard = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className="bg-neutral-800 text-amber-50 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold">{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export const TransactionCard = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className="bg-neutral-800 text-amber-50 rounded-lg shadow-sm p-6 w-1/6">
            <h2 className="text-xl font-bold">{title}</h2>
            <p>{description}</p>
        </div>
    )
}