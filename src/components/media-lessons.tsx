"use client";

import React from "react";
type MediaLesson = {
  lvl: string;
  name: string;
  description: string;
  editable: boolean;
  members: number;
  size: number;
};

const levelColor = (lvl: string) => {
  if (lvl == "B1") {
    return "text-[#044DCB] bg-[#E0EAF8]";
  } else if (lvl == "A1") {
    return "text-[#FF991F] bg-[#FFF2E4]";
  } else {
    return "text-[#FF5A35] bg-[#FFEAE6]";
  }
};

const mediaLessonsList: MediaLesson[] = [
  {
    lvl: "B1",
    name: "Speaking club",
    description: "Speaking Skill.docs",
    editable: true,
    members: 62,
    size: 24,
  },
  {
    lvl: "C1",
    name: "Business English",
    description: "English Dectionary.wav",
    editable: false,
    members: 0,
    size: 0,
  },
  {
    lvl: "A1",
    name: "Commpn English",
    description: "Cambridge Adavanced.pdf",
    editable: false,
    members: 62,
    size: 23,
  },
];

function MediaLesson(media: MediaLesson) {
  return (
    <div className="flex flex-row w-full h-full shadow-mainComponent px-8 bg-white rounded-lg py-2 justify-between gap-5 items-center">
      <div
        className={`h-10 w-10 ${levelColor(
          media.lvl
        )} flex justify-center rounded-lg items-center`}>
        {media.lvl}
      </div>
      <p className="text-sm w-[10rem] text-left font-medium">{media.name}</p>
      <p className="text-sm w-[10rem] text-left  text-[#98A2B1] font-medium">
        {media.description}
      </p>
      <p
        className={`text-sm w-[10rem] text-left ${
          media.editable ? "text-[#FF991F]" : ""
        } font-medium`}>
        {media.editable ? "● Edit Available" : "● Only View"}
      </p>
      <p className="text-sm w-[10rem] text-left text-[#98A2B1] font-medium">
        {media.members} members
      </p>
      <p className="text-sm font-medium">{media.size}MB</p>
    </div>
  );
}

export default function MediaLessons() {
  return (
    <div className="flex flex-col items-center rounded-3xl gap-5">
      <div className="flex w-full justify-between items-center gap-8 px-8">
        <p className="text-xl font-semibold">Media for lessons</p>
        <p className="text-md hover:cursor-pointer text-[#98A2B1] font-medium">
          View all
        </p>
      </div>
      {mediaLessonsList.map((media) => (
        <MediaLesson
          key={media.name}
          lvl={media.lvl}
          name={media.name}
          description={media.description}
          editable={media.editable}
          members={media.members}
          size={media.size}
        />
      ))}
    </div>
  );
}
