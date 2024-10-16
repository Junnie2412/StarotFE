import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAdmin } from '../../context/AdminContext'

const HeaderAdmin: React.FC = () => {
  const { admin } = useAdmin()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  const closeDropdown = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', closeDropdown)
    return () => {
      document.removeEventListener('mousedown', closeDropdown)
    }
  }, [])

  if (!admin) {
    return null
  }

  const menuItems = [
    { title: 'THỐNG KÊ', href: '/admin/thong-ke' },
    { title: 'QUẢN LÝ TÀI KHOẢN', href: '/admin/quan-li-tai-khoan' },
    { title: 'QUẢN LÝ DỊCH VỤ', href: '/admin/quan-li-dich-vu' },
    { title: 'QUẢN LÝ CỬA HÀNG', href: '/admin/quan-li-cua-hang' },
    { title: 'QUẢN LÝ GIAO DỊCH', href: '/admin/quan-li-giao-dich' }
  ]

  return (
    <header>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <div className='flex items-center space-x-8'>
          <Link to='/' className='flex items-center space-x-2'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FLogoFullSize.png?alt=media&token=2829f02a-01bd-431e-bce1-9451b83b6272'
              alt='Starot Logo'
              className='h-8 w-auto'
            />
          </Link>
          <nav className='hidden md:flex space-x-4'>
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className='sm-md:text-xxs lg:text-base font-medium text-blue hover:text-blue-light transition-colors'
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className='relative' ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className='flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-blue-600 focus:outline-none'
            aria-expanded={dropdownOpen}
            aria-haspopup='true'
          >
            <img
              src={`${admin.image}?height=32&width=32`}
              alt={admin.firstName}
              className='h-8 w-8 rounded-full object-cover'
            />
            <span className='hidden sm-md:inline-block'>
              {admin.firstName} {admin.lastName}
            </span>
            <svg className='h-4 w-4 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
              <path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
            </svg>
          </button>
          {dropdownOpen && (
            <div className='absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10'>
              <div className='p-4 border-b'>
                <p className='text-sm font-medium text-gray-900'>
                  {admin.firstName} {admin.lastName}
                </p>
                <p className='text-sm text-gray-500'>{admin.email}</p>
              </div>
              <ul className='py-2'>
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className='block px-4 py-2 text-sm text-blue hover:bg-gray-100'
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to='/admin'
                    className='block px-4 py-2 text-sm text-red-600 hover:bg-gray-100'
                    onClick={() => setDropdownOpen(false)}
                  >
                    <div className='flex items-center space-x-2'>
                      <svg
                        className='h-4 w-4'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                        />
                      </svg>
                      <span>Đăng Xuất</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default HeaderAdmin
