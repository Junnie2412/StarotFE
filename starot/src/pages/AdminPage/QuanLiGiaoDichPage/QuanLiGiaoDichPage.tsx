import { useState } from 'react'

export default function QuanLiGiaoDichPage() {
  const transactions = [
    {
      id: '#15270',
      date: '16/06/2024',
      service: 'Gói trải bài tổng quan tuần',
      amount: '150,000 VND',
      user: 'Khang',
      email: 'user1@gmail.com',
      status: 'Hủy giao dịch'
    },
    {
      id: '#15271',
      date: '16/06/2024',
      service: 'Red Jasper x1 Aquamarine x1',
      amount: '100,000 VND',
      user: 'Kiên',
      email: 'user2@gmail.com',
      status: 'Thành công'
    },
    {
      id: '#15272',
      date: '8/06/2024',
      service: 'Gói trải bài tổng quan tháng',
      amount: '300,000 VND',
      user: 'Phước',
      email: 'user3@gmail.com',
      status: 'Thành công'
    },
    {
      id: '#15273',
      date: '16/06/2024',
      service: 'Gói trải bài tổng quan năm',
      amount: '400,000 VND',
      user: 'Nam',
      email: 'user4@gmail.com',
      status: 'Thành công'
    },
    {
      id: '#15274',
      date: '16/06/2024',
      service: 'Citrine x3',
      amount: '150,000 VND',
      user: 'Hải',
      email: 'user5@gmail.com',
      status: 'Thành công'
    },
    {
      id: '#15275',
      date: '16/06/2024',
      service: 'Gói trải bài theo câu hỏi đơn',
      amount: '80,000 VND',
      user: 'Nhu',
      email: 'user6@gmail.com',
      status: 'Thành công'
    },
    {
      id: '#15276',
      date: '16/06/2024',
      service: 'Gói trải bài tổng quan tuần',
      amount: '150,000 VND',
      user: 'Thảo',
      email: 'user7@gmail.com',
      status: 'Thành công'
    },
    {
      id: '#15277',
      date: '16/06/2024',
      service: 'Gói trải bài tổng quan tháng',
      amount: '200,000 VND',
      user: 'Vũ',
      email: 'user8@gmail.com',
      status: 'Hủy giao dịch'
    },
    {
      id: '#15278',
      date: '16/06/2024',
      service: 'Amethyst x1',
      amount: '110,000 VND',
      user: 'Tâm',
      email: 'user9@gmail.com',
      status: 'Hủy giao dịch'
    },
    {
      id: '#15279',
      date: '16/06/2024',
      service: 'Gói trải bài tổng quan tháng',
      amount: '200,000 VND',
      user: 'Lài',
      email: 'user10@gmail.com',
      status: 'Thành công'
    }
  ]

  const [searchTerm, setSearchTerm] = useState('')

  const filteredTransactions = transactions.filter((transaction) =>
    Object.values(transaction).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className='min-h-screen bg-gray-100 p-4 lg:p-8'>
      <div className='max-w-8xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden'>
        <div className='p-6 lg:p-8'>
          <div className='flex flex-col lg:flex-row justify-between items-center mb-6'>
            <h1 className='text-2xl font-bold text-indigo-700 mb-4 lg:mb-0 lg:py-10'>QUẢN LÍ GIAO DỊCH</h1>
            <div className='w-full lg:w-auto'>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Tìm kiếm...'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className='w-full lg:w-64 pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
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
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    Mã giao dịch
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    Thời gian
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    Ngày/Tháng/Năm
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    Nội dung
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    Tổng tiền
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    Tên
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    Email
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    Trạng thái
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    Phản hồi
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {filteredTransactions.map((transaction, index) => (
                  <tr key={transaction.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{transaction.id}</td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>12:00</td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{transaction.date}</td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{transaction.service}</td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{transaction.amount}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='flex items-center'>
                        <div className='flex-shrink-0 h-10 w-10'>
                          <img
                            className='h-10 w-10 rounded-full'
                            src='https://cdn.lazi.vn/storage/uploads/users/avatar/1657860236_lazi_540871.jpg'
                            alt=''
                          />
                        </div>
                        <div className='ml-4'>
                          <div className='text-sm font-medium text-gray-900'>{transaction.user}</div>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{transaction.email}</td>
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
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                      <button className='text-indigo-600 hover:text-indigo-900 bg-indigo-100 px-2 py-1 rounded'>
                        {transaction.status === 'Đã giao dịch' ? 'Hoàn tiền' : 'Toàn tiền'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
