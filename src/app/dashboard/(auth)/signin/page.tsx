import React from "react";
import { Metadata } from "next";
import FormSignIn from "./form";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard | sign In",
};

const SignInPage = async () => {
  const { session, user } = await getUser();

  if (session && user.role == "ADMIN") {
    redirect("/dashboard");
  }

  return <FormSignIn />;
  console.log("X");
};

export default SignInPage;
