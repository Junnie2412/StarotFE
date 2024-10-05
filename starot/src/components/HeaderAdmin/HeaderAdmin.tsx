import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Admin } from '../../types/Admin.type'

interface HeaderAdminPageProps {
  admin: Admin
}

const HeaderAdmin: React.FC<HeaderAdminPageProps> = ({ admin }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleToggleDropdown = () => {
    setDropdownOpen((prev) => !prev)
  }

  const handleCloseDropdown = () => {
    setDropdownOpen(false)
  }

  return (
    <header className='bg-transparent'>
      <div className='container mx-auto px-4 py-6 flex justify-between items-center'>
        <div className='flex items-center'>
          <Link to='/' className='flex items-center space-x-3 rtl:space-x-reverse mr-10'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FLogoFullSize.png?alt=media&token=2829f02a-01bd-431e-bce1-9451b83b6272'
              className='h-8'
              alt='Starot Logo'
            />
          </Link>
          <nav className='hidden sm-md:flex'>
            <ul className='flex space-x-4'>
              <li>
                <a href='/admin/thong-ke' className='sm-md:text-xxs lg:text-base text-blue hover:text-blue-light'>
                  THỐNG KÊ
                </a>
              </li>
              <li>
                <a
                  href='/admin/quan-li-tai-khoan'
                  className='sm-md:text-xxs lg:text-base text-blue hover:text-blue-light'
                >
                  QUẢN LÝ TÀI KHOẢN
                </a>
              </li>
              <li>
                <a
                  href='/admin/quan-li-dich-vu'
                  className='sm-md:text-xxs lg:text-base text-blue hover:text-blue-light'
                >
                  QUẢN LÝ DỊCH VỤ
                </a>
              </li>
              <li>
                <a
                  href='/admin/quan-li-cua-hang'
                  className='sm-md:text-xxs lg:text-base text-blue hover:text-blue-light'
                >
                  QUẢN LÝ CỬA HÀNG
                </a>
              </li>
              <li>
                <a
                  href='/admin/quan-li-giao-dich'
                  className='sm-md:text-xxs lg:text-base text-blue hover:text-blue-light'
                >
                  QUẢN LÝ GIAO DỊCH
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='relative flex items-center'>
          <span className='mr-2 sm-md:text-xxs lg:text-base hidden sm-md:block text-blue'>{admin.FullName}</span>
          <button
            className='h-8 w-8 rounded-full focus:outline-none'
            onClick={handleToggleDropdown}
            onBlur={handleCloseDropdown}
            tabIndex={0}
          >
            <img src={`${admin.Avata}?height=32&width=32`} alt='User' className='h-full w-full rounded-full' />
          </button>
          {dropdownOpen && (
            <div className='absolute right-0 z-10 mt-1 w-48 bg-white border border-gray-300 rounded-lg shadow-lg'>
              <div className='px-4 py-3'>
                <span className='block text-xs text-gray-900'>{admin.FullName}</span>
                <span className='block text-xs text-gray-500 truncate'>{admin.Gmail}</span>
              </div>
              <ul className='py-2'>
                <li>
                  <Link
                    to='/admin/thong-ke'
                    className='block px-4 py-2 text-xs hover:text-blue-light hover:bg-gray-100'
                    onClick={handleCloseDropdown} // Close dropdown on link click
                  >
                    Thống Kê
                  </Link>
                </li>
                <li>
                  <Link
                    to='/admin/quan-li-tai-khoan'
                    className='block px-4 py-2 text-xs hover:text-blue-light hover:bg-gray-100'
                    onClick={handleCloseDropdown}
                  >
                    Quản Lí Tài Khoản
                  </Link>
                </li>
                <li>
                  <Link
                    to='/admin/quan-li-dich-vu'
                    className='block px-4 py-2 text-xs hover:text-blue-light hover:bg-gray-100'
                    onClick={handleCloseDropdown}
                  >
                    Quản Lí Dịch Vụ
                  </Link>
                </li>
                <li>
                  <Link
                    to='/admin/quan-li-cua-hang'
                    className='block px-4 py-2 text-xs hover:text-blue-light hover:bg-gray-100'
                    onClick={handleCloseDropdown}
                  >
                    Quản Lí Cửa Hàng
                  </Link>
                </li>
                <li>
                  <Link
                    to='/admin/quan-li-giao-dich'
                    className='block px-4 py-2 text-xs hover:text-blue-light hover:bg-gray-100'
                    onClick={handleCloseDropdown}
                  >
                    Quản Lí Giao Dịch
                  </Link>
                </li>
                <li>
                  <Link
                    to='/admin/login'
                    className='block px-4 py-2 text-xs hover:text-blue-light hover:bg-gray-100'
                    onClick={handleCloseDropdown}
                  >
                    Đăng Xuất
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
