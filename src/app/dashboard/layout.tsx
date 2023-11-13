import React from "react";
import Sidebar from "@/components/sidebar";

// making layout as a sidebar to route inside it's contnet
export default function Dashbaord({ children }: { children: React.ReactNode }) {
  return (
    <section className="dashboard-page flex">
      <div className="h-screen w-[15%]">
        <Sidebar />
      </div>
      {/* main page content section */}
      <main className="dashboard-content w-full h-full bg-[#FDFEFF]">
        {children}
      </main>
    </section>
  );
}
