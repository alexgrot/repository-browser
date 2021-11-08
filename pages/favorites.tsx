import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import GithubRepositoryListElement from '../components/github/GithubRepositoryList/GithubRepositoryListElement'
import Container from '../components/ui/Container'
import { useUser } from '../utils/use-user'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

const Home: NextPage = (): JSX.Element => {
  const { user } = useUser()
  const { t } = useTranslation('common')

  return (
    <Container className="flex flex-col py-8 gap-4">
      <h1 className="text-2xl font-bold">{t('favoriteRepositories')}</h1>
      {user.likedGithubRepositories.length > 0 ? (
        user.likedGithubRepositories.map((repository) => (
          <GithubRepositoryListElement key={repository.id} githubRepository={repository} />
        ))
      ) : (
        <div>{t('noFavoriteRepositories')}</div>
      )}
    </Container>
  )
}

export default Home
