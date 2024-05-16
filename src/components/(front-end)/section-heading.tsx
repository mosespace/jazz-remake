export function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className='scroll-m-20 border-b pb-5 text-2xl font-semibold tracking-tight first:mt-0 py-4'>
      {title}
    </h2>
  );
}
