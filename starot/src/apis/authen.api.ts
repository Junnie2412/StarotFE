export interface LoginResponse {
  status: number
  message: string
  data: {
    token: string
    refreshToken: string
  }
}

export async function login(email: string, password: string): Promise<LoginResponse | null> {
  const apiUrl = 'https://exestarotapi20241021202520.azurewebsites.net/api/auth/login'

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Email: email,
        Password: password
      })
    })

    if (!response.ok) {
      const errorResponse = await response.json()
      throw new Error(errorResponse.message || 'Login failed')
    }

    const result: LoginResponse = await response.json()
    return result
  } catch (error) {
    console.error('Error during login:', error)
    return null
  }
}
