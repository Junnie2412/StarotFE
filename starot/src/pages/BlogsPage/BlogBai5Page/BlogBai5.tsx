import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { Helmet } from 'react-helmet-async'

export default function BlogBai5Page() {
  return (
    <>
      <Helmet>
        <title>Blog - Bai5 - Starot</title>
        <meta name='description' content='CÁCH CHỌN ĐÁ NĂNG LƯỢNG PHÙ HỢP' />
        <link rel='canonical' href='https://starotvn.com/blog/bai5' />
      </Helmet>
      <div className='bg-bg-blog'>
        <Header />
      </div>
      <main className='w-full max-w-8xl mx-auto px-4 sm:px-6 md:px-20 pt-1 pb-16 flex-grow bg-bg-blog'>
        <div className='flex justify-center lg:mt-32'>
          <div className='text-center'>
            <div className='bg-cover bg-no-repeat px-5 lg:px-60 mb-20'>
              <div className='lg:px-20 px-5 text-justify lg:text-left'>
                <h1 className='font-bold text-blue mb-8 text-center mt-20 lg:mt-0' style={{ fontSize: 25 }}>
                  CÁCH CHỌN ĐÁ NĂNG LƯỢNG PHÙ HỢP
                </h1>
              </div>
              <div className='px-5 text-justify lg:text-left'>
                <p className='text-blue-light'>
                  Việc lựa chọn đá phong thủy phù hợp với mệnh của mỗi người không chỉ mang lại vẻ đẹp mà còn giúp khai
                  thác tối đa năng lượng tích cực, hỗ trợ sức khỏe và tinh thần. Dưới đây là hướng dẫn chọn đá cho từng
                  mệnh trong ngũ hành.
                </p>
              </div>
              <div className='flex items-center justify-center rounded-md mt-20'>
                <img
                  src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FDaNangLuongPhuHopBg1.png?alt=media&token=82004e8a-85c1-4d9e-9da2-e2d6b10e7161'
                  alt='Featured Image'
                  className='w-full lg:w-1/2 h-auto'
                />
              </div>
            </div>
            <div className='px-4 sm:px-6 lg:px-48 mt-32'>
              <h1 className='font-bold text-blue mb-4 text-center mt-10' style={{ fontSize: 20 }}>
                MỆNH KIM (THỔ SINH KIM)
              </h1>
              <h1 className='font-bold text-blue mb-4 text-center mt-10' style={{ fontSize: 15 }}>
                LOẠI ĐÁ PHÙ HỢP
              </h1>
              <div className='lg:px-20 px-5 text-justify justify-center flex font-medium'>
                <ul>
                  <li>
                    <span className='font-bold'>&#8226; Thạch Anh Trắng:</span> Tượng trưng cho sự tinh khiết và sức
                    mạnh.
                  </li>
                  <li>
                    <span className='font-bold'>&#8226; Kim Cương:</span> Mang lại may mắn, tài lộc.
                  </li>
                  <li>
                    <span className='font-bold'>&#8226; Hổ Phách:</span> Giúp tăng cường trí tuệ và khả năng lãnh đạo.
                  </li>
                </ul>
              </div>
              <h1 className='font-bold text-blue mb-4 text-center mt-10' style={{ fontSize: 15 }}>
                CÁCH SỬ DỤNG
              </h1>
              <div className='lg:px-20 px-5 text-justify justify-center flex font-medium'>
                <p>Đeo trang sức hoặc đặt đá trên bàn làm việc để thu hút năng lượng tích cực.</p>
              </div>
            </div>
            <div className='px-4 sm:px-6 lg:px-48 mt-32'>
              <h1 className='font-bold text-blue mb-4 text-center mt-10' style={{ fontSize: 20 }}>
                MỆNH MỘC (MỘC TƯƠNG HỖ)
              </h1>
              <h1 className='font-bold text-blue mb-4 text-center mt-10' style={{ fontSize: 15 }}>
                LOẠI ĐÁ PHÙ HỢP
              </h1>
              <div className='lg:px-20 px-5 text-justify justify-center flex font-medium'>
                <ul>
                  <li>
                    <span className='font-bold'>&#8226; Ngọc Bích:</span> Giúp tăng cường sức khỏe và vận may.
                  </li>
                  <li>
                    <span className='font-bold'>&#8226; Thạch Anh Xanh:</span> Tượng trưng cho sự phát triển và thịnh
                    vượng.
                  </li>
                  <li>
                    <span className='font-bold'>&#8226; Cẩm Thạch:</span> Cân bằng cảm xúc, mang lại sự bình an.
                  </li>
                </ul>
              </div>
              <h1 className='font-bold text-blue mb-4 text-center mt-10' style={{ fontSize: 15 }}>
                CÁCH SỬ DỤNG
              </h1>
              <div className='lg:px-20 px-5 text-justify justify-center flex font-medium'>
                <p>Đặt đá trong phòng khách hoặc nơi làm việc để tạo không gian hòa hợp.</p>
              </div>
            </div>
            <div className='px-4 sm:px-6 lg:px-48 mt-32'>
              <h1 className='font-bold text-blue mb-4 text-center mt-10' style={{ fontSize: 20 }}>
                MỆNH THỦY (THỦY TƯƠNG HỖ)
              </h1>
              <h1 className='font-bold text-blue mb-4 text-center mt-10' style={{ fontSize: 15 }}>
                LOẠI ĐÁ PHÙ HỢP
              </h1>
              <div className='lg:px-20 px-5 text-justify justify-center flex font-medium'>
                <ul>
                  <li>
                    <span className='font-bold'>&#8226; Aquamarine:</span> Giúp cải thiện giao tiếp và tình cảm.
                  </li>
                  <li>
                    <span className='font-bold'>&#8226; Thạch Anh Tím:</span> Tăng cường trực giác và trí tuệ.
                  </li>
                  <li>
                    <span className='font-bold'>&#8226; Lapis Lazuli:</span> Thúc đẩy sự sáng tạo và tự tin.
                  </li>
                </ul>
              </div>
              <h1 className='font-bold text-blue mb-4 text-center mt-10' style={{ fontSize: 15 }}>
                CÁCH SỬ DỤNG
              </h1>
              <div className='lg:px-20 px-5 text-justify justify-center flex font-medium'>
                <p>Đeo trang sức hoặc đặt trên bàn làm việc để hỗ trợ sự tập trung và sáng tạo.</p>
              </div>
            </div>
            <div className='px-4 sm:px-6 lg:px-48 mt-32'>
              <h1 className='font-bold text-blue mb-4 text-center mt-10' style={{ fontSize: 20 }}>
                MỆNH HOẢ (HOẢ TƯƠNG HỖ)
              </h1>
              <h1 className='font-bold text-blue mb-4 text-center mt-10' style={{ fontSize: 15 }}>
                LOẠI ĐÁ PHÙ HỢP
              </h1>
              <div className='lg:px-20 px-5 text-justify justify-center flex font-medium'>
                <ul>
                  <li>
                    <span className='font-bold'>&#8226; Đá Ruby:</span> Tượng trưng cho tình yêu và đam mê.
                  </li>
                  <li>
                    <span className='font-bold'>&#8226; Thạch Anh Hồng:</span> Giúp cải thiện mối quan hệ và cảm xúc.
                  </li>
                  <li>
                    <span className='font-bold'>&#8226; Citrine:</span> Mang lại sự thịnh vượng và niềm vui.
                  </li>
                </ul>
              </div>
              <h1 className='font-bold text-blue mb-4 text-center mt-10' style={{ fontSize: 15 }}>
                CÁCH SỬ DỤNG
              </h1>
              <div className='lg:px-20 px-5 text-justify justify-center flex font-medium'>
                <p>Đeo trang sức hoặc đặt đá trong không gian sống để thu hút năng lượng tích cực.</p>
              </div>
            </div>
            <div className='px-4 sm:px-6 lg:px-48 mt-32'>
              <h1 className='font-bold text-blue mb-4 text-center mt-10' style={{ fontSize: 20 }}>
                MỆNH THỔ (THỔ TƯƠNG HỖ)
              </h1>
              <h1 className='font-bold text-blue mb-4 text-center mt-10' style={{ fontSize: 15 }}>
                LOẠI ĐÁ PHÙ HỢP
              </h1>
              <div className='lg:px-20 px-5 text-justify justify-center flex font-medium'>
                <ul>
                  <li>
                    <span className='font-bold'>&#8226; Ngọc Đỏ:</span> Giúp cân bằng năng lượng và tâm trạng.
                  </li>
                  <li>
                    <span className='font-bold'>&#8226; Thạch Anh Vàng:</span> Tượng trưng cho sự sung túc và phú quý.
                  </li>
                  <li>
                    <span className='font-bold'>&#8226; Mã Não:</span> Tăng cường sức khỏe và sự bền bỉ.
                  </li>
                </ul>
              </div>
              <h1 className='font-bold text-blue mb-4 text-center mt-10' style={{ fontSize: 15 }}>
                CÁCH SỬ DỤNG
              </h1>
              <div className='lg:px-20 px-5 text-justify justify-center flex font-medium'>
                <p>Đặt đá trong nhà, đặc biệt là ở khu vực bếp để tạo cảm giác ấm cúng.</p>
              </div>
            </div>
            <div className='px-4 sm:px-6 lg:px-48 mt-32 mb-20'>
              <h1 className='font-bold text-blue mb-4 text-center mt-10' style={{ fontSize: 20 }}>
                KẾT LUẬN
              </h1>
              <div className='lg:px-20 px-5 text-justify justify-center flex font-medium'>
                <p>
                  Đá năng lượng không chỉ là những viên đá đẹp mắt mà còn có thể mang lại nhiều lợi ích cho sức khỏe và
                  tinh thần. Dù chưa có bằng chứng khoa học rõ ràng về những tác động của chúng, nhưng nhiều người đã
                  tìm thấy sự bình an và niềm vui khi sử dụng đá năng lượng trong cuộc sống hàng ngày. Nếu bạn đang tìm
                  kiếm một nguồn năng lượng tích cực, hãy thử trải nghiệm với đá năng lượng và cảm nhận sự khác biệt!
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
