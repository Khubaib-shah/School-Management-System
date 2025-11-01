"use client";

import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";

const TeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row ">
      {/* LEFT */}
      <div className="w-full xl:w-2/3 flex flex-col gap-8">
        <h2 className="text-xl font-bold">Schedule (4A)</h2>
        <BigCalendar />
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcement />
      </div>
    </div>
  );
};

export default TeacherPage;
