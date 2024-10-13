import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import HeaderAdmin from '../../../components/HeaderAdmin/HeaderAdmin'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function QuanLiCuaHangPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [addModalOpen, setAddModalOpen] = useState(false)
  const [currentProduct, setCurrentProduct] = useState<{
    index: number
    title: string
    price: string
    image: string | File
  } | null>(null)
  const [newProduct, setNewProduct] = useState({ title: '', price: '', image: null as File | null })
  const [products, setProducts] = useState([
    {
      title: 'Red Jasper',
      price: '80,000',
      customerQuantity: 35,
      image:
        'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FQLCHRedJasper.png?alt=media&token=f8c01ff4-6682-4e60-94b7-23eb0e75db37'
    },
    {
      title: 'Amethyst',
      price: '150,000',
      customerQuantity: 35,
      image:
        'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FQLCHAmethyst.png?alt=media&token=122a84c0-4237-4bf4-a888-95a42f675c19'
    },
    {
      title: 'Aquamarine',
      price: '150,000',
      customerQuantity: 35,
      image:
        'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FQLCHAquamarine.png?alt=media&token=305ce7eb-256f-4972-844b-2114f2cfee3a'
    },
    {
      title: 'Citrine',
      price: '200,000',
      customerQuantity: 35,
      image:
        'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FQLCHCitrine.png?alt=media&token=39c1c854-29d0-45b5-9866-e384e4b82592'
    },
    {
      title: 'Clear Quartz',
      price: '200,000',
      customerQuantity: 35,
      image:
        'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FQLCHClearQuartz.png?alt=media&token=90ca8236-8af6-4ee5-817a-dafe9900b5f0'
    },
    {
      title: 'Moonstone',
      price: '200,000',
      customerQuantity: 35,
      image:
        'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FQLCHMoonstone.png?alt=media&token=e06cafde-317c-4dcb-8c29-96e698aa7ccf'
    },
    {
      title: 'Rhodochrosite',
      price: '200,000',
      customerQuantity: 35,
      image:
        'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FQLCHRhodochrosite.png?alt=media&token=30d050b2-9dc4-4525-989d-959a5534cece'
    },
    {
      title: 'Amber',
      price: '200,000',
      customerQuantity: 35,
      image:
        'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FQLCHAmber.png?alt=media&token=4cdb1e80-1a63-46f1-a703-f75051883a33'
    }
  ])

  const dropdownRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const editFileInputRef = useRef<HTMLInputElement>(null)

  const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()))

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

  const handleEditProduct = (index: number) => {
    setCurrentProduct({
      index,
      title: products[index].title,
      price: products[index].price,
      image: products[index].image
    })
    setEditModalOpen(true)
    setActiveDropdown(null)
  }

  const handleDeleteProduct = (index: number) => {
    setCurrentProduct({
      index,
      title: products[index].title,
      price: products[index].price,
      image: products[index].image
    })
    setDeleteModalOpen(true)
    setActiveDropdown(null)
  }

  const handleAddProduct = () => {
    setAddModalOpen(true)
  }

  const confirmEdit = () => {
    if (currentProduct) {
      if (!currentProduct.title || !currentProduct.price) {
        toast.error('Please fill in all fields before editing the product.')
        return
      }
      const updatedProducts = [...products]
      updatedProducts[currentProduct.index] = {
        ...updatedProducts[currentProduct.index],
        title: currentProduct.title,
        price: currentProduct.price,
        image:
          typeof currentProduct.image === 'string' ? currentProduct.image : URL.createObjectURL(currentProduct.image)
      }
      setProducts(updatedProducts)
      setEditModalOpen(false)
      setCurrentProduct(null)
      toast.success('Update Product successfully!')
    }
  }

  const confirmDelete = () => {
    if (currentProduct) {
      const updatedProducts = products.filter((_, i) => i !== currentProduct.index)
      if (updatedProducts.length === products.length) {
        toast.error('Failed to delete the product. Please try again.')
      } else {
        setProducts(updatedProducts)
        setDeleteModalOpen(false)
        setCurrentProduct(null)
        toast.success('Delete Product successfully!')
      }
    }
  }

  const confirmAdd = () => {
    if (newProduct.title && newProduct.price && newProduct.image) {
      const imageUrl = URL.createObjectURL(newProduct.image)
      const updatedProducts = [
        ...products,
        {
          ...newProduct,
          customerQuantity: 0,
          image: imageUrl
        }
      ]
      setProducts(updatedProducts)
      setAddModalOpen(false)
      setNewProduct({ title: '', price: '', image: null })
      toast.success('Add Product successfully!')
    } else {
      toast.error('Please fill in all fields before adding a product.')
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewProduct({ ...newProduct, image: e.target.files[0] })
    }
  }

  const handleEditImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && currentProduct) {
      setCurrentProduct({ ...currentProduct, image: e.target.files[0] })
    }
  }

  return (
    <>
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
            <h1 className='text-2xl font-bold text-indigo-700 mb-6'>QUẢN LÍ CỬA HÀNG</h1>
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
                <Link to='/admin/quan-li-cua-hang/lich-su-cua-hang'>
                  <button className='bg-white border text-blue border-blue rounded-md w-full md:w-auto py-2 px-10 hover:bg-blue hover:text-white'>
                    Lịch Sử Cửa Hàng
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className='flex justify-end'>
            <button
              onClick={handleAddProduct}
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
                {filteredProducts.map((product, index) => (
                  <div key={index} className='bg-white overflow-hidden'>
                    <div className='flex mb-10'>
                      <img src={product.image} alt='' className='w-1/3 lg:w-1/4 h-auto' />
                      <div className='w-2/3 pl-4 pt-4 lg:pb-0 flex flex-col justify-end'>
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
                                  onClick={() => handleEditProduct(index)}
                                >
                                  Edit
                                </button>
                                <button
                                  className='block w-full text-left text-base px-4 py-2 text-red-700 hover:bg-gray-200'
                                  onClick={() => handleDeleteProduct(index)}
                                >
                                  Delete
                                </button>
                              </div>
                            )}
                          </div>
                          <h3 className='text-xl text-blue mb-2'>{product.title}</h3>
                          <hr className='border-gray-300 my-2' />
                          <div className='space-y-1'>
                            <p className='text-sm text-gray-500'>
                              Giá: <span className='text-blue'>{product.price} VND</span>
                            </p>
                            <p className='text-sm text-gray-500'>
                              Số khách hàng đã sử dụng:{' '}
                              <span className='text-blue lg:border border-blue p-1 ml-1 rounded-lg'>
                                {product.customerQuantity}
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

        {editModalOpen && currentProduct && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white p-6 rounded-lg shadow-xl w-96'>
              <h2 className='text-xl font-bold mb-4'>Edit Product</h2>
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Title</label>
                <input
                  type='text'
                  value={currentProduct.title}
                  onChange={(e) => setCurrentProduct({ ...currentProduct, title: e.target.value })}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Price</label>
                <input
                  type='text'
                  value={currentProduct.price}
                  onChange={(e) => setCurrentProduct({ ...currentProduct, price: e.target.value })}
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
                {typeof currentProduct.image === 'string' && (
                  <img
                    src={currentProduct.image}
                    alt='Current product'
                    className='mt-2 w-full h-52 object-cover rounded-md'
                  />
                )}
                {currentProduct.image instanceof File && (
                  <img
                    src={URL.createObjectURL(currentProduct.image)}
                    alt='New product'
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

        {deleteModalOpen && currentProduct && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white p-6 rounded-lg shadow-xl w-96'>
              <h2 className='text-xl font-bold mb-4'>Confirm Deletion</h2>
              <p className='mb-4'>
                Are you sure you want to delete <span className='text-blue'>"{currentProduct.title}"</span>?
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
              <h2 className='text-xl font-bold mb-4'>Thêm Sản Phẩm Mới</h2>
              <div className='mb-4'>
                <label htmlFor='title' className='block text-sm font-medium text-gray-700 mb-2'>
                  Tiêu đề
                </label>
                <input
                  id='title'
                  type='text'
                  value={newProduct.title}
                  onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Nhập tiêu đề sản phẩm'
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='price' className='block text-sm font-medium text-gray-700 mb-2'>
                  Giá
                </label>
                <input
                  id='price'
                  type='text'
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Nhập giá sản phẩm'
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
                {newProduct.image && (
                  <img
                    src={URL.createObjectURL(newProduct.image)}
                    alt='New product'
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
                  disabled={!newProduct.title || !newProduct.price || !newProduct.image}
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
