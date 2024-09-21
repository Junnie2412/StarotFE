import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function ChinhSachPage() {
  return (
    <>
      <div
        className='bg-cover bg-no-repeat flex flex-col min-h-screen' // Added flex and min-h-screen
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
            <div className='p-6 text-center'>
              <h1 className='font-bold text-blue mb-12' style={{ fontSize: 25 }}>
                CHÍNH SÁCH
              </h1>
              <div className='lg:px-80 text-start text-blue-light' style={{ fontSize: 15 }}>
                <div className='flex flex-row items-center mb-2'>
                  <p className='md:mt-0 text-blue'>GIỚI THIỆU</p>
                </div>
                <p>
                  Chào mừng bạn đến với trang web cung cấp dịch vụ tarot của Starot Company. Chúng tôi cam kết cung cấp
                  các dịch vụ tarot chuyên nghiệp, có trách nhiệm và tôn trọng quyền riêng tư của khách hàng.
                </p>
                <div className='flex flex-row items-center mt-5 md:mt-10 mb-2'>
                  <p className='md:mt-0 text-blue'>VỀ DỊCH VỤ STAROT</p>
                </div>
                <p className='ml-10'>
                  &#x2022; Tarot là một công cụ về lĩnh vực duy tâm giúp khách hàng được hướng dẫn, tư vấn và định hướng
                  trong cuộc sống.
                </p>
                <p className='ml-10 mt-3'>
                  &#x2022; Các phiên đọc bài tarot được thực hiện bởi những chuyên gia tarot có kinh nghiệm và được đào
                  tạo chuyên sâu.
                </p>
                <p className='ml-10 mt-3'>
                  &#x2022; Chúng tôi cung cấp các loại hình đọc bài tarot như: Đọc bài tarot cơ bản, đọc bài tarot tình
                  yêu, đọc bài tarot tương lai và nhiều dịch vụ khác.
                </p>
                <div className='flex flex-row items-center mt-5 md:mt-10 mb-2'>
                  <p className='md:mt-0 text-blue'>CAM KẾT CỦA CHÚNG TÔI</p>
                </div>
                <p className='ml-10'>
                  &#x2022; Chúng tôi cam kết cung cấp các dịch vụ tarot một cách chính xác, trung thực và có trách
                  nhiệm.
                </p>
                <p className='ml-10 mt-3'>
                  &#x2022; Thông tin cá nhân của khách hàng luôn được bảo mật và không được chia sẻ với bất kỳ bên thứ
                  ba nào.
                </p>
                <p className='ml-10 mt-3'>
                  &#x2022; Chúng tôi tôn trọng quyền tự do lựa chọn của khách hàng và không áp đặt bất kỳ quan điểm nào.
                </p>
                <p className='ml-10 mt-3'>
                  &#x2022; Nếu khách hàng không hài lòng với dịch vụ, chúng tôi sẽ cố gắng khắc phục hoặc hoàn trả lại
                  phí dịch vụ trong trường hợp cần thiết.
                </p>
                <div className='flex flex-row items-center mt-5 md:mt-10 mb-2'>
                  <p className='md:mt-0 text-blue'>Điều Khoản và Điều Kiện</p>
                </div>
                <p className='ml-10'>&#x2022; Khách hàng phải đủ 18 tuổi trở lên để sử dụng dịch vụ.</p>
                <p className='ml-10 mt-3'>&#x2022; Tất cả các dịch vụ phải được thanh toán trước khi thực hiện.</p>
                <p className='ml-10 mt-3'>
                  &#x2022; Khách hàng có quyền hủy hoặc thay đổi cuộc hẹn trong vòng 1 giờ sau khi thực hiện đặt lịch mà
                  không phải chịu phí. Sau 3 giờ, quý khách chỉ được hoàn 70% phí đã giao dịch. Sau 6 giờ, quý khách chỉ
                  được hoàn 30% phí đã giao dịch. Sau 12 giờ quý khách sẽ không được hoàn phí.
                </p>
                <p className='ml-10 mt-3 md:mb-24'>
                  &#x2022; Chúng tôi không chịu trách nhiệm về bất kỳ hậu quả nào phát sinh từ việc sử dụng các dịch vụ
                  của chúng tôi.
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
