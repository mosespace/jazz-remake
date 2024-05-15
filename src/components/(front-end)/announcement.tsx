import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Announcement() {
  return (
    <Link
      href='/docs/changelog'
      className='inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium'
    >
      🎉 <Separator className='mx-2 h-4' orientation='vertical' />{" "}
      <span className='sm:hidden'>Unforgettable Journeys</span>
      <span className='hidden sm:inline'>Embark on Unforgettable Journeys</span>
      <ArrowRightIcon className='ml-1 h-4 w-4' />
    </Link>
  );
}
