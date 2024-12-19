import React, { useEffect, useState } from 'react'
import UserList from './UserList'
import EditUserForm from './UserEditForm'
import Pagination from './Pagination'
import { fetchUsers, updateUser, deleteUser } from '../../services/api'
import './UserList.css'

function UserManagement({ token }) {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [editingUser, setEditingUser] = useState(null)

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data, total_pages } = await fetchUsers(page)
        setUsers(data)
        setTotalPages(total_pages)
      } catch (error) {
        alert('Failed to fetch users.')
      }
    }
    getUsers()
  }, [page])

  const handleUpdateUser = async (id, updatedUser) => {
    try {
      await updateUser(id, updatedUser)
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id ? { ...user, ...updatedUser } : user
        )
      )
      setEditingUser(null)
    } catch (error) {
      alert('Failed to update user.')
    }
  }

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id)
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id))
    } catch (error) {
      alert('Failed to delete user.')
    }
  }

  return (
    <div>
      <h1>User Management</h1>
      <UserList
        users={users}
        onEdit={setEditingUser}
        onDelete={handleDeleteUser}
      />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
      {editingUser && (
        <EditUserForm
          user={editingUser}
          onSave={(updatedUser) =>
            handleUpdateUser(editingUser.id, updatedUser)
          }
          onCancel={() => setEditingUser(null)}
        />
      )}
    </div>
  )
}

export default UserManagement
