"use client";

import { Button } from "keep-react";
import Link from "next/link";
import { PasswordInputComponent } from "@components/PasswordInputComponents";
import { TextInputComponent } from "@components/TextInputComponent";

const page = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col gap-2 py-8 sm:py-10 px-16 bg-gray-25 w-96 sm:w-8/12 md:w-6/12 lg:w-4/12 mt-10 sm:mt-16">
        <h1 className="text-4xl font-bold text-center">Sign Up</h1>
        <TextInputComponent
          label="Name"
          id="name"
          name="name"
          placeholder="Enter you name here"
        />
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
        <Button size="xs" type="primary" width="full">
          Sign Up
        </Button>
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
