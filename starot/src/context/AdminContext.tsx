import { createContext, useState, useContext, ReactNode, useEffect } from 'react'
import { Admin } from '../types/Admin.type'

interface AdminContextProps {
  admin: Admin | null
  setAdmin: (admin: Admin | null) => void
}

const AdminContext = createContext<AdminContextProps | undefined>(undefined)

// eslint-disable-next-line react-refresh/only-export-components
export const useAdmin = () => {
  const context = useContext(AdminContext)
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider')
  }
  return context
}

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [admin, setAdmin] = useState<Admin | null>(null)

  useEffect(() => {
    const storedAdmin = localStorage.getItem('admin')
    if (storedAdmin) {
      setAdmin(JSON.parse(storedAdmin))
    }
  }, [])

  useEffect(() => {
    if (admin) {
      localStorage.setItem('admin', JSON.stringify(admin))
    } else {
      localStorage.removeItem('admin')
    }
  }, [admin])

  return <AdminContext.Provider value={{ admin, setAdmin }}>{children}</AdminContext.Provider>
}
