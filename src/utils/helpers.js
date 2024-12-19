export const formatUserName = (firstName, lastName) =>
  `${firstName} ${lastName}`

export const handleApiError = (error) => {
  console.error('API Error:', error)
  return error.response?.data?.error || 'An unknown error occurred.'
}
