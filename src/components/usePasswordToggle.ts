import { useCallback, useState } from 'react'

const usePasswordToggle = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true)
  const [type, setType] = useState('password')

  const handlePasswordVisibility = useCallback(() => {
    if (type === 'password') {
      setType('text')
      setPasswordVisibility(!passwordVisibility)
    } else if (type === 'text') {
      setType('password')
      setPasswordVisibility(!passwordVisibility)
    }
  }, [passwordVisibility, type, setPasswordVisibility, setType])

  return {
    type,
    passwordVisibility,
    handlePasswordVisibility,
  }
}

export default usePasswordToggle
