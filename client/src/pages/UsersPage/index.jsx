import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography, CircularProgress } from '@mui/material'
import { Add } from '@mui/icons-material'
import { Table } from 'src/components'
import { useState } from 'react'
import { useUsers } from 'hooks'
import userService from 'src/services/user-service'

function UsersPage() {
  const [lista, setLista] = useState(false)

  const { users, loading, errors, setUsers } = useUsers()

  const handleDelete = ({ _id: UserIdToDelete }) =>
    userService
      .delete(UserIdToDelete)
      .then(() => setUsers(users.filter((user) => user._id !== UserIdToDelete)))
      .catch((err) => {
        if (err.response.status === 400)
          setErrorsFromResponse(err.response.data)
      })

  if (loading) return <CircularProgress />

  console.log(users)

  return (
    <Stack spacing={3}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h2" component="h2">
          Lista de clientes
        </Typography>
      </Stack>

      <Table
        columns={[
          {
            label: 'Username',
            path: 'username',
          },
          {
            label: 'Email',
            path: 'email',
          },
        ]}
        rows={users}
        onDelete={handleDelete}
      />
    </Stack>
  )
}
export default UsersPage
