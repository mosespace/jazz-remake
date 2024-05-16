import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DaysForm from "./DaysForm";
import { Day, Tour } from "@prisma/client";
import DaysListing from "./DaysListing";

export default function DaysTabs({ tour, days }: { tour: Tour; days: Day[] }) {
  return (
    <div className='w-full'>
      <Tabs defaultValue='daysForm' className='w-full max-w-3xl mx-auto'>
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='daysForm'>Add a New Day</TabsTrigger>
          <TabsTrigger value='daysList'>View All Days</TabsTrigger>
        </TabsList>
        <TabsContent value='daysForm' className='w-full'>
          <DaysForm tour={tour} initialData='' />
        </TabsContent>
        <TabsContent value='daysList'>
          <DaysListing tour={tour} days={days} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
