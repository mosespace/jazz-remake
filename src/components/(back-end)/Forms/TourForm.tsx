"use client";
import toast from "react-hot-toast";
import FormHeader from "./FormHeader";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Category, Tour } from "@prisma/client";
import { generateSlug } from "@/lib/generateSlug";
import { createTour, updateTour } from "@/actions/tours";
import TextInput from "@/components/FormInputs/TextInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import { SelectInput } from "@/components/FormInputs/SelectInput";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import MultipleImageInput from "@/components/FormInputs/MultipleImageInput";

export default function TourForm({
  categories,
  tour,
}: {
  tour?: Tour;
  categories: Category[];
}) {
  const id = tour?.id;
  const initialImageUrls = tour?.imageUrls || [];
  const initialCategoryId = tour?.categoryId || "";
  const [loading, setLoading] = useState(false);
  const [imageUrls, setImageUrls] = useState(initialImageUrls);
  const [categoryId, setCategoryId] = useState(initialCategoryId);
  const categoryOptions = categories.map((category) => {
    return {
      label: category.title,
      value: category.id,
    };
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Tour>({
    defaultValues: tour,
  });

  const router = useRouter();
  async function onSubmit(data: Tour) {
    // console.log(data);
    data.imageUrl = imageUrls[0];
    data.imageUrls = imageUrls;
    data.pricePerAdult = Number(data?.pricePerAdult);
    data.pricePerChild = Number(data?.pricePerChild);
    data.categoryId = categoryId;
    data.stepCount = 1;
    data.slug = generateSlug(data.title);
    setLoading(true);
    try {
      if (tour?.id) {
        const id = tour?.id;
        await updateTour(id, data);
        setLoading(false);
        reset();
        router.push(`/dashboard/tours/${id}`);
      } else {
        const res = await createTour(data);
        const id = res?.data?.id;
        console.log(res?.data);
        setLoading(false);
        reset();
        router.push(`/dashboard/tours/${id}`);
      }
      toast.success(`${tour?.id ? "Updated Tour" : "Created Tour"}`);
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
            title='Create Tour'
            subtitle='Fill in the Information'
            redirectLink='tours'
          />
          <CardContent className='grid grid-cols-2 gap-6'>
            <TextInput
              label='Tour Title'
              name='title'
              placeholder='Enter your Tour Title'
              register={register}
              errors={errors}
            />
            <TextInput
              label='Pickup Station'
              name='pickupStation'
              placeholder='Enter Pickup Station'
              register={register}
              errors={errors}
            />
            <SelectInput
              title='Select the Tour Category'
              optionsArray={categoryOptions}
              register={register}
              name='categoryId'
              selected={categoryId}
              setSelected={setCategoryId}
              className='w-full'
            />
            <div className='flex mt-3 gap-2 flex-col md:flex-row'>
              <TextInput
                label='Tour price per Adult '
                name='pricePerAdult'
                type='number'
                placeholder='Enter your price per adult'
                register={register}
                errors={errors}
              />
              <TextInput
                label='Tour price per  Child '
                name='pricePerChild'
                type='number'
                placeholder='Enter your price per Child'
                register={register}
                errors={errors}
              />
            </div>
            <TextAreaInput
              label='Describe your Tour in details '
              name='description'
              placeholder='Enter your tour description here'
              register={register}
              errors={errors}
            />
            <MultipleImageInput
              label='Add Tour Images'
              imageUrls={imageUrls}
              setImageUrls={setImageUrls}
              endpoint='tourImageUploader'
            />
          </CardContent>
          <CardFooter className='justify-between space-x-2'>
            <Button type='button' onClick={() => router.back()} variant='ghost'>
              Cancel
            </Button>
            <SubmitButton
              isLoading={loading}
              loadingButtonTitle={
                id ? "Updating Please wait..." : "Creating Please wait..."
              }
              buttonTitle={id ? "Update Tour" : "Create Tour"}
            />
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
