import { DocumentNode, useMutation } from '@apollo/client';
import { loginDataType, ReturnAuth } from '../types/generalTypes';

const useAuth = (
  callback: (data: loginDataType) => void,
  mutationType: DocumentNode): ReturnAuth => {
  const [fireMutation, { data, loading, error, called }] = useMutation(mutationType);
  if (called && !loading) {
    callback(data)
  }
  return ({
    called,
    error,
    loading,
    fireMutation,
    data
  })
}

export default useAuth