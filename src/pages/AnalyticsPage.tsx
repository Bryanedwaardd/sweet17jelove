import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { getPageViewsByMonthAndYear } from "../utils/getPageViews";
import * as XLSX from "xlsx";
import ErrorBoundary from "../components/ErrorBoundary";

const AnalyticsPage = () => {
  const [viewsData, setViewsData] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPageViewsByMonthAndYear();
      setViewsData(data);
    };

    fetchData();
  }, []);

  const data = {
    labels: Object.keys(viewsData), // Labels are months & years dynamically
    datasets: [
      {
        label: "Page Views",
        data: Object.values(viewsData), // View counts for each month & year
        backgroundColor: Array(Object.keys(viewsData).length).fill("#4CAF50"), // Dynamic coloring
      },
    ],
  };

  const exportToExcel = async () => {
    const formattedData = Object.entries(viewsData).map(([timeframe, views]) => ({
      Timeframe: timeframe,
      Views: views,
    }));

    const ws = XLSX.utils.json_to_sheet(formattedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "PageViews");
    XLSX.writeFile(wb, "PageView_Report.xlsx");
  };

  return (
    <div>
      <h1>Analytics Dashboard</h1>
      <ErrorBoundary>
        <Bar data={data} />
      </ErrorBoundary>
      <ul>
        {Object.entries(viewsData).map(([key, count]) => (
          <li key={key}>{key} - {count} views</li>
        ))}
      </ul>
      <button onClick={exportToExcel} className="mt-6 px-4 py-2 bg-blue-600 text-white rounded">
        Export Data
      </button>
    </div>
  );
};

export default AnalyticsPage;
