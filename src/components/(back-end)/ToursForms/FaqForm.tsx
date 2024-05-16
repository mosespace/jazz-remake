"use client";
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import toast from "react-hot-toast";
import { Faq, Tour } from "@prisma/client";
import FormHeader from "../Forms/FormHeader";
import dynamic from "next/dynamic";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import { createFAQ, updateFaq } from "@/actions/faqs";

const QuillEditor = dynamic(
  () => import("@/components/FormInputs/QuillEditor"),
  {
    ssr: false,
  }
);

export default function FaqForm({
  tour,
  initialData,
}: {
  tour: Tour;
  initialData?: any;
}) {
  const id = tour?.id;
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Faq>({
    defaultValues: initialData,
  });

  const router = useRouter();
  async function onSubmit(data: Faq) {
    // console.log(data);
    data.tourId = id;
    setLoading(true);
    try {
      if (initialData) {
        const res = await updateFaq(initialData.id, data);
        setLoading(false);
        reset();
        toast.success("Updated Faq Successfully");
        // router.push(`/dashboard/tours/${id}`);
      } else {
        const res = await createFAQ(data);
        setLoading(false);
        reset();
        toast.success("FAQ Created");
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
              label='What is the Question '
              name='qn'
              placeholder='Enter question here'
              register={register}
              errors={errors}
            />
            <TextAreaInput
              label='What is the Answer to the Above Question '
              name='ans'
              placeholder='Enter answer here'
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
              loadingButtonTitle='Saving Please wait...'
              buttonTitle={id ? "Update FAQ Info" : "Create FAQ Info"}
            />
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
