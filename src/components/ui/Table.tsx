/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface Column {
  key: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}

interface Props {
  columns: Column[];
  data: any[];
}

const Table: React.FC<Props> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto border rounded bg-white">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 text-left">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-2 font-medium text-gray-700">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-2 text-sm text-gray-800">
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
