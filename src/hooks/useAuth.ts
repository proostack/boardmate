import { useMutation } from '@apollo/client';
import { useEffect } from 'react'

const useAuth = (callback: () => void, mutationType: any) => {
  const [fireMutation, { data, loading, error, called }] = useMutation(mutationType);

  useEffect(() => {
    if (called && !loading) {
      if (error) {
        console.log(error)
      }
      else {
        callback()
      }
    }
  }, [loading, called])
  return ({
    called, error, loading, fireMutation, data
  })
}

export default useAuth