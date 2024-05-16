import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { getCurrentUser } from "@/providers/auth-provider";
import LoginForm from "@/components/(front-end)/login-form";

export const metadata: Metadata = {
  title: "Login",
  description:
    "Discover the enchanting destinations of Kenya with Jazz Africa Adventures. From the iconic savannahs of the Maasai Mara to the pristine shores of Diani Beach, Kenya beckons with a tapestry of natural wonders and cultural treasures waiting to be explored. Dive into the heart of bustling cities like Nairobi and Mombasa, where modernity meets tradition in a vibrant fusion of sights, sounds, and flavors. Venture off the beaten path to hidden gems like the Great Rift Valley and Mount Kenya, where awe-inspiring landscapes and diverse wildlife await. Whether you're seeking thrilling safaris, relaxing beach getaways, or immersive cultural experiences, our curated selection of destinations offers something for every traveler. Let Jazz Africa Adventures be your guide to the breathtaking beauty and boundless adventures of Kenya's most captivating destinations.",
};

export default async function Login() {
  const user = await getCurrentUser();
  if (user) {
    redirect("/dashboard");
  }

  return (
    <section className='relative overflow-hidden bg-gray-100 dark:bg-background'>
      <div className='flex flex-wrap'>
        <div className='flex w-full flex-col md:w-1/2'>
          <div className='lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0'>
            <p className='text-left text-3xl font-bold'>Welcome back, ✋</p>
            <p className='mt-2 text-left text-gray-500'>
              Welcome back, please enter your details.
            </p>

            <LoginForm />

            <div className='py-12 text-center'>
              <p className='whitespace-nowrap text-gray-600'>
                Don't have an account?
                <Link
                  href='#signup'
                  className='underline-offset-4 font-semibold dark:text-foreground text-gray-900 underline'
                >
                  &nbsp;Sign up for free.
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className='pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2'>
          <Image
            width={1080}
            height={722}
            alt='Jazz african adventures kampala Uganda'
            className='-z-1 absolute top-0 h-full w-full object-cover opacity-90'
            src='/cranes.webp'
          />
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-80'></div>
          <div className='absolute bottom-0 z-10 px-8 text-white opacity-100'>
            <p className='mb-8 text-2xl leading-relaxed font-semibold'>
              We work 10x faster than our competitors and stay consistent. While
              they're bogged won with technical debt, we're releasing new
              features.
            </p>
            <p className='mb-4 text-3xl font-semibold'>Jazz Africa</p>
            <p className=''>Founder, Jazz</p>
            <p className='mb-7 text-sm opacity-70'>Tourism Agency</p>
          </div>
        </div>
      </div>
    </section>
  );
}
