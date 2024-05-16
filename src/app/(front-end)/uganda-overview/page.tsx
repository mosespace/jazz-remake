import { getAttractions } from "@/actions/attractions";
import { getTours } from "@/actions/tours";
import Favorites from "@/components/favorites";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import FAQ from "@/components/(front-end)/faq";
import TourCard from "@/components/(front-end)/tours/tour-card";
import AttractionLinks from "@/components/(front-end)/attraction-links";

export const metadata: Metadata = {
  title: "Uganda Overview",
  description:
    "Discover the unparalleled beauty and cultural richness of Uganda with Jazz Africa Adventures' comprehensive overview. Situated in the heart of East Africa, Uganda offers a mesmerizing tapestry of landscapes, from lush rainforests and towering mountains to vast savannahs and serene lakes. Our overview page provides a detailed insight into Uganda's diverse attractions, including the world-renowned Bwindi Impenetrable Forest, home to endangered mountain gorillas, and the picturesque shores of Lake Victoria, the largest lake in Africa. Delve into Uganda's fascinating history, vibrant culture, and warm hospitality as you explore bustling cities, traditional villages, and iconic landmarks. Whether you're trekking with gorillas, embarking on a safari, or simply soaking in the natural beauty, Uganda promises an unforgettable adventure. Let Jazz Africa Adventures be your guide to unlocking the wonders of Uganda.",
};

export default async function page() {
  const attractions: any = await getAttractions();
  const tours: any = (await getTours()) ?? [];

  const faq = [
    {
      id: "1",
      question: "What are the top tourist attractions in Uganda?",
      answer:
        "Uganda is blessed with diverse attractions, including the magnificent Murchison Falls, the awe-inspiring Bwindi Impenetrable Forest for gorilla trekking, the scenic Queen Elizabeth National Park, and the picturesque Lake Bunyonyi. These are just a few highlights of Uganda's rich natural beauty and cultural heritage.",
    },
    {
      id: "2",
      question: "What is the best time to visit Uganda?",
      answer:
        "The best time to visit Uganda is during the dry seasons, which typically occur from December to February and from June to August. During these months, the weather is generally sunny and conducive for outdoor activities such as gorilla trekking, wildlife viewing, and hiking.",
    },
    {
      id: "3",
      question: "Is Uganda safe for tourists?",
      answer:
        "Uganda is generally safe for tourists, and the country has made significant strides in improving security and infrastructure for visitors. However, it's essential to exercise caution and follow local guidelines and advice from your tour operator or accommodation provider. As with any travel destination, it's advisable to stay informed about current events and travel advisories.",
    },
    {
      id: "4",
      question: "What cultural experiences can I enjoy in Uganda?",
      answer:
        "Uganda offers a rich tapestry of cultural experiences, including traditional dance performances, visits to local communities and markets, and interactions with indigenous tribes such as the Batwa and Karamojong. You can immerse yourself in Uganda's vibrant cultural heritage through authentic encounters and hands-on activities.",
    },
  ];

  return (
    <section className='max-w-7xl min-h-screen mx-auto py-8 px-4 sm:px-6 lg:px-8'>
      {/* <!-- intro section --> */}
      <div className='relative w-full h-[420px] mb-4'>
        <div className='absolute inset-0 opacity-60'>
          <Image
            src={"/uganda.webp"}
            alt='Jazz African Tour'
            className='object-cover object-center w-full h-full'
            width={5824}
            height={3264}
            loading='lazy'
            blurDataURL={"/uganda.webp"}
            placeholder='blur'
          />
        </div>
        <div className='max-w-6xl mx-auto absolute inset-9 flex flex-col md:flex-row items-center justify-between'>
          <div className='md:w-[60%] mb-4 md:mb-0'>
            <h1 className='text-grey-700 text-5xl md:text-5xl leading-tight mb-2 font-black'>
              Discover the Enchanting Beauty of Uganda 👍
            </h1>
            <p className='font-regular font-medium text-base mb-8 mt-4'>
              Nestled in the heart of East Africa, Uganda beckons with its
              breathtaking landscapes, vibrant cultures, and rich biodiversity.
              Known as the "Pearl of Africa," this captivating nation offers an
              unforgettable tapestry of experiences for travelers seeking
              adventure, cultural immersion, and natural wonders.
            </p>
            <Link
              href='#tours'
              className='px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/80  transition duration-200'
            >
              Discover all tours
            </Link>
          </div>
        </div>
      </div>

      {/* Favorites */}
      <Favorites />
      {/* Frequently Asked Questions */}
      <FAQ data={faq} />
      {/* Recently Viewed */}
      <div className='mt-4'>
        <TourCard data={tours} />
      </div>
      {/* Attraction Lists */}
      <AttractionLinks data={attractions} />
    </section>
  );
}
