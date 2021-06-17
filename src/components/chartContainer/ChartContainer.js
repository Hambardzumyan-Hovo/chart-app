import { shallowEqual, useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';

const ChartContainer = () => {
  const predictedData = useSelector(state => state.state.predictedData, shallowEqual);
  const receivedData = useSelector(state => state.state.receivedData, shallowEqual);

  const data = {
    labels: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
    datasets: [
      {
        label: 'Predicted data',
        data: predictedData,
        backgroundColor: ['rgb(255, 99, 132)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
      {
        label: 'Received data',
        data: receivedData,
        backgroundColor: ['rgb(54, 162, 235)'],
        borderColor: ['rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div>
      <Bar data={data} option={options} />
    </div>
  );
};

export default ChartContainer;
