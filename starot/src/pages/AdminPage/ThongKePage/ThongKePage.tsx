import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts'
import HeaderAdmin from '../../../components/HeaderAdmin/HeaderAdmin'
import { Helmet } from 'react-helmet-async'

ChartJS.register(ArcElement, Tooltip, Legend)

const ThongKePage = () => {
  const data = [
    { month: '01', value: 0 },
    { month: '02', value: 0 },
    { month: '03', value: 0 },
    { month: '04', value: 0 },
    { month: '05', value: 0 },
    { month: '06', value: 0 },
    { month: '07', value: 0 },
    { month: '08', value: 0 },
    { month: '09', value: 0 },
    { month: '10', value: 0 },
    { month: '11', value: 6920000 },
    { month: '12', value: 0 }
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
        data: [22, 26, 7, 15, 11, 11, 7],
        backgroundColor: ['#FF4960', '#EDEF78', '#717DCC', '#5EE073', '#3A83F0', '#EF3CD2', '#FFB038'],
        hoverBackgroundColor: ['#FF4960', '#EDEF78', '#717DCC', '#5EE073', '#3A83F0', '#EF3CD2', '#FFB038']
      }
    ]
  }

  const chartData2 = {
    labels: ['Red Jasper', 'Amethyst', 'Aquamarine', 'Citrine', 'Clear Quartz', 'Moonstone', 'Rhodochrosite', 'Amber'],
    datasets: [
      {
        data: [5, 5, 10, 15, 5, 15, 25, 2],
        backgroundColor: ['#FF4960', '#EDEF78', '#717DCC', '#5EE073', '#3A83F0', '#EF3CD2', '#FFB038', '#37EDC9'],
        hoverBackgroundColor: ['#FF4960', '#EDEF78', '#717DCC', '#5EE073', '#3A83F0', '#EF3CD2', '#FFB038', '#37EDC9']
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
    <>
      <Helmet>
        <title>Thống Kê - Starot</title>
        <meta name='description' content='Admin Thống Kê' />
        <link rel='canonical' href='https://starotvn.com/admin/thong-ke' />
      </Helmet>
      <div className='min-h-screen bg-bg-admin lg:px-0 px-5'>
        <HeaderAdmin />
        <main className='container mx-auto lg:px-32 md:px-10 pb-28 pt-10 mt-10'>
          <div className='flex flex-col space-y-8'>
            <div className='bg-white shadow-lg rounded-lg p-10'>
              <div className='flex flex-col md:flex-row justify-between items-center mb-6'>
                <h1 className='text-lg md:text-2xl font-bold text-blue mb-4 md:mb-0'>THỐNG KÊ DỊCH VỤ</h1>
                <div className='flex space-x-2'>
                  <select className='text-blue border rounded px-2 py-1'>
                    <option value='1'>January</option>
                    <option value='2'>February</option>
                    <option value='3'>March</option>
                    <option value='4'>April</option>
                    <option value='5'>May</option>
                    <option value='6'>June</option>
                    <option value='7'>July</option>
                    <option value='8'>August</option>
                    <option value='9'>September</option>
                    <option value='10'>October</option>
                    <option value='11'>November</option>
                    <option value='12'>December</option>
                  </select>
                  <select className='text-blue border rounded px-2 py-1 border-blue'>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
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
              <div className='flex flex-col md:flex-row justify-between items-center mb-6'>
                <h1 className='text-lg md:text-2xl font-bold text-blue mb-4 md:mb-0'>THỐNG KÊ CỬA HÀNG</h1>
                <div className='flex space-x-2'>
                  <select className='text-blue border rounded px-2 py-1'>
                    <option value='1'>January</option>
                    <option value='2'>February</option>
                    <option value='3'>March</option>
                    <option value='4'>April</option>
                    <option value='5'>May</option>
                    <option value='6'>June</option>
                    <option value='7'>July</option>
                    <option value='8'>August</option>
                    <option value='9'>September</option>
                    <option value='10'>October</option>
                    <option value='11'>November</option>
                    <option value='12'>December</option>
                  </select>
                  <select className='text-blue border rounded px-2 py-1 border-blue'>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                  </select>
                </div>
              </div>

              <div className='flex flex-col sm-md:flex-row justify-between'>
                <div className='w-full sm-md:w-1/2 sm-md:h-80 md:h-80 lg:h-auto relative lg:p-10 lg:ml-10 ml-0 p-2'>
                  <Doughnut data={chartData2} options={chartOptions} />
                </div>
                <div className='w-full sm-md:w-1/3 pt-4 sm-md:pt-20'>
                  {chartData2.labels.map((label, index) => (
                    <div key={index} className='flex items-center mb-4 border border-blue rounded-lg p-4'>
                      <div
                        className='w-4 h-4 mr-2 rounded-full'
                        style={{ backgroundColor: chartData2.datasets[0].backgroundColor[index] }}
                      ></div>
                      <div className='flex-grow'>
                        <span>{label}</span>
                        <span className='block font-bold'>{chartData2.datasets[0].data[index]}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='bg-white shadow-lg rounded-lg p-10'>
              <div className='flex flex-col md:flex-row justify-between items-center mb-20'>
                <div className='mb-4 md:mb-0'>
                  <h2 className='text-2xl font-bold text-blue'>TỔNG QUAN TÀI CHÍNH</h2>
                </div>
                <div className='flex space-x-2'>
                  <select className='text-blue border rounded px-2 py-1 border-blue'>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
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
    </>
  )
}

export default ThongKePage
