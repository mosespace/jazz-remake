import React from "react";

export default function BoldHeading({ heading }: { heading: string }) {
  return (
    <h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight py-5 border-b'>
      {heading}
    </h1>
  );
}
