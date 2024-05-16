"use client";
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import toast from "react-hot-toast";
import { Blog } from "@prisma/client";
import dynamic from "next/dynamic";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "../FormInputs/TextInput";
import { createBlog, updateBlog } from "@/actions/blogs";
import { generateSlug } from "@/lib/generateSlug";
import ImageInput from "../FormInputs/ImageInput";
import FormHeader from "./Forms/FormHeader";

const QuillEditor = dynamic(
  () => import("@/components/FormInputs/QuillEditor"),
  {
    ssr: false,
  }
);

export default function BlogForm({ blog }: { blog?: Blog }) {
  const blogId = blog?.id as string;
  const initialThumbnail = blog?.thumbnail || "";
  const initialContent = blog?.content || "";

  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(initialContent);
  const [imageUrl, setImageUrl] = useState(initialThumbnail);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Blog>({
    defaultValues: blog,
  });

  const router = useRouter();

  async function onSubmit(data: Blog) {
    setLoading(true);
    const slug = generateSlug(data.title);

    data.slug = slug;
    data.thumbnail = imageUrl as string;
    data.content = content as string;

    if (blogId) {
      try {
        const res = await updateBlog(blogId, data);
        setLoading(false);
        reset();
        toast.success("Blog Created Successfully");
        router.push(`/dashboard/blogs`);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    } else {
      try {
        const res = await createBlog(data);
        setLoading(false);
        reset();
        toast.success("Blog Created Successfully");
        router.push(`/dashboard/blogs`);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  }

  return (
    <div className='mx-auto max-w-3xl mb-8'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <FormHeader
            title='Create A Blog'
            subtitle='Fill in all the required Information'
            redirectLink='blogs'
          />
          <CardContent className='grid grid-cols-2 gap-6'>
            <TextInput
              label='Add blog title here'
              type='title'
              name='title'
              placeholder='Enter your tour description here'
              register={register}
              errors={errors}
            />

            <TextAreaInput
              label='Describe the blog description'
              name='description'
              placeholder='Enter your tour description here'
              register={register}
              errors={errors}
            />

            <ImageInput
              label='Add Blog Thumbnail Image - One Images'
              imageUrl={imageUrl as string}
              setImageUrl={setImageUrl}
              endpoint='blogThumbnail'
            />
            <QuillEditor
              label='Add Blog Content Here'
              value={content}
              onChange={setContent}
            />
          </CardContent>
          <CardFooter className='justify-between space-x-2'>
            <Button onClick={() => router.back()} variant='ghost'>
              Cancel
            </Button>
            <SubmitButton
              isLoading={loading}
              loadingButtonTitle='Saving Please wait...'
              buttonTitle={blog?.id ? "Update Blog Info" : "Create Blog"}
            />
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
