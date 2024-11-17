import { useState } from 'react'
import HeaderAdmin from '../../../components/HeaderAdmin/HeaderAdmin'
import { Helmet } from 'react-helmet-async'

export default function QuanLiGiaoDichPage() {
  const transactions = [
    {
      id: 'TRANS733',
      time: '15:00',
      date: '11/11/2024',
      service: 'Gói trải bài theo câu hỏi đơn',
      amount: '80.000 VND',
      user: 'Hữu Thái',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'huuthai1911@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS734',
      time: '16:10',
      date: '11/11/2024',
      service: 'Gói trải bài theo chủ đề',
      amount: '150.000 VND',
      user: 'Kỳ Phương',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'wyi0904200@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS735',
      time: '17:50',
      date: '11/11/2024',
      service: 'Gói trải bài tổng quan tuần',
      amount: '150.000 VND',
      user: 'Minh Khôi',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'khoi2003ah@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS736',
      time: '18:21',
      date: '11/11/2024',
      service: 'Gói trải bài tổng quan tháng',
      amount: '200.000 VND',
      user: 'Duy Tín',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'tinbusiness.work@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS737',
      time: '18:43',
      date: '11/11/2024',
      service: 'Moonstone x3',
      amount: '270.000 VND',
      user: 'Phát Đạt',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'junniehoang321@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS738',
      time: '19:24',
      date: '11/11/2024',
      service: 'Rhodochrosite x5',
      amount: '430.000 VND',
      user: 'Khánh Như',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'khanhnhu.ct@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS739',
      time: '19:47',
      date: '11/11/2024',
      service: 'Clear quartz x1',
      amount: '110.000 VND',
      user: 'Phúc An',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'phamm5687@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS740',
      time: '09:12',
      date: '13/11/2024',
      service: 'Red Jaster x1',
      amount: '110.000 VND',
      user: 'Ái Nhi',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'ainhicute@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS741',
      time: '10:58',
      date: '13/11/2024',
      service: 'Aquamarine x2',
      amount: '190.000 VND',
      user: 'Vũ Hưng',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'nttq0803@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS742',
      time: '11:37',
      date: '13/11/2024',
      service: 'Citrine x3',
      amount: '270.000 VND',
      user: 'Thanh Thuý',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'lethithanhthuy102003@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS743',
      time: '18:45',
      date: '13/11/2024',
      service: 'Amber x4',
      amount: '350.000 VND',
      user: 'Bảo Trân',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'trantran0603@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS744',
      time: '19:47',
      date: '13/11/2024',
      service: 'Amethyst x1',
      amount: '110.000 VND',
      user: 'Nhật Nguyên',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'nguyendnass171228@fpt.edu.vn',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS745',
      time: '20:53',
      date: '13/11/2024',
      service: 'Gói trải bài tổng quan quý',
      amount: '250.000 VND',
      user: 'Duy Hùng',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'tran.duy.hung.41@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS746',
      time: '18:27',
      date: '14/11/2024',
      service: 'Gói trải bài tổng quan 6 tháng',
      amount: '300.000 VND',
      user: 'Diệu Đồng',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'diepdieudong@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS747',
      time: '18:34',
      date: '14/11/2024',
      service: 'Gói trải bài tổng quan tuần',
      amount: '150.000 VND',
      user: 'Hồng Ngân',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'nganhong270@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS748',
      time: '18:53',
      date: '14/11/2024',
      service: 'Gói trải bài theo chủ đề',
      amount: '150.000 VND',
      user: 'Tường Duy',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'tuongduy16062003@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS749',
      time: '20:22',
      date: '14/11/2024',
      service: 'Gói trải bài theo câu hỏi đơn',
      amount: '80.000 VND',
      user: 'Lâm An',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'lamannguyenphan0611@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS750',
      time: '20:36',
      date: '14/11/2024',
      service: 'Gói trải bài theo chủ đề',
      amount: '150.000 VND',
      user: 'Mạnh Vũ',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'vu377425@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS751',
      time: '21:12',
      date: '14/11/2024',
      service: 'Gói trải bài theo chủ đề',
      amount: '150.000 VND',
      user: 'Kim Ngân',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'kimngan06112003@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS752',
      time: '21:43',
      date: '14/11/2024',
      service: 'Gói trải bài theo chủ đề',
      amount: '150.000 VND',
      user: 'Phương Khanh',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'khanhishere@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS753',
      time: '22:37',
      date: '14/11/2024',
      service: 'Gói trải bài tổng quan tháng',
      amount: '200.000 VND',
      user: 'Tuệ Minh',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'kykou21505@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS754',
      time: '17:53',
      date: '15/11/2024',
      service: 'Gói trải bài theo câu hỏi đơn',
      amount: '80.000 VND',
      user: 'Nhật Liêu',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'lieuntt1306@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS755',
      time: '18:02',
      date: '15/11/2024',
      service: 'Gói trải bài tổng quan năm',
      amount: '400.000 VND',
      user: 'Trung Nghĩa',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'nghiab2016781@student.ctu.edu.vn',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS756',
      time: '18:14',
      date: '15/11/2024',
      service: 'Gói trải bài theo câu hỏi đơn',
      amount: '80.000 VND',
      user: 'Đức Nguyên',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'nguyendnass171228@fpt.edu.vn',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS757',
      time: '18:49',
      date: '15/11/2024',
      service: 'Gói trải bài tổng quan tháng',
      amount: '200.000 VND',
      user: 'Trọng Khang',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'eddynguyen1105@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS758',
      time: '19:34',
      date: '15/11/2024',
      service: 'Gói trải bài theo câu hỏi đơn',
      amount: '80.000 VND',
      user: 'Mỹ Duyên',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'duyenxinkiu04@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS759',
      time: '20:12',
      date: '15/11/2024',
      service: 'Gói trải bài tổng quan quý',
      amount: '250.000 VND',
      user: 'Thục An',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'thucan270904@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS760',
      time: '20:33',
      date: '15/11/2024',
      service: 'Gói trải bài theo câu hỏi đơn',
      amount: '80.000 VND',
      user: 'Hoàng Oanh',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'oanhtodale@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS761',
      time: '21:24',
      date: '15/11/2024',
      service: 'Gói trải bài tổng quan 6 tháng',
      amount: '300.000 VND',
      user: 'Quế Anh',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'anhdangque02@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS762',
      time: '21:38',
      date: '15/11/2024',
      service: 'Gói trải bài tổng quan năm',
      amount: '400.000 VND',
      user: 'Kim Thy',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'thythycuteee@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS763',
      time: '22:03',
      date: '15/11/2024',
      service: 'Gói trải bài tổng quan quý',
      amount: '250.000 VND',
      user: 'Thu Hiền',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'thien070302@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS764',
      time: '22:36',
      date: '15/11/2024',
      service: 'Gói trải bài tổng quan tháng',
      amount: '200.000 VND',
      user: 'Mỹ Chi',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'mychiishere@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS765',
      time: '23:09',
      date: '15/11/2024',
      service: 'Gói trải bài theo chủ đề',
      amount: '150.000 VND',
      user: 'Đức Anh',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'anhndse172293@fpt.edu.vn',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS766',
      time: '23:21',
      date: '15/11/2024',
      service: 'Gói trải bài tổng quan 6 tháng',
      amount: '300.000 VND',
      user: 'Thiên Minh',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'thienminhvippro@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    },
    {
      id: 'TRANS767',
      time: '23:44',
      date: '15/11/2024',
      service: 'Gói trải bài theo chủ đề',
      amount: '150.000 VND',
      user: 'Minh Đức',
      image: `https://firebasestorage.googleapis.com/v0/b/starot-aa9da.appspot.com/o/DefaultImages%2FUSER'S%20AVT%20STAROT.jpg?alt=media&token=12a57b72-3c66-4f4e-9763-ad85503c0f2f`,
      email: 'minhduc02@gmail.com',
      status: 'Thành công',
      result: 'Chuyển khoản'
    }
  ]

  const [searchTerm, setSearchTerm] = useState('')

  const filteredTransactions = transactions.filter((transaction) =>
    Object.values(transaction).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <>
      <Helmet>
        <title>Quản Lí Giao Dịch - Starot</title>
        <meta name='description' content='Admin Quản Lí Giao Dịch' />
        <link rel='canonical' href='https://starotvn.com/admin/quan-li-giao-dich' />
      </Helmet>
      <div className='min-h-screen bg-bg-admin pb-32 lg:px-0 px-5'>
        <HeaderAdmin />
        <div className='container mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg lg:p-16'>
          <div>
            <div className='flex flex-col lg:flex-row justify-between items-center mb-6'>
              <h1 className='text-2xl font-bold text-indigo-700 lg:mb-0 mb-10'>QUẢN LÍ GIAO DỊCH</h1>
              <div className='w-full lg:w-auto'>
                <div className='relative'>
                  <input
                    type='text'
                    placeholder='Tìm kiếm...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='w-full lg:w-64 pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                  />
                  <svg
                    className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className='overflow-x-auto lg:mt-20 mt-10'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-blue uppercase tracking-wider'
                    >
                      Id
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-blue uppercase tracking-wider'
                    >
                      Mã giao dịch
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-blue uppercase tracking-wider'
                    >
                      Thời gian
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-blue uppercase tracking-wider'
                    >
                      Ngày/Tháng/Năm
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-blue uppercase tracking-wider'
                    >
                      Nội dung
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-blue uppercase tracking-wider'
                    >
                      Tổng tiền
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-blue uppercase tracking-wider'
                    >
                      Tên
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-blue uppercase tracking-wider'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-blue uppercase tracking-wider'
                    >
                      Tình Trạng
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-blue uppercase tracking-wider'
                    >
                      Phân Loại
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {filteredTransactions.map((transaction, index) => (
                    <tr key={transaction.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{index + 1}</td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {transaction.id}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{transaction.time}</td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{transaction.date}</td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{transaction.service}</td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{transaction.amount}</td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0 h-10 w-10'>
                            <img className='h-10 w-10 rounded-full' src={transaction.image} alt='' />
                          </div>
                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-900'>{transaction.user}</div>
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{transaction.email}</td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            transaction.status === 'Hủy giao dịch'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-green-100 text-green-800'
                          }`}
                        >
                          {transaction.status}
                        </span>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            transaction.result === 'Hoàn tiền'
                              ? 'border border-red-600 text-blue'
                              : 'border border-green-600 text-blue'
                          }`}
                        >
                          {transaction.result}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
