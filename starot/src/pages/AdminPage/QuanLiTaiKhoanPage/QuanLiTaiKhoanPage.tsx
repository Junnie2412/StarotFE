import { useState } from 'react'
import HeaderAdmin from '../../../components/HeaderAdmin/HeaderAdmin'

export default function QuanLiTaiKhoanPage() {
  const users = [
    {
      id: 1,
      name: 'Khang',
      email: 'user1@gmail.com',
      phone: '0346589167',
      dob: '06/05/2003',
      gender: 'Nam',
      role: 'Admin'
    },
    {
      id: 2,
      name: 'Kiên',
      email: 'user2@gmail.com',
      phone: '0346589167',
      dob: '06/05/2003',
      gender: 'Nữ',
      role: 'Khách hàng'
    },
    {
      id: 3,
      name: 'Phước',
      email: 'user3@gmail.com',
      phone: '0346589167',
      dob: '06/05/2003',
      gender: 'Nữ',
      role: 'Reader'
    },
    {
      id: 4,
      name: 'Nam',
      email: 'user4@gmail.com',
      phone: '0346589167',
      dob: '06/05/2003',
      gender: 'Nữ',
      role: 'Khách hàng'
    },
    {
      id: 5,
      name: 'Hải',
      email: 'user5@gmail.com',
      phone: '0346589167',
      dob: '06/05/2003',
      gender: 'Nữ',
      role: 'Reader'
    },
    {
      id: 6,
      name: 'Nhu',
      email: 'user6@gmail.com',
      phone: '0346589167',
      dob: '06/05/2003',
      gender: 'Nam',
      role: 'Admin'
    },
    {
      id: 7,
      name: 'Thảo',
      email: 'user7@gmail.com',
      phone: '0346589167',
      dob: '06/05/2003',
      gender: 'Nữ',
      role: 'Khách hàng'
    },
    {
      id: 8,
      name: 'Vũ',
      email: 'user8@gmail.com',
      phone: '0346589167',
      dob: '06/05/2003',
      gender: 'Nam',
      role: 'Khách hàng'
    },
    {
      id: 9,
      name: 'Tâm',
      email: 'user9@gmail.com',
      phone: '0346589167',
      dob: '06/05/2003',
      gender: 'Nam',
      role: 'Khách hàng'
    },
    {
      id: 10,
      name: 'Lài',
      email: 'user10@gmail.com',
      phone: '0346589167',
      dob: '06/05/2003',
      gender: 'Nữ',
      role: 'Khách hàng'
    }
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState('Mới nhất')

  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className='min-h-screen bg-bg-admin pb-16 lg:px-0 px-5'>
      <HeaderAdmin />
      <main className='container mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg lg:p-16'>
        <div className='flex flex-col lg:flex-row justify-between mb-6 lg:space-x-4'>
          <h1 className='text-2xl font-bold text-indigo-700 mb-6'>QUẢN LÍ TÀI KHOẢN</h1>
          <div className='flex flex-col md:flex-row justify-between mb-4 space-y-4 md:space-y-0'>
            <div className='relative lg:mr-5 mr-0'>
              <input
                type='text'
                placeholder='Tìm kiếm...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full md:w-auto'
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
            <div className='relative'>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className='appearance-none bg-white border rounded-md py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full md:w-auto'
              >
                <option>Mới nhất</option>
                <option>Cũ nhất</option>
              </select>
              <svg
                className='absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M19 9l-7 7-7-7'></path>
              </svg>
            </div>
          </div>
        </div>
        <div className='overflow-x-auto'>
          <table className='min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden border-collapse'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-blue-light uppercase tracking-wider'>Id</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-blue-light uppercase tracking-wider'>
                  Tên
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-blue-light uppercase tracking-wider'>
                  Email
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-blue-light uppercase tracking-wider'>
                  SĐT
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-blue-light uppercase tracking-wider'>
                  Ngày sinh
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-blue-light uppercase tracking-wider'>
                  Giới tính
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-blue-light uppercase tracking-wider'>
                  Vai trò
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-blue-light uppercase tracking-wider'></th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-blue-light'>{user.id}</td>
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
                        <div className='text-sm font-medium text-blue'>{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-blue'>{user.email}</td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-blue'>{user.phone}</td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-blue'>{user.dob}</td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-blue'>
                    <span
                      className={`px-2 inline-flex text-xs leading-5 rounded-full ${user.gender === 'Nam' ? 'bg-blue text-white' : 'bg-pink-100 text-pink-800'}`}
                    >
                      {user.gender}
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-blue'>
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${user.role === 'Admin' ? 'border border-blue text-blue-500' : ''}
                      ${user.role === 'Khách hàng' ? 'border border-green-500 text-green-500' : ''}
                      ${user.role === 'Reader' ? 'border border-pink-500 text-pink-500' : ''}`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                    <button className='text-indigo-600 hover:text-indigo-900'>...</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
