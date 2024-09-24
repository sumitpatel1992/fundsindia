"use client";
import { MyButton } from "@/components/MyButton";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center mx-auto">
      <div className="p-10 text-center">
        <div className="text-center">
          <img
            className="object-cover mx-auto"
            src="/images/404.png"
            alt="Not Found"
            width="350"
            height="129"
          />
        </div>
        <h4 className="text-lg my-5 mx-auto">
          Sorry, the page you are looking for does not exist.
        </h4>
        <MyButton className="mx-auto" href="/" name="Go Back Home"></MyButton>
      </div>
    </div>
  );
}
