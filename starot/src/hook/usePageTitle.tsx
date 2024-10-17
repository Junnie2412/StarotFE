import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function usePageTitle() {
  const location = useLocation()

  useEffect(() => {
    const pathToTitleMap: { [key: string]: string } = {
      '/': 'Home - Starot',
      '/dich-vu': 'Dịch Vụ - Starot',
      '/lien-he': 'Liên Hệ - Starot',
      '/chinh-sach': 'Chính Sách - Starot',
      '/ve-starot': 'Về Starot - Starot',
      '/blog': 'Blog - Starot',
      '/blog/bai1': 'Blog - Bai1 - Starot',
      '/blog/bai2': 'Blog - Bai2 - Starot',
      '/blog/bai3': 'Blog - Bai3 - Starot',
      '/blog/bai4': 'Blog - Bai4 - Starot',
      '/blog/bai5': 'Blog - Bai5 - Starot',
      '/tram-chua-lanh': 'Trạm Chữa Lành - Starot',
      '/tram-chua-lanh/tinh-yeu': 'Tình Yêu - Starot',
      '/tram-chua-lanh/cong-viec': 'Công Việc - Starot',
      '/tram-chua-lanh/suc-khoe': 'Sức Khỏe - Starot',
      '/admin': 'Admin - Starot',
      '/admin/thong-ke': 'Thống Kê - Starot',
      '/admin/quan-li-dich-vu': 'Quản Lí Dịch Vụ - Starot',
      '/admin/quan-li-tai-khoan': 'Quản Lí Tài Khoản - Starot',
      '/admin/quan-li-cua-hang': 'Quản Lí Cửa Hàng - Starot',
      '/admin/quan-li-giao-dich': 'Quản Lí Giao Dịch - Starot'
    }

    const getTitleForPathname = (pathname: string) => {
      if (pathname.startsWith('/tram-chua-lanh/tinh-yeu/ket-qua')) {
        return 'Kết Quả Tình Yêu - Starot'
      }
      if (pathname.startsWith('/tram-chua-lanh/cong-viec/ket-qua')) {
        return 'Kết Quả Công Việc - Starot'
      }
      if (pathname.startsWith('/tram-chua-lanh/suc-khoe/ket-qua')) {
        return 'Kết Quả Sức Khỏe - Starot'
      }
      return pathToTitleMap[pathname] || 'Starot'
    }

    const title = getTitleForPathname(location.pathname)
    document.title = title
  }, [location])
}
