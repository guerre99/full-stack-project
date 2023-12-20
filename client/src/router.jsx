import {
  createBrowserRouter,
  RouterProvider as RouterProviderRRD,
} from 'react-router-dom'

import RootLayout from 'layouts/RootLayout'
import ErrorPage from 'pages/ErrorPage'
import TemplatePage from './pages/TemplatePage'
import EventsPage from './pages/EventsPage'
import AddEventPage from './pages/AddEventPage'
// import EditCustomerPage from './pages/EditCustomerPage'
import LoginPage from './pages/LoginPage'
import LogoutPage from './pages/LogoutPage'
import RegisterPage from './pages/RegisterPage'
import ProtectedRoute from './utils/ProtectedRoute'
import VehiclesPage from './pages/VehiclesPage'
import EditVehiclePage from './pages/EditVehiclePage'
import NewVehiclePage from './pages/NewVehiclePage'
import UsersPage from './pages/UsersPage'
import EventPage from './pages/EventPage'

const WorkdaysPage = () => <h1>Babieca</h1>

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <ProtectedRoute page={EventsPage} role="auth" />,
      },
      {
        path: '/events',
        element: <ProtectedRoute page={EventsPage} role="auth" />,
      },
      {
        path: '/events/:eventId',
        element: <ProtectedRoute page={EventPage} role="auth" />,
      },
      {
        path: '/event/new',
        element: <ProtectedRoute page={AddEventPage} role="admin" />,
      },
      {
        path: '/event/edit/:eventId',
        element:
          /* <ProtectedRoute page={EditCustomerPage} role="admin" /> */ null,
      },
      {
        path: '/vehicles',
        element: <ProtectedRoute page={VehiclesPage} role="auth" />,
      },
      {
        path: '/vehicle/new',
        element: <ProtectedRoute page={NewVehiclePage} role="auth" />,
      },
      {
        path: '/vehicle/edit/:vehicleId',
        element: <ProtectedRoute page={EditVehiclePage} role="auth" />,
      },
      {
        path: '/users',
        element: <ProtectedRoute page={UsersPage} role="admin" />,
      },
      {
        path: '/login',
        element: <ProtectedRoute page={LoginPage} role="anonymous" />,
      },
      {
        path: '/register',
        element: <ProtectedRoute page={RegisterPage} role="anonymous" />,
      },
      {
        path: '/logout',
        element: <ProtectedRoute page={LogoutPage} role="auth" />,
      },
    ],
  },
])

const RouterProvider = ({ children }) => <RouterProviderRRD router={router} />

export default RouterProvider
