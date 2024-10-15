import { useParams, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import { fetchDocumentById } from '../../apis/boiBai.api'
import { BoiBai } from '../../types/BoiBai.type'
import { FiArrowLeft } from 'react-icons/fi'

export default function TinhYeuKetQuaPage() {
  const { id } = useParams<{ id: string }>()
  const [data, setData] = useState<BoiBai | null>(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [dataLoaded, setDataLoaded] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {
      if (!id) {
        console.error('ID is undefined')
        return
      }

      try {
        const result = await fetchDocumentById(id)
        setData(result)
        setDataLoaded(true)
      } catch (error) {
        console.error('Error fetching the data:', error)
      }
    }

    getData()
  }, [id])

  const isContentReady = dataLoaded && imageLoaded

  const handleReturn = () => {
    navigate(-1)
  }

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
        <main className='flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:pb-36'>
          <div className='w-full max-w-4xl relative'>
            <div className='flex flex-col items-center'>
              <div className='w-[60%] md:w-[46.67%] lg:w-[35%] mb-24 lg:mb-20 lg:mt-24'>
                {!imageLoaded && <div className='animate-pulse bg-gray-300 w-full h-auto aspect-w-1 aspect-h-1'></div>}
                <img
                  src={data?.Image}
                  alt='Featured Image'
                  className={`w-full h-auto transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
              {isContentReady ? (
                <div className='text-start md:px-10 px-5'>
                  <h1 className='font-bold text-center text-blue mb-5 text-2xl sm:text-3xl'>{data?.Title}</h1>
                  <div className='space-y-10 text-blue-light lg:mb-28 mb-20 leading-[2]'>
                    <p>{data?.Content}</p>
                  </div>
                </div>
              ) : (
                <div className='animate-pulse w-full h-40 rounded-lg'></div>
              )}
            </div>
            <button
              onClick={handleReturn}
              className='absolute bottom-0 right-0 border border-blue rounded flex items-center justify-center w-16 h-8 text-blue hover:text-white hover:bg-blue transition duration-300'
            >
              <FiArrowLeft size={20} />
            </button>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
