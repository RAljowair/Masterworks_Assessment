import React from "react";
import Sidebar from "@/components/sidebar";

// making layout as a sidebar to route inside it's contnet
export default function Dashbaord({ children }: { children: React.ReactNode }) {
  return (
    <section className="dashboard-page flex flex-row-2">
      <Sidebar />
      {/* main page content section */}
      <main className="dashboard-content w-full bg-[#FDFEFF] p-8">
        {children}
      </main>
    </section>
  );
}
