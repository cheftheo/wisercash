import React from 'react';

export const Card = ({title, desc}: {title: string, desc: string}) => {
  return (
    <div className="bg-zinc-800 text-white p-4 rounded-lg w-max h-max">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-amber-100">{desc}</p>
    </div>
  )
};

