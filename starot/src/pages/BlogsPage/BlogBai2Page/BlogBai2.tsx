import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

export default function BlogBai2Page() {
  return (
    <>
      <div className='bg-bg-blog'>
        <Header />
      </div>
      <main className='w-full max-w-8xl mx-auto px-4 sm:px-6 md:px-20 pt-1 pb-16 flex-grow bg-bg-blog'>
        <div className='flex justify-center lg:mt-32'>
          <div className=' text-center'>
            <div className='bg-cover bg-no-repeat px-5 lg:px-60 mb-40'>
              <div className=' flex items-center justify-center rounded-md'>
                <img
                  src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FTuongLai1.png?alt=media&token=863fae9f-5153-4f5e-9e11-cd924814819d'
                  alt='Featured Image'
                />
              </div>
              <h1 className='font-bold text-blue mb-4 text-center mt-10' style={{ fontSize: 25 }}>
                Tarot có thể tiên đoán tương lai không?
              </h1>
              <div className='lg:px-20 px-5 text-justify'>
                <p className=' text-blue-light'>
                  Câu trả lời ngắn gọn: Không hoàn toàn. Tarot không phải là một quả cầu pha lê có thể cho bạn biết
                  chính xác những gì sẽ xảy ra trong tương lai. Thay vào đó, Tarot hoạt động như một tấm gương phản
                  chiếu lại những suy nghĩ, cảm xúc và năng lượng hiện tại của bạn.
                </p>
              </div>
              <div className='lg:px-20 px-5 text-justify mt-10'>
                <h1 className='font-bold text-blue mb-4 text-center mt-10' style={{ fontSize: 15 }}>
                  TAROT NHƯ MỘT NGƯỜI BẠN ĐỒNG HÀNH
                </h1>
                <p className=' text-blue-light mt-5'>
                  Tarot có thể giúp bạn nhận ra những cơ hội, thách thức và các yếu tố ảnh hưởng đến cuộc sống của bạn.
                  Từ đó, bạn có thể đưa ra những quyết định sáng suốt hơn.
                </p>
              </div>
              <div className='lg:px-20 px-5 text-justify mt-10'>
                <h1 className='font-bold text-blue mb-4 text-center mt-10' style={{ fontSize: 15 }}>
                  TAROT KHÔNG PHẢI LÀ ĐỊNH MỆNH
                </h1>
                <p className=' text-blue-light mt-5'>
                  Tương lai không phải là một điều cố định. Tarot chỉ cho bạn thấy những khả năng có thể xảy ra, còn
                  việc lựa chọn con đường nào là do bạn quyết định.
                </p>
              </div>
              <div className=' flex items-center justify-center rounded-md mt-20'>
                <img
                  src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FTuongLai2.png?alt=media&token=a44f3f7c-51b8-425e-84ad-b81e30863856'
                  alt='Featured Image'
                />
              </div>
              <h1 className='font-bold text-blue mb-4 px-5 text-center mt-10 lg:px-16' style={{ fontSize: 25 }}>
                Tại sao nhiều người tin rằng Tarot có thể tiên đoán tương lai?
              </h1>
              <div className='lg:px-20 px-5 text-justify mt-10'>
                <h1 className='font-bold text-blue mb-4 text-center mt-10' style={{ fontSize: 15 }}>
                  HIỆU ỨNG BARNUM
                </h1>
                <p className=' text-blue-light mt-5'>
                  Nhiều lá bài Tarot có những ý nghĩa rất chung chung, có thể áp dụng cho nhiều tình huống khác nhau.
                  Điều này khiến người xem cảm thấy như bài Tarot đang nói chính xác về họ.
                </p>
              </div>
              <div className='lg:px-20 px-5 text-justify mt-10'>
                <h1 className='font-bold text-blue mb-4 text-center mt-10' style={{ fontSize: 15 }}>
                  SỰ MONG ĐỢI
                </h1>
                <p className=' text-blue-light mt-5'>
                  Khi chúng ta muốn tìm kiếm câu trả lời, chúng ta thường có xu hướng tìm thấy những gì mình muốn trong
                  bài Tarot.
                </p>
              </div>
              <div className='lg:px-20 px-5 text-justify mt-10'>
                <h1 className='font-bold text-blue mb-4 text-center mt-10' style={{ fontSize: 15 }}>
                  KINH NGHIỆM CÁ NHÂN
                </h1>
                <p className=' text-blue-light mt-5'>
                  Một số người đã có những trải nghiệm tích cực khi sử dụng Tarot, khiến họ tin rằng Tarot có khả năng
                  dự đoán tương lai.
                </p>
                <p className=' text-blue-light mt-5'>
                  Tarot là một công cụ hữu ích để khám phá bản thân và tìm kiếm sự hiểu biết sâu sắc hơn về cuộc sống.
                  Tuy nhiên, không nên quá phụ thuộc vào Tarot để đưa ra quyết định quan trọng. Hãy sử dụng Tarot như
                  một công cụ hỗ trợ, kết hợp với sự suy nghĩ và phán đoán của bản thân.
                </p>
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
