import React from "react";

interface ChartProps {
  title: string;
}

const Chart = ({ title }: ChartProps): JSX.Element => {
  return <div className="pie-chart">{title}</div>;
};

export default Chart;
