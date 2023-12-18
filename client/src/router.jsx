import {
  createBrowserRouter,
  RouterProvider as RouterProviderRRD,
} from 'react-router-dom'

import RootLayout from 'layouts/RootLayout'
import ErrorPage from 'pages/ErrorPage'
import TemplatePage from './pages/TemplatePage'
import CustomersPage from './pages/CustomersPage'
// import AddCustomerPage from './pages/AddCustomerPage'
// import EditCustomerPage from './pages/EditCustomerPage'
// import LoginPage from './pages/LoginPage'
// import LogoutPage from './pages/LogoutPage'
// import RegisterPage from './pages/RegisterPage'
// import ProtectedRoute from './utils/ProtectedRoute'

const WorkdaysPage = () => <h1>Babieca</h1>

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: (
          /*  <ProtectedRoute page={WorkdaysPage} role="auth" />, */ <CustomersPage />
        ),
      },
      {
        path: '/customers',
        element:
          null /* <ProtectedRoute page={CustomersPage} role="admin" />, */,
      },
      {
        path: '/customer/new',
        element:
          /* <ProtectedRoute page={AddCustomerPage} role="admin" /> */ null,
      },
      {
        path: '/customer/edit/:customerId',
        element:
          /* <ProtectedRoute page={EditCustomerPage} role="admin" /> */ null,
      },
      {
        path: '/login',
        element:
          /* <ProtectedRoute page={LoginPage} role="anonymous" />, */ null,
      },
      {
        path: '/register',
        element:
          /* <ProtectedRoute page={RegisterPage} role="anonymous" />, */ null,
      },
      {
        path: '/logout',
        element: /* <ProtectedRoute page={LogoutPage} role="auth" />, */ null,
      },
    ],
  },
])

const RouterProvider = ({ children }) => <RouterProviderRRD router={router} />

export default RouterProvider
