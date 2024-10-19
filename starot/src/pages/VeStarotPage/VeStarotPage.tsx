import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Helmet } from 'react-helmet-async'

export default function VeStarotPage() {
  return (
    <>
      <Helmet>
        <title>Về Starot - Starot</title>
        <meta name='description' content='Về Starot' />
        <link rel='canonical' href='https://starotvn.com/ve-starot' />
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
          <div className='py-12 px-5 md:p-16 lg:p-56'>
            <h1 className='font-bold text-blue mb-5 text-center' style={{ fontSize: 25 }}>
              VỀ STAROT
            </h1>
            <p className='text-center text-blue-light'>
              Trong cuộc sống hiện đại đầy bất định và lo âu, nhiều người trong chúng ta luôn tìm kiếm sự chỉ dẫn để đưa
              ra quyết định đúng đắn. Nắm bắt được nhu cầu đó, Starot ra đời với niềm tin rằng Tarot sẽ trở thành một
              công cụ hữu ích để giúp bạn giải quyết các thắc mắc, tìm hiểu bản thân và khám phá tương lai.
            </p>
            <br />
            <p className='text-center text-blue-light'>
              Tại Starot, chúng tôi tin rằng mỗi lá bài mang một thông điệp riêng, và Starot ở đây để giúp bạn giải mã
              những thông điệp đó, mang lại sự sáng suốt và định hướng cho cuộc sống của bạn.
            </p>
            <br />
            <p className='text-center text-blue-light'>
              Hãy đồng hành cùng Starot để bắt đầu hành trình khám phá thế giới của bạn.
            </p>
            <br />
            <p className='text-center text-blue-light'>Starot - the key to open the World.</p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
