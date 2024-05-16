"use client";

import toast from "react-hot-toast";
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { CategoryFormProps } from "@/types/types";
import TextInput from "@/components/FormInputs/TextInput";
import { Label } from "../ui/label";
import { createBooking, updateBooking } from "@/actions/booking";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import TextAreaInput from "../FormInputs/TextAreaInput";
import ShadSelectInput, { SelectOption } from "../FormInputs/ShadSelectInput";
import FormHeader from "./Forms/FormHeader";

export default function BookingForm({ initialData, tours }: any) {
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [date, setDate] = React.useState<Date>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryFormProps>({
    defaultValues: initialData,
  });

  const options: SelectOption[] = tours?.map((tour: any) => ({
    value: tour.id,
    label: tour.title,
  }));

  const router = useRouter();
  async function onSubmit(data: any) {
    data.date = date;
    data.tourId = selectedOption;
    setLoading(true);
    try {
      if (initialData) {
        await updateBooking(initialData.id, data);
        toast.success("Booking Updated");
        router.push("/dashboard/bookings");
      } else {
        await createBooking(data);
        setLoading(false);
        reset();
        toast.success("Booking Created");
        router.push("/dashboard/bookings");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <div className='mx-auto max-w-3xl mb-8'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <FormHeader
            title='Create Booking'
            subtitle='Fill in the Information'
            redirectLink='bookings'
          />
          <CardContent className='grid gap-6'>
            <TextInput
              label='Booking Names'
              name='name'
              placeholder='Uncle Moses'
              register={register}
              errors={errors}
              className='w-full'
            />
            <TextInput
              label='Booking Email'
              name='email'
              placeholder='info@example.com'
              register={register}
              errors={errors}
              className='w-full'
            />
            <TextInput
              label='Booking Phone Number'
              name='phone'
              type='number'
              placeholder='+256-778-457-411'
              register={register}
              errors={errors}
              className='w-full'
            />

            <div className='flex flex-col md:flex-row items-center w-full gap-2'>
              <TextInput
                label='No. Of Adults'
                name='adults'
                placeholder='Enter no. of adult'
                register={register}
                errors={errors}
                className='w-full'
              />
              <TextInput
                label='No. Of Children'
                name='children'
                placeholder='Enter no. of children'
                register={register}
                errors={errors}
                className='w-full'
              />
            </div>

            <div className='w-full'>
              <Label htmlFor='date' className='dark:text-background'>
                Booking Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className='mr-2 h-4 w-4' />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0'>
                  <Calendar
                    mode='single'
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className='flex flex-col w-full gap-2'>
              <TextAreaInput
                label='Special Requirements'
                name='requirements'
                placeholder='eg; dietary needs, accessibility'
                register={register}
                errors={errors}
              />

              <ShadSelectInput
                label='Select Tour Belonging'
                className='sm:col-span-2'
                optionTitle='Select Tour'
                options={options}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            </div>
          </CardContent>
          <CardFooter className='justify-between space-x-2'>
            <Button onClick={() => router.back()} variant='ghost'>
              Cancel
            </Button>
            <SubmitButton
              isLoading={loading}
              loadingButtonTitle={
                initialData ? "Updating Booking..." : "Creating Please Wait..."
              }
              buttonTitle={initialData ? "Update Booking" : "Create Booking"}
            />
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
