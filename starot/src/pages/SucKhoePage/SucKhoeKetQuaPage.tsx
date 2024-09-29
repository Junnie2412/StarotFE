import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import { fetchDocumentById } from '../../firebase'
import { BoiBaiType } from '../../types/BoiBaiType.type'

export default function SucKhoeKetQuaPage() {
  const { id } = useParams<{ id: string }>()
  const [data, setData] = useState<BoiBaiType | null>(null)

  console.log(data)

  useEffect(() => {
    const getData = async () => {
      if (!id) {
        console.error('ID is undefined')
        return
      }

      try {
        const result = await fetchDocumentById(id)
        setData(result)
      } catch (error) {
        console.error('Error fetching the data:', error)
      }
    }

    getData()
  }, [id])

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
        <main className='flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12'>
          <div className='w-full max-w-4xl'>
            <div className='flex flex-col items-center'>
              <div className='w-[60%] md:w-[46.67%] lg:w-[35%] mb-24 lg:mb-20  lg:mt-24'>
                <img src={data?.Image} alt='Featured Image' className='w-full h-auto' />
              </div>
              <div className='text-start md:px-10 px-5'>
                <h1 className='font-bold text-center text-blue mb-5 text-2xl sm:text-3xl'>{data?.Title}</h1>
                <div className='space-y-4 text-blue-light lg:mb-28 mb-20'>
                  <p>{data?.Content}</p>
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
