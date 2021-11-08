import React, { FC, useCallback, useMemo, useReducer } from 'react'
import { GithubRepository } from '../../types/Github'

export type User = {
  likedGithubRepositories: GithubRepository[]
}

export interface State {
  user: User
}

const initialState = {
  user: { likedGithubRepositories: [] },
}

type Action =
  | {
      type: 'SET_USER'
      value: User
    }
  | {
      type: 'TOGGLE_USER_LIKED_REPOSITORIES'
      value: GithubRepository
    }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UIContext = React.createContext<State | any>(initialState)

UIContext.displayName = 'UIContext'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case 'SET_USER': {
      return {
        ...state,
        user: action.value,
      }
    }
    case 'TOGGLE_USER_LIKED_REPOSITORIES': {
      if (
        state.user.likedGithubRepositories.filter(
          (likedRepository) => likedRepository.id === action.value.id
        ).length > 0
      ) {
        return {
          ...state,
          user: {
            likedGithubRepositories: [
              ...state.user.likedGithubRepositories.filter(
                (repository) => repository.id != action.value.id
              ),
            ],
          },
        }
      } else {
        return {
          ...state,
          user: { likedGithubRepositories: [...state.user.likedGithubRepositories, action.value] },
        }
      }
    }
  }
}

export const UIProvider: FC = (props) => {
  const [state, dispatch] = useReducer(uiReducer, initialState)

  const setUser = useCallback((value: User) => dispatch({ type: 'SET_USER', value }), [dispatch])

  const toggleUserLikedRepositories = useCallback(
    (value: GithubRepository) => dispatch({ type: 'TOGGLE_USER_LIKED_REPOSITORIES', value }),
    [dispatch]
  )

  const value = useMemo(
    () => ({
      ...state,
      setUser,
      toggleUserLikedRepositories,
    }),
    // we dont need to check for the setters, so just ignore the exhaustive-deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state]
  )

  return <UIContext.Provider value={value} {...props} />
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useUI = (): any => {
  const context = React.useContext(UIContext)
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`)
  }
  return context
}

export const ManagedUIContext: FC = ({ children }) => <UIProvider>{children}</UIProvider>
