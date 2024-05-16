"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [emailErr, setEmailErr] = useState("");
  async function onSubmit(data: any) {
    try {
      data.image =
        "https://utfs.io/f/8b034fb4-1f45-425a-8c57-a7a68835311f-2558r.png";
      console.log(data);
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        setLoading(false);
        toast.success("User Created Successfully");
        reset();
        router.push(`/verify-account/${responseData.data.id}`);
        console.log(responseData.data);
      } else {
        setLoading(false);
        if (response.status === 409) {
          setEmailErr("User with this Email already exists");
          toast.error("User with this Email already exists");
        } else {
          // Handle other errors
          console.error("Server Error:", responseData.message);
          toast.error("Oops Something Went wrong");
        }
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("Something Went wrong, Please Try Again");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>
      <div>
        <label
          htmlFor='name'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Full Name
        </label>
        <input
          {...register("name", { required: true })}
          type='text'
          name='name'
          id='name'
          className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='John Doe'
        />
        {errors.name && (
          <small className='text-red-600 text-sm '>
            This field is required
          </small>
        )}
      </div>
      <div>
        <label
          htmlFor='email'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Email Address
        </label>
        <input
          {...register("email", { required: true })}
          type='email'
          name='email'
          id='email'
          className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='name@company.com'
        />
        {errors.email && (
          <small className='text-red-600 text-sm '>
            This field is required
          </small>
        )}
        <small className='text-red-600 text-sm '>{emailErr}</small>
      </div>
      <div>
        <label
          htmlFor='password'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Password
        </label>
        <input
          {...register("password", { required: true })}
          type='password'
          name='password'
          id='password'
          placeholder='••••••••'
          className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
        {errors.password && (
          <small className='text-red-600 text-sm '>
            This field is required
          </small>
        )}
      </div>
      <Button className='w-full flex items-center gap-2' disabled={loading}>
        {loading && (
          <Loader className='inline w-4 h-4 mr-3 text-white animate-spin' />
        )}
        Sign Up
      </Button>
    </form>
  );
}
