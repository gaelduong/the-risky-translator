import { matchRoutes, useLocation } from 'react-router-dom'

export const useCurrentPath = () => {
  // town routes
  const routes = [{ path: '/town/:id' }]

  const location = useLocation()
  const result = matchRoutes(routes, location)
  if (!result) return location.pathname

  const [{ route }] = result
  return route.path
}
