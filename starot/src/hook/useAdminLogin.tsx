import { useEffect, useState } from 'react'
import { NavigateFunction } from 'react-router-dom'
import { Admin } from '../types/Admin.type'
import { fetchAdmins } from '../firebase'

export const useAdminLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [admins, setAdmins] = useState<Admin[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAdmins()
        setAdmins(data)
      } catch (error) {
        console.error('Error fetching admins:', error)
      }
    }

    fetchData()
  }, [])

  const handleLogin = (navigate: NavigateFunction, setAdminData: (data: Admin) => void) => {
    setIsLoading(true)
    setError('')

    const matchingAdmin = admins.find((admin) => admin.Gmail === email && admin.Password === password)

    if (matchingAdmin) {
      setAdminData(matchingAdmin) // Store admin data in context
      navigate('/admin/thong-ke', { state: { admin: matchingAdmin } })
    } else {
      setError('Invalid email or password')
    }

    setIsLoading(false)
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    isLoading,
    handleLogin
  }
}
