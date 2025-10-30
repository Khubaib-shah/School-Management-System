"use client";

import Image from "next/image";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const CountChart = () => {
  const data = [
    {
      name: "Girls",
      count: 53,
      fill: "#FAE27C",
    },

    {
      name: "Boys",
      count: 53,
      fill: "#C3EBFA",
    },
  ];
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1>Students</h1>
        <Image src="/moreDark.png" alt="More" width={20} height={20} />
      </div>
      {/* CHART */}
      <div className="w-full h-[75%] relative">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            outerRadius="100%"
            innerRadius="40%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>

        <Image
          src="/maleFemale.png"
          alt="Center Image"
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="">
          <div className="w-5 h-5 bg-Sky rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-sm text-gray-400">Boys (55%)</h2>
        </div>
        <div className="">
          <div className="w-5 h-5 bg-Yellow rounded-full" />
          <h1 className="font-bold">904</h1>
          <h2 className="text-sm text-gray-400">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
