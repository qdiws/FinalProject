import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const About = () => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5050/api/rank/distribution')
      .then(res => res.json())
      .then(data => {
        const ctx = chartRef.current.getContext('2d');
        const labels = Object.keys(data);
        const values = Object.values(data);

        if (chartInstance) chartInstance.destroy();

        const newChart = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: labels,
            datasets: [{
              data: values,
              backgroundColor: [
                '#60a5fa', '#a78bfa', '#f472b6', '#facc15', '#34d399', '#f87171'
              ],
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom'
              }
            }
          }
        });

        setChartInstance(newChart);
      });
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">About This Project</h1>
      <p className="mb-6">This assistant helps Call of Duty players find teammates based on skill, rank, and preferences.</p>
      <canvas ref={chartRef} className="mx-auto" width="400" height="400"></canvas>
    </div>
  );
};

export default About;
