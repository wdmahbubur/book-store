/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Link from "next/link";
import { PasswordInputComponent } from "@components/PasswordInputComponents";
import { TextInputComponent } from "@components/TextInputComponent";
import Button from "@components/Button";
import { useMutation } from "@apollo/client";
import { SIGNUP } from "@graphql/auth";
import { useStore } from "@lib/useStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const { setAlert } = useStore();
  const [signUp, { loading, error, data }] = useMutation(SIGNUP, {
    errorPolicy: "all",
    onError: (err) => {
      setAlert("error", err.message);
    },
    onCompleted: (data) => {
      setAlert("success", data.signUp.message);
      router.push("/login");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");

      signUp({
        variables: {
          name,
          email,
          password,
        },
      });
    } catch (err: any) {
      console.log(err.message);
    }
  };

  // useEffect(() => {
  //   if (error) {
  //     setAlert("error", error.message);
  //   }
  // }, [error, setAlert]);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col gap-2 py-8 sm:py-10 px-16 bg-gray-25 w-96 sm:w-8/12 md:w-6/12 lg:w-4/12 mt-10 sm:mt-16">
        <h1 className="text-4xl font-bold text-center">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <TextInputComponent
            label="Name"
            id="name"
            name="name"
            placeholder="Enter you name here"
            required={true}
          />
          <TextInputComponent
            label="Email"
            id="email"
            name="email"
            placeholder="Enter you email here"
            required={true}
          />

          <PasswordInputComponent
            label="Password"
            id="password"
            name="password"
            placeholder="Enter you password here"
            required={true}
          />
          <Button
            customClass="w-full text-white bg-primary-500 border border-transparent hover:bg-primary-600 active:bg-primary-600 focus:ring-primary-50 disabled:bg-primary-100 disabled:hover:bg-primary-100"
            type="submit"
            disabled={loading}
          >
            Sign Up
          </Button>
        </form>
        <div className="flex justify-center">
          <Link href="/login" className="text-gray-500 hover:text-gray-700">
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;