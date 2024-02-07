/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useMutation } from "@apollo/client";
import Button from "@components/Button";
import { PasswordInputComponent } from "@components/PasswordInputComponents";
import { TextInputComponent } from "@components/TextInputComponent";
import { LOGIN } from "@graphql/auth";
import { useStore } from "@lib/useStore";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const { setAlert } = useStore();
  const [login, { loading }] = useMutation(LOGIN, {
    errorPolicy: "all",
    onError: (err) => {
      setAlert("error", err.message);
    },
    onCompleted: (data) => {
      setAlert("success", data.login.message);
      localStorage.setItem("token", data.login.token);
      router.push("/dashboard");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email");
      const password = formData.get("password");

      login({
        variables: {
          email,
          password,
        },
      });
    } catch (err: any) {
      //console.log(err);
      setAlert("error", err.message);
    }
  };
  return (
    <div className="flex items-center justify-center h-full sm:h-96">
      <div className="flex flex-col gap-2 py-8 sm:py-10 px-16 bg-gray-25 w-96 sm:w-8/12 md:w-6/12 lg:w-4/12 mt-10 sm:mt-20">
        <h1 className="text-4xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <TextInputComponent
            label="Email"
            id="email"
            name="email"
            placeholder="Enter you email here"
            value="test.test@test.com"
          />

          <PasswordInputComponent
            label="Password"
            id="password"
            name="password"
            placeholder="Enter you password here"
            value="12345"
          />
          <Button
            customClass="w-full text-white bg-primary-500 border border-transparent hover:bg-primary-600 active:bg-primary-600 focus:ring-primary-50 disabled:bg-primary-100 disabled:hover:bg-primary-100"
            type="submit"
            disabled={loading}
          >
            Login
          </Button>
        </form>
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
