import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import HeaderAdmin from '../../../components/HeaderAdmin/HeaderAdmin'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Helmet } from 'react-helmet-async'

export default function QuanLiDichVuPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [addModalOpen, setAddModalOpen] = useState(false)
  const [currentService, setCurrentService] = useState<{
    index: number
    title: string
    price: string
    image: string | File
  } | null>(null)
  const [newService, setNewService] = useState({ title: '', price: '', image: null as File | null })
  const [services, setServices] = useState([
    {
      title: 'Gói trải bài theo câu hỏi đơn',
      price: '80,000',
      customerQuantity: 35,
      image:
        'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu1.png?alt=media&token=12abbf58-a6b5-49bd-b3dc-ef651627ac65'
    },
    {
      title: 'Gói trải bài theo chủ đề',
      price: '150,000',
      customerQuantity: 35,
      image:
        'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu2.png?alt=media&token=49bb52cf-fb56-4fec-8ce9-1a0871fd0c03'
    },
    {
      title: 'Gói trải bài tổng quan tuần',
      price: '150,000',
      customerQuantity: 35,
      image:
        'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu3.png?alt=media&token=a43de82a-7d11-48c8-9379-d458653ec429'
    },
    {
      title: 'Gói trải bài tổng quan tháng',
      price: '200,000',
      customerQuantity: 35,
      image:
        'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu4.png?alt=media&token=fc3fa146-6f09-4f1f-93a1-403f12914c01'
    },
    {
      title: 'Gói trải bài tổng quan tháng',
      price: '200,000',
      customerQuantity: 35,
      image:
        'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu5.png?alt=media&token=ee057e64-8f5a-4c49-b242-1dd29454e44f'
    },
    {
      title: 'Gói trải bài tổng quan tháng',
      price: '200,000',
      customerQuantity: 35,
      image:
        'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu6.png?alt=media&token=1b6cf251-c1a5-4524-819a-8cd0d0294ac2'
    },
    {
      title: 'Gói trải bài tổng quan tháng',
      price: '200,000',
      customerQuantity: 35,
      image:
        'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu7.png?alt=media&token=be506036-5928-4b28-b596-462ea5b0f957'
    }
  ])

  const dropdownRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const editFileInputRef = useRef<HTMLInputElement>(null)

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
      price: services[index].price,
      image: services[index].image
    })
    setEditModalOpen(true)
    setActiveDropdown(null)
  }

  const handleDeleteService = (index: number) => {
    setCurrentService({
      index,
      title: services[index].title,
      price: services[index].price,
      image: services[index].image
    })
    setDeleteModalOpen(true)
    setActiveDropdown(null)
  }

  const handleAddService = () => {
    setAddModalOpen(true)
  }

  const confirmEdit = () => {
    if (currentService) {
      if (!currentService.title || !currentService.price) {
        toast.error('Please fill in all fields before editing the service.')
        return
      }
      const updatedServices = [...services]
      updatedServices[currentService.index] = {
        ...updatedServices[currentService.index],
        title: currentService.title,
        price: currentService.price,
        image:
          typeof currentService.image === 'string' ? currentService.image : URL.createObjectURL(currentService.image)
      }
      setServices(updatedServices)
      setEditModalOpen(false)
      setCurrentService(null)
      toast.success('Update Service successfully!')
    }
  }

  const confirmDelete = () => {
    if (currentService) {
      const updatedServices = services.filter((_, i) => i !== currentService.index)
      if (updatedServices.length === services.length) {
        toast.error('Failed to delete the service. Please try again.')
      } else {
        setServices(updatedServices)
        setDeleteModalOpen(false)
        setCurrentService(null)
        toast.success('Delete Service successfully!')
      }
    }
  }

  const confirmAdd = () => {
    if (newService.title && newService.price && newService.image) {
      const imageUrl = URL.createObjectURL(newService.image)
      const updatedServices = [
        ...services,
        {
          ...newService,
          customerQuantity: 0,
          image: imageUrl
        }
      ]
      setServices(updatedServices)
      setAddModalOpen(false)
      setNewService({ title: '', price: '', image: null })
      toast.success('Add Service successfully!')
    } else {
      toast.error('Please fill in all fields before adding a service.')
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewService({ ...newService, image: e.target.files[0] })
    }
  }

  const handleEditImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && currentService) {
      setCurrentService({ ...currentService, image: e.target.files[0] })
    }
  }

  return (
    <>
      <Helmet>
        <title>Quản Lí Dịch Vụ - Starot</title>
        <meta name='description' content='Admin Quản Lí Dịch Vụ' />
        <link rel='canonical' href='https://starotvn.com/admin/quan-li-dich-vu' />
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
      <div className='min-h-screen bg-bg-admin pb-16 lg:px-0 px-5'>
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
          <div className='flex justify-end'>
            <button
              onClick={handleAddService}
              className='text-blue rounded-md w-full md:w-auto flex items-center hover:text-white justify-center'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-7 w-7 rounded-full border border-blue hover:bg-blue hover:border-blue p-1'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 3a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 01-2 0v-6H3a1 1 0 110-2h6V4a1 1 0 011-1z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
          <div className='overflow-x-auto'>
            <div className='container mx-auto p-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {filteredServices.map((service, index) => (
                  <div key={index} className='bg-white overflow-hidden'>
                    <div className='flex mb-10'>
                      <img src={service.image} alt={service.title} className='w-2/5 h-auto object-cover' />
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
                              Giá: <span className='text-blue'>{service.price} VND</span>
                            </p>
                            <p className='text-sm text-gray-500'>
                              Số khách hàng đã sử dụng:{' '}
                              <span className='text-blue lg:border border-blue p-1 ml-1 rounded-lg'>
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
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Image</label>
                <input
                  type='file'
                  accept='image/*'
                  ref={editFileInputRef}
                  onChange={handleEditImageUpload}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                {typeof currentService.image === 'string' && (
                  <img
                    src={currentService.image}
                    alt='Current service'
                    className='mt-2 w-full h-52 object-cover rounded-md'
                  />
                )}
                {currentService.image instanceof File && (
                  <img
                    src={URL.createObjectURL(currentService.image)}
                    alt='New service'
                    className='mt-2 w-full h-32 object-cover rounded-md'
                  />
                )}
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
              <div className='flex  justify-end space-x-2'>
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

        {addModalOpen && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white p-6 rounded-lg shadow-xl w-96'>
              <h2 className='text-xl font-bold mb-4'>Thêm Dịch Vụ Mới</h2>
              <div className='mb-4'>
                <label htmlFor='title' className='block text-sm font-medium text-gray-700 mb-2'>
                  Tiêu đề
                </label>
                <input
                  id='title'
                  type='text'
                  value={newService.title}
                  onChange={(e) => setNewService({ ...newService, title: e.target.value })}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Nhập tiêu đề dịch vụ'
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='price' className='block text-sm font-medium text-gray-700 mb-2'>
                  Giá
                </label>
                <input
                  id='price'
                  type='text'
                  value={newService.price}
                  onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Nhập giá dịch vụ'
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='image' className='block text-sm font-medium text-gray-700 mb-2'>
                  Hình ảnh
                </label>
                <input
                  id='image'
                  type='file'
                  accept='image/*'
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                {newService.image && (
                  <img
                    src={URL.createObjectURL(newService.image)}
                    alt='New service'
                    className='mt-2 w-full h-32 object-cover rounded-md'
                  />
                )}
              </div>
              <div className='flex justify-end space-x-2'>
                <button
                  onClick={() => setAddModalOpen(false)}
                  className='px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300'
                >
                  Hủy
                </button>
                <button
                  onClick={confirmAdd}
                  className='px-4 py-2 bg-blue text-white rounded-md hover:bg-blue-600'
                  disabled={!newService.title || !newService.price || !newService.image}
                >
                  Thêm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
