import { useEffect, useState } from 'react'
import HeaderAdmin from '../../../components/HeaderAdmin/HeaderAdmin'
import { Helmet } from 'react-helmet-async'
import { Booking } from '../../../types/Booking.type'
import axios from 'axios'

export default function LichSuDichVuPage() {
  const [transactions, setTransactions] = useState<Booking[]>([])

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('https://exestarotapi20241021202520.azurewebsites.net/api/v1/booking')
        setTransactions(response.data.data)
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }

    fetchTransactions()
  }, [])

  const [searchTerm, setSearchTerm] = useState('')

  const filteredTransactions = transactions.filter((transaction) =>
    Object.values(transaction).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <>
      <Helmet>
        <title>Lịch Sử Dịch Vụ - Starot</title>
        <meta name='description' content='Lịch Sử Dịch Vụ' />
        <link rel='canonical' href='https://starotvn.com/admin/quan-li-dich-vu/lich-su-dich-vu' />
      </Helmet>
      <div className='min-h-screen bg-gray-100'>
        <HeaderAdmin />
        <div className='container mx-auto p-6 bg-white rounded-lg shadow-lg lg:p-16 my-20'>
          <div>
            <div className='flex flex-col lg:flex-row justify-between items-center mb-6'>
              <h1 className='text-2xl font-bold text-indigo-700 mb-4 lg:mb-0 lg:py-10'>LỊCH SỬ DỊCH VỤ</h1>
              <div className='w-full lg:w-auto'>
                <div className='relative'>
                  <input
                    type='text'
                    placeholder='Tìm kiếm...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='w-full border-blue lg:w-64 pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                  />
                  <svg
                    className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className='overflow-x-auto'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-blue uppercase tracking-wider'
                    >
                      Id
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-blue uppercase tracking-wider'
                    >
                      Mã giao dịch
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-blue uppercase tracking-wider'
                    >
                      Thời gian
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-blue uppercase tracking-wider'
                    >
                      Ngày/Tháng/Năm
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-blue uppercase tracking-wider'
                    >
                      Nội dung
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-blue uppercase tracking-wider'
                    >
                      Tên
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-blue uppercase tracking-wider'
                    >
                      Tên Reader
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-blue uppercase tracking-wider'
                    >
                      Tình Trạng
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {filteredTransactions.map((transaction, index) => (
                    <tr key={transaction.id}>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{index + 1}</td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {transaction.id}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{transaction.startHour}</td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{transaction.date}</td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{transaction.packageName}</td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-900'>{transaction.customerName}</div>
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{transaction.readerName}</td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            transaction.status === 'Hủy giao dịch'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-green-100 text-green-800'
                          }`}
                        >
                          {transaction.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
