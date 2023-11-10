import Welcome from "@/components/welcome";
import React from "react";

function DashboardContent() {
  return (
    <section className="flex flex-row gap-3">
      <div className="grid grid-row-3 grid-col-2 gap-3">
        <div className="col-span-2">
          <Welcome username={"Rayan"} />
        </div>
        <div className="col-span-1">
          <Welcome username={"mid 1"} />
        </div>
        <div className="col-span-1">
          <Welcome username={"mid 1"} />
        </div>
        <div className="col-span-2">
          <Welcome username={"Rayan"} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Welcome username={"Right"} />
        <Welcome username={"Right"} />
      </div>
    </section>
  );
}

export default DashboardContent;
