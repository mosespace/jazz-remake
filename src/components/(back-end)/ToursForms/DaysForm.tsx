"use client";

import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import toast from "react-hot-toast";
import { Day, Tour } from "@prisma/client";
import FormHeader from "../Forms/FormHeader";
import dynamic from "next/dynamic";
import ArrayItemsInput from "@/components/FormInputs/ArrayInput";
import TextInput from "@/components/FormInputs/TextInput";
import { createDay, updateDay } from "@/actions/days";

const QuillEditor = dynamic(
  () => import("@/components/FormInputs/QuillEditor"),
  {
    ssr: false,
  }
);

export default function DaysForm({
  tour,
  initialData,
}: {
  tour: Tour;
  initialData: any;
}) {
  const id = tour?.id;
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState(initialData?.meals || []);
  const [accommodation, setAccommodation] = useState(
    initialData?.accommodation || []
  );
  const [description, setDescription] = useState(
    initialData?.description || ""
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Day>({
    defaultValues: initialData,
  });

  const router = useRouter();
  async function onSubmit(data: Day) {
    // console.log(data);
    data.accommodation = accommodation;
    data.description = description;
    data.meals = meals;
    data.tourId = id;
    setLoading(true);
    try {
      if (initialData) {
        const res = await updateDay(initialData.id, data);
        setLoading(false);
        reset();
        toast.success("Updated Date Successfully");
        // router.push(`/dashboard/tours/${id}`);
      } else {
        const res = await createDay(data);
        setLoading(false);
        reset();
        toast.success("Day Created");
        router.push(`/dashboard/tours/${id}`);
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
            title='Add Days Information'
            subtitle='Fill in the Information'
            redirectLink='tours'
          />
          <CardContent className='grid grid-cols-2 gap-6'>
            <TextInput
              label='What is the Day Title'
              name='title'
              placeholder='Enter your tour description here'
              register={register}
              errors={errors}
            />
            <QuillEditor
              label='Explain the Events and Activities for this Day'
              value={description}
              onChange={setDescription}
            />
            <ArrayItemsInput
              setItems={setMeals}
              items={meals}
              itemTitle=' List the Meals for this Day'
            />
            <ArrayItemsInput
              setItems={setAccommodation}
              items={accommodation}
              itemTitle=' Accommodation for this Tour'
            />
          </CardContent>
          <CardFooter className='justify-between space-x-2'>
            <Button onClick={() => router.back()} variant='ghost'>
              Cancel
            </Button>
            <SubmitButton
              isLoading={loading}
              loadingButtonTitle='Saving Please wait...'
              buttonTitle={id ? "Update Day Info" : "Create Day Info"}
            />
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
