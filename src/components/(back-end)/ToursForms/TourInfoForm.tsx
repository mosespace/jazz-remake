"use client";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";
import { Tour } from "@prisma/client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import FormHeader from "../Forms/FormHeader";
import { updateTour } from "@/actions/tours";
import { Button } from "@/components/ui/button";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import ArrayItemsInput from "@/components/FormInputs/ArrayInput";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import MultipleImageInput from "@/components/FormInputs/MultipleImageInput";

const QuillEditor = dynamic(
  () => import("@/components/FormInputs/QuillEditor"),
  {
    ssr: false,
  }
);

export default function TourInfoForm({ tour }: { tour: Tour }) {
  const id = tour.id;
  const initialImageUrls = tour.travelerPhotos || [];
  const initialContent = tour.departureAndReturn || "";
  const initialWhatsIncluded = tour.whatsIncluded || [];
  const initialAdditionalInfo = tour.additionalInfo || [];
  const [loading, setLoading] = useState(false);
  const [imageUrls, setImageUrls] = useState(initialImageUrls);
  const [whatsIncluded, setWhatsIncluded] = useState(initialWhatsIncluded);
  const [additionalInfo, setAdditionalInfo] = useState(initialAdditionalInfo);
  const [departure, setDeparture] = useState(initialContent);
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

    data.travelerPhotos = imageUrls;
    data.departureAndReturn = departure;
    data.whatsIncluded = whatsIncluded;
    data.additionalInfo = additionalInfo;
    data.stepCount = 2;
    setLoading(true);
    try {
      const res = await updateTour(id, data);
      setLoading(false);
      reset();
      toast.success("TourInfo Added Successfully");
      router.push(`/dashboard/tours/${id}`);
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
            title='Add More Tour Information'
            subtitle='Fill in the Information'
            redirectLink='tours'
          />
          <CardContent className='grid grid-cols-2 gap-6'>
            <ArrayItemsInput
              setItems={setWhatsIncluded}
              items={whatsIncluded}
              itemTitle=' Whats Included in this Tour'
            />
            <ArrayItemsInput
              setItems={setAdditionalInfo}
              items={additionalInfo}
              itemTitle=' Tour Additional Information'
            />

            <TextAreaInput
              label='Describe your Cancellation Policy '
              name='cancellationPolicy'
              placeholder='Enter your tour description here'
              register={register}
              errors={errors}
            />
            <QuillEditor
              label='Add Departure and Return'
              value={departure}
              onChange={setDeparture}
            />
            <MultipleImageInput
              label='Add Travelers Photos - up to 4 Images'
              imageUrls={imageUrls}
              setImageUrls={setImageUrls}
              endpoint='travelerPhotos'
            />
          </CardContent>
          <CardFooter className='justify-between space-x-2'>
            <Button onClick={() => router.back()} variant='ghost'>
              Cancel
            </Button>
            <SubmitButton
              isLoading={loading}
              loadingButtonTitle='Saving Please wait...'
              buttonTitle={tour?.id ? "Update Tour Info" : "Create Tour Info"}
            />
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
