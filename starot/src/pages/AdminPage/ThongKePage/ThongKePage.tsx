import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts'
import HeaderAdmin from '../../../components/HeaderAdmin/HeaderAdmin'
import { useLocation } from 'react-router-dom'

ChartJS.register(ArcElement, Tooltip, Legend)

const ThongKePage = () => {
  const location = useLocation()
  const admin = location.state?.admin

  const data = [
    { month: '01', value: 600000 },
    { month: '02', value: 1500000 },
    { month: '03', value: 1800000 },
    { month: '04', value: 1600000 },
    { month: '05', value: 800000 },
    { month: '06', value: 1400000 },
    { month: '07', value: 1200000 },
    { month: '08', value: 1600000 },
    { month: '09', value: 1800000 },
    { month: '10', value: 1400000 },
    { month: '11', value: 1600000 },
    { month: '12', value: 2000000 }
  ]

  const chartData = {
    labels: [
      'Gói trải bài theo câu hỏi đơn',
      'Gói trải bài theo chủ đề',
      'Gói trải bài tổng quan tuần',
      'Gói trải bài tổng quan tháng',
      'Gói trải bài tổng quan quý',
      'Gói trải bài tổng quan 6 tháng',
      'Gói trải bài tổng quan năm'
    ],
    datasets: [
      {
        data: [24, 28, 9, 21, 18, 18, 18],
        backgroundColor: ['#FF4960', '#EDEF78', '#717DCC', '#5EE073', '#3A83F0', '#EF3CD2', '#FFB038'],
        hoverBackgroundColor: ['#FF4960', '#EDEF78', '#717DCC', '#5EE073', '#3A83F0', '#EF3CD2', '#FFB038']
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        display: false
      }
    }
  }

  return (
    <div className='min-h-screen bg-bg-admin'>
      <HeaderAdmin admin={admin} />
      <main className='container mx-auto lg:px-32 md:px-10 pb-28 pt-10 mt-10'>
        <div className='flex flex-col space-y-8'>
          <div className='bg-white shadow-lg rounded-lg p-10'>
            <div className='flex flex-col md:flex-row justify-between items-center mb-6'>
              <h1 className='text-lg md:text-2xl font-bold text-purple-700 mb-4 md:mb-0'>THỐNG KÊ</h1>
              <div className='flex space-x-2'>
                <select className='text-blue border rounded px-2 py-1 border-blue'>
                  <option>Ngày 18</option>
                </select>
                <select className='text-blue border rounded px-2 py-1 border-blue'>
                  <option>Tháng 6</option>
                </select>
                <select className='text-blue border rounded px-2 py-1 border-blue'>
                  <option>2023</option>
                </select>
              </div>
            </div>

            <div className='flex flex-col sm-md:flex-row justify-between'>
              <div className='w-full sm-md:w-1/2 sm-md:h-80 md:h-80 lg:h-auto relative lg:p-10 lg:ml-10 ml-0 p-2'>
                <Doughnut data={chartData} options={chartOptions} />
              </div>
              <div className='w-full sm-md:w-1/3 pt-4 sm-md:pt-20'>
                {chartData.labels.map((label, index) => (
                  <div key={index} className='flex items-center mb-4 border border-blue rounded-lg p-4'>
                    <div
                      className='w-4 h-4 mr-2 rounded-full'
                      style={{ backgroundColor: chartData.datasets[0].backgroundColor[index] }}
                    ></div>
                    <div className='flex-grow'>
                      <span>{label}</span>
                      <span className='block font-bold'>{chartData.datasets[0].data[index]}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='bg-white shadow-lg rounded-lg p-10'>
            <div className='flex flex-col md:flex-row justify-between items-center mb-20'>
              <div className='mb-4 md:mb-0'>
                {' '}
                {/* Add margin bottom for mobile view */}
                <h2 className='text-2xl font-bold text-purple-700'>TỔNG QUAN TÀI CHÍNH</h2>
                <div className='text-3xl font-bold'>
                  2.100.000 VNĐ <span className='text-green-500 text-lg'>2%</span>
                </div>
              </div>
              <div className='flex space-x-2'>
                <select className='text-blue border rounded px-2 py-1 border-blue'>
                  <option>Ngày 18</option>
                </select>
                <select className='text-blue border rounded px-2 py-1 border-blue'>
                  <option>Tháng 6</option>
                </select>
                <select className='text-blue border rounded px-2 py-1 border-blue'>
                  <option>2023</option>
                </select>
              </div>
            </div>

            <div className='w-full mx-auto rounded-lg'>
              <ResponsiveContainer width='100%' height={400}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray='3 3' vertical={false} />
                  <XAxis dataKey='month' axisLine={false} tickLine={false} tick={{ fill: '#888', fontSize: 12 }} />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#888', fontSize: 12 }}
                    tickFormatter={(value) => `${value.toLocaleString()} VND`}
                  />
                  <Bar dataKey='value' fill='#4C0099' radius={[4, 4, 0, 0]} maxBarSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ThongKePage
