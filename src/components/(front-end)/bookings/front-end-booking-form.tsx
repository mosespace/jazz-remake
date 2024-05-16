"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CategoryFormProps } from "@/types/types";
import TextInput from "@/components/FormInputs/TextInput";
import { CalendarIcon, Loader } from "lucide-react";
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
import { createBooking, updateBooking } from "@/actions/booking";
import toast, { ToastBar } from "react-hot-toast";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import { Label } from "@/components/ui/label";

export default function FrontEndBookingForm({ initialData, tourId }: any) {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = React.useState<Date | any>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryFormProps>({
    defaultValues: initialData,
  });

  const router = useRouter();

  async function onSubmit(data: any) {
    data.date = date;
    data.tourId = tourId;
    setLoading(true);
    try {
      if (initialData) {
        await updateBooking(initialData.id, data);
        setLoading(false);
        reset();
        toast.success("Your Booking Has Been Updated Successfully");
        router.push("/thankyou");
      } else {
        await createBooking(data);
        setLoading(false);
        reset();
        setDate(null);
        toast.success("Your Booking Has Been Created Successfully");
        router.push("/thankyou");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <div className=''>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-3'>
          <div className='flex md:flex-row flex-col gap-2'>
            <TextInput
              label='Booking Names'
              name='name'
              placeholder='John Doe'
              register={register}
              errors={errors}
            />
            <TextInput
              label='Booking Phone Number'
              name='phone'
              type='tel'
              placeholder='+256-778-457-411'
              register={register}
              errors={errors}
            />
          </div>

          <div className='flex md:flex-row flex-col gap-2'>
            <TextInput
              label='No. Of Adults'
              name='adults'
              type='number'
              placeholder='Enter no. of adult'
              register={register}
              errors={errors}
            />
            <TextInput
              label='No. Of Children'
              name='children'
              type='number'
              placeholder='Enter no. of children'
              register={register}
              errors={errors}
            />
          </div>

          <div className=''>
            <Label htmlFor='date' className='dark:text-background'>
              {" "}
              Booking Date{" "}
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground dark:bg-foreground/10"
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

          <TextInput
            label='Booking Email'
            name='email'
            placeholder='info@example.com'
            register={register}
            errors={errors}
          />

          <TextAreaInput
            label='Special Requirements'
            name='requirements'
            placeholder='eg; dietary needs, accessibility'
            register={register}
            errors={errors}
            className='dark:text-background'
          />
        </div>

        <div className='w-full mt-4'>
          <Button
            variant='default'
            className='flex gap-2 items-center w-full mt-4'
          >
            {loading && <Loader className='animate-spin w-4 h-4' />}
            Book Tour
          </Button>
        </div>
      </form>
    </div>
  );
}
