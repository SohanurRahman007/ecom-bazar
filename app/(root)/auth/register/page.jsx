"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";
import logo from "@/public/assets/images/logo-black.png";
import Image from "next/image";
import { zSchema } from "@/lib/zodSchema";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import ButtonLoading from "@/components/application/ButtonLoading";
import z from "zod";
import Link from "next/link";
import { WEBSITE_REGISTER } from "@/routes/WebsiteRoute";

function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [isTypePassword, setIsTypePassword] = useState(true);
  const formSchema = zSchema
    .pick({
      name: true,
      email: true,
      password: true,
    })
    .extend({
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "Passwords do not match",
    });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleRegisterSubmit = async (values) => {
    console.log(values);
  };

  return (
    <Card className="w-[400px]">
      <CardContent>
        <div className="flex justify-center">
          <Image
            src={logo.src}
            width={logo.width}
            height={logo.height}
            alt="logo"
            className="max-w-[150px]"
          />
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-semibold">Create Account!</h3>
          <p>Create your account below input field</p>
        </div>

        <div className="mt-3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleRegisterSubmit)}>
              {/* Full Name */}
              <div className="mb-3">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Sohanur Rahman"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* Email */}
              <div className="mb-3">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* password */}
              <div className="mb-3">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className=" relative">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="**********"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* confirmPassword */}
              <div className="mb-3">
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem className=" relative">
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          type={isTypePassword ? "password" : "text"}
                          placeholder="**********"
                          {...field}
                        />
                      </FormControl>
                      <button
                        className="absolute cursor-pointer top-1/2 right-2"
                        type="button"
                        onClick={() => setIsTypePassword(!isTypePassword)}
                      >
                        {isTypePassword ? <FaRegEyeSlash /> : <FaRegEye />}
                      </button>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="mb-3">
                <ButtonLoading
                  type="submit"
                  loading={loading}
                  text="login"
                  className="w-full cursor-pointer"
                />
              </div>
              <div className="text-center">
                <div className="flex justify-center items-center gap-2">
                  <p>don't have an account ?</p>
                  <Link
                    href={WEBSITE_REGISTER}
                    className="text-primary underline"
                  >
                    Create account
                  </Link>
                </div>
                <div className="mt-2">
                  <Link href="" className="text-primary underline">
                    Forget Password?
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
}

export default RegisterPage;
