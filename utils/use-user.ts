import { User, useUI } from '../components/ui/context'

type UseUserReturn = {
  user: User
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUser: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toggleUserLikedRepositories: any
}

export const useUser = (): UseUserReturn => {
  const { user, setUser, toggleUserLikedRepositories } = useUI()

  return {
    user,
    setUser,
    toggleUserLikedRepositories,
  }
}
