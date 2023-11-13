import MediaLessons from "@/components/media-lessons";
import MyStudents from "@/components/my-students";
import RightSide from "@/components/right-side";
import Welcome from "@/components/welcome";
import WorkingHours from "@/components/workingHours";
import React from "react";

function DashboardContent() {
  return (
    <section>
      <div className="grid grid-cols-3 grid-rows-3 gap-4 h-screen p-8">
        <div className="col-span-2">
          <Welcome username={"Rayan"} />
        </div>
        <div className="col-start-1 row-start-2">
          <MyStudents />
        </div>
        <div className="col-start-2 row-start-2">
          <WorkingHours />
        </div>
        <div className="col-span-2 col-start-1 row-start-3">
          <MediaLessons />
        </div>
        <div className="row-span-3 col-start-3 row-start-1">
          <RightSide/>
        </div>
      </div>
    </section>
  );
}

export default DashboardContent;
