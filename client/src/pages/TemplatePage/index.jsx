import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography, CircularProgress } from '@mui/material'
import { Add } from '@mui/icons-material'
import { Map } from 'components'

function TemplatePage() {
  return (
    <Stack spacing={3}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h2" component="h2">
          Entity
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          startIcon={<Add />}
          component={Link}
          to="/"
        >
          New Entity
        </Button>
      </Stack>
      <Map />
    </Stack>
  )
}
export default TemplatePage
