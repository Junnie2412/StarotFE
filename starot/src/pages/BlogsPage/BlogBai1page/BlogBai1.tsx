import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { Helmet } from 'react-helmet-async'

export default function BlogBai1Page() {
  return (
    <>
      <Helmet>
        <title>Blog - Bai1 - Starot</title>
        <meta name='description' content='TAROT LÀ GÌ?' />
        <link rel='canonical' href='https://starotvn.com/blog/bai1' />
      </Helmet>
      <div className='bg-bg-blog'>
        <Header />
      </div>
      <main className='w-full max-w-8xl mx-auto px-4 sm:px-6 md:px-20 pt-1 pb-16 flex-grow bg-bg-blog'>
        <div className='flex justify-center lg:mt-32'>
          <div className=' text-center'>
            <div className='bg-cover bg-no-repeat px-5 lg:px-72 mb-40'>
              <div className=' flex items-center justify-center rounded-md'>
                <img
                  src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FTarotLaGi.png?alt=media&token=de5d06d0-3712-4cf9-a800-ae5a4cd38606'
                  alt='Featured Image'
                />
              </div>
              <h1 className='font-bold text-blue mb-4 text-center' style={{ fontSize: 25 }}>
                TAROT LÀ GÌ?
              </h1>
              <p className='text-center text-blue-light'>
                Tarot là một hệ thống bài sử dụng hình ảnh biểu tượng để tìm kiếm sự thấu hiểu, hướng dẫn và suy ngẫm về
                các khía cạnh khác nhau trong cuộc sống. Ban đầu được sử dụng ở châu Âu vào thế kỷ 15 như một trò chơi
                bài, Tarot sau này phát triển thành công cụ tâm linh được sử dụng trong các buổi bói bài.
              </p>
            </div>
            <div
              className='bg-cover bg-no-repeat py-12 px-5 md:p-16 lg:p-72'
              style={{
                backgroundImage:
                  "url('https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FVeStarotBG.png?alt=media&token=d20db05b-a8ed-465a-b376-35142e387a33')",
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                height: 'auto'
              }}
            >
              <h1 className='font-bold text-blue mb-4 text-center' style={{ fontSize: 25 }}>
                ĐIỂM BẮT ĐẦU - BIỂU TƯỢNG VÀ HÌNH ẢNH
              </h1>
              <p className='text-center text-blue-light'>
                Tương tự như cách bạn học về các hành tinh và chòm sao trong chiêm tinh, mỗi lá bài Tarot cũng đại diện
                cho một chủ đề, một bài học hay tình huống trong cuộc sống. Hệ thống bài Tarot được chia thành hai phần
                chính: Major Arcana và Minor Arcana.
              </p>
              <br />
              <p className='text-center text-blue-light'>
                Major Arcana là bộ gồm 22 lá bài tượng trưng cho những sự kiện, thách thức và bài học lớn lao trong đời
                người. Các lá bài này đại diện cho những hành trình tâm linh, những biến cố lớn có thể định hình cuộc
                sống của bạn.
              </p>
              <br />
              <p className='text-center text-blue-light'>
                Minor Arcana gồm 56 lá, được chia thành 4 chất: Cốc, Gậy, Kiếm và Tiền, mỗi chất liên quan đến các khía
                cạnh thường nhật hơn của cuộc sống như cảm xúc, công việc, tư duy và tài chính. Những lá này mô tả những
                sự kiện hàng ngày và những thách thức mà chúng ta đối mặt.
              </p>
            </div>
            <div className='flex flex-col lg:flex-row px-12 justify-center lg:space-x-20 my-32'>
              <div className='flex flex-col items-center justify-center mb-8 lg:mb-0 w-full lg:w-8/12'>
                <img
                  src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FGocDoChuQuan.png?alt=media&token=dc4d682a-017a-4257-b1b0-02d07756491c'
                  alt='Ve Starot Background'
                  className='w-2/3 lg:w-1/3 h-auto'
                  style={{ maxHeight: '300px', objectFit: 'cover' }}
                />
                <div className='text-center mt-4'>
                  <h2 className='font-bold text-blue mb-2'>DƯỚI GÓC ĐỘ CHỦ QUAN</h2>
                  <p className='text-blue-light'>
                    Tương tự như việc chiêm tinh học nhìn bầu trời từ góc độ của Trái Đất (geocentric), Tarot cũng nhìn
                    vào cuộc sống từ góc nhìn của bạn, của bản thân người trải nghiệm. Mỗi lá bài bạn rút không chỉ đại
                    diện cho một hoàn cảnh khách quan, mà còn phản ánh cảm nhận, cảm xúc, hoặc trạng thái tinh thần của
                    bạn tại thời điểm đó.
                  </p>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center mb-8 lg:mb-0 w-full lg:w-8/12'>
                <img
                  src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FTrucGiac.png?alt=media&token=0f557e9d-27f0-4bcf-a189-0fb6ee0094df'
                  alt='Ve Starot Background'
                  className='w-2/3 lg:w-1/3 h-auto'
                  style={{ maxHeight: '300px', objectFit: 'cover' }}
                />
                <div className='text-center mt-4'>
                  <h1 className='font-bold text-blue mb-2'>TRỰC GIÁC VÀ DIỄN GIẢI</h1>
                  <p className='text-blue-light'>
                    Tarot không phải là một công cụ dự đoán chính xác tương lai mà là một phương tiện để suy ngẫm và đưa
                    ra sự thấu hiểu sâu sắc hơn. Nó giúp bạn nhìn vào chính mình, vào hoàn cảnh hiện tại và những khả
                    năng mà bạn có thể chưa thấy rõ. Như các hành tinh chuyển động qua các chòm sao trong chiêm tinh,
                    các lá bài Tarot cũng có một chu kỳ và sự liên kết riêng. Mỗi lần bạn rút bài là một cơ hội để hiểu
                    rõ hơn về bản thân, để nhìn thấy các tiềm năng và lựa chọn trong cuộc sống, và để cảm nhận được kết
                    nối sâu sắc hơn với những điều lớn lao hơn xung quanh bạn.
                  </p>
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
