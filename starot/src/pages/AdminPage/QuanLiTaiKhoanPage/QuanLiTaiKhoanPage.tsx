import { useEffect, useState } from 'react'
import HeaderAdmin from '../../../components/HeaderAdmin/HeaderAdmin'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import { User } from '../../../types/User.type'
import { Helmet } from 'react-helmet-async'

export default function QuanLiTaiKhoanPage() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://exestarotapi20241021202520.azurewebsites.net/api/v1/user')
        setUsers(response.data.data)
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }

    fetchUsers()
  }, [])

  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState('Mới nhất')
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState<(typeof users)[0] | null>(null)

  const filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id)
  }

  const handleDeleteUser = (user: (typeof users)[0]) => {
    setCurrentUser(user)
    setDeleteModalOpen(true)
    setActiveDropdown(null)
  }

  const confirmDelete = async () => {
    if (currentUser) {
      try {
        const response = await fetch(
          `https://exestarotapi20241021202520.azurewebsites.net/api/v1/user/${currentUser.id}`,
          {
            method: 'DELETE'
          }
        )

        if (response.ok) {
          const updatedUsers = users.filter((user) => user.id !== currentUser.id)
          setUsers(updatedUsers)
          setDeleteModalOpen(false)
          setCurrentUser(null)
          toast.success('User deleted successfully!')
        } else {
          toast.error('Failed to delete user.')
        }
      } catch (error) {
        console.error('Error deleting user:', error)
        toast.error('An error occurred while deleting the user.')
      }
    } else {
      toast.error('No user selected for deletion.')
    }
  }

  const sortedUsers = filteredUsers.sort((a, b) => {
    const dateA = a.dateOfBirth ? new Date(a.dateOfBirth).getTime() : -Infinity // Treat users without a date of birth as the oldest
    const dateB = b.dateOfBirth ? new Date(b.dateOfBirth).getTime() : -Infinity

    if (sortOrder === 'Mới nhất') {
      return dateB - dateA // Newest first
    } else {
      // Cũ nhất
      return dateA - dateB // Oldest first
    }
  })

  return (
    <>
      <Helmet>
        <title>Quản Lí Tài Khoản - Starot</title>
        <meta name='description' content='Admin Quản Lí Tài Khoản' />
        <link rel='canonical' href='https://starotvn.com/admin/quan-li-tai-khoan' />
      </Helmet>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />
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
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Tên
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Email
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    SĐT
                  </th>
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
                {sortedUsers.map((user) => (
                  <tr key={user.id}>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{user.id}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='flex items-center'>
                        <div className='flex-shrink-0 h-10 w-10'>
                          <img className='h-10 w-10 rounded-full' src={user.image} alt='' />
                        </div>
                        <div className='ml-4'>
                          <div className='text-sm font-medium text-gray-900'>
                            {user.firstName} {user.lastName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{user.email}</td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{user.phone}</td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{user.dateOfBirth}</td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-blue'>
                      <span
                        className={`px-2 inline-flex text-xs leading-5 rounded-full ${user.gender === 'Male' ? 'bg-blue text-white' : 'bg-pink-100 text-pink-800'}`}
                      >
                        {user.gender}
                      </span>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-blue'>
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${user.role === 'Admin' ? 'border border-blue text-blue-500' : ''}
                      ${user.role === 'Customer' ? 'border border-green-500 text-green-500' : ''}
                      ${user.role === 'Reader' ? 'border border-pink-500 text-pink-500' : ''}`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                      <div className='relative'>
                        <button
                          className='text-indigo-600 hover:text-indigo-900'
                          onClick={() => toggleDropdown(user.id)}
                        >
                          ...
                        </button>
                        {activeDropdown === user.id && (
                          <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200'>
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
    </>
  )
}
