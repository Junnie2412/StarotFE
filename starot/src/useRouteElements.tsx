import { useRoutes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DichVuPage from './pages/DichVuPage'
import LienHePage from './pages/LienHePage'
import ChinhSachPage from './pages/ChinhSachPage'
import VeStarotPage from './pages/VeStarotPage'
import MainLayout from './layouts/MainLayout'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/dich-vu',
      element: (
        <MainLayout>
          <DichVuPage />
        </MainLayout>
      )
    },
    {
      path: '/lien-he',
      element: (
        <MainLayout>
          <LienHePage />
        </MainLayout>
      )
    },
    {
      path: '/chinh-sach',
      element: (
        <MainLayout>
          <ChinhSachPage />
        </MainLayout>
      )
    },
    {
      path: '/ve-starot',
      element: (
        <MainLayout>
          <VeStarotPage />
        </MainLayout>
      )
    }
  ])
  return routeElements
}
