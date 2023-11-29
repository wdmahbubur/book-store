"use client";

import Button from "@components/Button";
import { PasswordInputComponent } from "@components/PasswordInputComponents";
import { TextInputComponent } from "@components/TextInputComponent";
import Link from "next/link";
const page = () => {
  return (
    <div className="flex items-center justify-center h-full sm:h-96">
      <div className="flex flex-col gap-2 py-8 sm:py-10 px-16 bg-gray-25 w-96 sm:w-8/12 md:w-6/12 lg:w-4/12 mt-10 sm:mt-20">
        <h1 className="text-4xl font-bold text-center">Login</h1>
        <TextInputComponent
          label="Email"
          id="email"
          name="email"
          placeholder="Enter you email here"
        />

        <PasswordInputComponent
          label="Password"
          id="password"
          name="password"
          placeholder="Enter you password here"
        />
        <Button
          customClass="w-full text-white bg-primary-500 border border-transparent hover:bg-primary-600 active:bg-primary-600 focus:ring-primary-50 disabled:bg-primary-100 disabled:hover:bg-primary-100"
          type="submit"
        >
          Sign Up
        </Button>
        <div className="flex justify-center">
          <Link href="#" className="text-gray-500 hover:text-gray-700">
            Forgot password?
          </Link>
          <span className="mx-2 text-gray-500">|</span>
          <Link href="/sign-up" className="text-gray-500 hover:text-gray-700">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;