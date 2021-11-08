// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetcher = async (url: string): Promise<any> => {
  const res = await fetch(url)

  if (!res.ok) {
    const githubApiError = await res.json()
    const error = new Error(githubApiError?.message)
    throw error
  }

  return res.json()
}
