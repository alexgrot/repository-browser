import useSWR from 'swr'
import { GithubRepositoriesHook, GithubRepositoriesResponse } from '../types/Github'
import { fetcher } from './fetcher'

type UseRepositoriesInput = {
  pageIndex: number
  pageSize: number
  language: string | undefined
}

export function useRepositories({
  pageIndex,
  pageSize,
  language,
}: UseRepositoriesInput): GithubRepositoriesHook {
  const { data, error } = useSWR<GithubRepositoriesResponse>(
    `https://api.github.com/search/repositories?q=created:%3E2017-01-10+language:${
      language ? language : ''
    }&sort=stars&order=desc&per_page=${pageSize}&page=${pageIndex}`,
    fetcher
  )

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}
