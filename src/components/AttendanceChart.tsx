"use client";

import Image from "next/image";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 90,
    absent: 64,
  },
  {
    name: "Tue",
    present: 80,
    absent: 13,
  },
  {
    name: "Wed",
    present: 85,
    absent: 9,
  },
  {
    name: "Thu",
    present: 70,
    absent: 60,
  },
  {
    name: "Fri",
    present: 99,
    absent: 23,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg h-full p-4 ">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance </h1>

        <Image src="/moreDark.png" alt="More" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} responsive barSize={20} data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis
            width="auto"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{ borderRadius: "10PX", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill="#FAE27C"
            activeBar={<Rectangle fill="#FFF0A3" stroke="blue" />}
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            activeBar={<Rectangle fill="#D8F3FD" stroke="purple" />}
            radius={[10, 10, 0, 0]}
            legendType="circle"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
