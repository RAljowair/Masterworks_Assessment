import React from "react";
import Image from "next/image";
import peopleImg from "@/../public/people_reading.jpg";

export default function Welcome({ username }: { username: String }) {
  const importantTextStyle = "text-[#FF991F] font-semibold";
  const TextStyle = "text-[#FF991F]";
  return (
    <section className="flex flex-row justify-between h-[17rem] items-center bg-white shadow-mainComponent rounded-3xl px-8 py-5">
      <div className="flex flex-col gap-8">
        <p className="text-4xl">
          Welcome back,{" "}
          <span className="font-bold">{username ? username : ""}!</span>
        </p>

        <div className="flex flex-col gap-3 text-xl text-[#98A2B1]">
          <p>
            Your Students completed{" "}
            <span className={`${importantTextStyle}`}>80%</span> of the tasks.
          </p>
          <p>
            Progress is{" "}
            <span className={`${importantTextStyle}`}>very good!</span>
          </p>
        </div>
      </div>
      <Image src={peopleImg} alt="" className="w-[42%]" />
    </section>
  );
}
