import { useRoutes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DichVuPage from './pages/DichVuPage'
import LienHePage from './pages/LienHePage'
import ChinhSachPage from './pages/ChinhSachPage'
import VeStarotPage from './pages/VeStarotPage'

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
    }
  ])
  return routeElements
}
