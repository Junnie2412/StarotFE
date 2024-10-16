import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../apis/authen.api'
import { useAdmin } from '../../context/AdminContext'
import axios from 'axios'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { setAdmin } = useAdmin()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const loginResponse = await login(email, password)

      if (loginResponse && loginResponse.status === 200) {
        const { token, refreshToken } = loginResponse.data

        localStorage.setItem('token', token)
        localStorage.setItem('refreshToken', refreshToken)

        const userResponse = await axios.get('https://exestarotapi20241007212754.azurewebsites.net/api/v1/user/info', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        if (userResponse && userResponse.status === 200) {
          const userData = userResponse.data.data

          setAdmin(userData)
          navigate('/admin/thong-ke')
        } else {
          setError('Failed to fetch user data')
        }
      } else {
        setError('Invalid email or password')
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
      console.error('Login error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md bg-white rounded-lg shadow-md p-8'>
        <h2 className='text-2xl font-bold text-center mb-4'>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
              Email
            </label>
            <input
              id='email'
              type='email'
              placeholder='admin@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-2'>
              Password
            </label>
            <input
              id='password'
              type='password'
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          {error && <div className='mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded'>{error}</div>}
          <button
            type='submit'
            disabled={isLoading}
            className='w-full bg-blue text-white py-4 px-4 border rounded-md hover:bg-white hover:text-blue hover:border-blue focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50'
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}
