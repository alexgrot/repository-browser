/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react'
import Link from 'next/link'
import Container from '../../ui/Container'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/dist/client/router'

const Header: FC = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  return (
    <Container className="flex flex-row justify-between py-8 text-white bg-primary">
      <div className="flex flex-row gap-4">
        <Link href="/">
          <a className="text-white">{t('repositories')}</a>
        </Link>
        <span className="cursor-default"> | </span>
        <Link href="/favorites">
          <a>{t('favorites')}</a>
        </Link>
      </div>
      <div>
        <select
          className="px-4 py-2 text-black"
          onChange={(event) =>
            router.push(router.asPath, undefined, { locale: event.target.value, shallow: true })
          }
          value={router.locale}
        >
          <option value="de">{t('german')}</option>
          <option value="en">{t('english')}</option>
        </select>
      </div>
    </Container>
  )
}

export default Header
