import { NavLink } from 'react-router-dom'
import { Typography } from '@mui/material'

import DriveEtaIcon from '@mui/icons-material/DriveEta'
function Brand() {
  return (
    <>
      <DriveEtaIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component={NavLink}
        sx={{
          mr: 2,

          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.1rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        BABIECA
      </Typography>
    </>
  )
}
export default Brand
