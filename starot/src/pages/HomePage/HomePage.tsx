import { Link } from 'react-router-dom'
import Header from '../../components/Header'

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
            <div className='md:w-1/2 mb-8 md:mb-0 order-1 md:order-2 flex justify-center'>
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
        </main>
      </div>

      <div
        className='bg-cover bg-no-repeat p-10 md:p-80'
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
        className='bg-cover bg-no-repeat md:px-20 md:pt-52 py-10'
        style={{
          backgroundImage:
            "url('https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FTarotHealing.png?alt=media&token=76228406-365e-4095-bc7a-d04abf19d6f4')",
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          height: 'auto'
        }}
      >
        <div className='flex flex-col md:flex-row'>
          <div className='flex-1 p-4'>
            <div className='rounded-md'>
              <h1 className='font-bold text-blue mb-4 text-center' style={{ fontSize: 25 }}>
                TAROT HEALING
              </h1>
              <p className='text-center text-blue-light'>
                Tarot Healing là dịch vụ xem tarot một một với những Reader tận tâm và dày dặn kinh nghiệm trong lĩnh
                vực Tarot. Sự đa dạng trong các gói trải bài cùng với thời gian được hoàn toàn chủ động bởi các bạn, hãy
                nhấn vào biểu tượng bên cạnh để khám phá thêm.
              </p>
            </div>
          </div>
          <div className='flex-1 p-4'>
            <div className='rounded-md'>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FTarotHealingIm.png?alt=media&token=a2b180f3-e482-4a3a-847b-f6c7e4ea7d38'
                alt='Featured Image'
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className='flex-1 p-4'>
            <div className='rounded-md'>
              <div className='md:pl-8 order-1 md:order-2'>
                <h1 className='font-bold text-blue mb-4 text-center ' style={{ fontSize: 25 }}>
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
      </div>
    </>
  )
}
