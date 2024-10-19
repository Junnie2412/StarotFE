import { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Helmet } from 'react-helmet-async'

interface ServiceImage {
  src: string
  alt: string
}

const serviceImages: ServiceImage[] = [
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu1.png?alt=media&token=12abbf58-a6b5-49bd-b3dc-ef651627ac65',
    alt: 'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu1Hover.png?alt=media&token=8b5d3f54-28f0-4dbf-9cc0-f30587daaac0'
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu2.png?alt=media&token=49bb52cf-fb56-4fec-8ce9-1a0871fd0c03',
    alt: 'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu2Hover.png?alt=media&token=76369856-e36a-4d29-b1d2-66940bd1cb49'
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu3.png?alt=media&token=a43de82a-7d11-48c8-9379-d458653ec429',
    alt: 'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu3Hover.png?alt=media&token=cb9c50e2-fd40-46d6-8583-0a87e51d99d4'
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu4.png?alt=media&token=fc3fa146-6f09-4f1f-93a1-403f12914c01',
    alt: 'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu4hover.png?alt=media&token=9f166e9a-69c0-4603-92e0-b9c8b03e5ed6'
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu5.png?alt=media&token=ee057e64-8f5a-4c49-b242-1dd29454e44f',
    alt: 'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu5Hover.png?alt=media&token=52959baa-55db-404c-a589-f883d67fe8ef'
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu6.png?alt=media&token=1b6cf251-c1a5-4524-819a-8cd0d0294ac2',
    alt: 'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu6Hover.png?alt=media&token=0b1bb419-4c64-4463-ae84-79a09c4cedd7'
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu7.png?alt=media&token=be506036-5928-4b28-b596-462ea5b0f957',
    alt: 'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVu7Hover.png?alt=media&token=e5382cca-8770-4465-b4d1-9404a829bbdd'
  }
]

export default function DichVuPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  return (
    <>
      <Helmet>
        <title>Dịch Vụ - Starot</title>
        <meta name='description' content='Thông tin về các dịch vụ' />
        <link rel='canonical' href='https://starotvn.com/dich-vu' />
      </Helmet>
      <div
        className='bg-cover bg-no-repeat'
        style={{
          backgroundImage:
            "url('https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDichVuBg.png?alt=media&token=54194737-08c1-4dfb-be8b-07da7b54df72')",
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          height: 'auto'
        }}
      >
        <Header />
        <main className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:px-20 pb-16 flex-grow'>
          <div className='px-5 md:p-16 lg:py-24 lg:px-48'>
            <h1 className='font-bold text-blue mb-5 text-center' style={{ fontSize: 25 }}>
              TAROT HEALING
            </h1>
            <p className='text-center text-blue-light'>
              Tarot Healing là dịch vụ xem tarot một một với những Reader tận tâm và dày dặn kinh nghiệm trong lĩnh vực
              Tarot. Sự đa dạng trong các gói trải bài cùng với thời gian được hoàn toàn chủ động bởi các bạn.
            </p>
          </div>
        </main>

        <div className='container mx-auto px-4 pb-40'>
          <div className='flex flex-col md:flex-row justify-center items-center mb-8'>
            {serviceImages.slice(0, 2).map((image, index) => (
              <div key={index} className='w-full md:w-1/3 lg:w-1/4 p-4 flex items-center justify-center'>
                <div
                  className='relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105'
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img src={image.src} alt={image.alt} className='w-full h-auto' />
                  {hoveredIndex === index && (
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <img src={image.alt} className='w-full h-auto' />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className='flex flex-col md:flex-row justify-center items-center mb-8'>
            {serviceImages.slice(2, 5).map((image, index) => (
              <div key={index + 2} className='w-full md:w-1/3 lg:w-1/4 p-4 flex items-center justify-center'>
                <div
                  className='relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105'
                  onMouseEnter={() => setHoveredIndex(index + 2)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img src={image.src} alt={image.alt} className='w-full h-auto' />
                  {hoveredIndex === index + 2 && (
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <img src={image.alt} className='w-full h-auto' />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className='flex flex-col md:flex-row justify-center items-center'>
            {serviceImages.slice(5, 7).map((image, index) => (
              <div key={index + 5} className='w-full md:w-1/3 lg:w-1/4 p-4 flex items-center justify-center'>
                <div
                  className='relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105'
                  onMouseEnter={() => setHoveredIndex(index + 5)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img src={image.src} alt={image.alt} className='w-full h-auto' />
                  {hoveredIndex === index + 5 && (
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <img src={image.alt} className='w-full h-auto' />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
