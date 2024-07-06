import React from 'react';

const Card = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className="bg-stone-600 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold">{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Card;