import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function HomePage() {
  return (
    <>
      <div
        className='bg-cover bg-no-repeat'
        style={{
          backgroundImage:
            "url('https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FBG.png?alt=media&token=20bcbdaf-eeae-49f0-9d7f-46245040744d')",
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          height: 'auto'
        }}
      >
        <Header />
        <main className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-7 pb-16 flex-grow'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className='md:w-1/2 mb-8 md:mb-20 order-1 md:order-2 flex justify-center'>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FPhoneBG.png?alt=media&token=f450c021-d377-4135-931b-3048baabc4a3'
                alt='Featured Image'
                width={500}
                height={500}
              />
            </div>
            <div className='md:w-1/2 md:pl-8 order-1 md:order-2'>
              <h1 className='font-bold text-blue mb-4 text-center ' style={{ fontSize: 25 }}>
                ỨNG DỤNG CUNG CẤP CÁC DỊCH VỤ VỀ TAROT
              </h1>
              <p className='text-blue-light mb-6 text-center' style={{ fontSize: 15 }}>
                Tải ứng dụng để tận hưởng những trải nghiệm thú vị hơn!
              </p>
              <div className='text-center'>
                <button className='border mb-5 border-blue text-blue rounded px-4 py-2 hover:bg-blue hover:text-white mr-4'>
                  <Link to='#'>DOWNLOAD IOS</Link>
                </button>
                <button className='border border-blue text-blue rounded px-4 py-2 hover:bg-blue hover:text-white'>
                  <Link to='#'>DOWNLOAD ANDROID</Link>
                </button>
              </div>
            </div>
          </div>
        </main>
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
          VỀ STAROT
        </h1>
        <p className='text-center text-blue-light'>
          Trong cuộc sống hiện đại đầy bất định và lo âu, nhiều người trong chúng ta luôn tìm kiếm sự chỉ dẫn để đưa ra
          quyết định đúng đắn. Nắm bắt được nhu cầu đó, Starot ra đời với niềm tin rằng Tarot sẽ trở thành một công cụ
          hữu ích để giúp bạn giải quyết các thắc mắc, tìm hiểu bản thân và khám phá tương lai.
        </p>
        <br />
        <p className='text-center text-blue-light'>
          Tại Starot, chúng tôi tin rằng mỗi lá bài mang một thông điệp riêng, và Starot ở đây để giúp bạn giải mã những
          thông điệp đó, mang lại sự sáng suốt và định hướng cho cuộc sống của bạn.
        </p>
        <br />
        <p className='text-center text-blue-light'>
          Hãy đồng hành cùng Starot để bắt đầu hành trình khám phá thế giới của bạn.
        </p>
        <br />
        <p className='text-center text-blue-light'>Starot - the key to open the World.</p>
      </div>

      <div
        className='bg-cover bg-no-repeat md:px-16 md:py-44 py-12 lg:px-10'
        style={{
          backgroundImage:
            "url('https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FTarotHealing.png?alt=media&token=76228406-365e-4095-bc7a-d04abf19d6f4')",
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          height: 'auto'
        }}
      >
        <div className='flex flex-col md:flex-row'>
          <div className='flex-1 p-4 flex flex-col justify-center items-center'>
            <div className='rounded-md text-center'>
              <h1 className='font-bold text-blue mb-4' style={{ fontSize: 25 }}>
                TAROT HEALING
              </h1>
              <p className='text-blue-light'>
                Tarot Healing là dịch vụ xem tarot một một với những Reader tận tâm và dày dạn kinh nghiệm trong lĩnh
                vực Tarot. Sự đa dạng trong các gói trải bài cùng với thời gian được hoàn toàn chủ động bởi các bạn, hãy
                nhấn vào biểu tượng bên cạnh để khám phá thêm.
              </p>
            </div>
          </div>
          <div className='flex-1 p-4 flex justify-center items-center'>
            <div className='rounded-md'>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FTarotHealingIm.png?alt=media&token=a2b180f3-e482-4a3a-847b-f6c7e4ea7d38'
                alt='Featured Image'
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className='flex-1 p-4 flex flex-col justify-center items-center md:mt-10'>
            <div className='rounded-md md:pl-8'>
              <h1 className='font-bold text-blue mb-4 text-center' style={{ fontSize: 25 }}>
                TRẢI NGHIỆM TỐT HƠN
              </h1>
              <p className='text-blue-light mb-6 text-center' style={{ fontSize: 15 }}>
                Truy cập ứng dụng Starot để trải nghiệm các dịch vụ đầy đủ nhất!
              </p>
              <div className='space-x-4 text-center'>
                <button className='border mb-5 border-blue text-blue rounded px-4 py-2 hover:bg-blue hover:text-white'>
                  <Link to='#'>DOWNLOAD IOS</Link>
                </button>
                <button className='border border-blue text-blue rounded px-4 py-2 hover:bg-blue hover:text-white'>
                  <Link to='#'>DOWNLOAD ANDROID</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='md:px-12 md:pt-28 pt-14 px-10'>
        <div className='flex justify-center items-center'>
          <h1 className='font-bold text-blue text-center' style={{ fontSize: 25, width: 500 }}>
            TẠI STAROT, CÁC BẠN CÓ THỂ TÌM THẤY CÁC SẢN PHẨM ĐÁ NĂNG LƯỢNG
          </h1>
        </div>
        <div className='flex flex-wrap md:py-10'>
          <div className='w-full sm:w-1/4 p-4'>
            <div className=' h-100 flex items-center justify-center rounded-md'>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FRedJasper.png?alt=media&token=cfea3a6f-29cf-4328-98fc-cac4cd51a615'
                alt='Featured Image'
              />
            </div>
            <div>
              <p className='font-bold text-blue text-center mb-5'>RED JASPER</p>
            </div>
            <div className='flex justify-center items-center'>
              <p className='font-bold text-blue-light text-center' style={{ width: 280 }}>
                Tăng cường sự bảo vệ, sự an toàn và sự kết nối với trái đất.
              </p>
            </div>
          </div>
          <div className='w-full sm:w-1/4 p-4'>
            <div className=' h-100 flex items-center justify-center rounded-md'>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FAmethyst.png?alt=media&token=79a89a3f-9159-4658-bc6c-b340e1b6f532'
                alt='Featured Image'
              />
            </div>
            <div>
              <p className='font-bold text-blue text-center mb-5'>AMETHYST</p>
            </div>
            <div className='flex justify-center items-center'>
              <p className='font-bold text-blue-light text-center' style={{ width: 280 }}>
                Giúp đầu óc sáng suốt cũng như sức khỏe ổn định hơn do khí huyết được điều hòa.
              </p>
            </div>
          </div>
          <div className='w-full sm:w-1/4 p-4'>
            <div className=' h-100 flex items-center justify-center rounded-md'>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FAquamarine.png?alt=media&token=a92ec415-7de0-4887-bb8e-a55e8c1fd423'
                alt='Featured Image'
              />
            </div>
            <div>
              <p className='font-bold text-blue text-center mb-5'>AQUAMARINE</p>
            </div>
            <div className='flex justify-center items-center'>
              <p className='font-bold text-blue-light text-center' style={{ width: 280 }}>
                Giúp giảm căng thẳng, cải thiện tâm trạng, mang lại sự bình yên, thúc đẩy sự nghiệp.
              </p>
            </div>
          </div>
          <div className='w-full sm:w-1/4 p-4'>
            <div className=' h-100 flex items-center justify-center rounded-md'>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FCitrine.png?alt=media&token=8318c52d-f61b-4de1-904f-5c95904ebf99'
                alt='Featured Image'
              />
            </div>
            <div>
              <p className='font-bold text-blue text-center mb-5'>CITRINE</p>
            </div>
            <div className='flex justify-center items-center'>
              <p className='font-bold text-blue-light text-center' style={{ width: 280 }}>
                Tăng cường sự giàu có, thịnh vượng, mang lại may mắn, giúp đạt được mục tiêu.
              </p>
            </div>
          </div>
          <div className='w-full sm:w-1/4 p-4'>
            <div className=' h-100 flex items-center justify-center rounded-md'>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FClearQuaz.png?alt=media&token=41ac7217-2ab8-42f7-9214-4ae72216ee23'
                alt='Featured Image'
              />
            </div>
            <div>
              <p className='font-bold text-blue text-center mb-5'>CLEAR QUARTZ</p>
            </div>
            <div className='flex justify-center items-center'>
              <p className='font-bold text-blue-light text-center' style={{ width: 280 }}>
                Tăng cường sự tự tin, thanh tẩy những năng lượng tiêu cực, mang lại may mắn.
              </p>
            </div>
          </div>
          <div className='w-full sm:w-1/4 p-4'>
            <div className=' h-100 flex items-center justify-center rounded-md'>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FMoonstone.png?alt=media&token=18e40e87-12ed-4cf3-8a07-7d3a1bff3452'
                alt='Featured Image'
              />
            </div>
            <div>
              <p className='font-bold text-blue text-center mb-5'>MOONSTONE</p>
            </div>
            <div className='flex justify-center items-center'>
              <p className='font-bold text-blue-light text-center' style={{ width: 280 }}>
                Giúp kích thích sự trực giác, sự sáng tạo và sự cân bằng cảm xúc.
              </p>
            </div>
          </div>
          <div className='w-full sm:w-1/4 p-4'>
            <div className=' h-100 flex items-center justify-center rounded-md'>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FRhodochrosite.png?alt=media&token=ec08a063-321f-416b-87ec-6c327c31fac2'
                alt='Featured Image'
              />
            </div>
            <div>
              <p className='font-bold text-blue text-center mb-5'>RHODOCHROSITE</p>
            </div>
            <div className='flex justify-center items-center'>
              <p className='font-bold text-blue-light text-center' style={{ width: 280 }}>
                Hỗ trợ sự chữa lành, sự tự yêu thương và sự tình cảm.
              </p>
            </div>
          </div>
          <div className='w-full sm:w-1/4 p-4'>
            <div className=' h-100 flex items-center justify-center rounded-md'>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FAmber.png?alt=media&token=b7ac364c-b3ce-4ab3-abe4-a2204b4e8c77'
                alt='Featured Image'
              />
            </div>
            <div>
              <p className='font-bold text-blue text-center mb-5'>AMBER</p>
            </div>
            <div className='flex justify-center items-center'>
              <p className='font-bold text-blue-light text-center' style={{ width: 280 }}>
                Giúp kích thích sự tập trung và sự tự tin.
              </p>
            </div>
          </div>
        </div>
        <hr className='border-t border-gray-300 md:mt-36 my-10 mt-28' />
      </div>

      <Footer />
    </>
  )
}
