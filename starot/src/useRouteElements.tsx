import { useRoutes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DichVuPage from './pages/DichVuPage'
import LienHePage from './pages/LienHePage'
import ChinhSachPage from './pages/ChinhSachPage'
import VeStarotPage from './pages/VeStarotPage'
import BoiBaiPage from './pages/BoiBaiPage'
import TinhYeuPage from './pages/TinhYeuPage/TinhYeuPage'
import CongViecPage from './pages/CongViecPage'
import SucKhoePage from './pages/SucKhoePage'
import TinhYeuKetQuaPage from './pages/TinhYeuPage/TinhYeuKetQuaPage'
import CongViecKetQuaPage from './pages/CongViecPage/CongViecKetQuaPage'
import SucKhoeKetQuaPage from './pages/SucKhoePage/SucKhoeKetQuaPage'
import AdminLoginPage from './pages/AdminPage/AdminLoginPage'
import ThongKePage from './pages/AdminPage/ThongKePage/ThongKePage'
import QuanLiDichVuPage from './pages/AdminPage/QuanLiDichVuPage/QuanLiDichVuPage'
import QuanLiTaiKhoanPage from './pages/AdminPage/QuanLiTaiKhoanPage/QuanLiTaiKhoanPage'
import QuanLiCuaHangPage from './pages/AdminPage/QuanLiCuaHangPage/QuanLiCuaHangPage'
import QuanLiGiaoDichPage from './pages/AdminPage/QuanLiGiaoDichPage/QuanLiGiaoDichPage'
import LichSuDichVuPage from './pages/AdminPage/QuanLiDichVuPage/LichSuDichVuPage'
import LichSuCuaHangPage from './pages/AdminPage/QuanLiCuaHangPage/LichSuCuaHangPage'
import { usePageTitle } from './hook/usePageTitle'
import BlogPage from './pages/BlogsPage/Blogs'
import BlogBai1Page from './pages/BlogsPage/BlogBai1page/BlogBai1'
import BlogBai2Page from './pages/BlogsPage/BlogBai2Page/BlogBai2'
import BlogBai3Page from './pages/BlogsPage/BlogBai3Page/BlogBai3'
import BlogBai4Page from './pages/BlogsPage/BlogBai4Page/BlogBai4'
import BlogBai5Page from './pages/BlogsPage/BlogBai5Page/BlogBai5'

export default function useRouteElements() {
  usePageTitle()

  const routeElements = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/dich-vu', element: <DichVuPage /> },
    { path: '/lien-he', element: <LienHePage /> },
    { path: '/chinh-sach', element: <ChinhSachPage /> },
    { path: '/ve-starot', element: <VeStarotPage /> },
    { path: '/blog', element: <BlogPage /> },
    { path: '/blog/bai1', element: <BlogBai1Page /> },
    { path: '/blog/bai2', element: <BlogBai2Page /> },
    { path: '/blog/bai3', element: <BlogBai3Page /> },
    { path: '/blog/bai4', element: <BlogBai4Page /> },
    { path: '/blog/bai5', element: <BlogBai5Page /> },
    { path: '/tram-chua-lanh', element: <BoiBaiPage /> },
    { path: '/tram-chua-lanh/tinh-yeu', element: <TinhYeuPage /> },
    { path: '/tram-chua-lanh/cong-viec', element: <CongViecPage /> },
    { path: '/tram-chua-lanh/suc-khoe', element: <SucKhoePage /> },
    { path: '/tram-chua-lanh/tinh-yeu/ket-qua/:id', element: <TinhYeuKetQuaPage /> },
    { path: '/tram-chua-lanh/cong-viec/ket-qua/:id', element: <CongViecKetQuaPage /> },
    { path: '/tram-chua-lanh/suc-khoe/ket-qua/:id', element: <SucKhoeKetQuaPage /> },
    { path: '/admin', element: <AdminLoginPage /> },
    { path: '/admin/thong-ke', element: <ThongKePage /> },
    { path: '/admin/quan-li-dich-vu', element: <QuanLiDichVuPage /> },
    { path: '/admin/quan-li-tai-khoan', element: <QuanLiTaiKhoanPage /> },
    { path: '/admin/quan-li-cua-hang', element: <QuanLiCuaHangPage /> },
    { path: '/admin/quan-li-giao-dich', element: <QuanLiGiaoDichPage /> },
    { path: '/admin/quan-li-dich-vu/lich-su-dich-vu', element: <LichSuDichVuPage /> },
    { path: '/admin/quan-li-cua-hang/lich-su-cua-hang', element: <LichSuCuaHangPage /> }
  ])

  return routeElements
}
