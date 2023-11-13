"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Progress } from "./ui/progress";
import { motion } from "framer-motion";

type Student = {
  avatar: string;
  name: string;
  progress: number;
};

const students: Student[] = [
  {
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Micheal Watts",
    progress: 84,
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Amelia Collier",
    progress: 94,
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1553514029-1318c9127859?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Amanda Wood",
    progress: 30,
  },
];

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 0.5,
    opacity: 0.9,
    transition: {
      pathLength: { delay: 0.5, type: "spring", duration: 1.5, bounce: 0 },
      opacity: { delay: 0.5, duration: 0.01 },
    },
  },
};

function Student(student: Student) {
  const fullName = student.name.split(" ");
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(student.progress), 250);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-row w-full justify-between sm:gap-2 md:gap-4 items-center">
      <Avatar className="h-4 w-4 md:h-10 md:w-10">
        <AvatarImage src={student.avatar} />
        <AvatarFallback>
          {fullName[0].at(0)}
          {fullName[1].at(0)}
        </AvatarFallback>
      </Avatar>
      <p className="text-xs md:text-sm font-normal md:font-medium">
        {student.name}
      </p>
      <Progress className={`w-[50%] h-3`} value={progress} />
      <p className="text-xs md:text-sm font-normal md:font-medium">
        {progress}%
      </p>
    </div>
  );
}

export default function MyStudents() {
  return (
    <div className="flex flex-col h-full items-center bg-white shadow-mainComponent rounded-3xl px-8 py-5 gap-5">
      <div className="flex w-full justify-between items-center gap-8 pb-4">
        <p className="text-xl font-semibold">My Students</p>
        <p className="text-md hover:cursor-pointer text-[#98A2B1] font-medium">
          View all
        </p>
      </div>
      <div className="flex flex-col w-full items-center gap-5">
        {students.map((student) => (
          <Student
            key={student.name}
            avatar={student.avatar}
            name={student.name}
            progress={student.progress}
          />
        ))}
      </div>
    </div>
  );
}
