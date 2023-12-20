import { createContext, useContext, useReducer } from 'react'

import { getCurrentUser } from 'src/services/auth-service'

const user = getCurrentUser()

const initialValues = !user
  ? { auth: false }
  : user.isAdmin
  ? { auth: true, admin: true, username: user.username, id: user._id }
  : { auth: true, username: user.username, id: user._id }

const AuthContext = createContext(initialValues)
AuthContext.displayName = 'AuthContext'

function reducer(state, action) {
  switch (action.type) {
    case 'login':
      return { auth: true, username: action.username, id: action._id }

    case 'admin':
      return {
        auth: true,
        admin: true,
        username: action.username,
        id: action._id,
      }
    case 'logout':
      return { auth: false }

    default:
      throw Error('Unknown action.')
  }
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues)

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
