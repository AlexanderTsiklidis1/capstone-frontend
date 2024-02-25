
import {
  Navigate,
  Route
} from 'react-router-dom'

const PublicRoute = ({ element: Component, currentUser, setCurrentUser }) => {
  return !currentUser ? <Component setCurrentUser={setCurrentUser} /> : <Navigate to={`/users/${currentUser.id}/profile`} />
}

export default PublicRoute
