import React from "react";

export default function FAQ({ data }: any) {
  return (
    <div>
      <div className='flex flex-col gap-2 mb-4'>
        <h2 className='font-bold text-3xl pb-4'>Frequently Asked Questions</h2>
        <p>
          The answers provided below are based on answers previously given by
          the tour provider to customers’ questions.
        </p>
      </div>
      <div className='flex flex-col gap-3'>
        {data.map((reply: any) => {
          return (
            <div key={reply.id} className='mt-4 flex gap-3 flex-col'>
              <div className='flex font-bold gap-2'>
                <span className=''>Q.</span>&nbsp;{reply.question}
              </div>
              <div className='px-8 flex flex-col md:flex-row gap-2 dark:text-[#0A0700] bg-[#FFEAC4] py-4 rounded-md'>
                <span className='font-bold'> A:</span>
                <p className=''>{reply.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
