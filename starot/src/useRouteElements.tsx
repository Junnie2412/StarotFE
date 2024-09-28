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

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/dich-vu',
      element: <DichVuPage />
    },
    {
      path: '/lien-he',
      element: <LienHePage />
    },
    {
      path: '/chinh-sach',
      element: <ChinhSachPage />
    },
    {
      path: '/ve-starot',
      element: <VeStarotPage />
    },
    {
      path: '/tram-chua-lanh',
      element: <BoiBaiPage />
    },
    {
      path: '/tram-chua-lanh/tinh-yeu',
      element: <TinhYeuPage />
    },
    {
      path: '/tram-chua-lanh/cong-viec',
      element: <CongViecPage />
    },
    {
      path: '/tram-chua-lanh/suc-khoe',
      element: <SucKhoePage />
    },
    {
      path: '/tram-chua-lanh/tinh-yeu/ket-qua/:id',
      element: <TinhYeuKetQuaPage />
    }
  ])
  return routeElements
}
