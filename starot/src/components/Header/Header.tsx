import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <nav className='bg-transparent border-gray-200 relative'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link to='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <img
            src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FLogoFullSize.png?alt=media&token=2829f02a-01bd-431e-bce1-9451b83b6272'
            className='h-8'
            alt='Starot Logo'
          />
        </Link>
        <button
          onClick={toggleMenu}
          type='button'
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-blue rounded-lg md:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-default'
          aria-expanded={isOpen}
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-5 h-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>
        <div className={`md:hidden w-full ${isOpen ? '' : 'hidden'}`} id='navbar-default'>
          <ul className='font-medium flex flex-col p-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white'>
            <li>
              <Link
                to='/tram-chua-lanh'
                className='block py-2 px-3 text-blue rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-blue dark:hover:text-white md:dark:hover:bg-transparent'
              >
                TRẠM CHỮA LÀNH
              </Link>
            </li>
            <li>
              <Link
                to='/dich-vu'
                className='block py-2 px-3 text-blue rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-blue dark:hover:text-white md:dark:hover:bg-transparent'
              >
                DỊCH VỤ
              </Link>
            </li>
            <li>
              <Link
                to='/blog'
                className='block py-2 px-3 text-blue rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-blue dark:hover:text-white md:dark:hover:bg-transparent'
              >
                BLOG
              </Link>
            </li>
            <li>
              <Link
                to='/lien-he'
                className='block py-2 px-3 text-blue rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-blue dark:hover:text-white md:dark:hover:bg-transparent'
              >
                LIÊN HỆ
              </Link>
            </li>
          </ul>
        </div>
        <div className='hidden md:flex md:space-x-8'>
          <Link
            to='/tram-chua-lanh'
            className='block py-2 px-3 text-blue rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue md:dark:hover:bg-transparent'
          >
            TRẠM CHỮA LÀNH
          </Link>
          <Link
            to='/dich-vu'
            className='block py-2 px-3 text-blue rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue md:dark:hover:bg-transparent'
          >
            DỊCH VỤ
          </Link>
          <Link
            to='/blog'
            className='block py-2 px-3 text-blue rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue md:dark:hover:bg-transparent'
          >
            BLOG
          </Link>
          <Link
            to='/lien-he'
            className='block py-2 px-3 text-blue rounded md:bg-transparent md:text-blue md:p-0 md:dark:text-blue'
            aria-current='page'
          >
            LIÊN HỆ
          </Link>
        </div>
      </div>
    </nav>
  )
}
