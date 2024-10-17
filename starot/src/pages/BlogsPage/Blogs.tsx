import { CircleItem } from '../../components/CircleItem/CircleItem'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function BlogPage() {
  const topics = [
    'TAROT LÀ GÌ',
    'TAROT CÓ THỂ TIÊN ĐOÁN ĐƯỢC TƯƠNG LAI KHÔNG?',
    'CẦN CHUẨN BỊ GÌ TRƯỚC KHI XEM TAROT',
    'ĐÁ NĂNG LƯỢNG LÀ GÌ?',
    'CÁCH CHỌN ĐÁ NĂNG LƯỢNG PHÙ HỢP'
  ]

  const links = ['/blog/bai1', '/blog/bai2', '/blog/bai3', '/blog/bai4', '/blog/bai5']

  const bgImage =
    'https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FCircle.png?alt=media&token=832004a9-75c9-47fb-9ffd-a61d86ecfcb4' // Circle image URL

  return (
    <>
      <div className='bg-bg-blog'>
        <Header />
      </div>
      <main className='w-full max-w-8xl mx-auto px-4 sm:px-6 md:px-20 pt-7 pb-16 flex-grow bg-bg-blog'>
        <div className='text-center flex justify-center'>
          <div
            className='w-3/5 h-full min-h-screen bg-cover bg-no-repeat flex flex-col justify-center items-center'
            style={{
              backgroundImage:
                "url('https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FBlogBG.png?alt=media&token=1899cdfd-ed29-4b37-b6e5-839984d6f439')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className='flex justify-center items-center min-h-screen m-20'>
              <div className='text-center'>
                <div className='relative w-full h-full flex items-center justify-center'>
                  <div className='relative w-96 h-96' style={{ transform: 'translate(110px, 100px)' }}>
                    {topics.map((topic, index) => (
                      <CircleItem
                        key={index}
                        text={topic}
                        angle={(index * 360) / topics.length}
                        bgImage={bgImage}
                        link={links[index]}
                      />
                    ))}
                  </div>
                  <div className='absolute w-28 h-28 flex items-center justify-center'>
                    <p className='text-blue text-2xl font-bold'>BLOG</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className='flex justify-center bg-bg-blog'>
        <hr className='border-t border-gray-600 w-11/12 bg-bg-blog' />
      </div>
      <div className='bg-bg-blog'>
        <Footer />
      </div>
    </>
  )
}
