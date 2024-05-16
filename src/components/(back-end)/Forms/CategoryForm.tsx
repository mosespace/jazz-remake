"use client";
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import FormHeader from "./FormHeader";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import { Button } from "@/components/ui/button";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { CategoryFormProps } from "@/types/types";
import ImageInput from "@/components/FormInputs/ImageInput";
import { createCategory, updateCategory } from "@/actions/categories";
import toast from "react-hot-toast";
import { generateSlug } from "@/lib/generateSlug";
import TextInput from "@/components/FormInputs/TextInput";

export default function CategoryForm({ initialData }: any) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(initialData?.imageUrl || "");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryFormProps>({
    defaultValues: initialData,
  });

  const router = useRouter();
  function redirect() {
    router.replace("/church/mens-guild/suggestions");
  }
  async function onSubmit(data: CategoryFormProps) {
    console.log(data);
    data.imageUrl = imageUrl;
    data.slug = generateSlug(data.title);
    setLoading(true);
    try {
      if (initialData) {
        await updateCategory(initialData.id, data);
        toast.success("Category Updated");
        router.push("/dashboard/categories");
      } else {
        await createCategory(data);
        setLoading(false);
        reset();
        toast.success("Category Created");
        router.push("/dashboard/categories");
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
            title='Create Category'
            subtitle='Fill in the Information'
            redirectLink='categories'
          />
          <CardContent className='grid gap-6'>
            <TextInput
              label='Category Title'
              name='title'
              placeholder='Enter your Tour Category Title eg Short Tours'
              register={register}
              errors={errors}
            />
            <TextAreaInput
              label='Describe your Category '
              name='description'
              placeholder='Enter your category here'
              register={register}
              errors={errors}
            />
            <ImageInput
              label='Add Category Image'
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              endpoint='categoryImageUploader'
            />
          </CardContent>
          <CardFooter className='justify-between space-x-2'>
            <Button onClick={() => router.back()} variant='ghost'>
              Cancel
            </Button>
            <SubmitButton
              isLoading={loading}
              loadingButtonTitle={initialData ? "Updating Category..." : "Creating Please Wait..."}
              buttonTitle={initialData ? "Update Category" : "Create Category"}
            />
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
