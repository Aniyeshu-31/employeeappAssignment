import axios from 'axios'

const BASE_URL = 'https://reqres.in/api'

export const login = async (email, password) => {
  const response = await axios.post(`${BASE_URL}/login`, { email, password })
  return response.data.token
}

export const fetchUsers = async (page) => {
  const response = await axios.get(`${BASE_URL}/users?page=${page}`)
  return response.data
}

export const updateUser = async (id, updatedUser) => {
  await axios.put(`${BASE_URL}/users/${id}`, updatedUser)
}

export const deleteUser = async (id) => {
  await axios.delete(`${BASE_URL}/users/${id}`)
}
