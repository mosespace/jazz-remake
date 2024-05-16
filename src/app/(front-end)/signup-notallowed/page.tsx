import Link from "next/link";
import { Metadata } from "next";
import RegisterForm from "@/components/(front-end)/register-form";

export const metadata: Metadata = {
  title: "SignUp",
  description:
    "Discover the enchanting destinations of Kenya with Jazz Africa Adventures. From the iconic savannahs of the Maasai Mara to the pristine shores of Diani Beach, Kenya beckons with a tapestry of natural wonders and cultural treasures waiting to be explored. Dive into the heart of bustling cities like Nairobi and Mombasa, where modernity meets tradition in a vibrant fusion of sights, sounds, and flavors. Venture off the beaten path to hidden gems like the Great Rift Valley and Mount Kenya, where awe-inspiring landscapes and diverse wildlife await. Whether you're seeking thrilling safaris, relaxing beach getaways, or immersive cultural experiences, our curated selection of destinations offers something for every traveler. Let Jazz Africa Adventures be your guide to the breathtaking beauty and boundless adventures of Kenya's most captivating destinations.",
};

export default function Register() {
  return (
    <section className='bg-[#FFEAC4] dark:bg-background'>
      <div className='flex flex-wrap'>
        <div className='bg-background pointer-events-none relative hidden h-screen select-none bg-black dark:bg-[#FFEAC4] md:block md:w-1/2'>
          <div className='absolute bottom-0 z-10 px-8 text-white opacity-100 max-w-xl mx-auto'>
            <p className='mb-8 text-2xl font-semibold dark:text-background leading-10'>
              We work 10x faster than our competitors and stay consistent. While
              they're bogged won with technical debt, we're releasing new
              features.
            </p>
            <p className='mb-4 text-xl font-semibold dark:text-background'>
              Jazz Africa
            </p>
            <p className='dark:text-background text-sm'>Founder, Jazz</p>
            <p className='mb-7 text-xs opacity-70 dark:text-background'>
              Tourism Agency
            </p>
          </div>
        </div>

        <div className='flex w-full flex-col md:w-1/2'>
          <div className='lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0'>
            <p className='text-left text-3xl font-bold'>
              ✋ Create your account
            </p>
            <p className='mt-2 text-left text-gray-500'>
              Let's take you through all the step by step process
            </p>

            <RegisterForm />

            <div className='py-12 text-center'>
              <p className='whitespace-nowrap text-gray-600'>
                Have an account?
                <Link
                  href='/login'
                  className='underline-offset-4 font-semibold dark:text-foreground text-gray-900 underline'
                >
                  &nbsp;Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
