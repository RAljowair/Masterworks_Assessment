"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import { LuMoreVertical, LuPlus } from "react-icons/lu";

type Lesson = {
  name: string;
  time: string;
};

const lessons: Lesson[] = [
  {
    name: "Common English",
    time: "Thu 13 PM - 15 PM",
  },
  {
    name: "Speaking Club",
    time: "Thu 16 PM - 17 PM",
  },
];

const Lesson = (lesson: Lesson) => {
  return (
    <div className="flex flex-col relative w-[80%] h-[8rem] rounded-xl overflow-hidden shadow-mainComponent py-4 px-10">
      <div className="h-full absolute w-[2%] left-0 top-0 bg-[#FF5A35]"></div>
      <div className="absolute w-7 h-7 right-5 bottom-5 flex justify-center rounded-full bg-[#172B4D] items-center">
        <LuPlus className="text-[#ffffff] self-center" />
      </div>
      <LuMoreVertical className="absolute right-5" />
      <p className="text-normal font-semibold">{lesson.name}</p>
      <p className="text-[#98A2B1] text-sm">{lesson.time}</p>
      <div className="absolute bottom-5 flex">
        <Avatar className="h-4 w-4 md:h-10 md:w-10 border">
          <AvatarImage
            src={
              "https://images.unsplash.com/photo-1549351512-c5e12b11e283?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <AvatarFallback>JK</AvatarFallback>
        </Avatar>
        <Avatar className="h-4 w-4 md:h-10 md:w-10 -translate-x-4 border">
          <AvatarImage
            src={
              "https://images.unsplash.com/photo-1553514029-1318c9127859?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <AvatarFallback>DB</AvatarFallback>
        </Avatar>
        <Avatar className="h-4 w-4 md:h-10 md:w-10 -translate-x-8 border">
          <AvatarImage
            src={
              "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <AvatarFallback>MM</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default function RightSide() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  return (
    <div className="flex flex-col items-center  gap-5">
      <div className="flex flex-row-reverse w-full justify-between items-center gap-8 px-8">
        <Avatar className="h-4 w-4 md:h-10 md:w-10">
          <AvatarImage src={"https://www.rayau.me/_next/static/media/personal-img.3bbcd8ad.svg"} />
          <AvatarFallback>RZ</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-end w-full">
          <p className="text-xl font-semibold">Rayan Jowair</p>
          <p className="text-md hover:cursor-pointer text-[#98A2B1] font-medium">
            rayanaljwoair@gmail.com
          </p>
        </div>
      </div>
      <div className="flex flex-col shadow-mainComponent h-full justify-center rounded-3xl w-full">
        <Calendar
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={1}
          className="rounded-md self-center"
        />
        <div className="flex justify-between items-center gap-8 px-8 w-[80%] self-center">
          <p className="text-xl font-semibold">Lessons</p>
          <p className="text-md hover:cursor-pointer text-[#98A2B1] font-medium">
            View all
          </p>
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-4 p-5">
          {lessons.map((lesson) => (
            <Lesson key={lesson.name} name={lesson.name} time={lesson.time} />
          ))}
        </div>
      </div>
    </div>
  );
}
