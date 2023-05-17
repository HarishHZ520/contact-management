import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineChart = ({ data }) => {
  const labels = Object.keys(data.cases);
  const casesData = Object.values(data.cases);
  const recoveredData = Object.values(data.recovered);
  const deathsData = Object.values(data.deaths);

  const datasets = [
    {
      label: 'Cases',
      data: casesData,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'left-axis',
    },
    {
      label: 'Recovered',
      data: recoveredData,
      borderColor: 'rgb(59, 235, 53)',
      backgroundColor: 'rgba(59, 235, 53, 0.5)',
      yAxisID: 'right-axis',
    },
    {
      label: 'Deaths',
      data: deathsData,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'right-axis',
    },
  ];

  const Casesdata = {
    labels,
    datasets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'COVID-19 Analysis',
      },
    },
    scales: {
      left: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'Cases',
        },
      },
      right: {
        type: 'linear',
        position: 'right',
        title: {
          display: true,
          text: 'Recovered and Deaths',
        },
      },
    },
  };

  return (
    <>
      <Line data={Casesdata} options={options} />
    </>
  );
};

export default LineChart;
