import React, { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useRepositories } from '../../../utils/use-repositories'
import LanguagePicker from '../LanguagePicker'
import GithubRepositoryListElement from './GithubRepositoryListElement'

type GithubRepositoryListProps = {
  pageIndex: number
  pageSize: number
}

const GithubRepositoryList: FC<GithubRepositoryListProps> = ({ pageIndex, pageSize }) => {
  const { t } = useTranslation('common')
  const [language, setLanguage] = useState<string | undefined>()
  const { data: repositories, isError } = useRepositories({ pageIndex, pageSize, language })

  if (isError) {
    return (
      <div className="flex flex-col bg-red-300">
        <span>{t('errorFetching')}:</span>
        <div>{isError.message}</div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <LanguagePicker value={language} onChange={(language) => setLanguage(language)} />
      {repositories &&
        Array.isArray(repositories.items) &&
        repositories.items.map((githubRepository) => (
          <GithubRepositoryListElement
            key={githubRepository.id}
            githubRepository={githubRepository}
          />
        ))}
    </div>
  )
}

export default GithubRepositoryList
