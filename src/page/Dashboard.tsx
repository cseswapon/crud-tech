import React from "react";
import Filters from "../components/Filters";
import DashboardTable from "../components/DashboardTable";
import { ArticleProvider } from "../context/ArticleContext";
import PerformanceChart from "../components/PerformanceChart";
import LogoutButton from "../components/LogoutButton";

const Dashboard: React.FC = () => {
  return (
    <ArticleProvider>
      <div className="p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
          <LogoutButton />
        </div>
        <Filters />
        <PerformanceChart />
        <DashboardTable />
      </div>
    </ArticleProvider>
  );
};

export default Dashboard;
