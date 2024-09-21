import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='flex flex-wrap md:flex-nowrap md:px-10'>
      <div className='w-full md:w-4/5 px-10'>
        <div className=''>
          <Link to='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FLogoFullSize.png?alt=media&token=2829f02a-01bd-431e-bce1-9451b83b6272'
              className='h-10 md:mt-4'
              alt='Starot Logo'
            />
          </Link>
        </div>
      </div>

      <div className='hidden md:block w-full md:w-1/10 p-4'></div>

      <div className='w-full md:w-1/10 px-10'>
        <div className=' h-40 flex items-center justify-center rounded-md'>
          <div className='w-full flex flex-row'>
            <div className='bg-blue-200  mr-2 rounded-md w-1/2'>
              <Link to='' className='block text-blue-light md:mb-2' style={{ fontSize: 14 }}>
                VỀ STAROT
              </Link>
              <Link to='' className='block text-blue-light md:mb-2' style={{ fontSize: 14 }}>
                DỊCH VỤ
              </Link>
              <Link to='' className='block text-blue-light md:mb-2' style={{ fontSize: 14 }}>
                LIÊN HỆ
              </Link>
              <Link to='' className='block text-blue-light md:mb-2' style={{ fontSize: 14 }}>
                CHÍNH SÁCH
              </Link>
            </div>
            <div className=' rounded-md w-1/2'>
              <Link to='' className=' text-blue-light md:mb-2 block underline' style={{ fontSize: 14 }}>
                DOWNLOAD IOS
              </Link>
              <Link to='' className=' text-blue-light md:mb-2 block underline' style={{ fontSize: 14 }}>
                DOWNLOAD ANDROID
              </Link>
              <div className='w-full flex flex-row'>
                <div className='bg-blue-200  mr-2 rounded-md w-1/5'>
                  <Link to=''>
                    <img
                      src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FInstagramIcon.png?alt=media&token=00a767d8-a6a1-4d85-a326-ef51693d95eb'
                      className='h-4 md:mt-4 mt-4'
                      alt='Starot Logo'
                    />
                  </Link>
                </div>
                <div className='bg-blue-200  mr-2 rounded-md w-1/5'>
                  <Link to=''>
                    <img
                      src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FFacebookIcon.png?alt=media&token=497b9426-cde0-45e4-bd83-028c44483a5e'
                      className='h-4 md:mt-4 mt-4'
                      alt='Starot Logo'
                    />
                  </Link>
                </div>
                <div className='bg-blue-200  mr-2 rounded-md w-1/5'>
                  <Link to=''>
                    <img
                      src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FTikTokIcon.png?alt=media&token=128e6adc-ee35-4960-9284-a2dd5a27c191'
                      className='h-4 md:mt-4 mt-4'
                      alt='Starot Logo'
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
