import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Helmet } from 'react-helmet-async'

export default function LienHePage() {
  return (
    <>
      <Helmet>
        <title>Liên Hệ - Starot</title>
        <meta name='description' content='Liên hệ của Starot' />
        <link rel='canonical' href='https://starotvn.com/lien-he' />
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
          <div className='flex justify-center lg:mt-32'>
            <div className='p-6 text-center'>
              <h1 className='font-bold text-blue mb-12' style={{ fontSize: 25 }}>
                LIÊN HỆ
              </h1>
              <div className='lg:px-80 text-start text-blue-light' style={{ fontSize: 15 }}>
                <p className='text-blue-light'>
                  Nếu bạn có bất kỳ câu hỏi, thắc mắc hoặc yêu cầu nào, vui lòng liên hệ với chúng tôi qua các kênh sau:
                </p>
                <div className='flex flex-row items-center mt-5 md:mt-10 mb-2'>
                  <img
                    src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FMail.png?alt=media&token=7cb022be-3b16-476c-9cd2-abdc807e139a'
                    className='h-4 md:mr-3'
                    alt='Starot Logo'
                  />
                  <p className='md:mt-0 text-blue md:ml-0 lg:ml-0 ml-3'>Starotcompany@gmail.com</p>
                </div>
                <p>Đội ngũ của chúng tôi sẽ phản hồi các yêu cầu qua email trong vòng 1-2 ngày làm việc.</p>
                <div className='flex flex-row items-center mt-5 md:mt-10 mb-2'>
                  <img
                    src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FPhone.png?alt=media&token=bfb2b418-e818-48bf-89be-3afe6b029abe'
                    className='h-4 md:mr-3'
                    alt='Starot Logo'
                  />
                  <p className='md:mt-0 text-blue md:ml-0 lg:ml-0 ml-2'>+84 123 456 789</p>
                </div>
                <p>Chúng tôi luôn sẵn sàng hỗ trợ quý khách từ thứ Hai đến thứ Sáu, từ 9 giờ sáng đến 6 giờ chiều.</p>
                <div className='flex flex-row items-center mt-5 md:mt-10 mb-2'>
                  <img
                    src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FAddressIcon.png?alt=media&token=f4cda88d-4d89-44d2-bfac-61389114853f'
                    className='h-4 md:mr-3'
                    alt='Starot Logo'
                  />
                  <p className='md:mt-0 text-blue md:ml-0 lg:ml-0 ml-3'>123 Đường Tarot, Quận 1, TP. HCM</p>
                </div>
                <p className='lg:mb-72'>
                  Quý khách có thể ghé thăm văn phòng của chúng tôi vào các ngày làm việc từ 9 giờ sáng đến 6 giờ chiều.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
