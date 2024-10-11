import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import HeaderAdmin from '../../../components/HeaderAdmin/HeaderAdmin'

export default function QuanLiDichVuPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [currentService, setCurrentService] = useState<{ index: number; title: string; price: string } | null>(null)
  const [services, setServices] = useState([
    {
      title: 'Gói trải bài theo câu hỏi đơn',
      price: '80,000 VND',
      customerQuantity: 35,
      image:
        'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu1.png?alt=media&token=12abbf58-a6b5-49bd-b3dc-ef651627ac65'
    },
    {
      title: 'Gói trải bài theo chủ đề',
      price: '150,000 VND',
      customerQuantity: 35,
      image:
        'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu2.png?alt=media&token=49bb52cf-fb56-4fec-8ce9-1a0871fd0c03'
    },
    {
      title: 'Gói trải bài tổng quan tuần',
      price: '150,000 VND',
      customerQuantity: 35,
      image:
        'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu3.png?alt=media&token=a43de82a-7d11-48c8-9379-d458653ec429'
    },
    {
      title: 'Gói trải bài tổng quan tháng',
      price: '200,000 VND',
      customerQuantity: 35,
      image:
        'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu4.png?alt=media&token=fc3fa146-6f09-4f1f-93a1-403f12914c01'
    },
    {
      title: 'Gói trải bài tổng quan tháng',
      price: '200,000 VND',
      customerQuantity: 35,
      image:
        'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu5.png?alt=media&token=ee057e64-8f5a-4c49-b242-1dd29454e44f'
    },
    {
      title: 'Gói trải bài tổng quan tháng',
      price: '200,000 VND',
      customerQuantity: 35,
      image:
        'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu6.png?alt=media&token=1b6cf251-c1a5-4524-819a-8cd0d0294ac2'
    },
    {
      title: 'Gói trải bài tổng quan tháng',
      price: '200,000 VND',
      customerQuantity: 35,
      image:
        'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu7.png?alt=media&token=be506036-5928-4b28-b596-462ea5b0f957'
    }
  ])

  const dropdownRef = useRef<HTMLDivElement>(null)

  const filteredServices = services.filter((service) => service.title.toLowerCase().includes(searchTerm.toLowerCase()))

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  const handleEditService = (index: number) => {
    setCurrentService({
      index,
      title: services[index].title,
      price: services[index].price
    })
    setEditModalOpen(true)
    setActiveDropdown(null)
  }

  const handleDeleteService = (index: number) => {
    setCurrentService({
      index,
      title: services[index].title,
      price: services[index].price
    })
    setDeleteModalOpen(true)
    setActiveDropdown(null)
  }

  const confirmEdit = () => {
    if (currentService) {
      const updatedServices = [...services]
      updatedServices[currentService.index] = {
        ...updatedServices[currentService.index],
        title: currentService.title,
        price: currentService.price
      }
      setServices(updatedServices)
      setEditModalOpen(false)
      setCurrentService(null)
    }
  }

  const confirmDelete = () => {
    if (currentService) {
      const updatedServices = services.filter((_, i) => i !== currentService.index)
      setServices(updatedServices)
      setDeleteModalOpen(false)
      setCurrentService(null)
    }
  }

  return (
    <div className='min-h-screen bg-bg-admin'>
      <HeaderAdmin />
      <div className='container mx-auto p-6 bg-white rounded-lg shadow-lg lg:p-16 my-20'>
        <div className='flex flex-col lg:flex-row justify-between mb-6 lg:space-x-4'>
          <h1 className='text-2xl font-bold text-indigo-700 mb-6'>QUẢN LÍ DỊCH VỤ</h1>
          <div className='flex flex-col md:flex-row justify-between mb-4 space-y-4 md:space-y-0'>
            <div className='relative lg:mr-5 mr-0'>
              <input
                type='text'
                placeholder='Tìm kiếm...'
                className='pl-10 pr-4 py-2 border border-blue rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full md:w-auto placeholder-blue-500'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-400'
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
              <Link to='/admin/quan-li-dich-vu/lich-su-dich-vu'>
                <button className='bg-white border text-blue border-blue rounded-md w-full md:w-auto py-2 px-10 hover:bg-blue hover:text-white'>
                  Lịch Sử Dịch Vụ
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className='overflow-x-auto'>
          <div className='container mx-auto p-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {filteredServices.map((service, index) => (
                <div key={index} className='bg-white overflow-hidden'>
                  <div className='flex mb-10'>
                    <img src={service.image} alt='' className='w-2/5 h-auto' />
                    <div className='w-2/3 p-4 lg:pb-4 md:pb-1 pb-1 flex flex-col justify-end'>
                      <div className='bg-white border border-gray-200 rounded-lg p-4 shadow-sm relative'>
                        <div className='absolute top-2 right-2'>
                          <button className='text-gray-400 hover:text-gray-600' onClick={() => toggleDropdown(index)}>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-5 w-5'
                              viewBox='0 0 20 20'
                              fill='currentColor'
                            >
                              <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                            </svg>
                          </button>
                          {activeDropdown === index && (
                            <div
                              ref={dropdownRef}
                              className='absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10 border border-gray-200'
                            >
                              <button
                                className='block w-full text-left text-base px-4 py-2 text-blue hover:bg-gray-200'
                                onClick={() => handleEditService(index)}
                              >
                                Edit
                              </button>
                              <button
                                className='block w-full text-left text-base px-4 py-2 text-red-700 hover:bg-gray-200'
                                onClick={() => handleDeleteService(index)}
                              >
                                Delete
                              </button>
                            </div>
                          )}
                        </div>
                        <h3 className='text-xl text-blue mb-2'>{service.title}</h3>
                        <hr className='border-gray-300 my-2' />
                        <div className='space-y-1'>
                          <p className='text-sm text-gray-500'>
                            Giá: <span className=' text-blue'>{service.price}</span>
                          </p>
                          <p className='text-sm text-gray-500'>
                            Số khách hàng đã sử dụng:{' '}
                            <span className='  text-blue lg:border border-blue p-1 ml-1 rounded-lg'>
                              {service.customerQuantity}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {editModalOpen && currentService && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-xl w-96'>
            <h2 className='text-xl font-bold mb-4'>Edit Service</h2>
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Title</label>
              <input
                type='text'
                value={currentService.title}
                onChange={(e) => setCurrentService({ ...currentService, title: e.target.value })}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Price</label>
              <input
                type='text'
                value={currentService.price}
                onChange={(e) => setCurrentService({ ...currentService, price: e.target.value })}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div className='flex justify-end space-x-2'>
              <button
                onClick={() => setEditModalOpen(false)}
                className='px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300'
              >
                Cancel
              </button>
              <button onClick={confirmEdit} className='px-4 py-2 bg-blue text-white rounded-md hover:bg-blue-600'>
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteModalOpen && currentService && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-xl w-96'>
            <h2 className='text-xl font-bold mb-4'>Confirm Deletion</h2>
            <p className='mb-4'>
              Are you sure you want to delete <span className='text-blue'>"{currentService.title}"</span>?
            </p>
            <div className='flex justify-end space-x-2'>
              <button
                onClick={() => setDeleteModalOpen(false)}
                className='px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300'
              >
                Cancel
              </button>
              <button onClick={confirmDelete} className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600'>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
