import Welcome from "@/components/welcome";
import WorkingHours from "@/components/workingHours";
import React from "react";

function DashboardContent() {
  return (
    <section className="flex flex-row gap-5">
      <div className="grid grid-row-3 grid-col-2 gap-5">
        <div className="col-span-2">
          <Welcome username={"Rayan"} />
        </div>
        <div>
          <WorkingHours />
        </div>
        <div>
          <WorkingHours />
        </div>
        <div className="col-span-2">
          <Welcome username={"Rayan"} />
        </div>
      </div>
      <div className="flex flex-col w-full gap-8">
        <Welcome username={"Right"} />
      </div>
    </section>
  );
}

export default DashboardContent;
