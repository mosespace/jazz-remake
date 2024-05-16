"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";
import { Alert } from "flowbite-react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { HiInformationCircle } from "react-icons/hi";

export default function LoginForm() {
  const router = useRouter();
  const [showNotification, setShowNotification] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  async function onSubmit(data: any) {
    // console.log(data);
    try {
      setLoading(true);
      // console.log("Attempting to sign in with credentials:", data);
      const loginData = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      // console.log("SignIn response:", loginData);
      if (loginData?.error) {
        setLoading(false);
        toast.error("Sign-in error: Check your credentials");
        setShowNotification(true);
      } else {
        // Sign-in was successful
        setShowNotification(false);
        toast.success("Login Successful");
        reset();
        router.push("/dashboard");
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("Its seems something is wrong with your Network");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-2 '>
      {showNotification && (
        <Alert color='failure' icon={HiInformationCircle}>
          <span className='font-medium'>Sign-in error!</span> Please Check your
          credentials
        </Alert>
      )}
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
          placeholder='johndoe@gmail.com'
        />
        {errors.email && (
          <small className='text-red-600 text-sm '>
            This field is required
          </small>
        )}
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
      <div className='flex gap-4 items-center'>
        <Button className='w-full flex items-center gap-2' disabled={loading}>
          {loading && (
            <Loader className='inline w-4 h-4 mr-3 text-white animate-spin' />
          )}
          Login
        </Button>
      </div>
    </form>
  );
}
