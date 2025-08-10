import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Jan", value: 65 },
  { name: "Feb", value: 59 },
  { name: "Mar", value: 80 },
  { name: "Apr", value: 81 },
  { name: "May", value: 56 },
  { name: "Jun", value: 55 },
];

const maxValue = Math.max(...data.map((item) => item.value));

// Custom tooltip component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 shadow-lg rounded-md">
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
          {payload[0].payload.name}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Revenue:{" "}
          <span className="font-semibold">
            ${(payload[0].value * 1000).toLocaleString()}
          </span>
        </p>
      </div>
    );
  }
  return null;
};

// Custom bar shape with rounded top
const RoundedBar = (props) => {
  const { fill, x, y, width, height } = props;
  const radius = 4;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={radius}
        ry={radius}
      />
    </g>
  );
};

export default function BarCharts() {
  // Custom bar colors based on value
  const getBarColor = (value) => {
    if (value >= 75) return "#4F46E5"; // indigo-600
    if (value >= 60) return "#6366F1"; // indigo-500
    return "#818CF8"; // indigo-400
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Monthly Revenue
        </h3>
        <div className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full">
          2024
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E5E7EB"
              strokeOpacity={0.3}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              domain={[0, maxValue + 10]}
              tick={{ fill: "#6B7280", fontSize: 12 }}
              tickFormatter={(value) => `$${value * 1000}`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="top"
              height={36}
              payload={[
                {
                  value: "Revenue",
                  type: "rect",
                  color: "#4F46E5",
                },
              ]}
            />
            <Bar
              dataKey="value"
              name="Revenue"
              shape={<RoundedBar />}
              animationBegin={100}
              animationDuration={1500}
              animationEasing="ease-out"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={getBarColor(entry.value)}
                  strokeWidth={0}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between mt-4 text-xs text-gray-500 dark:text-gray-400">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-indigo-500 rounded-sm mr-1"></div>
          <span>Revenue ($)</span>
        </div>
        <div>Target: $75,000</div>
      </div>
    </div>
  );
}
