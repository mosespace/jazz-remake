"use client";
import toast from "react-hot-toast";
import FormHeader from "./FormHeader";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { generateSlug } from "@/lib/generateSlug";
import TextInput from "@/components/FormInputs/TextInput";
import ImageInput from "@/components/FormInputs/ImageInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import { SelectOption } from "@/components/FormInputs/ShadSelectInput";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { createDestination, updateDestination } from "@/actions/destinations";
import MultiSelectInput from "@/components/FormInputs/MultiSelectInput";

type Option = {
  value: string;
  label: string;
};

export default function DestinationForm({ initialData, tours }: any) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(initialData?.imageUrl || "");

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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>({
    defaultValues: initialData,
  });

  const router = useRouter();

  async function onSubmit(data: any) {
    data.imageUrl = imageUrl;
    data.slug = generateSlug(data.title);
    const tourIds: string[] = selectedOption?.map((tour: any) => tour.value);
    data.tourIds = tourIds;
    setLoading(true);
    try {
      if (initialData) {
        await updateDestination(initialData?.id, data);
        setLoading(false);
        reset();
        toast.success("Updated Destination Successfully");
        router.push("/dashboard/destinations");
      } else {
        await createDestination(data);
        setLoading(false);
        reset();
        toast.success("Destination Created");
        router.push("/dashboard/destinations");
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
            title='Create Destination'
            subtitle='Fill in the Information'
            redirectLink='destinations'
          />
          <CardContent className='grid gap-6 grid-cols-2'>
            <TextInput
              label='Destination Title'
              name='title'
              placeholder='Enter your Destination Title'
              register={register}
              errors={errors}
              className='col-span-full sm:col-span-1'
            />
            <MultiSelectInput
              selected={selectedOption}
              setSelected={setSelectedOption}
              title='Select Tours'
              options={options}
            />
            <ImageInput
              label='Add Destination Image'
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
