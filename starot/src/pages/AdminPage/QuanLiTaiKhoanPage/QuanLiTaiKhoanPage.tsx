import { useState } from 'react'
import HeaderAdmin from '../../../components/HeaderAdmin/HeaderAdmin'

export default function QuanLiTaiKhoanPage() {
  const [users, setUsers] = useState([
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
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState('Mới nhất')
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState<(typeof users)[0] | null>(null)

  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const toggleDropdown = (id: number) => {
    setActiveDropdown(activeDropdown === id ? null : id)
  }

  const handleEditUser = (user: (typeof users)[0]) => {
    setCurrentUser(user)
    setEditModalOpen(true)
    setActiveDropdown(null)
  }

  const handleDeleteUser = (user: (typeof users)[0]) => {
    setCurrentUser(user)
    setDeleteModalOpen(true)
    setActiveDropdown(null)
  }

  const confirmEdit = () => {
    if (currentUser) {
      const updatedUsers = users.map((user) => (user.id === currentUser.id ? currentUser : user))
      setUsers(updatedUsers)
      setEditModalOpen(false)
      setCurrentUser(null)
    }
  }

  const confirmDelete = () => {
    if (currentUser) {
      const updatedUsers = users.filter((user) => user.id !== currentUser.id)
      setUsers(updatedUsers)
      setDeleteModalOpen(false)
      setCurrentUser(null)
    }
  }

  return (
    <div className='min-h-screen bg-gray-100 pb-16 lg:px-0 px-5'>
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
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Id</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Tên</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Email
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>SĐT</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Ngày sinh
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Giới tính
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  Vai trò
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'></th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{user.id}</td>
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
                        <div className='text-sm font-medium text-gray-900'>{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{user.email}</td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{user.phone}</td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{user.dob}</td>
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
                    <div className='relative'>
                      <button className='text-indigo-600 hover:text-indigo-900' onClick={() => toggleDropdown(user.id)}>
                        ...
                      </button>
                      {activeDropdown === user.id && (
                        <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200'>
                          <button
                            className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                            onClick={() => handleEditUser(user)}
                          >
                            Edit
                          </button>
                          <button
                            className='block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100'
                            onClick={() => handleDeleteUser(user)}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {editModalOpen && currentUser && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-xl w-96'>
            <h2 className='text-xl font-bold mb-4'>Edit User</h2>
            <div className='space-y-4'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>
                  Name
                </label>
                <input
                  id='name'
                  type='text'
                  value={currentUser.name}
                  onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                />
              </div>
              <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
                  Email
                </label>
                <input
                  id='email'
                  type='email'
                  value={currentUser.email}
                  onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                />
              </div>
              <div>
                <label htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-1'>
                  Phone
                </label>
                <input
                  id='phone'
                  type='tel'
                  value={currentUser.phone}
                  onChange={(e) => setCurrentUser({ ...currentUser, phone: e.target.value })}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                />
              </div>
              <div>
                <label htmlFor='dob' className='block text-sm font-medium text-gray-700 mb-1'>
                  Date of Birth
                </label>
                <input
                  id='dob'
                  type='date'
                  value={currentUser.dob}
                  onChange={(e) => setCurrentUser({ ...currentUser, dob: e.target.value })}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                />
              </div>
              <div>
                <label htmlFor='gender' className='block text-sm font-medium text-gray-700 mb-1'>
                  Gender
                </label>
                <select
                  id='gender'
                  value={currentUser.gender}
                  onChange={(e) => setCurrentUser({ ...currentUser, gender: e.target.value })}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                >
                  <option value='Nam'>Nam</option>
                  <option value='Nữ'>Nữ</option>
                </select>
              </div>
              <div>
                <label htmlFor='role' className='block text-sm font-medium text-gray-700 mb-1'>
                  Role
                </label>
                <select
                  id='role'
                  value={currentUser.role}
                  onChange={(e) => setCurrentUser({ ...currentUser, role: e.target.value })}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                >
                  <option value='Admin'>Admin</option>
                  <option value='Khách hàng'>Khách hàng</option>
                  <option value='Reader'>Reader</option>
                </select>
              </div>
            </div>
            <div className='mt-6 flex justify-end space-x-2'>
              <button
                onClick={() => setEditModalOpen(false)}
                className='px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500'
              >
                Cancel
              </button>
              <button
                onClick={confirmEdit}
                className='px-4 py-2  bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-xl w-96'>
            <h2 className='text-xl font-bold mb-4'>Confirm Deletion</h2>
            <p>Are you sure you want to delete this user?</p>
            <div className='mt-6 flex justify-end space-x-2'>
              <button
                onClick={() => setDeleteModalOpen(false)}
                className='px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500'
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className='px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500'
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
