import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Faq, Tour } from "@prisma/client";
import FaqForm from "./FaqForm";
import FaqsListing from "./FaqsListing";

export default function FaqTabs({ tour, faqs }: { tour: Tour; faqs: Faq[] }) {
  return (
    <div className='w-full'>
      <Tabs defaultValue='faqForm' className='w-full max-w-3xl mx-auto'>
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='faqForm'>Add a New FAQ</TabsTrigger>
          <TabsTrigger value='daysList'>View All FAQs</TabsTrigger>
        </TabsList>
        <TabsContent value='faqForm' className='w-full'>
          <FaqForm tour={tour} />
        </TabsContent>
        <TabsContent value='daysList'>
          <FaqsListing tour={tour} faqs={faqs} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
