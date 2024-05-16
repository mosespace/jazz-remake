import Favorites from "@/components/favorites";
import { getAttractions } from "@/actions/attractions";

import { Metadata } from "next";
import RecentlyViewed from "@/components/(front-end)/recently-viewed";
import FAQ from "@/components/(front-end)/faq";
import AttractionLinks from "@/components/(front-end)/attraction-links";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description:
    "At Jazz Africa Adventures, we understand that plans can change unexpectedly. Our cancellation policy is designed to provide flexibility and peace of mind to our valued customers. Whether it's due to unforeseen circumstances or a change of heart, you can rest assured knowing that we've got you covered. We offer a range of cancellation options to suit your needs, ensuring a hassle-free experience from start to finish. Explore Kenya's wonders with confidence, knowing that your journey with Jazz Africa Adventures is backed by our comprehensive cancellation policy.",
};

export default async function page() {
  const attractions: any = (await getAttractions()) ?? [];

  const cancellationPolicy = [
    {
      id: "1",
      question: "Cancellation Policy",
      answer:
        "Our cancellation policy is designed to be fair to both our guests and our business. Please review the following terms:",
    },
    {
      id: "1",
      question: "Cancellation 30 days or more before the tour:",
      answer:
        "If you cancel your tour 30 days or more before the scheduled departure date, you will receive a full refund of the tour cost, minus any non-refundable fees (such as permit fees or reservation fees).",
    },
    {
      id: "2",
      question: "Cancellation between 15 and 29 days before the tour:",
      answer:
        "If you cancel your tour between 15 and 29 days before the scheduled departure date, you will receive a 50% refund of the tour cost, minus any non-refundable fees.",
    },
    {
      id: "3",
      question: "Cancellation 14 days or less before the tour:",
      answer:
        "If you cancel your tour 14 days or less before the scheduled departure date, no refund will be provided.",
    },
    {
      id: "4",
      question: "No-shows or early departure:",
      answer:
        "If you fail to show up for the tour or depart early for any reason, no refund will be provided.",
    },
  ];

  return (
    <section className='min-h-screen flex flex-col bg-background dark:bg-background max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8'>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-5xl font-black  py-2'>Cancellation Policy</h1>
        <p className='text-lg mb-4'>
          If you cancel 91 days or more before the start date of your trip, you
          will get a refund of the amount you paid for the trip less fee of 50
          US$. If you cancel between 46 and 90 days before the start of your
          trip, you will get a refund less US$100. If you cancel in less than 30
          days, you will get a refund less all money already paid on activities
          you booked. All fees are applicable on per person basis.
        </p>

        {/* Favorites */}
        <Favorites />

        {/* Recently Viewed */}
        <RecentlyViewed />

        {/* Frequently Asked Questions */}
        <FAQ data={cancellationPolicy} />

        {/* Attraction Lists */}
        <AttractionLinks data={attractions} />
      </div>
    </section>
  );
}
