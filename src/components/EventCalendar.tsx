"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY DATA
const events = [
  {
    _id: 1,
    time: "12:00 PM - 2:00 PM",
    title: "Parent-Teacher Meeting",
    description: "Discuss student progress and address concerns.",
  },
  {
    _id: 1,
    time: "12:00 PM - 2:00 PM",
    title: "Parent-Teacher Meeting",
    description: "Discuss student progress and address concerns.",
  },
  {
    _id: 1,
    time: "12:00 PM - 2:00 PM",
    title: "Parent-Teacher Meeting",
    description: "Discuss student progress and address concerns.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-xl">
      <Calendar onChange={onChange} value={value} />

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold my-4">Events</h2>
        <Image src="/moreDark.png" alt="divider" width={20} height={20} />
      </div>

      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            key={event._id}
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-Sky even:border-t-Purple"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-600">{event.title}</h3>
              <span className="text-sm text-gray-300">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
