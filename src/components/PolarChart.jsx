import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, PolarAreaController, RadialLinearScale, ArcElement } from 'chart.js';


ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, PolarAreaController, RadialLinearScale, ArcElement);

const options = {
    responsive: true,
    scales: {
        y:
          {
            min: 0,
            max: 100,
          },
        x:
          {
            
          },
      },
}

const PolarChart = ({techniques = [10, 20, 30]}) => {
    const data = {
        labels: [
            "Apelar a lo común",
            "Desacreditar al oponente",
            "Lenguaje cargado",
        ],
        datasets: [
            {
                label: "Porcentajes",
                barPercentage: 0.7,
                data: techniques,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                  ],
                  borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                  ],
            }
        ]
    }
  return (
    <div className='h-96 w-full flex items-center justify-center'>
      <PolarArea options={options} data={data}/>
    </div>
  )
}

export default PolarChart
