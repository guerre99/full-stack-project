import { useState } from 'react'

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  Avatar,
  Button,
  Tooltip,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

import { useAuth } from 'hooks'

import { stringAvatar } from './helpers'

import Brand from './Brand'
import { Menu, CollapseMenu } from '../../components'
function Navbar() {
  const [user] = useAuth()
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget)
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget)

  const optionsMainMenu = user.auth
    ? user.admin
      ? [
          { label: 'Eventos', to: '/events' },
          { label: 'Mis vehículos', to: '/vehicles' },
          { label: 'Usuarios', to: '/users' },
        ]
      : [
          { label: 'Eventos', to: '/events' },
          { label: 'Mis vehículos', to: '/vehicles' },
        ]
    : []

  const optionsUserMenu = user.auth
    ? [{ label: 'Logout', to: '/logout' }]
    : [
        { label: 'Login', to: '/login' },
        { label: 'Register', to: '/register' },
      ]

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Brand />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <CollapseMenu
              anchor={anchorElNav}
              onClose={() => setAnchorElNav(null)}
              options={optionsMainMenu}
            />
          </Box>

          <Menu
            options={optionsMainMenu}
            onClose={() => setAnchorElNav(null)}
          />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  {...stringAvatar(
                    !user.auth
                      ? 'John Doe'
                      : user.username.toUpperCase() + ' ' + 'V'
                  )}
                />
              </IconButton>
            </Tooltip>
            <CollapseMenu
              anchor={anchorElUser}
              onClose={() => setAnchorElUser(null)}
              options={optionsUserMenu}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Navbar
