import Welcome from "@/components/welcome";
import React from "react";
import { useState } from "react";

function DashboardContent() {
  return (
    <section className="grid grid-cols-3 gap-4">
      <Welcome username={"Rayan"} />
      <div className=""></div>
    </section>
  );
}

export default DashboardContent;
