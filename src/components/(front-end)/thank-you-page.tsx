import { Check, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function ThankYou() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-6'>
      <div className='bg-green-500 text-white rounded-full p-4'>
        <Check className='h-8 w-8' />
      </div>
      <div className='text-center space-y-2'>
        <h1 className='text-3xl font-bold'>Booking Placed Successfully</h1>
        <p className='text-gray-500 dark:text-gray-400'>
          Thank you for your booking! We're processing it now and will send you
          an update when it ships.
        </p>
      </div>
      <Link
        className='inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
        href='/'
      >
        Continue Browsing
      </Link>

      <div className='mt-2 flex flex-wrap justify-center items-center gap-4'>
        <div className='flex py-6 px-[4rem] flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80'>
          <div className='flex flex-row items-center justify-center'>
            <Phone className='mr-3 w-8 h-8 fill-primary/95 text-white dark:text-background' />
          </div>

          <div className='mt-2 text-sm items-center justify-center flex flex-col gap-2 text-gray-400'>
            <span>+256-778-457-411</span>
            <span>+256-787-439-086</span>
          </div>
        </div>

        <div className='flex py-6 px-[4rem] flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80'>
          <div className='flex flex-row items-center justify-center'>
            <Mail className='mr-3 w-8 h-8 fill-primary/95 text-white dark:text-background' />
          </div>

          <div className='mt-2 text-sm items-center justify-center flex flex-col gap-2 text-gray-400'>
            <span>bookings@jazzafricaadventures.com</span>
            <span>admin@jazzafrica.com</span>
          </div>
        </div>

        <div className='flex py-6 px-[4rem] flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80'>
          <div className='flex flex-row items-center justify-center'>
            <MapPin className='mr-3 w-8 h-8 fill-primary/95 text-white dark:text-background' />
          </div>

          <div className='mt-2 text-sm items-center justify-center flex flex-col gap-2 text-gray-400'>
            <span>Uganda, Kampala (Western)</span>
            <span>Kasese Town</span>
          </div>
        </div>
      </div>
    </div>
  );
}
