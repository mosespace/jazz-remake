import { getAttractions } from "@/actions/attractions";
import AboutUs from "@/components/(front-end)/about-us";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Welcome to Jazz Africa Adventures, your gateway to unforgettable experiences in Kenya. Founded with a passion for travel and a deep love for our homeland, Jazz Africa Adventures is more than just a tour agency - we're your trusted companion on the journey of a lifetime. With years of expertise and a commitment to excellence, we specialize in crafting bespoke travel experiences that immerse you in the heart and soul of Kenya. Our team of seasoned professionals is dedicated to providing unparalleled service, personalized attention, and authentic cultural encounters that leave a lasting impression. Join us as we share our passion for adventure, culture, and discovery, and embark on a transformation journey through the captivating landscapes and vibrant communities of Kenya. At Jazz Africa Adventures, the adventure of a lifetime awaits.",
};

export default async function page() {
  const attractions: any = (await getAttractions()) ?? [];

  const faq = [
    {
      id: "1",
      question: "What types of tours do you offer?",
      answer:
        "We offer a wide range of tours including wildlife safaris, cultural tours, adventure tours, gorilla trekking, birdwatching tours, and more.",
    },
    {
      id: "2",
      question: "How do I book a tour?",
      answer:
        "You can book a tour by contacting us directly through our website, by phone, or by visiting our office in Kampala. Our friendly staff will assist you in planning and booking your desired tour.",
    },
    {
      id: "3",
      question: "Are your tours guided?",
      answer:
        "Yes, all our tours are guided by experienced and knowledgeable local guides who will enhance your experience by providing insights into the local culture, history, and wildlife.",
    },
    {
      id: "4",
      question: "What should I pack for my tour?",
      answer:
        "Depending on the type of tour you're taking, we will provide you with a packing list. Generally, we recommend packing comfortable clothing, sturdy walking shoes, sunscreen, insect repellent, a hat, and a camera to capture the amazing moments.",
    },
    {
      id: "5",
      question: "Do you offer custom tour packages?",
      answer:
        "Yes, we understand that every traveler is unique, and we are happy to create custom tour packages tailored to your preferences, interests, and budget. Simply let us know your requirements, and we'll design the perfect itinerary for you.",
    },
    {
      id: "6",
      question: "Are your tours suitable for families?",
      answer:
        "Absolutely! We offer family-friendly tours with activities suitable for all ages. Whether you're traveling with young children, teenagers, or seniors, we ensure that everyone has a memorable and enjoyable experience.",
    },
    {
      id: "7",
      question: "What safety measures do you have in place?",
      answer:
        "Your safety is our top priority. We adhere to strict safety protocols and guidelines to ensure a safe and enjoyable experience for all our guests. Our vehicles are well-maintained, and our guides are trained in first aid and emergency procedures.",
    },
    {
      id: "8",
      question: "What is your cancellation policy?",
      answer:
        "Our cancellation policy varies depending on the type of tour and the time of cancellation. We strive to be flexible and accommodating to our guests' needs, so we encourage you to contact us directly for more information regarding our cancellation policy.",
    },
  ];

  return <AboutUs faq={faq} attractions={attractions} />;
}
