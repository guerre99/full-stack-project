import { Outlet } from 'react-router-dom'

import { useAuth } from 'hooks'

import { AppBar, Toolbar, Typography, Container } from '@mui/material'

import { Navbar } from 'components'
import { ToastContainer } from 'react-toastify'
function RootLayout() {
  const [user] = useAuth()
  return (
    <Container display="flex" maxWidth="xxl" disableGutters>
      <Navbar />

      <Container maxWidth="xl" sx={{ mt: 5 }}>
        <Outlet />
      </Container>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <AppBar position="static" color="primary">
        <Container>
          <Toolbar>
            <Typography variant="body2" color="inherit">
              Tu token de invitación es: {user.id}
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Container>
  )
}
export default RootLayout
