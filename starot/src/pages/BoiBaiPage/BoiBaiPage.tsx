import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Helmet } from 'react-helmet-async'

export default function BoiBaiPage() {
  return (
    <>
      <Helmet>
        <title>Trạm Chữa Lành - Starot</title>
        <meta
          name='description'
          content='Ngày hôm nay của bạn thế nào?

Mong những lá bài này có thể xoa dịu tâm hồn bạn ^^'
        />
        <link rel='canonical' href='https://starotvn.com/tram-chua-lanh' />
      </Helmet>
      <div
        className='bg-cover bg-no-repeat flex flex-col min-h-screen'
        style={{
          backgroundImage:
            "url('https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FLienHeBG.png?alt=media&token=de7de1d4-a5d0-4b54-9ebc-499de1950d15')",
          backgroundSize: 'cover',
          backgroundPosition: 'top'
        }}
      >
        <Header />
        <main className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:px-20 pt-7 pb-16 flex-grow'>
          <div className='flex justify-center mt-5'>
            <div className='p-6 text-center'>
              <div className='container mx-auto p-4 lg:px-20'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  <div className='transition duration-300 ease-in-out transform hover:scale-95 hover:shadow-lg'>
                    <div className='h-100 flex items-center justify-center rounded-md overflow-hidden'>
                      <Link to='/tram-chua-lanh/tinh-yeu'>
                        <img
                          src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FTinhYeu.png?alt=media&token=e2e02420-e60d-49f8-a2f2-4eef2a618a6a'
                          alt='Featured Image'
                          className='w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-110'
                        />
                      </Link>
                    </div>
                  </div>
                  <div className='transition duration-300 ease-in-out transform hover:scale-95 hover:shadow-lg'>
                    <div className='h-100 flex items-center justify-center rounded-md overflow-hidden'>
                      <Link to='/tram-chua-lanh/cong-viec'>
                        <img
                          src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FCongViec.png?alt=media&token=17d98878-7d97-41dd-9dca-57e5aa3c8aa1'
                          alt='Featured Image'
                          className='w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-110'
                        />
                      </Link>
                    </div>
                  </div>
                  <div className='transition duration-300 ease-in-out transform hover:scale-95 hover:shadow-lg'>
                    <div className='h-100 flex items-center justify-center rounded-md overflow-hidden'>
                      <Link to='/tram-chua-lanh/suc-khoe'>
                        <img
                          src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FSucKhoe.png?alt=media&token=616fa415-4a57-48c4-8dff-912358c71dbe'
                          alt='Featured Image'
                          className='w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-110'
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-10'>
            <h1 className='font-bold text-blue text-center mb-5' style={{ fontSize: 25 }}>
              TRẠM CHỮA LÀNH
            </h1>
            <p className='text-center text-blue-light'>Ngày hôm nay của bạn thế nào?</p>
            <p className='text-center text-blue-light mb-32'>Mong những lá bài này có thể xoa dịu tâm hồn bạn ^^</p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
