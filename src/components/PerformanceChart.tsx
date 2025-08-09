import React, { useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
import { useArticleContext } from "../context/ArticleContext";
import dayjs from "dayjs";
import { Radio } from "antd";

type ViewMode = "daily" | "monthly";

const PerformanceChart: React.FC = () => {
  const { filteredArticles } = useArticleContext();
  const [viewMode, setViewMode] = useState<ViewMode>("monthly");

  // Generate view data by date
  const chartData = useMemo(() => {
    const viewsMap: Record<string, number> = {};

    filteredArticles.forEach((article) => {
      const date = dayjs(article.publishedDate);

      const key =
        viewMode === "monthly"
          ? date.format("YYYY-MM")
          : date.format("YYYY-MM-DD");

      viewsMap[key] = (viewsMap[key] || 0) + article.views;
    });

    const result = Object.entries(viewsMap)
      .map(([date, views]) => ({ date, views }))
      .sort((a, b) => dayjs(a.date).unix() - dayjs(b.date).unix());

    return result;
  }, [filteredArticles, viewMode]);

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Article Views Over Time</h2>
        <Radio.Group
          value={viewMode}
          onChange={(e) => setViewMode(e.target.value)}
        >
          <Radio.Button value="daily">Daily</Radio.Button>
          <Radio.Button value="monthly">Monthly</Radio.Button>
        </Radio.Group>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        {viewMode === "monthly" ? (
          <BarChart data={chartData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="views" fill="#8884d8" />
          </BarChart>
        ) : (
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="views"
              stroke="#82ca9d"
              strokeWidth={2}
            />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
