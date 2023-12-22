import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from 'hooks'
import { AppBar, Toolbar, Typography, Container } from '@mui/material'
import { Navbar } from 'components'
import { ToastContainer } from 'react-toastify'

function RootLayout() {
  const [user] = useAuth()

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 5, flex: 1 }}>
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
      <AppBar position="static" color="primary" component="footer">
        <Container>
          <Toolbar>
            <Typography variant="body2" color="inherit">
              Tu token de invitación es: {user.id}
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default RootLayout
