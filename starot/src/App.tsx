import { useLocation } from 'react-router-dom'
import useRouteElements from './useRouteElements'

function App() {
  const routeElements = useRouteElements()
  const location = useLocation()

  const showHeaderAdmin = location.pathname.startsWith('/admin')

  return (
    <>
      {showHeaderAdmin}
      {routeElements}
    </>
  )
}

export default App
