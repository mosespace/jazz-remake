import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter } from "lucide-react";

export default function OurTeam() {
  return (
    <section>
      <div className='px-4 py-24 mx-auto md:px-12'>
        <div className='grid gap-12 lg:grid-cols-3'>
          <div>
            <h1 className='text-3xl font-semibold tracking-tighter text-gray-900 lg:text-5xl dark:text-primary'>
              Meet Our Trusted
              <span className='block text-primary dark:text-gray-600'>
                Diverse. Skilled. Partners.
              </span>
            </h1>
            <p className='mt-4 text-base font-medium text-gray-500'>
              Explore a curated list of Our Trusted Partners, where
              collaboration and shared values drive the success of our
              collective endeavors, fostering a network built on trust and
              innovation.
            </p>
          </div>
          <ul role='list' className='grid gap-12 lg:grid-cols-2 lg:col-span-2'>
            <li>
              <div className='space-y-4'>
                <div className='aspect-[3/2] p-2 overflow-hidden border rounded-3xl'>
                  <Image
                    width={400}
                    height={400}
                    className='object-cover w-full h-full rounded-2xl'
                    src='/partners/uwa.jpeg'
                    alt='Uganda Wildlife Authority, (UWA) Jazz Africa Tours And Adventures'
                  />
                </div>
                <div className='inline-flex items-start justify-between w-full'>
                  <div className='space-y-1'>
                    <h3 className='text-base font-medium leading-6 dark:text-primary text-black'>
                      Uganda Wildlife Authority, (UWA)
                    </h3>
                    <p className='text-base text-gray-500'>
                      Managing national parks in Uganda
                    </p>
                  </div>
                  <div>
                    <ul role='list' className='flex space-x-5'>
                      <li>
                        <Link
                          href='https://www.instagram.com/ugwildlife'
                          className='text-gray-400 hover:text-gray-500'
                        >
                          <Instagram className='w-4 h-4' />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='https://twitter.com/ugwildlife'
                          className='text-gray-400 hover:text-gray-500'
                        >
                          <Twitter className='w-4 h-4' />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className='space-y-4'>
                <div className='aspect-[3/2] p-2 overflow-hidden border rounded-3xl'>
                  <Image
                    width={400}
                    height={400}
                    className='object-cover w-full h-full rounded-2xl'
                    src='/partners/utb.jpg'
                    alt='Uganda tourism board (UTB) Jazz Africa Tours And Adventures'
                  />
                </div>
                <div className='inline-flex items-start justify-between w-full'>
                  <div className='space-y-1'>
                    <h3 className='text-base font-medium leading-6 dark:text-primary text-black'>
                      Uganda tourism board (UTB)
                    </h3>
                    <p className='text-base text-gray-500'>
                      Tour Leaders In Uganda
                    </p>
                  </div>
                  <div>
                    <ul role='list' className='flex space-x-5'>
                      <li>
                        <Link
                          href='https://ug.linkedin.com/company/uganda-tourism-board'
                          className='text-gray-400 hover:text-gray-500'
                        >
                          <Instagram className='w-4 h-4' />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='https://twitter.com/TourismBoardUg?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
                          className='text-gray-400 hover:text-gray-500'
                        >
                          <Twitter className='w-4 h-4' />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
