"use client";
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import FormHeader from "./FormHeader";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { AttractionFormProps } from "@/types/types";
import ImageInput from "@/components/FormInputs/ImageInput";
import toast from "react-hot-toast";
import { generateSlug } from "@/lib/generateSlug";
import { createAttraction, updateAttraction } from "@/actions/attractions";
import TextInput from "@/components/FormInputs/TextInput";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import ArrayItemsInput from "@/components/FormInputs/ArrayInput";
import { SelectOption } from "@/components/FormInputs/ShadSelectInput";
import MultiSelectInput from "@/components/FormInputs/MultiSelectInput";
type Option = {
  value: string;
  label: string;
};
export default function AttractionsForm({ initialData, tours }: any) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(initialData?.imageUrl || "");
  const [thingToKnow, setThingsToKnow] = useState(
    initialData?.thingsToKnow || []
  );

  // Initialize selectedOption with the tour IDs from initialData
  const initialTourIds = initialData?.tourIds || [];
  const [selectedOption, setSelectedOption] = useState<Option[]>(
    initialTourIds.map((tourId: string) => {
      const tour = tours.find((tour: any) => tour.id === tourId);
      return { value: tourId, label: tour?.title || "" };
    })
  );

  // console.log(initialData?.tourIds);
  const options: SelectOption[] = tours?.map((tour: any) => ({
    value: tour.id,
    label: tour.title,
  }));

  // console.log(selected);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AttractionFormProps>({
    defaultValues: initialData,
  });

  const router = useRouter();
  async function onSubmit(data: AttractionFormProps) {
    data.imageUrl = imageUrl;
    data.thingsToKnow = thingToKnow;
    data.slug = generateSlug(data.title);
    const tourIds: string[] = selectedOption?.map((tour: any) => tour.value);
    data.tourIds = tourIds;
    setLoading(true);
    try {
      if (initialData) {
        await updateAttraction(initialData?.id, data);
        setLoading(false);
        reset();
        toast.success("Updated Attraction Successfully");
        router.push("/dashboard/attractions");
      } else {
        await createAttraction(data);
        setLoading(false);
        reset();
        toast.success("Attraction Created");
        router.push("/dashboard/attractions");
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
            title='Create Attraction'
            subtitle='Fill in the Information'
            redirectLink='attractions'
          />
          <CardContent className='grid gap-6 grid-cols-2'>
            <TextInput
              label='Attraction Title'
              name='title'
              placeholder='Enter your Attraction Title'
              register={register}
              errors={errors}
              className='col-span-full sm:col-span-1'
            />
            <TextInput
              label='Enter the Attraction Location'
              name='location'
              placeholder='Enter  Attraction Location'
              register={register}
              errors={errors}
              className='col-span-full sm:col-span-1'
            />
            <ImageInput
              label='Add Attraction Image'
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              endpoint='attractionImageUploader'
            />

            <TextAreaInput
              label='Give an Overview Description of this place'
              name='description'
              placeholder='Give the description of this place'
              register={register}
              errors={errors}
            />
            <TextAreaInput
              label='Give the History of this place '
              name='history'
              placeholder='Enter your history of this place '
              register={register}
              errors={errors}
            />
            <ArrayItemsInput
              setItems={setThingsToKnow}
              items={thingToKnow}
              itemTitle='Things to Know About this Place (Bullets)'
            />
            <MultiSelectInput
              selected={selectedOption}
              setSelected={setSelectedOption}
              title='Select Tours'
              options={options}
            />
            <TextAreaInput
              label='How to get there? '
              name='how'
              placeholder='Describe how to get there '
              register={register}
              errors={errors}
            />
            <TextAreaInput
              label='When to get there? '
              name='when'
              placeholder='Describe when to get there? '
              register={register}
              errors={errors}
            />
          </CardContent>
          <CardFooter className='justify-between space-x-2'>
            <Button type='button' onClick={() => router.back()} variant='ghost'>
              Cancel
            </Button>
            <SubmitButton
              isLoading={loading}
              loadingButtonTitle={
                initialData
                  ? "Updating Please wait..."
                  : "Creating Please wait..."
              }
              buttonTitle={initialData ? `Update` : `Create`}
            />
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
