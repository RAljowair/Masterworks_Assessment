"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";

const doneDraw = {
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
const progressDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 0.7,
    opacity: 1,
    transition: {
      pathLength: { delay: 0.7, type: "spring", duration: 2, bounce: 0 },
      opacity: { delay: 0.7, duration: 0.01 },
    },
  },
};

export default function workingHours() {
  return (
    <div className="flex flex-col h-[17.5rem] items-center bg-white shadow-mainComponent rounded-3xl px-8 py-5 gap-5">
      <div className="flex w-full justify-between items-center gap-8">
        <p className="text-xl font-semibold">Working hours</p>
        <div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Today" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Today">Today</SelectItem>
              <SelectItem value="Week">Week</SelectItem>
              <SelectItem value="Month">Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <motion.svg viewBox="0 0 600 600" initial="hidden" animate="visible">
        <text
          fill="#000000"
          className="text-[7rem] font-semibold"
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle">
          84%
        </text>
        {/*circle progress bar background*/}
        <motion.circle
          className={"h-full w-full justify-center stroke-[3rem]"}
          style={{
            strokeLinecap: "round",
            fill: "transparent",
          }}
          cx={"50%"}
          cy={"50%"}
          r="260"
          stroke="#EDF0F4"
          // variants={draw}
          custom={1}
        />
        {/*circle progress bar for in progress tasks*/}
        <motion.circle
          className={
            "h-full w-full justify-self-center stroke-[3rem] translate-y-full -rotate-90"
          }
          style={{
            strokeLinecap: "round",
            fill: "transparent",
          }}
          cx={"50%"}
          cy={"50%"}
          r="260"
          stroke="#FF991F"
          variants={progressDraw}
          custom={1}
        />
        {/*circle progress bar for done tasks*/}
        <motion.circle
          className={
            "h-full w-full justify-center stroke-[3rem] translate-y-full -rotate-90"
          }
          style={{
            strokeLinecap: "round",
            fill: "transparent",
          }}
          cx={"50%"}
          cy={"50%"}
          r="275"
          stroke="#044DCB"
          variants={doneDraw}
          custom={1}
        />
      </motion.svg>
      <div className="flex flex-row w-full justify-around">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none">
            <circle cx="7" cy="7" r="7" fill="#FF991F" />
          </svg>
          <p>Progress</p>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none">
            <circle cx="7" cy="7" r="7" fill="#044DCB" />
          </svg>
          <p>Done</p>
        </div>
      </div>
    </div>
  );
}
