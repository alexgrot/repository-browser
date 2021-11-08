import React, { FC, useState } from 'react'
import { GithubRepository } from '../../../types/Github'
import { Star, Favorite } from 'grommet-icons'
import { useUser } from '../../../utils/use-user'

type GithubRepositoryProps = {
  githubRepository: GithubRepository
}

const GithubRepositoryListElement: FC<GithubRepositoryProps> = ({ githubRepository }) => {
  const { user, toggleUserLikedRepositories } = useUser()
  const [like, setLike] = useState(
    user.likedGithubRepositories.filter(
      (likedRepository) => likedRepository.id === githubRepository.id
    ).length > 0
  )

  const handleClickedLike = (): void => {
    setLike(!like)
    toggleUserLikedRepositories(githubRepository)
  }

  return (
    <div className="flex flex-row items-center justify-between p-4 border rounded gap-4">
      <div>
        <a href={githubRepository.html_url} target="_blank" rel="noreferrer">
          <span>
            {githubRepository?.owner?.login} / {githubRepository.name}
          </span>
        </a>
      </div>

      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-row items-center px-2 py-1 border rounded gap-2 w-min">
          <Star size="18px" />
          <span>|</span>
          {githubRepository.stargazers_count}
        </div>

        <Favorite onClick={() => handleClickedLike()} color={like ? 'red' : 'grey'} />
      </div>
    </div>
  )
}

export default GithubRepositoryListElement
