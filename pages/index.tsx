import type { NextPage, GetStaticProps } from 'next'
import Container from '../components/ui/Container'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import GithubRepositoryList from '../components/github/GithubRepositoryList'
import { useState } from 'react'
import Pagination from '../components/ui/Pagination'
import { useTranslation } from 'react-i18next'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}

const Home: NextPage = (): JSX.Element => {
  const [pageIndex, setPageIndex] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const { t } = useTranslation('common')

  return (
    <Container className="flex flex-col py-8 gap-4">
      <h1 className="text-2xl font-bold">{t('githubRepositories')}</h1>
      <Pagination
        onClickNext={() => setPageIndex(pageIndex + 1)}
        onClickPrevious={() => setPageIndex(pageIndex - 1)}
        onChangePageSize={(newPageSize) => setPageSize(newPageSize)}
        pageSize={pageSize}
        currentPage={pageIndex}
      />

      <GithubRepositoryList pageIndex={pageIndex} pageSize={pageSize} />
      {/* do request on next page but hide result, so the result will be cached and instantly there if user clicks next: https://swr.vercel.app/docs/pagination  */}
      <div style={{ display: 'none' }}>
        <GithubRepositoryList pageIndex={pageIndex + 1} pageSize={pageSize} />
      </div>
    </Container>
  )
}

export default Home
