import React, { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const TagBarChart = ({ tags }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chartInstance = chartRef.current.chartInstance;
      if (chartInstance) {
        chartInstance.destroy(); // Destrua o gráfico anterior se existir
      }
    }
  }, [tags]);

  const data = {
    labels: tags.map((tag) => tag.value),
    datasets: [
      {
        label: 'Contagem de Tags',
        data: tags.map((tag) => tag.count),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={data} ref={chartRef} />;
};

export default TagBarChart;
