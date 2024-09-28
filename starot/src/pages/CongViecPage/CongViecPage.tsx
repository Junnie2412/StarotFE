import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function CongViecPage() {
  const gridItems = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: `Item ${index + 1}`,
    content: `This is the content for item ${index + 1}.`
  }))
  return (
    <>
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
            <div className='px-0 lg:px-20 md:px-0 text-center'>
              <div className='container mx-auto px-10 lg:px-20 md:px-0'>
                <div className='grid grid-cols-2 md:grid-cols-5'>
                  {gridItems.map((item) => (
                    <div
                      key={item.id}
                      className='p-3 mb-10 transition duration-300 ease-in-out transform hover:scale-100'
                    >
                      <Link to='/tram-chua-lanh/cong-viec/ket-qua'>
                        <img
                          src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FTCLCongViec.png?alt=media&token=536afa44-e292-49b9-bb64-9e192d227b82'
                          alt='Featured Image'
                          className='w-full object-cover transition duration-300 ease-in-out transform hover:scale-110'
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}